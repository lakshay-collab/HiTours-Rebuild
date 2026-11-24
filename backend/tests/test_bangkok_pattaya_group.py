# Bangkok & Pattaya ex Delhi group package: fixed departure, no private room, deposit order + MOCK verify; Sri Lanka regression
import os

import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL').rstrip('/')
G = f"{BASE_URL}/api/bookings/group"
KEY = 'bangkok-pattaya-ex-delhi'
CONTACT = {'name': 'TEST_BKK Pytest', 'email': 'TEST_bkk_pytest@example.com', 'phone': '+919876543210'}
CREATED = []


@pytest.fixture(scope='module', autouse=True)
def _cleanup():
    # Delete only bookings this module created (by booking_id)
    yield
    if not CREATED:
        return
    from pymongo import MongoClient
    env = dict(line.strip().split('=', 1) for line in open('/app/backend/.env') if '=' in line)
    MongoClient(env['MONGO_URL'].strip('"'))[env['DB_NAME'].strip('"')].bookings.delete_many({'booking_id': {'$in': CREATED}})


def _order(room='twin', pax=1, product=KEY, dep='2026-12-07', email=CONTACT['email']):
    r = requests.post(f"{G}/order", json={'product': product, 'departure': dep, 'travellers': pax, 'room': room,
                                          'contact': {**CONTACT, 'email': email}}, timeout=20)
    if r.status_code == 200:
        CREATED.append(r.json()['booking_id'])
    return r


class TestBangkokDepartures:
    def test_single_fixed_departure(self):
        r = requests.get(f"{G}/{KEY}/departures", timeout=20)
        assert r.status_code == 200
        d = r.json()
        assert d['base'] == 63000 and d['single_supplement'] is None and d['deposit_pp'] == 5000
        assert len(d['departures']) == 1
        dep = d['departures'][0]
        assert dep['start'] == '2026-12-07' and dep['end'] == '2026-12-11'
        assert dep['price'] == 63000 and dep['single_supplement'] is None
        assert dep['max_group'] == 20 and dep['seats_left'] <= 20 and dep['status'] in ('available', 'limited')
        assert dep['balance_due'] == '2026-12-01'

    def test_unknown_product_404(self):
        assert requests.get(f"{G}/nope/departures", timeout=20).status_code == 404


class TestBangkokOrder:
    def test_single_room_rejected(self):
        r = _order(room='single')
        assert r.status_code == 400
        assert r.json()['detail'] == 'Private rooms are not available on this trip'

    def test_wrong_date_rejected(self):
        r = _order(dep='2026-12-14')
        assert r.status_code == 400 and 'not open' in r.json()['detail']

    def test_twin_order_quote_and_verify(self):
        r = _order(pax=2, email='TEST_bkk_pytest2@example.com')
        assert r.status_code == 200, r.text
        o = r.json()
        assert o['mock'] is True and o['order_id'].startswith('order_MOCK')
        q = o['quote']
        assert o['amount'] == 1000000 and q['deposit'] == 10000 and q['total'] == 126000 and q['balance'] == 116000
        assert q['per_person'] == 63000 and q['single_supplement'] == 0 and q['room'] == 'twin'
        before = requests.get(f"{G}/{KEY}/departures", timeout=20).json()['departures'][0]['seats_left']
        v = requests.post(f"{BASE_URL}/api/bookings/verify", json={'booking_id': o['booking_id'], 'razorpay_order_id': o['order_id'],
                          'razorpay_payment_id': 'pay_MOCKtest', 'razorpay_signature': 'x'}, timeout=20)
        assert v.status_code == 200 and v.json()['status'] == 'paid'
        b = requests.get(f"{BASE_URL}/api/bookings/{o['booking_id']}", timeout=20).json()
        assert b['product'] == KEY and b['status'] == 'paid' and b['kind'] == 'group' and b['travellers'] == 2
        after = requests.get(f"{G}/{KEY}/departures", timeout=20).json()['departures'][0]['seats_left']
        assert after == before - 2

    def test_too_many_travellers_422(self):
        assert _order(pax=9).status_code == 422


class TestSriLankaRegression:
    def test_sri_lanka_departures_and_single(self):
        r = requests.get(f"{G}/inside-sri-lanka/departures", timeout=20)
        assert r.status_code == 200
        d = r.json()
        assert d['single_supplement'] == 38000 and len(d['departures']) >= 10
        dep = next(x for x in d['departures'] if x['status'] != 'sold_out')
        r2 = _order(room='single', product='inside-sri-lanka', dep=dep['id'], email='TEST_bkk_pytest_sl@example.com')
        assert r2.status_code == 200, r2.text
        assert r2.json()['quote']['per_person'] == dep['price'] + 38000
