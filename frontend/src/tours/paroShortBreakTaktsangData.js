// Paro Short Break with Taktsang. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
  img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
  img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
  img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
  img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
  img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Paro',
    dayLabel: 'Day 1 to 3',
    images: [
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
      img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
      img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
    ],
    dayImages: {
      1: [
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
        img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
        img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
        img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
      ],
      2: [
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
        img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
        img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
        img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
      ],
      3: [
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
        img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
        img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
        img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Paro`,
      'Arrival at Paro International and transfer to your hotel',
      'Check in below the terraced fields of the valley',
      'The National Museum in the old watchtower',
      'Rinpung Dzong and the Drukgyel ruins',
      `${DAY_MARK}Day 2 · Tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face',
      `${DAY_MARK}Day 3 · Departure from Paro`,
      'Breakfast at the hotel and check out',
      'Private transfer to Paro International for your flight home'
    ],
    accommodation: {
      name: 'Paro deluxe hotel, Paro',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('9wwvnq7ve5hgudu4nlqzspw0m34h_shutterstock_1158919936.jpg'),
        img('7m49ua3o8vgg6f7r9d4urxrwri35_shutterstock_486227782.jpg'),
        img('csin7rd5wt2r2vtlf0t3yb1pon78_bhutan%202.jpg'),
        img('62llmhn5hxw8z8x8wses5qx9xwdj_bhutan%203.jpg'),
        img('bg80dpvo8esjk9o8zaw77ic28f36_kyichu%20lhakhang.jpg'),
        img('qkc67937mavjiobb39z8r8n27tav_shutterstock_211104337.jpg')
      ]
    },
    activities: [
      {
        name: 'Paro sightseeing tour',
        day: 1,
        optional: false,
        image: img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
        description: 'A guided round of the valley with the National Museum, Rinpung Dzong and the ruins of Drukgyel Dzong.'
      },
      {
        name: 'Hike to the Tiger\'s Nest',
        day: 2,
        optional: false,
        image: img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
        description: 'The climb to Taktsang, the monastery wedged into a cliff nine hundred metres above the Paro valley floor.'
      }
    ],
    program: {
      name: 'Paro',
      description: 'Days in the valley below Taktsang, with Rinpung Dzong, the National Museum and the Tiger’s Nest hike.',
      image: img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
    }
  }
];

const detail = {
  slug: 'paro-short-break-with-taktsang',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Paro Short Break with Taktsang',
  alt: 'Paro valley with the monastery high on the cliff',
  days: '3 days / 2 nights',
  stations: '1 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Short trips',
  tags: ['Short trips', 'Culture'],
  price: 18525,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Paro'],
  stats: { days: 3, cities: 1, hotels: 1, activities: 2, transfers: 3 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['2 experiences', 'Activities'],
    ['3 transfers', 'Transport'],
    ['0 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two nights in one valley. If you only have a long weekend, Paro and the Tiger’s Nest is the trip to take.',
    quoteMore: 'Fly in on the morning service. The afternoon arrivals into Paro get turned back more often when the valley wind picks up.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '3 days through Paro, with 2 nights, all meals and a licensed Bhutanese guide: the paro sightseeing tour, the hike to the tiger\'s nest.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 2 nights across Paro with all meals; all land transfers by private vehicle; the Paro sightseeing tour; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Paro (Arrival)', text: 'Arrival at Paro International and transfer to your hotel\nCheck in below the terraced fields of the valley\nThe National Museum in the old watchtower\nRinpung Dzong and the Drukgyel ruins', hotel: 'Paro deluxe hotel', highlights: ['Arrival at Paro International and transfer to your hotel', 'Check in below the terraced fields of the valley', 'The National Museum in the old watchtower'] },
    { title: 'Day 2: Tiger\'s nest hike (Travel day)', text: 'Breakfast, then out into the Paro valley\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Paro deluxe hotel', highlights: ['Breakfast, then out into the Paro valley', 'The climb up the pine slope to Taktsang', 'The monastery wedged into the cliff face'] },
    { title: 'Day 3: Departure from Paro (Travel day)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Paro International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Paro International for your flight home'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bhutan', href: '/asia/bhutan' },
  { label: detail.title }
];

export const paroShortBreakTaktsangBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const paroShortBreakTaktsangProduct = {
  slug: detail.slug,
  places: ['Paro'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 3,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 2,
  transfers: 3,
  meals: 0,
  price: detail.price,
  images: cardImages
};
