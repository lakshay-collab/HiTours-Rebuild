"""Click-through probe: open the page in headless Chrome, open View All Images and all tabs, capture gallery API JSON + image URLs."""
import json
import re
import sys
import time
from playwright.sync_api import sync_playwright

url = sys.argv[1]
out = sys.argv[2]
captured = {'json': [], 'images': set(), 'tabs': {}}
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome', headless=True, args=['--no-sandbox'])
    pg = b.new_page(viewport={'width': 1440, 'height': 900}, user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36')

    def on_resp(r):
        ct = r.headers.get('content-type', '')
        u = r.url
        if 'json' in ct and ('media' in u or 'gallery' in u or 'image' in u or 'api' in u):
            try:
                captured['json'].append({'url': u, 'body': r.json()})
            except Exception:
                pass
        if re.search(r'media1\.thrillophilia\.com/filestore/', u):
            captured['images'].add(u.split('?')[0])
    pg.on('response', on_resp)
    pg.goto(url, wait_until='domcontentloaded', timeout=90000)
    time.sleep(4)
    pg.screenshot(path=out + '/landing.png')
    for _ in range(3):
        if pg.locator('.modal-backdrop').count():
            pg.keyboard.press('Escape')
            time.sleep(0.6)
            for sel in ['.modal.show [class*=close]', '.modal.show button:has-text("×")', '.modal.show [aria-label=Close]', '.modal.show svg']:
                try:
                    pg.locator(sel).first.click(timeout=1200, force=True)
                except Exception:
                    pass
    pg.evaluate("document.querySelectorAll('.modal-backdrop, .modal.show').forEach(e => e.remove()); document.body.classList.remove('modal-open'); document.body.style.overflow='auto'")
    pg.screenshot(path=out + '/after_close.png')
    for _ in range(2):
        for y in range(0, 12000, 800):
            pg.mouse.wheel(0, 800)
            time.sleep(0.25)
        pg.evaluate('window.scrollTo(0,0)')
    btn = pg.get_by_text(re.compile(r'View All', re.I)).first
    print('view all count', pg.get_by_text(re.compile(r'View All', re.I)).count())
    btn.click(timeout=10000, force=True)
    time.sleep(3)
    pg.screenshot(path=out + '/gallery_open.png')
    tabs = pg.locator('[role="tab"], button, a').filter(has_text=re.compile(r'^(Destinations?|Stays?|Activit|Activity & Sightseeing|All)', re.I))
    print('tab candidates', tabs.count())
    for i in range(min(tabs.count(), 8)):
        t = tabs.nth(i)
        try:
            name = t.inner_text(timeout=1000).strip()
            t.click(timeout=3000)
            time.sleep(2)
            for _ in range(15):
                pg.mouse.wheel(0, 1200)
                time.sleep(0.3)
            imgs = pg.evaluate("Array.from(document.querySelectorAll('img')).map(i => i.currentSrc || i.src).filter(s => s.includes('filestore'))")
            captured['tabs'][name] = sorted(set(s.split('?')[0] for s in imgs))
            print('tab', name, len(captured['tabs'][name]))
        except Exception as ex:
            print('tab fail', ex)
    b.close()
json.dump({'json_urls': [j['url'] for j in captured['json']], 'json': captured['json'], 'images': sorted(captured['images']), 'tabs': captured['tabs']}, open(out + '/probe.json', 'w'), indent=1)
print('json responses', len(captured['json']), 'images', len(captured['images']))
