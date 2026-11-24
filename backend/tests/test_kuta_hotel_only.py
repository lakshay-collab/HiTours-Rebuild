"""Tests for Kuta hotel-only hotel-package feature (hotel_packages.py) + light regression."""
import os
import requests
from dotenv import load_dotenv

load_dotenv('/app/frontend/.env')
BASE_URL = os.environ.get('REACT_APP_BACKEND_URL').rstrip('/')
KEY = 'kuta-hotel-only'
PKG_URL = f"{BASE_URL}/api/bookings/hotel/{KEY}"
QUOTE_URL = f"{BASE_URL}/api/bookings/hotel/{KEY}/quote"
ORDER_URL = f"{BASE_URL}/api/bookings/hotel/order"


# ---------- package metadata ----------
class TestPackage:
    def test_package(self):
        r = requests.get(PKG_URL, timeout=20)
        assert r.status_code == 200, r.text
        d = r.json()
        assert d['nights'] == [2, 3, 4, 5, 6, 7]
        assert d['from_by_nights']['2'] == 5730
        assert d['deposit'] == 10000
        assert d['last_checkout'] == '2027-04-01'
        hotels = {h['id']: h for h in d['hotels']}
        assert hotels['kuta-central-park']['from_price'] == 5730
        assert hotels['bliss-surfer']['from_price'] == 5930
        assert hotels['golden-tulip-jineng']['from_price'] == 8180
        assert hotels['risata-resort']['from_price'] == 9210
        assert len(hotels) == 4

    def test_unknown_key_404(self):
        r = requests.get(f"{BASE_URL}/api/bookings/hotel/does-not-exist", timeout=15)
        assert r.status_code == 404


# ---------- quote math ----------
class TestQuote:
    def test_prices_jan_10_2027(self):
        r = requests.get(QUOTE_URL, params={'checkin': '2027-01-10', 'nights': 3, 'rooms': '2'}, timeout=20)
        assert r.status_code == 200, r.text
        d = r.json()
        assert d['checkout'] == '2027-01-13'
        totals = {h['id']: h['total'] for h in d['hotels']}
        assert totals['kuta-central-park'] == 8590
        assert totals['bliss-surfer'] == 8900
        assert totals['golden-tulip-jineng'] == 12280
        assert totals['risata-resort'] == 13810
        # per-night = round(total/nights)
        assert all('per_night' not in h for h in d['hotels'])
        # deposit field: total <= 10000 OR not eligible -> None; but check-in is far >30d so eligible
        # Jan 10 2027 vs ~Nov 24 2026 => > 30 days
        deposits = {h['id']: h['deposit'] for h in d['hotels']}
        # totals > 10000 -> deposit set, <= 10000 -> None
        assert deposits['kuta-central-park'] is None  # 8590 <= 10000
        assert deposits['bliss-surfer'] is None       # 8900
        assert deposits['golden-tulip-jineng'] == 10000
        assert deposits['risata-resort'] == 10000

    def test_mixed_season_dec_26(self):
        r = requests.get(QUOTE_URL, params={'checkin': '2026-12-26', 'nights': 3, 'rooms': '2'}, timeout=20)
        assert r.status_code == 200, r.text
        hotels = {h['id']: h for h in r.json()['hotels']}
        # only Golden Tulip has rates 24..28 (and continues through 30)
        assert hotels['golden-tulip-jineng']['available'] is True
        assert hotels['golden-tulip-jineng']['total'] is not None
        assert hotels['bliss-surfer']['available'] is False
        assert hotels['bliss-surfer']['total'] is None
        assert hotels['kuta-central-park']['available'] is False
        assert hotels['risata-resort']['available'] is False

    def test_golden_tulip_nye_price(self):
        # 2026-12-31 rate 99/61; neighbours 62/24. checkin 2026-12-30 nights 3 => 2026-12-30(62),31(99),01-01(62)
        # 1 room 2 adults: usd = (62+99+62)*1 = 223 -> round10(223*1.1*93)=round10(22812.9)=22810
        r = requests.get(QUOTE_URL, params={'checkin': '2026-12-30', 'nights': 3, 'rooms': '2'}, timeout=20)
        assert r.status_code == 200
        gt = next(h for h in r.json()['hotels'] if h['id'] == 'golden-tulip-jineng')
        assert gt['total'] == 22810

    def test_extra_adult(self):
        # 2 rooms: 2 adults + 3 adults (1 extra). Kuta Central Park 28/14. 3 nights.
        # per night usd = 28*2 + 14*1 = 70. total 210. round10(210*1.1*93)=round10(21483)=21480
        r = requests.get(QUOTE_URL, params={'checkin': '2027-01-10', 'nights': 3, 'rooms': '2,3'}, timeout=20)
        assert r.status_code == 200, r.text
        kcp = next(h for h in r.json()['hotels'] if h['id'] == 'kuta-central-park')
        assert kcp['total'] == 21480


