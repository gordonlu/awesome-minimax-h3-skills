#!/usr/bin/env python3
"""Generate Atom feed from skills.js data."""
import json, subprocess, sys, os
from datetime import datetime, timezone
from pathlib import Path

os.chdir(Path(__file__).resolve().parent.parent)

# Extract skills data via Node.js
raw = subprocess.check_output([
    "node", "-e", """
global.window = {};
require("./data/skills.js");
var skills = window.AMHS_DATA.skills.map(function(s) {
  return {
    slug: s.slug,
    name: s.name || "",
    nameZh: s.nameZh || s.name || "",
    summary: s.summary || {},
    sourceType: s.sourceType || "community",
    categories: s.categories || [],
    preview: s.preview || null,
  };
});
process.stdout.write(JSON.stringify(skills));
"""], text=True)

skills = json.loads(raw)
SITE = "https://h3skills.com"

now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

entries = []
for s in skills:
    slug = s["slug"]
    title = s.get("nameZh") or s.get("name", slug)
    desc = s.get("summary", {}).get("zh", "") or s.get("summary", {}).get("en", "")
    link = f"{SITE}/skill/{slug}"
    poster = s.get("preview", {}).get("poster", "") if s.get("preview") else ""
    updated = now

    thumbnail = f'\n    <media:thumbnail url="{SITE}/{poster}"/>' if poster else ""

    entries.append(f"""  <entry>
    <title>{title}</title>
    <link href="{link}"/>
    <id>{link}</id>
    <updated>{updated}</updated>
    <summary>{desc}</summary>{thumbnail}
    <content type="html">&lt;a href=&quot;{link}&quot;&gt;{title}&lt;/a&gt;</content>
  </entry>""")

feed = f"""<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom"
      xmlns:media="http://search.yahoo.com/mrss/">
  <title>Awesome MiniMax H3 Skills</title>
  <subtitle>42 个 MiniMax H3 Skills，含真实视频案例与官方提示词精选</subtitle>
  <link href="{SITE}/atom.xml" rel="self"/>
  <link href="{SITE}"/>
  <id>{SITE}/</id>
  <updated>{now}</updated>
  <author>
    <name>gordonlu</name>
  </author>
{"".join(entries)}
</feed>
"""

Path("atom.xml").write_text(feed, encoding="utf-8")
print(f"atom.xml generated ({len(skills)} entries)")
