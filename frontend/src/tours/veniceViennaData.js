// Venice Gondolas & Vienna Palaces – itinerary data for the EgyptDetail template.
// Source: venice-gondolas-vienna-palaces upload. Images in /public/tours/venice-vienna.
const BASE = '/tours/venice-vienna';
const A = (f) => `${BASE}/activities/${f}`;
const HOT = (f) => `${BASE}/hotels/${f}`;
const HERO = (f) => `${BASE}/hero/${f}`;

const DAY_MARK = '__day__';

const veniceHotelImages = [
  '5e7h0o346agptxea8myp94osn89u_71415619.jpg',
  'ptleiahpagox3y8ck5tw7yi6imc5_71415567.jpg',
  'm36ses3wm797u85qcf3dgqk7mz7l_71416552.jpg',
  'f7sd333wa3ll2kxp4mbistlvqrep_71414591.jpg',
  'xcx7q0fy0bbuqny361oolvrhurp5_71416858.jpg',
  '3cal1ou533c6ehajaiy5pjsr8y5u_71417997.jpg',
  'gl35hibwqww5xn8cxbyd8qgakcoi_71414479.jpg',
  'b0u9liy9loyawmt8ex7f3mqcmazl_71416858_1.jpg',
  '71jn8vdahwcsmmq5m4llhys89dxf_71417533.jpg',
  'wb5tv6qoi581ldnb8nwx5ynxy6qj_71416025.jpg',
  'nllxtmly00y28f6lkxy4wquzngj8_71413715.jpg'
].map(HOT);

const viennaHotelImages = [
  'n34faxhrl7dlb9ns0bpl9cnpxdt7_ibis_Wien_Mariahilf-Wien-Aussenansicht-6-1533.jpg',
  '0q7sukiyc7tctph55vgnc3dy8iml_251698544.jpg',
  'puo0rjub086dmkl7xkh9w4x30ryq_251698557.jpg',
  'uxqn7rp9omlfmbbnaxlghbrioep6_307788204.jpg',
  '5bbjs6hgl3kq2lpacz2keoqydwwy_ec97882c-aef3-4a4e-943a-935b9608.jpg',
  's7wr386se1u4ddeez98sv0ikkfbc_307788203.jpg',
  'hq4d438iysvzo72589nlwbe8y6kj_407816388.jpg',
  'qqixv2r0az8m23dsidfx2sdd9h9v_251698545.jpg',
  '8fnjek7r7pl8s5aygjuq9kaaa5le_2fb66b5ce32011ed9da90a58a9feac02.jpg',
  '5d3b4nk0xil0u9g5waz8rgato5fr_251698560.jpg',
  '8mzgbl0x9v0emmrl7mufy8uihtwp_251698559.jpg',
  'o71cjie0qfqlmqygx4q88ucqt9va_304349617.jpg',
  'aj22dfdwffbyz7fmcqjgwve84wl3_291249324.jpg'
].map(HOT);

const gondola = '8fi8f5zop2dd252ma5ptsrffj3d6_shutterstock_1167210457.jpg';
const islands = '1pajms4x72c43wlw6w4qiyrgdq5d_shutterstock_1149797750.jpg';
const shopping = '2io7p70kuadqlkjfxfybxng5653t_the-new-square-of-the.jpg';
const burano = 'taillqmaqsp2kfxgqc8qg1exdmni_1586601617_Burano.jpg';
const hopon = 'n6iu80arwuguwpsywbhzmt3pepd0_1582613470_vienna_hop5.png';
const schonbrunn = '4v2vc0ylt47nvs2v3jhrvmz4i1a6_7xm.xyz257832.jpg';
const bratislava = '65k3lbxuhypjrtn8eps54bxdhhws_1582612545_Bratislava4_kl.jpg';
const veniceHero = 'cm5hygfhvhvxl41jjnawgxhhxyln_shutterstock_1450254959.jpg';
const museum = 'xvqf0ccmsdksd8d0b2yqxg5o8oat_Kunsthistorisches_Museum_Wien.jpg';

