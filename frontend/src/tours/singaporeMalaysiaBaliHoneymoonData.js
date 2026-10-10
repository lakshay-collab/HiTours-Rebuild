// Best of Singapore, Malaysia and Bali Honeymoon. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
  img('9b1aalk35m57qheq1e60bq1fzlec_shutterstock_614123699.jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('4gp8m32efnb38q8qauueycr9ylza_shutterstock_561308047.jpg'),
  img('1cq8i4ccjxzj2kcrf5n2lspi78ha_shutterstock_173996327%20(1).jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('5f3dno722k7csmmvpmfhq6v4ufbo_shutterstock_1402131020.jpg'),
  img('8npmp4jkvqvuucll4nlpxbbvvyhs_shutterstock_121740241.jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    subtitle: 'Singapore to Sentosa',
    dayLabel: 'Day 1 to 3',
    images: [
      img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
      img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
      img('sfw0sw4nhgzk0yegkil8jla98ydq_shutterstock_743903413.jpg'),
      img('3xb9b772fk8tq784ls9xw46bonlu_meric-dagli-RG7jGL8wkCs-unsplash.jpg')
    ],
    dayImages: {
      1: [
        img('we8ipbdppywm90csgjosarhe6gkf_87a2936a-5dec-41e1-8f16-8017a326a83c.jpg'),
        img('cgx6ab1cspd7wu0e04jze3dzbibk_singapore_night_safari.jpg'),
        img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
        img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg')
      ],
      2: [
        img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
        img('etwjtvxjtctcyj8zmdmmtz5rnff7_1563607619_shutterstock_1155676858.jpg'),
        img('xkc5gws4qd4uax4hvxwihi35fv35_1563619864_shutterstock_793620280.jpg')
      ],
      3: [
        img('d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.jpg'),
        img('s2r4nfl80qk64lm24j05vwdt984y_VIAL1673.JPG'),
        img('b2f7yhrl28ugizvfgwxmc40zmy3y_shutterstock_577392532.jpg'),
        img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and night safari`,
      'Arrival at Changi Airport and private transfer to your hotel',
      'Check in and freshen up near Bencoolen',
      'Evening tram ride at the Singapore Night Safari',
      'Dinner is included at the hotel tonight',
      `${DAY_MARK}Day 2 · Marina Bay and the Gardens`,
      'Breakfast, then a half day city tour with a guide',
      'Merlion Park, the colonial quarter and Chinatown',
      'The SkyPark deck above Marina Bay Sands',
      'Cloud Forest and Flower Dome at Gardens by the Bay',
      `${DAY_MARK}Day 3 · Universal Studios and the river`,
      'Breakfast, then across to Sentosa island',
      'Full day ticket for Universal Studios Singapore',
      'Coasters, themed zones and the street shows',
      'Evening bumboat cruise along the Singapore river'
    ],
    accommodation: {
      name: 'ibis Singapore on Bencoolen, Singapore',
      description: '3 nights · Breakfast and one main meal daily · Standard room · 3★ · Bencoolen hotel, five minutes on foot from the metro',
      images: [
        img('3ecjbfwwjk3w0kvxuvsfti7zc8aq_490616880.jpg'),
        img('zgv2w5r81fne6jip7gt7t3ka66qs_490616814.jpg'),
        img('y2zgmmdrmnzjp1eki6bnvex7c0mo_490616874.jpg'),
        img('sebprkj72kw8kx80twsi71uzf7ft_490616796.jpg'),
        img('xgsqe97ltdl3ka4vdbadqm97d5zx_519694616.jpg'),
        img('o9olgmxgn33sl3v04o6we34bgmk9_490616799.jpg'),
        img('8kxyxn44sb8qfvf84wbbywj8qf5k_490616826.jpg'),
        img('7lwa5q7rl0sy8wnxgojbqu02xsss_490616867.jpg'),
        img('hwv4dh4yljcprvn5nalwah2u6etu_519694618.jpg'),
        img('bvhzphikg9pgifcvqsqrpwqsg9ta_519694628.jpg'),
        img('p24nfbohyh12mcdg69vl63qtxvvd_519694617.jpg'),
        img('xwtr5rutnm9n2w8pdo2pdszclhlo_519694624.jpg'),
        img('vcizule211otvq916r7ex23020bo_519694625.jpg'),
        img('l3j4wxlrvce6drt9n8us6fp0bwct_490616861.jpg')
      ]
    },
    activities: [
      {
        name: 'Night Safari with tram ride',
        day: 1,
        optional: false,
        image: img('we8ipbdppywm90csgjosarhe6gkf_87a2936a-5dec-41e1-8f16-8017a326a83c.jpg'),
        description: 'The world\'s first nocturnal zoo, with a tram ride through seven habitats and walking trails where the animals are at their most active.'
      },
      {
        name: 'Singapore sightseeing tour',
        day: 2,
        optional: false,
        image: img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        description: 'A half day tour past Merlion Park, the Marina Bay waterfront, Chinatown and the colonial quarter, with a guide on a shared coach.'
      },
      {
        name: 'Marina Bay Sands SkyPark',
        day: 2,
        optional: false,
        image: img('ot1uvy0etl8nyv7edixsziiu6e2j_experience-marina-bay-sands-skypark-tickets-skip-the-line-5.webp'),
        description: 'The observation deck fifty seven floors above Marina Bay, with the whole city, the port and the Gardens by the Bay domes below you.'
      },
      {
        name: 'Gardens by the Bay',
        day: 2,
        optional: false,
        image: img('6zr9hb5qtj6rx9l9cjg3jld11x13_jinvyy59q025jw6eixua10p2hqv8_tzxt32ez31i6b6k5aot5uuynagqt_1465545117_maxresdefault_(1).jpg'),
        description: 'Entry to the Cloud Forest and Flower Dome, with the Supertree light show in the evening a short walk away.'
      },
      {
        name: 'Universal Studios Singapore',
        day: 3,
        optional: false,
        image: img('d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.jpg'),
        description: 'A full day ticket for the Sentosa theme park, with seven themed zones, the duelling roller coasters and the street shows.'
      },
      {
        name: 'Singapore river cruise',
        day: 3,
        optional: false,
        image: img('b2f7yhrl28ugizvfgwxmc40zmy3y_shutterstock_577392532.jpg'),
        description: 'A bumboat along the river past the old godowns of Clarke Quay and Boat Quay, with the Marina Bay skyline lighting up ahead.'
      }
    ],
    program: {
      name: 'Singapore',
      description: 'Three nights in the city with a night safari, the Marina Bay SkyPark, Gardens by the Bay, Universal Studios and the river by bumboat.',
      image: img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuala Lumpur',
    subtitle: 'Kuala Lumpur to Genting Highlands',
    dayLabel: 'Day 4 to 6',
    images: [
      img('rkhc8adk10671jjr6lg6n122cifp_shutterstock_2220401575.jpg'),
      img('9b1aalk35m57qheq1e60bq1fzlec_shutterstock_614123699.jpg'),
      img('kos2k1eovszqjm1js7l5seyy94j7_shutterstock_2186432%20(1).jpg'),
      img('s5j9abac6eos8fh9hniqc6v8z6zl_shutterstock_1221988960%20(1).jpg')
    ],
    dayImages: {
      4: [
        img('k4jgulonbm633bvz41ajvsecpq33_jl1xshx8ri74lzuxk83reo3rot00_lan%20(1).jpg'),
        img('jq5w1cgl03s8aw8m9qf0kksrv98s_An_aged_woman_wearing_traditional_Vietnamese_clothes,_selling_fictile_craft_souvenirs_in_one_of_Hoi_An_Ancient_Town_streets.jpg'),
        img('86gmjxz0blc5ude9uea4knre7aws_1578556742_shutterstock_1334043581.jpg'),
        img('rkhc8adk10671jjr6lg6n122cifp_shutterstock_2220401575.jpg')
      ],
      5: [
        img('d26572h38irfszh9cjr2vh5esymf_shutterstock_1380671906.jpg'),
        img('8u8ev09ru5v92iljnnk58ju7waa3_25.webp'),
        img('jwzx5ixlse9sd03dd4v7qadm3p40_banner@2x.jpg'),
        img('rkhc8adk10671jjr6lg6n122cifp_shutterstock_2220401575.jpg')
      ],
      6: [
        img('9nw2tylont6c8f0m99r3fkvtccpt_Kuala%20Lumpur%20Skyline.jpg'),
        img('00vcs4gtc188b1vvb2i7ktl3dq03_1578901360_shutterstock_1327893905.jpg'),
        img('88b1b8nz64vqhkp157zouphjsjtv_1586851942_fi.jpg'),
        img('hs3hv44uraz48dgnnsvxedqb5wyd_1463645099_1024px-Masjid_Negara.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Kuala Lumpur`,
      'Breakfast and check out, then private transfer to Changi',
      'Optional: flight from Singapore to Kuala Lumpur, which we can add',
      'Arrival and private transfer to your Kuala Lumpur hotel',
      'Rest of the day free around Bukit Bintang',
      `${DAY_MARK}Day 5 · Genting Highlands and Batu Caves`,
      'Breakfast, then a private day up to Genting Highlands',
      'Cable car to the hill resort and its theme park',
      'Batu Caves and the temple steps on the way back',
      'Evening free in the city',
      `${DAY_MARK}Day 6 · City tour and Petronas towers`,
      'Breakfast, then a city tour with a guide',
      'The palace gates, Merdeka Square and the old station',
      'Sky bridge and observation deck at the Petronas towers',
      'Optional: dinner on Jalan Alor street food lane'
    ],
    accommodation: {
      name: 'Hilton Garden Inn Kuala Lumpur North, Kuala Lumpur',
      description: '3 nights · Breakfast · Standard room · 4★ · Four star hotel a short ride from Bukit Bintang',
      images: [
        img('h4shcmsew7axsl6cwgzo9lyudhn7_277305901_5623017151078783_5479011740652600257_n.jpg'),
        img('lnvcorpq4h34quwvl1fo3hux53zi_526102467.jpg'),
        img('dtgv1u6cgnn3we5ec0xtabeuf6nw_518157841.jpg'),
        img('gpum0r3enfigwk8fzs0cmhumlf9i_4190725563795850-089862a_hb_t_001.jpg'),
        img('3x9nr1acfqpcv95pmo702movjeuv_526102483.jpg'),
        img('y9mr8sw0i1ee9ejul8ry8p8g79hj_526102480.jpg'),
        img('bqrhjpg3kgs9k1pvqio3ssa9ojot_501620209.jpg'),
        img('9d8r7h48zbuxsjmrg1uir2qltg1e_590906302.jpg'),
        img('ys9zljyq2i7e71tn13qxe671zwy1_526102497.jpg'),
        img('yg7j5oolw2va3nkcmcgg6pafbsr4_526102507.jpg'),
        img('r9nskdt0lf4a2xxrtrj48gxo1j33_526102500.jpg'),
        img('wlmy08hjmbxe6gms7h46qkeuc4eb_501620205.jpg')
      ]
    },
    activities: [
      {
        name: 'Genting Highlands and Batu Caves',
        day: 5,
        optional: false,
        image: img('d26572h38irfszh9cjr2vh5esymf_shutterstock_1380671906.jpg'),
        description: 'A private day up to the hill resort by cable car, with the theme park and casino floor, and the Batu Caves temple steps on the way back.'
      },
      {
        name: 'Kuala Lumpur sightseeing tour',
        day: 6,
        optional: false,
        image: img('9nw2tylont6c8f0m99r3fkvtccpt_Kuala%20Lumpur%20Skyline.jpg'),
        description: 'The King\'s palace gates, the National Monument, Merdeka Square and the old railway station, with a stop for photographs at the towers.'
      },
      {
        name: 'Petronas Twin Towers tickets',
        day: 6,
        optional: false,
        image: img('28ymwo212mavwoso0rj8hg3y0uop_shutterstock_745400287.jpg'),
        description: 'Entry to the sky bridge and the observation deck on the eighty sixth floor, with the city spread out on both sides.'
      }
    ],
    program: {
      name: 'Kuala Lumpur',
      description: 'Three nights in the Malaysian capital, with a hill day at Genting and Batu Caves, a city tour and the Petronas towers from the inside.',
      image: img('rkhc8adk10671jjr6lg6n122cifp_shutterstock_2220401575.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Kuta',
    subtitle: 'Kuta to Uluwatu',
    dayLabel: 'Day 7 to 10',
    images: [
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
      img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
    ],
    dayImages: {
      7: [
        img('bta09n0tfk1dx2fdsh0oal97yuez_shutterstock_1509544076.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
        img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
      ],
      8: [
        img('55zrzs76oi5ijmcfe6pam0ngqzkk_shutterstock_1453687076.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
        img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg')
      ],
      9: [
        img('deriva74h0yzbv3z7xmdudk0w70b_1464167116_kuta-square.jpg'),
        img('6dn215ssrisvwxp9ulwbfh7h0i1s_night-markets-phuket-thailand.jpg'),
        img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
      ],
      10: [
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
        img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
        img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · On to Bali and a candlelight dinner`,
      'Breakfast and check out, then private transfer to the airport',
      'Optional: flight from Kuala Lumpur to Denpasar, which we can add',
      'Arrival in Bali and private transfer to your Kuta hotel',
      'Candlelight dinner for two in the evening, set up privately',
      `${DAY_MARK}Day 8 · Uluwatu and Padang Padang`,
      'Breakfast, then a half day to the southern cliffs',
      'Padang Padang beach in its limestone cove',
      'Uluwatu temple above the surf at sunset',
      'Dinner is included at the hotel tonight',
      `${DAY_MARK}Day 9 · Spa day in Kuta`,
      'Breakfast and a free day on the coast',
      'A traditional Balinese massage for two at a nearby spa',
      'Optional: Kuta Square, the art market or a surf lesson',
      'Dinner is included at the hotel tonight',
      `${DAY_MARK}Day 10 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Bliss Surfer Hotel, Kuta',
      description: '3 nights · Breakfast and one main meal daily · Standard room · 3★ · Surf style hotel five minutes from Kuta beach',
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
        name: 'Uluwatu and Padang Padang beach',
        day: 8,
        optional: false,
        image: img('55zrzs76oi5ijmcfe6pam0ngqzkk_shutterstock_1453687076.jpg'),
        description: 'A half day along the southern cliffs: Padang Padang beach in its limestone cove, then Uluwatu temple as the sun drops into the ocean.'
      },
      {
        name: 'Balinese massage for two',
        day: 9,
        optional: false,
        image: img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        description: 'A traditional Balinese massage for both of you on your free day, warm oil and long pressure strokes at a spa near the hotel.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights in Bali to finish, with a candlelight dinner on arrival, the Uluwatu cliffs at sunset and a spa day before you fly home.',
      image: img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-singapore-malaysia-and-bali-honeymoon',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Singapore, Malaysia and Bali Honeymoon',
  alt: 'The Petronas Twin Towers at dusk in Kuala Lumpur',
  days: '10 days / 9 nights',
  stations: '3 stops',
  transport: 'Private transfers, city tours and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Luxury'],
  price: 104500,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Sentosa', 'Kuala Lumpur', 'Genting Highlands', 'Kuta'],
  stats: { days: 10, cities: 3, hotels: 3, activities: 11, transfers: 21 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['11 experiences', 'Activities'],
    ['21 transfers', 'Transport'],
    ['15 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three countries in ten days, and the order matters. Cities first, then the hills, then Bali to slow down.',
    quoteMore: 'Both inter country hops are short, so take morning flights and you keep the afternoons. We book your Singapore to Kuala Lumpur and Kuala Lumpur to Denpasar legs with the package when you ask.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Ten days across three countries: Singapore for the night safari, Marina Bay and Universal Studios, Kuala Lumpur for Genting, Batu Caves and the Petronas towers, then Bali for a candlelight dinner, Uluwatu at sunset and a spa day.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 9 nights with daily breakfast, plus one main meal daily in Singapore and Bali; private airport and city transfers; Night Safari; Singapore sightseeing; Marina Bay Sands SkyPark; Gardens by the Bay; Universal Studios; river cruise; Genting and Batu Caves; Kuala Lumpur city tour; Petronas tickets; Uluwatu sunset tour; candlelight dinner; Balinese massage.',
  intro2: 'Not included: international flights; the Singapore to Kuala Lumpur and Kuala Lumpur to Denpasar flights, which we can add; visa fees; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and night safari (D)', text: 'Arrival at Changi Airport and private transfer to your hotel\nCheck in and freshen up near Bencoolen\nEvening tram ride at the Singapore Night Safari\nDinner is included at the hotel tonight', hotel: 'ibis Singapore on Bencoolen', highlights: ['Arrival at Changi Airport and private transfer to your hotel', 'Check in and freshen up near Bencoolen', 'Evening tram ride at the Singapore Night Safari'] },
    { title: 'Day 2: Marina Bay and the Gardens (B, D)', text: 'Breakfast, then a half day city tour with a guide\nMerlion Park, the colonial quarter and Chinatown\nThe SkyPark deck above Marina Bay Sands\nCloud Forest and Flower Dome at Gardens by the Bay', hotel: 'ibis Singapore on Bencoolen', highlights: ['Breakfast, then a half day city tour with a guide', 'Merlion Park, the colonial quarter and Chinatown', 'The SkyPark deck above Marina Bay Sands'] },
    { title: 'Day 3: Universal Studios and the river (B, D)', text: 'Breakfast, then across to Sentosa island\nFull day ticket for Universal Studios Singapore\nCoasters, themed zones and the street shows\nEvening bumboat cruise along the Singapore river', hotel: 'ibis Singapore on Bencoolen', highlights: ['Breakfast, then across to Sentosa island', 'Full day ticket for Universal Studios Singapore', 'Coasters, themed zones and the street shows'] },
    { title: 'Day 4: On to Kuala Lumpur (B)', text: 'Breakfast and check out, then private transfer to Changi\nOptional: flight from Singapore to Kuala Lumpur, which we can add\nArrival and private transfer to your Kuala Lumpur hotel\nRest of the day free around Bukit Bintang', hotel: 'Hilton Garden Inn Kuala Lumpur North', highlights: ['Breakfast and check out, then private transfer to Changi', 'Optional: flight from Singapore to Kuala Lumpur, which we can add', 'Arrival and private transfer to your Kuala Lumpur hotel'] },
    { title: 'Day 5: Genting Highlands and Batu Caves (B)', text: 'Breakfast, then a private day up to Genting Highlands\nCable car to the hill resort and its theme park\nBatu Caves and the temple steps on the way back\nEvening free in the city', hotel: 'Hilton Garden Inn Kuala Lumpur North', highlights: ['Breakfast, then a private day up to Genting Highlands', 'Cable car to the hill resort and its theme park', 'Batu Caves and the temple steps on the way back'] },
    { title: 'Day 6: City tour and Petronas towers (B)', text: 'Breakfast, then a city tour with a guide\nThe palace gates, Merdeka Square and the old station\nSky bridge and observation deck at the Petronas towers\nOptional: dinner on Jalan Alor street food lane', hotel: 'Hilton Garden Inn Kuala Lumpur North', highlights: ['Breakfast, then a city tour with a guide', 'The palace gates, Merdeka Square and the old station', 'Sky bridge and observation deck at the Petronas towers'] },
    { title: 'Day 7: On to Bali and a candlelight dinner (B, D)', text: 'Breakfast and check out, then private transfer to the airport\nOptional: flight from Kuala Lumpur to Denpasar, which we can add\nArrival in Bali and private transfer to your Kuta hotel\nCandlelight dinner for two in the evening, set up privately', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast and check out, then private transfer to the airport', 'Optional: flight from Kuala Lumpur to Denpasar, which we can add', 'Arrival in Bali and private transfer to your Kuta hotel'] },
    { title: 'Day 8: Uluwatu and Padang Padang (B, D)', text: 'Breakfast, then a half day to the southern cliffs\nPadang Padang beach in its limestone cove\nUluwatu temple above the surf at sunset\nDinner is included at the hotel tonight', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast, then a half day to the southern cliffs', 'Padang Padang beach in its limestone cove', 'Uluwatu temple above the surf at sunset'] },
    { title: 'Day 9: Spa day in Kuta (B, D)', text: 'Breakfast and a free day on the coast\nA traditional Balinese massage for two at a nearby spa\nOptional: Kuta Square, the art market or a surf lesson\nDinner is included at the hotel tonight', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast and a free day on the coast', 'A traditional Balinese massage for two at a nearby spa', 'Optional: Kuta Square, the art market or a surf lesson'] },
    { title: 'Day 10: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; the Singapore to Kuala Lumpur and Kuala Lumpur to Denpasar flights, which we can add; visa fees; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const singaporeMalaysiaBaliHoneymoonBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const singaporeMalaysiaBaliHoneymoonProduct = {
  slug: detail.slug,
  places: ['Singapore', 'Sentosa', 'Kuala Lumpur', 'Genting Highlands', 'Kuta'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 11,
  transfers: 21,
  meals: 15,
  price: detail.price,
  images: cardImages
};
