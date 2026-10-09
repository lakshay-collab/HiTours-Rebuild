// Luxury Bangkok and Pattaya Escape. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('8esmek6ajh3sgyttq6cxyr5up2u6_shutterstock_482021800-min.jpg'),
  img('gy6ydvck32nkrqc0a957hn6qa1gn_shutterstock_1273928071.jpg'),
  img('nn3ddc2jsww3ka4dt8ovqbpyhh49_shutterstock_1753947629-min%20(1).jpg'),
  img('0k0xalzod2x1quwxoll1lt3t4ou9_shutterstock_289362893%20(1)-min.jpg'),
  img('hjog43uzmd5m162yaje2gsblopb4_shutterstock_1141409366-min.jpg'),
  img('9co979gu2vt35411lqkpvuivbo1s_shutterstock_317628221.jpg'),
  img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg'),
  img('772kirdev9kt0fj3txxq31gnnayr_shutterstock_236815570.jpg'),
  img('n0twhi7ong2znp7u8ifv5gk22d9h_shutterstock_449998630.jpg'),
  img('hx1mex42a0hqgfl09mzf4titrit9_shutterstock_1272430873-min.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('8esmek6ajh3sgyttq6cxyr5up2u6_shutterstock_482021800-min.jpg'),
  img('nn3ddc2jsww3ka4dt8ovqbpyhh49_shutterstock_1753947629-min%20(1).jpg'),
  img('0k0xalzod2x1quwxoll1lt3t4ou9_shutterstock_289362893%20(1)-min.jpg'),
  img('hjog43uzmd5m162yaje2gsblopb4_shutterstock_1141409366-min.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Bangkok',
    dayLabel: 'Day 1 to 2',
    images: [
      img('8esmek6ajh3sgyttq6cxyr5up2u6_shutterstock_482021800-min.jpg'),
      img('n0twhi7ong2znp7u8ifv5gk22d9h_shutterstock_449998630.jpg'),
      img('eioxrb4o57abr1cd0dck5n0h01ry_shutterstock_238473214.jpg'),
      img('nn3ddc2jsww3ka4dt8ovqbpyhh49_shutterstock_1753947629-min%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('lqmzx0w33vxn55imqnt962bz969d_p3hwcwdwo4timdxhrg2ah6tpo8f0_1559220510_siamcity.jpg'),
        img('u8qzmtjvytjjn7kf3ya4czkdkje2_1551439317_Damnoen-Saduak-Floating-Market.jpg'),
        img('vxdefhygeg7j24lrb2zsr50g9wy1_1627295309_shutterstock_169001408.jpg'),
        img('8esmek6ajh3sgyttq6cxyr5up2u6_shutterstock_482021800-min.jpg')
      ],
      2: [
        img('36tut7w9mcw7m9jg2ne1ww2chngl_bbv5da2sv1r8x07ogk7vkgxpqqr6_shu.jpg'),
        img('7i4kull1ef7y5uwuhj4114nez7hm_download%20-%202023-12-04T184241.976.jpeg'),
        img('epxuwsna2eh4eb5ji4f7w2678u05_shutterstock_1386401228.jpg'),
        img('x6mukr6jdrnt14ol4qc9iyx3t1t8_1551439078_14153__1437988260.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Bangkok`,
      'Arrival at Suvarnabhumi Airport and private sedan transfer to your Bangkok hotel',
      'Check in at the Hyatt Regency on Sukhumvit and take the evening slowly',
      'Nana Skytrain station is a minute away if you want to wander',
      'Optional: Erawan Museum, the floating market or Siam Park City',
      `${DAY_MARK}Day 2 · Safari World and a river dinner cruise`,
      'Breakfast at the hotel, then shared transfer out to Safari World',
      'Open safari loop past zebras, giraffes and big cats in the morning',
      'Marine Park shows after lunch, then back into the city',
      'Evening shared transfer to the Chao Phraya river dinner cruise',
      'Buffet dinner on board with live music and lit up temples on the banks'
    ],
    accommodation: {
      name: 'Hyatt Regency Bangkok Sukhumvit, Bangkok',
      description: '2 nights · Breakfast included · 5★ · On Sukhumvit beside Nana Skytrain, with a rooftop pool',
      images: [
        img('o9l6nsy1mi562id1o495b6l7ml81_download%20(13).jpg'),
        img('r13vgsxa87iu68n9tr73pgifxg5o_download%20(9).jpg'),
        img('ofoazcfa9mkvmdjlfckywrg9fymf_download.jpg'),
        img('6ih3t1wp5315m2mmdoh8izc5bjh3_download%20(2).jpg'),
        img('2s5x1y1t1rnyw8ujv4qy5kws38ci_download%20(14).jpg'),
        img('5zlosx360h0luqo1r6epewsmksq2_download%20(6).jpg'),
        img('pmceb2nuyxq0zru2e432mhwoldwi_download%20(7).jpg'),
        img('ygaxm1du2xtnzkps2o6vwxw4tf8w_download%20(12).jpg'),
        img('5dc8dzrxyj1zvokygawrryaua3pz_download%20(11).jpg'),
        img('ghfbcepzlu8yplz7q1octb4d7b4w_download%20(16).jpg'),
        img('j7ecnund79h55hmq5oiv3fy6z7xx_download%20(4).jpg'),
        img('agcxdr81hbk18hc8awwx5xey9j6p_download%20(8).jpg'),
        img('p2pt53jnb0flhgsxijkbjl5y6ygm_download%20(17).jpg'),
        img('w4c27khd2jen3iy3cwdvf3ekujun_download%20(3).jpg'),
        img('fqdv5sarnhwfg0qwgzjnuea6fa84_download%20(15).jpg')
      ]
    },
    activities: [
      {
        name: 'Safari World and Marine Park',
        day: 2,
        optional: false,
        image: img('36tut7w9mcw7m9jg2ne1ww2chngl_bbv5da2sv1r8x07ogk7vkgxpqqr6_shu.jpg'),
        description: 'An open safari loop with zebras, giraffes and big cats, then dolphin and sea lion shows at Marine Park next door.'
      },
      {
        name: 'Chao Phraya River Dinner Cruise',
        day: 2,
        optional: false,
        image: img('epxuwsna2eh4eb5ji4f7w2678u05_shutterstock_1386401228.jpg'),
        description: 'Two hours on the river with a buffet dinner, live music and lit up views of Wat Arun and the Grand Palace from the water.'
      },
      {
        name: 'Erawan Museum',
        day: 1,
        optional: true,
        image: img('vxdefhygeg7j24lrb2zsr50g9wy1_1627295309_shutterstock_169001408.jpg'),
        description: 'A three headed elephant in bronze above a hall of stained glass and gardens. An easy half day on your free first evening.'
      },
      {
        name: 'Floating Market',
        day: 1,
        optional: true,
        image: img('u8qzmtjvytjjn7kf3ya4czkdkje2_1551439317_Damnoen-Saduak-Floating-Market.jpg'),
        description: 'Narrow canals, boats loaded with fruit and noodles cooked over charcoal at the water. Best early in the day.'
      }
    ],
    program: {
      name: 'City nights and Safari World',
      description: 'Two nights on Sukhumvit with an open safari park by day and a buffet dinner cruise down the Chao Phraya after dark.',
      image: img('8esmek6ajh3sgyttq6cxyr5up2u6_shutterstock_482021800-min.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Pattaya',
    dayLabel: 'Day 3 to 5',
    images: [
      img('g1iuz840ibwkomzsc03urzjpo60i_shutterstock_187879433.jpg'),
      img('gy6ydvck32nkrqc0a957hn6qa1gn_shutterstock_1273928071.jpg'),
      img('xqqgyuisthrhpr1pt4k869ukngar_shutterstock_1424645588-min.jpg'),
      img('hx1mex42a0hqgfl09mzf4titrit9_shutterstock_1272430873-min.jpg')
    ],
    dayImages: {
      3: [
        img('tjhwk70tair6mmtxy3ft8n0k5liq_shutterstock_1082162156.jpg'),
        img('g1iuz840ibwkomzsc03urzjpo60i_shutterstock_187879433.jpg'),
        img('gy6ydvck32nkrqc0a957hn6qa1gn_shutterstock_1273928071.jpg'),
        img('xqqgyuisthrhpr1pt4k869ukngar_shutterstock_1424645588-min.jpg')
      ],
      4: [
        img('we68xopgvhxvi7wt9eyhehbvwv1w_dl.beatsnoop.com-VHomu5ki9h.jpg'),
        img('kz1jbr0anl74tbg4qaspajd1oxm4_1472036650_8237106102_1f7541157d_b.jpg'),
        img('26irbobpyxgu82qr3ngdovihfmw9_shutterstock_1801193749.jpg'),
        img('g1iuz840ibwkomzsc03urzjpo60i_shutterstock_187879433.jpg')
      ],
      5: [
        img('g1iuz840ibwkomzsc03urzjpo60i_shutterstock_187879433.jpg'),
        img('gy6ydvck32nkrqc0a957hn6qa1gn_shutterstock_1273928071.jpg'),
        img('xqqgyuisthrhpr1pt4k869ukngar_shutterstock_1424645588-min.jpg'),
        img('hx1mex42a0hqgfl09mzf4titrit9_shutterstock_1272430873-min.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · On to Pattaya and the Alcazar show`,
      'Breakfast, check out and private sedan transfer down to Pattaya',
      'Check in at the Royal Cliff, set on its own headland above the bay',
      'Afternoon free for the pool terraces and the private beach',
      'Evening shared transfer to the Alcazar cabaret with standard seats',
      `${DAY_MARK}Day 4 · Coral Island day trip`,
      'Breakfast, then shared transfer to the Bali Hai pier',
      'Speedboat transfer across to Coral Island for the day',
      'Swim and sunbathe at Tawaen beach, water sports payable on the sand',
      'Return speedboat and shared transfer to your Pattaya hotel',
      `${DAY_MARK}Day 5 · Departure`,
      'Breakfast and a slow check out at your own pace',
      'Private sedan transfer to Suvarnabhumi Airport for your trip home'
    ],
    accommodation: {
      name: 'Royal Cliff Beach Hotel Pattaya, Pattaya',
      description: '2 nights · Breakfast included · 5★ · On the Royal Cliff headland with private beach and pool terraces',
      images: [
        img('unc5x6wh3udpmvfsa0fid1e58rms_22_Royal-Cliff-Beach-Hotel-Swimming-Pool-scaled.jpeg'),
        img('cq1c3iokwn70zlg4l6sqhd74kmjj_02_Royal-Cliff-Beach-Hotel-Exterior-scaled.jpg'),
        img('64kaobl2ctfyblbz0u73xfpt7fmw_03_Royal-Cliff-Beach-Hotel-Exterior.jpg'),
        img('gui3omqxl6gqzsx483wdgztk7730_32_Royal-Cliff-Beach-Hotel-Diamond-Suite-1-bedroom-scaled.jpg'),
        img('w15rjrm4iapaejd7wzfeo52yunzz_download%20(16).jpg'),
        img('cqs4qo3yxtrac8mzm1ijffx4esee_06_Royal-Cliff-Beach-Hotel-Lobby-scaled.jpg'),
        img('ob10oyrklr0c735v9c0p0dt8kg9g_14_Royal-Cliff-Beach-Hotel-Swimming-Pool-scaled.jpg'),
        img('1ktau8hcwi28ak09snm3e48iejn0_04_Royal-Cliff-Beach-Hotel-Lobby-scaled.jpg'),
        img('decgiuk26vzm7395ngrzek1hmxz4_27_Royal-Cliff-Beach-Hotel-Ocean-Deluxe-scaled.jpg'),
        img('cj7pgkqacjv08vtjrrg6kgelc6sd_16_Royal-Cliff-Beach-Hotel-Swimming-Pool-scaled.jpg'),
        img('2jykst0oxto3r0itxgmbep4m5v9c_40_Royal-Cliff-Beach-Hotel-Thai-Heritage-Theme-Suite-2-bedrooms-scaled.jpg'),
        img('eo0ahttib7zuvnhc28i12f5fhcag_39_Royal-Cliff-Beach-Hotel-Thai-Heritage-Theme-Suite-2-bedrooms-scaled.jpg'),
        img('uhurdzhn5bsxk7hxmyc5mxktr7jt_33_Royal-Cliff-Beach-Hotel-Princess-Suite-1-bedroom-scaled.jpg'),
        img('hmlug4oa8zzhwsfaqncauxi9rq77_19_Royal-Cliff-Beach-Hotel-Swimming-Pool-scaled.jpeg'),
        img('8v6r5n73sg79gbgej93pj47vceme_37_Royal-Cliff-Beach-Hotel-Thai-Modern-Theme-Suite-2-bedrooms-scaled.jpg'),
        img('cvg2ndyeyvwcake8e6n02dduvmp9_20_Royal-Cliff-Beach-Hotel-Swimming-Pool-scaled.jpg'),
        img('jjn8ipqmng946ute3phh6e51hbg4_26_Royal-Cliff-Beach-Hotel-Mini-Suite-Plus-Sea-View-scaled.jpg'),
        img('4iookauyjbbahib0rzswwht1rybq_24_Royal-Cliff-Beach-Hotel-Mini-Suite-Plus-Sunrise-View-scaled.jpg'),
        img('eqyktu8gkz71dkiz4f16d9oa24ke_28_Royal-Cliff-Beach-Hotel-Ocean-Deluxe-scaled.jpg')
      ]
    },
    activities: [
      {
        name: 'Alcazar Cabaret Show',
        day: 3,
        optional: false,
        image: img('tjhwk70tair6mmtxy3ft8n0k5liq_shutterstock_1082162156.jpg'),
        description: 'Pattaya\'s long running cabaret, an hour of costumes, live singing and big stage sets with standard seating included.'
      },
      {
        name: 'Coral Island by Speedboat',
        day: 4,
        optional: false,
        image: img('we68xopgvhxvi7wt9eyhehbvwv1w_dl.beatsnoop.com-VHomu5ki9h.jpg'),
        description: 'A speedboat day out to Koh Larn with clear water at Tawaen beach, sun loungers on the sand and water sports if you want them.'
      }
    ],
    program: {
      name: 'Beach days and cabaret lights',
      description: 'Two nights on the Pattaya coast with the Alcazar cabaret in the evening and a speedboat day out to Coral Island.',
      image: img('g1iuz840ibwkomzsc03urzjpo60i_shutterstock_187879433.jpg')
    }
  }
];

const detail = {
  slug: 'luxury-bangkok-and-pattaya-escape',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Luxury Bangkok and Pattaya Escape',
  alt: 'Lit up temples along the Chao Phraya river in Bangkok at dusk',
  days: '5 days / 4 nights',
  stations: '2 stops',
  transport: 'Private sedan transfers with shared tour coaches',
  tag: 'Luxury',
  tags: ['Luxury', 'Short trips'],
  price: 34675,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Bangkok', 'Pattaya', 'Coral Island'],
  stats: { days: 5, cities: 2, hotels: 2, activities: 4, transfers: 11 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['11 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Four nights, two five star hotels and no long drives. This is the easy luxury version of a first Thailand trip.',
    quoteMore: 'Ask for a high floor at the Royal Cliff so you get the bay from your balcony. On the cruise day, eat light at lunch because the buffet on board is generous.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A short luxury run through Thailand with two nights in Bangkok and two on the Pattaya coast. Safari World, a Chao Phraya dinner cruise, the Alcazar cabaret and a speedboat day on Coral Island, with five star hotels throughout.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in 2 five star hotels with daily breakfast; Safari World and Marine Park tickets; Chao Phraya river dinner cruise; Alcazar cabaret standard seats; Coral Island speedboat tour from Pattaya; 11 airport, intercity and sightseeing transfers; visa assistance.',
  intro2: 'Not included: international flights; visa charges; travel insurance; water sports and personal expenses; lunches and dinners other than the cruise dinner.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Bangkok (Arrival)', text: 'Arrival at Suvarnabhumi Airport and private sedan transfer to your Bangkok hotel\nCheck in at the Hyatt Regency on Sukhumvit and take the evening slowly\nNana Skytrain station is a minute away if you want to wander\nOptional: Erawan Museum, the floating market or Siam Park City', hotel: 'Hyatt Regency Bangkok Sukhumvit', highlights: ['Arrival at Suvarnabhumi Airport and private sedan transfer to your Bangkok hotel', 'Check in at the Hyatt Regency on Sukhumvit and take the evening slowly', 'Nana Skytrain station is a minute away if you want to wander'] },
    { title: 'Day 2: Safari World and a river dinner cruise (B, D)', text: 'Breakfast at the hotel, then shared transfer out to Safari World\nOpen safari loop past zebras, giraffes and big cats in the morning\nMarine Park shows after lunch, then back into the city\nEvening shared transfer to the Chao Phraya river dinner cruise\nBuffet dinner on board with live music and lit up temples on the banks', hotel: 'Hyatt Regency Bangkok Sukhumvit', highlights: ['Breakfast at the hotel, then shared transfer out to Safari World', 'Open safari loop past zebras, giraffes and big cats in the morning', 'Marine Park shows after lunch, then back into the city'] },
    { title: 'Day 3: On to Pattaya and the Alcazar show (B)', text: 'Breakfast, check out and private sedan transfer down to Pattaya\nCheck in at the Royal Cliff, set on its own headland above the bay\nAfternoon free for the pool terraces and the private beach\nEvening shared transfer to the Alcazar cabaret with standard seats', hotel: 'Royal Cliff Beach Hotel Pattaya', highlights: ['Breakfast, check out and private sedan transfer down to Pattaya', 'Check in at the Royal Cliff, set on its own headland above the bay', 'Afternoon free for the pool terraces and the private beach'] },
    { title: 'Day 4: Coral Island day trip (B)', text: 'Breakfast, then shared transfer to the Bali Hai pier\nSpeedboat transfer across to Coral Island for the day\nSwim and sunbathe at Tawaen beach, water sports payable on the sand\nReturn speedboat and shared transfer to your Pattaya hotel', hotel: 'Royal Cliff Beach Hotel Pattaya', highlights: ['Breakfast, then shared transfer to the Bali Hai pier', 'Speedboat transfer across to Coral Island for the day', 'Swim and sunbathe at Tawaen beach, water sports payable on the sand'] },
    { title: 'Day 5: Departure (B)', text: 'Breakfast and a slow check out at your own pace\nPrivate sedan transfer to Suvarnabhumi Airport for your trip home', hotel: 'Departure', highlights: ['Breakfast and a slow check out at your own pace', 'Private sedan transfer to Suvarnabhumi Airport for your trip home'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; water sports and personal expenses; lunches and dinners other than the cruise dinner.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Thailand', href: '/asien/thailand' },
  { label: detail.title }
];

export const luxuryBangkokPattayaEscapeBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const luxuryBangkokPattayaEscapeProduct = {
  slug: detail.slug,
  places: stops.map((s) => s.name),
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 4,
  transfers: 11,
  meals: 5,
  price: detail.price,
  images: cardImages
};
