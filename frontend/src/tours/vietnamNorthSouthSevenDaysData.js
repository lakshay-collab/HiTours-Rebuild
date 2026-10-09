// Vietnam North to South in Seven Days. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
  img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg'),
  img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg'),
  img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
  img('anokjwn2ztodzjiuh41v7xtsi4nb_shutterstock_257155450.jpg'),
  img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
  img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
  img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg'),
  img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('anokjwn2ztodzjiuh41v7xtsi4nb_shutterstock_257155450.jpg'),
  img('e7747wfxl9x32ioao96vp1zudykf_44844044645_6347bf750e_o.jpg'),
  img('k0iwrtaiemzmywouhcz1remyihfd_shutterstock_175128359.jpg'),
  img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg')
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
        img('ntezjfzc64thy47m38y0tbsj2d6s_1467720990_6909983514_1b40cdc48c_o.jpg'),
        img('xobo05epyrnuy77vlk7ujy36k4vh_1484035807_Quan-Su-pagoda.jpg'),
        img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
        img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg')
      ],
      2: [
        img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        img('yx7xjkegdm9ruyh3rv7d2qtwgjyg_8224556638_2c76bfbba5_o.jpg'),
        img('m9yizaucm34mdy6jeo07klf59c3r_51986787203_3b201c83cb_b.jpg'),
        img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hanoi`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'Check in at your hotel in the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake',
      `${DAY_MARK}Day 2 · Ninh Binh day trip`,
      'Breakfast, then south towards Ninh Binh',
      'A rowing boat through the flooded caves at Tam Coc',
      'The limestone country and the rice fields',
      'Back in Hanoi in the evening'
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
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two nights in the old quarter, with a full day south among the rowing boats and rice fields of Ninh Binh.',
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
        img('e5y181gizy8jvyzc59gyilg4jawa_shutterstock_1425907181.jpg'),
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
        image: img('e5y181gizy8jvyzc59gyilg4jawa_shutterstock_1425907181.jpg'),
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
    name: 'Ho Chi Minh City',
    subtitle: 'Saigon, Cu Chi and the Mekong',
    dayLabel: 'Day 4 to 7',
    images: [
      img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
      img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
      img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg'),
      img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
    ],
    dayImages: {
      4: [
        img('ve6w5hll44si2fa8qxx6b9sepbs3_shutterstock_1218765286.jpg'),
        img('e7747wfxl9x32ioao96vp1zudykf_44844044645_6347bf750e_o.jpg'),
        img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
        img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg')
      ],
      5: [
        img('k0iwrtaiemzmywouhcz1remyihfd_shutterstock_175128359.jpg'),
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg'),
        img('evxpd53708fszmcogueld24ki5be_1467883599_2814329078_1317aa23fe_o.jpg'),
        img('g026k1g5paxncu3aear1czkltedu_1469613255_7469930222_08a752c099_o.jpg')
      ],
      6: [
        img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        img('lvds5da20701ls58hbi447grx3s2_8193351650_d1ff3fd0b7_z.jpg'),
        img('ktw7z5gp3xhl3n59iymqv4ksukb2_Ben_Tre_Turtle_Island.jpg'),
        img('6cupjrsxzkngfv8zrrp9japoty1n_sgn15.jpg')
      ],
      7: [
        img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
        img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
        img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg'),
        img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · South to Saigon`,
      'Breakfast on board, then the climb into the Surprise Cave',
      'Back to the pier and on to Hanoi airport',
      'The flight south to Saigon',
      'Check in in District 1, evening free',
      `${DAY_MARK}Day 5 · Saigon and the Cu Chi tunnels`,
      'Breakfast, then a half day of the city',
      'The palace, the cathedral and the war remnants museum',
      'North west to Cu Chi for the tunnels',
      'The trapdoors, the kitchens and the shafts',
      `${DAY_MARK}Day 6 · Mekong Delta`,
      'Breakfast, then south into the delta',
      'A boat through the coconut creeks at My Tho',
      'A sampan ride under the palms',
      'The coconut candy workshops, then back to the city',
      `${DAY_MARK}Day 7 · Departure from Saigon`,
      'Check out after breakfast',
      'Private transfer to Tan Son Nhat for your flight home'
    ],
    accommodation: {
      name: 'Cap Town Hotel, Ho Chi Minh',
      description: '3 nights · Breakfast and dinner · Standard room · 3★ · Small hotel in District 1, close to the market lanes',
      images: [
        img('v3r70yumd9oix321y3dedc9k034j_492412384.jpg'),
        img('7sdctznou6wldszxhp0djhhhnze2_208440539.jpg'),
        img('udfzc6af25eclyv7x15gvybcla9m_30352783.jpg'),
        img('qsuqjc0wchle7h4v9959opts8khm_208440615.jpg'),
        img('iz7e3padv2gzjeirxxqp5wp82alz_492388583.jpg'),
        img('cf9ukw2tk6py8kuyl2v7nyr0wzb7_208440529.jpg')
      ]
    },
    activities: [
      {
        name: 'Surprise Cave on Bo Hon island',
        day: 4,
        optional: false,
        image: img('ve6w5hll44si2fa8qxx6b9sepbs3_shutterstock_1218765286.jpg'),
        description: 'A morning climb into the Surprise Cave, three great chambers of stalactites above the water, before the boat turns back.'
      },
      {
        name: 'Saigon city tour',
        day: 5,
        optional: false,
        image: img('k0iwrtaiemzmywouhcz1remyihfd_shutterstock_175128359.jpg'),
        description: 'The Reunification Palace, the old post office and Notre Dame cathedral, then the war remnants museum and the Ben Thanh market.'
      },
      {
        name: 'Cu Chi tunnels half day tour',
        day: 5,
        optional: false,
        image: img('7c9y0w9lr632pl96udf5l9ek2h9h_shutterstock_690459592.jpg'),
        description: 'The tunnel network north west of the city, with the trapdoors, the kitchens and a crawl through a widened section of the original shafts.'
      },
      {
        name: 'Mekong Delta day tour',
        day: 6,
        optional: false,
        image: img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        description: 'South to My Tho for a boat into the coconut creeks, a sampan through the palms, and the workshops where they make coconut candy.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'The flight south for three nights, with the city, the Cu Chi tunnels and a full day in the Mekong Delta.',
      image: img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg')
    }
  }
];

