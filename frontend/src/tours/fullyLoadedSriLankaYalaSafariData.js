// Fully Loaded Sri Lanka: Kandy, Yala Safari and Bentota. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
  img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
  img('sr7y9yuej43mtw9he8szpq6j8f2f_shutterstock_464982536.jpg'),
  img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg'),
  img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
  img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
  img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
  img('e7329r7y7rxaon6tvrx1xinabucz_shutterstock_1012268899.jpg'),
  img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
  img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
  img('sr7y9yuej43mtw9he8szpq6j8f2f_shutterstock_464982536.jpg'),
  img('v7gx2asuh5hqn57b2qghxihf5c87_shutterstock_1427710394.jpg'),
  img('a9j1cn3b7mmh4opuk4w0luyaukhj_shutterstock_562153555.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Colombo',
    dayLabel: 'Day 1',
    images: [
      img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
      img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
      img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
      img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg')
    ],
    dayImages: {
      1: [
        img('um8mzu64d4hrt5lgx9es0e2wop7w_44552046890_f2e90371bd_o.jpg'),
        img('l48shblqxv366nemzrfbatxoijk0_shutterstock_1439300684.jpg'),
        img('2xy4fsheig14o6hfuh9gmrrz9ddi_1581087170_36129888633_ce3fb0410e_b.jpg'),
        img('q16lt8r92ltfty0q5jna332cg2e7_1377069_561333343921567_1041159370_n.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo`,
      'Arrival at Bandaranaike International and private transfer to your hotel',
      'Check in on the Mount Lavinia beachfront',
      'The rest of the day at leisure',
      'Optional: sunset drinks on Galle Face Green'
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

    ],
    program: {
      name: 'Colombo',
      description: 'A gentle first night on the Mount Lavinia beachfront to shake off the flight.',
      image: img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kandy',
    dayLabel: 'Day 2 to 3',
    images: [
      img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
      img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
      img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
      img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg')
    ],
    dayImages: {
      2: [
        img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        img('2qdrxrko072bcco7ufzgu2npr0c7_1581078051_17185271045_4b7e32f3fc_b_(1).jpg')
      ],
      3: [
        img('zddej06lbz5sx2o1d0hx0bg0bfhd_1582551005_Colombo_1.png'),
        img('b14m75op1m07swbrru2fqbc31lfh_7006860454_cec45734cb_o.jpg'),
        img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
        img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Elephants and the road to Kandy`,
      'Breakfast, then a transfer inland via Pinnawala',
      'Bath time for the herd in the Maha Oya river',
      'Check in at your Kandy hotel',
      'An evening lake drive and the Kandyan dance show',
      `${DAY_MARK}Day 3 · A day at Sigiriya`,
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
        day: 2,
        optional: false,
        image: img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        description: 'A stop on the way up from the airport to watch the resident herd bathe in the Maha Oya river and feed at the sanctuary.'
      },
      {
        name: 'Kandy lake drive and Kandyan dance show',
        day: 2,
        optional: false,
        image: img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        description: 'An evening circuit of the lake followed by a traditional performance of drummers, masked dancers and the closing fire walk.'
      },
      {
        name: 'Excursion to Sigiriya rock fortress',
        day: 3,
        optional: false,
        image: img('zddej06lbz5sx2o1d0hx0bg0bfhd_1582551005_Colombo_1.png'),
        description: 'A full day out to the fifth century rock citadel: the water gardens, the mirror wall, the frescoes and the summit palace ruins.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'Two nights in the hill capital: elephants on the way, the dance show, a full day at Sigiriya and a private half day of the city.',
      image: img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Yala',
    dayLabel: 'Day 4',
    images: [
      img('v7gx2asuh5hqn57b2qghxihf5c87_shutterstock_1427710394.jpg'),
      img('a9j1cn3b7mmh4opuk4w0luyaukhj_shutterstock_562153555.jpg'),
      img('sr7y9yuej43mtw9he8szpq6j8f2f_shutterstock_464982536.jpg'),
      img('y6ifenge0ejrzoq7k82198if3ky8_shutterstock_726294346.jpg')
    ],
    dayImages: {
      4: [
        img('83nbzteqgxputqqy959240s41mz1_shutterstock_771297769.jpg'),
        img('lwpeikpgx4vdu6dk38px2r3ugcv3_16592880909_c7e7d0a676_o.jpg'),
        img('273z0ew2ziyinmy62ccpeay5ggwo_nepal-royal-botanical-gardens.jpg'),
        img('q5mg4s7atcnsscxcoxgfnysmzyiy_download.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Kandy sights and the long road to Yala`,
      'Breakfast, then a private half day of the Tooth Relic temple and Peradeniya',
      'A transfer across the hills and down to the dry zone',
      'Check in at your lodge on the park boundary',
      'An early night before the dawn safari'
    ],
    accommodation: {
      name: 'Arana Yala, Yala',
      description: '1 night · Breakfast and dinner · Deluxe room · 3★ · Deluxe class lodge on the edge of Yala National Park',
      images: [
        img('1g7oq6sr1wx3hs9wh2sp2559lxdj_sunsetting-over-arana.jpg'),
        img('piu22mtwyvh6z0ifodn7c054ljkr_download%20(9).jpg'),
        img('wwjgtzjjc8v7r5obhpg3t5zqcjgt_aerial-view-of-pool.jpg'),
        img('744jiowk7e5y87ve06o0z55i7pvf_download%20(2).jpg'),
        img('3b37gqgycxp3zamyc6s52uau96td_download%20(3).jpg'),
        img('e9zgw60m8sdexyvhlna0l6x8a6xb_download%20(1).jpg'),
        img('2aihwjctpgr2evgj1tsar59e96ux_download%20(4).jpg'),
        img('s8og72uzlbyl20gukdj2mfqe2aj8_deluxe-twin-room.jpg'),
        img('ug2n1xaeug70ws5oqnrbzosf7u3r_download.jpg')
      ]
    },
    activities: [
      {
        name: 'Half day Kandy sightseeing',
        day: 4,
        optional: false,
        image: img('83nbzteqgxputqqy959240s41mz1_shutterstock_771297769.jpg'),
        description: 'The Temple of the Sacred Tooth Relic, the giant Bahiravokanda Buddha above the town and the Royal Botanical Gardens at Peradeniya.'
      },
      {
        name: 'Jeep safari in Yala National Park',
        day: 5,
        optional: false,
        image: img('f51qwcao4wdfqcijwzpt101o659g_shutterstock_1524292985.jpg'),
        description: 'A 4x4 safari through the scrub jungle and lagoons of block one, home to leopards, sloth bears, elephants and crocodiles.'
      }
    ],
    program: {
      name: 'Yala',
      description: 'Across the hills to the dry south east for a night on the edge of the park and a dawn jeep safari.',
      image: img('v7gx2asuh5hqn57b2qghxihf5c87_shutterstock_1427710394.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Bentota',
    dayLabel: 'Day 5 to 6',
    images: [
      img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
      img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
      img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg'),
      img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg')
    ],
    dayImages: {
      5: [
        img('f51qwcao4wdfqcijwzpt101o659g_shutterstock_1524292985.jpg'),
        img('wzzlrjhl9teg5ftvx02j7ifkrlz1_8658046094_ca7107d18a_o.jpg'),
        img('2g53t00i6jttr6n7je1fq6jzqc9a_Frontyard_.jpg'),
        img('e62oezf8kqr0u5yo78hge033bocn_Galapata%20Vihara.jpg')
      ],
      6: [
        img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        img('erzts14ece8u6pbe6qhecfuhqp1a_18436933176_1d582f87a4_o.jpg'),
        img('x9q4lqbckwpj24yjofrltyk65sxu_1581143669_46718192554_c5f406dce3_k.jpg'),
        img('aobaf1yw2mrowt8a50rvhq5jhavm_1582217692_galle_lighthouse.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Dawn safari and on to Bentota`,
      'A pre breakfast jeep safari through Yala block one',
      'Leopards, elephants, crocodiles and peacocks at the waterholes',
      'Breakfast, then a transfer west along the coast to Bentota',
      'Check in and the evening at leisure on the beach',
      `${DAY_MARK}Day 6 · Mirissa and Galle`,
      'Breakfast and a private excursion along the southern coast',
      'Mirissa beach and the palms of Coconut Tree Hill',
      'The Galle Dutch fort: ramparts, lighthouse and old church',
      'Back to Bentota for dinner'
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
        name: 'Private excursion to Mirissa and Galle',
        day: 6,
        optional: false,
        image: img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        description: 'Along the southern coast to Mirissa beach and Coconut Tree Hill, then the ramparts and lighthouse of the Galle Dutch fort.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Two nights on the beach with a private excursion to Mirissa and the Galle fort.',
      image: img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Colombo',
    dayLabel: 'Day 7 to 8',
    images: [
      img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
      img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg')
    ],
    dayImages: {
      7: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      8: [
        img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
        img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
        img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
        img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg')
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
        day: 7,
        optional: false,
        image: img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'Back to the capital for a full day of its temples, colonial quarter and markets.',
      image: img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg')
    }
  }
];

const detail = {
  slug: 'fully-loaded-sri-lanka-kandy-yala-safari-and-bentota',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Fully Loaded Sri Lanka: Kandy, Yala Safari and Bentota',
  alt: 'A wild elephant crossing the track in Yala National Park',
  days: '8 days / 7 nights',
  stations: '5 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide; 4x4 jeep for the Yala safari',
  tag: 'Wildlife',
  tags: ['Wildlife', 'Culture', 'Beach'],
  price: 48925,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Colombo', 'Kandy', 'Yala', 'Bentota', 'Colombo'],
  stats: { days: 8, cities: 4, hotels: 5, activities: 7, transfers: 11 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['11 transfers', 'Transport'],
    ['14 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aditya',
    image: '/experts/aditya.webp',
    role: 'Sri Lanka expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Yala at dawn is the single best morning you can have in Sri Lanka. Leopards are shy, but the elephants and peacocks never disappoint.',
    quoteMore: 'Wear neutral colours for the safari and keep the camera ready at the waterholes. The first hour after the gates open is when the cats move.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days that do it all: a soft landing in Colombo, two nights in Kandy with Sigiriya and the dance show, a night at Yala with a dawn jeep safari, two on the beach at Bentota with Mirissa and Galle, and a final night in the capital.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights in deluxe class hotels with breakfast and dinner daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; the Pinnawala elephant sanctuary visit; Kandy lake drive and Kandyan dance show; a full day excursion to Sigiriya; private half day Kandy sightseeing; a jeep safari in Yala National Park with park ticket; a private excursion to Mirissa and Galle; full day Colombo sightseeing; visa assistance.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo (D)', text: 'Arrival at Bandaranaike International and private transfer to your hotel\nCheck in on the Mount Lavinia beachfront\nThe rest of the day at leisure\nOptional: sunset drinks on Galle Face Green', hotel: 'Berjaya Hotel Colombo', highlights: ['Arrival at Bandaranaike International and private transfer to your hotel', 'Check in on the Mount Lavinia beachfront', 'The rest of the day at leisure'] },
    { title: 'Day 2: Elephants and the road to Kandy (B, D)', text: 'Breakfast, then a transfer inland via Pinnawala\nBath time for the herd in the Maha Oya river\nCheck in at your Kandy hotel\nAn evening lake drive and the Kandyan dance show', hotel: 'Hotel Devon Kandy', highlights: ['Breakfast, then a transfer inland via Pinnawala', 'Bath time for the herd in the Maha Oya river', 'Check in at your Kandy hotel'] },
    { title: 'Day 3: A day at Sigiriya (B, D)', text: 'Breakfast, then the road north through the Cultural Triangle\nThe water gardens and the climb past the mirror wall\nFrescoes of the cloud maidens and the lion paw terrace\nSummit ruins and views across the dry zone jungle\nBack to Kandy for dinner at the hotel', hotel: 'Hotel Devon Kandy', highlights: ['Breakfast, then the road north through the Cultural Triangle', 'The water gardens and the climb past the mirror wall', 'Frescoes of the cloud maidens and the lion paw terrace'] },
    { title: 'Day 4: Kandy sights and the long road to Yala (B, D)', text: 'Breakfast, then a private half day of the Tooth Relic temple and Peradeniya\nA transfer across the hills and down to the dry zone\nCheck in at your lodge on the park boundary\nAn early night before the dawn safari', hotel: 'Arana Yala', highlights: ['Breakfast, then a private half day of the Tooth Relic temple and Peradeniya', 'A transfer across the hills and down to the dry zone', 'Check in at your lodge on the park boundary'] },
    { title: 'Day 5: Dawn safari and on to Bentota (B, D)', text: 'A pre breakfast jeep safari through Yala block one\nLeopards, elephants, crocodiles and peacocks at the waterholes\nBreakfast, then a transfer west along the coast to Bentota\nCheck in and the evening at leisure on the beach', hotel: 'Hibiscus Beach Hotel, Bentota', highlights: ['A pre breakfast jeep safari through Yala block one', 'Leopards, elephants, crocodiles and peacocks at the waterholes', 'Breakfast, then a transfer west along the coast to Bentota'] },
    { title: 'Day 6: Mirissa and Galle (B, D)', text: 'Breakfast and a private excursion along the southern coast\nMirissa beach and the palms of Coconut Tree Hill\nThe Galle Dutch fort: ramparts, lighthouse and old church\nBack to Bentota for dinner', hotel: 'Hibiscus Beach Hotel, Bentota', highlights: ['Breakfast and a private excursion along the southern coast', 'Mirissa beach and the palms of Coconut Tree Hill', 'The Galle Dutch fort: ramparts, lighthouse and old church'] },
    { title: 'Day 7: Colombo city tour (B, D)', text: 'Breakfast and a transfer up the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nDinner and your last night at the hotel', hotel: 'Berjaya Hotel Colombo', highlights: ['Breakfast and a transfer up the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
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

export const fullyLoadedSriLankaYalaSafariBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const fullyLoadedSriLankaYalaSafariProduct = {
  slug: detail.slug,
  places: ['Colombo', 'Kandy', 'Yala', 'Bentota'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 5,
  hotels: 5,
  cities: 4,
  activities: 7,
  transfers: 11,
  meals: 14,
  price: detail.price,
  images: cardImages
};
