// Bookable products: a variant of an imported itinerary with every activity included and a Book now flow.
import { useEffect, useState } from 'react';
import { baliKutaUbudLiveBySlug, baliKutaUbudLiveProduct } from '../tours/baliKutaUbudLiveData';
import { fullyLoadedSriLankaYalaSafariBySlug, fullyLoadedSriLankaYalaSafariProduct } from '../tours/fullyLoadedSriLankaYalaSafariData';
import { salePrice } from '../sale';

export const CHILD_FACTOR = 0.7;
export const ROOM_MAX = { adults: 2, children: 1 };
export const MIN_LEAD_DAYS = 10;
export const MAX_MONTHS_AHEAD = 4;
// Example blackout (sold out / no departures) dates; mirrored in backend/bookings.py
export const BLACKOUT = ['2026-12-24', '2026-12-25', '2026-12-31', '2027-01-01', '2027-01-26', '2027-03-04', '2027-03-05'];

const round10 = (n) => Math.round(n / 10) * 10;
export const adultPrice = (base) => salePrice(round10(base));
export const childPrice = (base) => round10(adultPrice(base) * CHILD_FACTOR);

// Live packages: prices per check-in date come from the API (read from the supplier rate sheets).
const API = process.env.REACT_APP_BACKEND_URL;
const LIVE = {};
const LIVE_PENDING = {};
const LIVE_DATES = {};
export const liveCalendar = (key, rooms) => LIVE[`${key}|${encodeRooms(rooms)}`] || null;
export const loadLive = (key, rooms) => {
  const k = `${key}|${encodeRooms(rooms)}`;
  if (!LIVE_PENDING[k]) {
    LIVE_PENDING[k] = fetch(`${API}/api/live-packages/${key}/calendar?rooms=${encodeRooms(rooms)}`)
      .then((r) => { if (!r.ok) throw new Error('prices'); return r.json(); })
      .then((j) => { LIVE[k] = j; LIVE_DATES[key] = j.dates; return j; })
      .catch((e) => { delete LIVE_PENDING[k]; throw e; });
  }
  return LIVE_PENDING[k];
};
export const useLive = (product, rooms) => {
  const key = product?.live;
  const roomsKey = encodeRooms(rooms);
  const [, bump] = useState(0);
  useEffect(() => {
    if (!key) return undefined;
    let on = true;
    loadLive(key, decodeRooms(roomsKey)).then(() => on && bump((n) => n + 1)).catch(() => on && bump((n) => n + 1));
    return () => { on = false; };
  }, [key, roomsKey]);
  return key ? liveCalendar(key, rooms) : null;
};

export const quote = (product, d, rooms) => {
  if (product.live) {
    const cal = liveCalendar(product.live, rooms);
    const row = (d && cal?.dates[toISO(d)]) || null;
    const any = cal ? Object.values(cal.dates)[0] : null;
    const adults = rooms.reduce((n, r) => n + r.adults, 0);
    const children = rooms.reduce((n, r) => n + r.children, 0);
    return { adultPrice: row?.adult ?? cal?.from_adult ?? 0, childPrice: row?.child ?? any?.child ?? 0, adults, children, rooms: rooms.length, total: row?.total ?? 0, live: true, loading: !cal, hotels: row?.hotels };
  }
  const pp = adultPrice(product.base);
  const cp = childPrice(product.base);
  const adults = rooms.reduce((n, r) => n + r.adults, 0);
  const children = rooms.reduce((n, r) => n + r.children, 0);
  return { adultPrice: pp, childPrice: cp, adults, children, rooms: rooms.length, total: adults * pp + children * cp };
};

export const toISO = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export const fromISO = (s) => { const [y, m, d] = (s || '').split('-').map(Number); return y && m && d ? new Date(y, m - 1, d) : null; };
export const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
export const startOfToday = () => { const t = new Date(); t.setHours(0, 0, 0, 0); return t; };
export const firstBookable = () => addDays(startOfToday(), MIN_LEAD_DAYS);
export const lastBookable = () => { const t = startOfToday(); return new Date(t.getFullYear(), t.getMonth() + MAX_MONTHS_AHEAD + 1, 0); };
export const isBlackout = (d) => BLACKOUT.includes(toISO(d));
export const isBookable = (d, product) => (product?.live
  ? d >= firstBookable() && !!LIVE_DATES[product.live]?.[toISO(d)]
  : d >= firstBookable() && d <= lastBookable() && !isBlackout(d));
export const fmtDate = (d, opts = { day: 'numeric', month: 'short', year: 'numeric' }) => d.toLocaleDateString('en-GB', opts);
export const DEPOSIT_MIN_DAYS = 60;
export const daysUntil = (d) => Math.round((d - startOfToday()) / 86400000);
export const readVerified = () => { try { return JSON.parse(localStorage.getItem('ht_verified')); } catch (e) { return null; } };
export const fmtInr = (n) => `₹${Math.round(n).toLocaleString('en-IN')}`;
export const encodeRooms = (rooms) => rooms.map((r) => `${r.adults}-${r.children}`).join(',');
export const decodeRooms = (s) => {
  const rooms = (s || '').split(',').map((p) => p.split('-').map(Number)).filter(([a]) => a >= 1).map(([a, c]) => ({ adults: Math.min(a, 2), children: Math.min(c || 0, 1) }));
  return rooms.length ? rooms : [{ adults: 2, children: 0 }];
};