const heroGallery = [
  HERO(veniceHero),
  A(gondola),
  HERO(burano),
  HERO(schonbrunn),
  HERO(bratislava),
  A(islands),
  A(hopon),
  A(museum)
];

const veniceStopImages = [
  HERO(veniceHero),
  A(gondola),
  A(islands),
  HERO(burano),
  A('c26oghglxak7h94gua0nxcraxs4w_free-photo-of-view-of-tourists-and-a-man-on-a-gondola-on-cana.jpeg'),
  A(shopping),
  A('92bo5ko8og2pvbjt3x138wyom0zn_take-a-picture-on-our.jpg')
];

const viennaStopImages = [
  A(schonbrunn),
  A(hopon),
  A(museum),
  A(bratislava),
  A('6iqlthcwwmz2jmv44r8mknj2a2jo_Strauss_Monument.jpg'),
  A('eb9as0l1vzrhv8ye99npz5v2wkg9_Sigmund_Freud_Museum.jpg'),
  A('vbpytqgskf615bvzw5gzuqffosnh_1582612544_Bratislava1_kl.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Venice',
    dayLabel: 'Day 1–3',
    images: veniceStopImages,
    bullets: [
      `${DAY_MARK}Day 1 · Welcome to the Floating City`,
      'Land at Venice airport and enjoy a comfortable private sedan transfer to your hotel',
      'Check into your cosy Venetian hotel and unwind after your journey',
      'Evening at leisure — explore the Jewish Museum, Teatro La Fenice, or Scuola Grande di San Rocco',
      `${DAY_MARK}Day 2 · Luxury Shopping at Noventa di Piave`,
      'Savour a leisurely breakfast at your hotel',
      'Shuttle transfer to Lido di Jesolo for a full day of designer shopping',
      '150+ designer stores at Noventa di Piave Designer Outlet — up to 70% off',
      'Comfortable shuttle transfer back to your hotel in Venice',
      `${DAY_MARK}Day 3 · Gondola Romance & Colourful Islands`,
      'Breakfast at your hotel',
      'Glide through the Grand Canal on a classic Venetian gondola',
      'Shared boat tour to Murano, Burano & Torcello — glass-blowing, colourful houses and ancient history',
      'Return to your hotel for a restful overnight stay'
    ],
    accommodation: {
      name: 'Ca San Polo, Venice — 3 nights',
      description: 'Deluxe · 3★ · Continental breakfast · a charming canal-side guesthouse in the heart of San Polo, steps from the Grand Canal and Rialto Bridge.',
      images: veniceHotelImages
    },
    activities: [
      { name: 'Grand Canal gondola ride', optional: false, image: A(gondola), description: "Drift through Venice's iconic waterway on a traditional gondola, passing the Peggy Guggenheim Collection, La Fenice theatre, Saint Mark's Basin and San Giorgio Island." },
      { name: 'Murano, Burano & Torcello island boat tour', optional: false, image: A(islands), description: "A full-day shared boat tour to three magical islands — Murano's glass-making heritage, Burano's famously colourful houses and lace museum, and Torcello's ancient Venetian roots." },
      { name: 'Noventa di Piave Designer Outlet', optional: false, image: A(shopping), description: 'A premium open-air shopping village with over 150 luxury boutiques offering fashion, accessories and homeware at discounts of up to 70% off retail.' }
    ]
  },
  {
    letter: 'B',
    name: 'Vienna',
    dayLabel: 'Day 4–8',
    images: viennaStopImages,
    bullets: [
      `${DAY_MARK}Day 4 · Scenic Journey to the City of Music`,
      'Breakfast and check-out from your Venice hotel',
      'Board a scenic shared train from Venice to Vienna — soak in the alpine views',
      'Arrive in Vienna, check into your hotel and unwind',
      'Evening at leisure — National Theater, Austrian National Library or Vienna Zoo',
      `${DAY_MARK}Day 5 · Hop-On Hop-Off Vienna Discovery`,
      'Breakfast at the hotel',
      '24-hour hop-on hop-off bus pass across Vienna',
      'State Opera, Hofburg Palace, Burgtheater, Freud Museum, Votiv Church, Strauss Monument, Kunsthistorisches Museum and more at your own pace',
      `${DAY_MARK}Day 6 · Imperial Splendour at Schönbrunn Palace`,
      'Breakfast at the hotel',
      "Skip-the-line tour of Schönbrunn Palace — Grand Gallery, Emperor's Apartments and Habsburg history",
      'Stroll the magnificent palace gardens — flower beds, fountains and Roman ruins',
      `${DAY_MARK}Day 7 · Bratislava by Bus & Boat`,
      'Breakfast at the hotel',
      'Travel by bus along the Danube to Bratislava, Slovakia',
      "Old Town, National Theatre, Maximilian Fountain, St. Martin's Cathedral and Michael's Gate",
      'Cruise back to Vienna by boat along the scenic Danube',
      `${DAY_MARK}Day 8 · Departure`,
      'Final breakfast at your hotel',
      'Private sedan transfer to Vienna International Airport for your onward flight'
    ],
    accommodation: {
      name: 'ibis Wien Mariahilf, Vienna — 4 nights',
      description: "Deluxe · 3★ · Continental breakfast · a modern, comfortable hotel on Vienna's vibrant Mariahilfer Street with easy access to all major attractions.",
      images: viennaHotelImages
    },
    activities: [
      { name: 'Vienna hop-on hop-off bus tour (24-hour)', optional: false, image: A(hopon), description: "A flexible 24-hour sightseeing pass covering Vienna's most iconic landmarks — State Opera, Hofburg Palace, Burgtheater, Freud Museum, Votiv Church, Strauss Monument and the Kunsthistorisches Museum." },
      { name: 'Schönbrunn Palace & Gardens skip-the-line tour', optional: false, image: A(schonbrunn), description: "Walk straight past the queues into Vienna's grandest imperial palace. Explore lavish interiors including the Grand Gallery and Emperor's Apartments, then wander stunning gardens with fountains and Roman ruins." },
      { name: 'Bratislava day trip (bus & boat)', optional: false, image: A(bratislava), description: "A cross-border adventure to Slovakia's capital — travel by bus along the Danube, explore Bratislava's historic Old Town and landmarks, then cruise back to Vienna by boat with stunning river views." }
    ]
  }
];

