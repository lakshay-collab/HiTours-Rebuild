// Luxurious Vietnam with Nha Trang. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('nem9kghvpvg4auavuy5nhqx2im7r_shutterstock_98382038.jpg'),
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
  img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
  img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
  img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
  img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('nem9kghvpvg4auavuy5nhqx2im7r_shutterstock_98382038.jpg'),
  img('c9hy7e0pxnoyq2fx2ohd4orj3sn3_shutterstock_129338063.jpg'),
  img('eycipnwt0bhn65khd7y7jz2atgk7_Bai-Tu-Long-bay-Thien-Canh-Son-C.png')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    subtitle: 'Hanoi and Halong Bay',
    dayLabel: 'Day 1 to 2',
    images: [
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
    ],
    dayImages: {
      1: [
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('xf5ltzlprl4wk40yrzti9k9n836e_St._Joseph\'s_Cathedral_Hanoi_2.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ],
      2: [
        img('c9hy7e0pxnoyq2fx2ohd4orj3sn3_shutterstock_129338063.jpg'),
        img('eycipnwt0bhn65khd7y7jz2atgk7_Bai-Tu-Long-bay-Thien-Canh-Son-C.png'),
        img('wmpoev7n31463iecssa9ybdwcjj5_ba-ham-lake-7.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hanoi`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'Check in at your hotel in the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake',
      `${DAY_MARK}Day 2 · Halong Bay and Ba Ham`,
      'Early breakfast, then east towards the coast',
      'A full day out on the bay by boat',
      'The tunnels through to the Ba Ham lakes',
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
        name: 'Halong Bay day cruise',
        day: 2,
        optional: false,
        image: img('c9hy7e0pxnoyq2fx2ohd4orj3sn3_shutterstock_129338063.jpg'),
        description: 'A full day out on the bay by boat, through the limestone islands and the floating villages, back in Hanoi by evening.'
      },
      {
        name: 'Ba Ham lake',
        day: 2,
        optional: false,
        image: img('wmpoev7n31463iecssa9ybdwcjj5_ba-ham-lake-7.jpg'),
        description: 'The three hidden lakes behind Dau Go island, reached through low tunnels in the rock that only open at low tide.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two nights in the old quarter, with a full day out on Halong Bay and the hidden lakes at Ba Ham.',
      image: img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
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
        img('535lx0zvjkz57pwqc2luinlnt99e_1484035777_Cham-Temple-Po-Nagar-Nha-Trang-Vietnam-0249.jpg'),
        img('u07gom70vmscy6rrjzfto0z9a0fx_1467830255_14597773199_e49fdb8686_o.jpg'),
        img('nem9kghvpvg4auavuy5nhqx2im7r_shutterstock_98382038.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
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
      description: 'The flight south for two nights at a five star hotel on the seafront, with a boat out to the islands.',
      image: img('nem9kghvpvg4auavuy5nhqx2im7r_shutterstock_98382038.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Hanoi',
    subtitle: 'Back in Hanoi for Ninh Binh',
    dayLabel: 'Day 5 to 7',
    images: [
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
    ],
    dayImages: {
      5: [
        img('cpvs34mpdp6fwdfxwv50ctuec38u_1467719114_9578411741_165f3caca2_o.jpg'),
        img('awb56qzq2kpcvmv2v0tgytxpbcey_1613644575_shutterstock_363488348.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
        img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg')
      ],
      6: [
        img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        img('yx7xjkegdm9ruyh3rv7d2qtwgjyg_8224556638_2c76bfbba5_o.jpg'),
        img('m9yizaucm34mdy6jeo07klf59c3r_51986787203_3b201c83cb_b.jpg'),
        img('8zsyn00w33flh1y50mn0irdngahv_shutterstock_591172484.jpg')
      ],
      7: [
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
        img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
        img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
        img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Back to Hanoi`,
      'Breakfast and check out, then the flight north',
      'Check in at your hotel in the old quarter',
      'Rest of the day free in the lanes',
      'Optional: the water puppet theatre near the lake',
      `${DAY_MARK}Day 6 · Ninh Binh and Bich Dong`,
      'Breakfast, then south towards Ninh Binh',
      'A rowing boat through the flooded caves at Tam Coc',
      'A cycle ride through the rice fields',
      'Bich Dong, a pagoda built into the rock',
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
        image: img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        description: 'South to Ninh Binh for a rowing boat through the flooded caves at Tam Coc and the limestone country around it.'
      },
      {
        name: 'Cycle ride to Bich Dong pagoda',
        day: 6,
        optional: false,
        image: img('8zsyn00w33flh1y50mn0irdngahv_shutterstock_591172484.jpg'),
        description: 'A cycle ride through the rice fields to Bich Dong, a three tier pagoda built into the rock face.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Back north for two nights, with a full day among the rowing boats and rice fields of Ninh Binh.',
      image: img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
    }
  }
];

const detail = {
  slug: 'luxurious-vietnam-with-nha-trang',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Luxurious Vietnam with Nha Trang',
  alt: 'Five star seafront hotel pool overlooking the bay at Nha Trang',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'A domestic flight, private transfers and guided tours',
  tag: 'Luxury',
  tags: ['Luxury', 'Beach'],
  price: 61228,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Halong Bay', 'Nha Trang', 'Ninh Binh'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 5, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
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
    quote: 'Two nights at a five star on the Nha Trang seafront, and the bay as a day trip rather than a cruise. It suits people who would rather sleep on land.',
    quoteMore: 'Take the Halong day trip early. The boats leave the pier before the tour buses arrive and the bay is still.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days with a beach in the middle: two nights in Hanoi with a full day on Halong Bay and the hidden Ba Ham lakes, two at a five star hotel on the Nha Trang seafront with an island boat day, then two back in the capital with a day in Ninh Binh.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with breakfast and dinner daily, two of them at a five star seafront hotel; return domestic flights; private transfers throughout; a Halong Bay day cruise with the Ba Ham lakes; a Nha Trang island tour; a Ninh Binh day tour; a cycle ride to Bich Dong.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches other than on the boat days; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Halong Bay and Ba Ham (B, D)', text: 'Early breakfast, then east towards the coast\nA full day out on the bay by boat\nThe tunnels through to the Ba Ham lakes\nBack in Hanoi in the evening', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Early breakfast, then east towards the coast', 'A full day out on the bay by boat', 'The tunnels through to the Ba Ham lakes'] },
    { title: 'Day 3: Flight to Nha Trang (B, D)', text: 'Breakfast and check out, then the flight south\nCheck in on the seafront at Nha Trang\nRest of the day free at your own pace\nOptional: the mud baths at Thap Ba', hotel: 'Emerald Bay Hotel and Spa Nha Trang', highlights: ['Breakfast and check out, then the flight south', 'Check in on the seafront at Nha Trang', 'Rest of the day free at your own pace'] },
    { title: 'Day 4: Nha Trang islands (B, D)', text: 'Breakfast, then out to the islands by boat\nSnorkelling over the reef\nThe floating bar and lunch on deck\nBack to the hotel in the late afternoon', hotel: 'Emerald Bay Hotel and Spa Nha Trang', highlights: ['Breakfast, then out to the islands by boat', 'Snorkelling over the reef', 'The floating bar and lunch on deck'] },
    { title: 'Day 5: Back to Hanoi (B, D)', text: 'Breakfast and check out, then the flight north\nCheck in at your hotel in the old quarter\nRest of the day free in the lanes\nOptional: the water puppet theatre near the lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast and check out, then the flight north', 'Check in at your hotel in the old quarter', 'Rest of the day free in the lanes'] },
    { title: 'Day 6: Ninh Binh and Bich Dong (B, D)', text: 'Breakfast, then south towards Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nA cycle ride through the rice fields\nBich Dong, a pagoda built into the rock', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then south towards Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'A cycle ride through the rice fields'] },
    { title: 'Day 7: Departure from Hanoi (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches other than on the boat days; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Vietnam', href: '/asien/vietnam' },
  { label: detail.title }
];

export const luxuriousVietnamNhaTrangBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const luxuriousVietnamNhaTrangProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Halong Bay', 'Nha Trang', 'Ninh Binh'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 2,
  cities: 2,
  activities: 5,
  transfers: 9,
  meals: 11,
  price: detail.price,
  images: cardImages
};
