// Rediscover Vietnam Honeymoon Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg'),
  img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
  img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
  img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
  img('ess8tbxn8tc68q49uptyn8nsx4he_shutterstock_1218764578.jpg'),
  img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
  img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg'),
  img('hjsa1pyia4bpq27c0rf4aemru3zw_e5y181gizy8jvyzc59gyilg4jawa_shutterstock_1425907181%20(1).webp'),
  img('hyouiedizd9klxg8535ludsjga8z_ve6w5hll44si2fa8qxx6b9sepbs3_shutterstock_1218765286.webp'),
  img('6mvmwgt3baaojghbm3802hxvxtwo_shutterstock_1101234365.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    dayLabel: 'Day 1 to 2',
    images: [
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
    ],
    dayImages: {
      1: [
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ],
      2: [
        img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hanoi`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'Check in on the edge of the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake',
      `${DAY_MARK}Day 2 · Hanoi tour and a cycle ride`,
      'Breakfast, then a guided half day of the city',
      'The mausoleum, the one pillar pagoda and the Temple of Literature',
      'An easy cycle ride through the guild streets',
      'Evening free in the lanes'
    ],
    accommodation: {
      name: 'The Light Hotel Hanoi, Hanoi',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel on the edge of the old quarter',
      images: [
        img('4i23e8l3fbfe6bplhd3dbe8gruv0_img9.jpg'),
        img('vw400lu91kn7uf0ffcgnd83n30nc_img19.jpg'),
        img('bxmk6k1gpigqt4szctisjoq7ybms_img3.jpg'),
        img('atusamfpsj7hcmhuf9vi6927y66n_img6.jpg'),
        img('9jp8pwr6mzz4thwbp43ojkeouglh_img33.jpg'),
        img('wvbtfq70gq0vwcya6r5g28wbni4v_img13.jpg'),
        img('fa4drfe3vb7fvjjivcvgcnrxdubb_img36.jpg'),
        img('bd9rcphrasn5os3szxonx4pokwc9_img15.jpg'),
        img('diskcqva20dn01zs9tidzfxopat0_img39.jpg')
      ]
    },
    activities: [
      {
        name: 'Hanoi half day city tour',
        day: 2,
        optional: false,
        image: img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        description: 'The Ho Chi Minh mausoleum and the one pillar pagoda, the Temple of Literature and the lanes of the old quarter with a guide.'
      },
      {
        name: 'Old quarter cycling tour',
        day: 2,
        optional: false,
        image: img('0f1tv4vizgplkordh2t3vwy4edb5_shutterstock_2309072245.jpg'),
        description: 'An easy ride through the old quarter on bicycles, down the guild streets and out along the edge of Hoan Kiem lake.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two nights at a four star hotel by the old quarter, with a guided half day and a cycle ride through the guild streets.',
      image: img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Halong Bay',
    dayLabel: 'Day 3',
    images: [
      img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg'),
      img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg'),
      img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg'),
      img('2kuteileb36cgbgpxwj5kw24c0gb_shutterstock_78665809.jpg')
    ],
    dayImages: {
      3: [
        img('hjsa1pyia4bpq27c0rf4aemru3zw_e5y181gizy8jvyzc59gyilg4jawa_shutterstock_1425907181%20(1).webp'),
        img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg'),
        img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg'),
        img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Overnight on the bay`,
      'Breakfast and check out, then east towards the coast',
      'Board your cruise boat in the early afternoon',
      'Lunch and dinner on board',
      'A night moored among the limestone islands'
    ],
    accommodation: {
      name: 'Halong Royal Palace Cruise, Halong Bay',
      description: '1 night · All meals · Cabin with a window · 3★ · Timber cruise boat moored among the karsts overnight',
      images: [
        img('vfha4wn8g1939nz7blmv2zbezua8_img1.jpg'),
        img('l9966l7rud71rfw69v343f16mb19_img2.jpg'),
        img('n09ydj3cz91sv3y68w2zu33sibfu_img3.jpg'),
        img('kl90iojno6uwzhw9erd37sqd7hbr_img4.jpg'),
        img('lupm0drdxku9cdtsh908akadhb35_img6.jpg'),
        img('tx60hzkjj3yo3fawkwznd731yih5_img7.jpg'),
        img('6ulhot12pjkc35xwuq60fnlfq2j0_img9.jpg'),
        img('8qz5zlx21fua6f2s1ebf2pvimnvy_img8.jpg'),
        img('52fwashbztvumpmx5844pnfh9mjq_img5.jpg'),
        img('rksqnpehn5tm959cizcsgeoiudmd_img10.jpg'),
        img('z38906nmh7cvadosch9b3kj7itt5_img11.jpg'),
        img('qroxwpamvbmoyafswa3emewok9jr_img12.jpg'),
        img('726kp5lsbjey6is2udeg92t2q1f8_img13.jpg'),
        img('6akzil1d4hgz8m7a32o5xq59yn2p_img17.jpg'),
        img('zb77t02g3p3x30qi94l1s0oak9w4_img18.jpg'),
        img('w9jqo7e6b0lcd7pl8hagzkr2zocv_img19.jpg'),
        img('pi1shb8bokq4xs2vr0l6oopy0w8b_img20.jpg'),
        img('1ziwnoejr20kwl4mzy3fzdip0eyb_img21.jpg'),
        img('3trkv4fc1th5nohf83cgy45rdaz5_img22.jpg'),
        img('c8e81a9sfjvnbe7qiz7q8r9lp3wy_img23.jpg'),
        img('a02raiho83o298tsfzkur3e915ln_img24.jpg'),
        img('ornzzg481de8hogyln2fylxhfzel_img25.jpg'),
        img('p838rn62evnxen1k96g3zsg3gqk6_img32.jpg'),
        img('urg3fvttnue6s1c5gg2r7ngl0l6d_img35.jpg'),
        img('f0gv0k6ogfeh4er1s8letao9jd1l_img36.jpg'),
        img('ui9v9i2ooasrurv1zhzujhr37qbz_img37.jpg'),
        img('31uuev2q7tf9gkoft7iglxo77mdz_img38.jpg'),
        img('x731wrazuxssz9dhy7r82id72hu4_img42.jpg'),
        img('8vc8jh9jx29zvgzsmgfp7j5mo2ii_img43.jpg'),
        img('5zayqr1flqsdtd1tivi8o9cby29l_img44.jpg'),
        img('fi567e80wodqvyxlwafqwedyu577_img45.jpg'),
        img('20fev1zroqgxy8b06rnfibw4l43j_img46.jpg')
      ]
    },
    activities: [
      {
        name: 'Halong Bay overnight cruise',
        day: 3,
        optional: false,
        image: img('hjsa1pyia4bpq27c0rf4aemru3zw_e5y181gizy8jvyzc59gyilg4jawa_shutterstock_1425907181%20(1).webp'),
        description: 'A shared cruise out among the limestone islands, with lunch and dinner on board and a night moored in a quiet bay.'
      }
    ],
    program: {
      name: 'Halong Bay',
      description: 'A night on the water among the limestone islands, with all meals served on board.',
      image: img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Da Nang',
    subtitle: 'Da Nang and Hoi An',
    dayLabel: 'Day 4 to 5',
    images: [
      img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
      img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
      img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
      img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg')
    ],
    dayImages: {
      4: [
        img('hyouiedizd9klxg8535ludsjga8z_ve6w5hll44si2fa8qxx6b9sepbs3_shutterstock_1218765286.webp'),
        img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
        img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
        img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg')
      ],
      5: [
        img('6mvmwgt3baaojghbm3802hxvxtwo_shutterstock_1101234365.jpg'),
        img('i1g9vcnnzos2f5srkha63o2w72eg_1467789759_6914926621_5239080e32_o.jpg'),
        img('mpkg124uacuo2s71x3f0zfzuhuyo_1467790941_26937034641_89d6ed7fa5_o.jpg'),
        img('y7qz31iy6wdasr4qc3dbaxbs6jd2_Thu_B%E1%BB%93n_River_at_night_-_H%E1%BB%99i_An_2022.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · South to Da Nang`,
      'Breakfast on board, then the climb into the Surprise Cave',
      'Back to the pier and on to Hanoi airport',
      'The flight to Da Nang',
      'Check in near the beach, evening free',
      `${DAY_MARK}Day 5 · Hoi An and the river`,
      'Breakfast, then south to Hoi An for the day',
      'The Japanese bridge and the merchant houses',
      'A boat out onto the Thu Bon river',
      'The lanterns coming on as you head back'
    ],
    accommodation: {
      name: 'Luxtery Da Nang, Da Nang',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Simple hotel a few streets back from My Khe beach',
      images: [
        img('bt3i1gnd648i005c7ukinian0v7f_716d455e0818ea7e050e40523d4f7bac.jpg'),
        img('eop28g1inzoo9ya667pqrhdh1rlv_478766351.jpg'),
        img('nfxjf6q4ulh0dha6nt3mcirl56e6_img2.jpg'),
        img('afquyrovth2uupbnm3o6hgqcvfs8_img1.jpg'),
        img('oo3d2hm5caolatb91etff7qidvl1_img5.jpg'),
        img('exk9fpif6rldrbebi50o9wgys791_img8.jpg'),
        img('pjxfju4hrjayo3d7sxfw33cqz101_img9.jpg'),
        img('3zfln2aq0p751007t05ru119g4r8_img3.jpg'),
        img('4y93qy538z0maxe2gadfuq6pqmz7_img12.jpg'),
        img('so8h2z6ygq48oz3ben8vzcanhz3w_img16.jpg'),
        img('v6ma5zv5sgpf540rw43flca6rlmk_img10.jpg'),
        img('6x510mai9r9lvsua0r5nugpn226o_478766736.jpg')
      ]
    },
    activities: [
      {
        name: 'Surprise Cave on Bo Hon island',
        day: 4,
        optional: false,
        image: img('hyouiedizd9klxg8535ludsjga8z_ve6w5hll44si2fa8qxx6b9sepbs3_shutterstock_1218765286.webp'),
        description: 'A morning climb into the Surprise Cave, three great chambers of stalactites above the water, before the boat turns back.'
      },
      {
        name: 'Hoi An with a Thu Bon river boat ride',
        day: 5,
        optional: false,
        image: img('6mvmwgt3baaojghbm3802hxvxtwo_shutterstock_1101234365.jpg'),
        description: 'A day in the old trading town with the Japanese bridge and the merchant houses, and a boat out onto the Thu Bon river as the lanterns come on.'
      }
    ],
    program: {
      name: 'Da Nang',
      description: 'The flight to the central coast for two nights near the beach, with a full day in Hoi An and a river boat ride.',
      image: img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg')
    }
  },
  {
    letter: 'D',
    name: 'Ho Chi Minh City',
    subtitle: 'Saigon, Cu Chi and the Mekong',
    dayLabel: 'Day 6 to 9',
    images: [
      img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
      img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
      img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
      img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg')
    ],
    dayImages: {
      6: [
        img('n75phneefos5hbnuuc33lg3il0vd_1484035791_city-hall-ho-chi-minh-city.jpg'),
        img('tonnwsasrtd050jxtlekyhfy34mv_1469613803_5967086564_fd29210949_o.jpg'),
        img('yopub1tyxa299n9cmdtc9hhqr4vn_1467884938_15756265548_301c16d1e2_o.jpg'),
        img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
      ],
      7: [
        img('7c9y0w9lr632pl96udf5l9ek2h9h_shutterstock_690459592.jpg'),
        img('2fqc9nmqifyv07bhi7n7gqf3cxhl_shutterstock_690459592.jpg'),
        img('k0iwrtaiemzmywouhcz1remyihfd_shutterstock_175128359.jpg'),
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg')
      ],
      8: [
        img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        img('lvds5da20701ls58hbi447grx3s2_8193351650_d1ff3fd0b7_z.jpg'),
        img('ktw7z5gp3xhl3n59iymqv4ksukb2_Ben_Tre_Turtle_Island.jpg'),
        img('6cupjrsxzkngfv8zrrp9japoty1n_sgn15.jpg')
      ],
      9: [
        img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
        img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
        img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
        img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · On to Saigon`,
      'Breakfast and check out, then the flight south',
      'Check in in District 1',
      'Rest of the day free in the city',
      'Optional: the rooftop bars on Nguyen Hue',
      `${DAY_MARK}Day 7 · Cu Chi tunnels and the city`,
      'Breakfast, then north west to Cu Chi',
      'The tunnels, the trapdoors and the kitchens',
      'Back in the city for the palace and the cathedral',
      'The war remnants museum and Ben Thanh market',
      `${DAY_MARK}Day 8 · Mekong Delta`,
      'Breakfast, then south into the delta',
      'A boat through the coconut creeks at My Tho',
      'A sampan ride under the palms',
      'The coconut candy workshops, then back to the city',
      `${DAY_MARK}Day 9 · Departure from Saigon`,
      'Breakfast at the hotel and check out',
      'Private transfer to Tan Son Nhat for your flight home'
    ],
    accommodation: {
      name: 'Avanti Saigon Hotel, Ho Chi Minh',
      description: '3 nights · Breakfast · Standard room · 3★ · Small hotel in District 1, a short walk from the opera house',
      images: [
        img('p1mdvoje0q9g9is81pbqakdxm7hw_img7.jpg'),
        img('c5g4ltwu93dyz27pbxvhf2j1ndyp_img1.jpg'),
        img('09wq44lgvnb8x2hkpabgxlyqf1ze_img2.jpg'),
        img('rxvam62ayf64w4u30l2ii68rbxbx_img5.jpg'),
        img('s82v4kv3y4ua81vfm79ix8aw8jn2_img9.jpg'),
        img('zlj0ektblbau1j7xc6clu344fvka_img10.jpg'),
        img('rr3xltqahf2cjqfi7avnx46x34r5_img18.jpg'),
        img('49fu4v8rtjok4rtmgps0zaept8cz_img3.jpg'),
        img('vbkpubbgpiyt4thbtyi8aavn9szw_img4.jpg'),
        img('sh4c9fqcmtnkx76l0dv3eegzgej2_img15.jpg')
      ]
    },
    activities: [
      {
        name: 'Cu Chi tunnels half day tour',
        day: 7,
        optional: false,
        image: img('7c9y0w9lr632pl96udf5l9ek2h9h_shutterstock_690459592.jpg'),
        description: 'The tunnel network north west of the city, with the trapdoors, the kitchens and a crawl through a widened section of the original shafts.'
      },
      {
        name: 'Saigon city tour',
        day: 7,
        optional: false,
        image: img('k0iwrtaiemzmywouhcz1remyihfd_shutterstock_175128359.jpg'),
        description: 'The Reunification Palace, the old post office and Notre Dame cathedral, then the war remnants museum and the Ben Thanh market.'
      },
      {
        name: 'Mekong Delta day tour',
        day: 8,
        optional: false,
        image: img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        description: 'South to My Tho for a boat into the coconut creeks, a sampan through the palms, and the workshops where they make coconut candy.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'Three nights in District 1, with the Cu Chi tunnels, a city tour and a full day in the Mekong Delta.',
      image: img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
    }
  }
];

const detail = {
  slug: 'rediscover-vietnam-honeymoon-tour',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Rediscover Vietnam Honeymoon Tour',
  alt: 'Boat on the Thu Bon river at Hoi An in the evening light',
  days: '9 days / 8 nights',
  stations: '4 stops',
  transport: 'Two domestic flights, private transfers and guided tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Culture'],
  price: 69778,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Halong Bay', 'Da Nang', 'Hoi An', 'Ho Chi Minh City', 'Cu Chi', 'Mekong Delta'],
  stats: { days: 9, cities: 4, hotels: 4, activities: 8, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['8 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['13 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Hoi An by boat as the lanterns come on is the evening couples remember from this one.',
    quoteMore: 'Ask for a river side table in Hoi An after the boat. The old town empties out by nine and it is yours.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days for two: two nights at a four star hotel in Hanoi with a guided half day and a cycle ride, an overnight cruise in Halong Bay, two nights on the central coast with Hoi An and a Thu Bon river boat ride, then three in Saigon with the Cu Chi tunnels, a city tour and the Mekong Delta.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights with breakfast daily, dinner at the Da Nang hotel and all meals on the cruise boat; two domestic flights; private transfers throughout; a guided half day tour of Hanoi; an old quarter cycling tour; a shared overnight cruise in Halong Bay with the Surprise Cave; a Hoi An day tour with a Thu Bon river boat ride; the Cu Chi tunnels half day tour; a Saigon city tour; a Mekong Delta day tour.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in on the edge of the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'The Light Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in on the edge of the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Hanoi tour and a cycle ride (B)', text: 'Breakfast, then a guided half day of the city\nThe mausoleum, the one pillar pagoda and the Temple of Literature\nAn easy cycle ride through the guild streets\nEvening free in the lanes', hotel: 'The Light Hotel Hanoi', highlights: ['Breakfast, then a guided half day of the city', 'The mausoleum, the one pillar pagoda and the Temple of Literature', 'An easy cycle ride through the guild streets'] },
    { title: 'Day 3: Overnight on the bay (B, L, D)', text: 'Breakfast and check out, then east towards the coast\nBoard your cruise boat in the early afternoon\nLunch and dinner on board\nA night moored among the limestone islands', hotel: 'Halong Royal Palace Cruise', highlights: ['Breakfast and check out, then east towards the coast', 'Board your cruise boat in the early afternoon', 'Lunch and dinner on board'] },
    { title: 'Day 4: South to Da Nang (B, D)', text: 'Breakfast on board, then the climb into the Surprise Cave\nBack to the pier and on to Hanoi airport\nThe flight to Da Nang\nCheck in near the beach, evening free', hotel: 'Luxtery Da Nang', highlights: ['Breakfast on board, then the climb into the Surprise Cave', 'Back to the pier and on to Hanoi airport', 'The flight to Da Nang'] },
    { title: 'Day 5: Hoi An and the river (B, D)', text: 'Breakfast, then south to Hoi An for the day\nThe Japanese bridge and the merchant houses\nA boat out onto the Thu Bon river\nThe lanterns coming on as you head back', hotel: 'Luxtery Da Nang', highlights: ['Breakfast, then south to Hoi An for the day', 'The Japanese bridge and the merchant houses', 'A boat out onto the Thu Bon river'] },
    { title: 'Day 6: On to Saigon (B)', text: 'Breakfast and check out, then the flight south\nCheck in in District 1\nRest of the day free in the city\nOptional: the rooftop bars on Nguyen Hue', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast and check out, then the flight south', 'Check in in District 1', 'Rest of the day free in the city'] },
    { title: 'Day 7: Cu Chi tunnels and the city (B)', text: 'Breakfast, then north west to Cu Chi\nThe tunnels, the trapdoors and the kitchens\nBack in the city for the palace and the cathedral\nThe war remnants museum and Ben Thanh market', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast, then north west to Cu Chi', 'The tunnels, the trapdoors and the kitchens', 'Back in the city for the palace and the cathedral'] },
    { title: 'Day 8: Mekong Delta (B)', text: 'Breakfast, then south into the delta\nA boat through the coconut creeks at My Tho\nA sampan ride under the palms\nThe coconut candy workshops, then back to the city', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast, then south into the delta', 'A boat through the coconut creeks at My Tho', 'A sampan ride under the palms'] },
    { title: 'Day 9: Departure from Saigon (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Tan Son Nhat for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Tan Son Nhat for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const rediscoverVietnamHoneymoonBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const rediscoverVietnamHoneymoonProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Halong Bay', 'Da Nang', 'Hoi An', 'Ho Chi Minh City', 'Cu Chi', 'Mekong Delta'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 8,
  transfers: 12,
  meals: 13,
  price: detail.price,
  images: cardImages
};
