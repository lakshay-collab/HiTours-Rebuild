"""Thrillophilia tour page extractor (JSON first). Usage: python3 extract.py <url> [...]
Writes import/<source-slug>/raw.json and downloads images to import/<source-slug>/images/."""
import html as htmllib
import json
import os
import re
import sys
import time
import urllib.request

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'import')
UA = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36'}


def fetch(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60).read()


def strip_html(s):
    if not s:
        return ''
    s = re.sub(r'<br\s*/?>', '\n', s)
    s = re.sub(r'</(p|li|h\d)>', '\n', s)
    s = re.sub(r'<[^>]+>', '', s)
    return htmllib.unescape(s).strip()


def clean_url(u):
    return u.split('?')[0] if u else None


def media_urls(media):
    out = []
    for m in media or []:
        u = m.get('url') or m.get('original_url') or m.get('src') or m.get('image_url')
        if not u and isinstance(m.get('media_urls'), dict):
            u = m['media_urls'].get('original') or m['media_urls'].get('focal_point_url')
        if u:
            out.append({'url': clean_url(u), 'caption': m.get('caption') or m.get('alt') or m.get('title') or ''})
    seen, uniq = set(), []
    for m in out:
        key = m['url'].rsplit('/', 1)[-1]
        if key not in seen:
            seen.add(key)
            uniq.append(m)
    return uniq


def walk_media(obj, acc):
    """Collect every media/url pair found anywhere in a nested object."""
    if isinstance(obj, dict):
        if isinstance(obj.get('media_urls'), dict) and obj['media_urls'].get('original'):
            acc.append(obj)
            return acc
        if 'url' in obj and isinstance(obj['url'], str) and re.search(r'\.(jpe?g|png|webp)(\?|$)', obj['url'], re.I):
            acc.append(obj)
        for v in obj.values():
            walk_media(v, acc)
    elif isinstance(obj, list):
        for v in obj:
            walk_media(v, acc)
    return acc


