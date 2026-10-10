// Singapore and Malaysia with Sentosa and Genting. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg'),
  img('5e9ijcb6sko5bebnwtpc3ffal17a_shutterstock_348184013%20(1).jpg'),
  img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
  img('8npmp4jkvqvuucll4nlpxbbvvyhs_shutterstock_121740241.jpg'),
  img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
  img('kos2k1eovszqjm1js7l5seyy94j7_shutterstock_2186432%20(1).jpg'),
  img('3xb9b772fk8tq784ls9xw46bonlu_meric-dagli-RG7jGL8wkCs-unsplash.jpg'),
  img('1cq8i4ccjxzj2kcrf5n2lspi78ha_shutterstock_173996327%20(1).jpg'),
  img('ese14t6vvz3v8df8lg6p1hcz4wf0_shutterstock_1112004536.jpg'),
  img('9b1aalk35m57qheq1e60bq1fzlec_shutterstock_614123699.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg'),
  img('5e9ijcb6sko5bebnwtpc3ffal17a_shutterstock_348184013%20(1).jpg'),
  img('kos2k1eovszqjm1js7l5seyy94j7_shutterstock_2186432%20(1).jpg'),
  img('csotuo6ohfdjx06pxdvh34a1u0sg_shutterstock_564334333.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    dayLabel: 'Day 1 to 3',
    images: [
      img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg'),
      img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
      img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg'),
      img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg')
    ],
    dayImages: {
      1: [
        img('azbhlzifrdx7zz6f811y0rtgvfuk_1626325173_shutterstock_360853979.jpg'),
        img('evfefj3ff2v3cxvcxeqdeie0j3lv_1568010220_shutterstock_681455404.jpg'),
        img('osp26lvklcjems1brz3pt3wlca2f_shutterstock_1452953408.jpg'),
        img('iepwhd7vih4wi47j3xdfu2bzxdw6_shutterstock_306788135.jpg')
      ],
      2: [
        img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
        img('etwjtvxjtctcyj8zmdmmtz5rnff7_1563607619_shutterstock_1155676858.jpg'),
        img('xkc5gws4qd4uax4hvxwihi35fv35_1563619864_shutterstock_793620280.jpg')
      ],
      3: [
        img('esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.jpg'),
        img('5ny753dccex42fsfmdxfhlzlfvah_1626351333_shutterstock_302633321.jpg'),
        img('2julf8qwlh6bds74kvyfmdfcqwmh_virat-kohli-7-to-5.jpg'),
        img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Singapore`,
      'Arrival at Changi Airport and private sedan transfer to the ibis Novena',
      'Check in and take the rest of the day at your own pace',
      'Optional: the Rain Vortex and Canopy Park at Jewel before you leave the airport',
      'Optional: supper at a hawker centre near Novena MRT',
      `${DAY_MARK}Day 2 · City tour and the Night Safari`,
      'Breakfast, then shared transfer for the half day city tour',
      'Merlion Park, Marina Bay, the Helix bridge and Chinatown',
      'Afternoon free, then a shared transfer out to Mandai',
      'Night Safari with a tram ride through the park after dark',
      `${DAY_MARK}Day 3 · Sentosa and Madame Tussauds`,
      'Breakfast, then shared transfer to Mount Faber for the cable car',
      'Two way sky pass across the harbour to Sentosa',
      'Madame Tussauds with the Spirit of Singapore boat ride',
      'Return shared transfer to the hotel in the evening'
    ],
    accommodation: {
      name: 'ibis Singapore Novena, Singapore',
      description: '3 nights · Breakfast included · Standard room · 3★ · ibis Novena, two minutes from Novena MRT station',
      images: [
        img('d6klr7rae9mjjgqcyxptmvn8tba6_af67747a663f11e98b080242ac110008.png'),
        img('csfhgzj0hntodxb28qvgv965a24s_image_15.jpg'),
        img('8wl2g0cn2jx6h6ep0d4ru0betg4q_image_33.jpg'),
        img('kbp95nbgqxqinqjf05c2quuks1rz_image_3.jpg'),
        img('78572o6iiligczcwpf53m4rato6x_image_11.jpg'),
        img('arrzsh0apjh20wt83nd79jg94ago_image_25.jpg'),
        img('v5x55fh59onfprpxfidpel6m2u5z_image_30.jpg'),
        img('s6d2ibuhqldpzqygmojundstvj55_image_14.jpg'),
        img('oe2wlghbavuqtc5906tj65b7ajbt_image_42.jpg'),
        img('ob6cy8m0thir3bf3ys1oex0ehuks_image_20.jpg'),
        img('8i4sw4hxrsdydys98tihj4v2dmec_image_34.jpg'),
        img('3i7y1l1kck4i8qdwg3wetpdoefoo_image_24.jpg'),
        img('l2gou2c96m46k1eilwvcc5oakkpo_image_8.jpg'),
        img('hcqm47q3u6l1nhhf7e6bm7x36xn4_image_29.jpg')
      ]
    },
    activities: [
      {
        name: 'Half Day Singapore City Tour',
        day: 2,
        optional: false,
        image: img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        description: 'A shared coach tour of Merlion Park, Marina Bay, the Helix bridge, Chinatown and the civic district.'
      },
      {
        name: 'Night Safari with Tram Ride',
        day: 2,
        optional: false,
        image: img('v21xxwsufiprcn8rwjdfsy3lzoy9_Fishing%20Cat%20Trail%20-%20Sunda%20Pangolin.jpg'),
        description: 'A tram circuit through the Mandai park after dark, past elephants, rhinos, hyenas and the big cats.'
      },
      {
        name: 'Singapore Cable Car Sky Pass',
        day: 3,
        optional: false,
        image: img('esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.jpg'),
        description: 'A two way ride between Mount Faber, HarbourFront and Sentosa, high above the working harbour.'
      },
      {
        name: 'Madame Tussauds Singapore',
        day: 3,
        optional: false,
        image: img('2julf8qwlh6bds74kvyfmdfcqwmh_virat-kohli-7-to-5.jpg'),
        description: 'Wax figures, the Spirit of Singapore boat ride through the city\'s history and a digital photo to keep.'
      }
    ],
    program: {
      name: 'City, wildlife and the island',
      description: 'Three nights in Novena with the city tour, an evening at Mandai and the cable car across to Sentosa.',
      image: img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuala Lumpur',
    dayLabel: 'Day 4 to 7',
    images: [
      img('1cq8i4ccjxzj2kcrf5n2lspi78ha_shutterstock_173996327%20(1).jpg'),
      img('5e9ijcb6sko5bebnwtpc3ffal17a_shutterstock_348184013%20(1).jpg'),
      img('csotuo6ohfdjx06pxdvh34a1u0sg_shutterstock_564334333.jpg'),
      img('057j0veh1o6745wkqplsyxwoz0zp_shutterstock_220405159.jpg')
    ],
    dayImages: {
      4: [
        img('kphejbgjqljn0flqsgxcp0tsvue6_1578058703_shutterstock_398281777.jpg'),
        img('8o9nwobi165ix6g5ieiz6iabpwjd_1464088017_2043116033_03c94ef9dd_b.jpg'),
        img('1cq8i4ccjxzj2kcrf5n2lspi78ha_shutterstock_173996327%20(1).jpg'),
        img('5e9ijcb6sko5bebnwtpc3ffal17a_shutterstock_348184013%20(1).jpg')
      ],
      5: [
        img('0k9c6aklbjokufd0ms9cfid5wx2e_shutterstock_236465974.jpg'),
        img('dbgfo963skrn6gtvp0ou7e6qrmrt_petronas%20twin%20towers1.jpg'),
        img('00vcs4gtc188b1vvb2i7ktl3dq03_1578901360_shutterstock_1327893905.jpg'),
        img('je169rgja0vscwn5080gi5o1amz9_download%20(5).jpg')
      ],
      6: [
        img('d26572h38irfszh9cjr2vh5esymf_shutterstock_1380671906.jpg'),
        img('8u8ev09ru5v92iljnnk58ju7waa3_25.webp'),
        img('jwzx5ixlse9sd03dd4v7qadm3p40_banner@2x.jpg'),
        img('1cq8i4ccjxzj2kcrf5n2lspi78ha_shutterstock_173996327%20(1).jpg')
      ],
      7: [
        img('1cq8i4ccjxzj2kcrf5n2lspi78ha_shutterstock_173996327%20(1).jpg'),
        img('5e9ijcb6sko5bebnwtpc3ffal17a_shutterstock_348184013%20(1).jpg'),
        img('csotuo6ohfdjx06pxdvh34a1u0sg_shutterstock_564334333.jpg'),
        img('057j0veh1o6745wkqplsyxwoz0zp_shutterstock_220405159.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Kuala Lumpur`,
      'Breakfast, check out and an early coach transfer across the causeway',
      'Border formalities at Johor, then on to Kuala Lumpur',
      'Check in at the Arenaa Star and a free afternoon in Bukit Bintang',
      'Optional: the fountain show below the Petronas Towers',
      `${DAY_MARK}Day 5 · Kuala Lumpur city tour`,
      'Breakfast, then shared transfer for the half day city tour',
      'The King\'s Palace gates, the National Monument and Merdeka Square',
      'The old railway station, Little India and the central market',
      'Afternoon free for the malls or Jalan Alor food street',
      `${DAY_MARK}Day 6 · Batu Caves and Genting Highlands`,
      'Breakfast, then shared transfer towards the hills',
      'Batu Caves with its 272 painted steps and the cave temple inside',
      'On up to Genting Highlands for the plateau, the theme park and the casino floor',
      'Return to Kuala Lumpur in the evening',
      `${DAY_MARK}Day 7 · Departure`,
      'Breakfast and check out',
      'Private sedan transfer to Kuala Lumpur airport for your flight home'
    ],
    accommodation: {
      name: 'Arenaa Star Hotel, Kuala Lumpur, Kuala Lumpur',
      description: '3 nights · Breakfast included · Standard room · 3★ · Arenaa Star in Bukit Bintang, walking distance from Jalan Alor',
      images: [
        img('d7udwey0y0gh65awnlbbbc9jx3k2_download%20(15).jpg'),
        img('q1e0wcwej6xmglqlce3y4ukjn7cg_download%20(21).jpg'),
        img('c9vofn1m46uawl19t8hlipsposkl_download%20(25).jpg'),
        img('uf8qulqunb59gipf5tfhs0hqg9uz_download%20(19).jpg'),
        img('n9um5edn3hflhu7e0l5eozx8sqr3_download%20(24).jpg'),
        img('qyxhvsy3p58yh1m1vswwvphoehdy_download%20(27).jpg'),
        img('a3mjqlon9dphtrevtywce0ie5qv7_download%20(30).jpg'),
        img('i3nb9t1odp6u5fe820fnnbu7f4cs_download%20(17).jpg'),
        img('tz9i8my7ruw00737erwjxz8l85y4_download%20(16).jpg')
      ]
    },
    activities: [
      {
        name: 'Kuala Lumpur Half Day City Tour',
        day: 5,
        optional: false,
        image: img('0k9c6aklbjokufd0ms9cfid5wx2e_shutterstock_236465974.jpg'),
        description: 'A shared coach tour past the King\'s Palace, the National Monument, Merdeka Square and the central market.'
      },
      {
        name: 'Genting Highlands and Batu Caves',
        day: 6,
        optional: false,
        image: img('d26572h38irfszh9cjr2vh5esymf_shutterstock_1380671906.jpg'),
        description: 'A day trip up to the Genting plateau with a stop at the Batu Caves limestone temple and its painted steps.'
      },
      {
        name: 'Petronas Twin Towers Skybridge',
        day: 4,
        optional: true,
        image: img('dbgfo963skrn6gtvp0ou7e6qrmrt_petronas%20twin%20towers1.jpg'),
        description: 'The skybridge and observation deck of the twin towers, with timed tickets that sell out early in the day.'
      }
    ],
    program: {
      name: 'Two capitals in one week',
      description: 'Three nights in Bukit Bintang with a city tour, the Batu Caves temple and a full day on the Genting plateau.',
      image: img('1cq8i4ccjxzj2kcrf5n2lspi78ha_shutterstock_173996327%20(1).jpg')
    }
  }
];

