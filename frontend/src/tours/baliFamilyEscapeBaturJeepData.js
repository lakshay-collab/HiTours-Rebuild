// Bali Family Escape with Mount Batur Jeep. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('4ccbcv4u7v4jzlazowggkgkjlomz_Bedugul-3.jpg'),
  img('x7ihmxsmcxo1ds6acpzc3vxyr4x5_shutterstock_1179917983.jpg'),
  img('27vmc3i1e6jfu0g7gfxmmoawg7o2_Bedugul-2.jpg'),
  img('bfd9i7vnfl0rfpza6aodswecrybt_shutterstock_524421913.jpg'),
  img('n11wn15k976zk4guzejyz8wykl4k_Bedugul-1.jpg'),
  img('sp71g4gjrrcnxd24gznzr7ejpldf_Seminyak-Beach-Umbrellas-Tile-Image.jpg'),
  img('ni2vsnbwe3rqwxohjdor002i2nha_shutterstock_559730524.jpg'),
  img('28l0mtv3v8g1z78gnzjsxjx0zbhd_shutterstock_1346345108.jpg'),
  img('y62r8ggt0rho68aopabqyheu469s_shutterstock_620692622.jpg'),
  img('qzqg7qbx8pq33i7so7acy1c8d9c8_shutterstock_1346342258.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Bedugul',
    subtitle: 'Bedugul to Mount Batur',
    dayLabel: 'Day 1 to 2',
    images: [
      img('4ccbcv4u7v4jzlazowggkgkjlomz_Bedugul-3.jpg'),
      img('27vmc3i1e6jfu0g7gfxmmoawg7o2_Bedugul-2.jpg'),
      img('n11wn15k976zk4guzejyz8wykl4k_Bedugul-1.jpg')
    ],
    dayImages: {
      1: [
        img('yypn4ifqplle2k6xycas2byxrje8_The-beautiful-looks-of-Ulun-Danu-temple-at-Beratan-lakeside-in-Bedugul-highland-Buleleng-regency-Bali-island-Bali-Hello-Travel-21.jpg'),
        img('sv46d4k4ptuwymzm8glrch2taeyj_1498891116_botanicalgarden.jpg'),
        img('4ccbcv4u7v4jzlazowggkgkjlomz_Bedugul-3.jpg'),
        img('27vmc3i1e6jfu0g7gfxmmoawg7o2_Bedugul-2.jpg')
      ],
      2: [
        img('yvosa32byiuuv3uuy24bizexm13i_Batur-4.jpg'),
        img('yx9uedsyf0x9qg3xk4d8v711tcfz_Mount%20Batur%201.jpg'),
        img('ww0ew1hzw2vypimkh7auis5nap0w_shutterstock_2282319959.jpg'),
        img('2lqubqpwc7pgzj7podybztx47o8g_k1pjs1b8l54axfq37sc0s10so5j1_shutterstock_132434978.webp')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Bedugul`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at the hill resort beside the Handara gate',
      'Rest of the day free on the resort grounds',
      'Optional: the strawberry farms and lake viewpoints nearby',
      `${DAY_MARK}Day 2 · Mount Batur jeep sunrise`,
      'Very early jeep ride up the lava slopes of Mount Batur',
      'Sunrise over the caldera and the lake',
      'Back at the resort for a late breakfast',
      'An hour of Balinese massage at the resort spa'
    ],
    accommodation: {
      name: 'Handara Golf & Resort Bali, Bedugul',
      description: '2 nights · Breakfast · Standard room · 4★ · Hill resort beside the Handara gate, cool evenings and a golf course',
      images: [
        img('g6fbtnu015ogm27mimmrp14tf580_669842241.jpg'),
        img('ji86x895w76g3gtiu04h8llzdr8m_669842179.jpg'),
        img('3se3ogk4xn39jpy3tc9n3xym4ofz_669841937.jpg'),
        img('n2m6lh4rw0nmyuth1z24sg97eapz_669841905.jpg'),
        img('o1hir041xjxmf4rpbvcmmsvjv7zb_669841839.jpg'),
        img('s2em3weaskwj74jp9cfi4apex13h_423248468.jpg'),
        img('n4zoi1bjo08ymp2tg5jyoexe0ymh_669842136.jpg')
      ]
    },
    activities: [
      {
        name: 'Mount Batur sunrise by jeep',
        day: 2,
        optional: false,
        image: img('yvosa32byiuuv3uuy24bizexm13i_Batur-4.jpg'),
        description: 'A four wheel drive up the volcano in the dark for sunrise on the black lava field, easy enough for children who cannot trek.'
      },
      {
        name: 'Balinese massage',
        day: 2,
        optional: false,
        image: img('2lqubqpwc7pgzj7podybztx47o8g_k1pjs1b8l54axfq37sc0s10so5j1_shutterstock_132434978.webp'),
        description: 'An hour of traditional Balinese massage at the resort spa after the early start, warm oil and long pressure strokes.'
      }
    ],
    program: {
      name: 'Bedugul',
      description: 'Two nights up in the hills beside the Handara gate, with a jeep sunrise on Mount Batur and a spa hour afterwards.',
      image: img('4ccbcv4u7v4jzlazowggkgkjlomz_Bedugul-3.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Seminyak',
    subtitle: 'Seminyak to Nusa Penida and Uluwatu',
    dayLabel: 'Day 3 to 6',
    images: [
      img('1fniznkys3hs4t18hsind858z8ok_shutterstock_464526401.jpg'),
      img('x7ihmxsmcxo1ds6acpzc3vxyr4x5_shutterstock_1179917983.jpg'),
      img('ni2vsnbwe3rqwxohjdor002i2nha_shutterstock_559730524.jpg'),
      img('qzqg7qbx8pq33i7so7acy1c8d9c8_shutterstock_1346342258.jpg')
    ],
    dayImages: {
      3: [
        img('01c2779ip74j9xr8707m1owtd2e2_angseri-hot-springs.webp'),
        img('302hs2or99l3ik0dbkx59nt2p9jb_1498888842_angseri.JPG'),
        img('63rp5vt6fg9lnhd2bsolet8cpft3_ezgif-4-1fcf41f031.jpg'),
        img('zwzrpc8zhw3jl7ltwuqtrh8zmm8s_bali%20handara%20gate.jpg')
      ],
      4: [
        img('lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('raz6i8qsplkduo2ddqpr2tqbahzi_download%20(11).jpg'),
        img('o974vnhozbrtaa60gdp3uzoxorjz_37530932040_49a7318d15_o.jpg')
      ],
      5: [
        img('ijj51cr2n2dkk9f9n7006iw9tlq1_16a496bd-6775-40af-84e2-edf6316fb324.jpg'),
        img('y1x72ssabvefqh7qvjqokuhc02cc_cc.jpg'),
        img('3wbl1quszkxet87fhjkyh05yce0t_Uluwatu-1.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg')
      ],
      6: [
        img('1fniznkys3hs4t18hsind858z8ok_shutterstock_464526401.jpg'),
        img('x7ihmxsmcxo1ds6acpzc3vxyr4x5_shutterstock_1179917983.jpg'),
        img('ni2vsnbwe3rqwxohjdor002i2nha_shutterstock_559730524.jpg'),
        img('qzqg7qbx8pq33i7so7acy1c8d9c8_shutterstock_1346342258.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Bedugul lakes and Tanah Lot`,
      'Breakfast and check out, then a full day in the lake country',
      'The Handara gate and Ulun Danu Beratan temple',
      'A hill waterfall, then sunset at Tanah Lot',
      'Check in at your pool villa near Seminyak',
      `${DAY_MARK}Day 4 · Nusa Penida and snorkelling`,
      'Early breakfast, then private transfer to Sanur harbour',
      'Speedboat across to Nusa Penida for the west coast',
      'Kelingking beach, Angel\'s Billabong and the Paluang cliff',
      'Snorkelling in the clear water before the boat back',
      `${DAY_MARK}Day 5 · Theme park and Uluwatu`,
      'Breakfast, then indoor rides at the Trans Studio park',
      'Shows, the cinema and the arcade floor',
      'Uluwatu temple on the cliffs at sunset',
      'Kecak fire dance in the amphitheatre afterwards',
      `${DAY_MARK}Day 6 · Departure from Bali`,
      'Breakfast at the villa and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Bali Prime Villa, Seminyak',
      description: '3 nights · Breakfast · Standard room · 2★ · Private pool villa a short ride from Seminyak beach',
      images: [
        img('u3pp4hz5fnrftoor4all75s8tmdt_641331596.jpg'),
        img('7dpom63qbl4vu9ejmpug8fu8ptq3_639726836.jpg'),
        img('m0d71k8czz7d7egg367ilncwat7s_639726852.jpg'),
        img('3ljy09ycm1fav4f71e0zxiy2qrwq_639726851.jpg'),
        img('i7elq9gq12uca6xvqr7p03yjuqas_639726863.jpg'),
        img('2ounqkxe9p48oebrjokyyyv0jx5q_639726844.jpg')
      ]
    },
    activities: [
      {
        name: 'Bedugul lakes and Tanah Lot',
        day: 3,
        optional: false,
        image: img('01c2779ip74j9xr8707m1owtd2e2_angseri-hot-springs.webp'),
        description: 'The Handara gate, the lake temple of Ulun Danu Beratan and a hill waterfall, finishing at the sea temple of Tanah Lot for sunset.'
      },
      {
        name: 'Nusa Penida west coast',
        day: 4,
        optional: false,
        image: img('lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        description: 'Speedboat across for Kelingking beach, Angel\'s Billabong, Broken Bay and the Paluang cliff viewpoint above the water.'
      },
      {
        name: 'Snorkelling off Nusa Penida',
        day: 4,
        optional: false,
        image: img('lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        description: 'Mask and fins in the clear water on the way back, with coral heads and reef fish close enough to the shore for beginners.'
      },
      {
        name: 'Trans Studio theme park',
        day: 5,
        optional: false,
        image: img('ijj51cr2n2dkk9f9n7006iw9tlq1_16a496bd-6775-40af-84e2-edf6316fb324.jpg'),
        description: 'Indoor rides, shows and a cinema in Denpasar, which is the easiest wet weather day in Bali with younger children.'
      },
      {
        name: 'Uluwatu sunset with the Kecak dance',
        day: 5,
        optional: false,
        image: img('3wbl1quszkxet87fhjkyh05yce0t_Uluwatu-1.jpg'),
        description: 'The cliff top temple at Uluwatu as the sun drops, followed by the Kecak fire dance in the open amphitheatre above the sea.'
      }
    ],
    program: {
      name: 'Seminyak',
      description: 'Three nights in a private pool villa, with the Bedugul lakes on the way down, a Nusa Penida day with snorkelling and a theme park afternoon.',
      image: img('1fniznkys3hs4t18hsind858z8ok_shutterstock_464526401.jpg')
    }
  }
];

const detail = {
  slug: 'bali-family-escape-with-mount-batur-jeep',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bali Family Escape with Mount Batur Jeep',
  alt: 'Jeep on the lava field below Mount Batur, Bali',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Family',
  tags: ['Family', 'Adventure'],
  price: 37245,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Bedugul', 'Mount Batur', 'Seminyak', 'Nusa Penida', 'Uluwatu'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 7, transfers: 17 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['17 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'The jeep gets you to the Batur sunrise without the two hour climb. That is what makes this one work with children.',
    quoteMore: 'Bedugul is a thousand metres up and cold at dawn, so carry a fleece for everyone. The Handara gate photograph is free for resort guests, which saves you the queue outside.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days for a family with two nights in a hill resort beside the Handara gate and three in a private pool villa near Seminyak, taking in a jeep sunrise on Mount Batur, Tanah Lot, Nusa Penida with snorkelling and the Kecak dance.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights with daily breakfast; private airport and inter city transfers; Mount Batur jeep sunrise; a Balinese massage; full day Bedugul tour with Tanah Lot; Nusa Penida west coast tour with snorkelling; Trans Studio tickets; Uluwatu sunset with the Kecak dance.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Bedugul (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at the hill resort beside the Handara gate\nRest of the day free on the resort grounds\nOptional: the strawberry farms and lake viewpoints nearby', hotel: 'Handara Golf & Resort Bali, Bedugul', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at the hill resort beside the Handara gate', 'Rest of the day free on the resort grounds'] },
    { title: 'Day 2: Mount Batur jeep sunrise (B)', text: 'Very early jeep ride up the lava slopes of Mount Batur\nSunrise over the caldera and the lake\nBack at the resort for a late breakfast\nAn hour of Balinese massage at the resort spa', hotel: 'Handara Golf & Resort Bali, Bedugul', highlights: ['Very early jeep ride up the lava slopes of Mount Batur', 'Sunrise over the caldera and the lake', 'Back at the resort for a late breakfast'] },
    { title: 'Day 3: Bedugul lakes and Tanah Lot (B)', text: 'Breakfast and check out, then a full day in the lake country\nThe Handara gate and Ulun Danu Beratan temple\nA hill waterfall, then sunset at Tanah Lot\nCheck in at your pool villa near Seminyak', hotel: 'Bali Prime Villa by Kanaya Hospitality', highlights: ['Breakfast and check out, then a full day in the lake country', 'The Handara gate and Ulun Danu Beratan temple', 'A hill waterfall, then sunset at Tanah Lot'] },
    { title: 'Day 4: Nusa Penida and snorkelling (B)', text: 'Early breakfast, then private transfer to Sanur harbour\nSpeedboat across to Nusa Penida for the west coast\nKelingking beach, Angel\'s Billabong and the Paluang cliff\nSnorkelling in the clear water before the boat back', hotel: 'Bali Prime Villa by Kanaya Hospitality', highlights: ['Early breakfast, then private transfer to Sanur harbour', 'Speedboat across to Nusa Penida for the west coast', 'Kelingking beach, Angel\'s Billabong and the Paluang cliff'] },
    { title: 'Day 5: Theme park and Uluwatu (B)', text: 'Breakfast, then indoor rides at the Trans Studio park\nShows, the cinema and the arcade floor\nUluwatu temple on the cliffs at sunset\nKecak fire dance in the amphitheatre afterwards', hotel: 'Bali Prime Villa by Kanaya Hospitality', highlights: ['Breakfast, then indoor rides at the Trans Studio park', 'Shows, the cinema and the arcade floor', 'Uluwatu temple on the cliffs at sunset'] },
    { title: 'Day 6: Departure from Bali (B)', text: 'Breakfast at the villa and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the villa and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const baliFamilyEscapeBaturJeepBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const baliFamilyEscapeBaturJeepProduct = {
  slug: detail.slug,
  places: ['Bedugul', 'Mount Batur', 'Seminyak', 'Nusa Penida', 'Uluwatu'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 7,
  transfers: 17,
  meals: 5,
  price: detail.price,
  images: cardImages
};
