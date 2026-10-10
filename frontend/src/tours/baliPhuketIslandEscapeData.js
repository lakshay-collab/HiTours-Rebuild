// Bali and Phuket Island Escape. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg'),
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('wgw28loe37wumwa59avtvzp7gcn4_shutterstock_2253884321.jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kuta',
    dayLabel: 'Day 1 to 2',
    images: [
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
      img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
      img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg')
    ],
    dayImages: {
      1: [
        img('6u10mdhy3dcpjb8pctpthpoe4f0a_pandawa-beach-mikebali-001.jpg'),
        img('6dn215ssrisvwxp9ulwbfh7h0i1s_night-markets-phuket-thailand.jpg'),
        img('h3oys62dd0xro0wz26eputi96v5w_img_0291.jpg'),
        img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
      ],
      2: [
        img('g4aium5gj1oi4lbxfz1v2dgb2qp0_shutterstock_2427199549%20(1).jpg'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('raz6i8qsplkduo2ddqpr2tqbahzi_download%20(11).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Kuta`,
      'Arrival at Ngurah Rai Airport and private transfer to your Kuta hotel',
      'Check in at Kuta Central Park and keep the first day free',
      'Optional: grilled seafood at Jimbaran, the Kuta night market or Petitenget temple',
      `${DAY_MARK}Day 2 · Nusa Penida and four beaches`,
      'Breakfast, then private transfer across to Sanur harbour',
      'Speedboat transfer over to Nusa Penida for the west coast tour',
      'Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach',
      'Return speedboat and private transfer to your Kuta hotel'
    ],
    accommodation: {
      name: 'Kuta Central Park Hotel, Bali, Kuta',
      description: '2 nights · Breakfast included · Deluxe room · 4★ · Kuta Central Park, a short walk from Kuta beach',
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
        name: 'Nusa Penida West Coast Tour',
        day: 2,
        optional: false,
        image: img('g4aium5gj1oi4lbxfz1v2dgb2qp0_shutterstock_2427199549%20(1).jpg'),
        description: 'A speedboat day to Nusa Penida taking in Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach.'
      },
      {
        name: 'Kuta Night Market',
        day: 1,
        optional: true,
        image: img('6dn215ssrisvwxp9ulwbfh7h0i1s_night-markets-phuket-thailand.jpg'),
        description: 'Stalls of satay, grilled fish and sweets a few streets back from Kuta beach, busiest after eight.'
      },
      {
        name: 'Pura Petitenget Temple',
        day: 1,
        optional: true,
        image: img('h3oys62dd0xro0wz26eputi96v5w_img_0291.jpg'),
        description: 'A sea temple on the Seminyak sand, best at sunset when the offerings are laid out along the wall.'
      }
    ],
    program: {
      name: 'Kuta base with a Nusa Penida day',
      description: 'Two nights in Kuta with one big day on the water, crossing to Nusa Penida for Kelingking beach and the west coast lookouts.',
      image: img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Phuket',
    dayLabel: 'Day 3 to 6',
    images: [
      img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg'),
      img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg'),
      img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
      img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg')
    ],
    dayImages: {
      3: [
        img('u0pqsdaxi1xf5pmykhedhlviy06o_14599612777_e3275ab36b_o.jpg'),
        img('3rcqywg77boav06oh5rz5criksvz_shutterstock_2080788463.jpg'),
        img('qsvbg8xqjyo5kwvemsenqgipdtic_riwmt3ygoh284tfu7z8usi8s0e8w_tk3.jpg'),
        img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg')
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
        img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg'),
        img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg'),
        img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
        img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · On to Phuket`,
      'Breakfast, check out and private transfer to Ngurah Rai Airport',
      'Optional: flight from Bali to Phuket, booked separately and not included',
      'Private sedan transfer from Phuket airport to your Patong resort',
      'Optional: the Big Buddha, Banana beach or Tiger Kingdom close by',
      `${DAY_MARK}Day 4 · Phi Phi islands by speedboat`,
      'Breakfast, then shared transfer down to the Phuket pier',
      'Speedboat transfer out to the Phi Phi group for the whole day',
      'Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch',
      'Return speedboat and shared transfer to your resort',
      `${DAY_MARK}Day 5 · Phuket city tour`,
      'Breakfast, then shared transfer for the Phuket city tour',
      'Wat Chalong, Old Phuket Town and Karon viewpoint on the west coast',
      'Afternoon free beside the pool or down on the beach',
      `${DAY_MARK}Day 6 · Departure`,
      'Breakfast and an easy check out',
      'Private sedan transfer to the airport for your trip home'
    ],
    accommodation: {
      name: 'Tony Resort, Phuket',
      description: '3 nights · Breakfast included · Deluxe room · 3★ · Tony Resort in Patong, close to the beach road',
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
        name: 'Phi Phi Islands by Speedboat',
        day: 4,
        optional: false,
        image: img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        description: 'A full day across the Phi Phi group with Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, and lunch on the tour.'
      },
      {
        name: 'Phuket City Tour',
        day: 5,
        optional: false,
        image: img('qtfqjk6vmzm6n3qo4wqm60dsswuk_phuket.jpg'),
        description: 'A half day run through Wat Chalong, the painted shophouse streets of Old Phuket Town and Karon viewpoint.'
      },
      {
        name: 'Phuket Big Buddha',
        day: 3,
        optional: true,
        image: img('u0pqsdaxi1xf5pmykhedhlviy06o_14599612777_e3275ab36b_o.jpg'),
        description: 'A white marble Buddha on Nakkerd hill with views over Chalong bay and Kata on a clear afternoon.'
      },
      {
        name: 'Banana Beach',
        day: 3,
        optional: true,
        image: img('3rcqywg77boav06oh5rz5criksvz_shutterstock_2080788463.jpg'),
        description: 'A small bay on the north west coast with calm water and shade, reached down a steep track off the main road.'
      }
    ],
    program: {
      name: 'Patong, Phi Phi and the old town',
      description: 'Three nights in Patong with a full day at the Phi Phi islands and a half day tour of Wat Chalong, the old town and Karon viewpoint.',
      image: img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg')
    }
  }
];

const detail = {
  slug: 'bali-and-phuket-island-escape',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bali and Phuket Island Escape',
  alt: 'The cliffs above Kelingking beach on Nusa Penida in Bali',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'Private transfers with speedboat island crossings',
  tag: 'Beach',
  tags: ['Beach', 'Honeymoon'],
  price: 47502,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kuta', 'Nusa Penida', 'Phuket', 'Phi Phi Islands'],
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
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two very different islands in one week. Bali for the cliffs, Phuket for the boat days and the old town.',
    quoteMore: 'The Nusa Penida crossing can be choppy, so take something for motion sickness and sit at the back. Book the Bali to Phuket flight for late morning so you keep the Kuta breakfast.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days across Bali and Phuket. Two nights in Kuta with a speedboat day to Nusa Penida and its four beaches, then three nights in Patong with the Phi Phi islands by boat and a Phuket city tour.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights in Kuta and Phuket with daily breakfast; Nusa Penida west coast tour with four beaches; Phi Phi islands speedboat tour with lunch; Phuket city tour; 13 airport, harbour and sightseeing transfers.',
  intro2: 'Not included: international flights; the Bali to Phuket flight; visa charges; travel insurance; island and temple entry fees; lunches and dinners other than the Phi Phi tour lunch; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Kuta (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your Kuta hotel\nCheck in at Kuta Central Park and keep the first day free\nOptional: grilled seafood at Jimbaran, the Kuta night market or Petitenget temple', hotel: 'Kuta Central Park Hotel, Bali', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your Kuta hotel', 'Check in at Kuta Central Park and keep the first day free', 'Optional: grilled seafood at Jimbaran, the Kuta night market or Petitenget temple'] },
    { title: 'Day 2: Nusa Penida and four beaches (B)', text: 'Breakfast, then private transfer across to Sanur harbour\nSpeedboat transfer over to Nusa Penida for the west coast tour\nKelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach\nReturn speedboat and private transfer to your Kuta hotel', hotel: 'Kuta Central Park Hotel, Bali', highlights: ['Breakfast, then private transfer across to Sanur harbour', 'Speedboat transfer over to Nusa Penida for the west coast tour', 'Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach'] },
    { title: 'Day 3: On to Phuket (B)', text: 'Breakfast, check out and private transfer to Ngurah Rai Airport\nOptional: flight from Bali to Phuket, booked separately and not included\nPrivate sedan transfer from Phuket airport to your Patong resort\nOptional: the Big Buddha, Banana beach or Tiger Kingdom close by', hotel: 'Tony Resort', highlights: ['Breakfast, check out and private transfer to Ngurah Rai Airport', 'Optional: flight from Bali to Phuket, booked separately and not included', 'Private sedan transfer from Phuket airport to your Patong resort'] },
    { title: 'Day 4: Phi Phi islands by speedboat (B, L)', text: 'Breakfast, then shared transfer down to the Phuket pier\nSpeedboat transfer out to the Phi Phi group for the whole day\nMaya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch\nReturn speedboat and shared transfer to your resort', hotel: 'Tony Resort', highlights: ['Breakfast, then shared transfer down to the Phuket pier', 'Speedboat transfer out to the Phi Phi group for the whole day', 'Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch'] },
    { title: 'Day 5: Phuket city tour (B)', text: 'Breakfast, then shared transfer for the Phuket city tour\nWat Chalong, Old Phuket Town and Karon viewpoint on the west coast\nAfternoon free beside the pool or down on the beach', hotel: 'Tony Resort', highlights: ['Breakfast, then shared transfer for the Phuket city tour', 'Wat Chalong, Old Phuket Town and Karon viewpoint on the west coast', 'Afternoon free beside the pool or down on the beach'] },
    { title: 'Day 6: Departure (B)', text: 'Breakfast and an easy check out\nPrivate sedan transfer to the airport for your trip home', hotel: 'Departure', highlights: ['Breakfast and an easy check out', 'Private sedan transfer to the airport for your trip home'] }
  ],
  outro: 'Not included: international flights; the Bali to Phuket flight; visa charges; travel insurance; island and temple entry fees; lunches and dinners other than the Phi Phi tour lunch; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '#' },
  { label: 'Thailand', href: '/asia/thailand' },
  { label: detail.title }
];

export const baliPhuketIslandEscapeBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const baliPhuketIslandEscapeProduct = {
  slug: detail.slug,
  places: stops.map((s) => s.name),
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
