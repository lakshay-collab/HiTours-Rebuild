"""Balance payments for group bookings: Razorpay Payment Links (sent by Razorpay via SMS + email) per payment milestone."""
import asyncio
import hmac
import logging
import os
import uuid
from datetime import UTC, datetime, time, timedelta, timezone

from fastapi import APIRouter, BackgroundTasks, HTTPException, Request

from bookings import MOCK, _rzp

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api")
IST = timezone(timedelta(hours=5, minutes=30))
OPEN = ('created', 'partially_paid')


def _paid_total(b: dict) -> int:
    return b['quote']['deposit'] + sum(link.get('amount_paid', 0) for link in b.get('balance_links', []))


def _next_milestone(b: dict) -> tuple[int, dict, int] | None:
    total, paid = b['quote']['total'], _paid_total(b)
    for i, m in enumerate(b['quote'].get('milestones') or [{'due': b['quote']['balance_due'], 'pct': 1.0}]):
        target = round(total * m['pct'])
        if target > paid:
            return i, m, target - paid
    return None


def _expire_ts(due_iso: str) -> int:
    end = datetime.combine(datetime.fromisoformat(due_iso).date(), time(23, 59), IST)
    return int(max(end, datetime.now(UTC) + timedelta(days=1)).timestamp())


async def send_next_link(db, b: dict) -> dict | None:
    """Create and send the payment link for the first unpaid milestone, unless one is already open."""
    nxt = _next_milestone(b)
    if not nxt or b.get('mock'):
        return None
    idx, m, amount = nxt
    if any(link['milestone'] == idx and link['status'] in OPEN for link in b.get('balance_links', [])):
        return None
    label = 'final payment' if m['pct'] >= 1 else f"{round(m['pct'] * 100)}% payment"
    c = b['contact']
    body = {
        'amount': amount * 100, 'currency': 'INR', 'accept_partial': False, 'expire_by': _expire_ts(m['due']),
        'reference_id': f"{b['booking_id']}-{idx}-{uuid.uuid4().hex[:4]}",
        'description': f"{b['title']} · {label} due {m['due']} (booking {b['booking_id']})"[:2048],
        'customer': {'name': c['name'], 'email': c['email'], 'contact': c['phone']},
        'notify': {'sms': True, 'email': True}, 'reminder_enable': True,
        'notes': {'booking_id': b['booking_id'], 'milestone': str(idx)},
    }
    if MOCK:
        res = {'id': 'plink_MOCK' + uuid.uuid4().hex[:10], 'short_url': '', 'status': 'created'}
    else:
        res = _rzp.payment_link.create(body)
    link = {'milestone': idx, 'label': label, 'due': m['due'], 'amount': amount, 'amount_paid': 0, 'id': res['id'],
            'short_url': res.get('short_url', ''), 'status': res.get('status', 'created'), 'created_at': datetime.now(UTC).isoformat()}
    await db.bookings.update_one({'booking_id': b['booking_id']}, {'$push': {'balance_links': link}})
    logger.info(f"Balance link {link['id']} ({label}, {amount} INR, due {m['due']}) sent for {b['booking_id']}")
    return link


async def sync_booking(db, b: dict) -> None:
    """Refresh open links from Razorpay, then send the next milestone link if needed."""
    for i, link in enumerate(b.get('balance_links', [])):
        if link['status'] not in OPEN or MOCK:
            continue
        res = _rzp.payment_link.fetch(link['id'])
        if res['status'] != link['status'] or res.get('amount_paid', 0) // 100 != link['amount_paid']:
            link['status'], link['amount_paid'] = res['status'], res.get('amount_paid', 0) // 100
            await db.bookings.update_one({'booking_id': b['booking_id']}, {'$set': {f'balance_links.{i}.status': link['status'], f'balance_links.{i}.amount_paid': link['amount_paid']}})
    fully_paid = _next_milestone(b) is None
    if fully_paid and not b.get('fully_paid'):
        await db.bookings.update_one({'booking_id': b['booking_id']}, {'$set': {'fully_paid': True}})
    if not fully_paid:
        await send_next_link(db, b)


async def sync_all(db) -> None:
    async for b in db.bookings.find({'kind': 'group', 'status': 'paid', 'mock': False, 'fully_paid': {'$ne': True}}, {'_id': 0}):
        try:
            await sync_booking(db, b)
        except Exception as exc:  # one bad booking must not stop the run
            logger.error(f"Balance sync failed for {b['booking_id']}: {exc}")
        await asyncio.sleep(0.5)


def register(db):
    @router.post('/cron/balance-links')
    async def cron_balance_links(request: Request, tasks: BackgroundTasks):
        # Cron endpoints must ack 2xx immediately; enqueue/background the actual work.
        auth = request.headers.get('authorization', '')
        if not auth.startswith('Bearer ') or not hmac.compare_digest(auth[7:], os.environ['WEBHOOK_CRON_SECRET']):
            raise HTTPException(401, 'Unauthorized')
        run_id = request.headers.get('x-webhook-id') or uuid.uuid4().hex
        if await db.cron_runs.find_one({'run_id': run_id}):
            return {'status': 'duplicate'}
        await db.cron_runs.insert_one({'run_id': run_id, 'job': 'balance-links', 'at': datetime.now(UTC).isoformat()})
        tasks.add_task(sync_all, db)
        return {'status': 'accepted'}

    return router
