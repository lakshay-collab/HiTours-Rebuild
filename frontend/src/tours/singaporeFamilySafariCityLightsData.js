// Singapore Family Safari and City Lights. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg'),
  img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
  img('sfw0sw4nhgzk0yegkil8jla98ydq_shutterstock_743903413.jpg'),
  img('4gp8m32efnb38q8qauueycr9ylza_shutterstock_561308047.jpg'),
  img('ese14t6vvz3v8df8lg6p1hcz4wf0_shutterstock_1112004536.jpg'),
  img('5f3dno722k7csmmvpmfhq6v4ufbo_shutterstock_1402131020.jpg'),
  img('o08lx9kwhzu3m84k56oqeffm92pg_shutterstock_695806240.jpg'),
  img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
  img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
  img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg'),
  img('aqp2ip9uvu7sn3u68uy83cs2zffg_Scentopia%202.jpeg'),
  img('bgj6iyx8i5cjvwxen92fcd329nqr_3c4f.1920x1080.jpg'),
  img('iypcsh3dvydugwmsa6fff6mtdz7o_schs5yptjcqn4sc6cz39cvgim2vd_3d13.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    dayLabel: 'Day 1 to 6',
    images: [
      img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg'),
      img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
      img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
      img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg')
    ],
    dayImages: {
      1: [
        img('aqp2ip9uvu7sn3u68uy83cs2zffg_Scentopia%202.jpeg'),
        img('bgj6iyx8i5cjvwxen92fcd329nqr_3c4f.1920x1080.jpg'),
        img('iypcsh3dvydugwmsa6fff6mtdz7o_schs5yptjcqn4sc6cz39cvgim2vd_3d13.jpg'),
        img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg')
      ],
      2: [
        img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
        img('etwjtvxjtctcyj8zmdmmtz5rnff7_1563607619_shutterstock_1155676858.jpg'),
        img('xkc5gws4qd4uax4hvxwihi35fv35_1563619864_shutterstock_793620280.jpg')
      ],
      3: [
        img('ywo4eleb1h86zh6h5e005qsm0kzs_d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.webp'),
        img('s2r4nfl80qk64lm24j05vwdt984y_VIAL1673.JPG'),
        img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg'),
        img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg')
      ],
      4: [
        img('qeze4csghbtda4u7a06o23o1bk03_esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.webp'),
        img('cdq7uq5tcqpjmy3ha56ibntcnm0y_Oceanraium-1.webp'),
        img('bksa9r6n2u3g1zl1grep2jo03oej_Oceanraium-1.webp'),
        img('9qh205t74nx95bmnuycnqgtu525x_Wings%20of%20Time-4.webp')
      ],
      5: [
        img('u9jytd8cu14e6xroayco97n7d228_5zbfkjyv2uixzq54b6f6o01exue6_e1592ea2c56ff203dfa3f532a367a026-Bird%20Paradise%202.webp'),
        img('te8ye40yknfwpe8noyynsc0zp9un_download%20(48).png'),
        img('0nkx7yzbn295rxp57l160ild7t9q_ac0yu9zh08gjo9qkaa76f5inee46_Once%20Upon%20a%20Time%20Presentation.webp'),
        img('3s2xb9wujsi9m98w1z8q55upk7r7_River_Safari_-_Amazon_River_Quest_-_Jaguar_%E6%B2%B3%E5%B7%9D%E7%94%9F%E6%80%81%E5%9B%AD%E4%BA%9A%E9%A9%AC%E9%80%8A%E6%B2%B3%E6%8E%A2%E7%B4%A2_-_%E7%BE%8E%E6%B4%B2%E8%B1%B9.jpg.jpg')
      ],
      6: [
        img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg'),
        img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
        img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
        img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Singapore`,
      'Arrival at Changi Airport and private sedan transfer to Bugis',
      'Check in and let the children loose in the rooftop pool',
      'Easy first evening at the Bugis street market and food court',
      'Optional: the Rain Vortex at Jewel on the way out of the airport',
      `${DAY_MARK}Day 2 · City tour, SkyPark and the Gardens`,
      'Breakfast, then shared transfer for the half day city tour',
      'Merlion Park, the Helix bridge, Chinatown and the civic district',
      'Marina Bay Sands SkyPark on level 57 for the view across the bay',
      'Cloud Forest, Flower Dome and Jurassic World at Gardens by the Bay',
      `${DAY_MARK}Day 3 · Universal Studios`,
      'Breakfast, then shared transfer to Resorts World Sentosa',
      'One day pass for Universal Studios across all seven zones',
      'Minion Land and Far Far Away first, the coasters after lunch',
      'Back to the hotel in your own time on the Sentosa Express',
      `${DAY_MARK}Day 4 · Sentosa, oceanarium and Wings of Time`,
      'Breakfast, then shared transfer to Mount Faber for the cable car',
      'Two way sky pass over the harbour with the port below',
      'Singapore Oceanarium with its open ocean tank and reef galleries',
      'Wings of Time on Siloso beach after dark',
      `${DAY_MARK}Day 5 · Mandai parks and the Night Safari`,
      'Breakfast, then shared transfer out to the Mandai reserve',
      'Bird Paradise with its walk through aviaries and keeper talks',
      'River Wonders next door for the giant otters and manatees',
      'Night Safari with a tram ride to finish the day',
      `${DAY_MARK}Day 6 · Departure`,
      'Breakfast and check out',
      'Private sedan transfer to Changi Airport for your flight home'
    ],
    accommodation: {
      name: 'Village Hotel Bugis by Far East Hospitality, Singapore',
      description: '5 nights · Breakfast included · Super deluxe room · 4★ · Village Hotel Bugis with a rooftop pool and Bugis MRT two minutes away',
      images: [
        img('8sr089ftinhlyhk2m1ph5rhgunfm_589451350.jpg'),
        img('2bnq97czv4ldffc2xcc46oydnm7q_32866509.jpg'),
        img('rv14n6mi77jslz5ozc1mspi1yqps_526254598.jpg'),
        img('k5gzziyiapac7wfj9f33qk07cjko_595337160.jpg'),
        img('0d3q4fcr9lyp1nnzip43a5ecpsq1_311220238.jpg'),
        img('gwfz0b3v8h239tai9b27pao4ojek_497274741.jpg'),
        img('637hxg7t4wme432y3tfhv2641tck_526255691.jpg'),
        img('vravpn5oemmo3266etjziho3prjy_595337500.jpg'),
        img('2pfuwuya040ghxyg7vrsj4f8uxx2_526254599.jpg'),
        img('qoiihj53lxws834waanlvyc3ms8y_589451350.jpg'),
        img('pew81mhbgmdkcixmrgepcjfii9dh_526255285.jpg'),
        img('l2uxhfl07ljox1o5dry487spnasw_115494746.jpg'),
        img('y8b5sas1penl7iyo6u9jxlmc50u9_311233782.jpg'),
        img('mbybu2t9oox2o8245f6jb2qqc2j3_497274741.jpg'),
        img('moig9nz5cyoxphm9jba70dh50kq5_311233782.jpg'),
        img('lsunj3uluznairk6klgj7pk7zc0m_526255291.jpg'),
        img('j11e976byi5w54hnth9w0r2foc8f_526255285.jpg'),
        img('vi89uvdo3omyqyf5632cdapb7bxy_783303174.jpg')
      ]
    },
    activities: [
      {
        name: 'Half Day Singapore City Tour',
        day: 2,
        optional: false,
        image: img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        description: 'A shared coach tour past Merlion Park, Marina Bay, the Helix bridge, Chinatown and the civic district.'
      },
      {
        name: 'Marina Bay Sands SkyPark',
        day: 2,
        optional: false,
        image: img('mupwnf0wfox4b1i1r24qapttn3g7_Marina%20Bay%20Skypark-5.webp'),
        description: 'The level 57 observation deck above the bay, the Gardens and the towers of the business district.'
      },
      {
        name: 'Gardens by the Bay',
        day: 2,
        optional: false,
        image: img('dv9c80kzqgf5wqw36obazddrxlwq_GBB-2.webp'),
        description: 'Cloud Forest with its indoor waterfall, the Flower Dome and the Jurassic World trail under the Supertrees.'
      },
      {
        name: 'Universal Studios Singapore',
        day: 3,
        optional: false,
        image: img('ywo4eleb1h86zh6h5e005qsm0kzs_d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.webp'),
        description: 'A one day pass with Minion Land, Far Far Away, Ancient Egypt and the Sci Fi City coasters.'
      },
      {
        name: 'Singapore Cable Car Sky Pass',
        day: 4,
        optional: false,
        image: img('qeze4csghbtda4u7a06o23o1bk03_esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.webp'),
        description: 'A two way ride from Mount Faber over HarbourFront to Sentosa, above the container port.'
      },
      {
        name: 'Singapore Oceanarium',
        day: 4,
        optional: false,
        image: img('cdq7uq5tcqpjmy3ha56ibntcnm0y_Oceanraium-1.webp'),
        description: 'Sentosa\'s rebuilt aquarium with an open ocean tank, reef habitats and a research gallery for the children.'
      },
      {
        name: 'Wings of Time',
        day: 4,
        optional: false,
        image: img('9qh205t74nx95bmnuycnqgtu525x_Wings%20of%20Time-4.webp'),
        description: 'A short beachfront night show of water screens, lasers and fire on Siloso beach.'
      },
      {
        name: 'Bird Paradise',
        day: 5,
        optional: false,
        image: img('u9jytd8cu14e6xroayco97n7d228_5zbfkjyv2uixzq54b6f6o01exue6_e1592ea2c56ff203dfa3f532a367a026-Bird%20Paradise%202.webp'),
        description: 'Eight walk through aviaries at Mandai, from African wetlands to Amazon river birds, with daily keeper talks.'
      },
      {
        name: 'River Wonders',
        day: 5,
        optional: false,
        image: img('0nkx7yzbn295rxp57l160ild7t9q_ac0yu9zh08gjo9qkaa76f5inee46_Once%20Upon%20a%20Time%20Presentation.webp'),
        description: 'The river themed Mandai park with giant otters, manatees and a boat ride through the Amazon section.'
      },
      {
        name: 'Night Safari with Tram Ride',
        day: 5,
        optional: false,
        image: img('1wfaiw5qbbgxv8qfwthfsr7zrasf_2p1hfg3rpdci9zbqm9hkfljq3014_Downpic.cc-15918414.webp'),
        description: 'A tram circuit through the park after dark, past elephants, rhinos and the cats that only wake at night.'
      }
    ],
    program: {
      name: 'City, island and three wildlife parks',
      description: 'Five nights in Bugis with a pool for the afternoons, two island days and a full day at Mandai with the Night Safari to close it.',
      image: img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg')
    }
  }
];

const detail = {
  slug: 'singapore-family-safari-and-city-lights',
  ctaHref: '/l/singapore/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Singapore Family Safari and City Lights',
  alt: 'Supertrees lit up at Gardens by the Bay in Singapore',
  days: '6 days / 5 nights',
  stations: '1 stops',
  transport: 'Private airport transfers with shared coaches for tours and tickets',
  tag: 'Family',
  tags: ['Family', 'Nature'],
  price: 71684,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Marina Bay', 'Sentosa', 'Mandai'],
  stats: { days: 6, cities: 1, hotels: 1, activities: 10, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['10 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Nisha Rao',
    image: '/experts/riya.webp',
    role: 'Singapore expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three parks at Mandai in one day is a lot, so we put them late in the trip when the children know the pace.',
    quoteMore: 'Pack swimwear for the hotel rooftop. Most families end up back at the pool every afternoon between the big outings.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days for a family. The city tour with the SkyPark and Gardens by the Bay, a full day at Universal Studios, Sentosa with the cable car, oceanarium and Wings of Time, then a long Mandai day with Bird Paradise, River Wonders and the Night Safari.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights at the Village Hotel Bugis with daily breakfast; half day city tour; Marina Bay Sands SkyPark; the Gardens by the Bay domes with the Jurassic World trail; Universal Studios one day pass; two way cable car sky pass; Singapore Oceanarium; Wings of Time; Bird Paradise; River Wonders; Night Safari with tram ride; 10 private and shared transfers.',
  intro2: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; attractions not named above; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Singapore (Arrival)', text: 'Arrival at Changi Airport and private sedan transfer to Bugis\nCheck in and let the children loose in the rooftop pool\nEasy first evening at the Bugis street market and food court\nOptional: the Rain Vortex at Jewel on the way out of the airport', hotel: 'Village Hotel Bugis by Far East Hospitality', highlights: ['Arrival at Changi Airport and private sedan transfer to Bugis', 'Check in and let the children loose in the rooftop pool', 'Easy first evening at the Bugis street market and food court'] },
    { title: 'Day 2: City tour, SkyPark and the Gardens (B)', text: 'Breakfast, then shared transfer for the half day city tour\nMerlion Park, the Helix bridge, Chinatown and the civic district\nMarina Bay Sands SkyPark on level 57 for the view across the bay\nCloud Forest, Flower Dome and Jurassic World at Gardens by the Bay', hotel: 'Village Hotel Bugis by Far East Hospitality', highlights: ['Breakfast, then shared transfer for the half day city tour', 'Merlion Park, the Helix bridge, Chinatown and the civic district', 'Marina Bay Sands SkyPark on level 57 for the view across the bay'] },
    { title: 'Day 3: Universal Studios (B)', text: 'Breakfast, then shared transfer to Resorts World Sentosa\nOne day pass for Universal Studios across all seven zones\nMinion Land and Far Far Away first, the coasters after lunch\nBack to the hotel in your own time on the Sentosa Express', hotel: 'Village Hotel Bugis by Far East Hospitality', highlights: ['Breakfast, then shared transfer to Resorts World Sentosa', 'One day pass for Universal Studios across all seven zones', 'Minion Land and Far Far Away first, the coasters after lunch'] },
    { title: 'Day 4: Sentosa, oceanarium and Wings of Time (B)', text: 'Breakfast, then shared transfer to Mount Faber for the cable car\nTwo way sky pass over the harbour with the port below\nSingapore Oceanarium with its open ocean tank and reef galleries\nWings of Time on Siloso beach after dark', hotel: 'Village Hotel Bugis by Far East Hospitality', highlights: ['Breakfast, then shared transfer to Mount Faber for the cable car', 'Two way sky pass over the harbour with the port below', 'Singapore Oceanarium with its open ocean tank and reef galleries'] },
    { title: 'Day 5: Mandai parks and the Night Safari (B)', text: 'Breakfast, then shared transfer out to the Mandai reserve\nBird Paradise with its walk through aviaries and keeper talks\nRiver Wonders next door for the giant otters and manatees\nNight Safari with a tram ride to finish the day', hotel: 'Village Hotel Bugis by Far East Hospitality', highlights: ['Breakfast, then shared transfer out to the Mandai reserve', 'Bird Paradise with its walk through aviaries and keeper talks', 'River Wonders next door for the giant otters and manatees'] },
    { title: 'Day 6: Departure (B)', text: 'Breakfast and check out\nPrivate sedan transfer to Changi Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast and check out', 'Private sedan transfer to Changi Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; attractions not named above; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '#' },
  { label: 'Singapore', href: '/asia/singapore' },
  { label: detail.title }
];

export const singaporeFamilySafariCityLightsBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const singaporeFamilySafariCityLightsProduct = {
  slug: detail.slug,
  places: ['Singapore', 'Marina Bay', 'Sentosa', 'Mandai'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 10,
  transfers: 10,
  meals: 5,
  price: detail.price,
  images: cardImages
};
