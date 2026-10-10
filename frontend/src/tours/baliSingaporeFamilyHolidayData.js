// Bali and Singapore Family Holiday. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg'),
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('4gp8m32efnb38q8qauueycr9ylza_shutterstock_561308047.jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('uj4mfpnza7hzznm3ek5wzhawzdyl_shutterstock_1093285319.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Kuta',
    subtitle: 'Kuta to Kintamani and Tanjung Benoa',
    dayLabel: 'Day 1 to 3',
    images: [
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
      img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
    ],
    dayImages: {
      1: [
        img('yctqrmxzc6go7egpwpyz2ka9ua2f_maxresdefault.jpg'),
        img('51ipjklsbkrjnk7nmdfl5zq0cvfb_1580732870_shutterstock_491952556.jpg'),
        img('g72m3ehync8t6tn7yjyz5dm47mq1_1470898081_17_Years_of_Sekar_Jepun_2014-11-01_64_edit.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
      ],
      2: [
        img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg')
      ],
      3: [
        img('8fxiq3ylca4s23b30qr5g48e5cxf_Bali%20Cruise-3.jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
        img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Kuta`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your Kuta hotel near the beach',
      'Rest of the day free on the south coast',
      'Optional: Kuta beach, the art market or Waterbom park',
      `${DAY_MARK}Day 2 · Kintamani and the jungle swing`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'Tegenungan waterfall and the Tegalalang rice terraces',
      'A turn on the jungle swing above the valley',
      `${DAY_MARK}Day 3 · Water sports and pirate cruise`,
      'Breakfast, then a morning at Tanjung Benoa beach',
      'Banana boat, jet ski and parasailing with an instructor',
      'Evening pirate ship cruise with dinner and a deck show',
      'Back at the hotel late in the evening'
    ],
    accommodation: {
      name: 'Bliss Surfer Hotel, Kuta',
      description: '3 nights · Breakfast · Standard room · 3★ · Surf style hotel five minutes from Kuta beach',
      images: [
        img('fjsv6nb5db9144gg87q32urho5wa_484740773.jpg'),
        img('pwg81jxqrv1u4naeo4ukf4h1b18h_download%20-%202025-03-03T172949.032.jfif'),
        img('xpggn7bvlfos7midh1bqvhhobd8p_170823083.jpg'),
        img('3yvmr2cq9c7ddz98k85c0p6pk6l3_52479662.jpg'),
        img('2j1lw6s5n4tx4uq4v6z63lmyip7p_484740786.jpg'),
        img('y6y9gu3nob6y276srlaotcye9kok_7782339.jpg'),
        img('bj7h0oxhewoic375hfawboe671ut_download%20-%202025-03-03T172757.318.jfif'),
        img('xqgpnyinu1agtvzreapofm1imsm4_231315479.jpg'),
        img('mrc4g8m73ym0f7vawmwm1l3h9nie_47670873.jpg'),
        img('x7clnbk1yamdlxxtxe8t1q61lae2_download%20-%202025-03-03T172743.053.jfif'),
        img('f3hml59i887d1i36am508d4o3y6y_download%20-%202025-03-03T172816.619.jfif'),
        img('689y3p9kidm5qpyevoee55fgecif_download%20-%202025-03-03T172835.646.jfif')
      ]
    },
    activities: [
      {
        name: 'Kintamani with the jungle swing',
        day: 2,
        optional: false,
        image: img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        description: 'Coffee plantation tasting on the climb to Kintamani, the crater lake view, Tegenungan waterfall, the Tegalalang terraces and the jungle swing.'
      },
      {
        name: 'Water sports with the pirate dinner cruise',
        day: 3,
        optional: false,
        image: img('8fxiq3ylca4s23b30qr5g48e5cxf_Bali%20Cruise-3.jpg'),
        description: 'Banana boat, jet ski and parasailing at Tanjung Benoa by day, then the pirate ship cruise in the evening with dinner and a deck show.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights in Bali to open the holiday, with a coffee plantation day up to Kintamani and a pirate ship dinner cruise the children will remember.',
      image: img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Singapore',
    subtitle: 'Singapore to Sentosa',
    dayLabel: 'Day 4 to 7',
    images: [
      img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg'),
      img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
      img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg'),
      img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg')
    ],
    dayImages: {
      4: [
        img('e52piprgl0lrcqemw5akip2xz42c_1567165476_ArtScience_Museum_Singapore.jpg'),
        img('1xxvn2mb6zd0w1fnc5ndqjdqo4dn_1565771897_shutterstock_357485156.jpg'),
        img('onfdixnhvhbazh74d3es981iicfs_me4sfbn8ja5fwit5v28md0gz6b4m_561d22b4-9a93-4d51-9b52-cb6969165980.jpg'),
        img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg')
      ],
      5: [
        img('durtbjf99crlygjse28sv48r10xs_shutterstock_1319645060.jpg'),
        img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
        img('etwjtvxjtctcyj8zmdmmtz5rnff7_1563607619_shutterstock_1155676858.jpg'),
        img('xkc5gws4qd4uax4hvxwihi35fv35_1563619864_shutterstock_793620280.jpg')
      ],
      6: [
        img('esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.jpg'),
        img('5ny753dccex42fsfmdxfhlzlfvah_1626351333_shutterstock_302633321.jpg'),
        img('f751xnev26aqrj2mi5fqifb4c5u0_shutterstock_695806240.jpg'),
        img('xn9lk9obgfdswzotjh90r8e0ckq5_1563611407_WATERPARK.jpg')
      ],
      7: [
        img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg'),
        img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
        img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg'),
        img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Singapore`,
      'Breakfast and check out, then private transfer to the airport',
      'Optional: flight from Denpasar to Singapore, which we can add',
      'Arrival at Changi and private transfer to your hotel',
      'Rest of the day free around Novena and Orchard Road',
      `${DAY_MARK}Day 5 · Singapore city tour`,
      'Breakfast, then a half day city tour with a guide',
      'Merlion Park, Marina Bay and the colonial quarter',
      'Chinatown lanes and the Sri Mariamman temple',
      'Optional: the Supertree light show at Gardens by the Bay',
      `${DAY_MARK}Day 6 · A day on Sentosa island`,
      'Breakfast, then across to Sentosa island',
      'Cable car sky pass over the harbour and the island',
      'Adventure Cove Waterpark for the rest of the day',
      'Wings of Time show on Siloso beach in the evening',
      `${DAY_MARK}Day 7 · Departure from Singapore`,
      'Breakfast at the hotel and check out',
      'Private transfer to Changi Airport for your flight home'
    ],
    accommodation: {
      name: 'ibis Singapore Novena, Singapore',
      description: '3 nights · Breakfast · Standard room · 3★ · Novena hotel one stop from Orchard Road on the metro',
      images: [
        img('d6klr7rae9mjjgqcyxptmvn8tba6_af67747a663f11e98b080242ac110008.png'),
        img('csfhgzj0hntodxb28qvgv965a24s_image_15.jpg'),
        img('8wl2g0cn2jx6h6ep0d4ru0betg4q_image_33.jpg'),
        img('kbp95nbgqxqinqjf05c2quuks1rz_image_3.jpg'),
        img('78572o6iiligczcwpf53m4rato6x_image_11.jpg'),
        img('arrzsh0apjh20wt83nd79jg94ago_image_25.jpg'),
        img('v5x55fh59onfprpxfidpel6m2u5z_image_30.jpg'),
        img('s6d2ibuhqldpzqygmojundstvj55_image_14.jpg'),
        img('oe2wlghbavuqtc5906tj65b7ajbt_image_42.jpg'),
        img('ob6cy8m0thir3bf3ys1oex0ehuks_image_20.jpg'),
        img('8i4sw4hxrsdydys98tihj4v2dmec_image_34.jpg'),
        img('3i7y1l1kck4i8qdwg3wetpdoefoo_image_24.jpg'),
        img('l2gou2c96m46k1eilwvcc5oakkpo_image_8.jpg'),
        img('hcqm47q3u6l1nhhf7e6bm7x36xn4_image_29.jpg')
      ]
    },
    activities: [
      {
        name: 'Singapore city tour',
        day: 5,
        optional: false,
        image: img('durtbjf99crlygjse28sv48r10xs_shutterstock_1319645060.jpg'),
        description: 'A half day tour past Merlion Park, the Marina Bay waterfront, Chinatown and the colonial quarter, with a guide on a shared coach.'
      },
      {
        name: 'Sentosa cable car sky pass',
        day: 6,
        optional: false,
        image: img('esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.jpg'),
        description: 'Two cable car lines over the harbour and across Sentosa, the easiest way to see the island and the port from above.'
      },
      {
        name: 'Adventure Cove Waterpark',
        day: 6,
        optional: false,
        image: img('f751xnev26aqrj2mi5fqifb4c5u0_shutterstock_695806240.jpg'),
        description: 'Six water slides, a lazy river and a reef you can snorkel, the best Sentosa attraction for families with younger children.'
      },
      {
        name: 'Wings of Time show',
        day: 6,
        optional: false,
        image: img('oupzh98wmtqh6wxe78yiqb4zxl5m_0ca197e1dfdbb75f593c55c41834fbe7-4.jpg'),
        description: 'An evening show on Siloso beach with water jets, lasers and fire, staged over the sea at the end of your Sentosa day.'
      }
    ],
    program: {
      name: 'Singapore',
      description: 'Three nights in the city with a guided city tour and a full Sentosa day of cable cars, the water park and the Wings of Time show.',
      image: img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg')
    }
  }
];

const detail = {
  slug: 'bali-and-singapore-family-holiday',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bali and Singapore Family Holiday',
  alt: 'Sentosa island cable car above the water in Singapore',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private transfers, city tours and guided day tours',
  tag: 'Family',
  tags: ['Family', 'Beach'],
  price: 29525,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kuta', 'Kintamani', 'Tanjung Benoa', 'Singapore', 'Sentosa'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 6, transfers: 15 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['15 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Bali for the sea and the swing, Singapore for Sentosa. Two countries, six nights, and children who never get bored.',
    quoteMore: 'Keep the Sentosa day for last, children sleep on the flight home afterwards. Book Adventure Cove for the morning when the slides are quiet and carry a change of clothes for the Wings of Time show.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days across two countries for families: three nights in Bali with Kintamani, the jungle swing, water sports and a pirate ship dinner cruise, then three in Singapore with a city tour and a full Sentosa day.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with daily breakfast; private airport and city transfers; Kintamani and jungle swing tour; water sports with the pirate dinner cruise; Singapore city tour; Sentosa cable car sky pass; Adventure Cove Waterpark; Wings of Time show.',
  intro2: 'Not included: international flights; the Denpasar to Singapore flight, which we can add; visa fees; lunches and other dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Kuta (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Kuta hotel near the beach\nRest of the day free on the south coast\nOptional: Kuta beach, the art market or Waterbom park', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Kuta hotel near the beach', 'Rest of the day free on the south coast'] },
    { title: 'Day 2: Kintamani and the jungle swing (B)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nTegenungan waterfall and the Tegalalang rice terraces\nA turn on the jungle swing above the valley', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'Tegenungan waterfall and the Tegalalang rice terraces'] },
    { title: 'Day 3: Water sports and pirate cruise (B, D)', text: 'Breakfast, then a morning at Tanjung Benoa beach\nBanana boat, jet ski and parasailing with an instructor\nEvening pirate ship cruise with dinner and a deck show\nBack at the hotel late in the evening', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast, then a morning at Tanjung Benoa beach', 'Banana boat, jet ski and parasailing with an instructor', 'Evening pirate ship cruise with dinner and a deck show'] },
    { title: 'Day 4: On to Singapore (B)', text: 'Breakfast and check out, then private transfer to the airport\nOptional: flight from Denpasar to Singapore, which we can add\nArrival at Changi and private transfer to your hotel\nRest of the day free around Novena and Orchard Road', hotel: 'ibis Singapore Novena', highlights: ['Breakfast and check out, then private transfer to the airport', 'Optional: flight from Denpasar to Singapore, which we can add', 'Arrival at Changi and private transfer to your hotel'] },
    { title: 'Day 5: Singapore city tour (B)', text: 'Breakfast, then a half day city tour with a guide\nMerlion Park, Marina Bay and the colonial quarter\nChinatown lanes and the Sri Mariamman temple\nOptional: the Supertree light show at Gardens by the Bay', hotel: 'ibis Singapore Novena', highlights: ['Breakfast, then a half day city tour with a guide', 'Merlion Park, Marina Bay and the colonial quarter', 'Chinatown lanes and the Sri Mariamman temple'] },
    { title: 'Day 6: A day on Sentosa island (B)', text: 'Breakfast, then across to Sentosa island\nCable car sky pass over the harbour and the island\nAdventure Cove Waterpark for the rest of the day\nWings of Time show on Siloso beach in the evening', hotel: 'ibis Singapore Novena', highlights: ['Breakfast, then across to Sentosa island', 'Cable car sky pass over the harbour and the island', 'Adventure Cove Waterpark for the rest of the day'] },
    { title: 'Day 7: Departure from Singapore (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Changi Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Changi Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; the Denpasar to Singapore flight, which we can add; visa fees; lunches and other dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bali', href: '/asia/bali' },
  { label: detail.title }
];

export const baliSingaporeFamilyHolidayBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const baliSingaporeFamilyHolidayProduct = {
  slug: detail.slug,
  places: ['Kuta', 'Kintamani', 'Tanjung Benoa', 'Singapore', 'Sentosa'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 6,
  transfers: 15,
  meals: 7,
  price: detail.price,
  images: cardImages
};
