// Da Nang and Hoi An Coastal Break. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
  img('z7xmgnia7kix67c89kvfcsuj4exo_shutterstock_1274290786.jpg'),
  img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
  img('j32rj0le1str6hqovb5absvrey0a_shutterstock_1477602647.jpg'),
  img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
  img('48mm94bu553qp5u88lgdh7p1ww3c_shutterstock_1345141238.jpg'),
  img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
  img('i126vbg9sdfw3tm9ihzmq0x3ga5e_shutterstock_1303493764.jpg'),
  img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
  img('er5iye24yxsgzupxmdqltizrkroy_shutterstock_1477602650.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('z7xmgnia7kix67c89kvfcsuj4exo_shutterstock_1274290786.jpg'),
  img('j32rj0le1str6hqovb5absvrey0a_shutterstock_1477602647.jpg'),
  img('48mm94bu553qp5u88lgdh7p1ww3c_shutterstock_1345141238.jpg'),
  img('i126vbg9sdfw3tm9ihzmq0x3ga5e_shutterstock_1303493764.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Da Nang',
    subtitle: 'Da Nang and Ba Na Hills',
    dayLabel: 'Day 1 to 2',
    images: [
      img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
      img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
      img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
      img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg')
    ],
    dayImages: {
      1: [
        img('nrr5c1o6cacfkhcr966c9wmhvey1_1467275894_1208px-\'The_Holy_Bull_Nandin_(Nandi)\'__7th-8th_century__Museum_of_Cham_Sculpture.JPG'),
        img('g87jedueq6ohmn8b9d02ps9h3xi9_1467275400_Marble_Mountains__Vietnam.jpg'),
        img('oz18nonbvsg8pn31biy78am4bb92_1467786276_pexels-photo-25976.jpg'),
        img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg')
      ],
      2: [
        img('e0sv7qhxf4fg3gd33dfe1liycj4h_shutterstock_2178792551.jpg'),
        img('84tapj6qwgvbv9sgdfd6q1233uak_1467287160_Linh_Ung_Pagoda.jpg'),
        img('qsqukn2x2pz1nowv3rst121kyevw_Le-Jardin-DAmour-Gardens-overview.jpg'),
        img('cisf0qbrjl6ds3sebcig4ti912px_a2-770x500.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Da Nang`,
      'Arrival at Da Nang and transfer to your hotel',
      'Check in near My Khe beach',
      'Rest of the day free at your own pace',
      'Optional: the Dragon Bridge after dark',
      `${DAY_MARK}Day 2 · Ba Na Hills`,
      'Breakfast, then the cable car up to Ba Na',
      'The bridge held up by two stone hands',
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
        name: 'Ba Na Hills with the Golden Bridge',
        day: 2,
        optional: false,
        image: img('e0sv7qhxf4fg3gd33dfe1liycj4h_shutterstock_2178792551.jpg'),
        description: 'The long cable car up to Ba Na, the bridge held up by two stone hands, and the French village and gardens at the top.'
      }
    ],
    program: {
      name: 'Da Nang',
      description: 'Two nights near the beach, with a full day up at Ba Na Hills and the Golden Bridge.',
      image: img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Hoi An',
    subtitle: 'Hoi An and Cam Thanh',
    dayLabel: 'Day 3 to 5',
    images: [
      img('tczmonqjxy04c5dyb42k9ckzr027_shutterstock_1101234365.jpg'),
      img('z7xmgnia7kix67c89kvfcsuj4exo_shutterstock_1274290786.jpg'),
      img('er5iye24yxsgzupxmdqltizrkroy_shutterstock_1477602650.jpg'),
      img('i126vbg9sdfw3tm9ihzmq0x3ga5e_shutterstock_1303493764.jpg')
    ],
    dayImages: {
      3: [
        img('ucy8wkojr1e1hhpsstivizveeuw1_shutterstock_2132007675.jpg'),
        img('i1g9vcnnzos2f5srkha63o2w72eg_1467789759_6914926621_5239080e32_o.jpg'),
        img('mpkg124uacuo2s71x3f0zfzuhuyo_1467790941_26937034641_89d6ed7fa5_o.jpg'),
        img('febp6o1j6ee0kt0t5o5yvhblb5x5_Hoi_An_(III).jpg')
      ],
      4: [
        img('hac0atag7svpfutjqaoc2dvnlay5_shutterstock_1345141253.jpg'),
        img('4ajvifpqrthujg1eszffqu8aibtm_download%20(100).jpg'),
        img('ujk4qbm4n62ojzh1oi2cead2qneb_shutterstock_469510655.jpg'),
        img('okfkwi6un4p5vz0fx0tu8f0m1ek9_1467286953_C_E1_BA_A7u_R_E1_BB_93ng.jpg')
      ],
      5: [
        img('tczmonqjxy04c5dyb42k9ckzr027_shutterstock_1101234365.jpg'),
        img('z7xmgnia7kix67c89kvfcsuj4exo_shutterstock_1274290786.jpg'),
        img('er5iye24yxsgzupxmdqltizrkroy_shutterstock_1477602650.jpg'),
        img('i126vbg9sdfw3tm9ihzmq0x3ga5e_shutterstock_1303493764.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · On to Hoi An`,
      'Breakfast and check out, then south to Hoi An',
      'Check in at your garden hotel',
      'A walk through the old town with a guide',
      'The Japanese bridge and the merchant houses',
      `${DAY_MARK}Day 4 · Cam Thanh basket boats`,
      'Breakfast, then out to Cam Thanh',
      'A basket boat spun through the water palms',
      'The creeks and the rowers at work',
      'Afternoon free among the lantern lanes',
      `${DAY_MARK}Day 5 · Departure from Da Nang`,
      'Breakfast at the hotel and check out',
      'Private transfer to Da Nang airport for your flight home'
    ],
    accommodation: {
      name: 'Hoi An Rose Garden Hotel, Hoi An',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Garden hotel a short ride from the old town lanterns',
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
      {
        name: 'Hoi An walking tour',
        day: 3,
        optional: false,
        image: img('ucy8wkojr1e1hhpsstivizveeuw1_shutterstock_2132007675.jpg'),
        description: 'Half a day on foot through the old trading town, the Japanese bridge, the assembly halls and the merchant houses.'
      },
      {
        name: 'Cam Thanh basket boat trip',
        day: 4,
        optional: false,
        image: img('hac0atag7svpfutjqaoc2dvnlay5_shutterstock_1345141253.jpg'),
        description: 'A round bamboo basket boat spun through the water coconut palms at Cam Thanh, with the rowers showing off in the creeks.'
      }
    ],
    program: {
      name: 'Hoi An',
      description: 'Two nights by the old town, with a walking tour and a basket boat ride through the coconut palms.',
      image: img('tczmonqjxy04c5dyb42k9ckzr027_shutterstock_1101234365.jpg')
    }
  }
];

const detail = {
  slug: 'da-nang-and-hoi-an-coastal-break',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Da Nang and Hoi An Coastal Break',
  alt: 'Lantern shop lane in the old town at Hoi An',
  days: '5 days / 4 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided half day tours',
  tag: 'Short break',
  tags: ['Short break', 'Culture'],
  price: 39900,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Da Nang', 'Ba Na Hills', 'Hoi An', 'Cam Thanh'],
  stats: { days: 5, cities: 2, hotels: 2, activities: 3, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Five days on one stretch of coast. No flights inside the trip, no packing every morning.',
    quoteMore: 'Stay in Hoi An rather than commuting from Da Nang. The old town after the day trippers leave is the best part of it.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A five day break on the central coast: two nights in Da Nang with a full day at Ba Na Hills and the Golden Bridge, then two by the old town in Hoi An with a walking tour and a basket boat ride through the Cam Thanh coconut palms.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights with breakfast and dinner daily; private transfers throughout; a full day at Ba Na Hills with the Golden Bridge; a Hoi An walking tour; a half day Cam Thanh basket boat trip.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Da Nang (Arrival)', text: 'Arrival at Da Nang and transfer to your hotel\nCheck in near My Khe beach\nRest of the day free at your own pace\nOptional: the Dragon Bridge after dark', hotel: 'Luxtery Da Nang', highlights: ['Arrival at Da Nang and transfer to your hotel', 'Check in near My Khe beach', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Ba Na Hills (B, D)', text: 'Breakfast, then the cable car up to Ba Na\nThe bridge held up by two stone hands\nThe French village and the gardens at the top\nBack down to Da Nang in the evening', hotel: 'Luxtery Da Nang', highlights: ['Breakfast, then the cable car up to Ba Na', 'The bridge held up by two stone hands', 'The French village and the gardens at the top'] },
    { title: 'Day 3: On to Hoi An (B, D)', text: 'Breakfast and check out, then south to Hoi An\nCheck in at your garden hotel\nA walk through the old town with a guide\nThe Japanese bridge and the merchant houses', hotel: 'Hoi An Rose Garden Hotel', highlights: ['Breakfast and check out, then south to Hoi An', 'Check in at your garden hotel', 'A walk through the old town with a guide'] },
    { title: 'Day 4: Cam Thanh basket boats (B, D)', text: 'Breakfast, then out to Cam Thanh\nA basket boat spun through the water palms\nThe creeks and the rowers at work\nAfternoon free among the lantern lanes', hotel: 'Hoi An Rose Garden Hotel', highlights: ['Breakfast, then out to Cam Thanh', 'A basket boat spun through the water palms', 'The creeks and the rowers at work'] },
    { title: 'Day 5: Departure from Da Nang (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Da Nang airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Da Nang airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const daNangHoiAnCoastalBreakBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const daNangHoiAnCoastalBreakProduct = {
  slug: detail.slug,
  places: ['Da Nang', 'Ba Na Hills', 'Hoi An', 'Cam Thanh'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 3,
  transfers: 6,
  meals: 8,
  price: detail.price,
  images: cardImages
};
