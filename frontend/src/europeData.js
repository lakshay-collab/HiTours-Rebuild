// Europe landing page – multi-country combination journeys.
const E = (n) => `/europe/${n}.webp`;

export const europeHero = {
  eyebrow: 'Europe',
  h1: 'Explore Europe. One Journey. Multiple Countries.',
  sub: 'Paris in the morning, the Alps by evening, Rome by the weekend. We stitch two, three or four countries into one seamless trip with one specialist, one itinerary and one price.',
  cta: 'Plan my Europe trip',
  image: E('hero-paris'),
  imageAlt: 'The Eiffel Tower and the Seine at blue hour, Paris'
};

export const europeProof = [
  { value: '2 to 4', label: 'countries in one trip' },
  { value: 'Rail, road & air', label: 'connections booked for you' },
  { value: 'One', label: 'specialist, itinerary and price' },
  { value: 'Schengen', label: 'visa assistance included' }
];

export const europeCombos = [
  { slug: 'france-switzerland-italy', name: 'France, Switzerland & Italy', countries: ['France', 'Switzerland', 'Italy'], region: '3 countries · 10 to 12 nights', badge: 'TOP PICK', src: E('alps'), alt: 'The Matterhorn reflected in an alpine lake in autumn, Zermatt', line: 'Paris, Interlaken and the Jungfrau, then Lake Como and Venice' },
  { slug: 'switzerland-austria-germany', name: 'Switzerland, Austria & Germany', countries: ['Switzerland', 'Austria', 'Germany'], region: '3 countries · 9 to 11 nights', badge: 'POPULAR', src: E('neuschwanstein'), alt: 'Neuschwanstein Castle above the Bavarian countryside', line: 'Lucerne, Innsbruck, Salzburg and Hallstatt, finishing at Neuschwanstein and Munich' },
  { slug: 'italy-france-switzerland', name: 'Italy, France & Switzerland', countries: ['Italy', 'France', 'Switzerland'], region: '3 countries · 11 to 13 nights', badge: 'TRENDING', src: E('rome'), alt: 'The Colosseum in Rome lit up at night', line: 'Rome, Florence and Venice first, then Paris and a Swiss finale in Zermatt' },
  { slug: 'spain-portugal', name: 'Spain & Portugal', countries: ['Spain', 'Portugal'], region: '2 countries · 8 to 10 nights', badge: 'POPULAR', src: E('lisbon'), alt: 'Terracotta rooftops of Alfama above the Tagus river, Lisbon', line: 'Barcelona, Madrid and Seville, then Lisbon and the Douro in Porto' },
  { slug: 'greece-italy', name: 'Greece & Italy', countries: ['Greece', 'Italy'], region: '2 countries · 9 to 11 nights', badge: 'TOP PICK', src: E('santorini'), alt: 'Blue domes of Oia overlooking the caldera, Santorini', line: 'Athens, Mykonos and Santorini, then a ferry hop to the Amalfi Coast and Rome' },
  { slug: 'netherlands-belgium-france', name: 'Netherlands, Belgium & France', countries: ['Netherlands', 'Belgium', 'France'], region: '3 countries · 7 to 9 nights', badge: 'TRENDING', src: E('amsterdam'), alt: 'Canal houses glowing at dusk, Amsterdam', line: 'Amsterdam canals, Bruges and Brussels, then the high speed train to Paris' }
];

export const europeWhy = {
  h2: 'Why combine countries in Europe?',
  text: 'Europe is small, connected and built for movement. A two hour train takes you from Paris to Brussels, a scenic rail line crosses the Alps in an afternoon and a short ferry links Greek islands to the Italian coast. Instead of one country for ten days, see three with no extra effort.',
  items: [
    { title: 'Short hops, big changes', text: 'Cross a border and the language, food and light change completely. You get three holidays worth of memories in the time it takes for one.', src: E('cinque-terre'), alt: 'Colourful houses of Manarola on the Cinque Terre coast' },
    { title: 'Connections, handled', text: 'High speed rail, scenic trains, private transfers and short flights are booked, timed and tested by us. You just turn up with your bags.', src: E('vienna'), alt: 'Karlskirche reflected in the pool at dusk, Vienna' },
    { title: 'One plan, one price', text: 'One specialist looks after every hotel, ticket and transfer across every country, and you see a single all in price before you book.', src: E('bruges'), alt: 'Medieval canal houses and the belfry in Bruges' }
  ]
};

export const europeSteps = {
  h2: 'How a multi-country trip comes together',
  items: [
    { n: 1, title: 'Pick your countries', text: 'Start with a combination above or tell us the cities on your list. Two or four, it is your call.' },
    { n: 2, title: 'We stitch the route', text: 'Your specialist builds the smartest order, books the rail and air legs and matches hotels to your style.' },
    { n: 3, title: 'Travel seamlessly', text: 'One itinerary on your phone, every connection timed, and a human on call across every border.' }
  ]
};

export const europeSingle = {
  h2: 'Prefer one country at a time?',
  text: 'Our single country Europe collections are here too.',
  items: [
    ['Italy', '/europa/italy'], ['Greece', '/europa/greece'], ['Spain', '/europa/spain'], ['Portugal', '/europa/portugal'], ['Iceland', '/europa/iceland'],
    ['Croatia', '/europa/croatia'], ['Norway', '/europa/norway'], ['Ireland', '/europa/ireland'], ['England', '/europa/england'], ['Scotland', '/europa/scotland']
  ]
};

export const europeFaq = [
  { q: 'How many countries can I combine in one trip?', a: 'Two to four works best. Two countries fit comfortably in eight to ten nights, three in ten to thirteen, and four if you have two weeks or more. Your specialist will tell you honestly when a plan is too rushed.' },
  { q: 'Do I need separate visas for each country?', a: 'For most combinations a single Schengen visa covers every country on the itinerary. We help with the application, the itinerary letter and hotel confirmations the consulate asks for.' },
  { q: 'How do we travel between countries?', a: 'Mostly by high speed and scenic rail, which is faster than flying for many European routes, with private transfers at each end. Where a flight or ferry saves time, we book that instead.' },
  { q: 'Are these fixed packages?', a: 'No. The combinations above are starting points. Add a city, swap a country, slow the pace or upgrade hotels and we rebuild the route around you.' }
];
