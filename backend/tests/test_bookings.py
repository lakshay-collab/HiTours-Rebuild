# Bookings API (MOCK Razorpay): config, order (pricing/validation), verify, get
import os
import requests
import pytest
from datetime import date, timedelta

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL').rstrip('/')
API = f"{BASE_URL}/api/bookings"
CONTACT = {"name": "TEST_Asha Rao", "email": "test_asha@example.com", "phone": "+919876543210"}


def order(departure, rooms, product="fully-loaded-sri-lanka", contact=CONTACT):
    return requests.post(f"{API}/order", json={"product": product, "departure": departure, "rooms": rooms, "contact": contact}, timeout=20)


class TestConfig:
    def test_config_mock(self):
        r = requests.get(f"{API}/config", timeout=20)
        assert r.status_code == 200
        assert r.json() == {"key_id": "", "mock": True, "currency": "INR"}


class TestOrderValidation:
    def test_past_departure_400(self):
        assert order("2025-01-01", [{"adults": 2, "children": 0}]).status_code == 400

    def test_today_departure_400(self):
        assert order(date.today().isoformat(), [{"adults": 2, "children": 0}]).status_code == 400

    def test_three_adults_422(self):
        assert order("2026-11-20", [{"adults": 3, "children": 0}]).status_code == 422

    def test_two_children_422(self):
        assert order("2026-11-20", [{"adults": 2, "children": 2}]).status_code == 422

    def test_seven_rooms_422(self):
        assert order("2026-11-20", [{"adults": 1, "children": 0}] * 7).status_code == 422

    def test_zero_rooms_422(self):
        assert order("2026-11-20", []).status_code == 422

    def test_unknown_product_404(self):
        assert order("2026-11-20", [{"adults": 2, "children": 0}], product="nope").status_code == 404

    def test_bad_email_422(self):
        assert order("2026-11-20", [{"adults": 2, "children": 0}], contact={**CONTACT, "email": "bad"}).status_code == 422


class TestPricing:
    @pytest.mark.parametrize("dep,adult,child,tier", [
        ("2026-11-20", 46484, 32540, "regular"),
        ("2027-01-15", 53447, 37410, "peak"),
        ("2027-08-15", 41829, 29280, "low"),
    ])
    def test_quote(self, dep, adult, child, tier):
        r = order(dep, [{"adults": 2, "children": 1}])
        assert r.status_code == 200, r.text
        d = r.json()
        q = d["quote"]
        assert q["adult_price"] == adult
        assert q["child_price"] == child
        assert q["tier"] == tier
        assert q["total"] == 2 * adult + child
        assert d["amount"] == q["total"] * 100
        assert d["booking_id"].startswith("HT") and len(d["booking_id"]) == 10
        assert d["order_id"].startswith("order_MOCK")
        assert d["mock"] is True

    def test_regular_2a1c_total(self):
        assert order("2026-11-20", [{"adults": 2, "children": 1}]).json()["quote"]["total"] == 125508

    def test_multi_room(self):
        q = order("2026-11-20", [{"adults": 2, "children": 1}, {"adults": 1, "children": 0}]).json()["quote"]
        assert (q["adults"], q["children"], q["rooms"], q["total"]) == (3, 1, 2, 3 * 46484 + 32540)
        assert q["return_date"] == "2026-11-27"


class TestVerifyAndGet:
    def test_full_flow(self):
        d = order("2026-11-20", [{"adults": 2, "children": 0}]).json()
        bid, oid = d["booking_id"], d["order_id"]
        g = requests.get(f"{API}/{bid}", timeout=20).json()
        assert g["status"] == "created"
        v = requests.post(f"{API}/verify", json={"booking_id": bid, "razorpay_order_id": oid, "razorpay_payment_id": "pay_MOCK123", "razorpay_signature": "mock"}, timeout=20)
        assert v.status_code == 200 and v.json() == {"status": "paid", "booking_id": bid}
        g = requests.get(f"{API}/{bid}", timeout=20)
        assert g.status_code == 200
        gd = g.json()
        assert gd["status"] == "paid" and "razorpay_order_id" not in gd and "_id" not in gd
        assert gd["quote"]["total"] == d["quote"]["total"]
        assert gd["contact"]["name"] == CONTACT["name"]

    def test_bad_payment_400(self):
        d = order("2026-11-20", [{"adults": 2, "children": 0}]).json()
        v = requests.post(f"{API}/verify", json={"booking_id": d["booking_id"], "razorpay_order_id": d["order_id"], "razorpay_payment_id": "pay_bad", "razorpay_signature": "x"}, timeout=20)
        assert v.status_code == 400
        assert requests.get(f"{API}/{d['booking_id']}", timeout=20).json()["status"] == "failed"

    def test_wrong_order_id_404(self):
        d = order("2026-11-20", [{"adults": 2, "children": 0}]).json()
        v = requests.post(f"{API}/verify", json={"booking_id": d["booking_id"], "razorpay_order_id": "order_X", "razorpay_payment_id": "pay_MOCK1", "razorpay_signature": "x"}, timeout=20)
        assert v.status_code == 404

    def test_paid_booking_not_downgraded_by_bad_verify(self):
        """A paid booking should stay paid if a later bad verify call arrives (idempotency)."""
        d = order("2026-11-20", [{"adults": 2, "children": 0}]).json()
        body = {"booking_id": d["booking_id"], "razorpay_order_id": d["order_id"], "razorpay_signature": "x"}
        requests.post(f"{API}/verify", json={**body, "razorpay_payment_id": "pay_MOCK1"}, timeout=20)
        requests.post(f"{API}/verify", json={**body, "razorpay_payment_id": "pay_bad"}, timeout=20)
        assert requests.get(f"{API}/{d['booking_id']}", timeout=20).json()["status"] == "paid"

    def test_unknown_get_404(self):
        assert requests.get(f"{API}/HTNOTREAL0", timeout=20).status_code == 404
