"""Package-holiday booking + Razorpay checkout. Falls back to a clearly flagged MOCK gateway when no keys are configured."""
import hashlib
import math
import hmac
import logging
import os
import uuid
from datetime import date, datetime, timedelta, timezone
from typing import List, Optional

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/bookings")

KEY_ID = os.environ.get('RAZORPAY_KEY_ID', '')
KEY_SECRET = os.environ.get('RAZORPAY_KEY_SECRET', '')
MOCK = not (KEY_ID and KEY_SECRET)
_rzp = None
if not MOCK:
    import razorpay
    _rzp = razorpay.Client(auth=(KEY_ID, KEY_SECRET))

# Bookable products (per-adult base price in INR; mirrors frontend/src/booking/pricing.js)
PRODUCTS = {
    'fully-loaded-sri-lanka': {
        'title': 'Fully Loaded Sri Lanka: Kandy, Yala Safari and Bentota',
        'base': 48925, 'nights': 7, 'destination': 'Sri Lanka',
    },
    'bali-kuta-ubud': {
        'title': 'Bali Beaches and Ubud: Kuta, Tanah Lot, Uluwatu and the Bali Swing',
        'nights': 6, 'destination': 'Bali', 'live': True,
    },
}
CHILD_FACTOR = 0.7
MIN_LEAD_DAYS = 10
MAX_MONTHS_AHEAD = 4
BLACKOUT = {'2026-12-24', '2026-12-25', '2026-12-31', '2027-01-01', '2027-01-26', '2027-03-04', '2027-03-05'}
MAX_ADULTS, MAX_CHILDREN = 2, 1
# Mirrors frontend/src/sale.js (traveller's real saving by booking-date window, IST)
SALES = [('2026-10-09', '2026-11-05', 5), ('2026-11-06', '2026-12-22', 5), ('2027-01-05', '2027-01-26', 5),
         ('2027-02-01', '2027-03-20', 5), ('2027-07-15', '2027-08-15', 5)]


def sale_percent() -> int:
    today = (datetime.now(timezone.utc) + timedelta(hours=5, minutes=30)).date().isoformat()
    return next((p for a, b, p in SALES if a <= today <= b), 0)


def jsround(n: float) -> int:
    return int(math.floor(n + 0.5))


def round10(n: float) -> int:
    return jsround(n / 10.0) * 10


def adult_price(base: int, d: date) -> int:
    return jsround(round10(base) * (1 - sale_percent() / 100))


def ist_today() -> date:
    return (datetime.now(timezone.utc) + timedelta(hours=5, minutes=30)).date()


def last_bookable() -> date:
    t = ist_today()
    m = t.month + MAX_MONTHS_AHEAD + 1
    y = t.year + (m - 1) // 12
    m = (m - 1) % 12 + 1
    return date(y, m, 1) - timedelta(days=1)


class Room(BaseModel):
    adults: int = Field(ge=1, le=MAX_ADULTS)
    children: int = Field(ge=0, le=MAX_CHILDREN)


