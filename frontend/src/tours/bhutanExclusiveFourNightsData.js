// Bhutan Exclusive Four Night Break. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
  img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
  img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
  img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
  img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
  img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
  img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg'),
  img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
  img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
  img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
  img('cdl5xosospzimjwzry1vumk497kb_The-Romantic-Nature-Park-of-Thimphu-Ludrong-Memorial-Garden.jpg'),
  img('xguiebm2y88fnap7eww10g8cwpvc_1578661243_simply.jpg'),
  img('1ir31lg7raht1lwthnln6o2cvi45_1577171984_deer.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Thimphu',
    dayLabel: 'Day 1 to 2',
    images: [
      img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
      img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
      img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg'),
      img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg')
    ],
    dayImages: {
      1: [
        img('cdl5xosospzimjwzry1vumk497kb_The-Romantic-Nature-Park-of-Thimphu-Ludrong-Memorial-Garden.jpg'),
        img('xguiebm2y88fnap7eww10g8cwpvc_1578661243_simply.jpg'),
        img('1ir31lg7raht1lwthnln6o2cvi45_1577171984_deer.jpg'),
        img('fesj0epvzuvmw6b69e9t9yg16wx0_1615618521_shutterstock_197199446.jpg')
      ],
      2: [
        img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        img('2xgygw98g58o2olcep4vlh9r5k0u_1481602683_View_of_the_National_Memorial_Chorten__Thimphu.jpg'),
        img('4r58yve0h6te2i0muhp7hprr7rtu_24024165679_103d7a2e7c_b.jpg'),
        img('fecad1jg1gwzqki7ltqfxszyzl24_1200px-Changangkha_Lhakhang_2021.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Thimphu`,
      'Arrival at Paro International and transfer to Thimphu',
      'The road east along the Pa Chhu and the Wang Chhu',
      'Check in and the rest of the day free',
      `${DAY_MARK}Day 2 · Thimphu and simtokha`,
      'Breakfast, then out into the capital',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and Simtokha Dzong'
    ],
    accommodation: {
      name: 'Hotel Druk Noryang, Thimpu, Thimphu City',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Comfortable hotel in the capital, walkable to the clock tower',
      images: [
        img('sldrva8dxlpzswq38mrtqdsyitvo_2022-12-02.jpg'),
        img('rz5v9klzs0lya04lot5jg5udcwlx_2023-05-12.jpg'),
        img('if4utsxvmxhq9oql1332st7zsiw8_caption%20(3).jpg'),
        img('q9gc68i2l9ihsjed236f1w8ki147_caption.jpg'),
        img('xgj3h317qhxp4on6s23ijh4x21pk_caption%20(6).jpg'),
        img('wdem1qgn6159u0ga01pw0r1xtnn0_caption%20(5).jpg'),
        img('2536h3ow9b7a7t354rwxk1ma1xol_WhatsApp-Image-2023-05-20-at-12.49.25-PM-2.jpeg'),
        img('ad2luhd23nt856p9fgm8rbpa0ysp_WhatsApp-Image-2023-05-20-at-12.49.30-PM.jpeg')
      ]
    },
    activities: [
      {
        name: 'Thimphu sightseeing with Simtokha Dzong',
        day: 2,
        optional: false,
        image: img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        description: 'The capital on foot and by road, finishing at Simtokha Dzong, the oldest fortress still standing in the country.'
      }
    ],
    program: {
      name: 'Thimphu',
      description: 'Days in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong.',
      image: img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Paro',
    dayLabel: 'Day 3 to 5',
    images: [
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
      img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
      img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
    ],
    dayImages: {
      3: [
        img('94bhu1r9yb0mjh5ypvuhjgg2dlgo_Drukgyel%20Dzong%203.jpg'),
        img('q8phludak72pr8ojnm2cmpi4w33n_1481602623_Paro-Kyichu-Lhakhang299.jpg'),
        img('rart59u3umfaty65dt0fpejnn4ex_Drukgyel%20Dzong.jpg'),
        img('msz1iztswlp21hlu64vxiq9516bj_mount-jomolhari.jpgxDV.jpg')
      ],
      4: [
        img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        img('lvrrucang7e4i29fjjrr5dv1hfbg_1481602680_Ta_Dzong_museum.jpg'),
        img('40nfujj31s5rphnc2usp8a680fzp_1571657529_1280px-Rinpung_Dzong__Bhutan_01.jpg'),
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg')
      ],
      5: [
        img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
        img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
        img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · To Paro: Paro and Kyichu Lhakhang`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'A guided round of the Paro valley',
      'Kyichu Lhakhang, among the oldest temples in Bhutan',
      `${DAY_MARK}Day 4 · Ta dzong and rinpung dzong and tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The round watchtower holding the National Museum',
      'Rinpung Dzong on the slope above the river',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face',
      `${DAY_MARK}Day 5 · Departure from Paro`,
      'Breakfast at the hotel and check out',
      'Private transfer to Paro International for your flight home'
    ],
    accommodation: {
      name: 'Khamsum Inn, Paro, Paro',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('q5kqlcdrcmx955cc8we8msmlb0ub_Hotel-Khamsum%20(1).jpg'),
        img('9amu3ocnd5q4uk4bfg3h2dlc9nbk_R7.jpg'),
        img('8ii21o05v3okfgj2hqrwmzh90hiq_R3.jpg'),
        img('fp0b3mg1pp6992hhxni14mpb2o2h_R1.jpg'),
        img('sc3e9ucvki5bf7l6fwji9zml7j1n_R5.jpg'),
        img('twb2grgfcju9ab9qpm5rdvpplb15_R4.jpg'),
        img('uk37iv2svf2huuxsk61v9zvnn2nx_909cd040946711e78b59025f77df004f.jpg'),
        img('7j1oenttayx1rz1on8dibkc87r4q_R9.jpg'),
        img('ombqx8kiylz1njw9m526bt48sf08_10aaf0cab07a11eea25c0a58a9feac02.png'),
        img('udtsfvnst8mquxujct19rfjmca32_R11.jpg')
      ]
    },
    activities: [
      {
        name: 'Paro sightseeing with Kyichu Lhakhang',
        day: 3,
        optional: false,
        image: img('94bhu1r9yb0mjh5ypvuhjgg2dlgo_Drukgyel%20Dzong%203.jpg'),
        description: 'A guided day around Paro finishing at Kyichu Lhakhang, one of the oldest temples standing in Bhutan.'
      },
      {
        name: 'Ta Dzong and Rinpung Dzong',
        day: 4,
        optional: false,
        image: img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        description: 'The round watchtower that now holds the National Museum, and the whitewashed Rinpung fortress above the river.'
      },
      {
        name: 'Hike to the Tiger\'s Nest',
        day: 4,
        optional: false,
        image: img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        description: 'The climb to Taktsang, the monastery wedged into a cliff nine hundred metres above the Paro valley floor.'
      }
    ],
    program: {
      name: 'Paro',
      description: 'Days in the valley below Taktsang, with Rinpung Dzong, the National Museum and the Tiger’s Nest hike.',
      image: img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
    }
  }
];

const detail = {
  slug: 'bhutan-exclusive-four-night-break',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bhutan Exclusive Four Night Break',
  alt: 'Tashichho Dzong beside the Wang Chhu in Thimphu',
  days: '5 days / 4 nights',
  stations: '2 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Short trips',
  tags: ['Short trips', 'Culture'],
  price: 27075,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Thimphu', 'Paro'],
  stats: { days: 5, cities: 2, hotels: 2, activities: 4, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Four nights and two valleys, flying both ways. The shortest Bhutan that still earns the trip.',
    quoteMore: 'With only four nights, skip Punakha and give the time to Paro. Taktsang the day after a travel day is a mistake.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '5 days through Thimphu, Paro, with 4 nights, daily breakfast and a licensed Bhutanese guide: the thimphu sightseeing with simtokha dzong, the paro sightseeing with kyichu lhakhang, the ta dzong and rinpung dzong, the hike to the tiger\'s nest.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights across Thimphu, Paro with daily breakfast; all land transfers by private vehicle; the Thimphu sightseeing with Simtokha Dzong; the Paro sightseeing with Kyichu Lhakhang; the Ta Dzong and Rinpung Dzong; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Thimphu (L)', text: 'Arrival at Paro International and transfer to Thimphu\nThe road east along the Pa Chhu and the Wang Chhu\nCheck in and the rest of the day free', hotel: 'Hotel Druk Noryang, Thimpu', highlights: ['Arrival at Paro International and transfer to Thimphu', 'The road east along the Pa Chhu and the Wang Chhu', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Thimphu and simtokha (B, L)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and Simtokha Dzong', hotel: 'Hotel Druk Noryang, Thimpu', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and Simtokha Dzong'] },
    { title: 'Day 3: To Paro: Paro and Kyichu Lhakhang (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nA guided round of the Paro valley\nKyichu Lhakhang, among the oldest temples in Bhutan', hotel: 'Khamsum Inn, Paro', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'A guided round of the Paro valley'] },
    { title: 'Day 4: Ta dzong and rinpung dzong and tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe round watchtower holding the National Museum\nRinpung Dzong on the slope above the river\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Khamsum Inn, Paro', highlights: ['Breakfast, then out into the Paro valley', 'The round watchtower holding the National Museum', 'Rinpung Dzong on the slope above the river'] },
    { title: 'Day 5: Departure from Paro (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Paro International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Paro International for your flight home'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bhutan', href: '/asia/bhutan' },
  { label: detail.title }
];

export const bhutanExclusiveFourNightsBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bhutanExclusiveFourNightsProduct = {
  slug: detail.slug,
  places: ['Thimphu', 'Paro'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 4,
  transfers: 8,
  meals: 8,
  price: detail.price,
  images: cardImages
};
