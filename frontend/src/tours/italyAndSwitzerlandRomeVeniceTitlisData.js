// Italy and Switzerland: Rome, Venice and Mount Titlis. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('krzy8lbrlz0fh9peaed4r8csar1f_shutterstock_1439825942.jpg'),
  img('t1njyh39k63dqqauf6mgz0ipqen9_shutterstock_145023565.jpg'),
  img('4q9qvmd7ccmkiuzkl8qmb6qtov90_shutterstock_322397525.jpg'),
  img('8i8r9lruzm3xg4j4ytf0vval4pcj_shutterstock_1383283745.jpg'),
  img('vtw4fhf72oymnmah1mno7ccgnmtv_shutterstock_788995654.jpg'),
  img('v4jveefa7yh97crwtdtww6v5lnfm_shutterstock_2345981205.jpg'),
  img('jmzgl29yp8upkqsjlp5nn14rshnl_shutterstock_219076456.jpg'),
  img('i628pp9teqrmo7okg9ef6ggih20a_shutterstock_1549086965.jpg'),
  img('b530x4w1tyu2lbdaog1e931ckne0_shutterstock_2360655211.jpg'),
  img('kezo85b5mgu198rtt43u1pfvb26p_shutterstock_2137654721.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('krzy8lbrlz0fh9peaed4r8csar1f_shutterstock_1439825942.jpg'),
  img('t1njyh39k63dqqauf6mgz0ipqen9_shutterstock_145023565.jpg'),
  img('4q9qvmd7ccmkiuzkl8qmb6qtov90_shutterstock_322397525.jpg'),
  img('8i8r9lruzm3xg4j4ytf0vval4pcj_shutterstock_1383283745.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Rome',
    dayLabel: 'Day 1 to 2',
    images: [
      img('krzy8lbrlz0fh9peaed4r8csar1f_shutterstock_1439825942.jpg'),
      img('b530x4w1tyu2lbdaog1e931ckne0_shutterstock_2360655211.jpg'),
      img('ba2z2z14ryiz4c62f2lcwahjagbh_shutterstock_439742272.jpg'),
      img('a7kh1hfevmvnvm0xqrw2bb9pz32x_shutterstock_110843582.jpg')
    ],
    dayImages: {
      1: [
        img('3i55yoinel57pk5ccen9351t21se_29392696270_1b871a6fee_o.jpg'),
        img('1ti4j3mo7029ds6nzo2x452g4yr0_31118758290_b85cc2d2ea_o.jpg'),
        img('jdvkvdf2vgg5pax7s4zlpzs7bbb5_1580544074_shutterstock_312684887.jpg'),
        img('v8gohkgvgyl9i7vpzj2t4303a3ic_1581079187_30872949911_1769a1cb39_k.jpg')
      ],
      2: [
        img('a8m1s0fqcajfb11u20ntte9axhf8_d2w3t9fyt6fb9f09zf6pf9k7g0ny_shutterstock_2042610296.jpg'),
        img('gzg6jki8yqfcv8ite0bcnajr6tm0_1580296093_shutterstock_1541906888.jpg'),
        img('by81ffl899je80kca476t3j1i9p0_1580300685_Piazza_Venezia.jpg'),
        img('lfpxg6fnl6dk798c657298afwi9s_1581144590_1580307444_shutterstock_433413835.jpg.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Rome`,
      'Arrival at Fiumicino and transfer to your hotel',
      'Check in and the rest of the day free',
      'Optional: an evening walk to the Trevi fountain',
      'Optional: dinner in the Trastevere lanes',
      `${DAY_MARK}Day 2 · Rome by open top bus`,
      'Breakfast, then out onto the open top bus',
      'The Colosseum, the Forum and Piazza Venezia',
      'Hop off at the Vatican for as long as you like',
      'A 24 hour ticket, so the pace is yours'
    ],
    accommodation: {
      name: 'Minerva Relais, Rome',
      description: '2 nights · Breakfast · Standard room · 3★ · Small hotel in the centro storico near the Pantheon',
      images: [
        img('6erx238pvuwd2wzj3ruh8fcglt7r_1354647866_1.jpg'),
        img('rbrnx7zggsby4ir2xiyfp59vd1gq_63257294.jpg'),
        img('4sfpoo8yunpxarqbkcrhsne4lhjl_532485134.jpg'),
        img('puuunzhuayabkydce0t53ld006kx_60778373.jpg'),
        img('62q5elhb2ds1s1ucvvf9hiyv3avh_532485105.jpg'),
        img('5qzlb4xge03fn9rbh8qwe7tby9jh_532485152.jpg'),
        img('nfajbba1f182g75pqoomhw3qa8ay_60779320.jpg'),
        img('56il3q6xrp2ewq9iuofs92uvkovb_minerva-relais.jpg'),
        img('yt2xa7q4onadnk3e0l2mcsvdnidn_532485155.jpg'),
        img('t537z0pm29a9kzazahozgonohreg_161400038.jpg'),
        img('veihk17724i6ybikym9hxablvef9_63257296.jpg'),
        img('9361uxmvf3laikrbvf7a5gnpdnsm_60779639.jpg'),
        img('jo9ops9364tozf7dpu6t256g7mzd_60778695.jpg')
      ]
    },
    activities: [
      {
        name: 'Rome hop on hop off bus tour',
        day: 2,
        optional: false,
        image: img('a8m1s0fqcajfb11u20ntte9axhf8_d2w3t9fyt6fb9f09zf6pf9k7g0ny_shutterstock_2042610296.jpg'),
        description: 'A 24 hour open top ticket looping the Colosseum, the Forum, the Vatican and Piazza Venezia, so you set your own pace.'
      }
    ],
    program: {
      name: 'Rome',
      description: 'Two nights in the old centre, with an open top loop of the Colosseum, the Forum and the Vatican.',
      image: img('krzy8lbrlz0fh9peaed4r8csar1f_shutterstock_1439825942.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Florence',
    dayLabel: 'Day 3',
    images: [
      img('3kkg3jn5ihqxs4s32xreta692f5x_shutterstock_1456815590.jpg'),
      img('t1njyh39k63dqqauf6mgz0ipqen9_shutterstock_145023565.jpg'),
      img('da3ekiffka1i0rwein74jt48tshk_shutterstock_676279030.jpg'),
      img('yihjb3btwbvmxls92vf5xc481f1a_shutterstock_2233718341.jpg')
    ],
    dayImages: {
      3: [
        img('fitaf2xj6pflkd09apjwafi5lv4y_shutterstock_1401182510%20(1).jpg'),
        img('4m5ofviggv4i02b0zoe7dk04ixij_1668758109_Villa_Bardini.jpg.jpg'),
        img('akuuzsn77hxrucd1e89wqdbhrbeg_shutterstock_143706865%20(1).jpg'),
        img('7dyav4t0hasgwqz2qx4v6o2t1lqr_1584182448_shutterstock_1540367108.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · On to Florence`,
      'Breakfast and check out of your Rome hotel',
      'Station transfer and the fast train north to Florence',
      'Check in beside Santa Maria Novella',
      'The afternoon free for the Duomo and the Ponte Vecchio'
    ],
    accommodation: {
      name: 'Hotel Palazzo Benci, Florence',
      description: '1 night · Breakfast · Standard room · 3★ · Renaissance palazzo beside Santa Maria Novella station',
      images: [
        img('qss5o7i8ulqa5ztxtc0q5c1ywefa_caption.jpg'),
        img('7n3m28p5s23o3y9j97sj3cgv6tsd_download%20(9).jpg'),
        img('5l76qcre6sz1e4o1z2remit051l7_542260547.jpg'),
        img('t3qwfm2w1eck73xz8htcgirpewqo_download%20(6).jpg'),
        img('nsdy7l9cd71fvwv6ibdzhsfxt1jx_download%20(3).jpg'),
        img('80onrm0x5zwugsw37bwtuio3r6zh_download%20(2).jpg'),
        img('o6jhzgn4lfoel16jvpproncx3jn7_download%20(1).jpg'),
        img('ofchkg98tjkcej4uge1k6tyf9xi6_download%20(4).jpg'),
        img('qcy2q6k26efy6iskn7awwhzb3ywd_download%20(10).jpg'),
        img('odgxhrtmpgtuo2vmf8u2gtmdpvv4_download%20(5).jpg'),
        img('ifwn2pmsdp325dhvzabh04xn3k0w_download%20(7).jpg'),
        img('lpmgbsj9n2wwudupge1zux8jagmz_download%20(13).jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Florence',
      description: 'One night in the Tuscan capital, with the Duomo and the Ponte Vecchio a short walk from the hotel.',
      image: img('3kkg3jn5ihqxs4s32xreta692f5x_shutterstock_1456815590.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Venice',
    dayLabel: 'Day 4 to 5',
    images: [
      img('qn701jfzpgcclntfd1fp91jeozyo_shutterstock_152790434.jpg'),
      img('h9he5g1obny741v7ou3kmnc13clu_shutterstock_121834126.jpg'),
      img('4q9qvmd7ccmkiuzkl8qmb6qtov90_shutterstock_322397525.jpg'),
      img('dllz5bnkwd6mw08hzt7uekph847e_shutterstock_696042793.jpg')
    ],
    dayImages: {
      4: [
        img('jh4v6tip3itdeb39z9wbu2q1nhbl_shutterstock_1277529523.jpg'),
        img('of7bxqx32mz5ux0gad82tekjj36o_1586604339_fi.jpg'),
        img('qn701jfzpgcclntfd1fp91jeozyo_shutterstock_152790434.jpg'),
        img('h9he5g1obny741v7ou3kmnc13clu_shutterstock_121834126.jpg')
      ],
      5: [
        img('a1340spitq23b81vq52dm94zv0ic_1582286502_Rialto_Bridge.jpg'),
        img('v0za1iwjmzjdttsbs9tjarj74prk_Teatro-La-Fenice_GettyImages-485298731.webp'),
        img('qpfrjezckwr2luaxjobpwvfposu0_1586596612_fi.jpg'),
        img('xcc5clu7qwxl4ggun7nyxyxooj7x_1581146320_SCUOLA-GRANDE-DI-SAN-ROCCO_LA-SALA-SUPERIORE.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · To Venice and a gondola ride`,
      'Breakfast and check out for the run east',
      'Station transfer and the train on to Venice',
      'Check in at your canalside hotel in Santa Croce',
      'A shared gondola through the back canals',
      `${DAY_MARK}Day 5 · A free day in Venice`,
      'Breakfast, then the whole day at leisure',
      'Optional: the vaporetto out to Murano and Burano',
      'Optional: the Doge\'s Palace and St Mark\'s Basilica',
      'Optional: an evening spritz on a canal terrace'
    ],
    accommodation: {
      name: 'Hotel Arlecchino, Venice',
      description: '2 nights · Breakfast · Standard room · 3★ · Canalside hotel in Santa Croce, ten minutes from the station',
      images: [
        img('6sekrtwqnp91xa9reg7m5o2ba3pj_f5b00987_z.webp'),
        img('wn14gd2prm9pi9x0k6vc2myfivx3_69944734.jpg'),
        img('sohkj4rktvssrle93jz78czzgd5k_111261644.jpg'),
        img('xefqosu72w1jmv02z7d0hn5jzsk9_37696204.jpg'),
        img('fizqgdkpj5u0gkaarz9e2zlf287j_IMG_5540-1920w.jpg'),
        img('tfim8zxgzbqbde2bjveco7ysbvih_85538499.jpg'),
        img('jyd01e7cuhppovlx5rivsenmdmea_85537816.jpg'),
        img('1twq3lfb5aejinhxi1pyzkoy0x5x_37697355.jpg'),
        img('pgrz5vm9b7zyc47gxjo1l1kfrrrh_85536595.jpg'),
        img('nndnhd08n6slyy21tbcje8elnjzt_37696598.jpg'),
        img('iohdf895zl3skx8ygzk7kj2q0ui9_c1fd2729_z.webp'),
        img('bkch1soltzxz0r4mo0hhu20vu9gf_85536452.jpg')
      ]
    },
    activities: [
      {
        name: 'Venice gondola ride',
        day: 4,
        optional: false,
        image: img('jh4v6tip3itdeb39z9wbu2q1nhbl_shutterstock_1277529523.jpg'),
        description: 'A shared gondola with a guide, threading the back canals of the old city before turning onto the Grand Canal.'
      }
    ],
    program: {
      name: 'Venice',
      description: 'Two nights on the lagoon, with a gondola through the back canals and a free day for Murano and St Mark\'s.',
      image: img('qn701jfzpgcclntfd1fp91jeozyo_shutterstock_152790434.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Zurich',
    subtitle: 'Zurich → Titlis and the Rhine Falls',
    dayLabel: 'Day 6 to 9',
    images: [
      img('0esaau9c42a5ieu7nt4vfdceodcl_shutterstock_1589326495.jpg'),
      img('amha7yx6cx138beg78ea0u73pubf_shutterstock_1024092049.jpg'),
      img('alfkc4hb70jq7shtbqthw2o9pmc0_shutterstock_401739034.jpg'),
      img('8i8r9lruzm3xg4j4ytf0vval4pcj_shutterstock_1383283745.jpg')
    ],
    dayImages: {
      6: [
        img('wj52atsuiwrxn190lslktf4r3q9f_shutterstock_2393185093.jpg'),
        img('qd4mo6aihw9w8z3ltuf5u4nuldkp_1584514155_fi.jpg'),
        img('z1tr1ayxou5x4kmr1cylkhdyjrxd_1584517833_fi.jpg'),
        img('w9lqtuk134cj1y38ywwtones0yyy_shutterstock_2220824153.jpg')
      ],
      7: [
        img('hbr2al8lrdju985w4elb33in856m_shutterstock_747451912.jpg'),
        img('cf0sr8eoql6y6a5w2nqkiiloz44i_874d0571-22d2-4de1-931e-890b0bbcd655.webp'),
        img('ptqfrtjckfh31i5id8a7yjuv1vi2_50967096517_97c379250d_o.jpg'),
        img('zvglw8rw97yp3o8lm95tis50z9b4_Engelberg-Titlis-Cliif-walk-and-Glacier-Cave-19.webp')
      ],
      8: [
        img('v835zge734guwtx735710oq6ma60_7xm.xyz102722.jpg'),
        img('fhlr2n7beypxpizy3ugwp0w37qdl_1583570615_fi.jpg'),
        img('0esaau9c42a5ieu7nt4vfdceodcl_shutterstock_1589326495.jpg'),
        img('amha7yx6cx138beg78ea0u73pubf_shutterstock_1024092049.jpg')
      ],
      9: [
        img('0esaau9c42a5ieu7nt4vfdceodcl_shutterstock_1589326495.jpg'),
        img('amha7yx6cx138beg78ea0u73pubf_shutterstock_1024092049.jpg'),
        img('alfkc4hb70jq7shtbqthw2o9pmc0_shutterstock_401739034.jpg'),
        img('8i8r9lruzm3xg4j4ytf0vval4pcj_shutterstock_1383283745.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Over the Alps to Zurich`,
      'Breakfast and check out of your Venice hotel',
      'Station transfer and the train north over the Alps',
      'Your four day Swiss Travel Pass starts today',
      'Check in at Zurich with the evening free',
      `${DAY_MARK}Day 7 · Mount Titlis and the glacier`,
      'Early breakfast, then south towards Engelberg',
      'The rotating cable car up to Mount Titlis',
      'The glacier cave and the cliff walk at the top',
      'A chairlift over the open crevasses',
      `${DAY_MARK}Day 8 · The Rhine Falls by boat`,
      'Breakfast, then north to Schaffhausen',
      'The boat run out to the rock in the falls',
      'The largest waterfall in Europe at close range',
      'The afternoon free in Zurich',
      `${DAY_MARK}Day 9 · Departure from Zurich`,
      'Breakfast at the hotel and check out',
      'Private transfer to Zurich airport for your flight home'
    ],
    accommodation: {
      name: 'Swiss Chocolate by Fassbind, Zurich',
      description: '3 nights · Breakfast · Standard room · 3★ · Themed city hotel a short tram ride from the lake',
      images: [
        img('vozlz0hqfbnlzdrntohqjycwhmbu_16607330%20(1).jpg'),
        img('smdnjgvqy3c5p40kxrbyvafz6ksg_0dde88ad_z.jpg'),
        img('cfykcvo7ggnzmeh6iyhshns3fwio_2b564c07_z.webp'),
        img('15mytekwu9up7ebim9et50bxnpel_e2c741f9_z.jpg'),
        img('qlw1iw949riuqeulvmz5h2w087p5_c8d2850c_z.jpg'),
        img('kxqmby9am1e43w9d2aifdgcf76fk_03a923da_z.jpg'),
        img('j8gnbo80zvtrpcnuh48fund9k0up_b518f9b5_z.jpg'),
        img('ef4uocmwpptci12t3hdq6bamo5ms_e6284298_z.jpg'),
        img('p1jkpyq67nkslwn93g3tvw6hhrzr_3fb4b99c_z.webp'),
        img('h2nlniup7i9edkez1dgpqkpphmey_daf85f4e_z.jpg')
      ]
    },
    activities: [
      {
        name: 'Swiss Travel Pass, four days',
        day: 6,
        optional: false,
        image: img('wj52atsuiwrxn190lslktf4r3q9f_shutterstock_2393185093.jpg'),
        description: 'Four days of unlimited travel on Swiss trains, buses and lake boats, plus free entry to most of the country\'s museums.'
      },
      {
        name: 'Mount Titlis and the glacier cave',
        day: 7,
        optional: false,
        image: img('hbr2al8lrdju985w4elb33in856m_shutterstock_747451912.jpg'),
        description: 'The rotating cable car to three thousand metres, the glacier cave, the cliff walk and a chairlift ride over the crevasses.'
      },
      {
        name: 'Rhine Falls boat tour',
        day: 8,
        optional: false,
        image: img('v835zge734guwtx735710oq6ma60_7xm.xyz102722.jpg'),
        description: 'A fifteen minute boat run to the rock in the middle of the largest waterfall in Europe, close enough to get wet.'
      }
    ],
    program: {
      name: 'Zurich',
      description: 'Three nights in Switzerland with a four day travel pass, the glacier on Mount Titlis and the Rhine Falls by boat.',
      image: img('0esaau9c42a5ieu7nt4vfdceodcl_shutterstock_1589326495.jpg')
    }
  }
];

const detail = {
  slug: 'italy-and-switzerland-rome-venice-and-titlis',
  ctaHref: '/l/europe/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Italy and Switzerland: Rome, Venice and Mount Titlis',
  alt: 'The Colosseum in Rome in the late afternoon light',
  days: '9 days / 8 nights',
  stations: '4 stops',
  transport: 'Private airport transfers, rail between cities and a Swiss Travel Pass',
  tag: 'Culture',
  tags: ['Culture', 'Multi-country'],
  price: 208050,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Rome', 'Florence', 'Venice', 'Zurich'],
  stats: { days: 9, cities: 4, hotels: 4, activities: 5, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Sharon',
    image: '/experts/sharon.webp',
    role: 'Europe expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Italy first, then the train over the Alps into Switzerland. Doing it in that order means the mountains are the finish, not the warm up.',
    quoteMore: 'Reserve the Rome to Florence and Venice to Zurich trains the moment the trip is confirmed. Italian high speed fares climb steeply as the date gets closer.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days from the Roman Forum to a Swiss glacier: two nights in Rome with an open top bus pass, a night in Florence, a Venice gondola, then three nights in Zurich with a four day travel pass, Mount Titlis and the Rhine Falls.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 2 nights in Rome, 1 night in Florence, 2 nights in Venice and 3 nights in Zurich, all with breakfast; airport transfers; rail between the cities; a 24 hour Rome hop on hop off bus ticket; a shared Venice gondola ride with guide; a four day Swiss Travel Pass; the Mount Titlis tour with the glacier chairlift; a Rhine Falls boat tour.',
  intro2: 'Not included: international flights; Schengen visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Rome (Arrival)', text: 'Arrival at Fiumicino and transfer to your hotel\nCheck in and the rest of the day free\nOptional: an evening walk to the Trevi fountain\nOptional: dinner in the Trastevere lanes', hotel: 'Minerva Relais', highlights: ['Arrival at Fiumicino and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: an evening walk to the Trevi fountain'] },
    { title: 'Day 2: Rome by open top bus (B)', text: 'Breakfast, then out onto the open top bus\nThe Colosseum, the Forum and Piazza Venezia\nHop off at the Vatican for as long as you like\nA 24 hour ticket, so the pace is yours', hotel: 'Minerva Relais', highlights: ['Breakfast, then out onto the open top bus', 'The Colosseum, the Forum and Piazza Venezia', 'Hop off at the Vatican for as long as you like'] },
    { title: 'Day 3: On to Florence (B)', text: 'Breakfast and check out of your Rome hotel\nStation transfer and the fast train north to Florence\nCheck in beside Santa Maria Novella\nThe afternoon free for the Duomo and the Ponte Vecchio', hotel: 'Hotel Palazzo Benci', highlights: ['Breakfast and check out of your Rome hotel', 'Station transfer and the fast train north to Florence', 'Check in beside Santa Maria Novella'] },
    { title: 'Day 4: To Venice and a gondola ride (B)', text: 'Breakfast and check out for the run east\nStation transfer and the train on to Venice\nCheck in at your canalside hotel in Santa Croce\nA shared gondola through the back canals', hotel: 'Hotel Arlecchino', highlights: ['Breakfast and check out for the run east', 'Station transfer and the train on to Venice', 'Check in at your canalside hotel in Santa Croce'] },
    { title: 'Day 5: A free day in Venice (B)', text: 'Breakfast, then the whole day at leisure\nOptional: the vaporetto out to Murano and Burano\nOptional: the Doge\'s Palace and St Mark\'s Basilica\nOptional: an evening spritz on a canal terrace', hotel: 'Hotel Arlecchino', highlights: ['Breakfast, then the whole day at leisure', 'Optional: the vaporetto out to Murano and Burano', 'Optional: the Doge\'s Palace and St Mark\'s Basilica'] },
    { title: 'Day 6: Over the Alps to Zurich (B)', text: 'Breakfast and check out of your Venice hotel\nStation transfer and the train north over the Alps\nYour four day Swiss Travel Pass starts today\nCheck in at Zurich with the evening free', hotel: 'Swiss Chocolate by Fassbind', highlights: ['Breakfast and check out of your Venice hotel', 'Station transfer and the train north over the Alps', 'Your four day Swiss Travel Pass starts today'] },
    { title: 'Day 7: Mount Titlis and the glacier (B)', text: 'Early breakfast, then south towards Engelberg\nThe rotating cable car up to Mount Titlis\nThe glacier cave and the cliff walk at the top\nA chairlift over the open crevasses', hotel: 'Swiss Chocolate by Fassbind', highlights: ['Early breakfast, then south towards Engelberg', 'The rotating cable car up to Mount Titlis', 'The glacier cave and the cliff walk at the top'] },
    { title: 'Day 8: The Rhine Falls by boat (B)', text: 'Breakfast, then north to Schaffhausen\nThe boat run out to the rock in the falls\nThe largest waterfall in Europe at close range\nThe afternoon free in Zurich', hotel: 'Swiss Chocolate by Fassbind', highlights: ['Breakfast, then north to Schaffhausen', 'The boat run out to the rock in the falls', 'The largest waterfall in Europe at close range'] },
    { title: 'Day 9: Departure from Zurich (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Zurich airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Zurich airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Europe', href: '/europa' },
  { label: detail.title }
];

export const italyAndSwitzerlandRomeVeniceTitlisBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const italyAndSwitzerlandRomeVeniceTitlisProduct = {
  slug: detail.slug,
  places: ['Rome', 'Florence', 'Venice', 'Zurich'],
  href: `/europa/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 5,
  transfers: 12,
  meals: 8,
  price: detail.price,
  images: cardImages
};
