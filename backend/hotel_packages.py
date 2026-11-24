"""Hotel-only packages: pick nights, dates and a preferred hotel; price comes from the supplier rate sheet (USD per room per night)."""
import logging
import uuid
from datetime import UTC, date, datetime, timedelta
from typing import List, Literal

from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, Field

from bookings import KEY_ID, MOCK, Contact, _rzp, ist_today, round10
from group_bookings import milestones

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/bookings/hotel")

USD_INR = 93  # fixed conversion used for every hotel-only price
MARKUP = 0.10
DEPOSIT = 10000
DEPOSIT_MIN_DAYS = 30
MIN_LEAD_DAYS = 3
MAX_ROOMS = 4
MAX_ADULTS_PER_ROOM = 3  # the third adult sleeps on an extra bed

# Supplier sheet (Kuta tab, breakfast plan, read 24 Nov 2026). Each rate: first night, last night, room USD, extra adult bed USD.
PACKAGES = {
    'kuta-hotel-only': {
        'title': 'Kuta hotel only package', 'destination': 'Bali', 'nights': [3, 4, 5, 6], 'terms': [(30, 1.0)],
        'hotels': [
            {'id': 'kuta-central-park', 'name': 'Kuta Central Park Hotel', 'room': 'Superior Room', 'rates': [
                ('2026-10-01', '2026-12-21', 28, 14), ('2027-01-05', '2027-03-31', 28, 14)]},
            {'id': 'bliss-surfer', 'name': 'Bliss Surfer Hotel', 'room': 'Deluxe Room', 'rates': [
                ('2026-10-01', '2026-12-23', 29, 18), ('2027-01-06', '2027-03-31', 29, 18)]},
            {'id': 'golden-tulip-jineng', 'name': 'Golden Tulip Jineng Resort', 'room': 'Deluxe City View', 'rates': [
                ('2026-10-01', '2026-12-19', 40, 24), ('2026-12-20', '2026-12-30', 62, 24), ('2026-12-31', '2026-12-31', 99, 61),
                ('2027-01-01', '2027-01-05', 62, 24), ('2027-01-06', '2027-03-31', 40, 24)]},
            {'id': 'risata-resort', 'name': 'Risata Bali Resort & Spa', 'room': 'Superior Room', 'rates': [
                ('2026-10-01', '2026-12-23', 45, 20), ('2027-01-04', '2027-03-31', 45, 20)]},
        ],
    },
}


def _night_rate(hotel: dict, night: date) -> tuple[int, int] | None:
    iso = night.isoformat()
    return next(((room, extra) for a, b, room, extra in hotel['rates'] if a <= iso <= b), None)


def _inr(usd: float) -> int:
    return round10(usd * (1 + MARKUP) * USD_INR)


def hotel_total(hotel: dict, checkin: date, nights: int, rooms: List[int]) -> int | None:
    """Stay price in INR, or None when the hotel has no rate for one of the nights."""
    extra_adults = sum(max(0, a - 2) for a in rooms)
    usd = 0
    for i in range(nights):
        rate = _night_rate(hotel, checkin + timedelta(days=i))
        if not rate:
            return None
        usd += rate[0] * len(rooms) + rate[1] * extra_adults
    return _inr(usd)


def _window(p: dict, today: date) -> tuple[date, date]:
    last_night = max(date.fromisoformat(b) for h in p['hotels'] for _, b, _, _ in h['rates'])
    return today + timedelta(days=MIN_LEAD_DAYS), last_night


def build_quote(p: dict, checkin: date, nights: int, rooms: List[int], today: date) -> dict:
    first, last_night = _window(p, today)
    if nights not in p['nights']:
        raise HTTPException(400, f"Choose a stay of {p['nights'][0]} to {p['nights'][-1]} nights")
    if checkin < first:
        raise HTTPException(400, f'Check-in must be at least {MIN_LEAD_DAYS} days from today')
    checkout = checkin + timedelta(days=nights)
    if checkout - timedelta(days=1) > last_night:
        raise HTTPException(400, f"Rates are open for stays until {(last_night + timedelta(days=1)).strftime('%d %b %Y')}")
    deposit_ok = (checkin - today).days >= DEPOSIT_MIN_DAYS
    balance_due = milestones(p, checkin, today)[-1]['due']
    hotels = []
    for h in p['hotels']:
        total = hotel_total(h, checkin, nights, rooms)
        can_deposit = bool(total) and deposit_ok and total > DEPOSIT
        hotels.append({'id': h['id'], 'name': h['name'], 'room': h['room'], 'available': total is not None, 'total': total,
                       'per_night': round(total / nights) if total else None, 'deposit': DEPOSIT if can_deposit else None})
    return {'checkin': checkin.isoformat(), 'checkout': checkout.isoformat(), 'nights': nights, 'rooms': rooms, 'adults': sum(rooms),
            'deposit_days': DEPOSIT_MIN_DAYS, 'balance_due': balance_due, 'hotels': hotels}


