import json, re, os, shutil
from PIL import Image

SRC = '/tmp/zip1/zip1'
PUB = '/app/frontend/public/srilanka-packages'
USD_INR = 84

META = {
 'glimpses-of-sri-lanka-8-days-tour': dict(name='Glimpses of Sri Lanka: 8-Day Island Journey', tag='Culture', styles=['Culture','Family','Honeymoon'], gallery=[1,6,7,4,15], alt='Aerial view of Sigiriya Rock Fortress rising from the jungle, Sri Lanka',
   overnight=['Dambulla','Dambulla','Kandy','Nuwara Eliya','Nuwara Eliya','Galle','Galle',None], meals=['D']+['B, D']*6+['B'],
   stays=[['Dambulla','Nights 1–2','Aliya Resort, Dambulla'],['Kandy','Night 3','Jetwing Kandy Gallery'],['Nuwara Eliya','Nights 4–5','Tea & Experience Factory, Nuwara Eliya'],['Galle','Nights 6–7','Amari Galle']]),
 'scenic-sri-lanka-with-free-ella-train-ride': dict(name='Scenic Sri Lanka with the Ella Train Ride', tag='Culture', styles=['Culture','Honeymoon','Family'], gallery=[6,11,12,3,5], alt='Train crossing the Nine Arches Bridge near Ella, Sri Lanka',
   overnight=['Colombo','Kandy','Kandy','Ella','Galle','Colombo',None], meals=['L/D','B, L/D','B, L/D','B, L/D','B, L/D','B','B'],
   stays=[['Colombo','Night 1','Fairway Colombo (deluxe)'],['Kandy','Nights 2–3','Hotel Topaz, Kandy (deluxe)'],['Ella','Night 4','Oak Ray Ella Gap Hotel'],['Galle','Night 5','Villa Peacock, Galle (deluxe villa)'],['Colombo','Night 6','Grand Oriental Hotel Colombo']]),
 'sha-lanka-negombo-motorcycle-tour-sri-lanka': dict(name='Negombo to Mirissa: Sri Lanka Motorcycle Tour', tag='Adventure', styles=['Adventure'], gallery=[1,9,10,6,2], alt='Riders on Royal Enfield motorcycles crossing Sri Lankan countryside',
   overnight=['Negombo','Kandy','Knuckles Range','Ella','Tissamaharama','Mirissa','Mirissa','Kitulgala',None], meals=['D']+['B, D']*7+['B'],
   stays=[['Negombo','Night 1','Guesthouse on Negombo Beach'],['Kandy','Night 2','Nature stay or guesthouse, Kandy'],['Knuckles Range','Night 3','Guesthouse in the Knuckles Range'],['Ella','Night 4','Guesthouse or nature stay, Ella'],['Tissamaharama','Night 5','Guesthouse at Tissamaharama (Yala)'],['Mirissa','Nights 6–7','Guesthouse on Mirissa Beach'],['Kitulgala','Night 8','Nature stay or guesthouse, Kitulgala']]),
 'sri-lanka-highlights-getaway-to-the-pearl-of-indian-ocean': dict(name='Sri Lanka Highlights: Pearl of the Indian Ocean', tag='Beach', styles=['Beach','Culture','Family','Short trips'], gallery=[10,2,5,11,13], alt='Kandy Lake and the Temple of the Tooth, Sri Lanka',
   overnight=['Kandy','Bentota','Bentota','Colombo',None], meals=['L/D','B, L/D','B, L/D','B, L/D','B'],
   stays=[['Kandy','Night 1','Hotel Topaz, Kandy (deluxe)'],['Bentota','Nights 2–3','Centara Ceysands Resort & Spa, Bentota (super deluxe)'],['Colombo','Night 4','Mirage Hotel Colombo (deluxe)']]),
 'sri-lanka-maldives-tour-package': dict(name='Sri Lanka & Maldives Twin-Island Holiday', tag='Honeymoon', styles=['Honeymoon','Beach','Luxury'], gallery=[5,1,8,10,12], alt='Overwater villas on a turquoise lagoon in the Maldives',
   overnight=['Kandy','Bentota','Colombo','Maldives','Maldives','Maldives',None], meals=['']+['B']*6,
   stays=[['Kandy','Night 1','Hotel or guesthouse in Kandy'],['Bentota','Night 2','Hotel or guesthouse in Bentota'],['Colombo','Night 3','Hotel or guesthouse in Colombo'],['Maldives','Nights 4–6','Island resort in the Maldives']]),
 'sri-lanka-package-from-delhi-with-airfare': dict(name='Sri Lanka from Delhi with Airfare', tag='Culture', styles=['Culture','Beach','Family'], gallery=[3,2,6,10,11], alt='Blue train winding through the tea hills of Sri Lanka',
   overnight=['Dambulla','Dambulla','Kandy','Kandy','Bentota','Bentota','Colombo',None], meals=['']+['B']*7,
   stays=[['Dambulla','Nights 1–2','Raintree Dambulla (deluxe)'],['Kandy','Nights 3–4','Skyloft Kandy (deluxe)'],['Bentota','Nights 5–6','Hibiscus Beach Hotel, Bentota (deluxe)'],['Colombo','Night 7','Grand Oriental Hotel Colombo (deluxe)']]),
 'sri-lanka-tour-package-with-flight': dict(name='Sri Lanka Tour Package with Flights', tag='Culture', styles=['Culture','Beach','Family'], gallery=[3,7,2,11,15], alt='Rolling tea estates of Nuwara Eliya, Sri Lanka',
   overnight=['Kandy','Kandy','Kandy','Nuwara Eliya','Bentota','Bentota','Colombo',None], meals=['D']+['B, D']*6+['B'],
   stays=[['Kandy','Nights 1–3','Deluxe hotel in Kandy'],['Nuwara Eliya','Night 4','Deluxe hotel in Nuwara Eliya'],['Bentota','Nights 5–6','Deluxe hotel in Bentota'],['Colombo','Night 7','Deluxe hotel in Colombo']]),
 'sri-lanka-with-free-excursion-to-kandy': dict(name='Sri Lanka with a Free Excursion to Kandy', tag='Culture', styles=['Culture','Beach','Honeymoon'], gallery=[9,1,2,8,11], alt='Stairway up the Sigiriya Rock Fortress, Sri Lanka',
   overnight=['Sigiriya','Kandy','Kandy','Bentota','Bentota','Colombo',None], meals=['L/D']+['B, L/D']*5+['B'],
   stays=[['Sigiriya','Night 1','Wewa Addara, Sigiriya (deluxe)'],['Kandy','Nights 2–3','Hotel Devon Kandy (deluxe)'],['Bentota','Nights 4–5','Haus Berlin, Bentota (deluxe)'],['Colombo','Night 6','Grand Oriental Hotel Colombo (deluxe)']]),
 'tropical-sri-lanka-with-a-free-excursion-to-sigiriya': dict(name='Tropical Sri Lanka with a Free Excursion to Sigiriya', tag='Beach', styles=['Beach','Culture','Honeymoon','Family'], gallery=[1,3,2,8,13], alt='Temple of the Sacred Tooth Relic, Kandy, Sri Lanka',
   overnight=['Kandy','Kandy','Nuwara Eliya','Bentota','Bentota','Colombo',None], meals=['L/D']+['B, L/D']*5+['B'],
   stays=[['Kandy','Nights 1–2','Hotel Devon Kandy (deluxe)'],['Nuwara Eliya','Night 3','Hotel Ashford, Nuwara Eliya'],['Bentota','Nights 4–5','Rockside Beach Resort, Bentota'],['Colombo','Night 6','Berjaya Hotel Colombo (deluxe)']]),
}
ORDER = ['tropical-sri-lanka-with-a-free-excursion-to-sigiriya','sri-lanka-highlights-getaway-to-the-pearl-of-indian-ocean','sri-lanka-with-free-excursion-to-kandy','scenic-sri-lanka-with-free-ella-train-ride','glimpses-of-sri-lanka-8-days-tour','sri-lanka-tour-package-with-flight','sri-lanka-package-from-delhi-with-airfare','sri-lanka-maldives-tour-package','sha-lanka-negombo-motorcycle-tour-sri-lanka']

