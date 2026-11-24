// Grand Wonders of Europe: 16-day group tour, London to Rome (content adapted from the supplier listing).
const us = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const px = (id, w = 1200) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const IMG = {
  hero: (w) => us('photo-1502602898657-3e91760cbb34', w),
  london: us('photo-1533929736458-ca588d08c8be'),
  eiffel: us('photo-1511739001486-6bfe10ce785f'),
  amsterdam: us('photo-1584003564911-a7a321c84e1c'),
  alps: us('photo-1570527190073-d799d528f7d4'),
  jungfrau: px('5210421'),
  lucerne: px('18429608'),
  venice: us('photo-1546441758-a678df1d3138'),
  florence: us('photo-1687817997684-c9335cce7c5c'),
  rome: us('photo-1552832230-c0197dd311b5'),
  romeSunset: us('photo-1764947808860-f7085d2de39b'),
  londonNight: us('photo-1761777773044-f76c0fe5114d'),
  londonAerial: us('photo-1513635269975-59663e0ac1ad'),
  amsterdamCanal: us('photo-1534351590666-13e3e96b5017'),
  alpsMeadow: us('photo-1565689517266-dc2ba981c797'),
};

export const KEY = 'grand-wonders-of-europe';
export const PATHS = {
  detail: `/europe/group-tours/${KEY}`,
  thankYou: (id) => `/europe/group-tours/${KEY}/thank-you/${id}`,
};
export const DEPOSIT_PP = 5000;

export const detail = {
  key: KEY,
  title: 'Wonders of Europe',
  tagline: '10 countries in 16 days, a London to Rome community trip for couples',
  days: 16, nights: 15, basePrice: 175676, depositPp: DEPOSIT_PP,
  groupSize: 40, single: false,
  destination: 'Europe', destinationHref: '/europe',
  chips: ['Group tour with a tour manager', 'Departs 15th and 22nd monthly'],
  depositNote: 'Non-refundable deposit · 50% due 45 days before, the rest 30 days before',
  departuresNote: 'Hold your seat for ₹5,000 per traveller. 50% of the trip price is due 45 days before departure and the rest 30 days before. We send each payment link by SMS and email. Price is per person on twin sharing.',
  trust: ['Payment links sent by SMS and email', 'Professional tour manager throughout', 'Secure payments by Razorpay'],
  itinSub: '16 days, 15 nights · every night’s hotel listed under its day',
  hero: { main: IMG.hero(1600), mainSm: IMG.hero(900), alt: 'The Eiffel Tower over the Seine at dusk' },
  gallery: [IMG.hero(1600), IMG.london, IMG.alps, IMG.venice, IMG.rome, IMG.amsterdam, IMG.lucerne, IMG.florence, IMG.jungfrau],
  crumbs: [['Home', '/'], ['Europe', '/europe'], ['Wonders of Europe']],
  expert: { prefix: 'Planned by', name: 'Sharon', role: 'Europe expert at Hi Tours', image: '/experts/sharon.webp', quote: 'London, Paris, the Swiss Alps, Venice and Rome in one trip. If it is your first time in Europe, this covers the places everyone dreams of.' },
  services: [
    ['16 days', 'Travel plan', '16 days · 15 nights'],
    ['10 countries', 'Customise', '10 countries, London to Rome'],
    ['44 meals', 'Meals', 'Breakfast daily, 14 lunches, 15 dinners'],
    ['4★ hotels', 'Accommodation', 'Superior 4 star hotels'],
    ['Eurostar', 'Transport', 'Eurostar and coach throughout'],
    ['Tour manager', '24/7 Support', 'Tour manager throughout'],
  ],
};

