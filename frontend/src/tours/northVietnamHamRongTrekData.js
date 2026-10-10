// North Vietnam with the Ham Rong Trek. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
  img('kolljlsh0dco0cvfe86ypotns1g3_shutterstock_2206958995%20(1).jpg'),
  img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
  img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('yqz8mc9sdjkh3e508v1ruw9gkbzc_shutterstock_2194248193%20(1).jpg'),
  img('anokjwn2ztodzjiuh41v7xtsi4nb_shutterstock_257155450.jpg'),
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
  img('vcv40zxdgi2yk3gzr7z58a6ydcid_shutterstock_145660013%20(1).jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
  img('yhb848cifhrtbttwsxy76l36fgik_87-ma-may.jpg'),
  img('of44v39wp9am3io7u2sxw0s5bjfg_87-ma-may.jpg'),
  img('mqh0cx5yilooc97j0h5bemeobg01_1613645047_shutterstock_1676139631.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
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
        img('of44v39wp9am3io7u2sxw0s5bjfg_87-ma-may.jpg'),
        img('mqh0cx5yilooc97j0h5bemeobg01_1613645047_shutterstock_1676139631.jpg'),
        img('xf5ltzlprl4wk40yrzti9k9n836e_St._Joseph\'s_Cathedral_Hanoi_2.jpg')
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
      'Check in at your hotel in the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake',
      `${DAY_MARK}Day 2 · Hanoi city tour`,
      'Breakfast, then a full guided day of the city',
      'The mausoleum and the one pillar pagoda',
      'The Temple of Literature, the old university',
      'Lunch included, then the old quarter lanes'
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
        name: 'Hanoi full day city tour with lunch',
        day: 2,
        optional: false,
        image: img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        description: 'A full day with a guide through the Ho Chi Minh mausoleum, the one pillar pagoda, the Temple of Literature and the old quarter, with lunch included.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two nights in the old quarter, with a full guided day of the city and lunch included.',
      image: img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Sa Pa',
    dayLabel: 'Day 3 to 4',
    images: [
      img('tvatrz4bydoupbtjl4bbx74eg4ot_shutterstock_1159480507%20(1).jpg'),
      img('kolljlsh0dco0cvfe86ypotns1g3_shutterstock_2206958995%20(1).jpg'),
      img('a0h6b69ed04stvwxw3no17p8ljlx_shutterstock_478243228%20(1).jpg'),
      img('suxus13xjsedltzx1nbiq8uyc8zg_shutterstock_126530108.jpg')
    ],
    dayImages: {
      3: [
        img('1r9a7rir5rziswcxfnftvb9oxw6r_Ham%20Rong%20Mountain%20Sa%20Pa%201.jpg'),
        img('tvatrz4bydoupbtjl4bbx74eg4ot_shutterstock_1159480507%20(1).jpg'),
        img('kolljlsh0dco0cvfe86ypotns1g3_shutterstock_2206958995%20(1).jpg'),
        img('a0h6b69ed04stvwxw3no17p8ljlx_shutterstock_478243228%20(1).jpg')
      ],
      4: [
        img('ji2wic1vlv4njstfda8ssi80gujb_shutterstock_1624326598.jpg'),
        img('w1565k4lizf9lymbm5s521one5lx_14392097857_a356e64d93_o.jpg'),
        img('gybfeqfjpyn66xg228uafegj0gfn_Kim_Son_Bao_Thang_Pagoda_from_the_summit.jpg'),
        img('tvatrz4bydoupbtjl4bbx74eg4ot_shutterstock_1159480507%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Sa Pa and Ham Rong`,
      'Breakfast and check out, then north into the hills',
      'Check in at Sa Pa in the afternoon',
      'The climb through the rock gardens of Ham Rong',
      'The cloud yard above the Muong Hoa valley',
      `${DAY_MARK}Day 4 · Fansipan summit`,
      'Breakfast, then the cable car up Fansipan',
      'The shrines and the viewing platform at the summit',
      'Afternoon free in Sa Pa town',
      'Optional: the market and the lake'
    ],
    accommodation: {
      name: 'Delta Sapa Hotel, Sa Pa',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Simple hotel in the middle of Sa Pa town, near the lake',
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
        name: 'Ham Rong mountain trek',
        day: 3,
        optional: false,
        image: img('1r9a7rir5rziswcxfnftvb9oxw6r_Ham%20Rong%20Mountain%20Sa%20Pa%201.jpg'),
        description: 'A climb through the rock gardens and orchid beds of Ham Rong to the cloud yard, with the whole Muong Hoa valley below.'
      },
      {
        name: 'Fansipan mountain tour',
        day: 4,
        optional: false,
        image: img('ji2wic1vlv4njstfda8ssi80gujb_shutterstock_1624326598.jpg'),
        description: 'The cable car up Fansipan, the highest peak in Indochina, to the shrines and the viewing platform at the summit.'
      }
    ],
    program: {
      name: 'Sa Pa',
      description: 'Two nights in the hill town, with the climb up Ham Rong and the cable car to the summit of Fansipan.',
      image: img('tvatrz4bydoupbtjl4bbx74eg4ot_shutterstock_1159480507%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Halong Bay',
    dayLabel: 'Day 5',
    images: [
      img('4htmt1ezsgvun0n6isr7x482cgy6_shutterstock_211441507.jpg'),
      img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg'),
      img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
      img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg')
    ],
    dayImages: {
      5: [
        img('4htmt1ezsgvun0n6isr7x482cgy6_shutterstock_211441507.jpg'),
        img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg'),
        img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
        img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Overnight on the bay`,
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
        day: 5,
        optional: false,
        image: img('4htmt1ezsgvun0n6isr7x482cgy6_shutterstock_211441507.jpg'),
        description: 'A shared cruise out among the limestone islands, with lunch and dinner on board and a night moored in a quiet bay.'
      }
    ],
    program: {
      name: 'Halong Bay',
      description: 'A night on the water among the limestone islands, with all meals served on board.',
      image: img('4htmt1ezsgvun0n6isr7x482cgy6_shutterstock_211441507.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Hanoi',
    subtitle: 'Back in Hanoi',
    dayLabel: 'Day 6 to 7',
    images: [
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
    ],
    dayImages: {
      6: [
        img('3ap4wsn3qe96cohccv3mz2z8srx8_1613643923_shutterstock_750535426.jpg'),
        img('ke3q0uxg50psm5hrx87i9kef4y0w_1613643246_shutterstock_1546675766.jpg'),
        img('brvfdbsap5hlacv1dqx508978eqv_bao-son-paradise-park-1280x720.jpg'),
        img('azek7wqso52iph2bswx4slklzkn6_69628650_1f681b43e0_h.jpg')
      ],
      7: [
        img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
        img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
        img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Back to Hanoi`,
      'Breakfast on board as the boat moves',
      'Back to the pier in the late morning',
      'On to Hanoi and check in',
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

    ],
    program: {
      name: 'Hanoi',
      description: 'Off the water and back to the city for a last night in the old quarter.',
      image: img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg')
    }
  }
];

const detail = {
  slug: 'north-vietnam-with-the-ham-rong-trek',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'North Vietnam with the Ham Rong Trek',
  alt: 'Stone garden path on Ham Rong mountain above Sa Pa',
  days: '7 days / 6 nights',
  stations: '4 stops',
  transport: 'Private transfers, a mountain cable car and a cruise boat',
  tag: 'Nature',
  tags: ['Nature', 'Culture'],
  price: 49400,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Sa Pa', 'Halong Bay'],
  stats: { days: 7, cities: 3, hotels: 3, activities: 4, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
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
    quote: 'Ham Rong is the walk people skip, and it gives you the best view of the valley without a full day of trekking.',
    quoteMore: 'Wear proper shoes for Ham Rong. The steps are stone and they are slick in the morning mist.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days in the north with two full days in the hills: a guided day of Hanoi with lunch, two nights at Sa Pa for the Ham Rong climb and the Fansipan cable car, then an overnight cruise among the limestone islands of Halong Bay.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with breakfast and dinner at the hotels, one of them on a cruise boat with lunch and dinner; private transfers throughout; a full day guided tour of Hanoi with lunch; the Ham Rong mountain trek; the Fansipan mountain tour with the cable car; a shared overnight cruise in Halong Bay.',
  intro2: 'Not included: international flights; Vietnam visa fees; other lunches; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Hanoi city tour (B, L, D)', text: 'Breakfast, then a full guided day of the city\nThe mausoleum and the one pillar pagoda\nThe Temple of Literature, the old university\nLunch included, then the old quarter lanes', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then a full guided day of the city', 'The mausoleum and the one pillar pagoda', 'The Temple of Literature, the old university'] },
    { title: 'Day 3: Sa Pa and Ham Rong (B, D)', text: 'Breakfast and check out, then north into the hills\nCheck in at Sa Pa in the afternoon\nThe climb through the rock gardens of Ham Rong\nThe cloud yard above the Muong Hoa valley', hotel: 'Delta Sapa Hotel', highlights: ['Breakfast and check out, then north into the hills', 'Check in at Sa Pa in the afternoon', 'The climb through the rock gardens of Ham Rong'] },
    { title: 'Day 4: Fansipan summit (B, D)', text: 'Breakfast, then the cable car up Fansipan\nThe shrines and the viewing platform at the summit\nAfternoon free in Sa Pa town\nOptional: the market and the lake', hotel: 'Delta Sapa Hotel', highlights: ['Breakfast, then the cable car up Fansipan', 'The shrines and the viewing platform at the summit', 'Afternoon free in Sa Pa town'] },
    { title: 'Day 5: Overnight on the bay (B, L, D)', text: 'Breakfast and check out, then east towards the coast\nBoard your cruise boat in the early afternoon\nLunch and dinner on board\nA night moored among the limestone islands', hotel: 'Halong Royal Palace Cruise', highlights: ['Breakfast and check out, then east towards the coast', 'Board your cruise boat in the early afternoon', 'Lunch and dinner on board'] },
    { title: 'Day 6: Back to Hanoi (B, D)', text: 'Breakfast on board as the boat moves\nBack to the pier in the late morning\nOn to Hanoi and check in\nRest of the day free in the lanes', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast on board as the boat moves', 'Back to the pier in the late morning', 'On to Hanoi and check in'] },
    { title: 'Day 7: Departure from Hanoi (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; other lunches; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const northVietnamHamRongTrekBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const northVietnamHamRongTrekProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Sa Pa', 'Halong Bay'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 4,
  hotels: 3,
  cities: 3,
  activities: 4,
  transfers: 9,
  meals: 11,
  price: detail.price,
  images: cardImages
};
