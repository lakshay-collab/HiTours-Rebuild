"""Checks for an imported Thrillophilia trip data file (PART 8 / section 6 of the import guide)."""
import json
import re
import subprocess
import sys
import urllib.request

DATA = sys.argv[1]
RAW = sys.argv[2]
src = open(DATA).read()
raw = json.load(open(RAW))
fails = []

# pull every quoted string from the data file
strings = re.findall(r"'((?:[^'\\]|\\.)*)'", src) + re.findall(r'`([^`]*)`', src)
text = [s for s in strings if ' ' in s and not s.startswith('/') and 'thrillophilia' not in s]

days = sorted(int(m) for m in re.findall(r'\$\{DAY_MARK\}Day (\d+)', src))
exp_days = int(re.search(r"days: '(\d+) days", src).group(1))
if days != list(range(1, exp_days + 1)):
    fails.append('1 day headings %s' % days)
first = [s for s in strings if s.startswith('Arrival at')]
if not first or 'transfer' not in first[0]:
    fails.append('2 day 1 arrival line')

ICON = ('transfer', 'drive to', 'driven', 'pick up', 'pickup', 'drop off', 'dropoff', 'flight', 'fly', 'flying')
bullets = re.findall(r"bullets: \[(.*?)\n    \]", src, re.S)
blines = []
for b in bullets:
    blines += [s for s in re.findall(r"'((?:[^'\\]|\\.)*)'", b)]
for line in blines:
    low = line.lower()
    hits = [w for w in ICON if w in low]
    if hits and not (('transfer' in hits and low.count('transfer') >= 1) or 'flight' in hits):
        fails.append('3 icon word %r in %r' % (hits, line))
for line in blines:
    if line.lower().startswith('optional') and not line.startswith('Optional: '):
        fails.append('3b optional prefix %r' % line)

nights = [int(m) for m in re.findall(r"description: '(\d+) nights", src)]
exp_nights = int(re.search(r"days: '\d+ days / (\d+) nights'", src).group(1))
if sum(nights) != exp_nights:
    fails.append('4 nights %s != %s' % (nights, exp_nights))

hotel_counts = [len(re.findall(r"img\(|'/tours/", block)) for block in re.findall(r'accommodation: \{.*?images: \[(.*?)\]', src, re.S)]
src_counts = [len(h['images']) for h in raw['hotels']]
if any(c < 3 for c in hotel_counts):
    fails.append('5 hotel photos %s' % hotel_counts)

for u in raw['hero_tiles']:
    key = u.rsplit('/', 1)[-1]
    if key in src:
        fails.append('9a hero tile used %s' % key)

stats = re.search(r'stats: \{ days: (\d+), cities: (\d+), hotels: (\d+), activities: (\d+), transfers: (\d+) \}', src).groups()
services = dict((b, a) for a, b in re.findall(r"\['([^']+)', '([^']+)'\]", src))
prod = dict(re.findall(r'\n  (days|stops|hotels|cities|activities|transfers|meals): (\d+),', src))
if not (stats[2] == prod['hotels'] == services['Accommodation'].split()[0]):
    fails.append('6 hotels mismatch %s %s %s' % (stats[2], prod['hotels'], services['Accommodation']))
if not (stats[3] == prod['activities'] == services['Activities'].split()[0]):
    fails.append('6 experiences mismatch %s %s %s' % (stats[3], prod['activities'], services['Activities']))
if not (stats[4] == prod['transfers'] == services['Transport'].split()[0]):
    fails.append('6 transfers mismatch')
if prod['meals'] != services['Meals'].split()[0]:
    fails.append('6 meals mismatch %s %s' % (prod['meals'], services['Meals']))

price = int(re.search(r'price: (\d+),', src).group(1))
inr = raw['price_per_adult']
if price != round(inr * 0.95):
    fails.append('7 price %s vs %s' % (price, round(inr * 0.95)))

for s in text:
    if re.search(r'[\u2013\u2014]', s) or re.search(r' - ', s):
        fails.append('8 dash in %r' % s[:60])

src_text = ' '.join([raw['overview']] + raw['highlights'] + raw['inclusions'] + [d.get('desc') or '' for d in raw['days']]).lower()
src_words = re.findall(r'[a-z]+', src_text)
src_8 = set(tuple(src_words[i:i + 8]) for i in range(len(src_words) - 7))
for s in text:
    w = re.findall(r'[a-z]+', s.lower())
    for i in range(len(w) - 7):
        if tuple(w[i:i + 8]) in src_8:
            fails.append('9 copy overlap %r' % ' '.join(w[i:i + 8]))

for day, imgs in re.findall(r'\n      (\d+): \[(.*?)\]', src, re.S):
    items = re.findall(r"img\('([^']+)'\)", imgs)
    if not 3 <= len(items) <= 7:
        fails.append('9c day %s has %d carousel images' % (day, len(items)))
    if len(set(items)) != len(items):
        fails.append('9c day %s repeats an image' % day)

local = re.findall(r"'(/tours/[^']+)'", src)
for p in local:
    import os
    if not os.path.exists('/app/frontend/public' + p):
        fails.append('12 missing file %s' % p)

remote = sorted(set(re.findall(r"img\('([^']+)'\)", src)))
bad = []
for p in remote:
    u = 'https://media1.thrillophilia.com/filestore/' + p + '?w=400&dpr=1'
    try:
        r = urllib.request.urlopen(urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'}), timeout=30)
        if r.status != 200 or int(r.headers.get('content-length') or 1) < 500:
            bad.append(p)
    except Exception as ex:
        bad.append('%s %s' % (p, ex))
if bad:
    fails.append('12b unreachable images %s' % bad[:5])

print('day headings', days)
print('hotel photo counts', hotel_counts, 'source counts', src_counts)
print('nights', nights, 'total', sum(nights))
print('price', price, 'source INR', inr)
print('remote images', len(remote), 'local images', len(set(local)))
print('FAILS:' if fails else 'ALL CHECKS PASS')
for f in fails:
    print(' -', f)
