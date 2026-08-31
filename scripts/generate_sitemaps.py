#!/usr/bin/env python3
"""Generate sitemap.xml, video-sitemap.xml, and sitemap-index.xml from skills.js data.

Usage:
    python3 scripts/generate_sitemaps.py

Reads data/skills.js, computes real lastmod from file mtimes, and writes:
  - sitemap.xml          (main sitemap)
  - video-sitemap.xml    (video-specific sitemap)
  - sitemap-index.xml    (sitemap index)
"""
import json, os, re, sys, time
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://h3skills.com"

# ── Load skills data via Node (write temp file to avoid shell escaping) ─
import tempfile
node_script = (
    'global.window = {};\n'
    "require('" + str(ROOT) + "/data/skills.js');\n"
    'var skills = window.AMHS_DATA.skills;\n'
    'var out = skills.map(function(s) {\n'
    '  return {\n'
    '    slug: s.slug,\n'
    '    name: s.name,\n'
    '    nameZh: s.nameZh,\n'
    '    summary: s.summary,\n'
    '    description: s.description,\n'
    '    sourceType: s.sourceType,\n'
    '    categories: s.categories || [],\n'
    "    tags: (s.tags || []).map(function(t) { return t.en || t.zh || ''; }),\n"
    '    preview: s.preview || null,\n'
    "    modes: (s.modes || []).map(function(m) { return m.id; }),\n"
    '    foundation: !!s.foundation\n'
    '  };\n'
    '});\n'
    'process.stdout.write(JSON.stringify(out));\n'
)
with tempfile.NamedTemporaryFile(mode="w", suffix=".js", delete=False) as f:
    f.write(node_script)
    tmp_js = f.name
try:
    result = os.popen(f"node {tmp_js}").read()
    skills = json.loads(result)
finally:
    os.unlink(tmp_js)

# ── Helper: compute lastmod from file mtime ────────────────────────────
def file_lastmod(*paths):
    """Get the most recent mtime among given files, return as YYYY-MM-DD."""
    latest = 0
    for p in paths:
        fp = ROOT / p
        if fp.exists():
            latest = max(latest, fp.stat().st_mtime)
    if latest == 0:
        return datetime.now(timezone.utc).strftime("%Y-%m-%d")
    return datetime.fromtimestamp(latest, tz=timezone.utc).strftime("%Y-%m-%d")

def skill_lastmod(slug):
    """Get lastmod for a skill from its SKILL.md and meta.yaml."""
    candidates = [
        f"community-skills/{slug}/SKILL.md",
        f"community-skills/{slug}/meta.yaml",
        f"community-skills/{slug}/SKILL.cn.md",
    ]
    return file_lastmod(*candidates)

def page_lastmod(page_path):
    """Get lastmod for a prerendered page."""
    return file_lastmod(page_path)

# ── Escape XML ─────────────────────────────────────────────────────────
def xml_escape(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")

# ── Build sitemaps ─────────────────────────────────────────────────────
now = datetime.now(timezone.utc).strftime("%Y-%m-%d")

# Main sitemap entries
main_urls = []

# Homepage
main_urls.append({
    "loc": f"{SITE}/",
    "lastmod": page_lastmod("index.html"),
    "changefreq": "weekly",
    "priority": "1.0",
})

# Prompts landing page
main_urls.append({
    "loc": f"{SITE}/prompts",
    "lastmod": page_lastmod("prompts/index.html") if (ROOT / "prompts/index.html").exists() else now,
    "changefreq": "weekly",
    "priority": "0.8",
})

# License page
main_urls.append({
    "loc": f"{SITE}/license",
    "lastmod": page_lastmod("license/index.html") if (ROOT / "license/index.html").exists() else now,
    "changefreq": "monthly",
    "priority": "0.5",
})
main_urls.append({
    "loc": f"{SITE}/en/license",
    "lastmod": page_lastmod("en/license/index.html") if (ROOT / "en/license/index.html").exists() else now,
    "changefreq": "monthly",
    "priority": "0.5",
})

# Skill pages (zh + en)
for s in skills:
    slug = s["slug"]
    lm = skill_lastmod(slug)
    # Chinese version (default)
    main_urls.append({
        "loc": f"{SITE}/skill/{slug}",
        "lastmod": lm,
        "changefreq": "monthly",
        "priority": "0.7",
    })
    # English version
    main_urls.append({
        "loc": f"{SITE}/en/skill/{slug}",
        "lastmod": lm,
        "changefreq": "monthly",
        "priority": "0.7",
    })

# ── Write sitemap.xml ──────────────────────────────────────────────────
lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
]
for u in main_urls:
    lines.append(f'  <url><loc>{xml_escape(u["loc"])}</loc><lastmod>{u["lastmod"]}</lastmod><changefreq>{u["changefreq"]}</changefreq><priority>{u["priority"]}</priority></url>')
lines.append('</urlset>')
(ROOT / "sitemap.xml").write_text("\n".join(lines) + "\n", encoding="utf-8")
print(f"sitemap.xml: {len(main_urls)} URLs")

# ── Write video-sitemap.xml ────────────────────────────────────────────
video_lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">',
]
for s in skills:
    if not s.get("preview") or not s["preview"].get("video"):
        continue
    slug = s["slug"]
    lm = skill_lastmod(slug)
    title = xml_escape(s["nameZh"] or s["name"])
    desc = xml_escape(s["summary"].get("zh", "") or s["summary"].get("en", ""))
    thumb = f"{SITE}/{s['preview']['poster']}" if s["preview"].get("poster") else ""
    vid_url = f"{SITE}/{s['preview']['video']}" if s["preview"].get("video") else ""
    video_lines.append(f'  <url>')
    video_lines.append(f'    <loc>{SITE}/skill/{slug}</loc>')
    video_lines.append(f'    <lastmod>{lm}</lastmod>')
    video_lines.append(f'    <video:video>')
    video_lines.append(f'      <video:thumbnail_loc>{xml_escape(thumb)}</video:thumbnail_loc>')
    video_lines.append(f'      <video:title>{title}</video:title>')
    video_lines.append(f'      <video:description>{desc}</video:description>')
    video_lines.append(f'      <video:content_loc>{xml_escape(vid_url)}</video:content_loc>')
    video_lines.append(f'      <video:duration>15</video:duration>')
    video_lines.append(f'      <video:publication_date>{lm}</video:publication_date>')
    video_lines.append(f'      <video:family_friendly>yes</video:family_friendly>')
    video_lines.append(f'    </video:video>')
    video_lines.append(f'  </url>')
video_lines.append('</urlset>')
(ROOT / "video-sitemap.xml").write_text("\n".join(video_lines) + "\n", encoding="utf-8")
print(f"video-sitemap.xml: {sum(1 for s in skills if s.get('preview'))} videos")

# ── Write sitemap-index.xml ────────────────────────────────────────────
main_lm = page_lastmod("index.html")
idx_lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    f'  <sitemap><loc>{SITE}/sitemap.xml</loc><lastmod>{main_lm}</lastmod></sitemap>',
    f'  <sitemap><loc>{SITE}/video-sitemap.xml</loc><lastmod>{main_lm}</lastmod></sitemap>',
    '</sitemapindex>',
]
(ROOT / "sitemap-index.xml").write_text("\n".join(idx_lines) + "\n", encoding="utf-8")
print("sitemap-index.xml: 2 sitemaps")
