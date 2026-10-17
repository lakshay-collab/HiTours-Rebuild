// Sri Lanka Family Getaway: Kandy, Bentota and Colombo. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
  img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
  img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
  img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
  img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
  img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
  img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
  img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg'),
  img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
  img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
  img('1xmli9j38vniz1tghlcgs4bxa0gc_shutterstock_1840791727.jpg'),
  img('0scen0iugpry0mg4wqnxsr558nvw_Labookellie_tea_plantation__Sri_Lanka_2.jpg'),
  img('5ryv9me1696b1ry058e5jsm7lzya_Botanical_Garden_of_Peradeniya_03.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kandy',
    dayLabel: 'Day 1 to 2',
    images: [
      img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
      img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
      img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
      img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        img('2qdrxrko072bcco7ufzgu2npr0c7_1581078051_17185271045_4b7e32f3fc_b_(1).jpg')
      ],
      2: [
        img('1xmli9j38vniz1tghlcgs4bxa0gc_shutterstock_1840791727.jpg'),
        img('0scen0iugpry0mg4wqnxsr558nvw_Labookellie_tea_plantation__Sri_Lanka_2.jpg'),
        img('5ryv9me1696b1ry058e5jsm7lzya_Botanical_Garden_of_Peradeniya_03.jpg'),
        img('273z0ew2ziyinmy62ccpeay5ggwo_nepal-royal-botanical-gardens.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Kandy`,
      'Arrival at Bandaranaike International and private transfer inland',
      'A private stop at the Pinnawala elephant sanctuary',
      'Check in at your riverside hotel in Kandy',
      'A private lake drive and the Kandyan dance performance',
      `${DAY_MARK}Day 2 · A full day around Kandy`,
      'Breakfast, then the Temple of the Sacred Tooth Relic',
      'The Peradeniya gardens and a spice garden',
      'Huluganga Falls and the Kadugannawa tea factory',
      'The gem museum and dinner at the hotel'
    ],
    accommodation: {
      name: 'Ganga Addara Hotel, Kandy',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Standard class hotel on the Mahaweli river outside Kandy',
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
        name: 'Private visit to Pinnawala',
        day: 1,
        optional: false,
        image: img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        description: 'A private stop at the elephant sanctuary to watch the herd bathe in the river before continuing up to Kandy.'
      },
      {
        name: 'Private Kandy lake drive and dance show',
        day: 1,
        optional: false,
        image: img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        description: 'An evening circuit of the lake by private car, then the drummers, masked dancers and fire walkers.'
      },
      {
        name: 'Private full day Kandy sightseeing',
        day: 2,
        optional: false,
        image: img('1xmli9j38vniz1tghlcgs4bxa0gc_shutterstock_1840791727.jpg'),
        description: 'The Temple of the Sacred Tooth Relic, Peradeniya gardens, a spice garden, the gem museum, Huluganga Falls and the Kadugannawa tea factory.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'Two nights by the river at Kandy with the elephants on the way in, a dance show and a private full day of temples, gardens and a tea estate.',
      image: img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg')
    }
  },
  {
    letter: 'B',
    name: 'Bentota',
    dayLabel: 'Day 3',
    images: [
      img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
      img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
      img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg'),
      img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg')
    ],
    dayImages: {
      3: [
        img('4nhzua0qjhxq269scn2196f6trxx_1557754429_jumbo.jpg'),
        img('lcogdoq76wasext2xs8n1943h2uh_1597147042_shutterstock_785564455.jpg'),
        img('z8pc6746uelxtxz5446rmvk51rki_flickr_cached_img_20b18d949dbd302f958b4aadfd6bf889_600x600.jpg'),
        img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Madu River and the turtles`,
      'Breakfast and a transfer down to the coast',
      'A private boat ride through the Madu Ganga mangroves',
      'The Kosgoda turtle hatchery and a hatchling release',
      'Check in at Bentota and the evening on the beach'
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
        name: 'Private Madu River boat ride',
        day: 3,
        optional: false,
        image: img('4nhzua0qjhxq269scn2196f6trxx_1557754429_jumbo.jpg'),
        description: 'A boat through the mangrove islands of the Madu Ganga, with the cinnamon island and the fish spa at the river mouth.'
      },
      {
        name: 'Kosgoda turtle hatchery',
        day: 3,
        optional: false,
        image: img('lcogdoq76wasext2xs8n1943h2uh_1597147042_shutterstock_785564455.jpg'),
        description: 'A visit to the hatchery where eggs are protected and the children can watch hatchlings being released.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'A night on the beach with a private Madu River boat ride and the turtle hatchery on the way in.',
      image: img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Colombo',
    dayLabel: 'Day 4 to 5',
    images: [
      img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
      img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
      img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
      img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg')
    ],
    dayImages: {
      4: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      5: [
        img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
        img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
        img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
        img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg')
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
        name: 'Private full day Colombo sightseeing',
        day: 4,
        optional: false,
        image: img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and Pettah market by private car.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A last night in the capital with a private full day of its temples, colonial quarter and markets.',
      image: img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg')
    }
  }
];

const detail = {
  slug: 'sri-lanka-family-getaway-kandy-bentota-and-colombo',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sri Lanka Family Getaway: Kandy, Bentota and Colombo',
  alt: 'Baby turtles being released on the beach at Kosgoda',
  days: '5 days / 4 nights',
  stations: '3 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Family',
  tags: ['Family', 'Short trips', 'Beach'],
  price: 33250,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Bentota', 'Colombo'],
  stats: { days: 5, cities: 3, hotels: 3, activities: 6, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
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
    quote: 'Kandy, the hills and then the coast. Sri Lanka works best when you let the island cool you down before it warms you up again.',
    quoteMore: 'Carry a light sweater for Nuwara Eliya. It sits at nearly 1,900 metres and evenings are surprisingly chilly even in April.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five family friendly days: two nights at Kandy with the Pinnawala elephants, a dance show and a private day of temples and gardens, a night at Bentota with a Madu River boat ride and the turtle hatchery, and a last night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in standard and deluxe class hotels with breakfast and dinner daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; a private Pinnawala elephant sanctuary visit; private Kandy lake drive and dance show; a private full day Kandy sightseeing tour; a private Madu River boat ride; the Kosgoda turtle hatchery; a private full day Colombo sightseeing tour; visa assistance. Entrance tickets are payable locally.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (D)', text: 'Arrival at Bandaranaike International and private transfer inland\nA private stop at the Pinnawala elephant sanctuary\nCheck in at your riverside hotel in Kandy\nA private lake drive and the Kandyan dance performance', hotel: 'Ganga Addara Hotel, Kandy', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A private stop at the Pinnawala elephant sanctuary', 'Check in at your riverside hotel in Kandy'] },
    { title: 'Day 2: A full day around Kandy (B, D)', text: 'Breakfast, then the Temple of the Sacred Tooth Relic\nThe Peradeniya gardens and a spice garden\nHuluganga Falls and the Kadugannawa tea factory\nThe gem museum and dinner at the hotel', hotel: 'Ganga Addara Hotel, Kandy', highlights: ['Breakfast, then the Temple of the Sacred Tooth Relic', 'The Peradeniya gardens and a spice garden', 'Huluganga Falls and the Kadugannawa tea factory'] },
    { title: 'Day 3: Madu River and the turtles (B, D)', text: 'Breakfast and a transfer down to the coast\nA private boat ride through the Madu Ganga mangroves\nThe Kosgoda turtle hatchery and a hatchling release\nCheck in at Bentota and the evening on the beach', hotel: 'Hibiscus Beach Hotel, Bentota', highlights: ['Breakfast and a transfer down to the coast', 'A private boat ride through the Madu Ganga mangroves', 'The Kosgoda turtle hatchery and a hatchling release'] },
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

export const sriLankaFamilyGetawayKandyBentotaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sriLankaFamilyGetawayKandyBentotaProduct = {
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
  activities: 6,
  transfers: 6,
  meals: 8,
  price: detail.price,
  images: cardImages
};
