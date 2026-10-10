import { styles } from '../egyptListingData';
import { BY_SLUG } from '../tours/tripIndex';
import { EXPERIENCES } from './experiences';

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

// Two dynamic groups per country, both derived from the data (nothing configured per country):
//  - Theme: travel styles. Rule = [label, regex, icon, { tags, maxDays, minCities, text }]. The regex runs on the title
//    (and on the whole itinerary corpus when text: true). A theme shows only where at least one trip matches.
//  - Experiences: landmarks / activities (holidays/experiences.js) matched on the full itinerary corpus.
const THEME_RULES = [
  ['Honeymoon', /romantic|romance|honeymoon|couples?/i, 'heart', { tags: ['Honeymoon'] }],
  ['Family', /family|kids|children/i, 'family', { tags: ['Family'] }],
  ['Short trips', null, 'short', { tags: ['Short trips'], maxDays: 5 }],
  ['Luxury', /luxur|royal|grand luxury|5-star|five-star/i, 'gem', { tags: ['Luxury'] }],
  ['Beach', /beach|coastal|offshore|bay\b|red sea|\bisland/i, 'beach', { tags: ['Beach'] }],
  ['Island hopping', /island[- ]hopping|island hop|island tour|islands? (day )?trip|four islands?|4 islands?|hopping tour/i, 'island', { tags: ['Island hopping'], text: true }],
  ['Cruise holidays', /genting dream|royal caribbean|disney adventure|cruise (ship|terminal|liner|holiday)|nights? (on board|aboard)|stateroom|\bcabin\b|overnight cruise|nile cruise|dahabiya/i, 'ship', { tags: ['Cruise', 'Nile cruise'], text: true }],
  ['Theme parks', /universal studios|theme park|disney|safari world|dream world|legoland|adventure cove|waterpark|water park|cartoon network|nong nooch/i, 'ticket', { text: true }],
  ['Culture & temples', /culture|heritage|temple|palace|pyramid|pharaoh|medina|classic/i, 'culture', { tags: ['Culture'] }],
  ['Adventure', /adventure|trails?\b|trek|glacier|safari|rafting|zipline|zip line|atv|quad bik/i, 'kayak', { tags: ['Adventure'] }],
  ['Nature & wildlife', /nature|wildlife|national park|falls|scenic|night safari|\bzoo\b|river wonders|elephant (sanctuary|camp|care|park)|bird park|rainforest|jungle/i, 'paw', { tags: ['Nature', 'Wildlife'], text: true }],
  ['City break', /city break|city escape|city lights|skyline/i, 'sun', { tags: ['City break', 'City'] }],
  ['Nightlife & party', /party|nightlife|bangla road|walking street|clarke quay|night ?club|pub crawl|beach club/i, 'moon', { text: true }],
  ['Food & markets', /street food|hawker|food tour|food trail|cooking class|night market|floating market|michelin/i, 'food', { text: true }],
  ['Wellness & spa', /massage|wellness|ayurved|spa (treatment|day|session|ritual)|thermal spa|hot spring|onsen/i, 'gem', { text: true }],
  ['Shopping', /shopping|orchard road|bugis street|chatuchak|platinum mall|mbk|night bazaar|outlet mall|shopping mall/i, 'wallet', { text: true }],
  ['Multi-city tours', /multi-country/i, 'globe', { tags: ['Multi-country'], minStops: 3 }]
];

const HONEYMOON_RULES = [
  ['Beach romance', /beach|coastal|offshore|bay\b|bliss|red sea/i, 'beach', { tags: ['Beach'] }],
  ['Island escapes', /\bisland|phi phi|samui|bali|maldives|langkawi|sentosa/i, 'island', {}],
  ['Luxury stays', /luxur|royal|grand luxury/i, 'gem', { tags: ['Luxury'] }],
  ['Private & secluded', /escape|getaway|retreat|romantic|romance|honeymoon|couples?/i, 'heart', { tags: ['Honeymoon'] }],
  ['Adventure for two', /adventure|trails?\b|trek|safari|glacier/i, 'kayak', { tags: ['Adventure'] }],
  ['Culture & temples', /culture|heritage|temple|palace|pyramid|pharaoh|medina|classic/i, 'culture', { tags: ['Culture'] }],
  ['City & nightlife', /bangkok|party|nightlife|city|singapore|hong kong/i, 'sun', {}],
  ['Cruises & sunsets', /genting dream|royal caribbean|disney adventure|cruise (ship|terminal|liner)|stateroom|nile cruise|sunset cruise|dinner cruise/i, 'ship', { tags: ['Cruise', 'Nile cruise'], text: true }],
  ['Multi-city journeys', /multi-country/i, 'globe', { tags: ['Multi-country'], minStops: 3 }],
  ['Short & sweet', null, 'short', { tags: ['Short trips'], maxDays: 5 }]
];