SKIP = re.compile(r'PCR|covid|bio bubble|sanitiz|Level 1|insurance|SIM|meals? (for the day )?include|breakfast is served|lunch or dinner|overnight stay|stay overnight|check in to|check-in|check out|checkout|you will stay|you spend|your stay|rest of the day is yours|recommended experience|rooms? (are|is) allocated|a ride of \d+|back to (the|your) hotel|driven back|driven onwards|jaw on the floor', re.I)
STRIP = re.compile(r'^(Then|Next|Later|Afterwards?|Finally|First|Afterward|But first|And then|After that),?\s+', re.I)

def clean(s):
    s = s.replace('\u2019', '’').replace(' - ', ', ').replace(' – ', ', ').replace('—', ',').strip()
    return STRIP.sub('', s)

def bullets(details):
    sents = [x.strip() for x in re.split(r'(?<=[.!?])\s+', details) if x.strip()]
    out = []
    for s in sents:
        if SKIP.search(s) or len(s) < 25: continue
        s = clean(s).rstrip('.')
        s = s[0].upper() + s[1:]
        out.append(s)
        if len(out) == 5: break
    if not out:
        for s in sents[:2]: out.append(clean(s).rstrip('.'))
    return out

def js(v):
    return json.dumps(v, ensure_ascii=False).replace("'", "\\'").replace('"', "'") if isinstance(v, str) else json.dumps(v, ensure_ascii=False)

