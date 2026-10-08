// Best of Thailand and Malaysia. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('xqqgyuisthrhpr1pt4k869ukngar_shutterstock_1424645588-min.jpg'),
  img('mgac4dsd6bath7whtafidxvthqzc_shutterstock_368832815.jpg'),
  img('1cq8i4ccjxzj2kcrf5n2lspi78ha_shutterstock_173996327%20(1).jpg'),
  img('amvbk3tr55yxg3v3wt9blp27xt6w_shutterstock_1111917086-min.jpg'),
  img('nn3ddc2jsww3ka4dt8ovqbpyhh49_shutterstock_1753947629-min%20(1).jpg'),
  img('8npmp4jkvqvuucll4nlpxbbvvyhs_shutterstock_121740241.jpg'),
  img('772kirdev9kt0fj3txxq31gnnayr_shutterstock_236815570.jpg'),
  img('qw46v2de4a78q03dsvrujuwjzdvn_shutterstock_1463281034.jpg'),
  img('s5j9abac6eos8fh9hniqc6v8z6zl_shutterstock_1221988960%20(1).jpg'),
  img('0k0xalzod2x1quwxoll1lt3t4ou9_shutterstock_289362893%20(1)-min.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Pattaya',
    dayLabel: 'Day 1 to 2',
    images: [
      img('xqqgyuisthrhpr1pt4k869ukngar_shutterstock_1424645588-min.jpg'),
      img('hx1mex42a0hqgfl09mzf4titrit9_shutterstock_1272430873-min.jpg'),
      img('0k0xalzod2x1quwxoll1lt3t4ou9_shutterstock_289362893%20(1)-min.jpg'),
      img('v19tslpbpelnwcjlb8vdysyvm403_shutterstock_1008532504-min.jpg')
    ],
    dayImages: {
      1: [
        img('zrxata0eyg8ov4agkbcyc4oehwvj_1578641727_5457359187_ce9abc1e5c_o.jpg'),
        img('jdjficjyu9clkjcdxw8zcj2oqzfy_Mini%20Siam.jpg'),
        img('l6mvyy7uuspahqb7kssc2j0sz46h_1579529269_shutterstock_620692271.jpg'),
        img('bvwjnvbntmht55itmvquym5paudf_Mimosa%20Pattaya3.jpg')
      ],
      2: [
        img('we68xopgvhxvi7wt9eyhehbvwv1w_dl.beatsnoop.com-VHomu5ki9h.jpg'),
        img('kz1jbr0anl74tbg4qaspajd1oxm4_1472036650_8237106102_1f7541157d_b.jpg'),
        img('26irbobpyxgu82qr3ngdovihfmw9_shutterstock_1801193749.jpg'),
        img('xqqgyuisthrhpr1pt4k869ukngar_shutterstock_1424645588-min.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and on to Pattaya`,
      'Arrival at Suvarnabhumi Airport and private sedan transfer down to Pattaya',
      'Check in at Bella Villa Prima and keep the evening free',
      'Optional: the Sanctuary of Truth, Mini Siam or an hour on Jomtien beach',
      `${DAY_MARK}Day 2 · Coral Island day trip`,
      'Breakfast, then shared transfer to the Bali Hai pier',
      'Speedboat transfer across to Coral Island for the day',
      'Swim and sunbathe at Tawaen beach, water sports payable on the sand',
      'Return speedboat and shared transfer to your Pattaya hotel'
    ],
    accommodation: {
      name: 'Bella Villa Prima, Pattaya, Pattaya',
      description: '2 nights · Breakfast included · Deluxe room · 3★ · Bella Villa Prima, a short ride from the Pattaya beach road',
      images: [
        img('jokdjkynn501a86cxqoci6x7kefy_425050114.jpg'),
        img('5xpny6puu50henbiubryarn8ur7y_201710041712247495-a0450ec0bc2211edb4c40a58a9feac02.png'),
        img('tjqolkhix8m9vl1zxhozioe0gbfx_415398325.jpg'),
        img('th0f1l94nksp773avzjz9ra65ndv_425049998.jpg'),
        img('7kua1g32duupvbhea2u3e2whsh0r_163066888.jpg'),
        img('vrdpgy1f8hjntjd9a6nk01vczox2_425050126.jpg'),
        img('8asjmjhcfrbpxlve7tuo7lvqa5nj_425328906.jpg'),
        img('a8rmi89k2g5mz93p8i64lp8n81is_201710041712247495-89ad96b5_z.png'),
        img('w2nauggf6ik7mxhf7idnk0f73fem_425049358.jpg'),
        img('v87yga29m06drovxplar757tij97_425327524.jpg'),
        img('m3fd6btdoxszt14putzpfu68e829_425328892.jpg'),
        img('thbxy3ydv83plbjaa80moanbshgp_425327520.jpg'),
        img('rgbe7w1uepkrjevjpxpjrcrbanf9_425327440.jpg'),
        img('6r46w4b9h7dq5x335zu33mtrbo4e_download.jpg'),
        img('chmrapuvw2h11mcae9d3hv3zod7d_c9456c80dbe011e69bc70a209fbd0127.png'),
        img('8favugaz0hiubrevoooy452waegf_425353952.jpg'),
        img('awkm3hljk20gysfzt7lunmnnaezu_28a2944e740611ea8dbc0242ac110002.png')
      ]
    },
    activities: [
      {
        name: 'Coral Island by Speedboat',
        day: 2,
        optional: false,
        image: img('we68xopgvhxvi7wt9eyhehbvwv1w_dl.beatsnoop.com-VHomu5ki9h.jpg'),
        description: 'A speedboat day out to Koh Larn with clear water at Tawaen beach, loungers on the sand and water sports if you want them.'
      },
      {
        name: 'Sanctuary of Truth',
        day: 1,
        optional: true,
        image: img('zrxata0eyg8ov4agkbcyc4oehwvj_1578641727_5457359187_ce9abc1e5c_o.jpg'),
        description: 'An enormous carved teak temple on the shore at Naklua, still being built by hand after forty years.'
      },
      {
        name: 'Mini Siam',
        day: 1,
        optional: true,
        image: img('jdjficjyu9clkjcdxw8zcj2oqzfy_Mini%20Siam.jpg'),
        description: 'Scale models of Thai and world landmarks set in gardens, an easy hour for families before dinner.'
      }
    ],
    program: {
      name: 'Coral Island and easy evenings',
      description: 'Two nights on the Gulf coast with a speedboat day at Koh Larn and the Pattaya night markets a short ride away.',
      image: img('xqqgyuisthrhpr1pt4k869ukngar_shutterstock_1424645588-min.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Bangkok',
    dayLabel: 'Day 3 to 4',
    images: [
      img('cvd94dr8mjmqly8caqfs6ehd710n_co2.jpg'),
      img('mgac4dsd6bath7whtafidxvthqzc_shutterstock_368832815.jpg'),
      img('8esmek6ajh3sgyttq6cxyr5up2u6_shutterstock_482021800-min.jpg'),
      img('n0twhi7ong2znp7u8ifv5gk22d9h_shutterstock_449998630.jpg')
    ],
    dayImages: {
      3: [
        img('71rrhywwfox7r6gtz6d8yc97fuxz_IMG_2239-HDR-e1583134969801.jpg'),
        img('khu67xids4smbtwbplqrdjj8ml88_1579166774_shutterstock_391516453.jpg'),
        img('40um8fj1pw1psle6u1s6o7ee9m7l_Meet%20the%20Bollywood%20stars.jpg'),
        img('9f2a8nktzg9bu1povmomf83950on_1462799773__E0_B9_80_E0_B8_AA_E0_B8_B2_E0_B8_8A_E0_B8_B4_E0_B8_87_E0_B8_8A_E0_B9_89_E0_B8_B201.jpg')
      ],
      4: [
        img('t6oeeneexy5ok1bvsoqz8xc1sbnx_shutterstock_2317763115.jpg'),
        img('q3gxvgo3fib86rqmes7b33i4k830_52637615382_533cdff4ec_o.jpg'),
        img('qnp0s6axsuql4voi9rz7pz3079gq_stock-photo-wat-maha-phruettharam-worawihan-in-bangkok-thailand-2198439611-transformed.jpeg'),
        img('s0dvtb7g96zt2o6fkpk5cgu6zf8f_download%20-%202024-04-26T160628.352.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · On to Bangkok`,
      'Breakfast, check out and private sedan transfer up to Bangkok',
      'Check in and spend the afternoon however you like',
      'Optional: Wat Arun across the river, Chatuchak market or Madame Tussauds',
      `${DAY_MARK}Day 4 · Bangkok sightseeing`,
      'Breakfast, then shared transfer for the full day city tour',
      'The Golden Buddha at Wat Traimit and Wat Maha Phruettharam',
      'A stop at the gem gallery before the ride back to the hotel',
      'Evening free around the markets near your hotel'
    ],
    accommodation: {
      name: 'Convenient Park Hotel, Bangkok, Bangkok',
      description: '2 nights · Breakfast included · Deluxe room · 3★ · Convenient Park, close to the airport road and local markets',
      images: [
        img('yrzephwewqerv3lrfnp5hoaiu2tx_img44.jpg'),
        img('47ctn6ztterbx5a11fx58v67idej_img13.jpg'),
        img('rtz8watjoct0ps2wo0ulguenm8or_img2.jpg'),
        img('od401ezaffa4v61makk0datudi8e_img5.jpg'),
        img('10zrfb3hi0tgftfvy9ymylj7fcle_img1.jpg'),
        img('gkqp8kmspjc4hea560awdshddous_img34.jpg'),
        img('f5e88ebtevdcmkeb6t6d6wnpxo35_img11.jpg'),
        img('ppdnesp004ftokvde8rwbloz18y2_img7.jpg'),
        img('cr0rjrw6en45c9qka0fi55ylmfpl_img3.jpg'),
        img('5lcvn4hq1zjvsre9monftzfh3dex_img9.jpg'),
        img('yh58lzxe0hy6sxy9euwnuggfor8q_img21.jpg'),
        img('g1rz269gkkgxgrj50yk01e2zhekq_img37.jpg'),
        img('acw7lx0l6f8xzvy3oejy02kc8y3g_img36.jpg'),
        img('dlecj5g7l1rsr362y3ko7yit5lw2_img39.jpg')
      ]
    },
    activities: [
      {
        name: 'Full Day Bangkok City Tour',
        day: 4,
        optional: false,
        image: img('t6oeeneexy5ok1bvsoqz8xc1sbnx_shutterstock_2317763115.jpg'),
        description: 'A shared coach tour taking in the Golden Buddha at Wat Traimit, Wat Maha Phruettharam and a gem gallery.'
      },
      {
        name: 'Wat Arun',
        day: 3,
        optional: true,
        image: img('yhlxzfljuyp1db4nnp4zhomnpygv_1472040858_5438431955_6a9d3a4f74_b.jpg'),
        description: 'The temple of dawn on the west bank, covered in porcelain and best reached by the cross river ferry.'
      },
      {
        name: 'Chatuchak Weekend Market',
        day: 3,
        optional: true,
        image: img('khu67xids4smbtwbplqrdjj8ml88_1579166774_shutterstock_391516453.jpg'),
        description: 'Thousands of stalls across a vast weekend market, best reached by Skytrain and best walked early.'
      }
    ],
    program: {
      name: 'Temples, gems and city streets',
      description: 'Two nights in the capital with a full day tour of the Golden Buddha and the old temple quarter, and a free afternoon for markets.',
      image: img('cvd94dr8mjmqly8caqfs6ehd710n_co2.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Kuala Lumpur',
    dayLabel: 'Day 5 to 7',
    images: [
      img('s5j9abac6eos8fh9hniqc6v8z6zl_shutterstock_1221988960%20(1).jpg'),
      img('rt8h8pkzn32huf0ajc2wtr8pdwgx_shutterstock_385171057%20(1).jpg'),
      img('1cq8i4ccjxzj2kcrf5n2lspi78ha_shutterstock_173996327%20(1).jpg'),
      img('5e9ijcb6sko5bebnwtpc3ffal17a_shutterstock_348184013%20(1).jpg')
    ],
    dayImages: {
      5: [
        img('86gmjxz0blc5ude9uea4knre7aws_1578556742_shutterstock_1334043581.jpg'),
        img('qflm49bbnbpasghy7boic1jvts9d_shutterstock_503565349.jpg'),
        img('s1q59r1ey03oj9ufh7zouxnjx1sg_d5.jpg'),
        img('nd40mcbskjajbyhhcfexcxnyxvtn_Breakout%20room.webp')
      ],
      6: [
        img('0k9c6aklbjokufd0ms9cfid5wx2e_shutterstock_236465974.jpg'),
        img('dbgfo963skrn6gtvp0ou7e6qrmrt_petronas%20twin%20towers1.jpg'),
        img('00vcs4gtc188b1vvb2i7ktl3dq03_1578901360_shutterstock_1327893905.jpg'),
        img('csbdtzwtd7ezkhdshcf68qlmsv81_meredeka.jpg1.jpg')
      ],
      7: [
        img('s5j9abac6eos8fh9hniqc6v8z6zl_shutterstock_1221988960%20(1).jpg'),
        img('rt8h8pkzn32huf0ajc2wtr8pdwgx_shutterstock_385171057%20(1).jpg'),
        img('1cq8i4ccjxzj2kcrf5n2lspi78ha_shutterstock_173996327%20(1).jpg'),
        img('5e9ijcb6sko5bebnwtpc3ffal17a_shutterstock_348184013%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · On to Kuala Lumpur`,
      'Breakfast, check out and private transfer to Suvarnabhumi Airport',
      'Optional: flight from Bangkok to Kuala Lumpur, booked separately and not included',
      'Private transfer from Kuala Lumpur airport to your city hotel',
      'Optional: dinner on Jalan Alor or the Thean Hou temple at dusk',
      `${DAY_MARK}Day 6 · Kuala Lumpur sightseeing`,
      'Breakfast, then shared transfer for the half day city tour',
      'The Petronas Twin Towers, KL Tower and Merdeka Square',
      'Tugu Negara and the gates of Istana Negara on the way back',
      'Afternoon free for the malls and markets of Bukit Bintang',
      `${DAY_MARK}Day 7 · Departure`,
      'Breakfast and an easy check out',
      'Private sedan transfer to Kuala Lumpur International Airport'
    ],
    accommodation: {
      name: 'Hilton Garden Inn Kuala Lumpur North, Kuala Lumpur',
      description: '2 nights · Breakfast included · Deluxe room · 4★ · Hilton Garden Inn north of the city centre, near the rail line',
      images: [
        img('h4shcmsew7axsl6cwgzo9lyudhn7_277305901_5623017151078783_5479011740652600257_n.jpg'),
        img('lnvcorpq4h34quwvl1fo3hux53zi_526102467.jpg'),
        img('dtgv1u6cgnn3we5ec0xtabeuf6nw_518157841.jpg'),
        img('gpum0r3enfigwk8fzs0cmhumlf9i_4190725563795850-089862a_hb_t_001.jpg'),
        img('3x9nr1acfqpcv95pmo702movjeuv_526102483.jpg'),
        img('y9mr8sw0i1ee9ejul8ry8p8g79hj_526102480.jpg'),
        img('bqrhjpg3kgs9k1pvqio3ssa9ojot_501620209.jpg'),
        img('9d8r7h48zbuxsjmrg1uir2qltg1e_590906302.jpg'),
        img('ys9zljyq2i7e71tn13qxe671zwy1_526102497.jpg'),
        img('yg7j5oolw2va3nkcmcgg6pafbsr4_526102507.jpg'),
        img('r9nskdt0lf4a2xxrtrj48gxo1j33_526102500.jpg'),
        img('wlmy08hjmbxe6gms7h46qkeuc4eb_501620205.jpg')
      ]
    },
    activities: [
      {
        name: 'Kuala Lumpur Half Day City Tour',
        day: 6,
        optional: false,
        image: img('0k9c6aklbjokufd0ms9cfid5wx2e_shutterstock_236465974.jpg'),
        description: 'A shared tour past the Petronas Twin Towers, KL Tower, Merdeka Square, Tugu Negara and the gates of Istana Negara.'
      },
      {
        name: 'Jalan Alor Food Street',
        day: 5,
        optional: true,
        image: img('86gmjxz0blc5ude9uea4knre7aws_1578556742_shutterstock_1334043581.jpg'),
        description: 'Kuala Lumpur\'s best known food street, grills and woks running down both sides from early evening until late.'
      },
      {
        name: 'Thean Hou Temple',
        day: 5,
        optional: true,
        image: img('qflm49bbnbpasghy7boic1jvts9d_shutterstock_503565349.jpg'),
        description: 'A six tiered Chinese temple on a hill above the city, with lanterns, dragon pillars and a long skyline view.'
      }
    ],
    program: {
      name: 'Towers, squares and street food',
      description: 'Two nights in Kuala Lumpur with a half day tour of the Twin Towers, KL Tower and Merdeka Square, and evenings for street food.',
      image: img('s5j9abac6eos8fh9hniqc6v8z6zl_shutterstock_1221988960%20(1).jpg')
    }
  }
];

const detail = {
  slug: 'best-of-thailand-and-malaysia',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Thailand and Malaysia',
  alt: 'The Petronas Twin Towers lit up above the Kuala Lumpur skyline at dusk',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'Private sedan transfers with shared tour coaches and a speedboat crossing',
  tag: 'Culture',
  tags: ['Culture', 'Family'],
  price: 43150,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Pattaya', 'Coral Island', 'Bangkok', 'Kuala Lumpur'],
  stats: { days: 7, cities: 3, hotels: 3, activities: 3, transfers: 11 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['11 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two countries in six nights without rushing. Beach first, then two capitals that are easy to walk.',
    quoteMore: 'Book the Bangkok to Kuala Lumpur flight in the morning so you still get the evening on Jalan Alor. Carry ringgit in small notes for the street food stalls.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days across Thailand and Malaysia. Two nights on the Pattaya coast with a speedboat day at Coral Island, two in Bangkok with a full day temple tour, then two in Kuala Lumpur with the Twin Towers and Merdeka Square.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights in 3 hotels with daily breakfast; Coral Island speedboat tour from Pattaya; full day Bangkok city tour; half day Kuala Lumpur city tour; 11 airport, intercity and sightseeing transfers; visa assistance.',
  intro2: 'Not included: international flights; the Bangkok to Kuala Lumpur flight; visa charges; travel insurance; lunches and dinners; entry tickets not listed; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and on to Pattaya (Arrival)', text: 'Arrival at Suvarnabhumi Airport and private sedan transfer down to Pattaya\nCheck in at Bella Villa Prima and keep the evening free\nOptional: the Sanctuary of Truth, Mini Siam or an hour on Jomtien beach', hotel: 'Bella Villa Prima, Pattaya', highlights: ['Arrival at Suvarnabhumi Airport and private sedan transfer down to Pattaya', 'Check in at Bella Villa Prima and keep the evening free', 'Optional: the Sanctuary of Truth, Mini Siam or an hour on Jomtien beach'] },
    { title: 'Day 2: Coral Island day trip (B)', text: 'Breakfast, then shared transfer to the Bali Hai pier\nSpeedboat transfer across to Coral Island for the day\nSwim and sunbathe at Tawaen beach, water sports payable on the sand\nReturn speedboat and shared transfer to your Pattaya hotel', hotel: 'Bella Villa Prima, Pattaya', highlights: ['Breakfast, then shared transfer to the Bali Hai pier', 'Speedboat transfer across to Coral Island for the day', 'Swim and sunbathe at Tawaen beach, water sports payable on the sand'] },
    { title: 'Day 3: On to Bangkok (B)', text: 'Breakfast, check out and private sedan transfer up to Bangkok\nCheck in and spend the afternoon however you like\nOptional: Wat Arun across the river, Chatuchak market or Madame Tussauds', hotel: 'Convenient Park Hotel, Bangkok', highlights: ['Breakfast, check out and private sedan transfer up to Bangkok', 'Check in and spend the afternoon however you like', 'Optional: Wat Arun across the river, Chatuchak market or Madame Tussauds'] },
    { title: 'Day 4: Bangkok sightseeing (B)', text: 'Breakfast, then shared transfer for the full day city tour\nThe Golden Buddha at Wat Traimit and Wat Maha Phruettharam\nA stop at the gem gallery before the ride back to the hotel\nEvening free around the markets near your hotel', hotel: 'Convenient Park Hotel, Bangkok', highlights: ['Breakfast, then shared transfer for the full day city tour', 'The Golden Buddha at Wat Traimit and Wat Maha Phruettharam', 'A stop at the gem gallery before the ride back to the hotel'] },
    { title: 'Day 5: On to Kuala Lumpur (B)', text: 'Breakfast, check out and private transfer to Suvarnabhumi Airport\nOptional: flight from Bangkok to Kuala Lumpur, booked separately and not included\nPrivate transfer from Kuala Lumpur airport to your city hotel\nOptional: dinner on Jalan Alor or the Thean Hou temple at dusk', hotel: 'Hilton Garden Inn Kuala Lumpur North', highlights: ['Breakfast, check out and private transfer to Suvarnabhumi Airport', 'Optional: flight from Bangkok to Kuala Lumpur, booked separately and not included', 'Private transfer from Kuala Lumpur airport to your city hotel'] },
    { title: 'Day 6: Kuala Lumpur sightseeing (B)', text: 'Breakfast, then shared transfer for the half day city tour\nThe Petronas Twin Towers, KL Tower and Merdeka Square\nTugu Negara and the gates of Istana Negara on the way back\nAfternoon free for the malls and markets of Bukit Bintang', hotel: 'Hilton Garden Inn Kuala Lumpur North', highlights: ['Breakfast, then shared transfer for the half day city tour', 'The Petronas Twin Towers, KL Tower and Merdeka Square', 'Tugu Negara and the gates of Istana Negara on the way back'] },
    { title: 'Day 7: Departure (B)', text: 'Breakfast and an easy check out\nPrivate sedan transfer to Kuala Lumpur International Airport', hotel: 'Departure', highlights: ['Breakfast and an easy check out', 'Private sedan transfer to Kuala Lumpur International Airport'] }
  ],
  outro: 'Not included: international flights; the Bangkok to Kuala Lumpur flight; visa charges; travel insurance; lunches and dinners; entry tickets not listed; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Thailand', href: '/asien/thailand' },
  { label: detail.title }
];

export const bestOfThailandMalaysiaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfThailandMalaysiaProduct = {
  slug: detail.slug,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 3,
  transfers: 11,
  meals: 6,
  price: detail.price,
  images: cardImages
};
