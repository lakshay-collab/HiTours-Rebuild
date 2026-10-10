// Europe destination landing – clone of the Vietnam listing data (master template); only destination content differs.
import { features, planner as egyptPlanner, reviews as egyptReviews, customerReviews as egyptCustomerReviews } from './egyptListingData';
import { europeProducts } from './tours/europeToursData';
import { greeceProducts } from './tours/greeceToursData';
import { norwayProducts } from './tours/norwayToursData';
import { irelandProducts } from './tours/irelandToursData';
import { finlandProducts } from './tours/finlandToursData';
import { swedenProducts } from './tours/swedenToursData';
import { countriesOfPlaces } from './holidays/countryOfPlace';
const E = (n) => `/europe/${n}.webp`;

const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const CT2 = 'https://images.ctfassets.net/rc3dlxapnu6k';
const ct = (p) => `${CT}/${p}?w=1080&q=60&fm=webp`;
const ct2 = (p) => `${CT2}/${p}?w=1080&q=60&fm=webp`;

export const destination = { name: 'Europe', continent: 'Europe', primary: ['Paris', 'Swiss Alps', 'Rome', 'Venice'] };

export const holidaysPath = '/europe/holidays';
export const holidaysCrumbs = [{ label: 'Home', to: '/' }, { label: 'Europe tours & holidays' }];

export const hero = {
  h1: 'Europe. One Journey. Multiple Countries.',
  holidaysH1: 'Europe tours & holidays',
  styleH1: (style) => `Europe ${style.toLowerCase()} holidays`,
  tabAbout: 'About Europe',
  tabTours: 'Europe holidays',
  cta: 'Plan for free',
  stickyCta: 'Plan your Europe trip',
  ctaHref: '/l/europe/enquiry/passengers/',
  sub: 'Your travel plan – no obligation & tailor-made',
  image: E('hero-paris'),
  imageAlt: 'The Eiffel Tower and the Seine at blue hour, Paris'
};

export const crumbs = [{ label: 'Destinations', href: '/destinations/' }, { label: 'Europe' }];

export const intro = {
  h2: 'About Europe',
  text: 'Europe is the one place where a single holiday can be three countries. Breakfast in Paris, an afternoon train through the Alps and dinner beside an Italian lake is a normal day here, not a stunt. Distances are short, the trains are fast and every border you cross changes the language, the food and the light.',
  more: ' That is why we plan Europe as combinations rather than single countries. France with Switzerland and Italy, Spain with Portugal, Greece with Italy, the Netherlands with Belgium and France: each route is built so the connections are quick, the hotels are well placed and no day is lost to travel. One specialist handles every rail ticket, transfer and entry across every country, and you see one price before you book.',
  learnMore: 'Learn more',
  learnLess: 'Show less',
  quote: 'Travelling Europe by train is the secret. City centre to city centre, no airport queues, and the Alps rolling past your window between countries. Pack light, book seats on the left side heading south through Switzerland, and keep one evening free in every city with no plan at all.',
  quoteMore: 'My advice: do not try to see everything. Two or three countries in ten to twelve days feels generous; five feels like a checklist. Give Paris three nights, give the mountains two, and let your specialist handle the connections so you can simply enjoy the ride.',
  readMore: 'Read more',
  readLess: 'Read less',
  expert: { image: '/experts/sharon.webp', name: 'Sharon', role: 'Travel expert for Europe' }
};

export const tours = {
  h2: 'Top-selling Europe multi-country holiday ideas',
  allH2: 'Europe tours & holidays',
  styleH2: (style) => `Europe ${style.toLowerCase()} holidays`,
  browse: (n) => `Browse ${n} package ${n === 1 ? 'idea' : 'ideas'}`,
  filterLabel: 'Travel style:',
  sortLabel: 'Sorted by:',
  filterBy: 'Filter by',
  sortBy: 'Sort by',
  empty: 'No holidays match this travel style yet – clear the filter to see all Europe holidays.',
  viewAll: 'View all Europe holidays',
  short: ['Combine ', ['two, three or four countries in one seamless journey'], ' – from Paris and the Alps to Rome, Lisbon and Santorini, every Europe holiday is tailor-made by our experts.'],
  intro: [
    ' Think high speed trains between capitals, cogwheel railways into the Alps and ferries between Greek islands. Whether you want a ', ['honeymoon across France, Switzerland and Italy, a family loop through Austria and Germany or a first Europe trip via Amsterdam, Bruges and Paris'], ' – our travel experts will be happy to advise you personally.'
  ],
  readMore: 'Read more',
  readLess: 'Read less'
};

// Every European trip we run: the multi-country itineraries plus each country's own tours.
export const products = Object.values(Object.fromEntries(
  [...new Set([...europeProducts, ...greeceProducts, ...norwayProducts, ...irelandProducts, ...finlandProducts, ...swedenProducts])].filter(Boolean)
    .map((p) => [p.slug, { ...p, countries: p.countries || countriesOfPlaces(p.places) }])
));

