#!/usr/bin/env python3
"""Plan globally unique 4-image card sets per trip.

Candidate order per trip: heroGallery, then destination (stop-level) photos, then
day photos. Hotel and activity close-ups are skipped so listing cards stay scenic.
"""
import sys, re, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from check_card_images import TOURS, gallery


def stop_images(text):
    out = []
    for block in re.findall(r'^    images: \[(.*?)^    \]', text, re.S | re.M):
        out += re.findall(r"img\('([^']+)'\)", block)
    for block in re.findall(r'^    dayImages: \{(.*?)^    \}', text, re.S | re.M):
        out += re.findall(r"img\('([^']+)'\)", block)
    return out


def candidates(f):
    text = (TOURS / f).read_text()
    out = []
    for i in gallery(text) + stop_images(text):
        if i not in out and 'Screen_Shot' not in i:
            out.append(i)
    return out


argv = sys.argv[1:]
cut = argv.index('--freeze') if '--freeze' in argv else len(argv)
FILES, FROZEN = argv[:cut], argv[cut + 1:]
from check_card_images import card_images
pools = {f: candidates(f) for f in FILES}
heroes = {f: gallery((TOURS / f).read_text()) for f in FILES}
used = {i for f in FROZEN for i in card_images(TOURS / f)}
plan = {}
# pass 1: a unique lead photo per trip, taken from its own hero gallery where possible
for f in sorted(FILES, key=lambda f: len(heroes[f] or pools[f])):
    lead = next((i for i in (heroes[f] or pools[f]) if i not in used), None)
    if lead is None:
        lead = next(i for i in pools[f] if i not in used)
    used.add(lead)
    plan[f] = [lead]
# pass 2: three more photos per trip, still globally unique
for f in sorted(FILES, key=lambda f: len(pools[f])):
    for i in pools[f]:
        if len(plan[f]) == 4:
            break
        if i not in used:
            used.add(i)
            plan[f].append(i)

for f in FILES:
    print(f, len(plan[f]))
    for i in plan[f]:
        print('   ', i)
picked = [i for v in plan.values() for i in v]
assert len(set(picked)) == len(picked), 'duplicate leaked'
