// Almaty Highlights with Flights from Delhi. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
  img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
  img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg'),
  img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg'),
  img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('5h5u94h4z8xxbivqnio2exnkgdik_1598864076_Arbat_Street.jpg'),
  img('zgpj6nuef08k5iw6c541cvhi1zqu_Downpic.cc-1313157897.jpg'),
  img('37dgpyh36gtvjafrtmkn5jylxyt3_Downpic.cc-172999739.jpg'),
  img('3zw7eayhe7zqmhe4u76jo3iio0ux_ascension-cathedral-almaty-kazakhstan-2.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Almaty',
    dayLabel: 'Day 1 to 5',
    images: [
      img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
      img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
      img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
      img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg')
    ],
    dayImages: {
      1: [
        img('5h5u94h4z8xxbivqnio2exnkgdik_1598864076_Arbat_Street.jpg'),
        img('zgpj6nuef08k5iw6c541cvhi1zqu_Downpic.cc-1313157897.jpg'),
        img('37dgpyh36gtvjafrtmkn5jylxyt3_Downpic.cc-172999739.jpg'),
        img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg')
      ],
      2: [
        img('elvqtnsme6ctj6hi54h99ufvu092_dl.beatsnoop.com-1714737499.jpg'),
        img('sen8qo3cxac4ddexlpcw7m93m9pq_monument-of-independence-almaty.jpg'),
        img('x5107z3hn22853u89owu0rrfahox_28panfilov-guardsmen1.png'),
        img('3zw7eayhe7zqmhe4u76jo3iio0ux_ascension-cathedral-almaty-kazakhstan-2.jpg')
      ],
      3: [
        img('unuv5nfboec54f5n9ampr6zjyu4b_dl.beatsnoop.com-1714742344.jpg'),
        img('koghfpteo1o0tvkakl3yhx0ekrl9_compressed-Cable-Car-from-Shymbulak-Ski-Resort-Almaty-Kazakhsthan-min-min.jpeg'),
        img('vrjnt8wwvr78tk7y6bjhxab6pm7x_Medeu-_4.jpg'),
        img('jxnmhh6hckt5134tfufe4svyclqb_19134248232_df028bebc8_o.jpg')
      ],
      4: [
        img('4i8g0lsj7q0pu5oaj873z2vjpmws_2023-03-30.jpg'),
        img('5m0alch5zf4q58f56zswg1orb2tp_shutterstock_2417179599.jpg'),
        img('c22ssqsccdxlwhwzv5arxpli5qa3_44803342642_bcc3abea6e_b.jpg'),
        img('vvl7sswynniu6efbczr7gqvd7jpk_Downpic.cc-1363512187.jpg')
      ],
      5: [
        img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
        img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
        img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
        img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Delhi to Almaty`,
      'Flight Delhi to Almaty included in the price',
      'Arrival at Almaty International and transfer to your hotel',
      'The day at leisure once you have checked in',
      'Optional: Arbat street and the Kazakh State Circus',
      `${DAY_MARK}Day 2 · Almaty city tour`,
      'Breakfast, then a private tour of the city',
      'The Monument of Independence on Republic Square',
      'Panfilov Park and the wooden Ascension Cathedral',
      'A look round the Zelyony bazaar before dinner',
      `${DAY_MARK}Day 3 · Medeu rink and Shymbulak`,
      'Breakfast, then up the Malaya Almatinka valley',
      'The Medeu dam and its Olympic skating rink',
      'On by gondola to the Shymbulak ski resort',
      'Snow peaks of the Zailiysky Alatau above you',
      `${DAY_MARK}Day 4 · Green Bazaar, chocolate and Kok Tobe`,
      'Breakfast, then into the Green Bazaar halls',
      'Horse meat counters, dried fruit and spice stalls',
      'The Rakhat chocolate factory and its shop',
      'Up the Kok Tobe cable car for the city at dusk',
      `${DAY_MARK}Day 5 · Almaty to Delhi`,
      'Breakfast at the hotel and check out',
      'Airport transfer and your flight Almaty to Delhi'
    ],
    accommodation: {
      name: 'Astana International Hotel, Almaty',
      description: '4 nights · Breakfast · Standard room · 3★ · Long standing city hotel close to Republic Square',
      images: [
        img('0wg444qh81ppuk0exvvteedwk414_download%20-%202024-05-03T123959.847.jpg'),
        img('405j4hf3pvzwcon3x4p0vttvn757_download%20-%202024-05-03T122402.593.jpg'),
        img('j4iozddskot1ky4ri7n458k3u65g_download%20-%202024-05-03T122433.325.jpg'),
        img('wn5x4egjq9k99ryhqf3b9gucp0u5_download%20-%202024-05-03T122624.037.jpg'),
        img('5rgcxx76ns5mli0pxhy27db19wq5_download%20-%202024-05-03T122443.183.jpg'),
        img('jdg5if1pswzyacg5e8vtw7tzyl1h_download%20-%202024-05-03T122421.244.jpg'),
        img('m6pfjdmmp2wff9x54atxojkamx6k_download%20-%202024-05-03T122454.054.jpg'),
        img('9l23klzv8h01fatv0ckro0up7kk8_download%20-%202024-05-03T122340.939.jpg'),
        img('a35vbgqn6raiam1huf5h0hp6t2sk_download%20-%202024-05-03T122413.210.jpg'),
        img('t739w0qygqhwauh80b18xie8zdj6_download%20-%202024-05-03T122256.595.jpg'),
        img('zob9t4s9k9vyjaujtw3zgwlg3mvi_download%20-%202024-05-03T122246.858.jpg'),
        img('olpntlkef85m6g14mj479rvdnmrb_download%20-%202024-05-03T122349.630.jpg'),
        img('075wjystd82wqggccqm6sq3kglae_download%20-%202024-05-03T122234.015.jpg')
      ]
    },
    activities: [
      {
        name: 'Almaty city sightseeing tour',
        day: 2,
        optional: false,
        image: img('elvqtnsme6ctj6hi54h99ufvu092_dl.beatsnoop.com-1714737499.jpg'),
        description: 'A private tour of the old capital, taking in the Monument of Independence, Panfilov Park and the wooden Ascension Cathedral.'
      },
      {
        name: 'Medeu rink and Shymbulak ski resort',
        day: 3,
        optional: false,
        image: img('unuv5nfboec54f5n9ampr6zjyu4b_dl.beatsnoop.com-1714742344.jpg'),
        description: 'A day up the Malaya Almatinka valley to the Olympic skating rink at Medeu, then by gondola to the Shymbulak slopes.'
      },
      {
        name: 'Green Bazaar and the Rakhat chocolate factory',
        day: 4,
        optional: false,
        image: img('4i8g0lsj7q0pu5oaj873z2vjpmws_2023-03-30.jpg'),
        description: 'The spice and dried fruit halls of the Green Bazaar, then the Rakhat factory whose chocolate every Kazakh family grew up on.'
      },
      {
        name: 'Kok Tobe hill and the gondola',
        day: 4,
        optional: false,
        image: img('vvl7sswynniu6efbczr7gqvd7jpk_Downpic.cc-1363512187.jpg'),
        description: 'The cable car up Kok Tobe for the whole city laid out below the mountains, with the Alley of Lovers at the top.'
      }
    ],
    program: {
      name: 'Almaty',
      description: 'Four nights in the old capital with the city tour, the Shymbulak gondola, the Green Bazaar and the Kok Tobe cable car.',
      image: img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg')
    }
  }
];

const detail = {
  slug: 'almaty-highlights-with-flights-from-delhi',
  ctaHref: '/l/kazakhstan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Almaty Highlights with Flights from Delhi',
  alt: 'Alley of Lovers on Kok Tobe hill above Almaty',
  days: '5 days / 4 nights',
  stations: '1 stops',
  transport: 'Return flights from Delhi, private transfers and private day tours',
  tag: 'Short trips',
  tags: ['Short trips', 'City break'],
  price: 90725,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Almaty', 'Kok Tobe'],
  stats: { days: 5, cities: 1, hotels: 1, activities: 4, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['4 experiences', 'Activities'],
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
    quote: 'A long weekend with the flights already in it. Four nights is enough to feel you have been somewhere genuinely different.',
    quoteMore: 'A litre of water a day comes with the package. Take it, because the mountain air at Shymbulak is dry and catches most people out.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five days in Almaty with return flights from Delhi included: a private city tour, the Olympic rink at Medeu with the Shymbulak gondola, and the Green Bazaar, Rakhat chocolate factory and Kok Tobe cable car.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: return flights Delhi to Almaty; 4 nights in Almaty with daily breakfast; private airport transfers; private Almaty city sightseeing tour; day trip to the Medeu rink and Shymbulak ski resort; Green Bazaar and Rakhat chocolate factory trip; Kok Tobe day trip; a litre of bottled water a day; local guide; visa assistance.',
  intro2: 'Not included: Kazakhstan visa fees; lunches and dinners; travel insurance; extra use of the vehicle; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Delhi to Almaty (Arrival)', text: 'Flight Delhi to Almaty included in the price\nArrival at Almaty International and transfer to your hotel\nThe day at leisure once you have checked in\nOptional: Arbat street and the Kazakh State Circus', hotel: 'Astana International Hotel', highlights: ['Flight Delhi to Almaty included in the price', 'Arrival at Almaty International and transfer to your hotel', 'The day at leisure once you have checked in'] },
    { title: 'Day 2: Almaty city tour (B)', text: 'Breakfast, then a private tour of the city\nThe Monument of Independence on Republic Square\nPanfilov Park and the wooden Ascension Cathedral\nA look round the Zelyony bazaar before dinner', hotel: 'Astana International Hotel', highlights: ['Breakfast, then a private tour of the city', 'The Monument of Independence on Republic Square', 'Panfilov Park and the wooden Ascension Cathedral'] },
    { title: 'Day 3: Medeu rink and Shymbulak (B)', text: 'Breakfast, then up the Malaya Almatinka valley\nThe Medeu dam and its Olympic skating rink\nOn by gondola to the Shymbulak ski resort\nSnow peaks of the Zailiysky Alatau above you', hotel: 'Astana International Hotel', highlights: ['Breakfast, then up the Malaya Almatinka valley', 'The Medeu dam and its Olympic skating rink', 'On by gondola to the Shymbulak ski resort'] },
    { title: 'Day 4: Green Bazaar, chocolate and Kok Tobe (B)', text: 'Breakfast, then into the Green Bazaar halls\nHorse meat counters, dried fruit and spice stalls\nThe Rakhat chocolate factory and its shop\nUp the Kok Tobe cable car for the city at dusk', hotel: 'Astana International Hotel', highlights: ['Breakfast, then into the Green Bazaar halls', 'Horse meat counters, dried fruit and spice stalls', 'The Rakhat chocolate factory and its shop'] },
    { title: 'Day 5: Almaty to Delhi (B)', text: 'Breakfast at the hotel and check out\nAirport transfer and your flight Almaty to Delhi', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Airport transfer and your flight Almaty to Delhi'] }
  ],
  outro: 'Not included: Kazakhstan visa fees; lunches and dinners; travel insurance; extra use of the vehicle; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Kazakhstan', href: '/asia/kazakhstan' },
  { label: detail.title }
];

export const almatyHighlightsWithDelhiFlightsBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const almatyHighlightsWithDelhiFlightsProduct = {
  slug: detail.slug,
  places: ['Almaty', 'Kok Tobe'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 4,
  transfers: 9,
  meals: 4,
  price: detail.price,
  images: cardImages
};
