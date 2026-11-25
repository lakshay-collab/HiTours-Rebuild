"""Packages priced live from the supplier rate sheets: hotels, transfers, activities and tickets for the chosen dates."""
import math
from datetime import date, timedelta
from typing import List

from fastapi import APIRouter, HTTPException, Query

from bookings import MIN_LEAD_DAYS, Room, ist_today, last_bookable, round10
from sheet_rates import get_rates

router = APIRouter(prefix='/api/live-packages')

USD_INR = 93
MARKUP = 0.10
MAX_ROOMS = 4

# Day offsets count from check-in (0 = arrival day).
PACKAGES = {
    'bali-kuta-ubud': {
        'nights': 6, 'star': 4,
        'stays': [('Kuta', 3), ('Ubud', 3)],
        'transfers': [(0, 'Denpasar Airport', 'Kuta Hotel'), (3, 'Kuta Hotel', 'Ubud Hotel'), (6, 'Ubud Hotel', 'Denpasar Airport')],
        'activities': [(1, 'Full-Day Water Sports Adventure & Uluwatu Temple Tour'), (2, 'Half-Day Tanah Lot Temple Tour'),
                       (4, 'Full-Day Kintamani Volcano, Ubud Tour & Desa Swing')],
        'tickets': [(1, 'Kuta - Uluwatu Temple'), (2, 'Ubud - Tanah Lot Temple')],
    },
}


def _in(ranges: list, d: date) -> bool:
    iso = d.isoformat()
    return any(a <= iso <= b for a, b in ranges)


def _stay(hotels: list, star: int, first: date, nights: int, rooms: int, children: int):
    """Cheapest hotel with a rate for every night, in the package star class or the next class up when that is sold out."""
    for cls in sorted({h['star'] for h in hotels if h['star'] and h['star'] >= star}):
        best = None
        for h in hotels:
            if h['star'] != cls:
                continue
            usd = child = 0.0
            for i in range(nights):
                s = next((x for x in h['seasons'] if _in(x['ranges'], first + timedelta(days=i))), None)
                if not s:
                    break
                usd += s['room'] * rooms
                child += s.get('cnb', 0)
            else:
                if best is None or usd + child * children < best[0] + best[1] * children:
                    best = (usd, child, h['name'], int(cls), h['room'])
        if best:
            return best
    return None


def price(rates: dict, pkg: dict, checkin: date, rooms: List[Room]):
    """Quote for one check-in date, or None when any part has no rate."""
    adults, children = sum(r.adults for r in rooms), sum(r.children for r in rooms)
    pax = adults + children
    usd, child_usd, hotels, day = 0.0, 0.0, [], 0
    for area, nights in pkg['stays']:
        s = _stay(rates['hotels'].get(area, []), pkg['star'], checkin + timedelta(days=day), nights, len(rooms), children)
        if not s:
            return None
        usd += s[0]
        child_usd += s[1]
        hotels.append({'area': area, 'name': s[2], 'nights': nights, 'star': s[3], 'room': s[4]})
        day += nights
    for offset, a, b in pkg['transfers']:
        cars = sorted((t for t in rates['transfers'] if t['from'] == a and t['to'] == b), key=lambda t: t['pax'])
        if not cars or not _in(rates['transfer_season'], checkin + timedelta(days=offset)):
            return None
        car = next((t for t in cars if t['pax'] >= pax), None)
        usd += car['price'] if car else cars[-1]['price'] * math.ceil(pax / cars[-1]['pax'])
    for kind, season in (('activities', 'activity_season'), ('tickets', 'ticket_season')):
        for offset, name in pkg[kind]:
            rows = [x for x in rates[kind] if x['name'].startswith(name)]
            row = next((x for x in rows if x['min'] <= max(pax, 2) <= x['max']), None)
            if not row or not _in(rates[season], checkin + timedelta(days=offset)):
                return None
            paying = 2 if kind == 'activities' and pax == 1 else adults
            usd += row['adult'] * paying
            child_usd += row['child']
    rate = (1 + MARKUP) * USD_INR
    child_price = round10(child_usd * rate)
    adult_price = round10(usd * rate / adults)
    return {'adult_price': adult_price, 'child_price': child_price, 'adults': adults, 'children': children, 'rooms': len(rooms),
            'total': adult_price * adults + child_price * children, 'sale_percent': 0, 'hotels': hotels,
            'return_date': (checkin + timedelta(days=pkg['nights'])).isoformat()}


async def live_quote(db, key: str, checkin: date, rooms: List[Room]):
    if len(rooms) > MAX_ROOMS:
        raise HTTPException(400, f'Book up to {MAX_ROOMS} rooms online')
    return price(await get_rates(db), PACKAGES[key], checkin, rooms)


def _rooms(raw: str) -> List[Room]:
    try:
        rooms = [Room(adults=int(a), children=int(c)) for a, c in (p.split('-') for p in raw.split(','))]
    except ValueError:
        raise HTTPException(400, 'Rooms must look like 2-0,2-1')
    if not 1 <= len(rooms) <= MAX_ROOMS:
        raise HTTPException(400, f'Book up to {MAX_ROOMS} rooms online')
    return rooms


def register(db):
    @router.get('/{key}/calendar')
    async def calendar(key: str, rooms: str = Query('2-0')):
        pkg = PACKAGES.get(key)
        if not pkg:
            raise HTTPException(404, 'Unknown package')
        party = _rooms(rooms)
        rates = await get_rates(db)
        d, last, dates = ist_today() + timedelta(days=MIN_LEAD_DAYS), last_bookable(), {}
        while d <= last:
            q = price(rates, pkg, d, party)
            if q:
                dates[d.isoformat()] = {'total': q['total'], 'adult': q['adult_price'], 'child': q['child_price'], 'hotels': [h['name'] for h in q['hotels']], 'stays': q['hotels']}
            d += timedelta(days=1)
        return {'product': key, 'nights': pkg['nights'], 'rooms': rooms, 'dates': dates,
                'from_adult': min((x['adult'] for x in dates.values()), default=None), 'rates_read_at': rates['fetched_at']}

    @router.post('/refresh')
    async def refresh():
        rates = await get_rates(db, force=True)
        return {'rates_read_at': rates['fetched_at']}

    return router