def price_inr(p):
    cur, num = p['currency'], float(p['discounted_price'].split()[-1].replace(',', ''))
    if cur == 'INR': return int(round(num))
    return int(round(num * USD_INR / 100) * 100) - 1

os.makedirs(PUB, exist_ok=True)
CITY = {}
pk_js = []
for slug in ORDER:
    m = META[slug]; d = json.load(open(f'{SRC}/{slug}/product_data.json'))
    outdir = f'{PUB}/{slug}'; os.makedirs(outdir, exist_ok=True)
    gal = []
    for k, idx in enumerate(m['gallery'], 1):
        src = [f for f in os.listdir(f'{SRC}/{slug}/images') if f.startswith(f'image_{idx:03d}')][0]
        im = Image.open(f'{SRC}/{slug}/images/{src}').convert('RGB')
        if im.width > 1400: im = im.resize((1400, int(im.height * 1400 / im.width)))
        dst = f'{outdir}/g{k}.webp'; im.save(dst, 'WEBP', quality=78)
        gal.append(f'/srilanka-packages/{slug}/g{k}.webp')
    days = len(d['itinerary']); nights = days - 1
    itin = []
    for i, it in enumerate(d['itinerary']):
        title = clean(it['title']).replace(' and ', ' & ') if len(it['title']) > 60 else clean(it['title'])
        itin.append(f"      D({i+1}, {js(title)}, {js(m['meals'][i])}, {js(bullets(it['details']))}, {js(m['overnight'][i])})")
    incl = [clean(x).rstrip('.') for x in d['other_content'].get('inclusions', []) if not SKIP.search(x) or re.search(r'stay|transfer|flight', x, re.I)]
    incl = [x for x in incl if not re.search(r'PCR|covid|SIM|insurance', x, re.I)][:10]
    excl = [clean(x).rstrip('.') for x in d['other_content'].get('exclusions', []) if not re.search(r'not (explicitly )?(listed|specified)', x, re.I)]
    if not excl: excl = ['International flights unless stated', 'Visa charges and travel insurance', 'Expenses of a personal nature', 'Anything not mentioned under inclusions']
    excl = [x for x in excl if not re.search(r'refund', x, re.I)][:8]
    hl = [clean(x).rstrip('.') for x in d['other_content'].get('highlights', []) if not SKIP.search(x)][:6]
    acts = len(d['experiences_activities'])
    summary = clean(re.split(r'(?<=[.!?])\s+', d['product_description'])[0])
    if len(summary) > 260: summary = summary[:257].rsplit(' ', 1)[0] + '…'
    cities = list(dict.fromkeys(s[0] for s in m['stays']))
    for s in m['stays']: CITY.setdefault(s[0], [])
    price = price_inr(d['pricing'])
    code = f"{nights}N/{days}D " + ' · '.join(cities[:4])
    pk_js.append(f"""  {{
    slug: {js(slug)}, name: {js(m['name'])}, code: {js(code)}, days: {days}, nights: {nights}, tag: {js(m['tag'])}, styles: {js(m['styles'])},
    included: {{ hotels: {len(m['stays'])}, activities: {acts}, transfers: {days}, meals: {sum(len(x.split(',')) for x in m['meals'] if x)} }},
    summary: {js(summary)},
    highlights: {js(hl)},
    stays: {js(m['stays'])},
    itinerary: [
{chr(10).join(x + ',' for x in itin).rstrip(',')}
    ],
    pricing: PRICING({price}), price: {price},
    inclusions: {js(incl)}, exclusions: {js(excl)},
    gallery: {js(gal)}, alt: {js(m['alt'])}
  }}""")