const incl = 'Included: Private sedan transfer from Venice airport to your hotel; 3 nights in Venice with daily breakfast; luxury shopping day at Noventa di Piave Designer Outlet; classic Grand Canal gondola ride; full-day Murano, Burano & Torcello island boat tour; 4 nights in Vienna with daily breakfast; 24-hour Vienna hop-on hop-off bus tour; skip-the-line Schönbrunn Palace & Gardens tour; Bratislava day trip from Vienna (bus & boat); private sedan transfer from your Vienna hotel to the airport; visa assistance.';
const excl = 'Not included: International flights; lunch and dinner unless mentioned; travel insurance; personal expenses such as laundry, phone calls and tips; anything not listed under “Included”.';

const glanceDays = [
  { title: 'Day 1: Welcome to the Floating City (Arrival)', hotel: 'Ca San Polo, Venice', steps: ['Private sedan transfer from Venice airport to your hotel', 'Check in and unwind after your journey', 'Evening at leisure — Jewish Museum, Teatro La Fenice or Scuola Grande di San Rocco'] },
  { title: 'Day 2: Luxury Shopping at Noventa di Piave (B)', hotel: 'Ca San Polo, Venice', steps: ['Leisurely breakfast at your hotel', 'Shuttle transfer to Lido di Jesolo', 'Full day of designer shopping — 150+ stores, up to 70% off', 'Shuttle transfer back to Venice'] },
  { title: 'Day 3: Gondola Romance & the Colourful Islands (B)', hotel: 'Ca San Polo, Venice', steps: ['Breakfast at your hotel', 'Classic Grand Canal gondola ride', 'Shared boat tour to Murano, Burano & Torcello', 'Overnight in Venice'] },
  { title: 'Day 4: The Scenic Journey to the City of Music (B)', hotel: 'ibis Wien Mariahilf, Vienna', steps: ['Breakfast and check-out in Venice', 'Scenic shared train from Venice to Vienna', 'Arrive in Vienna and check in', 'Evening at leisure — National Theater, National Library or Vienna Zoo'] },
  { title: 'Day 5: Hop-On Hop-Off Vienna Discovery (B)', hotel: 'ibis Wien Mariahilf, Vienna', steps: ['Breakfast at the hotel', '24-hour hop-on hop-off bus pass', 'State Opera, Hofburg, Burgtheater, Freud Museum, Votiv Church, Strauss Monument & Kunsthistorisches Museum'] },
  { title: 'Day 6: Imperial Splendour at Schönbrunn Palace (B)', hotel: 'ibis Wien Mariahilf, Vienna', steps: ['Breakfast at the hotel', 'Skip-the-line Schönbrunn Palace tour', 'Stroll the palace gardens — fountains and Roman ruins'] },
  { title: 'Day 7: Bratislava — A Cross-Border Adventure (B)', hotel: 'ibis Wien Mariahilf, Vienna', steps: ['Breakfast at the hotel', 'Bus along the Danube to Bratislava', "Old Town, National Theatre, St. Martin's Cathedral and Michael's Gate", 'Boat cruise back to Vienna'] },
  { title: 'Day 8: Departure (B)', hotel: 'Departure', steps: ['Final breakfast at your hotel', 'Private sedan transfer to Vienna International Airport'] }
];

