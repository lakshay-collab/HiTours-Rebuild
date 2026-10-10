// Vietnam and Cambodia Four Cities. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
  img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
  img('ynhhbvyz5wx9z88wwhtsk4jb3eee_shutterstock_128239889.jpg'),
  img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg'),
  img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
  img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
  img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg'),
  img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
  img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('ynhhbvyz5wx9z88wwhtsk4jb3eee_shutterstock_128239889.jpg'),
  img('94hgzmaz9au4ce31iwwdm77mbvjc_dl.beatsnoop.com-final-hms2X8iJfl.jpg'),
  img('e0sv7qhxf4fg3gd33dfe1liycj4h_shutterstock_2178792551.jpg'),
  img('84tapj6qwgvbv9sgdfd6q1233uak_1467287160_Linh_Ung_Pagoda.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    subtitle: 'Hanoi and Halong Bay',
    dayLabel: 'Day 1 to 2',
    images: [
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
    ],
    dayImages: {
      1: [
        img('hw2qh1ogo8ea79v94qork3oe93e2_1467715654_311336200_3680af30d5_o.jpg'),
        img('ntezjfzc64thy47m38y0tbsj2d6s_1467720990_6909983514_1b40cdc48c_o.jpg'),
        img('xobo05epyrnuy77vlk7ujy36k4vh_1484035807_Quan-Su-pagoda.jpg'),
        img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg')
      ],
      2: [
        img('94hgzmaz9au4ce31iwwdm77mbvjc_dl.beatsnoop.com-final-hms2X8iJfl.jpg'),
        img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
        img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
        img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hanoi`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'Check in at your hotel in the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake',
      `${DAY_MARK}Day 2 · Halong Bay half day cruise`,
      'Breakfast, then east towards the coast',
      'A half day on the bay by boat',
      'Back in Hanoi in the late afternoon',
      'Evening free in the old quarter'
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
        name: 'Halong Bay half day cruise',
        day: 2,
        optional: false,
        image: img('94hgzmaz9au4ce31iwwdm77mbvjc_dl.beatsnoop.com-final-hms2X8iJfl.jpg'),
        description: 'A half day out on the bay by boat, among the nearest of the limestone islands, back in Hanoi by evening.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two nights in the old quarter, with a half day cruise out on Halong Bay.',
      image: img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg')
    }
  },
  {
    letter: 'B',
    name: 'Da Nang',
    subtitle: 'Hanoi tour and Da Nang',
    dayLabel: 'Day 3',
    images: [
      img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
      img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
      img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
      img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg')
    ],
    dayImages: {
      3: [
        img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Hanoi tour and flight to Da Nang`,
      'Breakfast, then a guided morning of the city',
      'The mausoleum and the Temple of Literature',
      'The flight to Da Nang in the afternoon',
      'Check in near the beach, evening free'
    ],
    accommodation: {
      name: 'Luxtery Da Nang, Da Nang',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Simple hotel a few streets back from My Khe beach',
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
        name: 'Hanoi half day city tour',
        day: 3,
        optional: false,
        image: img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        description: 'The Ho Chi Minh mausoleum and the one pillar pagoda, the Temple of Literature and the old quarter, before the flight south.'
      }
    ],
    program: {
      name: 'Da Nang',
      description: 'A guided morning in Hanoi, then the flight to the central coast for a night near the beach.',
      image: img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Siem Reap',
    subtitle: 'Ba Na Hills and Angkor',
    dayLabel: 'Day 4 to 5',
    images: [
      img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg'),
      img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg'),
      img('ynhhbvyz5wx9z88wwhtsk4jb3eee_shutterstock_128239889.jpg'),
      img('tiuvxkux663ncun5lwbu02kv3n8i_shutterstock_707816683.jpg')
    ],
    dayImages: {
      4: [
        img('e0sv7qhxf4fg3gd33dfe1liycj4h_shutterstock_2178792551.jpg'),
        img('84tapj6qwgvbv9sgdfd6q1233uak_1467287160_Linh_Ung_Pagoda.jpg'),
        img('qsqukn2x2pz1nowv3rst121kyevw_Le-Jardin-DAmour-Gardens-overview.jpg'),
        img('cisf0qbrjl6ds3sebcig4ti912px_a2-770x500.jpg')
      ],
      5: [
        img('9onjuhogzsrvtfpt6205qyt6ohds_shutterstock_685393825.jpg'),
        img('y8n110g2u7oikuzpnvkd5w75si6q_1462522736_15912678764_da2931d075_o.jpg'),
        img('0wbj8fygnr69qnjxbd7rohea7cbr_1462457406_A_temple_called_Bayonne__Angkor_Thom__the_Angkor_complex__Siem_Reap__Cambodia.jpg'),
        img('by89my5qhxq3c1t68b4gv34b2e3u_1462457841_Cambodia_08_-_110_-_Angkor_Thom_-_Terrace_of_the_Elephants_(3228919250).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Ba Na Hills and on to Siem Reap`,
      'Breakfast, then the cable car up to Ba Na',
      'The bridge held up by two stone hands',
      'The French village and the gardens at the top',
      'The flight on to Siem Reap and check in',
      `${DAY_MARK}Day 5 · Angkor Wat`,
      'Early breakfast, then into the Angkor park',
      'Angkor Wat and the Bayon faces at Angkor Thom',
      'The root covered ruins of Ta Prohm',
      'Back at the hotel by evening'
    ],
    accommodation: {
      name: 'HARI Residence and Spa Siem Reap, Siem Reap',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Small hotel with a pool, a short ride from the old market',
      images: [
        img('31ed6uyw36ewbejmdmw3oevnjtb3_3C2A7845%20copy%20(1).jpg'),
        img('1nw9tc4uftb6qs4m79o37cybooce__V0A0690%20copy%20(1).jpg'),
        img('946uwaxujy0tef05mzn15owfna6l__V0A0228%20copy.jpg'),
        img('1n0u2yh1rkix6ek7f26glxqa898s_009%20copy%20(1).jpg'),
        img('wxjg4uilol303hl7tw0nx9uzcfp4_DJI_0290%20(1).jpg'),
        img('447nu4vz3wurg17hdy17sx05a60n__V0A0498.jpg'),
        img('ej2ge86ngndj1omkwpoi31ktapoz__V0A0602%20(1).jpg'),
        img('2yakiv90q6oty76jziy1nicd2mre__V0A9740.jpg'),
        img('bffkbqz6a04c3pfp0qt4szn9wmwg__V0A0594%20(1).jpg'),
        img('qa7v4bwwq5rmppftw5ofvr8x1naj__V0A0619.jpg'),
        img('cki4fowhz1ocp1txlylcfiwjp5ny__V0A9722.jpg'),
        img('rrqj4bdzevrwqee1elwfb4anyfxy__V0A0672%20copy.jpg'),
        img('fx6l3oilx64bvdekjolhgsu9uesi__V0A0166%20copy.jpg'),
        img('2cn6xaa6mu8j32zg1r6als81wx5k__V0A0618.jpg'),
        img('czs09egy7scy9msy2zy9uin8krxa__V0A0679.jpg')
      ]
    },
    activities: [
      {
        name: 'Ba Na Hills with the Golden Bridge',
        day: 4,
        optional: false,
        image: img('e0sv7qhxf4fg3gd33dfe1liycj4h_shutterstock_2178792551.jpg'),
        description: 'The long cable car up to Ba Na, the bridge held up by two stone hands, and the French village and gardens before the flight on.'
      },
      {
        name: 'Siem Reap full day with Angkor Wat',
        day: 5,
        optional: false,
        image: img('9onjuhogzsrvtfpt6205qyt6ohds_shutterstock_685393825.jpg'),
        description: 'Angkor Wat itself, the Bayon faces at Angkor Thom and the root covered ruins of Ta Prohm, with a guide for the full day.'
      }
    ],
    program: {
      name: 'Siem Reap',
      description: 'Ba Na Hills on the way out of Vietnam, then two nights in Cambodia for a full day among the Angkor temples.',
      image: img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Ho Chi Minh City',
    subtitle: 'Saigon and Cu Chi',
    dayLabel: 'Day 6 to 8',
    images: [
      img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
      img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
      img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
      img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg')
    ],
    dayImages: {
      6: [
        img('l091smvq7b63cids4ghsgi4phytf_1598961402_shutterstock_457520230.jpg'),
        img('evxpd53708fszmcogueld24ki5be_1467883599_2814329078_1317aa23fe_o.jpg'),
        img('hy92ewfqdodmxw9ubcvulnct25c3_1467881123_Ph_C6_B0_E1_BB_9Bc_H_E1_BA_A3i_T_E1_BB_B1.jpg'),
        img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg')
      ],
      7: [
        img('o3s5ddj3fn5qait83kv3nh7svc0p_shutterstock_2312652627.jpg'),
        img('4v6uzks4tncmsj994n52g9qwwzii_notr.webp'),
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg'),
        img('edv5z4jl7qnqqv3sn3jzh2droay4_1484035778_1-saigon-central-post-office-saigon-central-post-office.jpg')
      ],
      8: [
        img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
        img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
        img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
        img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · On to Saigon`,
      'Breakfast and check out, then the flight to Saigon',
      'Check in in District 1',
      'Rest of the day free in the city',
      'Optional: the rooftop bars on Nguyen Hue',
      `${DAY_MARK}Day 7 · Saigon and the Cu Chi tunnels`,
      'Breakfast, then a half day of the city',
      'The palace, the cathedral and the war remnants museum',
      'North west to Cu Chi for the tunnels',
      'The trapdoors, the kitchens and the shafts',
      `${DAY_MARK}Day 8 · Departure from Saigon`,
      'Breakfast at the hotel and check out',
      'Private transfer to Tan Son Nhat for your flight home'
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
        name: 'Saigon city tour',
        day: 7,
        optional: false,
        image: img('o3s5ddj3fn5qait83kv3nh7svc0p_shutterstock_2312652627.jpg'),
        description: 'The Reunification Palace, the old post office and Notre Dame cathedral, then the war remnants museum.'
      },
      {
        name: 'Cu Chi tunnels half day tour',
        day: 7,
        optional: false,
        image: img('7c9y0w9lr632pl96udf5l9ek2h9h_shutterstock_690459592.jpg'),
        description: 'The tunnel network north west of the city, with the trapdoors, the kitchens and a crawl through a widened section of the original shafts.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'Back into Vietnam for the last two nights, with the city and the Cu Chi tunnels on one day.',
      image: img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg')
    }
  }
];

const detail = {
  slug: 'vietnam-and-cambodia-four-cities',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Vietnam and Cambodia Four Cities',
  alt: 'Bayon stone faces at Angkor Thom near Siem Reap',
  days: '8 days / 7 nights',
  stations: '4 stops',
  transport: 'Flights between the cities, private transfers and guided tours',
  tag: 'Grand tour',
  tags: ['Grand tour', 'Culture'],
  price: 87400,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Halong Bay', 'Da Nang', 'Ba Na Hills', 'Siem Reap', 'Angkor Wat', 'Ho Chi Minh City', 'Cu Chi'],
  stats: { days: 8, cities: 4, hotels: 4, activities: 6, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['12 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Four cities and two countries in eight days. It moves quickly, but every flight is short and every day has something in it.',
    quoteMore: 'Pack a light long sleeve for Angkor. Shoulders need covering at the temples and the sun is unforgiving by ten.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days across four cities in two countries: Hanoi with a half day cruise on Halong Bay, a guided morning of the capital, a night in Da Nang with Ba Na Hills and the Golden Bridge, two in Siem Reap for a full day at Angkor, then two in Saigon with the city and the Cu Chi tunnels.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights with breakfast daily and dinner at the Vietnamese and Cambodian hotels; all flights between the cities; private transfers throughout; a half day cruise on Halong Bay; a Hanoi city tour; a full day at Ba Na Hills with the Golden Bridge; a full day Siem Reap tour with Angkor Wat; a Saigon city tour; the Cu Chi tunnels half day tour.',
  intro2: 'Not included: international flights; Vietnam and Cambodia visa fees; lunches; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Halong Bay half day cruise (B, D)', text: 'Breakfast, then east towards the coast\nA half day on the bay by boat\nBack in Hanoi in the late afternoon\nEvening free in the old quarter', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then east towards the coast', 'A half day on the bay by boat', 'Back in Hanoi in the late afternoon'] },
    { title: 'Day 3: Hanoi tour and flight to Da Nang (B, D)', text: 'Breakfast, then a guided morning of the city\nThe mausoleum and the Temple of Literature\nThe flight to Da Nang in the afternoon\nCheck in near the beach, evening free', hotel: 'Luxtery Da Nang', highlights: ['Breakfast, then a guided morning of the city', 'The mausoleum and the Temple of Literature', 'The flight to Da Nang in the afternoon'] },
    { title: 'Day 4: Ba Na Hills and on to Siem Reap (B, D)', text: 'Breakfast, then the cable car up to Ba Na\nThe bridge held up by two stone hands\nThe French village and the gardens at the top\nThe flight on to Siem Reap and check in', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Breakfast, then the cable car up to Ba Na', 'The bridge held up by two stone hands', 'The French village and the gardens at the top'] },
    { title: 'Day 5: Angkor Wat (B, D)', text: 'Early breakfast, then into the Angkor park\nAngkor Wat and the Bayon faces at Angkor Thom\nThe root covered ruins of Ta Prohm\nBack at the hotel by evening', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Early breakfast, then into the Angkor park', 'Angkor Wat and the Bayon faces at Angkor Thom', 'The root covered ruins of Ta Prohm'] },
    { title: 'Day 6: On to Saigon (B)', text: 'Breakfast and check out, then the flight to Saigon\nCheck in in District 1\nRest of the day free in the city\nOptional: the rooftop bars on Nguyen Hue', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast and check out, then the flight to Saigon', 'Check in in District 1', 'Rest of the day free in the city'] },
    { title: 'Day 7: Saigon and the Cu Chi tunnels (B)', text: 'Breakfast, then a half day of the city\nThe palace, the cathedral and the war remnants museum\nNorth west to Cu Chi for the tunnels\nThe trapdoors, the kitchens and the shafts', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast, then a half day of the city', 'The palace, the cathedral and the war remnants museum', 'North west to Cu Chi for the tunnels'] },
    { title: 'Day 8: Departure from Saigon (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Tan Son Nhat for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Tan Son Nhat for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam and Cambodia visa fees; lunches; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const vietnamCambodiaFourCitiesBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const vietnamCambodiaFourCitiesProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Halong Bay', 'Da Nang', 'Ba Na Hills', 'Siem Reap', 'Angkor Wat', 'Ho Chi Minh City', 'Cu Chi'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 6,
  transfers: 12,
  meals: 12,
  price: detail.price,
  images: cardImages
};
