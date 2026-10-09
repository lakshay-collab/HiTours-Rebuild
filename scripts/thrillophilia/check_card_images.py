#!/usr/bin/env python3
"""Report duplicate listing-card images across tour data files.

Usage: python3 check_card_images.py [file1Data.js ...]
Exit code 1 when any card image is shared by two or more trips.
"""
import re, sys, pathlib, collections

TOURS = pathlib.Path(__file__).resolve().parents[2] / 'frontend/src/tours'


def gallery(text):
    m = re.search(r'const heroGallery = \[(.*?)\];', text, re.S)
    if not m:
        return []
    body = m.group(1)
    out = re.findall(r"img\('([^']+)'\)", body)
    return out or re.findall(r"'([^']+)'", body)


def card_images(path):
    text = path.read_text()
    hero = gallery(text)
    m = re.search(r'const cardImages = (.*?);', text, re.S)
    if not m:
        return []
    expr = m.group(1)
    explicit = re.findall(r"img\('([^']+)'\)", expr)
    if explicit:
        return explicit
    idx = re.findall(r'heroGallery\[(\d+)\]', expr)
    if idx:
        return [hero[int(i)] for i in idx if int(i) < len(hero)]
    s = re.search(r'slice\((\d+),\s*(\d+)\)', expr)
    if s:
        return hero[int(s.group(1)):int(s.group(2))]
    return hero[:4]


def main(files):
    leads = collections.defaultdict(list)
    anywhere = collections.defaultdict(list)
    for f in files:
        imgs = card_images(TOURS / f)
        if not imgs:
            print('!! no cardImages parsed:', f)
            continue
        leads[imgs[0]].append(f)
        for i in imgs:
            anywhere[i].append(f)
    dup_lead = {k: v for k, v in leads.items() if len(v) > 1}
    dup_any = {k: v for k, v in anywhere.items() if len(v) > 1}
    print('duplicate LEAD images:', len(dup_lead))
    for k, v in dup_lead.items():
        print(' ', k[:60], '->', v)
    print('reused card images (any position):', len(dup_any))
    for k, v in dup_any.items():
        print(' ', k[:60], '->', v)
    return 1 if dup_any else 0


if __name__ == '__main__':
    files = sys.argv[1:] or sorted(p.name for p in TOURS.glob('*Data.js'))
    sys.exit(main(files))
