// Singapore Family Holiday with Universal Studios. Facts from the source itinerary, copy written fresh, INR pricing.
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
  img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
  img('sfw0sw4nhgzk0yegkil8jla98ydq_shutterstock_743903413.jpg'),
  img('eqipsys9ot9wzmt2dxq263revu7h_jr6t1rth7y5vghy5iv7hhih4jynz_East%20Lodge%20Trail%20-%20Malayan%20Tiger.webp'),
  img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    dayLabel: 'Day 1 to 5',
    images: [
      img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
      img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
      img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
      img('sfw0sw4nhgzk0yegkil8jla98ydq_shutterstock_743903413.jpg')
    ],
    dayImages: {
      1: [
        img('eqipsys9ot9wzmt2dxq263revu7h_jr6t1rth7y5vghy5iv7hhih4jynz_East%20Lodge%20Trail%20-%20Malayan%20Tiger.webp'),
        img('cgx6ab1cspd7wu0e04jze3dzbibk_singapore_night_safari.jpg'),
        img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
        img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg')
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
        img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
        img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg')
      ],
      4: [
        img('qeze4csghbtda4u7a06o23o1bk03_esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.webp'),
        img('9qh205t74nx95bmnuycnqgtu525x_Wings%20of%20Time-4.webp'),
        img('y2qvvqt7c90u5z3mqr5vzwwq8tf1_Wings%20Of%20Time11111.jpg'),
        img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg')
      ],
      5: [
        img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
        img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
        img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
        img('sfw0sw4nhgzk0yegkil8jla98ydq_shutterstock_743903413.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and the Night Safari`,
      'Arrival at Changi Airport and private sedan transfer to the Village Hotel Bugis',
      'Check in, then a swim and an early dinner at the hawker centre next door',
      'Shared transfer to Mandai for the Night Safari with a tram ride',
      'Children usually last the whole circuit, the elephants come first',
      `${DAY_MARK}Day 2 · City tour and Gardens by the Bay`,
      'Breakfast, then shared transfer for the half day city tour',
      'Merlion Park, the Helix bridge, Chinatown and the civic district',
      'Cloud Forest, Flower Dome and the Jurassic World walk at Gardens by the Bay',
      'Supertree light show in the evening, free to watch from the lawn',
      `${DAY_MARK}Day 3 · Universal Studios`,
      'Breakfast, then shared transfer to Resorts World Sentosa',
      'One day pass for Universal Studios across all seven zones',
      'Minion Land and Far Far Away for the youngest, Sci Fi City for the rest',
      'Return in your own time, the Sentosa Express runs until late',
      `${DAY_MARK}Day 4 · Sentosa and Wings of Time`,
      'Breakfast, then shared transfer to Mount Faber for the cable car',
      'Two way sky pass over the harbour with the port below',
      'Afternoon free on Siloso beach or at the Sentosa boardwalk',
      'Wings of Time after dark, water jets, lasers and fire on the beachfront',
      `${DAY_MARK}Day 5 · Departure`,
      'Breakfast and check out',
      'Private sedan transfer to Changi Airport for your flight home'
    ],
    accommodation: {
      name: 'Village Hotel Bugis by Far East Hospitality, Singapore',
      description: '4 nights · Breakfast included · Super deluxe room · 4★ · Village Hotel Bugis with a rooftop pool and Bugis MRT two minutes away',
      images: [
        img('8sr089ftinhlyhk2m1ph5rhgunfm_589451350.jpg'),
        img('2bnq97czv4ldffc2xcc46oydnm7q_32866509.jpg'),
        img('rv14n6mi77jslz5ozc1mspi1yqps_526254598.jpg'),
        img('k5gzziyiapac7wfj9f33qk07cjko_595337160.jpg'),
        img('0d3q4fcr9lyp1nnzip43a5ecpsq1_311220238.jpg'),
        img('gwfz0b3v8h239tai9b27pao4ojek_497274741.jpg'),
        img('637hxg7t4wme432y3tfhv2641tck_526255691.jpg'),
        img('vravpn5oemmo3266etjziho3prjy_595337500.jpg'),
        img('2pfuwuya040ghxyg7vrsj4f8uxx2_526254599.jpg'),
        img('qoiihj53lxws834waanlvyc3ms8y_589451350.jpg'),
        img('pew81mhbgmdkcixmrgepcjfii9dh_526255285.jpg'),
        img('l2uxhfl07ljox1o5dry487spnasw_115494746.jpg'),
        img('y8b5sas1penl7iyo6u9jxlmc50u9_311233782.jpg'),
        img('mbybu2t9oox2o8245f6jb2qqc2j3_497274741.jpg'),
        img('moig9nz5cyoxphm9jba70dh50kq5_311233782.jpg'),
        img('lsunj3uluznairk6klgj7pk7zc0m_526255291.jpg'),
        img('j11e976byi5w54hnth9w0r2foc8f_526255285.jpg'),
        img('vi89uvdo3omyqyf5632cdapb7bxy_783303174.jpg')
      ]
    },
    activities: [
      {
        name: 'Night Safari with Tram Ride',
        day: 1,
        optional: false,
        image: img('eqipsys9ot9wzmt2dxq263revu7h_jr6t1rth7y5vghy5iv7hhih4jynz_East%20Lodge%20Trail%20-%20Malayan%20Tiger.webp'),
        description: 'A tram ride through the Mandai park after dark, past elephants, rhinos and the cats that only wake at night.'
      },
      {
        name: 'Half Day Singapore City Tour',
        day: 2,
        optional: false,
        image: img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        description: 'A shared coach tour past Merlion Park, Marina Bay, the Helix bridge, Chinatown and the colonial district.'
      },
      {
        name: 'Gardens by the Bay',
        day: 2,
        optional: false,
        image: img('r79upwdrbbcqmj5txortsdh9hg5v_GBB-2.webp'),
        description: 'Cloud Forest with its indoor waterfall, the Flower Dome and a Jurassic World trail under the Supertrees.'
      },
      {
        name: 'Universal Studios Singapore',
        day: 3,
        optional: false,
        image: img('ywo4eleb1h86zh6h5e005qsm0kzs_d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.webp'),
        description: 'A full day pass with Minion Land, Far Far Away, Ancient Egypt and the Sci Fi City coasters.'
      },
      {
        name: 'Singapore Cable Car Sky Pass',
        day: 4,
        optional: false,
        image: img('qeze4csghbtda4u7a06o23o1bk03_esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.webp'),
        description: 'A two way cable car ride between Mount Faber, HarbourFront and Sentosa high above the harbour.'
      },
      {
        name: 'Wings of Time',
        day: 4,
        optional: false,
        image: img('9qh205t74nx95bmnuycnqgtu525x_Wings%20of%20Time-4.webp'),
        description: 'A night show on Siloso beach made of water screens, lasers and fire, about twenty minutes long.'
      },
      {
        name: 'Singapore Zoo',
        day: 1,
        optional: true,
        image: img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
        description: 'An open enclosure zoo at Mandai, easy to pair with the Night Safari if the children are up for a long day.'
      }
    ],
    program: {
      name: 'Theme parks and city nights',
      description: 'Four nights in Bugis with a pool for the afternoons, a wildlife evening at Mandai and a full day at Universal Studios.',
      image: img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg')
    }
  }
];