def extract(url):
    page = fetch(url).decode('utf-8', 'ignore')
    m = re.search(r'<script id="__NEXT_DATA__"[^>]*>(.*?)</script>', page, re.S)
    nd = json.loads(m.group(1))
    pd = nd['props']['pageProps']['data']['page_data']
    it = pd['itinerary']

    hero_tiles = [x['url'] for x in media_urls(walk_media(pd.get('featured_media'), []))]
    gallery = []
    api = 'https://www.thrillophilia.com/website/api/'
    try:
        rel = json.loads(fetch(api + f"products/{pd['slug']}/product_related_images?type=all"))['gallery']
    except Exception as ex:  # noqa
        print('  related images api failed', ex)
        rel = pd.get('desktop_gallery_media') or {}
    for tab, items in rel.items():
        for mm in media_urls(walk_media(items, [])):
            gallery.append({**mm, 'tab': tab})
    dest_gallery = {}
    for loc in pd.get('itinerary_destinations', []):
        try:
            dj = json.loads(fetch(api + 'gallery_media/destination/' + urllib.request.quote(loc['location'])))
            dest_gallery[loc['location']] = media_urls(walk_media(dj.get('data'), []))
            for mm in dest_gallery[loc['location']]:
                gallery.append({**mm, 'tab': 'Destinations', 'city': loc['location']})
        except Exception as ex:  # noqa
            print('  destination gallery failed', loc['location'], ex)

    days, hotels, activities = [], {}, []
    for grp in it['location_day_groups']:
        for day in grp['days']:
            items = []
            for ev in day.get('events', []):
                for e in [ev] + ev.get('attached_events', []):
                    et = e.get('event_type')
                    res = (e.get('event_data') or {}).get('resource') or {}
                    label = 'Recommended' if e.get('is_recommended') else ('Suggestion' if e.get('is_suggestion') else '')
                    item = {'type': et, 'title': e.get('title'), 'label': label, 'desc': strip_html(e.get('wiki_parsed_desc') or e.get('description') or res.get('description') or ''), 'images': [x['url'] for x in media_urls(walk_media(e.get('media'), []))]}
                    if et == 'Hotel':
                        for hd in res.get('hotel_details', []):
                            name = hd.get('name') or e.get('title')
                            imgs = [x['url'] for x in media_urls(walk_media(hd.get('gallery_media'), []))]
                            rec = hotels.setdefault(name, {'name': name, 'stars': hd.get('class_rating'), 'category': hd.get('hotel_category'), 'tripadvisor': hd.get('trip_advisor_rating'), 'city': grp['location'], 'room_type': hd.get('room_type') or hd.get('room_variant_name'), 'meal_plan': (hd.get('meal_plan') or {}).get('name'), 'check_in_day': day['day_number'], 'nights': 0, 'images': []})
                            rec['images'] = list(dict.fromkeys(rec['images'] + imgs))
                            dur = e.get('duration') or [24]
                            rec['nights'] = max(rec['nights'], int(round((dur[0] or 24) / 24)))
                            item['hotel'] = name
                    if et in ('Activity', 'Sightseeing', 'Attraction'):
                        act = {'name': e.get('title'), 'day': day['day_number'], 'city': grp['location'], 'label': label, 'start_time': e.get('start_time'), 'duration': e.get('duration'), 'shared': res.get('transfer_type') or res.get('sharing_type'), 'desc': item['desc'], 'inclusions': [strip_html(x) if isinstance(x, str) else x for x in (res.get('inclusions') or [])], 'images': [x['url'] for x in media_urls(walk_media(e, []))]}
                        activities.append(act)
                        item['images'] = act['images']
                    if et == 'Flight':
                        item['from'] = res.get('from') or res.get('source') or res.get('departure_city')
                        item['to'] = res.get('to') or res.get('destination') or res.get('arrival_city')
                    if et == 'Transfer':
                        item['private'] = res.get('private_transfer')
                        item['pickup'] = res.get('pickup')
                        item['drop_off'] = res.get('drop_off')
                    items.append(item)
            days.append({'day': day['day_number'], 'title': day.get('title'), 'city': grp['location'], 'desc': strip_html(day.get('wiki_parsed_desc') or day.get('description')), 'leisure': day.get('is_leisure_day'), 'meals': day.get('meals_included') or [], 'meals_hotel': day.get('meals_included_with_hotels') or [], 'items': items, 'arrival': day['day_number'] == 1, 'city_media': [x['url'] for x in media_urls(walk_media(grp.get('media'), []))] if day is grp['days'][0] else []})

    raw = {
        'source': url, 'captured_at': time.strftime('%Y-%m-%d'),
        'title': pd['name'], 'slug': pd['slug'], 'duration': f"{pd['trip_duration']['days']}D/{pd['trip_duration']['nights']}N",
        'city_split': [(x['location'], x['days']) for x in pd.get('itinerary_destinations', [])],
        'country': pd.get('primary_destination'), 'badges': pd.get('highlights'), 'tag': pd.get('primary_tag'),
        'highlights': [strip_html(x) for x in pd.get('custom_highlights', [])],
        'overview': strip_html(pd.get('overview')),
        'price_per_adult': pd.get('starting_price'), 'struck_price': pd.get('strike_through_price'), 'currency': pd.get('currency'),
        'inr_price': pd.get('starting_price') if pd.get('currency') == 'INR' else None,
        'inclusions': [strip_html(x['name']) for x in pd.get('inclusions', [])], 'exclusions': [strip_html(x['name']) for x in pd.get('exclusions', [])],
        'know_before_you_go': [strip_html(x) for x in pd.get('know_before_you_go', [])],
        'meal_plans': it.get('meal_plans'), 'days': days, 'hotels': list(hotels.values()), 'activities': activities,
        'gallery': gallery, 'dest_gallery': {k: [x['url'] for x in v] for k, v in dest_gallery.items()}, 'hero_tiles': hero_tiles,
    }
    return raw


def download(raw, folder):
    os.makedirs(folder, exist_ok=True)
    urls = set(x['url'] for x in raw['gallery'])
    for h in raw['hotels']:
        urls.update(h['images'])
    for a in raw['activities']:
        urls.update(a['images'])
    for d in raw['days']:
        urls.update(d['city_media'])
    index = {}
    for u in sorted(urls):
        if not u or u in raw['hero_tiles']:
            continue
        fn = re.sub(r'[^a-zA-Z0-9._-]', '_', u.rsplit('/', 1)[-1])
        path = os.path.join(folder, fn)
        if not os.path.exists(path):
            try:
                open(path, 'wb').write(fetch(u))
            except Exception as ex:  # noqa
                print('  download failed', u, ex)
                continue
        index[u] = fn
    return index


if __name__ == '__main__':
    for i, url in enumerate(sys.argv[1:]):
        if i:
            time.sleep(30)
        raw = extract(url)
        out = os.path.join(ROOT, raw['slug'])
        os.makedirs(out, exist_ok=True)
        raw['image_index'] = download(raw, os.path.join(out, 'images'))
        json.dump(raw, open(os.path.join(out, 'raw.json'), 'w'), indent=1, ensure_ascii=False)
        print(raw['title'], '|', raw['duration'], '| hotels', [(h['name'], len(h['images'])) for h in raw['hotels']], '| activities', len(raw['activities']), '| gallery', len(raw['gallery']), '| images', len(raw['image_index']))
