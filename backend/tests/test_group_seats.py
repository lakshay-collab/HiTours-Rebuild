# Group tour seat accounting: paid deposit reduces seats_left; oversell on verify returns 409 'oversold'
import os

import pytest
import requests
from pymongo import MongoClient

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL').rstrip('/')
G = f"{BASE_URL}/api/bookings/group"
ENV = dict(line.strip().split('=', 1) for line in open('/app/backend/.env') if '=' in line)
DB = MongoClient(ENV['MONGO_URL'].strip('"'))[ENV['DB_NAME'].strip('"')]


@pytest.fixture(scope='module', autouse=True)
def _cleanup():
    yield
    DB.bookings.delete_many({'kind': 'group', 'contact.email': {'$regex': '^TEST_group'}})


def _deps():
    return {d['id']: d for d in requests.get(f"{G}/inside-sri-lanka/departures", timeout=20).json()['departures']}


def _order(dep_id, pax, email, room='twin'):
    return requests.post(f"{G}/order", json={'product': 'inside-sri-lanka', 'departure': dep_id, 'travellers': pax, 'room': room,
                                              'contact': {'name': 'TEST Seats', 'email': email, 'phone': '+919876543210'}}, timeout=20)


def _verify(j):
    return requests.post(f"{BASE_URL}/api/bookings/verify", json={'booking_id': j['booking_id'], 'razorpay_order_id': j['order_id'],
                                                                 'razorpay_payment_id': 'pay_MOCK1', 'razorpay_signature': 'mock'}, timeout=20)


class TestSeats:
    def test_single_room_deposit_flat(self):
        d = next(d for d in _deps().values() if d['seats_left'] >= 3)
        j = _order(d['id'], 3, 'TEST_group_single3@example.com', room='single').json()
        q = j['quote']
        assert q['deposit'] == 15000 and j['amount'] == 1500000
        assert q['total'] == (d['price'] + 38000) * 3 and q['balance'] == q['total'] - 15000

    def test_paid_reduces_seats(self):
        before = _deps()
        d = next(d for d in before.values() if d['seats_left'] >= 5)
        j = _order(d['id'], 2, 'TEST_group_seat@example.com').json()
        assert _verify(j).status_code == 200
        after = _deps()[d['id']]
        assert after['seats_left'] == d['seats_left'] - 2
        assert after['status'] == ('limited' if after['seats_left'] <= 4 else 'available')

    def test_oversell_409(self):
        d = next(d for d in _deps().values() if 1 <= d['seats_left'] <= 4)
        n = d['seats_left']
        a = _order(d['id'], n, 'TEST_group_os1@example.com').json()
        b = _order(d['id'], n, 'TEST_group_os2@example.com').json()
        assert _verify(a).status_code == 200
        dep = _deps()[d['id']]
        assert dep['seats_left'] == 0 and dep['status'] == 'sold_out'
        v = _verify(b)
        assert v.status_code == 409, v.text
        assert DB.bookings.find_one({'booking_id': b['booking_id']})['status'] == 'oversold'
        # Sold-out now rejects new orders
        assert _order(d['id'], 1, 'TEST_group_os3@example.com').status_code == 400
