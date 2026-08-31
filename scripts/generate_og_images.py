#!/usr/bin/env python3
"""Generate branded OG images (1200×630) for each skill using Chrome headless."""
import json, subprocess, os, sys, tempfile, shutil
from pathlib import Path

os.chdir(Path(__file__).resolve().parent.parent)

# Extract skills data
raw = subprocess.check_output([
    "node", "-e", """
global.window = {};
require("./data/skills.js");
var out = window.AMHS_DATA.skills.map(function(s) {
  return {
    slug: s.slug,
    name: s.name || "",
    nameZh: s.nameZh || s.name || "",
    summary: s.summary || {},
    preview: s.preview || null,
    sourceType: s.sourceType || "community",
    categories: s.categories || [],
  };
});
process.stdout.write(JSON.stringify(out));
"""], text=True)

skills = json.loads(raw)
SITE = "https://h3skills.com"
ROOT = Path.cwd()
OG_DIR = ROOT / "og"
OG_DIR.mkdir(exist_ok=True)

TEMPLATE = r"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px;
    background: __BG__;
    font-family: "PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif;
    color: #fff;
    display: flex;
    overflow: hidden;
    position: relative;
  }
  .left {
    width: 620px; height: 630px;
    padding: 60px 50px;
    display: flex; flex-direction: column; justify-content: space-between;
    position: relative; z-index: 2;
  }
  .brand {
    font-size: 14px; font-weight: 700; letter-spacing: 3px;
    text-transform: uppercase; opacity: 0.6;
  }
  .title {
    font-size: __TSIZE__px; font-weight: 800; line-height: 1.2;
    word-break: break-word;
  }
  .desc {
    font-size: 18px; line-height: 1.5; opacity: 0.85;
    max-height: 80px; overflow: hidden;
  }
  .badges {
    display: flex; gap: 10px; flex-wrap: wrap;
  }
  .badge {
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 20px;
    padding: 6px 16px; font-size: 13px; font-weight: 600;
  }
  .right {
    width: 580px; height: 630px;
    position: relative; overflow: hidden;
  }
  .right img {
    width: 100%; height: 100%; object-fit: cover;
  }
  .right .placeholder {
    width: 100%; height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
    display: flex; align-items: center; justify-content: center;
    font-size: 72px; opacity: 0.3;
  }
  .footer {
    position: absolute; bottom: 30px; left: 50px; right: 50px;
    display: flex; justify-content: space-between; align-items: center;
    z-index: 2;
  }
  .footer .url { font-size: 14px; opacity: 0.5; }
  .footer .logo {
    width: 36px; height: 36px; border-radius: 8px;
    background: __ACCENT__; display: flex; align-items: center; justify-content: center;
    font-size: 16px; font-weight: 900; color: #0C0C0E;
  }
</style>
</head>
<body>
  <div class="left">
    <div class="brand">__BRAND__</div>
    <div class="title">__TITLE__</div>
    <div class="desc">__DESC__</div>
    <div class="badges">__BADGES__</div>
  </div>
  <div class="right">__IMG__</div>
  <div class="footer">
    <div class="url">h3skills.com</div>
    <div class="logo">H3</div>
  </div>
</body>
</html>"""

# Color palettes for different categories
PALETTES = {
    "foundation": ("#1a1a2e", "#FF6C37", "OFFICIAL SKILL"),
    "community":  ("#0f1923", "#4ECDC4", "COMMUNITY SKILL"),
    "default":    ("#12121a", "#FF6C37", "H3 SKILL"),
}

def get_palette(skill):
    src = skill.get("sourceType", "community")
    cats = skill.get("categories", [])
    if "foundation" in cats:
        return PALETTES["foundation"]
    return PALETTES.get(src, PALETTES["default"])

def make_badges(skill):
    cats = skill.get("categories", [])
    modes = [m.upper() for m in (skill.get("modes", []) or [])]
    tags = []
    if "foundation" in cats:
        tags.append("官方")
    elif skill.get("sourceType") == "community":
        tags.append("社区")
    for c in cats[:3]:
        if c not in ("foundation",):
            tags.append(c)
    for m in modes[:2]:
        tags.append(m)
    return "".join(f'<span class="badge">{t}</span>' for t in tags[:5])

count = 0
for s in skills:
    slug = s["slug"]
    title = s.get("nameZh") or s.get("name", slug)
    desc = s.get("summary", {}).get("zh", "") or s.get("summary", {}).get("en", "")
    poster = s.get("preview", {}).get("poster", "") if s.get("preview") else ""
    bg, accent, brand = get_palette(s)

    # Determine title font size based on length
    tlen = len(title)
    if tlen <= 8:
        tsize = 52
    elif tlen <= 15:
        tsize = 44
    elif tlen <= 25:
        tsize = 36
    else:
        tsize = 30

    # Image section
    if poster and (ROOT / poster).exists():
        img_html = f'<img src="file://{ROOT / poster}" alt="">'
    else:
        img_html = '<div class="placeholder">H3</div>'

    html = (TEMPLATE
        .replace("__BG__", bg)
        .replace("__ACCENT__", accent)
        .replace("__BRAND__", brand)
        .replace("__TITLE__", title)
        .replace("__DESC__", desc[:80])
        .replace("__TSIZE__", str(tsize))
        .replace("__BADGES__", make_badges(s))
        .replace("__IMG__", img_html)
    )

    tmp = Path(tempfile.mktemp(suffix=".html"))
    tmp.write_text(html, encoding="utf-8")
    out = OG_DIR / f"{slug}.png"

    subprocess.run([
        "google-chrome", "--headless=new", "--disable-gpu", "--no-sandbox",
        "--window-size=1200,630",
        f"--screenshot={out}",
        f"file://{tmp}",
    ], capture_output=True, timeout=15)
    tmp.unlink()

    if out.exists() and out.stat().st_size > 1000:
        count += 1
        print(f"OK    og/{slug}.png ({out.stat().st_size // 1024}KB)")
    else:
        print(f"FAIL  og/{slug}.png")

print(f"\nGenerated {count}/{len(skills)} OG images")
