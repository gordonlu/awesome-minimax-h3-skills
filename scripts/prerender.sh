#!/usr/bin/env bash
# Pre-render the site to static HTML snapshots so crawlers get full content
# in the initial HTML (SEO). Run after any change to code or content.
#
#   bash scripts/prerender.sh
#
# Outputs (committed to the repo; Cloudflare Pages serves these directly):
#   /index.html  /anthology/index.html  /skill/<slug>/index.html
#   /en/index.html  /en/anthology/index.html  /en/skill/<slug>/index.html
set -euo pipefail
cd "$(dirname "$0")/.."

PORT=8037
ROOT="$PWD"
TMP="$(mktemp -d)"
SITE_VERSION="20260831b"
trap 'rm -rf "$TMP"' EXIT

# ── Step 1: Extract skill metadata to JSON for post-processing ─────────
node -e '
global.window = {};
require("./data/skills.js");
var skills = window.AMHS_DATA.skills;
var out = skills.map(function(s) {
  return {
    slug: s.slug,
    name: s.name || "",
    nameZh: s.nameZh || s.name || "",
    summary: s.summary || {},
    description: s.description || {},
    sourceType: s.sourceType || "community",
    categories: s.categories || [],
    tags: (s.tags || []).map(function(t) { return t.en || t.zh || ""; }),
    preview: s.preview || null,
    modes: (s.modes || []).map(function(m) { return m.id; }),
    foundation: !!s.foundation,
    author: s.author || {}
  };
});
process.stdout.write(JSON.stringify(out));
' > "$TMP/skills_meta.json"
echo "Extracted $(python3 -c "import json; print(len(json.load(open('$TMP/skills_meta.json'))))")" skill metadata entries

# ── Step 1b: Stamp unified version on root index.html before serving ───
sed -i 's/?v=[0-9]\+[a-z]*\b/?v='"$SITE_VERSION"'/g' "$ROOT/index.html"

# ── Step 2: Start local HTTP server ────────────────────────────────────
cat > "$TMP/spa_server.py" <<'PYEOF'
import http.server, os, sys, threading, re
os.chdir(sys.argv[1])
def clean(html):
    html = re.sub(r'\sstyle="translate: none; rotate: none; scale: none;[^"]*"', '', html)
    html = re.sub(r'\sstyle="opacity: 0;"', '', html)
    html = re.sub(r'\sdata-bound="1"', '', html)
    return html
