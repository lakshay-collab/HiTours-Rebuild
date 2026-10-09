// Rediscover Vietnam Complete Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
  img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg'),
  img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
  img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
  img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
  img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg'),
  img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
  img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
  img('re9j66puc1m29sa5nalyiqvw1m45_shutterstock_1425907181.jpg'),
  img('wk7d1zers7rg0s8miyzhm9lcuwky_shutterstock_129338063.jpg'),
  img('yhxwfmhdmt1hhx1z5nna2xphz1k3_golden-bridge-4912803_1280.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    subtitle: 'Hanoi and Ninh Binh',
    dayLabel: 'Day 1 to 2',
    images: [
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
    ],
    dayImages: {
      1: [
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('54e3a5zijt2l2wotojw4kgscrcfx_shutterstock_1904433682.jpg'),
        img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
      ],
      2: [
        img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        img('yx7xjkegdm9ruyh3rv7d2qtwgjyg_8224556638_2c76bfbba5_o.jpg'),
        img('m9yizaucm34mdy6jeo07klf59c3r_51986787203_3b201c83cb_b.jpg'),
        img('8zsyn00w33flh1y50mn0irdngahv_shutterstock_591172484.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hanoi`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'Check in at your hotel in the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake',
      `${DAY_MARK}Day 2 · Ninh Binh and Bich Dong`,
      'Breakfast, then south towards Ninh Binh',
      'A rowing boat through the flooded caves at Tam Coc',
      'A private cycle ride through the rice fields',
      'Bich Dong, a pagoda built into the rock'
    ],
    accommodation: {
      name: 'Hm Boutique Hotel Hanoi, Hanoi',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Small boutique hotel in the old quarter',
      images: [
        img('7sy9oqqi7pnpuwxq2fv81z2bt2hf_DSC01260-1280.jpg'),
        img('7twnl25zq5eu5l1fatdv4aobarjv_img45.jpg'),
        img('mn4kwii0rj637p1fy1n5gk9ic3xw_img23.jpg'),
        img('k73z8uhny5i8235x93i1rn0ndji0_244884180.jpg'),
        img('kdrzv1d2gpyuv349jwo9j1p8e55i_244885999.jpg'),
        img('mzluxd5hc3n50hwl1r6m1cvga072_img41.jpg')
      ]
    },
    activities: [
      {
        name: 'Ninh Binh day tour',
        day: 2,
        optional: false,
        image: img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        description: 'South to Ninh Binh for a rowing boat through the flooded caves at Tam Coc and the limestone country around it.'
      },
      {
        name: 'Cycle ride to Bich Dong pagoda',
        day: 2,
        optional: false,
        image: img('8zsyn00w33flh1y50mn0irdngahv_shutterstock_591172484.jpg'),
        description: 'A private cycle ride through the rice fields to Bich Dong, a three tier pagoda built into the rock face.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two nights in the old quarter, with a full day south to Ninh Binh and a cycle ride to Bich Dong.',
      image: img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Halong Bay',
    dayLabel: 'Day 3',
    images: [
      img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
      img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg'),
      img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg'),
      img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg')
    ],
    dayImages: {
      3: [
        img('re9j66puc1m29sa5nalyiqvw1m45_shutterstock_1425907181.jpg'),
        img('co10oqk1r9n0kllwfq7q3aaubtc7_40307648665_8584ddecc8_o.jpg'),
        img('3yvzew883i398qg1nytjaz1ju0q8_48479739932_e3fe5de4a5_o.jpg'),
        img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg')
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
        image: img('re9j66puc1m29sa5nalyiqvw1m45_shutterstock_1425907181.jpg'),
        description: 'A shared cruise out among the limestone islands, with lunch and dinner on board and a night moored in a quiet bay.'
      }
    ],
    program: {
      name: 'Halong Bay',
      description: 'A night on the water among the limestone islands, with all meals served on board.',
      image: img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Da Nang',
    subtitle: 'Da Nang and Ba Na Hills',
    dayLabel: 'Day 4 to 5',
    images: [
      img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
      img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
      img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
      img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg')
    ],
    dayImages: {
      4: [
        img('wk7d1zers7rg0s8miyzhm9lcuwky_shutterstock_129338063.jpg'),
        img('e7747wfxl9x32ioao96vp1zudykf_44844044645_6347bf750e_o.jpg'),
        img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
        img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg')
      ],
      5: [
        img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        img('bbeokkqegcwgy51eqlvyhfvmlgis_1467287106_BaNaHillsCableCar.jpg'),
        img('84tapj6qwgvbv9sgdfd6q1233uak_1467287160_Linh_Ung_Pagoda.jpg'),
        img('yhxwfmhdmt1hhx1z5nna2xphz1k3_golden-bridge-4912803_1280.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · South to Da Nang`,
      'Breakfast on board, then the climb into the Surprise Cave',
      'Back to the pier and on to Hanoi airport',
      'The flight to Da Nang',
      'Check in near the beach, evening free',
      `${DAY_MARK}Day 5 · Ba Na Hills`,
      'Breakfast, then the cable car up to Ba Na',
      'The Golden Bridge held up by two stone hands',
      'The French village and the gardens at the top',
      'Back down to Da Nang in the evening'
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
        image: img('wk7d1zers7rg0s8miyzhm9lcuwky_shutterstock_129338063.jpg'),
        description: 'A morning climb into the Surprise Cave, three great chambers of stalactites above the water, before the boat turns back.'
      },
      {
        name: 'Ba Na Hills and the Golden Bridge',
        day: 5,
        optional: false,
        image: img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        description: 'The long cable car up to Ba Na, the Golden Bridge held up by two stone hands, and the French village and gardens at the top.'
      }
    ],
    program: {
      name: 'Da Nang',
      description: 'The flight to the central coast for two nights near the beach, with a full day up at Ba Na Hills.',
      image: img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Ho Chi Minh City',
    subtitle: 'Saigon, the Mekong and Cu Chi',
    dayLabel: 'Day 6 to 9',
    images: [
      img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
      img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
      img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg'),
      img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
    ],
    dayImages: {
      6: [
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg'),
        img('w9dkaedmj3e8e5tqumgf7lpv587h_1467883935_1280px-Ben_Thanh_Market.jpg'),
        img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
        img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg')
      ],
      7: [
        img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        img('lvds5da20701ls58hbi447grx3s2_8193351650_d1ff3fd0b7_z.jpg'),
        img('ktw7z5gp3xhl3n59iymqv4ksukb2_Ben_Tre_Turtle_Island.jpg'),
        img('6cupjrsxzkngfv8zrrp9japoty1n_sgn15.jpg')
      ],
      8: [
        img('7c9y0w9lr632pl96udf5l9ek2h9h_shutterstock_690459592.jpg'),
        img('2fqc9nmqifyv07bhi7n7gqf3cxhl_shutterstock_690459592.jpg'),
        img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
        img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg')
      ],
      9: [
        img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
        img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
        img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg'),
        img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · On to Saigon`,
      'Breakfast and check out, then the flight south',
      'Check in in District 1',
      'Rest of the day free in the city',
      'Optional: the rooftop bars on Nguyen Hue',
      `${DAY_MARK}Day 7 · Mekong Delta`,
      'Breakfast, then south into the delta',
      'A boat through the coconut creeks at My Tho',
      'A sampan ride under the palms',
      'The coconut candy workshops, then back to the city',
      `${DAY_MARK}Day 8 · Cu Chi tunnels`,
      'Breakfast, then north west to Cu Chi',
      'The tunnels, the trapdoors and the kitchens',
      'A crawl through a widened section of the shafts',
      'Afternoon free in the city',
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
        name: 'Mekong Delta day tour',
        day: 7,
        optional: false,
        image: img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        description: 'South to My Tho for a boat into the coconut creeks, a sampan through the palms, and the workshops where they make coconut candy.'
      },
      {
        name: 'Cu Chi tunnels half day tour',
        day: 8,
        optional: false,
        image: img('7c9y0w9lr632pl96udf5l9ek2h9h_shutterstock_690459592.jpg'),
        description: 'The tunnel network north west of the city, with the trapdoors, the kitchens and a crawl through a widened section of the original shafts.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'Three nights in District 1, with a full day in the Mekong Delta and the Cu Chi tunnels after.',
      image: img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg')
    }
  }
];

const detail = {
  slug: 'rediscover-vietnam-complete-tour',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Rediscover Vietnam Complete Tour',
  alt: 'Sampan boats among the coconut palms of the Mekong Delta',
  days: '9 days / 8 nights',
  stations: '4 stops',
  transport: 'Two domestic flights, private transfers and guided tours',
  tag: 'Grand tour',
  tags: ['Grand tour', 'Culture'],
  price: 75040,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Da Nang', 'Ba Na Hills', 'Ho Chi Minh City', 'Mekong Delta', 'Cu Chi'],
  stats: { days: 9, cities: 4, hotels: 4, activities: 7, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['14 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Nine days, all three regions and nothing rushed. Two flights save you three days of driving.',
    quoteMore: 'Put Cu Chi after the delta day as it is scheduled here. The tunnels are better understood once you have seen the country they run under.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days end to end: two nights in Hanoi with Ninh Binh and a Bich Dong cycle ride, an overnight cruise in Halong Bay with the Surprise Cave, two nights in Da Nang for Ba Na Hills and the Golden Bridge, then three in Saigon with the Mekong Delta and the Cu Chi tunnels.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights with breakfast daily, dinner at the northern and central hotels and all meals on the cruise boat; two domestic flights; private transfers throughout; a Ninh Binh day tour; a private cycle ride to Bich Dong; a shared overnight cruise in Halong Bay with the Surprise Cave; a full day up at Ba Na with the Golden Bridge; a Mekong Delta day tour; the Cu Chi tunnels half day tour.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Ninh Binh and Bich Dong (B, D)', text: 'Breakfast, then south towards Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nA private cycle ride through the rice fields\nBich Dong, a pagoda built into the rock', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then south towards Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'A private cycle ride through the rice fields'] },
    { title: 'Day 3: Overnight on the bay (B, L, D)', text: 'Breakfast and check out, then east towards the coast\nBoard your cruise boat in the early afternoon\nLunch and dinner on board\nA night moored among the limestone islands', hotel: 'Halong Royal Palace Cruise', highlights: ['Breakfast and check out, then east towards the coast', 'Board your cruise boat in the early afternoon', 'Lunch and dinner on board'] },
    { title: 'Day 4: South to Da Nang (B, D)', text: 'Breakfast on board, then the climb into the Surprise Cave\nBack to the pier and on to Hanoi airport\nThe flight to Da Nang\nCheck in near the beach, evening free', hotel: 'Luxtery Da Nang', highlights: ['Breakfast on board, then the climb into the Surprise Cave', 'Back to the pier and on to Hanoi airport', 'The flight to Da Nang'] },
    { title: 'Day 5: Ba Na Hills (B, D)', text: 'Breakfast, then the cable car up to Ba Na\nThe Golden Bridge held up by two stone hands\nThe French village and the gardens at the top\nBack down to Da Nang in the evening', hotel: 'Luxtery Da Nang', highlights: ['Breakfast, then the cable car up to Ba Na', 'The Golden Bridge held up by two stone hands', 'The French village and the gardens at the top'] },
    { title: 'Day 6: On to Saigon (B)', text: 'Breakfast and check out, then the flight south\nCheck in in District 1\nRest of the day free in the city\nOptional: the rooftop bars on Nguyen Hue', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast and check out, then the flight south', 'Check in in District 1', 'Rest of the day free in the city'] },
    { title: 'Day 7: Mekong Delta (B)', text: 'Breakfast, then south into the delta\nA boat through the coconut creeks at My Tho\nA sampan ride under the palms\nThe coconut candy workshops, then back to the city', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast, then south into the delta', 'A boat through the coconut creeks at My Tho', 'A sampan ride under the palms'] },
    { title: 'Day 8: Cu Chi tunnels (B)', text: 'Breakfast, then north west to Cu Chi\nThe tunnels, the trapdoors and the kitchens\nA crawl through a widened section of the shafts\nAfternoon free in the city', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast, then north west to Cu Chi', 'The tunnels, the trapdoors and the kitchens', 'A crawl through a widened section of the shafts'] },
    { title: 'Day 9: Departure from Saigon (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Tan Son Nhat for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Tan Son Nhat for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Vietnam', href: '/asien/vietnam' },
  { label: detail.title }
];

export const rediscoverVietnamCompleteBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const rediscoverVietnamCompleteProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Da Nang', 'Ba Na Hills', 'Ho Chi Minh City', 'Mekong Delta', 'Cu Chi'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 7,
  transfers: 12,
  meals: 14,
  price: detail.price,
  images: cardImages
};