def _rooms(raw: str) -> List[int]:
    try:
        rooms = [int(x) for x in raw.split(',')]
    except ValueError:
        raise HTTPException(400, 'Rooms must be a list of adults per room')
    if not 1 <= len(rooms) <= MAX_ROOMS or any(not 1 <= a <= MAX_ADULTS_PER_ROOM for a in rooms):
        raise HTTPException(400, f'Book 1 to {MAX_ROOMS} rooms with 1 to {MAX_ADULTS_PER_ROOM} adults each')
    return rooms


class HotelOrderIn(BaseModel):
    product: str
    checkin: date
    nights: int
    rooms: List[int] = Field(min_length=1, max_length=MAX_ROOMS)
    hotel: str
    pay: Literal['deposit', 'full']
    contact: Contact


def register(db):
    @router.get('/{key}')
    async def package(key: str):
        p = PACKAGES.get(key)
        if not p:
            raise HTTPException(404, 'Unknown hotel package')
        first, last_night = _window(p, ist_today())
        return {'product': key, 'title': p['title'], 'nights': p['nights'], 'min_checkin': first.isoformat(),
                'last_checkout': (last_night + timedelta(days=1)).isoformat(), 'deposit': DEPOSIT, 'deposit_days': DEPOSIT_MIN_DAYS,
                'max_rooms': MAX_ROOMS, 'max_adults_per_room': MAX_ADULTS_PER_ROOM,
                'hotels': [{'id': h['id'], 'name': h['name'], 'room': h['room'],
                            'from_per_night': _inr(min(r[2] for r in h['rates'])),
                            'seasons': [{'from': a, 'to': b} for a, b, _, _ in h['rates']]} for h in p['hotels']]}

    @router.get('/{key}/quote')
    async def quote(key: str, checkin: date, nights: int, rooms: str = Query('2')):
        p = PACKAGES.get(key)
        if not p:
            raise HTTPException(404, 'Unknown hotel package')
        return build_quote(p, checkin, nights, _rooms(rooms), ist_today())

    @router.post('/order')
    async def create_order(body: HotelOrderIn):
        p = PACKAGES.get(body.product)
        if not p:
            raise HTTPException(404, 'Unknown hotel package')
        rooms = _rooms(','.join(str(a) for a in body.rooms))
        today = ist_today()
        q = build_quote(p, body.checkin, body.nights, rooms, today)
        h = next((x for x in q['hotels'] if x['id'] == body.hotel), None)
        if not h or not h['available']:
            raise HTTPException(400, 'This hotel has no rate for your dates. Please pick another hotel or change dates.')
        if body.pay == 'deposit' and not h['deposit']:
            raise HTTPException(400, f'The deposit option needs check-in at least {DEPOSIT_MIN_DAYS} days away. Please pay in full.')
        pay_now = h['deposit'] if body.pay == 'deposit' else h['total']
        quote_doc = {'total': h['total'], 'deposit': pay_now, 'balance': h['total'] - pay_now, 'per_night': h['per_night'],
                     'balance_due': q['balance_due'] if body.pay == 'deposit' else None,
                     'milestones': milestones(p, body.checkin, today) if body.pay == 'deposit' else [],
                     'start': q['checkin'], 'end': q['checkout'], 'nights': body.nights, 'rooms': rooms, 'adults': q['adults'],
                     'hotel': h['id'], 'hotel_name': h['name'], 'room_type': h['room'], 'pay': body.pay}
        amount_paise = pay_now * 100
        booking_id = 'HH' + uuid.uuid4().hex[:8].upper()
        if MOCK:
            order = {'id': 'order_MOCK' + uuid.uuid4().hex[:10]}
        else:
            order = _rzp.order.create({'amount': amount_paise, 'currency': 'INR', 'receipt': booking_id, 'payment_capture': 1,
                                       'notes': {'booking_id': booking_id, 'product': body.product, 'hotel': h['name'], 'payment': body.pay}})
        await db.bookings.insert_one({
            'booking_id': booking_id, 'kind': 'hotel', 'product': body.product, 'title': f"{p['title']} · {h['name']} or similar",
            'departure': q['checkin'], 'travellers': q['adults'], 'contact': body.contact.model_dump(), 'quote': quote_doc,
            'amount_paise': amount_paise, 'payment': body.pay, 'razorpay_order_id': order['id'], 'status': 'created', 'mock': MOCK,
            'fully_paid': body.pay == 'full', 'created_at': datetime.now(UTC).isoformat(),
        })
        logger.info(f"Hotel package order {booking_id} ({'MOCK' if MOCK else 'razorpay'}) {pay_now} INR of {h['total']} for {body.contact.email}")
        return {'booking_id': booking_id, 'order_id': order['id'], 'amount': amount_paise, 'currency': 'INR',
                'key_id': KEY_ID, 'mock': MOCK, 'quote': quote_doc}

    return router