export const included = [
  ['15 nights in superior 4 star hotels', 'Accommodation'],
  ['Twin sharing room', 'Accommodation'],
  ['Daily continental buffet breakfast', 'Meals'],
  ['14 lunches and 15 dinners: Indian Jain, vegetarian or non-vegetarian', 'Meals'],
  ['Eurostar London to Paris and coach travel throughout', 'Transport'],
  ['Professional tour manager and driver tips', '24/7 Support'],
  ['London city tour, London Eye, Madame Tussauds and Thames cruise', 'Activities'],
  ['Eiffel Tower, Versailles, Seine cruise and a full day at Disneyland Paris', 'Activities'],
  ['Jungfraujoch, Mt. Titlis with the Rotair cable car and Rhine Falls', 'Activities'],
  ['Venice gondola ride, Florence guided tour, Pisa and the Vatican', 'Activities'],
  ['Daily 500 ml bottle of mineral water', 'Meals'],
];
export const notIncluded = [
  'International flights to London and back from Rome',
  'UK and Schengen visa fees',
  'Travel insurance',
  'City taxes paid at hotels, where applicable',
  'Optional tours and personal expenses',
];

export const whyGroup = {
  h2: 'Why join this group tour?',
  sub: '10 countries, one booking, zero planning',
  items: [
    { icon: 'leader', h: 'A tour manager every day', t: 'Tickets, timings and transfers are handled, so you just enjoy each city.' },
    { icon: 'sparkles', h: 'Indian meals on the road', t: 'Jain, vegetarian or non-vegetarian lunches and dinners on most days.' },
    { icon: 'users', h: 'Made for couples', t: 'Travel with other couples and share the big sights, the Alps and Disneyland together.' },
    { icon: 'wallet', h: 'Hold your seat for ₹5,000', t: 'Pay 50% 45 days before you fly and the rest 30 days before.' },
  ],
};

const h = (city) => ({ name: 'a superior 4 star hotel', city, stars: 4 });
export const hotels = {
  london: h('London'), paris: h('Paris'), brussels: h('Brussels'), germany: h('Germany'),
  swiss: h('Switzerland'), innsbruck: h('Innsbruck'), venice: h('the Venice region'), florence: h('Florence'), rome: h('Rome'),
};

export const stops = [
  { key: 'london', name: 'London', lat: 51.5, lon: -0.13 },
  { key: 'paris', name: 'Paris', lat: 48.86, lon: 2.35 },
  { key: 'brussels', name: 'Brussels', lat: 50.85, lon: 4.35 },
  { key: 'amsterdam', name: 'Amsterdam', lat: 52.37, lon: 4.9 },
  { key: 'germany', name: 'Heidelberg', lat: 49.4, lon: 8.7 },
  { key: 'swiss', name: 'Interlaken', lat: 46.68, lon: 7.86 },
  { key: 'innsbruck', name: 'Innsbruck', lat: 47.27, lon: 11.4 },
  { key: 'venice', name: 'Venice', lat: 45.44, lon: 12.33 },
  { key: 'florence', name: 'Florence', lat: 43.77, lon: 11.25 },
  { key: 'rome', name: 'Rome', lat: 41.9, lon: 12.5 },
];

// Simplified Great Britain and western-continent outlines for the route map
export const map = {
  name: 'Europe', origin: [53.4, -1.6], scale: 30, viewBox: [0, 0, 540, 400], labelLeft: ['paris', 'swiss', 'florence', 'rome'],
  coasts: [
    [[50.1, -5.6], [50.4, -3.5], [50.7, -1.5], [50.8, 0.3], [51.1, 1.4], [51.9, 1.6], [52.6, 1.7], [53.0, 0.6], [53.6, 0.1], [54.6, -0.8], [55.6, -1.6], [56.6, -2.5], [56.6, -5.5], [55.3, -5.3], [54.8, -4.5], [54.4, -3.3], [53.3, -3.1], [52.7, -4.4], [51.8, -5.1], [51.5, -3.5], [51.2, -4.3], [50.5, -5.0]],
    [[56.5, 8.2], [55.4, 8.1], [53.9, 8.6], [53.5, 7.0], [53.3, 5.2], [52.3, 4.5], [51.4, 3.4], [51.0, 2.3], [50.9, 1.6], [50.1, 1.5], [49.7, 0.2], [49.3, -0.5], [49.7, -1.4], [48.6, -1.5], [48.7, -3.2], [48.4, -4.8], [47.6, -3.3], [46.9, -2.2], [45.9, -1.3], [44.6, -1.25], [43.4, -1.7], [43.4, -4.5], [42, -8.9], [40.5, -8.9], [40.5, 0.6], [41.4, 2.2], [42.6, 3.1], [43.3, 3.6], [43.4, 5.0], [43.1, 6.1], [43.6, 7.4], [44.4, 8.8], [43.9, 10.2], [43.0, 10.5], [42.3, 11.4], [41.4, 12.7], [40.9, 13.9], [40.4, 15.0], [40.5, 17.5], [41.9, 16.0], [42.9, 14.0], [43.8, 13.2], [44.6, 12.3], [45.4, 12.4], [45.7, 13.4], [45.3, 14.3], [44.4, 15.2], [42.6, 17.5], [40.5, 18.6], [40.5, 20], [56.5, 20]],
  ],
};