export const planner = { ...egyptPlanner, h3: 'Customize your Europe trip', bg: E('alps') };

export const reviews = {
  h2: 'What customers say about booking Europe with Hi Tours',
  count: 'based on 310 Europe reviews',
  items: [
    { name: 'Rohan and Meera', title: 'Three countries, zero stress', date: '12 May 2026', stars: 5, image: E('zermatt'), text: 'Paris, Interlaken, Zermatt, Como and Venice in eleven days and we never once worried about a connection. Every train ticket was on our phone, every transfer was waiting. The Jungfraujoch day was the best of our lives.' },
    { name: 'The Kapoor family', title: 'Austria and Germany with the kids', date: '28 April 2026', stars: 5, image: E('hallstatt'), text: 'We were nervous about moving hotels with two children but the pacing was perfect. Hallstatt and Neuschwanstein were magical and our specialist even found a hotel in Munich with a pool. Would book again tomorrow.' },
    { name: 'Ananya', title: 'Honeymoon in Greece and Italy', date: '9 April 2026', stars: 5, image: E('santorini'), text: 'Santorini sunsets, then the Amalfi Coast by private boat and Rome to finish. The ferries and the flight were all organised, we just showed up. Hi Tours made it feel effortless.' }
  ]
};

// Destination-specific version of the holidays-page customer reviews block (same structure as Egypt's).
export const customerReviews = {
  ...egyptCustomerReviews,
  h2: 'Our customers about their Europe trip',
  summary: 'Amazing Europe trip – trains, transfers and excursions across three countries worked perfectly and every city was a highlight.',
  photos: [E('venice'), E('lucerne'), E('bruges'), E('lisbon-tram')],
  planExpert: '/experts/sharon.webp',
  items: reviews.items.map((r) => ({ initial: r.name[0], name: r.name, date: r.date, title: r.title, source: 'Trustpilot', text: r.text }))
};

const placeList = [
  ['Paris', E('hero-paris')],
  ['Swiss Alps', E('alps')],
  ['Rome', E('rome')],
  ['Venice', E('venice')],
  ['Amsterdam', E('amsterdam')],
  ['Santorini', E('santorini')]
];
export const places = { h2: `Discover these places in ${destination.name}`, items: placeList.map(([title, image], i) => ({ title, alt: title, tag: null, href: `#place-${i}`, image })) };

export const activities = { h2: 'The best activities on your trip', items: [
  { href: '#', title: 'Scenic trains through the Alps', alt: 'Gornergrat train with the Matterhorn behind, Zermatt', tag: 'Rail', image: E('zermatt') },
  { href: '#', title: 'Island hopping by ferry in Greece', alt: 'Windmills above the sea on Mykonos', tag: 'Islands', image: E('mykonos') }
] };

export const plan = {
  h2: 'How to plan your Europe trip',
  intro: 'Europe rewards a little planning. The continent is compact and superbly connected, so the real questions are which countries to pair, how many nights each deserves and which season suits the route. Our combinations are built around fast rail links, well placed hotels and a pace that leaves room to wander.',
  more: 'Show more details',
  less: 'Show fewer details',
  sections: [
    { h4: 'Best time to travel & climate', text: 'April to June and September to October are the sweet spots: mild weather, long days and fewer crowds than July and August. Summer is wonderful in the Alps and the Greek islands but busy in the big cities. December brings Christmas markets to Austria, Germany and France. Avoid late October to March for the Greek islands, when ferries thin out.' },
    { h4: 'Trip duration & route suggestions', text: 'Two countries sit comfortably in 8 to 10 nights, three in 10 to 13. France, Switzerland and Italy is the classic 11 night loop. Switzerland, Austria and Germany suits families in 10. Spain and Portugal needs 9, Greece and Italy 10 for a honeymoon pace, and the Netherlands, Belgium and France can be done in a week.' },
    { h4: 'Sights & culture', text: 'Paris, Rome and Venice are the heavyweights, but the smaller stops make the trip: Hallstatt and Bruges, Lucerne and Lake Como, Sintra and Ravello. Book timed entry for the Eiffel Tower, Vatican Museums, Sagrada Família and the Anne Frank House months ahead; we handle that for you.' },
    { h4: 'Activities & adventure', text: 'Ride the Jungfraujoch and Gornergrat railways, cruise the Seine, the Douro and the Santorini caldera, cycle the Dutch countryside, walk the Cinque Terre and taste your way through Belgian chocolate, Tuscan wine and Portuguese pastries.' },
    { h4: 'Costs & budget', text: 'Comfortable 4-star travel across Europe averages ₹15,000 to ₹20,000 per person per day including hotels, rail, transfers and key tickets. Switzerland is the most expensive leg, Portugal and Greece the gentlest on the budget. Our package prices cover everything on the ground except lunches, dinners and flights from India.' },
    { h4: 'Safety & entry', text: 'Indian passport holders need a Schengen visa, which covers every country on our combinations. Apply 4 to 8 weeks ahead; we prepare the itinerary letter, hotel confirmations and insurance you need. Europe is safe for travellers; keep an eye on belongings in busy squares and on metro lines.' }
  ]
};

