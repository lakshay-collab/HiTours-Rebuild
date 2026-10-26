"""Fixed-departure group tours: departures schedule + deposit booking (10%, 5% early-bird). Shares Razorpay/MOCK + verify with bookings.py."""
import logging
import uuid
from datetime import UTC, date, datetime, timedelta

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from bookings import KEY_ID, MOCK, Contact, _rzp, ist_today, jsround

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/bookings/group")

GROUP_PRODUCTS = {
    'inside-sri-lanka': {
        'title': 'Inside Sri Lanka', 'base': 200000, 'nights': 11, 'destination': 'Sri Lanka',
        'single_supplement': 38000, 'max_group': 16, 'peak_months': (12, 1, 2), 'peak_extra': 15000,
    },
}
DEPOSIT_PCT = 10
EARLY_BIRD_PCT = 5
EARLY_BIRD_DAYS = 90
BALANCE_DUE_DAYS = 60
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


def departures(key: str, today: date | None = None) -> list[dict]:
    p = GROUP_PRODUCTS[key]
    today = today or ist_today()
    out = []
    for k in range(1, MONTHS_AHEAD + 1):
        m = (today.month - 1 + k) % 12 + 1
        y = today.year + (today.month - 1 + k) // 12
        sats = _saturdays(y, m)
        for d in (sats[1], sats[3]):
            idx = len(out)
            ahead = (d - today).days
            if ahead < MIN_LEAD_DAYS:
                continue
            seats = SEATS_PATTERN[idx % len(SEATS_PATTERN)]
            early = ahead >= EARLY_BIRD_DAYS
            price = p['base'] + (p['peak_extra'] if m in p['peak_months'] else 0)
            out.append({
                'id': d.isoformat(), 'start': d.isoformat(), 'end': (d + timedelta(days=p['nights'])).isoformat(),
                'price': price, 'single_supplement': p['single_supplement'], 'seats_left': seats, 'max_group': p['max_group'],
                'status': 'sold_out' if seats == 0 else 'limited' if seats <= 4 else 'available',
                'early_bird': early, 'deposit_pct': EARLY_BIRD_PCT if early else DEPOSIT_PCT,
                'balance_due': (d - timedelta(days=BALANCE_DUE_DAYS)).isoformat(),
            })
    return out


class GroupOrderIn(BaseModel):
    product: str
    departure: date
    travellers: int = Field(ge=1, le=MAX_TRAVELLERS)
    room: str = Field(pattern=r'^(twin|single)$')
    contact: Contact


def group_quote(dep: dict, travellers: int, room: str) -> dict:
    pp = dep['price'] + (dep['single_supplement'] if room == 'single' else 0)
    total = pp * travellers
    deposit = jsround(total * dep['deposit_pct'] / 100.0)
    return {'price': dep['price'], 'single_supplement': dep['single_supplement'] if room == 'single' else 0, 'per_person': pp,
            'travellers': travellers, 'room': room, 'total': total, 'deposit': deposit, 'deposit_pct': dep['deposit_pct'],
            'early_bird': dep['early_bird'], 'balance': total - deposit, 'balance_due': dep['balance_due'],
            'start': dep['start'], 'end': dep['end']}


def register(db):
    @router.get('/{key}/departures')
    async def list_departures(key: str):
        p = GROUP_PRODUCTS.get(key)
        if not p:
            raise HTTPException(404, 'Unknown group tour')
        return {'product': key, 'title': p['title'], 'base': p['base'], 'deposit_pct': DEPOSIT_PCT, 'early_bird_pct': EARLY_BIRD_PCT,
                'early_bird_days': EARLY_BIRD_DAYS, 'balance_due_days': BALANCE_DUE_DAYS, 'max_travellers': MAX_TRAVELLERS,
                'single_supplement': p['single_supplement'], 'departures': departures(key)}

    @router.post('/order')
    async def create_order(body: GroupOrderIn):
        p = GROUP_PRODUCTS.get(body.product)
        if not p:
            raise HTTPException(404, 'Unknown group tour')
        dep = next((d for d in departures(body.product) if d['id'] == body.departure.isoformat()), None)
        if not dep:
            raise HTTPException(400, 'This departure is not open for booking')
        if dep['status'] == 'sold_out':
            raise HTTPException(400, 'This departure is sold out')
        if body.travellers > dep['seats_left']:
            raise HTTPException(400, f"Only {dep['seats_left']} seat{'s' if dep['seats_left'] != 1 else ''} left on this departure")
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
