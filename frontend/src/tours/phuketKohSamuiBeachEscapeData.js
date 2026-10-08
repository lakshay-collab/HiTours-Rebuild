// Phuket and Koh Samui Beach Escape. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg'),
  img('ezxz70swo9zrybv8o8pus5c6klaf_shutterstock_2090520271.jpg'),
  img('dt3g7wxiv0cq88va8n6qzye08rel_shutterstock_2130087425%20(1).jpg'),
  img('umnq4yyhbbiotdz92vz7xwlhhhgl_shutterstock_1515443948-min.jpg'),
  img('wzmar6v3olzlqldy34o8thmatj9a_shutterstock_589505762.jpg'),
  img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
  img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
  img('iw2v7abv38kapz6210mxe2whu5rp_shutterstock_1797497632.jpg'),
  img('nl697ledztoenvi45t7u86mnkm6v_shutterstock_2337247967%20(1)%20(1).jpg'),
  img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Phuket',
    dayLabel: 'Day 1 to 2',
    images: [
      img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg'),
      img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg'),
      img('nl697ledztoenvi45t7u86mnkm6v_shutterstock_2337247967%20(1)%20(1).jpg'),
      img('dt3g7wxiv0cq88va8n6qzye08rel_shutterstock_2130087425%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('gxoylnz315eksjm86jgiaix4lwkf_1579614981_Nang_Beach.jpg'),
        img('lxlbh7w1a64qyhyw24b8x6acl34p_1462975136_552513055_f06229494e_o.jpg'),
        img('2rrjqomoqtud4m8nis9ysmyculem_Phuket%20Bird%20Park.webp'),
        img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg')
      ],
      2: [
        img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        img('v6a17443ovp0a99j7nc95113gafl_1462975119_8082854403_dc5d2a88e5_o.jpg'),
        img('6kv2if7t8tqqp0ait2c0j5r8fm3h_shutterstock_176838932.jpg'),
        img('3mfwxmvwud1iv4bo1l0uihm5omzw_1627129752_shutterstock_1140016289_(2).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuket`,
      'Arrival at Phuket International Airport and private sedan transfer to Patong',
      'Check in at Club Bamboo and keep the first day free',
      'Patong beach is a short walk down the hill from the resort',
      'Optional: an evening on Patong beach or Phuket Bird Park with children',
      `${DAY_MARK}Day 2 · Phi Phi islands by speedboat`,
      'Breakfast, then shared transfer to the Phuket pier',
      'Speedboat transfer out to the Phi Phi group for the day',
      'Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch on the tour',
      'Return speedboat and shared transfer to Patong in the evening'
    ],
    accommodation: {
      name: 'Club Bamboo Boutique Resort & Spa, Phuket',
      description: '2 nights · Breakfast included · Deluxe room · 3★ · Club Bamboo in Patong, a short walk from the beach',
      images: [
        img('aw0j2zdkhsshjpwh8n6fink5h7xx_club-bamboo-boutique.jpg'),
        img('ao8b9sp0qq4boyrp2ble3sggg58g_209361068.jpg'),
        img('0fbjsav4ijrstks2y9tgmmro1gzv_61745490.jpg'),
        img('xfi4hof95zgq9rz9y5nfx654xtw1_Club-Bamboo-Superior-Room-5.jpg'),
        img('791r10d8c7lnts4rj1muegtve0x5_209360949.jpg'),
        img('whle8k4efwxwjk5s018woh00r05r_244597929.jpg'),
        img('eg6fo5l52jxxi0jjbfr6dd5jy4sj_Club-Bamboo-Superior-Room-3.jpg'),
        img('6eudibm2fkxh364k5chi72n9r9ls_210189658.jpg'),
        img('jwkjc9aatk4qwwo40091aodp8qc8_209250892.jpg'),
        img('3wyfnirdo8kt6c4ch9khjymhah9n_209360940.jpg'),
        img('37nfc1qsewfh7x7jdybh37fwlu38_210532395.jpg')
      ]
    },
    activities: [
      {
        name: 'Phi Phi Islands by Speedboat',
        day: 2,
        optional: false,
        image: img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        description: 'A full day across the Phi Phi group with Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, and lunch served on the tour.'
      },
      {
        name: 'Evening on Patong Beach',
        day: 1,
        optional: true,
        image: img('lxlbh7w1a64qyhyw24b8x6acl34p_1462975136_552513055_f06229494e_o.jpg'),
        description: 'Walk the sand as the light goes, then browse the stalls and cafes a street back from the beach front.'
      },
      {
        name: 'Phuket Bird Park',
        day: 1,
        optional: true,
        image: img('2rrjqomoqtud4m8nis9ysmyculem_Phuket%20Bird%20Park.webp'),
        description: 'A shaded park with macaws, hornbills and crowned cranes, plus short keeper talks. A simple hit with younger children.'
      }
    ],
    program: {
      name: 'Patong base with a Phi Phi day',
      description: 'Two nights in Patong with one big day on the water, running out to Maya Bay and the Phi Phi group by speedboat.',
      image: img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Koh Samui',
    dayLabel: 'Day 3 to 4',
    images: [
      img('zfufmlme2f3a44qw91thxjln52wn_shutterstock_1797497632.jpg'),
      img('ezxz70swo9zrybv8o8pus5c6klaf_shutterstock_2090520271.jpg'),
      img('0h1vvi2l2j5ukteevblc9rifyj3n_shutterstock_406440082.jpg'),
      img('2zpq4fa4vvvgrj3tzt28iw9j0squ_shutterstock_2324766599%20(1).jpg')
    ],
    dayImages: {
      3: [
        img('b5wxwiqeii0sltdc699x0m8wo860_1554924475_2016-06-13.jpg'),
        img('d4dhfjms2qdxf0hyqglbge7aw2d1_1554904766_Fishermans-Village-Samui.png'),
        img('zfufmlme2f3a44qw91thxjln52wn_shutterstock_1797497632.jpg'),
        img('ezxz70swo9zrybv8o8pus5c6klaf_shutterstock_2090520271.jpg')
      ],
      4: [
        img('rhb73iq754sfw03q4ojcx1r5juts_1554900436_big-bhudda-koi-sumui.jpg'),
        img('o3wl0enq3moymai2lkmcb20hlmno_1554904307_63efe6a290d3a269bbda4e030a7d37a3ZSRfB.jpeg'),
        img('ctbd9fmxxtk9bsnlxjxhksdstcq5_1554901237_e38554b6c410b0354c51d552c4bd2e09.jpg'),
        img('lple13ito1icrfd7gvub3vtwdhnh_1555492653_views-on-koh-samui.jpg.optimal.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Ferry to Koh Samui`,
      'Breakfast, check out and shared transfer to the ferry terminal',
      'Ferry transfer across to Koh Samui, then a shared transfer to your hotel',
      'Check in near Chaweng beach and spend the evening on the sand',
      'Optional: Fisherman\'s Village or the stalls at The Wharf Samui',
      `${DAY_MARK}Day 4 · Koh Samui at leisure`,
      'Breakfast, then the whole day is yours on the island',
      'Optional: Big Buddha temple, Wat Plai Laem and the Secret Buddha Garden',
      'Optional: Lad Koh viewpoint on the ring road, best in morning light',
      'Long swims and a sunset on Chaweng beach cost nothing at all'
    ],
    accommodation: {
      name: 'First Residence Hotel, Koh Samui',
      description: '2 nights · Breakfast included · Deluxe room · 3★ · Close to Chaweng beach and the night market',
      images: [
        img('5bstr2ezivcv0mfcpcwygab9a1av_21023930.jpg'),
        img('n8wqixiedmrud82gvhxilgq2uiit_21023897.jpg'),
        img('1cgcaqb201nf6lq9lbgrs53e9x5f_16141032.jpg'),
        img('al7rjxxbsn6757ay5e1u2ds8vuiu_251083248.jpg'),
        img('ytonqnvkgxdbcs73ii1nbv6m06o0_251080214.jpg'),
        img('r9jze4oa1s36wi6i93gk38ld271o_251082307.jpg'),
        img('dqvbrvhogx18adw205ycx5majxwt_16136974.jpg'),
        img('i8pqb71jgyly8tzok8i30b0vm6rl_16139559.jpg'),
        img('rix5mzes8h7a8dlhxu920ctwnxts_21023906.jpg'),
        img('qqc5rno9x7flg56jd66ffj4pjpyi_16137966.jpg'),
        img('1c4vukxrddl3jyniz0l3vx1u981a_16138671.jpg'),
        img('9jlcsnl7gu7xeecdyvfbg4s90tqm_21023928.jpg')
      ]
    },
    activities: [
      {
        name: 'Fisherman\'s Village',
        day: 3,
        optional: true,
        image: img('d4dhfjms2qdxf0hyqglbge7aw2d1_1554904766_Fishermans-Village-Samui.png'),
        description: 'Old wooden shophouses at Bophut turned into cafes and bars, with a walking street market on Friday evenings.'
      },
      {
        name: 'Big Buddha Temple',
        day: 4,
        optional: true,
        image: img('rhb73iq754sfw03q4ojcx1r5juts_1554900436_big-bhudda-koi-sumui.jpg'),
        description: 'Wat Phra Yai on its small island, reached by causeway, with a golden seated Buddha looking out over the sea.'
      },
      {
        name: 'Secret Buddha Garden',
        day: 4,
        optional: true,
        image: img('ctbd9fmxxtk9bsnlxjxhksdstcq5_1554901237_e38554b6c410b0354c51d552c4bd2e09.jpg'),
        description: 'Stone figures set among streams and jungle up in the hills, reached on a steep track best driven with a local driver.'
      }
    ],
    program: {
      name: 'Two slow days on Koh Samui',
      description: 'Nothing booked and nowhere to be. Chaweng beach on the doorstep, temples and viewpoints on the ring road when you feel like moving.',
      image: img('zfufmlme2f3a44qw91thxjln52wn_shutterstock_1797497632.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Phuket',
    dayLabel: 'Day 5 to 6',
    images: [
      img('wgw28loe37wumwa59avtvzp7gcn4_shutterstock_2253884321.jpg'),
      img('umnq4yyhbbiotdz92vz7xwlhhhgl_shutterstock_1515443948-min.jpg'),
      img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg'),
      img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg')
    ],
    dayImages: {
      5: [
        img('n6akisjv05k5n6dfb3zekukyborl_1559128931_PatongBoxingStadiumTicket1.jpg.jpg'),
        img('flpipwbbmpq0jq8jajnqzsp3620h_1569242694_shutterstock_571707043.jpg'),
        img('lo6hn7ml3xxgjk1bulufm018w20p_1569242001_dolphin_19.jpg'),
        img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg')
      ],
      6: [
        img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg'),
        img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg'),
        img('nl697ledztoenvi45t7u86mnkm6v_shutterstock_2337247967%20(1)%20(1).jpg'),
        img('dt3g7wxiv0cq88va8n6qzye08rel_shutterstock_2130087425%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Back to Phuket`,
      'Breakfast, check out and shared transfer to the Samui pier',
      'Ferry transfer back across to Phuket and on to Patong',
      'Afternoon free for the pool, the spa or one more hour on the beach',
      'Optional: a dolphin show, the Siam Niramit show or Muay Thai at Patong stadium',
      `${DAY_MARK}Day 6 · Departure`,
      'Breakfast and an unhurried check out',
      'Private sedan transfer to Phuket International Airport'
    ],
    accommodation: {
      name: 'Club Bamboo Boutique Resort & Spa, Phuket',
      description: '1 night · Breakfast included · Deluxe room · 3★ · Back at Club Bamboo in Patong for the final night',
      images: [
        img('aw0j2zdkhsshjpwh8n6fink5h7xx_club-bamboo-boutique.jpg'),
        img('ao8b9sp0qq4boyrp2ble3sggg58g_209361068.jpg'),
        img('0fbjsav4ijrstks2y9tgmmro1gzv_61745490.jpg'),
        img('xfi4hof95zgq9rz9y5nfx654xtw1_Club-Bamboo-Superior-Room-5.jpg'),
        img('791r10d8c7lnts4rj1muegtve0x5_209360949.jpg'),
        img('whle8k4efwxwjk5s018woh00r05r_244597929.jpg'),
        img('eg6fo5l52jxxi0jjbfr6dd5jy4sj_Club-Bamboo-Superior-Room-3.jpg'),
        img('6eudibm2fkxh364k5chi72n9r9ls_210189658.jpg'),
        img('jwkjc9aatk4qwwo40091aodp8qc8_209250892.jpg'),
        img('3wyfnirdo8kt6c4ch9khjymhah9n_209360940.jpg'),
        img('37nfc1qsewfh7x7jdybh37fwlu38_210532395.jpg')
      ]
    },
    activities: [
      {
        name: 'Siam Niramit Show',
        day: 5,
        optional: true,
        image: img('flpipwbbmpq0jq8jajnqzsp3620h_1569242694_shutterstock_571707043.jpg'),
        description: 'A big stage production on Thai history and legend, with a hundred performers and an outdoor village to walk beforehand.'
      },
      {
        name: 'Dolphin Show',
        day: 5,
        optional: true,
        image: img('lo6hn7ml3xxgjk1bulufm018w20p_1569242001_dolphin_19.jpg'),
        description: 'An hour of dolphin and sea lion routines in a covered arena, easy to fit into a free Phuket afternoon.'
      }
    ],
    program: {
      name: 'A final Phuket night',
      description: 'Back across from Samui for a last afternoon at the pool, with Patong close by for one more evening out.',
      image: img('wgw28loe37wumwa59avtvzp7gcn4_shutterstock_2253884321.jpg')
    }
  }
];

const detail = {
  slug: 'phuket-and-koh-samui-beach-escape',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Phuket and Koh Samui Beach Escape',
  alt: 'Palm fringed sand and turquoise water on Chaweng beach in Koh Samui',
  days: '6 days / 5 nights',
  stations: '3 stops',
  transport: 'Shared coach transfers with ferry and speedboat crossings',
  tag: 'Beach',
  tags: ['Beach', 'Honeymoon'],
  price: 38475,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuket', 'Phi Phi Islands', 'Koh Samui'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 1, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['1 experience', 'Activities'],
    ['12 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'This one is built around slow days. One big island tour, then two mornings on Samui with nothing booked.',
    quoteMore: 'Hire a car with a driver for half a day on Samui and loop the ring road: Big Buddha temple, Wat Plai Laem, the Secret Buddha Garden and Lad Koh viewpoint in one easy run.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six easy days across two Thai islands. A speedboat tour of the Phi Phi group from Phuket, two unhurried nights near Chaweng beach on Koh Samui and a final Phuket night, with beach time built into every day.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights in Phuket and Koh Samui with daily breakfast; Phi Phi islands speedboat tour with lunch; 12 airport, pier and island transfers including the Samui ferry crossings both ways.',
  intro2: 'Not included: international flights; visa charges; travel insurance; island and temple entry fees; lunches and dinners other than the island tour lunch; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuket (Arrival)', text: 'Arrival at Phuket International Airport and private sedan transfer to Patong\nCheck in at Club Bamboo and keep the first day free\nPatong beach is a short walk down the hill from the resort\nOptional: an evening on Patong beach or Phuket Bird Park with children', hotel: 'Club Bamboo Boutique Resort & Spa', highlights: ['Arrival at Phuket International Airport and private sedan transfer to Patong', 'Check in at Club Bamboo and keep the first day free', 'Patong beach is a short walk down the hill from the resort'] },
    { title: 'Day 2: Phi Phi islands by speedboat (B, L)', text: 'Breakfast, then shared transfer to the Phuket pier\nSpeedboat transfer out to the Phi Phi group for the day\nMaya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch on the tour\nReturn speedboat and shared transfer to Patong in the evening', hotel: 'Club Bamboo Boutique Resort & Spa', highlights: ['Breakfast, then shared transfer to the Phuket pier', 'Speedboat transfer out to the Phi Phi group for the day', 'Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch on the tour'] },
    { title: 'Day 3: Ferry to Koh Samui (B)', text: 'Breakfast, check out and shared transfer to the ferry terminal\nFerry transfer across to Koh Samui, then a shared transfer to your hotel\nCheck in near Chaweng beach and spend the evening on the sand\nOptional: Fisherman\'s Village or the stalls at The Wharf Samui', hotel: 'First Residence Hotel', highlights: ['Breakfast, check out and shared transfer to the ferry terminal', 'Ferry transfer across to Koh Samui, then a shared transfer to your hotel', 'Check in near Chaweng beach and spend the evening on the sand'] },
    { title: 'Day 4: Koh Samui at leisure (B)', text: 'Breakfast, then the whole day is yours on the island\nOptional: Big Buddha temple, Wat Plai Laem and the Secret Buddha Garden\nOptional: Lad Koh viewpoint on the ring road, best in morning light\nLong swims and a sunset on Chaweng beach cost nothing at all', hotel: 'First Residence Hotel', highlights: ['Breakfast, then the whole day is yours on the island', 'Optional: Big Buddha temple, Wat Plai Laem and the Secret Buddha Garden', 'Optional: Lad Koh viewpoint on the ring road, best in morning light'] },
    { title: 'Day 5: Back to Phuket (B)', text: 'Breakfast, check out and shared transfer to the Samui pier\nFerry transfer back across to Phuket and on to Patong\nAfternoon free for the pool, the spa or one more hour on the beach\nOptional: a dolphin show, the Siam Niramit show or Muay Thai at Patong stadium', hotel: 'Club Bamboo Boutique Resort & Spa', highlights: ['Breakfast, check out and shared transfer to the Samui pier', 'Ferry transfer back across to Phuket and on to Patong', 'Afternoon free for the pool, the spa or one more hour on the beach'] },
    { title: 'Day 6: Departure (B)', text: 'Breakfast and an unhurried check out\nPrivate sedan transfer to Phuket International Airport', hotel: 'Departure', highlights: ['Breakfast and an unhurried check out', 'Private sedan transfer to Phuket International Airport'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; island and temple entry fees; lunches and dinners other than the island tour lunch; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Thailand', href: '/asien/thailand' },
  { label: detail.title }
];

export const phuketKohSamuiBeachEscapeBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const phuketKohSamuiBeachEscapeProduct = {
  slug: detail.slug,
  places: stops.map((s) => s.name),
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 3,
  hotels: 2,
  cities: 2,
  activities: 1,
  transfers: 12,
  meals: 6,
  price: detail.price,
  images: cardImages
};
