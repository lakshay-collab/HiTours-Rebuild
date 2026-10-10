// Northern Vietnam with Sapa and Ninh Binh. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
  img('kolljlsh0dco0cvfe86ypotns1g3_shutterstock_2206958995%20(1).jpg'),
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg'),
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
  img('gir9snyx9jkr5esvak2zq1rrhv4d_shutterstock_1624326598%20(1).jpg'),
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
  img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg'),
  img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('kolljlsh0dco0cvfe86ypotns1g3_shutterstock_2206958995%20(1).jpg'),
  img('w1565k4lizf9lymbm5s521one5lx_14392097857_a356e64d93_o.jpg'),
  img('gybfeqfjpyn66xg228uafegj0gfn_Kim_Son_Bao_Thang_Pagoda_from_the_summit.jpg'),
  img('arxe0tubt2bhkpzm6l3mnzhbv7nh_shutterstock_1425907181.jpg')
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
        img('yhb848cifhrtbttwsxy76l36fgik_87-ma-may.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
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
      'A cycle ride through the rice fields',
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
      description: 'Two nights in the old quarter, with a full day south to the rivers, caves and rice fields of Ninh Binh.',
      image: img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Sa Pa',
    dayLabel: 'Day 3',
    images: [
      img('tvatrz4bydoupbtjl4bbx74eg4ot_shutterstock_1159480507%20(1).jpg'),
      img('kolljlsh0dco0cvfe86ypotns1g3_shutterstock_2206958995%20(1).jpg'),
      img('a0h6b69ed04stvwxw3no17p8ljlx_shutterstock_478243228%20(1).jpg'),
      img('suxus13xjsedltzx1nbiq8uyc8zg_shutterstock_126530108.jpg')
    ],
    dayImages: {
      3: [
        img('6ifg6z60bgarkmik080icbrwunbf_shutterstock_773552500.jpg'),
        img('z56fv8n6n0die2ms20u45syj1cmp_1579684995_5.jpg'),
        img('ufnfwmsjl1x8oh8ksxfjk3jx2atv_pixelcut-export%20(10).jpeg'),
        img('tvatrz4bydoupbtjl4bbx74eg4ot_shutterstock_1159480507%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Into the hills at Sa Pa`,
      'Breakfast and check out, then north into the hills',
      'Check in at Sa Pa in the afternoon',
      'A half day on foot down into Cat Cat village',
      'Terraced fields, water wheels and a waterfall'
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
        day: 3,
        optional: false,
        image: img('6ifg6z60bgarkmik080icbrwunbf_shutterstock_773552500.jpg'),
        description: 'A half day on foot down into Cat Cat, a Black Hmong village of terraced fields, water wheels and a waterfall below Sa Pa.'
      }
    ],
    program: {
      name: 'Sa Pa',
      description: 'North into the hills for an afternoon walk down to Cat Cat village, a Black Hmong settlement below Sa Pa.',
      image: img('tvatrz4bydoupbtjl4bbx74eg4ot_shutterstock_1159480507%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Hanoi',
    subtitle: 'Fansipan and back to Hanoi',
    dayLabel: 'Day 4',
    images: [
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
    ],
    dayImages: {
      4: [
        img('ji2wic1vlv4njstfda8ssi80gujb_shutterstock_1624326598.jpg'),
        img('w1565k4lizf9lymbm5s521one5lx_14392097857_a356e64d93_o.jpg'),
        img('gybfeqfjpyn66xg228uafegj0gfn_Kim_Son_Bao_Thang_Pagoda_from_the_summit.jpg'),
        img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Fansipan and back to Hanoi`,
      'Breakfast, then the cable car up Fansipan',
      'The shrines and the viewing platform at the summit',
      'Back down and the long run to Hanoi',
      'Evening free in the city'
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
      {
        name: 'Fansipan mountain tour',
        day: 4,
        optional: false,
        image: img('ji2wic1vlv4njstfda8ssi80gujb_shutterstock_1624326598.jpg'),
        description: 'The cable car up Fansipan, the highest peak in Indochina, to the shrines and the viewing platform at the summit.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'The cable car to the summit of Fansipan in the morning, then the long run back to the city.',
      image: img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg')
    }
  },
  {
    letter: 'D',
    name: 'Halong Bay',
    dayLabel: 'Day 5',
    images: [
      img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
      img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg'),
      img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg'),
      img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg')
    ],
    dayImages: {
      5: [
        img('arxe0tubt2bhkpzm6l3mnzhbv7nh_shutterstock_1425907181.jpg'),
        img('3yvzew883i398qg1nytjaz1ju0q8_48479739932_e3fe5de4a5_o.jpg'),
        img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
        img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Overnight on the bay`,
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
        day: 5,
        optional: false,
        image: img('arxe0tubt2bhkpzm6l3mnzhbv7nh_shutterstock_1425907181.jpg'),
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
    letter: 'E',
    name: 'Hanoi',
    subtitle: 'Back in Hanoi',
    dayLabel: 'Day 6 to 7',
    images: [
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
    ],
    dayImages: {
      6: [
        img('2mpxugxniw895ly8f7tnow40v2ds_shutterstock_129338063.jpg'),
        img('e7747wfxl9x32ioao96vp1zudykf_44844044645_6347bf750e_o.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg'),
        img('cpvs34mpdp6fwdfxwv50ctuec38u_1467719114_9578411741_165f3caca2_o.jpg')
      ],
      7: [
        img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
        img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
        img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Surprise Cave and back to Hanoi`,
      'Breakfast on board as the boat moves',
      'The climb into the Surprise Cave',
      'Back to the pier and on to Hanoi',
      'Rest of the day free in the lanes',
      `${DAY_MARK}Day 7 · Departure from Hanoi`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
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
      {
        name: 'Surprise Cave on Bo Hon island',
        day: 6,
        optional: false,
        image: img('2mpxugxniw895ly8f7tnow40v2ds_shutterstock_129338063.jpg'),
        description: 'A morning climb into the Surprise Cave, three great chambers of stalactites above the water, before the boat turns back.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'The Surprise Cave on the way off the water, then a last night in the old quarter.',
      image: img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
    }
  }
];

const detail = {
  slug: 'northern-vietnam-with-sapa-and-ninh-binh',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Northern Vietnam with Sapa and Ninh Binh',
  alt: 'Hmong village houses among terraces below Sa Pa',
  days: '7 days / 6 nights',
  stations: '5 stops',
  transport: 'Private transfers, a mountain cable car and a cruise boat',
  tag: 'Grand tour',
  tags: ['Nature', 'Culture'],
  price: 50208,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Ninh Binh', 'Sa Pa', 'Halong Bay'],
  stats: { days: 7, cities: 3, hotels: 3, activities: 5, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['12 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'This is the full north in a week: the flooded fields at Tam Coc, the terraces at Sa Pa and a night on the bay.',
    quoteMore: 'The Ninh Binh day is long. Eat a proper breakfast, and keep small notes for the woman rowing your boat.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A week covering the whole north: two nights in Hanoi with a day among the rowing boats and rice fields of Ninh Binh, a night at Sa Pa for Cat Cat village and the Fansipan cable car, then an overnight cruise in Halong Bay with the Surprise Cave before a last night in the city.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with breakfast and dinner at the hotels, one of them on a cruise boat with lunch and dinner; private transfers throughout; a Ninh Binh day tour; a private cycle ride to Bich Dong; a half day walk to Cat Cat village; the Fansipan mountain tour with the cable car; a shared overnight cruise in Halong Bay with the Surprise Cave.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Ninh Binh and Bich Dong (B, D)', text: 'Breakfast, then south towards Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nA cycle ride through the rice fields\nBich Dong, a pagoda built into the rock', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then south towards Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'A cycle ride through the rice fields'] },
    { title: 'Day 3: Into the hills at Sa Pa (B, D)', text: 'Breakfast and check out, then north into the hills\nCheck in at Sa Pa in the afternoon\nA half day on foot down into Cat Cat village\nTerraced fields, water wheels and a waterfall', hotel: 'Delta Sapa Hotel', highlights: ['Breakfast and check out, then north into the hills', 'Check in at Sa Pa in the afternoon', 'A half day on foot down into Cat Cat village'] },
    { title: 'Day 4: Fansipan and back to Hanoi (B, D)', text: 'Breakfast, then the cable car up Fansipan\nThe shrines and the viewing platform at the summit\nBack down and the long run to Hanoi\nEvening free in the city', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then the cable car up Fansipan', 'The shrines and the viewing platform at the summit', 'Back down and the long run to Hanoi'] },
    { title: 'Day 5: Overnight on the bay (B, L, D)', text: 'Breakfast, then east towards the coast\nBoard your cruise boat in the early afternoon\nLunch and dinner on board\nA night moored among the limestone islands', hotel: 'Halong Royal Palace Cruise', highlights: ['Breakfast, then east towards the coast', 'Board your cruise boat in the early afternoon', 'Lunch and dinner on board'] },
    { title: 'Day 6: Surprise Cave and back to Hanoi (B, D)', text: 'Breakfast on board as the boat moves\nThe climb into the Surprise Cave\nBack to the pier and on to Hanoi\nRest of the day free in the lanes', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast on board as the boat moves', 'The climb into the Surprise Cave', 'Back to the pier and on to Hanoi'] },
    { title: 'Day 7: Departure from Hanoi (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const northernVietnamSapaNinhBinhBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const northernVietnamSapaNinhBinhProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Ninh Binh', 'Sa Pa', 'Halong Bay'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 5,
  hotels: 3,
  cities: 3,
  activities: 5,
  transfers: 10,
  meals: 12,
  price: detail.price,
  images: cardImages
};
