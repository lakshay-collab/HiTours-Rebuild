// Glimpse of Vietnam South to North. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
  img('0hl2ran66zkzyfc9ou4bgafxyi59_shutterstock_419351539.jpg'),
  img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
  img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
  img('dss9mhbwcke82h98ijsn3woqtw5r_shutterstock_1343287187.jpg'),
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
  img('tk9c1s0istosqsja2oydsno878y4_shutterstock_2202972169.jpg'),
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
  img('0hl2ran66zkzyfc9ou4bgafxyi59_shutterstock_419351539.jpg'),
  img('dss9mhbwcke82h98ijsn3woqtw5r_shutterstock_1343287187.jpg'),
  img('tk9c1s0istosqsja2oydsno878y4_shutterstock_2202972169.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ho Chi Minh City',
    subtitle: 'Saigon and the Mekong',
    dayLabel: 'Day 1 to 2',
    images: [
      img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
      img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
      img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg'),
      img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
    ],
    dayImages: {
      1: [
        img('o3s5ddj3fn5qait83kv3nh7svc0p_shutterstock_2312652627.jpg'),
        img('4v6uzks4tncmsj994n52g9qwwzii_notr.webp'),
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg'),
        img('edv5z4jl7qnqqv3sn3jzh2droay4_1484035778_1-saigon-central-post-office-saigon-central-post-office.jpg')
      ],
      2: [
        img('vwsw0i1iub615jrlp8wyibkg4mmh_shutterstock_1035848284.jpg'),
        img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
        img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
        img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and Saigon city tour`,
      'Arrival at Tan Son Nhat and transfer to your hotel',
      'A half day of the city with a guide',
      'The palace, the cathedral and the war remnants museum',
      'Check in and the evening free',
      `${DAY_MARK}Day 2 · Mekong Delta`,
      'Breakfast, then south into the delta',
      'A boat through the coconut creeks at My Tho',
      'A sampan ride under the palms',
      'The coconut candy workshops, then back to the city'
    ],
    accommodation: {
      name: 'Avanti Saigon Hotel, Ho Chi Minh',
      description: '2 nights · Breakfast · Standard room · 3★ · Small hotel in District 1, a short walk from the opera house',
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
        name: 'Saigon half day city tour',
        day: 1,
        optional: false,
        image: img('o3s5ddj3fn5qait83kv3nh7svc0p_shutterstock_2312652627.jpg'),
        description: 'The Reunification Palace, the old post office and Notre Dame cathedral, then the war remnants museum and the Ben Thanh market.'
      },
      {
        name: 'Mekong Delta full day tour',
        day: 2,
        optional: false,
        image: img('vwsw0i1iub615jrlp8wyibkg4mmh_shutterstock_1035848284.jpg'),
        description: 'South to My Tho for a boat into the coconut creeks, a sampan through the palms, and the workshops where they make coconut candy.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'Two nights in District 1 with the city on arrival and a full day in the Mekong Delta.',
      image: img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Da Nang',
    subtitle: 'Cu Chi, Da Nang and Ba Na',
    dayLabel: 'Day 3 to 5',
    images: [
      img('wb01ogzxgiz6x3hb59ek83nezodd_shutterstock_2264459627.jpg'),
      img('0hl2ran66zkzyfc9ou4bgafxyi59_shutterstock_419351539.jpg'),
      img('tk9c1s0istosqsja2oydsno878y4_shutterstock_2202972169.jpg'),
      img('b51ld2wunisv0or8rv1v78pvt08d_shutterstock_1124340731.jpg')
    ],
    dayImages: {
      3: [
        img('38ft2d9t2l6ai0ktyxllrhdbncvc_shutterstock_429912322.jpg'),
        img('2fqc9nmqifyv07bhi7n7gqf3cxhl_shutterstock_690459592.jpg'),
        img('wb01ogzxgiz6x3hb59ek83nezodd_shutterstock_2264459627.jpg'),
        img('0hl2ran66zkzyfc9ou4bgafxyi59_shutterstock_419351539.jpg')
      ],
      4: [
        img('hac0atag7svpfutjqaoc2dvnlay5_shutterstock_1345141253.jpg'),
        img('4ajvifpqrthujg1eszffqu8aibtm_download%20(100).jpg'),
        img('ujk4qbm4n62ojzh1oi2cead2qneb_shutterstock_469510655.jpg'),
        img('okfkwi6un4p5vz0fx0tu8f0m1ek9_1467286953_C_E1_BA_A7u_R_E1_BB_93ng.jpg')
      ],
      5: [
        img('e0sv7qhxf4fg3gd33dfe1liycj4h_shutterstock_2178792551.jpg'),
        img('84tapj6qwgvbv9sgdfd6q1233uak_1467287160_Linh_Ung_Pagoda.jpg'),
        img('qsqukn2x2pz1nowv3rst121kyevw_Le-Jardin-DAmour-Gardens-overview.jpg'),
        img('cisf0qbrjl6ds3sebcig4ti912px_a2-770x500.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Cu Chi and on to Da Nang`,
      'Breakfast, then north west to Cu Chi',
      'The tunnels in a small group with a guide',
      'The flight to Da Nang in the afternoon',
      'Check in near the beach, evening free',
      `${DAY_MARK}Day 4 · Cam Thanh basket boats`,
      'Breakfast, then out to Cam Thanh',
      'A basket boat spun through the water palms',
      'The creeks and the rowers at work',
      'Afternoon free on the coast',
      `${DAY_MARK}Day 5 · Ba Na Hills`,
      'Breakfast, then the cable car up to Ba Na',
      'The bridge held up by two stone hands',
      'The French village and the gardens at the top',
      'Back down to Da Nang in the evening'
    ],
    accommodation: {
      name: 'Luxtery Da Nang, Danang',
      description: '3 nights · Breakfast and dinner · Standard room · 3★ · Simple hotel a few streets back from My Khe beach',
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
        name: 'Cu Chi tunnels in a small group',
        day: 3,
        optional: false,
        image: img('38ft2d9t2l6ai0ktyxllrhdbncvc_shutterstock_429912322.jpg'),
        description: 'The tunnel network north west of Saigon in a small group, with the trapdoors and the kitchens, before the flight to the coast.'
      },
      {
        name: 'Cam Thanh basket boat trip',
        day: 4,
        optional: false,
        image: img('hac0atag7svpfutjqaoc2dvnlay5_shutterstock_1345141253.jpg'),
        description: 'A round bamboo basket boat spun through the water coconut palms at Cam Thanh, with the rowers showing off in the creeks.'
      },
      {
        name: 'Ba Na Hills with the Golden Bridge',
        day: 5,
        optional: false,
        image: img('e0sv7qhxf4fg3gd33dfe1liycj4h_shutterstock_2178792551.jpg'),
        description: 'The long cable car up to Ba Na, the bridge held up by two stone hands, and the French village and gardens at the top.'
      }
    ],
    program: {
      name: 'Da Nang',
      description: 'The tunnels on the way out of the south, then three nights on the central coast with Cam Thanh and Ba Na Hills.',
      image: img('wb01ogzxgiz6x3hb59ek83nezodd_shutterstock_2264459627.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Hanoi',
    subtitle: 'Hanoi and Halong Bay',
    dayLabel: 'Day 6 to 8',
    images: [
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
    ],
    dayImages: {
      6: [
        img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg')
      ],
      7: [
        img('9vw4pgf1629bmnhci52iiqpvr119_shutterstock_363488339.jpg'),
        img('ihukt6y3vv68yzcr72fyq3wqeqbz_31263620335_b87975222b_o.jpg'),
        img('wkacydb95r5vm7ce57ujw79ufdxh_16183432367_e73287079a_o.jpg'),
        img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
      ],
      8: [
        img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
        img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
        img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Hanoi city tour`,
      'Breakfast and check out, then the flight north',
      'A guided half day of Hanoi',
      'The mausoleum and the Temple of Literature',
      'Check in and the evening free in the lanes',
      `${DAY_MARK}Day 7 · Halong Bay day cruise`,
      'Early breakfast, then east towards the coast',
      'A full day on the bay aboard a dragon boat',
      'The limestone islands and the floating villages',
      'Back in Hanoi in the evening',
      `${DAY_MARK}Day 8 · Departure from Hanoi`,
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
      {
        name: 'Hanoi half day city tour',
        day: 6,
        optional: false,
        image: img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        description: 'The Ho Chi Minh mausoleum and the one pillar pagoda, the Temple of Literature and the lanes of the old quarter with a guide.'
      },
      {
        name: 'Halong Bay full day dragon cruise',
        day: 7,
        optional: false,
        image: img('9vw4pgf1629bmnhci52iiqpvr119_shutterstock_363488339.jpg'),
        description: 'A full day out on the bay aboard a dragon boat, through the limestone islands and the floating villages, back in Hanoi by evening.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'North for the last two nights, with a guided half day of the capital and a full day out on Halong Bay.',
      image: img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
    }
  }
];

const detail = {
  slug: 'glimpse-of-vietnam-south-to-north',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Glimpse of Vietnam South to North',
  alt: 'My Khe beach and the Da Nang skyline at dusk',
  days: '8 days / 7 nights',
  stations: '3 stops',
  transport: 'Two domestic flights, private transfers and guided tours',
  tag: 'Grand tour',
  tags: ['Culture', 'Nature'],
  price: 65550,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ho Chi Minh City', 'Mekong Delta', 'Cu Chi', 'Da Nang', 'Cam Thanh', 'Ba Na Hills', 'Hanoi', 'Halong Bay'],
  stats: { days: 8, cities: 3, hotels: 3, activities: 7, transfers: 11 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['11 transfers', 'Transport'],
    ['13 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'South to north with three nights in the middle on the coast, which is where most people wish they had more time.',
    quoteMore: 'The basket boats at Cam Thanh look like a gimmick and are the most fun half day on this itinerary.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days south to north: two nights in Saigon with the city and a Mekong Delta day, the Cu Chi tunnels on the way out, three nights on the central coast with Cam Thanh basket boats and Ba Na Hills, then two in Hanoi with a city tour and a full day cruise on Halong Bay.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights with breakfast daily and dinner at the central and northern hotels; two domestic flights; private transfers throughout; a half day Saigon city tour; a full day Mekong Delta tour; a small group Cu Chi tunnels tour; a half day Cam Thanh basket boat trip; a full day at Ba Na Hills with the Golden Bridge; a Hanoi city tour; a full day dragon boat cruise on Halong Bay.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and Saigon city tour (Arrival)', text: 'Arrival at Tan Son Nhat and transfer to your hotel\nA half day of the city with a guide\nThe palace, the cathedral and the war remnants museum\nCheck in and the evening free', hotel: 'Avanti Saigon Hotel', highlights: ['Arrival at Tan Son Nhat and transfer to your hotel', 'A half day of the city with a guide', 'The palace, the cathedral and the war remnants museum'] },
    { title: 'Day 2: Mekong Delta (B)', text: 'Breakfast, then south into the delta\nA boat through the coconut creeks at My Tho\nA sampan ride under the palms\nThe coconut candy workshops, then back to the city', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast, then south into the delta', 'A boat through the coconut creeks at My Tho', 'A sampan ride under the palms'] },
    { title: 'Day 3: Cu Chi and on to Da Nang (B, D)', text: 'Breakfast, then north west to Cu Chi\nThe tunnels in a small group with a guide\nThe flight to Da Nang in the afternoon\nCheck in near the beach, evening free', hotel: 'Luxtery Da Nang', highlights: ['Breakfast, then north west to Cu Chi', 'The tunnels in a small group with a guide', 'The flight to Da Nang in the afternoon'] },
    { title: 'Day 4: Cam Thanh basket boats (B, D)', text: 'Breakfast, then out to Cam Thanh\nA basket boat spun through the water palms\nThe creeks and the rowers at work\nAfternoon free on the coast', hotel: 'Luxtery Da Nang', highlights: ['Breakfast, then out to Cam Thanh', 'A basket boat spun through the water palms', 'The creeks and the rowers at work'] },
    { title: 'Day 5: Ba Na Hills (B, D)', text: 'Breakfast, then the cable car up to Ba Na\nThe bridge held up by two stone hands\nThe French village and the gardens at the top\nBack down to Da Nang in the evening', hotel: 'Luxtery Da Nang', highlights: ['Breakfast, then the cable car up to Ba Na', 'The bridge held up by two stone hands', 'The French village and the gardens at the top'] },
    { title: 'Day 6: Hanoi city tour (B, D)', text: 'Breakfast and check out, then the flight north\nA guided half day of Hanoi\nThe mausoleum and the Temple of Literature\nCheck in and the evening free in the lanes', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast and check out, then the flight north', 'A guided half day of Hanoi', 'The mausoleum and the Temple of Literature'] },
    { title: 'Day 7: Halong Bay day cruise (B, D)', text: 'Early breakfast, then east towards the coast\nA full day on the bay aboard a dragon boat\nThe limestone islands and the floating villages\nBack in Hanoi in the evening', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Early breakfast, then east towards the coast', 'A full day on the bay aboard a dragon boat', 'The limestone islands and the floating villages'] },
    { title: 'Day 8: Departure from Hanoi (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const glimpseVietnamSouthToNorthBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const glimpseVietnamSouthToNorthProduct = {
  slug: detail.slug,
  places: ['Ho Chi Minh City', 'Mekong Delta', 'Cu Chi', 'Da Nang', 'Cam Thanh', 'Ba Na Hills', 'Hanoi', 'Halong Bay'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 7,
  transfers: 11,
  meals: 13,
  price: detail.price,
  images: cardImages
};
