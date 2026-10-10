// Finland Escapade: Helsinki, Rovaniemi and Inari. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('azxxakr5ghj7fv4dxz2ymzmpax2c_shutterstock_154741178.jpg'),
  img('fxs97sxamwzm6y1ipekq4c7c20ui_shutterstock_1199303629.jpg'),
  img('cfsm23nygbz30olt0d1ytsflt9nn_shutterstock_521044627.jpg'),
  img('jcox76rh9q7glfppf480l35kjrze_shutterstock_1917056663.jpg'),
  img('lxv5apgpvtsl1zr9gczzmqsvezk1_shutterstock_160053437.jpg'),
  img('5nnpt2ljyhh5kg14l2mnro9th552_shutterstock_2165338049.jpg'),
  img('gvwbstqq49xyb2wszbav4laytufg_shutterstock_1227410446.jpg'),
  img('2vs256itkhxaj4m2v0eq74nxvy2v_shutterstock_1492035677.jpg'),
  img('pmt0goyihh11l8ho8tmpl691fkmh_shutterstock_1585708066.jpg'),
  img('nbrig5gwfekyjyz810x15cnjam3a_shutterstock_611589272.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('azxxakr5ghj7fv4dxz2ymzmpax2c_shutterstock_154741178.jpg'),
  img('fxs97sxamwzm6y1ipekq4c7c20ui_shutterstock_1199303629.jpg'),
  img('cfsm23nygbz30olt0d1ytsflt9nn_shutterstock_521044627.jpg'),
  img('jcox76rh9q7glfppf480l35kjrze_shutterstock_1917056663.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Helsinki',
    dayLabel: 'Day 1',
    images: [
      img('azxxakr5ghj7fv4dxz2ymzmpax2c_shutterstock_154741178.jpg'),
      img('3bw5nf3bs9y3gnd0if1vhwgnrjue_shutterstock_339130604.jpg'),
      img('2fuzn1y3ogze2rr00xg8l043omr3_shutterstock_762341200.jpg'),
      img('s1n7bt2ok77sdiuloumkrnij8rbl_shutterstock_787280338.jpg')
    ],
    dayImages: {
      1: [
        img('4bougt34h2v4fipojvqpp6kcx7j3_1619092509_shutterstock_387749995.jpg'),
        img('b2f947y20e53kqxoifvw89auqodt_1619092655_shutterstock_86473201.jpg'),
        img('26gyo9t6vhuk9wsrdgcytdq49w4c_1619093855_shutterstock_1529518100.jpg'),
        img('azxxakr5ghj7fv4dxz2ymzmpax2c_shutterstock_154741178.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Helsinki`,
      'Arrival at the airport and private transfer to your hotel',
      'Check in and the rest of the day at leisure'
    ],
    accommodation: {
      name: 'Hotel Arthur, Helsinki',
      description: '1 night · Breakfast · Standard room · 3★ · Hotel in the city centre',
      images: [
        img('vbss4v32pog4vip5k1vz501c8mpw_280062895.jpg'),
        img('wiqfrq39q0q1vjzn2m7ollbl28qr_58181623.jpg'),
        img('3yf5klx0r8336mqvb381igdvusd0_280073882.jpg'),
        img('asb5zb25n140w1gxr4xu01sljs4k_280070114.jpg'),
        img('pnxr9nch2f9baawyv490b89gbkd8_280064767.jpg'),
        img('dyostfnhyaj18zkk3mk1lyuul5ln_280063156.jpg'),
        img('ubb4rzrwfkut0brm0rfz76w9hqli_58919918.jpg'),
        img('cwb6h2euu0hcmo9f1mxmyf20qfqx_280065955.jpg'),
        img('trdb6wuvy2ibff4xe83lewt71g64_58921235.jpg'),
        img('6ey0ul6kohnw21isrmznk1ody8uv_280074157.jpg'),
        img('uxphb300vvxfhhwa08ccky5zov1q_280070621.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Helsinki',
      description: 'A first night in the Finnish capital.',
      image: img('azxxakr5ghj7fv4dxz2ymzmpax2c_shutterstock_154741178.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Rovaniemi',
    dayLabel: 'Day 2 to 4',
    images: [
      img('me6lsi36kgp4u7aa3nif3bnqyojh_shutterstock_1904886709.jpg'),
      img('fxs97sxamwzm6y1ipekq4c7c20ui_shutterstock_1199303629.jpg'),
      img('7bnzyz3i3vtufruyv1n0r9cwdxte_shutterstock_1219316851.jpg'),
      img('mwxiycumm73qvwf3fdzye80z4fcr_shutterstock_2074646863.jpg')
    ],
    dayImages: {
      2: [
        img('6aqxsu9bww1ckbul1z7jyki9gbt8_1619089606_shutterstock_1631762230.jpg'),
        img('7o9tm42tjqdzvjykd8f4jgbu4zy5_6888051450_207f253d3f_o.jpg'),
        img('me6lsi36kgp4u7aa3nif3bnqyojh_shutterstock_1904886709.jpg'),
        img('fxs97sxamwzm6y1ipekq4c7c20ui_shutterstock_1199303629.jpg')
      ],
      3: [
        img('82nkm10qyfsqh4lcxj2qbh9vnyu5_shutterstock_1059744197.jpg'),
        img('w22x89rshyxfhyaqx9dowpa6ehd2_1619000868_shutterstock_1249070626.jpg'),
        img('6gtxmvqavbp3jzflkx701wgw6doe_Arctic%20Circle%20Line-1.jpg'),
        img('21ciifaoz9ykm4q6tpa2j6zluolo_shutterstock_1333899290.jpg')
      ],
      4: [
        img('69aw6gig67lo7aq72ofc90a86miv_1619090400_Korundi_ulkoa_Joulukuu_2016_04.jpg'),
        img('7zsy7su6pkr75zu3hsc4e8yfarek_1619089237_shutterstock_370377944.jpg'),
        img('19bhzdj6m0idbwd80xiajtifwcp9_1619089940_shutterstock_125474675.jpg'),
        img('me6lsi36kgp4u7aa3nif3bnqyojh_shutterstock_1904886709.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Fly to Rovaniemi`,
      'Breakfast and transfer to the airport',
      'Flight north to Rovaniemi and check in',
      'The evening free on the Arctic Circle',
      `${DAY_MARK}Day 3 · Santa Claus Village and the lights`,
      'Breakfast, then Santa Claus Village',
      'Crossing the Arctic Circle line',
      'Evening northern lights tour',
      `${DAY_MARK}Day 4 · A free day in Rovaniemi`,
      'Breakfast, then the day yours',
      'Optional: husky or snowmobile safari'
    ],
    accommodation: {
      name: 'Santasport, Rovaniemi',
      description: '3 nights · Breakfast · Standard room · 3★ · Lodge on the Arctic Circle',
      images: [
        img('m74n6zo87zgyhse8t8p9yoonw2bg_e8accb89_z.jpg'),
        img('x5g7xx1v19zqp2dvtduickddr173_156062394.jpg'),
        img('t7rm7c23alzeq1eiaf27e6vz6j9p_112749308.jpg'),
        img('scx3s5pie8v9ncrmlul1cfezypig_230603896.jpg'),
        img('d3c1lktdmx1axyuheomz5tc000rx_112748942.jpg'),
        img('oi7byu6or98padorpmtltn08s2jf_514966326.jpg'),
        img('k8warxvudi4wq8j8y5yhfouu5i6u_112749253.jpg'),
        img('w686by4qeb4btxnwue6xbe6buydy_112750475.jpg'),
        img('g7mp9byd108lj23iukxaj6qtj6me_514984642.jpg'),
        img('y4ckbuit8x0l2sianvs03uvtj4fe_156062473.jpg')
      ]
    },
    activities: [
      {
        name: 'Santa Claus Village',
        day: 3,
        optional: false,
        image: img('82nkm10qyfsqh4lcxj2qbh9vnyu5_shutterstock_1059744197.jpg'),
        description: 'Across the Arctic Circle line at the village, with Santa\'s post office and the reindeer.'
      },
      {
        name: 'Northern lights tour',
        day: 3,
        optional: false,
        image: img('me6lsi36kgp4u7aa3nif3bnqyojh_shutterstock_1904886709.jpg'),
        description: 'An evening in the forest away from the town lights with a guide, hot drinks and a fire.'
      },
      {
        name: 'Optional: husky safari',
        day: 4,
        optional: true,
        image: img('fxs97sxamwzm6y1ipekq4c7c20ui_shutterstock_1199303629.jpg'),
        description: 'Drive your own team of huskies through the snow forest.'
      }
    ],
    program: {
      name: 'Rovaniemi',
      description: 'Three nights in Lapland for Santa Claus Village, the northern lights and a free day for huskies or snowmobiles.',
      image: img('me6lsi36kgp4u7aa3nif3bnqyojh_shutterstock_1904886709.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Tromsø',
    dayLabel: 'Day 5',
    images: [
      img('jcox76rh9q7glfppf480l35kjrze_shutterstock_1917056663.jpg'),
      img('k57rz1b9audjuelse4ftyame9mvo_shutterstock_322256108.jpg'),
      img('lxv5apgpvtsl1zr9gczzmqsvezk1_shutterstock_160053437.jpg'),
      img('q9fnoq5e4v4bky9bq94sa4hoehnm_shutterstock_367648301.jpg')
    ],
    dayImages: {
      5: [
        img('kinq7qyawk6vza1os9m4jfnznkc6_icepark-inari.png'),
        img('wh2aat35e2kqbwtex7jkdydp61sg_1280px-View_on_Inari_Lake.jpg'),
        img('azxxakr5ghj7fv4dxz2ymzmpax2c_shutterstock_154741178.jpg'),
        img('3bw5nf3bs9y3gnd0if1vhwgnrjue_shutterstock_339130604.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Tromsø and the whales`,
      'Breakfast and check out',
      'Coach across the border to Tromsø',
      'Whale watching boat trip'
    ],
    accommodation: {
      name: 'Tromsø city hotel, Tromsø',
      description: '1 night · Breakfast · Standard room · 3★ · Central hotel in the Arctic capital',
      images: [
        img('nyvbc9uek5h0ikvxo7owo52my5at_shutterstock_597095582.jpg'),
        img('ilgsjh5uy463mw89ms3vr26nq1d8_shutterstock_1664486461.jpg'),
        img('c2jr6ayr3v872yi3fvpviwdqckps_shutterstock_1214054758.jpg'),
        img('f9kc5qrz5xd7xphyeacb2e4jqhyr_shutterstock_1917056663.jpg'),
        img('e0umx82sn51jnmrfozvjtdsjocu2_shutterstock_2112137720.jpg'),
        img('8g6xnzvqm5nxc0cwwd56qkrvw6eu_shutterstock_1442994608.jpg')
      ]
    },
    activities: [
      {
        name: 'Whale watching',
        day: 5,
        optional: false,
        image: img('azxxakr5ghj7fv4dxz2ymzmpax2c_shutterstock_154741178.jpg'),
        description: 'A boat day among the humpbacks and orcas that gather in the fjords outside Tromsø in winter.'
      }
    ],
    program: {
      name: 'Tromsø',
      description: 'Across the border for a night in Tromsø and a day on the water with the whales.',
      image: img('jcox76rh9q7glfppf480l35kjrze_shutterstock_1917056663.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Inari',
    dayLabel: 'Day 6',
    images: [
      img('of8gro25m6jsneobs86lojxztzob_shutterstock_1734189275.jpg'),
      img('prvadzoxplpiv079wt54uae870k4_shutterstock_1667168842.jpg'),
      img('cfsm23nygbz30olt0d1ytsflt9nn_shutterstock_521044627.jpg'),
      img('i09nrfsf6i7as82y5b0n9wsvm3ch_shutterstock_741622438.jpg')
    ],
    dayImages: {
      6: [
        img('9pmk3tmxy6sip60bxqjojx3ukxqx_Saint.jpg'),
        img('6ze5qvcgdw5d3f6sdj1f5tww96hb_50161630531_3d4880addc_6k.jpg'),
        img('of8gro25m6jsneobs86lojxztzob_shutterstock_1734189275.jpg'),
        img('prvadzoxplpiv079wt54uae870k4_shutterstock_1667168842.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Inari`,
      'Breakfast and check out',
      'Coach to Lake Inari and check in',
      'Optional: the Siida museum and an aurora night'
    ],
    accommodation: {
      name: 'Wilderness Hotel Inari, Inari',
      description: '1 night · Breakfast · Standard room · 3★ · Lakeside wilderness hotel with aurora cabins',
      images: [
        img('mwz87p772a25562xj8u0zx83zi6t_InariWildernessHotel.jpg'),
        img('0iu2003vozvfpx7sav8quewaajxu_182686124.jpg'),
        img('lrwrpjoods2r2qlx9tuexuli743x_250776825.jpg'),
        img('ncm9w2c5e9kqlqmxuustoxw6civh_160588931.jpg'),
        img('onnebpf9neyz4x9w7cxkpdylaz88_250777023.jpg'),
        img('f05on525almd0cssiyroowaovkcg_110949493.jpg'),
        img('wzuwgamz452z4m3yl0j2ds9icla1_250777024.jpg'),
        img('gdrgh2m6c03n9p7cck3ilqp69g6k_138502103.jpg'),
        img('vekn60iera17kqwj37p3d65hvyvd_352157436.jpg'),
        img('rv99diixgmcwdshav8ntv1d6k3o7_182683249.jpg'),
        img('8dm21gakrw7lbnca81gmkj4qn4pg_352158041.jpg'),
        img('a6bgmbiyieyslimmyj9whcp8m0qg_451896256.jpg'),
        img('rvkh75mnzskb87sqsajz51rj7re3_182686134.jpg'),
        img('kyppsya9guvjrrzceu8zlgrgx1i4_352157434.jpg'),
        img('uho8xxyo1uvynrkpwws3504d3ws5_151400346.jpg')
      ]
    },
    activities: [
      {
        name: 'Optional: Siida Sami museum',
        day: 6,
        optional: true,
        image: img('of8gro25m6jsneobs86lojxztzob_shutterstock_1734189275.jpg'),
        description: 'The Sami museum and nature centre on the shore of Lake Inari.'
      }
    ],
    program: {
      name: 'Inari',
      description: 'A night by Lake Inari in the heart of Sami Lapland.',
      image: img('of8gro25m6jsneobs86lojxztzob_shutterstock_1734189275.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Helsinki',
    dayLabel: 'Day 7 to 9',
    images: [
      img('dtuaegof6dik995yy9zz5ekkbyon_shutterstock_1342334081-min.jpg'),
      img('ktbgl3irkkzljs27lb6zeg6avbxs_shutterstock_122850553.jpg'),
      img('2vs256itkhxaj4m2v0eq74nxvy2v_shutterstock_1492035677.jpg'),
      img('nuartm9b98300vf3nv4dih0yqn5a_shutterstock_1032479332.jpg')
    ],
    dayImages: {
      7: [
        img('azs9qzphgv2k8liayezobz9cwkbt_1619092189_shutterstock_1040524624.jpg'),
        img('j77miefnwkwd4tlsuqbznbw983bv_1619092041_shutterstock_1771463000.jpg'),
        img('azxxakr5ghj7fv4dxz2ymzmpax2c_shutterstock_154741178.jpg'),
        img('3bw5nf3bs9y3gnd0if1vhwgnrjue_shutterstock_339130604.jpg')
      ],
      8: [
        img('3eqrl5m89gdafoceoc9emzxl8ods_Sightseeing%20Tour%20Bus%20in%20Helsinki.jpeg'),
        img('4bougt34h2v4fipojvqpp6kcx7j3_1619092509_shutterstock_387749995.jpg'),
        img('hzihhu7125bkmpwodaqysm8hz50h_1619092968_shutterstock_1169574220.jpg'),
        img('x150feqfxnbc6ca9w0lhgzbztjyb_1619160099_shutterstock_1680380986.jpg')
      ],
      9: [
        img('azxxakr5ghj7fv4dxz2ymzmpax2c_shutterstock_154741178.jpg'),
        img('3bw5nf3bs9y3gnd0if1vhwgnrjue_shutterstock_339130604.jpg'),
        img('2fuzn1y3ogze2rr00xg8l043omr3_shutterstock_762341200.jpg'),
        img('s1n7bt2ok77sdiuloumkrnij8rbl_shutterstock_787280338.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Fly to Helsinki`,
      'Breakfast and transfer to Ivalo airport',
      'Flight to Helsinki and check in',
      `${DAY_MARK}Day 8 · Helsinki by bus and card`,
      'Breakfast, then the hop-on hop-off circuit',
      'Suomenlinna by ferry with the Helsinki Card',
      `${DAY_MARK}Day 9 · Departure from Helsinki`,
      'Breakfast at the hotel and check out',
      'Transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Roost Liisankatu, Helsinki',
      description: '2 nights · Breakfast · Standard room · 3★ · Apartment hotel in the centre',
      images: [
        img('kuomkbv5adkkh4n7nslek8erz1uu_download.jpg'),
        img('ny3txrc2f7uzsssgxws635qggghp_download%20(4).jpg'),
        img('f7d50mpazj6seg42osalm6bmjhkh_download%20(5).jpg'),
        img('948072vyfdlspyug0jm4rkfrx3o6_download%20(2).jpg'),
        img('b9ia8tpxn0152aje8vp7ms1xc7ih_download%20(1).jpg'),
        img('82w7q49r8beeijjumsbe4a1ycddf_download%20(3).jpg')
      ]
    },
    activities: [
      {
        name: 'Helsinki hop-on hop-off and Helsinki Card',
        day: 8,
        optional: false,
        image: img('azs9qzphgv2k8liayezobz9cwkbt_1619092189_shutterstock_1040524624.jpg'),
        description: 'The cathedral, Market Square, Temppeliaukio rock church and the ferry to Suomenlinna with the card.'
      }
    ],
    program: {
      name: 'Helsinki',
      description: 'Fly south for two nights with a Helsinki Card and hop-on hop-off day.',
      image: img('dtuaegof6dik995yy9zz5ekkbyon_shutterstock_1342334081-min.jpg')
    }
  }
];

const detail = {
  slug: 'finland-escapade-helsinki-rovaniemi-and-inari',
  ctaHref: '/l/finland/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Finland Escapade: Helsinki, Rovaniemi and Inari',
  alt: 'Northern lights over a frozen lake at Inari in Finnish Lapland',
  days: '9 days / 8 nights',
  stations: '5 stops',
  transport: 'Airport transfers, flights Helsinki to Rovaniemi and Ivalo to Helsinki, and coach between Rovaniemi, Tromsø and Inari',
  tag: 'Northern Lights',
  tags: ['Northern Lights', 'Nature', 'Multi-country'],
  price: 261250,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Helsinki', 'Rovaniemi', 'Tromsø', 'Inari', 'Helsinki'],
  stats: { days: 9, cities: 4, hotels: 5, activities: 6, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aino',
    image: '/experts/riya.webp',
    role: 'Finland expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Lapland in winter is quieter than anywhere I know. The snow swallows every sound and the sky does the rest.',
    quoteMore: 'Rent the thermal overalls your lodge offers for the aurora nights. Your own jacket will not be enough at minus twenty, however good it looks.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days from Helsinki to the top of Lapland: three nights in Rovaniemi for Santa Claus Village and the northern lights, whale watching from Tromsø, a night at Lake Inari and two nights back in Helsinki.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: all transfers and rail or ferry journeys as listed; sightseeing and cruises as listed with tickets where stated; daily breakfast.',
  intro2: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are quoted as a class and named on confirmation.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Helsinki (Arrival)', text: 'Arrival at the airport and private transfer to your hotel\nCheck in and the rest of the day at leisure', hotel: 'Hotel Arthur', highlights: ['Arrival at the airport and private transfer to your hotel', 'Check in and the rest of the day at leisure'] },
    { title: 'Day 2: Fly to Rovaniemi (B)', text: 'Breakfast and transfer to the airport\nFlight north to Rovaniemi and check in\nThe evening free on the Arctic Circle', hotel: 'Santasport', highlights: ['Breakfast and transfer to the airport', 'Flight north to Rovaniemi and check in', 'The evening free on the Arctic Circle'] },
    { title: 'Day 3: Santa Claus Village and the lights (B)', text: 'Breakfast, then Santa Claus Village\nCrossing the Arctic Circle line\nEvening northern lights tour', hotel: 'Santasport', highlights: ['Breakfast, then Santa Claus Village', 'Crossing the Arctic Circle line', 'Evening northern lights tour'] },
    { title: 'Day 4: A free day in Rovaniemi (B)', text: 'Breakfast, then the day yours\nOptional: husky or snowmobile safari', hotel: 'Santasport', highlights: ['Breakfast, then the day yours', 'Optional: husky or snowmobile safari'] },
    { title: 'Day 5: Tromsø and the whales (B)', text: 'Breakfast and check out\nCoach across the border to Tromsø\nWhale watching boat trip', hotel: 'Tromsø city hotel', highlights: ['Breakfast and check out', 'Coach across the border to Tromsø', 'Whale watching boat trip'] },
    { title: 'Day 6: Inari (B)', text: 'Breakfast and check out\nCoach to Lake Inari and check in\nOptional: the Siida museum and an aurora night', hotel: 'Wilderness Hotel Inari', highlights: ['Breakfast and check out', 'Coach to Lake Inari and check in', 'Optional: the Siida museum and an aurora night'] },
    { title: 'Day 7: Fly to Helsinki (B)', text: 'Breakfast and transfer to Ivalo airport\nFlight to Helsinki and check in', hotel: 'Roost Liisankatu', highlights: ['Breakfast and transfer to Ivalo airport', 'Flight to Helsinki and check in'] },
    { title: 'Day 8: Helsinki by bus and card (B)', text: 'Breakfast, then the hop-on hop-off circuit\nSuomenlinna by ferry with the Helsinki Card', hotel: 'Roost Liisankatu', highlights: ['Breakfast, then the hop-on hop-off circuit', 'Suomenlinna by ferry with the Helsinki Card'] },
    { title: 'Day 9: Departure from Helsinki (B)', text: 'Breakfast at the hotel and check out\nTransfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are quoted as a class and named on confirmation.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: 'Finland', href: '/europe/finland' },
  { label: detail.title }
];

export const finlandEscapadeLaplandInariBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const finlandEscapadeLaplandInariProduct = {
  slug: detail.slug,
  places: ['Helsinki', 'Rovaniemi', 'Tromsø', 'Inari'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 5,
  hotels: 5,
  cities: 4,
  activities: 6,
  transfers: 8,
  meals: 8,
  price: detail.price,
  images: cardImages
};
