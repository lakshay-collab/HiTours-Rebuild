import { styles } from '../egyptListingData';
import { BY_SLUG } from '../tours/tripIndex';
import { HIGHLIGHTS } from './highlights';

export const DURATIONS = [
  { key: '1-3', label: '1–3 days', min: 1, max: 3 },
  { key: '4-6', label: '4–6 days', min: 4, max: 6 },
  { key: '7-9', label: '7–9 days', min: 7, max: 9 },
  { key: '10+', label: '10+ days', min: 10, max: Infinity }
];

export const PRICES = [
  { key: 'under-20k', label: 'Under ₹20,000', min: 0, max: 19999 },
  { key: '20k-50k', label: '₹20,000 – ₹50,000', min: 20000, max: 49999 },
  { key: '50k-1l', label: '₹50,000 – ₹1,00,000', min: 50000, max: 99999 },
  { key: '1l-plus', label: '₹1,00,000+', min: 100000, max: Infinity }
];

// Theme filter = fixed travel styles (same on every country, matched on title + tags) + destination
// highlights (holidays/highlights.js, matched on the full itinerary text, shown only where a trip has them).
// Rule: [label, title regex | null, icon, matching travel-style tags, maxDays]
const HOLIDAY_RULES = [
  ['Honeymoon', /romantic|romance|honeymoon|couples?/i, 'heart', ['Honeymoon']],
  ['Family', /family|kids|children/i, 'family', ['Family']],
  ['Short trips', null, 'short', ['Short trips'], 5],
  ['Luxury', /luxur|royal|grand luxury|5-star|five-star/i, 'gem', ['Luxury']],
  ['Beach', /beach|coastal|offshore|bay\b|red sea|\bisland/i, 'beach', ['Beach', 'Island hopping']],
  ['Culture', /culture|heritage|temple|palace|pyramid|pharaoh|medina|classic/i, 'culture', ['Culture']],
  ['Adventure', /adventure|trails?\b|trek|glacier|safari/i, 'kayak', ['Adventure']],
  ['Nature & wildlife', /nature|wild|national park|falls|scenic/i, 'leaf', ['Nature', 'Wildlife']],
  ['City break', /city break|city escape|city lights|skyline/i, 'sun', ['City break', 'City']],
  ['Nightlife & party', /party|nightlife/i, 'sun'],
  ['Grand tour', /\bgrand\b|best of|odyssey|explorer|highlights|multi-country/i, 'globe', ['Multi-country']]
];

const HONEYMOON_RULES = [
  ['Beach romance', /beach|coastal|offshore|bay\b|bliss|red sea/i, 'beach', ['Beach']],
  ['Island escapes', /\bisland|phi phi|samui|bali|maldives|langkawi|sentosa/i, 'island'],
  ['Luxury stays', /luxur|royal|grand luxury/i, 'gem', ['Luxury']],
  ['Private & secluded', /escape|getaway|retreat|romantic|romance|honeymoon|couples?/i, 'heart', ['Honeymoon']],
  ['Adventure for two', /adventure|trails?\b|trek|safari|glacier/i, 'kayak', ['Adventure']],
  ['Culture & temples', /culture|heritage|temple|palace|pyramid|pharaoh|medina|classic/i, 'culture', ['Culture']],
  ['City & nightlife', /bangkok|party|nightlife|city|singapore|hong kong/i, 'sun'],
  ['Grand journeys', /\bgrand\b|best of|odyssey|explorer|highlights/i, 'globe'],
  ['Short & sweet', null, 'short', ['Short trips'], 5]
];

const SETS = { holidays: { rules: HOLIDAY_RULES }, honeymoon: { rules: HONEYMOON_RULES } };
const STYLE_LABELS = new Set([...HOLIDAY_RULES, ...HONEYMOON_RULES].map(([t]) => t));
const STYLE_ICONS = Object.fromEntries(styles.map((s) => [s.key, s.icon]));
const RULE_ICONS = Object.fromEntries([...HOLIDAY_RULES, ...HONEYMOON_RULES, ...HIGHLIGHTS].map(([t, , icon]) => [t, icon]));
export const themeIcon = (t) => STYLE_ICONS[t] || RULE_ICONS[t] || 'star';
export const themeKind = (t) => (STYLE_LABELS.has(t) ? 'style' : 'highlight');

const uniq = (a) => [...new Set(a.filter(Boolean))];
const tagsOf = (p) => uniq([p.tag, ...(p.styles || [])]);

