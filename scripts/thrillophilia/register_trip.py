"""Register a built trip: EgyptDetail.jsx slug map + each country's <country>ToursData.js products list.

usage: python3 register_trip.py <camelName> thailand singapore
"""
import re
import sys

camel = sys.argv[1]
countries = sys.argv[2:]

DETAIL = '/app/frontend/src/pages/EgyptDetail.jsx'
src = open(DETAIL).read()
if camel + 'BySlug' not in src:
    anchor = "import { bestOfPhuketKrabiBangkokBySlug } from '../tours/bestOfPhuketKrabiBangkokData';"
    src = src.replace(anchor, anchor + "\nimport { %sBySlug } from '../tours/%sData';" % (camel, camel))
    anchor2 = '  ...bestOfPhuketKrabiBangkokBySlug'
    src = src.replace(anchor2, anchor2 + ',\n  ...%sBySlug' % camel)
    open(DETAIL, 'w').write(src)
    print('EgyptDetail: added', camel)
else:
    print('EgyptDetail: already present')

for c in countries:
    f = '/app/frontend/src/tours/%sToursData.js' % c
    s = open(f).read()
    if camel + 'Product' in s:
        print(c, 'already present')
        continue
    imp = "import { %sProduct } from './%sData';\n" % (camel, camel)
    lines = s.split('\n')
    last_import = max(i for i, l in enumerate(lines) if l.startswith('import '))
    lines.insert(last_import + 1, imp.rstrip())
    s = '\n'.join(lines)
    m = re.search(r'export const %sProducts = (.+);' % c, s)
    expr = m.group(1)
    if expr.startswith('['):
        new = expr[:-1] + ', %sProduct]' % camel
    else:
        new = '[...%s, %sProduct]' % (expr, camel)
    s = s[:m.start(1)] + new + s[m.end(1):]
    open(f, 'w').write(s)
    print(c, 'registered')
