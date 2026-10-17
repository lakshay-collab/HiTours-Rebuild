// Sri Lanka Weekend Island Break: Bentota and Colombo. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
  img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
  img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg'),
  img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
  img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
  img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
  img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg'),
  img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
  img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
  img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg'),
  img('3drp3xw253kg7pt48iauc5vh1yjz_Bentota%202.jpg'),
  img('mgac8tj98vp4u6p3vv4acwiwsebh_22859730893_159b5dee46_b.jpg'),
  img('c0x2bsv51zmx3tz3qiitrit9r8w8_Bentota%20Islang.JPG')
];

const stops = [
  {
    letter: 'A',
    name: 'Bentota',
    dayLabel: 'Day 1 to 2',
    images: [
      img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
      img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
      img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg'),
      img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg')
    ],
    dayImages: {
      1: [
        img('3drp3xw253kg7pt48iauc5vh1yjz_Bentota%202.jpg'),
        img('mgac8tj98vp4u6p3vv4acwiwsebh_22859730893_159b5dee46_b.jpg'),
        img('c0x2bsv51zmx3tz3qiitrit9r8w8_Bentota%20Islang.JPG'),
        img('2kyg08hfs2xevolr6axgk0fpxg9d_download.jpg')
      ],
      2: [
        img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        img('erzts14ece8u6pbe6qhecfuhqp1a_18436933176_1d582f87a4_o.jpg'),
        img('x9q4lqbckwpj24yjofrltyk65sxu_1581143669_46718192554_c5f406dce3_k.jpg'),
        img('aobaf1yw2mrowt8a50rvhq5jhavm_1582217692_galle_lighthouse.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Bentota`,
      'Arrival at Bandaranaike International and private transfer down the coast',
      'The Kosgoda turtle hatchery and a boat on the Madu Ganga',
      'Check in at your beach resort',
      'Sunset on the sand and dinner',
      `${DAY_MARK}Day 2 · Mirissa and Galle`,
      'Breakfast and a private excursion along the southern coast',
      'Mirissa beach and the palms of Coconut Tree Hill',
      'The Galle Dutch fort on the way back',
      'Dinner at the resort'
    ],
    accommodation: {
      name: 'Rockside Beach Resort, Bentota',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Standard class beach resort on the Bentota shore',
      images: [
        img('6ktl4ki3sfivxsi701qsmfr6rkbg_479160497.jpg'),
        img('o1dj4u6hd0ia5ktha20awu8gzjci_download%20(81).jpg'),
        img('nqin589o8wul1d2eaksfi9cb7rvq_download%20(71).jpg'),
        img('eszmivj3d9yjnfwtuwc9m2s7ydgx_download%20(79).jpg'),
        img('pw019e7hjx3mlxihbx9htl7eyle5_download%20(78).jpg'),
        img('8mko67682cs88hxvj2aafbcj754y_IMG_6644-1024x683.jpg'),
        img('ae4mbexwndu1g6cixr433o331ob2_479141218.jpg'),
        img('2drsoqt2jun3ifbxm5ym0p5at3di_479144015.jpg'),
        img('07eu25fs0j0s5k9fl05dc22x4lv4_download%20(75).jpg'),
        img('jlofattfwev15y5hwg1y3zuz9vr5_download%20(80).jpg')
      ]
    },
    activities: [
      {
        name: 'Private full day Bentota sightseeing',
        day: 1,
        optional: false,
        image: img('3drp3xw253kg7pt48iauc5vh1yjz_Bentota%202.jpg'),
        description: 'The Madu Ganga boat ride, the Kosgoda turtle hatchery, the Galapatha temple and an afternoon on Bentota beach.'
      },
      {
        name: 'Private excursion to Mirissa',
        day: 2,
        optional: false,
        image: img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        description: 'Along the southern coast to Mirissa beach and Coconut Tree Hill, with a stop at the Galle fort on the way back.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Straight from the airport to the beach with a private full day of Bentota on arrival and a private excursion to Mirissa the next day.',
      image: img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Colombo',
    dayLabel: 'Day 3 to 4',
    images: [
      img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
      img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
      img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
      img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg')
    ],
    dayImages: {
      3: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      4: [
        img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
        img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
        img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
        img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Colombo city tour`,
      'Breakfast and a transfer down the coast to Colombo',
      'Galle Face Green and the Gangaramaya temple complex',
      'The Fort district, the Lotus Tower and Pettah market',
      'Dinner and your last night at the hotel',
      `${DAY_MARK}Day 4 · Departure from Colombo`,
      'Breakfast at the hotel and check out',
      'Private transfer to Bandaranaike International for your flight home'
    ],
    accommodation: {
      name: 'Grand Oriental Hotel, Colombo',
      description: '1 night · Breakfast and dinner · Deluxe room · 3★ · Historic harbourside hotel in the Colombo Fort district',
      images: [
        img('qhra52o8pm5j2dxg0dddz2dgdn4k_SL_Colombo_asv2020-01_img24_Grand_Oriental.jpg'),
        img('v6043jvnmyxuouy1fjg5ss9qasui_download%20(24).jpg'),
        img('vkijbwmkkl74yp4i592osn9iy9cd_download%20(23).jpg'),
        img('920brbyql2kov77zc3dh3dcnihkv_download%20(27).jpg'),
        img('jizcry7blhm7jaecngc8675dg9kt_download%20(30).jpg'),
        img('uk9aaqce0205qb9zf6vbgshdp9qz_download%20(25).jpg'),
        img('r1lidvioqzw9vr60h8up6u72plr1_download%20(26).jpg'),
        img('7fn3nl2nbok5mffp87j1x5mnovdh_download%20(22).jpg'),
        img('530idd3wvjshtmdanakjvsbkfy5t_download%20(29).jpg'),
        img('5lk1gc0pz766kylnxp5vrn9sfnty_download%20(21).jpg'),
        img('er9zm0bsmegfx3zyozaxczi9wjqy_download%20(20).jpg'),
        img('lch09uqesczkrac8r5ahlmy8ugjc_download%20(28).jpg'),
        img('1xk2nkkbvrkhmhh8ocsgdyl96fed_download%20(19).jpg')
      ]
    },
    activities: [
      {
        name: 'Private full day Colombo sightseeing',
        day: 3,
        optional: false,
        image: img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A last night in the Fort district with a private full day of the capital.',
      image: img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg')
    }
  }
];

const detail = {
  slug: 'sri-lanka-weekend-island-break-bentota-and-colombo',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sri Lanka Weekend Island Break: Bentota and Colombo',
  alt: 'Fishermen on stilts off the south coast of Sri Lanka',
  days: '4 days / 3 nights',
  stations: '2 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Short trips',
  tags: ['Short trips', 'Beach', 'Budget'],
  price: 26600,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Bentota', 'Colombo'],
  stats: { days: 4, cities: 2, hotels: 2, activities: 3, transfers: 4 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['4 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aditya',
    image: '/experts/aditya.webp',
    role: 'Sri Lanka expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Bentota is where the trip exhales. After the temples and tea estates, three nights by the water is exactly the right medicine.',
    quoteMore: 'Ask for an early start on the Galle day. The fort ramparts are empty before ten and the light on the lighthouse is at its best.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A long weekend on the island: two nights on the beach at Bentota with the turtles, the Madu Ganga and a day at Mirissa and Galle, then a last night in Colombo with a full day of the capital.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights in deluxe class hotels with breakfast and lunch or dinner daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; a private full day Bentota sightseeing tour; a private excursion to Mirissa; a private full day Colombo sightseeing tour.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Bentota (D)', text: 'Arrival at Bandaranaike International and private transfer down the coast\nThe Kosgoda turtle hatchery and a boat on the Madu Ganga\nCheck in at your beach resort\nSunset on the sand and dinner', hotel: 'Rockside Beach Resort, Bentota', highlights: ['Arrival at Bandaranaike International and private transfer down the coast', 'The Kosgoda turtle hatchery and a boat on the Madu Ganga', 'Check in at your beach resort'] },
    { title: 'Day 2: Mirissa and Galle (B, D)', text: 'Breakfast and a private excursion along the southern coast\nMirissa beach and the palms of Coconut Tree Hill\nThe Galle Dutch fort on the way back\nDinner at the resort', hotel: 'Rockside Beach Resort, Bentota', highlights: ['Breakfast and a private excursion along the southern coast', 'Mirissa beach and the palms of Coconut Tree Hill', 'The Galle Dutch fort on the way back'] },
    { title: 'Day 3: Colombo city tour (B, D)', text: 'Breakfast and a transfer down the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nDinner and your last night at the hotel', hotel: 'Grand Oriental Hotel Colombo', highlights: ['Breakfast and a transfer down the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
    { title: 'Day 4: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const sriLankaWeekendBentotaColomboBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sriLankaWeekendBentotaColomboProduct = {
  slug: detail.slug,
  places: ['Bentota', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 4,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 3,
  transfers: 4,
  meals: 6,
  price: detail.price,
  images: cardImages
};