// Everything a trip says about itself: card fields + the full itinerary (route stops, day-by-day text).
const corpusCache = new Map();
export const corpusOf = (p) => {
  if (corpusCache.has(p.slug)) return corpusCache.get(p.slug);
  const t = BY_SLUG[p.slug];
  const parts = [p.title, p.tag, ...(p.styles || []), ...(p.places || []), p.alt];
  if (t) {
    parts.push(t.detail?.title, ...(t.detail?.tags || []), ...(t.detail?.routeCities || []));
    (t.glance?.days || []).forEach((d) => parts.push(d.title, d.text, ...(d.highlights || [])));
    (t.route?.stops || []).forEach((s) => parts.push(s.name, ...(s.bullets || []), ...(s.activities || []).map((a) => `${a.name} ${a.description || ''}`)));
  }
  const text = parts.filter(Boolean).join('\n');
  corpusCache.set(p.slug, text);
  return text;
};

const highlightCache = new Map();
export const highlightsOf = (p) => {
  if (highlightCache.has(p.slug)) return highlightCache.get(p.slug);
  const text = corpusOf(p);
  const hits = HIGHLIGHTS.filter(([, re, , also]) => re.test(text) && (!also || also.test(text))).map(([t]) => t);
  highlightCache.set(p.slug, hits);
  return hits;
};

export const themesOf = (p, mode = 'holidays') => {
  const { rules } = SETS[mode] || SETS.holidays;
  const tags = tagsOf(p);
  const derived = rules
    .filter(([, re, , ruleTags = [], maxDays]) => (re && re.test(p.title)) || ruleTags.some((x) => tags.includes(x)) || (maxDays && typeof p.days === 'number' && p.days <= maxDays))
    .map(([t]) => t);
  return uniq([...derived, ...highlightsOf(p)]);
};

export const placesOf = (p) => p.places || [];

const inRange = (defs) => (v, keys) => keys.some((k) => { const d = defs.find((x) => x.key === k); return d && v >= d.min && v <= d.max; });
const matchers = {
  theme: (p, sel, mode) => sel.some((t) => themesOf(p, mode).includes(t)),
  place: (p, sel) => sel.some((c) => placesOf(p).includes(c)),
  days: (p, sel) => inRange(DURATIONS)(p.days, sel),
  price: (p, sel) => inRange(PRICES)(p.price, sel)
};
export const GROUPS = Object.keys(matchers);
export const emptySelection = () => ({ theme: [], place: [], days: [], price: [] });

export const applyFilters = (products, sel, mode = 'holidays', except) =>
  products.filter((p) => GROUPS.every((g) => g === except || !sel[g].length || matchers[g](p, sel[g], mode)));

const countBy = (list, fn) => list.reduce((m, p) => { fn(p).forEach((k) => { m[k] = (m[k] || 0) + 1; }); return m; }, {});

export function buildFacets(products, sel, mode = 'holidays') {
  const pool = (g) => applyFilters(products, sel, mode, g);
  const themes = (p) => themesOf(p, mode);
  const placeAll = countBy(products, placesOf);
  const placeNow = countBy(pool('place'), placesOf);
  const themeAll = countBy(products, themes);
  const themeNow = countBy(pool('theme'), themes);
  const byCount = (all) => (a, b) => all[b] - all[a] || a.localeCompare(b);
  const rank = (v) => (themeKind(v) === 'style' ? 0 : 1);
  return {
    theme: Object.keys(themeAll).sort((a, b) => rank(a) - rank(b) || byCount(themeAll)(a, b)).map((v) => ({ value: v, label: v, count: themeNow[v] || 0, icon: themeIcon(v), kind: themeKind(v) })),
    place: Object.keys(placeAll).sort(byCount(placeAll)).map((v) => ({ value: v, label: v, count: placeNow[v] || 0 })),
    days: DURATIONS.map((d) => ({ value: d.key, label: d.label, count: pool('days').filter((p) => p.days >= d.min && p.days <= d.max).length })),
    price: PRICES.map((d) => ({ value: d.key, label: d.label, count: pool('price').filter((p) => p.price >= d.min && p.price <= d.max).length }))
  };
}

export const facetLabel = (group, value) => {
  const def = group === 'days' ? DURATIONS.find((d) => d.key === value) : group === 'price' ? PRICES.find((d) => d.key === value) : null;
  return def ? def.label : value;
};

export const toggleIn = (sel, group, value) => ({
  ...sel,
  [group]: sel[group].includes(value) ? sel[group].filter((v) => v !== value) : [...sel[group], value]
});

export const activeCount = (sel) => GROUPS.reduce((n, g) => n + sel[g].length, 0);

export const GROUP_LABELS = { theme: 'Theme', place: 'Destination', days: 'Duration', price: 'Price range' };
