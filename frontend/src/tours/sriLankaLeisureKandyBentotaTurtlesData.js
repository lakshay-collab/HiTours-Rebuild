// Sri Lanka Leisure Tour: Kandy, Bentota and the Turtle Hatchery. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
  img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
  img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
  img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
  img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
  img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
  img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
  img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
  img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
  img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
  img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
  img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kandy',
    dayLabel: 'Day 1',
    images: [
      img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
      img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
      img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
      img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg')
    ],
    dayImages: {
      1: [
        img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
        img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg')
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
      name: 'Hotel Devon, Kandy',
      description: '1 night · Breakfast and dinner · Deluxe room · 3★ · Deluxe class hotel in the hills above Kandy town',
      images: [
        img('berav8t51c7pwlial4nduc1pnvvg_41f90e0d_z.webp'),
        img('smkd8s8uniq3iaf6q3hytymzybql_o2sn5ZaB_aca407c859df4840886b04703b1e5e29.jpg'),
        img('366f0pf6eqxiswssz0axf2o6pq93_4Nqk69oN_2e7e2819542561b0aa814dbec048a4b2.jpg'),
        img('0ipswcafq0hpe3nprdtyawqcok8q_489225362.jpg'),
        img('cqidrd4ki7hs1avfdu0w2rzwfzzd_CDSd8Vzf_e9210a7990ebdd239670b5e91d71464f.jpg'),
        img('um8msjhpjps8jboul4g7zrit6mdo_65b08d6e_z.webp'),
        img('dwuvan7bjam36nudxz8eabgqgboh_35752d93_z.webp'),
        img('5ids7veibdit31ana3s5zljycp41_489225372.jpg'),
        img('38izydud4zxkcj3x0m1d3hrmor28_8c4a1e8f_z.webp'),
        img('1ts1qvmtl7aed3oczeju0zeao8y2_f0630004_z.webp'),
        img('npf93v6f3g0uqpa2ill4aizdgsgm_be4a8dc6_z.webp')
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
        image: img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
        description: 'An evening circuit of the lake followed by a traditional performance of drummers, masked dancers and the closing fire walk.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'One night in the hill capital with the elephants on the way and the lake drive and dance show in the evening.',
      image: img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Bentota',
    dayLabel: 'Day 2 to 3',
    images: [
      img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg'),
      img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
      img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
      img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg')
    ],
    dayImages: {
      2: [
        img('lcogdoq76wasext2xs8n1943h2uh_1597147042_shutterstock_785564455.jpg'),
        img('z8pc6746uelxtxz5446rmvk51rki_flickr_cached_img_20b18d949dbd302f958b4aadfd6bf889_600x600.jpg'),
        img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg'),
        img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg')
      ],
      3: [
        img('3drp3xw253kg7pt48iauc5vh1yjz_Bentota%202.jpg'),
        img('mgac8tj98vp4u6p3vv4acwiwsebh_22859730893_159b5dee46_b.jpg'),
        img('c0x2bsv51zmx3tz3qiitrit9r8w8_Bentota%20Islang.JPG'),
        img('2kyg08hfs2xevolr6axgk0fpxg9d_download.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Down to Bentota and the turtles`,
      'Breakfast and a transfer from the hills to the coast',
      'The Kosgoda turtle hatchery on the way',
      'Check in at your beach hotel',
      'The evening at leisure on the sand',
      `${DAY_MARK}Day 3 · Bentota sightseeing`,
      'Breakfast, then a boat safari on the Madu Ganga',
      'The cinnamon island and the Galapatha temple',
      'The afternoon on Bentota beach',
      'Optional: water sports at the river mouth'
    ],
    accommodation: {
      name: 'Hibiscus Beach Hotel, Bentota',
      description: '2 nights · Breakfast and dinner · Deluxe room · 3★ · Deluxe class beach hotel with a pool facing the sea',
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
        name: 'Kosgoda turtle hatchery',
        day: 2,
        optional: false,
        image: img('lcogdoq76wasext2xs8n1943h2uh_1597147042_shutterstock_785564455.jpg'),
        description: 'The hatchery south of Bentota where eggs are protected and hatchlings released into the sea at dusk.'
      },
      {
        name: 'Full day Bentota sightseeing',
        day: 3,
        optional: false,
        image: img('3drp3xw253kg7pt48iauc5vh1yjz_Bentota%202.jpg'),
        description: 'The Madu Ganga boat ride, the Kosgoda turtle hatchery, the Galapatha temple and an afternoon on Bentota beach.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Two nights on the beach with the turtle hatchery on arrival and a full day of the Madu Ganga, the cinnamon island and the sand.',
      image: img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Colombo',
    dayLabel: 'Day 4 to 5',
    images: [
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
      img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
      img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
      img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg')
    ],
    dayImages: {
      4: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      5: [
        img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
        img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
        img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
        img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Colombo city tour`,
      'Breakfast and a transfer down the coast to Colombo',
      'Galle Face Green and the Gangaramaya temple complex',
      'The Fort district, the Lotus Tower and Pettah market',
      'Dinner and your last night at the hotel',
      `${DAY_MARK}Day 5 · Departure from Colombo`,
      'Breakfast at the hotel and check out',
      'Private transfer to Bandaranaike International for your flight home'
    ],
    accommodation: {
      name: 'Berjaya Hotel, Colombo',
      description: '1 night · Breakfast and dinner · Deluxe room · 4★ · Four star hotel on the Mount Lavinia beachfront south of the city',
      images: [
        img('gxczjwl8s0vw8oaqbi6e86zx6sv1_177389047.jpg'),
        img('sqbl6yo4j7i38u9wbxstfdxesuwl_1569732955750.png'),
        img('98lht7n1bj9lb5ktjzbqh4y1d8fn_255638518.jpg'),
        img('55h2udwmk3tw4gy6fg815hrbnf58_xU3rf7jz_cc07758214c4eeaef3db9ee07c58786e.png'),
        img('km68iemu4l5g1i3abmuuit3v3d02_213583907.jpg'),
        img('2i49d0id4ke4d28funvcgf6lsej9_d6bf723a_z.webp'),
        img('otjgew7y0rvlgs0uvtk39vzslnf1_213583922.jpg'),
        img('opkz5fpvdb7exjqnop66g7yvvl20_410265362.jpg'),
        img('cspg96xiu1knj136cjs8kotb9qw9_18963860.jpg'),
        img('9j7b961nrv0ej4f359xa7ldzka7c_46715cf6822211ea8a5e0242ac110002.png'),
        img('7x13egkh22l1vmfs3tsw10t4lvjj_caf66d78809711e99e5a0242ac110005.png')
      ]
    },
    activities: [
      {
        name: 'Full day Colombo sightseeing',
        day: 4,
        optional: false,
        image: img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A last night on the Mount Lavinia beachfront with a full day of the capital.',
      image: img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg')
    }
  }
];

const detail = {
  slug: 'sri-lanka-leisure-tour-kandy-bentota-and-the-turtle-hatchery',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sri Lanka Leisure Tour: Kandy, Bentota and the Turtle Hatchery',
  alt: 'A hatchling turtle crossing the sand at Kosgoda',
  days: '5 days / 4 nights',
  stations: '3 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Best seller',
  tags: ['Best seller', 'Beach', 'Family'],
  price: 33250,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Bentota', 'Colombo'],
  stats: { days: 5, cities: 3, hotels: 3, activities: 5, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['8 meals', 'Meals'],
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
  short: 'Five relaxed days: a night in Kandy with the Pinnawala elephants and the dance show, two on the beach at Bentota with the turtle hatchery and the Madu Ganga, and a final night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in deluxe class hotels with breakfast and lunch or dinner daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; the Pinnawala elephant sanctuary; Kandy lake drive and Kandyan dance show; the Kosgoda turtle hatchery; a full day Bentota sightseeing tour; a full day Colombo sightseeing tour.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (D)', text: 'Arrival at Bandaranaike International and private transfer inland\nA stop at the Pinnawala elephant sanctuary on the way\nCheck in at your Kandy hotel in the afternoon\nAn evening lake drive and the Kandyan dance performance', hotel: 'Hotel Devon Kandy', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A stop at the Pinnawala elephant sanctuary on the way', 'Check in at your Kandy hotel in the afternoon'] },
    { title: 'Day 2: Down to Bentota and the turtles (B, D)', text: 'Breakfast and a transfer from the hills to the coast\nThe Kosgoda turtle hatchery on the way\nCheck in at your beach hotel\nThe evening at leisure on the sand', hotel: 'Hibiscus Beach Hotel, Bentota', highlights: ['Breakfast and a transfer from the hills to the coast', 'The Kosgoda turtle hatchery on the way', 'Check in at your beach hotel'] },
    { title: 'Day 3: Bentota sightseeing (B, D)', text: 'Breakfast, then a boat safari on the Madu Ganga\nThe cinnamon island and the Galapatha temple\nThe afternoon on Bentota beach\nOptional: water sports at the river mouth', hotel: 'Hibiscus Beach Hotel, Bentota', highlights: ['Breakfast, then a boat safari on the Madu Ganga', 'The cinnamon island and the Galapatha temple', 'The afternoon on Bentota beach'] },
    { title: 'Day 4: Colombo city tour (B, D)', text: 'Breakfast and a transfer down the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nDinner and your last night at the hotel', hotel: 'Berjaya Hotel Colombo', highlights: ['Breakfast and a transfer down the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
    { title: 'Day 5: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const sriLankaLeisureKandyBentotaTurtlesBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sriLankaLeisureKandyBentotaTurtlesProduct = {
  slug: detail.slug,
  places: ['Kandy', 'Bentota', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 5,
  transfers: 6,
  meals: 8,
  price: detail.price,
  images: cardImages
};