export const detail = {
  slug: 'venice-gondolas-vienna-palaces',
  region: 'asia',
  ctaHref: '/l/italy/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan – no obligation & tailor-made',
  banner: 'Worry-free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Venice Gondolas & Vienna Palaces',
  alt: 'Venice canal with gondolas and Vienna palaces',
  days: '8 days / 7 nights',
  stations: '2 stops',
  transport: 'Train, transfers & guided experiences',
  tag: 'Culture',
  tags: ['Culture', 'Honeymoon', 'Family'],
  price: 148390,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Venice', 'Murano', 'Burano', 'Torcello', 'Vienna', 'Bratislava'],
  stats: { days: 8, cities: 2, hotels: 2, activities: 6, transfers: 5 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['5 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Visa assistance', 'Customise', 'Visa assistance included']
  ],
  expert: {
    name: 'Giulia',
    image: '/experts/riya.webp',
    role: 'Europe Specialist at Hi Tours',
    createdBy: 'Trip created by',
    more: 'Read more',
    less: 'Read less',
    quote: "Drift through Venice's shimmering canals on a gondola, wander islands painted in every colour imaginable, then step into Vienna's imperial world of palaces and music.",
    quoteMore: 'Two countries, one unforgettable journey — 8 days / 7 nights with hand-picked hotels, private transfers and skip-the-line experiences.'
  }
};

export const route = { stops };

export const glance = {
  h2: 'Tour summary',
  short: "Venice's romantic gondola rides and colourful island adventures, then Vienna's imperial palaces, hop-on hop-off sightseeing and a scenic day trip to Bratislava by bus and boat — 8 days, 2 cities, 2 countries, one unforgettable European escape.",
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
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Europe', href: '#' },
  { label: 'Italy', href: '/europa/italy' },
  { label: detail.title }
];

export const veniceViennaBySlug = {
  [detail.slug]: { detail, route, glance, crumbs }
};
