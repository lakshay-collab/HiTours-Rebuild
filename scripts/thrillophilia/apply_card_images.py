#!/usr/bin/env python3
"""Rewrite each trip file's cardImages with the globally unique set chosen by plan_card_images.py."""
import re, subprocess, sys, pathlib

TOURS = pathlib.Path('/app/frontend/src/tours')
FILES = sys.argv[1:]
out = subprocess.run([sys.executable, '/app/scripts/thrillophilia/plan_card_images.py', *FILES],
                     capture_output=True, text=True, check=True).stdout

plan, cur = {}, None
for line in out.splitlines():
    if line.endswith(' 4') or re.match(r'^\S+Data\.js \d$', line):
        cur = line.split()[0]
        plan[cur] = []
    elif line.strip():
        plan[cur].append(line.strip())

NOTE = '// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.\n'
for f, imgs in plan.items():
    p = TOURS / f
    src = p.read_text()
    block = NOTE + 'const cardImages = [\n' + ',\n'.join("  img('%s')" % i for i in imgs) + '\n];'
    new = re.sub(r'(?:// Listing-card photos[^\n]*\n)?const cardImages = .*?;\n', block + '\n', src, count=1, flags=re.S)
    p.write_text(new)
    print('patched', f)
