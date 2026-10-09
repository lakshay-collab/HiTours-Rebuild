"""Register a built trip: tours/tripIndex.js slug map + each country's <country>ToursData.js products list.

usage: python3 register_trip.py <camelName> thailand singapore
"""
import re
import sys

camel = sys.argv[1]
countries = sys.argv[2:]

INDEX = '/app/frontend/src/tours/tripIndex.js'
src = open(INDEX).read()
if camel + 'BySlug' not in src:
    lines = src.split('\n')
    last_import = max(i for i, l in enumerate(lines) if l.startswith('import '))
    lines.insert(last_import + 1, "import { %sBySlug } from './%sData';" % (camel, camel))
    src = '\n'.join(lines)
    src = re.sub(r'(\n  \.\.\.\w+BySlug)(\n\};)', r'\1,\n  ...%sBySlug\2' % camel, src, count=1)
    open(INDEX, 'w').write(src)
    print('tripIndex: added', camel)
else:
    print('tripIndex: already present')

for c in countries:
    f = '/app/frontend/src/tours/%sToursData.js' % c
    s = open(f).read()
    if camel + 'Product' in s:
        print(c, 'already present')
        continue
    lines = s.split('\n')
    last_import = max(i for i, l in enumerate(lines) if l.startswith('import '))
    lines.insert(last_import + 1, "import { %sProduct } from './%sData';" % (camel, camel))
    s = '\n'.join(lines)
    m = re.search(r'export const %sProducts = (\[.*?\]);' % c, s, re.S)
    expr = m.group(1)
    new = expr[:-1].rstrip() + ',\n  %sProduct\n]' % camel if '\n' in expr else expr[:-1] + ', %sProduct]' % camel
    s = s[:m.start(1)] + new + s[m.end(1):]
    open(f, 'w').write(s)
    print(c, 'registered')
