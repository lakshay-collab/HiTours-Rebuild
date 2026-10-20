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


class OrderIn(BaseModel):
    product: str
    departure: date
    rooms: List[Room] = Field(min_length=1, max_length=6)
    contact: Contact


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

    @router.post('/order')
    async def create_order(body: OrderIn):
        product = PRODUCTS.get(body.product)
        if not product:
            raise HTTPException(404, 'Unknown product')
        if body.departure < ist_today() + timedelta(days=MIN_LEAD_DAYS):
            raise HTTPException(400, f'Check-in must be at least {MIN_LEAD_DAYS} days from today so we can arrange your travel')
        if body.departure > last_bookable():
            raise HTTPException(400, f'Online booking is open up to {MAX_MONTHS_AHEAD} months ahead')
        if body.departure.isoformat() in BLACKOUT:
            raise HTTPException(400, 'This check-in date is not available')
        q = quote(product, body.departure, body.rooms)
        amount_paise = q['total'] * 100
        pending = await db.bookings.find_one({'product': body.product, 'departure': body.departure.isoformat(), 'contact.email': body.contact.email,
                                              'status': 'created', 'amount_paise': amount_paise, 'mock': MOCK}, {'_id': 0})
        if pending:
            await db.bookings.update_one({'booking_id': pending['booking_id']}, {'$set': {'rooms': [r.model_dump() for r in body.rooms], 'contact': body.contact.model_dump(), 'quote': q}})
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
            'contact': body.contact.model_dump(), 'quote': q, 'amount_paise': amount_paise,
            'razorpay_order_id': order['id'], 'status': 'created', 'mock': MOCK,
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
        await db.bookings.update_one({'booking_id': body.booking_id}, {'$set': {
            'status': 'paid', 'razorpay_payment_id': body.razorpay_payment_id,
            'paid_at': datetime.now(timezone.utc).isoformat()}})
        return {'status': 'paid', 'booking_id': body.booking_id}

    @router.get('/{booking_id}')
    async def get_booking(booking_id: str):
        doc = await db.bookings.find_one({'booking_id': booking_id}, {'_id': 0, 'razorpay_order_id': 0, 'razorpay_payment_id': 0})
        if not doc:
            raise HTTPException(404, 'Booking not found')
        c = doc['contact']
        user, _, dom = c['email'].partition('@')
        doc['contact'] = {'name': c['name'].split(' ')[0], 'email': f"{user[:2]}***@{dom}", 'phone': f"***{c['phone'][-4:]}"}
        return doc

    return router
