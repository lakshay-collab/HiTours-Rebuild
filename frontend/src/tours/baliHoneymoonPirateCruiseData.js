// Bali Honeymoon with Pirate Dinner Cruise. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
  img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
  img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG'),
  img('inmyi8xx1sbyfrozppimmryvz6db_sekumpul.jpg'),
  img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Kintamani',
    dayLabel: 'Day 1 to 2',
    images: [
      img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
      img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
      img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
      img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg')
    ],
    dayImages: {
      1: [
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG'),
        img('inmyi8xx1sbyfrozppimmryvz6db_sekumpul.jpg'),
        img('p5qmu24btsi6rw9ye14yp9y3v9js_1464162732_things-to-do-in-bali-ubud-art-market.jpg'),
        img('blc7rv8lvishrrzjuxwmcwyxm2ev_1464182679_Bali-Bird-Park-42414.jpg')
      ],
      2: [
        img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Ubud`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your Ubud resort and settle in',
      'First evening free among the rice fields',
      'Optional: the art market, Goa Gajah or the bird park',
      `${DAY_MARK}Day 2 · Kintamani and the jungle swing`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'Tegenungan waterfall and the Tegalalang rice terraces',
      'A turn on the jungle swing, with lunch included'
    ],
    accommodation: {
      name: 'Bakung Ubud Resort & Villa, Ubud',
      description: '2 nights · Breakfast · Standard room · 3★ · Garden resort a short walk from the Ubud market',
      images: [
        img('q6zgelz98v5kbftom1frp3ue32g1_173822791.jpg'),
        img('iz5cujufuwfqtntxg636u4gy8tuv_173822761.jpg'),
        img('hcvkzwnjgr94hwetf4dl0oket9t9_173822678.jpg'),
        img('upfjfdwka8me9tpttnoucqns6bhl_173822709.jpg'),
        img('5w92c9d49j3xgci27zz4ci5v9hju_173822673.jpg'),
        img('x2gjvzwlcxzxepv8oj66z4kya8rw_173822721.jpg'),
        img('6dmfjxqmk42rm2yuboamz9edv1rt_173822779.jpg'),
        img('j9qn1ykahshgxluwm6zed5j4fgo4_173825040.jpg'),
        img('980vtfp7zvo1jb1y0sf4g6sro4k1_59584268.jpg'),
        img('6gdmnd7cj4egkuk7hgepou1we1bo_173866707.jpg'),
        img('nbus5yxsh83tm8tz0qt283avv8ua_173822675.jpg'),
        img('uhhu92jn9usu53pjc2llrkm2vqqp_173822684.jpg'),
        img('z32dunr9mw486f91h5balma9mvei_173867651.jpg'),
        img('tch6q3pwlyue02esd15qrl2hew08_173867130.jpg'),
        img('hii71e6wq2ldnjskkz8cw4luo0z2_173822763.jpg'),
        img('sqyres45da5veqed7cte9x086102_173822785.jpg')
      ]
    },
    activities: [
      {
        name: 'Kintamani with the jungle swing',
        day: 2,
        optional: false,
        image: img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        description: 'Coffee plantation tasting on the climb to Kintamani, the crater lake view, Tegenungan waterfall, the Tegalalang terraces and the jungle swing, with lunch included.'
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
      description: 'Two nights inland to start, with a coffee plantation road up to Kintamani, a waterfall stop and the rice terraces at Tegalalang.',
      image: img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Tanjung Benoa and Nusa Penida',
    dayLabel: 'Day 3 to 6',
    images: [
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
      img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
    ],
    dayImages: {
      3: [
        img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        img('6u10mdhy3dcpjb8pctpthpoe4f0a_pandawa-beach-mikebali-001.jpg'),
        img('neznowe35mxcnjj84559i40ojhl7_1628342893_f98dbd26-1189-4c22-9e39-d8b3054eabdd.jpeg.jpg'),
        img('6dn215ssrisvwxp9ulwbfh7h0i1s_night-markets-phuket-thailand.jpg')
      ],
      4: [
        img('8fxiq3ylca4s23b30qr5g48e5cxf_Bali%20Cruise-3.jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
        img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg')
      ],
      5: [
        img('g4aium5gj1oi4lbxfz1v2dgb2qp0_shutterstock_2427199549%20(1).jpg'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('raz6i8qsplkduo2ddqpr2tqbahzi_download%20(11).jpg')
      ],
      6: [
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
        img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
        img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Spa day and on to Kuta`,
      'Breakfast and check out, then private transfer to Kuta',
      'Check in and a traditional Balinese massage for two',
      'Afternoon free near the beach',
      'Dinner at the hotel is included tonight',
      `${DAY_MARK}Day 4 · Water sports and pirate cruise`,
      'Breakfast, then a morning at Tanjung Benoa beach',
      'Banana boat, jet ski and parasailing with an instructor',
      'Evening pirate ship cruise with dinner and a deck show',
      'Back at the hotel late in the evening',
      `${DAY_MARK}Day 5 · Nusa Penida and four beaches`,
      'Early breakfast, then private transfer to Sanur harbour',
      'Speedboat across to Nusa Penida for the west coast',
      'Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach',
      'Return boat to Bali and dinner at the hotel',
      `${DAY_MARK}Day 6 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Diamond Hotel Kuta, Kuta',
      description: '3 nights · Breakfast and one main meal daily · Standard room · 3★ · Quiet pool hotel walking distance from Kuta beach',
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
        name: 'Balinese massage for two',
        day: 3,
        optional: false,
        image: img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        description: 'A traditional Balinese massage for both of you on your first afternoon in Kuta, warm oil and long pressure strokes at a private spa.'
      },
      {
        name: 'Water sports with the pirate dinner cruise',
        day: 4,
        optional: false,
        image: img('8fxiq3ylca4s23b30qr5g48e5cxf_Bali%20Cruise-3.jpg'),
        description: 'Banana boat, jet ski and parasailing at Tanjung Benoa by day, then the pirate ship cruise in the evening with dinner and a deck show.'
      },
      {
        name: 'Nusa Penida west coast by speedboat',
        day: 5,
        optional: false,
        image: img('g4aium5gj1oi4lbxfz1v2dgb2qp0_shutterstock_2427199549%20(1).jpg'),
        description: 'Speedboat across to Nusa Penida for Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach, the island\'s four best known stops.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights on the coast with a couples massage, water sports at Tanjung Benoa, a pirate ship dinner cruise and a full day on Nusa Penida.',
      image: img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
    }
  }
];

const detail = {
  slug: 'bali-honeymoon-with-pirate-dinner-cruise',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bali Honeymoon with Pirate Dinner Cruise',
  alt: 'Boats at Tanjung Benoa beach in south Bali',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Beach'],
  price: 33012,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Kintamani', 'Kuta', 'Tanjung Benoa', 'Nusa Penida'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 4, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'This is the best value honeymoon we sell. Meals are covered in Kuta, so your spending money goes on the fun.',
    quoteMore: 'The pirate cruise is a loud, cheerful evening rather than a romantic one, so we usually put it before the Nusa Penida day and keep your last night free for dinner on the beach.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days for two with meals largely covered: two nights in Ubud for Kintamani and the rice terraces, then three in Kuta with a couples massage, water sports at Tanjung Benoa, a pirate ship dinner cruise and a day on Nusa Penida.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights with daily breakfast; breakfast and one main meal daily in Kuta; private airport and inter city transfers; Kintamani and jungle swing tour with lunch; Balinese massage for two; water sports with the pirate dinner cruise; Nusa Penida west coast tour; visa assistance.',
  intro2: 'Not included: international flights; Indonesia visa fees; meals beyond those stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Ubud (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Ubud resort and settle in\nFirst evening free among the rice fields\nOptional: the art market, Goa Gajah or the bird park', hotel: 'Bakung Ubud Resort & Villa, Ubud', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Ubud resort and settle in', 'First evening free among the rice fields'] },
    { title: 'Day 2: Kintamani and the jungle swing (B, L)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nTegenungan waterfall and the Tegalalang rice terraces\nA turn on the jungle swing, with lunch included', hotel: 'Bakung Ubud Resort & Villa, Ubud', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'Tegenungan waterfall and the Tegalalang rice terraces'] },
    { title: 'Day 3: Spa day and on to Kuta (B, D)', text: 'Breakfast and check out, then private transfer to Kuta\nCheck in and a traditional Balinese massage for two\nAfternoon free near the beach\nDinner at the hotel is included tonight', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Breakfast and check out, then private transfer to Kuta', 'Check in and a traditional Balinese massage for two', 'Afternoon free near the beach'] },
    { title: 'Day 4: Water sports and pirate cruise (B, D)', text: 'Breakfast, then a morning at Tanjung Benoa beach\nBanana boat, jet ski and parasailing with an instructor\nEvening pirate ship cruise with dinner and a deck show\nBack at the hotel late in the evening', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Breakfast, then a morning at Tanjung Benoa beach', 'Banana boat, jet ski and parasailing with an instructor', 'Evening pirate ship cruise with dinner and a deck show'] },
    { title: 'Day 5: Nusa Penida and four beaches (B, D)', text: 'Early breakfast, then private transfer to Sanur harbour\nSpeedboat across to Nusa Penida for the west coast\nKelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach\nReturn boat to Bali and dinner at the hotel', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Early breakfast, then private transfer to Sanur harbour', 'Speedboat across to Nusa Penida for the west coast', 'Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach'] },
    { title: 'Day 6: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; meals beyond those stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bali', href: '/asia/bali' },
  { label: detail.title }
];

export const baliHoneymoonPirateCruiseBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const baliHoneymoonPirateCruiseProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Kintamani', 'Kuta', 'Tanjung Benoa', 'Nusa Penida'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 4,
  transfers: 10,
  meals: 9,
  price: detail.price,
  images: cardImages
};
