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

const THEME_RULES = [
  ['Island hopping', /\bisland|phi phi|samui|bali|maldives|sentosa|langkawi/i],
  ['Honeymoon', /romantic|romance|honeymoon|couples?/i],
  ['Luxury', /luxur|royal|grand luxury/i],
  ['Beach', /beach|coastal|offshore|bay\b|red sea/i],
  ['Nightlife & party', /party|nightlife/i],
  ['Grand tour', /\bgrand\b|best of|odyssey|explorer|highlights/i],
  ['Family', /family|kids/i],
  ['Culture', /culture|heritage|temple|palace|pyramid|pharaoh|medina|classic/i],
  ['Adventure', /adventure|trails?\b|trek|glacier|safari/i],
  ['Nature', /nature|wild|national park|falls|scenic/i],
  ['Cruise', /cruise|voyage|feluccas?/i]
];

const RULE_ICONS = { 'Island hopping': 'island', 'Nightlife & party': 'sun', 'Grand tour': 'globe', Adventure: 'kayak', Nature: 'leaf', Cruise: 'boat' };
const STYLE_ICONS = Object.fromEntries(styles.map((s) => [s.key, s.icon]));
export const themeIcon = (t) => STYLE_ICONS[t] || RULE_ICONS[t] || 'pin';

const uniq = (a) => [...new Set(a.filter(Boolean))];

export const themesOf = (p) => {
  const tags = uniq([p.tag, ...(p.styles || [])]);
  const derived = THEME_RULES.filter(([t, re]) => re.test(p.title) && !(t === 'Cruise' && tags.includes('Nile cruise'))).map(([t]) => t);
  const short = typeof p.days === 'number' && p.days <= 5 ? ['Short trips'] : [];
  return uniq([...tags, ...derived, ...short]);
};

export const placesOf = (p) => p.places || [];

const inRange = (defs) => (v, keys) => keys.some((k) => { const d = defs.find((x) => x.key === k); return d && v >= d.min && v <= d.max; });
const matchers = {
  place: (p, sel) => sel.some((c) => placesOf(p).includes(c)),
  days: (p, sel) => inRange(DURATIONS)(p.days, sel),
  price: (p, sel) => inRange(PRICES)(p.price, sel),
  theme: (p, sel) => sel.some((t) => themesOf(p).includes(t))
};
export const GROUPS = Object.keys(matchers);
export const emptySelection = () => ({ place: [], days: [], price: [], theme: [] });

export const applyFilters = (products, sel, except) =>
  products.filter((p) => GROUPS.every((g) => g === except || !sel[g].length || matchers[g](p, sel[g])));

const countBy = (list, fn) => list.reduce((m, p) => { fn(p).forEach((k) => { m[k] = (m[k] || 0) + 1; }); return m; }, {});

export function buildFacets(products, sel) {
  const pool = (g) => applyFilters(products, sel, g);
  const placeAll = countBy(products, placesOf);
  const placeNow = countBy(pool('place'), placesOf);
  const themeAll = countBy(products, themesOf);
  const themeNow = countBy(pool('theme'), themesOf);
  const byCount = (all) => (a, b) => all[b] - all[a] || a.localeCompare(b);
  return {
    place: Object.keys(placeAll).sort(byCount(placeAll)).map((v) => ({ value: v, label: v, count: placeNow[v] || 0 })),
    days: DURATIONS.map((d) => ({ value: d.key, label: d.label, count: pool('days').filter((p) => p.days >= d.min && p.days <= d.max).length })),
    price: PRICES.map((d) => ({ value: d.key, label: d.label, count: pool('price').filter((p) => p.price >= d.min && p.price <= d.max).length })),
    theme: Object.keys(themeAll).sort(byCount(themeAll)).map((v) => ({ value: v, label: v, count: themeNow[v] || 0, icon: themeIcon(v) }))
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

export const GROUP_LABELS = { place: 'Destination', days: 'Duration', price: 'Price range', theme: 'Theme' };
