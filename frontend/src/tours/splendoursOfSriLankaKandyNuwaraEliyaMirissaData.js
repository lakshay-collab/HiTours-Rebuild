// Splendours of Sri Lanka: Kandy, Nuwara Eliya and Mirissa. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
  img('1kb7guo5ceqcpw2m5ghs7db8hnrr_shutterstock_229257724.jpg'),
  img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
  img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
  img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
  img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg'),
  img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
  img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
  img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
  img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
  img('6pvkpwhgaavzl1u5wodhr0op4yvm_e9.jpg'),
  img('erzts14ece8u6pbe6qhecfuhqp1a_18436933176_1d582f87a4_o.jpg'),
  img('x9q4lqbckwpj24yjofrltyk65sxu_1581143669_46718192554_c5f406dce3_k.jpg')
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
        name: 'Private visit to Pinnawala',
        day: 1,
        optional: false,
        image: img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        description: 'A stop on the way up from the airport to watch the resident herd bathe in the Maha Oya river and feed at the sanctuary.'
      },
      {
        name: 'Private lake drive and Kandyan dance show',
        day: 1,
        optional: false,
        image: img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        description: 'An evening circuit of the lake followed by a traditional performance of drummers, masked dancers and the closing fire walk.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'One night by the river at Kandy with a private elephant visit on the way and a private lake drive and dance show.',
      image: img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nuwara Eliya',
    dayLabel: 'Day 2',
    images: [
      img('nblwv1u3cze5qug1glqs5ltuux5m_shutterstock_776788237%20(1).jpg'),
      img('1kb7guo5ceqcpw2m5ghs7db8hnrr_shutterstock_229257724.jpg'),
      img('8pngc3kvspg8528bwbrbu6t8b5gz_shutterstock_1423148210.jpg'),
      img('ehxgq7xsvpq2xfzcpi1774ppfjgw_shutterstock_1019478988.jpg')
    ],
    dayImages: {
      2: [
        img('83nbzteqgxputqqy959240s41mz1_shutterstock_771297769.jpg'),
        img('lwpeikpgx4vdu6dk38px2r3ugcv3_16592880909_c7e7d0a676_o.jpg'),
        img('273z0ew2ziyinmy62ccpeay5ggwo_nepal-royal-botanical-gardens.jpg'),
        img('q5mg4s7atcnsscxcoxgfnysmzyiy_download.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Kandy sights and the climb to Nuwara Eliya`,
      'Breakfast, then the Temple of the Sacred Tooth Relic',
      'The hilltop Buddha at Bahiravokanda and Peradeniya gardens',
      'A transfer through the tea estates to Nuwara Eliya',
      'Check in and an evening walk by Gregory Lake'
    ],
    accommodation: {
      name: 'Tea Mount Forest Hotel, Nuwara Eliya',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Standard class hotel set among the tea gardens',
      images: [
        img('r8umm2ohbzp0g2depyrftqz3zv9n_345249425.jpg'),
        img('5h2oh5uihyx0h95mq9g3xrzyjx2e_296916636.jpg'),
        img('i2efznbouhocm1guxesq1lprw5jo_351156861.jpg'),
        img('0l2stmrr7w23r50fg2kekzxv03bp_351156062.jpg'),
        img('hlv2hilera95ecwo7o65e61we64b_296908061.jpg'),
        img('fwggkm9641r5bta0ms0b3311zisl_327152626.jpg'),
        img('1h2j1g2axyhzqkmyfih3yhxgvvku_296915358.jpg'),
        img('8j55mh12iokkkgdasez1a23gqw9s_385650296.jpg'),
        img('b8k8lma58v8p2m9uw2gh618yia5y_296915600.jpg')
      ]
    },
    activities: [
      {
        name: 'Private half day Kandy sightseeing',
        day: 2,
        optional: false,
        image: img('83nbzteqgxputqqy959240s41mz1_shutterstock_771297769.jpg'),
        description: 'The Temple of the Sacred Tooth Relic, the giant Bahiravokanda Buddha above the town and the Royal Botanical Gardens at Peradeniya.'
      }
    ],
    program: {
      name: 'Nuwara Eliya',
      description: 'A private half day of Kandy, then up into the tea country for a night in Little England.',
      image: img('nblwv1u3cze5qug1glqs5ltuux5m_shutterstock_776788237%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Bentota',
    dayLabel: 'Day 3 to 4',
    images: [
      img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg'),
      img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
      img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
      img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg')
    ],
    dayImages: {
      3: [
        img('7ztsyywjmihi32gluk6v8argfrlo_shutterstock_1116598154.jpg'),
        img('6upo74208pk22ejwy6dpssckyjdn_Depositphotos_158390642_s-2019.png'),
        img('c5d5akjf4ek0zsuldrgeqqwpvx4h_5821411770_f564d81e3a_b.jpg'),
        img('6pvkpwhgaavzl1u5wodhr0op4yvm_e9.jpg')
      ],
      4: [
        img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        img('erzts14ece8u6pbe6qhecfuhqp1a_18436933176_1d582f87a4_o.jpg'),
        img('x9q4lqbckwpj24yjofrltyk65sxu_1581143669_46718192554_c5f406dce3_k.jpg'),
        img('aobaf1yw2mrowt8a50rvhq5jhavm_1582217692_galle_lighthouse.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Tea country to the coast`,
      'Breakfast, then Ramboda Falls and a tea factory visit',
      'Gregory Lake, Victoria Park and the Hakgala gardens',
      'The Seetha Amman temple of the Ramayana trail',
      'A long transfer down to Bentota and check in at the beach',
      `${DAY_MARK}Day 4 · Mirissa and Galle`,
      'Breakfast and a private excursion along the southern coast',
      'Mirissa beach and the palms of Coconut Tree Hill',
      'The Galle Dutch fort: ramparts, lighthouse and old church',
      'Back to Bentota for dinner'
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
        name: 'Private full day Nuwara Eliya sightseeing',
        day: 3,
        optional: false,
        image: img('7ztsyywjmihi32gluk6v8argfrlo_shutterstock_1116598154.jpg'),
        description: 'Ramboda Falls, a working tea estate and factory, Gregory Lake, Victoria Park, Hakgala gardens and the Seetha Amman temple.'
      },
      {
        name: 'Private excursion to Mirissa and Galle',
        day: 4,
        optional: false,
        image: img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg'),
        description: 'South along the coast to the Dutch fort at Galle with its ramparts and lighthouse, then on to Mirissa beach and Coconut Tree Hill.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'A private full day of Nuwara Eliya on the way down, then two nights on the beach with a private excursion to Mirissa and Galle.',
      image: img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Colombo',
    dayLabel: 'Day 5 to 6',
    images: [
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
      img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
      img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
      img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg')
    ],
    dayImages: {
      5: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      6: [
        img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
        img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
        img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
        img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Colombo city tour`,
      'Breakfast and a transfer down the coast to Colombo',
      'Galle Face Green and the Gangaramaya temple complex',
      'The Fort district, the Lotus Tower and Pettah market',
      'Dinner and your last night at the hotel',
      `${DAY_MARK}Day 6 · Departure from Colombo`,
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
        day: 5,
        optional: false,
        image: img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A final night on the Mount Lavinia beachfront with a private full day of the capital.',
      image: img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg')
    }
  }
];

const detail = {
  slug: 'splendours-of-sri-lanka-kandy-nuwara-eliya-and-mirissa',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Splendours of Sri Lanka: Kandy, Nuwara Eliya and Mirissa',
  alt: 'Coconut Tree Hill above Mirissa beach at sunset',
  days: '6 days / 5 nights',
  stations: '4 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Best seller',
  tags: ['Best seller', 'Beach', 'Nature'],
  price: 38950,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Nuwara Eliya', 'Bentota', 'Colombo'],
  stats: { days: 6, cities: 4, hotels: 4, activities: 6, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['10 meals', 'Meals'],
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
  short: 'Six days with everything in: a night in Kandy with the elephants and the dance show, a night in the tea country, two nights at Bentota with a private day at Mirissa and Galle, and a last night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights in standard and deluxe class hotels with breakfast and lunch or dinner daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; private Pinnawala visit; private Kandy lake drive and dance show; private half day Kandy sightseeing; private full day Nuwara Eliya sightseeing; a private excursion to Mirissa and Galle; private full day Colombo sightseeing. Entrance tickets are payable locally.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (D)', text: 'Arrival at Bandaranaike International and private transfer inland\nA stop at the Pinnawala elephant sanctuary on the way\nCheck in at your Kandy hotel in the afternoon\nAn evening lake drive and the Kandyan dance performance', hotel: 'Ganga Addara Hotel, Kandy', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A stop at the Pinnawala elephant sanctuary on the way', 'Check in at your Kandy hotel in the afternoon'] },
    { title: 'Day 2: Kandy sights and the climb to Nuwara Eliya (B, D)', text: 'Breakfast, then the Temple of the Sacred Tooth Relic\nThe hilltop Buddha at Bahiravokanda and Peradeniya gardens\nA transfer through the tea estates to Nuwara Eliya\nCheck in and an evening walk by Gregory Lake', hotel: 'Tea Mount Forest Hotel, Nuwara Eliya', highlights: ['Breakfast, then the Temple of the Sacred Tooth Relic', 'The hilltop Buddha at Bahiravokanda and Peradeniya gardens', 'A transfer through the tea estates to Nuwara Eliya'] },
    { title: 'Day 3: Tea country to the coast (B, D)', text: 'Breakfast, then Ramboda Falls and a tea factory visit\nGregory Lake, Victoria Park and the Hakgala gardens\nThe Seetha Amman temple of the Ramayana trail\nA long transfer down to Bentota and check in at the beach', hotel: 'Rockside Beach Resort, Bentota', highlights: ['Breakfast, then Ramboda Falls and a tea factory visit', 'Gregory Lake, Victoria Park and the Hakgala gardens', 'The Seetha Amman temple of the Ramayana trail'] },
    { title: 'Day 4: Mirissa and Galle (B, D)', text: 'Breakfast and a private excursion along the southern coast\nMirissa beach and the palms of Coconut Tree Hill\nThe Galle Dutch fort: ramparts, lighthouse and old church\nBack to Bentota for dinner', hotel: 'Rockside Beach Resort, Bentota', highlights: ['Breakfast and a private excursion along the southern coast', 'Mirissa beach and the palms of Coconut Tree Hill', 'The Galle Dutch fort: ramparts, lighthouse and old church'] },
    { title: 'Day 5: Colombo city tour (B, D)', text: 'Breakfast and a transfer down the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nDinner and your last night at the hotel', hotel: 'Berjaya Hotel Colombo', highlights: ['Breakfast and a transfer down the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
    { title: 'Day 6: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const splendoursOfSriLankaKandyNuwaraEliyaMirissaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const splendoursOfSriLankaKandyNuwaraEliyaMirissaProduct = {
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
  transfers: 8,
  meals: 10,
  price: detail.price,
  images: cardImages
};
