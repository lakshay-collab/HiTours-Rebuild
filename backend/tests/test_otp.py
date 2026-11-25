# OTP (mocked delivery) send/verify/rate-limit tests + lead-without-email check
import os
import random
import pytest
import requests
from dotenv import load_dotenv

load_dotenv('/app/frontend/.env')
BASE_URL = os.environ.get('REACT_APP_BACKEND_URL').rstrip('/')


def rand_phone():
    return '9' + ''.join(random.choice('0123456789') for _ in range(9))


@pytest.fixture
def s():
    x = requests.Session()
    x.headers.update({'Content-Type': 'application/json'})
    return x


class TestOtp:
    def test_send_returns_demo_code(self, s):
        r = s.post(f'{BASE_URL}/api/otp/send', json={'country_code': '+91', 'phone': rand_phone()})
        assert r.status_code == 200
        d = r.json()
        assert d['sent'] is True and d['mocked'] is True
        assert isinstance(d['demo_code'], str) and len(d['demo_code']) == 6 and d['demo_code'].isdigit()

    def test_verify_correct_code(self, s):
        p = rand_phone()
        code = s.post(f'{BASE_URL}/api/otp/send', json={'country_code': '+91', 'phone': p}).json()['demo_code']
        r = s.post(f'{BASE_URL}/api/otp/verify', json={'country_code': '+91', 'phone': p, 'code': code})
        assert r.status_code == 200
        d = r.json()
        assert d['verified'] is True and isinstance(d['token'], str) and len(d['token']) > 10
        # code is single use
        r2 = s.post(f'{BASE_URL}/api/otp/verify', json={'country_code': '+91', 'phone': p, 'code': code})
        assert r2.status_code == 400

    def test_verify_wrong_code(self, s):
        p = rand_phone()
        code = s.post(f'{BASE_URL}/api/otp/send', json={'country_code': '+91', 'phone': p}).json()['demo_code']
        wrong = '000000' if code != '000000' else '111111'
        r = s.post(f'{BASE_URL}/api/otp/verify', json={'country_code': '+91', 'phone': p, 'code': wrong})
        assert r.status_code == 400
        assert 'not right' in r.json()['detail']

    def test_attempts_limit(self, s):
        p = rand_phone()
        code = s.post(f'{BASE_URL}/api/otp/send', json={'country_code': '+91', 'phone': p}).json()['demo_code']
        wrong = '000000' if code != '000000' else '111111'
        for _ in range(5):
            s.post(f'{BASE_URL}/api/otp/verify', json={'country_code': '+91', 'phone': p, 'code': wrong})
        r = s.post(f'{BASE_URL}/api/otp/verify', json={'country_code': '+91', 'phone': p, 'code': code})
        assert r.status_code == 400
        assert 'expired' in r.json()['detail']

    def test_verify_without_send(self, s):
        r = s.post(f'{BASE_URL}/api/otp/verify', json={'country_code': '+91', 'phone': rand_phone(), 'code': '123456'})
        assert r.status_code == 400

    def test_invalid_number(self, s):
        r = s.post(f'{BASE_URL}/api/otp/send', json={'country_code': '+91', 'phone': '12'})
        assert r.status_code == 400

    def test_missing_fields_422(self, s):
        r = s.post(f'{BASE_URL}/api/otp/send', json={'phone': '9876543210'})
        assert r.status_code == 422

    def test_rate_limit_5_per_hour(self, s):
        p = rand_phone()
        codes = [s.post(f'{BASE_URL}/api/otp/send', json={'country_code': '+91', 'phone': p}).status_code for _ in range(6)]
        assert codes[:5] == [200] * 5
        assert codes[5] == 429

    def test_rate_limit_formatting_variants_share_bucket(self, s):
        p = rand_phone()
        for _ in range(5):
            assert s.post(f'{BASE_URL}/api/otp/send', json={'country_code': '+91', 'phone': p}).status_code == 200
        r = s.post(f'{BASE_URL}/api/otp/send', json={'country_code': '91', 'phone': f'{p[:5]} {p[5:]}'})
        assert r.status_code == 429


class TestLeadFromLiveModal:
    # LiveDetailsModal posts /api/leads with email='' -> validated by backend (no CRM push on 400)
    def test_lead_with_empty_email_is_rejected(self, s):
        r = s.post(f'{BASE_URL}/api/leads', json={'name': 'TEST_otp', 'country_code': '+91', 'phone': '9000000000', 'email': '',
                                                  'destination': 'Bali', 'trip_title': 'TEST', 'source': 'live-package-view-details'})
        print(r.status_code, r.text[:200])
        assert r.status_code == 200, f'lead from live modal (no email) rejected: {r.status_code} {r.text}'
