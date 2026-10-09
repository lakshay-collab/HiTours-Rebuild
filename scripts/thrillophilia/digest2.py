#!/usr/bin/env python3
"""Compact digest for writing specs: one block per trip, only the facts the spec needs."""
import json, sys

for slug in sys.argv[1:]:
    r = json.load(open('/app/import/%s/raw.json' % slug))
    print('=' * 70)
    print(slug, '|', r['duration'], '| INR', r['price_per_adult'], '-> ours', round(r['price_per_adult'] * 0.95))
    print('source title:', r['title'], '| cities', r['city_split'], '| tag', r.get('tag'))
    seen = set()
    for h in r['hotels']:
        mark = 'USE' if h['city'] not in seen else 'alt'
        seen.add(h['city'])
        print(' %s hotel: %s | %s | %sN | %s star | %s | %s | %s photos' % (mark, h['city'], h['name'], h['nights'], h['stars'], h.get('room_type'), (h.get('meal_plan') or ''), len(h['images'])))
    for d in r['days']:
        acts, opts, trans, flights = [], [], 0, []
        for it in d['items']:
            t = it['type']
            if t == 'Transfer':
                trans += 1
            elif t == 'Flight':
                flights.append('%s->%s' % (it.get('from'), it.get('to')))
            elif t == 'Activity':
                (opts if it.get('label') else acts).append(it['title'][:60])
            elif t == 'Attraction':
                opts.append('[attr] ' + (it['title'] or '')[:40])
        print(' D%d %s | %s | meals %s%s' % (d['day'], d['city'], d['title'], d['meals'], d['meals_hotel']))
        if acts:
            print('    inc:', ' ; '.join(acts))
        if opts:
            print('    opt:', ' ; '.join(opts[:12]))
        print('    transfers:', trans, 'flights:', flights or '-')
    print(' inclusions:', ' | '.join(r['inclusions'])[:600])
    print(' exclusions:', ' | '.join(r['exclusions'])[:400])