const BLD = ['B', 'L', 'D'];
export const days = [
  { n: 1, title: 'Arrive in London, welcome to Europe', stop: 'london', meals: ['D'], bullets: ['Meet your tour manager at the airport', 'Transfer to your hotel and check in', 'Welcome dinner with the group'], image: IMG.londonNight },
  { n: 2, title: 'London city tour, Madame Tussauds, London Eye and Thames cruise', stop: 'london', meals: BLD, bullets: ['Guided tour past Buckingham Palace, Big Ben and Trafalgar Square', 'Madame Tussauds wax museum', 'A ride on the London Eye', 'Scenic cruise on the River Thames'], image: IMG.london },
  { n: 3, title: 'Lord’s Cricket Ground, Tower of London and Oxford Street', stop: 'london', meals: BLD, bullets: ['Tour of Lord’s, the home of cricket', 'See the Crown Jewels at the Tower of London', 'Free time to shop on Oxford Street'], image: IMG.londonAerial },
  { n: 4, title: 'Eurostar to Paris, the City of Light', stop: 'paris', meals: BLD, bullets: ['High-speed Eurostar under the Channel to Paris', 'Packed lunch on the journey', 'Paris by Night drive past the lit-up monuments'], image: IMG.eiffel },
  { n: 5, title: 'Paris city tour, Eiffel Tower, Versailles and Seine cruise', stop: 'paris', meals: BLD, bullets: ['Guided drive past the Arc de Triomphe and Champs-Élysées', 'Up the Eiffel Tower for views over Paris', 'Visit the Palace of Versailles', 'Evening cruise on the Seine'], image: IMG.hero(1200) },
  { n: 6, title: 'A full day at Disneyland Paris', stop: 'paris', meals: BLD, bullets: ['Choose Disneyland Park or Walt Disney Studios Park', 'Rides, parades and shows all day', 'Packed lunch in the park'], image: IMG.eiffel },
  { n: 7, title: 'Brussels city tour and Mini-Europe', stop: 'brussels', meals: BLD, bullets: ['Drive to Brussels, Belgium’s capital', 'See the Grand Place, Manneken Pis and the Atomium', 'Mini-Europe: Europe’s landmarks in miniature'], image: IMG.amsterdamCanal },
  { n: 8, title: 'Keukenhof or a Dutch village, Amsterdam canal cruise', stop: 'germany', meals: BLD, bullets: ['Keukenhof tulip gardens in season, or a traditional Dutch village', 'Canal cruise through Amsterdam', 'Drive on into Germany for the night'], image: IMG.amsterdam },
  { n: 9, title: 'Heidelberg, the Black Forest and Rhine Falls', stop: 'swiss', meals: BLD, bullets: ['Walk through Heidelberg’s old town', 'Drive through the Black Forest, home of the cuckoo clock', 'See Rhine Falls, Europe’s largest waterfall', 'Cross into Switzerland'], image: IMG.alpsMeadow },
  { n: 10, title: 'Interlaken and Jungfraujoch, Top of Europe', stop: 'swiss', meals: BLD, bullets: ['Cogwheel train up to Jungfraujoch at 3,454 metres', 'Ice Palace and snow views from the Sphinx terrace', 'Free time in Interlaken between the lakes'], image: IMG.jungfrau },
  { n: 11, title: 'Mt. Titlis, Rotair cable car and Lucerne', stop: 'swiss', meals: BLD, bullets: ['Rotair revolving cable car up Mt. Titlis', 'Glacier views and snow fun at the summit', 'Orientation tour of Lucerne and the Chapel Bridge'], image: IMG.lucerne },
  { n: 12, title: 'Lindt Home of Chocolate, Liechtenstein and Austria', stop: 'innsbruck', meals: BLD, bullets: ['Visit the Lindt Home of Chocolate near Zurich', 'Stop in Vaduz, the capital of Liechtenstein', 'Drive into Austria and overnight near Innsbruck'], image: IMG.alps },
  { n: 13, title: 'Venice, St. Mark’s Square and a gondola ride', stop: 'venice', meals: BLD, bullets: ['Boat ride into Venice', 'Walk through St. Mark’s Square', 'Gondola ride along the canals'], image: IMG.venice },
  { n: 14, title: 'Florence guided tour and the Leaning Tower of Pisa', stop: 'florence', meals: BLD, bullets: ['Guided tour of Florence: the Duomo and Piazzale Michelangelo', 'Photo stop at the Leaning Tower of Pisa'], image: IMG.florence },
  { n: 15, title: 'Rome and Vatican City', stop: 'rome', meals: BLD, bullets: ['Visit the Vatican Museums or the Colosseum', 'See the Trevi Fountain and St. Peter’s Square', 'Farewell dinner with the group'], image: IMG.romeSunset },
  { n: 16, title: 'Fly home from Rome', stop: null, meals: ['B'], bullets: ['Breakfast at the hotel', 'Transfer to Rome airport for your flight home'], image: IMG.rome },
];

