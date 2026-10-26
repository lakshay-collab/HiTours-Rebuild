# Group tour (Inside Sri Lanka) departures + deposit order + verify + GET booking
import os
from datetime import date, timedelta

import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL').rstrip('/')
G = f"{BASE_URL}/api/bookings/group"
CONTACT = {'name': 'TEST Group', 'email': 'TEST_group_pytest@example.com', 'phone': '+919876543210'}


@pytest.fixture(scope='module', autouse=True)
def _cleanup():
    # Teardown: paid TEST_ bookings reduce seats_left, so remove them after the module
    yield
    from pymongo import MongoClient
    env = dict(line.strip().split('=', 1) for line in open('/app/backend/.env') if '=' in line)
    MongoClient(env['MONGO_URL'].strip('"'))[env['DB_NAME'].strip('"')].bookings.delete_many(
        {'kind': 'group', 'contact.email': {'$regex': '^TEST_group'}})


@pytest.fixture(scope='module')
def deps():
    r = requests.get(f"{G}/inside-sri-lanka/departures", timeout=20)
    assert r.status_code == 200
    return r.json()['departures']


def _open(deps, min_seats=2, early=None):
    for d in deps:
        if d['status'] != 'sold_out' and d['seats_left'] >= min_seats and (early is None or d['early_bird'] == early):
            return d
    pytest.skip('no matching departure')


def _order(dep_id, pax=2, room='twin', email=CONTACT['email'], product='inside-sri-lanka'):
    return requests.post(f"{G}/order", json={'product': product, 'departure': dep_id, 'travellers': pax, 'room': room,
                                              'contact': {**CONTACT, 'email': email}}, timeout=20)


# Departures schedule
class TestDepartures:
    def test_twelve_saturdays(self, deps):
        assert len(deps) == 12
        months = {}
        for d in deps:
            s = date.fromisoformat(d['start'])
            assert s.weekday() == 5
            assert date.fromisoformat(d['end']) == s + timedelta(days=11)
            if d['full_payment']:
                assert d['balance_due'] is None and (s - date.today()).days < 60
            else:
                assert date.fromisoformat(d['balance_due']) == s - timedelta(days=60)
            months[d['start'][:7]] = months.get(d['start'][:7], 0) + 1
            assert d['id'] == d['start']
        assert len(months) == 6 and all(v == 2 for v in months.values())

    def test_price_status_deposit(self, deps):
        today = date.today()
        for d in deps:
            s = date.fromisoformat(d['start'])
            assert d['price'] == (215000 if s.month in (12, 1, 2) else 200000)
            exp = 'sold_out' if d['seats_left'] == 0 else 'limited' if d['seats_left'] <= 4 else 'available'
            assert d['status'] == exp
            assert d['deposit_pct'] == (100 if d['full_payment'] else 5 if d['early_bird'] else 10)
            ahead = (s - today).days
            if abs(ahead - 90) > 1:
                assert d['early_bird'] == (ahead >= 90)

    def test_unknown_key_404(self):
        assert requests.get(f"{G}/nope/departures", timeout=20).status_code == 404


# Deposit order + validation
class TestOrder:
    def test_twin_order(self, deps):
        d = _open(deps)
        r = _order(d['id'], 2, 'twin')
        assert r.status_code == 200, r.text
        j = r.json()
        q = j['quote']
        total = d['price'] * 2
        dep = int(total * d['deposit_pct'] / 100 + 0.5)
        assert j['booking_id'].startswith('HG') and j['order_id'] and j['mock'] is True
        assert q['total'] == total and q['deposit'] == dep and q['balance'] == total - dep
        assert j['amount'] == dep * 100
        assert q['per_person'] == d['price'] and q['travellers'] == 2 and q['room'] == 'twin' and q['balance_due'] == d['balance_due']

    def test_single_supplement(self, deps):
        d = _open(deps)
        j = _order(d['id'], 2, 'single', email='TEST_group_single@example.com').json()
        assert j['quote']['per_person'] == d['price'] + 38000
        assert j['quote']['total'] == (d['price'] + 38000) * 2

    def test_reuse_pending(self, deps):
        d = _open(deps)
        a = _order(d['id'], 1, 'twin', email='TEST_group_reuse@example.com').json()
        b = _order(d['id'], 1, 'twin', email='TEST_group_reuse@example.com').json()
        assert a['booking_id'] == b['booking_id'] and a['order_id'] == b['order_id']

    def test_sold_out_400(self, deps):
        s = next((d for d in deps if d['status'] == 'sold_out'), None)
        if not s:
            pytest.skip('no sold out')
        assert _order(s['id'], 1).status_code == 400

    def test_over_seats_400(self, deps):
        d = next(d for d in deps if 0 < d['seats_left'] < 8)
        assert _order(d['id'], d['seats_left'] + 1).status_code == 400

    @pytest.mark.parametrize('pax', [0, 9])
    def test_pax_bounds_422(self, deps, pax):
        assert _order(_open(deps)['id'], pax).status_code == 422

    def test_unknown_date_400(self, deps):
        d = date.fromisoformat(_open(deps)['id']) + timedelta(days=1)
        assert _order(d.isoformat(), 1).status_code == 400

    def test_unknown_product_404(self, deps):
        assert _order(_open(deps)['id'], 1, product='nope').status_code == 404

    def test_bad_room_422(self, deps):
        assert _order(_open(deps)['id'], 1, room='triple').status_code == 422


# Verify + GET
class TestVerify:
    def test_verify_and_get(self, deps):
        d = _open(deps, early=True) if any(x['early_bird'] for x in deps) else _open(deps)
        j = _order(d['id'], 2, 'twin', email='TEST_group_verify@example.com').json()
        v = requests.post(f"{BASE_URL}/api/bookings/verify", json={'booking_id': j['booking_id'], 'razorpay_order_id': j['order_id'],
                                                                   'razorpay_payment_id': 'pay_MOCK123', 'razorpay_signature': 'mock'}, timeout=20)
        assert v.status_code == 200 and v.json()['status'] == 'paid'
        g = requests.get(f"{BASE_URL}/api/bookings/{j['booking_id']}", timeout=20)
        assert g.status_code == 200
        b = g.json()
        assert b['kind'] == 'group' and b['status'] == 'paid'
        assert '***' in b['contact']['email'] and b['contact']['phone'].startswith('***')
        assert 'razorpay_order_id' not in b and 'razorpay_payment_id' not in b and '_id' not in b
        assert b['quote']['deposit'] == j['quote']['deposit'] and b['quote']['deposit_pct'] == d['deposit_pct']

    def test_verify_wrong_order(self, deps):
        j = _order(_open(deps)['id'], 1, email='TEST_group_bad@example.com').json()
        v = requests.post(f"{BASE_URL}/api/bookings/verify", json={'booking_id': j['booking_id'], 'razorpay_order_id': 'x',
                                                                   'razorpay_payment_id': 'pay_MOCK1', 'razorpay_signature': 'm'}, timeout=20)
        assert v.status_code == 404
