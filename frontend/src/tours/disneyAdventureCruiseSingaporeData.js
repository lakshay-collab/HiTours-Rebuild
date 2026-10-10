// Disney Adventure Cruise from Singapore. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
  img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
  img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
  img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
  img('3xb9b772fk8tq784ls9xw46bonlu_meric-dagli-RG7jGL8wkCs-unsplash.jpg'),
  img('3kicse3qojgtvpf5e4aqzvskrzu4_shutterstock_203804005.jpg'),
  img('uj4mfpnza7hzznm3ek5wzhawzdyl_shutterstock_1093285319.jpg'),
  img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg'),
  img('05dl6v4zzzs9r4hzjg41ugc2c3hc_shutterstock_135576233%20(1).jpg'),
  img('itpl36920m8zfwwwt0es64uzpwzq_shutterstock_646707235.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('itpl36920m8zfwwwt0es64uzpwzq_shutterstock_646707235.jpg'),
  img('mgl23wwvn518fu0w3nfiw31hjd9b_DCL-DA-Themed%20Area%20(Disney%20Discovery%20Reef).png'),
  img('b77hwdhxvhrjaxffkh31b2ynuhyh_DCL-DA%20(Main%20Dining%20-%20Animators%20Palate).png'),
  img('ooqyy9o772jcixkp8s4v2fz7gmi1_IMG_0104.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Disney Adventure',
    dayLabel: 'Day 1 to 4',
    images: [
      img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
      img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg'),
      img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
      img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg')
    ],
    dayImages: {
      1: [
        img('mgl23wwvn518fu0w3nfiw31hjd9b_DCL-DA-Themed%20Area%20(Disney%20Discovery%20Reef).png'),
        img('b77hwdhxvhrjaxffkh31b2ynuhyh_DCL-DA%20(Main%20Dining%20-%20Animators%20Palate).png'),
        img('ooqyy9o772jcixkp8s4v2fz7gmi1_IMG_0104.jpg'),
        img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg')
      ],
      2: [
        img('a6njsjemndtjfm0ia7b8uihfchda_DCL-DA-Themed%20Area%20(Marvel%20Landing).png'),
        img('0zf1lh957gopcep652su637hmz2e_DCL-DA-Themed%20Area%20(Toy%20Story%20Place).png'),
        img('0u2so5bb2yyalgayloymdt2ad0ir_DCL-DA-Themed%20Area%20(Wayfinder%20Bay).png'),
        img('8gjhz8vj2k7rndhgp9d2050n5q8z_DCL-DA_Entertainment%20(Avengers%20Assemble%20).jpg')
      ],
      3: [
        img('bh13gdcx1z8nzf14a9pn2625x26c_Oceaneers-Club-16x9.webp'),
        img('2nmlt813yvtijh5kxclzi453woec_DCL-DA_Spa%20(1)%20(1).jpg'),
        img('t40ctt8kydsx4an7ws3cu93oszqc_DCL-DA-Themed%20Area%20(San%20Fransokyo%20Street).jpg'),
        img('td5rezksim20yngj5n85mp5cyv4s_Disney%20Imagination%20Garden-1.jpg')
      ],
      4: [
        img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
        img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg'),
        img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
        img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Board the Disney Adventure`,
      'Arrival at Changi Airport and private sedan transfer to the cruise terminal',
      'Board the Disney Adventure and settle into your inside stateroom',
      'Lunch on board, then the first walk through the themed zones',
      'Dinner at the Animators Palette and a film under the stars',
      `${DAY_MARK}Day 2 · A day of rides and shows`,
      'Breakfast on board, then the Ironcycle test run for the older children',
      'Toy Story Palace and WayFinder Bay through the morning',
      'Marvel Landing in the afternoon with character meetings',
      'An evening show at the Walt Disney Theatre',
      `${DAY_MARK}Day 3 · Characters, clubs and the spa`,
      'Breakfast on board and a slower morning',
      'Oceaneer Club sessions for the children while the adults take the Rainforest spa',
      'San Fransokyo Street and the Imagination Garden after lunch',
      'The Avengers deck show in the evening',
      `${DAY_MARK}Day 4 · Back in port and departure`,
      'Breakfast on board and disembark at the cruise terminal',
      'Private sedan transfer to Changi Airport for your flight home'
    ],
    accommodation: {
      name: 'Disney Adventure, Singapore',
      description: '3 nights · Breakfast, lunch and dinner included · Inside stateroom · Disney Adventure, sailing from Singapore',
      images: [
        img('ympigrrcrezrniy32n8z8x2081vv_pixelcut-export%20(1).jpeg'),
        img('gdly56bqsrkwe51b48rjonery73h_11A-Frozen-Couches-16x9.jpg'),
        img('vvx74z3swyz19uvxjxpqli4myq0x_10B10C10D-Mermaid-Deluxe-Inside-Stateroom-SittingArea-for-release-16x9.jpg'),
        img('6mryvuy1k7p632bhrltqgqjdi6gf_5A5B5C6A6B6C6D8A10B10C10D-Mermaid-SplitBathroom-16x9.jpg'),
        img('0zz2106beuuvl6wtlxcerz65xrub_11A-Frozen-MAIN-IMAGE-16x9.jpg')
      ]
    },
    activities: [
      {
        name: 'Disney Immersive Zones',
        day: 1,
        optional: false,
        image: img('mgl23wwvn518fu0w3nfiw31hjd9b_DCL-DA-Themed%20Area%20(Disney%20Discovery%20Reef).png'),
        description: 'Seven themed districts across the decks, from Disney classics to Pixar and Marvel, open to every guest on board.'
      },
      {
        name: 'Shows at the Walt Disney Theatre',
        day: 2,
        optional: false,
        image: img('8gjhz8vj2k7rndhgp9d2050n5q8z_DCL-DA_Entertainment%20(Avengers%20Assemble%20).jpg'),
        description: 'Full stage productions with live orchestra in the ship\'s main theatre, a different show each evening.'
      },
      {
        name: 'Avengers Assemble Show',
        day: 3,
        optional: false,
        image: img('m0hxye0x71teyuvc622t7aej1yc6_Avengers%20Assemble%20Show-1.jpg'),
        description: 'A stunt and effects show on the open deck built around the Marvel characters, staged after sunset.'
      },
      {
        name: 'Oceaneer Club',
        day: 3,
        optional: true,
        image: img('bh13gdcx1z8nzf14a9pn2625x26c_Oceaneers-Club-16x9.webp'),
        description: 'Supervised play spaces split by age, with themed sessions, crafts and games through the day.'
      },
      {
        name: 'Rainforest Spa',
        day: 3,
        optional: true,
        image: img('2nmlt813yvtijh5kxclzi453woec_DCL-DA_Spa%20(1)%20(1).jpg'),
        description: 'Heated loungers, steam rooms and treatment cabins for the adults, booked on board.'
      }
    ],
    program: {
      name: 'Three nights of Disney at sea',
      description: 'Themed zones from Toy Story to Marvel, theatre shows every evening, kids clubs by age group and all main meals in the fare.',
      image: img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg')
    }
  }
];

const detail = {
  slug: 'disney-adventure-cruise-from-singapore',
  ctaHref: '/l/singapore/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Disney Adventure Cruise from Singapore',
  alt: 'Family cruise ship sailing out of Singapore at sunset',
  days: '4 days / 3 nights',
  stations: '1 stops',
  transport: 'Private airport and cruise terminal transfers',
  tag: 'Cruise',
  tags: ['Cruise', 'Family'],
  price: 61512,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore'],
  stats: { days: 4, cities: 1, hotels: 1, activities: 3, transfers: 2 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['3 experiences', 'Activities'],
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
    quote: 'Children stop asking what is next on this one. Everything is on board and all of it is included in the fare.',
    quoteMore: 'Register the children at the Oceaneer Club on the first afternoon. Slots for the themed sessions fill up fast once the ship sails.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Four days on the Disney Adventure out of Singapore. Three nights in an inside stateroom with every meal included, themed zones across the decks, shows at the Walt Disney Theatre and character meetings through the day.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights aboard the Disney Adventure in an inside stateroom with breakfast, lunch and dinner; the themed immersive zones; shows at the Walt Disney Theatre; the Avengers deck show; private transfers between Changi Airport and the cruise terminal.',
  intro2: 'Not included: international flights; visa charges; travel insurance; port charges and gratuities; speciality dining, the spa and paid activities on board; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Board the Disney Adventure (L, D)', text: 'Arrival at Changi Airport and private sedan transfer to the cruise terminal\nBoard the Disney Adventure and settle into your inside stateroom\nLunch on board, then the first walk through the themed zones\nDinner at the Animators Palette and a film under the stars', hotel: 'Disney Adventure', highlights: ['Arrival at Changi Airport and private sedan transfer to the cruise terminal', 'Board the Disney Adventure and settle into your inside stateroom', 'Lunch on board, then the first walk through the themed zones'] },
    { title: 'Day 2: A day of rides and shows (B, L, D)', text: 'Breakfast on board, then the Ironcycle test run for the older children\nToy Story Palace and WayFinder Bay through the morning\nMarvel Landing in the afternoon with character meetings\nAn evening show at the Walt Disney Theatre', hotel: 'Disney Adventure', highlights: ['Breakfast on board, then the Ironcycle test run for the older children', 'Toy Story Palace and WayFinder Bay through the morning', 'Marvel Landing in the afternoon with character meetings'] },
    { title: 'Day 3: Characters, clubs and the spa (B, L, D)', text: 'Breakfast on board and a slower morning\nOceaneer Club sessions for the children while the adults take the Rainforest spa\nSan Fransokyo Street and the Imagination Garden after lunch\nThe Avengers deck show in the evening', hotel: 'Disney Adventure', highlights: ['Breakfast on board and a slower morning', 'Oceaneer Club sessions for the children while the adults take the Rainforest spa', 'San Fransokyo Street and the Imagination Garden after lunch'] },
    { title: 'Day 4: Back in port and departure (B)', text: 'Breakfast on board and disembark at the cruise terminal\nPrivate sedan transfer to Changi Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast on board and disembark at the cruise terminal', 'Private sedan transfer to Changi Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; port charges and gratuities; speciality dining, the spa and paid activities on board; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Singapore', href: '/asia/singapore' },
  { label: detail.title }
];

export const disneyAdventureCruiseSingaporeBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const disneyAdventureCruiseSingaporeProduct = {
  slug: detail.slug,
  places: ['Singapore'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 4,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 3,
  transfers: 2,
  meals: 9,
  price: detail.price,
  images: cardImages
};