const detail = {
  slug: 'singapore-family-holiday-with-universal-studios',
  ctaHref: '/l/singapore/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Singapore Family Holiday with Universal Studios',
  alt: 'The Universal Studios globe on Sentosa island in Singapore',
  days: '5 days / 4 nights',
  stations: '1 stops',
  transport: 'Private airport transfers with shared coaches for tours and tickets',
  tag: 'Family',
  tags: ['Family', 'City break'],
  price: 53476,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Marina Bay', 'Sentosa'],
  stats: { days: 5, cities: 1, hotels: 1, activities: 6, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['6 experiences', 'Activities'],
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
    quote: 'Families do well in Bugis. Food courts, a pool, the MRT downstairs and every attraction within half an hour.',
    quoteMore: 'Start Universal Studios at opening and do the big rides first. By noon the queues double and the children are ready for the indoor shows.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five family days in Singapore. The Night Safari on arrival, a city tour and the domes at Gardens by the Bay, a full day at Universal Studios, then the Sentosa cable car and the Wings of Time show.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights at the Village Hotel Bugis with daily breakfast; Night Safari with tram ride; half day city tour; Gardens by the Bay with Cloud Forest, Flower Dome and Jurassic World; Universal Studios one day pass; two way cable car sky pass; Wings of Time; 9 private and shared transfers; visa assistance.',
  intro2: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; rides and games not named above; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and the Night Safari (Arrival)', text: 'Arrival at Changi Airport and private sedan transfer to the Village Hotel Bugis\nCheck in, then a swim and an early dinner at the hawker centre next door\nShared transfer to Mandai for the Night Safari with a tram ride\nChildren usually last the whole circuit, the elephants come first', hotel: 'Village Hotel Bugis by Far East Hospitality', highlights: ['Arrival at Changi Airport and private sedan transfer to the Village Hotel Bugis', 'Check in, then a swim and an early dinner at the hawker centre next door', 'Shared transfer to Mandai for the Night Safari with a tram ride'] },
    { title: 'Day 2: City tour and Gardens by the Bay (B)', text: 'Breakfast, then shared transfer for the half day city tour\nMerlion Park, the Helix bridge, Chinatown and the civic district\nCloud Forest, Flower Dome and the Jurassic World walk at Gardens by the Bay\nSupertree light show in the evening, free to watch from the lawn', hotel: 'Village Hotel Bugis by Far East Hospitality', highlights: ['Breakfast, then shared transfer for the half day city tour', 'Merlion Park, the Helix bridge, Chinatown and the civic district', 'Cloud Forest, Flower Dome and the Jurassic World walk at Gardens by the Bay'] },
    { title: 'Day 3: Universal Studios (B)', text: 'Breakfast, then shared transfer to Resorts World Sentosa\nOne day pass for Universal Studios across all seven zones\nMinion Land and Far Far Away for the youngest, Sci Fi City for the rest\nReturn in your own time, the Sentosa Express runs until late', hotel: 'Village Hotel Bugis by Far East Hospitality', highlights: ['Breakfast, then shared transfer to Resorts World Sentosa', 'One day pass for Universal Studios across all seven zones', 'Minion Land and Far Far Away for the youngest, Sci Fi City for the rest'] },
    { title: 'Day 4: Sentosa and Wings of Time (B)', text: 'Breakfast, then shared transfer to Mount Faber for the cable car\nTwo way sky pass over the harbour with the port below\nAfternoon free on Siloso beach or at the Sentosa boardwalk\nWings of Time after dark, water jets, lasers and fire on the beachfront', hotel: 'Village Hotel Bugis by Far East Hospitality', highlights: ['Breakfast, then shared transfer to Mount Faber for the cable car', 'Two way sky pass over the harbour with the port below', 'Afternoon free on Siloso beach or at the Sentosa boardwalk'] },
    { title: 'Day 5: Departure (B)', text: 'Breakfast and check out\nPrivate sedan transfer to Changi Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast and check out', 'Private sedan transfer to Changi Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; rides and games not named above; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Singapore', href: '/asia/singapore' },
  { label: detail.title }
];

export const singaporeFamilyUniversalStudiosBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const singaporeFamilyUniversalStudiosProduct = {
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
  activities: 6,
  transfers: 9,
  meals: 4,
  price: detail.price,
  images: cardImages
};
