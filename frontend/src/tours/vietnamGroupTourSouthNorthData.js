// Vietnam Group Tour South to North. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
  img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
  img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
  img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg'),
  img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
  img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
  img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
  img('zucc5keivv6qxqju15y9zmvpob71_What-is-Bui-Vien-street.jpg'),
  img('zhc08etrdydgdme2j7kuc7ar7dpi_shutterstock_1992137813.jpg'),
  img('3jvbgi9xev47sqm1q24i7nu0xlnd_shutterstock_221961613.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ho Chi Minh City',
    subtitle: 'Saigon, Cu Chi and the Mekong',
    dayLabel: 'Day 1 to 2',
    images: [
      img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
      img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg'),
      img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
      img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg')
    ],
    dayImages: {
      1: [
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg'),
        img('zucc5keivv6qxqju15y9zmvpob71_What-is-Bui-Vien-street.jpg'),
        img('zhc08etrdydgdme2j7kuc7ar7dpi_shutterstock_1992137813.jpg'),
        img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg')
      ],
      2: [
        img('3jvbgi9xev47sqm1q24i7nu0xlnd_shutterstock_221961613.jpg'),
        img('2fqc9nmqifyv07bhi7n7gqf3cxhl_shutterstock_690459592.jpg'),
        img('e1qq7mme35dnhtuc5ss9s33mgr12_How-long-is-the-Mekong-River-01_1694582049.jpg'),
        img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Saigon`,
      'Arrival at Tan Son Nhat and transfer to your hotel',
      'Check in and meet the rest of the group',
      'Rest of the day free at your own pace',
      'Optional: the rooftop bars on Nguyen Hue',
      `${DAY_MARK}Day 2 · Cu Chi and the Mekong Delta`,
      'Early breakfast, then north west to Cu Chi',
      'The tunnels, the trapdoors and the kitchens',
      'South to the delta in the afternoon',
      'A boat through the coconut creeks, then back to the city'
    ],
    accommodation: {
      name: 'Winsuites Saigon Hotel, Ho Chi Minh',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel in District 1, near the Ben Thanh market',
      images: [
        img('g3ntfcazjgxolxf60fxy8wttt3bw_708617913.jpg'),
        img('kx32krfphk8xfybowubztkm9shhn_730787126.jpg'),
        img('gn6x9zfoiv3gf4iex8c1pj6lv2b6_730793205.jpg'),
        img('ly1aawbfni6trgmx1w94p093wfue_730787009.jpg'),
        img('9gv47k40vnkkw4946nfatloqozwu_730789315.jpg'),
        img('gxkgp9d6o3l39hgr6g44cw5rnmtv_730793210.jpg')
      ]
    },
    activities: [
      {
        name: 'Cu Chi tunnels and the Mekong Delta',
        day: 2,
        optional: false,
        image: img('3jvbgi9xev47sqm1q24i7nu0xlnd_shutterstock_221961613.jpg'),
        description: 'The tunnel network at Cu Chi in the morning, then south to the delta for a boat into the coconut creeks and the candy workshops.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'Two nights in District 1, with the Cu Chi tunnels and the Mekong Delta in one long day.',
      image: img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Da Nang',
    subtitle: 'Hoi An and Ba Na Hills',
    dayLabel: 'Day 3 to 4',
    images: [
      img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
      img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
      img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
      img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg')
    ],
    dayImages: {
      3: [
        img('ucy8wkojr1e1hhpsstivizveeuw1_shutterstock_2132007675.jpg'),
        img('i1g9vcnnzos2f5srkha63o2w72eg_1467789759_6914926621_5239080e32_o.jpg'),
        img('mpkg124uacuo2s71x3f0zfzuhuyo_1467790941_26937034641_89d6ed7fa5_o.jpg'),
        img('febp6o1j6ee0kt0t5o5yvhblb5x5_Hoi_An_(III).jpg')
      ],
      4: [
        img('e0sv7qhxf4fg3gd33dfe1liycj4h_shutterstock_2178792551.jpg'),
        img('84tapj6qwgvbv9sgdfd6q1233uak_1467287160_Linh_Ung_Pagoda.jpg'),
        img('qsqukn2x2pz1nowv3rst121kyevw_Le-Jardin-DAmour-Gardens-overview.jpg'),
        img('cisf0qbrjl6ds3sebcig4ti912px_a2-770x500.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Flight to Da Nang and Hoi An`,
      'Breakfast and check out, then the flight to Da Nang',
      'Check in near My Khe beach',
      'On to Hoi An in the late afternoon',
      'The old town on foot as the lanterns come on',
      `${DAY_MARK}Day 4 · Ba Na Hills`,
      'Breakfast, then the cable car up to Ba Na',
      'The Golden Bridge held up by two stone hands',
      'The French village, the gardens and lunch at the top',
      'Back down to Da Nang in the evening'
    ],
    accommodation: {
      name: 'Sunny Ocean Hotel and Spa, Da Nang',
      description: '2 nights · All meals · Standard room · 4★ · Four star hotel a short walk from My Khe beach',
      images: [
        img('up857ee9fpl90n95u1glhoa2vfum_Sunny%20Hotel%20and%20Spa%202.jpg'),
        img('dwn3dnf0s0o3mzl6t0pepqehfdp4_Sunny%20Hotel%20and%20Spa%208.jpg'),
        img('daq1gfw8oiyd6og2oad05ko0attb_Sunny%20Hotel%20and%20Spa%203.jpg'),
        img('e3x7ieymo3misi2aln7vnn6xyygt_Sunny%20Hotel%20and%20Spa%206.jpg'),
        img('bk3jk5h3uaw8hlky82h7ktjbyqd1_Sunny%20Hotel%20and%20Spa%204.jpg'),
        img('zdz0n2kkoc42f8r7rzyge5gxq5ey_Sunny%20Hotel%20and%20Spa%207.jpg'),
        img('m9gji102d1tzufvawyqycrzi00zp_Sunny%20Hotel%20and%20Spa%205.jpg'),
        img('vn0o69xlr5yca58yi1gqnh6g8ls5_Sunny%20Hotel%20and%20Spa.jpg')
      ]
    },
    activities: [
      {
        name: 'Hoi An evening walking tour',
        day: 3,
        optional: false,
        image: img('ucy8wkojr1e1hhpsstivizveeuw1_shutterstock_2132007675.jpg'),
        description: 'The old trading town on foot as the lanterns come on, through the Japanese bridge, the assembly halls and the merchant houses.'
      },
      {
        name: 'Ba Na Hills full day with lunch',
        day: 4,
        optional: false,
        image: img('e0sv7qhxf4fg3gd33dfe1liycj4h_shutterstock_2178792551.jpg'),
        description: 'The long cable car up to Ba Na, the Golden Bridge held up by two stone hands, the French village and gardens, with lunch at the top.'
      }
    ],
    program: {
      name: 'Da Nang',
      description: 'The flight to the central coast for two nights by the beach, with Hoi An by lantern light and a full day at Ba Na.',
      image: img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Hanoi',
    subtitle: 'Hanoi and Halong Bay',
    dayLabel: 'Day 5 to 7',
    images: [
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg')
    ],
    dayImages: {
      5: [
        img('cgs2jesq2360bjhwlgsz56wdpaxn_1584695122_shutterstock_652890460.jpg'),
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg'),
        img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg')
      ],
      6: [
        img('9vw4pgf1629bmnhci52iiqpvr119_shutterstock_363488339.jpg'),
        img('ihukt6y3vv68yzcr72fyq3wqeqbz_31263620335_b87975222b_o.jpg'),
        img('wkacydb95r5vm7ce57ujw79ufdxh_16183432367_e73287079a_o.jpg'),
        img('owts19bwrqhsz3x8d35cwj22n3aa_1613647325_shutterstock_1540075190.jpg')
      ],
      7: [
        img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
        img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
        img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · On to Hanoi`,
      'Breakfast and check out, then the flight to Hanoi',
      'Check in in the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake',
      `${DAY_MARK}Day 6 · Halong Bay day cruise`,
      'Early breakfast, then east towards the coast',
      'A full day on the bay by boat',
      'Lunch served on deck among the islands',
      'Back in Hanoi in the evening',
      `${DAY_MARK}Day 7 · Departure from Hanoi`,
      'Check out after an early breakfast',
      'Transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'My Lan Hotel, Hanoi',
      description: '2 nights · Breakfast · Standard room · 4★ · Small four star hotel in the Hanoi old quarter',
      images: [
        img('33frnlu9l2j2i0c7qvfdia7tmp53_153681038.jpg'),
        img('r7f1cxveqhtpws51ysu9l0zmytmf_153715304.jpg'),
        img('qw2kbigcdkmu0v57txy9tusgsle5_153703615.jpg'),
        img('m3xjlvil9bldezfhc6jc6y3nbu25_153712208.jpg')
      ]
    },
    activities: [
      {
        name: 'Halong Bay full day cruise',
        day: 6,
        optional: false,
        image: img('9vw4pgf1629bmnhci52iiqpvr119_shutterstock_363488339.jpg'),
        description: 'A full day on the bay by boat among the limestone islands and the floating villages, with lunch served on deck.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'The flight north for the last nights, with a free afternoon and a full day cruise on Halong Bay.',
      image: img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg')
    }
  }
];

const detail = {
  slug: 'vietnam-group-tour-south-to-north',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Vietnam Group Tour South to North',
  alt: 'Cable car towers above the forest at Ba Na Hills',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'Two domestic flights, coach travel and guided tours',
  tag: 'Group tour',
  tags: ['Group tour', 'Nature'],
  price: 56227,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ho Chi Minh City', 'Cu Chi', 'Mekong Delta', 'Da Nang', 'Hoi An', 'Ba Na Hills', 'Hanoi', 'Halong Bay'],
  stats: { days: 7, cities: 3, hotels: 3, activities: 5, transfers: 11 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['11 transfers', 'Transport'],
    ['12 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'One long day in the south does both Cu Chi and the delta, which frees up the rest of the week for the centre and the bay.',
    quoteMore: 'The Hoi An walk here is in the evening, which is the right call. Lanterns on the water beat the midday heat.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A week south to north with a group: two nights in Saigon with a long day covering the Cu Chi tunnels and the Mekong Delta, two in Da Nang with Hoi An by lantern light and a full day at Ba Na Hills, then Hanoi and a full day cruise on Halong Bay.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights at four star hotels with daily breakfast and full board in Da Nang; two domestic flights; all coach travel and transfers; one long guided day covering the Cu Chi tunnels and the delta; a Hoi An walking tour; a full day at Ba Na Hills with lunch; a full day cruise on Halong Bay with lunch.',
  intro2: 'Not included: international flights; Vietnam visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Saigon (Arrival)', text: 'Arrival at Tan Son Nhat and transfer to your hotel\nCheck in and meet the rest of the group\nRest of the day free at your own pace\nOptional: the rooftop bars on Nguyen Hue', hotel: 'Winsuites Saigon Hotel', highlights: ['Arrival at Tan Son Nhat and transfer to your hotel', 'Check in and meet the rest of the group', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Cu Chi and the Mekong Delta (B)', text: 'Early breakfast, then north west to Cu Chi\nThe tunnels, the trapdoors and the kitchens\nSouth to the delta in the afternoon\nA boat through the coconut creeks, then back to the city', hotel: 'Winsuites Saigon Hotel', highlights: ['Early breakfast, then north west to Cu Chi', 'The tunnels, the trapdoors and the kitchens', 'South to the delta in the afternoon'] },
    { title: 'Day 3: Flight to Da Nang and Hoi An (B, D)', text: 'Breakfast and check out, then the flight to Da Nang\nCheck in near My Khe beach\nOn to Hoi An in the late afternoon\nThe old town on foot as the lanterns come on', hotel: 'Sunny Ocean Hotel and Spa', highlights: ['Breakfast and check out, then the flight to Da Nang', 'Check in near My Khe beach', 'On to Hoi An in the late afternoon'] },
    { title: 'Day 4: Ba Na Hills (B, L, D)', text: 'Breakfast, then the cable car up to Ba Na\nThe Golden Bridge held up by two stone hands\nThe French village, the gardens and lunch at the top\nBack down to Da Nang in the evening', hotel: 'Sunny Ocean Hotel and Spa', highlights: ['Breakfast, then the cable car up to Ba Na', 'The Golden Bridge held up by two stone hands', 'The French village, the gardens and lunch at the top'] },
    { title: 'Day 5: On to Hanoi (B)', text: 'Breakfast and check out, then the flight to Hanoi\nCheck in in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'My Lan Hotel', highlights: ['Breakfast and check out, then the flight to Hanoi', 'Check in in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 6: Halong Bay day cruise (B, L)', text: 'Early breakfast, then east towards the coast\nA full day on the bay by boat\nLunch served on deck among the islands\nBack in Hanoi in the evening', hotel: 'My Lan Hotel', highlights: ['Early breakfast, then east towards the coast', 'A full day on the bay by boat', 'Lunch served on deck among the islands'] },
    { title: 'Day 7: Departure from Hanoi (-)', text: 'Check out after an early breakfast\nTransfer to the airport for your flight home', hotel: 'Departure', highlights: ['Check out after an early breakfast', 'Transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Vietnam', href: '/asien/vietnam' },
  { label: detail.title }
];

export const vietnamGroupTourSouthNorthBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const vietnamGroupTourSouthNorthProduct = {
  slug: detail.slug,
  places: ['Ho Chi Minh City', 'Cu Chi', 'Mekong Delta', 'Da Nang', 'Hoi An', 'Ba Na Hills', 'Hanoi', 'Halong Bay'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 5,
  transfers: 11,
  meals: 12,
  price: detail.price,
  images: cardImages
};
