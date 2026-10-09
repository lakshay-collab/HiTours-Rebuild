// Hanoi and Halong on a Junk. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('ess8tbxn8tc68q49uptyn8nsx4he_shutterstock_1218764578.jpg'),
  img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg'),
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
  img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
  img('anokjwn2ztodzjiuh41v7xtsi4nb_shutterstock_257155450.jpg'),
  img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
  img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
  img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
  img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
  img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    dayLabel: 'Day 1',
    images: [
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg')
    ],
    dayImages: {
      1: [
        img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and Hanoi city tour`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'A guided half day of the city',
      'The mausoleum, the one pillar pagoda and the Temple of Literature',
      'Check in and the evening free in the old quarter'
    ],
    accommodation: {
      name: 'Hm Boutique Hotel Hanoi, Hanoi',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Small boutique hotel in the old quarter',
      images: [
        img('7sy9oqqi7pnpuwxq2fv81z2bt2hf_DSC01260-1280.jpg'),
        img('7twnl25zq5eu5l1fatdv4aobarjv_img45.jpg'),
        img('mn4kwii0rj637p1fy1n5gk9ic3xw_img23.jpg'),
        img('k73z8uhny5i8235x93i1rn0ndji0_244884180.jpg'),
        img('kdrzv1d2gpyuv349jwo9j1p8e55i_244885999.jpg'),
        img('mzluxd5hc3n50hwl1r6m1cvga072_img41.jpg')
      ]
    },
    activities: [
      {
        name: 'Hanoi half day city tour',
        day: 1,
        optional: false,
        image: img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        description: 'The Ho Chi Minh mausoleum and the one pillar pagoda, the Temple of Literature and the lanes of the old quarter with a guide.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'A first night in the old quarter with a guided half day of the city on arrival.',
      image: img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Halong Bay',
    dayLabel: 'Day 2',
    images: [
      img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg'),
      img('ess8tbxn8tc68q49uptyn8nsx4he_shutterstock_1218764578.jpg'),
      img('4htmt1ezsgvun0n6isr7x482cgy6_shutterstock_211441507.jpg'),
      img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg')
    ],
    dayImages: {
      2: [
        img('qwq0abainp6hdmi3e8kjf4wnblt1_shutterstock_759100546.jpg'),
        img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg'),
        img('ess8tbxn8tc68q49uptyn8nsx4he_shutterstock_1218764578.jpg'),
        img('4htmt1ezsgvun0n6isr7x482cgy6_shutterstock_211441507.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Overnight on the bay`,
      'Breakfast and check out, then east towards the coast',
      'Board your junk in the early afternoon',
      'Lunch and dinner on board',
      'A night moored among the limestone islands'
    ],
    accommodation: {
      name: 'Halong Royal Palace Cruise, Halong Bay',
      description: '1 night · All meals · Cabin with a window · 3★ · Timber cruise boat moored among the karsts overnight',
      images: [
        img('vfha4wn8g1939nz7blmv2zbezua8_img1.jpg'),
        img('l9966l7rud71rfw69v343f16mb19_img2.jpg'),
        img('n09ydj3cz91sv3y68w2zu33sibfu_img3.jpg'),
        img('kl90iojno6uwzhw9erd37sqd7hbr_img4.jpg'),
        img('lupm0drdxku9cdtsh908akadhb35_img6.jpg'),
        img('tx60hzkjj3yo3fawkwznd731yih5_img7.jpg'),
        img('6ulhot12pjkc35xwuq60fnlfq2j0_img9.jpg'),
        img('8qz5zlx21fua6f2s1ebf2pvimnvy_img8.jpg'),
        img('52fwashbztvumpmx5844pnfh9mjq_img5.jpg'),
        img('rksqnpehn5tm959cizcsgeoiudmd_img10.jpg'),
        img('z38906nmh7cvadosch9b3kj7itt5_img11.jpg'),
        img('qroxwpamvbmoyafswa3emewok9jr_img12.jpg'),
        img('726kp5lsbjey6is2udeg92t2q1f8_img13.jpg'),
        img('6akzil1d4hgz8m7a32o5xq59yn2p_img17.jpg'),
        img('zb77t02g3p3x30qi94l1s0oak9w4_img18.jpg'),
        img('w9jqo7e6b0lcd7pl8hagzkr2zocv_img19.jpg'),
        img('pi1shb8bokq4xs2vr0l6oopy0w8b_img20.jpg'),
        img('1ziwnoejr20kwl4mzy3fzdip0eyb_img21.jpg'),
        img('3trkv4fc1th5nohf83cgy45rdaz5_img22.jpg'),
        img('c8e81a9sfjvnbe7qiz7q8r9lp3wy_img23.jpg'),
        img('a02raiho83o298tsfzkur3e915ln_img24.jpg'),
        img('ornzzg481de8hogyln2fylxhfzel_img25.jpg'),
        img('p838rn62evnxen1k96g3zsg3gqk6_img32.jpg'),
        img('urg3fvttnue6s1c5gg2r7ngl0l6d_img35.jpg'),
        img('f0gv0k6ogfeh4er1s8letao9jd1l_img36.jpg'),
        img('ui9v9i2ooasrurv1zhzujhr37qbz_img37.jpg'),
        img('31uuev2q7tf9gkoft7iglxo77mdz_img38.jpg'),
        img('x731wrazuxssz9dhy7r82id72hu4_img42.jpg'),
        img('8vc8jh9jx29zvgzsmgfp7j5mo2ii_img43.jpg'),
        img('5zayqr1flqsdtd1tivi8o9cby29l_img44.jpg'),
        img('fi567e80wodqvyxlwafqwedyu577_img45.jpg'),
        img('20fev1zroqgxy8b06rnfibw4l43j_img46.jpg')
      ]
    },
    activities: [
      {
        name: 'Halong Bay overnight cruise',
        day: 2,
        optional: false,
        image: img('qwq0abainp6hdmi3e8kjf4wnblt1_shutterstock_759100546.jpg'),
        description: 'A shared cruise out among the limestone islands, with lunch and dinner on board and a night moored in a quiet bay.'
      }
    ],
    program: {
      name: 'Halong Bay',
      description: 'A night on the water aboard a timber junk, with all meals served on board.',
      image: img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Hanoi',
    subtitle: 'Back in Hanoi',
    dayLabel: 'Day 3 to 4',
    images: [
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg')
    ],
    dayImages: {
      3: [
        img('q9c08rlxhdw65bcqremm6qc1o1nc_1484035796_geniusjourney_pbbaaqsj73b5816d3651275aae88.jpg'),
        img('bkwv0xn05kzeq8e12b6twy63f6j4_1613643472_shutterstock_1334153153.jpg'),
        img('2eeos9aky90h0xaaf8x5vm84mo2s_1613645492_shutterstock_1464515930.jpg'),
        img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
      ],
      4: [
        img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
        img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
        img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
        img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Back to Hanoi`,
      'Breakfast on board as the boat moves',
      'Back to the pier in the late morning',
      'On to Hanoi and check in',
      'Rest of the day free in the lanes',
      `${DAY_MARK}Day 4 · Departure from Hanoi`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Hm Boutique Hotel Hanoi, Hanoi',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Small boutique hotel in the old quarter',
      images: [
        img('7sy9oqqi7pnpuwxq2fv81z2bt2hf_DSC01260-1280.jpg'),
        img('7twnl25zq5eu5l1fatdv4aobarjv_img45.jpg'),
        img('mn4kwii0rj637p1fy1n5gk9ic3xw_img23.jpg'),
        img('k73z8uhny5i8235x93i1rn0ndji0_244884180.jpg'),
        img('kdrzv1d2gpyuv349jwo9j1p8e55i_244885999.jpg'),
        img('mzluxd5hc3n50hwl1r6m1cvga072_img41.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Hanoi',
      description: 'Back from the coast for a last night, with the afternoon free in the lanes.',
      image: img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
    }
  }
];

const detail = {
  slug: 'hanoi-and-halong-on-a-junk',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Hanoi and Halong on a Junk',
  alt: 'Timber junk boat sailing between limestone islands in Halong Bay',
  days: '4 days / 3 nights',
  stations: '3 stops',
  transport: 'Private transfers, a guided half day and a cruise boat',
  tag: 'Short break',
  tags: ['Short break', 'Nature'],
  price: 36100,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Halong Bay'],
  stats: { days: 4, cities: 2, hotels: 2, activities: 2, transfers: 5 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['2 experiences', 'Activities'],
    ['5 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Four days, one night at sea. For a first visit with little time, this is the pair of things worth doing.',
    quoteMore: 'Take the city tour on arrival day as it is scheduled here. It gets you oriented before you lose two days to the coast.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A four day taste of the north: a guided half day of Hanoi on arrival, a night aboard a timber junk among the limestone islands of Halong Bay with all meals on board, then a last night back in the old quarter.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights with breakfast daily and dinner at the Hanoi hotel, one night on a cruise boat with lunch and dinner; private transfers throughout; a guided half day tour of Hanoi; a shared overnight cruise in Halong Bay.',
  intro2: 'Not included: international flights; Vietnam visa fees; other lunches; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and Hanoi city tour (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nA guided half day of the city\nThe mausoleum, the one pillar pagoda and the Temple of Literature\nCheck in and the evening free in the old quarter', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'A guided half day of the city', 'The mausoleum, the one pillar pagoda and the Temple of Literature'] },
    { title: 'Day 2: Overnight on the bay (B, L, D)', text: 'Breakfast and check out, then east towards the coast\nBoard your junk in the early afternoon\nLunch and dinner on board\nA night moored among the limestone islands', hotel: 'Halong Royal Palace Cruise', highlights: ['Breakfast and check out, then east towards the coast', 'Board your junk in the early afternoon', 'Lunch and dinner on board'] },
    { title: 'Day 3: Back to Hanoi (B, D)', text: 'Breakfast on board as the boat moves\nBack to the pier in the late morning\nOn to Hanoi and check in\nRest of the day free in the lanes', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast on board as the boat moves', 'Back to the pier in the late morning', 'On to Hanoi and check in'] },
    { title: 'Day 4: Departure from Hanoi (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; other lunches; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Vietnam', href: '/asien/vietnam' },
  { label: detail.title }
];

export const hanoiAndHalongOnAJunkBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const hanoiAndHalongOnAJunkProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Halong Bay'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 4,
  stops: 3,
  hotels: 2,
  cities: 2,
  activities: 2,
  transfers: 5,
  meals: 7,
  price: detail.price,
  images: cardImages
};
