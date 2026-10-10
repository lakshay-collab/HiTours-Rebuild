// Highlights of Vietnam Group Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
  img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
  img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
  img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg'),
  img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
  img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
  img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
  img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
  img('ht504t29v8gdp29lw42e5le41lcj_shutterstock_1843704298.jpg'),
  img('u5k3kormr4ojfz6kvjub4wzlihv8_shutterstock_175128359%20(1).jpg'),
  img('p285hp3f87tv66r500ldys22p4ii_1484035777_tour_img-450342-70.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ho Chi Minh City',
    subtitle: 'Saigon and Cu Chi',
    dayLabel: 'Day 1 to 2',
    images: [
      img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
      img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
      img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
      img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg')
    ],
    dayImages: {
      1: [
        img('ht504t29v8gdp29lw42e5le41lcj_shutterstock_1843704298.jpg'),
        img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
        img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
        img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg')
      ],
      2: [
        img('u5k3kormr4ojfz6kvjub4wzlihv8_shutterstock_175128359%20(1).jpg'),
        img('p285hp3f87tv66r500ldys22p4ii_1484035777_tour_img-450342-70.jpg'),
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg'),
        img('4v6uzks4tncmsj994n52g9qwwzii_notr.webp')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Saigon`,
      'Arrival at Tan Son Nhat and transfer to your hotel',
      'Check in and meet the rest of the group',
      'Rest of the day free at your own pace',
      'Optional: the rooftop bars on Nguyen Hue',
      `${DAY_MARK}Day 2 · Saigon and the Cu Chi tunnels`,
      'Breakfast, then a half day of the city',
      'The Reunification Palace and the war remnants museum',
      'North west to Cu Chi for the tunnels',
      'The trapdoors, the kitchens and the shafts'
    ],
    accommodation: {
      name: 'Ramana Saigon, Ho Chi Minh',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel in District 3, with a garden pool',
      images: [
        img('ak6932r9mgy7ummvriij275w1isg_500987252.jpg'),
        img('0s1vf9kpgwi8im16u9cci8ar8ym0_500981889.jpg'),
        img('qwqk4rnimv31w1j9ot7wn56i11hl_218007241.jpg'),
        img('sp8oonaq1m0fr80olg9373gvyvev_219176610.jpg'),
        img('iskrbo8xytwhg4pd8ozo7hr0f25e_500985320.jpg'),
        img('02idf833jmi28myen5mhcp872lom_67441194.jpg'),
        img('of98tk4fw9tm2e6q68ge4m2jy81g_500985057.jpg'),
        img('os0hpoan9khw3wfg7g5ck1q747b0_500969987.jpg'),
        img('3tlsk8r0j9d0d5rsju157eq3jr0r_267062701.jpg'),
        img('tniuelgd7dr9tacnegrqx665hlde_509764058.jpg'),
        img('2o4nbz2b9gaz2qu8gkr2jwbqigf2_500970010.jpg'),
        img('g46obql5yxftxjzsw1tg4o5sds67_217529111.jpg'),
        img('yj5rxdj2obazki0g057no5h7crdc_025f6268.jpg'),
        img('ds4e0tryzkyb2k729x1tap5mez9k_2b74b07d.webp')
      ]
    },
    activities: [
      {
        name: 'Saigon half day sightseeing',
        day: 2,
        optional: false,
        image: img('u5k3kormr4ojfz6kvjub4wzlihv8_shutterstock_175128359%20(1).jpg'),
        description: 'The Reunification Palace, the old post office and Notre Dame cathedral, then the war remnants museum and the Ben Thanh market.'
      },
      {
        name: 'Cu Chi tunnels tour',
        day: 2,
        optional: false,
        image: img('caowdd7igiu79f20iggg2rgd2670_shutterstock_1399646222.jpg'),
        description: 'The tunnel network north west of the city, with the trapdoors, the kitchens and a crawl through a widened section of the original shafts.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'Two nights in the south, with the city and the Cu Chi tunnels on a single full day.',
      image: img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Da Nang',
    subtitle: 'Hoi An and Ba Na Hills',
    dayLabel: 'Day 3',
    images: [
      img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
      img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
      img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
      img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg')
    ],
    dayImages: {
      3: [
        img('0a6fkrzbt4bh7g978dtrn4i557gl_chinese-assembly-halls.jpg'),
        img('1xjz0c69e214f6x7oss3eox2tlpn_H%E1%BB%99i_An,_Ch%C3%B9a_C%E1%BA%A7u,_2020-01_CN-02.jpg'),
        img('5dy9z31xyspdq6gzw1l2sgdnxvyb_caption%20(1).jpg'),
        img('mvpmcic2u0xsft9dhq4nb5f285fb_GTJ-2020-0221-83.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Flight to Da Nang and Hoi An`,
      'Breakfast and check out, then the flight to Da Nang',
      'On to Hoi An and the old town on foot',
      'The Japanese bridge and the Phuoc Kien assembly hall',
      'A boat out onto the river at dusk'
    ],
    accommodation: {
      name: 'Diamond Sea Hotel, Da Nang',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel across the road from My Khe beach',
      images: [
        img('jvtjatuzhy3l6vj5wmted47ci0kx_img11.jpg'),
        img('3dlwwhmyvdt5lllx7w768vlwcap4_img5.jpg'),
        img('7yapbisrn806wdu17ahw0uchh4wx_img2.jpg'),
        img('afzw2cjiig91mmip3yjphtz5cb51_img14.jpg'),
        img('l2wkdt00m6g6db1rifd1tl8ocour_img3.jpg'),
        img('yysi7kr9hrbs5fe6soiayd6nvclb_img4.jpg'),
        img('f9catah2zgybzybx9lr7g06s2dti_img21.jpg'),
        img('rza0moupyqtxhv8s71on6hsf87t0_img28.jpg'),
        img('5441qxl3f996q9s8dkdocflbl931_img36.jpg'),
        img('a6837cylydkp9zl2ndh8joxwowlg_img9.jpg'),
        img('nx2185orzdiy7zpvu0e0p29njxze_img23.jpg')
      ]
    },
    activities: [
      {
        name: 'Hoi An walking tour with a boat ride',
        day: 3,
        optional: false,
        image: img('0a6fkrzbt4bh7g978dtrn4i557gl_chinese-assembly-halls.jpg'),
        description: 'The Japanese covered bridge, the Sa Huynh museum and the Phuoc Kien assembly hall on foot, then a boat out onto the river.'
      }
    ],
    program: {
      name: 'Da Nang',
      description: 'The flight to the central coast and an afternoon on foot in the old trading town of Hoi An.',
      image: img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Hanoi',
    subtitle: 'Hanoi, Ninh Binh and the bay',
    dayLabel: 'Day 4 to 7',
    images: [
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
    ],
    dayImages: {
      4: [
        img('83i0f66gz1olso2g2r389g64fe0j_shutterstock_1343264873.jpg'),
        img('o316qph31vgt1f60p3sw8z4fv6cd_shutterstock_2238643183%20(2).jpg'),
        img('yhxwfmhdmt1hhx1z5nna2xphz1k3_golden-bridge-4912803_1280.jpg'),
        img('9nzo06v7ea0r0y956ryjccrbnvfg_maxresdefault%20(3).jpg')
      ],
      5: [
        img('9dd3h3g5t2yoaqc1ch7tav5p7ym0_cycling-ninh-binh.jpg'),
        img('yx7xjkegdm9ruyh3rv7d2qtwgjyg_8224556638_2c76bfbba5_o.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
        img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg')
      ],
      6: [
        img('ambvli725z7w11397llw9bbdzq3a_shutterstock_1872545233%20(1).jpg'),
        img('wkacydb95r5vm7ce57ujw79ufdxh_16183432367_e73287079a_o.jpg'),
        img('ihukt6y3vv68yzcr72fyq3wqeqbz_31263620335_b87975222b_o.jpg'),
        img('p1eqgvlkaa0bbrb5zwzl0nrpwm2b_6462e1c66879b.jpg')
      ],
      7: [
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
        img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
        img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
        img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Ba Na Hills and on to Hanoi`,
      'Breakfast, then the cable car up to Ba Na',
      'The bridge held up by two stone hands',
      'The flower gardens of Le Jardin d\'Amour',
      'The flight to Hanoi and check in',
      `${DAY_MARK}Day 5 · Ninh Binh day trip`,
      'Breakfast, then south towards Ninh Binh',
      'A rowing boat through the flooded caves at Tam Coc',
      'The limestone country and the rice fields',
      'Back in Hanoi in the evening',
      `${DAY_MARK}Day 6 · Halong Bay day cruise`,
      'Early breakfast, then east towards the coast',
      'A full day on the bay by boat',
      'The climb to the viewpoint on Titop island',
      'Back in Hanoi in the evening',
      `${DAY_MARK}Day 7 · Departure from Hanoi`,
      'Breakfast at the hotel and check out',
      'Transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'The Light Hotel Hanoi, Hanoi',
      description: '3 nights · Breakfast · Standard room · 4★ · Four star hotel on the edge of the old quarter',
      images: [
        img('4i23e8l3fbfe6bplhd3dbe8gruv0_img9.jpg'),
        img('vw400lu91kn7uf0ffcgnd83n30nc_img19.jpg'),
        img('bxmk6k1gpigqt4szctisjoq7ybms_img3.jpg'),
        img('atusamfpsj7hcmhuf9vi6927y66n_img6.jpg'),
        img('9jp8pwr6mzz4thwbp43ojkeouglh_img33.jpg'),
        img('wvbtfq70gq0vwcya6r5g28wbni4v_img13.jpg'),
        img('fa4drfe3vb7fvjjivcvgcnrxdubb_img36.jpg'),
        img('bd9rcphrasn5os3szxonx4pokwc9_img15.jpg'),
        img('diskcqva20dn01zs9tidzfxopat0_img39.jpg')
      ]
    },
    activities: [
      {
        name: 'Ba Na Hills with the Golden Bridge',
        day: 4,
        optional: false,
        image: img('83i0f66gz1olso2g2r389g64fe0j_shutterstock_1343264873.jpg'),
        description: 'The cable car up to Ba Na, the bridge held up by two stone hands and the flower gardens of Le Jardin d\'Amour before the flight north.'
      },
      {
        name: 'Ninh Binh day tour',
        day: 5,
        optional: false,
        image: img('9dd3h3g5t2yoaqc1ch7tav5p7ym0_cycling-ninh-binh.jpg'),
        description: 'South to Ninh Binh for a rowing boat through the flooded caves at Tam Coc and the limestone country around it.'
      },
      {
        name: 'Halong Bay day cruise with Titop island',
        day: 6,
        optional: false,
        image: img('ambvli725z7w11397llw9bbdzq3a_shutterstock_1872545233%20(1).jpg'),
        description: 'A full day on the bay by boat, with a climb to the viewpoint on Titop island and time on its beach.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Three nights in the capital, with Ba Na Hills on the way, a day in Ninh Binh and a full day cruise on Halong Bay.',
      image: img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
    }
  }
];

const detail = {
  slug: 'highlights-of-vietnam-group-tour',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Highlights of Vietnam Group Tour',
  alt: 'Titop island beach and viewpoint in Halong Bay',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'Two domestic flights, coach travel and guided tours',
  tag: 'Group tour',
  tags: ['Group tour', 'Culture'],
  price: 56040,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ho Chi Minh City', 'Cu Chi', 'Da Nang', 'Hoi An', 'Ba Na Hills', 'Hanoi', 'Ninh Binh', 'Halong Bay'],
  stats: { days: 7, cities: 3, hotels: 3, activities: 7, transfers: 11 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
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
    quote: 'South to north with a group, four star hotels throughout and two flights so no day is spent on the road.',
    quoteMore: 'Climb Titop island on the cruise day. It is twenty minutes of steps and the best view of the bay you will get at sea level.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A week south to north with a small group: two nights in Saigon with the city and the Cu Chi tunnels, the flight to Da Nang and an evening in Hoi An, Ba Na Hills and the Golden Bridge, then three nights in Hanoi with Ninh Binh and a full day cruise on Halong Bay.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights at four star hotels with daily breakfast; two domestic flights; all coach travel and transfers; a half day Saigon sightseeing tour; the Cu Chi tunnels; a Hoi An walking tour with a river boat ride; the Ba Na Hills tour with the cable car and the flower gardens; a Ninh Binh day tour; a full day cruise on Halong Bay with Titop island.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Saigon (Arrival)', text: 'Arrival at Tan Son Nhat and transfer to your hotel\nCheck in and meet the rest of the group\nRest of the day free at your own pace\nOptional: the rooftop bars on Nguyen Hue', hotel: 'Ramana Saigon', highlights: ['Arrival at Tan Son Nhat and transfer to your hotel', 'Check in and meet the rest of the group', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Saigon and the Cu Chi tunnels (B)', text: 'Breakfast, then a half day of the city\nThe Reunification Palace and the war remnants museum\nNorth west to Cu Chi for the tunnels\nThe trapdoors, the kitchens and the shafts', hotel: 'Ramana Saigon', highlights: ['Breakfast, then a half day of the city', 'The Reunification Palace and the war remnants museum', 'North west to Cu Chi for the tunnels'] },
    { title: 'Day 3: Flight to Da Nang and Hoi An (B)', text: 'Breakfast and check out, then the flight to Da Nang\nOn to Hoi An and the old town on foot\nThe Japanese bridge and the Phuoc Kien assembly hall\nA boat out onto the river at dusk', hotel: 'Diamond Sea Hotel', highlights: ['Breakfast and check out, then the flight to Da Nang', 'On to Hoi An and the old town on foot', 'The Japanese bridge and the Phuoc Kien assembly hall'] },
    { title: 'Day 4: Ba Na Hills and on to Hanoi (B)', text: 'Breakfast, then the cable car up to Ba Na\nThe bridge held up by two stone hands\nThe flower gardens of Le Jardin d\'Amour\nThe flight to Hanoi and check in', hotel: 'The Light Hotel Hanoi', highlights: ['Breakfast, then the cable car up to Ba Na', 'The bridge held up by two stone hands', 'The flower gardens of Le Jardin d\'Amour'] },
    { title: 'Day 5: Ninh Binh day trip (B)', text: 'Breakfast, then south towards Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nThe limestone country and the rice fields\nBack in Hanoi in the evening', hotel: 'The Light Hotel Hanoi', highlights: ['Breakfast, then south towards Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'The limestone country and the rice fields'] },
    { title: 'Day 6: Halong Bay day cruise (B)', text: 'Early breakfast, then east towards the coast\nA full day on the bay by boat\nThe climb to the viewpoint on Titop island\nBack in Hanoi in the evening', hotel: 'The Light Hotel Hanoi', highlights: ['Early breakfast, then east towards the coast', 'A full day on the bay by boat', 'The climb to the viewpoint on Titop island'] },
    { title: 'Day 7: Departure from Hanoi (B)', text: 'Breakfast at the hotel and check out\nTransfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const highlightsVietnamGroupTourBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const highlightsVietnamGroupTourProduct = {
  slug: detail.slug,
  places: ['Ho Chi Minh City', 'Cu Chi', 'Da Nang', 'Hoi An', 'Ba Na Hills', 'Hanoi', 'Ninh Binh', 'Halong Bay'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 7,
  transfers: 11,
  meals: 12,
  price: detail.price,
  images: cardImages
};