const detail = {
  slug: 'singapore-and-malaysia-with-sentosa-and-genting',
  ctaHref: '/l/singapore/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Singapore and Malaysia with Sentosa and Genting',
  alt: 'Batu Caves steps and the Murugan statue outside Kuala Lumpur, Malaysia',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private airport transfers, a coach crossing to Kuala Lumpur and shared city tours',
  tag: 'Family',
  tags: ['Family', 'Culture'],
  price: 59849,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Sentosa', 'Kuala Lumpur', 'Batu Caves', 'Genting Highlands'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 6, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Nisha Rao',
    image: '/experts/riya.webp',
    role: 'Singapore expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Families get both cities in a week here, with the Night Safari in Singapore and the cable car up to Genting in Malaysia.',
    quoteMore: 'Do the causeway crossing early in the morning. The queues at Johor grow through the day and you gain a free afternoon in Kuala Lumpur.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days across two countries. Three nights in Singapore with a city tour, the Night Safari and a Sentosa day, then three in Kuala Lumpur with a city tour, the Batu Caves and a day up at Genting Highlands.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights at the ibis Novena in Singapore and 3 nights at the Arenaa Star in Kuala Lumpur, both with breakfast; Singapore half day city tour; Night Safari with return transfers; two way cable car sky pass; Madame Tussauds with a digital photo; Kuala Lumpur half day city tour; Genting Highlands day trip with Batu Caves; 12 private and shared transfers including the crossing to Malaysia.',
  intro2: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; the Genting Skyway cable car ticket; attractions not named above; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Singapore (Arrival)', text: 'Arrival at Changi Airport and private sedan transfer to the ibis Novena\nCheck in and take the rest of the day at your own pace\nOptional: the Rain Vortex and Canopy Park at Jewel before you leave the airport\nOptional: supper at a hawker centre near Novena MRT', hotel: 'ibis Singapore Novena', highlights: ['Arrival at Changi Airport and private sedan transfer to the ibis Novena', 'Check in and take the rest of the day at your own pace', 'Optional: the Rain Vortex and Canopy Park at Jewel before you leave the airport'] },
    { title: 'Day 2: City tour and the Night Safari (B)', text: 'Breakfast, then shared transfer for the half day city tour\nMerlion Park, Marina Bay, the Helix bridge and Chinatown\nAfternoon free, then a shared transfer out to Mandai\nNight Safari with a tram ride through the park after dark', hotel: 'ibis Singapore Novena', highlights: ['Breakfast, then shared transfer for the half day city tour', 'Merlion Park, Marina Bay, the Helix bridge and Chinatown', 'Afternoon free, then a shared transfer out to Mandai'] },
    { title: 'Day 3: Sentosa and Madame Tussauds (B)', text: 'Breakfast, then shared transfer to Mount Faber for the cable car\nTwo way sky pass across the harbour to Sentosa\nMadame Tussauds with the Spirit of Singapore boat ride\nReturn shared transfer to the hotel in the evening', hotel: 'ibis Singapore Novena', highlights: ['Breakfast, then shared transfer to Mount Faber for the cable car', 'Two way sky pass across the harbour to Sentosa', 'Madame Tussauds with the Spirit of Singapore boat ride'] },
    { title: 'Day 4: On to Kuala Lumpur (B)', text: 'Breakfast, check out and an early coach transfer across the causeway\nBorder formalities at Johor, then on to Kuala Lumpur\nCheck in at the Arenaa Star and a free afternoon in Bukit Bintang\nOptional: the fountain show below the Petronas Towers', hotel: 'Arenaa Star Hotel, Kuala Lumpur', highlights: ['Breakfast, check out and an early coach transfer across the causeway', 'Border formalities at Johor, then on to Kuala Lumpur', 'Check in at the Arenaa Star and a free afternoon in Bukit Bintang'] },
    { title: 'Day 5: Kuala Lumpur city tour (B)', text: 'Breakfast, then shared transfer for the half day city tour\nThe King\'s Palace gates, the National Monument and Merdeka Square\nThe old railway station, Little India and the central market\nAfternoon free for the malls or Jalan Alor food street', hotel: 'Arenaa Star Hotel, Kuala Lumpur', highlights: ['Breakfast, then shared transfer for the half day city tour', 'The King\'s Palace gates, the National Monument and Merdeka Square', 'The old railway station, Little India and the central market'] },
    { title: 'Day 6: Batu Caves and Genting Highlands (B)', text: 'Breakfast, then shared transfer towards the hills\nBatu Caves with its 272 painted steps and the cave temple inside\nOn up to Genting Highlands for the plateau, the theme park and the casino floor\nReturn to Kuala Lumpur in the evening', hotel: 'Arenaa Star Hotel, Kuala Lumpur', highlights: ['Breakfast, then shared transfer towards the hills', 'Batu Caves with its 272 painted steps and the cave temple inside', 'On up to Genting Highlands for the plateau, the theme park and the casino floor'] },
    { title: 'Day 7: Departure (B)', text: 'Breakfast and check out\nPrivate sedan transfer to Kuala Lumpur airport for your flight home', hotel: 'Departure', highlights: ['Breakfast and check out', 'Private sedan transfer to Kuala Lumpur airport for your flight home'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; the Genting Skyway cable car ticket; attractions not named above; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Singapore', href: '/asia/singapore' },
  { label: detail.title }
];

export const singaporeMalaysiaSentosaGentingBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const singaporeMalaysiaSentosaGentingProduct = {
  slug: detail.slug,
  places: ['Singapore', 'Sentosa', 'Kuala Lumpur', 'Batu Caves', 'Genting Highlands'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 6,
  transfers: 12,
  meals: 6,
  price: detail.price,
  images: cardImages
};
