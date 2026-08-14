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
import http.server, os, sys, threading
os.chdir(sys.argv[1])
class H(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        path = self.path.split('?')[0]
        if not os.path.isfile(path.lstrip('/')):
            self.path = '/index.html'
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
html = re.sub(r'\sstyle="translate: none; rotate: none; scale: none;[^"]*"', '', html)
html = re.sub(r'\sstyle="opacity: 0;"', '', html)
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