// Japan and South Korea Discovery. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
  img('g01jqzigcq3a7lifmh3xti6bmutl_shutterstock_162338060.jpg'),
  img('n9agnhv0ygvd0bii4pdbzjhb1s1p_shutterstock_1441971380.jpg'),
  img('vy4n5p7640m6qy7v7lfd0ub7wwhu_shutterstock_487257514.jpg'),
  img('7kxl7sgilrs8qq9u4vti16qxyujm_shutterstock_2278159137.jpg'),
  img('fo7gecjnwvtcg8ygpphrauwfv1te_shutterstock_668037958.jpg'),
  img('rulu7loxj83qglw3m3rg6p76seo2_shutterstock_2287943509.jpg'),
  img('yar1i8ubgfu3t356gesyjrpxwcsx_shutterstock_1920580922.jpg'),
  img('udkn4h8at26lrvvwwmlaxguh16hf_shutterstock_1836078037.jpg'),
  img('idgqxbdhnqjuj74i3evh650mu98u_shutterstock_1576805158.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('g01jqzigcq3a7lifmh3xti6bmutl_shutterstock_162338060.jpg'),
  img('n9agnhv0ygvd0bii4pdbzjhb1s1p_shutterstock_1441971380.jpg'),
  img('rulu7loxj83qglw3m3rg6p76seo2_shutterstock_2287943509.jpg'),
  img('1xxdv671kehmif83hcmnzvgcf4dn_shutterstock_258334436.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo, Mount Fuji and Disneyland',
    dayLabel: 'Day 1 to 4',
    images: [
      img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
      img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg'),
      img('xhgc9a10q89566kee3xewg2tdxbu_shutterstock_245037472.jpg'),
      img('7z6zke7b8kmw08mkqkclicf3rawn_shutterstock_310072442.jpg')
    ],
    dayImages: {
      1: [
        img('iele7cut7wosbp83440c5yyy4663_shutterstock_666196894.jpg'),
        img('f2lk3tg5wuhz3cdk1tnn750xqw31_4484_1_1400x1100.jpg'),
        img('e5f438umy5kix56t1stawpi928a0_1618899525_shutterstock_1427133110.jpg'),
        img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg')
      ],
      2: [
        img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        img('kcoy8gk8ex5maofxb4mqnkm4psfx_shutterstock_2280133521.jpg'),
        img('iau3aw776fn443su99n2scmo27vl_25899482056_b1e61a167c_k.jpg'),
        img('0au3urvu530f5lbontv6ju088ggy_1619590602_shutterstock_1729078399.jpg')
      ],
      3: [
        img('39ndql7vpg0emtn4pc108qs5bzwf_shutterstock_1023211282.jpg'),
        img('mq1b6y8xt0nbhdf5ntp9hisjpp76_6922_01.jpg'),
        img('4ijejmm9p326y1f1f6t762u0izb6_shutterstock_1303030627%20(1).jpg'),
        img('9hdwl7e2hucnek1jhe8l9hwk9s9m_OWAKUDANI%20VALLEY.png')
      ],
      4: [
        img('ao7v7y8hbcokyqpnc5q5vhmsfa0f_mainL_01%20(1).jpg'),
        img('8l3nfuzgvhuh0eyewnb0gav1t7w8_1617351605_mickey-mause-832112_1920.jpg'),
        img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
        img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Tokyo`,
      'Arrival at Narita or Haneda and transfer to your hotel',
      'Check in at your Shinjuku hotel',
      'Rest of the day free at your own pace',
      'Optional: the Tokyo Metropolitan Building viewing decks, free of charge',
      `${DAY_MARK}Day 2 · Tokyo city tour`,
      'Breakfast, then a full day coach tour of the city',
      'Meiji shrine and the Imperial Palace gardens',
      'Lunch included on the tour',
      'Asakusa and the Senso-ji temple lanes',
      `${DAY_MARK}Day 3 · Mount Fuji and Hakone`,
      'Breakfast, then out of the city towards Mount Fuji',
      'The fifth station on the mountain, weather permitting',
      'Lake Ashi and the Hakone viewpoints',
      'Back to Tokyo by bullet train',
      `${DAY_MARK}Day 4 · Tokyo Disneyland`,
      'Early breakfast, then across to Tokyo Disneyland',
      'Admission tickets included for the full day',
      'Evening free back in Shinjuku'
    ],
    accommodation: {
      name: 'Premier Hotel Cabin Shinjuku, Tokyo',
      description: '4 nights · Breakfast · Standard room · 4★ · Four star hotel in Shinjuku, a few minutes from the station',
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
        day: 2,
        optional: false,
        image: img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        description: 'A full day by coach from the LOVE statue in Shinjuku through Meiji shrine, the Imperial Palace gardens and Asakusa, with lunch included.'
      },
      {
        name: 'Mount Fuji and Hakone by bullet train',
        day: 3,
        optional: false,
        image: img('39ndql7vpg0emtn4pc108qs5bzwf_shutterstock_1023211282.jpg'),
        description: 'The fifth station on Mount Fuji and Lake Ashi in Hakone, returning to Tokyo on the bullet train in the evening.'
      },
      {
        name: 'Tokyo Disneyland',
        day: 4,
        optional: false,
        image: img('ao7v7y8hbcokyqpnc5q5vhmsfa0f_mainL_01%20(1).jpg'),
        description: 'A full day at Tokyo Disneyland with your admission tickets included, so you can be at the gates when the park opens.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Four nights in Shinjuku with a full day city tour, Mount Fuji with Hakone and a day at Disneyland.',
      image: img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Osaka',
    subtitle: 'Osaka, Kyoto and Nara',
    dayLabel: 'Day 5 to 7',
    images: [
      img('ug749uyawgi0crazlxtbrjwlx10y_shutterstock_281002256.jpg'),
      img('g01jqzigcq3a7lifmh3xti6bmutl_shutterstock_162338060.jpg'),
      img('rwht4ysuk6m51sfh64cy7uri0w9j_shutterstock_1764836006.jpg'),
      img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg')
    ],
    dayImages: {
      5: [
        img('2hn59tmyw7g76wpw5js89g7jlxix_1619611599_shutterstock_560030653.jpg'),
        img('70u3tc8xuuarz97uhxty1b2m3rmq_1617192046_6dd23e1abb0539d588045e45b7e5ddfd.jpg'),
        img('jbkrddvnn2pgz9fmapmdkzlyuget_1617184794_tempat-wisata-di-osaka-3.jpg'),
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg')
      ],
      6: [
        img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('nozs79tjbgfixymgrh3voo9bhf1z_Osaka_Dotonbori_Ebisu_Bridge.jpg'),
        img('8fd2fbhoaurwbsxmgzdldygvuzk4_53207269026_e76f09ed3d_o.jpg')
      ],
      7: [
        img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · On to Osaka`,
      'Breakfast and check out, then the bullet train west',
      'Check in near Namba in Osaka',
      'Rest of the day free in the city',
      'Optional: an evening along the Dotonbori canal',
      `${DAY_MARK}Day 6 · Osaka on foot`,
      'Breakfast, then a half day walking tour of Osaka',
      'Dotonbori and the Kuromon market stalls',
      'The lanes around Shinsekai with your guide',
      'Afternoon free in the city',
      `${DAY_MARK}Day 7 · Kyoto and Nara`,
      'Breakfast, then a full day out with your guide',
      'Kinkaku-ji and the shrine gates of Fushimi Inari',
      'Buffet lunch included',
      'Todai-ji and the deer park at Nara'
    ],
    accommodation: {
      name: 'Richmond Hotel Namba Daikokucho, Osaka',
      description: '3 nights · Breakfast · Standard room · 3★ · Well run hotel near Namba, two subway stops from Dotonbori',
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
        name: 'Osaka half day walking tour',
        day: 6,
        optional: false,
        image: img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        description: 'Half a day on foot through Dotonbori, the Kuromon market and the lanes around Shinsekai with a guide who knows where to eat.'
      },
      {
        name: 'Kyoto and Nara with buffet lunch',
        day: 7,
        optional: false,
        image: img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        description: 'Kinkaku-ji and Fushimi Inari in Kyoto, then Todai-ji and the deer park at Nara, with a buffet lunch on the way.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Three nights near Namba with a walking tour of the city and a full day through Kyoto and Nara.',
      image: img('ug749uyawgi0crazlxtbrjwlx10y_shutterstock_281002256.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Busan',
    dayLabel: 'Day 8 to 9',
    images: [
      img('1xxdv671kehmif83hcmnzvgcf4dn_shutterstock_258334436.jpg'),
      img('rulu7loxj83qglw3m3rg6p76seo2_shutterstock_2287943509.jpg'),
      img('n9agnhv0ygvd0bii4pdbzjhb1s1p_shutterstock_1441971380.jpg'),
      img('mlaol21eu9eqyel15th11uds9n0q_shutterstock_567979750.jpg')
    ],
    dayImages: {
      8: [
        img('revcnaigodmyu326je0r9q37c959_Bhusan%20tower.jpg'),
        img('ks3dtp4z7zjkl57n1m12y1z0nm1y_22440621743_bb5e037dfe_b.jpg'),
        img('75ckpnudsul0u7f6h18szoq4rbw4_Gukje_Market,_October_2019_03.jpg'),
        img('1xxdv671kehmif83hcmnzvgcf4dn_shutterstock_258334436.jpg')
      ],
      9: [
        img('d17t46jg4isi6epic0kormc8g1i8_steptodown.com686938.jpg'),
        img('x0kafzvq9qwryn41368uziru8cxw_247358-Haedong-Yonggung-Temple.jpg'),
        img('1yrmhhlgslt9tgjnm65ztf4b7u65_Korea-Busan-Taejongdae-03.jpg'),
        img('x2fm29x93m8jwqukmtplwmxtyoqc_busan-songdo-skywalk-wood-floor.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Flight to Busan`,
      'Breakfast and check out, then the flight to Busan',
      'Transfer into the city and check in',
      'Rest of the day free at your own pace',
      'Optional: an evening at Haeundae beach',
      `${DAY_MARK}Day 9 · Busan city tour`,
      'Breakfast, then a full day out with your guide',
      'The painted houses of Gamcheon culture village',
      'Haedong Yonggungsa, a temple on the cliffs',
      'The fish market at Jagalchi'
    ],
    accommodation: {
      name: 'Commodore Hotel Busan, Busan',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel above the harbour, near Busan station',
      images: [
        img('jccl7428dkf2q2mug5yj23hp57q5_229642106.jpg'),
        img('4bw131ifdavqju2pzbe3vp08da76_622861863.jpg'),
        img('o7lzc4gn1xyn9j3mzttrscdo1djo_267098538.jpg'),
        img('qggnz6dlssrh82e4e52v8o7yhpw6_267098603.jpg'),
        img('xi9j8fph015bzwdkljqieu1jow2t_622860970.jpg'),
        img('zli67l80rzz8i2vj2zj1ujqpfoek_267098570.jpg'),
        img('3e8kdvik6t0dzxnk6ms6kv704ejx_267098547.jpg'),
        img('fz0wokh4a9wgs06rt2b7i5xjuvlj_267099103.jpg'),
        img('ydg0nyeyvvdxb2hbk3iqvfffs9j5_581069361.jpg'),
        img('y9g2kwm1kayl5ks1xrz7wf2mxnve_267098577.jpg'),
        img('j9zw7kvpqi2maadkw6svcvn7pzv5_267098550.jpg')
      ]
    },
    activities: [
      {
        name: 'Busan city tour',
        day: 9,
        optional: false,
        image: img('d17t46jg4isi6epic0kormc8g1i8_steptodown.com686938.jpg'),
        description: 'The painted houses of Gamcheon, the cliffside temple at Haedong Yonggungsa and the fish market at Jagalchi, with a guide for the full day.'
      }
    ],
    program: {
      name: 'Busan',
      description: 'The short flight across to Korea for two nights in the port city, with a full day of sightseeing.',
      image: img('1xxdv671kehmif83hcmnzvgcf4dn_shutterstock_258334436.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Seoul',
    subtitle: 'Seoul, the DMZ and Nami Island',
    dayLabel: 'Day 10 to 13',
    images: [
      img('j65z24g9vcf1u4dor19wb0osi4w1_shutterstock_268207544.jpg'),
      img('yar1i8ubgfu3t356gesyjrpxwcsx_shutterstock_1920580922.jpg'),
      img('n668r9jt4rklxjyj0e9r3hxs8rxf_shutterstock_129286766.jpg'),
      img('vy4n5p7640m6qy7v7lfd0ub7wwhu_shutterstock_487257514.jpg')
    ],
    dayImages: {
      10: [
        img('1ta6k9ncnkxw74ao7np6i0lkdrce_1617279265_1581765065_n_seoul_tower1.jpg.png'),
        img('g0mep3amx1jjst6otatreg2zyqx7_1617281454_59museum-nasional-korea-wisata-korea.png'),
        img('orqzobm5su2lw1j1v37ujlh2wimk_1617282227_image_(1).png'),
        img('52ns0887pcgsm66tlorauif2blva_1617281858_1954-lotte-world-tower_c_tim-criffith3.png')
      ],
      11: [
        img('wgn38swjypmjulj2ckthzu60y8g2_Downpic.cc-image330813116.jpg'),
        img('oqugu7k5uc6alozarjlqbxm9vryd_1280px-070401_Panmunjeom3.png'),
        img('i8ilwwwzeov5psxtmorpdh25dcae_17782347338_88af897ea7_b.jpg'),
        img('mjzclpuzp94a02hui4s3a2valnyr_jpg.jfif')
      ],
      12: [
        img('1lbyax7mqf9zbnjj18cjhcfpi2tk_Downpic.cc-image264899115.jpg'),
        img('zhhyqkmvgt4fqcg5ffvoqwwd45fo_download%20-%202024-12-16T200702.991.png'),
        img('yf3dss5etdgduo2ust8gjl84obzx_filters_focal().webp'),
        img('lm8e6uzwg0fipuwq8fd6xpbd4ic5_download%20-%202024-12-17T114428.562.jpg')
      ],
      13: [
        img('j65z24g9vcf1u4dor19wb0osi4w1_shutterstock_268207544.jpg'),
        img('yar1i8ubgfu3t356gesyjrpxwcsx_shutterstock_1920580922.jpg'),
        img('n668r9jt4rklxjyj0e9r3hxs8rxf_shutterstock_129286766.jpg'),
        img('vy4n5p7640m6qy7v7lfd0ub7wwhu_shutterstock_487257514.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 10 · On to Seoul`,
      'Breakfast and check out, then north to Seoul',
      'Check in beside Seoul station',
      'Rest of the day free in the city',
      'Optional: the lanes of Insadong and Bukchon',
      `${DAY_MARK}Day 11 · The Korean DMZ`,
      'Breakfast, then north to the demilitarised zone',
      'The third infiltration tunnel',
      'The Dora observatory looking into the north',
      'Back in Seoul in the afternoon',
      `${DAY_MARK}Day 12 · Nami Island`,
      'Breakfast, then a full day out to Nami Island',
      'The ferry across and the tree lined avenues',
      'The Garden of Morning Calm or a rail bike ride',
      'Back in Seoul in the evening',
      `${DAY_MARK}Day 13 · Departure from Seoul`,
      'Breakfast at the hotel and check out',
      'Private transfer to Incheon Airport for your flight home'
    ],
    accommodation: {
      name: 'Four Points by Sheraton Josun Seoul Station, Seoul',
      description: '3 nights · Breakfast · Standard room · 4★ · Four star hotel beside Seoul station, on the airport train line',
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
        day: 11,
        optional: false,
        image: img('wgn38swjypmjulj2ckthzu60y8g2_Downpic.cc-image330813116.jpg'),
        description: 'North to the demilitarised zone for the third infiltration tunnel, the Dora observatory and the station built for trains that never ran.'
      },
      {
        name: 'Nami Island day tour',
        day: 12,
        optional: false,
        image: img('1lbyax7mqf9zbnjj18cjhcfpi2tk_Downpic.cc-image264899115.jpg'),
        description: 'The tree lined avenues of Nami Island, reached by ferry, with the Garden of Morning Calm or a rail bike ride on the way.'
      }
    ],
    program: {
      name: 'Seoul',
      description: 'Three nights by Seoul station with the demilitarised zone one day and Nami Island the next.',
      image: img('j65z24g9vcf1u4dor19wb0osi4w1_shutterstock_268207544.jpg')
    }
  }
];

const detail = {
  slug: 'japan-and-south-korea-discovery',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan and South Korea Discovery',
  alt: 'Gyeongbokgung palace gate with Seoul skyline behind',
  days: '13 days / 12 nights',
  stations: '4 stops',
  transport: 'Bullet trains, two flights and guided day tours',
  tag: 'Grand tour',
  tags: ['Grand tour', 'Culture'],
  price: 280672,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Disneyland', 'Osaka', 'Kyoto', 'Nara', 'Busan', 'Seoul'],
  stats: { days: 13, cities: 4, hotels: 4, activities: 8, transfers: 18 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['8 experiences', 'Activities'],
    ['18 transfers', 'Transport'],
    ['14 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan and Korea expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two countries in thirteen days, and only one short flight in the middle. Japan for the detail, Korea for the energy.',
    quoteMore: 'Keep an evening free in Busan for Haeundae beach. The city feels completely different after dark.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Thirteen days across two countries: four nights in Shinjuku with a city tour, Mount Fuji and Disneyland, three in Osaka with Kyoto and Nara, then across to Korea for two nights in Busan and three in Seoul with the DMZ and Nami Island.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 12 nights with daily breakfast; bullet trains in Japan and the flight across to Busan; private airport transfers; a full day of guided sightseeing in Tokyo with lunch; the Mount Fuji fifth station and Lake Ashi, returning by bullet train; admission to Tokyo Disneyland; a guided walk through central Osaka; a guided day through Kyoto and Nara with a buffet lunch; a full day of sightseeing in Busan; a shared tour to the demilitarised zone; a full day out to Nami Island.',
  intro2: 'Not included: international flights; Japan and Korea visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nRest of the day free at your own pace\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo city tour (B, L)', text: 'Breakfast, then a full day coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nLunch included on the tour\nAsakusa and the Senso-ji temple lanes', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Breakfast, then a full day coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Lunch included on the tour'] },
    { title: 'Day 3: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone viewpoints\nBack to Tokyo by bullet train', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone viewpoints'] },
    { title: 'Day 4: Tokyo Disneyland (B)', text: 'Early breakfast, then across to Tokyo Disneyland\nAdmission tickets included for the full day\nEvening free back in Shinjuku', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Early breakfast, then across to Tokyo Disneyland', 'Admission tickets included for the full day', 'Evening free back in Shinjuku'] },
    { title: 'Day 5: On to Osaka (B)', text: 'Breakfast and check out, then the bullet train west\nCheck in near Namba in Osaka\nRest of the day free in the city\nOptional: an evening along the Dotonbori canal', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast and check out, then the bullet train west', 'Check in near Namba in Osaka', 'Rest of the day free in the city'] },
    { title: 'Day 6: Osaka on foot (B)', text: 'Breakfast, then a half day walking tour of Osaka\nDotonbori and the Kuromon market stalls\nThe lanes around Shinsekai with your guide\nAfternoon free in the city', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast, then a half day walking tour of Osaka', 'Dotonbori and the Kuromon market stalls', 'The lanes around Shinsekai with your guide'] },
    { title: 'Day 7: Kyoto and Nara (B, L)', text: 'Breakfast, then a full day out with your guide\nKinkaku-ji and the shrine gates of Fushimi Inari\nBuffet lunch included\nTodai-ji and the deer park at Nara', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast, then a full day out with your guide', 'Kinkaku-ji and the shrine gates of Fushimi Inari', 'Buffet lunch included'] },
    { title: 'Day 8: Flight to Busan (B)', text: 'Breakfast and check out, then the flight to Busan\nTransfer into the city and check in\nRest of the day free at your own pace\nOptional: an evening at Haeundae beach', hotel: 'Commodore Hotel Busan', highlights: ['Breakfast and check out, then the flight to Busan', 'Transfer into the city and check in', 'Rest of the day free at your own pace'] },
    { title: 'Day 9: Busan city tour (B)', text: 'Breakfast, then a full day out with your guide\nThe painted houses of Gamcheon culture village\nHaedong Yonggungsa, a temple on the cliffs\nThe fish market at Jagalchi', hotel: 'Commodore Hotel Busan', highlights: ['Breakfast, then a full day out with your guide', 'The painted houses of Gamcheon culture village', 'Haedong Yonggungsa, a temple on the cliffs'] },
    { title: 'Day 10: On to Seoul (B)', text: 'Breakfast and check out, then north to Seoul\nCheck in beside Seoul station\nRest of the day free in the city\nOptional: the lanes of Insadong and Bukchon', hotel: 'Four Points by Sheraton Josun Seoul Station', highlights: ['Breakfast and check out, then north to Seoul', 'Check in beside Seoul station', 'Rest of the day free in the city'] },
    { title: 'Day 11: The Korean DMZ (B)', text: 'Breakfast, then north to the demilitarised zone\nThe third infiltration tunnel\nThe Dora observatory looking into the north\nBack in Seoul in the afternoon', hotel: 'Four Points by Sheraton Josun Seoul Station', highlights: ['Breakfast, then north to the demilitarised zone', 'The third infiltration tunnel', 'The Dora observatory looking into the north'] },
    { title: 'Day 12: Nami Island (B)', text: 'Breakfast, then a full day out to Nami Island\nThe ferry across and the tree lined avenues\nThe Garden of Morning Calm or a rail bike ride\nBack in Seoul in the evening', hotel: 'Four Points by Sheraton Josun Seoul Station', highlights: ['Breakfast, then a full day out to Nami Island', 'The ferry across and the tree lined avenues', 'The Garden of Morning Calm or a rail bike ride'] },
    { title: 'Day 13: Departure from Seoul (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Incheon Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Incheon Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan and Korea visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Japan', href: '/asien/japan' },
  { label: detail.title }
];

export const japanAndSouthKoreaDiscoveryBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanAndSouthKoreaDiscoveryProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Disneyland', 'Osaka', 'Kyoto', 'Nara', 'Busan', 'Seoul'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 13,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 8,
  transfers: 18,
  meals: 14,
  price: detail.price,
  images: cardImages
};
