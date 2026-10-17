// Tropical Sri Lanka Super Deluxe: Kandy, Sigiriya and Bentota. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
  img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg'),
  img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
  img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
  img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
  img('8pngc3kvspg8528bwbrbu6t8b5gz_shutterstock_1423148210.jpg'),
  img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg'),
  img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
  img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
  img('nblwv1u3cze5qug1glqs5ltuux5m_shutterstock_776788237%20(1).jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kandy',
    dayLabel: 'Day 1 to 2',
    images: [
      img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
      img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
      img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
      img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg')
    ],
    dayImages: {
      1: [
        img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        img('2qdrxrko072bcco7ufzgu2npr0c7_1581078051_17185271045_4b7e32f3fc_b_(1).jpg')
      ],
      2: [
        img('zddej06lbz5sx2o1d0hx0bg0bfhd_1582551005_Colombo_1.png'),
        img('b14m75op1m07swbrru2fqbc31lfh_7006860454_cec45734cb_o.jpg'),
        img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
        img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Kandy`,
      'Arrival at Bandaranaike International and private transfer inland',
      'A stop at the Pinnawala elephant sanctuary on the way',
      'Check in at your Kandy hotel in the afternoon',
      'An evening lake drive and the Kandyan dance performance',
      `${DAY_MARK}Day 2 · A day at Sigiriya`,
      'Breakfast, then the road north through the Cultural Triangle',
      'The water gardens and the climb past the mirror wall',
      'Frescoes of the cloud maidens and the lion paw terrace',
      'Summit ruins and views across the dry zone jungle',
      'Back to Kandy for dinner at the hotel'
    ],
    accommodation: {
      name: 'Hotel Devon, Kandy',
      description: '2 nights · Breakfast and dinner · Deluxe room · 3★ · Deluxe class hotel in the hills above Kandy town',
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
        image: img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        description: 'An evening circuit of the lake followed by a traditional performance of drummers, masked dancers and the closing fire walk.'
      },
      {
        name: 'Excursion to Sigiriya rock fortress',
        day: 2,
        optional: false,
        image: img('zddej06lbz5sx2o1d0hx0bg0bfhd_1582551005_Colombo_1.png'),
        description: 'A full day out to the fifth century rock citadel: the water gardens, the mirror wall, the frescoes and the summit palace ruins.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'Two nights in the hill capital with the elephant sanctuary on the way in, a dance show the first evening and a full day out to Sigiriya.',
      image: img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nuwara Eliya',
    dayLabel: 'Day 3',
    images: [
      img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg'),
      img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg'),
      img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg'),
      img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg')
    ],
    dayImages: {
      3: [
        img('1xmli9j38vniz1tghlcgs4bxa0gc_shutterstock_1840791727.jpg'),
        img('0scen0iugpry0mg4wqnxsr558nvw_Labookellie_tea_plantation__Sri_Lanka_2.jpg'),
        img('5ryv9me1696b1ry058e5jsm7lzya_Botanical_Garden_of_Peradeniya_03.jpg'),
        img('273z0ew2ziyinmy62ccpeay5ggwo_nepal-royal-botanical-gardens.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Kandy sights and the climb to Nuwara Eliya`,
      'Breakfast, then the Temple of the Sacred Tooth Relic',
      'The hilltop Buddha at Bahiravokanda and Peradeniya gardens',
      'A transfer through the tea estates to Nuwara Eliya',
      'Check in and an evening walk by Gregory Lake'
    ],
    accommodation: {
      name: 'Mirage Kings Cottage, Nuwara Eliya',
      description: '1 night · Breakfast and dinner · Deluxe room · 4★ · Four star colonial cottage hotel above Nuwara Eliya',
      images: [
        img('tvylg7qjurdc0j2533bfst6sjjtc_264588715.jpg'),
        img('8gr9ihfxtx196syibmfkem41rp4v_199318084.jpg'),
        img('lbsbmm5uc5jlyhemkyyoqh66sx9z_264566886.jpg'),
        img('3fm2pkc2kwqxeti3htyu7k0n2jon_264577133.jpg'),
        img('0lvpmy0fieay8r6ey0xtw1eor538_197314949.jpg'),
        img('9k8b608c1j8rzroiprhzorbam95y_264668551.jpg'),
        img('bswz882hp67h2buovq8uaml6m3a3_199298262.jpg'),
        img('b41iyy7mlzg28eufwy4rzizp7b09_264557041.jpg'),
        img('9w71jmm3drah2a19wmx9o45sowyl_197178815.jpg'),
        img('ukylvzis0fjk619eroej908chrxh_ll.jpg'),
        img('vwlqd77bzlv7p1qptm4hxl32n5b0_199298288.jpg'),
        img('yk69tottsvj6lqef4b771qqb173w_197315655.jpg'),
        img('931s0bqlfhleoa9kmf1jh5ubcy6r_264577114.jpg')
      ]
    },
    activities: [
      {
        name: 'Full day Kandy sightseeing',
        day: 3,
        optional: false,
        image: img('1xmli9j38vniz1tghlcgs4bxa0gc_shutterstock_1840791727.jpg'),
        description: 'The Temple of the Sacred Tooth Relic, the Peradeniya gardens, the Bahiravokanda Buddha and the gem museum.'
      }
    ],
    program: {
      name: 'Nuwara Eliya',
      description: 'A full day of Kandy sights, then up into tea country for a night in a four star colonial cottage.',
      image: img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Bentota',
    dayLabel: 'Day 4 to 5',
    images: [
      img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg'),
      img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
      img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
      img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg')
    ],
    dayImages: {
      4: [
        img('7ztsyywjmihi32gluk6v8argfrlo_shutterstock_1116598154.jpg'),
        img('6upo74208pk22ejwy6dpssckyjdn_Depositphotos_158390642_s-2019.png'),
        img('c5d5akjf4ek0zsuldrgeqqwpvx4h_5821411770_f564d81e3a_b.jpg'),
        img('6pvkpwhgaavzl1u5wodhr0op4yvm_e9.jpg')
      ],
      5: [
        img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        img('erzts14ece8u6pbe6qhecfuhqp1a_18436933176_1d582f87a4_o.jpg'),
        img('x9q4lqbckwpj24yjofrltyk65sxu_1581143669_46718192554_c5f406dce3_k.jpg'),
        img('aobaf1yw2mrowt8a50rvhq5jhavm_1582217692_galle_lighthouse.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Tea country to the coast`,
      'Breakfast, then Ramboda Falls and a tea factory visit',
      'Gregory Lake, Victoria Park and the Hakgala gardens',
      'The Seetha Amman temple of the Ramayana trail',
      'A long transfer down to Bentota and check in at the beach',
      `${DAY_MARK}Day 5 · Galle fort and Mirissa beach`,
      'Breakfast and an excursion along the southern coast',
      'The Dutch fort at Galle: ramparts, lighthouse and old church',
      'Mirissa beach and sunset from Coconut Tree Hill',
      'Back to Bentota for dinner'
    ],
    accommodation: {
      name: 'Earl\'s Reef, Bentota',
      description: '2 nights · Breakfast and dinner · Deluxe room · 4★ · Four star beachfront resort on the Bentota strand',
      images: [
        img('yhln84gtehigen6j45kts3lb29vx_247133579.jpg'),
        img('utmb42sfe4y0bulaouqiebyqrt6q_247157410.jpg'),
        img('sa0nobl8g6nehgdwf01u26206t9l_247165582.jpg'),
        img('uhtqb8yl3cwbsl1jpqja5lyfpfau_247165573.jpg'),
        img('76vhx7yr484n7nbqgfpcw52gs0nj_340492086.jpg'),
        img('s5d6v6k6qjs82h8p6qayg1wvt636_247165595.jpg'),
        img('77eveaq6vbpzo36heynuok4cum3m_247298373.jpg'),
        img('40zyq7sbywtdk8rtdawsa7a7twvo_247160520.jpg'),
        img('tzvgoo5evadldwggfzf1nx4tmlna_340497011.jpg'),
        img('q2ozbemm7185r14a92pulxrf1o2x_247160678.jpg')
      ]
    },
    activities: [
      {
        name: 'Full day Nuwara Eliya sightseeing',
        day: 4,
        optional: false,
        image: img('7ztsyywjmihi32gluk6v8argfrlo_shutterstock_1116598154.jpg'),
        description: 'Ramboda Falls, a working tea estate and factory, Gregory Lake, Victoria Park, Hakgala gardens and the Seetha Amman temple.'
      },
      {
        name: 'Excursion to Galle and Mirissa',
        day: 5,
        optional: false,
        image: img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        description: 'South along the coast to the Dutch fort at Galle with its ramparts and lighthouse, then on to Mirissa beach and Coconut Tree Hill.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Down from the hills to a four star beachfront resort: a full day of waterfalls and tea estates on the way, then Galle and Mirissa from your base.',
      image: img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Colombo',
    dayLabel: 'Day 6 to 7',
    images: [
      img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
      img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
      img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
    ],
    dayImages: {
      6: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      7: [
        img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
        img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
        img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
        img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Colombo city tour`,
      'Breakfast and a transfer down the coast to Colombo',
      'Galle Face Green and the Gangaramaya temple complex',
      'The Fort district, the Lotus Tower and Pettah market',
      'Dinner and your last night at the hotel',
      `${DAY_MARK}Day 7 · Departure from Colombo`,
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
        day: 6,
        optional: false,
        image: img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A final night in the capital with a full day of its temples, colonial quarter and markets.',
      image: img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg')
    }
  }
];

const detail = {
  slug: 'tropical-sri-lanka-super-deluxe-kandy-sigiriya-and-bentota',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Tropical Sri Lanka Super Deluxe: Kandy, Sigiriya and Bentota',
  alt: 'Sunset over the pool of a four star beach resort at Bentota',
  days: '7 days / 6 nights',
  stations: '4 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Luxury',
  tags: ['Luxury', 'Culture', 'Beach'],
  price: 46075,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Nuwara Eliya', 'Bentota', 'Colombo'],
  stats: { days: 7, cities: 4, hotels: 4, activities: 7, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['12 meals', 'Meals'],
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
  short: 'The Tropical Sri Lanka route in upgraded hotels: two nights in Kandy with the Pinnawala elephants and a day at Sigiriya, a four star colonial cottage in Nuwara Eliya, two nights at a four star beach resort in Bentota with Galle and Mirissa, and a last night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights in deluxe and four star hotels with breakfast and lunch or dinner daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; the Pinnawala elephant sanctuary visit; Kandy lake drive and Kandyan dance show; a full day excursion to Sigiriya; full day Kandy sightseeing; full day Nuwara Eliya sightseeing; a day excursion to Galle and Mirissa; full day Colombo sightseeing.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (D)', text: 'Arrival at Bandaranaike International and private transfer inland\nA stop at the Pinnawala elephant sanctuary on the way\nCheck in at your Kandy hotel in the afternoon\nAn evening lake drive and the Kandyan dance performance', hotel: 'Hotel Devon Kandy', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A stop at the Pinnawala elephant sanctuary on the way', 'Check in at your Kandy hotel in the afternoon'] },
    { title: 'Day 2: A day at Sigiriya (B, D)', text: 'Breakfast, then the road north through the Cultural Triangle\nThe water gardens and the climb past the mirror wall\nFrescoes of the cloud maidens and the lion paw terrace\nSummit ruins and views across the dry zone jungle\nBack to Kandy for dinner at the hotel', hotel: 'Hotel Devon Kandy', highlights: ['Breakfast, then the road north through the Cultural Triangle', 'The water gardens and the climb past the mirror wall', 'Frescoes of the cloud maidens and the lion paw terrace'] },
    { title: 'Day 3: Kandy sights and the climb to Nuwara Eliya (B, D)', text: 'Breakfast, then the Temple of the Sacred Tooth Relic\nThe hilltop Buddha at Bahiravokanda and Peradeniya gardens\nA transfer through the tea estates to Nuwara Eliya\nCheck in and an evening walk by Gregory Lake', hotel: 'Mirage Kings Cottage, Nuwara Eliya', highlights: ['Breakfast, then the Temple of the Sacred Tooth Relic', 'The hilltop Buddha at Bahiravokanda and Peradeniya gardens', 'A transfer through the tea estates to Nuwara Eliya'] },
    { title: 'Day 4: Tea country to the coast (B, D)', text: 'Breakfast, then Ramboda Falls and a tea factory visit\nGregory Lake, Victoria Park and the Hakgala gardens\nThe Seetha Amman temple of the Ramayana trail\nA long transfer down to Bentota and check in at the beach', hotel: 'Earl\'s Reef, Bentota', highlights: ['Breakfast, then Ramboda Falls and a tea factory visit', 'Gregory Lake, Victoria Park and the Hakgala gardens', 'The Seetha Amman temple of the Ramayana trail'] },
    { title: 'Day 5: Galle fort and Mirissa beach (B, D)', text: 'Breakfast and an excursion along the southern coast\nThe Dutch fort at Galle: ramparts, lighthouse and old church\nMirissa beach and sunset from Coconut Tree Hill\nBack to Bentota for dinner', hotel: 'Earl\'s Reef, Bentota', highlights: ['Breakfast and an excursion along the southern coast', 'The Dutch fort at Galle: ramparts, lighthouse and old church', 'Mirissa beach and sunset from Coconut Tree Hill'] },
    { title: 'Day 6: Colombo city tour (B, D)', text: 'Breakfast and a transfer down the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nDinner and your last night at the hotel', hotel: 'Berjaya Hotel Colombo', highlights: ['Breakfast and a transfer down the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
    { title: 'Day 7: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const tropicalSriLankaSuperDeluxeKandySigiriyaBentotaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const tropicalSriLankaSuperDeluxeKandySigiriyaBentotaProduct = {
  slug: detail.slug,
  places: ['Kandy', 'Nuwara Eliya', 'Bentota', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 7,
  transfers: 9,
  meals: 12,
  price: detail.price,
  images: cardImages
};
