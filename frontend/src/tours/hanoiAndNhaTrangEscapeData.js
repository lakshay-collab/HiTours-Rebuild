// Hanoi and Nha Trang Escape. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('nem9kghvpvg4auavuy5nhqx2im7r_shutterstock_98382038.jpg'),
  img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
  img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
  img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
  img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('l5niq4dr961ec6w2r5tzriikz2in_1613632679_shutterstock_1164526912.jpg'),
  img('ntezjfzc64thy47m38y0tbsj2d6s_1467720990_6909983514_1b40cdc48c_o.jpg'),
  img('9vw4pgf1629bmnhci52iiqpvr119_shutterstock_363488339.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    subtitle: 'Hanoi and Halong Bay',
    dayLabel: 'Day 1 to 2',
    images: [
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg')
    ],
    dayImages: {
      1: [
        img('zv1gcf0zxn8h92yt1vcjn8cn04c0_1613631767_shutterstock_449720002.jpg'),
        img('l5niq4dr961ec6w2r5tzriikz2in_1613632679_shutterstock_1164526912.jpg'),
        img('ntezjfzc64thy47m38y0tbsj2d6s_1467720990_6909983514_1b40cdc48c_o.jpg'),
        img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
      ],
      2: [
        img('9vw4pgf1629bmnhci52iiqpvr119_shutterstock_363488339.jpg'),
        img('ihukt6y3vv68yzcr72fyq3wqeqbz_31263620335_b87975222b_o.jpg'),
        img('wkacydb95r5vm7ce57ujw79ufdxh_16183432367_e73287079a_o.jpg'),
        img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hanoi`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'Check in at your hotel in the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake',
      `${DAY_MARK}Day 2 · Halong Bay day cruise`,
      'Early breakfast, then east towards the coast',
      'A full day on the bay aboard a dragon boat',
      'The limestone islands and the floating villages',
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
        name: 'Halong Bay full day dragon cruise',
        day: 2,
        optional: false,
        image: img('9vw4pgf1629bmnhci52iiqpvr119_shutterstock_363488339.jpg'),
        description: 'A full day out on the bay aboard a dragon boat, through the limestone islands and the floating villages, back in Hanoi by evening.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two nights in the old quarter, with a full day out on Halong Bay by boat.',
      image: img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nha Trang',
    dayLabel: 'Day 3 to 4',
    images: [
      img('nem9kghvpvg4auavuy5nhqx2im7r_shutterstock_98382038.jpg')
    ],
    dayImages: {
      3: [
        img('1f7tg58ugy8vfvsiukb0gxqqqw1k_Champa_Po_Nagar_Nha_Trang.jpg'),
        img('rh2li7rg51frn6ljp3j8yfyuz38i_bai-tru.jpg'),
        img('x7v954jevk3pvff2g53hqolz5wf3_1484035783_3-long-son-pagoda-and-white-buddha-nha-trang.jpg'),
        img('nem9kghvpvg4auavuy5nhqx2im7r_shutterstock_98382038.jpg')
      ],
      4: [
        img('2bkttqlbznr5eat18mib7xlgipx3_shutterstock_1444165544.jpg'),
        img('yp4p5nwz1ljgxxio6qjmle16codm_30437955947_e72817ab68_b.jpg'),
        img('pqya8iutzv6tnyozlwd1hm5qqw6a_pexels-pixabay-221471.jpg'),
        img('ijgrn8pudxj8jduz9v1difp1smkz_uv9qr693eo5cwl2v4vgraxtsws5h_shutterstock_1712757319.webp')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Flight to Nha Trang`,
      'Breakfast and check out, then the flight south',
      'Check in on the seafront at Nha Trang',
      'Rest of the day free at your own pace',
      'Optional: the mud baths at Thap Ba',
      `${DAY_MARK}Day 4 · Nha Trang islands`,
      'Breakfast, then out to the islands by boat',
      'Snorkelling over the reef',
      'The floating bar and lunch on deck',
      'Back to the hotel in the late afternoon'
    ],
    accommodation: {
      name: 'Emerald Bay Hotel and Spa Nha Trang, Nha Trang',
      description: '2 nights · Breakfast and dinner · Standard room · 5★ · Five star hotel on the seafront at Nha Trang',
      images: [
        img('sckwz19o75pg5z6ivofw0j8tbs1h_EBNT-Exterior-1.png'),
        img('bb04xbhe69adlc6a13ma4rm82qok_img11.jpg'),
        img('gh38t70r02iszj3uka7kms18nhzt_img6.jpg'),
        img('rg2iao94ekyqx1w9mbhr05l8jvwp_img46.jpg'),
        img('fz6rmv1r6zl2vpa2bh25oxgtwkk6_img23.jpg'),
        img('91pa1ih5swe4rm73h9qa98roy2s9_img25.jpg'),
        img('hr7bulrhs7vfd1q3cj12fiy6o12n_img38.jpg'),
        img('i1dtzzollmiclu724ng7k4tmcta1_img8.jpg'),
        img('9qtf40a6zyzqgrq1g5qt2ujenm69_img13.jpg'),
        img('hb1sdyikdz9khetzvldrju0wqnt1_img45.jpg'),
        img('cw07jatlf5cspfxgaa9dye27zbr1_img19.jpg'),
        img('uknl0bs817hvqa2cyo544mofavo1_img44.jpg'),
        img('d69j4uotwvbfsp2d3o4q62g96mbs_img28.jpg')
      ]
    },
    activities: [
      {
        name: 'Nha Trang island tour',
        day: 4,
        optional: false,
        image: img('2bkttqlbznr5eat18mib7xlgipx3_shutterstock_1444165544.jpg'),
        description: 'A boat out to the islands in the bay for snorkelling over the reef, a floating bar and lunch on deck.'
      }
    ],
    program: {
      name: 'Nha Trang',
      description: 'The flight south for two nights at a five star hotel on the seafront, with a boat day out to the islands.',
      image: img('nem9kghvpvg4auavuy5nhqx2im7r_shutterstock_98382038.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Hanoi',
    subtitle: 'Back in Hanoi for Ninh Binh',
    dayLabel: 'Day 5 to 7',
    images: [
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg')
    ],
    dayImages: {
      5: [
        img('lslm13n5whgajipf2z9iin426acu_1467714747_4064223805_d92a0c371b_o.jpg'),
        img('cpvs34mpdp6fwdfxwv50ctuec38u_1467719114_9578411741_165f3caca2_o.jpg'),
        img('skmwlj0x98xxtq508s7d1lzfz8ge_1467720106_8407458119_4ec3e3d681_o.jpg'),
        img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
      ],
      6: [
        img('arkridntl7mjjss8972eavq2sdqg_shutterstock_1274293249.jpg'),
        img('yx7xjkegdm9ruyh3rv7d2qtwgjyg_8224556638_2c76bfbba5_o.jpg'),
        img('m9yizaucm34mdy6jeo07klf59c3r_51986787203_3b201c83cb_b.jpg'),
        img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
      ],
      7: [
        img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
        img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
        img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
        img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Back to Hanoi`,
      'Breakfast and check out, then the flight north',
      'Check in at your hotel in the old quarter',
      'Rest of the day free in the lanes',
      'Optional: the water puppet theatre near the lake',
      `${DAY_MARK}Day 6 · Ninh Binh day trip`,
      'Breakfast, then south towards Ninh Binh',
      'A rowing boat through the flooded caves at Tam Coc',
      'Lunch included on the tour',
      'Back in Hanoi in the evening',
      `${DAY_MARK}Day 7 · Departure from Hanoi`,
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
        name: 'Ninh Binh day tour',
        day: 6,
        optional: false,
        image: img('arkridntl7mjjss8972eavq2sdqg_shutterstock_1274293249.jpg'),
        description: 'South to Ninh Binh for a rowing boat through the flooded caves at Tam Coc and the limestone country around it.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Back north for two nights, with a full day in Ninh Binh and lunch included.',
      image: img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
    }
  }
];

const detail = {
  slug: 'hanoi-and-nha-trang-escape',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Hanoi and Nha Trang Escape',
  alt: 'Beachfront promenade and high rises at Nha Trang',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'Return domestic flights, private transfers and guided tours',
  tag: 'Beach',
  tags: ['Beach', 'Short break'],
  price: 61750,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Halong Bay', 'Nha Trang', 'Ninh Binh'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 4, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
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
    quote: 'Two nights by the sea in the middle of a northern week. It breaks up the sightseeing without adding a long drive.',
    quoteMore: 'The Nha Trang boat day includes lunch on deck. Skip the big breakfast and save yourself for it.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days with a beach break in the middle: two nights in Hanoi with a full day dragon boat cruise on Halong Bay, two at a five star hotel on the Nha Trang seafront with an island snorkelling day, then two back in the capital with a Ninh Binh day and lunch.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with breakfast and dinner daily, two of them at a five star seafront hotel; return domestic flights; private transfers throughout; a full day dragon boat cruise on Halong Bay; a Nha Trang island tour; a Ninh Binh day tour with lunch.',
  intro2: 'Not included: international flights; Vietnam visa fees; other lunches; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Halong Bay day cruise (B, D)', text: 'Early breakfast, then east towards the coast\nA full day on the bay aboard a dragon boat\nThe limestone islands and the floating villages\nBack in Hanoi in the evening', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Early breakfast, then east towards the coast', 'A full day on the bay aboard a dragon boat', 'The limestone islands and the floating villages'] },
    { title: 'Day 3: Flight to Nha Trang (B, D)', text: 'Breakfast and check out, then the flight south\nCheck in on the seafront at Nha Trang\nRest of the day free at your own pace\nOptional: the mud baths at Thap Ba', hotel: 'Emerald Bay Hotel and Spa Nha Trang', highlights: ['Breakfast and check out, then the flight south', 'Check in on the seafront at Nha Trang', 'Rest of the day free at your own pace'] },
    { title: 'Day 4: Nha Trang islands (B, D)', text: 'Breakfast, then out to the islands by boat\nSnorkelling over the reef\nThe floating bar and lunch on deck\nBack to the hotel in the late afternoon', hotel: 'Emerald Bay Hotel and Spa Nha Trang', highlights: ['Breakfast, then out to the islands by boat', 'Snorkelling over the reef', 'The floating bar and lunch on deck'] },
    { title: 'Day 5: Back to Hanoi (B, D)', text: 'Breakfast and check out, then the flight north\nCheck in at your hotel in the old quarter\nRest of the day free in the lanes\nOptional: the water puppet theatre near the lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast and check out, then the flight north', 'Check in at your hotel in the old quarter', 'Rest of the day free in the lanes'] },
    { title: 'Day 6: Ninh Binh day trip (B, L, D)', text: 'Breakfast, then south towards Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nLunch included on the tour\nBack in Hanoi in the evening', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then south towards Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'Lunch included on the tour'] },
    { title: 'Day 7: Departure from Hanoi (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; other lunches; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const hanoiAndNhaTrangEscapeBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const hanoiAndNhaTrangEscapeProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Halong Bay', 'Nha Trang', 'Ninh Binh'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 2,
  cities: 2,
  activities: 4,
  transfers: 9,
  meals: 11,
  price: detail.price,
  images: cardImages
};
