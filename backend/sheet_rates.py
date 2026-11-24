"""Reads the supplier rate sheets (published Zoho sheets, USD) and keeps a parsed copy in MongoDB."""
import asyncio
import json
import logging
import re
import time
import uuid
from datetime import datetime, timedelta, timezone

import requests

logger = logging.getLogger(__name__)

HOST = 'https://workdrive.hi.tours/sheet/published/'
SHEETS = {
    'hotels': 'it7hjeb4e92b75ef24f128ad0b7b76ec591ed',
    'transfers': 'hlzan21ead28437404d42b5779c0819f1781b',
    'activities': 'wmokk44dd97fc1ba14248a331511d28d95da5',
    'tickets': 'nmiulf970b1916d96485283c7a92961b40198',
}
REFRESH_HOURS = 6
RANGE_RE = re.compile(r'(\d{1,2} [A-Za-z]{3} \d{4})\s*-\s*(\d{1,2} [A-Za-z]{3} \d{4})')
_cache = {'data': None, 'checked': 0.0}
_lock = asyncio.Lock()


def _grid(rid: str, sheet: str = '0#', rows: int = 400, cols: int = 60) -> dict:
    s = requests.Session()
    s.headers['User-Agent'] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36'
    url = HOST + rid
    html = s.get(url, timeout=30).text
    bv = re.search(r'[A-Z][a-z]{2}_\d{1,2}_20\d\d_\d+', html).group(0)
    tabs = re.search(r'"21":\{"76":(\[\[.*?\]\])\}', html)
    out = {'tabs': {t[0]: t[1].strip() for t in json.loads(tabs.group(1))} if tabs else {}, 'cells': {}}
    for r0 in range(0, rows, 200):
        b = json.dumps([r0, 0, r0 + 199, cols], separators=(',', ':'))
        missed = json.dumps([[0] * (cols // 8 + 1)] * 200, separators=(',', ':'))
        data = {'associatedSheetName': sheet, 'ranges': json.dumps([{'sheetId': sheet, 'boundry': b, 'missed': missed, 'cfMissed': missed}], separators=(',', ':')),
                'vpRanges': f"[{{sheetId:'{sheet}',boundry:{b}}}]", 'meta': '{"23":32,"77":536870913,"78":895}', 'rid': rid, 'isPersist': 'true',
                'isTruncateViewPort': 'false', 'isDataNeeded': 'true', 'onLoadRequest': 'false', 'bv': bv, 'fetchType': 'VIEWPORT', 'proxyURL': 'fetchdata',
                'action': '902', 'zsreqcsr': s.cookies.get('zscookcsr'), 'utid': str(uuid.uuid4()) + str(int(time.time() * 1000)), 'tabType': 'cached',
                'responseVersionNumber': '3.0'}
        res = s.post(url, data=data, headers={'Origin': 'https://workdrive.hi.tours'}, timeout=30).json()
        for r, cells in res['23'][rid]['77'][sheet]['78']['76'].get('8', {}).items():
            for c, n, v in cells:
                if 'av' in v:
                    for k in range(n):
                        out['cells'].setdefault(int(r), {})[c + k] = str(v['av']).strip("'").strip()
    return out


def _num(v):
    try:
        return float(v)
    except (TypeError, ValueError):
        return None


def _ranges(text: str) -> list:
    return [[datetime.strptime(a, '%d %b %Y').date().isoformat(), datetime.strptime(b, '%d %b %Y').date().isoformat()] for a, b in RANGE_RE.findall(text or '')]


def _parse_hotels(cells: dict) -> list:
    """Each hotel: star, room, and seasons [{ranges, room, extra_adult, cnb}] (breakfast plan, USD per room per night)."""
    meal_row = next(r for r in sorted(cells) if any(v == 'Breakfast' for v in cells[r].values()))
    season_cols = [c for c, v in cells[meal_row].items() if v == 'Breakfast']
    ranges = {c: [x for r in range(1, meal_row) for x in _ranges(cells.get(r, {}).get(c))] for c in season_cols}
    hotels, cur = [], None
    for r in sorted(x for x in cells if x > meal_row):
        row = cells[r]
        label = row.get(4, '')
        if row.get(1) and row.get(2) and '(2P)' in label:
            cur = {'name': row[2].strip(), 'star': _num(row.get(3)), 'room': label.split('(2P)')[0].strip(), 'seasons': {}}
            hotels.append(cur)
            key = 'room'
        elif cur and label.startswith('Extra Bed (Adult)'):
            key = 'extra_adult'
        elif cur and label.startswith('Child without Bed'):
            key = 'cnb'
        else:
            continue
        for c in season_cols:
            if _num(row.get(c)) is not None:
                cur['seasons'].setdefault(c, {'ranges': ranges[c]})[key] = _num(row[c])
    for h in hotels:
        h['seasons'] = [s for s in h['seasons'].values() if 'room' in s]
    return hotels


def _season(cells: dict) -> list:
    return next((x for r in range(0, 4) for v in cells.get(r, {}).values() for x in [_ranges(v)] if x), [])


def _parse_transfers(cells: dict) -> list:
    out = []
    for r in sorted(cells):
        row = cells[r]
        pax = re.search(r'- (\d+) Pax', row.get(3, ''))
        price = next((p for c in (8, 9, 10) for p in [_num(row.get(c))] if p is not None), None)
        if pax and price is not None:
            out.append({'from': row.get(1, ''), 'to': row.get(2, ''), 'service': row[3].split('[[')[0].strip(), 'pax': int(pax.group(1)), 'price': price})
    return out


def _parse_per_person(cells: dict) -> list:
    out = []
    for r in sorted(x for x in cells if x >= 3):
        row = cells[r]
        col = next((c for c in range(7, 21, 2) if _num(row.get(c)) is not None), None)
        if not row.get(0) or col is None:
            continue
        tier = re.search(r'\[\[(\d+)(?:-(\d+))? Pax', row.get(1, ''))
        out.append({'name': row[0], 'min': int(tier.group(1)) if tier else 1, 'max': int(tier.group(2) or tier.group(1)) if tier else 99,
                    'adult': _num(row[col]), 'child': _num(row.get(col + 1)) if _num(row.get(col + 1)) is not None else _num(row[col])})
    return out


def read_sheets() -> dict:
    hotel_book = _grid(SHEETS['hotels'], rows=200)
    areas = {}
    for sid, name in hotel_book['tabs'].items():
        cells = hotel_book['cells'] if sid == '0#' else _grid(SHEETS['hotels'], sid, rows=200)['cells']
        try:
            areas[name] = _parse_hotels(cells)
        except StopIteration:
            areas[name] = []
    t, a, k = (_grid(SHEETS[x], rows=400, cols=24)['cells'] for x in ('transfers', 'activities', 'tickets'))
    data = {'hotels': areas, 'transfers': _parse_transfers(t), 'transfer_season': _season(t), 'activities': _parse_per_person(a),
            'activity_season': _season(a), 'tickets': _parse_per_person(k), 'ticket_season': _season(k)}
    if not (areas.get('Kuta') and areas.get('Ubud') and data['transfers'] and data['activities'] and data['tickets']):
        raise ValueError('Rate sheets came back incomplete')
    return data


async def get_rates(db, force: bool = False) -> dict:
    """Latest parsed rates. Re-reads the sheets every REFRESH_HOURS and keeps the last good copy if a read fails."""
    now = time.time()
    if _cache['data'] and not force and now - _cache['checked'] < 300:
        return _cache['data']
    async with _lock:
        doc = await db.rate_sheets.find_one({'_id': 'bali'})
        fresh = doc and datetime.fromisoformat(doc['fetched_at']) > datetime.now(timezone.utc) - timedelta(hours=REFRESH_HOURS)
        if force or not fresh:
            try:
                data = await asyncio.to_thread(read_sheets)
                doc = {'_id': 'bali', 'data': json.dumps(data), 'fetched_at': datetime.now(timezone.utc).isoformat()}
                await db.rate_sheets.replace_one({'_id': 'bali'}, doc, upsert=True)
                logger.info('Rate sheets read from Zoho')
            except Exception as e:
                logger.error(f'Rate sheet read failed, keeping the last copy: {e}')
                if not doc:
                    raise
        _cache['data'] = {**json.loads(doc['data']), 'fetched_at': doc['fetched_at']}
        _cache['checked'] = now
        return _cache['data']