const SETS = { holidays: THEME_RULES, honeymoon: HONEYMOON_RULES };
// Who-you-are themes stay on top; the destination-type themes follow by number of trips.
const FIRST = ['Honeymoon', 'Family', 'Short trips', 'Luxury', 'Private & secluded', 'Short & sweet', 'Luxury stays'];
const STYLE_ICONS = Object.fromEntries(styles.map((s) => [s.key, s.icon]));
const RULE_ICONS = Object.fromEntries([...THEME_RULES, ...HONEYMOON_RULES, ...EXPERIENCES].map(([t, , icon]) => [t, icon]));
export const themeIcon = (t) => RULE_ICONS[t] || STYLE_ICONS[t] || 'star';
const EXPERIENCE_LABELS = new Set(EXPERIENCES.map(([t]) => t));
export const isExperience = (t) => EXPERIENCE_LABELS.has(t);

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

const expCache = new Map();
export const experiencesOf = (p) => {
  if (expCache.has(p.slug)) return expCache.get(p.slug);
  const text = corpusOf(p);
  const hits = EXPERIENCES.filter(([, re, , also]) => re.test(text) && (!also || also.test(text))).map(([t]) => t);
  expCache.set(p.slug, hits);
  return hits;
};

const themeCache = new Map();
export const themesOf = (p, mode = 'holidays') => {
  const key = `${mode}:${p.slug}`;
  if (themeCache.has(key)) return themeCache.get(key);
  const tags = tagsOf(p);
  const hits = (SETS[mode] || THEME_RULES)
    .filter(([, re, , { tags: ruleTags = [], maxDays, minStops, text } = {}]) =>
      (re && re.test(text ? corpusOf(p) : p.title)) || ruleTags.some((x) => tags.includes(x)) ||
      (maxDays && typeof p.days === 'number' && p.days <= maxDays) || (minStops && (p.stops || 0) >= minStops))
    .map(([t]) => t);
  themeCache.set(key, hits);
  return hits;
};

export const placesOf = (p) => p.places || [];
export const countriesOf = (p) => p.countries || [];

const inRange = (defs) => (v, keys) => keys.some((k) => { const d = defs.find((x) => x.key === k); return d && v >= d.min && v <= d.max; });
const matchers = {
  country: (p, sel) => sel.some((c) => countriesOf(p).includes(c)),
  theme: (p, sel, mode) => sel.some((t) => themesOf(p, mode).includes(t)),
  experience: (p, sel) => sel.some((t) => experiencesOf(p).includes(t)),
  place: (p, sel) => sel.some((c) => placesOf(p).includes(c)),
  days: (p, sel) => inRange(DURATIONS)(p.days, sel),
  price: (p, sel) => inRange(PRICES)(p.price, sel)
};
export const GROUPS = Object.keys(matchers);
// Mobile leads with Experiences: on a phone people pick the landmark they came for before the theme.
export const MOBILE_GROUPS = ['experience', ...Object.keys(matchers).filter((g) => g !== 'experience')];
export const emptySelection = () => ({ country: [], theme: [], experience: [], place: [], days: [], price: [] });

export const applyFilters = (products, sel, mode = 'holidays', except) =>
  products.filter((p) => GROUPS.every((g) => g === except || !sel[g].length || matchers[g](p, sel[g], mode)));

const countBy = (list, fn) => list.reduce((m, p) => { fn(p).forEach((k) => { m[k] = (m[k] || 0) + 1; }); return m; }, {});

export function buildFacets(products, sel, mode = 'holidays') {
  const pool = (g) => applyFilters(products, sel, mode, g);
  const themes = (p) => themesOf(p, mode);
  const countryAll = countBy(products, countriesOf);
  const countryNow = countBy(pool('country'), countriesOf);
  const placeAll = countBy(products, placesOf);
  const placeNow = countBy(pool('place'), placesOf);
  const themeAll = countBy(products, themes);
  const themeNow = countBy(pool('theme'), themes);
  const expAll = countBy(products, experiencesOf);
  const expNow = countBy(pool('experience'), experiencesOf);
  const byCount = (all) => (a, b) => all[b] - all[a] || a.localeCompare(b);
  const rank = (v) => (FIRST.includes(v) ? FIRST.indexOf(v) : FIRST.length);
  return {
    country: Object.keys(countryAll).sort(byCount(countryAll)).map((v) => ({ value: v, label: v, count: countryNow[v] || 0 })),
    theme: Object.keys(themeAll).sort((a, b) => rank(a) - rank(b) || byCount(themeAll)(a, b)).map((v) => ({ value: v, label: v, count: themeNow[v] || 0, icon: themeIcon(v) })),
    experience: Object.keys(expAll).sort(byCount(expAll)).map((v) => ({ value: v, label: v, count: expNow[v] || 0, icon: themeIcon(v) })),
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

export const GROUP_LABELS = { country: 'Country', theme: 'Theme', experience: 'Experiences', place: 'Destination', days: 'Duration', price: 'Price range' };
