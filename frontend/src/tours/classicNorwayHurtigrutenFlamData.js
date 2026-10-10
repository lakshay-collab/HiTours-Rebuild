// Classic Norway: Trondheim, Hurtigruten and Flåm. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
  img('lyawqwa0c837li317bm3xltzh6ls_shutterstock_435887431.jpg'),
  img('cvvrdqfr9bgsc2pmeoqavabc2xfk_shutterstock_1008789172.jpg'),
  img('5a74z8igkplq54pijog9od4hitlo_shutterstock_471957197.jpg'),
  img('o3foa9gjr1pw0091p9hxdnzp9bdk_shutterstock_737227516.jpg'),
  img('ca16xfailzz5p5q3mdakuu7etqs2_shutterstock_1370732486.jpg'),
  img('2sqxkzvwd8oezvjr0tj00lxqs4xb_shutterstock_574920763.jpg'),
  img('dp61y4mfdrkmzf3sgey7grlfqlef_shutterstock_1239376453.jpg'),
  img('zbspcsgm6m5afsz8yhkvlgdblony_shutterstock_240355108.jpg'),
  img('lmr20fjf6jjo952qwlx5f4fyakx2_shutterstock_160116203.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('lyawqwa0c837li317bm3xltzh6ls_shutterstock_435887431.jpg'),
  img('cvvrdqfr9bgsc2pmeoqavabc2xfk_shutterstock_1008789172.jpg'),
  img('5a74z8igkplq54pijog9od4hitlo_shutterstock_471957197.jpg'),
  img('o3foa9gjr1pw0091p9hxdnzp9bdk_shutterstock_737227516.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Oslo',
    dayLabel: 'Day 1',
    images: [
      img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
      img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
      img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
      img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg')
    ],
    dayImages: {
      1: [
        img('mqnqdx4b9365mo1vj24ic7wj987y_1615622829_shutterstock_1116069653.jpg'),
        img('5ukcvwbns07lm1tf3cthx5pqrdxl_1615625259_shutterstock_468696983.jpg'),
        img('rc0nrq0sksn2frg5v908pxuind6i_1615622948_shutterstock_684917530.jpg'),
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Oslo`,
      'Arrival at the airport and private transfer to your hotel',
      'Check in and the rest of the day at leisure'
    ],
    accommodation: {
      name: 'Park Inn by Radisson Oslo, Oslo',
      description: '1 night · Breakfast · Standard room · 3★ · Central hotel by the station',
      images: [
        img('qkydoz71qk5twfj24kd839pgsuh2_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-1.jpg'),
        img('enpynofihdyhgdk7hysnn0r7wugk_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-8.jpg'),
        img('8ukcjxoqceyy35259ubcsns55j6t_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-4.jpg'),
        img('uos5o1cn355fcso55inyaqkd0ehb_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-3.jpg'),
        img('zhs5z0lx5g9oil1gvqnhuxpigptv_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-9.jpg'),
        img('b7w9jiiinoqbwrlvs8a6gjpprzbn_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-6.jpg'),
        img('885mf8krvecvnhsiy89bffewvavp_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-5.jpg'),
        img('vuimelwsztkr9zj3v85biy3ew5pm_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-7.jpg'),
        img('wyvhi5zonrlrr79muan0wn1e7o6g_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-2.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Oslo',
      description: 'One night in the capital before the train north.',
      image: img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Trondheim',
    dayLabel: 'Day 2',
    images: [
      img('50jcrod9eks3vrqxudjfhnip8amx_shutterstock_1275688903.jpg'),
      img('lyawqwa0c837li317bm3xltzh6ls_shutterstock_435887431.jpg'),
      img('di2q0mtv7yijyl5wkpyy3a7uksyx_shutterstock_1221986272.jpg'),
      img('a9peu0vmd9uy791ix0i81ieqyprl_shutterstock_224915089.jpg')
    ],
    dayImages: {
      2: [
        img('6xbz8vg9frvmo0cbmggookvdex5g_Bakklandet%20District.jpeg'),
        img('dwx5rr9n4j34xayos7ou64nmwi2m_17922261959_c392fffacb_o.jpg'),
        img('v0j3zo1l1p7qijwoa4t0k234abhb_1616672732_shutterstock_1387408088.jpg'),
        img('50jcrod9eks3vrqxudjfhnip8amx_shutterstock_1275688903.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Scenic train to Trondheim`,
      'Breakfast and check out',
      'The Dovre line north over the Dovrefjell plateau',
      'Arrival in Trondheim and a free evening by the river'
    ],
    accommodation: {
      name: 'Clarion Hotel Trondheim, Trondheim',
      description: '1 night · Breakfast · Standard room · 3★ · Harbourside hotel near the old town',
      images: [
        img('1ossnqy0em13w6elyab44d4l531a_494035595.jpg'),
        img('nf5cm17fxtgr21em31zpo42f08bn_494035580.jpg'),
        img('g3cyhadzzrk65gcp2acp37894nfn_494035504.jpg'),
        img('gu1ueyct1nmzj02lci8y1gy1p30o_214878385.jpg'),
        img('c6f9ihzfvu892ywxoxkvcor7byb6_sdf.jpg'),
        img('f6711iy7m4herlhfjh1ymmit87ht_494035566.jpg'),
        img('2b3f33udw6u0g2b3t3nvkn5gefi1_494035611.jpg'),
        img('6td260hpt8xmdu7tcbedoosdu01e_2f35c221_z.jpg'),
        img('o9vajqqzq60m2r4nez4rwvyau3lo_7533453d_z.jpg'),
        img('xbxh6n4glw4a11ooabbbci3l2r3p_214890511.jpg'),
        img('bppyxpg7e0138i0w1lu4tink3vv9_494035558.jpg')
      ]
    },
    activities: [
      {
        name: 'Optional: Nidaros Cathedral',
        day: 2,
        optional: true,
        image: img('50jcrod9eks3vrqxudjfhnip8amx_shutterstock_1275688903.jpg'),
        description: 'The northernmost Gothic cathedral in Europe and the coronation church of Norway\'s kings.'
      }
    ],
    program: {
      name: 'Trondheim',
      description: 'The Dovre line over the mountains and a night in the medieval capital.',
      image: img('50jcrod9eks3vrqxudjfhnip8amx_shutterstock_1275688903.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Hurtigruten',
    dayLabel: 'Day 3',
    images: [
      img('5a74z8igkplq54pijog9od4hitlo_shutterstock_471957197.jpg'),
      img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
      img('o3foa9gjr1pw0091p9hxdnzp9bdk_shutterstock_737227516.jpg'),
      img('lhrxnajg0bnweyzs1ec3ml0r5wrd_shutterstock_205089337.jpg')
    ],
    dayImages: {
      3: [
        img('sa52r8h0s9e2q72fxlf3sggorp2d_varden-sommer.jpg'),
        img('yr5wow1lzjn1k7arjl2fh4wasfs1_shutterstock_2377365573.jpg'),
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Board the Hurtigruten`,
      'Breakfast, then the morning free for Nidaros Cathedral',
      'Boarding the coastal ship in the afternoon',
      'A night at sea along the west coast'
    ],
    accommodation: {
      name: 'Hurtigruten coastal ship, Ålesund',
      description: '1 night · Breakfast · Standard room · 3★ · Outside cabin on board',
      images: [
        img('knhhz8toh2p1dfmy8qoif1vwvzom_shutterstock_1476737957.jpg'),
        img('6082v7g8cj6nah78q2ri05tmc73p_shutterstock_2191521437.jpg'),
        img('3guh7e3jywv7gzt7vkf832qlmo4z_shutterstock_2373442363.jpg'),
        img('wjica4m4qddsxdqnkfeh52fz4642_shutterstock_1071229589.jpg'),
        img('0tmwcchrejumg8wxstz1unh4b020_shutterstock_2088774592.jpg'),
        img('5bg5w0zx7wknkk9gr1oy46qg1sac_shutterstock_1310011234-min.jpg')
      ]
    },
    activities: [
      {
        name: 'Hurtigruten coastal voyage',
        day: 3,
        optional: false,
        image: img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        description: 'A night on the famous coastal route, calling at Kristiansund, Molde and Ålesund on the way south to Bergen.'
      }
    ],
    program: {
      name: 'Hurtigruten',
      description: 'Boarding the coastal express for a night at sea past Kristiansund and the Art Nouveau town of Ålesund.',
      image: img('5a74z8igkplq54pijog9od4hitlo_shutterstock_471957197.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Bergen',
    dayLabel: 'Day 4',
    images: [
      img('mnb8s7zwq67gcscp9tu62mmfg49c_shutterstock_109937720.jpg'),
      img('wvmhfp7buu3v6f67733fws7bhdev_shutterstock_521834434.jpg'),
      img('cvvrdqfr9bgsc2pmeoqavabc2xfk_shutterstock_1008789172.jpg'),
      img('mqt5yd7kyvxahsmkazbmehhq4ufl_shutterstock_1174168732.jpg')
    ],
    dayImages: {
      4: [
        img('644wdp3uvx3k3pieeioifquwsc9n_1618468540_Sognefjord-the-King-of-the-Fjords-the-largest-and-deepest-fjord-in-Norway.jpg'),
        img('vg6aof6568ybrgpee0tecc5q90q9_5938205424_87901474b4_o.jpg'),
        img('847keei7vbo6ryfz0covfj6z23a2_Stabben_fyrstasjon_NFL_2566.tif'),
        img('3g1jvm2srepl51v0iz60dlr5wl6v_12235413935_fca37b98e5_h.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Ålesund and Bergen`,
      'Breakfast on board as the ship calls at Ålesund',
      'Arrival in Bergen and transfer to your hotel',
      'Bryggen and the fish market in the evening'
    ],
    accommodation: {
      name: 'Heimen Hotel, Bergen',
      description: '1 night · Breakfast · Standard room · 3★ · Small hotel in the city centre',
      images: [
        img('tnr8zy8461f1hixzcyvmob3vi3dl_514124293.jpg'),
        img('fb1w0v1jdo4kkzdhx5c6dck7pycv_493221734.jpg'),
        img('zfiqyd34sudvv2o3fn7j3vnj0ozu_493222046.jpg'),
        img('ly2i09dz890j7bz8yr5ayzrnxnln_493222166.jpg'),
        img('9udbcsfuk2t1xfb1yvjlbfxmks7s_493221941.jpg'),
        img('wjmskxznnbve5tspxmnz3sd3qi99_493222695.jpg'),
        img('jg1x4rmnc52jgvui9rtqufn5ov5a_493222181.jpg'),
        img('m3h5g6zckk2jdetk1k21debi3hat_493229094.jpg'),
        img('ised3ne6lmb8qvld4k3v09t48zqx_431790935.jpg'),
        img('hjuuxwhtl2lm1wqyev9mig0s0mgu_493235373.jpg'),
        img('sxl5rawhiqzxsuqz1h3xtn7kejam_493221675.jpg'),
        img('qz2ajzms5bjb33r8gfbbfogy7vys_493281858.jpg'),
        img('jhondskx4kjppxs0xcxikscr35wv_493221161.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Bergen',
      description: 'Disembark in the fjord capital for Bryggen and the fish market.',
      image: img('mnb8s7zwq67gcscp9tu62mmfg49c_shutterstock_109937720.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Flåm',
    dayLabel: 'Day 5',
    images: [
      img('yw3zpcri0kcqrog688ilmp09em92_shutterstock_205982242.jpg'),
      img('ja2q6wd8j469isi5hvjl8y84eksp_shutterstock_1741016771.jpg'),
      img('dp61y4mfdrkmzf3sgey7grlfqlef_shutterstock_1239376453.jpg'),
      img('yegd14kes1i2oonnxhtvk4m2tsac_shutterstock_366817250.jpg')
    ],
    dayImages: {
      5: [
        img('ahvdbheohik01jh8sua6b8v8qb9f_cj5kun4clvaz5t9v9pemw28250w5_shutterstock_2434278953.jpg'),
        img('ad9eh8jpu7kui3mf9yggs56u65bh_yiw72f4m9p3vrwej13ujqu38k1mf_bjh5jn7vl4y36mewmc1s71b4fkk3_FLAM_NAEROYFJORDEN_PREMIUM_VISITFLAM_SVERREHJORNEV.webp'),
        img('vkniweln6eyt4wqlxiaa0qqnobik_pexels-thor-olason-15979078.jpg'),
        img('xnphmm25poqphwqvjpvkvtyxtb6m_N%C3%A6r%C3%B8yfjord_-_The_world\'s_most_beautiful_fjord_(32060514105).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Bergen to Flåm`,
      'Breakfast and check out',
      'Train to Voss and the Stalheim coach to Gudvangen',
      'Ferry through the Nærøyfjord to Flåm'
    ],
    accommodation: {
      name: 'Hotel Flåmsbrygga, Flåm',
      description: '1 night · Breakfast · Standard room · 3★ · Waterside hotel at the head of the Aurlandsfjord',
      images: [
        img('fwwznnb0h48q691a5s6joxf542no_shutterstock_594230021.jpg'),
        img('qkydoz71qk5twfj24kd839pgsuh2_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-1.jpg'),
        img('enpynofihdyhgdk7hysnn0r7wugk_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-8.jpg'),
        img('8ukcjxoqceyy35259ubcsns55j6t_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-4.jpg'),
        img('uos5o1cn355fcso55inyaqkd0ehb_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-3.jpg'),
        img('zhs5z0lx5g9oil1gvqnhuxpigptv_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-9.jpg')
      ]
    },
    activities: [
      {
        name: 'Flåm Railway',
        day: 6,
        optional: false,
        image: img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        description: 'The 20-kilometre climb from the fjord to Myrdal past the Kjosfossen waterfall, then the Bergen line east to Oslo.'
      }
    ],
    program: {
      name: 'Flåm',
      description: 'By train and fjord ferry to Flåm for a night at the water.',
      image: img('yw3zpcri0kcqrog688ilmp09em92_shutterstock_205982242.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Oslo',
    dayLabel: 'Day 6 to 7',
    images: [
      img('zbspcsgm6m5afsz8yhkvlgdblony_shutterstock_240355108.jpg'),
      img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg'),
      img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
      img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg')
    ],
    dayImages: {
      6: [
        img('d11x82leapbqh0k3eu8bxb9b5jjv_i2g4bc0xkgktiehhpuhhxxjerf7i_z0s19p198biuguuq51mfa0ken8lb_shutterstock_594230021.webp'),
        img('wawcwv7kld16rntfmh54tenj0abn_14919849523_979d29842a_o.jpg'),
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg')
      ],
      7: [
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
        img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
        img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Flåm Railway to Oslo`,
      'Breakfast, then the Flåm Railway up to Myrdal',
      'The Bergen line across the plateau to Oslo',
      'Check in and a free evening',
      `${DAY_MARK}Day 7 · Departure from Oslo`,
      'Breakfast at the hotel and check out',
      'Transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Saga Hotel Oslo Central, Oslo',
      description: '1 night · Breakfast · Standard room · 3★ · Boutique hotel in the centre',
      images: [
        img('23bg0t6i5c1yipuh6e52qsm3z6pi_16765034.jpg'),
        img('anf69vhnz034uqhie0p85zze6h52_418254939.jpg'),
        img('y8mtr66ktwdfz893xrgsf3ju6no5_418254978.jpg'),
        img('k4c7tlf1yu0ml1xddflww8q8s1c4_418255049.jpg'),
        img('5hwi1vp3htvty7do6usgj83hy8ec_418254974.jpg'),
        img('vtgywvjsdyz4xocx00tsje9isikt_418255013.jpg'),
        img('78kpu37rdvbdd6rh2i9oom970w53_download%20-%202024-07-26T153924.635.jpg'),
        img('s08s7frut7mcncatl4fjpn5k2gpr_418254929.jpg'),
        img('bl5b63bsl5bdkq9zqo3hvo7k4i7v_418254976.jpg'),
        img('ta3paw5rsh3uxf7zvxq4yf1mjb3o_418254979.jpg'),
        img('enbji9ki4e9f33tgx8qzyp5vsrh6_418254951.jpg'),
        img('jyiq77yytlatrq7sr9ys8vprhekl_418254955.jpg'),
        img('tmmvj1ci0x5jamjz9sfiznyl5axk_418254998.jpg'),
        img('rs2kjt4fwqtdrx00mxmaiv0tfddj_418254999.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Oslo',
      description: 'The Flåm Railway and Bergen line back for a last night in Oslo.',
      image: img('zbspcsgm6m5afsz8yhkvlgdblony_shutterstock_240355108.jpg')
    }
  }
];

const detail = {
  slug: 'classic-norway-trondheim-hurtigruten-and-flam',
  ctaHref: '/l/norway/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Classic Norway: Trondheim, Hurtigruten and Flåm',
  alt: 'A Hurtigruten coastal ship passing the Ålesund waterfront at dusk',
  days: '7 days / 6 nights',
  stations: '6 stops',
  transport: 'Airport transfers, the Dovre line to Trondheim, a Hurtigruten coastal voyage to Bergen and the Bergen line via Flåm',
  tag: 'Nature',
  tags: ['Nature', 'Nature'],
  price: 231325,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Oslo', 'Trondheim', 'Ålesund', 'Bergen', 'Flåm', 'Oslo'],
  stats: { days: 7, cities: 5, hotels: 6, activities: 3, transfers: 7 },
  gallery: heroGallery,
  services: [
    ['6 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['7 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ingrid',
    image: '/experts/riya.webp',
    role: 'Norway expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Norway is a country you travel through, not to. Let the trains and ferries do the work and the fjords arrive on their own.',
    quoteMore: 'Sit on the left side of the Flåm Railway going down. The Kjosfossen waterfall stop is on that side and the drop into the valley is far better.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days on Norway\'s great routes: the Dovre line to Trondheim, a night on the Hurtigruten coastal ship to Bergen, the Nærøyfjord ferry to Flåm and the Flåm Railway back to Oslo.',
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
    { title: 'Day 1: Arrival in Oslo (Arrival)', text: 'Arrival at the airport and private transfer to your hotel\nCheck in and the rest of the day at leisure', hotel: 'Park Inn by Radisson Oslo', highlights: ['Arrival at the airport and private transfer to your hotel', 'Check in and the rest of the day at leisure'] },
    { title: 'Day 2: Scenic train to Trondheim (B)', text: 'Breakfast and check out\nThe Dovre line north over the Dovrefjell plateau\nArrival in Trondheim and a free evening by the river', hotel: 'Clarion Hotel Trondheim', highlights: ['Breakfast and check out', 'The Dovre line north over the Dovrefjell plateau', 'Arrival in Trondheim and a free evening by the river'] },
    { title: 'Day 3: Board the Hurtigruten (B)', text: 'Breakfast, then the morning free for Nidaros Cathedral\nBoarding the coastal ship in the afternoon\nA night at sea along the west coast', hotel: 'Hurtigruten coastal ship', highlights: ['Breakfast, then the morning free for Nidaros Cathedral', 'Boarding the coastal ship in the afternoon', 'A night at sea along the west coast'] },
    { title: 'Day 4: Ålesund and Bergen (B)', text: 'Breakfast on board as the ship calls at Ålesund\nArrival in Bergen and transfer to your hotel\nBryggen and the fish market in the evening', hotel: 'Heimen Hotel', highlights: ['Breakfast on board as the ship calls at Ålesund', 'Arrival in Bergen and transfer to your hotel', 'Bryggen and the fish market in the evening'] },
    { title: 'Day 5: Bergen to Flåm (B)', text: 'Breakfast and check out\nTrain to Voss and the Stalheim coach to Gudvangen\nFerry through the Nærøyfjord to Flåm', hotel: 'Hotel Flåmsbrygga', highlights: ['Breakfast and check out', 'Train to Voss and the Stalheim coach to Gudvangen', 'Ferry through the Nærøyfjord to Flåm'] },
    { title: 'Day 6: Flåm Railway to Oslo (B)', text: 'Breakfast, then the Flåm Railway up to Myrdal\nThe Bergen line across the plateau to Oslo\nCheck in and a free evening', hotel: 'Saga Hotel Oslo Central', highlights: ['Breakfast, then the Flåm Railway up to Myrdal', 'The Bergen line across the plateau to Oslo', 'Check in and a free evening'] },
    { title: 'Day 7: Departure from Oslo (B)', text: 'Breakfast at the hotel and check out\nTransfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are quoted as a class and named on confirmation.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: 'Norway', href: '/europe/norway' },
  { label: detail.title }
];

export const classicNorwayHurtigrutenFlamBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const classicNorwayHurtigrutenFlamProduct = {
  slug: detail.slug,
  places: ['Oslo', 'Trondheim', 'Ålesund', 'Bergen', 'Flåm'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 6,
  hotels: 6,
  cities: 5,
  activities: 3,
  transfers: 7,
  meals: 7,
  price: detail.price,
  images: cardImages
};
