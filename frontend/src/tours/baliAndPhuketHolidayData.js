// Bali and Phuket Holiday. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
  img('dt3g7wxiv0cq88va8n6qzye08rel_shutterstock_2130087425%20(1).jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg'),
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kuta',
    subtitle: 'Kuta to Nusa Penida',
    dayLabel: 'Day 1 to 2',
    images: [
      img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
      img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
      img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg')
    ],
    dayImages: {
      1: [
        img('6u10mdhy3dcpjb8pctpthpoe4f0a_pandawa-beach-mikebali-001.jpg'),
        img('6dn215ssrisvwxp9ulwbfh7h0i1s_night-markets-phuket-thailand.jpg'),
        img('h3oys62dd0xro0wz26eputi96v5w_img_0291.jpg'),
        img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg')
      ],
      2: [
        img('g4aium5gj1oi4lbxfz1v2dgb2qp0_shutterstock_2427199549%20(1).jpg'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('raz6i8qsplkduo2ddqpr2tqbahzi_download%20(11).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Bali`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your Kuta hotel and settle in',
      'Rest of the day free near the beach',
      'Optional: a sunset walk along Kuta beach',
      `${DAY_MARK}Day 2 · Nusa Penida and four beaches`,
      'Early breakfast, then private transfer to Sanur harbour',
      'Speedboat across to Nusa Penida',
      'Kelingking beach and Crystal Bay',
      'Angel\'s Billabong and Broken Bay before the boat back'
    ],
    accommodation: {
      name: 'Kuta Central Park Hotel, Kuta',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel with a large pool, ten minutes from Kuta beach',
      images: [
        img('l3z6cusnu3visu607x27ji8lg6w2_CghzgVUwY1-ANyOoAAJBeQxhhp4409_W_1280_853_R5.webp'),
        img('mnfh6tj3j57xibt9tv5mwytoc604_88283476.jpg'),
        img('b5wm3ckydivqpvnmhkyfhgge7njr_170843272.jpg'),
        img('z9u3fcsksv9v25zpebjkizk0m7el_220u0g0000007x8eoFA39_W_1280_853_R5.webp'),
        img('krk01wm460rwvbz5zp1984hjhp82_221713340.jpg'),
        img('s6qkb6bk0gg79gf3c60zl0nv9t5x_2ef9a499_z.jpg'),
        img('sb5x8ojhdp2ttzwfqck1ztwroxin_221712713.jpg'),
        img('vb5uibq6sjy972ddh09ua9r4674n_4f123f80_z.webp'),
        img('h59zs5lnd1ldayvg9c4c0ej93hn5_220l0g0000007xkkjCB82_W_1280_853_R5.webp'),
        img('b6f3qfufgppm63qciya2ikrcyv6m_221718558.jpg'),
        img('dxqnkgmvzitlqhd6c5lo3j55c2xf_221713612.jpg'),
        img('hdy12p7f58qw5en0h1302ak8yevw_216025896.jpg'),
        img('97yyx6xycbdme491w5hf5hop1cmt_161438a_hb_k_002.jpg'),
        img('zrnhedcus3vn7z9mtnxrbg5orkbk_1888d976_z.webp')
      ]
    },
    activities: [
      {
        name: 'Nusa Penida and four beaches',
        day: 2,
        optional: false,
        image: img('g4aium5gj1oi4lbxfz1v2dgb2qp0_shutterstock_2427199549%20(1).jpg'),
        description: 'Speedboat across to the island for Kelingking, Crystal Bay, Angel\'s Billabong and Broken Bay, the four stops people come to Bali for.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Two nights on the south coast of Bali, with a full day across the water on Nusa Penida.',
      image: img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Phuket',
    subtitle: 'Phuket to Phi Phi',
    dayLabel: 'Day 3 to 6',
    images: [
      img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg'),
      img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg'),
      img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg'),
      img('nl697ledztoenvi45t7u86mnkm6v_shutterstock_2337247967%20(1)%20(1).jpg')
    ],
    dayImages: {
      3: [
        img('u0pqsdaxi1xf5pmykhedhlviy06o_14599612777_e3275ab36b_o.jpg'),
        img('3rcqywg77boav06oh5rz5criksvz_shutterstock_2080788463.jpg'),
        img('qsvbg8xqjyo5kwvemsenqgipdtic_riwmt3ygoh284tfu7z8usi8s0e8w_tk3.jpg'),
        img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg')
      ],
      4: [
        img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        img('v6a17443ovp0a99j7nc95113gafl_1462975119_8082854403_dc5d2a88e5_o.jpg'),
        img('6kv2if7t8tqqp0ait2c0j5r8fm3h_shutterstock_176838932.jpg'),
        img('3mfwxmvwud1iv4bo1l0uihm5omzw_1627129752_shutterstock_1140016289_(2).jpg')
      ],
      5: [
        img('qtfqjk6vmzm6n3qo4wqm60dsswuk_phuket.jpg'),
        img('0aehywgij1ieurhvsiwdwlfgx98k_36371281724_a12a505647_o.jpg'),
        img('495y5x6h2qo8ln8v8etzufhkt5h0_shutterstock_1283102005.jpg'),
        img('ggq5dfnyssg392eaitpapwop1gpe_4306254299_2cedb10a52_o.jpg')
      ],
      6: [
        img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg'),
        img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg'),
        img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg'),
        img('nl697ledztoenvi45t7u86mnkm6v_shutterstock_2337247967%20(1)%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Flight to Phuket`,
      'Breakfast and check out, then transfer to the airport',
      'Flight from Denpasar to Phuket',
      'Arrival and private transfer to your resort',
      'Rest of the day free near Patong beach',
      `${DAY_MARK}Day 4 · Phi Phi island by speedboat`,
      'Breakfast, then transfer to the pier for your speedboat',
      'Phi Phi Leh and Maya Bay from the water',
      'Snorkelling at Monkey Beach',
      'Lunch on Phi Phi Don before the boat back',
      `${DAY_MARK}Day 5 · Phuket viewpoints and temples`,
      'Breakfast, then a half day tour of the island',
      'Karon viewpoint over the three bays',
      'The Big Buddha on the hill and Wat Chalong',
      'Phuket town\'s old shophouse streets in the afternoon',
      `${DAY_MARK}Day 6 · Departure from Phuket`,
      'Breakfast at the resort and check out',
      'Private transfer to Phuket Airport for your flight home'
    ],
    accommodation: {
      name: 'Tony Resort, Phuket',
      description: '3 nights · Breakfast · Standard room · 3★ · Pool resort a short walk from Patong beach',
      images: [
        img('ziujb91h8ojjhtplxoga5jsxv9f7_251806901.jpg'),
        img('8mlb83uobd3zqshamy0e5itxllp8_251807447.jpg'),
        img('cnzqafw9fye2f6afet3dkcrgvno5_251742039.jpg'),
        img('yrd6te57id9wfvg91mpuumn7vzbk_251741712.jpg'),
        img('5i4k8s9l5v3zfbb6fzdb7d6ib0hs_251741319.jpg'),
        img('i0qrboufxvat80rxlq2xstuhxrwp_251807754.jpg'),
        img('h6pxl95pswy8vdqm2qzq2p8u40jf_460226026.jpg'),
        img('1upaeb2hjlzk0txxqyv9rl6hqwxc_252125736.jpg'),
        img('725t24gv9tmk6q54r9kia9n17f13_251741705.jpg'),
        img('oty0ak3a0xjaizbwcmpsxut0nsr8_251741855.jpg'),
        img('eukbo7yj2mexttujunba4eguuc89_251741865.jpg'),
        img('qyy9x075melbf1nt7ew0zp0qsspc_464566109.jpg'),
        img('dt95ikkiwpbdeeeckjv42jrhr2l0_464566112.jpg'),
        img('c9udl63d7vce30f6ys8gyv8dzcm2_251741351.jpg')
      ]
    },
    activities: [
      {
        name: 'Phi Phi island day trip',
        day: 4,
        optional: false,
        image: img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        description: 'A speedboat day to Phi Phi Don and Phi Phi Leh, with Maya Bay from the water, snorkelling at Monkey Beach and lunch on the island.'
      },
      {
        name: 'Phuket city tour',
        day: 5,
        optional: false,
        image: img('qtfqjk6vmzm6n3qo4wqm60dsswuk_phuket.jpg'),
        description: 'Karon viewpoint, the Big Buddha on the hill, Wat Chalong and the old Sino Portuguese shophouse streets of Phuket town.'
      }
    ],
    program: {
      name: 'Phuket',
      description: 'Three nights near Patong, with a speedboat day out to Phi Phi and a half day through the viewpoints and temples of the island.',
      image: img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg')
    }
  }
];

const detail = {
  slug: 'bali-and-phuket-holiday',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bali and Phuket Holiday',
  alt: 'Longtail boats in the bay at Phi Phi island, Thailand',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'Flights between the islands, private transfers and guided tours',
  tag: 'Two countries',
  tags: ['Beach', 'Island hopping'],
  price: 47502,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kuta', 'Nusa Penida', 'Phuket', 'Phi Phi'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 3, transfers: 13 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['13 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two island countries in six days, and only one flight in between. It is the shortest way to see both coasts properly.',
    quoteMore: 'Do Nusa Penida on the first full day while you are still fresh, the boat is early. Keep the Phuket town streets for the late afternoon when the shophouse cafes open.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days across two countries: two nights in Kuta with a full day on Nusa Penida for Kelingking and Crystal Bay, then three nights near Patong in Phuket with a speedboat day to Phi Phi and a tour of the island\'s viewpoints and temples.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights with daily breakfast; flight from Denpasar to Phuket; private airport transfers in both countries; Nusa Penida west coast tour with four beaches; Phi Phi island speedboat day with lunch; Phuket city tour.',
  intro2: 'Not included: international flights to Bali and home from Phuket; Indonesia and Thailand visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Bali (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Kuta hotel and settle in\nRest of the day free near the beach\nOptional: a sunset walk along Kuta beach', hotel: 'Kuta Central Park Hotel, Bali', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Kuta hotel and settle in', 'Rest of the day free near the beach'] },
    { title: 'Day 2: Nusa Penida and four beaches (B)', text: 'Early breakfast, then private transfer to Sanur harbour\nSpeedboat across to Nusa Penida\nKelingking beach and Crystal Bay\nAngel\'s Billabong and Broken Bay before the boat back', hotel: 'Kuta Central Park Hotel, Bali', highlights: ['Early breakfast, then private transfer to Sanur harbour', 'Speedboat across to Nusa Penida', 'Kelingking beach and Crystal Bay'] },
    { title: 'Day 3: Flight to Phuket (B)', text: 'Breakfast and check out, then transfer to the airport\nFlight from Denpasar to Phuket\nArrival and private transfer to your resort\nRest of the day free near Patong beach', hotel: 'Tony Resort', highlights: ['Breakfast and check out, then transfer to the airport', 'Flight from Denpasar to Phuket', 'Arrival and private transfer to your resort'] },
    { title: 'Day 4: Phi Phi island by speedboat (B, L)', text: 'Breakfast, then transfer to the pier for your speedboat\nPhi Phi Leh and Maya Bay from the water\nSnorkelling at Monkey Beach\nLunch on Phi Phi Don before the boat back', hotel: 'Tony Resort', highlights: ['Breakfast, then transfer to the pier for your speedboat', 'Phi Phi Leh and Maya Bay from the water', 'Snorkelling at Monkey Beach'] },
    { title: 'Day 5: Phuket viewpoints and temples (B)', text: 'Breakfast, then a half day tour of the island\nKaron viewpoint over the three bays\nThe Big Buddha on the hill and Wat Chalong\nPhuket town\'s old shophouse streets in the afternoon', hotel: 'Tony Resort', highlights: ['Breakfast, then a half day tour of the island', 'Karon viewpoint over the three bays', 'The Big Buddha on the hill and Wat Chalong'] },
    { title: 'Day 6: Departure from Phuket (B)', text: 'Breakfast at the resort and check out\nPrivate transfer to Phuket Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the resort and check out', 'Private transfer to Phuket Airport for your flight home'] }
  ],
  outro: 'Not included: international flights to Bali and home from Phuket; Indonesia and Thailand visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const baliAndPhuketHolidayBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const baliAndPhuketHolidayProduct = {
  slug: detail.slug,
  places: ['Kuta', 'Nusa Penida', 'Phuket', 'Phi Phi'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 3,
  transfers: 13,
  meals: 6,
  price: detail.price,
  images: cardImages
};
