// Romantic Singapore with Night Safari and Sentosa. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5f3dno722k7csmmvpmfhq6v4ufbo_shutterstock_1402131020.jpg'),
  img('o08lx9kwhzu3m84k56oqeffm92pg_shutterstock_695806240.jpg'),
  img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
  img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
  img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
  img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
  img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
  img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
  img('3xb9b772fk8tq784ls9xw46bonlu_meric-dagli-RG7jGL8wkCs-unsplash.jpg'),
  img('3kicse3qojgtvpf5e4aqzvskrzu4_shutterstock_203804005.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('5f3dno722k7csmmvpmfhq6v4ufbo_shutterstock_1402131020.jpg'),
  img('o08lx9kwhzu3m84k56oqeffm92pg_shutterstock_695806240.jpg'),
  img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
  img('etwjtvxjtctcyj8zmdmmtz5rnff7_1563607619_shutterstock_1155676858.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    dayLabel: 'Day 1 to 5',
    images: [
      img('5f3dno722k7csmmvpmfhq6v4ufbo_shutterstock_1402131020.jpg'),
      img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg'),
      img('o08lx9kwhzu3m84k56oqeffm92pg_shutterstock_695806240.jpg'),
      img('05dl6v4zzzs9r4hzjg41ugc2c3hc_shutterstock_135576233%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('eqipsys9ot9wzmt2dxq263revu7h_jr6t1rth7y5vghy5iv7hhih4jynz_East%20Lodge%20Trail%20-%20Malayan%20Tiger.webp'),
        img('cgx6ab1cspd7wu0e04jze3dzbibk_singapore_night_safari.jpg'),
        img('5f3dno722k7csmmvpmfhq6v4ufbo_shutterstock_1402131020.jpg'),
        img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg')
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
        img('5f3dno722k7csmmvpmfhq6v4ufbo_shutterstock_1402131020.jpg'),
        img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg')
      ],
      4: [
        img('qeze4csghbtda4u7a06o23o1bk03_esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.webp'),
        img('cdq7uq5tcqpjmy3ha56ibntcnm0y_Oceanraium-1.webp'),
        img('bksa9r6n2u3g1zl1grep2jo03oej_Oceanraium-1.webp'),
        img('9qh205t74nx95bmnuycnqgtu525x_Wings%20of%20Time-4.webp')
      ],
      5: [
        img('5f3dno722k7csmmvpmfhq6v4ufbo_shutterstock_1402131020.jpg'),
        img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg'),
        img('o08lx9kwhzu3m84k56oqeffm92pg_shutterstock_695806240.jpg'),
        img('05dl6v4zzzs9r4hzjg41ugc2c3hc_shutterstock_135576233%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and the Night Safari`,
      'Arrival at Changi Airport and private sedan transfer to your hotel in Lavender',
      'Check in and rest for a few hours before the evening out',
      'Shared transfer to Mandai for the Night Safari with a tram ride through the park',
      'Leopards, lions and tapirs are awake at this hour, which is the whole point',
      `${DAY_MARK}Day 2 · City tour, SkyPark and the Gardens`,
      'Breakfast, then shared transfer for the half day city tour',
      'Merlion Park, the Helix bridge, Chinatown and the colonial civic district',
      'Marina Bay Sands SkyPark on level 57 for the view across the bay',
      'Cloud Forest, Flower Dome and Jurassic World at Gardens by the Bay',
      `${DAY_MARK}Day 3 · Universal Studios`,
      'Breakfast, then shared transfer to Resorts World Sentosa',
      'One day pass for Universal Studios with all seven themed zones',
      'Battlestar Galactica, Transformers and the Mummy ride for the brave',
      'Evening free for dinner in Chinatown or along Clarke Quay',
      `${DAY_MARK}Day 4 · Sentosa, oceanarium and Wings of Time`,
      'Breakfast, then shared transfer to Mount Faber for the cable car',
      'Two way sky pass across the harbour with Sentosa below you',
      'Singapore Oceanarium with its open ocean tank and reef habitats',
      'Wings of Time on Siloso beach after dark, water, fire and light',
      `${DAY_MARK}Day 5 · Departure`,
      'Breakfast and a relaxed check out',
      'Private sedan transfer to Changi Airport for your flight home'
    ],
    accommodation: {
      name: 'Aqueen Prestige Hotel Lavender, Singapore',
      description: '4 nights · Breakfast included · Deluxe room · 3★ · Aqueen Prestige Lavender, four minutes on foot from Lavender MRT',
      images: [
        img('3eroqdikd4uj2cn8hepvicdgwb1d_788750952.jpg'),
        img('9ox19rj8x016b1a75oqcbf2rddpo_495743709.jpg'),
        img('jz0wi1u3f1u5w88k9exf7oq0x1yi_788747904.jpg'),
        img('lgt4gp2hw8qxhscu2rwp1zjxpily_514927154.jpg'),
        img('fuh2qg87vpitxbwbc57eog3sq7ef_495743424.jpg'),
        img('lmfynpcht5r7cr0b9d2x7w76qlyc_514927137.jpg'),
        img('k56c6l1vrma8bz39f6ewwm7ka0ft_507491674.jpg'),
        img('vh4145cm0w85app39q6wv60azn04_477181019.jpg'),
        img('l8gmq3ws77igi8e7my32wsq4hw3f_788738935.jpg'),
        img('543p8kbb11oqhzbmu1wn7o118z1h_495743709.jpg'),
        img('qsh1xyz56gn2bj8gchm23kaeubzz_788747927.jpg'),
        img('1wf3s6pgg0vkrjc4x5jnrhsp7l3n_788750418.jpg'),
        img('zsz6hpil61upxxz7et18t9ty18qi_788750960.jpg')
      ]
    },
    activities: [
      {
        name: 'Night Safari with Tram Ride',
        day: 1,
        optional: false,
        image: img('eqipsys9ot9wzmt2dxq263revu7h_jr6t1rth7y5vghy5iv7hhih4jynz_East%20Lodge%20Trail%20-%20Malayan%20Tiger.webp'),
        description: 'The world\'s first wildlife park built for after dark, with a tram circuit past the Asian elephants, hyenas and the big cats.'
      },
      {
        name: 'Half Day Singapore City Tour',
        day: 2,
        optional: false,
        image: img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        description: 'A shared coach run past Merlion Park, Marina Bay, the Helix bridge, Chinatown and the civic district buildings.'
      },
      {
        name: 'Marina Bay Sands SkyPark',
        day: 2,
        optional: false,
        image: img('mupwnf0wfox4b1i1r24qapttn3g7_Marina%20Bay%20Skypark-5.webp'),
        description: 'The observation deck on level 57 of Marina Bay Sands, straight above the bay, the Gardens and the city towers.'
      },
      {
        name: 'Gardens by the Bay',
        day: 2,
        optional: false,
        image: img('dv9c80kzqgf5wqw36obazddrxlwq_GBB-2.webp'),
        description: 'Cloud Forest with its indoor waterfall, the Flower Dome and the Jurassic World walk among the Supertrees.'
      },
      {
        name: 'Universal Studios Singapore',
        day: 3,
        optional: false,
        image: img('ywo4eleb1h86zh6h5e005qsm0kzs_d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.webp'),
        description: 'A one day pass for the Sentosa park, from Sci Fi City and Ancient Egypt to the Hollywood boulevard shows.'
      },
      {
        name: 'Singapore Cable Car Sky Pass',
        day: 4,
        optional: false,
        image: img('qeze4csghbtda4u7a06o23o1bk03_esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.webp'),
        description: 'A two way ride between Mount Faber, HarbourFront and Sentosa with the working harbour under your feet.'
      },
      {
        name: 'Singapore Oceanarium',
        day: 4,
        optional: false,
        image: img('cdq7uq5tcqpjmy3ha56ibntcnm0y_Oceanraium-1.webp'),
        description: 'The rebuilt Sentosa aquarium with an open ocean tank, reef habitats and a research gallery for the children.'
      },
      {
        name: 'Wings of Time',
        day: 4,
        optional: false,
        image: img('9qh205t74nx95bmnuycnqgtu525x_Wings%20of%20Time-4.webp'),
        description: 'An open air night show on Siloso beach built from water jets, lasers, fire and a short story on screen.'
      },
      {
        name: 'Singapore River Cruise',
        day: 2,
        optional: true,
        image: img('5f3dno722k7csmmvpmfhq6v4ufbo_shutterstock_1402131020.jpg'),
        description: 'A bumboat along the quays past the shophouses and the old bridges, best taken once the lights are on.'
      }
    ],
    program: {
      name: 'City nights and an island day',
      description: 'Four nights in Lavender with the MRT at the door, a wildlife evening at Mandai, the Marina Bay skyline and a full day on Sentosa.',
      image: img('5f3dno722k7csmmvpmfhq6v4ufbo_shutterstock_1402131020.jpg')
    }
  }
];

const detail = {
  slug: 'romantic-singapore-night-safari-and-sentosa',
  ctaHref: '/l/singapore/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Romantic Singapore with Night Safari and Sentosa',
  alt: 'Gardens by the Bay Supertrees glowing above the Marina Bay skyline in Singapore',
  days: '5 days / 4 nights',
  stations: '1 stops',
  transport: 'Private airport transfers with shared coaches for tours and tickets',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'City break'],
  price: 52026,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Marina Bay', 'Sentosa'],
  stats: { days: 5, cities: 1, hotels: 1, activities: 8, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['8 experiences', 'Activities'],
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
    quote: 'Couples get the best of the city here. Wildlife after dark, the skyline from 57 floors up and a whole day on Sentosa.',
    quoteMore: 'Book the SkyPark slot before sunset and stay up there as the lights come on over Marina Bay. It is the one view everyone talks about afterwards.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five days in Singapore for two. Wildlife by tram on the first night, the city and Marina Bay on day two, a full day at Universal Studios, then Sentosa with the cable car, the oceanarium and the Wings of Time show on the beach.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights at the Aqueen Prestige Lavender with daily breakfast; Night Safari with tram ride; half day city tour; Marina Bay Sands SkyPark; Gardens by the Bay with Cloud Forest, Flower Dome and Jurassic World; Universal Studios one day pass; two way cable car sky pass; Singapore Oceanarium; Wings of Time; 9 private and shared transfers; visa assistance.',
  intro2: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; rides and games not named above; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and the Night Safari (Arrival)', text: 'Arrival at Changi Airport and private sedan transfer to your hotel in Lavender\nCheck in and rest for a few hours before the evening out\nShared transfer to Mandai for the Night Safari with a tram ride through the park\nLeopards, lions and tapirs are awake at this hour, which is the whole point', hotel: 'Aqueen Prestige Hotel Lavender', highlights: ['Arrival at Changi Airport and private sedan transfer to your hotel in Lavender', 'Check in and rest for a few hours before the evening out', 'Shared transfer to Mandai for the Night Safari with a tram ride through the park'] },
    { title: 'Day 2: City tour, SkyPark and the Gardens (B)', text: 'Breakfast, then shared transfer for the half day city tour\nMerlion Park, the Helix bridge, Chinatown and the colonial civic district\nMarina Bay Sands SkyPark on level 57 for the view across the bay\nCloud Forest, Flower Dome and Jurassic World at Gardens by the Bay', hotel: 'Aqueen Prestige Hotel Lavender', highlights: ['Breakfast, then shared transfer for the half day city tour', 'Merlion Park, the Helix bridge, Chinatown and the colonial civic district', 'Marina Bay Sands SkyPark on level 57 for the view across the bay'] },
    { title: 'Day 3: Universal Studios (B)', text: 'Breakfast, then shared transfer to Resorts World Sentosa\nOne day pass for Universal Studios with all seven themed zones\nBattlestar Galactica, Transformers and the Mummy ride for the brave\nEvening free for dinner in Chinatown or along Clarke Quay', hotel: 'Aqueen Prestige Hotel Lavender', highlights: ['Breakfast, then shared transfer to Resorts World Sentosa', 'One day pass for Universal Studios with all seven themed zones', 'Battlestar Galactica, Transformers and the Mummy ride for the brave'] },
    { title: 'Day 4: Sentosa, oceanarium and Wings of Time (B)', text: 'Breakfast, then shared transfer to Mount Faber for the cable car\nTwo way sky pass across the harbour with Sentosa below you\nSingapore Oceanarium with its open ocean tank and reef habitats\nWings of Time on Siloso beach after dark, water, fire and light', hotel: 'Aqueen Prestige Hotel Lavender', highlights: ['Breakfast, then shared transfer to Mount Faber for the cable car', 'Two way sky pass across the harbour with Sentosa below you', 'Singapore Oceanarium with its open ocean tank and reef habitats'] },
    { title: 'Day 5: Departure (B)', text: 'Breakfast and a relaxed check out\nPrivate sedan transfer to Changi Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast and a relaxed check out', 'Private sedan transfer to Changi Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; rides and games not named above; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Singapore', href: '/asia/singapore' },
  { label: detail.title }
];

export const romanticSingaporeNightSafariSentosaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const romanticSingaporeNightSafariSentosaProduct = {
  slug: detail.slug,
  places: ['Singapore', 'Marina Bay', 'Sentosa'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 8,
  transfers: 9,
  meals: 4,
  price: detail.price,
  images: cardImages
};
