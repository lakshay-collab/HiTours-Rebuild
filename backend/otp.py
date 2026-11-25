"""Phone OTP before live prices. Delivery is MOCKED until an SMS/WhatsApp provider (e.g. Gupshup, Interakt) is connected."""
import hashlib
import logging
import os
import re
import secrets
from datetime import datetime, timedelta, timezone

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

logger = logging.getLogger(__name__)
router = APIRouter(prefix='/api/otp')
TTL = timedelta(minutes=10)
MAX_SENDS_PER_HOUR = 5
MAX_ATTEMPTS = 5


class SendIn(BaseModel):
    country_code: str
    phone: str


class VerifyIn(SendIn):
    code: str


def _number(body: SendIn) -> str:
    n = re.sub(r'\D', '', f'{body.country_code}{body.phone}')
    if not 8 <= len(n) <= 15:
        raise HTTPException(400, 'Please enter a valid mobile number')
    return n


def _hash(number: str, code: str) -> str:
    return hashlib.sha256(f'{number}:{code}'.encode()).hexdigest()


def _deliver(number: str, code: str) -> bool:
    """Returns True when really sent. Plug the provider call in here once its API key is saved."""
    provider = os.environ.get('OTP_PROVIDER', '').strip().lower()
    if provider:
        logger.warning('OTP provider %s is not wired yet; code not sent', provider)
    logger.info('MOCK OTP for +%s: %s', number, code)
    return False


def register(db):
    @router.post('/send')
    async def send(body: SendIn):
        number = _number(body)
        now = datetime.now(timezone.utc)
        recent = await db.otps.count_documents({'number': number, 'created_at': {'$gte': (now - timedelta(hours=1)).isoformat()}})
        if recent >= MAX_SENDS_PER_HOUR:
            raise HTTPException(429, 'Too many codes requested. Please try again in a while.')
        code = f'{secrets.randbelow(1_000_000):06d}'
        await db.otps.insert_one({'number': number, 'hash': _hash(number, code), 'attempts': 0, 'used': False,
                                  'created_at': now.isoformat(), 'expires_at': (now + TTL).isoformat()})
        sent = _deliver(number, code)
        return {'sent': True, 'mocked': not sent, **({} if sent else {'demo_code': code})}

    @router.post('/verify')
    async def verify(body: VerifyIn):
        number = _number(body)
        now = datetime.now(timezone.utc).isoformat()
        doc = await db.otps.find_one({'number': number, 'used': False, 'expires_at': {'$gt': now}}, sort=[('created_at', -1)])
        if not doc or doc['attempts'] >= MAX_ATTEMPTS:
            raise HTTPException(400, 'This code has expired. Please request a new one.')
        if not secrets.compare_digest(doc['hash'], _hash(number, re.sub(r'\D', '', body.code))):
            await db.otps.update_one({'_id': doc['_id']}, {'$inc': {'attempts': 1}})
            raise HTTPException(400, 'That code is not right. Please check and try again.')
        await db.otps.update_one({'_id': doc['_id']}, {'$set': {'used': True}})
        token = secrets.token_urlsafe(24)
        await db.otp_sessions.insert_one({'token': token, 'number': number, 'created_at': now})
        return {'verified': True, 'token': token}

    return router
