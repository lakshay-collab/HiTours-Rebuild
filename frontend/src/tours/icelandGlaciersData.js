// Iceland Glaciers & Northern Lights – itinerary data for the EgyptDetail template.
// Source: iceland-glaciers-northern-lights upload. Images in /public/tours/iceland-glaciers.
const BASE = '/tours/iceland-glaciers';
const A = (f) => `${BASE}/activities/${f}`;
const HOT = (f) => `${BASE}/hotels/${f}`;
const HERO = (f) => `${BASE}/hero/${f}`;
const DEST = (f) => `${BASE}/destinations/${f}`;
const AUR = (f) => `${BASE}/aurora/${f}`;

const DAY_MARK = '__day__';

const aurora = [AUR('aurora-1.jpg'), AUR('aurora-2.jpg'), AUR('aurora-3.jpg'), AUR('aurora-4.jpg'), AUR('aurora-5.jpg')];

const reykjavikHotelImages = ['iceland-scenery-2.jpg', 'iceland-village.jpg', 'iceland-scenery-3.jpg'].map(HOT);
const akureyriHotelImages = [aurora[4], 'iceland-scenery-5.jpg', 'iceland-scenery-6.jpg', 'iceland-scenery-7.jpg'].map((f) => f.startsWith('/') ? f : HOT(f));

const gullfoss = A('gullfoss-waterfall.jpg');
const geysir = A('geysir-strokkur.jpg');
const thingvellir = [A('thingvellir-3.jpg'), A('thingvellir-1.jpg'), A('thingvellir-2.jpg'), A('tectonic-plates.jpg')];
const whales = [A('whale-watching-1.jpg'), A('whale-watching-2.jpg')];
const godafoss = A('godafoss-waterfall.png');
const myvatn = A('husavik.jpg');
const diamond = [A('iceland-landscape-1.jpg'), A('iceland-scenery-9.jpg'), A('iceland-scenery-10.jpg'), A('iceland-jj.jpg')];

const heroGallery = [aurora[0], HERO('iceland-landscape-1.jpg'), aurora[1], HERO('iceland-landscape-2.jpg'), HERO('iceland-landscape-4.jpg'), HERO('godafoss-waterfall.png'), aurora[3], HERO('husavik.jpg'), gullfoss, whales[0], thingvellir[0]];

