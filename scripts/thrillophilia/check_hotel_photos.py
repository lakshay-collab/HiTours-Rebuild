"""Open a Thrillophilia tour page and report the photo count each hotel gallery shows."""
import re
import sys

from playwright.sync_api import sync_playwright

url = sys.argv[1]
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={'width': 1400, 'height': 1000})
    seen = []
    pg.on('response', lambda r: seen.append(r.url) if re.search(r'hotel|propert|gallery|media', r.url, re.I) else None)
    pg.goto(url, wait_until='domcontentloaded', timeout=90000)
    pg.wait_for_timeout(6000)
    for _ in range(12):
        pg.mouse.wheel(0, 1200)
        pg.wait_for_timeout(400)
    txt = pg.inner_text('body')
    for m in re.finditer(r'(View photos[^\n]*)', txt):
        print('btn:', m.group(1))
    for name in sys.argv[2:]:
        print(name, 'present:', name.split(',')[0] in txt)
    btns = pg.get_by_text(re.compile(r'View photos', re.I))
    print('view photo buttons:', btns.count())
    for i in range(btns.count()):
        try:
            btns.nth(i).click(timeout=5000)
            pg.wait_for_timeout(2500)
            imgs = pg.eval_on_selector_all('img', 'els => els.map(e => e.src)')
            big = [u for u in imgs if 'filestore' in u]
            head = pg.inner_text('body')[:400].replace('\n', ' | ')
            print(i, 'imgs', len(big), 'head', head[:200])
            pg.keyboard.press('Escape')
            pg.wait_for_timeout(1000)
        except Exception as ex:
            print(i, 'click failed', ex)
    print('hotel-ish responses:', sorted(set(u for u in seen if 'api' in u))[:40])
    b.close()