export const faq = { h2: 'Wonders of Europe FAQs', items: [
  { q: 'How do the payments work?', a: ['Hold your seat with ₹5,000 per traveller. 50% of the trip price is due 45 days before departure and the full amount 30 days before. Razorpay sends each payment link to you by SMS and email.'] },
  { q: 'Which countries does the tour cover?', a: ['The United Kingdom, France, Belgium, the Netherlands, Germany, Switzerland, Liechtenstein, Austria, Italy and Vatican City.'] },
  { q: 'Which meals are included?', a: ['Daily continental breakfast, 14 lunches and 15 dinners, with Indian Jain, vegetarian and non-vegetarian choices. Packed lunch is given on the Eurostar day and the Disneyland day.'] },
  { q: 'Is Disneyland Paris included?', a: ['Yes. You get a full day at either Disneyland Park or Walt Disney Studios Park.'] },
  { q: 'What is the cancellation policy?', a: ['30 days or more before travel: 25% charge. 15 to 29 days: 50%. 7 to 14 days: 75%. Less than 7 days or no-show: 100%. Requests must be in writing.'] },
] };

export const steps = {
  h2: 'How booking works',
  items: [
    { h: 'Hold your seat', t: 'Pick a departure and pay ₹5,000 per traveller. No account needed.' },
    { h: 'Pay 50%, 45 days before', t: 'Razorpay sends the payment link to your phone and email.' },
    { h: 'Pay the rest, 30 days before', t: 'We send the final link with reminders, then you pack your bags.' },
  ],
};

export const nextSteps = [
  { h: 'Seat-hold confirmation', t: 'Your receipt and the day-by-day itinerary are on their way.' },
  { h: '50% payment link', t: 'Razorpay sends it by SMS and email, due 45 days before departure.' },
  { h: 'Final payment link', t: 'The rest is due 30 days before departure; the link comes by SMS and email.' },
];
