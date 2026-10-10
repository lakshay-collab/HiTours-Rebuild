// Glimpse of Vietnam in Hanoi. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
  img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
  img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
  img('zv1gcf0zxn8h92yt1vcjn8cn04c0_1613631767_shutterstock_449720002.jpg'),
  img('hw2qh1ogo8ea79v94qork3oe93e2_1467715654_311336200_3680af30d5_o.jpg'),
  img('xobo05epyrnuy77vlk7ujy36k4vh_1484035807_Quan-Su-pagoda.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    dayLabel: 'Day 1 to 4',
    images: [
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
    ],
    dayImages: {
      1: [
        img('zv1gcf0zxn8h92yt1vcjn8cn04c0_1613631767_shutterstock_449720002.jpg'),
        img('hw2qh1ogo8ea79v94qork3oe93e2_1467715654_311336200_3680af30d5_o.jpg'),
        img('xobo05epyrnuy77vlk7ujy36k4vh_1484035807_Quan-Su-pagoda.jpg'),
        img('lslm13n5whgajipf2z9iin426acu_1467714747_4064223805_d92a0c371b_o.jpg')
      ],
      2: [
        img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg')
      ],
      3: [
        img('cpvs34mpdp6fwdfxwv50ctuec38u_1467719114_9578411741_165f3caca2_o.jpg'),
        img('vvbtwejb39a54bvntsgz5ox7jgb7_1484035814_dam_da_0.jpg'),
        img('skmwlj0x98xxtq508s7d1lzfz8ge_1467720106_8407458119_4ec3e3d681_o.jpg'),
        img('ywhroly3j07pn5zf8hl0vjf3t3lq_1467718480_26246665151_80cc765032_o.jpg')
      ],
      4: [
        img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
        img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
        img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hanoi`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'Check in at your hotel in the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake',
      `${DAY_MARK}Day 2 · Hanoi city tour`,
      'Breakfast, then a guided half day of the city',
      'The Ho Chi Minh mausoleum and the one pillar pagoda',
      'The Temple of Literature, the old university',
      'Afternoon free in the old quarter',
      `${DAY_MARK}Day 3 · A free day in Hanoi`,
      'Breakfast, then a day of your own in Hanoi',
      'Optional: the water puppet theatre near the lake',
      'Optional: egg coffee in one of the old cafes',
      'Optional: a cooking class or a street food walk',
      `${DAY_MARK}Day 4 · Departure from Hanoi`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Mayflower Hotel Hanoi, Hanoi',
      description: '3 nights · Breakfast · Standard room · 3★ · Small hotel in the old quarter, a short walk from Hoan Kiem lake',
      images: [
        img('4jayklv7s1vohkrjzomga79wiat9_may-flower-hotel%20(1).png'),
        img('etfrhnsjuud87ns3q5dsg6ex2z3a_hotel-restaurant.png'),
        img('xqj05vg3i6z4diuskdmkgzqdi950_142877758.png'),
        img('rozy0zoaathvylodx43yecox7gm6_deluxe-twin-room-mayflower.png'),
        img('x7jxl9pam6kv98uw09y4saiz75bw_08c59ff1.png'),
        img('fgn7t5spj3efjj4ge2sj4ebp83ir_may-flower-hotel%20(3).png'),
        img('p6lcdfd5locwy559guql52cao140_may-flower-hotel%20(2).png')
      ]
    },
    activities: [
      {
        name: 'Hanoi half day city tour',
        day: 2,
        optional: false,
        image: img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        description: 'The Ho Chi Minh mausoleum and the one pillar pagoda, the Temple of Literature and the lanes of the old quarter with a guide.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Three nights in the old quarter with a guided half day of the city and two days of your own.',
      image: img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
    }
  }
];

const detail = {
  slug: 'glimpse-of-vietnam-in-hanoi',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Glimpse of Vietnam in Hanoi',
  alt: 'Hoan Kiem lake and the red bridge in Hanoi, Vietnam',
  days: '4 days / 3 nights',
  stations: '1 stops',
  transport: 'Private airport transfers and a guided half day tour',
  tag: 'Short break',
  tags: ['Short break', 'Culture'],
  price: 30685,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi'],
  stats: { days: 4, cities: 1, hotels: 1, activities: 1, transfers: 4 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['1 experience', 'Activities'],
    ['4 transfers', 'Transport'],
    ['3 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Four days is enough for Hanoi if you treat it as a city break rather than a tour of the country.',
    quoteMore: 'Eat where the plastic stools are. The best bun cha in the old quarter is served from a doorway, not a dining room.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A short city break: three nights in the Hanoi old quarter with a guided half day of the mausoleum, the one pillar pagoda and the Temple of Literature, and two free days for the lanes, the lake and the food.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights with daily breakfast; private airport transfers; a guided half day tour of Hanoi.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Mayflower Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Hanoi city tour (B)', text: 'Breakfast, then a guided half day of the city\nThe Ho Chi Minh mausoleum and the one pillar pagoda\nThe Temple of Literature, the old university\nAfternoon free in the old quarter', hotel: 'Mayflower Hotel Hanoi', highlights: ['Breakfast, then a guided half day of the city', 'The Ho Chi Minh mausoleum and the one pillar pagoda', 'The Temple of Literature, the old university'] },
    { title: 'Day 3: A free day in Hanoi (B)', text: 'Breakfast, then a day of your own in Hanoi\nOptional: the water puppet theatre near the lake\nOptional: egg coffee in one of the old cafes\nOptional: a cooking class or a street food walk', hotel: 'Mayflower Hotel Hanoi', highlights: ['Breakfast, then a day of your own in Hanoi', 'Optional: the water puppet theatre near the lake', 'Optional: egg coffee in one of the old cafes'] },
    { title: 'Day 4: Departure from Hanoi (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const glimpseOfVietnamHanoiBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const glimpseOfVietnamHanoiProduct = {
  slug: detail.slug,
  places: ['Hanoi'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 4,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 1,
  transfers: 4,
  meals: 3,
  price: detail.price,
  images: cardImages
};