const detail = {
  slug: 'vietnam-north-to-south-in-seven-days',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Vietnam North to South in Seven Days',
  alt: 'Ben Thanh market entrance in Ho Chi Minh City',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'A domestic flight, private transfers and guided tours',
  tag: 'Bestseller',
  tags: ['Culture', 'Short break'],
  price: 52915,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Ho Chi Minh City', 'Cu Chi', 'Mekong Delta'],
  stats: { days: 7, cities: 3, hotels: 3, activities: 6, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['11 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'The standard week: north, a night on the bay, then the south. Nothing clever about it, which is why it works.',
    quoteMore: 'Three nights in Saigon is one more than most itineraries give you, and the city rewards the extra day.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A week end to end: two nights in Hanoi with a Ninh Binh day, an overnight cruise in Halong Bay with the Surprise Cave, then three nights in Saigon with the city, the Cu Chi tunnels and a full day in the Mekong Delta.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with breakfast and dinner daily and all meals on the cruise boat; the domestic flight south; private transfers throughout; a Ninh Binh day tour; a shared overnight cruise in Halong Bay with the Surprise Cave; a Saigon city tour; the Cu Chi tunnels half day tour; a Mekong Delta day tour.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Ninh Binh day trip (B, D)', text: 'Breakfast, then south towards Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nThe limestone country and the rice fields\nBack in Hanoi in the evening', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then south towards Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'The limestone country and the rice fields'] },
    { title: 'Day 3: Overnight on the bay (B, L, D)', text: 'Breakfast and check out, then east towards the coast\nBoard your cruise boat in the early afternoon\nLunch and dinner on board\nA night moored among the limestone islands', hotel: 'Halong Royal Palace Cruise', highlights: ['Breakfast and check out, then east towards the coast', 'Board your cruise boat in the early afternoon', 'Lunch and dinner on board'] },
    { title: 'Day 4: South to Saigon (B, D)', text: 'Breakfast on board, then the climb into the Surprise Cave\nBack to the pier and on to Hanoi airport\nThe flight south to Saigon\nCheck in in District 1, evening free', hotel: 'Cap Town Hotel', highlights: ['Breakfast on board, then the climb into the Surprise Cave', 'Back to the pier and on to Hanoi airport', 'The flight south to Saigon'] },
    { title: 'Day 5: Saigon and the Cu Chi tunnels (B, D)', text: 'Breakfast, then a half day of the city\nThe palace, the cathedral and the war remnants museum\nNorth west to Cu Chi for the tunnels\nThe trapdoors, the kitchens and the shafts', hotel: 'Cap Town Hotel', highlights: ['Breakfast, then a half day of the city', 'The palace, the cathedral and the war remnants museum', 'North west to Cu Chi for the tunnels'] },
    { title: 'Day 6: Mekong Delta (B, D)', text: 'Breakfast, then south into the delta\nA boat through the coconut creeks at My Tho\nA sampan ride under the palms\nThe coconut candy workshops, then back to the city', hotel: 'Cap Town Hotel', highlights: ['Breakfast, then south into the delta', 'A boat through the coconut creeks at My Tho', 'A sampan ride under the palms'] },
    { title: 'Day 7: Departure from Saigon (-)', text: 'Check out after breakfast\nPrivate transfer to Tan Son Nhat for your flight home', hotel: 'Departure', highlights: ['Check out after breakfast', 'Private transfer to Tan Son Nhat for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Vietnam', href: '/asien/vietnam' },
  { label: detail.title }
];

export const vietnamNorthSouthSevenDaysBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const vietnamNorthSouthSevenDaysProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Ho Chi Minh City', 'Cu Chi', 'Mekong Delta'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 6,
  transfers: 9,
  meals: 11,
  price: detail.price,
  images: cardImages
};