export const themes = { h2: 'Travel guide & inspiration', more: 'Show more', less: 'Show less', items: [
  { href: '#', title: 'The best time to visit Europe', tag: 'Travel guide', icon: 'sun', image: E('santorini') },
  { href: '#', title: 'How many countries in one Europe trip?', tag: 'Travel guide', icon: 'calendar', image: E('alps') },
  { href: '#', title: 'Europe by train: a first timer guide', tag: 'Inspiration', icon: 'landscape', image: E('zermatt') },
  { href: '#', title: 'The 20 best sights in Europe in 2026', tag: 'Inspiration', icon: 'landscape', image: E('rome') },
  { href: '#', title: 'Food across Europe: 10 dishes to try', tag: 'Inspiration', icon: 'food', image: E('cinque-terre') },
  { href: '#', title: 'The most beautiful lakes and coasts in Europe', tag: 'Inspiration', icon: 'beach', image: E('como') },
  { href: '#', title: 'Europe insider tips', tag: 'Inspiration', icon: 'island', image: E('bruges') },
  { href: '#', title: 'Europe holiday: costs at a glance', tag: 'Travel guide', icon: 'wallet', image: E('hero-paris') }
].map((t) => ({ ...t, alt: t.title })) };

export const faq = {
  h2: 'Practical information for your trip',
  items: [
    { q: 'How many countries can I combine in one Europe trip?', a: [
      'Two to four works best. Two countries fit comfortably in 8 to 10 nights, three in 10 to 13 and four if you have two weeks or more. Your specialist will tell you honestly when a route is too rushed and suggest what to drop.',
      ['See our ', ['Europe multi-country holidays', '/europe/holidays'], ' for routes that already work.']
    ] },
    { q: 'How do we travel between countries?', a: [
      'Mostly by high speed and scenic rail, which beats flying on most European routes once you count airport time. Private transfers meet you at each station. Where a flight or ferry saves hours, for example Venice to Paris or Santorini to Naples, we book that instead.'
    ] },
    { q: 'Do Indian citizens need a visa for Europe?', a: [
      'Yes. A single Schengen visa covers every country on our combinations. Apply 4 to 8 weeks before departure; we provide the day-by-day itinerary, hotel confirmations and insurance details the consulate asks for.',
      'Our travel experts will guide you through the visa requirements as part of your travel plan, so there are no surprises at the airport.'
    ] },
    { q: 'How is my trip protected if travel conditions change?', a: [
      'Many travellers want extra flexibility and security before booking a multi-country trip. With Hi Tours Cares you can cancel or rebook your land programme up to 30 days before departure without giving a reason.',
      'Hi Tours Cares was developed to give travellers more flexibility and cover when travel conditions or personal circumstances change unexpectedly.',
      ['Find out more at: ', ['Hi Tours Cares', '/care']]
    ] }
  ]
};

const europeList = [
  ['Italy', ct('6MDAdkdCjF16LaohT1os4R/a05331428849331be0c2fd266c8570db/Italien_Amalfi.jpg')],
  ['Greece', ct('4tPmbNB9QIZbfIWAsHnz3w/fd3191963fb012a8f8e1aeb42a2a6401/Griechenland_Santorini.jpg')],
  ['Norway', ct('UHqJkdKkOhjiJeqqdlBtb/7f7ab850458b9aad4024ef52c5834ade/MAIN_Norwegen_Hardangerfjord_TCG.jpg')],
  ['Ireland', ct('W4uVx0uUt86jnByPHjutE/306e7fb7b3d77e101f5fbde7cb9cab1d/Irland_CliffsofMoher-2.jpg')],
  ['Scotland', ct('6Ypj2Qd3m3jQk6ygmpsNAM/076740049ff3bf1df0f025d0547d4d90/Schottland_Burg.png')]
];
export const related = { h2: 'Single-country Europe holidays', items: europeList.map(([title, image]) => ({ title, alt: title, tag: null, href: `/europe/${title.toLowerCase()}`, image })) };

export const europe = {
  pageTitle: 'Europe tours & holidays | Hi Tours',
  hero, crumbs, intro, tours, products, features, places, activities, themes, related, holidaysPath, holidaysCrumbs, plan, faq, planner,
  reviews: { ...egyptReviews, ...reviews }, customerReviews,
  plannerSource: 'europe-planner'
};
