"""Extract a batch of Thrillophilia tour URLs into import/<slug>/raw.json and print a summary table."""
import json
import os
import sys
import traceback

sys.path.insert(0, '/app/scripts/thrillophilia')
import extract as E

URLS = [u.strip() for u in open(sys.argv[1]) if u.strip()]
seen = set()
rows = []
for u in URLS:
    if u in seen:
        continue
    seen.add(u)
    try:
        raw = E.extract(u)
        out = os.path.join(E.ROOT, raw['slug'])
        os.makedirs(out, exist_ok=True)
        json.dump(raw, open(os.path.join(out, 'raw.json'), 'w'), indent=1, ensure_ascii=False)
        hotels = [(h['name'], h['city'], h['nights'], len(h['images'])) for h in raw['hotels']]
        acts = len([a for a in raw['activities'] if a.get('label') != 'Recommended'])
        rows.append(dict(slug=raw['slug'], title=raw['title'], dur=raw['duration'],
                         price=raw['price_per_adult'], struck=raw['struck_price'], cur=raw['currency'],
                         cities=raw['city_split'], days=len(raw['days']), hotels=hotels,
                         acts=acts, gallery=len(raw['gallery'])))
        print('OK', raw['slug'])
    except Exception:
        rows.append(dict(slug=u.rsplit('/', 1)[-1], error=traceback.format_exc().splitlines()[-1]))
        print('FAIL', u)
json.dump(rows, open('/app/import/batch_summary.json', 'w'), indent=1, ensure_ascii=False)
print('\n=== SUMMARY ===')
for r in rows:
    if 'error' in r:
        print('!!', r['slug'], r['error'])
        continue
    print('\n*', r['slug'], '|', r['dur'], '|', r['cur'], r['price'], 'struck', r['struck'], '| days', r['days'], '| exp', r['acts'], '| gallery', r['gallery'])
    print('  title:', r['title'])
    print('  cities:', r['cities'])
    for h in r['hotels']:
        print('   hotel:', h)
