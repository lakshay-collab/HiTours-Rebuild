// Korea and Japan Short Group Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('vy4n5p7640m6qy7v7lfd0ub7wwhu_shutterstock_487257514.jpg'),
  img('hr6rqa9fuvyffjnfzg8t9nnmi4ct_shutterstock_787582243%20(1).jpg'),
  img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg'),
  img('j65z24g9vcf1u4dor19wb0osi4w1_shutterstock_268207544.jpg'),
  img('fwucq6pta6ufuwkv79qf7vlkpar0_shutterstock_1764063716.jpg'),
  img('7kxl7sgilrs8qq9u4vti16qxyujm_shutterstock_2278159137.jpg'),
  img('si0jt9jyzzajceyucdwrr24n3tv3_shutterstock_574774783.jpg'),
  img('5d4ac52c1c7pu5k4ycnr79ifpor5_shutterstock_2324290629.jpg'),
  img('9gxo0w9zfmmbmjg8895gp4h3leqm_shutterstock_1966867324.jpg'),
  img('8ywg4fyld00xj2871jyc4vdrfjrt_shutterstock_137923409.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('vy4n5p7640m6qy7v7lfd0ub7wwhu_shutterstock_487257514.jpg'),
  img('j65z24g9vcf1u4dor19wb0osi4w1_shutterstock_268207544.jpg'),
  img('si0jt9jyzzajceyucdwrr24n3tv3_shutterstock_574774783.jpg'),
  img('8ywg4fyld00xj2871jyc4vdrfjrt_shutterstock_137923409.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Seoul',
    dayLabel: 'Day 1 to 2',
    images: [
      img('vy4n5p7640m6qy7v7lfd0ub7wwhu_shutterstock_487257514.jpg'),
      img('dkucooj709qd33peu74pc7kf85vm_shutterstock_2155257251.jpg'),
      img('si0jt9jyzzajceyucdwrr24n3tv3_shutterstock_574774783.jpg'),
      img('8ywg4fyld00xj2871jyc4vdrfjrt_shutterstock_137923409.jpg')
    ],
    dayImages: {
      1: [
        img('ijhl0n7cee0vdm7zp2xop3ssy3hp_24676822658_8e52557ac1_o.jpg'),
        img('g0mep3amx1jjst6otatreg2zyqx7_1617281454_59museum-nasional-korea-wisata-korea.png'),
        img('jgoufuqv2c3laicmwmjb9nssgoj7_Bukchon%20Village.jpg'),
        img('1ta6k9ncnkxw74ao7np6i0lkdrce_1617279265_1581765065_n_seoul_tower1.jpg.png')
      ],
      2: [
        img('wgn38swjypmjulj2ckthzu60y8g2_Downpic.cc-image330813116.jpg'),
        img('oqugu7k5uc6alozarjlqbxm9vryd_1280px-070401_Panmunjeom3.png'),
        img('i8ilwwwzeov5psxtmorpdh25dcae_17782347338_88af897ea7_b.jpg'),
        img('mjzclpuzp94a02hui4s3a2valnyr_jpg.jfif')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Seoul`,
      'Arrival at Incheon and transfer to your hotel',
      'Check in beside Seoul station',
      'Rest of the day free at your own pace',
      'Optional: the lanes of Insadong and Bukchon',
      `${DAY_MARK}Day 2 · The Korean DMZ`,
      'Breakfast, then north to the demilitarised zone',
      'The third infiltration tunnel',
      'The Dora observatory looking into the north',
      'Back in Seoul in the afternoon'
    ],
    accommodation: {
      name: 'Four Points by Sheraton Josun Seoul Station, Seoul',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel beside Seoul station, on the airport train line',
      images: [
        img('1fusqcvjxiojwkb8tdtctt07351p_download%20-%202024-12-16T190459.896.jpg'),
        img('klyebkg86fjgqmvkenizec7f1gmw_download%20-%202024-12-16T190505.561.jpg'),
        img('ml6568l2j0h25ct9yv0z5ddfmpa2_download%20-%202024-12-16T190531.765.jpg'),
        img('anhgx86863k1jhyy22y9umix3ig3_download%20-%202024-12-16T190548.259.jpg'),
        img('muxf3zvvbm00h7yrb0tma6d04ngw_download%20-%202024-12-16T190537.189.jpg'),
        img('q5bm6q6dkuh146xc7a40exwx1437_download%20-%202024-12-16T190544.506.jpg'),
        img('m37q78ftzf6ks44w5c74a15xz0i3_download%20-%202024-12-16T190443.856.jpg'),
        img('s3aj1g7re13ww7rrzyq7oj5kmtjl_download%20-%202024-12-16T190524.558.jpg'),
        img('uijcpkv8pl2ymhf26pkas8p9ph4h_download%20-%202024-12-16T190514.002.jpg'),
        img('zlgq9jze4wpnbu4packgv4lseeu3_download%20-%202024-12-16T190435.785.jpg'),
        img('0yvofy1aj40xef88c2avrmbnts4b_download%20-%202024-12-16T190439.996.jpg'),
        img('318nyot5h6xpob7k3ii2lpm3274h_download%20-%202024-12-16T190519.138.jpg')
      ]
    },
    activities: [
      {
        name: 'Korean DMZ tour',
        day: 2,
        optional: false,
        image: img('wgn38swjypmjulj2ckthzu60y8g2_Downpic.cc-image330813116.jpg'),
        description: 'North to the demilitarised zone for the third infiltration tunnel, the Dora observatory and the station built for trains that never ran.'
      }
    ],
    program: {
      name: 'Seoul',
      description: 'Two nights beside Seoul station, with a free arrival day and the demilitarised zone after.',
      image: img('vy4n5p7640m6qy7v7lfd0ub7wwhu_shutterstock_487257514.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Osaka',
    subtitle: 'Osaka, Kyoto and Nara',
    dayLabel: 'Day 3 to 4',
    images: [
      img('yfbvuqj5t7yyjle11bzesj245xnj_shutterstock_1024764949%20(1).jpg'),
      img('hr6rqa9fuvyffjnfzg8t9nnmi4ct_shutterstock_787582243%20(1).jpg'),
      img('6mx3dets08l8fqucy8q5ptmmbaih_shutterstock_426748243.jpg'),
      img('j4a2pg3qcw8w7pwsr1eyau64kdjj_shutterstock_691237765.jpg')
    ],
    dayImages: {
      3: [
        img('b9yezwxe78kcf99vkg0pkdtdekqd_1617188022_thumb_11661626_cover_header.jpg'),
        img('xbbuylxsdv442c8wklawh551iqnb_1617186185_1200px-Shitennoji03s3200_(1).jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg')
      ],
      4: [
        img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Flight to Osaka`,
      'Breakfast and check out, then the flight to Osaka',
      'Transfer into the city and check in near Namba',
      'Rest of the day free at your own pace',
      'Optional: an evening along the Dotonbori canal',
      `${DAY_MARK}Day 4 · Kyoto and Nara`,
      'Breakfast, then a full day out with your guide',
      'Kinkaku-ji and the shrine gates of Fushimi Inari',
      'Buffet lunch included',
      'Todai-ji and the deer park at Nara'
    ],
    accommodation: {
      name: 'Richmond Hotel Namba Daikokucho, Osaka',
      description: '2 nights · Breakfast · Standard room · 3★ · Well run hotel near Namba, two subway stops from Dotonbori',
      images: [
        img('o5z6i29uvpe9pfpzpcap52juxlba_Osaka4.jpg'),
        img('zlchn5e80bwx7udlhn5l1zp10z9y_Osaka2.jpg'),
        img('h9m078psd5kl3171l5vr0rcd8m7n_Osaka5.jpg'),
        img('i0vk8asa9da53zb0v0i51r0vew0s_Osaka1.jpg'),
        img('bt46asteiepzpl84gstomkgq0ew5_Osaka0.jpg'),
        img('mngyig2cj98qt5ictqkqk7tudd7c_Osaka3.jpg'),
        img('sve4kf8uih2z5dnp490wmfzclfx9_Osaka.jpg')
      ]
    },
    activities: [
      {
        name: 'Kyoto and Nara with buffet lunch',
        day: 4,
        optional: false,
        image: img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        description: 'Kinkaku-ji and Fushimi Inari in Kyoto, then Todai-ji and the deer park at Nara, with a buffet lunch on the way.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'The flight across to Japan, then a full day through Kyoto and Nara from Namba.',
      image: img('yfbvuqj5t7yyjle11bzesj245xnj_shutterstock_1024764949%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Tokyo',
    subtitle: 'Tokyo and Mount Fuji',
    dayLabel: 'Day 5 to 8',
    images: [
      img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg'),
      img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
      img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg'),
      img('xhgc9a10q89566kee3xewg2tdxbu_shutterstock_245037472.jpg')
    ],
    dayImages: {
      5: [
        img('pcgbwwkgqbfu2982lragk0yyuxtt_Sumida_Park_2011.jpg'),
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
        img('5zaop0gs0hj99wclc25wthm8rhcx_Rainbow_Bridge_(Tokyo)_at_night_8.jpg'),
        img('5d8zp8rm397hfvz02jntd54oueue_8221793202_67e195e47e_o.jpg')
      ],
      6: [
        img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        img('kcoy8gk8ex5maofxb4mqnkm4psfx_shutterstock_2280133521.jpg'),
        img('iau3aw776fn443su99n2scmo27vl_25899482056_b1e61a167c_k.jpg'),
        img('0au3urvu530f5lbontv6ju088ggy_1619590602_shutterstock_1729078399.jpg')
      ],
      7: [
        img('39ndql7vpg0emtn4pc108qs5bzwf_shutterstock_1023211282.jpg'),
        img('mq1b6y8xt0nbhdf5ntp9hisjpp76_6922_01.jpg'),
        img('4ijejmm9p326y1f1f6t762u0izb6_shutterstock_1303030627%20(1).jpg'),
        img('9hdwl7e2hucnek1jhe8l9hwk9s9m_OWAKUDANI%20VALLEY.png')
      ],
      8: [
        img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg'),
        img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
        img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg'),
        img('xhgc9a10q89566kee3xewg2tdxbu_shutterstock_245037472.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Bullet train to Tokyo`,
      'Breakfast and check out, then the bullet train east',
      'Check in at your Shinjuku hotel',
      'Rest of the day free in the city',
      'Optional: the Shibuya crossing and Harajuku lanes',
      `${DAY_MARK}Day 6 · Tokyo city tour`,
      'Breakfast, then a full day coach tour of the city',
      'Meiji shrine and the Imperial Palace gardens',
      'Lunch included on the tour',
      'Asakusa and the Senso-ji temple lanes',
      `${DAY_MARK}Day 7 · Mount Fuji and Hakone`,
      'Breakfast, then out of the city towards Mount Fuji',
      'The fifth station on the mountain, weather permitting',
      'Lake Ashi and the Hakone viewpoints',
      'Back to Tokyo by bullet train',
      `${DAY_MARK}Day 8 · Departure from Tokyo`,
      'Breakfast at the hotel and check out',
      'Private transfer to Narita or Haneda for your flight home'
    ],
    accommodation: {
      name: 'Premier Hotel Cabin Shinjuku, Tokyo',
      description: '3 nights · Breakfast · Standard room · 4★ · Four star hotel in Shinjuku, a few minutes from the station',
      images: [
        img('3o94vkahpdbu8csxpq9m9u65lpgr_leonardo-2101334-cnk-sand-beach-club-09_O-707799.jpg'),
        img('qj6u4qrdeeq0a7y1w0ptfdow7466_271275943.png'),
        img('51v8ymkq64vwfxohmdklpkpqi2m4_271275937.png'),
        img('hn3ikiry3vmzlvex4k7mtvxb3xiv_271275968.png'),
        img('30y4syj55woetgsj29xjky0pa540_271276015.png'),
        img('temirvmbn8rr6tlum2bgqjdw957c_400036635.png'),
        img('ymrlslq3bte39vyadlbuv0s0r8wu_271275975.png'),
        img('tbvz86mf6tuqn92ea3fe4w3w9ma6_302081209.png'),
        img('jec5g8bmkhtlvvu16bqsesnwjaqa_271275997.png'),
        img('mfvv0eqk46q5tdqjyuxo8lemw4ax_271275964.png')
      ]
    },
    activities: [
      {
        name: 'Tokyo city tour with lunch',
        day: 6,
        optional: false,
        image: img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        description: 'A full day by coach from the LOVE statue in Shinjuku through Meiji shrine, the Imperial Palace gardens and Asakusa, with lunch included.'
      },
      {
        name: 'Mount Fuji and Hakone by bullet train',
        day: 7,
        optional: false,
        image: img('39ndql7vpg0emtn4pc108qs5bzwf_shutterstock_1023211282.jpg'),
        description: 'The fifth station on Mount Fuji and Lake Ashi in Hakone, returning to Tokyo on the bullet train in the evening.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Three nights in Shinjuku to finish, with a full day city tour and Mount Fuji with Hakone.',
      image: img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg')
    }
  }
];

const detail = {
  slug: 'korea-and-japan-short-group-tour',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Korea and Japan Short Group Tour',
  alt: 'Seoul city skyline at dusk from Namsan',
  days: '8 days / 7 nights',
  stations: '3 stops',
  transport: 'A flight between countries, bullet trains and shared tours',
  tag: 'Group tour',
  tags: ['Group tour', 'Culture'],
  price: 172039,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Seoul', 'Osaka', 'Kyoto', 'Nara', 'Tokyo', 'Mount Fuji'],
  stats: { days: 8, cities: 3, hotels: 3, activities: 4, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan and Korea expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Eight days, two countries, one flight. The shortest way to see whether you prefer Seoul or Tokyo.',
    quoteMore: 'Book the DMZ run early in the trip. It is shared and the morning slots fill weeks ahead in spring.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days split between two countries: two nights by Seoul station with a day at the demilitarised zone, two in Osaka with a Kyoto and Nara day, then three in Shinjuku with a city tour and Mount Fuji with Hakone.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights with daily breakfast; the flight from Seoul to Osaka and bullet trains in Japan; private airport transfers; a shared tour to the demilitarised zone; a guided day through Kyoto and Nara with a buffet lunch; a full day of guided sightseeing in Tokyo with lunch; the Mount Fuji fifth station and Lake Ashi, returning by bullet train.',
  intro2: 'Not included: international flights; Japan and Korea visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Seoul (Arrival)', text: 'Arrival at Incheon and transfer to your hotel\nCheck in beside Seoul station\nRest of the day free at your own pace\nOptional: the lanes of Insadong and Bukchon', hotel: 'Four Points by Sheraton Josun Seoul Station', highlights: ['Arrival at Incheon and transfer to your hotel', 'Check in beside Seoul station', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: The Korean DMZ (B)', text: 'Breakfast, then north to the demilitarised zone\nThe third infiltration tunnel\nThe Dora observatory looking into the north\nBack in Seoul in the afternoon', hotel: 'Four Points by Sheraton Josun Seoul Station', highlights: ['Breakfast, then north to the demilitarised zone', 'The third infiltration tunnel', 'The Dora observatory looking into the north'] },
    { title: 'Day 3: Flight to Osaka (B)', text: 'Breakfast and check out, then the flight to Osaka\nTransfer into the city and check in near Namba\nRest of the day free at your own pace\nOptional: an evening along the Dotonbori canal', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast and check out, then the flight to Osaka', 'Transfer into the city and check in near Namba', 'Rest of the day free at your own pace'] },
    { title: 'Day 4: Kyoto and Nara (B, L)', text: 'Breakfast, then a full day out with your guide\nKinkaku-ji and the shrine gates of Fushimi Inari\nBuffet lunch included\nTodai-ji and the deer park at Nara', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast, then a full day out with your guide', 'Kinkaku-ji and the shrine gates of Fushimi Inari', 'Buffet lunch included'] },
    { title: 'Day 5: Bullet train to Tokyo (B)', text: 'Breakfast and check out, then the bullet train east\nCheck in at your Shinjuku hotel\nRest of the day free in the city\nOptional: the Shibuya crossing and Harajuku lanes', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Breakfast and check out, then the bullet train east', 'Check in at your Shinjuku hotel', 'Rest of the day free in the city'] },
    { title: 'Day 6: Tokyo city tour (B, L)', text: 'Breakfast, then a full day coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nLunch included on the tour\nAsakusa and the Senso-ji temple lanes', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Breakfast, then a full day coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Lunch included on the tour'] },
    { title: 'Day 7: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone viewpoints\nBack to Tokyo by bullet train', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone viewpoints'] },
    { title: 'Day 8: Departure from Tokyo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Narita or Haneda for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Narita or Haneda for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan and Korea visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'South Korea', href: '/asia/south-korea' },
  { label: detail.title }
];

export const koreaAndJapanShortGroupTourBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const koreaAndJapanShortGroupTourProduct = {
  slug: detail.slug,
  places: ['Seoul', 'Osaka', 'Kyoto', 'Nara', 'Tokyo', 'Mount Fuji'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 4,
  transfers: 12,
  meals: 9,
  price: detail.price,
  images: cardImages
};
