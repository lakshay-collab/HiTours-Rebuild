"""Give every photo slot of a generated destination listing a distinct, place-matched photo.

Photos come from the Thrillophilia galleries already captured under /app/import/<slug>/raw.json
(the same sources the imported trips use). Usage: python3 assign_destination_photos.py [Country ...]
"""
import glob
import json
import re
import sys

ROOT = '/app'
SRC = f'{ROOT}/frontend/src'

PROMO = re.compile(r'free|book a|offer|discount|thrillophilia|package|\.png$|logo|map|price|itinerary|deal|\bwe\b|\bI\b|\bmy\b|worth|\bwas\b', re.I)
PEOPLE = re.compile(r'couple|tourist|enjoy|family|people|travell|friends|honeymoon|woman|man |girl|romantic|relax', re.I)
THEME_HINTS = {
    'sun': r'sunset|sunrise|beach|golden',
    'calendar': r'temple|palace|castle|cathedral|old town|heritage|fort',
    'food': r'food|cuisine|dinner|cooking|market|cafe|restaurant|dining|street',
    'landscape': r'view|waterfall|mountain|lake|fjord|terrace|cliff|aerial|valley|island',
    'beach': r'villa|pool|resort|couple|romantic|honeymoon|beach|cruise',
    'wallet': r'city|skyline|street|shopping|harbour|harbor|bridge|square',
    'snow': r'snow|winter|aurora|northern lights|husky|reindeer|ice',
    'ship': r'cruise|boat|ferry|fjord|harbour|sail',
    'camera': r'view|panoram|scenic|landmark',
}

