#!/usr/bin/env python3
"""Suggest destination highlight candidates from itinerary text.

Usage: suggest_highlights.py <js files...> [--min N] [--top N]
Scans every string literal in the given package/tour data modules, pulls out capitalised
multi-word phrases (landmarks, parks, shows, cruises) and prints the ones not yet covered by
frontend/src/holidays/experiences.js, most frequent first. Review the list and add the good
ones to EXPERIENCES (label + regex). Nothing is written automatically.
"""
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
HIGHLIGHTS = ROOT / 'frontend/src/holidays/experiences.js'

STOP = set('''Day Days Night Nights Breakfast Lunch Dinner Arrival Departure Transfer Transfers Check Hotel Hotels Resort Private Return Morning Afternoon Evening Overnight
Optional Suggested Free Time Leisure Flight Flights Airport International Domestic Included Not Pricing Per Person Standard Deluxe Superior Premium Luxury Comfort
Monday Tuesday Wednesday Thursday Friday Saturday Sunday January February March April May June July August September October November December
Your Our The And With From For This That These Those You We Trip Tour Tours Package Holiday Holidays Honeymoon Family Couples Romantic Escape Getaway Break Explorer
Indian Rupees INR Rs Hi Email Call Expert Read More Less Design Plan Trusted Google TripAdvisor Rated Est Travel Thrillophilia Destinations Asia Europe Africa
Key Highlights What Where Why How Best Of Grand Classic Highlights Wonders Trails Glimpse Economical Vacation Super Enquiry Passengers Design Your Escape Room Stateroom
Terminal Sedan Coach Car Van Boat Ferry Speedboat Train Taxi Tuk Shared Group SIC Pickup Drop Guide Guided English Speaking Entry Tickets Ticket Pass Admission
Early Late Twin Double Triple Single Extra Bed Child Adult Adults Children Kids Pax Min Max Valid Rate Rates Cost Costs Price Prices Taxes GST Fee Fees'''.split())
INNER = {'of', 'the', 'by', 'and', 'de', 'la', 'del', 'du', 'des', 'di', 'da', 'on', 'at', 'in'}

STRING = re.compile(r"'((?:[^'\\]|\\.)*)'|\"((?:[^\"\\]|\\.)*)\"|`((?:[^`\\]|\\.)*)`")
PHRASE = re.compile(r"\b([A-Z][a-zA-Z'’-]+(?:\s+(?:[A-Z][a-zA-Z'’-]+|of|the|by|and|de|la|del|du|des|di|da|on|at|in)){0,3})\b")


def strings(path):
    src = path.read_text(encoding='utf-8')
    for m in STRING.finditer(src):
        s = next(g for g in m.groups() if g is not None)
        if '://' in s or s.startswith('/') or s.endswith(('.webp', '.jpg', '.jpeg', '.png')) or len(s) < 4:
            continue
        yield s


def phrases(text):
    for m in PHRASE.finditer(text):
        words = m.group(1).split()
        while words and (words[-1].lower() in INNER or words[-1] in STOP):
            words.pop()
        while words and words[0] in STOP:
            words.pop(0)
        if not words:
            continue
        if len(words) == 1 and (words[0] in STOP or len(words[0]) < 5):
            continue
        yield ' '.join(words)


def known_labels():
    if not HIGHLIGHTS.exists():
        return []
    return [m.group(1) for m in re.finditer(r"\[\s*'([^']+)'\s*,\s*/", HIGHLIGHTS.read_text(encoding='utf-8'))]


def main(argv):
    files, min_files, top = [], 1, 80
    it = iter(argv)
    for a in it:
        if a == '--min':
            min_files = int(next(it))
        elif a == '--top':
            top = int(next(it))
        else:
            files.append(Path(a))
    if not files:
        print(__doc__)
        return 1
    per_phrase_files = defaultdict(set)
    total = Counter()
    for f in files:
        for s in strings(f):
            for p in phrases(s):
                per_phrase_files[p].add(f.name)
                total[p] += 1
    known = [k.lower() for k in known_labels()]
    rows = [(p, len(fs), total[p]) for p, fs in per_phrase_files.items() if len(fs) >= min_files]
    rows.sort(key=lambda r: (-r[1], -r[2], r[0]))
    print(f'{"phrase":42} files  mentions  covered?')
    shown = 0
    for p, nf, nm in rows:
        covered = any(k in p.lower() or p.lower() in k for k in known)
        print(f'{p[:42]:42} {nf:5}  {nm:8}  {"yes" if covered else "-"}')
        shown += 1
        if shown >= top:
            break
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
