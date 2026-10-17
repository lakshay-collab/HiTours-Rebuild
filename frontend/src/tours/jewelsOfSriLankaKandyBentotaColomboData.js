// Jewels of Sri Lanka: Kandy, Bentota and Colombo in Four Days. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
  img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg'),
  img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
  img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
  img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg'),
  img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
  img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
  img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
  img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
  img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
  img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
  img('2qdrxrko072bcco7ufzgu2npr0c7_1581078051_17185271045_4b7e32f3fc_b_(1).jpg'),
  img('aky2zu2w7om06926n7zk3aciyrc2_Downpic.cc-image362864314.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kandy',
    dayLabel: 'Day 1',
    images: [
      img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
      img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
      img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
      img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg')
    ],
    dayImages: {
      1: [
        img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        img('2qdrxrko072bcco7ufzgu2npr0c7_1581078051_17185271045_4b7e32f3fc_b_(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Kandy`,
      'Arrival at Bandaranaike International and private transfer inland',
      'A stop at the Pinnawala elephant sanctuary on the way',
      'Check in at your Kandy hotel in the afternoon',
      'An evening lake drive and the Kandyan dance performance'
    ],
    accommodation: {
      name: 'Ganga Addara Hotel, Kandy',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Standard class hotel on the Mahaweli river outside Kandy',
      images: [
        img('byk88iskiaw399658vr4m5tpd0iw_hotel-gangaaddara.jpg'),
        img('wygfccylue2tmmar15tfnzo0mx2i_459189868.jpg'),
        img('sptv66d4qf4he7hxecp13m3fq854_459189870.jpg'),
        img('p06mbkn1p9efprmrayqhdrmfukb5_hotel-gangaaddara%20(2).jpg'),
        img('rizbgl6yd2wpgnbuxl3cicjuyuzx_hotel-gangaaddara%20(4).jpg'),
        img('3c1r6jlgkhwyf1yicqqusg7m0gca_459189675.jpg'),
        img('28kklic995fzx1cvp9jjgwu0u8k5_524776188.jpg'),
        img('tm23j1bgv3j5r6tu2jzplcap8xqa_hotel-gangaaddara%20(3).jpg'),
        img('7eixa8pa818sb8fw2tya80c16ryh_459189857.jpg'),
        img('gx8vnkyw9zd21uibhbcf0huqksgf_503035439.jpg'),
        img('a1c8f2f7jx1z1uii1lx8owa47af3_hotel-gangaaddara%20(1).jpg')
      ]
    },
    activities: [
      {
        name: 'Pinnawala Elephant Orphanage',
        day: 1,
        optional: false,
        image: img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        description: 'A stop on the way up from the airport to watch the resident herd bathe in the Maha Oya river and feed at the sanctuary.'
      },
      {
        name: 'Kandy lake drive and Kandyan dance show',
        day: 1,
        optional: false,
        image: img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        description: 'An evening circuit of the lake followed by a traditional performance of drummers, masked dancers and the closing fire walk.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'One night by the river at Kandy with the elephants on the way and the lake drive and dance show.',
      image: img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Bentota',
    dayLabel: 'Day 2',
    images: [
      img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
      img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg'),
      img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
      img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg')
    ],
    dayImages: {
      2: [
        img('aky2zu2w7om06926n7zk3aciyrc2_Downpic.cc-image362864314.jpg'),
        img('z9jmx0c1617z8r6hdxh9hxx8l7cx_12697307653_c05a52b8f1_o.jpg'),
        img('4nhzua0qjhxq269scn2196f6trxx_1557754429_jumbo.jpg'),
        img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Gardens, the Madu Ganga and the beach`,
      'Breakfast, then the Peradeniya Royal Botanical Gardens',
      'A transfer down to the south west coast',
      'A boat safari through the Madu Ganga mangroves',
      'Check in at Bentota for sunset'
    ],
    accommodation: {
      name: 'Hibiscus Beach Hotel, Bentota',
      description: '1 night · Breakfast and dinner · Deluxe room · 3★ · Deluxe class beach hotel with a pool facing the sea',
      images: [
        img('j3sypuajq9k588ome1i6d4whewld_209196152.jpg'),
        img('9ikz7kfbz5slwydpw5dmjjbvplkf_131573390.jpg'),
        img('s737wmsjimg0gb7loszmij4dkgk2_144265347.jpg'),
        img('ojs9ckicy6xzn0lkxsglf2h3zsb0_144265568.jpg'),
        img('zys1cenoydd1jcvhl92ibzzcpa5g_f35ccc4a_z.jpg'),
        img('z7xuzqcgkiqzzm8cfruzuwd2gx5k_208636431.jpg'),
        img('61i54a9d0m2kq4vzr51uyozsar3y_64bf7960_z.webp'),
        img('yihihvb02n3gd8hx0lmmru1r182l_208635052.jpg'),
        img('5nlv2fe1w5nhflcz8wr8mepkfomh_208635020.jpg'),
        img('mq881y372buv3692mto02aayw4wz_0PFSwicE_799bad5a3b514f096e69bbc4a7896cd9.jpg'),
        img('iypfgtrybk2bcvrx80g64j12r8ck_84TKIBOs_f3ccdd27d2000e3f9255a7e3e2c48800.jpg'),
        img('schm4jlcz749cru16utzynsh9353_mzQacvXE_799bad5a3b514f096e69bbc4a7896cd9.jpg')
      ]
    },
    activities: [
      {
        name: 'Peradeniya botanical gardens',
        day: 2,
        optional: false,
        image: img('aky2zu2w7om06926n7zk3aciyrc2_Downpic.cc-image362864314.jpg'),
        description: 'The royal botanical gardens with their orchid house and avenue of palms, on the way out of Kandy.'
      },
      {
        name: 'Madu Ganga boat safari',
        day: 2,
        optional: false,
        image: img('4nhzua0qjhxq269scn2196f6trxx_1557754429_jumbo.jpg'),
        description: 'A boat through the mangrove islands of the Madu Ganga before check in at Bentota.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Peradeniya gardens on the way down, then a boat on the Madu River and a night on the beach.',
      image: img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Colombo',
    dayLabel: 'Day 3 to 4',
    images: [
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
      img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
      img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg')
    ],
    dayImages: {
      3: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      4: [
        img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
        img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
        img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
        img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg')
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
        name: 'Full day Colombo sightseeing',
        day: 3,
        optional: false,
        image: img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A last night in the Fort district with a full day of the capital.',
      image: img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
    }
  }
];

const detail = {
  slug: 'jewels-of-sri-lanka-kandy-bentota-and-colombo-in-four-days',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Jewels of Sri Lanka: Kandy, Bentota and Colombo in Four Days',
  alt: 'Elephants bathing in the Maha Oya river at Pinnawala',
  days: '4 days / 3 nights',
  stations: '3 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Short trips',
  tags: ['Short trips', 'Culture', 'Beach'],
  price: 26600,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Bentota', 'Colombo'],
  stats: { days: 4, cities: 3, hotels: 3, activities: 5, transfers: 5 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['5 transfers', 'Transport'],
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
  short: 'Four days that still feel like a holiday: a night in Kandy with the elephants and the dance show, Peradeniya and the Madu Ganga on the way to a night on the beach at Bentota, and a last night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights in deluxe class hotels with breakfast and lunch or dinner daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; the Pinnawala elephant sanctuary; Kandy lake drive and Kandyan dance show; the Peradeniya botanical gardens; the Madu Ganga boat safari; a full day Colombo sightseeing tour.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (D)', text: 'Arrival at Bandaranaike International and private transfer inland\nA stop at the Pinnawala elephant sanctuary on the way\nCheck in at your Kandy hotel in the afternoon\nAn evening lake drive and the Kandyan dance performance', hotel: 'Ganga Addara Hotel, Kandy', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A stop at the Pinnawala elephant sanctuary on the way', 'Check in at your Kandy hotel in the afternoon'] },
    { title: 'Day 2: Gardens, the Madu Ganga and the beach (B, D)', text: 'Breakfast, then the Peradeniya Royal Botanical Gardens\nA transfer down to the south west coast\nA boat safari through the Madu Ganga mangroves\nCheck in at Bentota for sunset', hotel: 'Hibiscus Beach Hotel, Bentota', highlights: ['Breakfast, then the Peradeniya Royal Botanical Gardens', 'A transfer down to the south west coast', 'A boat safari through the Madu Ganga mangroves'] },
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

export const jewelsOfSriLankaKandyBentotaColomboBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const jewelsOfSriLankaKandyBentotaColomboProduct = {
  slug: detail.slug,
  places: ['Kandy', 'Bentota', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 4,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 5,
  transfers: 5,
  meals: 6,
  price: detail.price,
  images: cardImages
};
