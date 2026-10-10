// Grand China with a Yangtze River Cruise. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('m3dyg1tmdo3r6eld1jfrkoffl37b_shutterstock_1268753047-min.jpg'),
  img('tcd2rk00h14z5r6hpopl83lpxwwx_pixelcut-export-14.jpg'),
  img('umyo226m9ttwcb214y2midgqmntg_Downpic.cc-55990140.jpg'),
  img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg'),
  img('ni2etmxz6i1vr6og0rcdib2jtaqv_Downpic.cc-135981216.jpg'),
  img('5yaq7bzaxb40no5np1s937tkp61f_shutterstock_499988527.jpg'),
  img('ok9opdlfrpj5koec0e42iu16b21d_dl.beatsnoop.com-final-zlrJO750No.jpg'),
  img('64xrlm3ona44f2jmcn07eyyhwqbe_dl.beatsnoop.com-3000-DOuW5FdA78.jpg'),
  img('8dfs3k9j9xr933hhhbqiwdxj9li7_Downpic.cc-image270479373.jpg'),
  img('mhzihtqddyhfl89giyt42xkje3es_shutterstock_1268651989-min.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('m3dyg1tmdo3r6eld1jfrkoffl37b_shutterstock_1268753047-min.jpg'),
  img('tcd2rk00h14z5r6hpopl83lpxwwx_pixelcut-export-14.jpg'),
  img('umyo226m9ttwcb214y2midgqmntg_Downpic.cc-55990140.jpg'),
  img('ni2etmxz6i1vr6og0rcdib2jtaqv_Downpic.cc-135981216.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Shanghai',
    dayLabel: 'Day 1',
    images: [
      img('m3dyg1tmdo3r6eld1jfrkoffl37b_shutterstock_1268753047-min.jpg'),
      img('sy8up1i5fjkczj4r2but84kipt8b_shutterstock_2564397773.jpg'),
      img('no75mboui4oqze5h7in1v1fwy9zw_shutterstock_765269341.jpg'),
      img('umyo226m9ttwcb214y2midgqmntg_Downpic.cc-55990140.jpg')
    ],
    dayImages: {
      1: [
        img('2k4c4p2jzw25zkin4pr08mrop92w_1619596902_shutterstock_1462710089.jpg'),
        img('s8t3rwhg2yl68b7506zqum0o0x4d_1619599915_shutterstock_1149341150.jpg'),
        img('ijv4hicv8xdbd7kbr6u8y4ir0wp2_1619599753_shutterstock_1048697678.jpg'),
        img('m3dyg1tmdo3r6eld1jfrkoffl37b_shutterstock_1268753047-min.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Shanghai`,
      'Arrival at Pudong or Hongqiao and transfer to your hotel',
      'Check in and the rest of the day free',
      'Optional: an evening walk on the Bund',
      'Optional: street food on Nanjing Road'
    ],
    accommodation: {
      name: 'Holiday Inn Express Shanghai Gongkang, Shanghai',
      description: '1 night · Breakfast · Standard room · 3★ · Practical base in Jing\'an with metro access',
      images: [
        img('t2237dgb54uv7s4rx4d6ia1773m3_254540841.png'),
        img('w9ivrioc0218ptdjg2ux6k3l7k6w_252126148.png'),
        img('7j685fea2v362rrz8zpp6b7dqhyo_252477212.png'),
        img('ui2qybbjs89a4z5krgj3vsb0nf0f_192744987.png'),
        img('ilgwg755ts2z2yj8x9ugsqlq786y_295410234.png'),
        img('s0o6ump4njlgmgmvpcf6pht58wwi_252477204.png'),
        img('941vca46ob7vgexpzb8c3wy0qman_252127522.png'),
        img('8dj51afdp4eqkjs14tvc7enjb6hx_295410221.png'),
        img('jjg4sx0q5lmchhjoebkp8qfwu49z_289966229.png'),
        img('e2yjnulvma27jqq7wura2k5f99xw_289966159.png')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Shanghai',
      description: 'One night to land and settle before the flight inland to Chongqing and the river.',
      image: img('m3dyg1tmdo3r6eld1jfrkoffl37b_shutterstock_1268753047-min.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Yangtze River',
    subtitle: 'Chongqing → Fengdu → the Three Gorges',
    dayLabel: 'Day 2 to 4',
    images: [
      img('liu06uek2ghr8vugaisxlbyv23vj_pixelcut-export-13.jpg'),
      img('tcd2rk00h14z5r6hpopl83lpxwwx_pixelcut-export-14.jpg'),
      img('g6lerqb8c1xodgv1kfnupbj866ug_shutterstock_1849707601-min.jpg'),
      img('shu04lspn84oucybi3xcg15kjj5y_shutterstock_1620754879.jpg')
    ],
    dayImages: {
      2: [
        img('j2oodujhn8zznycg8feixxyc2qo1_shutterstock_1473546209.jpg'),
        img('dthf7r2rom33hhvtxgv794ukp3rz_27065257870_0dacab4a48_o.jpg'),
        img('juggphs5tjqiudg5xj82l0s93lsd_40887886790_49c3aa64a9_o.jpg'),
        img('bk2wn0t93hpwa3ojzem3jpym1t35_wKgED1vX9rOAcd7vAB8hTdS9SYc37.png')
      ],
      3: [
        img('8dfgh2g142i0fmjp5hwf45v54m9e_shutterstock_499988485.jpg'),
        img('rjijdndv33dssqzi0owgoalwwjv5_fengdu-ghost-city-jpg.png'),
        img('liu06uek2ghr8vugaisxlbyv23vj_pixelcut-export-13.jpg'),
        img('tcd2rk00h14z5r6hpopl83lpxwwx_pixelcut-export-14.jpg')
      ],
      4: [
        img('829eejs7bwld5wq3qfs7o4nwfrzy_shutterstock_366538163.jpg'),
        img('96l5vfq5bwf84vgyjrtppz6u0dgg_%E8%A5%BF%E9%99%B5%E5%B3%A1.jpg'),
        img('ov05lesgcy6lrr4au4fj6m0m4wnc_Wu_Gorge_on_Yangtze%20(1).jpg'),
        img('liu06uek2ghr8vugaisxlbyv23vj_pixelcut-export-13.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Chongqing and boarding the ship`,
      'Breakfast, then check out and transfer to the airport',
      'Flight Shanghai to Chongqing included',
      'A guided afternoon around hillside Chongqing',
      'Board the Victoria Jenna for dinner on the river',
      `${DAY_MARK}Day 3 · Fengdu Ghost City`,
      'Breakfast on board as the ship sails east',
      'A shore visit to the Fengdu Ghost City',
      'Temples and painted figures on Ming mountain',
      'Lunch and dinner on board',
      `${DAY_MARK}Day 4 · Qutang and Wu gorges`,
      'Breakfast on board at first light',
      'Through the sheer cliffs of the Qutang gorge',
      'The long green narrows of the Wu gorge',
      'Lunch and dinner on board'
    ],
    accommodation: {
      name: 'Victoria Jenna, Yangtze River Cruise, Chongqing',
      description: '3 nights · Full board · Standard cabin · 5★ · River ship with all meals and shore visits on board',
      images: [
        img('kmoeeefqstj3cbsd6nzvo6vrsv0y_ce.jpg'),
        img('rh056s3fj3y1ad1s4t5prah7764y_d0.jpg'),
        img('7v3dm1qcz2t4a2j9il7rwwvftj76_victoria-jenna-executive-suite-500-1.jpg'),
        img('25ajvamxnux382s919d0t1n6kvdh_victoria-jenna-superior-cabin-500-3.jpg'),
        img('bsvky0sgswiozmdnyce11y6l6z64_victoria-jenna-superior-cabin-500-1.jpg')
      ]
    },
    activities: [
      {
        name: 'Chongqing guided city tour',
        day: 2,
        optional: false,
        image: img('j2oodujhn8zznycg8feixxyc2qo1_shutterstock_1473546209.jpg'),
        description: 'A guided afternoon through the hillside city, taking in Hongya Cave, the Liberation Monument and the old street at Longmenhao.'
      },
      {
        name: 'Fengdu Ghost City',
        day: 3,
        optional: false,
        image: img('8dfgh2g142i0fmjp5hwf45v54m9e_shutterstock_499988485.jpg'),
        description: 'A shore visit to the temples and painted stone figures on Ming mountain, built around old Chinese beliefs about the afterlife.'
      },
      {
        name: 'Qutang and Wu gorges',
        day: 4,
        optional: false,
        image: img('829eejs7bwld5wq3qfs7o4nwfrzy_shutterstock_366538163.jpg'),
        description: 'A full day on deck as the ship threads the sheer cliffs of the Qutang gorge and the long green narrows of the Wu gorge.'
      }
    ],
    program: {
      name: 'Yangtze River',
      description: 'Three nights aboard the Victoria Jenna with all meals, a shore visit at Fengdu and a full day through the Three Gorges.',
      image: img('liu06uek2ghr8vugaisxlbyv23vj_pixelcut-export-13.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Shanghai',
    dayLabel: 'Day 5 to 6',
    images: [
      img('h4ztzh96ymup5j5gp8ii4lckwcjg_Downpic.cc-image214394374.jpg'),
      img('4or1588bvqw4so17b75s4ukxxjt3_Downpic.cc-87319053.jpg'),
      img('ni2etmxz6i1vr6og0rcdib2jtaqv_Downpic.cc-135981216.jpg'),
      img('gbpiso0axqgkohebhs9y4n433u50_dl.beatsnoop.com-3000-HNaMrjnykF.jpg')
    ],
    dayImages: {
      5: [
        img('myiget40ru8wcxs1nvlfsf9uxgir_shutterstock_1269298792-min.jpg'),
        img('ojkbqd8nay70e5m246yxz7t1otsr_download%20-%202025-01-28T125012.850.jpg'),
        img('m3dyg1tmdo3r6eld1jfrkoffl37b_shutterstock_1268753047-min.jpg'),
        img('sy8up1i5fjkczj4r2but84kipt8b_shutterstock_2564397773.jpg')
      ],
      6: [
        img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg'),
        img('3v46yytijdj44xwmcu10tpsd0agd_1619599983_shutterstock_199457384.jpg'),
        img('ac1pvfyncr6b3o6g64b7etpkzlyi_1619608001_shutterstock_1252745494.jpg'),
        img('imtxhf697qz3p06aemge77j1haun_1619600357_shutterstock_1148631992.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Three Gorges Dam and on to Shanghai`,
      'Breakfast on board, then disembark',
      'A guided visit to the Three Gorges Dam',
      'The ship locks and the viewing platforms',
      'Station transfer and the fast train east to Shanghai',
      'Arrival transfer and check in for two nights',
      `${DAY_MARK}Day 6 · City tour, tower and river cruise`,
      'Breakfast, then a guided half day of the city',
      'The Bund, the old town lanes and the Yu garden',
      'Up the Oriental Pearl Tower in the afternoon',
      'A cruise on the Huangpu as the towers light up'
    ],
    accommodation: {
      name: 'Holiday Inn Express Shanghai Putuo, Shanghai',
      description: '2 nights · Breakfast · Standard room · 3★ · Comfortable base in Putuo close to the metro',
      images: [
        img('188urx9bxrn69hyen8dqimsfx72z_488327823.jpg'),
        img('zd8xrskcgxv1m891xi4hubp2zh2k_230102610.jpg'),
        img('b33lqmz9fptgbbbv9x6whorw1hnt_442573332.jpg'),
        img('8x53ctpvg2e8ip14l9l2o3rtph3c_230101393.jpg'),
        img('eodhcam38r7paz9kzxawyn987n0v_477503847.jpg'),
        img('iaxtmbul7js7efqmjhwxvyoddim4_442572974.jpg'),
        img('7eqwvpucafh1p7ykqyo3zzhzlydy_517810410.jpg'),
        img('gs8w4peye1g9l2dvvj0jjugiwr4b_517810411.jpg')
      ]
    },
    activities: [
      {
        name: 'Three Gorges Dam',
        day: 5,
        optional: false,
        image: img('myiget40ru8wcxs1nvlfsf9uxgir_shutterstock_1269298792-min.jpg'),
        description: 'A guided look at the largest power station ever built, with the ship locks, the spillway and the long viewing platforms.'
      },
      {
        name: 'Half day guided tour of Shanghai',
        day: 6,
        optional: false,
        image: img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg'),
        description: 'A guided morning through the Bund waterfront, the old town lanes and the rockeries and ponds of the Yu garden.'
      },
      {
        name: 'Oriental Pearl Tower',
        day: 6,
        optional: false,
        image: img('p9etuo253h5gw8ttnc3rdw5pds6i_dl.beatsnoop.com-3000-msl1j40qR3.jpg'),
        description: 'Tickets up the city\'s best known tower, with the glass floor over Pudong and a long view back to the colonial Bund.'
      },
      {
        name: 'Huangpu river cruise',
        day: 6,
        optional: false,
        image: img('kyqi22drkx8f1w8fyrfliyqlswnk_Downpic.cc-92560468.jpg'),
        description: 'An evening sailing between the lit towers of Pudong and the stone facades of the Bund, the classic Shanghai skyline shot.'
      }
    ],
    program: {
      name: 'Shanghai',
      description: 'Two nights back in the port city for the Bund, the Yu garden, the Oriental Pearl Tower and a cruise on the Huangpu.',
      image: img('h4ztzh96ymup5j5gp8ii4lckwcjg_Downpic.cc-image214394374.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Beijing',
    dayLabel: 'Day 7 to 9',
    images: [
      img('py0d0vs1yfmphh19wv1jnxco2i43_shutterstock_632470502.jpg'),
      img('myiget40ru8wcxs1nvlfsf9uxgir_shutterstock_1269298792-min.jpg'),
      img('evypml3aipi43o842pub4s2p05nj_shutterstock_2516221009.jpg'),
      img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg')
    ],
    dayImages: {
      7: [
        img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        img('py0d0vs1yfmphh19wv1jnxco2i43_shutterstock_632470502.jpg'),
        img('myiget40ru8wcxs1nvlfsf9uxgir_shutterstock_1269298792-min.jpg'),
        img('evypml3aipi43o842pub4s2p05nj_shutterstock_2516221009.jpg')
      ],
      8: [
        img('uzcrzvz5okpx6n4cpj66bbxe6ek4_Downpic.cc-71935295.jpg'),
        img('4q5tejgfrgal67d9s1rm66myvq3e_1619595246_shutterstock_721311280.jpg'),
        img('wmzivohel7wnazhjlo5exrpawr6o_1619597766_shutterstock_31943836.jpg'),
        img('xhapwj9v3aun8mqo8zxnwqvaqp74_1619597223_shutterstock_141819499.jpg')
      ],
      9: [
        img('py0d0vs1yfmphh19wv1jnxco2i43_shutterstock_632470502.jpg'),
        img('myiget40ru8wcxs1nvlfsf9uxgir_shutterstock_1269298792-min.jpg'),
        img('evypml3aipi43o842pub4s2p05nj_shutterstock_2516221009.jpg'),
        img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · North to Beijing and the Great Wall`,
      'Breakfast and check out of your Shanghai hotel',
      'Station transfer and the bullet train north to Beijing',
      'On to Mutianyu for the wall and the cable car',
      'The Summer Palace, Kunming lake and the long corridor',
      `${DAY_MARK}Day 8 · Forbidden City and Temple of Heaven`,
      'Breakfast, then a guided day in the old centre',
      'Tiananmen Square and the Forbidden City courtyards',
      'The Temple of Heaven and its round halls',
      'A stop at the jade workshop on the way back',
      `${DAY_MARK}Day 9 · Departure from Beijing`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Beijing Huacai, Beijing',
      description: '2 nights · Breakfast · Standard room · 3★ · Simple hotel in Chaoyang, close to the metro',
      images: [
        img('3b4gz9aov40t96ogrda2jhvg1q1t_download%20(3).png'),
        img('ji2e1fiswpb2bh6a0f9tw74wciq7_download.png'),
        img('4klt1p2b0p6084tozhz8v1sqeoon_download%20(5).png'),
        img('f6ur39l3yfs9cfsrx76cgjmynx36_download%20(10).png'),
        img('stuz5zpxnigri6crm4sbcl0vipiz_download%20(7).png'),
        img('4m23luywihiiew6he29e7ne5y9pd_download%20(2).png'),
        img('4jm1r5udgur3oj27w7b11po95by8_download%20(8).png'),
        img('z4wfj6rsuku27ileod8ejxv1g31t_download%20(4).png'),
        img('fcd5rd430f52k5hihctlwqkn6fqa_download%20(6).png'),
        img('wkxjbpeobmslop2ifzhcg6o3dn4w_download%20(1).png'),
        img('mt62w350l0rnv10hpz2lm7bg2ucn_download%20(9).png')
      ]
    },
    activities: [
      {
        name: 'Great Wall at Mutianyu and the Summer Palace',
        day: 7,
        optional: false,
        image: img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        description: 'The Mutianyu section of the wall, steep and far less crowded than Badaling, then the lake and long corridor of the Summer Palace.'
      },
      {
        name: 'Beijing city sightseeing tour',
        day: 8,
        optional: false,
        image: img('uzcrzvz5okpx6n4cpj66bbxe6ek4_Downpic.cc-71935295.jpg'),
        description: 'A guided day through Tiananmen Square, the courtyards of the Forbidden City and the round halls of the Temple of Heaven.'
      }
    ],
    program: {
      name: 'Beijing',
      description: 'Two nights in the capital to finish, with the wall at Mutianyu, the Summer Palace and the imperial centre.',
      image: img('py0d0vs1yfmphh19wv1jnxco2i43_shutterstock_632470502.jpg')
    }
  }
];

const detail = {
  slug: 'grand-china-with-yangtze-river-cruise',
  ctaHref: '/l/china/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Grand China with a Yangtze River Cruise',
  alt: 'Cruise ship passing the cliffs of the Qutang gorge on the Yangtze',
  days: '9 days / 8 nights',
  stations: '4 stops',
  transport: 'Private transfers, an internal flight, bullet trains and a river cruise',
  tag: 'Luxury',
  tags: ['Luxury', 'Cruise'],
  price: 251750,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Shanghai', 'Chongqing', 'Yangtze River', 'Beijing'],
  stats: { days: 9, cities: 4, hotels: 4, activities: 9, transfers: 17 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['9 experiences', 'Activities'],
    ['17 transfers', 'Transport'],
    ['14 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Mei',
    image: '/experts/riya.webp',
    role: 'China expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three nights on the Yangtze turn a city holiday into a proper journey. You watch the country change from the top deck.',
    quoteMore: 'Ask for a cabin on the upper deck, port side. The best of the gorge scenery passes on that side going downstream.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days from Shanghai to the Yangtze and on to Beijing: a guided afternoon in Chongqing, three full board nights aboard the Victoria Jenna through the Three Gorges, then the Bund and the Great Wall at Mutianyu.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights with meals as listed; the Shanghai to Chongqing flight; private transfers and bullet trains; guided Chongqing city tour; 3 full board nights on the Victoria Jenna; Fengdu Ghost City tickets; Qutang and Wu gorges sailing; Three Gorges Dam tour; half day guided Shanghai city tour; Oriental Pearl Tower tickets; Huangpu river cruise tickets; full day Great Wall at Mutianyu with the Summer Palace; guided Beijing city sightseeing tour.',
  intro2: 'Not included: international flights; China visa fees; meals beyond those listed; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Shanghai (Arrival)', text: 'Arrival at Pudong or Hongqiao and transfer to your hotel\nCheck in and the rest of the day free\nOptional: an evening walk on the Bund\nOptional: street food on Nanjing Road', hotel: 'Holiday Inn Express Shanghai Gongkang', highlights: ['Arrival at Pudong or Hongqiao and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: an evening walk on the Bund'] },
    { title: 'Day 2: Chongqing and boarding the ship (B, L, D)', text: 'Breakfast, then check out and transfer to the airport\nFlight Shanghai to Chongqing included\nA guided afternoon around hillside Chongqing\nBoard the Victoria Jenna for dinner on the river', hotel: 'Victoria Jenna, Yangtze River Cruise', highlights: ['Breakfast, then check out and transfer to the airport', 'Flight Shanghai to Chongqing included', 'A guided afternoon around hillside Chongqing'] },
    { title: 'Day 3: Fengdu Ghost City (B, L, D)', text: 'Breakfast on board as the ship sails east\nA shore visit to the Fengdu Ghost City\nTemples and painted figures on Ming mountain\nLunch and dinner on board', hotel: 'Victoria Jenna, Yangtze River Cruise', highlights: ['Breakfast on board as the ship sails east', 'A shore visit to the Fengdu Ghost City', 'Temples and painted figures on Ming mountain'] },
    { title: 'Day 4: Qutang and Wu gorges (B, L, D)', text: 'Breakfast on board at first light\nThrough the sheer cliffs of the Qutang gorge\nThe long green narrows of the Wu gorge\nLunch and dinner on board', hotel: 'Victoria Jenna, Yangtze River Cruise', highlights: ['Breakfast on board at first light', 'Through the sheer cliffs of the Qutang gorge', 'The long green narrows of the Wu gorge'] },
    { title: 'Day 5: Three Gorges Dam and on to Shanghai (B)', text: 'Breakfast on board, then disembark\nA guided visit to the Three Gorges Dam\nThe ship locks and the viewing platforms\nStation transfer and the fast train east to Shanghai\nArrival transfer and check in for two nights', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Breakfast on board, then disembark', 'A guided visit to the Three Gorges Dam', 'The ship locks and the viewing platforms'] },
    { title: 'Day 6: City tour, tower and river cruise (B)', text: 'Breakfast, then a guided half day of the city\nThe Bund, the old town lanes and the Yu garden\nUp the Oriental Pearl Tower in the afternoon\nA cruise on the Huangpu as the towers light up', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Breakfast, then a guided half day of the city', 'The Bund, the old town lanes and the Yu garden', 'Up the Oriental Pearl Tower in the afternoon'] },
    { title: 'Day 7: North to Beijing and the Great Wall (B)', text: 'Breakfast and check out of your Shanghai hotel\nStation transfer and the bullet train north to Beijing\nOn to Mutianyu for the wall and the cable car\nThe Summer Palace, Kunming lake and the long corridor', hotel: 'Holiday Inn Express Beijing Huacai', highlights: ['Breakfast and check out of your Shanghai hotel', 'Station transfer and the bullet train north to Beijing', 'On to Mutianyu for the wall and the cable car'] },
    { title: 'Day 8: Forbidden City and Temple of Heaven (B)', text: 'Breakfast, then a guided day in the old centre\nTiananmen Square and the Forbidden City courtyards\nThe Temple of Heaven and its round halls\nA stop at the jade workshop on the way back', hotel: 'Holiday Inn Express Beijing Huacai', highlights: ['Breakfast, then a guided day in the old centre', 'Tiananmen Square and the Forbidden City courtyards', 'The Temple of Heaven and its round halls'] },
    { title: 'Day 9: Departure from Beijing (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; China visa fees; meals beyond those listed; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'China', href: '/asien/china' },
  { label: detail.title }
];

export const grandChinaYangtzeCruiseBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const grandChinaYangtzeCruiseProduct = {
  slug: detail.slug,
  places: ['Shanghai', 'Chongqing', 'Yangtze River', 'Beijing'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 9,
  transfers: 17,
  meals: 14,
  price: detail.price,
  images: cardImages
};
