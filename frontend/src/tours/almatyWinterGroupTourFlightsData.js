// Almaty Winter Group Tour with Flights. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg'),
  img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
  img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg'),
  img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
  img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('ax2aozks96i5vt0r92ag2n6dg2j0_shutterstock_1505534291.jpg'),
  img('o3buxw5c89li0ges674n4extpqzk_Palace_of_the_Republic,_Almaty_2022.jpg'),
  img('hc5v8ecq194anwp7jvspf3io6mkb_d998a0de8f91053d322bb09c8999cc31.jpg'),
  img('unuv5nfboec54f5n9ampr6zjyu4b_dl.beatsnoop.com-1714742344.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Almaty',
    dayLabel: 'Day 1 to 5',
    images: [
      img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg'),
      img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
      img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
      img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg')
    ],
    dayImages: {
      1: [
        img('rbsdlpmqrfga1bptwh7jhqywl58s_shutterstock_1873578235.jpg'),
        img('ax2aozks96i5vt0r92ag2n6dg2j0_shutterstock_1505534291.jpg'),
        img('o3buxw5c89li0ges674n4extpqzk_Palace_of_the_Republic,_Almaty_2022.jpg'),
        img('hc5v8ecq194anwp7jvspf3io6mkb_d998a0de8f91053d322bb09c8999cc31.jpg')
      ],
      2: [
        img('unuv5nfboec54f5n9ampr6zjyu4b_dl.beatsnoop.com-1714742344.jpg'),
        img('koghfpteo1o0tvkakl3yhx0ekrl9_compressed-Cable-Car-from-Shymbulak-Ski-Resort-Almaty-Kazakhsthan-min-min.jpeg'),
        img('vrjnt8wwvr78tk7y6bjhxab6pm7x_Medeu-_4.jpg'),
        img('jxnmhh6hckt5134tfufe4svyclqb_19134248232_df028bebc8_o.jpg')
      ],
      3: [
        img('o24wp5vuwkui6lul4nueb4wzboea_shutterstock_2463416533.jpg'),
        img('rv69fncn9qroy8ocu7v273hsimay_shutterstock_2301182539.jpg'),
        img('01992qpnomjdo99euh265vd84nhv_%D0%A6%D0%A3%D0%9C-3.jpg'),
        img('fujsrgnovxprqyttm44qkpj3afzr_shutterstock_2463416533.jpg')
      ],
      4: [
        img('edpgsj6dmlujdnuc6wtf1t510bfu_dl.beatsnoop.com-0G4juAywQ9.jpg'),
        img('qtqikb7t8r48cxgpr1bjwebporj0_dl.beatsnoop.com-nsg9PAJbIo.jpg'),
        img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg'),
        img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg')
      ],
      5: [
        img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg'),
        img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
        img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
        img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Delhi to Almaty`,
      'Flight Delhi to Almaty included in the price',
      'Arrival at Almaty International and transfer to your hotel',
      'The day at leisure once you have checked in',
      'Optional: the Palace of the Republic and Abai Square',
      `${DAY_MARK}Day 2 · Shymbulak and the Green Bazaar`,
      'Breakfast, then up the Malaya Almatinka valley',
      'The Medeu dam and its Olympic skating rink',
      'On by gondola to Shymbulak with the lift ticket',
      'A walk round the Green Bazaar and Abay Street',
      `${DAY_MARK}Day 3 · City tour and Kok Tobe`,
      'Breakfast, then a shared tour of the city',
      'The Central Market and Arbat street',
      'The President Park and the Monument of Independence',
      'Up the Kok Tobe cable car for the city at dusk',
      `${DAY_MARK}Day 4 · Almarasan National Park`,
      'Breakfast, then southwest into the Alma Arasan gorge',
      'Spruce forest and hot springs in Almarasan park',
      'The Ile Alatau ridges rising behind the valley',
      'Evening transfer back into the city',
      `${DAY_MARK}Day 5 · Almaty to Delhi`,
      'Breakfast at the hotel and check out',
      'Airport transfer and your flight Almaty to Delhi'
    ],
    accommodation: {
      name: 'Regardal Hotel, Almaty, Almaty',
      description: '4 nights · Breakfast · Standard room · 4★ · Warm city hotel with a sauna and indoor pool',
      images: [
        img('2sy36pj6sq2gdjy07mwyv2l2dl2d_61816584.jpg'),
        img('h7rdtte7v7tqd4tvp94o4iue7mpk_507265136.jpg'),
        img('f9omdcxfwnpn44j3cygh16aq4j8z_507262688.jpg'),
        img('nmpgy77qkq6eixf6ydw6cr98np3j_61816506.jpg'),
        img('pxh3gv85jiyoyd8sf20aofhx5u2i_518316136.jpg'),
        img('2ttjqkq7mhweuhmvtskhutby5mny_61816517.jpg'),
        img('kwarsty8uieohuvre9yvkw3pzsl3_507263930.jpg'),
        img('yp8k1u9iivi6gk6h4ablpf77w6ce_61816581.jpg'),
        img('ku3w19dt44dsfsuq26ikk127eikb_507262904.jpg'),
        img('2cggmgnev2bbtfk229k7smba0kd1_507263802.jpg'),
        img('ama2wp4qp1n9kxsuq8et2bpyzvar_89845212.jpg'),
        img('xj9vuiwgeiw41twzhoc2fb5nb8z5_507264126.jpg'),
        img('7zr3ehs1t7w3uxv6r0846b0hdzyy_507262872.jpg')
      ]
    },
    activities: [
      {
        name: 'Medeu rink and Shymbulak ski resort',
        day: 2,
        optional: false,
        image: img('unuv5nfboec54f5n9ampr6zjyu4b_dl.beatsnoop.com-1714742344.jpg'),
        description: 'A shared day up to the Olympic skating rink at Medeu and on by gondola to Shymbulak, with the lift ticket included.'
      },
      {
        name: 'Green Bazaar, Rakhat factory and Abay Street walk',
        day: 2,
        optional: false,
        image: img('453g1iy2hl8pokszr40by5se3ya8_dl.beatsnoop.com-UIgt70ExZk.jpg'),
        description: 'A walking tour of the Green Bazaar halls and the Rakhat chocolate shop, finishing along the cafes of Abay Street.'
      },
      {
        name: 'Almaty sightseeing tour',
        day: 3,
        optional: false,
        image: img('o24wp5vuwkui6lul4nueb4wzboea_shutterstock_2463416533.jpg'),
        description: 'A shared tour taking in the Central Market, Arbat street, the President Park and the Monument of Independence.'
      },
      {
        name: 'Kok Tobe hill and the gondola',
        day: 3,
        optional: false,
        image: img('vvl7sswynniu6efbczr7gqvd7jpk_Downpic.cc-1363512187.jpg'),
        description: 'The cable car up Kok Tobe for the whole city laid out below the mountains, with the Alley of Lovers at the top.'
      },
      {
        name: 'Almarasan National Park',
        day: 4,
        optional: false,
        image: img('edpgsj6dmlujdnuc6wtf1t510bfu_dl.beatsnoop.com-0G4juAywQ9.jpg'),
        description: 'A shared day in the Alma Arasan gorge, a forested valley of spruce and hot springs on the edge of the Ile Alatau range.'
      }
    ],
    program: {
      name: 'Almaty',
      description: 'Four nights in the old capital on a shared group basis, with Shymbulak, the Green Bazaar, Kok Tobe and the Almarasan gorge.',
      image: img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg')
    }
  }
];

const detail = {
  slug: 'almaty-winter-group-tour-with-flights',
  ctaHref: '/l/kazakhstan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Almaty Winter Group Tour with Flights',
  alt: 'Skiers on the slopes of the Shymbulak resort above Almaty',
  days: '5 days / 4 nights',
  stations: '1 stops',
  transport: 'Return flights from Delhi, group transfers and shared day tours',
  tag: 'Short trips',
  tags: ['Short trips', 'Nature'],
  price: 77900,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Almaty', 'Medeu', 'Almarasan'],
  stats: { days: 5, cities: 1, hotels: 1, activities: 5, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['4 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aisha',
    image: '/experts/riya.webp',
    role: 'Kazakhstan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'A shared group tour with the Delhi flights in it. For snow in January this is the cheapest way out of India that still feels like abroad.',
    quoteMore: 'Hire boots and a jacket at Shymbulak rather than packing your own. Almaty rates are a fraction of what the Alps charge.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five days in Almaty on a shared group basis with return flights from Delhi: the Medeu rink and Shymbulak gondola with lift ticket, a Green Bazaar and chocolate factory walk, a city tour with Kok Tobe, and a day in the Almarasan gorge.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: return flights Delhi to Almaty; 4 nights in Almaty with daily breakfast; group airport transfers; shared Medeu and Shymbulak day trip with lift ticket; Green Bazaar, Rakhat chocolate factory and Abay Street walking tour; shared Almaty sightseeing tour; shared Kok Tobe day trip; shared Almarasan National Park day trip; visa assistance.',
  intro2: 'Not included: Kazakhstan visa fees; meals beyond breakfast; tips for the driver, guide and hotel staff; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Delhi to Almaty (Arrival)', text: 'Flight Delhi to Almaty included in the price\nArrival at Almaty International and transfer to your hotel\nThe day at leisure once you have checked in\nOptional: the Palace of the Republic and Abai Square', hotel: 'Regardal Hotel, Almaty', highlights: ['Flight Delhi to Almaty included in the price', 'Arrival at Almaty International and transfer to your hotel', 'The day at leisure once you have checked in'] },
    { title: 'Day 2: Shymbulak and the Green Bazaar (B)', text: 'Breakfast, then up the Malaya Almatinka valley\nThe Medeu dam and its Olympic skating rink\nOn by gondola to Shymbulak with the lift ticket\nA walk round the Green Bazaar and Abay Street', hotel: 'Regardal Hotel, Almaty', highlights: ['Breakfast, then up the Malaya Almatinka valley', 'The Medeu dam and its Olympic skating rink', 'On by gondola to Shymbulak with the lift ticket'] },
    { title: 'Day 3: City tour and Kok Tobe (B)', text: 'Breakfast, then a shared tour of the city\nThe Central Market and Arbat street\nThe President Park and the Monument of Independence\nUp the Kok Tobe cable car for the city at dusk', hotel: 'Regardal Hotel, Almaty', highlights: ['Breakfast, then a shared tour of the city', 'The Central Market and Arbat street', 'The President Park and the Monument of Independence'] },
    { title: 'Day 4: Almarasan National Park (B)', text: 'Breakfast, then southwest into the Alma Arasan gorge\nSpruce forest and hot springs in Almarasan park\nThe Ile Alatau ridges rising behind the valley\nEvening transfer back into the city', hotel: 'Regardal Hotel, Almaty', highlights: ['Breakfast, then southwest into the Alma Arasan gorge', 'Spruce forest and hot springs in Almarasan park', 'The Ile Alatau ridges rising behind the valley'] },
    { title: 'Day 5: Almaty to Delhi (B)', text: 'Breakfast at the hotel and check out\nAirport transfer and your flight Almaty to Delhi', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Airport transfer and your flight Almaty to Delhi'] }
  ],
  outro: 'Not included: Kazakhstan visa fees; meals beyond breakfast; tips for the driver, guide and hotel staff; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Kazakhstan', href: '/asien/kazakhstan' },
  { label: detail.title }
];

export const almatyWinterGroupTourFlightsBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const almatyWinterGroupTourFlightsProduct = {
  slug: detail.slug,
  places: ['Almaty', 'Medeu', 'Almarasan'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 5,
  transfers: 9,
  meals: 4,
  price: detail.price,
  images: cardImages
};
