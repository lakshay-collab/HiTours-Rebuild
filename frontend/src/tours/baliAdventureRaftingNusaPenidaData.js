// Bali Adventure with Rafting and Nusa Penida. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
  img('qc1yophslknxmsjuxv7tdovh1r3t_Monkey%20Forest,%20Ubud.jpg'),
  img('rvjh27sir0w27tw8jq2tmlxzie3k_Hanging-Gardens-Ubud-view.jpg'),
  img('yeqfw1dc3ohwbjs49zd8a2q2ot6p_shutterstock_662627017.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Mount Batur and the Ayung river',
    dayLabel: 'Day 1 to 3',
    images: [
      img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
      img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
      img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
      img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('qc1yophslknxmsjuxv7tdovh1r3t_Monkey%20Forest,%20Ubud.jpg'),
        img('rvjh27sir0w27tw8jq2tmlxzie3k_Hanging-Gardens-Ubud-view.jpg'),
        img('js18aeuqxymzifw80ggnq5bi75my_1470740587_15393446070_baba6998db_o.jpg'),
        img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg')
      ],
      2: [
        img('yeqfw1dc3ohwbjs49zd8a2q2ot6p_shutterstock_662627017.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('p5qmu24btsi6rw9ye14yp9y3v9js_1464162732_things-to-do-in-bali-ubud-art-market.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg')
      ],
      3: [
        img('yvosa32byiuuv3uuy24bizexm13i_Batur-4.jpg'),
        img('yx9uedsyf0x9qg3xk4d8v711tcfz_Mount%20Batur%201.jpg'),
        img('ww0ew1hzw2vypimkh7auis5nap0w_shutterstock_2282319959.jpg'),
        img('aiukzbzdcly5n149edlcu36nwdsg_Ridge%20Walk-1.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Ubud`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your Ubud resort and settle in',
      'Rest of the day free in Bali\'s green interior',
      'Optional: the Monkey Forest, Celuk silver village or the art market',
      `${DAY_MARK}Day 2 · Kintamani and coffee country`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'The crater lake view, then the Tegalalang rice terraces',
      'Ubud palace and the market lanes on the way back',
      `${DAY_MARK}Day 3 · Mount Batur jeep sunrise`,
      'Very early jeep ride up the lava slopes of Mount Batur',
      'Sunrise over the caldera, then the Batur hot springs',
      'The Campuhan ridge walk between two rivers',
      'Tegenungan waterfall in the afternoon'
    ],
    accommodation: {
      name: 'Bakung Ubud Resort & Villa, Ubud',
      description: '3 nights · Breakfast · Standard room · 3★ · Garden resort a short walk from the Ubud market',
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
        name: 'Kintamani with Ubud and coffee plantation',
        day: 2,
        optional: false,
        image: img('yeqfw1dc3ohwbjs49zd8a2q2ot6p_shutterstock_662627017.jpg'),
        description: 'A full day through central Bali with a coffee plantation tasting, the Tegalalang rice terraces, the Ubud palace and the crater lake view at Kintamani.'
      },
      {
        name: 'Mount Batur sunrise by jeep',
        day: 3,
        optional: false,
        image: img('yvosa32byiuuv3uuy24bizexm13i_Batur-4.jpg'),
        description: 'A four wheel drive up the volcano in the dark for sunrise on the black lava field, followed by a soak in the Batur hot springs.'
      },
      {
        name: 'Campuhan ridge walk and Tegenungan',
        day: 3,
        optional: false,
        image: img('aiukzbzdcly5n149edlcu36nwdsg_Ridge%20Walk-1.jpg'),
        description: 'The green ridge path between two rivers on the edge of Ubud town, then the wide curtain of Tegenungan waterfall in the afternoon.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Three nights inland with a coffee plantation day, a jeep sunrise on Mount Batur, the Campuhan ridge path and a waterfall in the afternoon.',
      image: img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Nusa Penida and Uluwatu',
    dayLabel: 'Day 4 to 7',
    images: [
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
      img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
      img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
    ],
    dayImages: {
      4: [
        img('a8v21s6974sb82tpwo3999y5lz6g_shutterstock_710433475.jpg'),
        img('1ttfssywkwg49fapjl3v7dnkybtg_White%20Water%20Rafting.jpg'),
        img('gascynfdln92xr8rs1j3bznl1iqb_69mlw9i7qv5bkyb5so0c4qka00p6_shutterstock_778690954.jpg'),
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
      ],
      5: [
        img('5vypuz59sdnia5qufsjvhxmocvha_kelingking-beach.webp'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('raz6i8qsplkduo2ddqpr2tqbahzi_download%20(11).jpg')
      ],
      6: [
        img('lqlqu6i7i9f4ocl43fhmnqe6j32e_Padang%20beach-3.jpg'),
        img('p0tyf5xa92nbblmla956dmfsaqrd_shutterstock_1453687076.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
      ],
      7: [
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
        img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
        img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Rafting and on to Kuta`,
      'Breakfast and check out, then on to the Ayung river',
      'Twelve kilometres of rafting through jungle gorges',
      'Private transfer down to Kuta and check in',
      'Evening free near the beach',
      `${DAY_MARK}Day 5 · Nusa Penida and Crystal Bay`,
      'Early breakfast, then private transfer to Sanur harbour',
      'Speedboat across to Nusa Penida for the west coast',
      'Kelingking beach, Angel\'s Billabong and Broken Bay',
      'Snorkelling at Crystal Bay before the boat back',
      `${DAY_MARK}Day 6 · Uluwatu and Padang Padang`,
      'Breakfast, then a half day to the southern cliffs',
      'Padang Padang beach in its limestone cove',
      'Uluwatu temple above the surf at sunset',
      'Optional: the Kecak fire dance at the temple',
      `${DAY_MARK}Day 7 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your return flight'
    ],
    accommodation: {
      name: 'Diamond Hotel Kuta, Kuta',
      description: '3 nights · Breakfast · Standard room · 3★ · Quiet hotel with a pool, walking distance from Kuta beach',
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
        name: 'Ayung river white water rafting',
        day: 4,
        optional: false,
        image: img('a8v21s6974sb82tpwo3999y5lz6g_shutterstock_710433475.jpg'),
        description: 'Twelve kilometres of grade two and three rapids on the Ayung river, past jungle walls and carved rock faces, with all gear and a guide in the raft.'
      },
      {
        name: 'Nusa Penida west coast by speedboat',
        day: 5,
        optional: false,
        image: img('5vypuz59sdnia5qufsjvhxmocvha_kelingking-beach.webp'),
        description: 'Speedboat across for Kelingking beach, Angel\'s Billabong and Broken Bay, the three viewpoints that make Nusa Penida worth the early start.'
      },
      {
        name: 'Snorkelling at Crystal Bay',
        day: 5,
        optional: false,
        image: img('2mzn3ppkzw3azce25ncl3fgbn5l9_Koh-Samui-Snorkeling.jpg'),
        description: 'Mask and fins in the clear water of Crystal Bay on the way back, with coral heads and reef fish close to the shore.'
      },
      {
        name: 'Uluwatu and Padang Padang beach',
        day: 6,
        optional: false,
        image: img('lqlqu6i7i9f4ocl43fhmnqe6j32e_Padang%20beach-3.jpg'),
        description: 'The cove at Padang Padang beach and the cliff top temple at Uluwatu, timed so you are there as the sun goes into the ocean.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights on the coast with rafting on the Ayung river, a full day on Nusa Penida with snorkelling, and the cliffs of Uluwatu at sunset.',
      image: img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
    }
  }
];

const detail = {
  slug: 'bali-adventure-with-rafting-and-nusa-penida',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bali Adventure with Rafting and Nusa Penida',
  alt: 'Rafting on the Ayung river near Ubud, Bali',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Return flights, private transfers and guided tours',
  tag: 'Adventure',
  tags: ['Adventure', 'Family'],
  price: 79705,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Mount Batur', 'Ayung River', 'Kuta', 'Nusa Penida'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 7, transfers: 16 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['16 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'This is the active Bali. Volcano at dawn, river rapids by day, island beaches after. Families with teenagers love it.',
    quoteMore: 'Rafting and the Batur jeep both need a change of clothes and shoes you do not mind soaking. Keep the camera in a dry bag and let us hold your main luggage at the hotel on moving day.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days of active Bali with return flights: a jeep sunrise on Mount Batur, the Campuhan ridge walk, rafting on the Ayung river, Nusa Penida with snorkelling at Crystal Bay and the cliffs of Uluwatu at sunset.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: return international flights; 6 nights with daily breakfast; private airport and inter city transfers; Kintamani and coffee plantation tour; Mount Batur jeep sunrise with hot springs; Campuhan ridge walk and Tegenungan; Ayung river rafting; Nusa Penida tour with snorkelling; Uluwatu and Padang Padang.',
  intro2: 'Not included: Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Ubud (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Ubud resort and settle in\nRest of the day free in Bali\'s green interior\nOptional: the Monkey Forest, Celuk silver village or the art market', hotel: 'Bakung Ubud Resort & Villa, Ubud', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Ubud resort and settle in', 'Rest of the day free in Bali\'s green interior'] },
    { title: 'Day 2: Kintamani and coffee country (B)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nThe crater lake view, then the Tegalalang rice terraces\nUbud palace and the market lanes on the way back', hotel: 'Bakung Ubud Resort & Villa, Ubud', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'The crater lake view, then the Tegalalang rice terraces'] },
    { title: 'Day 3: Mount Batur jeep sunrise (B)', text: 'Very early jeep ride up the lava slopes of Mount Batur\nSunrise over the caldera, then the Batur hot springs\nThe Campuhan ridge walk between two rivers\nTegenungan waterfall in the afternoon', hotel: 'Bakung Ubud Resort & Villa, Ubud', highlights: ['Very early jeep ride up the lava slopes of Mount Batur', 'Sunrise over the caldera, then the Batur hot springs', 'The Campuhan ridge walk between two rivers'] },
    { title: 'Day 4: Rafting and on to Kuta (B)', text: 'Breakfast and check out, then on to the Ayung river\nTwelve kilometres of rafting through jungle gorges\nPrivate transfer down to Kuta and check in\nEvening free near the beach', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Breakfast and check out, then on to the Ayung river', 'Twelve kilometres of rafting through jungle gorges', 'Private transfer down to Kuta and check in'] },
    { title: 'Day 5: Nusa Penida and Crystal Bay (B)', text: 'Early breakfast, then private transfer to Sanur harbour\nSpeedboat across to Nusa Penida for the west coast\nKelingking beach, Angel\'s Billabong and Broken Bay\nSnorkelling at Crystal Bay before the boat back', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Early breakfast, then private transfer to Sanur harbour', 'Speedboat across to Nusa Penida for the west coast', 'Kelingking beach, Angel\'s Billabong and Broken Bay'] },
    { title: 'Day 6: Uluwatu and Padang Padang (B)', text: 'Breakfast, then a half day to the southern cliffs\nPadang Padang beach in its limestone cove\nUluwatu temple above the surf at sunset\nOptional: the Kecak fire dance at the temple', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Breakfast, then a half day to the southern cliffs', 'Padang Padang beach in its limestone cove', 'Uluwatu temple above the surf at sunset'] },
    { title: 'Day 7: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your return flight', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your return flight'] }
  ],
  outro: 'Not included: Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const baliAdventureRaftingNusaPenidaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const baliAdventureRaftingNusaPenidaProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Mount Batur', 'Ayung River', 'Kuta', 'Nusa Penida'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 7,
  transfers: 16,
  meals: 6,
  price: detail.price,
  images: cardImages
};