const stops = [
  {
    letter: 'A',
    name: 'Reykjavík',
    dayLabel: 'Day 1–3',
    images: [DEST('iceland-scenery-1.jpg'), aurora[0], aurora[1], gullfoss, geysir, ...thingvellir, ...whales],
    dayImages: {
      1: [DEST('iceland-scenery-1.jpg'), aurora[0], A('iceland-scenery-4.jpg')],
      2: [gullfoss, geysir, ...thingvellir],
      3: [...whales, HERO('iceland-landscape-4.jpg')]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Welcome to Iceland — Settle In & Unwind`,
      'Private sedan transfer from Keflavík International Airport to Hotel Reykjavík Grand',
      'Check in, drop your bags and ease into the rhythm of the land of fire and ice',
      'Evening at leisure — wander to the old harbour or watch the sky for your first Northern Lights',
      'Optional: The Settlement Exhibition or Perlan Museum of Icelandic Natural Wonders',
      `${DAY_MARK}Day 2 · The Golden Circle — Tectonic Plates, Waterfalls & Geysers`,
      'Breakfast at Hotel Reykjavík Grand',
      'Shared coach pick-up for a full-day Golden Circle tour, returning in the evening',
      'Walk between two continents at Þingvellir National Park (UNESCO)',
      'Feel the spray of the two-tiered Gullfoss Waterfall',
      'Watch Strokkur erupt up to 30 metres at the Geysir geothermal area',
      `${DAY_MARK}Day 3 · Whales of the North Atlantic — Marine Safari`,
      'Breakfast at Hotel Reykjavík Grand',
      "Whale-watching cruise from Reykjavík's old harbour into the open North Atlantic",
      'Look out for breaching humpbacks and gliding minke whales',
      "Panoramic views of Reykjavík's coastline from the water"
    ],
    accommodation: {
      name: 'Hotel Reykjavík Grand — 3 nights',
      description: 'Standard room · 4★ · Breakfast · a modern Scandinavian-style hotel in the Laugardalur district with an on-site restaurant, bar and fitness centre.',
      images: reykjavikHotelImages
    },
    activities: [
      { name: 'Golden Circle tour (shared)', day: 2, optional: false, image: gullfoss, description: "Three of Iceland's most iconic natural wonders in one unforgettable loop — Þingvellir National Park's rift valley, the thundering Gullfoss Waterfall and the erupting Strokkur geyser." },
      { name: 'Þingvellir National Park', day: 2, optional: false, image: thingvellir[3], description: 'A UNESCO World Heritage Site where the North American and Eurasian tectonic plates drift apart, creating a dramatic rift valley you can literally walk through.' },
      { name: 'Reykjavík whale-watching cruise', day: 3, optional: false, image: whales[1], description: 'Sail into the North Atlantic aboard a sturdy vessel to spot humpback and minke whales, with panoramic views of the Reykjavík coastline as a bonus.' },
      { name: 'The Settlement Exhibition', day: 1, optional: true, image: A('iceland-scenery-4.jpg'), description: "Step back a thousand years into Reykjavík's Viking past — an underground museum built around the remains of a 10th-century longhouse." },
      { name: 'Perlan Museum of Icelandic Natural Wonders', day: 1, optional: true, image: A('iceland-scenery-6.jpg'), description: "Iceland's natural drama under one roof: interactive exhibits, a planetarium and a panoramic observation deck over the city." },
      { name: 'Northern Lights hunt', day: 1, optional: true, image: aurora[1], description: 'On clear autumn and winter nights, head away from the city glow to watch the aurora borealis ripple in curtains of green and violet across the Icelandic sky.' }
    ]
  },
  {
    letter: 'B',
    name: 'Akureyri',
    dayLabel: 'Day 4–7',
    images: [DEST('iceland-scenery-5.jpg'), aurora[2], godafoss, myvatn, aurora[4], ...diamond],
    dayImages: {
      4: [DEST('iceland-scenery-5.jpg'), A('iceland-scenery-8.jpg'), A('botanical-garden.jpg')],
      5: [godafoss, myvatn, ...diamond],
      6: [aurora[2], A('akureyri-church.jpg'), A('akureyri-art-museum.png')],
      7: [HERO('iceland-landscape-2.jpg'), DEST('iceland-scenery-5.jpg')]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Northward Bound — Fly to Akureyri`,
      'Breakfast and check-out; private sedan transfer to Reykjavík domestic airport',
      'Scenic 45-minute Icelandair flight to Akureyri (15:30–16:15)',
      'Private sedan transfer from Akureyri Airport to Hotel Kjarnalundur',
      "Afternoon at leisure — stroll the Old Town's wooden houses or visit the Akureyri Botanical Garden",
      `${DAY_MARK}Day 5 · The Diamond Circle — Waterfalls, Glacier Lagoons & Volcanic Wonders`,
      'Breakfast at the hotel',
      'Shared coach to the Hof Cultural Centre to join your guided Diamond Circle tour',
      "Dettifoss — Europe's most powerful waterfall — and the legendary Goðafoss",
      'Lake Mývatn craters, Námaskarð geothermal area and Ásbyrgi Canyon',
      'Jökulsárlón icebergs and the whale-watching town of Húsavík',
      `${DAY_MARK}Day 6 · Akureyri at Your Own Pace — Art, Architecture & Arctic Charm`,
      'Breakfast at the hotel',
      "Free day to soak in the quiet magic of Iceland's northern capital",
      "Optional: St. Peter's Catholic Church and the Akureyri Art Museum",
      `${DAY_MARK}Day 7 · Farewell, Iceland — Journey Home`,
      'Final breakfast at the hotel',
      'Private sedan transfer to Akureyri Airport for your onward flight'
    ],
    accommodation: {
      name: 'Hotel Kjarnalundur, Akureyri — 3 nights',
      description: 'Standard room · 3★ · Breakfast · a welcoming hotel in the Kjarnaskógur woodland, 3.5 km from downtown, with hot tubs, an infra-red sauna and dark skies for the Northern Lights.',
      images: akureyriHotelImages
    },
    activities: [
      { name: 'Diamond Circle day trip (shared)', day: 5, optional: false, image: godafoss, description: "The north's answer to the Golden Circle — seven natural wonders in one epic day: Dettifoss, Jökulsárlón, Goðafoss, Lake Mývatn, Námaskarð, Ásbyrgi Canyon and Húsavík." },
      { name: 'Lake Mývatn & Námaskarð', day: 5, optional: false, image: myvatn, description: 'A surreal landscape of volcanic pseudocraters, mirror-calm waters, bubbling mud pools and hissing steam vents painted in sulphur yellows and rust reds.' },
      { name: 'The Old Town, Akureyri', day: 4, optional: true, image: A('iceland-scenery-8.jpg'), description: 'A picturesque quarter of brightly painted wooden houses that tell the story of this northern capital — perfect for a hand-in-hand afternoon stroll.' },
      { name: 'Akureyri Botanical Garden', day: 4, optional: true, image: A('botanical-garden.jpg'), description: 'A surprising oasis of green at the edge of the Arctic Circle, home to thousands of plant species from Iceland and around the world.' },
      { name: "St. Peter's Catholic Church", day: 6, optional: true, image: A('akureyri-church.jpg'), description: 'A serene little wooden church with elegant architecture and a peaceful atmosphere — a lovely spot for a quiet moment together.' },
      { name: 'Akureyri Art Museum', day: 6, optional: true, image: A('akureyri-art-museum.png'), description: 'Contemporary Icelandic art in an intimate setting — a wonderful way to connect with the creative spirit of the north.' },
      { name: 'Aurora over the Arctic north', day: 6, optional: true, image: aurora[2], description: "Hotel Kjarnalundur sits under some of Iceland's darkest skies — step outside on a clear night and watch the Northern Lights dance over the Kjarnaskógur woodland." }
    ]
  }
];

