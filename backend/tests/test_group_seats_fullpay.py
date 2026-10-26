# Group tour: full payment for <60-day departures + seats_left reduced by paid bookings
import os
from datetime import date, timedelta

import pytest
import requests
from pymongo import MongoClient

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL').rstrip('/')
G = f"{BASE_URL}/api/bookings/group"


def _env(k):
    for line in open('/app/backend/.env'):
        if line.startswith(k + '='):
            return line.split('=', 1)[1].strip().strip('"')


@pytest.fixture(scope='module')
def db():
    c = MongoClient(_env('MONGO_URL'))
    d = c[_env('DB_NAME')]
    yield d
    d.bookings.delete_many({'contact.email': {'$regex': '^TEST_seats'}})


def _deps():
    r = requests.get(f"{G}/inside-sri-lanka/departures", timeout=20)
    assert r.status_code == 200
    return {d['id']: d for d in r.json()['departures']}


def _order(dep_id, pax, email):
    return requests.post(f"{G}/order", json={'product': 'inside-sri-lanka', 'departure': dep_id, 'travellers': pax, 'room': 'twin',
                                              'contact': {'name': 'TEST Seats', 'email': email, 'phone': '+919876543210'}}, timeout=20)


# Full payment for near departures
class TestFullPayment:
    def test_near_full_payment(self):
        deps = _deps()
        for k in ('2026-11-14', '2026-11-28', '2026-12-12'):
            d = deps[k]
            assert d['full_payment'] is True and d['deposit_pct'] == 100 and d['balance_due'] is None, d

    def test_later_deposit(self):
        for d in _deps().values():
            if d['full_payment']:
                continue
            s = date.fromisoformat(d['start'])
            assert d['deposit_pct'] in (5, 10)
            assert d['balance_due'] == (s - timedelta(days=60)).isoformat()
        assert _deps()['2027-01-09']['deposit_pct'] == 10

    def test_full_payment_order_quote(self, db):
        r = _order('2026-11-14', 1, 'TEST_seats_full@example.com')
        assert r.status_code == 200, r.text
        q = r.json()['quote']
        assert q['deposit'] == q['total'] == 200000 and q['balance'] == 0 and q['balance_due'] is None and q['full_payment'] is True
        assert r.json()['amount'] == 200000 * 100


# Seats reduced by paid bookings
class TestSeats:
    def test_paid_booking_reduces_seats(self, db):
        before = _deps()['2027-01-09']
        assert before['seats_left'] == 6 and before['status'] == 'available'
        j = _order('2027-01-09', 2, 'TEST_seats_paid@example.com').json()
        assert j['quote']['deposit'] == 43000
        # unpaid order should not reduce seats
        assert _deps()['2027-01-09']['seats_left'] == 6
        v = requests.post(f"{BASE_URL}/api/bookings/verify", json={'booking_id': j['booking_id'], 'razorpay_order_id': j['order_id'],
                                                                   'razorpay_payment_id': 'pay_MOCKseats', 'razorpay_signature': 'mock'}, timeout=20)
        assert v.status_code == 200 and v.json()['status'] == 'paid'
        after = _deps()['2027-01-09']
        assert after['seats_left'] == 4 and after['status'] == 'limited'
        r = _order('2027-01-09', 5, 'TEST_seats_over@example.com')
        assert r.status_code == 400 and '4 seats' in r.text
        assert _order('2027-01-09', 4, 'TEST_seats_ok@example.com').status_code == 200

    def test_cleanup_restores(self, db):
        db.bookings.delete_many({'contact.email': {'$regex': '^TEST_seats'}})
        assert _deps()['2027-01-09']['seats_left'] == 6
