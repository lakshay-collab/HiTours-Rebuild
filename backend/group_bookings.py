"""Fixed-departure group tours: departures schedule + seat-hold deposit (flat ₹5,000 per traveller). Shares Razorpay/MOCK + verify with bookings.py."""
import logging
import uuid
from datetime import UTC, date, datetime, timedelta

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from bookings import KEY_ID, MOCK, Contact, _rzp, ist_today

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/bookings/group")

GROUP_PRODUCTS = {
    'inside-sri-lanka': {
        'title': 'Inside Sri Lanka', 'base': 200000, 'nights': 11, 'destination': 'Sri Lanka',
        'single_supplement': 38000, 'max_group': 16, 'peak_months': (12, 1, 2), 'peak_extra': 15000,
        'terms': [(60, 1.0)],
    },
    'bangkok-pattaya-ex-delhi': {
        'title': 'Bangkok & Pattaya with flights from Delhi', 'base': 63000, 'nights': 4, 'destination': 'Thailand',
        'single_supplement': None, 'max_group': 20, 'peak_months': (), 'peak_extra': 0,
        'dates': ['2026-12-07'], 'seats': 20,
    },
    'grand-wonders-of-europe': {
        'title': 'Grand Wonders of Europe', 'base': 175676, 'nights': 15, 'destination': 'Europe',
        'single_supplement': None, 'max_group': 40, 'peak_months': (), 'peak_extra': 0,
        'dates': [f'{y}-{m:02d}-{d}' for y, m in [(2026, 12), (2027, 1), (2027, 2), (2027, 3), (2027, 4), (2027, 5)] for d in (15, 22)],
        'terms': [(45, 0.5), (30, 1.0)],
    },
}
DEFAULT_TERMS = [(30, 1.0)]
DEPOSIT_PP = 5000
BALANCE_DUE_DAYS = 60
BALANCE_MIN_DAYS = 7
GUARANTEED_FROM = 6
MIN_LEAD_DAYS = 10
MONTHS_AHEAD = 6
MAX_TRAVELLERS = 8
# Sample seat availability per departure (edit here; mirrors nothing on the frontend, the API is the source of truth)
SEATS_PATTERN = [9, 4, 12, 0, 6, 2, 10, 7, 3, 11, 5, 8]


def _saturdays(y: int, m: int) -> list[date]:
    d = date(y, m, 1)
    d += timedelta(days=(5 - d.weekday()) % 7)
    out = []
    while d.month == m:
        out.append(d)
        d += timedelta(days=7)
    return out


def milestones(p: dict, start: date, today: date) -> list[dict]:
    """Payment milestones: cumulative share of the trip total due by each date."""
    return [{'due': max(start - timedelta(days=days), today + timedelta(days=BALANCE_MIN_DAYS)).isoformat(), 'pct': pct}
            for days, pct in p.get('terms', DEFAULT_TERMS)]


def _schedule(p: dict, today: date) -> list[date]:
    if p.get('dates'):
        return [date.fromisoformat(s) for s in p['dates']]
    out = []
    for k in range(1, MONTHS_AHEAD + 1):
        m = (today.month - 1 + k) % 12 + 1
        y = today.year + (today.month - 1 + k) // 12
        sats = _saturdays(y, m)
        out += [sats[1], sats[3]]
    return out


def departures(key: str, today: date | None = None) -> list[dict]:
    p = GROUP_PRODUCTS[key]
    today = today or ist_today()
    out = []
    for d in _schedule(p, today):
            idx = len(out)
            m = d.month
            ahead = (d - today).days
            if ahead < MIN_LEAD_DAYS:
                continue
            seats = p['seats'] if 'seats' in p else SEATS_PATTERN[idx % len(SEATS_PATTERN)]
            price = p['base'] + (p['peak_extra'] if m in p['peak_months'] else 0)
            out.append({
                'id': d.isoformat(), 'start': d.isoformat(), 'end': (d + timedelta(days=p['nights'])).isoformat(),
                'price': price, 'single_supplement': p['single_supplement'], 'seats_left': seats, 'max_group': p['max_group'],
                'status': _status(seats), 'guaranteed': p['max_group'] - seats >= GUARANTEED_FROM,
                'deposit_pp': DEPOSIT_PP,
                'balance_due': milestones(p, d, today)[-1]['due'],
                'milestones': milestones(p, d, today),
            })
    return out


def _status(seats: int) -> str:
    return 'sold_out' if seats <= 0 else 'limited' if seats <= 4 else 'available'


