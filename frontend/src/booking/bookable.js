// Bookable products: a variant of an imported itinerary with every activity included and a Book now flow.
import { fullyLoadedSriLankaYalaSafariBySlug, fullyLoadedSriLankaYalaSafariProduct } from '../tours/fullyLoadedSriLankaYalaSafariData';
import { salePrice } from '../sale';

export const PEAK_MONTHS = [12, 1, 2, 3];
export const LOW_MONTHS = [7, 8, 9];
export const CHILD_FACTOR = 0.7;
export const ROOM_MAX = { adults: 2, children: 1 };
export const TIERS = {
  low: { label: 'Best value', mult: 0.9, dot: 'bg-[#8DBE9C]', ring: 'ring-[#8DBE9C]' },
  regular: { label: 'Regular', mult: 1.0, dot: 'bg-[#D9B86A]', ring: 'ring-[#D9B86A]' },
  peak: { label: 'Peak season', mult: 1.15, dot: 'bg-[#E0773C]', ring: 'ring-[#E0773C]' },
};

export const tierFor = (d) => (PEAK_MONTHS.includes(d.getMonth() + 1) ? 'peak' : LOW_MONTHS.includes(d.getMonth() + 1) ? 'low' : 'regular');
const round10 = (n) => Math.round(n / 10) * 10;
export const adultPrice = (base, d) => salePrice(round10(base * TIERS[tierFor(d)].mult));
export const childPrice = (base, d) => round10(adultPrice(base, d) * CHILD_FACTOR);

export const quote = (product, d, rooms) => {
  const pp = adultPrice(product.base, d);
  const cp = childPrice(product.base, d);
  const adults = rooms.reduce((n, r) => n + r.adults, 0);
  const children = rooms.reduce((n, r) => n + r.children, 0);
  return { adultPrice: pp, childPrice: cp, adults, children, rooms: rooms.length, total: adults * pp + children * cp, tier: tierFor(d) };
};

export const toISO = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export const fromISO = (s) => { const [y, m, d] = (s || '').split('-').map(Number); return y && m && d ? new Date(y, m - 1, d) : null; };
export const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
export const fmtDate = (d, opts = { day: 'numeric', month: 'short', year: 'numeric' }) => d.toLocaleDateString('en-GB', opts);
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

const makeBookable = (bySlug, product, key) => {
  const src = Object.values(bySlug)[0];
  const data = deepIncluded(src);
  data.detail.slug = `book/${key}`;
  data.detail.bookable = { key, datesPath: `/asia/book/${key}/dates`, label: 'Book now' };
  data.detail.ctaHref = `/asia/book/${key}/dates`;
  data.detail.price = round10(src.detail.price * TIERS.low.mult);
  data.detail.glance = undefined;
  data.crumbs = [...data.crumbs.slice(0, -1), { label: `${src.detail.title} (book online)` }];
  const hotels = data.route.stops.map((s) => ({ name: s.accommodation.name, description: s.accommodation.description, image: s.accommodation.images?.[0], dayLabel: s.dayLabel, city: s.name }));
  const included = data.route.stops.flatMap((s) => s.activities.map((a) => ({ day: a.day, name: a.name })));
  return {
    key, title: src.detail.title, base: src.detail.price, nights: Number(src.detail.days.match(/(\d+) nights/)[1]),
    days: Number(src.detail.days.match(/^(\d+) days/)[1]), image: src.detail.gallery[0], alt: src.detail.alt, destination: 'Sri Lanka',
    detailPath: `/asia/book/${key}`, datesPath: `/asia/book/${key}/dates`, checkoutPath: `/asia/book/${key}/checkout`,
    hotels, included, meals: src.detail.services.find(([l]) => /meals/.test(l))?.[0], transport: src.detail.transport,
    tags: src.detail.tags, routeCities: src.detail.routeCities, data, product,
  };
};

export const BOOKABLE = {
  'fully-loaded-sri-lanka': makeBookable(fullyLoadedSriLankaYalaSafariBySlug, fullyLoadedSriLankaYalaSafariProduct, 'fully-loaded-sri-lanka'),
};
export const bookableBySlug = Object.fromEntries(Object.values(BOOKABLE).map((b) => [b.data.detail.slug, b.data]));
