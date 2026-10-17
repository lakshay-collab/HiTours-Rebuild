// Exotic Sri Lanka for Couples: Kandy, Nuwara Eliya and Bentota. Facts from the source itinerary, copy written fresh, INR pricing.
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
  img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg'),
  img('nblwv1u3cze5qug1glqs5ltuux5m_shutterstock_776788237%20(1).jpg'),
  img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg'),
  img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg')
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
        img('y0q82gk44ue9n4xcn28m4797dbm6_Tooth%20Relic-1.jpg'),
        img('z9jmx0c1617z8r6hdxh9hxx8l7cx_12697307653_c05a52b8f1_o.jpg'),
        img('q5mg4s7atcnsscxcoxgfnysmzyiy_download.jpg'),
        img('kqane2l7nbclfb02gw5ddna8im4c_ibnbattuta-UTajuPS-zU3z3-w5y.webp')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Kandy`,
      'Arrival at Bandaranaike International and private transfer inland',
      'A stop at the Pinnawala elephant sanctuary on the way',
      'Check in at your Kandy hotel in the afternoon',
      'An evening lake drive and the Kandyan dance performance',
      `${DAY_MARK}Day 2 · A full day in Kandy`,
      'Breakfast, then the Temple of the Sacred Tooth Relic',
      'The Peradeniya Royal Botanical Gardens and the orchid house',
      'The hilltop Buddha at Bahiravokanda and the gem museum',
      'Dinner at the hotel overlooking the valley'
    ],
    accommodation: {
      name: 'Skyloft, Kandy',
      description: '2 nights · Breakfast and dinner · Deluxe room · 3★ · Deluxe class hotel with views over the Kandy valley',
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
        name: 'Full day Kandy city tour',
        day: 2,
        optional: false,
        image: img('y0q82gk44ue9n4xcn28m4797dbm6_Tooth%20Relic-1.jpg'),
        description: 'The Temple of the Sacred Tooth Relic, the Peradeniya botanical gardens, the Bahiravokanda Buddha and the gem museum.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'Two nights above Kandy lake with the elephants of Pinnawala on the way in, a dance show and a full day of the city and its gardens.',
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
        img('7ztsyywjmihi32gluk6v8argfrlo_shutterstock_1116598154.jpg'),
        img('6upo74208pk22ejwy6dpssckyjdn_Depositphotos_158390642_s-2019.png'),
        img('c5d5akjf4ek0zsuldrgeqqwpvx4h_5821411770_f564d81e3a_b.jpg'),
        img('6pvkpwhgaavzl1u5wodhr0op4yvm_e9.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Into the tea country`,
      'Breakfast and a private transfer up to Nuwara Eliya',
      'Ramboda Falls and a tea factory tasting on the way',
      'Gregory Lake, Victoria Park and the Hakgala gardens',
      'Check in and dinner in Little England'
    ],
    accommodation: {
      name: 'Ripon Grand Hill, Nuwara Eliya',
      description: '1 night · Breakfast and dinner · Deluxe room · 3★ · Deluxe class hotel on the slopes above Nuwara Eliya',
      images: [
        img('pg3gcxqc7b6g5ndxhl5beqmf8vpv_137618439.jpg'),
        img('rsa0i2v9llbka9b2jij2k5q3cb2v_download%20-%202024-02-15T124445.145.jpeg'),
        img('6ye5wetl3lyx61pzcerz78b0y3ua_download%20-%202024-02-15T124537.498.jpeg'),
        img('27amah4trgzk0alsnhd85yb97rgt_download%20-%202024-02-15T124350.260.jpeg'),
        img('2ghzt8qixrepvo5nqxd19ked2q7o_download%20-%202024-02-15T124356.253.jpeg'),
        img('qp4a73jx5qiq0pzamnho8i7lsi9p_download%20-%202024-02-15T124403.320.jpeg'),
        img('tiw85whmfpi697dooq2swj7rntnw_download.jpg'),
        img('ibvr7mhdj02m2jou9rwkl1labbvg_download%20-%202024-02-15T124420.693.jpeg'),
        img('zj1xclmv0wu99yeuuuqvcatf6xud_download%20-%202024-02-15T124551.761.jpeg'),
        img('dguhfbuox7lq6iu2szmlcq9tdjhc_download%20-%202024-02-15T124430.642.jpeg')
      ]
    },
    activities: [
      {
        name: 'Full day Nuwara Eliya sightseeing',
        day: 3,
        optional: false,
        image: img('7ztsyywjmihi32gluk6v8argfrlo_shutterstock_1116598154.jpg'),
        description: 'Ramboda Falls, a working tea estate and factory, Gregory Lake, Victoria Park, Hakgala gardens and the Seetha Amman temple.'
      }
    ],
    program: {
      name: 'Nuwara Eliya',
      description: 'Up into the tea country for a night in Nuwara Eliya with a private full day of its waterfalls, gardens and lake.',
      image: img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Bentota',
    dayLabel: 'Day 4 to 6',
    images: [
      img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg'),
      img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
      img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
      img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg')
    ],
    dayImages: {
      4: [
        img('l2hojx9x8r3dpz5xi7ia36dgoho3_Edinburg-6.jpg'),
        img('y2zj5m7gvu7t72jxdiz4z9k4oz9t_download%20-%202024-12-20T120404.671.jpg'),
        img('c0x2bsv51zmx3tz3qiitrit9r8w8_Bentota%20Islang.JPG'),
        img('e4zzxdgonlq9scdq8hnyn7uhxdef_Ambalangoda.jpg')
      ],
      5: [
        img('3drp3xw253kg7pt48iauc5vh1yjz_Bentota%202.jpg'),
        img('mgac8tj98vp4u6p3vv4acwiwsebh_22859730893_159b5dee46_b.jpg'),
        img('c0x2bsv51zmx3tz3qiitrit9r8w8_Bentota%20Islang.JPG'),
        img('2kyg08hfs2xevolr6axgk0fpxg9d_download.jpg')
      ],
      6: [
        img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        img('erzts14ece8u6pbe6qhecfuhqp1a_18436933176_1d582f87a4_o.jpg'),
        img('x9q4lqbckwpj24yjofrltyk65sxu_1581143669_46718192554_c5f406dce3_k.jpg'),
        img('aobaf1yw2mrowt8a50rvhq5jhavm_1582217692_galle_lighthouse.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Down to the coast`,
      'Breakfast, then the Edinburgh viewpoint above the estates',
      'A pause at Kitulgala on the Kelani river',
      'A transfer on to Bentota and check in by the beach',
      'The evening at leisure on the sand',
      `${DAY_MARK}Day 5 · Madu River and the turtles`,
      'Breakfast, then a boat safari through the Madu Ganga mangroves',
      'The cinnamon island and the fish spa at the river mouth',
      'The Kosgoda turtle hatchery in the afternoon',
      'Optional: a candlelit dinner on the beach',
      `${DAY_MARK}Day 6 · Galle fort and Mirissa beach`,
      'Breakfast and an excursion along the southern coast',
      'The Dutch fort at Galle: ramparts, lighthouse and old church',
      'Mirissa beach and sunset from Coconut Tree Hill',
      'Back to Bentota for dinner'
    ],
    accommodation: {
      name: 'Haus Berlin, Bentota',
      description: '3 nights · Breakfast and dinner · Deluxe room · 3★ · Deluxe class boutique stay a short walk from Bentota beach',
      images: [
        img('2xaksvo5mn3bpru4dezdp4jcbw4j_download.jpg'),
        img('k06mythvt1usgmmover4rgwqfzlo_download%20(11).jpg'),
        img('ms3monadgpmtd7v2g92y2xfszqt3_e3b07f86_z.jpg'),
        img('f5w0q1ymimv322z7ip6ly6hvcotu_download%20(13).jpg'),
        img('igedfjk8c0xck4g1a7c3x6kn77ok_download%20(6).jpg'),
        img('y34cq309y8q2pa84bel1ldib3xww_download%20(1).jpg'),
        img('kcj75rikoduun1wnmfgsfzuw5bc1_download%20(7).jpg'),
        img('3bucxinak68swk6wnhx80qpew90n_download%20(12).jpg'),
        img('ki8n8ut0hm5k7kdzyjsumwwy3qwc_download%20(9).jpg'),
        img('p5tvabem0a12dw2636hv1fogh8bz_download%20(5).jpg'),
        img('cgu1rrwriv4v4ocfz3jqfq7gwl25_6747e554.png'),
        img('mr2hybf635vbdckh8hwzgy5mukl9_download%20(2).jpg')
      ]
    },
    activities: [
      {
        name: 'Edinburgh viewpoint and Kitulgala',
        day: 4,
        optional: false,
        image: img('l2hojx9x8r3dpz5xi7ia36dgoho3_Edinburg-6.jpg'),
        description: 'A stop above the tea terraces on the way down from the hills, then the rainforest river town of Kitulgala.'
      },
      {
        name: 'Madu River boat safari and Kosgoda turtle hatchery',
        day: 5,
        optional: false,
        image: img('3drp3xw253kg7pt48iauc5vh1yjz_Bentota%202.jpg'),
        description: 'A boat through the mangrove islands of the Madu Ganga, then the turtle hatchery at Kosgoda and the Bentota beaches.'
      },
      {
        name: 'Excursion to Galle and Mirissa',
        day: 6,
        optional: false,
        image: img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        description: 'South along the coast to the Dutch fort at Galle with its ramparts and lighthouse, then on to Mirissa beach and Coconut Tree Hill.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Three nights by the sea: a scenic transfer via the Edinburgh viewpoint and Kitulgala, a river safari and turtle hatchery day, and an excursion to Galle and Mirissa.',
      image: img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Colombo',
    dayLabel: 'Day 7 to 8',
    images: [
      img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
      img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
      img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
    ],
    dayImages: {
      7: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      8: [
        img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
        img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
        img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
        img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Colombo city tour`,
      'Breakfast and a transfer up the coast to Colombo',
      'Galle Face Green and the Gangaramaya temple complex',
      'The Fort district, the Lotus Tower and Pettah market',
      'Dinner and your last night at the hotel',
      `${DAY_MARK}Day 8 · Departure from Colombo`,
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
        day: 7,
        optional: false,
        image: img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A last night in the Fort district with a full day of the capital.',
      image: img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg')
    }
  }
];

const detail = {
  slug: 'exotic-sri-lanka-for-couples-kandy-nuwara-eliya-and-bentota',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Exotic Sri Lanka for Couples: Kandy, Nuwara Eliya and Bentota',
  alt: 'A couple on the golden sand at Bentota beach at sunset',
  days: '8 days / 7 nights',
  stations: '4 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Beach', 'Culture'],
  price: 46502,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Nuwara Eliya', 'Bentota', 'Colombo'],
  stats: { days: 8, cities: 4, hotels: 4, activities: 8, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['8 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['14 meals', 'Meals'],
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
  short: 'Eight days built for two: Kandy and its dance show, a night in the tea country, three nights at Bentota with a river safari, turtle hatchery and the Galle coast, and a final night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights in deluxe class hotels with breakfast and dinner daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; the Pinnawala elephant sanctuary visit; Kandy lake drive and dance show; a full day Kandy city tour; private full day Nuwara Eliya sightseeing; the Edinburgh viewpoint and Kitulgala stop; a full day Bentota sightseeing with the Madu River boat; a day excursion to Galle and Mirissa; full day Colombo sightseeing. Dance show and Bentota activity tickets are payable locally.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (D)', text: 'Arrival at Bandaranaike International and private transfer inland\nA stop at the Pinnawala elephant sanctuary on the way\nCheck in at your Kandy hotel in the afternoon\nAn evening lake drive and the Kandyan dance performance', hotel: 'Skyloft Kandy', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A stop at the Pinnawala elephant sanctuary on the way', 'Check in at your Kandy hotel in the afternoon'] },
    { title: 'Day 2: A full day in Kandy (B, D)', text: 'Breakfast, then the Temple of the Sacred Tooth Relic\nThe Peradeniya Royal Botanical Gardens and the orchid house\nThe hilltop Buddha at Bahiravokanda and the gem museum\nDinner at the hotel overlooking the valley', hotel: 'Skyloft Kandy', highlights: ['Breakfast, then the Temple of the Sacred Tooth Relic', 'The Peradeniya Royal Botanical Gardens and the orchid house', 'The hilltop Buddha at Bahiravokanda and the gem museum'] },
    { title: 'Day 3: Into the tea country (B, D)', text: 'Breakfast and a private transfer up to Nuwara Eliya\nRamboda Falls and a tea factory tasting on the way\nGregory Lake, Victoria Park and the Hakgala gardens\nCheck in and dinner in Little England', hotel: 'Ripon Grand Hill, Nuwara Eliya', highlights: ['Breakfast and a private transfer up to Nuwara Eliya', 'Ramboda Falls and a tea factory tasting on the way', 'Gregory Lake, Victoria Park and the Hakgala gardens'] },
    { title: 'Day 4: Down to the coast (B, D)', text: 'Breakfast, then the Edinburgh viewpoint above the estates\nA pause at Kitulgala on the Kelani river\nA transfer on to Bentota and check in by the beach\nThe evening at leisure on the sand', hotel: 'Haus Berlin, Bentota', highlights: ['Breakfast, then the Edinburgh viewpoint above the estates', 'A pause at Kitulgala on the Kelani river', 'A transfer on to Bentota and check in by the beach'] },
    { title: 'Day 5: Madu River and the turtles (B, D)', text: 'Breakfast, then a boat safari through the Madu Ganga mangroves\nThe cinnamon island and the fish spa at the river mouth\nThe Kosgoda turtle hatchery in the afternoon\nOptional: a candlelit dinner on the beach', hotel: 'Haus Berlin, Bentota', highlights: ['Breakfast, then a boat safari through the Madu Ganga mangroves', 'The cinnamon island and the fish spa at the river mouth', 'The Kosgoda turtle hatchery in the afternoon'] },
    { title: 'Day 6: Galle fort and Mirissa beach (B, D)', text: 'Breakfast and an excursion along the southern coast\nThe Dutch fort at Galle: ramparts, lighthouse and old church\nMirissa beach and sunset from Coconut Tree Hill\nBack to Bentota for dinner', hotel: 'Haus Berlin, Bentota', highlights: ['Breakfast and an excursion along the southern coast', 'The Dutch fort at Galle: ramparts, lighthouse and old church', 'Mirissa beach and sunset from Coconut Tree Hill'] },
    { title: 'Day 7: Colombo city tour (B, D)', text: 'Breakfast and a transfer up the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nDinner and your last night at the hotel', hotel: 'Grand Oriental Hotel Colombo', highlights: ['Breakfast and a transfer up the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
    { title: 'Day 8: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const exoticSriLankaCouplesKandyBentotaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const exoticSriLankaCouplesKandyBentotaProduct = {
  slug: detail.slug,
  places: ['Kandy', 'Nuwara Eliya', 'Bentota', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 8,
  transfers: 10,
  meals: 14,
  price: detail.price,
  images: cardImages
};