async def live_departures(db, key: str) -> list[dict]:
    """Departures with seats reduced by paid group bookings."""
    deps = departures(key)
    booked: dict[str, int] = {}
    async for b in db.bookings.find({'kind': 'group', 'product': key, 'status': 'paid'}, {'_id': 0, 'departure': 1, 'travellers': 1}):
        booked[b['departure']] = booked.get(b['departure'], 0) + int(b.get('travellers', 0))
    for d in deps:
        d['seats_left'] = max(0, d['seats_left'] - booked.get(d['id'], 0))
        d['status'] = _status(d['seats_left'])
        d['guaranteed'] = d['max_group'] - d['seats_left'] >= GUARANTEED_FROM
    return deps


class GroupOrderIn(BaseModel):
    product: str
    departure: date
    travellers: int = Field(ge=1, le=MAX_TRAVELLERS)
    room: str = Field(pattern=r'^(twin|single)$')
    contact: Contact


def group_quote(dep: dict, travellers: int, room: str) -> dict:
    supplement = dep['single_supplement'] or 0
    pp = dep['price'] + (supplement if room == 'single' else 0)
    total = pp * travellers
    deposit = DEPOSIT_PP * travellers
    return {'price': dep['price'], 'single_supplement': supplement if room == 'single' else 0, 'per_person': pp,
            'travellers': travellers, 'room': room, 'total': total, 'deposit': deposit, 'deposit_pp': DEPOSIT_PP,
            'balance': total - deposit, 'balance_due': dep['balance_due'], 'milestones': dep['milestones'], 'start': dep['start'], 'end': dep['end']}


def register(db):
    @router.get('/{key}/departures')
    async def list_departures(key: str):
        p = GROUP_PRODUCTS.get(key)
        if not p:
            raise HTTPException(404, 'Unknown group tour')
        return {'product': key, 'title': p['title'], 'base': p['base'], 'deposit_pp': DEPOSIT_PP,
                'balance_due_days': BALANCE_DUE_DAYS, 'max_travellers': MAX_TRAVELLERS,
                'single_supplement': p['single_supplement'], 'departures': await live_departures(db, key)}

    @router.post('/order')
    async def create_order(body: GroupOrderIn):
        p = GROUP_PRODUCTS.get(body.product)
        if not p:
            raise HTTPException(404, 'Unknown group tour')
        dep = next((d for d in await live_departures(db, body.product) if d['id'] == body.departure.isoformat()), None)
        if not dep:
            raise HTTPException(400, 'This departure is not open for booking')
        if dep['status'] == 'sold_out':
            raise HTTPException(400, 'This departure is sold out')
        if body.travellers > dep['seats_left']:
            raise HTTPException(400, f"Only {dep['seats_left']} seat{'s' if dep['seats_left'] != 1 else ''} left on this departure")
        if body.room == 'single' and not p['single_supplement']:
            raise HTTPException(400, 'Private rooms are not available on this trip')
        q = group_quote(dep, body.travellers, body.room)
        amount_paise = q['deposit'] * 100
        pending = await db.bookings.find_one({'kind': 'group', 'product': body.product, 'departure': dep['id'], 'contact.email': body.contact.email,
                                              'status': 'created', 'amount_paise': amount_paise, 'mock': MOCK}, {'_id': 0})
        if pending:
            await db.bookings.update_one({'booking_id': pending['booking_id']}, {'$set': {'contact': body.contact.model_dump(), 'quote': q}})
            return {'booking_id': pending['booking_id'], 'order_id': pending['razorpay_order_id'], 'amount': amount_paise, 'currency': 'INR',
                    'key_id': KEY_ID, 'mock': MOCK, 'quote': q}
        booking_id = 'HG' + uuid.uuid4().hex[:8].upper()
        if MOCK:
            order = {'id': 'order_MOCK' + uuid.uuid4().hex[:10], 'amount': amount_paise, 'currency': 'INR'}
        else:
            order = _rzp.order.create({'amount': amount_paise, 'currency': 'INR', 'receipt': booking_id,
                                       'payment_capture': 1, 'notes': {'booking_id': booking_id, 'product': body.product, 'payment': 'deposit'}})
        doc = {
            'booking_id': booking_id, 'kind': 'group', 'product': body.product, 'title': p['title'],
            'departure': dep['id'], 'travellers': body.travellers, 'room': body.room,
            'contact': body.contact.model_dump(), 'quote': q, 'amount_paise': amount_paise, 'payment': 'deposit',
            'razorpay_order_id': order['id'], 'status': 'created', 'mock': MOCK,
            'created_at': datetime.now(UTC).isoformat(),
        }
        await db.bookings.insert_one(doc)
        logger.info(f"Group deposit order {booking_id} ({'MOCK' if MOCK else 'razorpay'}) {q['deposit']} INR of {q['total']} for {body.contact.email}")
        return {'booking_id': booking_id, 'order_id': order['id'], 'amount': amount_paise, 'currency': 'INR',
                'key_id': KEY_ID, 'mock': MOCK, 'quote': q}

    return router
