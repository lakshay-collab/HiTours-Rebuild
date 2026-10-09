// Exotic Vietnam with Ba Na and Hoi An. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
  img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
  img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
  img('z7xmgnia7kix67c89kvfcsuj4exo_shutterstock_1274290786.jpg'),
  img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
  img('anokjwn2ztodzjiuh41v7xtsi4nb_shutterstock_257155450.jpg'),
  img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
  img('ye6309pocbfjm5smj7x39yprj78h_shutterstock_2134950145.jpg'),
  img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
  img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
  img('ye6309pocbfjm5smj7x39yprj78h_shutterstock_2134950145.jpg'),
  img('tczmonqjxy04c5dyb42k9ckzr027_shutterstock_1101234365.jpg'),
  img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    subtitle: 'Hanoi and Ninh Binh',
    dayLabel: 'Day 1 to 2',
    images: [
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
    ],
    dayImages: {
      1: [
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('xf5ltzlprl4wk40yrzti9k9n836e_St._Joseph\'s_Cathedral_Hanoi_2.jpg'),
        img('54e3a5zijt2l2wotojw4kgscrcfx_shutterstock_1904433682.jpg')
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
        description: 'A cycle ride through the rice fields to Bich Dong, a three tier pagoda built into the rock face.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two nights in the old quarter, with a full day south to Ninh Binh and a cycle ride to Bich Dong.',
      image: img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Halong Bay',
    dayLabel: 'Day 3',
    images: [
      img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg'),
      img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
      img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg'),
      img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg')
    ],
    dayImages: {
      3: [
        img('prkmd94999bmb9jjmwskh0jpkkv8_shutterstock_1424935796.jpg'),
        img('co10oqk1r9n0kllwfq7q3aaubtc7_40307648665_8584ddecc8_o.jpg'),
        img('fj36l2h0k6obbqfmwhov2of349v5_ha-long-bay-sea-water-ship.jpg'),
        img('hgd0lkqqpjyb5kf9jxhj3agvo0q1_5536617078_0956a7edd1_o.jpg')
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
        image: img('prkmd94999bmb9jjmwskh0jpkkv8_shutterstock_1424935796.jpg'),
        description: 'A shared cruise out among the limestone islands, with lunch and dinner on board and a night moored in a quiet bay.'
      }
    ],
    program: {
      name: 'Halong Bay',
      description: 'A night on the water among the limestone islands, with all meals served on board.',
      image: img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Da Nang',
    subtitle: 'Da Nang and Ba Na Hills',
    dayLabel: 'Day 4 to 5',
    images: [
      img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
      img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
      img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
      img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg')
    ],
    dayImages: {
      4: [
        img('ve6w5hll44si2fa8qxx6b9sepbs3_shutterstock_1218765286.jpg'),
        img('e7747wfxl9x32ioao96vp1zudykf_44844044645_6347bf750e_o.jpg'),
        img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
        img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg')
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
        image: img('ve6w5hll44si2fa8qxx6b9sepbs3_shutterstock_1218765286.jpg'),
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
      image: img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Hoi An',
    dayLabel: 'Day 6 to 7',
    images: [
      img('ye6309pocbfjm5smj7x39yprj78h_shutterstock_2134950145.jpg'),
      img('48mm94bu553qp5u88lgdh7p1ww3c_shutterstock_1345141238.jpg'),
      img('tczmonqjxy04c5dyb42k9ckzr027_shutterstock_1101234365.jpg'),
      img('z7xmgnia7kix67c89kvfcsuj4exo_shutterstock_1274290786.jpg')
    ],
    dayImages: {
      6: [
        img('mpkg124uacuo2s71x3f0zfzuhuyo_1467790941_26937034641_89d6ed7fa5_o.jpg'),
        img('g3xcctfo2n8bdfwx1jp4xfhcmec5_download%20-%202023-08-09T125421.802.png'),
        img('29a9ytxkwnrco3x3esi8dcjyqjqo_1467789148_4750973671_28c49e9a40_b.jpg'),
        img('ye6309pocbfjm5smj7x39yprj78h_shutterstock_2134950145.jpg')
      ],
      7: [
        img('ye6309pocbfjm5smj7x39yprj78h_shutterstock_2134950145.jpg'),
        img('48mm94bu553qp5u88lgdh7p1ww3c_shutterstock_1345141238.jpg'),
        img('tczmonqjxy04c5dyb42k9ckzr027_shutterstock_1101234365.jpg'),
        img('z7xmgnia7kix67c89kvfcsuj4exo_shutterstock_1274290786.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · On to Hoi An`,
      'Breakfast and check out, then south to Hoi An',
      'Check in at your garden hotel',
      'Rest of the day free in the old town',
      'Optional: the lantern lit lanes after dark',
      `${DAY_MARK}Day 7 · Departure from Da Nang`,
      'Breakfast at the hotel and check out',
      'Private transfer to Da Nang airport for your flight home'
    ],
    accommodation: {
      name: 'Hoi An Rose Garden Hotel, Hoi An',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Garden hotel a short ride from the old town lanterns',
      images: [
        img('odbxubdlzdehhn0wl6vbtjalu0rf_img6.jpg'),
        img('hbdtm5oypteil21kcqdexeqb728z_img7.jpg'),
        img('3qnamlyoq3i7m10yk6liveh4apkd_img1.jpg'),
        img('gzqaie5nntwiwtbjhzii3cnw6ivs_img28.jpg'),
        img('pz4rralmn5pjoa6ocf2noxlxevx7_img2.jpg'),
        img('m8s4kvqffnkrbpocqzwmakqak4hb_img19.jpg'),
        img('lsatlb2tv17lb2pgprm6sskr9ncd_img14.jpg'),
        img('zuo3wjlbah5hh5yloouuvl7ivkjf_download%20(81).jpg'),
        img('v6e8kx7zlnnpml0o97x6wtzpi0lh_img9.jpg'),
        img('8gu4sqfghd6a9ylvt79v1alibnyz_img11.jpg'),
        img('0ztg5v6zrgqg99bf8fgp6ltzpske_download%20(82).jpg'),
        img('xy035554asrpocjmdx968cc9p5ml_img42.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Hoi An',
      description: 'A last night in the old trading town, with the afternoon free among the lanterns and tailors.',
      image: img('ye6309pocbfjm5smj7x39yprj78h_shutterstock_2134950145.jpg')
    }
  }
];

const detail = {
  slug: 'exotic-vietnam-with-ba-na-and-hoi-an',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Exotic Vietnam with Ba Na and Hoi An',
  alt: 'The Golden Bridge held up by stone hands at Ba Na Hills',
  days: '7 days / 6 nights',
  stations: '4 stops',
  transport: 'A domestic flight, private transfers and guided tours',
  tag: 'Bestseller',
  tags: ['Culture', 'Nature'],
  price: 55832,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Da Nang', 'Ba Na Hills', 'Hoi An'],
  stats: { days: 7, cities: 4, hotels: 4, activities: 5, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
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
    quote: 'North and centre rather than north and south. Ba Na Hills and Hoi An are the two the centre is known for.',
    quoteMore: 'Go up Ba Na early. The bridge is empty for the first hour and the cloud tends to clear before the crowds arrive.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days from Hanoi to the central coast: two nights in the old quarter with a Ninh Binh day and a Bich Dong cycle ride, an overnight cruise in Halong Bay with the Surprise Cave, two nights in Da Nang for Ba Na Hills and the Golden Bridge, and a last night in Hoi An.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with breakfast and dinner at the hotels and all meals on the cruise boat; the domestic flight to Da Nang; private transfers throughout; a Ninh Binh day tour; a cycle ride to Bich Dong; a shared overnight cruise in Halong Bay with the Surprise Cave; a full day up at Ba Na with the Golden Bridge.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Ninh Binh and Bich Dong (B, D)', text: 'Breakfast, then south towards Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nA cycle ride through the rice fields\nBich Dong, a pagoda built into the rock', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then south towards Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'A cycle ride through the rice fields'] },
    { title: 'Day 3: Overnight on the bay (B, L, D)', text: 'Breakfast and check out, then east towards the coast\nBoard your cruise boat in the early afternoon\nLunch and dinner on board\nA night moored among the limestone islands', hotel: 'Halong Royal Palace Cruise', highlights: ['Breakfast and check out, then east towards the coast', 'Board your cruise boat in the early afternoon', 'Lunch and dinner on board'] },
    { title: 'Day 4: South to Da Nang (B, D)', text: 'Breakfast on board, then the climb into the Surprise Cave\nBack to the pier and on to Hanoi airport\nThe flight to Da Nang\nCheck in near the beach, evening free', hotel: 'Luxtery Da Nang', highlights: ['Breakfast on board, then the climb into the Surprise Cave', 'Back to the pier and on to Hanoi airport', 'The flight to Da Nang'] },
    { title: 'Day 5: Ba Na Hills (B, D)', text: 'Breakfast, then the cable car up to Ba Na\nThe Golden Bridge held up by two stone hands\nThe French village and the gardens at the top\nBack down to Da Nang in the evening', hotel: 'Luxtery Da Nang', highlights: ['Breakfast, then the cable car up to Ba Na', 'The Golden Bridge held up by two stone hands', 'The French village and the gardens at the top'] },
    { title: 'Day 6: On to Hoi An (B, D)', text: 'Breakfast and check out, then south to Hoi An\nCheck in at your garden hotel\nRest of the day free in the old town\nOptional: the lantern lit lanes after dark', hotel: 'Hoi An Rose Garden Hotel', highlights: ['Breakfast and check out, then south to Hoi An', 'Check in at your garden hotel', 'Rest of the day free in the old town'] },
    { title: 'Day 7: Departure from Da Nang (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Da Nang airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Da Nang airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Vietnam', href: '/asien/vietnam' },
  { label: detail.title }
];

export const exoticVietnamBaNaHoiAnBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const exoticVietnamBaNaHoiAnProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Da Nang', 'Ba Na Hills', 'Hoi An'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 5,
  transfers: 10,
  meals: 12,
  price: detail.price,
  images: cardImages
};
