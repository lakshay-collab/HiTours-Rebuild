// Adapters: Vietnam packages (vietnamPackages.js, WorkDrive source) → listing product cards + EgyptDetail template data.
import { packages, cityImages } from '../vietnamPackages';
import { grandVietnamCambodiaThailandProduct } from './grandVietnamCambodiaThailandData';

const LETTERS = 'ABCDEFGHIJ';
export const DAY_MARK = '__day__';
const uniq = (a) => [...new Set(a)];
const countMeals = (it) => it.reduce((n, d) => n + (d.meals ? d.meals.split(',').length : 0), 0);
const fmt = (n) => `₹${n.toLocaleString('en-IN')}`;
const LOGISTICS = /transfer|flight|\bfly\b|check[ -]?in|check[ -]?out|breakfast|disembark|embark|board the|set sail|suggested|optional|own cost|free time|at leisure|drop the bags|settle in|all meals|lunch and dinner|lunch or dinner|overnight|arrival|departure|drive to|driven|on the way|welcome/i;
const isExperience = (b) => !LOGISTICS.test(b) && !/^(you could|alternatively|if you|feel free|you will be)/i.test(b) && b.length > 12;
const LEAD = /^(in the (morning|afternoon|evening),?\s+|en route,?\s+|later,?\s+|next,?\s+|then,?\s+|afterwards?,?\s+|you will also\s+|once there,?\s+|today,?\s+)/i;
const actName = (b) => { let n = b.replace(LEAD, '').split(/:|\s\(|, then |, the |, where /)[0].trim(); n = n.charAt(0).toUpperCase() + n.slice(1); return n.length > 64 ? `${n.slice(0, 60).replace(/\s\S*$/, '')}…` : n; };
const actDesc = (b) => { const i = b.indexOf(':'); if (i > 0 && i < 70) { const r = b.slice(i + 1).trim(); return r.charAt(0).toUpperCase() + r.slice(1); } return actName(b).endsWith('…') || actName(b) !== b ? b : ''; };
const OPTIONAL_NOTE = 'Optional add-on, not included in the price. Ask your specialist to pre-book it.';
const isOptional = (b) => /^(optional|suggested)\s*:/i.test(b);
const optionalItems = (b) => b.replace(/^(optional|suggested)\s*:/i, '').split(/\s\|\s/).map((x) => x.trim()).filter(Boolean).map((x) => x.charAt(0).toUpperCase() + x.slice(1));
const actImage = (p, b, fallback) => { const hit = (p.actImg || []).find(([re]) => re.test(b)); return hit ? hit[1] : fallback; };

// Generic adapters – ctx: { cityImages, expert, ctaHref, crumbs, base, cruiseCity }
export const createAdapters = (ctx) => {
const { cityImages, expert: EXPERT, ctaHref, crumbs: crumbBase, base, cruiseCity = 'Ha Long Bay' } = ctx;
const toProduct = (p) => {
  const cities = uniq(p.stays.map((s) => s[0]));
  const activities = p.itinerary.flatMap((d) => d.bullets).filter((b) => !/transfer|arrival|breakfast at|free time|free day|check-out|day at leisure|onward flight/i.test(b)).length;
  return {
    slug: p.slug, title: p.name, tag: p.tag, styles: p.styles, days: p.days, stops: cities.length, cities: cities.length, places: cities,
    hotels: p.included?.hotels ?? p.stays.length, activities: p.included?.activities ?? activities, transfers: p.included?.transfers ?? p.itinerary.length, meals: p.included?.meals ?? countMeals(p.itinerary),
    price: p.price, alt: p.alt, images: p.gallery, href: `${base}/${p.slug}`
  };
};

const pricingText = (p) => {
  const { rows, columns, basis } = p.pricing;
  const body = rows.map(([m, ...v]) => `${m}: ${v.map((x, i) => (columns && columns.length > 1 ? `${fmt(x)} (${columns[i]})` : fmt(x))).join(' / ')}`).join('; ');
  return `Pricing (${basis}): ${body}.`;
};

const build = (p) => {
  const prod = toProduct(p);
  const cities = uniq(p.stays.map((s) => s[0]));
  const stayFor = (city) => (p.stays.find((s) => s[0] === city) || [])[2] || '—';
  const dayRange = (label) => { const m = /(\d+)(?:\s*[–-]\s*(\d+))?/.exec(label || ''); return m ? [Number(m[1]), Number(m[2] || m[1])] : null; };
  const lastDay = Math.max(...p.itinerary.map((d) => d.day));
  const stops = p.stays.map(([city, dayLabel, hotel, hotelImages], i) => {
    const range = dayRange(dayLabel);
    const isLast = i === p.stays.length - 1;
    const days = range
      ? p.itinerary.filter((d) => (d.day >= range[0] && d.day <= range[1]) || (isLast && d.day > range[1] && d.day <= lastDay && !d.overnight))
      : p.itinerary.filter((d) => d.overnight === city || (city === cruiseCity && (d.overnight === 'On board' || d.title.includes(cruiseCity))));
    const bullets = uniq(days.flatMap((d) => [`${DAY_MARK}Day ${d.day} · ${d.title}`, ...d.bullets]));
    const images = cityImages(city);
    return {
      letter: LETTERS[i], name: city, dayLabel, bullets, images,
      dayImages: p.actImg ? Object.fromEntries(days.map((d) => [d.day, uniq([...d.bullets.filter(isExperience).map((b) => actImage(p, b, null)).filter(Boolean), ...d.bullets.filter(isOptional).flatMap(optionalItems).map((o) => actImage(p, o, null)).filter(Boolean), ...images])])) : undefined,
      activities: days.flatMap((d) => [
        ...d.bullets.filter(isExperience).map((b, k) => ({ day: d.day, name: actName(b), description: actDesc(b), optional: false, image: actImage(p, b, images[(d.day + k) % images.length]) })),
        ...d.bullets.filter(isOptional).flatMap((b) => optionalItems(b).map((o, k) => ({ day: d.day, name: o, description: OPTIONAL_NOTE, optional: true, image: actImage(p, o, images[(d.day + k + 1) % images.length]) })))
      ]),
      accommodation: { name: hotel, description: `${dayLabel} · as per the package accommodation list`, images: hotelImages || images.slice(0, 3) }
    };
  });
  const incl = `Included: ${p.inclusions.join('; ')}.`;
  const flights = p.inclusions.some((x) => /flight/i.test(x)) ? Math.max(1, p.itinerary.flatMap((d) => d.bullets).filter((b) => /^(flight|fly|return flight|onward flight|domestic flight)/i.test(b.trim())).length) : 0;
  const excl = `Not included: ${p.exclusions.join('; ')}.`;
  return {
    detail: {
      slug: p.slug, region: 'asia', ctaHref, cta: 'Design Your Escape',
      sub: 'Your travel plan – no obligation & tailor-made',
      banner: 'Worry-free planning: flexible rebooking and cancellation options on your land programme.',
      title: p.name, alt: p.alt, days: `${p.days} days / ${p.nights} nights`, stations: `${cities.length} stops`, transport: p.inclusions.some((x) => /flight/i.test(x)) ? 'Domestic flights, transfers & guided tours' : 'Transfers & guided tours',
      tag: p.tag, price: p.price, routeLabel: 'This holiday takes you to', routeCities: cities, tags: uniq([p.tag, ...p.styles]),
      stats: { days: prod.days, cities: prod.cities, hotels: prod.hotels, activities: prod.activities, transfers: prod.transfers }, gallery: p.gallery,
      services: [
        [`${prod.hotels} hotel${prod.hotels === 1 ? '' : 's'}`, 'Accommodation'], [`${prod.activities} activities`, 'Activities'], [`${prod.transfers} transfers`, 'Transport'], [`${prod.meals} meals`, 'Meals'],
        ...(flights ? [[`${flights} flight${flights === 1 ? '' : 's'}`, 'Flights'], ['24/7 support', '24/7 Support']] : [['24/7 support', '24/7 Support'], ['Customisation', 'Customise', 'Expert customisation']])
      ],
      expert: { ...EXPERT, quote: p.summary, quoteMore: `${p.days} days / ${p.nights} nights from ${fmt(p.price)} per person. ${incl}` }
    },
    route: { stops },
    glance: {
      h2: 'Tour summary', short: p.summary, readMore: 'Read more', readLess: 'Read less', hide: 'Hide tour summary',
      intro: `${incl} ${excl}`, intro2: pricingText(p),
      accommodationHeading: 'Accommodation', highlightsHeading: 'Key highlights', dayHeading: 'Day', routeHeading: 'Route',
      days: p.itinerary.map((d) => ({ title: `Day ${d.day}: ${d.title}${d.meals ? ` (${d.meals})` : ''}`, text: d.bullets.join('\n'), hotel: d.overnight ? (d.overnight === 'On board' ? stayFor(cruiseCity) : stayFor(d.overnight)) : 'Departure', highlights: d.bullets.slice(1, 4).length ? d.bullets.slice(1, 4) : d.bullets })),
      outro: excl
    },
    crumbs: [...crumbBase, { label: p.name }]
  };
};
return { toProduct, build };
};

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/vietnam/enquiry/passengers/',
  expert: { name: 'Riya', image: '/experts/riya.webp', role: 'Vietnam expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: 'Vietnam', href: '/asien/vietnam' }]
});
export const vietnamProducts = [...packages.map(toProduct), grandVietnamCambodiaThailandProduct];
export const vietnamTours = packages.map(build);
export const vietnamBySlug = Object.fromEntries(vietnamTours.map((t) => [t.detail.slug, t]));
