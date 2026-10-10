// Getaway to Vietnam with Grand World. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
  img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
  img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
  img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
  img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
  img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
  img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
  img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
  img('xwt4uelyukn7iv6nqgf49s4rvc2o_shutterstock_2397561103.jpg'),
  img('p5zbqyj3uk55d4w68ui7615fu4uc_shutterstock_2403049297.jpg'),
  img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg')
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
        img('xwt4uelyukn7iv6nqgf49s4rvc2o_shutterstock_2397561103.jpg'),
        img('p5zbqyj3uk55d4w68ui7615fu4uc_shutterstock_2403049297.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg'),
        img('qc0qml33ej9ri6v8ge5qtgji51mv_shutterstock_2444644629.jpg')
      ],
      2: [
        img('o8ns4pm387zbv2l2acoxip7h7q25_shutterstock_433429624.jpg'),
        img('cquybz92xvo42plkxip6wseppwlk_shutterstock_2462621121.jpg'),
        img('wkacydb95r5vm7ce57ujw79ufdxh_16183432367_e73287079a_o.jpg'),
        img('ihukt6y3vv68yzcr72fyq3wqeqbz_31263620335_b87975222b_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and Hanoi city tour`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'A guided day of the city with the train street',
      'The canals and quarters of Mega Grand World',
      'Check in and the evening free',
      `${DAY_MARK}Day 2 · Halong Bay day cruise`,
      'Early breakfast, then east towards the coast',
      'A full day on the bay by boat',
      'The limestone islands and the floating villages',
      'Back in Hanoi in the evening'
    ],
    accommodation: {
      name: 'La Passion Classic Hotel, Hanoi',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel in the old quarter, near the cathedral',
      images: [
        img('2web0614fgpcm9vm2d48gu10asbr_531428678.jpg'),
        img('22uq4piy52u53zqhacuwf748zded_515679039.jpg'),
        img('uaczvevgj4lvussp20oyqdxf6nhz_531236750.jpg'),
        img('b2sl7gbb81p31eiuvsiz4tug9cs1_hre.jpg'),
        img('le4ud3k9t40pcecqmw33mkzy56vf_download%20-%202024-08-03T174503.047.jpg'),
        img('ru2c2jwj3uj1m7myc8gubpj8n89d_download%20-%202024-08-03T174453.244.jpg'),
        img('w57r05oomzd7m7m0chmo0lhck85e_531428951.jpg'),
        img('1ducs41a676l13cqdkcuoeev22rl_531238778.jpg'),
        img('iah4yrzg8e92eh6qbk0r5q8xa9s5_531236747.jpg'),
        img('m42kd87tw3z5pfce2n4xv5gcs20k_531428751.jpg'),
        img('s5f2360qlk6sblb02m6bvisx19tj_531893220.jpg')
      ]
    },
    activities: [
      {
        name: 'Hanoi city tour with the train street',
        day: 1,
        optional: false,
        image: img('xwt4uelyukn7iv6nqgf49s4rvc2o_shutterstock_2397561103.jpg'),
        description: 'The mausoleum and the Temple of Literature, the narrow lane where the train passes between the houses, and the canals of Mega Grand World.'
      },
      {
        name: 'Halong Bay full day cruise',
        day: 2,
        optional: false,
        image: img('o8ns4pm387zbv2l2acoxip7h7q25_shutterstock_433429624.jpg'),
        description: 'A full day on the bay by boat among the limestone islands and the floating villages, back in Hanoi by evening.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two nights in the old quarter with a city day including the train street, and a full day cruise on Halong Bay.',
      image: img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Da Nang',
    subtitle: 'Ninh Binh, Da Nang and Hoi An',
    dayLabel: 'Day 3 to 4',
    images: [
      img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
      img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
      img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
      img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg')
    ],
    dayImages: {
      3: [
        img('arkridntl7mjjss8972eavq2sdqg_shutterstock_1274293249.jpg'),
        img('yx7xjkegdm9ruyh3rv7d2qtwgjyg_8224556638_2c76bfbba5_o.jpg'),
        img('m9yizaucm34mdy6jeo07klf59c3r_51986787203_3b201c83cb_b.jpg'),
        img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg')
      ],
      4: [
        img('n7jzzp41iyow1x0mpruybfxj4mup_shutterstock_2008226918.jpg'),
        img('eqsf27483kivioqskfh5vqeeupn5_shutterstock_2008226918.jpg'),
        img('84tapj6qwgvbv9sgdfd6q1233uak_1467287160_Linh_Ung_Pagoda.jpg'),
        img('g87jedueq6ohmn8b9d02ps9h3xi9_1467275400_Marble_Mountains__Vietnam.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Ninh Binh and on to Da Nang`,
      'Breakfast and check out, then south to Ninh Binh',
      'A rowing boat through the flooded caves at Tam Coc',
      'Lunch included on the tour',
      'The flight to Da Nang and check in',
      `${DAY_MARK}Day 4 · Marble Mountains and Hoi An`,
      'Breakfast, then the caves of the Marble Mountains',
      'The Am Phu cave and the Son Tra peninsula',
      'A basket boat through the Cam Thanh coconut forest',
      'Hoi An in the evening, lanterns on the water'
    ],
    accommodation: {
      name: 'The Sail Hotel, Da Nang',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel on the Da Nang beachfront',
      images: [
        img('spufkesrcxzf7i0cn8re7cagcywk_download%20-%202024-08-03T174301.901.jpg'),
        img('hmmew6nmibbhpgfcsqhkbiewwik6_download%20-%202024-08-03T173957.324.jpg'),
        img('wk9h1vwagkcwn9fbtaky19yqoai8_download%20-%202024-08-03T173925.654.jpg'),
        img('jqiuky1b3djwru1ar1nm73njxm5b_download%20-%202024-08-03T173951.603.jpg'),
        img('upncndfn6ec2i17f6mthunf3myj5_download%20-%202024-08-03T174018.427.jpg'),
        img('c722ra5ijdnxk3my77yymb3mehrc_download%20-%202024-08-03T174031.341.jpg'),
        img('ja4ktw980a8gi5ti4ymtyfzjpw25_download%20-%202024-08-03T174006.365.jpg'),
        img('7rl16gpjoiv69oaiff6nqgh9435m_download%20-%202024-08-03T173933.413.jpg'),
        img('j35kb01ksiauo4eiqzairbrsh619_download%20-%202024-08-03T174027.241.jpg'),
        img('7m4rleu56isc62anvxh7puwel8g3_download%20-%202024-08-03T174536.290.jpg'),
        img('sc82vyw4od0hap1459iw49sdjysx_download%20-%202024-08-03T174011.629.jpg'),
        img('gccm5gbey56epa35l06777ikaxa5_download%20-%202024-08-03T174548.191.jpg')
      ]
    },
    activities: [
      {
        name: 'Ninh Binh day tour with lunch',
        day: 3,
        optional: false,
        image: img('arkridntl7mjjss8972eavq2sdqg_shutterstock_1274293249.jpg'),
        description: 'South to Ninh Binh for a rowing boat through the flooded caves at Tam Coc, with lunch before the flight to the coast.'
      },
      {
        name: 'Marble Mountains, Son Tra and the coconut forest',
        day: 4,
        optional: false,
        image: img('n7jzzp41iyow1x0mpruybfxj4mup_shutterstock_2008226918.jpg'),
        description: 'The caves and pagodas of the Marble Mountains, the Am Phu cave, the Son Tra peninsula, and a basket boat through the Cam Thanh coconut forest.'
      }
    ],
    program: {
      name: 'Da Nang',
      description: 'A Ninh Binh day on the way out of the north, then two nights on the beachfront with the Marble Mountains and Hoi An.',
      image: img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Ho Chi Minh City',
    subtitle: 'Ba Na Hills and Saigon',
    dayLabel: 'Day 5 to 7',
    images: [
      img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
      img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg'),
      img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
      img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg')
    ],
    dayImages: {
      5: [
        img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        img('bbeokkqegcwgy51eqlvyhfvmlgis_1467287106_BaNaHillsCableCar.jpg'),
        img('84tapj6qwgvbv9sgdfd6q1233uak_1467287160_Linh_Ung_Pagoda.jpg'),
        img('yhxwfmhdmt1hhx1z5nna2xphz1k3_golden-bridge-4912803_1280.jpg')
      ],
      6: [
        img('o3s5ddj3fn5qait83kv3nh7svc0p_shutterstock_2312652627.jpg'),
        img('4v6uzks4tncmsj994n52g9qwwzii_notr.webp'),
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg'),
        img('edv5z4jl7qnqqv3sn3jzh2droay4_1484035778_1-saigon-central-post-office-saigon-central-post-office.jpg')
      ],
      7: [
        img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
        img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg'),
        img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
        img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Ba Na Hills and on to Saigon`,
      'Breakfast, then the cable car up to Ba Na',
      'The Golden Bridge held up by two stone hands',
      'The French village and the gardens at the top',
      'The flight to Saigon and check in',
      `${DAY_MARK}Day 6 · Saigon, Cu Chi and the market`,
      'Breakfast, then a half day of the city',
      'The palace, the cathedral and the war remnants museum',
      'North west to Cu Chi for the tunnels and the range',
      'An afternoon through Saigon square',
      `${DAY_MARK}Day 7 · Departure from Saigon`,
      'Breakfast at the hotel and check out',
      'Private transfer to Tan Son Nhat for your flight home'
    ],
    accommodation: {
      name: 'Acnos Grand Hotel, Ho Chi Minh',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Hotel in District 1, a short walk from Saigon square',
      images: [
        img('9c6czohyddr8kue9lfsp2zdm7auk_le-duy-grand-hotel-luxury.jpg'),
        img('vl4kbh7kaeeg0i6zfv00ceetq6un_433172382.jpg'),
        img('aliqs0cpgm6bza2gu8pgfpgvw5ip_433172268.jpg'),
        img('48fyfgf3ddjnp4gf7t5t55zksqeh_433172157.jpg'),
        img('16pv5fse6smtiqn4lx3jdl6dgb7f_433172219.jpg'),
        img('cx1iobpvvkv1j7xqzg4f1scx629p_433172188.jpg'),
        img('jsrk671uo0es77ihq2hwfiohyopf_433172255.jpg'),
        img('1hftqtbyg244t45yqqeaqsdargbg_481459315.jpg'),
        img('q4ut388f9hge62qvu9idk0as5r0t_433172214.jpg')
      ]
    },
    activities: [
      {
        name: 'Ba Na Hills and the Golden Bridge',
        day: 5,
        optional: false,
        image: img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        description: 'The long cable car up to Ba Na, the Golden Bridge held up by two stone hands, and the French village and gardens at the top.'
      },
      {
        name: 'Saigon city tour',
        day: 6,
        optional: false,
        image: img('o3s5ddj3fn5qait83kv3nh7svc0p_shutterstock_2312652627.jpg'),
        description: 'The Reunification Palace, the old post office and Notre Dame cathedral, then the war remnants museum.'
      },
      {
        name: 'Cu Chi tunnels with the shooting range',
        day: 6,
        optional: false,
        image: img('vxjlyxvp773ftpo6fu3uw3zq1pgz_shutterstock_690459592.jpg'),
        description: 'The tunnel network north west of the city, the trapdoors and kitchens, and the range where you can fire a few rounds from an AK 47.'
      },
      {
        name: 'Shopping tour at Saigon square',
        day: 6,
        optional: false,
        image: img('pz0nx0rsx88eks3g26dfxd7nip7t_Downpic.cc-78638212.jpg'),
        description: 'An afternoon through Saigon square and the market stalls around it, where the tailoring and the copies are cheapest.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'Ba Na Hills on the way south, then two nights in District 1 with the city, the tunnels and a shopping afternoon.',
      image: img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg')
    }
  }
];

const detail = {
  slug: 'getaway-to-vietnam-with-grand-world',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Getaway to Vietnam with Grand World',
  alt: 'Train passing between houses on Hanoi train street',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'Two domestic flights, private transfers and guided tours',
  tag: 'Bestseller',
  tags: ['Culture', 'Grand tour'],
  price: 65540,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Halong Bay', 'Ninh Binh', 'Da Nang', 'Hoi An', 'Ba Na Hills', 'Ho Chi Minh City', 'Cu Chi'],
  stats: { days: 7, cities: 3, hotels: 3, activities: 9, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['9 experiences', 'Activities'],
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
    quote: 'This is the busiest week we sell. Nine separate things in seven days, and still two flights to keep you off the road.',
    quoteMore: 'The train street is best in the late afternoon. Check the timetable with your guide, it changes without notice.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A full week north to south: Hanoi with the train street and Mega Grand World, a full day cruise on Halong Bay, Ninh Binh with lunch, two nights on the Da Nang beachfront with the Marble Mountains and Hoi An, Ba Na Hills, then Saigon with the Cu Chi tunnels and a shopping afternoon.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with daily breakfast and dinner in Saigon; two domestic flights; private transfers throughout; a Hanoi city tour with the train street and Mega Grand World; a full day cruise on Halong Bay; a Ninh Binh day tour with lunch; the Marble Mountains, Son Tra peninsula and Cam Thanh basket boat day; a full day up at Ba Na with the Golden Bridge; a half day Saigon city tour; the Cu Chi tunnels with the shooting range; a shopping tour at Saigon square.',
  intro2: 'Not included: international flights; Vietnam visa fees; other lunches; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and Hanoi city tour (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nA guided day of the city with the train street\nThe canals and quarters of Mega Grand World\nCheck in and the evening free', hotel: 'La Passion Classic Hotel', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'A guided day of the city with the train street', 'The canals and quarters of Mega Grand World'] },
    { title: 'Day 2: Halong Bay day cruise (B)', text: 'Early breakfast, then east towards the coast\nA full day on the bay by boat\nThe limestone islands and the floating villages\nBack in Hanoi in the evening', hotel: 'La Passion Classic Hotel', highlights: ['Early breakfast, then east towards the coast', 'A full day on the bay by boat', 'The limestone islands and the floating villages'] },
    { title: 'Day 3: Ninh Binh and on to Da Nang (B, L)', text: 'Breakfast and check out, then south to Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nLunch included on the tour\nThe flight to Da Nang and check in', hotel: 'The Sail Hotel', highlights: ['Breakfast and check out, then south to Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'Lunch included on the tour'] },
    { title: 'Day 4: Marble Mountains and Hoi An (B)', text: 'Breakfast, then the caves of the Marble Mountains\nThe Am Phu cave and the Son Tra peninsula\nA basket boat through the Cam Thanh coconut forest\nHoi An in the evening, lanterns on the water', hotel: 'The Sail Hotel', highlights: ['Breakfast, then the caves of the Marble Mountains', 'The Am Phu cave and the Son Tra peninsula', 'A basket boat through the Cam Thanh coconut forest'] },
    { title: 'Day 5: Ba Na Hills and on to Saigon (B, D)', text: 'Breakfast, then the cable car up to Ba Na\nThe Golden Bridge held up by two stone hands\nThe French village and the gardens at the top\nThe flight to Saigon and check in', hotel: 'Acnos Grand Hotel', highlights: ['Breakfast, then the cable car up to Ba Na', 'The Golden Bridge held up by two stone hands', 'The French village and the gardens at the top'] },
    { title: 'Day 6: Saigon, Cu Chi and the market (B, D)', text: 'Breakfast, then a half day of the city\nThe palace, the cathedral and the war remnants museum\nNorth west to Cu Chi for the tunnels and the range\nAn afternoon through Saigon square', hotel: 'Acnos Grand Hotel', highlights: ['Breakfast, then a half day of the city', 'The palace, the cathedral and the war remnants museum', 'North west to Cu Chi for the tunnels and the range'] },
    { title: 'Day 7: Departure from Saigon (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Tan Son Nhat for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Tan Son Nhat for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; other lunches; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const getawayVietnamGrandWorldBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const getawayVietnamGrandWorldProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Halong Bay', 'Ninh Binh', 'Da Nang', 'Hoi An', 'Ba Na Hills', 'Ho Chi Minh City', 'Cu Chi'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 9,
  transfers: 12,
  meals: 12,
  price: detail.price,
  images: cardImages
};
