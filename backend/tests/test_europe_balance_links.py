# Grand Wonders of Europe group tour: departures/milestones, deposit order (REAL Razorpay test mode),
# HMAC verify -> first balance Payment Link, cron /api/cron/balance-links auth/dedupe -> second link, mock bookings never get links
import hashlib
import hmac
import os
import time
import uuid

import pytest
import requests
from pymongo import MongoClient

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL').rstrip('/')
G = f"{BASE_URL}/api/bookings/group"
KEY = 'grand-wonders-of-europe'


def _proc_env():
    # Razorpay keys live in the backend process env (not backend/.env)
    env = dict(line.strip().split('=', 1) for line in open('/app/backend/.env') if '=' in line)
    env = {k: v.strip('"') for k, v in env.items()}
    for pid in os.popen("pgrep -f 'uvicorn server:app'").read().split():
        try:
            for kv in open(f'/proc/{pid}/environ').read().split('\0'):
                if kv.startswith('RAZORPAY_'):
                    k, v = kv.split('=', 1)
                    env[k] = v
        except OSError:
            pass
    return env


ENV = _proc_env()
SECRET = ENV.get('RAZORPAY_KEY_SECRET', '')
CRON = ENV['WEBHOOK_CRON_SECRET']
db = MongoClient(ENV['MONGO_URL'])[ENV['DB_NAME']]
RUN = uuid.uuid4().hex[:6]
CREATED, RUN_IDS = [], []
STATE = {}


@pytest.fixture(scope='module', autouse=True)
def _cleanup():
    yield
    import razorpay
    rzp = razorpay.Client(auth=(ENV['RAZORPAY_KEY_ID'], SECRET)) if SECRET else None
    for b in db.bookings.find({'booking_id': {'$in': CREATED}}):
        for link in b.get('balance_links', []):
            try:
                rzp.payment_link.cancel(link['id'])
            except Exception as exc:
                print('cancel failed', link['id'], exc)
    db.bookings.delete_many({'booking_id': {'$in': CREATED}})
    db.cron_runs.delete_many({'run_id': {'$in': RUN_IDS}})


def _contact(n):
    return {'name': 'TEST_EU Pytest', 'email': f'qa+eu{RUN}{n}@example.com', 'phone': '+919876543210'}


def _order(room='twin', pax=1, dep='2027-03-15', n=1):
    r = requests.post(f"{G}/order", json={'product': KEY, 'departure': dep, 'travellers': pax, 'room': room, 'contact': _contact(n)}, timeout=30)
    if r.status_code == 200:
        CREATED.append(r.json()['booking_id'])
    return r


def _cron(token=None, run_id=None):
    h = {}
    if token is not None:
        h['Authorization'] = f'Bearer {token}'
    if run_id:
        h['X-Webhook-Id'] = run_id
        RUN_IDS.append(run_id)
    return requests.post(f"{BASE_URL}/api/cron/balance-links", headers=h, timeout=20)


class TestEuropeDepartures:
    def test_twelve_departures_with_milestones(self):
        r = requests.get(f"{G}/{KEY}/departures", timeout=20)
        assert r.status_code == 200
        deps = r.json()['departures']
        assert [d['id'] for d in deps] == [f'{y}-{m:02d}-{d}' for y, m in [(2026, 12), (2027, 1), (2027, 2), (2027, 3), (2027, 4), (2027, 5)] for d in (15, 22)]
        from datetime import date, timedelta
        floor = date.today() + timedelta(days=7)
        for d in deps:
            s = date.fromisoformat(d['start'])
            assert d['price'] == 175676 and d['deposit_pp'] == 5000
            assert d['end'] == (s + timedelta(days=15)).isoformat()
            ms = d['milestones']
            assert [m['pct'] for m in ms] == [0.5, 1.0]
            assert ms[0]['due'] == max(s - timedelta(days=45), floor).isoformat()
            assert ms[1]['due'] == max(s - timedelta(days=30), floor).isoformat()
            assert d['balance_due'] == ms[1]['due']

    def test_single_room_rejected(self):
        r = _order(room='single', n=0)
        assert r.status_code == 400
        assert 'Private rooms' in r.json()['detail']


