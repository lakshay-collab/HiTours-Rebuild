// Tropical Sri Lanka: Kandy, Sigiriya and Bentota. Facts from the source itinerary, copy written fresh, INR pricing.
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
  img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
  img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
  img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
  img('8pngc3kvspg8528bwbrbu6t8b5gz_shutterstock_1423148210.jpg')
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
        img('83nbzteqgxputqqy959240s41mz1_shutterstock_771297769.jpg'),
        img('lwpeikpgx4vdu6dk38px2r3ugcv3_16592880909_c7e7d0a676_o.jpg'),
        img('273z0ew2ziyinmy62ccpeay5ggwo_nepal-royal-botanical-gardens.jpg'),
        img('q5mg4s7atcnsscxcoxgfnysmzyiy_download.jpg')
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
      name: 'Hotel Ashford, Nuwara Eliya',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Standard class hill country hotel close to Gregory Lake',
      images: [
        img('nj7vr39t9qd7td5kj2kfcizfopn1_hotel-ashford.jpg'),
        img('f2lrt4gqlg2s4zs0axwqwmpy9d6y_350332420_922640722184162_4333695471711833677_n.jpg'),
        img('l5xr18vfcycbr71mqnl4bzbbsaxr_hotel-ashford%20(1).jpg'),
        img('2jizsvyeeeyk13icsv01g04vg98p_49a93339_z.webp'),
        img('clt0pufkl9zfqoyhz5wu47fe1st4_apartments.jpg'),
        img('eblptsp05zzvbp22v3ohc64tuqk7_c35c977c_z.webp'),
        img('l07qfxm4b0awsavh8glhcadqnjix_8253af33_z.jpg'),
        img('hzclw5h36e59sc1w2zxggmtef6gr_apartments%20(1).jpg')
      ]
    },
    activities: [
      {
        name: 'Half day Kandy sightseeing',
        day: 3,
        optional: false,
        image: img('83nbzteqgxputqqy959240s41mz1_shutterstock_771297769.jpg'),
        description: 'The Temple of the Sacred Tooth Relic, the giant Bahiravokanda Buddha above the town and the Royal Botanical Gardens at Peradeniya.'
      }
    ],
    program: {
      name: 'Nuwara Eliya',
      description: 'A morning of Kandy sights, then up into tea country for a night in the town the British called Little England.',
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
      description: 'Down from the hills to the south west coast: a full day of waterfalls and tea estates on the way, then Galle and Mirissa from your beach base.',
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
  slug: 'tropical-sri-lanka-kandy-sigiriya-and-bentota',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Tropical Sri Lanka: Kandy, Sigiriya and Bentota',
  alt: 'Sigiriya rock fortress rising above the jungle of central Sri Lanka',
  days: '7 days / 6 nights',
  stations: '4 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Culture',
  tags: ['Culture', 'Beach', 'Family'],
  price: 45695,
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
    quote: 'Kandy, the hills and then the coast. Sri Lanka works best when you let the island cool you down before it warms you up again.',
    quoteMore: 'Carry a light sweater for Nuwara Eliya. It sits at nearly 1,900 metres and evenings are surprisingly chilly even in April.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days across the island: two nights in Kandy with the Pinnawala elephants and a day at Sigiriya, a night in the tea country at Nuwara Eliya, two on the beach at Bentota with an excursion to Galle and Mirissa, and a last night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights in deluxe and standard class hotels with breakfast and dinner daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; the Pinnawala elephant sanctuary visit; Kandy lake drive and Kandyan dance show; a full day excursion to Sigiriya; half day Kandy sightseeing; full day Nuwara Eliya sightseeing; a day excursion to Galle and Mirissa; full day Colombo sightseeing.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (D)', text: 'Arrival at Bandaranaike International and private transfer inland\nA stop at the Pinnawala elephant sanctuary on the way\nCheck in at your Kandy hotel in the afternoon\nAn evening lake drive and the Kandyan dance performance', hotel: 'Hotel Devon Kandy', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A stop at the Pinnawala elephant sanctuary on the way', 'Check in at your Kandy hotel in the afternoon'] },
    { title: 'Day 2: A day at Sigiriya (B, D)', text: 'Breakfast, then the road north through the Cultural Triangle\nThe water gardens and the climb past the mirror wall\nFrescoes of the cloud maidens and the lion paw terrace\nSummit ruins and views across the dry zone jungle\nBack to Kandy for dinner at the hotel', hotel: 'Hotel Devon Kandy', highlights: ['Breakfast, then the road north through the Cultural Triangle', 'The water gardens and the climb past the mirror wall', 'Frescoes of the cloud maidens and the lion paw terrace'] },
    { title: 'Day 3: Kandy sights and the climb to Nuwara Eliya (B, D)', text: 'Breakfast, then the Temple of the Sacred Tooth Relic\nThe hilltop Buddha at Bahiravokanda and Peradeniya gardens\nA transfer through the tea estates to Nuwara Eliya\nCheck in and an evening walk by Gregory Lake', hotel: 'Hotel Ashford, Nuwara Eliya', highlights: ['Breakfast, then the Temple of the Sacred Tooth Relic', 'The hilltop Buddha at Bahiravokanda and Peradeniya gardens', 'A transfer through the tea estates to Nuwara Eliya'] },
    { title: 'Day 4: Tea country to the coast (B, D)', text: 'Breakfast, then Ramboda Falls and a tea factory visit\nGregory Lake, Victoria Park and the Hakgala gardens\nThe Seetha Amman temple of the Ramayana trail\nA long transfer down to Bentota and check in at the beach', hotel: 'Rockside Beach Resort, Bentota', highlights: ['Breakfast, then Ramboda Falls and a tea factory visit', 'Gregory Lake, Victoria Park and the Hakgala gardens', 'The Seetha Amman temple of the Ramayana trail'] },
    { title: 'Day 5: Galle fort and Mirissa beach (B, D)', text: 'Breakfast and an excursion along the southern coast\nThe Dutch fort at Galle: ramparts, lighthouse and old church\nMirissa beach and sunset from Coconut Tree Hill\nBack to Bentota for dinner', hotel: 'Rockside Beach Resort, Bentota', highlights: ['Breakfast and an excursion along the southern coast', 'The Dutch fort at Galle: ramparts, lighthouse and old church', 'Mirissa beach and sunset from Coconut Tree Hill'] },
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

export const tropicalSriLankaKandySigiriyaBentotaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const tropicalSriLankaKandySigiriyaBentotaProduct = {
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
