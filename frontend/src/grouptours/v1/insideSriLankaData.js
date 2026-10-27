// Inside Sri Lanka: 12-day fixed-departure small-group tour (Flash Pack itinerary, Hi Tours edition).
const fp = (p) => `https://images.flashpack.com/${p}?auto=compress,format&w=1200`;
const hero = (w) => `https://images.flashpack.com/2024/11/LK1_Header.jpg?auto=compress,format&w=${w}`;

export const KEY = 'inside-sri-lanka';
export const PATHS = {
  detail: `/asia/group-tours/${KEY}/v1`,
  checkout: `/asia/group-tours/${KEY}/v1/checkout`,
  confirmed: (id) => `/asia/group-tours/${KEY}/v1/confirmed/${id}`,
};

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
  tagline: 'A 12-day small-group journey from Negombo to the tea hills, Yala and the south coast',
  days: 12, nights: 11, basePrice: 200000, depositPct: 10, earlyBirdPct: 5,
  groupSize: 16, ages: '25 to 45',
  physicality: { label: 'Physicality', value: 'Active', level: 3 },
  downtime: { label: 'Downtime', value: 'Less', level: 2 },
  hero: { main: hero(1600), mainSm: hero(900), alt: 'Travellers on a beach walk in Sri Lanka at golden hour' },
  gallery: [
    hero(1600), fp('2024/07/LK1_ItineraryDay21.jpg'), fp('2024/06/LK1_GALLERY3.jpg'), fp('2024/06/LK1_GALLERY4.jpg'),
    fp('2024/07/LK1_ItineraryDay90-scaled.jpg'), fp('2024/07/LK1_ItineraryDay82.jpg'), fp('2024/07/LK1_ItineraryDay51.1.jpg'),
    fp('2024/07/LK1_ItineraryDay53.jpg'), fp('2024/07/LK1_ItineraryDay70.jpg'),
  ],
  intro: 'Dramatic landscapes, fragrant cuisine, epic beaches and wildlife. Sound like your perfect combination? Ours too. Built for culturally curious travellers who want a touch of comfort with their adventure, this 12-day small-group trip dives deep into Sri Lanka: from Kandy\u2019s relics and Yala\u2019s leopards to the misty hills of Tea Country. You get the inside view throughout, and stay in beautiful hotels with rooftop pools and spas, making this one of our most luxurious group escapes to date.',
  crumbs: [['Home', '/'], ['Asia', '/asia'], ['Sri Lanka', '/asia/sri-lanka'], ['Inside Sri Lanka']],
  expert: { name: 'Aditya', role: 'Sri Lanka trip leader', image: '/team/asia-3.webp' },
};

export const included = [
  { icon: 'ticket', text: 'All activities shown in the itinerary, including an artist\u2019s cooking class, Yala game drives and an immersive tea experience' },
  { icon: 'bed', text: 'Eleven nights in hand-picked 4 and 5 star hotels' },
  { icon: 'users', text: 'Shared twin room (private single rooms available at checkout)' },
  { icon: 'meal', text: '11 breakfasts, 1 lunch and 9 dinners, including lunch at a local farmer\u2019s house' },
  { icon: 'bus', text: 'Private air-conditioned minibus and a scenic hill-country train ride' },
  { icon: 'plane', text: 'Arrival airport transfer in Colombo and a shared departure transfer' },
  { icon: 'guide', text: 'An experienced Sri Lankan Hi Tours trip leader with you throughout' },
  { icon: 'shield', text: '24/7 on-ground support and Hi Tours Cares cover' },
];
export const notIncluded = [
  'International flights to and from Colombo',
  'Sri Lanka ETA visa (we guide you through the online application)',
  'Travel insurance, which is mandatory for every traveller',
  'Tips for your trip leader, driver and local guides',
  'Optional excursions such as whale watching, and personal expenses',
];
export const whyUs = [
  { title: 'Max. 16 people per trip', text: 'Small enough to feel like travelling with friends, big enough to always have company.' },
  { title: 'Everyone at a similar life stage', text: 'Our group departures are for travellers aged 25 to 45, most of them travelling solo.' },
  { title: 'Thirty years of Sri Lanka know-how', text: 'Hi Tours has been crafting holidays since 1995; our local team knows every road on this route.' },
];

