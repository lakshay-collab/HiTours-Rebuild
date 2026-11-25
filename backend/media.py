"""Package and hotel photos kept in the app's own storage. A photo is copied from its source the first time it is asked for."""
import asyncio
import hashlib
import logging
import os
from datetime import datetime, timezone
from urllib.parse import urlparse

import requests
from fastapi import APIRouter, HTTPException, Query
from fastapi.responses import Response

logger = logging.getLogger(__name__)
router = APIRouter(prefix='/api/media')

STORAGE_BASE = (os.environ.get('INTEGRATION_PROXY_URL') or '').strip() or 'https://integrations.emergentagent.com'
STORAGE_URL = STORAGE_BASE.rstrip('/') + '/objstore/api/v1/storage'
APP_NAME = 'hitours'
SOURCE_HOSTS = {'cf.bstatic.com', 'media1.thrillophilia.com'}
MAX_BYTES = 8 * 1024 * 1024
storage_key = None


def init_storage(force: bool = False):
    global storage_key
    if storage_key and not force:
        return storage_key
    resp = requests.post(f'{STORAGE_URL}/init', json={'emergent_key': os.environ['EMERGENT_LLM_KEY']}, timeout=30)
    resp.raise_for_status()
    storage_key = resp.json()['storage_key']
    return storage_key


def put_object(path: str, data: bytes, content_type: str) -> dict:
    for force in (False, True):
        resp = requests.put(f'{STORAGE_URL}/objects/{path}', headers={'X-Storage-Key': init_storage(force), 'Content-Type': content_type}, data=data, timeout=120)
        if resp.status_code != 404:
            break
    resp.raise_for_status()
    return resp.json()


def get_object(path: str):
    """(bytes, content_type), or None when the object is not stored yet."""
    resp = requests.get(f'{STORAGE_URL}/objects/{path}', headers={'X-Storage-Key': init_storage()}, timeout=60)
    if resp.status_code == 404:
        return None
    resp.raise_for_status()
    return resp.content, resp.headers.get('Content-Type', 'application/octet-stream')


def _load(url: str):
    """Photo from storage; copied in from its source on first use. Returns (bytes, content_type, stored_record or None)."""
    path = f'{APP_NAME}/media/{hashlib.sha1(url.encode()).hexdigest()}'
    found = get_object(path)
    if found:
        return found[0], found[1], None
    src = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=30)
    src.raise_for_status()
    ctype = src.headers.get('Content-Type', '').split(';')[0]
    if not ctype.startswith('image/') or len(src.content) > MAX_BYTES:
        raise ValueError('Not an image we can store')
    result = put_object(path, src.content, ctype)
    return src.content, ctype, {'storage_path': result['path'], 'source_url': url, 'content_type': ctype, 'size': len(src.content),
                                'is_deleted': False, 'created_at': datetime.now(timezone.utc).isoformat()}


def register(db):
    @router.get('')
    async def photo(u: str = Query(..., max_length=600)):
        parsed = urlparse(u)
        if parsed.scheme != 'https' or parsed.hostname not in SOURCE_HOSTS:
            raise HTTPException(400, 'Unknown photo source')
        try:
            data, ctype, record = await asyncio.to_thread(_load, u)
        except Exception as e:
            logger.error(f'Photo load failed for {u}: {e}')
            raise HTTPException(404, 'Photo not found')
        if record:
            await db.files.update_one({'storage_path': record['storage_path']}, {'$set': record}, upsert=True)
        return Response(content=data, media_type=ctype, headers={'Cache-Control': 'public, max-age=31536000, immutable'})

    return router
