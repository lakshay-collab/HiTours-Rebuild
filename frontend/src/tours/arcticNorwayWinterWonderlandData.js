// Arctic Norway: Winter Wonderland. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('rz4x8v7oblsazavp8tqo5efnd7hp_datingjungle-HgTU3jLLTEQ-unsplash.jpg'),
  img('sudc12prterrovcrjg27tv5gy5mn_shutterstock_2028601880.jpg'),
  img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
  img('539enbqzal4gxczq7rbg8eeb5itg_shutterstock_1164761191.jpg'),
  img('cql5533d8ppr4p1jo9q5w6jree40_shutterstock_170015390.jpg'),
  img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
  img('4pthn8gtpula2brf76k7o77e4hni_shutterstock_1896884242.jpg'),
  img('kx6lrkb94jw3z8m73sgqgc4e840z_shutterstock_1647553903.jpg'),
  img('ja2q6wd8j469isi5hvjl8y84eksp_shutterstock_1741016771.jpg'),
  img('goinz4jex4jxhqh0sxbfcft2bih8_datingscout-eeWhQtyforU-unsplash.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('rz4x8v7oblsazavp8tqo5efnd7hp_datingjungle-HgTU3jLLTEQ-unsplash.jpg'),
  img('sudc12prterrovcrjg27tv5gy5mn_shutterstock_2028601880.jpg'),
  img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
  img('539enbqzal4gxczq7rbg8eeb5itg_shutterstock_1164761191.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tromsø',
    dayLabel: 'Day 1 to 2',
    images: [
      img('ko36enup2kh2d8cauac2dr0dvj1i_shutterstock_431863033.jpg'),
      img('vec81dow1m5qopippqlcszj0il52_shutterstock_1467574295.jpg'),
      img('cnzk7d2b297xbeyjmn5i3aa7n2hd_shutterstock_1919091629.jpg'),
      img('hakxmbcrfkyfjfmg63my1uxijekd_shutterstock_1317231539.jpg')
    ],
    dayImages: {
      1: [
        img('kz6yer72gemth2hyrpnlorph8md2_4346651065_743d4084e5_b.png'),
        img('s99dwaam8avv2mo61xmzbikfgenw_aatr.jpg'),
        img('ko36enup2kh2d8cauac2dr0dvj1i_shutterstock_431863033.jpg'),
        img('vec81dow1m5qopippqlcszj0il52_shutterstock_1467574295.jpg')
      ],
      2: [
        img('55ayomucbw7f10j7s1ap5htf4zic_Tromso%20Skyline.jpeg'),
        img('j3m9f0t76nmibdlhqcx1wq748g91_52808435505_9c7b5ea477_o.jpg'),
        img('d3im0p3790xxymdty9ioc19j88hr_53284162663_c39b320275_3k.jpg'),
        img('az6fhf3jpi4kk3upmzj7xe11tpgj_51274122741_3ee88c6e30_b.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Tromsø`,
      'Arrival at the airport and private transfer to your hotel',
      'Check in and the rest of the day at leisure',
      'Optional: a first look for the northern lights',
      `${DAY_MARK}Day 2 · Tromsø on foot`,
      'Breakfast, then a guided walk through the Arctic city',
      'The afternoon free for the Polar Museum',
      'Optional: an evening aurora chase'
    ],
    accommodation: {
      name: 'Scandic Grand Tromsø, Tromsø',
      description: '2 nights · Breakfast · Standard room · 3★ · Central hotel on the main street',
      images: [
        img('1qpx3waiza4it6ctgan43cbwumix_scandic-grand-tromso-exterior-11c84e17.webp'),
        img('m38mgydapr8dt6wldxubkhp7c9j7_485906848.jpg'),
        img('6i9gqyqry1jt118ksfhw617utbia_328712275.jpg'),
        img('b8rmdfauh1uvif26l7m1r7pvw7uz_328712349.jpg'),
        img('77su0vswawysbtmnz65ojeabkmr7_328712361.jpg'),
        img('qhcj9ltjf52p9uw2m94phd28t6h9_328712279.jpg'),
        img('2ulbdcax0p08lk93e0up792yvbhx_328712326.jpg'),
        img('e90qn0uo4jvax9tn2mspm8j4vwvf_328712331.jpg'),
        img('ogjc6m6eitn1l5oexmu6augogpvp_328712323.jpg'),
        img('e7dlt1j5pe4jya098243cu2qaaww_328712288.jpg'),
        img('0a9yjn2mf4n8udu1qd0ts3ra5gdy_295268969.jpg'),
        img('swjwy0a89hca9jcfl4x0cuoqeyhw_328712370.jpg'),
        img('3wocoj3py97osajrmbdpm2ojo0f3_aerfw.jpg'),
        img('u22amf5tr7epn2qcw1045i2y9v9j_328712285.jpg')
      ]
    },
    activities: [
      {
        name: 'Tromsø guided walking tour',
        day: 2,
        optional: false,
        image: img('qa1nn7jk0784fhzbggqysqsomn29_Advanced-Dog-Sledding-1_2024-06-06-131559_cikm.jpg'),
        description: 'The polar explorers, the wooden houses and the Arctic Cathedral across the bridge with a local guide.'
      },
      {
        name: 'Optional: northern lights chase',
        day: 2,
        optional: true,
        image: img('ko36enup2kh2d8cauac2dr0dvj1i_shutterstock_431863033.jpg'),
        description: 'An evening by minibus in search of clear skies and the aurora.'
      }
    ],
    program: {
      name: 'Tromsø',
      description: 'Two nights in the northern lights capital with a guided walk through its Arctic history.',
      image: img('ko36enup2kh2d8cauac2dr0dvj1i_shutterstock_431863033.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Havila voyage',
    dayLabel: 'Day 3 to 4',
    images: [
      img('rz4x8v7oblsazavp8tqo5efnd7hp_datingjungle-HgTU3jLLTEQ-unsplash.jpg'),
      img('goinz4jex4jxhqh0sxbfcft2bih8_datingscout-eeWhQtyforU-unsplash.jpg'),
      img('ytm1z2o9w6akffwqin8wfxkkhm0w_shutterstock_690901834.jpg'),
      img('4pthn8gtpula2brf76k7o77e4hni_shutterstock_1896884242.jpg')
    ],
    dayImages: {
      3: [
        img('qa1nn7jk0784fhzbggqysqsomn29_Advanced-Dog-Sledding-1_2024-06-06-131559_cikm.jpg'),
        img('2y6esw58pbw4edr4mpm2jtndh21q_image.jfif'),
        img('xe5m29ydtf6x1e90691c072cvdbx_Reindeer-sledding-by-Trym-Ivar-Bergsmo-Nordnorsk-Reiseliv.jpg'),
        img('sv2rak2l9yybufchjx604c48b4jf_hq720.jpg')
      ],
      4: [
        img('mhoo013klxbqee3siflw5yy10kdr_d08301a156e847319891a36f8c7fb3e1f3bf2aa2a6c9456aa0ece419be5bd0d3.jfif'),
        img('y7zh1vf70rjjbtw37s1hyea8szvg_9416fad6-6f34-42c1-be73-0d4bab1c7aa5.jpg'),
        img('445rtqwnj6pmjqn499glz0iutsal_skarv.jpg'),
        img('7a3d3ucbadorb8d5kmcnz4zzue45_Sami_200022.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Board the Havila ship`,
      'Breakfast and check out',
      'Boarding the coastal ship in the afternoon',
      'Dinner on board as the ship heads north',
      `${DAY_MARK}Day 4 · Hammerfest and the North Cape`,
      'Breakfast on board',
      'Calls at Hammerfest and Honningsvåg',
      'A second night at sea under the Arctic sky'
    ],
    accommodation: {
      name: 'Havila coastal ship, Hammerfest',
      description: '2 nights · Breakfast · Standard room · 3★ · Outside cabin on board',
      images: [
        img('dagrp211zac1tlz2me8mausd90yh_shutterstock_586569830.jpg'),
        img('e3ovt4pioeczfzvc6b548jiaonef_Aerial%20View%20of%20Tromso.jpg'),
        img('mnfde4a4j94e3lfmup6i648od4gg_ATV%20safari%20on%20Mager%C3%B8ya%20Island.jpeg'),
        img('hfxkv37jrvqe4u36xpj65bs16b85_North%20Cape.jpeg'),
        img('dajxorz42u0ynguus7kjosvhsrub_Reindeer%20Sledding.jpeg'),
        img('k2e54x9yplyu8vmhjoz0wsl5tl67_shutterstock_1565212888.jpg')
      ]
    },
    activities: [
      {
        name: 'Havila coastal voyage',
        day: 3,
        optional: false,
        image: img('rz4x8v7oblsazavp8tqo5efnd7hp_datingjungle-HgTU3jLLTEQ-unsplash.jpg'),
        description: 'The modern coastal express from Tromsø round the top of Norway, calling at Hammerfest, Honningsvåg and Vardø.'
      }
    ],
    program: {
      name: 'Havila voyage',
      description: 'Two nights at sea along the northernmost coast of Europe, past Hammerfest and the North Cape.',
      image: img('rz4x8v7oblsazavp8tqo5efnd7hp_datingjungle-HgTU3jLLTEQ-unsplash.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Kirkenes',
    dayLabel: 'Day 5',
    images: [
      img('q3feg6q2may9j2f128ep5wxb2xme_shutterstock_349428167.jpg'),
      img('sudc12prterrovcrjg27tv5gy5mn_shutterstock_2028601880.jpg'),
      img('kx6lrkb94jw3z8m73sgqgc4e840z_shutterstock_1647553903.jpg'),
      img('dal8wh48tqt6cahfsz2axeaw6dee_shutterstock_467190848.jpg')
    ],
    dayImages: {
      5: [
        img('g3460gl6vcd1tvxpnqobe0a75633_IMG_3647-2.jpg'),
        img('a7u86cmcpiiq7k7fgkke5h9glhve_vn_kongekrabbe_kirkenes_fredrikahlsen_maverixmedia_18_1__bb91c453-083b-4f31-b307-500c64c05ae9.jpg'),
        img('a0xd1xmjcud83vscx6d4fqaw6ibx_3_Fotokredit_Rune_Dahl_2033548990.jpg'),
        img('7cmfu5cnb22jtbcai84dz2okm79q_58.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Kirkenes`,
      'Breakfast on board and arrival in Kirkenes',
      'Transfer to your hotel',
      'Optional: the Snowhotel and its huskies'
    ],
    accommodation: {
      name: 'Scandic Kirkenes, Kirkenes',
      description: '1 night · Breakfast · Standard room · 3★ · Hotel by the Russian border town',
      images: [
        img('vlcpibqvfy7nt01jzmekvqeyvaty_Scandic-Kirkenes-Exterior004.png'),
        img('itths9x2wjetdhkic3aty2m2jlw9_download%20(7).jpg'),
        img('q5prg9th5zlcs7lrnfh2eo0f3dtj_download%20(9).jpg'),
        img('lmdf5eeo12mrupr5tzoxbcgpujdg_download%20(3).jpg'),
        img('i34btv7q8nfqyvtjgx2ewwdpkile_download%20(12).jpg'),
        img('uva084oq7dwbk543eih2ip9xxokp_download%20(6).jpg'),
        img('tb19hk6umngf2qhuwt1sjgd4j52n_download%20(2).jpg'),
        img('fkwc6fq3voxr3ba7u40j5d6tmetg_download%20(8).jpg'),
        img('8ufexf7pv6aowp0c6jf3odshhpyd_download%20(10).jpg'),
        img('cku1mnlach5vloqp4ezprlur9z31_download%20(11).jpg'),
        img('h2e0mvc5mlqkvme1xxxgj31x3zxg_download%20(4).jpg')
      ]
    },
    activities: [
      {
        name: 'Optional: Kirkenes Snowhotel visit',
        day: 5,
        optional: true,
        image: img('q3feg6q2may9j2f128ep5wxb2xme_shutterstock_349428167.jpg'),
        description: 'Ice sculptures, husky yard and reindeer at the famous snow hotel outside town.'
      }
    ],
    program: {
      name: 'Kirkenes',
      description: 'Disembark at the end of the line, close to the Russian border and the snow hotel.',
      image: img('q3feg6q2may9j2f128ep5wxb2xme_shutterstock_349428167.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Oslo',
    dayLabel: 'Day 6 to 8',
    images: [
      img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg'),
      img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
      img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
      img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg')
    ],
    dayImages: {
      6: [
        img('s23z05ki8tfd52pn7yfk81btjg4f_1615622683_shutterstock_553892116.jpg'),
        img('puvtd81b3numvar055ya45fh2jhp_1615625916_shutterstock_1920550193.jpg'),
        img('q3281bdv277u7xrjzpofdeds1xoo_1615624877_shutterstock_1447388720.jpg'),
        img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg')
      ],
      7: [
        img('r0r728i7zo6hmct92bzjd2cw1v8w_shutterstock_327735812.jpg'),
        img('61wk3nhmrcf1o09fvsrpxy4z1pqu_1615620954_shutterstock_327735812.jpg'),
        img('s23z05ki8tfd52pn7yfk81btjg4f_1615622683_shutterstock_553892116.jpg'),
        img('rc0nrq0sksn2frg5v908pxuind6i_1615622948_shutterstock_684917530.jpg')
      ],
      8: [
        img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg'),
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
        img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Fly to Oslo`,
      'Breakfast and transfer to the airport',
      'Flight south to Oslo and check in',
      'The evening free',
      `${DAY_MARK}Day 7 · Oslo sightseeing`,
      'Breakfast, then a guided tour of the capital',
      'Vigeland Park, Holmenkollen and the Opera House',
      `${DAY_MARK}Day 8 · Departure from Oslo`,
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
        name: 'Oslo sightseeing tour',
        day: 7,
        optional: false,
        image: img('r0r728i7zo6hmct92bzjd2cw1v8w_shutterstock_327735812.jpg'),
        description: 'Vigeland Park, the Holmenkollen ski jump, the Opera House and the harbour with a guide.'
      }
    ],
    program: {
      name: 'Oslo',
      description: 'Fly south for two nights and a guided sightseeing day in the capital.',
      image: img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg')
    }
  }
];

const detail = {
  slug: 'arctic-norway-winter-wonderland',
  ctaHref: '/l/norway/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Arctic Norway: Winter Wonderland',
  alt: 'A Havila coastal ship in a snowy harbour under the Arctic winter light',
  days: '8 days / 7 nights',
  stations: '4 stops',
  transport: 'Airport transfers, a two-night Havila coastal voyage from Tromsø to Kirkenes and a flight to Oslo',
  tag: 'Northern Lights',
  tags: ['Northern Lights', 'Nature', 'Winter'],
  price: 207812,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tromsø', 'Hammerfest', 'Kirkenes', 'Oslo'],
  stats: { days: 8, cities: 4, hotels: 4, activities: 5, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['11 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ingrid',
    image: '/experts/riya.webp',
    role: 'Norway expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'For the northern lights you need three things: darkness, a clear sky and patience. Tromsø gives you the first two; we build in the third.',
    quoteMore: 'Book the aurora chase for your first night in the north, not the last. If the sky stays cloudy, most operators let you join again free of charge.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight winter days in the far north: two nights in Tromsø, two nights on the Havila coastal ship round the top of Norway to Kirkenes, then two nights and a sightseeing day in Oslo.',
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
    { title: 'Day 1: Arrival in Tromsø (Arrival)', text: 'Arrival at the airport and private transfer to your hotel\nCheck in and the rest of the day at leisure\nOptional: a first look for the northern lights', hotel: 'Scandic Grand Tromsø', highlights: ['Arrival at the airport and private transfer to your hotel', 'Check in and the rest of the day at leisure', 'Optional: a first look for the northern lights'] },
    { title: 'Day 2: Tromsø on foot (B)', text: 'Breakfast, then a guided walk through the Arctic city\nThe afternoon free for the Polar Museum\nOptional: an evening aurora chase', hotel: 'Scandic Grand Tromsø', highlights: ['Breakfast, then a guided walk through the Arctic city', 'The afternoon free for the Polar Museum', 'Optional: an evening aurora chase'] },
    { title: 'Day 3: Board the Havila ship (B, D)', text: 'Breakfast and check out\nBoarding the coastal ship in the afternoon\nDinner on board as the ship heads north', hotel: 'Havila coastal ship', highlights: ['Breakfast and check out', 'Boarding the coastal ship in the afternoon', 'Dinner on board as the ship heads north'] },
    { title: 'Day 4: Hammerfest and the North Cape (B, L, D)', text: 'Breakfast on board\nCalls at Hammerfest and Honningsvåg\nA second night at sea under the Arctic sky', hotel: 'Havila coastal ship', highlights: ['Breakfast on board', 'Calls at Hammerfest and Honningsvåg', 'A second night at sea under the Arctic sky'] },
    { title: 'Day 5: Kirkenes (B)', text: 'Breakfast on board and arrival in Kirkenes\nTransfer to your hotel\nOptional: the Snowhotel and its huskies', hotel: 'Scandic Kirkenes', highlights: ['Breakfast on board and arrival in Kirkenes', 'Transfer to your hotel', 'Optional: the Snowhotel and its huskies'] },
    { title: 'Day 6: Fly to Oslo (B)', text: 'Breakfast and transfer to the airport\nFlight south to Oslo and check in\nThe evening free', hotel: 'Park Inn by Radisson Oslo', highlights: ['Breakfast and transfer to the airport', 'Flight south to Oslo and check in', 'The evening free'] },
    { title: 'Day 7: Oslo sightseeing (B)', text: 'Breakfast, then a guided tour of the capital\nVigeland Park, Holmenkollen and the Opera House', hotel: 'Park Inn by Radisson Oslo', highlights: ['Breakfast, then a guided tour of the capital', 'Vigeland Park, Holmenkollen and the Opera House'] },
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

export const arcticNorwayWinterWonderlandBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const arcticNorwayWinterWonderlandProduct = {
  slug: detail.slug,
  places: ['Tromsø', 'Hammerfest', 'Kirkenes', 'Oslo'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 5,
  transfers: 6,
  meals: 11,
  price: detail.price,
  images: cardImages
};
