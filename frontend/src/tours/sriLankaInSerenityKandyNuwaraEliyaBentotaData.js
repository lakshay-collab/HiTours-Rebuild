// Sri Lanka in Serenity: Kandy, Nuwara Eliya and Bentota. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
  img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg'),
  img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
  img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
  img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
  img('1kb7guo5ceqcpw2m5ghs7db8hnrr_shutterstock_229257724.jpg'),
  img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
  img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
  img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
  img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
  img('4vx0uxw0gypf4hfxuxnj6mn9e7uk_shutterstock_2079192364.jpg'),
  img('he4i1uj8p4gfewqhqzg9rjfoflb6_shutterstock_567871675.jpg'),
  img('vfhatdwrvgugvzyz8dyuabhab3fr_5083535526_75beee8f11_o.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kandy',
    dayLabel: 'Day 1',
    images: [
      img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
      img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
      img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
      img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg')
    ],
    dayImages: {
      1: [
        img('4vx0uxw0gypf4hfxuxnj6mn9e7uk_shutterstock_2079192364.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('he4i1uj8p4gfewqhqzg9rjfoflb6_shutterstock_567871675.jpg'),
        img('vfhatdwrvgugvzyz8dyuabhab3fr_5083535526_75beee8f11_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Kandy`,
      'Arrival at Bandaranaike International and private transfer inland',
      'A stop at the Pinnawala elephant sanctuary on the way',
      'The Temple of the Sacred Tooth Relic and a circuit of the lake',
      'The Kandyan dance performance and dinner at the hotel'
    ],
    accommodation: {
      name: 'Skyloft, Kandy',
      description: '1 night · Breakfast and dinner · Deluxe room · 3★ · Deluxe class hotel with views over the Kandy valley',
      images: [
        img('g4qy62voxvnmp2baolq1johj9gjy_185291945.jpg'),
        img('ewl1y3v6h30d8ii4mp92dd0d89ww_518480894.jpg'),
        img('1cl83mmfaazz19eohw9cgmu1xmb8_349059406.jpg'),
        img('vwd731a3b5ex42dsuebwcz5215ur_349060691.jpg'),
        img('y9hau9c34sn3ryikfg02d52hi95w_349059422.jpg'),
        img('5rnvd2biflwofo4sk1ngi91qbz61_348607554.jpg'),
        img('v0gxe4ai8ws20zy29e3vzwp3jjhm_348609806.jpg'),
        img('iavkzlkuoql8mh4uu3kxy86nnfd5_skyloft-kandy-by-yathra%20(2).jpg'),
        img('mxjdm683xc4309oon3lub52o5dhl_349059413.jpg'),
        img('m9iffr5u4emz9iciwlr7cedocp0y_89639081.jpg'),
        img('9v3v9v19nbe2jwn2gqcie7xisy52_270511848.jpg'),
        img('74nqssy8b77ap1thrtvgbnr5090o_348609803.jpg'),
        img('275l3fzov9a0d7x99yantrpryaya_skyloft-kandy-by-yathra%20(1).jpg'),
        img('p8aqeh0fg6j8srzvmbqzn8nfwj1z_skyloft-kandy-by-yathra.jpg')
      ]
    },
    activities: [
      {
        name: 'Pinnawala Elephant Orphanage',
        day: 1,
        optional: false,
        image: img('4vx0uxw0gypf4hfxuxnj6mn9e7uk_shutterstock_2079192364.jpg'),
        description: 'A stop on the way up from the airport to watch the resident herd bathe in the Maha Oya river and feed at the sanctuary.'
      },
      {
        name: 'Tooth Relic temple, lake and Kandyan dance',
        day: 1,
        optional: false,
        image: img('he4i1uj8p4gfewqhqzg9rjfoflb6_shutterstock_567871675.jpg'),
        description: 'The Temple of the Sacred Tooth Relic, a circuit of the lake and the drummers and dancers of the evening show.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'One night above the Kandy valley with the elephants on the way, the Tooth Relic temple and the dance show.',
      image: img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nuwara Eliya',
    dayLabel: 'Day 2',
    images: [
      img('ehxgq7xsvpq2xfzcpi1774ppfjgw_shutterstock_1019478988.jpg'),
      img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg'),
      img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg'),
      img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg')
    ],
    dayImages: {
      2: [
        img('q1902ul6ziqnkzrv10v5mgo6yjnm_shutterstock_776788270.jpg'),
        img('etdeyvqpbiv7xkk9yen0xk7rnnf8_shutterstock_1055423288.jpg'),
        img('pbmekt55cowonhomw3quj8cyl7f7_download.jpg'),
        img('wzqw02ope6gs0imna002q9au7guc_db.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Into the tea country`,
      'Breakfast and a transfer up to Nuwara Eliya',
      'A tea plantation and factory visit on the climb',
      'Gregory Lake, Victoria Park and the colonial town',
      'Check in among the tea bushes'
    ],
    accommodation: {
      name: 'The Tea Garden, Nuwara Eliya',
      description: '1 night · Breakfast · Standard room · 3★ · Hill country hotel among the tea bushes above Nuwara Eliya',
      images: [
        img('wnrqjj1kgpsms3x3mo1i1f82q2jv_658823789.jpg'),
        img('madiz8p8q764vx4r6cjmlfley0y6_86496619.jpg'),
        img('k2x0tgqsws9eal2g9ukv23ia5kb7_86496613.jpg'),
        img('5k40h2hx9uc5rfccapv0zjerxu2z_86496610.jpg'),
        img('o6xeiimdpeaspmksnnmgv0ke40da_658823823.jpg'),
        img('wlzsbbru62qa5z1qa9zng3r4pjte_86496618.jpg'),
        img('r6xn7phppyiqphggmmgq3x2lt5ha_86496611.jpg'),
        img('h4yfgbo48moql2dtuuzrnepcpiha_86496606.jpg')
      ]
    },
    activities: [
      {
        name: 'Nuwara Eliya sightseeing and tea plantation',
        day: 2,
        optional: false,
        image: img('q1902ul6ziqnkzrv10v5mgo6yjnm_shutterstock_776788270.jpg'),
        description: 'Gregory Lake, Victoria Park, the colonial town and a tea plantation and factory.'
      }
    ],
    program: {
      name: 'Nuwara Eliya',
      description: 'Up into the tea country for a night among the bushes with a tour of the town and a plantation.',
      image: img('ehxgq7xsvpq2xfzcpi1774ppfjgw_shutterstock_1019478988.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Bentota',
    dayLabel: 'Day 3 to 4',
    images: [
      img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg'),
      img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg'),
      img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
      img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg')
    ],
    dayImages: {
      3: [
        img('1il0jt4lbsqgauk25ht6ct2f1qo2_shutterstock_606791012.jpg'),
        img('2kyg08hfs2xevolr6axgk0fpxg9d_download.jpg'),
        img('lrz7pf2z9s2ioe2i7ieoswi02igd_shutterstock_1503294815%20(1).jpg'),
        img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg')
      ],
      4: [
        img('kwukuf0uto8q12gfnslw5u0qf3aw_shutterstock_313315730.jpg'),
        img('g0ip61eijdtipwasn3ks1tzv0dgm_shutterstock_1693440277.jpg'),
        img('2879z0d57837hvbn8leh0dk9svgf_shutterstock_313315721.jpg'),
        img('iuwooxzaxrkczd5rept411he0yv4_shutterstock_1486172417.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Down to the coast`,
      'Breakfast and a long transfer down from the hills',
      'Check in by the sea',
      'A late afternoon boat on the Madu River',
      'Sunset on the sand',
      `${DAY_MARK}Day 4 · Bentota sightseeing`,
      'Breakfast, then the Kosgoda turtle hatchery',
      'A cinnamon plantation and the fish pedicure centre',
      'The afternoon on the beach',
      'Optional: water sports at the river mouth'
    ],
    accommodation: {
      name: 'Laya Beach, Bentota',
      description: '2 nights · Breakfast · Standard room · 3★ · Beachfront hotel at Wadduwa on the way to Bentota',
      images: [
        img('cjonkt9ga9m8ejicgzs3jwkz9fz2_d01368b4_z.png'),
        img('uoub0u4dkxuxkhrkoxihleb1zs2e_cd46f354_z.png'),
        img('jdht879wjbtdd43yxvtm5gl5gll4_508118998.png'),
        img('ii54wo0kqef7gsbya9a0jcg3i5or_de4f9285_z.png'),
        img('w7u1zj9rk9jkn6a4vm5mmup4x0ov_e007a285_z.png'),
        img('gxp2x1bmvu8kne1i7xp9vb2gg5zh_c309adf0_z.png'),
        img('ma9r2lj70i4swt7fw5k8rra5la98_9e2c1e41_z.png'),
        img('pt8pmhk0lpcf72xg6lqfx4t67jwm_9bcac2e7_z.png'),
        img('tedb4ph64gvxhovb86j8wb60rmll_586408e8_z.png'),
        img('zg96i0qe51ltmkcq88robilk8ehb_6aee2531_z.png'),
        img('hhm0h1x1x4ib6c5adgxuv963gmcz_497116361.png'),
        img('9eeddkt0w075dhw3ovczi95e8h1o_6eaf2f23_z.png')
      ]
    },
    activities: [
      {
        name: 'Madu River boat',
        day: 3,
        optional: false,
        image: img('1il0jt4lbsqgauk25ht6ct2f1qo2_shutterstock_606791012.jpg'),
        description: 'A late afternoon boat through the mangrove islands of the Madu Ganga.'
      },
      {
        name: 'Bentota sightseeing, turtles, cinnamon and fish spa',
        day: 4,
        optional: false,
        image: img('kwukuf0uto8q12gfnslw5u0qf3aw_shutterstock_313315730.jpg'),
        description: 'The Kosgoda turtle hatchery, a cinnamon plantation, the fish pedicure centre and the beach.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Two nights by the sea with an evening boat on the Madu River and a day of the turtles, the cinnamon plantation and the fish spa.',
      image: img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Colombo',
    dayLabel: 'Day 5 to 6',
    images: [
      img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
      img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
      img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
      img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg')
    ],
    dayImages: {
      5: [
        img('12dui4udzhmmfftpyxvq8ajypv0k_shutterstock_1084356770.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg'),
        img('kmwpt2e6q1n3i7gsabo6lmkqfqbg_1581756612_shutterstock_1444012382.jpg'),
        img('iqtw45cyy9omran9gplkzv4ynzae_31447619406_5dae3e4f4c_k.jpg')
      ],
      6: [
        img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
        img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
        img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
        img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Colombo city tour`,
      'Breakfast and a transfer up the coast to Colombo',
      'Galle Face Green and the Gangaramaya temple complex',
      'The Fort district, the Lotus Tower and Pettah market',
      'Your last night in the capital',
      `${DAY_MARK}Day 6 · Departure from Colombo`,
      'Breakfast at the hotel and check out',
      'Private transfer to Bandaranaike International for your flight home'
    ],
    accommodation: {
      name: 'Marine Bay, Colombo',
      description: '1 night · Breakfast · Standard room · 3★ · City hotel a short walk from Galle Face Green',
      images: [
        img('8txcjwxxdspxgpn7p0kuhhlrwvnk_Marine6.jpeg'),
        img('9xn6njie3t3geva5n7l01ik6m6m6_Marine7.jpeg'),
        img('u6iafq8ex6zijlg4b7bgru58q5w3_Marine4.jpeg'),
        img('s4efaq9cjmvpcc073gegj65bak82_Marine8.jpeg'),
        img('h7ji8xax40o5hilnnqodtbvv4k5x_Marine5.jpeg'),
        img('atomh8uas9n9mlk6nmmeh0ftc2hl_Marine3.jpeg'),
        img('dn1q2zxemr2v9idwoabeez5qfmy3_Marine1.jpeg'),
        img('a4ik4sq1rmbwmwwgeh5l9lxscd69_Marine2.jpeg')
      ]
    },
    activities: [
      {
        name: 'Colombo sightseeing tour',
        day: 5,
        optional: false,
        image: img('12dui4udzhmmfftpyxvq8ajypv0k_shutterstock_1084356770.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A last night in the capital with a tour of its temples, colonial quarter and markets.',
      image: img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg')
    }
  }
];

const detail = {
  slug: 'sri-lanka-in-serenity-kandy-nuwara-eliya-and-bentota',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sri Lanka in Serenity: Kandy, Nuwara Eliya and Bentota',
  alt: 'A quiet stretch of Bentota beach at first light',
  days: '6 days / 5 nights',
  stations: '4 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Budget',
  tags: ['Budget', 'Beach', 'Nature'],
  price: 33250,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Nuwara Eliya', 'Bentota', 'Colombo'],
  stats: { days: 6, cities: 4, hotels: 4, activities: 6, transfers: 7 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['7 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aditya',
    image: '/experts/aditya.webp',
    role: 'Sri Lanka expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Kandy, the hills and then the coast. Sri Lanka works best when you let the island cool you down before it warms you up again.',
    quoteMore: 'Carry a light sweater for Nuwara Eliya. It sits at nearly 1,900 metres and evenings are surprisingly chilly even in April.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six unhurried days: a night in Kandy with the elephants, the Tooth Relic temple and the dance show, a night in the tea country, two nights by the sea with the Madu River, the turtles and the cinnamon plantation, and a last night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights in deluxe class hotels with breakfast daily (dinner also on the first night); private airport transfers and all road travel in an air conditioned car with chauffeur guide; the Pinnawala elephant sanctuary; the Tooth Relic temple, lake drive and Kandyan dance performance; Nuwara Eliya sightseeing and a tea plantation; the Madu River boat; Bentota sightseeing with the turtle hatchery, cinnamon plantation and fish spa; the Colombo sightseeing tour.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches and dinners unless stated; entrance tickets; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (D)', text: 'Arrival at Bandaranaike International and private transfer inland\nA stop at the Pinnawala elephant sanctuary on the way\nThe Temple of the Sacred Tooth Relic and a circuit of the lake\nThe Kandyan dance performance and dinner at the hotel', hotel: 'Skyloft Kandy', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A stop at the Pinnawala elephant sanctuary on the way', 'The Temple of the Sacred Tooth Relic and a circuit of the lake'] },
    { title: 'Day 2: Into the tea country (B)', text: 'Breakfast and a transfer up to Nuwara Eliya\nA tea plantation and factory visit on the climb\nGregory Lake, Victoria Park and the colonial town\nCheck in among the tea bushes', hotel: 'The Tea Garden', highlights: ['Breakfast and a transfer up to Nuwara Eliya', 'A tea plantation and factory visit on the climb', 'Gregory Lake, Victoria Park and the colonial town'] },
    { title: 'Day 3: Down to the coast (B)', text: 'Breakfast and a long transfer down from the hills\nCheck in by the sea\nA late afternoon boat on the Madu River\nSunset on the sand', hotel: 'Laya beach', highlights: ['Breakfast and a long transfer down from the hills', 'Check in by the sea', 'A late afternoon boat on the Madu River'] },
    { title: 'Day 4: Bentota sightseeing (B)', text: 'Breakfast, then the Kosgoda turtle hatchery\nA cinnamon plantation and the fish pedicure centre\nThe afternoon on the beach\nOptional: water sports at the river mouth', hotel: 'Laya beach', highlights: ['Breakfast, then the Kosgoda turtle hatchery', 'A cinnamon plantation and the fish pedicure centre', 'The afternoon on the beach'] },
    { title: 'Day 5: Colombo city tour (B)', text: 'Breakfast and a transfer up the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nYour last night in the capital', hotel: 'Marine Bay Colombo', highlights: ['Breakfast and a transfer up the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
    { title: 'Day 6: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches and dinners unless stated; entrance tickets; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const sriLankaInSerenityKandyNuwaraEliyaBentotaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sriLankaInSerenityKandyNuwaraEliyaBentotaProduct = {
  slug: detail.slug,
  places: ['Kandy', 'Nuwara Eliya', 'Bentota', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 6,
  transfers: 7,
  meals: 6,
  price: detail.price,
  images: cardImages
};
