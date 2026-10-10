// "All tours in Asia": the filterable listing behind /asia, fed by every imported Asia trip.
import { hero as asiaHero, reviews as asiaReviews } from './asiaListingData';
import { faq as egyptFaq, planner as egyptPlanner, customerReviews as egyptCustomerReviews } from './egyptListingData';
import { vietnamProducts } from './tours/vietnamToursData';
import { chinaProducts } from './tours/chinaToursData';
import { japanProducts } from './tours/japanToursData';
import { southKoreaProducts } from './tours/southKoreaToursData';
import { bhutanProducts } from './tours/bhutanToursData';
import { kazakhstanProducts } from './tours/kazakhstanToursData';
import { indonesiaProducts } from './tours/indonesiaToursData';
import { singaporeProducts } from './tours/singaporeToursData';
import { thailandProducts } from './tours/thailandToursData';
import { malaysiaProducts } from './tours/malaysiaToursData';
import { cambodiaProducts } from './tours/cambodiaToursData';
import { laosProducts } from './tours/laosToursData';

const all = [
  ...vietnamProducts, ...chinaProducts, ...japanProducts, ...southKoreaProducts, ...bhutanProducts,
  ...kazakhstanProducts, ...indonesiaProducts, ...singaporeProducts, ...thailandProducts,
  ...malaysiaProducts, ...cambodiaProducts, ...laosProducts
].filter(Boolean);

export const products = Object.values(Object.fromEntries(all.map((p) => [p.slug, p])));

export const hero = { ...asiaHero, h1: 'Asia tours & holidays' };

export const tours = {
  h2: 'Top-selling Asia holiday ideas',
  allH2: 'Asia tours & holidays',
  styleH2: (style) => `Asia ${style.toLowerCase()} holidays`,
  browse: (n) => `Browse ${n} package ${n === 1 ? 'idea' : 'ideas'}`,
  filterLabel: 'Travel style:',
  sortLabel: 'Sorted by:',
  filterBy: 'Filter by',
  sortBy: 'Sort by',
  empty: 'No holidays match these filters yet, clear them to see every Asia holiday.',
  viewAll: 'View all Asia holidays',
  short: ['Every Asia trip we run, ', ['from a four day Halong Bay break to a fifteen day Indochina circuit'], ', tailor-made by the specialist who knows the country.'],
  intro: [
    ' Pick a country or combine three. Our specialists build each itinerary around your dates and pace, with hand-picked hotels, private transfers and local guides throughout.'
  ]
};

export const holidaysPath = '/asia/holidays';
export const holidaysCrumbs = [{ label: 'Home', to: '/' }, { label: 'Asia tours & holidays' }];

export const planner = { ...egyptPlanner, h3: 'Customize your Asia trip', bg: asiaHero.images[2].src };
export const faq = egyptFaq;

export const asiaHolidays = {
  hero, tours, products, holidaysPath, holidaysCrumbs, faq, planner,
  reviews: asiaReviews, customerReviews: egyptCustomerReviews,
  plannerSource: 'asia-holidays', testId: 'asia-holidays-page'
};
