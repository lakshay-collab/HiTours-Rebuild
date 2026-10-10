// Singapore Highlights with Sentosa and the Gardens. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
  img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
  img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
  img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
  img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
  img('3xb9b772fk8tq784ls9xw46bonlu_meric-dagli-RG7jGL8wkCs-unsplash.jpg'),
  img('3kicse3qojgtvpf5e4aqzvskrzu4_shutterstock_203804005.jpg'),
  img('uj4mfpnza7hzznm3ek5wzhawzdyl_shutterstock_1093285319.jpg'),
  img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg'),
  img('05dl6v4zzzs9r4hzjg41ugc2c3hc_shutterstock_135576233%20(1).jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('3xb9b772fk8tq784ls9xw46bonlu_meric-dagli-RG7jGL8wkCs-unsplash.jpg'),
  img('3l5rmexqvaehkg8jluxqlpipj9k2_Butterfly%20Garden-1.webp'),
  img('n5bm55t2yhe2mbnl2956ususmjvh_The%20Wonderfall-1.webp'),
  img('7ehfkxhduxg489jc59yctgakh91e_Sunflower%20Garden-1.webp')
];

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    dayLabel: 'Day 1 to 5',
    images: [
      img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
      img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg'),
      img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
      img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg')
    ],
    dayImages: {
      1: [
        img('3l5rmexqvaehkg8jluxqlpipj9k2_Butterfly%20Garden-1.webp'),
        img('n5bm55t2yhe2mbnl2956ususmjvh_The%20Wonderfall-1.webp'),
        img('7ehfkxhduxg489jc59yctgakh91e_Sunflower%20Garden-1.webp'),
        img('n0s5r7ttlevdfrcv1di7fyxuajv7_Orchid%20Garden%20&%20Koi%20Pond-1.webp')
      ],
      2: [
        img('qeze4csghbtda4u7a06o23o1bk03_esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.webp'),
        img('cdq7uq5tcqpjmy3ha56ibntcnm0y_Oceanraium-1.webp'),
        img('bksa9r6n2u3g1zl1grep2jo03oej_Oceanraium-1.webp'),
        img('9qh205t74nx95bmnuycnqgtu525x_Wings%20of%20Time-4.webp')
      ],
      3: [
        img('ywo4eleb1h86zh6h5e005qsm0kzs_d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.webp'),
        img('s2r4nfl80qk64lm24j05vwdt984y_VIAL1673.JPG'),
        img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
        img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg')
      ],
      4: [
        img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
        img('etwjtvxjtctcyj8zmdmmtz5rnff7_1563607619_shutterstock_1155676858.jpg'),
        img('xkc5gws4qd4uax4hvxwihi35fv35_1563619864_shutterstock_793620280.jpg')
      ],
      5: [
        img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
        img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg'),
        img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
        img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and Changi Jewel`,
      'Arrival at Changi Airport and private sedan transfer to Novena',
      'Time at Jewel on the way out of the terminal for the Rain Vortex',
      'Check in and keep the first evening free',
      'Optional: supper at a hawker centre near Novena MRT',
      `${DAY_MARK}Day 2 · Cable car, oceanarium and Wings of Time`,
      'Breakfast, then shared transfer to Mount Faber for the cable car',
      'Two way sky pass with the harbour and the container port below',
      'Singapore Oceanarium on Sentosa with its open ocean tank',
      'Wings of Time on Siloso beach once the sun is down',
      `${DAY_MARK}Day 3 · Universal Studios`,
      'Breakfast, then shared transfer to Resorts World Sentosa',
      'One day pass for Universal Studios across all seven zones',
      'Shows and coasters through the afternoon at your own pace',
      'Evening free for the Sentosa boardwalk or VivoCity',
      `${DAY_MARK}Day 4 · City tour, Gardens and the SkyPark`,
      'Breakfast, then shared transfer for the half day city tour',
      'Merlion Park, Marina Bay, Chinatown and the civic district',
      'Cloud Forest and the Jurassic World trail at Gardens by the Bay',
      'Marina Bay Sands SkyPark on level 57 for the last view of the city',
      `${DAY_MARK}Day 5 · Departure`,
      'Breakfast and check out',
      'Private sedan transfer to Changi Airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Novena, Singapore',
      description: '4 nights · Breakfast included · Super deluxe room · 4★ · Holiday Inn Express Novena, on the MRT line two stops from Orchard Road',
      images: [
        img('0mmkekiz51jg6o5nkjgp4duxvb2r_Holiday%20Inn%20Express%20&%20Suites%20Singapore%20Novena%20by%20IHG-1.webp'),
        img('rf8d7k52q2ekrtwbph4w3xycnw8a_Holiday%20Inn%20Express%20&%20Suites%20Singapore%20Novena%20by%20IHG-6.webp'),
        img('7bwecdpe76qdv05u5pn1wvcn5i1m_Holiday%20Inn%20Express%20&%20Suites%20Singapore%20Novena%20by%20IHG-3.webp'),
        img('ppmme9jiqgf9s4l7lph29h0slktw_Holiday%20Inn%20Express%20&%20Suites%20Singapore%20Novena%20by%20IHG-5.webp'),
        img('agkxth5rf2uw294mmtp5x2qjuc9q_Holiday%20Inn%20Express%20&%20Suites%20Singapore%20Novena%20by%20IHG-2.webp'),
        img('4vzqpobj5pr7fj9q56omi6xj4j85_Holiday%20Inn%20Express%20&%20Suites%20Singapore%20Novena%20by%20IHG-4.webp')
      ]
    },
    activities: [
      {
        name: 'Singapore Cable Car Sky Pass',
        day: 2,
        optional: false,
        image: img('qeze4csghbtda4u7a06o23o1bk03_esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.webp'),
        description: 'A two way ride from Mount Faber over HarbourFront to Sentosa, with the port and the islands below.'
      },
      {
        name: 'Singapore Oceanarium',
        day: 2,
        optional: false,
        image: img('cdq7uq5tcqpjmy3ha56ibntcnm0y_Oceanraium-1.webp'),
        description: 'Sentosa\'s rebuilt aquarium with an open ocean tank, reef galleries and a research wing for the children.'
      },
      {
        name: 'Wings of Time',
        day: 2,
        optional: false,
        image: img('9qh205t74nx95bmnuycnqgtu525x_Wings%20of%20Time-4.webp'),
        description: 'A twenty minute night show on the beachfront built from water jets, lasers, fire and a short film.'
      },
      {
        name: 'Universal Studios Singapore',
        day: 3,
        optional: false,
        image: img('ywo4eleb1h86zh6h5e005qsm0kzs_d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.webp'),
        description: 'A one day pass covering Sci Fi City, Ancient Egypt, Far Far Away and the Hollywood boulevard shows.'
      },
      {
        name: 'Half Day Singapore City Tour',
        day: 4,
        optional: false,
        image: img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        description: 'A shared coach tour past Merlion Park, Marina Bay, the Helix bridge, Chinatown and the old civic quarter.'
      },
      {
        name: 'Gardens by the Bay',
        day: 4,
        optional: false,
        image: img('80nics4c9y777j422itjfc53wl5r_indoor-things-to-do-in-singapore-attractions-activities-flower-dome-500x286.jpg'),
        description: 'The Cloud Forest dome with its indoor waterfall and the Jurassic World trail among the Supertrees.'
      },
      {
        name: 'Marina Bay Sands SkyPark',
        day: 4,
        optional: false,
        image: img('bgfamfvg2zse2dbm7amtl5vhare3_Marina%20Bay%20Skypark-5.webp'),
        description: 'The observation deck on level 57, straight above the bay, the Gardens and the financial district.'
      },
      {
        name: 'Singapore Flyer',
        day: 1,
        optional: true,
        image: img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
        description: 'A slow turn on the observation wheel beside Marina Bay, with the Strait and the skyline in one sweep.'
      }
    ],
    program: {
      name: 'The headline sights in order',
      description: 'Four nights in Novena with Sentosa at the start, a theme park day in the middle and the city skyline saved for the end.',
      image: img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg')
    }
  }
];

const detail = {
  slug: 'singapore-highlights-sentosa-and-gardens',
  ctaHref: '/l/singapore/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Singapore Highlights with Sentosa and the Gardens',
  alt: 'Cable car cabins crossing the harbour towards Sentosa island in Singapore',
  days: '5 days / 4 nights',
  stations: '1 stops',
  transport: 'Private airport transfers with shared coaches for tours and tickets',
  tag: 'City break',
  tags: ['City break', 'Family'],
  price: 62778,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Sentosa', 'Marina Bay'],
  stats: { days: 5, cities: 1, hotels: 1, activities: 7, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['4 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Nisha Rao',
    image: '/experts/riya.webp',
    role: 'Singapore expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'This is the order I give first time visitors. Sentosa early while energy is high, the city and the Gardens at the end.',
    quoteMore: 'Give yourself two hours at Jewel on the way out. The waterfall and the canopy park sit inside the airport, so you lose nothing from the trip.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five days of the headline sights. The cable car, oceanarium and Wings of Time on Sentosa, a full day at Universal Studios, then the city tour with Gardens by the Bay and the Marina Bay Sands SkyPark.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights at the Holiday Inn Express Novena with daily breakfast; two way cable car sky pass; Singapore Oceanarium; Wings of Time; Universal Studios one day pass; half day city tour; Gardens by the Bay with Cloud Forest and Jurassic World; Marina Bay Sands SkyPark; 9 private and shared transfers.',
  intro2: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; attractions not named above; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and Changi Jewel (Arrival)', text: 'Arrival at Changi Airport and private sedan transfer to Novena\nTime at Jewel on the way out of the terminal for the Rain Vortex\nCheck in and keep the first evening free\nOptional: supper at a hawker centre near Novena MRT', hotel: 'Holiday Inn Express Novena', highlights: ['Arrival at Changi Airport and private sedan transfer to Novena', 'Time at Jewel on the way out of the terminal for the Rain Vortex', 'Check in and keep the first evening free'] },
    { title: 'Day 2: Cable car, oceanarium and Wings of Time (B)', text: 'Breakfast, then shared transfer to Mount Faber for the cable car\nTwo way sky pass with the harbour and the container port below\nSingapore Oceanarium on Sentosa with its open ocean tank\nWings of Time on Siloso beach once the sun is down', hotel: 'Holiday Inn Express Novena', highlights: ['Breakfast, then shared transfer to Mount Faber for the cable car', 'Two way sky pass with the harbour and the container port below', 'Singapore Oceanarium on Sentosa with its open ocean tank'] },
    { title: 'Day 3: Universal Studios (B)', text: 'Breakfast, then shared transfer to Resorts World Sentosa\nOne day pass for Universal Studios across all seven zones\nShows and coasters through the afternoon at your own pace\nEvening free for the Sentosa boardwalk or VivoCity', hotel: 'Holiday Inn Express Novena', highlights: ['Breakfast, then shared transfer to Resorts World Sentosa', 'One day pass for Universal Studios across all seven zones', 'Shows and coasters through the afternoon at your own pace'] },
    { title: 'Day 4: City tour, Gardens and the SkyPark (B)', text: 'Breakfast, then shared transfer for the half day city tour\nMerlion Park, Marina Bay, Chinatown and the civic district\nCloud Forest and the Jurassic World trail at Gardens by the Bay\nMarina Bay Sands SkyPark on level 57 for the last view of the city', hotel: 'Holiday Inn Express Novena', highlights: ['Breakfast, then shared transfer for the half day city tour', 'Merlion Park, Marina Bay, Chinatown and the civic district', 'Cloud Forest and the Jurassic World trail at Gardens by the Bay'] },
    { title: 'Day 5: Departure (B)', text: 'Breakfast and check out\nPrivate sedan transfer to Changi Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast and check out', 'Private sedan transfer to Changi Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; attractions not named above; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Singapore', href: '/asia/singapore' },
  { label: detail.title }
];

export const singaporeHighlightsSentosaGardensBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const singaporeHighlightsSentosaGardensProduct = {
  slug: detail.slug,
  places: ['Singapore', 'Sentosa', 'Marina Bay'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 7,
  transfers: 9,
  meals: 4,
  price: detail.price,
  images: cardImages
};
