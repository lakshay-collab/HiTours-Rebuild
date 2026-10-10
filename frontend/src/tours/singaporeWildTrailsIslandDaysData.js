// Singapore Wild Trails and Island Days. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
  img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
  img('3xb9b772fk8tq784ls9xw46bonlu_meric-dagli-RG7jGL8wkCs-unsplash.jpg'),
  img('3kicse3qojgtvpf5e4aqzvskrzu4_shutterstock_203804005.jpg'),
  img('uj4mfpnza7hzznm3ek5wzhawzdyl_shutterstock_1093285319.jpg'),
  img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg'),
  img('05dl6v4zzzs9r4hzjg41ugc2c3hc_shutterstock_135576233%20(1).jpg'),
  img('itpl36920m8zfwwwt0es64uzpwzq_shutterstock_646707235.jpg'),
  img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg'),
  img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('uj4mfpnza7hzznm3ek5wzhawzdyl_shutterstock_1093285319.jpg'),
  img('1wt90dpjyjd5k257vvhm9ptn869v_396492003_723660156460905_8525543036010793671_n.webp'),
  img('mqdqdjmua98od5vlx08cprl0xeqz_enchanted-garden-at-changi.jpg'),
  img('azbhlzifrdx7zz6f811y0rtgvfuk_1626325173_shutterstock_360853979.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    dayLabel: 'Day 1 to 6',
    images: [
      img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
      img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
      img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
      img('sfw0sw4nhgzk0yegkil8jla98ydq_shutterstock_743903413.jpg')
    ],
    dayImages: {
      1: [
        img('n5bm55t2yhe2mbnl2956ususmjvh_The%20Wonderfall-1.webp'),
        img('7ehfkxhduxg489jc59yctgakh91e_Sunflower%20Garden-1.webp'),
        img('1wt90dpjyjd5k257vvhm9ptn869v_396492003_723660156460905_8525543036010793671_n.webp'),
        img('mqdqdjmua98od5vlx08cprl0xeqz_enchanted-garden-at-changi.jpg')
      ],
      2: [
        img('azbhlzifrdx7zz6f811y0rtgvfuk_1626325173_shutterstock_360853979.jpg'),
        img('3s2xb9wujsi9m98w1z8q55upk7r7_River_Safari_-_Amazon_River_Quest_-_Jaguar_%E6%B2%B3%E5%B7%9D%E7%94%9F%E6%80%81%E5%9B%AD%E4%BA%9A%E9%A9%AC%E9%80%8A%E6%B2%B3%E6%8E%A2%E7%B4%A2_-_%E7%BE%8E%E6%B4%B2%E8%B1%B9.jpg.jpg'),
        img('u9jytd8cu14e6xroayco97n7d228_5zbfkjyv2uixzq54b6f6o01exue6_e1592ea2c56ff203dfa3f532a367a026-Bird%20Paradise%202.webp'),
        img('te8ye40yknfwpe8noyynsc0zp9un_download%20(48).png')
      ],
      3: [
        img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
        img('etwjtvxjtctcyj8zmdmmtz5rnff7_1563607619_shutterstock_1155676858.jpg'),
        img('xkc5gws4qd4uax4hvxwihi35fv35_1563619864_shutterstock_793620280.jpg')
      ],
      4: [
        img('qeze4csghbtda4u7a06o23o1bk03_esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.webp'),
        img('cdq7uq5tcqpjmy3ha56ibntcnm0y_Oceanraium-1.webp'),
        img('bksa9r6n2u3g1zl1grep2jo03oej_Oceanraium-1.webp'),
        img('9qh205t74nx95bmnuycnqgtu525x_Wings%20of%20Time-4.webp')
      ],
      5: [
        img('ywo4eleb1h86zh6h5e005qsm0kzs_d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.webp'),
        img('s2r4nfl80qk64lm24j05vwdt984y_VIAL1673.JPG'),
        img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
        img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg')
      ],
      6: [
        img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
        img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
        img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
        img('sfw0sw4nhgzk0yegkil8jla98ydq_shutterstock_743903413.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Singapore`,
      'Arrival at Changi Airport and private sedan transfer to Orchard Road',
      'Time at Jewel before you leave the airport if the flight lands early',
      'Check in at the Hotel Grand Central and keep the evening free',
      'Optional: supper at a hawker centre or the Orchard Road food halls',
      `${DAY_MARK}Day 2 · Bird Paradise and the Night Safari`,
      'Breakfast, then shared transfer out to the Mandai reserve',
      'Bird Paradise with eight walk through aviaries and the Penguin Cove',
      'Long lunch at the reserve, then rest before the evening',
      'Night Safari with a tram ride and the nocturnal walking trails',
      `${DAY_MARK}Day 3 · City tour, SkyPark and Floral Fantasy`,
      'Breakfast, then shared transfer for the half day city tour',
      'Merlion Park, Marina Bay, Chinatown and the civic district',
      'Marina Bay Sands SkyPark on level 57 above the bay',
      'Floral Fantasy and the Supertree grove at Gardens by the Bay',
      `${DAY_MARK}Day 4 · Sentosa, oceanarium and Wings of Time`,
      'Breakfast, then shared transfer to Mount Faber for the cable car',
      'Two way sky pass over the harbour to Sentosa',
      'Singapore Oceanarium with its open ocean tank and reef galleries',
      'Wings of Time on Siloso beach once it is dark',
      `${DAY_MARK}Day 5 · Universal Studios`,
      'Breakfast, then shared transfer to Resorts World Sentosa',
      'One day pass for Universal Studios across all seven zones',
      'Shows, coasters and the themed streets at your own pace',
      'Return shared transfer in the evening',
      `${DAY_MARK}Day 6 · Departure`,
      'Breakfast and check out',
      'Private sedan transfer to Changi Airport for your flight home'
    ],
    accommodation: {
      name: 'Hotel Grand Central, Singapore',
      description: '5 nights · Breakfast included · Standard room · 4★ · Hotel Grand Central on Orchard Road, beside Somerset MRT and the malls',
      images: [
        img('xdgjchafae380yv5unt55uv45y04_Central-2.jpg'),
        img('anaxgpvk8m2iy7w8z49sa7xddg4m_Central-8.jpg'),
        img('2x2hp6lxmpksle1lzeezkfr6rcok_Central-9.jpg'),
        img('ez77ij2f1f3we8ncfffm48iakwvb_Central-1.jpg'),
        img('h83tnc7jtmj1p64jugjgebnsn564_Central-5.jpg'),
        img('4o675jof9log85om4xhdi36fcwnv_Central-3.jpg'),
        img('tahgvektj6egyirqhtoiyncr1jrc_Central-4.jpg'),
        img('t9l09ln3bs8yoe5fytbvzpzcpw43_Central-10.jpg'),
        img('1yzn69942sm4xog84j8idhbbpncx_Central-6.jpg'),
        img('aop9x2xjpqc9z1ov0gueaebw55ei_Central-7.jpg')
      ]
    },
    activities: [
      {
        name: 'Bird Paradise',
        day: 2,
        optional: false,
        image: img('u9jytd8cu14e6xroayco97n7d228_5zbfkjyv2uixzq54b6f6o01exue6_e1592ea2c56ff203dfa3f532a367a026-Bird%20Paradise%202.webp'),
        description: 'Eight walk through aviaries at Mandai, from African wetlands to the Amazon, with keeper talks through the day.'
      },
      {
        name: 'Night Safari with Tram Ride',
        day: 2,
        optional: false,
        image: img('1wfaiw5qbbgxv8qfwthfsr7zrasf_2p1hfg3rpdci9zbqm9hkfljq3014_Downpic.cc-15918414.webp'),
        description: 'A tram circuit through the Mandai park after dark, then walking trails past the smaller nocturnal animals.'
      },
      {
        name: 'Half Day Singapore City Tour',
        day: 3,
        optional: false,
        image: img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        description: 'A shared coach tour of Merlion Park, Marina Bay, the Helix bridge, Chinatown and the colonial quarter.'
      },
      {
        name: 'Marina Bay Sands SkyPark',
        day: 3,
        optional: false,
        image: img('kkbup5icv3dwi0ouk6xyel3zbl58_Spectra%20-%20A%20Light%20&%20Water%20Show-4.jpg'),
        description: 'The level 57 observation deck above the bay, the Gardens and the financial district towers.'
      },
      {
        name: 'Gardens by the Bay',
        day: 3,
        optional: false,
        image: img('3q0tjdcnlogzkwjgwq3hrub9ublr_Downpic.cc-image333224233.jpg'),
        description: 'Floral Fantasy with its hanging gardens and the Supertree grove, best as the lights come on.'
      },
      {
        name: 'Singapore Cable Car Sky Pass',
        day: 4,
        optional: false,
        image: img('qeze4csghbtda4u7a06o23o1bk03_esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.webp'),
        description: 'A two way ride between Mount Faber, HarbourFront and Sentosa, high above the working harbour.'
      },
      {
        name: 'Singapore Oceanarium',
        day: 4,
        optional: false,
        image: img('cdq7uq5tcqpjmy3ha56ibntcnm0y_Oceanraium-1.webp'),
        description: 'Sentosa\'s rebuilt aquarium with an open ocean tank, reef habitats and a research wing.'
      },
      {
        name: 'Wings of Time',
        day: 4,
        optional: false,
        image: img('9qh205t74nx95bmnuycnqgtu525x_Wings%20of%20Time-4.webp'),
        description: 'A twenty minute night show on Siloso beach built from water screens, lasers and fire.'
      },
      {
        name: 'Universal Studios Singapore',
        day: 5,
        optional: false,
        image: img('ywo4eleb1h86zh6h5e005qsm0kzs_d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.webp'),
        description: 'A one day pass covering Sci Fi City, Ancient Egypt, Far Far Away and the Hollywood boulevard.'
      }
    ],
    program: {
      name: 'Parks, skyline and one theme park',
      description: 'Five nights on Orchard Road with a full wildlife day at Mandai, a city day at Marina Bay and two island days on Sentosa.',
      image: img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg')
    }
  }
];

const detail = {
  slug: 'singapore-wild-trails-and-island-days',
  ctaHref: '/l/singapore/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Singapore Wild Trails and Island Days',
  alt: 'Macaw in flight at Bird Paradise in the Mandai wildlife reserve, Singapore',
  days: '6 days / 5 nights',
  stations: '1 stops',
  transport: 'Private airport transfers with shared coaches for tours and tickets',
  tag: 'Nature',
  tags: ['Nature', 'Family'],
  price: 62308,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Mandai', 'Marina Bay', 'Sentosa'],
  stats: { days: 6, cities: 1, hotels: 1, activities: 9, transfers: 11 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['9 experiences', 'Activities'],
    ['11 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Nisha Rao',
    image: '/experts/riya.webp',
    role: 'Singapore expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Six days lets you take the parks slowly. One wildlife day, one city day, one island day, one theme park day and nothing rushed.',
    quoteMore: 'The hotel sits on Orchard Road, so the last evening is best spent walking the length of it rather than booking anything.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days through the green and the glass. Bird Paradise and the Night Safari at Mandai, the city tour with the SkyPark and Floral Fantasy, Sentosa with the cable car, oceanarium and Wings of Time, then a full day at Universal Studios.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights at the Hotel Grand Central with daily breakfast; Bird Paradise; Night Safari with tram ride; half day city tour; Marina Bay Sands SkyPark; Gardens by the Bay with Floral Fantasy; two way cable car sky pass; Singapore Oceanarium; Wings of Time; Universal Studios one day pass; 11 private and shared transfers; visa assistance.',
  intro2: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; attractions not named above; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Singapore (Arrival)', text: 'Arrival at Changi Airport and private sedan transfer to Orchard Road\nTime at Jewel before you leave the airport if the flight lands early\nCheck in at the Hotel Grand Central and keep the evening free\nOptional: supper at a hawker centre or the Orchard Road food halls', hotel: 'Hotel Grand Central', highlights: ['Arrival at Changi Airport and private sedan transfer to Orchard Road', 'Time at Jewel before you leave the airport if the flight lands early', 'Check in at the Hotel Grand Central and keep the evening free'] },
    { title: 'Day 2: Bird Paradise and the Night Safari (B)', text: 'Breakfast, then shared transfer out to the Mandai reserve\nBird Paradise with eight walk through aviaries and the Penguin Cove\nLong lunch at the reserve, then rest before the evening\nNight Safari with a tram ride and the nocturnal walking trails', hotel: 'Hotel Grand Central', highlights: ['Breakfast, then shared transfer out to the Mandai reserve', 'Bird Paradise with eight walk through aviaries and the Penguin Cove', 'Long lunch at the reserve, then rest before the evening'] },
    { title: 'Day 3: City tour, SkyPark and Floral Fantasy (B)', text: 'Breakfast, then shared transfer for the half day city tour\nMerlion Park, Marina Bay, Chinatown and the civic district\nMarina Bay Sands SkyPark on level 57 above the bay\nFloral Fantasy and the Supertree grove at Gardens by the Bay', hotel: 'Hotel Grand Central', highlights: ['Breakfast, then shared transfer for the half day city tour', 'Merlion Park, Marina Bay, Chinatown and the civic district', 'Marina Bay Sands SkyPark on level 57 above the bay'] },
    { title: 'Day 4: Sentosa, oceanarium and Wings of Time (B)', text: 'Breakfast, then shared transfer to Mount Faber for the cable car\nTwo way sky pass over the harbour to Sentosa\nSingapore Oceanarium with its open ocean tank and reef galleries\nWings of Time on Siloso beach once it is dark', hotel: 'Hotel Grand Central', highlights: ['Breakfast, then shared transfer to Mount Faber for the cable car', 'Two way sky pass over the harbour to Sentosa', 'Singapore Oceanarium with its open ocean tank and reef galleries'] },
    { title: 'Day 5: Universal Studios (B)', text: 'Breakfast, then shared transfer to Resorts World Sentosa\nOne day pass for Universal Studios across all seven zones\nShows, coasters and the themed streets at your own pace\nReturn shared transfer in the evening', hotel: 'Hotel Grand Central', highlights: ['Breakfast, then shared transfer to Resorts World Sentosa', 'One day pass for Universal Studios across all seven zones', 'Shows, coasters and the themed streets at your own pace'] },
    { title: 'Day 6: Departure (B)', text: 'Breakfast and check out\nPrivate sedan transfer to Changi Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast and check out', 'Private sedan transfer to Changi Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; attractions not named above; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Singapore', href: '/asia/singapore' },
  { label: detail.title }
];

export const singaporeWildTrailsIslandDaysBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const singaporeWildTrailsIslandDaysProduct = {
  slug: detail.slug,
  places: ['Singapore', 'Mandai', 'Marina Bay', 'Sentosa'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 9,
  transfers: 11,
  meals: 5,
  price: detail.price,
  images: cardImages
};