class H(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        path = self.path.split('?')[0]
        if not os.path.isfile(path.lstrip('/')):
            self.path = '/index.html'
        elif path == '/index.html':
            raw = open(path.lstrip('/'), encoding='utf-8').read()
            body = clean(raw).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'text/html')
            self.send_header('Content-Length', str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        return super().do_GET()
    def log_message(self, *a): pass
srv = http.server.HTTPServer(('127.0.0.1', int(sys.argv[2])), H)
threading.Thread(target=srv.serve_forever, daemon=True).start()
import time; time.sleep(1000)
PYEOF
python3 "$TMP/spa_server.py" "$ROOT" "$PORT" &
SRV=$!
sleep 1.2

# ── Step 3: Collect URLs to render ─────────────────────────────────────
urls=("/" "/anthology")
while IFS= read -r slug; do
  [ -n "$slug" ] && urls+=("/skill/$slug")
done < <(node -e '
  global.window = {};
  require("'"$ROOT"'/data/skills.js");
  window.AMHS_DATA.skills.forEach(function (s) { console.log(s.slug); });
')

# ── Step 4: Render each page with Chrome headless ──────────────────────
mkdir -p "$TMP/out"
fail=0
for u in "${urls[@]}"; do
  if [ "$u" = "/" ]; then
    dest="$TMP/out/index.html"
    rel="index.html"
  elif [ "$u" = "/anthology" ]; then
    dest="$TMP/out/anthology/index.html"
    rel="anthology/index.html"
  else
    slug="${u#/skill/}"
    dest="$TMP/out/skill/$slug/index.html"
    rel="skill/$slug/index.html"
  fi
  mkdir -p "$(dirname "$dest")"
  google-chrome --headless=new --disable-gpu --no-sandbox \
    --virtual-time-budget=15000 --dump-dom "http://127.0.0.1:$PORT$u" 2>/dev/null \
    > "$dest"
  if [ ! -s "$dest" ] || [ "$(wc -c < "$dest")" -lt 500 ]; then
    echo "FAIL  $rel (empty/small)"
    fail=1
  elif ! grep -q '<html' "$dest"; then
    echo "FAIL  $rel (no html)"
    fail=1
  else
    echo "OK    $rel ($(wc -c < "$dest") bytes)"
  fi
done

kill "$SRV" 2>/dev/null || true

if [ "$fail" -eq 1 ]; then
  echo "prerender aborted: at least one snapshot failed." >&2
  exit 1
fi

# ── Step 5: Post-process all snapshots (SEO metadata injection) ────────
python3 - "$TMP" <<'PYEOF'
import re, sys, json, os
from pathlib import Path

TMP = Path(sys.argv[1])
ROOT = Path(os.environ.get("PWD", "."))
meta_file = TMP / "skills_meta.json"
skills = json.loads(meta_file.read_text()) if meta_file.exists() else []
slug_map = {s["slug"]: s for s in skills}

SITE = "https://h3skills.com"
BOOT = '<script>(function(){try{var l=localStorage.getItem("amhs-lang");if(l&&l!=="zh"){var s=document.createElement("style");s.id="boot-hide";s.textContent="body{visibility:hidden!important}";document.head.appendChild(s);setTimeout(function(){if(s.parentNode)s.parentNode.removeChild(s)},2500)}}catch(e){}})();</script>'

def xml_esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")

def get_skill_meta(slug):
    s = slug_map.get(slug)
    if not s:
        return None
    title_zh = s.get("nameZh") or s.get("name", "")
    title_en = s.get("name", "")
    desc_zh = s.get("summary", {}).get("zh", "") or s.get("summary", {}).get("en", "")
    desc_en = s.get("summary", {}).get("en", "") or s.get("summary", {}).get("zh", "")
    return {
        "slug": slug,
        "title_zh": title_zh,
        "title_en": title_en,
        "desc_zh": desc_zh[:160] if desc_zh else "",
        "desc_en": desc_en[:160] if desc_en else "",
        "poster": s.get("preview", {}).get("poster", "") if s.get("preview") else "",
        "video": s.get("preview", {}).get("video", "") if s.get("preview") else "",
        "source_type": s.get("sourceType", "community"),
        "modes": s.get("modes", []),
        "categories": s.get("categories", []),
        "tags": s.get("tags", []),
    }

def inject_seo(html, lang, page_type, slug=None):
    """Inject per-page SEO metadata into the <head>."""
    is_zh = lang == "zh"
    site_title = "MiniMax H3 提示词、Skills 与真实视频案例 | H3Skills" if is_zh else "MiniMax H3 Prompts, Skills & Real Video Examples | H3Skills"
    site_desc = "收录 42 个 MiniMax H3 Skills、真实视频案例与官方 Prompt 精选。先看到效果，再理解做法。" if is_zh else "42 MiniMax H3 skills with real output demos, curated prompts and workflows. See results first, then learn how."
    canonical = SITE + "/"
    page_title = site_title
    page_desc = site_desc
    og_title = site_title
    og_desc = site_desc
    og_image = f"{SITE}/og-cover.jpg"
    og_url = SITE + "/"
    lang_attr = "zh-CN" if is_zh else "en"
    ld_json = ""

    if slug:
        sm = get_skill_meta(slug)
        if sm:
            if is_zh:
                page_title = f"{sm['title_zh']} — MiniMax H3 Skill | H3Skills"
                page_desc = sm["desc_zh"] or site_desc
            else:
                page_title = f"{sm['title_en']} — MiniMax H3 Skill | H3Skills"
                page_desc = sm["desc_en"] or site_desc
            canonical = f"{SITE}/{'en/' if not is_zh else ''}skill/{slug}"
            og_title = page_title
            og_desc = page_desc
            og_url = canonical
            if sm["poster"]:
                og_image = f"{SITE}/og/{slug}.png"
            # VideoObject structured data
            if sm["video"]:
                vo = {
                    "@context": "https://schema.org",
                    "@type": "VideoObject",
                    "name": sm["title_zh"] if is_zh else sm["title_en"],
                    "description": sm["desc_zh"] if is_zh else sm["desc_en"],
                    "thumbnailUrl": f"{SITE}/{sm['poster']}" if sm["poster"] else "",
                    "contentUrl": f"{SITE}/{sm['video']}",
                    "uploadDate": "2026-08-27",
                    "duration": "PT15S",
                    "embedUrl": f"{SITE}/skill/{slug}",
                    "familyFriendly": True,
                }
                ld_json = json.dumps(vo, ensure_ascii=False)
    elif page_type == "anthology":
        if is_zh:
            page_title = "MiniMax H3 官方提示词精选 | H3Skills"
            page_desc = "从 MiniMax H3 官方使用手册中精选 49 条提示词示例，按场景分类，一键复制。"
        else:
            page_title = "MiniMax H3 Official Prompt Examples | H3Skills"
            page_desc = "49 curated prompt examples from the official MiniMax H3 handbook, categorized by scene, one-click copy."
        canonical = f"{SITE}/{'en/' if not is_zh else ''}anthology"
        og_title = page_title
        og_desc = page_desc
        og_url = canonical

    # Compute the English counterpart URL for hreflang
    en_prefix = "en/"
    path = f"skill/{slug}" if slug else ("anthology" if page_type == "anthology" else "")
    en_url = f"{SITE}/{en_prefix}{path}" if path else f"{SITE}/en/"
    zh_url = f"{SITE}/{path}" if path else f"{SITE}/"

    # Build hreflang tags (self + alternate + x-default)
    hreflang_tags = (
        f'\n  <link rel="alternate" hreflang="{lang}" href="{xml_esc(canonical)}">'
        f'\n  <link rel="alternate" hreflang="{"en" if is_zh else "zh"}" href="{xml_esc(en_url if is_zh else zh_url)}">'
        f'\n  <link rel="alternate" hreflang="x-default" href="{xml_esc(zh_url)}">'
    )

    # Replace <title>
    html = re.sub(r'<title>[^<]*</title>', f'<title>{xml_esc(page_title)}</title>', html, count=1)

    # Replace meta description
    html = re.sub(r'<meta name="description" content="[^"]*">',
                  f'<meta name="description" content="{xml_esc(page_desc)}">', html, count=1)

    # Replace OG tags
    html = re.sub(r'<meta property="og:title" content="[^"]*">',
                  f'<meta property="og:title" content="{xml_esc(og_title)}">', html, count=1)
    html = re.sub(r'<meta property="og:description" content="[^"]*">',
                  f'<meta property="og:description" content="{xml_esc(og_desc)}">', html, count=1)
    html = re.sub(r'<meta property="og:url" content="[^"]*">',
                  f'<meta property="og:url" content="{xml_esc(og_url)}">', html, count=1)
    html = re.sub(r'<meta property="og:image" content="[^"]*">',
                  f'<meta property="og:image" content="{xml_esc(og_image)}">', html, count=1)

    # Add Twitter Card meta tags (replace existing or add)
    twitter_tags = f'<meta name="twitter:card" content="summary_large_image">\n'
    twitter_tags += f'  <meta name="twitter:title" content="{xml_esc(og_title)}">\n'
    twitter_tags += f'  <meta name="twitter:description" content="{xml_esc(og_desc)}">\n'
    twitter_tags += f'  <meta name="twitter:image" content="{xml_esc(og_image)}">'
    # Remove existing twitter tags and re-add
    html = re.sub(r'<meta name="twitter:card" content="[^"]*">', '', html, count=1)
    html = re.sub(r'<meta name="twitter:title" content="[^"]*">', '', html)
    html = re.sub(r'<meta name="twitter:description" content="[^"]*">', '', html)
    html = re.sub(r'<meta name="twitter:image" content="[^"]*">', '', html)
    # Insert after og:image
    html = re.sub(r'(<meta property="og:image" content="[^"]*">)', r'\1\n  ' + twitter_tags, html, count=1)

    # Replace canonical
    html = re.sub(r'<link rel="canonical" href="[^"]*">',
                  f'<link rel="canonical" href="{xml_esc(canonical)}">', html, count=1)

    # Replace hreflang tags (they already exist in the template)
    html = re.sub(r'  <link rel="alternate" hreflang="[^"]*" href="[^"]*">\n?', '', html)
    html = re.sub(r'(</head>)', hreflang_tags + r'\n\1', html, count=1)

    # Fix lang attribute on <html>
    html = re.sub(r'<html lang="[^"]*"', f'<html lang="{lang_attr}"', html, count=1)

    # Inject boot-hide script
    if 'boot-hide' not in html:
        html = re.sub(r'(<meta charset="UTF-8">)', r'\1\n  ' + BOOT, html, count=1)

    # Dedupe base tags
    html = re.sub(r'(?:<base href="/">\s*)+', '<base href="/">', html)

    # Clean GSAP runtime state
    html = re.sub(r'\sstyle="translate: none; rotate: none; scale: none;[^"]*"', '', html)
    html = re.sub(r'\sstyle="opacity: 0;"', '', html)

    # Inject VideoObject structured data (before </head>)
    if ld_json and 'VideoObject' not in html:
        ld_tag = f'\n  <script type="application/ld+json">\n{json.dumps(json.loads(ld_json), ensure_ascii=False, indent=2)}\n  </script>'
        html = re.sub(r'(</head>)', ld_tag + r'\n\1', html, count=1)

    return html

# Process all rendered snapshots
out_dir = TMP / "out"
for html_path in sorted(out_dir.rglob("index.html")):
    rel = str(html_path.relative_to(out_dir))
    html = html_path.read_text(encoding="utf-8")

    # Determine language and slug from path
    if rel.startswith("en/skill/"):
        slug = rel.replace("en/skill/", "").replace("/index.html", "")
        lang = "en"
        page_type = "skill"
    elif rel.startswith("skill/"):
        slug = rel.replace("skill/", "").replace("/index.html", "")
        lang = "zh"
        page_type = "skill"
    elif rel.startswith("en/anthology"):
        slug = None
        lang = "en"
        page_type = "anthology"
    elif rel == "anthology/index.html":
        slug = None
        lang = "zh"
        page_type = "anthology"
    elif rel.startswith("en/"):
        slug = None
        lang = "en"
        page_type = "home"
    elif rel == "index.html":
        slug = None
        lang = "zh"
        page_type = "home"
    else:
        continue

    html = inject_seo(html, lang, page_type, slug)
    html_path.write_text(html, encoding="utf-8")
    print(f"SEO   {rel}")

# ── Step 6: Generate /en/ snapshots from /zh/ originals ────────────────
for html_path in sorted(out_dir.rglob("index.html")):
    rel = str(html_path.relative_to(out_dir))
    if rel.startswith("en/"):
        continue  # already processed
    if rel == "index.html":
        # Generate /en/index.html
        en_path = out_dir / "en" / "index.html"
        en_path.parent.mkdir(parents=True, exist_ok=True)
        html = html_path.read_text(encoding="utf-8")
        html = inject_seo(html, "en", "home")
        en_path.write_text(html, encoding="utf-8")
        print("SEO   en/index.html")
    elif rel.startswith("skill/") and rel.endswith("index.html"):
        slug = rel.replace("skill/", "").replace("/index.html", "")
        en_path = out_dir / "en" / f"skill/{slug}/index.html"
        en_path.parent.mkdir(parents=True, exist_ok=True)
        html = html_path.read_text(encoding="utf-8")
        html = inject_seo(html, "en", "skill", slug)
        en_path.write_text(html, encoding="utf-8")
        print(f"SEO   en/skill/{slug}/index.html")
    elif rel == "anthology/index.html":
        en_path = out_dir / "en" / "anthology" / "index.html"
        en_path.parent.mkdir(parents=True, exist_ok=True)
        html = html_path.read_text(encoding="utf-8")
        html = inject_seo(html, "en", "anthology")
        en_path.write_text(html, encoding="utf-8")
        print("SEO   en/anthology/index.html")

print(f"\nPost-processing complete.")
PYEOF

# ── Step 7: Copy results to repo root ──────────────────────────────────
# Preserve manually-created /en/ pages (faq, prompts) that aren't part of prerender
EN_MANUAL=""
for d in en/faq en/prompts en/license; do [ -d "$ROOT/$d" ] && EN_MANUAL="$EN_MANUAL $d"; done
if [ -n "$EN_MANUAL" ]; then
  mkdir -p "$TMP/manual"
  for d in $EN_MANUAL; do cp -r "$ROOT/$d" "$TMP/manual/$(basename $d)"; done
fi
rm -rf "$ROOT/anthology" "$ROOT/skill" "$ROOT/en"
cp -r "$TMP/out/." "$ROOT/"
# Restore manually-created /en/ pages
if [ -n "$EN_MANUAL" ]; then
  mkdir -p "$ROOT/en"
  for d in $EN_MANUAL; do cp -r "$TMP/manual/$(basename $d)" "$ROOT/$d"; done
fi

# ── Step 8: Unify all ?v= cache-bust stamps ───────────────────────────
# Every static HTML file gets the same SITE_VERSION so we never forget
# to bump individual files — one variable controls all cache invalidation.
find "$ROOT" -name '*.html' -not -path '*/node_modules/*' -exec \
  sed -i 's/?v=[0-9]\+[a-z]*\b/?v='"$SITE_VERSION"'/g' {} +

total_zh=$(find "$ROOT/skill" "$ROOT/anthology" -name index.html 2>/dev/null | wc -l)
total_en=$(find "$ROOT/en" -name index.html 2>/dev/null | wc -l)
echo "prerender done -> ${total_zh} zh pages + ${total_en} en pages + root index.html (v=${SITE_VERSION})"
