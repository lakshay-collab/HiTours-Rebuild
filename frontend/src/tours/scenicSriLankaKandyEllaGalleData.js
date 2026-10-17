// Scenic Sri Lanka: Kandy, the Ella Train and Galle. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
  img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
  img('6w51ui6a9g0e0o0hrf84kt4s1a7x_shutterstock_2335215109.jpg'),
  img('ezfefzutat9apyphovc3n44xm6m6_shutterstock_599364767.jpg'),
  img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
  img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
  img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
  img('5a6ucnntgvnagzecv0b84fenugvj_shutterstock_1068884744.jpg'),
  img('ot60q4sjpat01biupyf5rllx4f5a_shutterstock_2349314167.jpg'),
  img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('6w51ui6a9g0e0o0hrf84kt4s1a7x_shutterstock_2335215109.jpg'),
  img('ezfefzutat9apyphovc3n44xm6m6_shutterstock_599364767.jpg'),
  img('ot60q4sjpat01biupyf5rllx4f5a_shutterstock_2349314167.jpg'),
  img('sjglsq8u3egylgjvn97pejog8pj8_shutterstock_1169999389.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Colombo',
    dayLabel: 'Day 1',
    images: [
      img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
      img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
      img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
      img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg')
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
      'Check in and the rest of the day at leisure',
      'Optional: sunset on Galle Face Green'
    ],
    accommodation: {
      name: 'Fairway Colombo, Colombo',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Modern city hotel in the Colombo Fort district',
      images: [
        img('6d8gdkmt2d0v8l2hh4thqt0yrarl_119284699.jpg'),
        img('dkb5u7131wos84tkyotkx01jfad4_89778712.jpg'),
        img('11euyuog00hnu6gy7e86c6m0dsn8_78004727.jpg'),
        img('1wgn250xda954y7gacy42iqg5dpl_119278479.jpg'),
        img('tp8qvcg224iw67v1lmmh8mm90g23_89776696.jpg'),
        img('6dk2frqdaoabs0br93qeiw3004k8_78002733.jpg'),
        img('h89xvpa8a62lptwao8gaipvg618c_89782367.jpg'),
        img('ugcc1f5v4weyt14h1ynpd5d4pstr_207308605.jpg'),
        img('sxwxo49aty53ndkvqs76c3yy6rb5_207300381.jpg'),
        img('9nm14d0wsjmv65qzptl3lblxtq84_80964190.jpg'),
        img('atehk6th4jlwmlsngomksq7qc6z9_207312084.jpg'),
        img('19sdncqwtds03oxpxfx1stb5e5s9_89779246.jpg'),
        img('ljn6fj4sf9nb47chfsz6hvibjuaf_118516262.jpg'),
        img('lm0y34j8uqu554mpne2f7ut759yn_119519211.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Colombo',
      description: 'A first night in the Fort district to shake off the flight.',
      image: img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kandy',
    dayLabel: 'Day 2 to 3',
    images: [
      img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
      img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
      img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
      img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg')
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
        img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
        img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Elephants and the road to Kandy`,
      'Breakfast, then a transfer inland via Pinnawala',
      'Bath time for the herd in the Maha Oya river',
      'Check in at your hilltop hotel in Kandy',
      'A private lake drive and the Kandyan dance show',
      `${DAY_MARK}Day 3 · A day at Sigiriya`,
      'Breakfast, then the road north through the Cultural Triangle',
      'The water gardens and the climb past the mirror wall',
      'Frescoes of the cloud maidens and the lion paw terrace',
      'Summit ruins and views across the dry zone jungle',
      'Back to Kandy for dinner at the hotel'
    ],
    accommodation: {
      name: 'Hotel Topaz, Kandy',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Hilltop hotel with a pool looking down on Kandy',
      images: [
        img('mbpjmsh3aq3heonxxlx8ydov7xgw_156821491.jpg'),
        img('o2q9y59eydcj6gk7a9jvrj6kw8n8_156821508.jpg'),
        img('ij26ewlj4v6jtrp9ghls47w8i4gv_tourmaline-presidential-suite-ga.jpg'),
        img('m3ryz4pkodldmyrfklab9pktn168_green-floor-rooms-gallery-large.jpg'),
        img('tc7iiyfhn6zou9lvnzlsjkmifze0_151327149.jpg'),
        img('aht7qju8gmwqyjmyjlw13u2bndq6_hotel-topaz.jpg'),
        img('rm69iq6vgzn90nrzks9f0i4i60rm_94657914.jpg'),
        img('9jiou2bgvb3rhb8fu1owzt0e850z_211310950.jpg'),
        img('nrwtzsqopk64zb0xbtci43si35a2_156832471.jpg'),
        img('xhmzh967bizskdkbw9m992q1xqw8_suite-room%20(1).jpg'),
        img('q0z2dadq1xehz61wmgp8skjmwykg_94643845.jpg')
      ]
    },
    activities: [
      {
        name: 'Private visit to Pinnawala',
        day: 2,
        optional: false,
        image: img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        description: 'A stop on the way up from the airport to watch the resident herd bathe in the Maha Oya river and feed at the sanctuary.'
      },
      {
        name: 'Private lake drive and Kandyan dance show',
        day: 2,
        optional: false,
        image: img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        description: 'An evening circuit of the lake followed by a traditional performance of drummers, masked dancers and the closing fire walk.'
      },
      {
        name: 'Private excursion to Sigiriya',
        day: 3,
        optional: false,
        image: img('zddej06lbz5sx2o1d0hx0bg0bfhd_1582551005_Colombo_1.png'),
        description: 'A full day out to the fifth century rock citadel: the water gardens, the mirror wall, the frescoes and the summit palace ruins.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'Two nights above Kandy with the elephants on the way, a private dance show and a private day out to Sigiriya.',
      image: img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Ella',
    dayLabel: 'Day 4',
    images: [
      img('s62wq89cqt0wq5tc8nqh6ek2vmwd_shutterstock_1084348016.jpg'),
      img('qt39padrr5ywwsekasuhvvyc16uk_shutterstock_573507811.jpg'),
      img('6w51ui6a9g0e0o0hrf84kt4s1a7x_shutterstock_2335215109.jpg'),
      img('rlnt7wwjqxlik4vgth13o4lznk2u_shutterstock_1019478988.jpg')
    ],
    dayImages: {
      4: [
        img('pnwyqj46lehyjtddqd57fy2x9a4o_Downpic.cc-image259311576.jpg'),
        img('2savslqttnv97qfpf1tj844w79h8_1562140378_shutterstock_742121953.jpg'),
        img('igt0ab0o1cmy2faenxk3yh98o9sm_1562141217_shutterstock_618561041.jpg'),
        img('kdyymv2ksn0mx6p5a90swig715gg_527735994Ravana_Cave.png')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · The hill train to Ella`,
      'Breakfast and a transfer to Kandy railway station',
      'The slow train through the tea country to Ella',
      'The Nine Arches Bridge and the Bluefield tea factory',
      'Ravana Falls and the caves before check in'
    ],
    accommodation: {
      name: 'Oak Ray Ella Gap Hotel, Ella',
      description: '1 night · Breakfast and dinner · Standard room · 4★ · Four star hotel on the edge of the Ella gap',
      images: [
        img('nvthemvx8d4i00y6m71no221hdz1_6832e634_z.jpg'),
        img('n5dbjcy30f7q7lvyr46lyh0x27fk_2ea54ed9_z.jpg'),
        img('00zpsz28fcpckri5vsif60yozeug_156044680.jpg'),
        img('ghve5a4104cy995nzioshlntkobe_156039777.jpg'),
        img('pp2dp3ry8wdvv8lora98qnffwqee_a4f8e375_z.jpg'),
        img('cn5uvimfib7sdf7gre5zlftrcjth_156044693.jpg'),
        img('wufwq98l3afvmo426as4tqzx3s9n_156039784%20(1).jpg'),
        img('u4s9nzn1rqg5rzv2yk25stx7h8qn_156042331.jpg'),
        img('j9lls6vf44atpvplyfsh4gsr9td9_156044686.jpg'),
        img('gl7inb1umw0nk7oi4g2elx2glqp0_156044687.jpg'),
        img('jek9mwpa3j21veykhiuo6l68scvz_c983dd0f_z.jpg'),
        img('kim5q1zlmv2ngexln42662vss3g0_57f1e345_z.jpg')
      ]
    },
    activities: [
      {
        name: 'Ella sightseeing tour',
        day: 4,
        optional: false,
        image: img('pnwyqj46lehyjtddqd57fy2x9a4o_Downpic.cc-image259311576.jpg'),
        description: 'The Nine Arches Bridge, Ravana Falls and the Ravana caves, with a stop at the Bluefield tea factory on the way in.'
      }
    ],
    program: {
      name: 'Ella',
      description: 'The famous hill train through the tea country to Ella, then the bridge, the falls and the caves.',
      image: img('s62wq89cqt0wq5tc8nqh6ek2vmwd_shutterstock_1084348016.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Galle',
    dayLabel: 'Day 5',
    images: [
      img('ot60q4sjpat01biupyf5rllx4f5a_shutterstock_2349314167.jpg'),
      img('sjglsq8u3egylgjvn97pejog8pj8_shutterstock_1169999389.jpg'),
      img('1zuwsa7onng9hg65jq7taek8xdgw_shutterstock_621458846.jpg'),
      img('ezfefzutat9apyphovc3n44xm6m6_shutterstock_599364767.jpg')
    ],
    dayImages: {
      5: [
        img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        img('erzts14ece8u6pbe6qhecfuhqp1a_18436933176_1d582f87a4_o.jpg'),
        img('x9q4lqbckwpj24yjofrltyk65sxu_1581143669_46718192554_c5f406dce3_k.jpg'),
        img('aobaf1yw2mrowt8a50rvhq5jhavm_1582217692_galle_lighthouse.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Down to the coast: Mirissa and Galle`,
      'Breakfast and a transfer south from the hills',
      'Mirissa beach and the palms of Coconut Tree Hill',
      'The Galle Dutch fort: ramparts, lighthouse and old church',
      'Check in at your villa near the fort'
    ],
    accommodation: {
      name: 'Villa Peacock, Galle',
      description: '1 night · Breakfast · Villa room · 3★ · Small villa stay close to the Galle fort',
      images: [
        img('3250czhi9g40xe9z83mj6sseladn_269710704.jpg'),
        img('nujdt2vzax7i9papsoi15eyv1gqc_269710732.jpg'),
        img('zpnaqi4qjgm85e18hu9ilh1tq7qt_269710825.jpg'),
        img('inxldi21s8o0mpbg0824hprxbnaz_269710794.jpg'),
        img('91fx2jae6nwcyeii5lvyfnpeehim_242324227.jpg'),
        img('l2vdr5racaxu9xsfvs1ea4v7i1re_269710727.jpg'),
        img('eblx9klrgtz0hwev4plid1xjp7dh_269710853.jpg'),
        img('6s9j5899fdbrz2j2w6i8biy3rr13_269710678.jpg'),
        img('23y7ngc404gunts9yxul5pfkzhrj_269710656.jpg')
      ]
    },
    activities: [
      {
        name: 'Galle and Mirissa sightseeing',
        day: 5,
        optional: false,
        image: img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        description: 'South along the coast to the Dutch fort at Galle with its ramparts and lighthouse, then on to Mirissa beach and Coconut Tree Hill.'
      }
    ],
    program: {
      name: 'Galle',
      description: 'Down from the hills to the south coast for Mirissa beach and a night inside the Galle fort.',
      image: img('ot60q4sjpat01biupyf5rllx4f5a_shutterstock_2349314167.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Colombo',
    dayLabel: 'Day 6 to 7',
    images: [
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
      img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
      img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg')
    ],
    dayImages: {
      6: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      7: [
        img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
        img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
        img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
        img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg')
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
      name: 'Fairway Colombo, Colombo',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Modern city hotel in the Colombo Fort district',
      images: [
        img('6d8gdkmt2d0v8l2hh4thqt0yrarl_119284699.jpg'),
        img('dkb5u7131wos84tkyotkx01jfad4_89778712.jpg'),
        img('11euyuog00hnu6gy7e86c6m0dsn8_78004727.jpg'),
        img('1wgn250xda954y7gacy42iqg5dpl_119278479.jpg'),
        img('tp8qvcg224iw67v1lmmh8mm90g23_89776696.jpg'),
        img('6dk2frqdaoabs0br93qeiw3004k8_78002733.jpg'),
        img('h89xvpa8a62lptwao8gaipvg618c_89782367.jpg'),
        img('ugcc1f5v4weyt14h1ynpd5d4pstr_207308605.jpg'),
        img('sxwxo49aty53ndkvqs76c3yy6rb5_207300381.jpg'),
        img('9nm14d0wsjmv65qzptl3lblxtq84_80964190.jpg'),
        img('atehk6th4jlwmlsngomksq7qc6z9_207312084.jpg'),
        img('19sdncqwtds03oxpxfx1stb5e5s9_89779246.jpg'),
        img('ljn6fj4sf9nb47chfsz6hvibjuaf_118516262.jpg'),
        img('lm0y34j8uqu554mpne2f7ut759yn_119519211.jpg')
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
      description: 'Back to the capital for a full day of its temples, colonial quarter and markets.',
      image: img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
    }
  }
];

const detail = {
  slug: 'scenic-sri-lanka-kandy-ella-train-and-galle',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Scenic Sri Lanka: Kandy, the Ella Train and Galle',
  alt: 'The blue train crossing the Nine Arches Bridge near Ella',
  days: '7 days / 6 nights',
  stations: '5 stops',
  transport: 'Private air conditioned car with chauffeur guide; the scenic hill train from Kandy to Ella',
  tag: 'Nature',
  tags: ['Nature', 'Culture', 'Beach'],
  price: 42275,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Colombo', 'Kandy', 'Ella', 'Galle', 'Colombo'],
  stats: { days: 7, cities: 4, hotels: 5, activities: 6, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
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
  short: 'Seven days with the best train ride in Asia in the middle: a first night in Colombo, two in Kandy with Sigiriya and the dance show, the hill train to Ella and its bridge, a night at Galle after Mirissa beach, and a final night in the capital.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights in standard and deluxe class hotels with breakfast and lunch or dinner daily (breakfast only in Galle); private airport transfers and all road travel in an air conditioned car with chauffeur guide; the Kandy to Ella train tickets; a private Pinnawala visit; a private lake drive and Kandyan dance show; a private excursion to Sigiriya; the Ella sightseeing tour; the Mirissa and Galle excursion; full day Colombo sightseeing.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo (D)', text: 'Arrival at Bandaranaike International and private transfer to your hotel\nCheck in and the rest of the day at leisure\nOptional: sunset on Galle Face Green', hotel: 'Fairway Colombo', highlights: ['Arrival at Bandaranaike International and private transfer to your hotel', 'Check in and the rest of the day at leisure', 'Optional: sunset on Galle Face Green'] },
    { title: 'Day 2: Elephants and the road to Kandy (B, D)', text: 'Breakfast, then a transfer inland via Pinnawala\nBath time for the herd in the Maha Oya river\nCheck in at your hilltop hotel in Kandy\nA private lake drive and the Kandyan dance show', hotel: 'Hotel Topaz, Kandy', highlights: ['Breakfast, then a transfer inland via Pinnawala', 'Bath time for the herd in the Maha Oya river', 'Check in at your hilltop hotel in Kandy'] },
    { title: 'Day 3: A day at Sigiriya (B, D)', text: 'Breakfast, then the road north through the Cultural Triangle\nThe water gardens and the climb past the mirror wall\nFrescoes of the cloud maidens and the lion paw terrace\nSummit ruins and views across the dry zone jungle\nBack to Kandy for dinner at the hotel', hotel: 'Hotel Topaz, Kandy', highlights: ['Breakfast, then the road north through the Cultural Triangle', 'The water gardens and the climb past the mirror wall', 'Frescoes of the cloud maidens and the lion paw terrace'] },
    { title: 'Day 4: The hill train to Ella (B, D)', text: 'Breakfast and a transfer to Kandy railway station\nThe slow train through the tea country to Ella\nThe Nine Arches Bridge and the Bluefield tea factory\nRavana Falls and the caves before check in', hotel: 'Oak Ray Ella Gap Hotel', highlights: ['Breakfast and a transfer to Kandy railway station', 'The slow train through the tea country to Ella', 'The Nine Arches Bridge and the Bluefield tea factory'] },
    { title: 'Day 5: Down to the coast: Mirissa and Galle (B, D)', text: 'Breakfast and a transfer south from the hills\nMirissa beach and the palms of Coconut Tree Hill\nThe Galle Dutch fort: ramparts, lighthouse and old church\nCheck in at your villa near the fort', hotel: 'Villa Peacock', highlights: ['Breakfast and a transfer south from the hills', 'Mirissa beach and the palms of Coconut Tree Hill', 'The Galle Dutch fort: ramparts, lighthouse and old church'] },
    { title: 'Day 6: Colombo city tour (B, D)', text: 'Breakfast and a transfer down the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nDinner and your last night at the hotel', hotel: 'Fairway Colombo', highlights: ['Breakfast and a transfer down the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
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

export const scenicSriLankaKandyEllaGalleBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const scenicSriLankaKandyEllaGalleProduct = {
  slug: detail.slug,
  places: ['Colombo', 'Kandy', 'Ella', 'Galle'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 5,
  hotels: 5,
  cities: 4,
  activities: 6,
  transfers: 10,
  meals: 12,
  price: detail.price,
  images: cardImages
};
