#!/usr/bin/env python3
"""Run check_trip.py for the given srilanka_table keys (default: all)."""
import subprocess
import sys

sys.path.insert(0, '/app/scripts/thrillophilia')
from srilanka_table import TRIPS

keys = sys.argv[1:] or list(TRIPS)
for k in keys:
    t = TRIPS[k]
    r = subprocess.run(['python3', '/app/scripts/thrillophilia/check_trip.py',
                        '/app/frontend/src/tours/%sData.js' % t['camel'], '/app/import/%s/raw.json' % t['source']],
                       capture_output=True, text=True)
    out = r.stdout + r.stderr
    ok = 'ALL CHECKS PASS' in out
    print(k, 'PASS' if ok else 'FAIL')
    if not ok:
        print('\n'.join(l for l in out.splitlines() if l.startswith(' -') or 'Error' in l)[:1200])