header = """// Sri Lanka packages – source of truth: product uploads (zip1, 9 products). Same structured model as vietnamPackages.js.
// Prices: discounted per-person price from the upload; USD prices converted at USD_INR and rounded (edit USD_INR in scripts/convert_srilanka_zip.py to regenerate).
const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const ct = (p) => `${CT}/${p}?w=1080&q=60&fm=webp`;

export const IMG = {
  kandy: ct('5txxVlE127H9wf3FeJUKox/f8f3ad88cca71fc13bce4579481061f2/Kandy_Sri_Lanka_2.jpg'),
  colombo: ct('5Ct3r5b6xduSjwU0QaSWjl/88511cf3f2d85c643f081681d172f68e/Colombo_SriLanka_2.jpg'),
  sigiriya: ct('4ty416HtZ5fnIJe5U94pUn/04e383acf72b20230360d6cdeb960993/Sigiriya_Sri_Lanka.jpg'),
  galle: ct('74ItYZBeAzDqpNS76sj5Zg/a4e9c05ccc5070757dfdf657e93a819f/Galle_Sri_Lanka.jpg')
};
"""
G = lambda slug, n: f'/srilanka-packages/{slug}/g{n}.webp'
TROP, HI, KAN, SCEN, GLIM, FLT, DEL, MAL, MOTO = ORDER
CITY = {
  'Kandy': [G(TROP,1), G(HI,1), G(HI,5)], 'Colombo': [G(FLT,3), G(FLT,5), 'IMG.colombo'], 'Dambulla': [G(GLIM,1), G(KAN,1), 'IMG.sigiriya'], 'Sigiriya': [G(KAN,1), G(GLIM,1), G(SCEN,3)],
  'Nuwara Eliya': [G(FLT,1), G(GLIM,2), G(TROP,4)], 'Ella': [G(SCEN,1), G(DEL,1), G(KAN,3)], 'Galle': [G(SCEN,2), G(GLIM,3), 'IMG.galle'], 'Bentota': [G(TROP,5), G(KAN,5), G(KAN,4)],
  'Mirissa': [G(DEL,5), G(SCEN,4), G(KAN,2)], 'Maldives': [G(MAL,1), G(MAL,4), G(MAL,5)], 'Negombo': [G(MOTO,1), G(MOTO,4)], 'Knuckles Range': [G(MOTO,2), G(MOTO,1)],
  'Tissamaharama': [G(HI,2), G(MOTO,2)], 'Kitulgala': [G(MOTO,3), G(MOTO,2)]
}
city_js = "const CITY_IMG = {\n" + ",\n".join(f"  {js(c)}: [" + ", ".join(v if v.startswith('IMG.') else js(v) for v in vals) + "]" for c, vals in CITY.items()) + "\n};\nexport const cityImages = (c) => CITY_IMG[c] || [IMG.sigiriya];\n"
tail = """
const PRICING = (pp) => ({ currency: 'INR', basis: 'Per person on double-sharing basis, deluxe hotels as listed, excluding GST', rows: [['All departures', pp]], note: 'Final price confirmed by your specialist for your dates and hotel category' });
const D = (day, title, meals, bullets, overnight) => ({ day, title, meals, bullets, overnight });

export const packages = [
""" + ",\n".join(pk_js) + "\n];\n"
open('/app/frontend/src/srilankaPackages.js', 'w').write(header + city_js + tail)
print('written', len(pk_js), 'packages;', sum(len(v) for v in CITY.values()), 'city images')
