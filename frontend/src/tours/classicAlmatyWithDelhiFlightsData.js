// Classic Almaty with Flights from Delhi. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
  img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg'),
  img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
  img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg'),
  img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg'),
  img('vvl7sswynniu6efbczr7gqvd7jpk_Downpic.cc-1363512187.jpg'),
  img('w3dhy3jnmc8fyqi0qykmoa9j04kj_Downpic.cc-78348034.jpg'),
  img('trcgsh6zpbn7c3tqrbtr24leiybu_1618298981_546870.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Almaty',
    dayLabel: 'Day 1 to 6',
    images: [
      img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
      img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
      img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg'),
      img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg')
    ],
    dayImages: {
      1: [
        img('rbsdlpmqrfga1bptwh7jhqywl58s_shutterstock_1873578235.jpg'),
        img('hc5v8ecq194anwp7jvspf3io6mkb_d998a0de8f91053d322bb09c8999cc31.jpg'),
        img('ax2aozks96i5vt0r92ag2n6dg2j0_shutterstock_1505534291.jpg'),
        img('o3buxw5c89li0ges674n4extpqzk_Palace_of_the_Republic,_Almaty_2022.jpg')
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
        img('w3dhy3jnmc8fyqi0qykmoa9j04kj_Downpic.cc-78348034.jpg'),
        img('trcgsh6zpbn7c3tqrbtr24leiybu_1618298981_546870.jpg'),
        img('7e99ylb15o8mvs5hyaugcl3jkmde_getlstd-property-photo.jpg'),
        img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg')
      ],
      6: [
        img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
        img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
        img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg'),
        img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Delhi to Almaty`,
      'Flight Delhi to Almaty included in the price',
      'Arrival at Almaty International and transfer to your hotel',
      'Check in and the rest of the day free',
      'Optional: the stalls of the Zelyony bazaar',
      `${DAY_MARK}Day 2 · Almaty city tour`,
      'Breakfast, then a private tour of the city',
      'The Monument of Independence on Republic Square',
      'Panfilov Park and the wooden Ascension Cathedral',
      'Afternoon free along Zhibek Zholy',
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
      `${DAY_MARK}Day 5 · Lake Issyk day trip`,
      'Breakfast, then east towards the Issyk gorge',
      'The turquoise water of Lake Issyk',
      'The Saka burial mounds and the site museum',
      'Evening transfer back into Almaty',
      `${DAY_MARK}Day 6 · Almaty to Delhi`,
      'Breakfast at the hotel and check out',
      'Airport transfer and your flight Almaty to Delhi'
    ],
    accommodation: {
      name: 'Kazakhstan Hotel, Almaty',
      description: '5 nights · Breakfast · Standard room · 3★ · Landmark Soviet era tower on Dostyk Avenue',
      images: [
        img('xzkl4ji50zbn9js6o4n9lsffgp6o_16723416.jpg'),
        img('5w5d2hwa605n0s1ekka499mlwu5r_432390674.jpg'),
        img('e9dq5fq36d8h6dd6ses2359vyspv_17271827.jpg'),
        img('7md7wcshsnj1stihymdkbmo51z4q_350396872.jpg'),
        img('7ycnbbtjujtunqjausdgjajjz2ca_432390733.jpg'),
        img('qx8d3jx28l5oxsx8y52uvvrxbzcd_520400685.jpg'),
        img('l53vz21rddsmjufwa9fapklze6nu_149987077.jpg'),
        img('9czamtdjcnmmx4vrqp33celwvt25_149987075.jpg'),
        img('4w2cq5xvufr6t2x5fdx8mjud644z_149987080.jpg'),
        img('0yajous31yu1rtpj582b52n5t8mh_520402584.jpg'),
        img('91rqih3km6qg9zhcks829ktdkj84_350396868.jpg'),
        img('8lqgwh8s9lm2skela2wd0gyl3q0e_149987072.jpg')
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
      },
      {
        name: 'Lake Issyk day tour',
        day: 5,
        optional: false,
        image: img('w3dhy3jnmc8fyqi0qykmoa9j04kj_Downpic.cc-78348034.jpg'),
        description: 'A private day east to the turquoise water of Lake Issyk, with the Saka burial mounds and the small site museum nearby.'
      }
    ],
    program: {
      name: 'Almaty',
      description: 'Five nights in the old capital with the city tour, Shymbulak, the Green Bazaar, Kok Tobe and Lake Issyk, flights from Delhi included.',
      image: img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg')
    }
  }
];

const detail = {
  slug: 'classic-almaty-with-flights-from-delhi',
  ctaHref: '/l/kazakhstan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Classic Almaty with Flights from Delhi',
  alt: 'Wooden Ascension Cathedral in Panfilov Park, Almaty',
  days: '6 days / 5 nights',
  stations: '1 stops',
  transport: 'Return flights from Delhi, private transfers and private day tours',
  tag: 'City break',
  tags: ['City break', 'Nature'],
  price: 100605,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Almaty', 'Medeu', 'Lake Issyk'],
  stats: { days: 6, cities: 1, hotels: 1, activities: 5, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aisha',
    image: '/experts/riya.webp',
    role: 'Kazakhstan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Five nights, flights in the price, and every day already arranged on a private basis. It is the easiest Kazakhstan to say yes to.',
    quoteMore: 'Almaty sits at eight hundred metres and Shymbulak at over three thousand. Keep day three for later in the week so you are acclimatised.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days in Almaty with return flights from Delhi included: a private city tour, the Medeu rink and Shymbulak gondola, the Green Bazaar and Rakhat factory, the Kok Tobe cable car and a day at Lake Issyk.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: return flights Delhi to Almaty; 5 nights in Almaty with daily breakfast; private airport transfers; private Almaty city sightseeing tour; day trip to the Medeu rink and Shymbulak ski resort; Green Bazaar and Rakhat chocolate factory trip; Kok Tobe day trip; Lake Issyk day tour; local guide.',
  intro2: 'Not included: lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Delhi to Almaty (Arrival)', text: 'Flight Delhi to Almaty included in the price\nArrival at Almaty International and transfer to your hotel\nCheck in and the rest of the day free\nOptional: the stalls of the Zelyony bazaar', hotel: 'Kazakhstan Hotel', highlights: ['Flight Delhi to Almaty included in the price', 'Arrival at Almaty International and transfer to your hotel', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Almaty city tour (B)', text: 'Breakfast, then a private tour of the city\nThe Monument of Independence on Republic Square\nPanfilov Park and the wooden Ascension Cathedral\nAfternoon free along Zhibek Zholy', hotel: 'Kazakhstan Hotel', highlights: ['Breakfast, then a private tour of the city', 'The Monument of Independence on Republic Square', 'Panfilov Park and the wooden Ascension Cathedral'] },
    { title: 'Day 3: Medeu rink and Shymbulak (B)', text: 'Breakfast, then up the Malaya Almatinka valley\nThe Medeu dam and its Olympic skating rink\nOn by gondola to the Shymbulak ski resort\nSnow peaks of the Zailiysky Alatau above you', hotel: 'Kazakhstan Hotel', highlights: ['Breakfast, then up the Malaya Almatinka valley', 'The Medeu dam and its Olympic skating rink', 'On by gondola to the Shymbulak ski resort'] },
    { title: 'Day 4: Green Bazaar, chocolate and Kok Tobe (B)', text: 'Breakfast, then into the Green Bazaar halls\nHorse meat counters, dried fruit and spice stalls\nThe Rakhat chocolate factory and its shop\nUp the Kok Tobe cable car for the city at dusk', hotel: 'Kazakhstan Hotel', highlights: ['Breakfast, then into the Green Bazaar halls', 'Horse meat counters, dried fruit and spice stalls', 'The Rakhat chocolate factory and its shop'] },
    { title: 'Day 5: Lake Issyk day trip (B)', text: 'Breakfast, then east towards the Issyk gorge\nThe turquoise water of Lake Issyk\nThe Saka burial mounds and the site museum\nEvening transfer back into Almaty', hotel: 'Kazakhstan Hotel', highlights: ['Breakfast, then east towards the Issyk gorge', 'The turquoise water of Lake Issyk', 'The Saka burial mounds and the site museum'] },
    { title: 'Day 6: Almaty to Delhi (B)', text: 'Breakfast at the hotel and check out\nAirport transfer and your flight Almaty to Delhi', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Airport transfer and your flight Almaty to Delhi'] }
  ],
  outro: 'Not included: lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Kazakhstan', href: '/asien/kazakhstan' },
  { label: detail.title }
];

export const classicAlmatyWithDelhiFlightsBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const classicAlmatyWithDelhiFlightsProduct = {
  slug: detail.slug,
  places: ['Almaty', 'Medeu', 'Lake Issyk'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 5,
  transfers: 8,
  meals: 5,
  price: detail.price,
  images: cardImages
};
