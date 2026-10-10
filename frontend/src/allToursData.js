// "All tours": every holiday we sell, in one filterable listing. Fed by the continent sets so a
// trip only has to be registered once in its own country.
import { products as asiaProducts } from './asiaHolidaysData';
import { products as europeProducts } from './europeListingData';
import { products as egyptProducts, faq, planner as egyptPlanner, customerReviews, reviews } from './egyptListingData';

const withCountries = (list, fallback) =>
  (list || []).filter(Boolean).map((p) => ({ ...p, countries: p.countries && p.countries.length ? p.countries : fallback }));

const all = [
  ...withCountries(asiaProducts, []),
  ...withCountries(europeProducts, []),
  ...withCountries(egyptProducts, ['Egypt'])
];

export const products = Object.values(Object.fromEntries(all.map((p) => [p.slug, p])));

export const hero = {
  h1: 'All tours & holidays',
  holidaysH1: 'All tours & holidays',
  styleH1: (style) => `All ${style.toLowerCase()} holidays`,
  tabAbout: 'About Hi Tours',
  tabTours: 'All holidays',
  cta: 'Plan for free',
  stickyCta: 'Plan your trip',
  ctaHref: '/l/all/enquiry/passengers/',
  sub: 'Your travel plan, no obligation and tailor-made',
  image: '/europe/hero-paris.webp',
  imageAlt: 'The Eiffel Tower and the Seine at blue hour, Paris'
};

export const tours = {
  h2: 'Every Hi Tours holiday',
  allH2: 'All tours & holidays',
  styleH2: (style) => `All ${style.toLowerCase()} holidays`,
  browse: (n) => `Browse ${n} package ${n === 1 ? 'idea' : 'ideas'}`,
  filterLabel: 'Travel style:',
  sortLabel: 'Sorted by:',
  filterBy: 'Filter by',
  sortBy: 'Sort by',
  empty: 'Nothing matches these filters yet, clear a few to see every holiday again.',
  viewAll: 'View every holiday',
  short: ['Every holiday on Hi Tours, ', ['across Asia, Europe and Egypt'], ', each one tailor-made by the specialist who knows the country.'],
  intro: [
    ' Filter by country, theme, duration or budget. Every itinerary here is a starting point: your specialist reshapes it around your dates, your pace and your budget before you book.'
  ]
};

export const holidaysPath = '/tours';
export const holidaysCrumbs = [{ label: 'Home', to: '/' }, { label: 'All tours & holidays' }];

export const planner = { ...egyptPlanner, h3: 'Customize your trip' };

export const allTours = {
  hero, tours, products, holidaysPath, holidaysCrumbs, faq, planner, reviews, customerReviews,
  plannerSource: 'all-tours', testId: 'all-tours-page'
};
