// Singapore and Penang on Royal Caribbean. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
  img('i8dfp8u62daybjstv5wbgiq3odis_shutterstock_762759958%20(1).jpg'),
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
  img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
  img('i8dfp8u62daybjstv5wbgiq3odis_shutterstock_762759958%20(1).jpg'),
  img('ese14t6vvz3v8df8lg6p1hcz4wf0_shutterstock_1112004536.jpg'),
  img('q3f9inazj060vjr4sgmm7me05fbi_vitality-spa-woman-facial-relaxing.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    dayLabel: 'Day 1',
    images: [
      img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
      img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
      img('sfw0sw4nhgzk0yegkil8jla98ydq_shutterstock_743903413.jpg'),
      img('3xb9b772fk8tq784ls9xw46bonlu_meric-dagli-RG7jGL8wkCs-unsplash.jpg')
    ],
    dayImages: {
      1: [
        img('q3f9inazj060vjr4sgmm7me05fbi_vitality-spa-woman-facial-relaxing.jpg'),
        img('xza69plpvxv50h1acobim3xkv400_bumper-cars-sea-plex.jpg'),
        img('mmhlyrn83rgvn5pxinttsxn34bny_boardwalk-arcade-game-skee-ball-activity.jpg'),
        img('ie8r2rhycds1e6ijb2yyfj1wnw9m_explorer-of-the-seas-pool-deck-night-time-outdoor-movie.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Board at Marina Bay`,
      'Arrival at Changi Airport and private sedan transfer to the Marina Bay Cruise Centre',
      'Board your Royal Caribbean ship and find your stateroom',
      'Lunch on board, then the pool deck as Singapore falls away',
      'Optional: the spa, the arcade zone and an outdoor film under the stars'
    ],
    accommodation: {
      name: 'Royal Caribbean, Singapore',
      description: '1 night · Breakfast, lunch and dinner included · Stateroom · Royal Caribbean, sailing from the Marina Bay Cruise Centre',
      images: [
        img('k49k0zsdpf8khgul5imvi4u83gdw_shutterstock_1727765764.jpg'),
        img('mc3g2fbswjzigxx4lk0gpartku5n_shutterstock_1585338814.jpg'),
        img('g2oidxoh68s7fa2f4jsqnlqxmslj_shutterstock_2291243305.jpg'),
        img('gw1lcu1y1o7ubrhorlokbif7vbzu_shutterstock_2259058575.jpg'),
        img('r18ph1r525jxauon9l2hu1kxane0_shutterstock_2187731393.jpg')
      ]
    },
    activities: [
      {
        name: 'Spa at Sea',
        day: 1,
        optional: true,
        image: img('q3f9inazj060vjr4sgmm7me05fbi_vitality-spa-woman-facial-relaxing.jpg'),
        description: 'The ship\'s spa with saunas, a thermal suite and treatment rooms, quietest on the first afternoon.'
      },
      {
        name: 'Outdoor Movie Night',
        day: 1,
        optional: true,
        image: img('ie8r2rhycds1e6ijb2yyfj1wnw9m_explorer-of-the-seas-pool-deck-night-time-outdoor-movie.jpg'),
        description: 'A screen above the pool deck showing films after dinner, with blankets handed out when it cools.'
      }
    ],
    program: {
      name: 'Embarkation day',
      description: 'Straight from the airport to the cruise terminal, on board by the afternoon and out past the anchorage by evening.',
      image: img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Penang',
    dayLabel: 'Day 2',
    images: [
      img('i8dfp8u62daybjstv5wbgiq3odis_shutterstock_762759958%20(1).jpg')
    ],
    dayImages: {
      2: [
        img('8271ol2g9p85ig8ifc4ive3udq5k_1463650785_1024px-Penanglittleindia8.jpeg'),
        img('1hdk6rru2ium54xe8odnvo4oxfp6_1463651196_16338558662_33139549b8_b.jpg'),
        img('wryxagmgwkxszn5ub23jp0ki84xu_1463649323_penang-war-museum.jpg'),
        img('i8dfp8u62daybjstv5wbgiq3odis_shutterstock_762759958%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Ashore in Penang`,
      'Breakfast on board as the ship comes into Penang',
      'Morning ashore in George Town, a short walk from the pier',
      'Street art lanes, the clan jetties and Chulia Street food stalls',
      'Back on board by late afternoon for dinner and the evening show'
    ],
    accommodation: {
      name: 'Royal Caribbean, Penang',
      description: '1 night · Breakfast, lunch and dinner included · Stateroom · Royal Caribbean, berthed at Swettenham Pier for the day',
      images: [
        img('k49k0zsdpf8khgul5imvi4u83gdw_shutterstock_1727765764.jpg'),
        img('mc3g2fbswjzigxx4lk0gpartku5n_shutterstock_1585338814.jpg'),
        img('g2oidxoh68s7fa2f4jsqnlqxmslj_shutterstock_2291243305.jpg'),
        img('gw1lcu1y1o7ubrhorlokbif7vbzu_shutterstock_2259058575.jpg'),
        img('r18ph1r525jxauon9l2hu1kxane0_shutterstock_2187731393.jpg')
      ]
    },
    activities: [
      {
        name: 'Time Ashore in George Town',
        day: 2,
        optional: false,
        image: img('8271ol2g9p85ig8ifc4ive3udq5k_1463650785_1024px-Penanglittleindia8.jpeg'),
        description: 'A free morning in the Penang old town, with the street art lanes, the clan jetties and the Chulia Street hawkers.'
      }
    ],
    program: {
      name: 'A morning in George Town',
      description: 'The ship berths at Swettenham Pier, so the old town, the jetties and the street food are within walking distance.',
      image: img('i8dfp8u62daybjstv5wbgiq3odis_shutterstock_762759958%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'At sea',
    dayLabel: 'Day 3 to 4',
    images: [
      img('4gp8m32efnb38q8qauueycr9ylza_shutterstock_561308047.jpg'),
      img('3kicse3qojgtvpf5e4aqzvskrzu4_shutterstock_203804005.jpg'),
      img('ese14t6vvz3v8df8lg6p1hcz4wf0_shutterstock_1112004536.jpg'),
      img('uj4mfpnza7hzznm3ek5wzhawzdyl_shutterstock_1093285319.jpg')
    ],
    dayImages: {
      3: [
        img('j8klqvvqg29irq7lpzja5yeri8z6_royal-caribbean-art-collection-art-pieces.jpg'),
        img('203pos4zil592uxxrdwwux0ki2z6_wine-tasting-bottles-night-activity.jpg'),
        img('zxzjdh9q0kfxg1sfea0hkvgezd43_shutterstock_1176472411.jpg'),
        img('ugllb1vh7wqmpnxw0wr0uev4ndts_sports-court-man-boy-playing-basketball-activity.jpg')
      ],
      4: [
        img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
        img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
        img('sfw0sw4nhgzk0yegkil8jla98ydq_shutterstock_743903413.jpg'),
        img('3xb9b772fk8tq784ls9xw46bonlu_meric-dagli-RG7jGL8wkCs-unsplash.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · A day at sea`,
      'A full day at sea with all meals on board',
      'Optional: wine tasting, salsa classes and the rock climbing wall',
      'Afternoon on the sports court or at the art gallery',
      'Last dinner on board and a show in the main theatre',
      `${DAY_MARK}Day 4 · Back in port and departure`,
      'Breakfast on board and disembark at the Marina Bay Cruise Centre',
      'Private sedan transfer to Changi Airport for your flight home'
    ],
    accommodation: {
      name: 'Royal Caribbean, Singapore',
      description: '1 night · Breakfast, lunch and dinner included · Stateroom · Royal Caribbean, at sea on the way back to Singapore',
      images: [
        img('k49k0zsdpf8khgul5imvi4u83gdw_shutterstock_1727765764.jpg'),
        img('mc3g2fbswjzigxx4lk0gpartku5n_shutterstock_1585338814.jpg'),
        img('g2oidxoh68s7fa2f4jsqnlqxmslj_shutterstock_2291243305.jpg'),
        img('gw1lcu1y1o7ubrhorlokbif7vbzu_shutterstock_2259058575.jpg'),
        img('r18ph1r525jxauon9l2hu1kxane0_shutterstock_2187731393.jpg')
      ]
    },
    activities: [
      {
        name: 'Wine Tasting on Board',
        day: 3,
        optional: true,
        image: img('203pos4zil592uxxrdwwux0ki2z6_wine-tasting-bottles-night-activity.jpg'),
        description: 'A guided tasting in one of the ship\'s bars, booked on board and usually held in the late afternoon.'
      },
      {
        name: 'Rock Climbing Wall',
        day: 3,
        optional: true,
        image: img('eplab6fyp0cz48li3s6eau8thrrt_anthem-rockwall-man-climbing-day-activity.jpg'),
        description: 'The climbing wall on the upper deck, with harnesses and instructors provided through the day.'
      }
    ],
    program: {
      name: 'A day at sea and back in',
      description: 'A full sea day with the decks, the theatre and the dining rooms to yourself, then an early morning arrival in Singapore.',
      image: img('4gp8m32efnb38q8qauueycr9ylza_shutterstock_561308047.jpg')
    }
  }
];

const detail = {
  slug: 'singapore-and-penang-on-royal-caribbean',
  ctaHref: '/l/singapore/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Singapore and Penang on Royal Caribbean',
  alt: 'Royal Caribbean cruise ship at sea off the Malacca Strait',
  days: '4 days / 3 nights',
  stations: '3 stops',
  transport: 'Private airport and cruise terminal transfers',
  tag: 'Cruise',
  tags: ['Cruise', 'Luxury'],
  price: 60800,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Penang'],
  stats: { days: 4, cities: 2, hotels: 1, activities: 1, transfers: 2 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['1 experience', 'Activities'],
    ['2 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Nisha Rao',
    image: '/experts/riya.webp',
    role: 'Singapore expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'A short sailing with one port call. Three nights, every meal included and a morning ashore in Penang.',
    quoteMore: 'Go ashore early at Penang and walk George Town before the heat. The street art and the clan jetties are within twenty minutes of the pier.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Four days at sea from Singapore. Board at the Marina Bay Cruise Centre, a morning ashore in George Town on Penang, a full day at sea, then back into port with all meals included throughout.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights aboard Royal Caribbean with breakfast, lunch and dinner; the Penang port call with time ashore in George Town; private transfers between Changi Airport and the Marina Bay Cruise Centre.',
  intro2: 'Not included: international flights; visa charges; travel insurance; port charges and gratuities; shore excursions in Penang; speciality restaurants and paid activities on board; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Board at Marina Bay (L, D)', text: 'Arrival at Changi Airport and private sedan transfer to the Marina Bay Cruise Centre\nBoard your Royal Caribbean ship and find your stateroom\nLunch on board, then the pool deck as Singapore falls away\nOptional: the spa, the arcade zone and an outdoor film under the stars', hotel: 'Royal Caribbean Cruise', highlights: ['Arrival at Changi Airport and private sedan transfer to the Marina Bay Cruise Centre', 'Board your Royal Caribbean ship and find your stateroom', 'Lunch on board, then the pool deck as Singapore falls away'] },
    { title: 'Day 2: Ashore in Penang (B, L, D)', text: 'Breakfast on board as the ship comes into Penang\nMorning ashore in George Town, a short walk from the pier\nStreet art lanes, the clan jetties and Chulia Street food stalls\nBack on board by late afternoon for dinner and the evening show', hotel: 'Royal Caribbean Cruise', highlights: ['Breakfast on board as the ship comes into Penang', 'Morning ashore in George Town, a short walk from the pier', 'Street art lanes, the clan jetties and Chulia Street food stalls'] },
    { title: 'Day 3: A day at sea (B, L, D)', text: 'A full day at sea with all meals on board\nOptional: wine tasting, salsa classes and the rock climbing wall\nAfternoon on the sports court or at the art gallery\nLast dinner on board and a show in the main theatre', hotel: 'Royal Caribbean Cruise', highlights: ['A full day at sea with all meals on board', 'Optional: wine tasting, salsa classes and the rock climbing wall', 'Afternoon on the sports court or at the art gallery'] },
    { title: 'Day 4: Back in port and departure (B)', text: 'Breakfast on board and disembark at the Marina Bay Cruise Centre\nPrivate sedan transfer to Changi Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast on board and disembark at the Marina Bay Cruise Centre', 'Private sedan transfer to Changi Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; port charges and gratuities; shore excursions in Penang; speciality restaurants and paid activities on board; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Singapore', href: '/asia/singapore' },
  { label: detail.title }
];

export const singaporePenangRoyalCaribbeanBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const singaporePenangRoyalCaribbeanProduct = {
  slug: detail.slug,
  places: ['Singapore', 'Penang'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 4,
  stops: 3,
  hotels: 1,
  cities: 2,
  activities: 1,
  transfers: 2,
  meals: 9,
  price: detail.price,
  images: cardImages
};
