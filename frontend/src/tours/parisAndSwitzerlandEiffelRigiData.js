// Paris and Switzerland: Eiffel Tower to Mount Rigi. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5zrbpf5moybkzsdm8hanptc529gr_shutterstock_645464011.jpg'),
  img('alfkc4hb70jq7shtbqthw2o9pmc0_shutterstock_401739034.jpg'),
  img('y6r06603xrpbzjjxc9qqowbw29dl_shutterstock_1360097162.jpg'),
  img('xfuiitkg4vdz65jxr8124sagsdri_shutterstock_397741987.jpg'),
  img('82ldbs1rvq2fsu8blwnsmb12c2wi_pexels-pixabay-2363.jpg'),
  img('i628pp9teqrmo7okg9ef6ggih20a_shutterstock_1549086965.jpg'),
  img('jowwugrwchukijkhoi92fxlock6v_paris%209.png'),
  img('0esaau9c42a5ieu7nt4vfdceodcl_shutterstock_1589326495.jpg'),
  img('pjpqez6ayz0v12cm8okovune3z6h_shutterstock_752243998.jpg'),
  img('r4gfedmyz0gc4egr30toe7wl0nzz_shutterstock_1549086965.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('5zrbpf5moybkzsdm8hanptc529gr_shutterstock_645464011.jpg'),
  img('alfkc4hb70jq7shtbqthw2o9pmc0_shutterstock_401739034.jpg'),
  img('y6r06603xrpbzjjxc9qqowbw29dl_shutterstock_1360097162.jpg'),
  img('82ldbs1rvq2fsu8blwnsmb12c2wi_pexels-pixabay-2363.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Paris',
    dayLabel: 'Day 1 to 3',
    images: [
      img('5zrbpf5moybkzsdm8hanptc529gr_shutterstock_645464011.jpg'),
      img('ljguj1uubhgdctkpq61zhcivvm88_shutterstock_2358990187.jpg'),
      img('7ilxnqq6hu40qa37mum986ifakhl_shutterstock_662979433.jpg'),
      img('y6r06603xrpbzjjxc9qqowbw29dl_shutterstock_1360097162.jpg')
    ],
    dayImages: {
      1: [
        img('rtv8e2a1qpn7t8gf08b643paw4k9_1580118319_shutterstock_1305281371.jpg'),
        img('vffjbxcqtn8dhsty3f5f4opiq4qh_RueMontorgueil.jpg'),
        img('5zrbpf5moybkzsdm8hanptc529gr_shutterstock_645464011.jpg'),
        img('ljguj1uubhgdctkpq61zhcivvm88_shutterstock_2358990187.jpg')
      ],
      2: [
        img('5x0nocvim4zples9qh1rq1jzi3cy_dl.beatsnoop.com-low-cB6rW3ujbO.jpg'),
        img('lc33ulpdgvncvd8yhwhvvvrnfbto_1578122397_shutterstock_696733216.jpg'),
        img('i2pzkrvvuxv9tbvvat8eqqc732l5_1579267406_shutterstock_354290552.jpg'),
        img('q2rovwxnk1eum333pwz6l3dif4ch_1579503640_34355430420_146f894638_k.jpg')
      ],
      3: [
        img('tfb0ska2kglpj0826rq9dtlchtvm_download.jpg'),
        img('5zrbpf5moybkzsdm8hanptc529gr_shutterstock_645464011.jpg'),
        img('ljguj1uubhgdctkpq61zhcivvm88_shutterstock_2358990187.jpg'),
        img('7ilxnqq6hu40qa37mum986ifakhl_shutterstock_662979433.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Paris`,
      'Arrival at Beauvais or Charles de Gaulle and transfer to your hotel',
      'Check in on the Seine by the Bir Hakeim bridge',
      'The rest of the day free',
      'Optional: an evening in Montmartre',
      `${DAY_MARK}Day 2 · Paris by bus and the Eiffel Tower`,
      'Breakfast, then out onto the open top bus',
      'The Louvre, the Arc de Triomphe and Notre Dame',
      'Up the Eiffel Tower to the second floor by stairs',
      'Skip the line tickets, so no queue at the base',
      `${DAY_MARK}Day 3 · A free day for Disneyland`,
      'Breakfast, then the day at leisure',
      'Optional: a full day at Disneyland Paris',
      'Optional: the Musee d\'Orsay and the Latin Quarter',
      'Optional: a Seine cruise after dark'
    ],
    accommodation: {
      name: 'Hotel Eiffel Seine, Paris',
      description: '3 nights · Breakfast · Standard room · 3★ · Art nouveau hotel on the Seine beside the Bir Hakeim bridge',
      images: [
        img('j715mc9std0pxf2njk7ex632bq41_download.jpg'),
        img('2gzynnhm1n1zy8ritf9tf93cjxco_download%20(4).jpg'),
        img('qb1blk25s3tr7h59w2vxvyo3twzk_download%20(7).jpg'),
        img('y9rspa8i09b8p7hskynfncikojdu_download%20(13).jpg'),
        img('cl9v9hz3g5dext8bug6u6l1ll0rg_download%20(12).jpg'),
        img('qejd5k7yupumif0kopz98vcwtg1c_download%20(14).jpg'),
        img('0n7yn7kebkaopj0qkl43wjyxcszz_download%20(10).jpg'),
        img('evi98vw960cuxcf1kd4fioi2ojuc_download%20(16).jpg'),
        img('6c4m3cq3x0almb2suzklg8j7i5kf_download%20(9).jpg'),
        img('hrr11dqiehw1g9eve7ei5gwejpuc_download%20(6).jpg'),
        img('x4x0b3dvczwj23lfgzp6e0kkbjnc_download%20(2).jpg'),
        img('1ffaonzhwv7s9vjh13oj8nlx5b1f_download%20(1).jpg'),
        img('6ltfhkvl1z1lsywe2mkleurh96eo_download%20(3).jpg'),
        img('43z072e3v30w8q6m3j4ja9maph4k_download%20(5).jpg')
      ]
    },
    activities: [
      {
        name: 'Paris hop on hop off bus tour',
        day: 2,
        optional: false,
        image: img('5x0nocvim4zples9qh1rq1jzi3cy_dl.beatsnoop.com-low-cB6rW3ujbO.jpg'),
        description: 'A 24 hour open top ticket past the Louvre, the Arc de Triomphe, Notre Dame and the Champs Elysees, hopping off where you like.'
      },
      {
        name: 'Eiffel Tower second floor tickets',
        day: 2,
        optional: false,
        image: img('dupbsne3tmcyr5bwhewgespu4z9s_xvue2g6ekant9hcdo6e41zt9ewvi_shutterstock_710380270.jpg'),
        description: 'Skip the line admission to the second floor by the stairs, the level where the ironwork and the city both read best.'
      },
      {
        name: 'Disneyland Paris',
        day: 3,
        optional: true,
        image: img('tfb0ska2kglpj0826rq9dtlchtvm_download.jpg'),
        description: 'An optional full day at Disneyland Paris, forty minutes east of the city on the RER, bookable with us before you travel.'
      }
    ],
    program: {
      name: 'Paris',
      description: 'Three nights on the Seine by the Eiffel Tower, with an open top bus pass, the second floor by stairs and a free day for Disneyland.',
      image: img('5zrbpf5moybkzsdm8hanptc529gr_shutterstock_645464011.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Zurich',
    subtitle: 'Zurich → Mount Rigi and the Rhine Falls',
    dayLabel: 'Day 4 to 7',
    images: [
      img('amha7yx6cx138beg78ea0u73pubf_shutterstock_1024092049.jpg'),
      img('alfkc4hb70jq7shtbqthw2o9pmc0_shutterstock_401739034.jpg'),
      img('8i8r9lruzm3xg4j4ytf0vval4pcj_shutterstock_1383283745.jpg'),
      img('r4gfedmyz0gc4egr30toe7wl0nzz_shutterstock_1549086965.jpg')
    ],
    dayImages: {
      4: [
        img('wj52atsuiwrxn190lslktf4r3q9f_shutterstock_2393185093.jpg'),
        img('4ld8sp7qqugg7o0ko86av1jknfjt_1583567787_fi.jpg'),
        img('oxv2s2qobmxwr67uzopzyuexlsxx_1580110071_shutterstock_397993882.jpg'),
        img('amha7yx6cx138beg78ea0u73pubf_shutterstock_1024092049.jpg')
      ],
      5: [
        img('4nh1v20qjjzg4zrlkk4j6dxq1hcv_shutterstock_1079671718.jpg'),
        img('6ynz5pgxj7bonor9a0epeuh4nhnf_1584175736_fi.jpg'),
        img('425eo3h7mrf7b7070b7oxj3fg35x_1586415392_alps-3066071.jpg'),
        img('n4anxbnurueree41jjrq6z3bvi2t_mn1a7sb2713s20f1hkmiup2rtr9n_shutterstock_443039779.jpg')
      ],
      6: [
        img('v835zge734guwtx735710oq6ma60_7xm.xyz102722.jpg'),
        img('fhlr2n7beypxpizy3ugwp0w37qdl_1583570615_fi.jpg'),
        img('ietwn6qrvwl3qg81ib7gsl4hkri0_1579690346_shutterstock_44675536.jpg'),
        img('e16q2yeyoskk4iyb3vrcb0dqoj3a_1580119277_shutterstock_1480532873.jpg')
      ],
      7: [
        img('amha7yx6cx138beg78ea0u73pubf_shutterstock_1024092049.jpg'),
        img('alfkc4hb70jq7shtbqthw2o9pmc0_shutterstock_401739034.jpg'),
        img('8i8r9lruzm3xg4j4ytf0vval4pcj_shutterstock_1383283745.jpg'),
        img('r4gfedmyz0gc4egr30toe7wl0nzz_shutterstock_1549086965.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Zurich`,
      'Breakfast and check out of your Paris hotel',
      'Station transfer and the train east to Zurich',
      'Your four day Swiss Travel Pass starts today',
      'Check in at Zurich with the evening free',
      `${DAY_MARK}Day 5 · Mount Rigi and Lake Lucerne`,
      'Breakfast, then south towards Lake Lucerne',
      'The cogwheel railway up Mount Rigi',
      'A boat across the lake on the way back',
      'The Chapel Bridge and the old town at Lucerne',
      `${DAY_MARK}Day 6 · The Rhine Falls by boat`,
      'Breakfast, then north to Schaffhausen',
      'The boat run out to the rock in the falls',
      'The largest waterfall in Europe at close range',
      'The afternoon free along the Bahnhofstrasse',
      `${DAY_MARK}Day 7 · Departure from Zurich`,
      'Breakfast at the hotel and check out',
      'Private transfer to Zurich airport for your flight home'
    ],
    accommodation: {
      name: 'ibis Zurich City West, Zurich',
      description: '3 nights · Breakfast · Standard room · 3★ · Straightforward hotel in the Zurich West quarter by the rail viaduct',
      images: [
        img('g9ovedb7r5zz68eh1c05nfyzi2zu_download%20(1).jpg'),
        img('ep2widd09ev3h6gkum1yokp5nizl_download%20(3).jpg'),
        img('ble8fvbjnldfue81ffqmj1u7466b_download%20(5).jpg'),
        img('8olyouxkegatw1n6lnm02eukzbdd_download%20(7).jpg'),
        img('kpp1eb8rdv1xbl3v6snrln1u2he8_download%20(8).jpg'),
        img('yfomok5x1vikyw2d5ilwxt99cpzb_download%20(10).jpg'),
        img('6et9zlusb64r6vodvmjm4ivbwdkc_625f8014172411eab1c20242ac110003.jpg'),
        img('0mucqmaqg1k5qumxhn12ue8i8zd1_download%20(4).jpg'),
        img('j7vbtk0ib5cm29vz7bqeio3dxuab_524895b271e511ec86790a58a9feac02.jpg'),
        img('yvf13vm86oxibhl02iargmhr22l3_download%20(12).jpg'),
        img('khie12dn7vei7gh0lv6dzynlst1q_download%20(11).jpg'),
        img('ckz38e2lzycjsmvs7uzusd75qcfv_download%20(13).jpg'),
        img('10zzoukb0fn5cmpsx5vmpnp162h0_download%20(2).jpg')
      ]
    },
    activities: [
      {
        name: 'Swiss Travel Pass, four days',
        day: 4,
        optional: false,
        image: img('wj52atsuiwrxn190lslktf4r3q9f_shutterstock_2393185093.jpg'),
        description: 'Four days of unlimited second class travel on Swiss trains, buses and lake boats, with free entry to most museums.'
      },
      {
        name: 'Mount Rigi and Lucerne with a lake cruise',
        day: 5,
        optional: false,
        image: img('4nh1v20qjjzg4zrlkk4j6dxq1hcv_shutterstock_1079671718.jpg'),
        description: 'The cogwheel railway up the Queen of the Mountains, then a boat across Lake Lucerne and the Chapel Bridge in the old town.'
      },
      {
        name: 'Rhine Falls boat tour',
        day: 6,
        optional: false,
        image: img('v835zge734guwtx735710oq6ma60_7xm.xyz102722.jpg'),
        description: 'A fifteen minute boat run to the rock in the middle of the largest waterfall in Europe, close enough to get wet.'
      }
    ],
    program: {
      name: 'Zurich',
      description: 'Three nights in Switzerland with a four day travel pass, Mount Rigi and Lake Lucerne, and the Rhine Falls by boat.',
      image: img('amha7yx6cx138beg78ea0u73pubf_shutterstock_1024092049.jpg')
    }
  }
];

const detail = {
  slug: 'paris-and-switzerland-eiffel-tower-to-mount-rigi',
  ctaHref: '/l/europe/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Paris and Switzerland: Eiffel Tower to Mount Rigi',
  alt: 'The Eiffel Tower seen across the Seine at dusk',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private airport transfers, rail to Zurich and a Swiss Travel Pass',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Multi-country'],
  price: 208525,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Paris', 'Zurich', 'Lucerne'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 5, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Sharon',
    image: '/experts/sharon.webp',
    role: 'Europe expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three nights in Paris and three in Switzerland, with a hotel on the Seine looking at the Eiffel Tower. It is the honeymoon shape couples ask for most.',
    quoteMore: 'Take the second floor by the stairs rather than queueing for the summit lift. You get closer to the ironwork and you skip the longest queue in Paris.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days between Paris and the Swiss Alps: three nights on the Seine with an open top bus pass and the Eiffel Tower, then three nights in Zurich with a travel pass, Mount Rigi, Lake Lucerne and the Rhine Falls.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights in Paris and 3 nights in Zurich with breakfast; airport transfers; rail from Paris to Zurich; a 24 hour Paris hop on hop off bus ticket; skip the line Eiffel Tower second floor tickets; a four day Swiss Travel Pass; the Mount Rigi and Lucerne day trip with a lake cruise; a Rhine Falls boat tour.',
  intro2: 'Not included: international flights; Schengen visa fees; the optional Disneyland Paris day; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Paris (Arrival)', text: 'Arrival at Beauvais or Charles de Gaulle and transfer to your hotel\nCheck in on the Seine by the Bir Hakeim bridge\nThe rest of the day free\nOptional: an evening in Montmartre', hotel: 'Hotel Eiffel Seine', highlights: ['Arrival at Beauvais or Charles de Gaulle and transfer to your hotel', 'Check in on the Seine by the Bir Hakeim bridge', 'The rest of the day free'] },
    { title: 'Day 2: Paris by bus and the Eiffel Tower (B)', text: 'Breakfast, then out onto the open top bus\nThe Louvre, the Arc de Triomphe and Notre Dame\nUp the Eiffel Tower to the second floor by stairs\nSkip the line tickets, so no queue at the base', hotel: 'Hotel Eiffel Seine', highlights: ['Breakfast, then out onto the open top bus', 'The Louvre, the Arc de Triomphe and Notre Dame', 'Up the Eiffel Tower to the second floor by stairs'] },
    { title: 'Day 3: A free day for Disneyland (B)', text: 'Breakfast, then the day at leisure\nOptional: a full day at Disneyland Paris\nOptional: the Musee d\'Orsay and the Latin Quarter\nOptional: a Seine cruise after dark', hotel: 'Hotel Eiffel Seine', highlights: ['Breakfast, then the day at leisure', 'Optional: a full day at Disneyland Paris', 'Optional: the Musee d\'Orsay and the Latin Quarter'] },
    { title: 'Day 4: On to Zurich (B)', text: 'Breakfast and check out of your Paris hotel\nStation transfer and the train east to Zurich\nYour four day Swiss Travel Pass starts today\nCheck in at Zurich with the evening free', hotel: 'ibis Zurich City West', highlights: ['Breakfast and check out of your Paris hotel', 'Station transfer and the train east to Zurich', 'Your four day Swiss Travel Pass starts today'] },
    { title: 'Day 5: Mount Rigi and Lake Lucerne (B)', text: 'Breakfast, then south towards Lake Lucerne\nThe cogwheel railway up Mount Rigi\nA boat across the lake on the way back\nThe Chapel Bridge and the old town at Lucerne', hotel: 'ibis Zurich City West', highlights: ['Breakfast, then south towards Lake Lucerne', 'The cogwheel railway up Mount Rigi', 'A boat across the lake on the way back'] },
    { title: 'Day 6: The Rhine Falls by boat (B)', text: 'Breakfast, then north to Schaffhausen\nThe boat run out to the rock in the falls\nThe largest waterfall in Europe at close range\nThe afternoon free along the Bahnhofstrasse', hotel: 'ibis Zurich City West', highlights: ['Breakfast, then north to Schaffhausen', 'The boat run out to the rock in the falls', 'The largest waterfall in Europe at close range'] },
    { title: 'Day 7: Departure from Zurich (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Zurich airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Zurich airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; the optional Disneyland Paris day; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Europe', href: '/europa' },
  { label: detail.title }
];

export const parisAndSwitzerlandEiffelRigiBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const parisAndSwitzerlandEiffelRigiProduct = {
  slug: detail.slug,
  places: ['Paris', 'Zurich', 'Lucerne'],
  href: `/europa/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 5,
  transfers: 6,
  meals: 6,
  price: detail.price,
  images: cardImages
};