CONFIG = {
    'Bali': dict(file='indonesiaListingData.js', countries={'Bali'}, slugs=r'bali',
                 places={'Ubud': r'rice terrace|tegal|ubud|monkey', 'Seminyak': r'seminyak|beach club|sunset beach|kuta beach|legian|kuta', 'Nusa Penida': r'penida|kelingking|broken beach|angel|crystal bay|manta', 'Uluwatu': r'uluwatu|kecak|cliff|jimbaran'},
                 activities=[r'tegal|rice terrace|monkey|swing', r'tanah lot|sea temple']),
    'Japan': dict(file='japanListingData.js', countries={'Japan', 'Tokyo', 'Hokkaido'}, slugs=r'japan|tokyo|hokkaido|osaka|kyoto',
                 places={'Tokyo': r'tokyo|shibuya|senso|asakusa|skytree|shinjuku', 'Hakone': r'hakone|fuji|ashi|kawaguchi', 'Kyoto': r'kyoto|fushimi|arashiyama|gion|kinkaku|torii|bamboo', 'Osaka': r'osaka|dotonbori|universal'},
                 activities=[r'senso|shibuya|meiji|tokyo', r'fuji|kawaguchi|hakone']),
    'China': dict(file='chinaListingData.js', countries={'China', 'Shanghai', 'Beijing'}, slugs=r'china|beijing|shanghai',
                 places={'Beijing': r'beijing|forbidden|temple of heaven|summer palace|tiananmen', 'Shanghai': r'shanghai|bund|pudong|yu garden|disney|nanjing road', 'Xi\'an': r'xi.?an|terracotta|warriors', 'Great Wall': r'great wall|mutianyu|badaling'},
                 activities=[r'great wall|mutianyu|badaling', r'bund|pudong|shanghai']),
    'Cambodia': dict(file='cambodiaListingData.js', captions=r'cambodia|angkor|siem reap|phnom|tonle|bayon|ta prohm',
                     places={'Siem Reap': r'siem reap|angkor|bayon|ta prohm', 'Phnom Penh': r'phnom|royal palace|silver pagoda', 'Tonle Sap': r'tonle|floating', 'Ta Prohm': r'ta prohm|angkor thom|bayon|angkor'},
                     activities=[r'angkor wat', r'tonle|floating|boat']),
    'Laos': dict(file='laosListingData.js', captions=r'laos|luang|vientiane|kuang|vang vieng|phousi',
                 places={'Luang Prabang': r'luang|phousi|royal palace', 'Vientiane': r'vientiane|pha that|patuxai', 'Vang Vieng': r'vang vieng|lagoon|karst', 'Pakse & 4000 Islands': r'pakse|4000|mekong|kuang|waterfall|elephant'},
                 activities=[r'luang|phousi|monk|alms', r'elephant|kuang|waterfall']),
    'Italy': dict(file='italyListingData.js', captions=r'italy|rome|venice|venezia|florence|milan|pisa|colosseum|vatican|amalfi|tuscany|italian|burano|duomo di milano|trevi',
                  places={'Rome': r'rome|colosseum|vatican|trevi|pantheon|roman', 'Venice': r'venice|venezia|gondola|burano|rialto|san marco', 'Florence': r'florence|tuscany|ponte vecchio|uffizi', 'Milan': r'milan|duomo di milano|galleria'},
                  activities=[r'colosseum|vatican|rome', r'venice|burano']),
    'Greece': dict(file='greeceListingData.js', slugs=r'greece|athens',
                   places={'Athens': r'athens|acropolis|parthenon|plaka', 'Santorini': r'santorini|oia|fira|caldera', 'Mykonos': r'mykonos|windmill|little venice', 'Crete': r'crete|chania|heraklion|delphi|olympia|corinth'},
                   activities=[r'acropolis|parthenon|athens', r'santorini|oia|caldera']),
    'Norway': dict(file='norwayListingData.js', countries={'Norway', 'Oslo', 'Scandinavia'}, slugs=r'norway|scandinav|oslo|arctic', captions=r'norway|oslo|bergen|fjord|tromso|tromsø|lofoten|flam|flåm|geiranger|norwegian|aurora|northern lights|husky|reindeer|sognefjord|stavanger|alta|kirkenes|snow hotel|hurtigruten',
                   places={'Oslo': r'oslo opera|opera|vigeland|akershus|oslo', 'Bergen': r'bergen|bryggen|floyen|fløyen', 'Tromsø': r'tromso|tromsø|arctic|aurora|northern lights', 'Flåm & Sognefjord': r'flåm|flam\b|sognefjord|geiranger|nærøy|naeroy|fjord'},
                   activities=[r'fjord|flåm|flam\b|geiranger', r'aurora|northern lights|husky|reindeer']),
    'Ireland': dict(file='irelandListingData.js', slugs=r'ireland',
                    places={'Dublin': r'dublin|trinity|temple bar|guinness', 'Galway': r'galway|connemara|salthill', 'Killarney': r'killarney|kerry|dingle|muckross', 'Belfast & Antrim': r'belfast|antrim|giant|moher|cliff|cork|limerick'},
                    activities=[r'dublin|trinity|guinness', r'moher|cliff|galway']),
    'Finland': dict(file='finlandListingData.js', countries={'Finland', 'Helsinki'}, slugs=r'finland|lapland', captions=r'finland|helsinki|lapland|rovaniemi|santa|sauna|finnish|husky|reindeer|aurora|northern lights|glass igloo|snowmobile|levi|saariselk',
                    places={'Helsinki': r'helsinki|senate|suomenlinna|cathedral', 'Rovaniemi': r'rovaniemi|santa|arctic circle', 'Saariselkä': r'saariselk|lapland|igloo|aurora|northern lights|levi', 'Lakeland': r'lake|turku|porvoo|tampere|forest|summer'},
                    activities=[r'santa|rovaniemi', r'husky|reindeer|snowmobile|aurora']),
    'Sweden': dict(file='swedenListingData.js', captions=r'sweden|stockholm|gothenburg|swedish|kiruna|abisko|gamla stan|vasa|skansen|icehotel|ice hotel|malm',
                   places={'Stockholm': r'stockholm city|skyview|stockholm', 'Gamla Stan': r'gamla stan|old town', 'Vasa Museum': r'vasa', 'Royal Palace': r'royal palace|town hall'},
                   activities=[r'gamla stan|royal palace|stockholm', r'icebar|ice hotel|icehotel|vasa|skyview']),
    'Sri Lanka': dict(file='sriLankaListingData.js', slugs=r'sri-lanka|lanka|kandy', countries={'Sri Lanka'},
                      places={'Kandy': r'tooth|kandy lake|kandy|peradeniya|bahiravokanda', 'Sigiriya': r'sigiriya|lion rock|pidurangala', 'Nuwara Eliya': r'nuwara|tea|gregory|ramboda|hakgala|ella', 'Bentota': r'bentota|madu|kosgoda|turtle|beach'},
                      activities=[r'sigiriya|lion rock', r'galle|lighthouse|fort']),
}


def gallery_items(v):
    if isinstance(v, list):
        return [g for g in v if isinstance(g, dict)]
    if isinstance(v, dict):
        out = []
        for k, val in v.items():
            vals = val if isinstance(val, list) else [val]
            out += [({**g, 'caption': g.get('caption') or k} if isinstance(g, dict) else {'url': g, 'caption': k}) for g in vals]
        return out
    return []


def load_pool(cfg):
    seen, pool = set(), []
    for path in sorted(glob.glob(f'{ROOT}/import/*/raw.json')):
        slug = path.split('/')[-2]
        try:
            d = json.load(open(path))
        except Exception:
            continue
        by_country = cfg.get('countries') and str(d.get('country')) in cfg['countries']
        by_slug = cfg.get('slugs') and re.search(cfg['slugs'], slug, re.I)
        items = gallery_items(d.get('dest_gallery')) + gallery_items(d.get('gallery')) + gallery_items(d.get('hero_tiles'))
        for g in items:
            url, cap = g.get('url'), (g.get('caption') or '').strip()
            if not url or url in seen or PROMO.search(cap) or PROMO.search(url.split('/')[-1]):
                continue
            by_caption = cfg.get('captions') and re.search(cfg['captions'], cap, re.I)
            if not (by_country or by_slug or by_caption):
                continue
            seen.add(url)
            pool.append({'url': url, 'cap': cap, 'label': cap or slug.replace('-', ' '), 'file': url.split('/')[-1]})
    return pool