// Overnight hotels, one entry per stop (4 and 5 star, "or similar")
export const hotels = {
  negombo: { name: 'Jetwing Lagoon', city: 'Negombo', stars: 5, images: [fp('2021/10/LK1_Hotel_Lagoon2.jpg'), fp('2021/10/LK1_Hotel_Lagoon1.jpg'), fp('2021/10/LK1_Hotel_Lagoon4.jpg')] },
  kandalama: { name: 'Heritance Kandalama', city: 'Dambulla', stars: 5 },
  kandy: { name: 'OZO Kandy', city: 'Kandy', stars: 4 },
  nuwara: { name: 'Heritance Tea Factory', city: 'Nuwara Eliya', stars: 4 },
  ella: { name: '98 Acres Resort & Spa', city: 'Ella', stars: 4 },
  yala: { name: 'Jetwing Yala', city: 'Yala', stars: 5, images: [fp('2021/10/LK1_Hotel_Yala5.jpg'), fp('2021/10/LK1_Hotel_Yala3.jpg'), fp('2021/10/LK1_Hotel_Yala.jpg')] },
  galle: { name: 'Jetwing Lighthouse', city: 'Galle', stars: 5 },
  kosgoda: { name: 'Sheraton Kosgoda Turtle Beach Resort', city: 'Kosgoda', stars: 5, images: [fp('2021/10/LK1_Hotel_Sharaton2.jpg'), fp('2021/10/LK1_Hotel_Sharaton.jpg'), fp('2021/10/LK1_Hotel_Sharaton4.jpg')] },
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

export const days = [
  { n: 1, title: 'Welcome cocktails & dinner', snapshot: 'Arrive in Colombo (CMB)', stop: 'negombo', meals: ['D'],
    bullets: ['Arrive into Colombo, where a private Hi Tours transfer takes you to one of the country\u2019s finest boutique hotels', 'Get to know your group over passionfruit cocktails before a welcome dinner in the laidback fishing port of Negombo'],
    images: [fp('2024/07/LK1_ItineraryDay10.jpg'), fp('2024/07/LK1_ItineraryDay11.jpg'), fp('2024/07/LK1_ItineraryDay12.jpg')] },
  { n: 2, title: 'Negombo fish market & sunset Pidurangala Rock climb', snapshot: 'Climb Pidurangala Rock', stop: 'kandalama', meals: ['B', 'D'],
    bullets: ['Soak up the lively atmosphere of Negombo fish market as huge trays of freshly caught fish, crabs and calamari come ashore', 'Transfer to your hotel on the shores of Lake Kandalama, a calming oasis surrounded by lush jungle', 'Scramble up ancient Pidurangala Rock for sunset views, watching the nearby Sigiriya Rock turn golden, followed by a well-deserved tea after you descend'],
    images: [fp('2024/07/LK1_ItineraryDay22.jpg'), fp('2024/07/LK1_ItineraryDay21.jpg')] },
  { n: 3, title: 'Temple cycling & local farmer lunch', snapshot: 'Temple cycling in Polonnaruwa', stop: 'kandalama', meals: ['B', 'L', 'D'],
    bullets: ['Cycle through the ruined temples and palaces of the 12th-century city of Polonnaruwa, a vast medieval kingdom', 'Be welcomed into a local farmer\u2019s house for lunch, enjoying true Sri Lankan hospitality over a spread of homemade curries', 'Tonight, an evening reserved for our groups: a rural setting, vibrant sarongs, live music and the warm glow of lanterns'],
    images: [fp('2024/07/LK1_ItineraryDay30.jpg'), fp('2024/07/LK1_ItineraryDay31.jpg')] },
  { n: 4, title: 'Private spice plantation & Kandy arrival', snapshot: 'Spice plantation · Kandy', stop: 'kandy', meals: ['B', 'D'],
    bullets: ['Journey into the lush green hills for a visit to a private spice plantation, where your expert explains how fragrant spices are grown and used as medicine', 'Arrive in the World Heritage city of Kandy, home to the sacred Temple of the Tooth Relic, and head out for a meal with your group'],
    images: [fp('2024/07/LK1_ItineraryDay40.jpg'), fp('2024/07/LK1_ItineraryDay41.jpg'), fp('2024/07/LK1_ItineraryDay42.jpg')] },
  { n: 5, title: 'Meditate with a master & cooking class', snapshot: 'Meditate with a guru', stop: 'kandy', meals: ['B', 'D'],
    bullets: ['Visit the home of a yoga and meditation master, who guides your group through a private session and explains the meaning of Buddhism', 'Meet esteemed Kandyan artist Chami for a Sri Lankan cooking class, travelling by tuk tuk to the market for spices and vegetables before conjuring up a curry feast together'],
    images: [fp('2024/07/LK1_ItineraryDay52.jpg'), fp('2021/10/LK1_ItinerarySpices.jpg')] },
  { n: 6, title: 'Nuwara Eliya walking tour', snapshot: 'Little England', stop: 'nuwara', meals: ['B', 'D'],
    bullets: ['Arrive at Nuwara Eliya and take a gentle walking tour of \u201cLittle England\u201d, a cool-climate hill town known for its colonial architecture and tea heritage', 'Enjoy a relaxed lunch at the Garden Room at The Grand Hotel, a classic colonial-era property once favoured by Queen Elizabeth II', 'Visit a local shop to sample strawberries and cream, a beloved local speciality'],
    images: [fp('2024/07/LK1_ItineraryDay61.jpg')] },
  { n: 7, title: 'Tea plantation, kottu class & Ella', snapshot: 'Tea plantation visit', stop: 'ella', meals: ['B', 'D'],
    bullets: ['Join Tamil tea pickers at work on a plantation, learning how to pluck the leaves and discover the weighing, withering, rolling and drying', 'Master the popular street-food dish of kottu, mixing chopped roti, stir-fried vegetables and eggs to the sound of rhythmic chopping', 'Explore the mountain town of Ella, visiting the dramatic Nine Arches Bridge and Little Adam\u2019s Peak, before dinner with your group'],
    images: [fp('2024/07/LK1_ItineraryDay71.1.jpg'), fp('2024/07/LK1_ItineraryDay72.jpg')] },
  { n: 8, title: 'Leopard spotting at Yala', snapshot: 'Yala National Park', stop: 'yala', meals: ['B', 'D'],
    bullets: ['Journey south to Yala National Park, Sri Lanka\u2019s most famous wildlife destination, with the highest density of leopards in the world', 'Embark on a game drive through the park, keeping your eyes peeled for elephants, crocodiles and aquatic birds as well as the elusive leopards'],
    images: [fp('2024/07/LK1_ItineraryDay80.jpg'), fp('2024/07/LK1_ItineraryDay83.1.jpg')] },
  { n: 9, title: 'Slow morning & Galle arrival', snapshot: 'Galle Fort walk', stop: 'galle', meals: ['B'],
    bullets: ['Savour a slow morning, perhaps booking a massage at your hotel, before driving on to the old trading port of Galle, a Unesco World Heritage site', 'Take a walking tour of the 300-year-old fort, its atmospheric streets lined with art galleries, ancient mosques and grand colonial-Dutch mansions'],
    images: [fp('2024/07/LK1_ItineraryDay90-scaled.jpg'), fp('2024/07/LK1_ItineraryDay91.jpg'), fp('2024/07/LK1_ItineraryDay92.jpg')] },
  { n: 10, title: 'Ancient forts & beach sundowners', snapshot: 'Galle · Kosgoda', stop: 'kosgoda', meals: ['B'],
    bullets: ['Drive along the sparkling coast to your beachside resort in Kosgoda, known for its palm-fringed beaches and dreamy sunsets', 'Relax in the idyllic setting before gathering with your group for sundowners at the hotel bar, the lapping waves serenading you'],
    images: [fp('2024/07/LK1_ItineraryDay101.jpg'), fp('2024/07/LK1_ItineraryDay103.jpg')] },
  { n: 11, title: 'Beach day & a candlelit farewell dinner', snapshot: 'Beach day · Farewell BBQ', stop: 'kosgoda', meals: ['B', 'D'],
    bullets: ['Enjoy a free day by the beach or take an optional excursion in search of spinner dolphins, sperm whales and even blue whales at certain times of year', 'Gather with your group for a private farewell dinner: Sri Lankan seafood platters in the glow of a candlelit beach barbecue, complete with live DJ'],
    images: [fp('2024/07/LK1_ItineraryDay112.jpg'), fp('2024/07/LK1_ItineraryDay113.jpg')] },
  { n: 12, title: 'Until next time, Sri Lanka', snapshot: 'Depart from Colombo (CMB)', stop: null, meals: ['B'],
    bullets: ['After one final breakfast together, it is time to say goodbye to your new friends. A shared group transfer runs to the airport for flights after 2pm', 'You return home dreaming of an island that, from golden beaches and elusive wildlife to rolling hills and ancient history, really does seem to have it all'],
    images: [fp('2024/07/LK1_ItineraryDay120.jpg')] },
];

export const faq = { h2: 'Inside Sri Lanka FAQs', items: [
  { q: 'Are flights included?', a: ['International flights to and from Colombo are not included in the trip price. Our experts can quote and book flights from any Indian city once your deposit is paid.'] },
  { q: 'Which airport do I fly in and out of?', a: ['Fly into and out of Colombo Bandaranaike International Airport (CMB). Arrive before 3pm on Day 1 if you can: the welcome meeting and dinner start from 5:30pm at the hotel, about 30 minutes from the airport.'] },
  { q: 'What time should my flight depart on the last day?', a: ['Kosgoda to Colombo airport is about two hours by road and you should be at the airport three hours before departure, so book a flight after 2pm on Day 12 to use the included shared transfer.'] },
  { q: 'How does the deposit work?', a: ['Secure your seat with a 10% deposit (5% on early-bird departures more than 90 days away). The balance is due 60 days before departure; we remind you on WhatsApp and by email, and you can pay in instalments before then.'] },
  { q: 'Do I need a visa?', a: ['Indian passport holders need a Sri Lanka ETA, applied for online before travel. We send you the step-by-step guide after booking.'] },
  { q: 'What fitness level do I need?', a: ['Overall the trip is relaxed, but the Pidurangala Rock climb on Day 2 has steep sections, some scrambling and uneven terrain. Anyone with average fitness can manage it with well-broken-in walking shoes.'] },
  { q: 'When is the best time to go?', a: ['November to March brings the best weather, with temperatures of 27 to 32\u00b0C. April, July and August are the hottest months. May and June see the south-west monsoon; September and October are quieter inter-monsoon months with the odd shower.'] },
  { q: 'Will this itinerary change?', a: ['The itinerary, activities and hotels are subject to change at short notice due to availability, weather or seasonal conditions. We always do our best to keep the impact on your experience minimal.'] },
] };
