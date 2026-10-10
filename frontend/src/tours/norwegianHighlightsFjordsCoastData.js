// Norwegian Highlights: Fjords and the Coast. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
  img('2jl0pmyg6uxim7bv0qtkzregfpp9_shutterstock_755058535.jpg'),
  img('85ks3gtl97v9vdc0y31upaj0vd3u_shutterstock_669944806.jpg'),
  img('50jcrod9eks3vrqxudjfhnip8amx_shutterstock_1275688903.jpg'),
  img('dp61y4mfdrkmzf3sgey7grlfqlef_shutterstock_1239376453.jpg'),
  img('zbspcsgm6m5afsz8yhkvlgdblony_shutterstock_240355108.jpg'),
  img('mnb8s7zwq67gcscp9tu62mmfg49c_shutterstock_109937720.jpg'),
  img('psvmc4ugqa8ezfb2klw67kkfl88q_shutterstock_1505332802.jpg'),
  img('ca16xfailzz5p5q3mdakuu7etqs2_shutterstock_1370732486.jpg'),
  img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
  img('2jl0pmyg6uxim7bv0qtkzregfpp9_shutterstock_755058535.jpg'),
  img('85ks3gtl97v9vdc0y31upaj0vd3u_shutterstock_669944806.jpg'),
  img('50jcrod9eks3vrqxudjfhnip8amx_shutterstock_1275688903.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Oslo',
    dayLabel: 'Day 1',
    images: [
      img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
      img('o3foa9gjr1pw0091p9hxdnzp9bdk_shutterstock_737227516.jpg'),
      img('lhrxnajg0bnweyzs1ec3ml0r5wrd_shutterstock_205089337.jpg'),
      img('yw3zpcri0kcqrog688ilmp09em92_shutterstock_205982242.jpg')
    ],
    dayImages: {
      1: [
        img('xcq6xzeaiwdb859fnc6b7gmt3xm7_1615622555_shutterstock_754110751.jpg'),
        img('5ukcvwbns07lm1tf3cthx5pqrdxl_1615625259_shutterstock_468696983.jpg'),
        img('q3281bdv277u7xrjzpofdeds1xoo_1615624877_shutterstock_1447388720.jpg'),
        img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Oslo`,
      'Arrival at the airport and private transfer to your hotel',
      'Check in and the rest of the day at leisure'
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
      description: 'A first night in the capital.',
      image: img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Flåm',
    dayLabel: 'Day 2',
    images: [
      img('ja2q6wd8j469isi5hvjl8y84eksp_shutterstock_1741016771.jpg'),
      img('dp61y4mfdrkmzf3sgey7grlfqlef_shutterstock_1239376453.jpg'),
      img('yegd14kes1i2oonnxhtvk4m2tsac_shutterstock_366817250.jpg'),
      img('zbspcsgm6m5afsz8yhkvlgdblony_shutterstock_240355108.jpg')
    ],
    dayImages: {
      2: [
        img('yv6ykwkmx5bt9bxxnl086wwmsycn_FB_Ext_FL_16x9_01.jpg'),
        img('wawcwv7kld16rntfmh54tenj0abn_14919849523_979d29842a_o.jpg'),
        img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
        img('o3foa9gjr1pw0091p9hxdnzp9bdk_shutterstock_737227516.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Oslo to Flåm`,
      'Breakfast and check out',
      'The Bergen line to Myrdal',
      'The Flåm Railway down to the fjord'
    ],
    accommodation: {
      name: 'Hotel Flåmsbrygga, Flåm',
      description: '1 night · Breakfast · Standard room · 3★ · Waterside hotel at the head of the Aurlandsfjord',
      images: [
        img('1nhss46eodrdlqiz0vvi22qwcq5b_shutterstock_1603298923.jpg'),
        img('edt5lz7la2tw4b5j3uyd7mhx9htr_d689zgy8m2rvd9cm63his4bvh1ff_73e637791d56a7e9261057a58cfc768fe7c457db.jpg'),
        img('l3tc7rxac7ig3v7hy1vt8z2egu70_shutterstock_535817956.jpg'),
        img('vlx229uyy7mwzu9ke0r4rk6z6tag_shutterstock_1919818415.jpg'),
        img('d4xy1odhp5117m9vdlp1z7uwau87_shutterstock_1239879586.jpg'),
        img('f6uzkt0jl9cink386wlbihlhlm7l_shutterstock_1657711279.jpg')
      ]
    },
    activities: [
      {
        name: 'Flåm Railway',
        day: 2,
        optional: false,
        image: img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
        description: 'From Myrdal down to the fjord through 20 tunnels, with the stop at the Kjosfossen waterfall.'
      }
    ],
    program: {
      name: 'Flåm',
      description: 'The Bergen line and Flåm Railway to the fjord.',
      image: img('ja2q6wd8j469isi5hvjl8y84eksp_shutterstock_1741016771.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Bergen',
    dayLabel: 'Day 3 to 5',
    images: [
      img('4sx773ngfyftevlay4ji7sh07opl_shutterstock_524072728.jpg'),
      img('2jl0pmyg6uxim7bv0qtkzregfpp9_shutterstock_755058535.jpg'),
      img('2sqxkzvwd8oezvjr0tj00lxqs4xb_shutterstock_574920763.jpg'),
      img('0kaiil793tkjczdx28mh961ibe87_shutterstock_357890156.jpg')
    ],
    dayImages: {
      3: [
        img('eejhrakzt517ntopwgg2zo96oho6_g7xlu5ql3s9bbh8zgfivdvl8sxad_shutterstock_261174095.webp'),
        img('xnphmm25poqphwqvjpvkvtyxtb6m_N%C3%A6r%C3%B8yfjord_-_The_world\'s_most_beautiful_fjord_(32060514105).jpg'),
        img('vkniweln6eyt4wqlxiaa0qqnobik_pexels-thor-olason-15979078.jpg'),
        img('6s9auzbmes358zu7ydicfus7vh7y_783288329.jpg')
      ],
      4: [
        img('e2vkj1ikplvgeovbye9mhklk2yjv_shutterstock_1174168732.jpg'),
        img('4sx773ngfyftevlay4ji7sh07opl_shutterstock_524072728.jpg'),
        img('2jl0pmyg6uxim7bv0qtkzregfpp9_shutterstock_755058535.jpg'),
        img('2sqxkzvwd8oezvjr0tj00lxqs4xb_shutterstock_574920763.jpg')
      ],
      5: [
        img('0ftuu204axzgxnve7u9t2lqat2or_zseynuz857nzr2euli719n9ojq6w_shutterstock_54539950.webp'),
        img('4sx773ngfyftevlay4ji7sh07opl_shutterstock_524072728.jpg'),
        img('2jl0pmyg6uxim7bv0qtkzregfpp9_shutterstock_755058535.jpg'),
        img('2sqxkzvwd8oezvjr0tj00lxqs4xb_shutterstock_574920763.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Nærøyfjord to Bergen`,
      'Breakfast, then the fjord ferry to Gudvangen',
      'Coach to Voss and the train to Bergen',
      'Check in and a free evening',
      `${DAY_MARK}Day 4 · A free day in Bergen`,
      'Breakfast, then the day yours',
      'Optional: Fløibanen, Bryggen and the fish market',
      `${DAY_MARK}Day 5 · Board the Hurtigruten`,
      'Breakfast and a free morning',
      'Boarding the coastal ship in the afternoon',
      'Dinner on board as Bergen slips behind'
    ],
    accommodation: {
      name: 'Thon Hotel Bristol, Bergen',
      description: '3 nights · Breakfast · Standard room · 3★ · Hotel on the main square, Bryggen a short walk away',
      images: [
        img('b7vtz1bq7f27qybfn9eybgqh8fgt_27044396.jpg'),
        img('d6j6wx4vl1v4ax69vfwk3mc1oc9b_268178031.jpg'),
        img('db7hrholfsco3kznpth9z21zh13r_268178051.jpg'),
        img('o5q6damzhtx70scjhi80bgn5ktim_252576622.jpg'),
        img('e1tey4msl7bnkpuwsvymd48ivous_252565537.jpg'),
        img('4kxu0fitpxxnze92ar9crzbfaeex_252565550.jpg'),
        img('1inbcq1d3n62gnr3km900jsw60l2_e121cf4c_z.jpg'),
        img('bf95e61hqm3xju3c8dbcmjpe6tbm_231761208.jpg'),
        img('rt6l8r3kzqm87uh420zmibegml5c_252576613.jpg'),
        img('1vh1jzdvunz80osji4462tgpl3q4_231774912.jpg'),
        img('d2hxmb7948skj0rex60uxc2xl4wd_231393596.jpg')
      ]
    },
    activities: [
      {
        name: 'Nærøyfjord cruise',
        day: 3,
        optional: false,
        image: img('xnphmm25poqphwqvjpvkvtyxtb6m_N%C3%A6r%C3%B8yfjord_-_The_world\'s_most_beautiful_fjord_(32060514105).jpg'),
        description: 'Ferry from Flåm through the narrow UNESCO fjord to Gudvangen, then coach and train on to Bergen.'
      },
      {
        name: 'Optional: Fløibanen funicular',
        day: 4,
        optional: true,
        image: img('4sx773ngfyftevlay4ji7sh07opl_shutterstock_524072728.jpg'),
        description: 'Up Mount Fløyen for the classic view over the harbour and the seven mountains.'
      }
    ],
    program: {
      name: 'Bergen',
      description: 'The Nærøyfjord crossing to Bergen, a free day in the city and boarding the coastal ship.',
      image: img('4sx773ngfyftevlay4ji7sh07opl_shutterstock_524072728.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Hurtigruten',
    dayLabel: 'Day 6',
    images: [
      img('85ks3gtl97v9vdc0y31upaj0vd3u_shutterstock_669944806.jpg'),
      img('psvmc4ugqa8ezfb2klw67kkfl88q_shutterstock_1505332802.jpg')
    ],
    dayImages: {
      6: [
        img('7zc4d9hwcnvw9gmmsyobdk0j8mcy_pw65ocjo1io7t7ok5ci280kgy20o_shutterstock_490164985.webp'),
        img('xpe22n0cv54pcwxsa3m3bi495rv2_1618467928_2-1_a0f3397e-7f00-4103-843a-6af504f3d445.jpg'),
        img('85ks3gtl97v9vdc0y31upaj0vd3u_shutterstock_669944806.jpg'),
        img('psvmc4ugqa8ezfb2klw67kkfl88q_shutterstock_1505332802.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Ålesund and Molde by sea`,
      'Breakfast on board',
      'Calls at Ålesund and Molde through the day',
      'A second night at sea'
    ],
    accommodation: {
      name: 'Hurtigruten coastal ship, Molde',
      description: '1 night · Breakfast · Standard room · 3★ · Outside cabin on board',
      images: [
        img('prkei488nb1wrkembjxxh3kz3cjd_shutterstock_455376802.jpg'),
        img('23bg0t6i5c1yipuh6e52qsm3z6pi_16765034.jpg'),
        img('anf69vhnz034uqhie0p85zze6h52_418254939.jpg'),
        img('y8mtr66ktwdfz893xrgsf3ju6no5_418254978.jpg'),
        img('k4c7tlf1yu0ml1xddflww8q8s1c4_418255049.jpg'),
        img('5hwi1vp3htvty7do6usgj83hy8ec_418254974.jpg')
      ]
    },
    activities: [
      {
        name: 'Hurtigruten coastal voyage',
        day: 5,
        optional: false,
        image: img('0ftuu204axzgxnve7u9t2lqat2or_zseynuz857nzr2euli719n9ojq6w_shutterstock_54539950.webp'),
        description: 'Two nights on the coastal route north from Bergen, calling at Florø, Ålesund, Molde and Kristiansund.'
      }
    ],
    program: {
      name: 'Hurtigruten',
      description: 'Two nights at sea on the coastal express past Ålesund and Molde to Trondheim.',
      image: img('85ks3gtl97v9vdc0y31upaj0vd3u_shutterstock_669944806.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Trondheim',
    dayLabel: 'Day 7',
    images: [
      img('clio393l5g26dfdr8fkchg6qprvl_shutterstock_302878682.jpg'),
      img('ca16xfailzz5p5q3mdakuu7etqs2_shutterstock_1370732486.jpg'),
      img('4r8jme2umo377lmtrfft54zv1013_shutterstock_1186327096.jpg'),
      img('50jcrod9eks3vrqxudjfhnip8amx_shutterstock_1275688903.jpg')
    ],
    dayImages: {
      7: [
        img('6xbz8vg9frvmo0cbmggookvdex5g_Bakklandet%20District.jpeg'),
        img('vruup00op1opl6pe2upwq4sn8l0i_1616671836_shutterstock_1195780798.jpg'),
        img('v0j3zo1l1p7qijwoa4t0k234abhb_1616672732_shutterstock_1387408088.jpg'),
        img('2tzof79k1dnndgjxwbyhhhinckxw_1616675659_shutterstock_1444821083.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Trondheim`,
      'Breakfast on board and arrival in Trondheim',
      'Transfer to your hotel',
      'The old town and Nidaros Cathedral at leisure'
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

    ],
    program: {
      name: 'Trondheim',
      description: 'Disembark in Trondheim for the cathedral and the old wharves.',
      image: img('clio393l5g26dfdr8fkchg6qprvl_shutterstock_302878682.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Oslo',
    dayLabel: 'Day 8 to 10',
    images: [
      img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg'),
      img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
      img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
      img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg')
    ],
    dayImages: {
      8: [
        img('hjv67c5m6hyvkmq0o6kqnrqxuwcf_Romsdalen-valley-JohanBerge-VisitNorway-raumabanen_pbdanw.jpeg'),
        img('puvtd81b3numvar055ya45fh2jhp_1615625916_shutterstock_1920550193.jpg'),
        img('yyrzcejup9dsb5e5ewp3et678quh_1615626124_shutterstock_1533481532.jpg'),
        img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg')
      ],
      9: [
        img('r0r728i7zo6hmct92bzjd2cw1v8w_shutterstock_327735812.jpg'),
        img('61wk3nhmrcf1o09fvsrpxy4z1pqu_1615620954_shutterstock_327735812.jpg'),
        img('s23z05ki8tfd52pn7yfk81btjg4f_1615622683_shutterstock_553892116.jpg'),
        img('rc0nrq0sksn2frg5v908pxuind6i_1615622948_shutterstock_684917530.jpg')
      ],
      10: [
        img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
        img('o3foa9gjr1pw0091p9hxdnzp9bdk_shutterstock_737227516.jpg'),
        img('lhrxnajg0bnweyzs1ec3ml0r5wrd_shutterstock_205089337.jpg'),
        img('yw3zpcri0kcqrog688ilmp09em92_shutterstock_205982242.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Train to Oslo`,
      'Breakfast and check out',
      'The Dovre line south over the mountains',
      'Arrival in Oslo and a free evening',
      `${DAY_MARK}Day 9 · Oslo discovery tour`,
      'Breakfast, then a guided day in the capital',
      'Vigeland Park, Holmenkollen and the Opera House',
      'The Bygdøy museums in the afternoon',
      `${DAY_MARK}Day 10 · Departure from Oslo`,
      'Breakfast at the hotel and check out',
      'Transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Park Inn by Radisson Oslo, Oslo',
      description: '2 nights · Breakfast · Standard room · 3★ · Central hotel by the station',
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
      {
        name: 'Oslo discovery tour',
        day: 9,
        optional: false,
        image: img('5ukcvwbns07lm1tf3cthx5pqrdxl_1615625259_shutterstock_468696983.jpg'),
        description: 'A guided day round Vigeland Park, the Holmenkollen ski jump, the Opera House and the Bygdøy museums.'
      }
    ],
    program: {
      name: 'Oslo',
      description: 'The Dovre line south and a guided day in the capital.',
      image: img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg')
    }
  }
];

const detail = {
  slug: 'norwegian-highlights-fjords-and-coast',
  ctaHref: '/l/norway/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Norwegian Highlights: Fjords and the Coast',
  alt: 'The Atlantic Road bridges near Molde curving over the sea',
  days: '10 days / 9 nights',
  stations: '6 stops',
  transport: 'Airport transfers, the Bergen line and Flåm Railway, a two-night Hurtigruten voyage and the Dovre line back to Oslo',
  tag: 'Nature',
  tags: ['Nature', 'Nature'],
  price: 292579,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Oslo', 'Flåm', 'Bergen', 'Molde', 'Trondheim', 'Oslo'],
  stats: { days: 10, cities: 5, hotels: 6, activities: 5, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['6 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['11 meals', 'Meals'],
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
  short: 'Ten days across Norway\'s highlights: the Flåm Railway and Nærøyfjord, three nights in Bergen, two nights on the Hurtigruten coastal ship via Ålesund and Molde, Trondheim, and a guided day in Oslo.',
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
    { title: 'Day 1: Arrival in Oslo (Arrival)', text: 'Arrival at the airport and private transfer to your hotel\nCheck in and the rest of the day at leisure', hotel: 'Saga Hotel Oslo Central', highlights: ['Arrival at the airport and private transfer to your hotel', 'Check in and the rest of the day at leisure'] },
    { title: 'Day 2: Oslo to Flåm (B)', text: 'Breakfast and check out\nThe Bergen line to Myrdal\nThe Flåm Railway down to the fjord', hotel: 'Hotel Flåmsbrygga', highlights: ['Breakfast and check out', 'The Bergen line to Myrdal', 'The Flåm Railway down to the fjord'] },
    { title: 'Day 3: Nærøyfjord to Bergen (B)', text: 'Breakfast, then the fjord ferry to Gudvangen\nCoach to Voss and the train to Bergen\nCheck in and a free evening', hotel: 'Thon Hotel Bristol', highlights: ['Breakfast, then the fjord ferry to Gudvangen', 'Coach to Voss and the train to Bergen', 'Check in and a free evening'] },
    { title: 'Day 4: A free day in Bergen (B)', text: 'Breakfast, then the day yours\nOptional: Fløibanen, Bryggen and the fish market', hotel: 'Thon Hotel Bristol', highlights: ['Breakfast, then the day yours', 'Optional: Fløibanen, Bryggen and the fish market'] },
    { title: 'Day 5: Board the Hurtigruten (B, D)', text: 'Breakfast and a free morning\nBoarding the coastal ship in the afternoon\nDinner on board as Bergen slips behind', hotel: 'Thon Hotel Bristol', highlights: ['Breakfast and a free morning', 'Boarding the coastal ship in the afternoon', 'Dinner on board as Bergen slips behind'] },
    { title: 'Day 6: Ålesund and Molde by sea (B, L, D)', text: 'Breakfast on board\nCalls at Ålesund and Molde through the day\nA second night at sea', hotel: 'Hurtigruten coastal ship', highlights: ['Breakfast on board', 'Calls at Ålesund and Molde through the day', 'A second night at sea'] },
    { title: 'Day 7: Trondheim (B)', text: 'Breakfast on board and arrival in Trondheim\nTransfer to your hotel\nThe old town and Nidaros Cathedral at leisure', hotel: 'Clarion Hotel Trondheim', highlights: ['Breakfast on board and arrival in Trondheim', 'Transfer to your hotel', 'The old town and Nidaros Cathedral at leisure'] },
    { title: 'Day 8: Train to Oslo (B)', text: 'Breakfast and check out\nThe Dovre line south over the mountains\nArrival in Oslo and a free evening', hotel: 'Park Inn by Radisson Oslo', highlights: ['Breakfast and check out', 'The Dovre line south over the mountains', 'Arrival in Oslo and a free evening'] },
    { title: 'Day 9: Oslo discovery tour (B)', text: 'Breakfast, then a guided day in the capital\nVigeland Park, Holmenkollen and the Opera House\nThe Bygdøy museums in the afternoon', hotel: 'Park Inn by Radisson Oslo', highlights: ['Breakfast, then a guided day in the capital', 'Vigeland Park, Holmenkollen and the Opera House', 'The Bygdøy museums in the afternoon'] },
    { title: 'Day 10: Departure from Oslo (B)', text: 'Breakfast at the hotel and check out\nTransfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are quoted as a class and named on confirmation.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: 'Norway', href: '/europe/norway' },
  { label: detail.title }
];

export const norwegianHighlightsFjordsCoastBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const norwegianHighlightsFjordsCoastProduct = {
  slug: detail.slug,
  places: ['Oslo', 'Flåm', 'Bergen', 'Molde', 'Trondheim'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 6,
  hotels: 6,
  cities: 5,
  activities: 5,
  transfers: 8,
  meals: 11,
  price: detail.price,
  images: cardImages
};