def take(pool, used, pattern=None, prefer=None):
    low = min(used.get(p['url'], 0) for p in pool)
    cands = [p for p in pool if used.get(p['url'], 0) == low]  # least-used first (reuse only once the pool is exhausted)
    if pattern:
        hit = []
        for alt in pattern.split('|'):  # alternatives are listed most-iconic first
            hit = [p for p in cands if re.search(alt, p['cap'], re.I)] or [p for p in cands if re.search(alt, p['file'], re.I)]
            if hit:
                break
        if hit:
            cands = hit
    if prefer:
        pref = [p for p in cands if prefer.search(p['cap'])]
        if pref:
            cands = pref
    # prefer real photos (jpg) over graphics
    cands.sort(key=lambda p: not p['file'].lower().endswith(('.jpg', '.jpeg', '.webp')))
    pick = cands[0]
    used[pick['url']] = used.get(pick['url'], 0) + 1
    return pick


def th(url, w):
    return f'{url}?w={w}&dpr=1' if 'thrillophilia' in url else url


def assign(country, cfg):
    path = f'{SRC}/{cfg["file"]}'
    s = open(path).read()
    pool = load_pool(cfg)
    if len(pool) < 4:
        print(f'{country}: only {len(pool)} photos, skipping')
        return
    used = {}
    P = {}
    # places first so the most specific captions land on the right tile
    place_names = re.findall(r'^\s*\["([^"]+)", IMG\.hero\]', s, re.M)
    place_pat = cfg['places']
    P['places'] = [take(pool, used, place_pat.get(n, re.escape(n))) for n in place_names]
    P['activities'] = [take(pool, used, pat) for pat in cfg['activities']]
    P['planner'] = take(pool, used, r'aerial|view|panoram|landscape|sunset|skyline')
    P['customers'] = [take(pool, used, None, PEOPLE) for _ in range(4)]
    P['reviews'] = [take(pool, used, None, PEOPLE) for _ in range(3)]
    icons = re.findall(r"tag: '(?:Travel guide|Inspiration)', icon: '([a-z]+)', image: IMG\.hero", s)
    P['themes'] = [take(pool, used, THEME_HINTS.get(ic)) for ic in icons]

    # rewrite the slots
    s = s.replace('bg: wide(IMG.RAW.hero, 2000)', 'bg: P.planner', 1)
    for i in range(3):
        s = s.replace('image: wide(IMG.RAW.hero, 600)', f'image: P.reviews[{i}]', 1)
    s = s.replace('photos: [wide(IMG.RAW.hero, 600), wide(IMG.RAW.hero, 300), wide(IMG.RAW.hero, 300), wide(IMG.RAW.hero, 450)]', 'photos: P.customers', 1)
    for i, n in enumerate(place_names):
        s = re.sub(r'(\["%s", )IMG\.hero\]' % re.escape(n), r'\g<1>P.places[%d]]' % i, s, count=1)
    act_i = iter(range(len(P['activities'])))
    s = re.sub(r"(tag: 'Highlight', image: )IMG\.hero", lambda m: f"{m.group(1)}P.activities[{next(act_i)}]", s)
    th_i = iter(range(len(P['themes'])))
    s = re.sub(r"(icon: '[a-z]+', image: )IMG\.hero", lambda m: f"{m.group(1)}P.themes[{next(th_i)}]", s)

    block = ['// Photo slots: one distinct, place-matched photo per tile (from the imported trips\' galleries).', 'const P = {']
    block.append(f"  planner: '{th(P['planner']['url'], 2000)}', // {P['planner']['cap']}")
    for key, w in (('places', 1200), ('activities', 1200), ('customers', 900), ('reviews', 600), ('themes', 1200)):
        block.append(f'  {key}: [')
        block += [f"    '{th(p['url'], w)}', // {p['label']}" for p in P[key]]
        block.append('  ],')
    block.append('};')
    s = re.sub(r'(^const N = .*;\n)', lambda m: m.group(1) + '\n' + '\n'.join(block) + '\n', s, count=1, flags=re.M)
    open(path, 'w').write(s)
    distinct = len({p['url'] for v in P.values() for p in (v if isinstance(v, list) else [v])})
    total = sum(len(v) if isinstance(v, list) else 1 for v in P.values())
    print(f'{country}: pool {len(pool)}, {distinct}/{total} distinct photos -> {cfg["file"]}')
    for n, p in zip(place_names, P['places']):
        print(f'   place {n:<16} {p["label"][:60]}')
    for p in P['activities']:
        print(f'   activity         {p["label"][:60]}')


if __name__ == '__main__':
    names = sys.argv[1:] or list(CONFIG)
    for c in names:
        assign(c, CONFIG[c])
