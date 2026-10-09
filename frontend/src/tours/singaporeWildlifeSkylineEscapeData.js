// Singapore Wildlife and Skyline Escape. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
  img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
  img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
  img('3xb9b772fk8tq784ls9xw46bonlu_meric-dagli-RG7jGL8wkCs-unsplash.jpg'),
  img('3kicse3qojgtvpf5e4aqzvskrzu4_shutterstock_203804005.jpg'),
  img('uj4mfpnza7hzznm3ek5wzhawzdyl_shutterstock_1093285319.jpg'),
  img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg'),
  img('05dl6v4zzzs9r4hzjg41ugc2c3hc_shutterstock_135576233%20(1).jpg'),
  img('itpl36920m8zfwwwt0es64uzpwzq_shutterstock_646707235.jpg'),
  img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('3kicse3qojgtvpf5e4aqzvskrzu4_shutterstock_203804005.jpg'),
  img('ja93mi11k8a3qjumao7sknr9tfrz_Kinetic%20Rain%20Sculpture-1.webp'),
  img('n0s5r7ttlevdfrcv1di7fyxuajv7_Orchid%20Garden%20&%20Koi%20Pond-1.webp'),
  img('npd6hw5ft43gxs25w6u8rbsn5vdw_DSCF3566-750x500%20-%20Copy.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    dayLabel: 'Day 1 to 5',
    images: [
      img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
      img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg'),
      img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
      img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg')
    ],
    dayImages: {
      1: [
        img('3l5rmexqvaehkg8jluxqlpipj9k2_Butterfly%20Garden-1.webp'),
        img('n5bm55t2yhe2mbnl2956ususmjvh_The%20Wonderfall-1.webp'),
        img('ja93mi11k8a3qjumao7sknr9tfrz_Kinetic%20Rain%20Sculpture-1.webp'),
        img('n0s5r7ttlevdfrcv1di7fyxuajv7_Orchid%20Garden%20&%20Koi%20Pond-1.webp')
      ],
      2: [
        img('npd6hw5ft43gxs25w6u8rbsn5vdw_DSCF3566-750x500%20-%20Copy.jpg'),
        img('cq3qa5x90zkdf7ujwgt0nn279kq7_sri-mariamman-temple-carousel02-rect.jpg'),
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
        img('ywo4eleb1h86zh6h5e005qsm0kzs_d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.webp'),
        img('s2r4nfl80qk64lm24j05vwdt984y_VIAL1673.JPG'),
        img('9qh205t74nx95bmnuycnqgtu525x_Wings%20of%20Time-4.webp'),
        img('y2qvvqt7c90u5z3mqr5vzwwq8tf1_Wings%20Of%20Time11111.jpg')
      ],
      5: [
        img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
        img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg'),
        img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
        img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Singapore`,
      'Arrival at Changi Airport and private sedan transfer to Novena',
      'Walk through Jewel before you leave the airport if your flight lands early',
      'Check in and keep the evening light',
      'Optional: Changi Experience Studio or the Canopy Park bridges at Jewel',
      `${DAY_MARK}Day 2 · Bird Paradise and the Night Safari`,
      'Breakfast, then shared transfer out to the Mandai reserve',
      'Bird Paradise with eight walk through aviaries and the Penguin Cove',
      'Afternoon rest, then the Night Safari with its tram circuit',
      'Nocturnal houses on foot afterwards for the pangolins and civets',
      `${DAY_MARK}Day 3 · City tour, Gardens and the SkyPark`,
      'Breakfast, then shared transfer for the half day city tour',
      'Merlion Park, Marina Bay, Chinatown and the civic district',
      'Marina Bay Sands SkyPark on level 57 above the bay',
      'Floral Fantasy and the Supertree grove at Gardens by the Bay',
      `${DAY_MARK}Day 4 · Universal Studios and Wings of Time`,
      'Breakfast, then shared transfer to Resorts World Sentosa',
      'One day pass for Universal Studios across all seven zones',
      'Early evening on Siloso beach before the show',
      'Wings of Time on the beachfront, water, light and fire',
      `${DAY_MARK}Day 5 · Departure`,
      'Breakfast and check out',
      'Private sedan transfer to Changi Airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Novena, Singapore',
      description: '4 nights · Breakfast included · Standard room · 4★ · Holiday Inn Express Novena, on the MRT line and a short ride from Mandai',
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
        name: 'Bird Paradise',
        day: 2,
        optional: false,
        image: img('u9jytd8cu14e6xroayco97n7d228_5zbfkjyv2uixzq54b6f6o01exue6_e1592ea2c56ff203dfa3f532a367a026-Bird%20Paradise%202.webp'),
        description: 'Eight walk through aviaries at Mandai, from African wetlands to Amazon river birds, with keeper talks through the day.'
      },
      {
        name: 'Night Safari with Tram Ride',
        day: 2,
        optional: false,
        image: img('1wfaiw5qbbgxv8qfwthfsr7zrasf_2p1hfg3rpdci9zbqm9hkfljq3014_Downpic.cc-15918414.webp'),
        description: 'A tram circuit through the park after dark, then walking trails past the smaller nocturnal animals.'
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
        image: img('mupwnf0wfox4b1i1r24qapttn3g7_Marina%20Bay%20Skypark-5.webp'),
        description: 'The level 57 observation deck looking down on the bay, the Gardens and the towers of the business district.'
      },
      {
        name: 'Gardens by the Bay',
        day: 3,
        optional: false,
        image: img('mzbuyjgc6vgkz9bwm4w0abw1cjgm_ff-waltz2.jpg'),
        description: 'Floral Fantasy with its hanging gardens and the Supertree grove, best seen as the lights come on.'
      },
      {
        name: 'Universal Studios Singapore',
        day: 4,
        optional: false,
        image: img('ywo4eleb1h86zh6h5e005qsm0kzs_d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.webp'),
        description: 'A one day pass for the Sentosa park with coasters, stunt shows and the themed streets in between.'
      },
      {
        name: 'Wings of Time',
        day: 4,
        optional: false,
        image: img('9qh205t74nx95bmnuycnqgtu525x_Wings%20of%20Time-4.webp'),
        description: 'A short outdoor night show on Siloso beach built from water screens, lasers and pyrotechnics.'
      },
      {
        name: 'River Wonders',
        day: 2,
        optional: true,
        image: img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
        description: 'The river themed park next door at Mandai, with giant otters, manatees and a boat ride through the Amazon section.'
      }
    ],
    program: {
      name: 'Mandai, Marina Bay and Sentosa',
      description: 'Four nights in Novena with a full wildlife day at Mandai, the skyline from level 57 and a theme park day on Sentosa.',
      image: img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg')
    }
  }
];

const detail = {
  slug: 'singapore-wildlife-and-skyline-escape',
  ctaHref: '/l/singapore/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Singapore Wildlife and Skyline Escape',
  alt: 'Flamingos at the Mandai wildlife reserve in Singapore',
  days: '5 days / 4 nights',
  stations: '1 stops',
  transport: 'Private airport transfers with shared coaches for tours and tickets',
  tag: 'Nature',
  tags: ['Nature', 'Family'],
  price: 59577,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Mandai', 'Marina Bay', 'Sentosa'],
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
    quote: 'Mandai deserves a full day. Bird Paradise in the morning, a long lunch, then the Night Safari when the park cools down.',
    quoteMore: 'Carry a light poncho for Bird Paradise. The walk through aviaries are misted every afternoon and the birds are most active right after.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five days split between wildlife and the skyline. A full day at Mandai with Bird Paradise and the Night Safari, the city tour with Gardens by the Bay and the SkyPark, then Universal Studios and the Wings of Time show.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights at the Holiday Inn Express Novena with daily breakfast; Bird Paradise; Night Safari with tram ride; half day city tour; Marina Bay Sands SkyPark; Gardens by the Bay with Floral Fantasy; Universal Studios one day pass; Wings of Time; 9 private and shared transfers; visa assistance.',
  intro2: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; attractions not named above; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Singapore (Arrival)', text: 'Arrival at Changi Airport and private sedan transfer to Novena\nWalk through Jewel before you leave the airport if your flight lands early\nCheck in and keep the evening light\nOptional: Changi Experience Studio or the Canopy Park bridges at Jewel', hotel: 'Holiday Inn Express Novena', highlights: ['Arrival at Changi Airport and private sedan transfer to Novena', 'Walk through Jewel before you leave the airport if your flight lands early', 'Check in and keep the evening light'] },
    { title: 'Day 2: Bird Paradise and the Night Safari (B)', text: 'Breakfast, then shared transfer out to the Mandai reserve\nBird Paradise with eight walk through aviaries and the Penguin Cove\nAfternoon rest, then the Night Safari with its tram circuit\nNocturnal houses on foot afterwards for the pangolins and civets', hotel: 'Holiday Inn Express Novena', highlights: ['Breakfast, then shared transfer out to the Mandai reserve', 'Bird Paradise with eight walk through aviaries and the Penguin Cove', 'Afternoon rest, then the Night Safari with its tram circuit'] },
    { title: 'Day 3: City tour, Gardens and the SkyPark (B)', text: 'Breakfast, then shared transfer for the half day city tour\nMerlion Park, Marina Bay, Chinatown and the civic district\nMarina Bay Sands SkyPark on level 57 above the bay\nFloral Fantasy and the Supertree grove at Gardens by the Bay', hotel: 'Holiday Inn Express Novena', highlights: ['Breakfast, then shared transfer for the half day city tour', 'Merlion Park, Marina Bay, Chinatown and the civic district', 'Marina Bay Sands SkyPark on level 57 above the bay'] },
    { title: 'Day 4: Universal Studios and Wings of Time (B)', text: 'Breakfast, then shared transfer to Resorts World Sentosa\nOne day pass for Universal Studios across all seven zones\nEarly evening on Siloso beach before the show\nWings of Time on the beachfront, water, light and fire', hotel: 'Holiday Inn Express Novena', highlights: ['Breakfast, then shared transfer to Resorts World Sentosa', 'One day pass for Universal Studios across all seven zones', 'Early evening on Siloso beach before the show'] },
    { title: 'Day 5: Departure (B)', text: 'Breakfast and check out\nPrivate sedan transfer to Changi Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast and check out', 'Private sedan transfer to Changi Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; attractions not named above; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Singapore', href: '/asien/singapore' },
  { label: detail.title }
];

export const singaporeWildlifeSkylineEscapeBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const singaporeWildlifeSkylineEscapeProduct = {
  slug: detail.slug,
  places: ['Singapore', 'Mandai', 'Marina Bay', 'Sentosa'],
  href: `/asien/${detail.slug}`,
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
