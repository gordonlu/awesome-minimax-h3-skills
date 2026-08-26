#!/usr/bin/env bash
# Pre-render the site to static HTML snapshots so crawlers get full content
# in the initial HTML (SEO). Run after any change to code or content.
#
#   bash scripts/prerender.sh
#
# Outputs (committed to the repo; Cloudflare Pages serves these directly):
#   /index.html  /anthology/index.html  /skill/<slug>/index.html
set -euo pipefail
cd "$(dirname "$0")/.."

PORT=8037
ROOT="$PWD"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

cat > "$TMP/spa_server.py" <<'PYEOF'
import http.server, os, sys, threading, re
os.chdir(sys.argv[1])
def clean(html):
    # strip runtime state a prerendered snapshot may have baked into the
    # working-tree index.html, so snapshots never accumulate stale attributes
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

urls=("/" "/anthology")
while IFS= read -r slug; do
  [ -n "$slug" ] && urls+=("/skill/$slug")
done < <(node -e '
  global.window = {};
  require("'"$ROOT"'/data/skills.js");
  window.AMHS_DATA.skills.forEach(function (s) { console.log(s.slug); });
')

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
    --virtual-time-budget=8000 --dump-dom "http://127.0.0.1:$PORT$u" 2>/dev/null \
    > "$dest"
  if [ ! -s "$dest" ] || [ "$(wc -c < "$dest")" -lt 500 ]; then
    echo "FAIL  $rel (empty/small)"
    fail=1
  elif ! grep -q '<html' "$dest"; then
    echo "FAIL  $rel (no html)"
    fail=1
  else
    python3 - "$dest" <<'PYEOF'
import re, sys
p = sys.argv[1]
html = open(p).read()
# dedupe <base href="/"> accumulated by repeated document.write + snapshot cycles
html = re.sub(r'(?:<base href="/">\s*)+', '<base href="/">', html)
html = re.sub(r'\sstyle="translate: none; rotate: none; scale: none;[^"]*"', '', html)
html = re.sub(r'\sstyle="opacity: 0;"', '', html)
# early language boot: hide body until app.js renders the saved non-zh language,
# so visitors never see the zh snapshot flash before the swap
BOOT = '<script>(function(){try{var l=localStorage.getItem("amhs-lang");if(l&&l!=="zh"){var s=document.createElement("style");s.id="boot-hide";s.textContent="body{visibility:hidden!important}";document.head.appendChild(s);setTimeout(function(){if(s.parentNode)s.parentNode.removeChild(s)},2500)}}catch(e){}})();</script>'
if 'boot-hide' not in html:
    html = re.sub(r'(<meta charset="UTF-8">)', r'\1\n  ' + BOOT, html, count=1)
open(p, "w").write(html)
PYEOF
    echo "OK    $rel ($(wc -c < "$dest") bytes)"
  fi
done

kill "$SRV" 2>/dev/null || true

if [ "$fail" -eq 1 ]; then
  echo "prerender aborted: at least one snapshot failed." >&2
  exit 1
fi

rm -rf "$ROOT/anthology" "$ROOT/skill"
cp -r "$TMP/out/." "$ROOT/"
echo "prerender done -> $(find "$ROOT/anthology" "$ROOT/skill" -name index.html 2>/dev/null | wc -l) skill/anthology pages + root index.html"