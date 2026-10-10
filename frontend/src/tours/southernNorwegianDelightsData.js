// Southern Norwegian Delights: Bergen and Stavanger. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg'),
  img('dfsrhlwsic87rba2ec9crsr21fqv_shutterstock_1028413972.jpg'),
  img('1u8ixa4nd0vbb2zwa8rjzharqb2k_shutterstock_524225914.jpg'),
  img('pddlu4h8vhzzd7l2l7vsvrr9nhuw_shutterstock_2026001231.jpg'),
  img('c4nc7b2lni4t37439eiglshdir3d_dl.beatsnoop.com-final-C0LZgOkTDw.jpg'),
  img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
  img('lhrxnajg0bnweyzs1ec3ml0r5wrd_shutterstock_205089337.jpg'),
  img('4fbi1wm5uytipil11d9uswi7k8am_shutterstock_233931622.jpg'),
  img('rn23qqw941gg1vw3d1idvms9drrv_shutterstock_503950324.jpg'),
  img('2sm6wsx6be8xhfwco0enat69y2bu_shutterstock_2363791295.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg'),
  img('1u8ixa4nd0vbb2zwa8rjzharqb2k_shutterstock_524225914.jpg'),
  img('pddlu4h8vhzzd7l2l7vsvrr9nhuw_shutterstock_2026001231.jpg'),
  img('c4nc7b2lni4t37439eiglshdir3d_dl.beatsnoop.com-final-C0LZgOkTDw.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Oslo',
    dayLabel: 'Day 1 to 2',
    images: [
      img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg'),
      img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
      img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
      img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg')
    ],
    dayImages: {
      1: [
        img('8usbfzesu7xar12xovbvzzznnjd3_1615624697_shutterstock_506903803.jpg'),
        img('s23z05ki8tfd52pn7yfk81btjg4f_1615622683_shutterstock_553892116.jpg'),
        img('q3281bdv277u7xrjzpofdeds1xoo_1615624877_shutterstock_1447388720.jpg'),
        img('1wyl6cmw4d5w9zeq58j0l5rfra7n_1615625064_shutterstock_752093761.jpg')
      ],
      2: [
        img('uvq2tqk4nhgn6rqglt8x4sdzc01i_shutterstock_2429674801.jpg'),
        img('61wk3nhmrcf1o09fvsrpxy4z1pqu_1615620954_shutterstock_327735812.jpg'),
        img('xcq6xzeaiwdb859fnc6b7gmt3xm7_1615622555_shutterstock_754110751.jpg'),
        img('rc0nrq0sksn2frg5v908pxuind6i_1615622948_shutterstock_684917530.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Oslo`,
      'Arrival at the airport and private transfer to your hotel',
      'Check in and the rest of the day at leisure',
      `${DAY_MARK}Day 2 · Oslo hop-on hop-off`,
      'Breakfast, then a day on the sightseeing bus',
      'Opera House, Vigeland Park and Holmenkollen',
      'The evening free at Aker Brygge'
    ],
    accommodation: {
      name: 'Scandic Helsfyr, Oslo, Oslo',
      description: '2 nights · Breakfast · Standard room · 3★ · City hotel on the metro',
      images: [
        img('2n0mujjoowxq3svtr72eu4qsg90v_275049119.jpg'),
        img('3qgnjdk68ofcwz1f8jwszeqsd6b3_292223826.jpg'),
        img('m1mnx2yvby4ygxwnqfbotz5rzp4c_292223827.jpg'),
        img('mfpd0las0wdkwaoelv82l6atr7pn_292223837.jpg'),
        img('6pcp1d4t03sq6fzgu1premaj8caq_389857095.jpg'),
        img('nag5pf3vtty2g3k7j3r3cucus569_292223867.jpg'),
        img('wdidasktnsygt6y4l7a481p4jqai_389857082.jpg'),
        img('1dumh5jbbz1sb8h8wc06hvowgwdb_292223879.jpg'),
        img('uhw22xn4v7kpd6evu54lsipiedg4_389857103.jpg'),
        img('swnelnhuctglny6aksm6nkui0zbm_389857072.jpg'),
        img('i5xfesgfysfpi0qrg6tu4ob82z4l_292223825.jpg'),
        img('bkf4or3p22tgqp1kw52coyhvxt4k_389857077.jpg'),
        img('5l88sm7u5f1kmnn7lvx363ey60ko_292223875.jpg'),
        img('nv5ko8ybtproru8mhz7h6sm8c65i_292223854.jpg')
      ]
    },
    activities: [
      {
        name: 'Oslo hop-on hop-off bus',
        day: 2,
        optional: false,
        image: img('uvq2tqk4nhgn6rqglt8x4sdzc01i_shutterstock_2429674801.jpg'),
        description: 'A day ticket to the Opera House, Vigeland Park, the Bygdøy museums and Holmenkollen at your own pace.'
      }
    ],
    program: {
      name: 'Oslo',
      description: 'Two nights with a hop-on hop-off day round the capital.',
      image: img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Bergen',
    dayLabel: 'Day 3',
    images: [
      img('mqt5yd7kyvxahsmkazbmehhq4ufl_shutterstock_1174168732.jpg'),
      img('dfsrhlwsic87rba2ec9crsr21fqv_shutterstock_1028413972.jpg'),
      img('4sx773ngfyftevlay4ji7sh07opl_shutterstock_524072728.jpg'),
      img('2jl0pmyg6uxim7bv0qtkzregfpp9_shutterstock_755058535.jpg')
    ],
    dayImages: {
      3: [
        img('xnphmm25poqphwqvjpvkvtyxtb6m_N%C3%A6r%C3%B8yfjord_-_The_world\'s_most_beautiful_fjord_(32060514105).jpg'),
        img('vkniweln6eyt4wqlxiaa0qqnobik_pexels-thor-olason-15979078.jpg'),
        img('wawcwv7kld16rntfmh54tenj0abn_14919849523_979d29842a_o.jpg'),
        img('9hpmgtv5n2o5nla5uf61kd0kq0nt_Myrdal-1.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Norway in a Nutshell to Bergen`,
      'Breakfast and check out',
      'Bergen line, Flåm Railway and the Nærøyfjord ferry',
      'Train into Bergen for the night'
    ],
    accommodation: {
      name: 'Moxy Bergen, Bergen',
      description: '1 night · Breakfast · Standard room · 3★ · Modern hotel close to the harbour',
      images: [
        img('qnoldv4e6k2dwv35qfkn0tznws2a_467530659.jpg'),
        img('ldfi0oidpkcovs5fe1jjovo3u97p_469172721.jpg'),
        img('486z6d7nswnmo2da6686usoa5kdh_469172667.jpg'),
        img('yfpplpplzukeyy2dr9k6e0aocki8_469172759.jpg'),
        img('mb6rh6is8luziu6poy3ymdzn43e7_469172696.jpg'),
        img('cdee811nabs0gathbvvbfi1n6pf0_469172783.jpg'),
        img('rlxcle4dx504elrzs2av8h5k75bt_469172675.jpg'),
        img('khe6hzhpqlktt1qgyqniam8esm12_469172693.jpg'),
        img('upt2j0bxstwwqv7wnhp0sttd5tpw_469172803.jpg'),
        img('dibuxrgddyeyqp3uekiy4vpsxv6n_469172742.jpg'),
        img('2t7vmput0j242mrgrn737zx80q1s_469172800.jpg'),
        img('6yr80utdps23aiyat6mjry33ms0j_469172662.jpg'),
        img('zrcmbarrc2wwn13zcuzi4j0vfevl_469172802.jpg')
      ]
    },
    activities: [
      {
        name: 'Norway in a Nutshell',
        day: 3,
        optional: false,
        image: img('mqt5yd7kyvxahsmkazbmehhq4ufl_shutterstock_1174168732.jpg'),
        description: 'Bergen line, Flåm Railway, Nærøyfjord ferry and the Stalheim coach to Bergen in one day.'
      }
    ],
    program: {
      name: 'Bergen',
      description: 'The Norway in a Nutshell route west for a night in Bergen.',
      image: img('mqt5yd7kyvxahsmkazbmehhq4ufl_shutterstock_1174168732.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Stavanger',
    dayLabel: 'Day 4 to 5',
    images: [
      img('ec718ctb55oxs8qwpt5p379hutg9_shutterstock_706056829.jpg'),
      img('mdiutmiyboa7dgccf3rh5gxbuv2m_shutterstock_1028381539.jpg'),
      img('1u8ixa4nd0vbb2zwa8rjzharqb2k_shutterstock_524225914.jpg'),
      img('31tmmc1k2lbulp0uajhawqrjp1vl_shutterstock_2148773099.jpg')
    ],
    dayImages: {
      4: [
        img('w30tmlb6cs13r7cl3jjcgqhod1mp_1616665620_shutterstock_433050103.jpg'),
        img('pklzi4ehfhqlaz4osl5jstx1fdg5_1620480762_AF_LQAxADIANgA4ADkAMAA4ADcAOAA5AA.png'),
        img('7np5jkqp8bxwf535rj10m7rqoaa0_1616666191_shutterstock_1740222737.jpg'),
        img('s1yt85vupyuoim1xub729ylnvel7_1616666006_shutterstock_604526579.jpg')
      ],
      5: [
        img('g1do3tc8gbyrlfpvu1z5fdkaujfj_dl.beatsnoop.com-1716454380.jpg'),
        img('ol2pu203dutbsnqnf6mse0khd356_1616665465_shutterstock_224268163.jpg'),
        img('9xl276ux31ugw5qujwlxsmftcj6n_1616667975_shutterstock_1376868593.jpg'),
        img('ec718ctb55oxs8qwpt5p379hutg9_shutterstock_706056829.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Bergen to Stavanger`,
      'Breakfast and a free morning at Bryggen',
      'Coach and ferry down the coast to Stavanger',
      'Check in and a free evening in the old town',
      `${DAY_MARK}Day 5 · Pulpit Rock cruise`,
      'Breakfast, then boarding at Stavanger harbour',
      'Three hours on the Lysefjord beneath Preikestolen',
      'The afternoon free in Gamle Stavanger'
    ],
    accommodation: {
      name: 'Thon Partner Hotel Sandnes, Stavanger',
      description: '2 nights · Breakfast · Standard room · 3★ · Hotel in the Stavanger region',
      images: [
        img('9cs3akfn2q5fp4gzakzgrzxhf0ul_dwww.jpg'),
        img('67hns4ni09vpme3qx9j3gbuybww9_42037931.jpg'),
        img('1yyy3cd0z8lggib1649e7o412w5w_42040338.jpg'),
        img('nkoujicc8fyap59s9pyltr2bdhgc_209048474.jpg'),
        img('shifjuj8g3mh8dlakjtum8xnrtla_209047520.jpg'),
        img('lov7k51nx3b4rk6j8y2fbng8q5ee_209048515.jpg'),
        img('89seayqy7etf0ua6ewubaslby3s8_209065518.jpg'),
        img('dqob2lorgnmvs6bkzglut15aialn_209047323.jpg'),
        img('120uan1kpo0zva90cb9q6oc0jfpp_209046744.jpg'),
        img('jehcrhqce40r0bp2byyaxr6i6so8_209047367.jpg')
      ]
    },
    activities: [
      {
        name: 'Lysefjord cruise to Pulpit Rock',
        day: 5,
        optional: false,
        image: img('ol2pu203dutbsnqnf6mse0khd356_1616665465_shutterstock_224268163.jpg'),
        description: 'Three hours on the Lysefjord beneath the 604-metre Preikestolen cliff, with waterfalls and goats on the ledges.'
      }
    ],
    program: {
      name: 'Stavanger',
      description: 'Along the coast to Stavanger and a cruise on the Lysefjord beneath Pulpit Rock.',
      image: img('ec718ctb55oxs8qwpt5p379hutg9_shutterstock_706056829.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Kristiansand',
    dayLabel: 'Day 6',
    images: [
      img('3gqmsm38m3axum1cuwz2e6wg7zu0_assitej-norway-n5SVvTpUD34-unsplash%20(1).jpg'),
      img('1nr8t50qrueh7tywo694wwvndb88_shutterstock_2343645909.jpg'),
      img('0u157ic7lnpqt8t647vv2ozupbp2_shutterstock_304911863.jpg'),
      img('pddlu4h8vhzzd7l2l7vsvrr9nhuw_shutterstock_2026001231.jpg')
    ],
    dayImages: {
      6: [
        img('r92p04s4wy21dmzyrlqiw46822pr_dl.beatsnoop.com-final-gPuK8lI41J.jpg'),
        img('3gqmsm38m3axum1cuwz2e6wg7zu0_assitej-norway-n5SVvTpUD34-unsplash%20(1).jpg'),
        img('1nr8t50qrueh7tywo694wwvndb88_shutterstock_2343645909.jpg'),
        img('0u157ic7lnpqt8t647vv2ozupbp2_shutterstock_304911863.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Train to Kristiansand`,
      'Breakfast and check out',
      'The Sørlandet line along the south coast',
      'Kristiansand\'s white timber quarter in the evening'
    ],
    accommodation: {
      name: 'Kristiansand city hotel, Kristiansand',
      description: '1 night · Breakfast · Standard room · 3★ · Hotel in the white-timber southern capital',
      images: [
        img('cityq4a5zp0f85a8rdk9k7gbhg17_Fl%C3%A5msbana%20(Flam%20Valley)-2.jpg'),
        img('557y5kxaxej2exye3olk64k9nlzb_shutterstock_540279448.jpg'),
        img('yafyczugctra4ctgj1g1q6q06uxc_125897881176f7c09b94bbe82fa260e911240f96.jpg'),
        img('qdjgtjhk5vnymmhybtomrezq38q3_shutterstock_2152582105.jpg'),
        img('95fbih3sczbnquj9g3ni0pqj9qg0_vlx229uyy7mwzu9ke0r4rk6z6tag_shutterstock_1919818415.webp'),
        img('8lgu37nhg4lc74s4ke0w7ho67tve_prkei488nb1wrkembjxxh3kz3cjd_shutterstock_455376802.webp')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Kristiansand',
      description: 'The Sørlandet line along the south coast to Kristiansand.',
      image: img('3gqmsm38m3axum1cuwz2e6wg7zu0_assitej-norway-n5SVvTpUD34-unsplash%20(1).jpg')
    }
  },
  {
    letter: 'E',
    name: 'Tvedestrand',
    dayLabel: 'Day 7',
    images: [
      img('7gyjnx5q25d0p37ed1t3w6vazh9a_shutterstock_102114538.jpg'),
      img('aozc75hk060jvypvpjouqo2clwwo_shutterstock_1128414545.jpg'),
      img('779n667n8p98qv5ea6rth6tff9e2_shutterstock_598573391.jpg'),
      img('c3qfmn3w9kaiewhqqacj8reemmfe_shutterstock_632553518.jpg')
    ],
    dayImages: {
      7: [
        img('czebmuma6jxywbgbxg1aqd4umawt_20813453532_16342d366f_o.jpg'),
        img('7gyjnx5q25d0p37ed1t3w6vazh9a_shutterstock_102114538.jpg'),
        img('aozc75hk060jvypvpjouqo2clwwo_shutterstock_1128414545.jpg'),
        img('779n667n8p98qv5ea6rth6tff9e2_shutterstock_598573391.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Bus to Tvedestrand`,
      'Breakfast and check out',
      'Coach along the coast to Tvedestrand',
      'The harbour and bookshops at leisure'
    ],
    accommodation: {
      name: 'Tvedestrand harbour hotel, Tvedestrand',
      description: '1 night · Breakfast · Standard room · 3★ · Small hotel in the book town on the skerries',
      images: [
        img('i447ybnw79oablt7djb478as1gre_Oslo%20City%20Views.jpg'),
        img('ni54l7jfvv2pluwrowwqia5y7642_shutterstock_2088913180.jpg'),
        img('2n0mujjoowxq3svtr72eu4qsg90v_275049119.jpg'),
        img('3qgnjdk68ofcwz1f8jwszeqsd6b3_292223826.jpg'),
        img('m1mnx2yvby4ygxwnqfbotz5rzp4c_292223827.jpg'),
        img('mfpd0las0wdkwaoelv82l6atr7pn_292223837.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Tvedestrand',
      description: 'A night in one of the prettiest white towns of the southern coast.',
      image: img('7gyjnx5q25d0p37ed1t3w6vazh9a_shutterstock_102114538.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Oslo',
    dayLabel: 'Day 8',
    images: [
      img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg'),
      img('5a74z8igkplq54pijog9od4hitlo_shutterstock_471957197.jpg'),
      img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
      img('o3foa9gjr1pw0091p9hxdnzp9bdk_shutterstock_737227516.jpg')
    ],
    dayImages: {
      8: [
        img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg'),
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
        img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Transfer to Oslo and depart`,
      'Breakfast and check out',
      'Transfer to Oslo airport for your flight home'
    ],
    accommodation: {
      name: 'Oslo, Oslo',
      description: '0 nights · Breakfast · Standard room · 3★ · Transfer through Oslo to the airport',
      images: [
        img('6pcp1d4t03sq6fzgu1premaj8caq_389857095.jpg'),
        img('nag5pf3vtty2g3k7j3r3cucus569_292223867.jpg'),
        img('wdidasktnsygt6y4l7a481p4jqai_389857082.jpg'),
        img('1dumh5jbbz1sb8h8wc06hvowgwdb_292223879.jpg'),
        img('uhw22xn4v7kpd6evu54lsipiedg4_389857103.jpg'),
        img('swnelnhuctglny6aksm6nkui0zbm_389857072.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Oslo',
      description: 'The coast road back to Oslo for your flight.',
      image: img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg')
    }
  }
];

const detail = {
  slug: 'southern-norwegian-delights-bergen-stavanger',
  ctaHref: '/l/norway/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Southern Norwegian Delights: Bergen and Stavanger',
  alt: 'Pulpit Rock towering over the Lysefjord near Stavanger',
  days: '8 days / 7 nights',
  stations: '6 stops',
  transport: 'Airport transfers, the Norway in a Nutshell route, the Bergen to Stavanger coach and ferry, and the Sørlandet line back to Oslo',
  tag: 'Nature',
  tags: ['Nature', 'Nature'],
  price: 237090,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Oslo', 'Bergen', 'Stavanger', 'Kristiansand', 'Tvedestrand', 'Oslo'],
  stats: { days: 8, cities: 5, hotels: 6, activities: 3, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['6 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
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
  short: 'Eight days along Norway\'s south: Oslo, the Norway in a Nutshell route to Bergen, a Lysefjord cruise under Pulpit Rock from Stavanger, then the coast through Kristiansand and Tvedestrand.',
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
    { title: 'Day 1: Arrival in Oslo (Arrival)', text: 'Arrival at the airport and private transfer to your hotel\nCheck in and the rest of the day at leisure', hotel: 'Scandic Helsfyr, Oslo', highlights: ['Arrival at the airport and private transfer to your hotel', 'Check in and the rest of the day at leisure'] },
    { title: 'Day 2: Oslo hop-on hop-off (B)', text: 'Breakfast, then a day on the sightseeing bus\nOpera House, Vigeland Park and Holmenkollen\nThe evening free at Aker Brygge', hotel: 'Scandic Helsfyr, Oslo', highlights: ['Breakfast, then a day on the sightseeing bus', 'Opera House, Vigeland Park and Holmenkollen', 'The evening free at Aker Brygge'] },
    { title: 'Day 3: Norway in a Nutshell to Bergen (B)', text: 'Breakfast and check out\nBergen line, Flåm Railway and the Nærøyfjord ferry\nTrain into Bergen for the night', hotel: 'Moxy Bergen', highlights: ['Breakfast and check out', 'Bergen line, Flåm Railway and the Nærøyfjord ferry', 'Train into Bergen for the night'] },
    { title: 'Day 4: Bergen to Stavanger (B)', text: 'Breakfast and a free morning at Bryggen\nCoach and ferry down the coast to Stavanger\nCheck in and a free evening in the old town', hotel: 'Thon Partner Hotel Sandnes', highlights: ['Breakfast and a free morning at Bryggen', 'Coach and ferry down the coast to Stavanger', 'Check in and a free evening in the old town'] },
    { title: 'Day 5: Pulpit Rock cruise (B)', text: 'Breakfast, then boarding at Stavanger harbour\nThree hours on the Lysefjord beneath Preikestolen\nThe afternoon free in Gamle Stavanger', hotel: 'Thon Partner Hotel Sandnes', highlights: ['Breakfast, then boarding at Stavanger harbour', 'Three hours on the Lysefjord beneath Preikestolen', 'The afternoon free in Gamle Stavanger'] },
    { title: 'Day 6: Train to Kristiansand (B)', text: 'Breakfast and check out\nThe Sørlandet line along the south coast\nKristiansand\'s white timber quarter in the evening', hotel: 'Kristiansand city hotel', highlights: ['Breakfast and check out', 'The Sørlandet line along the south coast', 'Kristiansand\'s white timber quarter in the evening'] },
    { title: 'Day 7: Bus to Tvedestrand (B)', text: 'Breakfast and check out\nCoach along the coast to Tvedestrand\nThe harbour and bookshops at leisure', hotel: 'Tvedestrand harbour hotel', highlights: ['Breakfast and check out', 'Coach along the coast to Tvedestrand', 'The harbour and bookshops at leisure'] },
    { title: 'Day 8: Transfer to Oslo and depart (B)', text: 'Breakfast and check out\nTransfer to Oslo airport for your flight home', hotel: 'Departure', highlights: ['Breakfast and check out', 'Transfer to Oslo airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are quoted as a class and named on confirmation.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: 'Norway', href: '/europe/norway' },
  { label: detail.title }
];

export const southernNorwegianDelightsBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const southernNorwegianDelightsProduct = {
  slug: detail.slug,
  places: ['Oslo', 'Bergen', 'Stavanger', 'Kristiansand', 'Tvedestrand'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 6,
  hotels: 6,
  cities: 5,
  activities: 3,
  transfers: 8,
  meals: 7,
  price: detail.price,
  images: cardImages
};
