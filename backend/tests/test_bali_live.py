"""Bali live-pricing package tests + regression on existing Sri Lanka order."""
import os
import pytest
import requests
from dotenv import load_dotenv
from pathlib import Path

load_dotenv(Path(__file__).resolve().parents[2] / 'frontend' / '.env')
BASE = os.environ['REACT_APP_BACKEND_URL'].rstrip('/')
API = f"{BASE}/api"


@pytest.fixture(scope="module")
def created_bookings():
    ids = []
    yield ids
    # Cleanup via mongo direct
    try:
        from motor.motor_asyncio import AsyncIOMotorClient
        import asyncio
        load_dotenv(Path(__file__).resolve().parents[1] / '.env')
        cli = AsyncIOMotorClient(os.environ['MONGO_URL'])
        d = cli[os.environ['DB_NAME']]
        async def _clean():
            for bid in ids:
                await d.bookings.delete_one({'booking_id': bid})
        asyncio.get_event_loop().run_until_complete(_clean())
    except Exception as e:
        print('cleanup failed', e)


# --- Calendar endpoint -----------------------------------------------------
@pytest.fixture(scope='module')
def cal_2_0():
    r = requests.get(f"{API}/live-packages/bali-kuta-ubud/calendar", params={'rooms': '2-0'}, timeout=120)
    assert r.status_code == 200, r.text
    return r.json()


def test_calendar_shape(cal_2_0):
    j = cal_2_0
    assert j['product'] == 'bali-kuta-ubud'
    assert j['nights'] == 6
    assert 'rates_read_at' in j and j['rates_read_at']
    assert isinstance(j['dates'], dict) and j['dates']
    assert j['from_adult'] == 27600


def test_calendar_common_date(cal_2_0):
    # Pick any date that's not the special NYE/Jan 1-4 window
    d = '2027-02-15'
    assert d in cal_2_0['dates'], f"{d} missing"
    e = cal_2_0['dates'][d]
    assert e['adult'] == 27600
    assert e['total'] == 55200
    assert e['hotels'] == ['Kuta Central Park', 'Alam Puisi villa']


def test_calendar_jan_3(cal_2_0):
    e = cal_2_0['dates'].get('2027-01-03')
    assert e, "2027-01-03 missing"
    assert e['adult'] == 32820
    assert 'Golden Tulip Jineng Resort' in e['hotels'][0]


def test_calendar_jan_4(cal_2_0):
    e = cal_2_0['dates'].get('2027-01-04')
    assert e, "2027-01-04 missing"
    assert e['adult'] == 30210
    assert 'Risata Resort' in e['hotels'][0]


def test_calendar_no_dates_in_ubud_gap(cal_2_0):
    from datetime import date, timedelta
    assert 'Royal Pita Maha' in cal_2_0['dates']['2026-12-18']['hotels'][1]
    a = date(2026, 12, 21)
    b = date(2027, 1, 2)
    d = a
    while d <= b:
        assert d.isoformat() not in cal_2_0['dates'], f"{d} should be gap"
        d += timedelta(days=1)


def test_calendar_first_date_lead(cal_2_0):
    from datetime import datetime, timezone, timedelta
    ist_today = (datetime.now(timezone.utc) + timedelta(hours=5, minutes=30)).date()
    expected = (ist_today + timedelta(days=10)).isoformat()
    assert min(cal_2_0['dates']) == expected


def test_calendar_last_date(cal_2_0):
    assert max(cal_2_0['dates']) == '2027-03-25'


def test_calendar_rooms_1_0():
    r = requests.get(f"{API}/live-packages/bali-kuta-ubud/calendar", params={'rooms': '1-0'}, timeout=120)
    assert r.status_code == 200
    e = r.json()['dates'].get('2027-01-10')
    assert e and e['total'] == 54270, e


def test_calendar_rooms_2_1():
    r = requests.get(f"{API}/live-packages/bali-kuta-ubud/calendar", params={'rooms': '2-1'}, timeout=120)
    assert r.status_code == 200
    # Pick a common date in Feb
    e = r.json()['dates'].get('2027-02-15')
    assert e, 'missing 2027-02-15'
    assert e['total'] == 67090, e
    assert e['child'] == 8750, e


def test_calendar_rooms_two_rooms():
    r = requests.get(f"{API}/live-packages/bali-kuta-ubud/calendar", params={'rooms': '2-0,2-0'}, timeout=120)
    assert r.status_code == 200
    e = r.json()['dates'].get('2027-02-15')
    assert e and e['total'] == 105200, e


def test_calendar_unknown_key():
    r = requests.get(f"{API}/live-packages/unknown/calendar", params={'rooms': '2-0'}, timeout=30)
    assert r.status_code == 404


def test_calendar_too_many_rooms():
    r = requests.get(f"{API}/live-packages/bali-kuta-ubud/calendar", params={'rooms': '2-0,2-0,2-0,2-0,2-0'}, timeout=30)
    assert r.status_code == 400


def test_calendar_bad_rooms_string():
    r = requests.get(f"{API}/live-packages/bali-kuta-ubud/calendar", params={'rooms': 'bad'}, timeout=30)
    assert r.status_code == 400, r.status_code


# --- Order creation -------------------------------------------------------
def _contact():
    return {'name': 'TEST please ignore', 'email': 'TEST_bali@example.com', 'phone': '9999999999'}


def test_order_bali_jan_4(created_bookings):
    body = {'product': 'bali-kuta-ubud', 'departure': '2027-01-04',
            'rooms': [{'adults': 2, 'children': 0}], 'contact': _contact()}
    r = requests.post(f"{API}/bookings/order", json=body, timeout=60)
    assert r.status_code == 200, r.text
    j = r.json()
    created_bookings.append(j['booking_id'])
    assert j['amount'] == 6042000
    assert j['quote']['total'] == 60420
    assert j['quote'].get('hotels')


def test_order_unavailable_date():
    body = {'product': 'bali-kuta-ubud', 'departure': '2026-12-25',
            'rooms': [{'adults': 2, 'children': 0}], 'contact': _contact()}
    r = requests.post(f"{API}/bookings/order", json=body, timeout=60)
    assert r.status_code == 400
    assert 'not available' in r.text


def test_order_too_soon():
    from datetime import datetime, timezone, timedelta
    ist = (datetime.now(timezone.utc) + timedelta(hours=5, minutes=30)).date()
    soon = (ist + timedelta(days=3)).isoformat()
    body = {'product': 'bali-kuta-ubud', 'departure': soon,
            'rooms': [{'adults': 2, 'children': 0}], 'contact': _contact()}
    r = requests.post(f"{API}/bookings/order", json=body, timeout=60)
    assert r.status_code == 400


def test_order_sri_lanka_regression(created_bookings):
    body = {'product': 'fully-loaded-sri-lanka', 'departure': '2027-02-10',
            'rooms': [{'adults': 2, 'children': 0}],
            'contact': {'name': 'TEST please ignore', 'email': 'TEST_sl@example.com', 'phone': '9999999999'}}
    r = requests.post(f"{API}/bookings/order", json=body, timeout=60)
    assert r.status_code == 200, r.text
    j = r.json()
    created_bookings.append(j['booking_id'])
    assert j['quote']['total'] > 0
    assert j['amount'] == j['quote']['total'] * 100


# --- Refresh ---------------------------------------------------------------
def test_refresh_endpoint():
    r = requests.post(f"{API}/live-packages/refresh", timeout=120)
    assert r.status_code == 200, r.text
    assert r.json().get('rates_read_at')
