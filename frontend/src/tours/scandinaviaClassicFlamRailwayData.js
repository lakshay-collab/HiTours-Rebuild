// Scandinavia Classic: Helsinki, Stockholm, Oslo, Bergen and Copenhagen. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('2vs256itkhxaj4m2v0eq74nxvy2v_shutterstock_1492035677.jpg'),
  img('aiuzh0pm43jg4qnnhj513zanomey_shutterstock_1518000098.jpg'),
  img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
  img('cvvrdqfr9bgsc2pmeoqavabc2xfk_shutterstock_1008789172.jpg'),
  img('9nk45rzbor4h6uv0vnfbww3hmaeg_ye7aeyhxib0pec4m7u0chzq3q62v_shutterstock_1038100864.jpg'),
  img('s1n7bt2ok77sdiuloumkrnij8rbl_shutterstock_787280338.jpg'),
  img('aa1isye2rbzq3391or61cbzzw64s_shutterstock_485404870.jpg'),
  img('yegd14kes1i2oonnxhtvk4m2tsac_shutterstock_366817250.jpg'),
  img('0kaiil793tkjczdx28mh961ibe87_shutterstock_357890156.jpg'),
  img('93xtprv97v5fbjllsa1fmtho9o2n_shutterstock_378831622.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('2vs256itkhxaj4m2v0eq74nxvy2v_shutterstock_1492035677.jpg'),
  img('aiuzh0pm43jg4qnnhj513zanomey_shutterstock_1518000098.jpg'),
  img('9nk45rzbor4h6uv0vnfbww3hmaeg_ye7aeyhxib0pec4m7u0chzq3q62v_shutterstock_1038100864.jpg'),
  img('aa1isye2rbzq3391or61cbzzw64s_shutterstock_485404870.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Helsinki',
    dayLabel: 'Day 1 to 3',
    images: [
      img('2vs256itkhxaj4m2v0eq74nxvy2v_shutterstock_1492035677.jpg'),
      img('nuartm9b98300vf3nv4dih0yqn5a_shutterstock_1032479332.jpg'),
      img('pmt0goyihh11l8ho8tmpl691fkmh_shutterstock_1585708066.jpg'),
      img('azxxakr5ghj7fv4dxz2ymzmpax2c_shutterstock_154741178.jpg')
    ],
    dayImages: {
      1: [
        img('4bougt34h2v4fipojvqpp6kcx7j3_1619092509_shutterstock_387749995.jpg'),
        img('xgrbf0lx6in3cywv5coy207sfd6x_17684168243_09ff96672f_o.jpg'),
        img('2vs256itkhxaj4m2v0eq74nxvy2v_shutterstock_1492035677.jpg'),
        img('nuartm9b98300vf3nv4dih0yqn5a_shutterstock_1032479332.jpg')
      ],
      2: [
        img('7v98cma99pjlgrjazxn8uj2jadks_shutterstock_1342334081.jpg'),
        img('azs9qzphgv2k8liayezobz9cwkbt_1619092189_shutterstock_1040524624.jpg'),
        img('8rk8umamaf2ent97bxvtzmp4r7ww_1619092360_shutterstock_727907602.jpg'),
        img('6masvvqr18kzgx5ymy29k3kzxyz3_1619092795_shutterstock_288735794.jpg')
      ],
      3: [
        img('2vs256itkhxaj4m2v0eq74nxvy2v_shutterstock_1492035677.jpg'),
        img('nuartm9b98300vf3nv4dih0yqn5a_shutterstock_1032479332.jpg'),
        img('pmt0goyihh11l8ho8tmpl691fkmh_shutterstock_1585708066.jpg'),
        img('azxxakr5ghj7fv4dxz2ymzmpax2c_shutterstock_154741178.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Helsinki`,
      'Arrival at the airport and private transfer to your hotel',
      'Check in and the rest of the day at leisure',
      `${DAY_MARK}Day 2 · Helsinki and Suomenlinna`,
      'Breakfast, then a city sightseeing tour',
      'Ferry to the Suomenlinna fortress islands',
      `${DAY_MARK}Day 3 · Overnight cruise to Stockholm`,
      'Breakfast and a free morning',
      'Boarding the Silja Line in the afternoon',
      'A night at sea through the archipelago'
    ],
    accommodation: {
      name: 'Radisson Blu Royal Hotel, Helsinki, Helsinki',
      description: '3 nights · Breakfast · Standard room · 3★ · Hotel by the station, then a cabin on the Stockholm ferry',
      images: [
        img('cy6o6w3xxkncmyyvwdse1me8s9fq_download%20(13).jpg'),
        img('hljloecojy9rq17hidznk38v1ywz_download.jpg'),
        img('ax4upf9l3a2nmz4l7qgzov1ctl6e_download%20(17).jpg'),
        img('is4b2kxi6diuxnac996sdn99z85g_download%20(2).jpg'),
        img('pxvqqh40khm1akjkw9nff1xpqqpx_download%20(9).jpg'),
        img('4vnervoanczl92mf9lyl7uitpm8c_download%20(3).jpg'),
        img('647o9jank3r35r4miiasbs5qtmsa_download%20(10).jpg'),
        img('5zbyn79y3bdthawzygqnzkhyas51_download%20(12).jpg'),
        img('soadbiwacsjr3y23jy3ljj9ed2jd_download%20(11).jpg'),
        img('jzvvmiwtsf7gu5juk0l9z8ge2i0e_download%20(7).jpg'),
        img('dwdlpp4jxy4ai17wrnzu9ziu9pnd_download%20(5).jpg'),
        img('hhtfh62hditpp948nz0ln2lxaxzm_download%20(8).jpg'),
        img('mekrjwt15wy3mrhh9ur0n89riagb_download%20(16).jpg'),
        img('8zzmrprh8ahcncgsjhr2vpukgefw_download%20(15).jpg'),
        img('gf856ui7ep1zdo8y4c3qdh88lruq_download%20(18).jpg'),
        img('x9x32ndk5mttf6wsidsc2l4tauw5_download%20(14).jpg')
      ]
    },
    activities: [
      {
        name: 'Helsinki and Suomenlinna tour',
        day: 2,
        optional: false,
        image: img('7v98cma99pjlgrjazxn8uj2jadks_shutterstock_1342334081.jpg'),
        description: 'The city highlights and the ferry to the sea fortress of Suomenlinna.'
      }
    ],
    program: {
      name: 'Helsinki',
      description: 'Two nights in Helsinki with a city and Suomenlinna tour, then the overnight cruise.',
      image: img('2vs256itkhxaj4m2v0eq74nxvy2v_shutterstock_1492035677.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Stockholm',
    dayLabel: 'Day 4',
    images: [
      img('8dxp5784ir4d9c8z1rrrierbzebz_shutterstock_2130119159.jpg'),
      img('aiuzh0pm43jg4qnnhj513zanomey_shutterstock_1518000098.jpg'),
      img('bbt7wjk12om1delgz4yj7ugbq1u0_shutterstock_314554589.jpg'),
      img('xbnkgapjb02ai9b5tn9yf1bxpll2_shutterstock_1023801190.jpg')
    ],
    dayImages: {
      4: [
        img('zyd5irxc8bmcunmcg6id01zxjjsd_shutterstock_443768356.jpg'),
        img('3y93xspmnw2h5k9gxkyy0p2l29b8_1619098877_shutterstock_1548563657.jpg'),
        img('zshja5qba6tj3cvqqjblotaffem1_1619099020_shutterstock_208415365.jpg'),
        img('xni4ogkgp7rs4hoh2cla9ahqhqsq_1619099205_shutterstock_741175588.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Stockholm`,
      'Breakfast on board and arrival',
      'Hop-on hop-off day round the city',
      'Check in and a free evening in Gamla Stan'
    ],
    accommodation: {
      name: 'Hotel Lady Hamilton Collector\'s, Stockholm',
      description: '1 night · Breakfast · Standard room · 3★ · Historic hotel in Gamla Stan',
      images: [
        img('ed2uzxqhqhnc83eczsvkixumpxxl_Lady_Hamilton_public_area_08.jpg'),
        img('7br6ygo9cq76w8a05etb053hktpr_122353570.png'),
        img('vsn4ejevju0l9dapcq7ko2j1vxog_122344702.png'),
        img('tjy73h73id6sxkr3xz6i3nhblvtn_225548404.png'),
        img('6cvsyyvwc4a2mylzddm4xj1uo9i2_223778039.png'),
        img('ns7mxwtr706nn4ak1i65c44c7lgx_122344572.png'),
        img('kw5gv2o0ywfm3vtdhb3lbmsdvy1u_46796577.png'),
        img('qk7l7xbh0a30i75hdupfh5bqr48u_223780734.png'),
        img('pitjd8cp9ab7fnkm4qeyqoclrnro_122352051.png'),
        img('p3i43lze2dlb5eu3sx96tmm1kh3h_122346020.png'),
        img('yli7ewiqb90t7z549iids5v7r84d_122354017.png'),
        img('wfa2zynz3str074izfi09opiea18_38414717.png')
      ]
    },
    activities: [
      {
        name: 'Stockholm hop-on hop-off',
        day: 4,
        optional: false,
        image: img('zyd5irxc8bmcunmcg6id01zxjjsd_shutterstock_443768356.jpg'),
        description: 'Gamla Stan, the Royal Palace, Djurgården and the Vasa Museum at your own pace.'
      }
    ],
    program: {
      name: 'Stockholm',
      description: 'A day in Stockholm on the hop-on hop-off bus.',
      image: img('8dxp5784ir4d9c8z1rrrierbzebz_shutterstock_2130119159.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Oslo',
    dayLabel: 'Day 5 to 6',
    images: [
      img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg'),
      img('5a74z8igkplq54pijog9od4hitlo_shutterstock_471957197.jpg'),
      img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
      img('o3foa9gjr1pw0091p9hxdnzp9bdk_shutterstock_737227516.jpg')
    ],
    dayImages: {
      5: [
        img('3zmakuu94z4h5e71d6ycdj8y9ke0_1619099998_shutterstock_520323013.jpg'),
        img('klgqeuo2rmhh35je59tlf758brb3_1619099836_shutterstock_1128253553.jpg'),
        img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg'),
        img('5a74z8igkplq54pijog9od4hitlo_shutterstock_471957197.jpg')
      ],
      6: [
        img('r0r728i7zo6hmct92bzjd2cw1v8w_shutterstock_327735812.jpg'),
        img('61wk3nhmrcf1o09fvsrpxy4z1pqu_1615620954_shutterstock_327735812.jpg'),
        img('s23z05ki8tfd52pn7yfk81btjg4f_1615622683_shutterstock_553892116.jpg'),
        img('rc0nrq0sksn2frg5v908pxuind6i_1615622948_shutterstock_684917530.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Train to Oslo`,
      'Breakfast and check out',
      'Train across Sweden to Oslo',
      'Check in and the evening free',
      `${DAY_MARK}Day 6 · Oslo sightseeing`,
      'Breakfast, then a guided tour of the capital',
      'Vigeland Park, Holmenkollen and the Opera House'
    ],
    accommodation: {
      name: 'Thon Hotel Europa, Oslo',
      description: '2 nights · Breakfast · Standard room · 3★ · Hotel by the Royal Palace park',
      images: [
        img('dc1963ot6oerx1jzk7w5ewe7oap3_135679168.jpg'),
        img('o9kl1ono9vb9khpyh1n0qqyo37vv_135679181.jpg'),
        img('52oht504521jkjbckszbvlp44zyo_135680866.jpg'),
        img('kcuyeugp0eko5jlgz637qbm3iomp_135679218.jpg'),
        img('h2o7rttg7rq7hm9ueccel8txccpc_135679174.jpg'),
        img('fnap2lb6dtt98dp26ndfcspxm5zp_135679177.jpg'),
        img('pk0i6sjpxyqg8971xzoo9zpu47st_135679194.jpg'),
        img('mzws0x0sxwcod8gj7gxo1i6kre87_135680870.jpg'),
        img('0lohgofpds73etfqjvcftuc2cwac_135679179.jpg'),
        img('42ciaf7ztkvqt6jm8yuvr758r61r_135679193.jpg'),
        img('je2cjcde0f0v7tis56pfgu7gg9gu_135679188.jpg'),
        img('e78o09aaefck4ho76672znu8gnv5_135680872.jpg'),
        img('btt90lpdsd7mj0btuzd980dal1cn_135679225.jpg')
      ]
    },
    activities: [
      {
        name: 'Oslo sightseeing tour',
        day: 6,
        optional: false,
        image: img('r0r728i7zo6hmct92bzjd2cw1v8w_shutterstock_327735812.jpg'),
        description: 'Vigeland Park, Holmenkollen, the Opera House and the Bygdøy museums.'
      }
    ],
    program: {
      name: 'Oslo',
      description: 'Train across to Oslo and a guided day in the capital.',
      image: img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Bergen',
    dayLabel: 'Day 7 to 8',
    images: [
      img('4fbi1wm5uytipil11d9uswi7k8am_shutterstock_233931622.jpg'),
      img('mnb8s7zwq67gcscp9tu62mmfg49c_shutterstock_109937720.jpg'),
      img('wvmhfp7buu3v6f67733fws7bhdev_shutterstock_521834434.jpg'),
      img('cvvrdqfr9bgsc2pmeoqavabc2xfk_shutterstock_1008789172.jpg')
    ],
    dayImages: {
      7: [
        img('1iutsk72zrgrykl1hexpeh0atrn2_u4lo7ei78nwtmk4zdbcdskp1kutr_shutterstock_301195235.webp'),
        img('wawcwv7kld16rntfmh54tenj0abn_14919849523_979d29842a_o.jpg'),
        img('o2nhh8g33hcr3oul9p1vdjrtsjou_06b74m4i0jmctzetd66bpppyzww9_f00790dd4699a26613c4a8ecee6f55b4238bfe18-2000x1331.webp'),
        img('vkniweln6eyt4wqlxiaa0qqnobik_pexels-thor-olason-15979078.jpg')
      ],
      8: [
        img('6v59dj4cpf25j4dh542f3oz74yq5_shutterstock_1174168732.jpg'),
        img('trrissd61jx2lhl7mvq2173zse6d_1615627638_shutterstock_1435027013.jpg'),
        img('266un686elxcegwj1vgnqarqsllr_1615628559_shutterstock_518027206.jpg'),
        img('bw7o1puomalhyok9r3t71y5jyrvs_1615628997_shutterstock_442828600.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Norway in a Nutshell`,
      'Breakfast and check out',
      'Bergen line, Flåm Railway and the Nærøyfjord ferry',
      'Arrival in Bergen',
      `${DAY_MARK}Day 8 · Bergen on foot`,
      'Breakfast, then a walking tour of Bryggen',
      'The Fløibanen funicular for the view'
    ],
    accommodation: {
      name: 'Bergen city hotel, Bergen',
      description: '2 nights · Breakfast · Standard room · 3★ · Hotel near Bryggen',
      images: [
        img('0069sz7h08d8fn21v0nka26r82kb_shutterstock_2434278987.jpg'),
        img('zw0faw81jt6nqfh3pt3gyc5g0bcq_shutterstock_166214942.jpg'),
        img('edq3d3r3t9yxsjerhgjxwvwgljem_shutterstock_327732299.jpg'),
        img('4iuy57sqbt4md2y65zj0iix0a9di_shutterstock_1897508071.jpg'),
        img('ciuwoux9uo1tqzbh400rovlen1dq_shutterstock_1673275999.jpg'),
        img('ft76v45j1a5y54m0meghm3b5p2qi_shutterstock_316647848.jpg')
      ]
    },
    activities: [
      {
        name: 'Norway in a Nutshell with the Flåm Railway',
        day: 7,
        optional: false,
        image: img('4fbi1wm5uytipil11d9uswi7k8am_shutterstock_233931622.jpg'),
        description: 'Bergen line, Flåm Railway, Nærøyfjord ferry and the Stalheim coach to Bergen.'
      },
      {
        name: 'Bergen walking tour and Fløibanen',
        day: 8,
        optional: false,
        image: img('trrissd61jx2lhl7mvq2173zse6d_1615627638_shutterstock_1435027013.jpg'),
        description: 'Bryggen, the fish market and the funicular up Mount Fløyen.'
      }
    ],
    program: {
      name: 'Bergen',
      description: 'The Norway in a Nutshell route with the Flåm Railway, then a walking tour and the Fløibanen.',
      image: img('4fbi1wm5uytipil11d9uswi7k8am_shutterstock_233931622.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Copenhagen',
    dayLabel: 'Day 9 to 11',
    images: [
      img('0bj4o3lef0ya3hkkalcxacss6j4s_shutterstock_425892901.jpg'),
      img('fzhq9ffimfcpkr7i8n9y4gwf13p1_shutterstock_235536577.jpg'),
      img('93xtprv97v5fbjllsa1fmtho9o2n_shutterstock_378831622.jpg'),
      img('ytxfqeed1sea1t34dtyqluugs71e_shutterstock_166449674.jpg')
    ],
    dayImages: {
      9: [
        img('igd0sjvfgs39qt875q3te6xxwy4p_1599213593_Amager_Beach_Park.jpg'),
        img('5lbgpri7x95ub1pqxuqdc48gcdlo_1619081846_shutterstock_35410336.jpg'),
        img('0bj4o3lef0ya3hkkalcxacss6j4s_shutterstock_425892901.jpg'),
        img('fzhq9ffimfcpkr7i8n9y4gwf13p1_shutterstock_235536577.jpg')
      ],
      10: [
        img('bxpnbfmlu7jm69f9btgho58s7f56_shutterstock_1616523589.jpg'),
        img('pgq2p8recusg8d7tew6luyx25566_1619077505_shutterstock_107088668.jpg'),
        img('9tdosqn5lis76ycx6m8df9xp005z_1619077691_shutterstock_1915246690.jpg'),
        img('lp1ruj5u8gh4jy28ys0ahe8dk97n_1619077854_shutterstock_787660261.jpg')
      ],
      11: [
        img('0bj4o3lef0ya3hkkalcxacss6j4s_shutterstock_425892901.jpg'),
        img('fzhq9ffimfcpkr7i8n9y4gwf13p1_shutterstock_235536577.jpg'),
        img('93xtprv97v5fbjllsa1fmtho9o2n_shutterstock_378831622.jpg'),
        img('ytxfqeed1sea1t34dtyqluugs71e_shutterstock_166449674.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 9 · Fly to Copenhagen`,
      'Breakfast and transfer to the airport',
      'Flight to Copenhagen and check in',
      `${DAY_MARK}Day 10 · Copenhagen`,
      'Breakfast, then the hop-on hop-off bus',
      'An hour on the canals from Nyhavn',
      `${DAY_MARK}Day 11 · Departure from Copenhagen`,
      'Breakfast at the hotel and check out',
      'Transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Copenhagen city hotel, Copenhagen',
      description: '2 nights · Breakfast · Standard room · 3★ · Hotel in the centre',
      images: [
        img('c80ec69xg4ua0yc75kv5bz65gxf0_shutterstock_1616523589.jpg'),
        img('6glb18qig6crkw5jcyx0hnk3c2gg_shutterstock_204347152.jpg'),
        img('5yp6m9axne26ibnaamqx4md46y8d_shafgavc4d4d0a9vpg0c0fv1itbb_shutterstock_1476737957.webp'),
        img('cy6o6w3xxkncmyyvwdse1me8s9fq_download%20(13).jpg'),
        img('hljloecojy9rq17hidznk38v1ywz_download.jpg'),
        img('ax4upf9l3a2nmz4l7qgzov1ctl6e_download%20(17).jpg')
      ]
    },
    activities: [
      {
        name: 'Copenhagen hop-on hop-off and canal cruise',
        day: 10,
        optional: false,
        image: img('5lbgpri7x95ub1pqxuqdc48gcdlo_1619081846_shutterstock_35410336.jpg'),
        description: 'Nyhavn, Amalienborg, the Little Mermaid and an hour on the canals.'
      }
    ],
    program: {
      name: 'Copenhagen',
      description: 'Fly to Copenhagen for the hop-on hop-off bus and a canal cruise.',
      image: img('0bj4o3lef0ya3hkkalcxacss6j4s_shutterstock_425892901.jpg')
    }
  }
];

const detail = {
  slug: 'scandinavia-classic-helsinki-stockholm-oslo-bergen-copenhagen',
  ctaHref: '/l/finland/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Scandinavia Classic: Helsinki, Stockholm, Oslo, Bergen and Copenhagen',
  alt: 'The Flåm Railway winding down the valley above the Aurlandsfjord',
  days: '11 days / 10 nights',
  stations: '5 stops',
  transport: 'Overnight cruise Helsinki to Stockholm, trains Stockholm to Oslo and Oslo to Bergen via Flåm, and a flight to Copenhagen',
  tag: 'Multi-country',
  tags: ['Multi-country', 'Culture', 'Nature'],
  price: 301559,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Helsinki', 'Stockholm', 'Oslo', 'Bergen', 'Copenhagen'],
  stats: { days: 11, cities: 5, hotels: 5, activities: 6, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['10 meals', 'Meals'],
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
  short: 'Eleven days across Scandinavia: Helsinki and Suomenlinna, an overnight cruise to Stockholm, Oslo, the Norway in a Nutshell route with the Flåm Railway to Bergen, and two nights in Copenhagen.',
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
    { title: 'Day 1: Arrival in Helsinki (Arrival)', text: 'Arrival at the airport and private transfer to your hotel\nCheck in and the rest of the day at leisure', hotel: 'Radisson Blu Royal Hotel, Helsinki', highlights: ['Arrival at the airport and private transfer to your hotel', 'Check in and the rest of the day at leisure'] },
    { title: 'Day 2: Helsinki and Suomenlinna (B)', text: 'Breakfast, then a city sightseeing tour\nFerry to the Suomenlinna fortress islands', hotel: 'Radisson Blu Royal Hotel, Helsinki', highlights: ['Breakfast, then a city sightseeing tour', 'Ferry to the Suomenlinna fortress islands'] },
    { title: 'Day 3: Overnight cruise to Stockholm (B)', text: 'Breakfast and a free morning\nBoarding the Silja Line in the afternoon\nA night at sea through the archipelago', hotel: 'Radisson Blu Royal Hotel, Helsinki', highlights: ['Breakfast and a free morning', 'Boarding the Silja Line in the afternoon', 'A night at sea through the archipelago'] },
    { title: 'Day 4: Stockholm (B)', text: 'Breakfast on board and arrival\nHop-on hop-off day round the city\nCheck in and a free evening in Gamla Stan', hotel: 'Hotel Lady Hamilton Collector\'s', highlights: ['Breakfast on board and arrival', 'Hop-on hop-off day round the city', 'Check in and a free evening in Gamla Stan'] },
    { title: 'Day 5: Train to Oslo (B)', text: 'Breakfast and check out\nTrain across Sweden to Oslo\nCheck in and the evening free', hotel: 'Thon Hotel Europa', highlights: ['Breakfast and check out', 'Train across Sweden to Oslo', 'Check in and the evening free'] },
    { title: 'Day 6: Oslo sightseeing (B)', text: 'Breakfast, then a guided tour of the capital\nVigeland Park, Holmenkollen and the Opera House', hotel: 'Thon Hotel Europa', highlights: ['Breakfast, then a guided tour of the capital', 'Vigeland Park, Holmenkollen and the Opera House'] },
    { title: 'Day 7: Norway in a Nutshell (B)', text: 'Breakfast and check out\nBergen line, Flåm Railway and the Nærøyfjord ferry\nArrival in Bergen', hotel: 'Bergen city hotel', highlights: ['Breakfast and check out', 'Bergen line, Flåm Railway and the Nærøyfjord ferry', 'Arrival in Bergen'] },
    { title: 'Day 8: Bergen on foot (B)', text: 'Breakfast, then a walking tour of Bryggen\nThe Fløibanen funicular for the view', hotel: 'Bergen city hotel', highlights: ['Breakfast, then a walking tour of Bryggen', 'The Fløibanen funicular for the view'] },
    { title: 'Day 9: Fly to Copenhagen (B)', text: 'Breakfast and transfer to the airport\nFlight to Copenhagen and check in', hotel: 'Copenhagen city hotel', highlights: ['Breakfast and transfer to the airport', 'Flight to Copenhagen and check in'] },
    { title: 'Day 10: Copenhagen (B)', text: 'Breakfast, then the hop-on hop-off bus\nAn hour on the canals from Nyhavn', hotel: 'Copenhagen city hotel', highlights: ['Breakfast, then the hop-on hop-off bus', 'An hour on the canals from Nyhavn'] },
    { title: 'Day 11: Departure from Copenhagen (B)', text: 'Breakfast at the hotel and check out\nTransfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are quoted as a class and named on confirmation.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: 'Finland', href: '/europe/finland' },
  { label: detail.title }
];

export const scandinaviaClassicFlamRailwayBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const scandinaviaClassicFlamRailwayProduct = {
  slug: detail.slug,
  places: ['Helsinki', 'Stockholm', 'Oslo', 'Bergen', 'Copenhagen'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 11,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 6,
  transfers: 9,
  meals: 10,
  price: detail.price,
  images: cardImages
};
