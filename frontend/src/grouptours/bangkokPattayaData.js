// Air-inclusive Bangkok & Pattaya package ex Delhi (fixed departure 07 to 11 Dec 2026), from the supplier PDF.
const us = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const px = (id, w = 1200) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const IMG = {
  bay: (w) => us('photo-1625793061481-8c36fdc131a4', w),
  beach: us('photo-1625492206717-61c584a8b11e'),
  coral: us('photo-1687320961478-387af61e7cca'),
  speedboats: px('18165565'),
  goldenBuddha: px('36481732'),
  marble: us('photo-1582468546235-9bf31e5bc4a1'),
  watArun: us('photo-1714672709462-de21a12a1339'),
  skyline: us('photo-1731239027673-1a5c6cd61380'),
  giraffe: us('photo-1593580857599-f146a20d4a1c'),
};

export const KEY = 'bangkok-pattaya-ex-delhi';
export const PATHS = {
  detail: `/asia/group-tours/${KEY}`,
  thankYou: (id) => `/asia/group-tours/${KEY}/thank-you/${id}`,
};

export const DEPOSIT_PP = 5000;

export const bangkokPattayaProduct = {
  slug: KEY, href: PATHS.detail, tag: 'Flights included', styles: ['Beach', 'City', 'Family'],
  places: ['Pattaya', 'Coral Island', 'Bangkok'],
  title: 'Bangkok & Pattaya with return flights from Delhi',
  days: 5, stops: 2, hotels: 2, cities: 2, activities: 5, transfers: 4, meals: 1, price: 63000, noSale: true,
  images: [IMG.bay(1200), IMG.speedboats, IMG.goldenBuddha, IMG.giraffe],
  alt: 'Pattaya bay with speedboats and the city skyline',
};

export const detail = {
  key: KEY,
  title: 'Bangkok & Pattaya',
  tagline: 'Return flights from Delhi, Coral Island, Bangkok temples and Safari World',
  days: 5, nights: 4, basePrice: 63000, depositPp: DEPOSIT_PP,
  groupSize: 20, single: false,
  destination: 'Thailand', destinationHref: '/asia/thailand',
  chips: ['Flights from Delhi included', 'Departs 07 Dec 2026'],
  depositNote: 'Non-refundable deposit · balance due before you fly',
  departuresNote: 'Hold your seat for ₹5,000 per traveller. The rest of the trip price is due before you fly. Price is per person on twin or double sharing.',
  trust: ['Return flights Delhi to Bangkok included', 'Hi Tours Cares: 24/7 on-ground support', 'Secure payments by Razorpay'],
  itinSub: '5 days, 4 nights · every night’s hotel listed under its day',
  hero: { main: IMG.bay(1600), mainSm: IMG.bay(900), alt: 'Pattaya bay with speedboats and the city skyline' },
  gallery: [IMG.bay(1600), IMG.coral, IMG.goldenBuddha, IMG.marble, IMG.giraffe, IMG.beach, IMG.speedboats, IMG.watArun, IMG.skyline],
  intro: 'Fly from Delhi, spend two nights by the sea in Pattaya with a speedboat day to Coral Island, then two nights in Bangkok with a guided temple tour and a full day at Safari World. Flights, hotels, transfers and tours are all booked for you.',
  crumbs: [['Home', '/'], ['Asia', '/asia'], ['Thailand', '/asia/thailand'], ['Bangkok & Pattaya']],
  expert: { prefix: 'Planned by', name: 'Ananya', role: 'Thailand expert at Hi Tours', image: '/team/asia-2.webp', quote: 'Pattaya first for the island and the beach, then Bangkok for the temples and Safari World. It is the easiest first trip to Thailand.' },
  services: [
    ['5 days', 'Travel plan', '5 days · 4 nights'],
    ['Flights', 'Flights', 'Return flights from Delhi'],
    ['2 hotels', 'Accommodation', '2 nights Pattaya, 2 nights Bangkok'],
    ['5 experiences', 'Activities', '5 tours and shows included'],
    ['All transfers', 'Transport', 'Airport and city transfers'],
    ['24/7 support', '24/7 Support', '24/7 on-ground support'],
  ],
};

export const included = [
  ['Return economy flights Delhi to Bangkok', 'Flights'],
  ['2 nights at Grand Bella Hotel, Pattaya', 'Accommodation'],
  ['2 nights at Ramada by Wyndham D’MA Bangkok', 'Accommodation'],
  ['Twin or double sharing room', 'Accommodation'],
  ['Coral Island speedboat tour with tea, samosa and Indian lunch', 'Activities'],
  ['Alcazar cabaret show, standard seats', 'Activities'],
  ['Guided Golden Buddha and Marble Buddha temple tour, with Gems Gallery and King Power', 'Activities'],
  ['Safari World Bangkok day with hotel transfers', 'Activities'],
  ['Shared arrival transfer, airport to Pattaya hotel', 'Transport'],
  ['Pattaya to Bangkok transfer and private departure transfer to the airport', 'Transport'],
  ['24/7 on-ground support and Hi Tours Cares', '24/7 Support'],
];
export const notIncluded = [
  'Meals other than the Coral Island Indian lunch',
  'Water sports and parasailing on Coral Island',
  'Thailand visa or entry fees, if applicable',
  'Travel insurance',
  'Tips, the Open Zoo shuttle at Safari World and personal expenses',
  'Refundable hotel security deposit paid at check-in',
];

