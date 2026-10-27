# Group tour v2: flat ₹5,000 seat-hold deposit, departures shape, balance_due rule, room-change pending reuse
import os
from datetime import date, timedelta

import requests

BASE = os.environ['REACT_APP_BACKEND_URL'].rstrip('/')
DEPS = f"{BASE}/api/bookings/group/inside-sri-lanka/departures"


def _deps():
    r = requests.get(DEPS, timeout=20)
    assert r.status_code == 200
    return r.json()


def _order(dep, pax, room, email='TEST_v2@example.com'):
    return requests.post(f"{BASE}/api/bookings/group/order", json={
        'product': 'inside-sri-lanka', 'departure': dep, 'travellers': pax, 'room': room,
        'contact': {'name': 'TEST_ V2', 'email': email, 'phone': '+919876543210'}}, timeout=20)


def test_departures_shape():
    d = _deps()
    assert d['deposit_pp'] == 5000
    for k in ('deposit_pct', 'early_bird', 'full_payment'):
        assert k not in d
    assert len(d['departures']) == 12
    for dep in d['departures']:
        assert dep['deposit_pp'] == 5000
        for k in ('deposit_pct', 'early_bird', 'full_payment'):
            assert k not in dep
        m = int(dep['start'][5:7])
        assert dep['price'] == (215000 if m in (12, 1, 2) else 200000)
        s = dep['seats_left']
        assert dep['status'] == ('sold_out' if s <= 0 else 'limited' if s <= 4 else 'available')
        assert dep['guaranteed'] == (dep['max_group'] - s >= 6)
        start = date.fromisoformat(dep['start'])
        assert date.fromisoformat(dep['balance_due']) >= start - timedelta(days=60)


def test_twin_and_single_quote():
    r = _order('2027-01-09', 2, 'twin')
    assert r.status_code == 200, r.text
    q = r.json()['quote']
    assert q['deposit'] == 10000 and q['deposit_pp'] == 5000 and r.json()['amount'] == 1000000
    assert q['total'] == 430000 and q['balance'] == 420000
    r2 = _order('2027-01-09', 2, 'single', email='TEST_v2b@example.com')
    q2 = r2.json()['quote']
    assert q2['total'] == 430000 + 76000 and q2['deposit'] == 10000 and q2['balance'] == 496000


def test_validation():
    assert _order('2026-12-26', 1, 'twin').status_code == 400
    assert _order('2027-01-23', 3, 'twin').status_code == 400
    assert _order('2027-01-09', 0, 'twin').status_code == 422
    assert _order('2027-01-09', 9, 'twin').status_code == 422
