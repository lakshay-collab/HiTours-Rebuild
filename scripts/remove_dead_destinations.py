#!/usr/bin/env python3
"""Remove destinations that have no Thrillophilia products from the site.

Deletes their pages, data modules, nav/search/footer/sitemap entries and routes, and reports any
identifier that is still referenced afterwards.
"""
import glob
import os
import re
import sys

SRC = '/app/frontend/src'
# display name, url slug, module prefix
DESTS = [
    ('Iceland', 'iceland', 'iceland'),
    ('Spain', 'spain', 'spain'),
    ('Portugal', 'portugal', 'portugal'),
    ('Croatia', 'croatia', 'croatia'),
    ('England', 'england', 'england'),
    ('Scotland', 'scotland', 'scotland'),
    ('Sri Lanka', 'sri-lanka', 'srilanka'),
    ('Maldives', 'maldives', 'maldives'),
    ('Philippines', 'philippines', 'philippines'),
]
NAMES = [d[0] for d in DESTS]
PATHS = ['/europe/%s' % d[1] for d in DESTS] + ['/asia/%s' % d[1] for d in DESTS]
MODULES = [d[2] for d in DESTS]

files = [f for f in glob.glob('%s/**/*.js' % SRC, recursive=True) + glob.glob('%s/**/*.jsx' % SRC, recursive=True)]
changed = []

for f in files:
    s0 = open(f).read()
    s = s0
    # 1. import lines for the dead modules
    for m in MODULES:
        s = re.sub(r"^import .*?['\"][^'\"]*(%sToursData|%sListingData|%sPackages|%sData|%sGlaciersData)['\"];\n" % (m, m, m, m, m),
                   '', s, flags=re.M)
    # 2. map entries: 'Iceland': '/europe/iceland',
    for n in NAMES:
        s = re.sub(r"['\"]%s['\"]:\s*'[^']*',?\s*" % re.escape(n), '', s)
    # 3. array / object literal entries that mention a dead destination
    for n in NAMES:
        s = re.sub(r"\[\s*[\"']%s[\"'][^\[\]]*?\],\s*" % re.escape(n), '', s)
        s = re.sub(r"\{[^{}]*[\"']%s[\"'][^{}]*\},\s*" % re.escape(n), '', s)
    for p in PATHS:
        s = re.sub(r"\[[^\[\]]*%s[^\[\]]*\],\s*" % re.escape(p), '', s)
        s = re.sub(r"\{[^{}]*%s[^{}]*\},\s*" % re.escape(p), '', s)
        s = re.sub(r"^\s*'%s',?\n" % re.escape(p), '', s, flags=re.M)
    # 4. leftover spreads / plain references on their own line
    for m in MODULES:
        s = re.sub(r"^\s*\.\.\.%sBySlug,\n" % m, '', s, flags=re.M)
        s = re.sub(r"^\s*%s(Products|BySlug|Tours)?,\n" % m, '', s, flags=re.M)
    if s != s0:
        open(f, 'w').write(s)
        changed.append(os.path.relpath(f, SRC))

print('edited %d files' % len(changed))
print(', '.join(changed))

# 5. delete the dead modules and pages
PAGES = {'iceland': 'IcelandListing', 'spain': 'SpainListing', 'portugal': 'PortugalListing',
         'croatia': 'CroatiaListing', 'england': 'EnglandListing', 'scotland': 'ScotlandListing',
         'srilanka': 'SriLankaListing', 'maldives': 'MaldivesListing', 'philippines': 'PhilippinesListing'}
removed = []
for m in MODULES:
    for p in ['%s/%sListingData.js' % (SRC, m), '%s/%sPackages.js' % (SRC, m),
              '%s/tours/%sToursData.js' % (SRC, m), '%s/%sData.js' % (SRC, m),
              '%s/tours/%sGlaciersData.js' % (SRC, m), '%s/pages/%s.jsx' % (SRC, PAGES[m])]:
        if os.path.exists(p):
            os.remove(p)
            removed.append(os.path.relpath(p, SRC))
print('removed:', ', '.join(removed))

# 6. report leftovers
leftover = {}
for f in glob.glob('%s/**/*.js' % SRC, recursive=True) + glob.glob('%s/**/*.jsx' % SRC, recursive=True):
    s = open(f).read()
    hits = set()
    for m in MODULES:
        for ident in ['%sProducts' % m, '%sBySlug' % m, '%sTours' % m, PAGES[m]]:
            if ident in s:
                hits.add(ident)
    for p in PATHS:
        if p in s:
            hits.add(p)
    if hits:
        leftover[os.path.relpath(f, SRC)] = sorted(hits)
print('LEFTOVERS:')
for k, v in leftover.items():
    print(' ', k, v)
