// Wonders of Vietnam Sapa and the Bay. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
  img('suxus13xjsedltzx1nbiq8uyc8zg_shutterstock_126530108.jpg'),
  img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg'),
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
  img('tvatrz4bydoupbtjl4bbx74eg4ot_shutterstock_1159480507%20(1).jpg'),
  img('ess8tbxn8tc68q49uptyn8nsx4he_shutterstock_1218764578.jpg'),
  img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('yqz8mc9sdjkh3e508v1ruw9gkbzc_shutterstock_2194248193%20(1).jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
  img('tvatrz4bydoupbtjl4bbx74eg4ot_shutterstock_1159480507%20(1).jpg'),
  img('a0h6b69ed04stvwxw3no17p8ljlx_shutterstock_478243228%20(1).jpg'),
  img('ji2wic1vlv4njstfda8ssi80gujb_shutterstock_1624326598.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    dayLabel: 'Day 1',
    images: [
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg')
    ],
    dayImages: {
      1: [
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hanoi`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'Check in at your hotel in the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake'
    ],
    accommodation: {
      name: 'Hm Boutique Hotel Hanoi, Hanoi',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Small boutique hotel in the old quarter',
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

    ],
    program: {
      name: 'Hanoi',
      description: 'A first night in the old quarter with the evening free around Hoan Kiem lake.',
      image: img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Sa Pa',
    dayLabel: 'Day 2 to 3',
    images: [
      img('a0h6b69ed04stvwxw3no17p8ljlx_shutterstock_478243228%20(1).jpg'),
      img('suxus13xjsedltzx1nbiq8uyc8zg_shutterstock_126530108.jpg'),
      img('vcv40zxdgi2yk3gzr7z58a6ydcid_shutterstock_145660013%20(1).jpg'),
      img('kuu6ilj5a7xtrd9g0xiv8kv71jgr_shutterstock_2180265961%20(1).jpg')
    ],
    dayImages: {
      2: [
        img('6ifg6z60bgarkmik080icbrwunbf_shutterstock_773552500.jpg'),
        img('z56fv8n6n0die2ms20u45syj1cmp_1579684995_5.jpg'),
        img('ufnfwmsjl1x8oh8ksxfjk3jx2atv_pixelcut-export%20(10).jpeg'),
        img('a0h6b69ed04stvwxw3no17p8ljlx_shutterstock_478243228%20(1).jpg')
      ],
      3: [
        img('ji2wic1vlv4njstfda8ssi80gujb_shutterstock_1624326598.jpg'),
        img('w1565k4lizf9lymbm5s521one5lx_14392097857_a356e64d93_o.jpg'),
        img('gybfeqfjpyn66xg228uafegj0gfn_Kim_Son_Bao_Thang_Pagoda_from_the_summit.jpg'),
        img('a0h6b69ed04stvwxw3no17p8ljlx_shutterstock_478243228%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Into the hills at Sa Pa`,
      'Breakfast and check out, then north into the hills',
      'Check in at Sa Pa in the afternoon',
      'A half day on foot down into Cat Cat village',
      'Terraced fields, water wheels and a waterfall',
      `${DAY_MARK}Day 3 · Fansipan and back to Hanoi`,
      'Breakfast, then the cable car up Fansipan',
      'The shrines and the viewing platform at the summit',
      'Back down and the long run to Hanoi',
      'Evening free in the city'
    ],
    accommodation: {
      name: 'Delta Sapa Hotel, Sa Pa',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Simple hotel in the middle of Sa Pa town, near the lake',
      images: [
        img('limstmvnik08pip9jub690x51i84_recpetopo.jpg'),
        img('l3jqwsnembt6h7ioh5qidntd4qur_img1.jpg'),
        img('k80dpa4lv8wbswaiy9h7k21wsm26_img35.jpg'),
        img('ezbw70gbh3alih4n492xscwl7qyr_img3.jpg'),
        img('mefgng6du6hkttv60wjd98wdwvva_img33.jpg'),
        img('rhfkkotbpkfx0979l4t8b2r2wtz6_image%203.jpg'),
        img('rj01wl432uqn1u14ulc27ohaqbo5_image%201.jpg'),
        img('qfogcty56u0ulgku74nfxucdiffj_img2.jpg'),
        img('p37pox6pao7fvojofimayhaiplsx_img36.jpg'),
        img('rxvs5yu1pi7wbuw1kd27sy4phd5w_img17.jpg'),
        img('li1n7ag17t6xuywocim8rck8rmoz_f9fa89d2.jpg')
      ]
    },
    activities: [
      {
        name: 'Cat Cat village walk',
        day: 2,
        optional: false,
        image: img('6ifg6z60bgarkmik080icbrwunbf_shutterstock_773552500.jpg'),
        description: 'A half day on foot down into Cat Cat, a Black Hmong village of terraced fields, water wheels and a waterfall below Sa Pa.'
      },
      {
        name: 'Fansipan mountain tour',
        day: 3,
        optional: false,
        image: img('ji2wic1vlv4njstfda8ssi80gujb_shutterstock_1624326598.jpg'),
        description: 'The cable car up Fansipan, the highest peak in Indochina, to the shrines and the viewing platform at the summit.'
      }
    ],
    program: {
      name: 'Sa Pa',
      description: 'Up into the northern hills for the terraced fields of Cat Cat village and the cable car to the top of Fansipan.',
      image: img('a0h6b69ed04stvwxw3no17p8ljlx_shutterstock_478243228%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Halong Bay',
    dayLabel: 'Day 4',
    images: [
      img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
      img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg'),
      img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg'),
      img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg')
    ],
    dayImages: {
      4: [
        img('e5y181gizy8jvyzc59gyilg4jawa_shutterstock_1425907181.jpg'),
        img('3yvzew883i398qg1nytjaz1ju0q8_48479739932_e3fe5de4a5_o.jpg'),
        img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
        img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Overnight on the bay`,
      'Breakfast, then east towards the coast',
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
        day: 4,
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
    letter: 'D',
    name: 'Hanoi',
    subtitle: 'Back in Hanoi',
    dayLabel: 'Day 5 to 6',
    images: [
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg')
    ],
    dayImages: {
      5: [
        img('w12e64veaq0wv5ih134ampklbccr_shutterstock_1604743951.jpg'),
        img('e7747wfxl9x32ioao96vp1zudykf_44844044645_6347bf750e_o.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg'),
        img('zv1gcf0zxn8h92yt1vcjn8cn04c0_1613631767_shutterstock_449720002.jpg')
      ],
      6: [
        img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
        img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
        img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Back to Hanoi`,
      'Breakfast on board as the boat moves',
      'Back to the pier in the late morning',
      'On to Hanoi and check in',
      'Rest of the day free in the lanes',
      `${DAY_MARK}Day 6 · Departure from Hanoi`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
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

    ],
    program: {
      name: 'Hanoi',
      description: 'Back from the coast for the last two nights, with free time in the lanes.',
      image: img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
    }
  }
];

const detail = {
  slug: 'wonders-of-vietnam-sapa-and-the-bay',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Wonders of Vietnam Sapa and the Bay',
  alt: 'Terraced rice fields on the hillsides around Sa Pa',
  days: '6 days / 5 nights',
  stations: '4 stops',
  transport: 'Private transfers, a mountain cable car and a cruise boat',
  tag: 'Short break',
  tags: ['Nature', 'Short break'],
  price: 43652,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Sa Pa', 'Halong Bay'],
  stats: { days: 6, cities: 3, hotels: 3, activities: 3, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['10 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Six days and you still get the hills and the bay. It is a lot of road, but the two landscapes are worth it.',
    quoteMore: 'Sa Pa is cold and often in cloud from December to February. Take a warm layer even if Hanoi is humid when you land.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days in the north: a night in Hanoi, then up to Sa Pa for the terraced fields of Cat Cat village and the cable car to the summit of Fansipan, an overnight cruise among the limestone islands of Halong Bay, and two last nights in the city.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights with breakfast and dinner at the hotels, one of them on a cruise boat with lunch and dinner; private transfers throughout; a half day walk to Cat Cat village; the Fansipan mountain tour with the cable car; a shared overnight cruise in Halong Bay.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Into the hills at Sa Pa (B, D)', text: 'Breakfast and check out, then north into the hills\nCheck in at Sa Pa in the afternoon\nA half day on foot down into Cat Cat village\nTerraced fields, water wheels and a waterfall', hotel: 'Delta Sapa Hotel', highlights: ['Breakfast and check out, then north into the hills', 'Check in at Sa Pa in the afternoon', 'A half day on foot down into Cat Cat village'] },
    { title: 'Day 3: Fansipan and back to Hanoi (B, D)', text: 'Breakfast, then the cable car up Fansipan\nThe shrines and the viewing platform at the summit\nBack down and the long run to Hanoi\nEvening free in the city', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then the cable car up Fansipan', 'The shrines and the viewing platform at the summit', 'Back down and the long run to Hanoi'] },
    { title: 'Day 4: Overnight on the bay (B, L, D)', text: 'Breakfast, then east towards the coast\nBoard your cruise boat in the early afternoon\nLunch and dinner on board\nA night moored among the limestone islands', hotel: 'Halong Royal Palace Cruise', highlights: ['Breakfast, then east towards the coast', 'Board your cruise boat in the early afternoon', 'Lunch and dinner on board'] },
    { title: 'Day 5: Back to Hanoi (B, D)', text: 'Breakfast on board as the boat moves\nBack to the pier in the late morning\nOn to Hanoi and check in\nRest of the day free in the lanes', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast on board as the boat moves', 'Back to the pier in the late morning', 'On to Hanoi and check in'] },
    { title: 'Day 6: Departure from Hanoi (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const wondersOfVietnamSapaBayBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const wondersOfVietnamSapaBayProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Sa Pa', 'Halong Bay'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 4,
  hotels: 3,
  cities: 3,
  activities: 3,
  transfers: 8,
  meals: 10,
  price: detail.price,
  images: cardImages
};