export const whyGroup = {
  h2: 'Why book this package?',
  sub: 'Flights, hotels and tours in one booking',
  items: [
    { icon: 'sparkles', h: 'Flights from Delhi included', t: 'Return flights to Bangkok are part of the price, so there is nothing else to book.' },
    { icon: 'users', h: 'Easy for families and friends', t: 'Island time, temples and Safari World, at a pace that suits all ages.' },
    { icon: 'leader', h: 'Every transfer arranged', t: 'From airport pick-up to the final drop, a driver is waiting at each step.' },
    { icon: 'wallet', h: 'Hold your seat for ₹5,000', t: 'Pay a small deposit now and the rest of the trip price before you fly.' },
  ],
};

export const hotels = {
  pattaya: { name: 'Grand Bella Hotel', city: 'Pattaya' },
  bangkok: { name: 'Ramada by Wyndham D’MA Bangkok', city: 'Bangkok' },
};

export const stops = [
  { key: 'pattaya', name: 'Pattaya', lat: 12.93, lon: 100.88 },
  { key: 'bangkok', name: 'Bangkok', lat: 13.75, lon: 100.5 },
];

// Simplified upper Gulf of Thailand (land outline) for the route map
export const map = {
  name: 'Bangkok and Pattaya', origin: [14.05, 99.85], scale: 400, viewBox: [0, 0, 580, 640], labelLeft: ['pattaya'], sea: { text: 'Gulf of Thailand', lat: 12.95, lon: 100.4 },
  coast: [
    [11.9, 99.3], [12.57, 99.96], [12.8, 99.97], [13.1, 100.0], [13.3, 99.98], [13.42, 100.02], [13.5, 100.28], [13.53, 100.6],
    [13.48, 100.75], [13.36, 100.98], [13.17, 100.93], [13.08, 100.88], [12.93, 100.87], [12.68, 100.88], [12.62, 101.0],
    [12.68, 101.28], [12.6, 101.6], [12.4, 102.2], [14.6, 102.2], [14.6, 99.3],
  ],
};

export const days = [
  { n: 1, title: 'Fly from Delhi, check in by the sea in Pattaya', stop: 'pattaya', meals: [],
    bullets: ['Overnight flight from Delhi lands at Bangkok Suvarnabhumi Airport', 'Shared transfer from the airport to your Pattaya hotel', 'Evening Alcazar cabaret show, one of Pattaya’s best-known shows'],
    image: IMG.beach },
  { n: 2, title: 'Speedboat to Coral Island, Indian lunch on the mainland', stop: 'pattaya', meals: ['L'],
    bullets: ['Hotel pick-up around 8:40am for the shared speedboat to Coral Island', 'Beach time with tea and samosa on the island', 'Indian lunch back on the mainland, return to the hotel by 1:30pm', 'Water sports are optional and paid on the spot'],
    image: IMG.speedboats },
  { n: 3, title: 'Golden Buddha and Marble Buddha on the way to Bangkok', stop: 'bangkok', meals: [],
    bullets: ['Check out by 9am for the transfer to Bangkok', 'Guided visit to the Golden Buddha and Marble Buddha temples', 'Stops at the Gems Gallery and King Power', 'Drop-off at your Bangkok hotel'],
    image: IMG.goldenBuddha },
  { n: 4, title: 'A full day at Safari World Bangkok', stop: 'bangkok', meals: [],
    bullets: ['Pick-up between 7:30 and 8:30am for Safari World', 'Drive through the Safari Park past giraffes, zebras and lions', 'Marine Park shows: dolphins, sea lions, orangutans and the cowboy stunt show', 'Return to the hotel around 3:30pm'],
    image: IMG.giraffe },
  { n: 5, title: 'Fly home to Delhi', stop: null, meals: [],
    bullets: ['Private transfer from your hotel to Suvarnabhumi Airport at 8am', 'Return flight to Delhi'],
    image: IMG.skyline },
];

export const faq = { h2: 'Bangkok & Pattaya FAQs', items: [
  { q: 'How does the ₹5,000 deposit work?', a: ['Hold your seat with a non-refundable deposit of ₹5,000 per traveller. The rest of the trip price is due before departure; we remind you on WhatsApp and by email.'] },
  { q: 'Are flights included?', a: ['Yes. Return economy flights between Delhi and Bangkok are included in the price of ₹63,000 per person on twin or double sharing.'] },
  { q: 'Are meals included?', a: ['The Coral Island tour includes tea, samosa and an Indian lunch. Other meals are not included, so you are free to eat wherever you like.'] },
  { q: 'Can children join the water sports on Coral Island?', a: ['Water sports are paid locally and are only open to adults and children taller than 120cm.'] },
  { q: 'How do pick-ups work on shared tours?', a: ['Shared pick-up times are confirmed the day before. Please wait in the hotel lobby 5 minutes early; drivers wait 5 minutes before moving to the next pick-up.'] },
  { q: 'How much luggage can I bring on transfers?', a: ['One suitcase and one handbag or laptop bag per person. Hand luggage should not weigh more than 7kg.'] },
  { q: 'Will this itinerary change?', a: ['Pick-up and tour times can change on the day with traffic and tour conditions. Hotels are subject to availability and may be replaced with a similar hotel.'] },
] };

export const steps = {
  h2: 'How booking works',
  items: [
    { h: 'Hold your seat', t: 'Choose the departure and pay a ₹5,000 non-refundable deposit per traveller. No account needed.' },
    { h: 'Your expert calls you', t: 'Within one working day we confirm passport names for your flights and answer every question.' },
    { h: 'Pay the balance, pack your bags', t: 'The rest of the trip price is due before you fly. We send a secure payment link and reminders on WhatsApp.' },
  ],
};

export const nextSteps = [
  { h: 'WhatsApp and email confirmation', t: 'Your seat-hold receipt and the day-by-day itinerary are on their way.' },
  { h: 'Your expert calls within one working day', t: 'To collect passport names for your flights and answer any questions.' },
  { h: 'Balance before you fly', t: 'We send a secure payment link and reminders before the due date.' },
];