class TestEuropeBookingFlow:
    def test_order_quote(self):
        r = _order(pax=2, n=1)
        assert r.status_code == 200, r.text
        d = r.json()
        assert d['mock'] is False and d['order_id'].startswith('order_') and d['amount'] == 1000000
        q = d['quote']
        assert q['total'] == 351352 and q['deposit'] == 10000 and q['balance'] == 341352
        assert q['milestones'] == [{'due': '2027-01-29', 'pct': 0.5}, {'due': '2027-02-13', 'pct': 1.0}]
        STATE.update(bid=d['booking_id'], oid=d['order_id'])

    def test_verify_bad_signature(self):
        r = _order(pax=1, n=2)
        assert r.status_code == 200
        d = r.json()
        v = requests.post(f"{BASE_URL}/api/bookings/verify", json={'booking_id': d['booking_id'], 'razorpay_order_id': d['order_id'],
                                                                 'razorpay_payment_id': 'pay_FAKE123', 'razorpay_signature': 'bad'}, timeout=20)
        assert v.status_code == 400

    def test_verify_creates_first_link(self):
        assert SECRET, 'RAZORPAY_KEY_SECRET not found'
        pay = 'pay_TEST' + uuid.uuid4().hex[:10]
        sig = hmac.new(SECRET.encode(), f"{STATE['oid']}|{pay}".encode(), hashlib.sha256).hexdigest()
        v = requests.post(f"{BASE_URL}/api/bookings/verify", json={'booking_id': STATE['bid'], 'razorpay_order_id': STATE['oid'],
                                                                 'razorpay_payment_id': pay, 'razorpay_signature': sig}, timeout=40)
        assert v.status_code == 200 and v.json()['status'] == 'paid'
        g = requests.get(f"{BASE_URL}/api/bookings/{STATE['bid']}", timeout=20).json()
        assert g['status'] == 'paid'
        links = g.get('balance_links', [])
        assert len(links) == 1, links
        l0 = links[0]
        assert l0['label'] == '50% payment' and l0['amount'] == 165676 and l0['due'] == '2027-01-29'
        assert l0['short_url'].startswith('https://rzp.io') and l0['status'] == 'created' and l0['id'].startswith('plink_')

    def test_verify_idempotent_no_duplicate_link(self):
        g = db.bookings.find_one({'booking_id': STATE['bid']})
        v = requests.post(f"{BASE_URL}/api/bookings/verify", json={'booking_id': STATE['bid'], 'razorpay_order_id': STATE['oid'],
                                                                 'razorpay_payment_id': g['razorpay_payment_id'], 'razorpay_signature': 'x'}, timeout=20)
        assert v.status_code == 200
        assert len(db.bookings.find_one({'booking_id': STATE['bid']})['balance_links']) == 1


class TestCron:
    def test_no_auth(self):
        assert _cron().status_code == 401

    def test_wrong_auth(self):
        assert _cron('wrong').status_code == 401

    def test_accepted_then_duplicate(self):
        rid = 'TEST_' + uuid.uuid4().hex
        r1 = _cron(CRON, rid)
        assert r1.status_code == 200 and r1.json() == {'status': 'accepted'}
        r2 = _cron(CRON, rid)
        assert r2.status_code == 200 and r2.json() == {'status': 'duplicate'}

    def test_second_link_after_first_paid(self):
        time.sleep(3)
        b = db.bookings.find_one({'booking_id': STATE['bid']})
        assert len(b['balance_links']) == 1, 'cron created extra link while first is open'
        db.bookings.update_one({'booking_id': STATE['bid']}, {'$set': {'balance_links.0.status': 'paid', 'balance_links.0.amount_paid': 165676}})
        links = []
        for attempt in range(2):
            _cron(CRON, 'TEST_' + uuid.uuid4().hex)
            for _ in range(10):
                time.sleep(1.5)
                links = db.bookings.find_one({'booking_id': STATE['bid']})['balance_links']
                if len(links) >= 2:
                    break
            if len(links) >= 2:
                break
            time.sleep(60)
        assert len(links) == 2, links
        l1 = links[1]
        assert l1['label'] == 'final payment' and l1['amount'] == 175676 and l1['due'] == '2027-02-13' and l1['milestone'] == 1
        assert l1['short_url'].startswith('https://rzp.io')

    def test_mock_booking_never_gets_links(self):
        bid = 'HGTEST' + uuid.uuid4().hex[:6].upper()
        CREATED.append(bid)
        q = {'total': 351352, 'deposit': 10000, 'balance': 341352, 'balance_due': '2027-02-13', 'travellers': 2,
             'milestones': [{'due': '2027-01-29', 'pct': 0.5}, {'due': '2027-02-13', 'pct': 1.0}]}
        db.bookings.insert_one({'booking_id': bid, 'kind': 'group', 'product': KEY, 'title': 'Grand Wonders of Europe', 'departure': '2027-03-15',
                                'travellers': 2, 'room': 'twin', 'contact': _contact(9), 'quote': q, 'amount_paise': 1000000,
                                'razorpay_order_id': 'order_MOCKx' + bid, 'status': 'created', 'mock': True})
        v = requests.post(f"{BASE_URL}/api/bookings/verify", json={'booking_id': bid, 'razorpay_order_id': 'order_MOCKx' + bid,
                                                                 'razorpay_payment_id': 'pay_MOCK1', 'razorpay_signature': 'x'}, timeout=20)
        assert v.status_code == 200
        _cron(CRON, 'TEST_' + uuid.uuid4().hex)
        time.sleep(4)
        assert not db.bookings.find_one({'booking_id': bid}).get('balance_links')
