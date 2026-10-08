"""Print a compact day by day digest of an extracted source trip, for writing fresh copy."""
import json
import sys

slug = sys.argv[1]
r = json.load(open('/app/import/%s/raw.json' % slug))
print(slug, '|', r['title'], '|', r['duration'], '|', r['currency'], r['price_per_adult'], 'struck', r['struck_price'])
print('our price', round(r['price_per_adult'] * 0.95))
print('cities', r['city_split'])
print('hotels (first option per city is used):')
seen = set()
for h in r['hotels']:
    mark = '  USE ' if h['city'] not in seen else '  alt '
    seen.add(h['city'])
    print(mark, h['city'], '|', h['name'], '|', h['nights'], 'nights |', h['stars'], 'star |', h['category'], '|', len(h['images']), 'photos')
print('\nmeal plans:', [m['name'] for m in r['meal_plans']])
print('\ninclusions:')
for x in r['inclusions']:
    print('  -', x)
print('\nexclusions:')
for x in r['exclusions']:
    print('  -', x)
for d in r['days']:
    print('\n== Day %d | %s | %s | meals %s %s' % (d['day'], d['city'], d['title'], d['meals'], d['meals_hotel']))
    for it in d['items']:
        print('   %-10s %-10s %s' % (it['type'], it.get('label') or '', it['title'][:110]))