const incl = 'Included: Private airport transfer from Keflavík International Airport to your Reykjavík hotel; 3 nights at Hotel Reykjavík Grand with daily breakfast; guided Golden Circle tour (shared); Reykjavík whale-watching cruise; private transfer to Reykjavík domestic airport; internal flight Reykjavík → Akureyri; private transfer from Akureyri Airport to your hotel; 3 nights at Hotel Kjarnalundur with daily breakfast; guided Diamond Circle day trip (shared); private transfer from your Akureyri hotel to the airport; visa assistance.';
const excl = 'Not included: International flights to and from Iceland; lunch and dinner unless mentioned; travel insurance; personal expenses such as laundry, phone calls and tips; anything not listed under “Included”.';

const glanceDays = [
  { title: 'Day 1: Welcome to Iceland — Settle In & Unwind (Arrival)', hotel: 'Hotel Reykjavík Grand', steps: ['Private sedan transfer from Keflavík Airport to your hotel', 'Check in and ease into the land of fire and ice', 'Evening at leisure — old harbour stroll or Northern Lights watch'] },
  { title: 'Day 2: The Golden Circle — Tectonic Plates, Waterfalls & Geysers (B)', hotel: 'Hotel Reykjavík Grand', steps: ['Breakfast at the hotel', 'Full-day shared Golden Circle tour', 'Þingvellir National Park, Gullfoss Waterfall and Strokkur geyser'] },
  { title: 'Day 3: Whales of the North Atlantic — Marine Safari (B)', hotel: 'Hotel Reykjavík Grand', steps: ['Breakfast at the hotel', "Whale-watching cruise from Reykjavík's old harbour", 'Humpback and minke whales, coastline views'] },
  { title: 'Day 4: Northward Bound — Fly to Akureyri (B)', hotel: 'Hotel Kjarnalundur, Akureyri', steps: ['Private transfer to Reykjavík domestic airport', '45-minute Icelandair flight to Akureyri', 'Private transfer to your hotel; afternoon at leisure'] },
  { title: 'Day 5: The Diamond Circle — Waterfalls, Glacier Lagoons & Volcanic Wonders (B)', hotel: 'Hotel Kjarnalundur, Akureyri', steps: ['Breakfast at the hotel', 'Guided Diamond Circle day trip (shared)', 'Dettifoss, Goðafoss, Lake Mývatn, Námaskarð, Ásbyrgi and Húsavík'] },
  { title: 'Day 6: Akureyri at Your Own Pace — Art, Architecture & Arctic Charm (B)', hotel: 'Hotel Kjarnalundur, Akureyri', steps: ['Breakfast at the hotel', 'Free day in Akureyri', "Optional: St. Peter's Church and the Art Museum"] },
  { title: 'Day 7: Farewell, Iceland — Journey Home (B)', hotel: 'Departure', steps: ['Final breakfast at the hotel', 'Private sedan transfer to Akureyri Airport'] }
];

export const detail = {
  slug: 'iceland-glaciers-northern-lights',
  region: 'asia',
  ctaHref: '/l/iceland/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan – no obligation & tailor-made',
  banner: 'Worry-free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Iceland Glaciers & Northern Lights',
  alt: 'Gullfoss Waterfall, whales and glacier lagoons in Iceland',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Internal flight, private transfers & guided tours',
  tag: 'Adventure',
  tags: ['Adventure', 'Nature', 'Honeymoon'],
  price: 202130,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Reykjavík', 'Golden Circle', 'Akureyri', 'Diamond Circle', 'Húsavík'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 9, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['9 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['6 breakfasts', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Internal flight', 'Customise', 'Reykjavík → Akureyri included']
  ],
  expert: {
    name: 'Gurpreet',
    image: '/experts/gurpreet.webp',
    role: 'Iceland & Nordic Europe expert at Hi Tours',
    createdBy: 'Trip created by',
    more: 'Read more',
    less: 'Read less',
    quote: 'From the steam of geothermal geysers to the silence of glacial lagoons — Iceland is where nature puts on its grandest show, and you get front-row seats.',
    quoteMore: "Two legendary landscapes in one journey — Reykjavík's Golden Circle and whale watching, then north to Akureyri for the Diamond Circle with Europe's most powerful waterfall, glacier lagoons and volcanic wonders."
  }
};

export const route = { stops };

export const glance = {
  h2: 'Tour summary',
  short: "Reykjavík's Golden Circle and whale-watching adventures, a scenic internal flight north, then Akureyri's spectacular Diamond Circle — Dettifoss, Goðafoss, Lake Mývatn and glacier lagoons — 7 days, 2 cities, one land of fire and ice.",
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: incl,
  intro2: excl,
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: glanceDays.map((d) => ({ title: d.title, text: d.steps.join('\n'), hotel: d.hotel, highlights: d.steps.slice(0, 3) })),
  outro: excl
};

export const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '#' },
  { label: 'Iceland', href: '/europe/iceland' },
  { label: detail.title }
];

export const icelandGlaciersBySlug = {
  [detail.slug]: { detail, route, glance, crumbs }
};
