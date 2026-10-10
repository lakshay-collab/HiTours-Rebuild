// Short Bali Escape with Flights. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('blc7rv8lvishrrzjuxwmcwyxm2ev_1464182679_Bali-Bird-Park-42414.jpg'),
  img('xhm7apn2p4xf3utfjc38fhrs94cs_1470740091_maxresdefault.jpg'),
  img('p5qmu24btsi6rw9ye14yp9y3v9js_1464162732_things-to-do-in-bali-ubud-art-market.jpg'),
  img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Kintamani',
    dayLabel: 'Day 1 to 2',
    images: [
      img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
      img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
      img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
      img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg')
    ],
    dayImages: {
      1: [
        img('blc7rv8lvishrrzjuxwmcwyxm2ev_1464182679_Bali-Bird-Park-42414.jpg'),
        img('4qzfjlhp9rb7opyc8dzvjjpgi0cy_1470896048_9396103363_d354fd2bc4_b.jpg'),
        img('xhm7apn2p4xf3utfjc38fhrs94cs_1470740091_maxresdefault.jpg'),
        img('p5qmu24btsi6rw9ye14yp9y3v9js_1464162732_things-to-do-in-bali-ubud-art-market.jpg')
      ],
      2: [
        img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Flight to Bali and Ubud`,
      'Flight from Delhi to Denpasar, included in your package',
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your Ubud resort and settle in',
      'Rest of the day free among the rice fields',
      `${DAY_MARK}Day 2 · Kintamani and rice terraces`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'Tegenungan waterfall and the Tegalalang rice terraces',
      'A turn on the jungle swing above the valley'
    ],
    accommodation: {
      name: 'The Evitel Resort, Ubud',
      description: '2 nights · Breakfast · Standard room · 3★ · Pool resort a short ride from central Ubud',
      images: [
        img('ba9q6ilkkfrs17dwcd7t4o2jlnw7_544222a_hb_l_001.jpg'),
        img('kdtoufjopaqr4zlhjeg8sgddtqbp_3ef6bd82118e11e995270242ac110002.jpg'),
        img('suvlxn8iq0apcd2i9sbxw72wlwe8_201603100433021314-e06ffdfa118d11e9a8da0242ac110002.jpg'),
        img('k6kn79meafnlfq2hu9yiwrnke8c7_1186057af9f111e7b18a0a209fbd0127.png'),
        img('y3z6xu1i8k8trmq86e0v60yv39ge_243269626.jpg'),
        img('bhk91cj5w5706as6hvsx6q9t6ccx_201603100433021314-f6c1d676627511ee98960a58a9feac02.jpg'),
        img('c2myz7lwy2kv9qq69rpt5bmaw1us_90cf9df4118e11e9b1b60242ac110002.jpg'),
        img('um91jooaw2fczb8nb0uxe9t2fyha_201603100433021314-0dac89a0118911e9b1b60242ac110002.jpg'),
        img('qfg32dug40z3w3f7v89dnbc3zy4w_ba9e564af9f011e79bff02755708f0b3.jpg'),
        img('nn3tqco2723u9nll3muu4j2qi8fi_2%20(3).jpg')
      ]
    },
    activities: [
      {
        name: 'Kintamani and rice terrace day tour',
        day: 2,
        optional: false,
        image: img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        description: 'Coffee plantation tasting on the climb to Kintamani, the crater lake view, Tegenungan waterfall, the Tegalalang terraces and the jungle swing.'
      },
      {
        name: 'Ubud art market',
        day: 1,
        optional: true,
        image: img('p5qmu24btsi6rw9ye14yp9y3v9js_1464162732_things-to-do-in-bali-ubud-art-market.jpg'),
        description: 'Two floors of carvings, batik, woven bags and silver in the middle of town, quietest and cheapest when the stalls first open.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Two nights inland to open the trip, with a coffee plantation road up to Kintamani and the rice terraces at Tegalalang.',
      image: img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Bedugul and Uluwatu',
    dayLabel: 'Day 3 to 5',
    images: [
      img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
      img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg')
    ],
    dayImages: {
      3: [
        img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg'),
        img('e81e8w6ia95ocbac34rigtxfwddd_slide-8.jpg'),
        img('63rp5vt6fg9lnhd2bsolet8cpft3_ezgif-4-1fcf41f031.jpg'),
        img('zwzrpc8zhw3jl7ltwuqtrh8zmm8s_bali%20handara%20gate.jpg')
      ],
      4: [
        img('f6z8i3l0jqwujzqeosh56dgkj38a_padang-padang-beach-19-1440x960.jpg'),
        img('p0tyf5xa92nbblmla956dmfsaqrd_shutterstock_1453687076.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg')
      ],
      5: [
        img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
        img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
        img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Bedugul and on to Kuta`,
      'Breakfast and check out, then north to the Handara gate',
      'Ulun Danu Beratan, the temple standing on the lake',
      'Sunset at Tanah Lot, the sea temple on the rocks',
      'Check in at your Kuta hotel near the beach',
      `${DAY_MARK}Day 4 · Water sports and Uluwatu`,
      'Breakfast, then a morning at Tanjung Benoa beach',
      'Banana boat and jet ski with an instructor',
      'Padang Padang beach in its limestone cove',
      'Uluwatu temple on the cliffs at sunset',
      `${DAY_MARK}Day 5 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your return flight'
    ],
    accommodation: {
      name: 'Diamond Hotel Kuta, Kuta',
      description: '2 nights · Breakfast · Standard room · 3★ · Quiet pool hotel walking distance from Kuta beach',
      images: [
        img('5ihnxga92qbg7iqmv8ik6oys35vz_49470685.jpg'),
        img('sq3ofurpnwstttz9bycn3nq30fbb_49471816.jpg'),
        img('p0q6c55p4puivacdzd3u690etysf_49473349.jpg'),
        img('lqek785w4wrh79qs0xqqvbhgc7xu_49471119.jpg'),
        img('hhbgf084abvcvabmrgqjhhn5d1z9_49470684.jpg'),
        img('eob1zjyrkxkez3h8l4r3algq11rl_623498_14112616020023635311.webp'),
        img('mc4bbirb1icg3w6lj5wakmo7mt1s_351524004.jpg'),
        img('0mhdtv050y3jzq8mjpmzgqdtbkrw_49471168.jpg'),
        img('u4lo89bd5c9x0fyvdso13br8p4kl_219881817.jpg'),
        img('9mp8505jm8uoxxlt689wkwyfqajz_49471140.jpg'),
        img('ob6b5xggype0biytfjy25prvkdsm_351523960.jpg'),
        img('uncgyv1d6sbl13f30lozf41jb66w_219881736.jpg')
      ]
    },
    activities: [
      {
        name: 'Bedugul lakes and Tanah Lot sunset',
        day: 3,
        optional: false,
        image: img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg'),
        description: 'The Handara gate, the lake temple of Ulun Danu Beratan at Bedugul, then the sea temple of Tanah Lot as the sun goes down.'
      },
      {
        name: 'Water sports, Padang Padang and Uluwatu',
        day: 4,
        optional: false,
        image: img('f6z8i3l0jqwujzqeosh56dgkj38a_padang-padang-beach-19-1440x960.jpg'),
        description: 'Banana boat and jet ski at Tanjung Benoa, the cove at Padang Padang beach, then Uluwatu temple above the surf for sunset.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Two nights on the coast, reached by way of the Bedugul lakes, with water sports at Tanjung Benoa and the Uluwatu cliffs.',
      image: img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg')
    }
  }
];

const detail = {
  slug: 'short-bali-escape-with-flights',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Short Bali Escape with Flights',
  alt: 'Tanah Lot sea temple at sunset, Bali',
  days: '5 days / 4 nights',
  stations: '2 stops',
  transport: 'Return flights, private transfers and guided tours',
  tag: 'Short trips',
  tags: ['Short trips', 'Beach'],
  price: 71154,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Kintamani', 'Bedugul', 'Kuta', 'Uluwatu'],
  stats: { days: 5, cities: 2, hotels: 2, activities: 3, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['4 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Four nights, flights included, both sides of the island. This is the long weekend Bali that actually works.',
    quoteMore: 'With only four nights, keep the touring to one day in each base and fly out on an evening service so you still get a last morning by the pool. We will hold your bags after check out.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A five day Bali break with return flights: two nights in Ubud for Kintamani and the rice terraces, then two in Kuta by way of the Bedugul lake temples, with water sports and Uluwatu at sunset on the last full day.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: return flights from Delhi; 4 nights with daily breakfast; private airport and inter city transfers; Kintamani and rice terrace tour; Bedugul and Tanah Lot sunset tour; water sports with Padang Padang and Uluwatu.',
  intro2: 'Not included: Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Flight to Bali and Ubud (Arrival)', text: 'Flight from Delhi to Denpasar, included in your package\nArrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Ubud resort and settle in\nRest of the day free among the rice fields', hotel: 'The Evitel Resort, Ubud', highlights: ['Flight from Delhi to Denpasar, included in your package', 'Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Ubud resort and settle in'] },
    { title: 'Day 2: Kintamani and rice terraces (B)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nTegenungan waterfall and the Tegalalang rice terraces\nA turn on the jungle swing above the valley', hotel: 'The Evitel Resort, Ubud', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'Tegenungan waterfall and the Tegalalang rice terraces'] },
    { title: 'Day 3: Bedugul and on to Kuta (B)', text: 'Breakfast and check out, then north to the Handara gate\nUlun Danu Beratan, the temple standing on the lake\nSunset at Tanah Lot, the sea temple on the rocks\nCheck in at your Kuta hotel near the beach', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Breakfast and check out, then north to the Handara gate', 'Ulun Danu Beratan, the temple standing on the lake', 'Sunset at Tanah Lot, the sea temple on the rocks'] },
    { title: 'Day 4: Water sports and Uluwatu (B)', text: 'Breakfast, then a morning at Tanjung Benoa beach\nBanana boat and jet ski with an instructor\nPadang Padang beach in its limestone cove\nUluwatu temple on the cliffs at sunset', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Breakfast, then a morning at Tanjung Benoa beach', 'Banana boat and jet ski with an instructor', 'Padang Padang beach in its limestone cove'] },
    { title: 'Day 5: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your return flight', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your return flight'] }
  ],
  outro: 'Not included: Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const shortBaliEscapeFlightsBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const shortBaliEscapeFlightsProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Kintamani', 'Bedugul', 'Kuta', 'Uluwatu'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 3,
  transfers: 6,
  meals: 4,
  price: detail.price,
  images: cardImages
};
