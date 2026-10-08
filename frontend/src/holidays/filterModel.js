import { styles } from '../egyptListingData';

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

// Rule: [label, title regex | null, icon, matching travel-style tags, maxDays]
const HOLIDAY_RULES = [
  ['Island hopping', /\bisland|phi phi|samui|bali|maldives|sentosa|langkawi/i, 'island'],
  ['Honeymoon', /romantic|romance|honeymoon|couples?/i, 'heart'],
  ['Luxury', /luxur|royal|grand luxury/i, 'gem'],
  ['Beach', /beach|coastal|offshore|bay\b|red sea/i, 'beach'],
  ['Nightlife & party', /party|nightlife/i, 'sun'],
  ['Grand tour', /\bgrand\b|best of|odyssey|explorer|highlights/i, 'globe'],
  ['Family', /family|kids/i, 'family'],
  ['Culture', /culture|heritage|temple|palace|pyramid|pharaoh|medina|classic/i, 'culture'],
  ['Adventure', /adventure|trails?\b|trek|glacier|safari/i, 'kayak'],
  ['Nature', /nature|wild|national park|falls|scenic/i, 'leaf'],
  ['Cruise', /cruise|voyage|feluccas?/i, 'boat'],
  ['Short trips', null, 'short', [], 5]
];

const HONEYMOON_RULES = [
  ['Beach romance', /beach|coastal|offshore|bay\b|bliss|red sea/i, 'beach', ['Beach']],
  ['Island escapes', /\bisland|phi phi|samui|bali|maldives|langkawi|sentosa/i, 'island'],
  ['Luxury stays', /luxur|royal|grand luxury/i, 'gem', ['Luxury']],
  ['Private & secluded', /escape|getaway|retreat|romantic|romance|honeymoon|couples?/i, 'heart', ['Honeymoon']],
  ['Adventure for two', /adventure|trails?\b|trek|safari|glacier/i, 'kayak', ['Adventure']],
  ['Culture & temples', /culture|heritage|temple|palace|pyramid|pharaoh|medina|classic/i, 'culture', ['Culture']],
  ['City & nightlife', /bangkok|party|nightlife|city|singapore|hong kong/i, 'sun'],
  ['Cruises & sunsets', /cruise|voyage|feluccas?/i, 'boat', ['Nile cruise']],
  ['Grand journeys', /\bgrand\b|best of|odyssey|explorer|highlights/i, 'globe'],
  ['Short & sweet', null, 'short', ['Short trips'], 5]
];

const SETS = { holidays: { rules: HOLIDAY_RULES, includeTags: true }, honeymoon: { rules: HONEYMOON_RULES, includeTags: false } };
const STYLE_ICONS = Object.fromEntries(styles.map((s) => [s.key, s.icon]));
const RULE_ICONS = Object.fromEntries([...HOLIDAY_RULES, ...HONEYMOON_RULES].map(([t, , icon]) => [t, icon]));
export const themeIcon = (t) => STYLE_ICONS[t] || RULE_ICONS[t] || 'pin';

const uniq = (a) => [...new Set(a.filter(Boolean))];
const tagsOf = (p) => uniq([p.tag, ...(p.styles || [])]);

export const themesOf = (p, mode = 'holidays') => {
  const { rules, includeTags } = SETS[mode] || SETS.holidays;
  const tags = tagsOf(p);
  const derived = rules
    .filter(([t, re, , ruleTags = [], maxDays]) => (re && re.test(p.title)) || ruleTags.some((x) => tags.includes(x)) || (maxDays && typeof p.days === 'number' && p.days <= maxDays))
    .filter(([t]) => !(t === 'Cruise' && tags.includes('Nile cruise')))
    .map(([t]) => t);
  return uniq(includeTags ? [...tags, ...derived] : derived);
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
  return {
    theme: Object.keys(themeAll).sort(byCount(themeAll)).map((v) => ({ value: v, label: v, count: themeNow[v] || 0, icon: themeIcon(v) })),
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