class Contact(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    email: str = Field(pattern=r'^[^@\s]+@[^@\s]+\.[^@\s]+$')
    phone: str = Field(min_length=8, max_length=16)


class SecondTraveller(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    phone: str = Field(min_length=8, max_length=16)
    email: str = Field(default='', max_length=120)


class OrderIn(BaseModel):
    product: str
    departure: date
    rooms: List[Room] = Field(min_length=1, max_length=6)
    contact: Contact
    second: Optional[SecondTraveller] = None
    promo: Optional[str] = None
    pay_mode: str = 'full'


class PromoIn(BaseModel):
    product: str
    departure: date
    rooms: List[Room] = Field(min_length=1, max_length=6)
    email: str = ''
    phone: str = ''


DEPOSIT_PCT, DEPOSIT_MIN_DAYS, BALANCE_DAYS_BEFORE = 0.10, 60, 30
# Promo codes: one per booking; the checkout auto-applies the biggest saving.
PROMOS = [
    {'code': 'FIRSTTRIP', 'label': 'First trip with Hi Tours', 'pct': 5, 'rule': 'first'},
    {'code': 'COUPLES', 'label': 'Couples escape', 'flat': 2000, 'rule': 'couple'},
    {'code': 'EARLYBIRD', 'label': 'Early bird, 60+ days ahead', 'pct': 7, 'rule': 'early'},
    {'code': 'FAMILY', 'label': 'Family holiday', 'flat': 3000, 'rule': 'family'},
]


def days_ahead(departure: date) -> int:
    return (departure - ist_today()).days


async def promo_options(db, q: dict, departure: date, email: str, phone: str) -> list:
    first = True
    if email or phone:
        ors = [{'contact.email': email}] if email else []
        ors += [{'contact.phone': phone}] if phone else []
        first = not await db.bookings.find_one({'status': 'paid', '$or': ors}, {'_id': 1})
    ok = {'first': first, 'couple': q['adults'] == 2 and q['children'] == 0,
          'early': days_ahead(departure) >= DEPOSIT_MIN_DAYS, 'family': q['children'] > 0}
    out = []
    for p in PROMOS:
        saving = jsround(q['total'] * p['pct'] / 100) if p.get('pct') else p['flat']
        out.append({'code': p['code'], 'label': p['label'], 'saving': min(saving, q['total']), 'eligible': ok[p['rule']],
                    'terms': f"{p['pct']}% off" if p.get('pct') else f"\u20b9{p['flat']:,} off"})
    return out


async def price_quote(db, product_key: str, departure: date, rooms: List[Room]) -> dict:
    product = PRODUCTS.get(product_key)
    if not product:
        raise HTTPException(404, 'Unknown product')
    if departure < ist_today() + timedelta(days=MIN_LEAD_DAYS):
        raise HTTPException(400, f'Check-in must be at least {MIN_LEAD_DAYS} days from today so we can arrange your travel')
    if departure > last_bookable():
        raise HTTPException(400, f'Online booking is open up to {MAX_MONTHS_AHEAD} months ahead')
    if product.get('live'):
        from live_packages import live_quote
        q = await live_quote(db, product_key, departure, rooms)
        if not q:
            raise HTTPException(400, 'This check-in date is not available')
        return q
    if departure.isoformat() in BLACKOUT:
        raise HTTPException(400, 'This check-in date is not available')
    return quote(product, departure, rooms)


class VerifyIn(BaseModel):
    booking_id: str
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str


def quote(product: dict, departure: date, rooms: List[Room]) -> dict:
    pp = adult_price(product['base'], departure)
    child = round10(pp * CHILD_FACTOR)
    adults = sum(r.adults for r in rooms)
    children = sum(r.children for r in rooms)
    total = adults * pp + children * child
    return {'adult_price': pp, 'child_price': child, 'adults': adults, 'children': children,
            'rooms': len(rooms), 'total': total, 'sale_percent': sale_percent(),
            'return_date': (departure + timedelta(days=product['nights'])).isoformat()}


def register(db):
    @router.get('/config')
    async def config():
        return {'key_id': KEY_ID, 'mock': MOCK, 'currency': 'INR'}

    @router.post('/promos')
    async def promos(body: PromoIn):
        q = await price_quote(db, body.product, body.departure, body.rooms)
        opts = await promo_options(db, q, body.departure, body.email.strip().lower(), body.phone)
        best = max((o for o in opts if o['eligible']), key=lambda o: o['saving'], default=None)
        return {'total': q['total'], 'promos': opts, 'best': best and best['code'], 'deposit_allowed': days_ahead(body.departure) >= DEPOSIT_MIN_DAYS,
                'deposit_pct': DEPOSIT_PCT, 'balance_due': (body.departure - timedelta(days=BALANCE_DAYS_BEFORE)).isoformat()}

    @router.post('/order')
    async def create_order(body: OrderIn):
        product = PRODUCTS.get(body.product)
        q = await price_quote(db, body.product, body.departure, body.rooms)
        q['subtotal'] = q['total']
        if body.promo:
            opts = await promo_options(db, q, body.departure, body.contact.email.strip().lower(), body.contact.phone)
            hit = next((o for o in opts if o['code'] == body.promo.upper() and o['eligible']), None)
            if not hit:
                raise HTTPException(400, 'This promo code does not apply to your booking')
            q['promo'], q['discount'] = hit['code'], hit['saving']
            q['total'] = q['subtotal'] - hit['saving']
        kind = None
        if body.pay_mode == 'deposit':
            if days_ahead(body.departure) < DEPOSIT_MIN_DAYS:
                raise HTTPException(400, f'Paying a 10% deposit is open for check-ins {DEPOSIT_MIN_DAYS}+ days away')
            kind = 'package'
            q['deposit'] = jsround(q['total'] * DEPOSIT_PCT)
            q['balance_due'] = (body.departure - timedelta(days=BALANCE_DAYS_BEFORE)).isoformat()
        due_now = q.get('deposit', q['total'])
        amount_paise = due_now * 100
        pending = await db.bookings.find_one({'product': body.product, 'departure': body.departure.isoformat(), 'contact.email': body.contact.email,
                                              'status': 'created', 'amount_paise': amount_paise, 'mock': MOCK}, {'_id': 0})
        if pending:
            await db.bookings.update_one({'booking_id': pending['booking_id']}, {'$set': {'rooms': [r.model_dump() for r in body.rooms], 'contact': body.contact.model_dump(), 'second_traveller': body.second.model_dump() if body.second else None, 'quote': q, **({'kind': kind} if kind else {})}})
            return {'booking_id': pending['booking_id'], 'order_id': pending['razorpay_order_id'], 'amount': amount_paise, 'currency': 'INR',
                    'key_id': KEY_ID, 'mock': MOCK, 'quote': q}
        booking_id = 'HT' + uuid.uuid4().hex[:8].upper()
        if MOCK:
            order = {'id': 'order_MOCK' + uuid.uuid4().hex[:10], 'amount': amount_paise, 'currency': 'INR'}
        else:
            order = _rzp.order.create({'amount': amount_paise, 'currency': 'INR', 'receipt': booking_id,
                                       'payment_capture': 1, 'notes': {'booking_id': booking_id, 'product': body.product}})
        doc = {
            'booking_id': booking_id, 'product': body.product, 'title': product['title'],
            'departure': body.departure.isoformat(), 'rooms': [r.model_dump() for r in body.rooms],
            'contact': body.contact.model_dump(), 'second_traveller': body.second.model_dump() if body.second else None, 'quote': q, 'amount_paise': amount_paise,
            'razorpay_order_id': order['id'], 'status': 'created', 'mock': MOCK,
            **({'kind': kind} if kind else {}),
            'created_at': datetime.now(timezone.utc).isoformat(),
        }
        await db.bookings.insert_one(doc)
        logger.info(f"Booking order {booking_id} ({'MOCK' if MOCK else 'razorpay'}) {q['total']} INR for {body.contact.email}")
        return {'booking_id': booking_id, 'order_id': order['id'], 'amount': amount_paise, 'currency': 'INR',
                'key_id': KEY_ID, 'mock': MOCK, 'quote': q}

    @router.post('/verify')
    async def verify(body: VerifyIn):
        doc = await db.bookings.find_one({'booking_id': body.booking_id}, {'_id': 0})
        if not doc or doc['razorpay_order_id'] != body.razorpay_order_id:
            raise HTTPException(404, 'Booking not found')
        if doc['status'] == 'paid':
            return {'status': 'paid', 'booking_id': body.booking_id}
        if doc['mock']:
            ok = body.razorpay_payment_id.startswith('pay_MOCK')
        else:
            expected = hmac.new(KEY_SECRET.encode(), f'{body.razorpay_order_id}|{body.razorpay_payment_id}'.encode(), hashlib.sha256).hexdigest()
            ok = hmac.compare_digest(expected, body.razorpay_signature)
        if not ok:
            await db.bookings.update_one({'booking_id': body.booking_id}, {'$set': {'status': 'failed'}})
            raise HTTPException(400, 'Payment signature could not be verified')
        if doc.get('kind') == 'group':
            from group_bookings import live_departures
            dep = next((d for d in await live_departures(db, doc['product']) if d['id'] == doc['departure']), None)
            if not dep or dep['seats_left'] < int(doc.get('travellers', 0)):
                await db.bookings.update_one({'booking_id': body.booking_id}, {'$set': {'status': 'oversold', 'razorpay_payment_id': body.razorpay_payment_id}})
                logger.warning(f"Group booking {body.booking_id} paid but departure is full; refund needed")
                raise HTTPException(409, 'Sorry, the last seats on this departure were just taken. Your payment will be refunded in full within 5 working days.')
        await db.bookings.update_one({'booking_id': body.booking_id}, {'$set': {
            'status': 'paid', 'razorpay_payment_id': body.razorpay_payment_id,
            'paid_at': datetime.now(timezone.utc).isoformat()}})
        if doc.get('kind') in ('group', 'hotel', 'package'):
            from balance_links import send_next_link
            try:
                await send_next_link(db, doc)
            except Exception as exc:  # the deposit is already paid; the hourly job retries the link
                logger.error(f"Balance link not sent for {body.booking_id}: {exc}")
        return {'status': 'paid', 'booking_id': body.booking_id}

    @router.get('/{booking_id}')
    async def get_booking(booking_id: str):
        doc = await db.bookings.find_one({'booking_id': booking_id}, {'_id': 0, 'razorpay_order_id': 0, 'razorpay_payment_id': 0, 'second_traveller': 0})
        if not doc:
            raise HTTPException(404, 'Booking not found')
        c = doc['contact']
        user, _, dom = c['email'].partition('@')
        doc['contact'] = {'name': c['name'].split(' ')[0], 'email': f"{user[:2]}***@{dom}", 'phone': f"***{c['phone'][-4:]}"}
        return doc

    return router
