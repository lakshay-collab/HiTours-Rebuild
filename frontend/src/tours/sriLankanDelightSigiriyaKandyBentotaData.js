// Sri Lankan Delight: Sigiriya, Kandy and Bentota. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('hlqcocjhydm4r1jqgywjrv6r091p_shutterstock_2212268329.jpg'),
  img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
  img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
  img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
  img('qqmtcgw3h8fow9nxemzaog30yt5e_shutterstock_2314158603.jpg'),
  img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
  img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg'),
  img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
  img('9rx13bxnmvwrpuhf5u5m1isppbux_shutterstock_410626660.jpg'),
  img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('hlqcocjhydm4r1jqgywjrv6r091p_shutterstock_2212268329.jpg'),
  img('qqmtcgw3h8fow9nxemzaog30yt5e_shutterstock_2314158603.jpg'),
  img('9rx13bxnmvwrpuhf5u5m1isppbux_shutterstock_410626660.jpg'),
  img('qu3hn8xyp2hhwml15ou2i0fzxswe_shutterstock_2365441577.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Sigiriya',
    dayLabel: 'Day 1',
    images: [
      img('hlqcocjhydm4r1jqgywjrv6r091p_shutterstock_2212268329.jpg'),
      img('9rx13bxnmvwrpuhf5u5m1isppbux_shutterstock_410626660.jpg'),
      img('qqmtcgw3h8fow9nxemzaog30yt5e_shutterstock_2314158603.jpg'),
      img('qu3hn8xyp2hhwml15ou2i0fzxswe_shutterstock_2365441577.jpg')
    ],
    dayImages: {
      1: [
        img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('hlqcocjhydm4r1jqgywjrv6r091p_shutterstock_2212268329.jpg'),
        img('9rx13bxnmvwrpuhf5u5m1isppbux_shutterstock_410626660.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Sigiriya`,
      'Arrival at Bandaranaike International and private transfer inland',
      'A stop at the Pinnawala elephant sanctuary on the way',
      'Check in by the lake with the rock on the horizon',
      'Dinner at the hotel'
    ],
    accommodation: {
      name: 'Lavendish Country Resort, Sigiriya',
      description: '1 night · Breakfast · Standard room · 3★ · Country resort among the paddy fields with the rock on the horizon',
      images: [
        img('140jd5oysvdyw3mxvnhbjwmbd1dx_download%20(3).jpg'),
        img('q51odigvf273q28grw4fx8v02yln_download%20(14).jpg'),
        img('6t08jqc4l92w2bqir5g9ca082t8c_download%20(4).jpg'),
        img('8s27p7ku4klvesvkwt4ylypl4634_download%20(15).jpg'),
        img('wn0wb5x3lwprl5nwkb7v8hlmppxt_download%20(2).jpg'),
        img('zi3pouet16dbv719daxbyxe2u40z_download%20(1).jpg'),
        img('4bco3fdoghje6u0l26hfe25lc6pq_download.jpg'),
        img('1nygklt2cdmoxdawejfp8c58qi4d_download%20(13).jpg'),
        img('mj8fk46zo4k6wbufgi9v72zq1kyc_download%20(12).jpg')
      ]
    },
    activities: [
      {
        name: 'Pinnawala Elephant Orphanage',
        day: 1,
        optional: false,
        image: img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        description: 'A stop on the way up from the airport to watch the resident herd bathe in the Maha Oya river and feed at the sanctuary.'
      }
    ],
    program: {
      name: 'Sigiriya',
      description: 'Straight from the airport into the Cultural Triangle with the elephants on the way, for a night by the lake under the rock.',
      image: img('hlqcocjhydm4r1jqgywjrv6r091p_shutterstock_2212268329.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kandy',
    dayLabel: 'Day 2 to 3',
    images: [
      img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
      img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
      img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
      img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg')
    ],
    dayImages: {
      2: [
        img('zddej06lbz5sx2o1d0hx0bg0bfhd_1582551005_Colombo_1.png'),
        img('b14m75op1m07swbrru2fqbc31lfh_7006860454_cec45734cb_o.jpg'),
        img('8tjtza8r23mxcfmhgyq9i0y0w556_1597123269_shutterstock_308961545.jpg.jpg'),
        img('6ssex864i1kyillcvf2erhewwx3e_7962218516_d46b651f5a_o.jpg')
      ],
      3: [
        img('y0q82gk44ue9n4xcn28m4797dbm6_Tooth%20Relic-1.jpg'),
        img('z9jmx0c1617z8r6hdxh9hxx8l7cx_12697307653_c05a52b8f1_o.jpg'),
        img('q5mg4s7atcnsscxcoxgfnysmzyiy_download.jpg'),
        img('kqane2l7nbclfb02gw5ddna8im4c_ibnbattuta-UTajuPS-zU3z3-w5y.webp')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Sigiriya, Dambulla and on to Kandy`,
      'An early climb of the Sigiriya rock fortress',
      'Breakfast, then the Dambulla cave temple',
      'A spice garden at Matale on the way south',
      'Check in at Kandy, a lake drive and the dance show',
      `${DAY_MARK}Day 3 · A full day in Kandy`,
      'Breakfast, then the Temple of the Sacred Tooth Relic',
      'The Peradeniya Royal Botanical Gardens',
      'The hilltop Buddha at Bahiravokanda and the gem museum',
      'Dinner at the hotel'
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
        name: 'Sigiriya rock fortress',
        day: 2,
        optional: false,
        image: img('zddej06lbz5sx2o1d0hx0bg0bfhd_1582551005_Colombo_1.png'),
        description: 'A full day out to the fifth century rock citadel: the water gardens, the mirror wall, the frescoes and the summit palace ruins.'
      },
      {
        name: 'Dambulla cave temple',
        day: 2,
        optional: false,
        image: img('8tjtza8r23mxcfmhgyq9i0y0w556_1597123269_shutterstock_308961545.jpg.jpg'),
        description: 'Five rock cut shrines lined with murals and more than a hundred Buddha statues, on the way south to Kandy.'
      },
      {
        name: 'Spice garden and Kandyan dance show',
        day: 2,
        optional: false,
        image: img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        description: 'A stop at a Matale spice garden, then the lake drive and the drummers and fire walkers of the evening show.'
      },
      {
        name: 'Full day Kandy city tour',
        day: 3,
        optional: false,
        image: img('y0q82gk44ue9n4xcn28m4797dbm6_Tooth%20Relic-1.jpg'),
        description: 'The Temple of the Sacred Tooth Relic, the Peradeniya gardens, the Bahiravokanda Buddha and the gem museum.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'The rock and the Dambulla caves in the morning, then two nights in Kandy with a spice garden, the dance show and a full day of the city.',
      image: img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Bentota',
    dayLabel: 'Day 4 to 5',
    images: [
      img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
      img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
      img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
      img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg')
    ],
    dayImages: {
      4: [
        img('4nhzua0qjhxq269scn2196f6trxx_1557754429_jumbo.jpg'),
        img('lcogdoq76wasext2xs8n1943h2uh_1597147042_shutterstock_785564455.jpg'),
        img('z8pc6746uelxtxz5446rmvk51rki_flickr_cached_img_20b18d949dbd302f958b4aadfd6bf889_600x600.jpg'),
        img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg')
      ],
      5: [
        img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        img('erzts14ece8u6pbe6qhecfuhqp1a_18436933176_1d582f87a4_o.jpg'),
        img('x9q4lqbckwpj24yjofrltyk65sxu_1581143669_46718192554_c5f406dce3_k.jpg'),
        img('aobaf1yw2mrowt8a50rvhq5jhavm_1582217692_galle_lighthouse.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · To Bentota: Madu Ganga and the turtles`,
      'Breakfast and a transfer down to the south west coast',
      'A boat safari through the Madu Ganga mangroves',
      'The Kosgoda turtle hatchery',
      'Check in at Bentota and the evening on the beach',
      `${DAY_MARK}Day 5 · Mirissa and Galle`,
      'Breakfast and an excursion along the southern coast',
      'Mirissa beach and Coconut Tree Hill',
      'The Galle Dutch fort: ramparts, lighthouse and old church',
      'Back to Bentota for dinner'
    ],
    accommodation: {
      name: 'Haus Berlin, Bentota',
      description: '2 nights · Breakfast and dinner · Deluxe room · 3★ · Deluxe class boutique stay a short walk from Bentota beach',
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
        name: 'Madu Ganga boat safari and Kosgoda turtle hatchery',
        day: 4,
        optional: false,
        image: img('4nhzua0qjhxq269scn2196f6trxx_1557754429_jumbo.jpg'),
        description: 'A boat through the mangrove islands of the Madu Ganga, then the turtle hatchery at Kosgoda.'
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
      description: 'Two nights on the beach with the Madu Ganga boat and the turtle hatchery on arrival, and a day trip to Mirissa and Galle.',
      image: img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Colombo',
    dayLabel: 'Day 6 to 7',
    images: [
      img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
      img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg')
    ],
    dayImages: {
      6: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      7: [
        img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
        img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
        img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
        img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg')
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
        day: 6,
        optional: false,
        image: img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A final night in the Fort district with a full day of the capital.',
      image: img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg')
    }
  }
];

const detail = {
  slug: 'sri-lankan-delight-sigiriya-kandy-and-bentota',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sri Lankan Delight: Sigiriya, Kandy and Bentota',
  alt: 'Sigiriya rock reflected in the lake at dawn',
  days: '7 days / 6 nights',
  stations: '4 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Best seller',
  tags: ['Best seller', 'Culture', 'Beach'],
  price: 42750,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Sigiriya', 'Kandy', 'Bentota', 'Colombo'],
  stats: { days: 7, cities: 4, hotels: 4, activities: 8, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['8 experiences', 'Activities'],
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
  short: 'Seven days in the classic order: a night under Sigiriya rock, the Dambulla caves, two nights in Kandy with the dance show, two on the beach at Bentota with the Madu Ganga and Galle, and a final night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights in standard and deluxe class hotels with breakfast and lunch or dinner daily (breakfast only in Sigiriya); private airport transfers and all road travel in an air conditioned car with chauffeur guide; the Pinnawala elephant sanctuary visit; the Sigiriya excursion and the Dambulla cave temple; a spice garden visit; Kandy lake drive and Kandyan dance show; a full day Kandy city tour; the Madu Ganga boat safari and Kosgoda turtle hatchery; a day excursion to Mirissa and Galle; full day Colombo sightseeing.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Sigiriya (D)', text: 'Arrival at Bandaranaike International and private transfer inland\nA stop at the Pinnawala elephant sanctuary on the way\nCheck in by the lake with the rock on the horizon\nDinner at the hotel', hotel: 'Lavendish Country Resort, Sigiriya', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A stop at the Pinnawala elephant sanctuary on the way', 'Check in by the lake with the rock on the horizon'] },
    { title: 'Day 2: Sigiriya, Dambulla and on to Kandy (B, D)', text: 'An early climb of the Sigiriya rock fortress\nBreakfast, then the Dambulla cave temple\nA spice garden at Matale on the way south\nCheck in at Kandy, a lake drive and the dance show', hotel: 'Hotel Devon Kandy', highlights: ['An early climb of the Sigiriya rock fortress', 'Breakfast, then the Dambulla cave temple', 'A spice garden at Matale on the way south'] },
    { title: 'Day 3: A full day in Kandy (B, D)', text: 'Breakfast, then the Temple of the Sacred Tooth Relic\nThe Peradeniya Royal Botanical Gardens\nThe hilltop Buddha at Bahiravokanda and the gem museum\nDinner at the hotel', hotel: 'Hotel Devon Kandy', highlights: ['Breakfast, then the Temple of the Sacred Tooth Relic', 'The Peradeniya Royal Botanical Gardens', 'The hilltop Buddha at Bahiravokanda and the gem museum'] },
    { title: 'Day 4: To Bentota: Madu Ganga and the turtles (B, D)', text: 'Breakfast and a transfer down to the south west coast\nA boat safari through the Madu Ganga mangroves\nThe Kosgoda turtle hatchery\nCheck in at Bentota and the evening on the beach', hotel: 'Haus Berlin, Bentota', highlights: ['Breakfast and a transfer down to the south west coast', 'A boat safari through the Madu Ganga mangroves', 'The Kosgoda turtle hatchery'] },
    { title: 'Day 5: Mirissa and Galle (B, D)', text: 'Breakfast and an excursion along the southern coast\nMirissa beach and Coconut Tree Hill\nThe Galle Dutch fort: ramparts, lighthouse and old church\nBack to Bentota for dinner', hotel: 'Haus Berlin, Bentota', highlights: ['Breakfast and an excursion along the southern coast', 'Mirissa beach and Coconut Tree Hill', 'The Galle Dutch fort: ramparts, lighthouse and old church'] },
    { title: 'Day 6: Colombo city tour (B, D)', text: 'Breakfast and a transfer down the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nDinner and your last night at the hotel', hotel: 'Grand Oriental Hotel Colombo', highlights: ['Breakfast and a transfer down the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
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

export const sriLankanDelightSigiriyaKandyBentotaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sriLankanDelightSigiriyaKandyBentotaProduct = {
  slug: detail.slug,
  places: ['Sigiriya', 'Kandy', 'Bentota', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 8,
  transfers: 9,
  meals: 12,
  price: detail.price,
  images: cardImages
};
