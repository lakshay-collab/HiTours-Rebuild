// Best of Norway: Oslo, Flåm and Bergen. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('yegd14kes1i2oonnxhtvk4m2tsac_shutterstock_366817250.jpg'),
  img('mnb8s7zwq67gcscp9tu62mmfg49c_shutterstock_109937720.jpg'),
  img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
  img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
  img('dfsrhlwsic87rba2ec9crsr21fqv_shutterstock_1028413972.jpg'),
  img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
  img('lhrxnajg0bnweyzs1ec3ml0r5wrd_shutterstock_205089337.jpg'),
  img('0kaiil793tkjczdx28mh961ibe87_shutterstock_357890156.jpg'),
  img('dp61y4mfdrkmzf3sgey7grlfqlef_shutterstock_1239376453.jpg'),
  img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('yegd14kes1i2oonnxhtvk4m2tsac_shutterstock_366817250.jpg'),
  img('mnb8s7zwq67gcscp9tu62mmfg49c_shutterstock_109937720.jpg'),
  img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
  img('dfsrhlwsic87rba2ec9crsr21fqv_shutterstock_1028413972.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Oslo',
    dayLabel: 'Day 1 to 2',
    images: [
      img('yegd14kes1i2oonnxhtvk4m2tsac_shutterstock_366817250.jpg'),
      img('zbspcsgm6m5afsz8yhkvlgdblony_shutterstock_240355108.jpg'),
      img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg'),
      img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg')
    ],
    dayImages: {
      1: [
        img('vlxpjos090if59qk4yjocfccsv87_3k%20barcelona2%20(3).jpg'),
        img('yegd14kes1i2oonnxhtvk4m2tsac_shutterstock_366817250.jpg'),
        img('zbspcsgm6m5afsz8yhkvlgdblony_shutterstock_240355108.jpg'),
        img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg')
      ],
      2: [
        img('f3iby1jo3nxnky52cejucpk1qra4_ai-generated-boat-picture.jpg'),
        img('xcq6xzeaiwdb859fnc6b7gmt3xm7_1615622555_shutterstock_754110751.jpg'),
        img('8usbfzesu7xar12xovbvzzznnjd3_1615624697_shutterstock_506903803.jpg'),
        img('yegd14kes1i2oonnxhtvk4m2tsac_shutterstock_366817250.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Oslo`,
      'Arrival at the airport and private transfer to your hotel',
      'Check in and the rest of the day at leisure',
      'Optional: an evening stroll along the Aker Brygge waterfront',
      `${DAY_MARK}Day 2 · Oslofjord cruise`,
      'Breakfast, then down to the pier at City Hall',
      'Two hours on the inner Oslofjord by boat',
      'The afternoon free for the Opera House roof or Vigeland Park'
    ],
    accommodation: {
      name: 'Scandic Helsfyr, Oslo, Oslo',
      description: '2 nights · Breakfast · Standard room · 3★ · City hotel on the metro, minutes from the centre',
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
        name: 'Oslofjord sightseeing cruise',
        day: 2,
        optional: false,
        image: img('f3iby1jo3nxnky52cejucpk1qra4_ai-generated-boat-picture.jpg'),
        description: 'Two hours on the water past the islands, bathing spots and wooden summer houses of the inner fjord.'
      }
    ],
    program: {
      name: 'Oslo',
      description: 'Two nights to settle in, with a fjord cruise past the islands of the inner Oslofjord.',
      image: img('yegd14kes1i2oonnxhtvk4m2tsac_shutterstock_366817250.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Flåm',
    dayLabel: 'Day 3',
    images: [
      img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
      img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
      img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg'),
      img('5a74z8igkplq54pijog9od4hitlo_shutterstock_471957197.jpg')
    ],
    dayImages: {
      3: [
        img('k3qhbcc2ktvauckdox075g2210ta_shutterstock_1820239637.jpg'),
        img('wawcwv7kld16rntfmh54tenj0abn_14919849523_979d29842a_o.jpg'),
        img('yegd14kes1i2oonnxhtvk4m2tsac_shutterstock_366817250.jpg'),
        img('zbspcsgm6m5afsz8yhkvlgdblony_shutterstock_240355108.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Oslo to Flåm by rail`,
      'Breakfast and check out',
      'The Bergen line up to Myrdal across high country',
      'The Flåm Railway down to the fjord',
      'Overnight at the water\'s edge in Flåm'
    ],
    accommodation: {
      name: 'Hotel Flåmsbrygga, Flåm',
      description: '1 night · Breakfast · Standard room · 3★ · Waterside hotel at the head of the Aurlandsfjord',
      images: [
        img('iyh1lc2irufarp6gmcoc2weq86ga_shutterstock_1466538563.jpg'),
        img('24m3jp48sxnoevhpxrg9ewp0jpon_shutterstock_1935701701.jpg'),
        img('v71q4m37mnkimhl23eyqbqdo2anr_shutterstock_239548480.jpg'),
        img('ra6jtbfkh00e1myajlhlcnl5kapd_shutterstock_2229545815.jpg'),
        img('gvr8muuejsui3yn9dlaoj69s4oi0_shutterstock_503137030.jpg'),
        img('4uugxml99og6h1rtik27cpp2t0pl_shutterstock_707511163.jpg')
      ]
    },
    activities: [
      {
        name: 'Norway in a Nutshell: Flåm Railway',
        day: 3,
        optional: false,
        image: img('yegd14kes1i2oonnxhtvk4m2tsac_shutterstock_366817250.jpg'),
        description: 'One of the steepest standard-gauge railways in the world, 20 kilometres of tunnels, waterfalls and hairpin views down to the fjord.'
      }
    ],
    program: {
      name: 'Flåm',
      description: 'The classic Norway in a Nutshell day: the Bergen line to Myrdal, the Flåm Railway down the valley and a night at the fjord.',
      image: img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Bergen',
    dayLabel: 'Day 4 to 6',
    images: [
      img('4fbi1wm5uytipil11d9uswi7k8am_shutterstock_233931622.jpg'),
      img('mnb8s7zwq67gcscp9tu62mmfg49c_shutterstock_109937720.jpg'),
      img('wvmhfp7buu3v6f67733fws7bhdev_shutterstock_521834434.jpg'),
      img('cvvrdqfr9bgsc2pmeoqavabc2xfk_shutterstock_1008789172.jpg')
    ],
    dayImages: {
      4: [
        img('eivni45njlbhc04adal4oa2be99c_shutterstock_1216843078.jpg'),
        img('vkniweln6eyt4wqlxiaa0qqnobik_pexels-thor-olason-15979078.jpg'),
        img('xnphmm25poqphwqvjpvkvtyxtb6m_N%C3%A6r%C3%B8yfjord_-_The_world\'s_most_beautiful_fjord_(32060514105).jpg'),
        img('co7ei183ohij95h5rp6rc53yutja_shutterstock_674131036.jpg')
      ],
      5: [
        img('owtshdkbd6t9wha7l3yn9crntgu0_53070614364_110163e221_o.jpg'),
        img('xicrzehbrhczzewxyreqm1oftowd_1615629483_3078676816_c468718dd1_b.png'),
        img('4fbi1wm5uytipil11d9uswi7k8am_shutterstock_233931622.jpg'),
        img('mnb8s7zwq67gcscp9tu62mmfg49c_shutterstock_109937720.jpg')
      ],
      6: [
        img('wlf3spj8p97sqzf5qd6kqpnav6bx_1615638824_shutterstock_1542430940.jpg'),
        img('ltyq7ttwsnh3k6a0pu68fmfzx86x_1615639217_Rasmus_Meyers_samlinger_KODE3_art_museum_in_central_Bergen__Norway._Edvard_Munch_and_Norwegian_painting_exhibitions.png'),
        img('vko0d7xgxhn6v64u4d2thg5lttio_11.jpg'),
        img('4fbi1wm5uytipil11d9uswi7k8am_shutterstock_233931622.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Fjord crossing to Bergen`,
      'Breakfast, then the ferry down the Aurlandsfjord and Nærøyfjord',
      'Coach over the Stalheim hairpins to Voss',
      'Train on to Bergen and check in',
      `${DAY_MARK}Day 5 · A day in Bergen`,
      'Breakfast, then Bryggen and the fish market on foot',
      'Optional: the Fløibanen funicular for the city view',
      'The evening free in the old wharf quarter',
      `${DAY_MARK}Day 6 · Mostraumen fjord cruise`,
      'Breakfast, then boarding at the harbour',
      'Three hours up the Osterfjord to the rapids',
      'Afternoon and evening free in Bergen'
    ],
    accommodation: {
      name: 'Moxy Bergen, Bergen',
      description: '3 nights · Breakfast · Standard room · 3★ · Modern hotel close to the harbour and Bryggen',
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
        name: 'Nærøyfjord cruise and Stalheim road',
        day: 4,
        optional: false,
        image: img('f3iby1jo3nxnky52cejucpk1qra4_ai-generated-boat-picture.jpg'),
        description: 'Ferry through the narrowest UNESCO fjord in Norway, then the coach over the Stalheimskleiva hairpins to the Bergen train.'
      },
      {
        name: 'Mostraumen fjord cruise',
        day: 6,
        optional: false,
        image: img('f3iby1jo3nxnky52cejucpk1qra4_ai-generated-boat-picture.jpg'),
        description: 'Three hours from Bergen harbour up the Osterfjord to the tidal rapids at Mostraumen, close enough to the cliffs to fill a bottle from a waterfall.'
      }
    ],
    program: {
      name: 'Bergen',
      description: 'Three nights in the fjord capital: the Nærøyfjord crossing to get there, the Hanseatic wharf, and a cruise up the Osterfjord to the Mostraumen rapids.',
      image: img('4fbi1wm5uytipil11d9uswi7k8am_shutterstock_233931622.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Oslo',
    dayLabel: 'Day 7 to 8',
    images: [
      img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
      img('o3foa9gjr1pw0091p9hxdnzp9bdk_shutterstock_737227516.jpg'),
      img('lhrxnajg0bnweyzs1ec3ml0r5wrd_shutterstock_205089337.jpg'),
      img('yw3zpcri0kcqrog688ilmp09em92_shutterstock_205982242.jpg')
    ],
    dayImages: {
      7: [
        img('puvtd81b3numvar055ya45fh2jhp_1615625916_shutterstock_1920550193.jpg'),
        img('yyrzcejup9dsb5e5ewp3et678quh_1615626124_shutterstock_1533481532.jpg'),
        img('yegd14kes1i2oonnxhtvk4m2tsac_shutterstock_366817250.jpg'),
        img('zbspcsgm6m5afsz8yhkvlgdblony_shutterstock_240355108.jpg')
      ],
      8: [
        img('yegd14kes1i2oonnxhtvk4m2tsac_shutterstock_366817250.jpg'),
        img('zbspcsgm6m5afsz8yhkvlgdblony_shutterstock_240355108.jpg'),
        img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg'),
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Back to Oslo`,
      'Breakfast and check out',
      'The Bergen line across the Hardangervidda plateau',
      'Arrival in Oslo and a free evening',
      `${DAY_MARK}Day 8 · Departure from Oslo`,
      'Breakfast at the hotel and check out',
      'Transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Radisson Blu Park, Oslo, Oslo',
      description: '1 night · Breakfast · Standard room · 3★ · Comfortable hotel on the airport side of the city',
      images: [
        img('stgbeuwqnrrnjj6zf2jd7gnezf1b_download%20(21).jpg'),
        img('pgdc5ktgfv0vmh2tiva72dvx8t3u_232801040.jpg'),
        img('jcrdgzc2se5rw6gog6pnc9ij13yp_download%20(13).jpg'),
        img('fzlr6pah5e4ul74ny9ov4m6ag6v4_download%20(15).jpg'),
        img('mlxh0bg8jhpbqtagykqi6953ka7p_download%20(16).jpg'),
        img('b248c5nf91kvsmfv4i5oct4osizs_download%20(2).jpg'),
        img('tqt78ktq85iv7ujwv2bs56xkiv47_download%20(8).jpg'),
        img('gmj082nz4hvm42g931fl53cu3bml_download%20(7).jpg'),
        img('5zl5pw287plcc4rckazliafl9wvg_download%20(5).jpg'),
        img('clv1597iv93nf981dvi7lwsura1r_download%20(9).jpg'),
        img('37l6jetomwaztu0zsrvr740hldux_download%20(20).jpg'),
        img('iatgcdl9dpjjnkscoymakzvidp0q_download%20(3).jpg'),
        img('8xs57sr7izme518jxls0a94chxp3_76dc4f40_z.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Oslo',
      description: 'The Bergen line back across the Hardangervidda plateau and a last evening in the capital.',
      image: img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-norway-oslo-flam-and-bergen',
  ctaHref: '/l/norway/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Norway: Oslo, Flåm and Bergen',
  alt: 'The Aurlandsfjord seen from the Flåm valley on a clear summer morning',
  days: '8 days / 7 nights',
  stations: '4 stops',
  transport: 'Airport transfers, the Norway in a Nutshell rail and fjord route, and the Bergen line back to Oslo',
  tag: 'Nature',
  tags: ['Nature', 'Nature'],
  price: 169955,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Oslo', 'Flåm', 'Bergen', 'Oslo'],
  stats: { days: 8, cities: 3, hotels: 4, activities: 4, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
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
  short: 'Eight days through the best of southern Norway: Oslo and its fjord, the Flåm Railway and Nærøyfjord on the Norway in a Nutshell route, three nights in Bergen with a cruise to the Mostraumen rapids, and the Bergen line back.',
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
    { title: 'Day 1: Arrival in Oslo (Arrival)', text: 'Arrival at the airport and private transfer to your hotel\nCheck in and the rest of the day at leisure\nOptional: an evening stroll along the Aker Brygge waterfront', hotel: 'Scandic Helsfyr, Oslo', highlights: ['Arrival at the airport and private transfer to your hotel', 'Check in and the rest of the day at leisure', 'Optional: an evening stroll along the Aker Brygge waterfront'] },
    { title: 'Day 2: Oslofjord cruise (B)', text: 'Breakfast, then down to the pier at City Hall\nTwo hours on the inner Oslofjord by boat\nThe afternoon free for the Opera House roof or Vigeland Park', hotel: 'Scandic Helsfyr, Oslo', highlights: ['Breakfast, then down to the pier at City Hall', 'Two hours on the inner Oslofjord by boat', 'The afternoon free for the Opera House roof or Vigeland Park'] },
    { title: 'Day 3: Oslo to Flåm by rail (B)', text: 'Breakfast and check out\nThe Bergen line up to Myrdal across high country\nThe Flåm Railway down to the fjord\nOvernight at the water\'s edge in Flåm', hotel: 'Hotel Flåmsbrygga', highlights: ['Breakfast and check out', 'The Bergen line up to Myrdal across high country', 'The Flåm Railway down to the fjord'] },
    { title: 'Day 4: Fjord crossing to Bergen (B)', text: 'Breakfast, then the ferry down the Aurlandsfjord and Nærøyfjord\nCoach over the Stalheim hairpins to Voss\nTrain on to Bergen and check in', hotel: 'Moxy Bergen', highlights: ['Breakfast, then the ferry down the Aurlandsfjord and Nærøyfjord', 'Coach over the Stalheim hairpins to Voss', 'Train on to Bergen and check in'] },
    { title: 'Day 5: A day in Bergen (B)', text: 'Breakfast, then Bryggen and the fish market on foot\nOptional: the Fløibanen funicular for the city view\nThe evening free in the old wharf quarter', hotel: 'Moxy Bergen', highlights: ['Breakfast, then Bryggen and the fish market on foot', 'Optional: the Fløibanen funicular for the city view', 'The evening free in the old wharf quarter'] },
    { title: 'Day 6: Mostraumen fjord cruise (B)', text: 'Breakfast, then boarding at the harbour\nThree hours up the Osterfjord to the rapids\nAfternoon and evening free in Bergen', hotel: 'Moxy Bergen', highlights: ['Breakfast, then boarding at the harbour', 'Three hours up the Osterfjord to the rapids', 'Afternoon and evening free in Bergen'] },
    { title: 'Day 7: Back to Oslo (B)', text: 'Breakfast and check out\nThe Bergen line across the Hardangervidda plateau\nArrival in Oslo and a free evening', hotel: 'Radisson Blu Park, Oslo', highlights: ['Breakfast and check out', 'The Bergen line across the Hardangervidda plateau', 'Arrival in Oslo and a free evening'] },
    { title: 'Day 8: Departure from Oslo (B)', text: 'Breakfast at the hotel and check out\nTransfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are quoted as a class and named on confirmation.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: 'Norway', href: '/europe/norway' },
  { label: detail.title }
];

export const bestOfScandinavianNorwayFjordsBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfScandinavianNorwayFjordsProduct = {
  slug: detail.slug,
  places: ['Oslo', 'Flåm', 'Bergen'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 4,
  hotels: 4,
  cities: 3,
  activities: 4,
  transfers: 6,
  meals: 7,
  price: detail.price,
  images: cardImages
};
