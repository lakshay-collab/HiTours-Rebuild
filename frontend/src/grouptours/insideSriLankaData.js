// Inside Sri Lanka: 12-day fixed-departure small-group tour (Flash Pack itinerary, Hi Tours edition).
const fp = (p) => `https://images.flashpack.com/${p}?auto=compress,format&w=1200`;
const hero = (w) => `https://images.flashpack.com/2024/11/LK1_Header.jpg?auto=compress,format&w=${w}`;

export const KEY = 'inside-sri-lanka';
export const PATHS = {
  detail: `/asia/group-tours/${KEY}`,
  thankYou: (id) => `/asia/group-tours/${KEY}/thank-you/${id}`,
};

export const DEPOSIT_PP = 5000;

// Listing card (Sri Lanka listing / catalog), links to the group-tour page
export const insideSriLankaProduct = {
  slug: KEY, href: PATHS.detail, tag: 'Group tour', styles: ['Group tour', 'Culture', 'Wildlife'],
  places: ['Negombo', 'Kandalama', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Galle', 'Kosgoda'],
  title: 'Inside Sri Lanka: 12-day small-group tour with fixed departures',
  days: 12, stops: 8, hotels: 8, cities: 8, activities: 18, transfers: 12, meals: 21, price: 200000, noSale: true,
  images: [hero(1200), fp('2024/07/LK1_ItineraryDay21.jpg'), fp('2024/07/LK1_ItineraryDay80.jpg'), fp('2024/06/LK1_GALLERY3.jpg')],
  alt: 'Inside Sri Lanka small-group tour',
};

export const detail = {
  key: KEY,
  title: 'Inside Sri Lanka',
  tagline: 'Negombo to the tea hills, Yala and the south coast in one small group',
  days: 12, nights: 11, basePrice: 200000, depositPp: DEPOSIT_PP,
  groupSize: 16, ages: '25 to 45',
  physicality: { label: 'Physicality', value: 'Active', level: 3 },
  downtime: { label: 'Downtime', value: 'Less', level: 2 },
  hero: { main: hero(1600), mainSm: hero(900), alt: 'Travellers on a beach walk in Sri Lanka at golden hour' },
  gallery: [
    hero(1600), fp('2024/07/LK1_ItineraryDay21.jpg'), fp('2024/06/LK1_GALLERY3.jpg'), fp('2024/06/LK1_GALLERY4.jpg'),
    fp('2024/07/LK1_ItineraryDay90-scaled.jpg'), fp('2024/07/LK1_ItineraryDay82.jpg'), fp('2024/07/LK1_ItineraryDay51.1.jpg'),
    fp('2024/07/LK1_ItineraryDay53.jpg'), fp('2024/07/LK1_ItineraryDay70.jpg'),
  ],
  intro: 'Leopards at dawn, tea pluckers at work, a cooking class in an artist\u2019s home and a candlelit beach barbecue to finish. Twelve days across Sri Lanka with a group of like-minded travellers, a Hi Tours trip leader throughout, and hand-picked 4 and 5 star hotels every night.',
  crumbs: [['Home', '/'], ['Asia', '/asia'], ['Sri Lanka', '/asia/sri-lanka'], ['Inside Sri Lanka']],
  expert: { name: 'Aditya', role: 'Sri Lanka expert at Hi Tours', image: '/team/asia-3.webp', quote: 'Twelve days is the sweet spot for Sri Lanka: you get the culture, the hills, the wildlife and the beach without ever rushing.' },
  // Juicy stats: [label, ServiceIcon name, long label]
  services: [
    ['12 days', 'Travel plan', '12 days · 11 nights'],
    ['8 places', 'Customise', '8 places across the island'],
    ['21 meals', 'Meals', '21 meals included'],
    ['4 & 5★ hotels', 'Accommodation', '4 and 5 star hotels'],
    ['18 experiences', 'Activities', '18 experiences included'],
    ['Trip leader', '24/7 Support', 'Trip leader throughout'],
  ],
};

// What's included: [label, ServiceIcon name]
export const included = [
  ['All 18 experiences in the itinerary, incl. Yala game drive, tea estate visit and the artist\u2019s cooking class', 'Activities'],
  ['11 nights in hand-picked 4 and 5 star hotels', 'Accommodation'],
  ['Twin-share room (private room available)', 'Accommodation'],
  ['21 meals: 11 breakfasts, 1 lunch, 9 dinners', 'Meals'],
  ['Private air-conditioned minibus throughout', 'Transport'],
  ['Scenic hill-country train ride', 'Transport'],
  ['Arrival and departure airport transfers', 'Transport'],
  ['Hi Tours trip leader with you every day', '24/7 Support'],
  ['All entry tickets and park fees', 'Entry tickets'],
  ['24/7 on-ground support and Hi Tours Cares', '24/7 Support'],
];
export const notIncluded = [
  'International flights to and from Colombo',
  'Sri Lanka ETA visa (we guide you through the online application)',
  'Travel insurance, which is mandatory for every traveller',
  'Tips for your trip leader, driver and local guides',
  'Optional excursions such as whale watching, and personal expenses',
];

export const whyGroup = {
  h2: 'Why travel in a Hi Tours group?',
  sub: 'Small groups, same life stage, zero planning',
  items: [
    { icon: 'users', h: 'Max 16 travellers, mostly solo', t: 'Small enough to feel like friends, big enough to always have company at dinner.' },
    { icon: 'sparkles', h: 'Same life stage, same vibe', t: 'Everyone on the trip is 25 to 45, curious about culture and up for a bit of adventure.' },
    { icon: 'leader', h: 'A trip leader on every departure', t: 'A Hi Tours leader handles tickets, timings and tips so you only have to show up.' },
    { icon: 'wallet', h: 'Hold your seat for \u20b95,000', t: 'Pay a small deposit now, pay the rest 60 days before you fly. Change dates free until then.' },
  ],
};

// Overnight hotels, one entry per stop (4 and 5 star, "or similar")
export const hotels = {
  negombo: { name: 'Jetwing Lagoon', city: 'Negombo', stars: 5 },
  kandalama: { name: 'Heritance Kandalama', city: 'Dambulla', stars: 5 },
  kandy: { name: 'OZO Kandy', city: 'Kandy', stars: 4 },
  nuwara: { name: 'Heritance Tea Factory', city: 'Nuwara Eliya', stars: 4 },
  ella: { name: '98 Acres Resort & Spa', city: 'Ella', stars: 4 },
  yala: { name: 'Jetwing Yala', city: 'Yala', stars: 5 },
  galle: { name: 'Jetwing Lighthouse', city: 'Galle', stars: 5 },
  kosgoda: { name: 'Sheraton Kosgoda Turtle Beach Resort', city: 'Kosgoda', stars: 5 },
};

// Map stops (lat, lon) in itinerary order; `key` links days to pins
export const stops = [
  { key: 'negombo', name: 'Negombo', lat: 7.21, lon: 79.84 },
  { key: 'kandalama', name: 'Kandalama', lat: 7.86, lon: 80.70 },
  { key: 'kandy', name: 'Kandy', lat: 7.29, lon: 80.63 },
  { key: 'nuwara', name: 'Nuwara Eliya', lat: 6.97, lon: 80.77 },
  { key: 'ella', name: 'Ella', lat: 6.87, lon: 81.05 },
  { key: 'yala', name: 'Yala', lat: 6.37, lon: 81.42 },
  { key: 'galle', name: 'Galle', lat: 6.03, lon: 80.22 },
  { key: 'kosgoda', name: 'Kosgoda', lat: 6.33, lon: 80.02 },
];

// Crisp, mobile-first bullets: one heading per day, 4-5 short lines
export const days = [
  { n: 1, title: 'Arrive in Colombo, welcome drinks in Negombo', stop: 'negombo', meals: ['D'],
    bullets: ['Private transfer from Colombo airport to your lagoon-side hotel', 'Meet your trip leader and the group over passionfruit cocktails', 'Welcome dinner in the laid-back fishing town of Negombo'],
    image: fp('2024/07/LK1_ItineraryDay10.jpg') },
  { n: 2, title: 'Negombo fish market and sunset on Pidurangala Rock', stop: 'kandalama', meals: ['B', 'D'],
    bullets: ['Early walk through Negombo fish market as the catch comes ashore', 'Drive inland to your jungle hotel on the shores of Lake Kandalama', 'Climb Pidurangala Rock for sunset views over Sigiriya', 'Tea at the bottom, dinner back at the hotel'],
    image: fp('2024/07/LK1_ItineraryDay21.jpg') },
  { n: 3, title: 'Cycle ancient Polonnaruwa, lunch with a farming family', stop: 'kandalama', meals: ['B', 'L', 'D'],
    bullets: ['Cycle between the 12th-century temples and palaces of Polonnaruwa', 'Home-cooked curry lunch at a local farmer\u2019s house', 'Evening under lanterns with live music, reserved for Hi Tours groups'],
    image: fp('2024/07/LK1_ItineraryDay30.jpg') },
  { n: 4, title: 'Spice plantation and on to Kandy', stop: 'kandy', meals: ['B', 'D'],
    bullets: ['Private spice garden tour: cinnamon, cardamom and Ayurvedic remedies', 'Arrive in Kandy, Sri Lanka\u2019s hill capital and a World Heritage city', 'Visit the Temple of the Tooth Relic at evening puja', 'Group dinner in town'],
    image: fp('2024/07/LK1_ItineraryDay40.jpg') },
  { n: 5, title: 'Meditate with a master, cook with an artist', stop: 'kandy', meals: ['B', 'D'],
    bullets: ['Private meditation session at the home of a yoga and meditation master', 'Tuk-tuk to the market with Kandyan artist Chami to buy spices', 'Cook a Sri Lankan curry feast together in her studio', 'Free evening in Kandy'],
    image: fp('2024/07/LK1_ItineraryDay52.jpg') },
  { n: 6, title: 'Up into Tea Country: Nuwara Eliya', stop: 'nuwara', meals: ['B', 'D'],
    bullets: ['Scenic hill-country train ride through tea estates and waterfalls', 'Walking tour of \u201cLittle England\u201d: colonial villas, post office, racecourse', 'Afternoon tea at the Grand Hotel', 'Strawberries and cream at a local farm shop'],
    image: fp('2024/07/LK1_ItineraryDay61.jpg') },
  { n: 7, title: 'Tea pluckers, kottu class and Ella', stop: 'ella', meals: ['B', 'D'],
    bullets: ['Pluck tea with Tamil estate workers and see the factory in action', 'Learn to make kottu roti, Sri Lanka\u2019s favourite street food', 'Drive to Ella and walk to the Nine Arches Bridge', 'Short hike up Little Adam\u2019s Peak for sunset'],
    image: fp('2024/07/LK1_ItineraryDay71.1.jpg') },
  { n: 8, title: 'Leopard safari in Yala National Park', stop: 'yala', meals: ['B', 'D'],
    bullets: ['Drive south to Yala, home to the world\u2019s densest leopard population', 'Afternoon game drive: elephants, crocodiles, peacocks and, with luck, leopards', 'Sundowners and dinner at your safari hotel by the beach'],
    image: fp('2024/07/LK1_ItineraryDay80.jpg') },
  { n: 9, title: 'Slow morning, then Galle Fort', stop: 'galle', meals: ['B'],
    bullets: ['Lie in, swim or book a massage at the hotel', 'Coastal drive west to Galle, a UNESCO World Heritage fort town', 'Guided walk of the 300-year-old ramparts, Dutch mansions and boutiques', 'Dinner on your own in the fort\u2019s cafes'],
    image: fp('2024/07/LK1_ItineraryDay90-scaled.jpg') },
  { n: 10, title: 'Beach time in Kosgoda', stop: 'kosgoda', meals: ['B'],
    bullets: ['Short drive up the coast to your beachfront resort in Kosgoda', 'Afternoon free: pool, beach or a visit to the turtle hatchery', 'Group sundowners at the beach bar'],
    image: fp('2024/07/LK1_ItineraryDay101.jpg') },
  { n: 11, title: 'Free day and a candlelit farewell barbecue', stop: 'kosgoda', meals: ['B', 'D'],
    bullets: ['Free day by the Indian Ocean', 'Optional whale and dolphin watching trip (seasonal)', 'Private farewell dinner: seafood barbecue on the beach with a live DJ'],
    image: fp('2024/07/LK1_ItineraryDay112.jpg') },
  { n: 12, title: 'Goodbye Sri Lanka', stop: null, meals: ['B'],
    bullets: ['Last breakfast with the group', 'Shared transfer to Colombo airport for flights after 2pm'],
    image: fp('2024/07/LK1_ItineraryDay120.jpg') },
];

export const faq = { h2: 'Inside Sri Lanka FAQs', items: [
  { q: 'How does the \u20b95,000 deposit work?', a: ['Hold your seat with a non-refundable deposit of \u20b95,000 per traveller. The balance is due 60 days before departure; we remind you on WhatsApp and by email and you can pay in parts before then. Dates can be changed free of charge until the balance is due.'] },
  { q: 'Are flights included?', a: ['International flights to and from Colombo are not included. Our experts can quote and book flights from any Indian city once your seat is held.'] },
  { q: 'Which airport do I fly in and out of?', a: ['Fly into and out of Colombo Bandaranaike International Airport (CMB). Arrive before 3pm on Day 1 if you can: the welcome meeting and dinner start from 5:30pm at the hotel, about 30 minutes from the airport.'] },
  { q: 'What time should my flight depart on the last day?', a: ['Kosgoda to Colombo airport is about two hours by road and you should be at the airport three hours before departure, so book a flight after 2pm on Day 12 to use the included shared transfer.'] },
  { q: 'Do I need a visa?', a: ['Indian passport holders need a Sri Lanka ETA, applied for online before travel. We send you the step-by-step guide after booking.'] },
  { q: 'What fitness level do I need?', a: ['Overall the trip is relaxed, but the Pidurangala Rock climb on Day 2 has steep sections and uneven terrain. Anyone with average fitness can manage it with well-broken-in walking shoes.'] },
  { q: 'When is the best time to go?', a: ['November to March brings the best weather, with temperatures of 27 to 32\u00b0C. April, July and August are the hottest months. May and June see the south-west monsoon; September and October are quieter with the odd shower.'] },
  { q: 'Will this itinerary change?', a: ['The itinerary, activities and hotels are subject to change at short notice due to availability, weather or seasonal conditions. We always do our best to keep the impact on your experience minimal.'] },
] };

export const nextSteps = [
  { h: 'WhatsApp and email confirmation', t: 'Your seat-hold receipt and the full day-by-day itinerary are on their way.' },
  { h: 'Your trip leader calls within one working day', t: 'To collect passport names, help with flights and answer any questions.' },
  { h: 'Balance 60 days before departure', t: 'We send a secure payment link and reminders; you can pay in parts before the due date.' },
];
