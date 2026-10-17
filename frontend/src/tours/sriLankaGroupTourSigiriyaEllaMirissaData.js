// Sri Lanka Group Tour: Sigiriya, Ella and Mirissa. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('mdoexa7zou4h516giquouu1ulz7n_1582551002_shutterstock_197226800.jpg'),
  img('1h0xot06s2m80b1k1jgc3a6m2qs8_image%20(2).png'),
  img('5a6ucnntgvnagzecv0b84fenugvj_shutterstock_1068884744.jpg'),
  img('9mfd5jeksxre8msprp5k0ep50hpe_Mirissa%203.jpg'),
  img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
  img('nke0z7i8q1fsnx1rmvtukgltsdfq_Sigiriya%20Rock%203.jpg'),
  img('3twsoxx2e2h1k2822jdddw7hgjnf_140958556Nuwara_Eliya_Gregory_Lake.jpg'),
  img('qt39padrr5ywwsekasuhvvyc16uk_shutterstock_573507811.jpg'),
  img('erzts14ece8u6pbe6qhecfuhqp1a_18436933176_1d582f87a4_o.jpg'),
  img('95lozheaefxpk0dprdqtzecxtvxh_Lotus%20Tower,%20Colombo%201.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('mdoexa7zou4h516giquouu1ulz7n_1582551002_shutterstock_197226800.jpg'),
  img('1h0xot06s2m80b1k1jgc3a6m2qs8_image%20(2).png'),
  img('5a6ucnntgvnagzecv0b84fenugvj_shutterstock_1068884744.jpg'),
  img('9mfd5jeksxre8msprp5k0ep50hpe_Mirissa%203.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Sigiriya',
    dayLabel: 'Day 1',
    images: [
      img('mdoexa7zou4h516giquouu1ulz7n_1582551002_shutterstock_197226800.jpg'),
      img('zllscloggfck646l5onimofn5lde_1582551003_Colombo_5.png'),
      img('rpuhjkwp1nov76hv70xygxs1yxyp_1582551004_Colombo_3.png'),
      img('wnk80oam0ntur9eqsuofnagvbhb9_1582550999_shutterstock_1327703336.jpg')
    ],
    dayImages: {
      1: [
        img('mdoexa7zou4h516giquouu1ulz7n_1582551002_shutterstock_197226800.jpg'),
        img('zllscloggfck646l5onimofn5lde_1582551003_Colombo_5.png'),
        img('rpuhjkwp1nov76hv70xygxs1yxyp_1582551004_Colombo_3.png'),
        img('wnk80oam0ntur9eqsuofnagvbhb9_1582550999_shutterstock_1327703336.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Sigiriya`,
      'Arrival at Bandaranaike International and a group transfer inland',
      'Meet your trip captain and fellow travellers',
      'Check in near the rock by late afternoon',
      'A welcome dinner with the group'
    ],
    accommodation: {
      name: 'Group hotel, Sigiriya',
      description: '1 night · Breakfast · Twin sharing room · 3★ · Comfortable hotel in the Cultural Triangle near the rock',
      images: [
        img('qqmtcgw3h8fow9nxemzaog30yt5e_shutterstock_2314158603.jpg'),
        img('qu3hn8xyp2hhwml15ou2i0fzxswe_shutterstock_2365441577.jpg'),
        img('hlqcocjhydm4r1jqgywjrv6r091p_shutterstock_2212268329.jpg'),
        img('9rx13bxnmvwrpuhf5u5m1isppbux_shutterstock_410626660.jpg'),
        img('zddej06lbz5sx2o1d0hx0bg0bfhd_1582551005_Colombo_1.png'),
        img('mdoexa7zou4h516giquouu1ulz7n_1582551002_shutterstock_197226800.jpg')
      ]
    },
    activities: [
      {
        name: 'Sigiriya rock fortress guided trek',
        day: 2,
        optional: false,
        image: img('mdoexa7zou4h516giquouu1ulz7n_1582551002_shutterstock_197226800.jpg'),
        description: 'An early guided climb past the water gardens, the mirror wall and the lion paws to the palace ruins on the summit.'
      },
      {
        name: 'Dambulla cave temple',
        day: 2,
        optional: false,
        image: img('zllscloggfck646l5onimofn5lde_1582551003_Colombo_5.png'),
        description: 'Five cave shrines carved into the rock, lined with murals and more than a hundred Buddha statues.'
      }
    ],
    program: {
      name: 'Sigiriya',
      description: 'One night in the Cultural Triangle with a dawn climb of the rock fortress the next morning.',
      image: img('mdoexa7zou4h516giquouu1ulz7n_1582551002_shutterstock_197226800.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nuwara Eliya',
    dayLabel: 'Day 2',
    images: [
      img('adv5knl6mm5aarzzp399bwi8izru_20211006_133857.jpg'),
      img('1h0xot06s2m80b1k1jgc3a6m2qs8_image%20(2).png'),
      img('c5d5akjf4ek0zsuldrgeqqwpvx4h_5821411770_f564d81e3a_b.jpg'),
      img('wljwriquafr9egsd2d9f63j7jyqt_14881473536_6a3be16ea2_b.jpg')
    ],
    dayImages: {
      2: [
        img('adv5knl6mm5aarzzp399bwi8izru_20211006_133857.jpg'),
        img('1h0xot06s2m80b1k1jgc3a6m2qs8_image%20(2).png'),
        img('c5d5akjf4ek0zsuldrgeqqwpvx4h_5821411770_f564d81e3a_b.jpg'),
        img('wljwriquafr9egsd2d9f63j7jyqt_14881473536_6a3be16ea2_b.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Sigiriya at dawn and up to the hills`,
      'An early guided climb of the Sigiriya rock fortress',
      'Breakfast and check out, then the Dambulla cave temple',
      'A tea factory stop on the climb into the hills',
      'Check in at Nuwara Eliya and dinner with the group'
    ],
    accommodation: {
      name: 'Group hotel, Nuwara Eliya',
      description: '1 night · Breakfast · Twin sharing room · 3★ · Hill town hotel a short walk from Gregory Lake',
      images: [
        img('zllscloggfck646l5onimofn5lde_1582551003_Colombo_5.png'),
        img('rpuhjkwp1nov76hv70xygxs1yxyp_1582551004_Colombo_3.png'),
        img('wnk80oam0ntur9eqsuofnagvbhb9_1582550999_shutterstock_1327703336.jpg'),
        img('1hwv6ftp457k7kc3p4yw0wwe8ks9_1582551004_Colombo_2.png'),
        img('4uvsaxqxq5olumc5qkbg4l51xqis_shutterstock_1046627314.jpg'),
        img('nke0z7i8q1fsnx1rmvtukgltsdfq_Sigiriya%20Rock%203.jpg')
      ]
    },
    activities: [
      {
        name: 'Tea plantation and factory visit',
        day: 2,
        optional: false,
        image: img('adv5knl6mm5aarzzp399bwi8izru_20211006_133857.jpg'),
        description: 'A stop at a working estate to see the leaves rolled and fired, with a cup of fresh Ceylon tea at the end.'
      },
      {
        name: 'Gregory Lake and Nuwara Eliya town',
        day: 3,
        optional: false,
        image: img('1h0xot06s2m80b1k1jgc3a6m2qs8_image%20(2).png'),
        description: 'A half day around the lake, the racecourse and the colonial post office and market of the town.'
      }
    ],
    program: {
      name: 'Nuwara Eliya',
      description: 'Up through the estates with a tea factory stop for a night in the cool of Little England.',
      image: img('adv5knl6mm5aarzzp399bwi8izru_20211006_133857.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Ella',
    dayLabel: 'Day 3 to 4',
    images: [
      img('6w51ui6a9g0e0o0hrf84kt4s1a7x_shutterstock_2335215109.jpg'),
      img('rlnt7wwjqxlik4vgth13o4lznk2u_shutterstock_1019478988.jpg'),
      img('5a6ucnntgvnagzecv0b84fenugvj_shutterstock_1068884744.jpg'),
      img('s62wq89cqt0wq5tc8nqh6ek2vmwd_shutterstock_1084348016.jpg')
    ],
    dayImages: {
      3: [
        img('6w51ui6a9g0e0o0hrf84kt4s1a7x_shutterstock_2335215109.jpg'),
        img('rlnt7wwjqxlik4vgth13o4lznk2u_shutterstock_1019478988.jpg'),
        img('5a6ucnntgvnagzecv0b84fenugvj_shutterstock_1068884744.jpg'),
        img('s62wq89cqt0wq5tc8nqh6ek2vmwd_shutterstock_1084348016.jpg')
      ],
      4: [
        img('6w51ui6a9g0e0o0hrf84kt4s1a7x_shutterstock_2335215109.jpg'),
        img('rlnt7wwjqxlik4vgth13o4lznk2u_shutterstock_1019478988.jpg'),
        img('5a6ucnntgvnagzecv0b84fenugvj_shutterstock_1068884744.jpg'),
        img('s62wq89cqt0wq5tc8nqh6ek2vmwd_shutterstock_1084348016.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Nuwara Eliya and on to Ella`,
      'Breakfast, then Gregory Lake and the colonial town',
      'A scenic transfer through the estates to Ella',
      'Check in with views down the Ella gap',
      'The evening free in the cafes of the main street',
      `${DAY_MARK}Day 4 · Ella sightseeing`,
      'An early walk up Little Adams Peak',
      'Breakfast, then the Nine Arches Bridge',
      'Ravana Falls and the cave of the legend',
      'The evening at leisure in Ella'
    ],
    accommodation: {
      name: 'Group hotel, Ella',
      description: '2 nights · Breakfast · Twin sharing room · 3★ · Guesthouse style hotel with views down the Ella gap',
      images: [
        img('b14m75op1m07swbrru2fqbc31lfh_7006860454_cec45734cb_o.jpg'),
        img('ehxgq7xsvpq2xfzcpi1774ppfjgw_shutterstock_1019478988.jpg'),
        img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg'),
        img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg'),
        img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg'),
        img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg')
      ]
    },
    activities: [
      {
        name: 'Little Adams Peak hike',
        day: 4,
        optional: false,
        image: img('6w51ui6a9g0e0o0hrf84kt4s1a7x_shutterstock_2335215109.jpg'),
        description: 'An easy early morning walk through the tea to a ridge with views down the Ella gap to the plains.'
      },
      {
        name: 'Nine Arches Bridge',
        day: 4,
        optional: false,
        image: img('rlnt7wwjqxlik4vgth13o4lznk2u_shutterstock_1019478988.jpg'),
        description: 'The colonial railway viaduct in the jungle, timed for a train crossing if the schedule allows.'
      },
      {
        name: 'Ravana Falls and Ravana Cave',
        day: 4,
        optional: false,
        image: img('5a6ucnntgvnagzecv0b84fenugvj_shutterstock_1068884744.jpg'),
        description: 'The wide roadside waterfall of the Ramayana legend and the cave above it.'
      }
    ],
    program: {
      name: 'Ella',
      description: 'Two nights in the hill town everyone falls for, with a full day of its viewpoints, bridge, falls and cave.',
      image: img('6w51ui6a9g0e0o0hrf84kt4s1a7x_shutterstock_2335215109.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Mirissa',
    dayLabel: 'Day 5 to 6',
    images: [
      img('yeuauwaj79q3pdbwidadhfabfn3v_32080329747_0d4c650143_o.jpg'),
      img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
      img('x476c13gqi9e7410gn4rjqpa9w5b_Galle%20Fort%202.jpg'),
      img('9mfd5jeksxre8msprp5k0ep50hpe_Mirissa%203.jpg')
    ],
    dayImages: {
      5: [
        img('yeuauwaj79q3pdbwidadhfabfn3v_32080329747_0d4c650143_o.jpg'),
        img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        img('x476c13gqi9e7410gn4rjqpa9w5b_Galle%20Fort%202.jpg'),
        img('9mfd5jeksxre8msprp5k0ep50hpe_Mirissa%203.jpg')
      ],
      6: [
        img('yeuauwaj79q3pdbwidadhfabfn3v_32080329747_0d4c650143_o.jpg'),
        img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        img('x476c13gqi9e7410gn4rjqpa9w5b_Galle%20Fort%202.jpg'),
        img('9mfd5jeksxre8msprp5k0ep50hpe_Mirissa%203.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · To the south coast`,
      'Breakfast and check out of Ella',
      'A transfer down from the hills to Mirissa',
      'Check in and the afternoon on the beach',
      'Sunset from Coconut Tree Hill',
      `${DAY_MARK}Day 6 · Mirissa and Galle`,
      'Breakfast and a free morning on Mirissa beach',
      'Optional: a whale watching boat (seasonal)',
      'The afternoon inside the Galle Dutch fort',
      'Sunset from the ramparts and back to Mirissa'
    ],
    accommodation: {
      name: 'Group hotel, Mirissa',
      description: '2 nights · Breakfast · Twin sharing room · 3★ · Beachside hotel a few steps from the sand',
      images: [
        img('nblwv1u3cze5qug1glqs5ltuux5m_shutterstock_776788237%20(1).jpg'),
        img('1kb7guo5ceqcpw2m5ghs7db8hnrr_shutterstock_229257724.jpg'),
        img('8pngc3kvspg8528bwbrbu6t8b5gz_shutterstock_1423148210.jpg'),
        img('7ztsyywjmihi32gluk6v8argfrlo_shutterstock_1116598154.jpg'),
        img('t6xl6k0v75lsn2kcto1z5cm0ksze_shutterstock_742663663%20(1).jpg'),
        img('r4lfhknhknbpfy5522a86bjrmsmi_Hakgala%20Botanical%20Garden%201.jpg')
      ]
    },
    activities: [
      {
        name: 'Coconut Tree Hill at sunset',
        day: 5,
        optional: false,
        image: img('yeuauwaj79q3pdbwidadhfabfn3v_32080329747_0d4c650143_o.jpg'),
        description: 'The palm topped headland at the end of Mirissa beach, best at the golden hour.'
      },
      {
        name: 'Galle fort walk',
        day: 6,
        optional: false,
        image: img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        description: 'An afternoon inside the Dutch fort: the ramparts, the lighthouse, the old church and sunset from the walls.'
      }
    ],
    program: {
      name: 'Mirissa',
      description: 'Two nights on the south coast with Coconut Tree Hill at sunset and an afternoon at the Galle fort.',
      image: img('yeuauwaj79q3pdbwidadhfabfn3v_32080329747_0d4c650143_o.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Colombo',
    dayLabel: 'Day 7 to 8',
    images: [
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
      img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
      img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg')
    ],
    dayImages: {
      7: [
        img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
        img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
        img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
        img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg')
      ],
      8: [
        img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
        img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
        img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
        img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Bentota backwaters and Colombo`,
      'Breakfast and check out',
      'A boat safari on the Bentota river mangroves',
      'A transfer on up the coast to Colombo',
      'Check in and a farewell evening with the group',
      `${DAY_MARK}Day 8 · Departure from Colombo`,
      'Breakfast at the hotel and check out',
      'Transfer to Bandaranaike International for your flight home'
    ],
    accommodation: {
      name: 'Group hotel, Colombo',
      description: '1 night · Breakfast · Twin sharing room · 3★ · City hotel close to Galle Face Green',
      images: [
        img('0j1gce0nffgeyve8pc8p8hn08eha_shutterstock_1805854573%20(1).jpg'),
        img('uyqik7pg1r1wn2onpwf1jo1gbd9a_shutterstock_228970507.jpg'),
        img('n5rngnkvq515s623xth9tr9t0g6e_shutterstock_796990585.jpg'),
        img('m4a1kjjciwvqlgyu93448xp3e3vi_shutterstock_723099481.jpg'),
        img('0htpk9u4mvmvtsq5lfz3dvf5340y_shutterstock_1453908407%20(1).jpg'),
        img('6upo74208pk22ejwy6dpssckyjdn_Depositphotos_158390642_s-2019.png')
      ]
    },
    activities: [
      {
        name: 'Bentota boat safari',
        day: 7,
        optional: false,
        image: img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
        description: 'A boat through the mangroves and islands of the Bentota river, with monitor lizards and water birds along the banks.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A boat safari on the Bentota backwaters on the way up to the capital for the last night.',
      image: img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
    }
  }
];

const detail = {
  slug: 'sri-lanka-group-tour-sigiriya-ella-and-mirissa',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sri Lanka Group Tour: Sigiriya, Ella and Mirissa',
  alt: 'The Nine Arches Bridge curving through the tea hills at Ella',
  days: '8 days / 7 nights',
  stations: '5 stops',
  transport: 'Air conditioned group coach with an English speaking chauffeur and a Hi Tours trip captain',
  tag: 'Group tour',
  tags: ['Group tour', 'Adventure', 'Beach'],
  price: 54149,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Sigiriya', 'Nuwara Eliya', 'Ella', 'Mirissa', 'Colombo'],
  stats: { days: 8, cities: 5, hotels: 5, activities: 10, transfers: 7 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['10 experiences', 'Activities'],
    ['7 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aditya',
    image: '/experts/aditya.webp',
    role: 'Sri Lanka expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Sigiriya, Ella and Mirissa in one week is the route I recommend to every first timer under forty. Heritage, hills and the sea in that order.',
    quoteMore: 'Climb Sigiriya before breakfast. The gates open at seven, the steps are in shade and you are back down before the heat and the crowds arrive.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days with a small group and a trip captain: a dawn climb of Sigiriya, the Dambulla caves and a tea factory, a night in Nuwara Eliya, two in Ella for Little Adams Peak and the Nine Arches Bridge, two on the beach at Mirissa with Galle fort, and a Bentota boat safari on the way to Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights in comfortable hotels on twin sharing; breakfast from day 2 and dinner on days 1 and 2; an air conditioned coach with English speaking chauffeur; a Hi Tours trip captain throughout; the guided Sigiriya rock climb; Dambulla cave temple and tea factory entrances; the Bentota boat safari; airport pick up on arrival; bottled water on tour days.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; GST and TCS; lunches and dinners unless stated; whale watching and water sports; the departure airport transfer; travel insurance; tips and personal expenses. Group departures are for travellers aged 16 to 42; ask us about a private version for other ages.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Sigiriya (D)', text: 'Arrival at Bandaranaike International and a group transfer inland\nMeet your trip captain and fellow travellers\nCheck in near the rock by late afternoon\nA welcome dinner with the group', hotel: 'Sigiriya group hotel', highlights: ['Arrival at Bandaranaike International and a group transfer inland', 'Meet your trip captain and fellow travellers', 'Check in near the rock by late afternoon'] },
    { title: 'Day 2: Sigiriya at dawn and up to the hills (B, D)', text: 'An early guided climb of the Sigiriya rock fortress\nBreakfast and check out, then the Dambulla cave temple\nA tea factory stop on the climb into the hills\nCheck in at Nuwara Eliya and dinner with the group', hotel: 'Nuwara Eliya group hotel', highlights: ['An early guided climb of the Sigiriya rock fortress', 'Breakfast and check out, then the Dambulla cave temple', 'A tea factory stop on the climb into the hills'] },
    { title: 'Day 3: Nuwara Eliya and on to Ella (B)', text: 'Breakfast, then Gregory Lake and the colonial town\nA scenic transfer through the estates to Ella\nCheck in with views down the Ella gap\nThe evening free in the cafes of the main street', hotel: 'Ella group hotel', highlights: ['Breakfast, then Gregory Lake and the colonial town', 'A scenic transfer through the estates to Ella', 'Check in with views down the Ella gap'] },
    { title: 'Day 4: Ella sightseeing (B)', text: 'An early walk up Little Adams Peak\nBreakfast, then the Nine Arches Bridge\nRavana Falls and the cave of the legend\nThe evening at leisure in Ella', hotel: 'Ella group hotel', highlights: ['An early walk up Little Adams Peak', 'Breakfast, then the Nine Arches Bridge', 'Ravana Falls and the cave of the legend'] },
    { title: 'Day 5: To the south coast (B)', text: 'Breakfast and check out of Ella\nA transfer down from the hills to Mirissa\nCheck in and the afternoon on the beach\nSunset from Coconut Tree Hill', hotel: 'Mirissa group hotel', highlights: ['Breakfast and check out of Ella', 'A transfer down from the hills to Mirissa', 'Check in and the afternoon on the beach'] },
    { title: 'Day 6: Mirissa and Galle (B)', text: 'Breakfast and a free morning on Mirissa beach\nOptional: a whale watching boat (seasonal)\nThe afternoon inside the Galle Dutch fort\nSunset from the ramparts and back to Mirissa', hotel: 'Mirissa group hotel', highlights: ['Breakfast and a free morning on Mirissa beach', 'Optional: a whale watching boat (seasonal)', 'The afternoon inside the Galle Dutch fort'] },
    { title: 'Day 7: Bentota backwaters and Colombo (B)', text: 'Breakfast and check out\nA boat safari on the Bentota river mangroves\nA transfer on up the coast to Colombo\nCheck in and a farewell evening with the group', hotel: 'Colombo group hotel', highlights: ['Breakfast and check out', 'A boat safari on the Bentota river mangroves', 'A transfer on up the coast to Colombo'] },
    { title: 'Day 8: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nTransfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; GST and TCS; lunches and dinners unless stated; whale watching and water sports; the departure airport transfer; travel insurance; tips and personal expenses. Group departures are for travellers aged 16 to 42; ask us about a private version for other ages.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const sriLankaGroupTourSigiriyaEllaMirissaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sriLankaGroupTourSigiriyaEllaMirissaProduct = {
  slug: detail.slug,
  places: ['Sigiriya', 'Nuwara Eliya', 'Ella', 'Mirissa', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 10,
  transfers: 7,
  meals: 9,
  price: detail.price,
  images: cardImages
};
