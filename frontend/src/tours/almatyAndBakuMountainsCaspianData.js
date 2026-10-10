// Almaty and Baku: Mountains and the Caspian. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
  img('aza6pcu7x1vn765uq0nb9qy3e5dh_gerhard-reus-vPZ7YvpK8Sc-unsplash.jpg'),
  img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg'),
  img('5r2cwf5pumac7azyim149wirkalr_shutterstock_2279957429.jpg'),
  img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg'),
  img('ebedrx7md3lsckm8dymqgyh7ciqr_shutterstock_2152837819.jpg'),
  img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
  img('g0gtz8i1ixkieosbry3cq2ydbghg_iltun-huseynli-OH7GkUqiuZk-unsplash.jpg'),
  img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
  img('w9xb7wy1kiflzp3up20o6gbd3ft9_shutterstock_2151451953.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('aza6pcu7x1vn765uq0nb9qy3e5dh_gerhard-reus-vPZ7YvpK8Sc-unsplash.jpg'),
  img('ebedrx7md3lsckm8dymqgyh7ciqr_shutterstock_2152837819.jpg'),
  img('g0gtz8i1ixkieosbry3cq2ydbghg_iltun-huseynli-OH7GkUqiuZk-unsplash.jpg'),
  img('w9xb7wy1kiflzp3up20o6gbd3ft9_shutterstock_2151451953.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Almaty',
    dayLabel: 'Day 1 to 4',
    images: [
      img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
      img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
      img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg'),
      img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg')
    ],
    dayImages: {
      1: [
        img('rbsdlpmqrfga1bptwh7jhqywl58s_shutterstock_1873578235.jpg'),
        img('ax2aozks96i5vt0r92ag2n6dg2j0_shutterstock_1505534291.jpg'),
        img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
        img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg')
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
        img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Almaty`,
      'Arrival at Almaty International and transfer to your hotel',
      'Check in and the rest of the day free',
      'Optional: the stalls of the Zelyony bazaar',
      'Optional: an evening on Abai Square',
      `${DAY_MARK}Day 2 · Almaty city tour`,
      'Breakfast, then a guided tour of the city',
      'The Monument of Independence on Republic Square',
      'Panfilov Park and the wooden Ascension Cathedral',
      'Afternoon free along Zhibek Zholy',
      `${DAY_MARK}Day 3 · Medeu rink and Shymbulak`,
      'Breakfast, then up the Malaya Almatinka valley',
      'The Medeu dam and its Olympic skating rink',
      'On by gondola to the Shymbulak ski resort',
      'Snow peaks of the Zailiysky Alatau above you',
      `${DAY_MARK}Day 4 · Green Bazaar and chocolate factory`,
      'Breakfast, then into the Green Bazaar halls',
      'Horse meat counters, dried fruit and spice stalls',
      'The Rakhat chocolate factory and its shop',
      'Optional: the Kok Tobe cable car at dusk'
    ],
    accommodation: {
      name: 'Hotel Kazzhol Almaty, Almaty',
      description: '4 nights · Breakfast · Standard room · 4★ · Well run hotel in the centre with a garden courtyard',
      images: [
        img('ad5owrihcgb359nhmofgy0gf09di_126840535.png'),
        img('2d69yu0a33loyf9lorel7tk50pvr_5795249.png'),
        img('nvd5n8qa7sediojfc9rqrp34s5aw_551337896.png'),
        img('hr7gxtwhymc5avu7qpvfxe8pqabv_220731251.png'),
        img('6caomiyst28rr3mp3iiq9omd15st_220731292.png'),
        img('4q4wiqc19jx9jzxnsn1d9it0k7dk_297936781.png'),
        img('bvex3l4ic3njeurdq17q4mx1rjyp_5795212.png'),
        img('t118r143lypnh14v8dsiq53ycuo5_220730687.png'),
        img('bdbjo3r2wsyzz3x0zf736pkxxwdr_127539245.png'),
        img('o7lrxwnbdzxuhiygeh6pcmo1khaq_220730310.png'),
        img('vgts5z2v1b0zloyvig7tcn0zvyq3_551337918.png'),
        img('ug16m37i4e4k41c625yb9a1imndc_5795265.png'),
        img('byuej63wkki2kwts1lrdfgsrhfwg_127538977.png'),
        img('rgrn6pi27t4u0e51iteaxu90i8fc_551337997.png'),
        img('2awejo9u83i7bwt5n3k1102pnq1s_220731393.png'),
        img('22450m2i0prwvpb2gciqchegscp1_127539236.png')
      ]
    },
    activities: [
      {
        name: 'Almaty city sightseeing tour',
        day: 2,
        optional: false,
        image: img('elvqtnsme6ctj6hi54h99ufvu092_dl.beatsnoop.com-1714737499.jpg'),
        description: 'A guided tour of the old capital, taking in the Monument of Independence, Panfilov Park and the wooden Ascension Cathedral.'
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
      }
    ],
    program: {
      name: 'Almaty',
      description: 'Four nights in the old Kazakh capital with the city tour, the Shymbulak gondola and the Green Bazaar.',
      image: img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Baku',
    subtitle: 'Baku → Absheron and Gabala',
    dayLabel: 'Day 5 to 8',
    images: [
      img('g0gtz8i1ixkieosbry3cq2ydbghg_iltun-huseynli-OH7GkUqiuZk-unsplash.jpg'),
      img('aza6pcu7x1vn765uq0nb9qy3e5dh_gerhard-reus-vPZ7YvpK8Sc-unsplash.jpg'),
      img('6vua18db4zxxecczrbtiqoz9lamw_azar-kazzimli-RK159F6YZ2k-unsplash.jpg'),
      img('mzetk2136hgywpux1nby61yrfz69_shutterstock_2213017005.jpg')
    ],
    dayImages: {
      5: [
        img('trrh1a327y0b2s0zj9qo36mehbu3_152a75981c6c3b5cd5b344fe49ed3b6a.jpg'),
        img('9dhddagcxbdp7gamd4u9jylbkh2q_1621620650_shutterstock_1219342972.jpg'),
        img('g0gtz8i1ixkieosbry3cq2ydbghg_iltun-huseynli-OH7GkUqiuZk-unsplash.jpg'),
        img('aza6pcu7x1vn765uq0nb9qy3e5dh_gerhard-reus-vPZ7YvpK8Sc-unsplash.jpg')
      ],
      6: [
        img('vnrkg0vovqst85c5u37hhdni7qmc_dl.beatsnoop.com-final-HYwgrsRJGp.jpg'),
        img('22p1kyib7lpk1be6nt3s4sl8d1t5_maidens-tower-azerbaijan.jpg'),
        img('ylkh9xm7m3i7m4xuh1h9c9z0jqeb__vlNhYbF.jpg'),
        img('6fe9qrq5ogiynsyuhgayss5987wz_wKgBEFtqmVaAJHwBAAztiG7HyqM09.jpeg')
      ],
      7: [
        img('n8a1fu99y2fh34cpwum2l2zd8yoi_shutterstock_1296276955.jpg'),
        img('747q5lgfnioy0clsugyq9bs4qnf8_lake%20nohar.jpg'),
        img('60ulwdt6ai9jvs5n9p007u5f9eju_download%20-%202024-05-07T175652.561.jpg'),
        img('ieuyk9jzbrjivmkvhk537t7s0um1_466655470%20(1).png')
      ],
      8: [
        img('g0gtz8i1ixkieosbry3cq2ydbghg_iltun-huseynli-OH7GkUqiuZk-unsplash.jpg'),
        img('aza6pcu7x1vn765uq0nb9qy3e5dh_gerhard-reus-vPZ7YvpK8Sc-unsplash.jpg'),
        img('6vua18db4zxxecczrbtiqoz9lamw_azar-kazzimli-RK159F6YZ2k-unsplash.jpg'),
        img('mzetk2136hgywpux1nby61yrfz69_shutterstock_2213017005.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Almaty to Baku`,
      'Breakfast and check out of your Almaty hotel',
      'Optional: flight Almaty to Baku, booked with us',
      'Arrival transfer from Heydar Aliyev to your hotel',
      'Optional: the Baku Eye and the seafront boulevard',
      `${DAY_MARK}Day 6 · Old City and the Absheron peninsula`,
      'Breakfast, then into the walled Old City',
      'The Maiden Tower and the Shirvanshahs\' palace',
      'Out onto the Absheron peninsula after lunch',
      'The Ateshgah fire temple and the flames of Yanar Dagh',
      `${DAY_MARK}Day 7 · Gabala and Tufandag mountain`,
      'Early breakfast and northwest into the foothills',
      'Nohur lake with its drowned trees',
      'The Tufandag cable car above Gabala',
      'Evening transfer back along the coast to Baku',
      `${DAY_MARK}Day 8 · Departure from Baku`,
      'Breakfast at the hotel and check out',
      'Private transfer to Heydar Aliyev for your flight home'
    ],
    accommodation: {
      name: 'Premier Palace Baku, Baku',
      description: '3 nights · Breakfast · Standard room · 4★ · Comfortable hotel a short walk from Fountain Square',
      images: [
        img('icrcwu3dblit3scx7ymjsyogxa2e_436710886.jpg'),
        img('kko4ilvtwch7xxug0gc1spr5g76x_436711421.jpg'),
        img('2hqumc41n0hyy7htmpet2n8kdswr_401967769.jpg'),
        img('pf3zzboqsx3mwtuzk00e1gdjuutn_391622972.jpg'),
        img('jvvnzlqxuclvanscs73kpdem8vc8_401964360.jpg'),
        img('6n01gtp7hurj4pzeos85qnewes2p_391628286.jpg'),
        img('8mhs7b7i2slc0tucmczevvs9y8r3_436710960.jpg'),
        img('r93ed4wr46311dy3bngqz4hpnoix_436711883.jpg'),
        img('ygcz7lk3upa6jpfmzld7cvhbefce_401966574.jpg'),
        img('g42cowzyv5n4dz1iko8y10w7ufa2_170562963.jpg'),
        img('cvq4p0sjok9v2nod3bt5k2ezst2x_391628291.jpg')
      ]
    },
    activities: [
      {
        name: 'Baku Old City tour',
        day: 6,
        optional: false,
        image: img('vnrkg0vovqst85c5u37hhdni7qmc_dl.beatsnoop.com-final-HYwgrsRJGp.jpg'),
        description: 'The walled Icherisheher with the Maiden Tower, the Shirvanshahs\' palace, Fountain Square and the boating canals on the boulevard.'
      },
      {
        name: 'Absheron peninsula tour',
        day: 6,
        optional: false,
        image: img('u0eyd0xlyj6ubj9sr3q0vpckd2zj_shutterstock_2437520413.jpg'),
        description: 'The Ateshgah fire temple, the Mardakan castle and Yanar Dagh, a hillside where escaping gas has burned for centuries.'
      },
      {
        name: 'Gabala and Tufandag mountain',
        day: 7,
        optional: false,
        image: img('n8a1fu99y2fh34cpwum2l2zd8yoi_shutterstock_1296276955.jpg'),
        description: 'A day northwest to Nohur lake with its drowned trees, then the Tufandag cable car up into the Greater Caucasus.'
      }
    ],
    program: {
      name: 'Baku',
      description: 'Three nights on the Caspian with the walled Old City, the fire temples of Absheron and a day in the Caucasus foothills.',
      image: img('g0gtz8i1ixkieosbry3cq2ydbghg_iltun-huseynli-OH7GkUqiuZk-unsplash.jpg')
    }
  }
];

const detail = {
  slug: 'almaty-and-baku-mountains-and-the-caspian',
  ctaHref: '/l/kazakhstan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Almaty and Baku: Mountains and the Caspian',
  alt: 'Maiden Tower in the walled Old City of Baku',
  days: '8 days / 7 nights',
  stations: '2 stops',
  transport: 'Private transfers, guided day tours and an internal flight',
  tag: 'Culture',
  tags: ['Culture', 'Multi-country'],
  price: 74100,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Almaty', 'Baku', 'Gabala'],
  stats: { days: 8, cities: 2, hotels: 2, activities: 6, transfers: 11 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['11 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aisha',
    image: '/experts/riya.webp',
    role: 'Kazakhstan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two countries on either side of the Caspian for the price most people pay for one. Mountains first, then the old sea port.',
    quoteMore: 'Baku is two hours behind Almaty, so you gain the afternoon on the crossing. Use it for the boulevard rather than the hotel room.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days across the Caspian with daily breakfast: Almaty with its city tour, the Shymbulak gondola and the Green Bazaar, then Baku for the walled Old City, the Absheron fire temples and the Tufandag cable car.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in Almaty and 3 nights in Baku with daily breakfast; private airport transfers in both cities; Almaty city sightseeing tour; day trip to the Medeu rink and Shymbulak ski resort; Green Bazaar and Rakhat chocolate factory trip; Baku Old City tour; Absheron peninsula tour; Gabala and Tufandag mountain day trip.',
  intro2: 'Not included: international flights; the Almaty to Baku internal flight; Kazakhstan and Azerbaijan visa fees; lunches and dinners; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Almaty (Arrival)', text: 'Arrival at Almaty International and transfer to your hotel\nCheck in and the rest of the day free\nOptional: the stalls of the Zelyony bazaar\nOptional: an evening on Abai Square', hotel: 'Hotel Kazzhol Almaty', highlights: ['Arrival at Almaty International and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: the stalls of the Zelyony bazaar'] },
    { title: 'Day 2: Almaty city tour (B)', text: 'Breakfast, then a guided tour of the city\nThe Monument of Independence on Republic Square\nPanfilov Park and the wooden Ascension Cathedral\nAfternoon free along Zhibek Zholy', hotel: 'Hotel Kazzhol Almaty', highlights: ['Breakfast, then a guided tour of the city', 'The Monument of Independence on Republic Square', 'Panfilov Park and the wooden Ascension Cathedral'] },
    { title: 'Day 3: Medeu rink and Shymbulak (B)', text: 'Breakfast, then up the Malaya Almatinka valley\nThe Medeu dam and its Olympic skating rink\nOn by gondola to the Shymbulak ski resort\nSnow peaks of the Zailiysky Alatau above you', hotel: 'Hotel Kazzhol Almaty', highlights: ['Breakfast, then up the Malaya Almatinka valley', 'The Medeu dam and its Olympic skating rink', 'On by gondola to the Shymbulak ski resort'] },
    { title: 'Day 4: Green Bazaar and chocolate factory (B)', text: 'Breakfast, then into the Green Bazaar halls\nHorse meat counters, dried fruit and spice stalls\nThe Rakhat chocolate factory and its shop\nOptional: the Kok Tobe cable car at dusk', hotel: 'Hotel Kazzhol Almaty', highlights: ['Breakfast, then into the Green Bazaar halls', 'Horse meat counters, dried fruit and spice stalls', 'The Rakhat chocolate factory and its shop'] },
    { title: 'Day 5: Almaty to Baku (B)', text: 'Breakfast and check out of your Almaty hotel\nOptional: flight Almaty to Baku, booked with us\nArrival transfer from Heydar Aliyev to your hotel\nOptional: the Baku Eye and the seafront boulevard', hotel: 'Premier Palace Baku', highlights: ['Breakfast and check out of your Almaty hotel', 'Optional: flight Almaty to Baku, booked with us', 'Arrival transfer from Heydar Aliyev to your hotel'] },
    { title: 'Day 6: Old City and the Absheron peninsula (B)', text: 'Breakfast, then into the walled Old City\nThe Maiden Tower and the Shirvanshahs\' palace\nOut onto the Absheron peninsula after lunch\nThe Ateshgah fire temple and the flames of Yanar Dagh', hotel: 'Premier Palace Baku', highlights: ['Breakfast, then into the walled Old City', 'The Maiden Tower and the Shirvanshahs\' palace', 'Out onto the Absheron peninsula after lunch'] },
    { title: 'Day 7: Gabala and Tufandag mountain (B)', text: 'Early breakfast and northwest into the foothills\nNohur lake with its drowned trees\nThe Tufandag cable car above Gabala\nEvening transfer back along the coast to Baku', hotel: 'Premier Palace Baku', highlights: ['Early breakfast and northwest into the foothills', 'Nohur lake with its drowned trees', 'The Tufandag cable car above Gabala'] },
    { title: 'Day 8: Departure from Baku (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Heydar Aliyev for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Heydar Aliyev for your flight home'] }
  ],
  outro: 'Not included: international flights; the Almaty to Baku internal flight; Kazakhstan and Azerbaijan visa fees; lunches and dinners; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Kazakhstan', href: '/asia/kazakhstan' },
  { label: detail.title }
];

export const almatyAndBakuMountainsCaspianBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const almatyAndBakuMountainsCaspianProduct = {
  slug: detail.slug,
  places: ['Almaty', 'Baku', 'Gabala'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 6,
  transfers: 11,
  meals: 7,
  price: detail.price,
  images: cardImages
};