const stripOptional = (s) => (typeof s === 'string' ? s.replace(/(^|\n)Optional: (\w)/g, (_, pre, c) => pre + c.toUpperCase()) : s);
const deepIncluded = (v) => {
  if (Array.isArray(v)) return v.map(deepIncluded);
  if (v && typeof v === 'object') {
    const out = {};
    for (const [k, val] of Object.entries(v)) out[k] = k === 'optional' ? false : deepIncluded(val);
    return out;
  }
  return stripOptional(v);
};

const makeBookable = (bySlug, product, key, opts = {}) => {
  const destination = opts.destination || 'Sri Lanka';
  const src = Object.values(bySlug)[0];
  const data = deepIncluded(src);
  data.detail.slug = `book/${key}`;
  data.detail.bookable = { key, datesPath: `/asia/book/${key}/dates`, label: 'Book now' };
  data.detail.ctaHref = `/asia/book/${key}/dates`;
  data.detail.price = round10(src.detail.price);
  data.detail.live = opts.live;
  data.detail.glance = undefined;
  data.crumbs = [...data.crumbs.slice(0, -1), { label: src.detail.shortTitle || src.detail.title }];
  const hotels = data.route.stops.map((s) => ({ similar: s.accommodation.similar || [], name: s.accommodation.name, description: s.accommodation.description, image: s.accommodation.images?.[0], dayLabel: s.dayLabel, city: s.name }));
  const included = data.route.stops.flatMap((s) => s.activities.map((a) => ({ day: a.day, name: a.name, description: a.description, image: a.image, includes: a.includes })));
  const transfers = [];
  data.route.stops.forEach((s) => {
    let day = s.dayLabel;
    s.bullets.forEach((raw) => {
      const b = raw.replace(/^[a-z]+::/, '');
      if (b.startsWith('__day__')) { day = b.slice(7).split(' · ')[0]; return; }
      if (/transfer|drive|safari jeep|4x4|by car|by train|by boat/i.test(b)) transfers.push({ day, text: b.replace(/^Breakfast,? (and|then) (a )?/i, '').replace(/^([a-z])/, (c) => c.toUpperCase()) });
    });
  });
  const dayNum = (label) => Number((label.match(/\d+/) || [0])[0]);
  const stopDays = data.route.stops.map((s) => { const m = s.dayLabel.match(/(\d+)(?: to (\d+))?/); return [Number(m[1]), Number(m[2] || m[1])]; });
  const totalDays = Number(src.detail.days.match(/(\d+) days?/)[1]);
  const dayPlan = Array.from({ length: totalDays }, (_, i) => {
    const d = i + 1;
    const si = stopDays.findIndex(([a, b]) => d >= a && d <= b);
    const stop = si >= 0 ? data.route.stops[si] : null;
    const bullets = stop ? stop.bullets : [];
    let cur = stop ? stopDays[si][0] : d;
    const own = bullets.filter((b) => { if (b.startsWith('__day__')) { cur = dayNum(b.slice(7)); return false; } return cur === d; });
    const title = (bullets.find((b) => b.startsWith('__day__') && dayNum(b.slice(7)) === d) || '').slice(7).split(' · ')[1] || (stop ? stop.name : '');
    const last = d === totalDays;
    return {
      day: d, title, city: stop?.name,
      hotel: last ? null : hotels[si] || null,
      experiences: included.filter((a) => a.day === d).map((a) => a.name),
      transfers: own.filter((b) => /transfer|drive|safari jeep|4x4|by car|by train|by boat/i.test(b)).map((b) => b.replace(/^Breakfast,? (and|then) (a )?/i, '').replace(/^([a-z])/, (c) => c.toUpperCase())),
    };
  });
  return {
    key, title: src.detail.title, shortTitle: src.detail.shortTitle || src.detail.title, mealsList: src.detail.meals || [], transferDetails: src.detail.transferDetails, vehicles: src.detail.vehicles, mealsByDay: src.detail.mealsByDay, mealsNote: src.detail.mealsNote, glance: src.glance, base: src.detail.price, nights: Number(src.detail.days.match(/(\d+) nights/)[1]),
    days: Number(src.detail.days.match(/^(\d+) days/)[1]), image: src.detail.gallery[0], alt: src.detail.alt, destination, live: opts.live, listingPath: opts.listingPath || '/asia/sri-lanka', arrival: opts.arrival || 'Colombo',
    detailPath: `/asia/book/${key}`, datesPath: `/asia/book/${key}/dates`, checkoutPath: `/asia/book/${key}/checkout`,
    hotels, included, transfers, dayPlan, meals: src.detail.services.find(([l]) => /meals/.test(l))?.[0], transport: src.detail.transport,
    counts: { hotels: src.detail.stats.hotels, meals: Number((src.detail.services.find(([l]) => /meals/.test(l))?.[0] || '0').split(' ')[0]), activities: src.detail.stats.activities, transfers: src.detail.stats.transfers, ...(src.detail.stats.tickets ? { tickets: src.detail.stats.tickets } : {}) },
    tags: src.detail.tags, routeCities: src.detail.routeCities, data, product,
  };
};

export const BOOKABLE = {
  'fully-loaded-sri-lanka': makeBookable(fullyLoadedSriLankaYalaSafariBySlug, fullyLoadedSriLankaYalaSafariProduct, 'fully-loaded-sri-lanka'),
  'bali-kuta-ubud': makeBookable(baliKutaUbudLiveBySlug, baliKutaUbudLiveProduct, 'bali-kuta-ubud', { destination: 'Bali', live: 'bali-kuta-ubud', listingPath: '/asia/bali', arrival: 'Bali' }),
};
export const bookableBySlug = Object.fromEntries(Object.values(BOOKABLE).map((b) => [b.data.detail.slug, b.data]));