# ---------- validation ----------
class TestValidation:
    def test_nights_out_of_range(self):
        r = requests.get(QUOTE_URL, params={'checkin': '2027-01-10', 'nights': 1, 'rooms': '2'}, timeout=15)
        assert r.status_code == 400

    def test_nights_too_many(self):
        r = requests.get(QUOTE_URL, params={'checkin': '2027-01-10', 'nights': 8, 'rooms': '2'}, timeout=15)
        assert r.status_code == 400

    def test_checkin_too_soon(self):
        r = requests.get(QUOTE_URL, params={'checkin': '2026-11-24', 'nights': 3, 'rooms': '2'}, timeout=15)
        assert r.status_code == 400

    def test_checkout_past_window(self):
        # 2027-03-30 + 5 nights = 2027-04-04 (past 2027-04-01)
        r = requests.get(QUOTE_URL, params={'checkin': '2027-03-30', 'nights': 5, 'rooms': '2'}, timeout=15)
        assert r.status_code == 400

    def test_too_many_rooms(self):
        r = requests.get(QUOTE_URL, params={'checkin': '2027-01-10', 'nights': 3, 'rooms': '2,2,2,2,2'}, timeout=15)
        assert r.status_code == 400

    def test_adults_per_room_too_many(self):
        r = requests.get(QUOTE_URL, params={'checkin': '2027-01-10', 'nights': 3, 'rooms': '4'}, timeout=15)
        assert r.status_code == 400

    def test_adults_per_room_zero(self):
        r = requests.get(QUOTE_URL, params={'checkin': '2027-01-10', 'nights': 3, 'rooms': '0'}, timeout=15)
        assert r.status_code == 400

    def test_non_numeric_rooms(self):
        r = requests.get(QUOTE_URL, params={'checkin': '2027-01-10', 'nights': 3, 'rooms': 'abc'}, timeout=15)
        assert r.status_code == 400


# ---------- order creation (keep ≤ ~5 to avoid Razorpay rate limit) ----------
CONTACT = {'name': 'TEST_Kuta Tester', 'email': 'test_kuta@example.com', 'phone': '+919876543210'}
_created = []


class TestOrder:
    def test_order_full_pay(self):
        body = {'product': KEY, 'checkin': '2027-01-10', 'nights': 3, 'rooms': [2],
                'hotel': 'risata-resort', 'pay': 'full', 'contact': CONTACT}
        r = requests.post(ORDER_URL, json=body, timeout=30)
        assert r.status_code == 200, r.text
        d = r.json()
        assert d['booking_id'].startswith('HH')
        assert d['amount'] == 13810 * 100
        assert d['currency'] == 'INR'
        assert d['mock'] is False  # real Razorpay test keys configured
        _created.append(d['booking_id'])

    def test_order_deposit(self):
        # Risata total 13810 > 10000; check-in far -> deposit allowed
        body = {'product': KEY, 'checkin': '2027-01-10', 'nights': 3, 'rooms': [2],
                'hotel': 'risata-resort', 'pay': 'deposit', 'contact': CONTACT}
        r = requests.post(ORDER_URL, json=body, timeout=30)
        assert r.status_code == 200, r.text
        d = r.json()
        assert d['amount'] == 10000 * 100
        _created.append(d['booking_id'])

    def test_order_deposit_not_eligible(self):
        # total 8590 (<= 10000) -> deposit forbidden
        body = {'product': KEY, 'checkin': '2027-01-10', 'nights': 3, 'rooms': [2],
                'hotel': 'kuta-central-park', 'pay': 'deposit', 'contact': CONTACT}
        r = requests.post(ORDER_URL, json=body, timeout=15)
        assert r.status_code == 400

    def test_order_unavailable_hotel(self):
        body = {'product': KEY, 'checkin': '2026-12-26', 'nights': 3, 'rooms': [2],
                'hotel': 'bliss-surfer', 'pay': 'full', 'contact': CONTACT}
        r = requests.post(ORDER_URL, json=body, timeout=15)
        assert r.status_code == 400

    def test_verify_wrong_signature(self):
        if not _created:
            import pytest
            pytest.skip('no booking to verify against')
        body = {'product': KEY, 'checkin': '2027-01-10', 'nights': 3, 'rooms': [2],
                'hotel': 'risata-resort', 'pay': 'full', 'contact': CONTACT}
        # reuse last created booking (idempotency not expected; just need an order_id)
        # Query mongo via API — simplest: create another? No, use thank-you GET endpoint
        bid = _created[-1]
        g = requests.get(f"{BASE_URL}/api/bookings/{bid}", timeout=15)
        assert g.status_code == 200
        # We don't have razorpay_order_id in the sanitized GET; construct best-effort payload
        r = requests.post(f"{BASE_URL}/api/bookings/verify", json={
            'booking_id': bid, 'razorpay_order_id': 'order_FAKE', 'razorpay_payment_id': 'pay_FAKE',
            'razorpay_signature': 'bad'
        }, timeout=15)
        # order id mismatch => 404; if happened to match (unlikely) signature fails => 400
        assert r.status_code in (400, 404)


# ---------- regression ----------
class TestRegression:
    def test_grand_wonders_departures(self):
        r = requests.get(f"{BASE_URL}/api/bookings/group/grand-wonders-of-europe/departures", timeout=20)
        assert r.status_code == 200
        assert isinstance(r.json(), (list, dict))

    def test_bangkok_pattaya_departures(self):
        r = requests.get(f"{BASE_URL}/api/bookings/group/bangkok-pattaya-ex-delhi/departures", timeout=20)
        assert r.status_code == 200

    def test_inside_sri_lanka_departures(self):
        r = requests.get(f"{BASE_URL}/api/bookings/group/inside-sri-lanka/departures", timeout=20)
        assert r.status_code == 200

    def test_balance_links_requires_auth(self):
        r = requests.post(f"{BASE_URL}/api/cron/balance-links", timeout=15)
        assert r.status_code == 401


# ---------- cleanup ----------
def test_zz_cleanup():
    """Delete bookings created by this test run. Must run last."""
    from pymongo import MongoClient
    from dotenv import load_dotenv
    load_dotenv('/app/backend/.env')
    client = MongoClient(os.environ['MONGO_URL'])
    db = client[os.environ['DB_NAME']]
    if _created:
        res = db.bookings.delete_many({'booking_id': {'$in': _created}})
        print(f"Deleted {res.deleted_count} test bookings: {_created}")
    # Safety: also clean any lingering test emails
    db.bookings.delete_many({'contact.email': CONTACT['email']})
