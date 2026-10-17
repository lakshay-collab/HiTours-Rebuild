#!/usr/bin/env python3
"""Build the Sri Lanka batch from srilanka_table.py (same shape as gen_nordics.py, Asia base).

usage: python3 gen_srilanka.py [key ...]
"""
import json
import subprocess
import sys

sys.path.insert(0, '/app/scripts/thrillophilia')
from srilanka_table import TRIPS, EXPERTS

ROOT = '/app/import'
STARS = {3: '3\u2605', 4: '4\u2605', 5: '5\u2605'}


def spec_for(t):
    raw = json.load(open('%s/%s/raw.json' % (ROOT, t['source'])))
    days, nights = (int(x) for x in raw['duration'].replace('D', '').replace('N', '').split('/'))
    stops, letters = [], 'ABCDEFGH'
    day_hotel = {}
    for i, s in enumerate(t['stops']):
        acts = []
        for a in s.get('acts', []):
            name, day, match, desc = a
            acts.append({'name': name, 'day': day, 'optional': name.startswith('Optional'),
                         'match': match, 'description': desc})
        accom = '%d night%s \u00b7 %s \u00b7 %s \u00b7 %s \u00b7 %s' % (
            s['nights'], '' if s['nights'] == 1 else 's', s.get('meal', 'Breakfast'),
            s.get('room', 'Standard room'), STARS[s.get('stars', 3)], s['blurb'])
        stop = {
            'letter': letters[i], 'name': s.get('name', s['city']), 'city': s['city'],
            'days': s['days'], 'dayLabel': 'Day %d' % s['days'][0] if len(s['days']) == 1
            else 'Day %d to %d' % (s['days'][0], s['days'][-1]),
            'hotel': s['hotel'], 'hotel_label': s.get('label', s['hotel']), 'accom': accom, 'activities': acts,
            'program': {'name': s.get('name', s['city']), 'description': s['program']},
        }
        if s.get('subtitle'):
            stop['subtitle'] = s['subtitle']
        stops.append(stop)
        for d in s['days']:
            day_hotel[str(d)] = s['hotel']
    day_hotel[str(days)] = 'Departure'

    spec = {
        'cta_country': 'sri-lanka',
        'base': '/asia',
        'crumbs': [['Destinations', '/#destinations'], ['Asia', '/asia'], ['Sri Lanka', '/asia/sri-lanka']],
        'source_slug': t['source'],
        'camel': t['camel'],
        'slug': t['slug'],
        'title': t['title'],
        'alt': t['alt'],
        'transport': t['transport'],
        'tag': t['tag'],
        'tags': t['tags'],
        'price': round(raw['price_per_adult'] * 0.95),
        'route_cities': t['route'],
        'counts': {
            'days': days, 'nights': nights,
            'cities': len(dict.fromkeys(s['city'] for s in t['stops'])),
            'hotels': len(t['stops']),
            'experiences': sum(len(s.get('acts', [])) for s in t['stops']),
            'transfers': t['transfers'], 'meals': t['meals'],
        },
        'stops': stops,
        'day_titles': {str(d): v[0] for d, v in t['days'].items()},
        'bullets': {str(d): v[1] for d, v in t['days'].items()},
        'meals': {str(d): v[2] for d, v in t['days'].items()},
        'hotel_by_day': day_hotel,
        'expert': EXPERTS[t['expert']],
        'summary': t['summary'],
        'included': t['included'],
        'not_included': t['not_included'],
    }
    if t.get('hero_first'):
        spec['hero_first'] = t['hero_first']
    assert sum(s['nights'] for s in t['stops']) == nights, \
        '%s: nights %d != %d' % (t['camel'], sum(s['nights'] for s in t['stops']), nights)
    assert sorted(int(k) for k in spec['day_titles']) == list(range(1, days + 1)), \
        '%s: day titles' % t['camel']
    return spec


keys = sys.argv[1:] or list(TRIPS)
fails = []
for k in keys:
    t = TRIPS[k]
    spec = spec_for(t)
    p = '%s/spec_%s.json' % (ROOT, k)
    json.dump(spec, open(p, 'w'), indent=1, ensure_ascii=False)
    r = subprocess.run(['python3', '/app/scripts/thrillophilia/build_trip.py', p],
                       capture_output=True, text=True)
    print(k, r.stdout.strip() or r.stderr.strip()[-400:])
    if r.returncode:
        fails.append(k)
print('BUILD FAILED:', fails)
