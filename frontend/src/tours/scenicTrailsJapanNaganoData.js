// Scenic Trails of Japan with Nagano. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('1yv1a968ghyiwiwbsbwvzfu388l0_shutterstock_2300479567.jpg'),
  img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg'),
  img('a3klwqjmrp3w9t5hfpniopbrg0ho_shutterstock_2333983371.jpg'),
  img('wkz3rsmvvlhs2o7orc70p6masz8g_shutterstock_2248287787.jpg'),
  img('raxb9kxswnyu9cfxwl7hriz6e6dq_shutterstock_2464578063.jpg'),
  img('idgqxbdhnqjuj74i3evh650mu98u_shutterstock_1576805158.jpg'),
  img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg'),
  img('j2yajxhi3hugp224iylhhjo0vdn4_shutterstock_2354853383.jpg'),
  img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg'),
  img('d52y3g1627qkpcuaym0v8w467dir_shutterstock_1075480004.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('1yv1a968ghyiwiwbsbwvzfu388l0_shutterstock_2300479567.jpg'),
  img('fm7l8ugdzdu3knfcbz1r2t0n1ogm_shutterstock_2236560499.jpg'),
  img('mq1b6y8xt0nbhdf5ntp9hisjpp76_6922_01.jpg'),
  img('4ijejmm9p326y1f1f6t762u0izb6_shutterstock_1303030627%20(1).jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Disneyland',
    dayLabel: 'Day 1 to 4',
    images: [
      img('1yv1a968ghyiwiwbsbwvzfu388l0_shutterstock_2300479567.jpg'),
      img('9gxo0w9zfmmbmjg8895gp4h3leqm_shutterstock_1966867324.jpg'),
      img('udkn4h8at26lrvvwwmlaxguh16hf_shutterstock_1836078037.jpg'),
      img('8uer6kpve5exz099231cw3oei92e_shutterstock_58934503.jpg')
    ],
    dayImages: {
      1: [
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
        img('5d8zp8rm397hfvz02jntd54oueue_8221793202_67e195e47e_o.jpg'),
        img('dvnb132y05sidy9r0omo9zqe0ram_15849220641_a5a96af87c_o.jpg'),
        img('1yv1a968ghyiwiwbsbwvzfu388l0_shutterstock_2300479567.jpg')
      ],
      2: [
        img('ln9lthkbf3fh2phj519shusjemgc_shutterstock_1435466990.jpg'),
        img('nc2finq48tuhv9jgrm2c7pm097jz_1617362315_Sensoji-Temple-tokyo-scaled.jpg'),
        img('k4r7mg7wmv277ov1alfi1wctpvzf_1618899299_shutterstock_456532732.jpg'),
        img('l2ve6s75yoif0uquecbp9gh6poh6_Screenshot%202022-09-21%20164951.png')
      ],
      3: [
        img('fm7l8ugdzdu3knfcbz1r2t0n1ogm_shutterstock_2236560499.jpg'),
        img('mq1b6y8xt0nbhdf5ntp9hisjpp76_6922_01.jpg'),
        img('4ijejmm9p326y1f1f6t762u0izb6_shutterstock_1303030627%20(1).jpg'),
        img('9hdwl7e2hucnek1jhe8l9hwk9s9m_OWAKUDANI%20VALLEY.png')
      ],
      4: [
        img('u64djmexd9srjx7ite2nn1s6v0xd_shutterstock_2055512132.jpg'),
        img('8l3nfuzgvhuh0eyewnb0gav1t7w8_1617351605_mickey-mause-832112_1920.jpg'),
        img('1yv1a968ghyiwiwbsbwvzfu388l0_shutterstock_2300479567.jpg'),
        img('9gxo0w9zfmmbmjg8895gp4h3leqm_shutterstock_1966867324.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Tokyo`,
      'Arrival at Narita or Haneda and transfer to your hotel',
      'Check in at your Shinjuku hotel',
      'Rest of the day free at your own pace',
      'Optional: the Tokyo Metropolitan Building viewing decks, free of charge',
      `${DAY_MARK}Day 2 · Tokyo sightseeing`,
      'Breakfast, then a guided day through the city',
      'Meiji shrine and the Imperial Palace gardens',
      'Asakusa and the Senso-ji temple lanes',
      'Evening free in Shinjuku',
      `${DAY_MARK}Day 3 · Mount Fuji and Gotemba`,
      'Breakfast, then out of the city towards Mount Fuji',
      'The fifth station on the mountain, weather permitting',
      'Lake Ashi and the Hakone viewpoints',
      'A shopping stop at the Gotemba outlets',
      `${DAY_MARK}Day 4 · Tokyo Disneyland`,
      'Early breakfast, then across to Tokyo Disneyland',
      'Admission tickets included for the full day',
      'Evening free back in Shinjuku'
    ],
    accommodation: {
      name: 'Shinjuku Washington Hotel Annex, Tokyo',
      description: '4 nights · Breakfast · Super deluxe room · 4★ · Four star hotel in Shinjuku, a short walk from the station',
      images: [
        img('5xxzve0xthj993jtzjk7ktk3uu6h_pixelcut-export%20(1).jpeg'),
        img('i3yxzwe18ulp03frne8pk67dz260_4190725563809895-8af87888_z.png'),
        img('z7qmjecd45zdvg32hu1jel42gyh8_4190725563809895-2f11415d_z.png'),
        img('uqebg4ttfn10igi04ldyakc8h51s_pixelcut-export.jpeg'),
        img('eohlxoc941sctlbsjrhk2o70thav_4190725563809895-cc975d5d_z.png'),
        img('2dtdr47j869uiygsyfmmw20omoa0_pixelcut-export%20(1).jpeg'),
        img('0xlksm3m2vkh6grxvjoxqg50tgd1_4190725563809895-8e402282_z.png'),
        img('oqqxh5rgf0thm5it2x8h2hznxazy_4190725563809895-c97492a3_z.png')
      ]
    },
    activities: [
      {
        name: 'Tokyo sightseeing tour',
        day: 2,
        optional: false,
        image: img('ln9lthkbf3fh2phj519shusjemgc_shutterstock_1435466990.jpg'),
        description: 'A guided day from the LOVE statue in Shinjuku through Meiji shrine, the Imperial Palace gardens and the temple lanes of Asakusa.'
      },
      {
        name: 'Mount Fuji, Hakone and Gotemba outlets',
        day: 3,
        optional: false,
        image: img('fm7l8ugdzdu3knfcbz1r2t0n1ogm_shutterstock_2236560499.jpg'),
        description: 'The fifth station on Mount Fuji, Lake Ashi in Hakone and a shopping stop at the Gotemba outlets on the way back.'
      },
      {
        name: 'Tokyo Disneyland',
        day: 4,
        optional: false,
        image: img('u64djmexd9srjx7ite2nn1s6v0xd_shutterstock_2055512132.jpg'),
        description: 'A full day at Tokyo Disneyland with your admission tickets included, so you can be at the gates when the park opens.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Four nights in Shinjuku with a guided city day, Mount Fuji with the Gotemba outlets and a day at Disneyland.',
      image: img('1yv1a968ghyiwiwbsbwvzfu388l0_shutterstock_2300479567.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nagano',
    dayLabel: 'Day 5 to 6',
    images: [
      img('raxb9kxswnyu9cfxwl7hriz6e6dq_shutterstock_2464578063.jpg'),
      img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg')
    ],
    dayImages: {
      5: [
        img('bhqkjkp9r26gnr32grx0x1ygccx4_6005_top.jpg'),
        img('coejtrreokuqm3ua5uboz838cclw_matsumoto_castle_1-1024x704.jpg'),
        img('raxb9kxswnyu9cfxwl7hriz6e6dq_shutterstock_2464578063.jpg'),
        img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg')
      ],
      6: [
        img('pnvpps8nmrnpkcqtug43bikvj3h2_Zenkoji-2.jpg'),
        img('glvvy2079nzaqhmmd7wfo2enbc02_8668551948_a995d63ec2_b.jpg'),
        img('yygb1wvvs8vkalt4i206rz7ah6vo_Jigokudani%20Yaen-Koen-1.jpg'),
        img('l58h2rpdyefy0o8sjov25ntliaiy_Nishinomon-Yoshinoya%20Sake%20Brewery-1.webp')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Into the Nagano mountains`,
      'Breakfast and check out, then the train north',
      'Check in at Nozawa Onsen in the mountains',
      'Rest of the day free at the hot spring baths',
      'Optional: a walk through the old village lanes',
      `${DAY_MARK}Day 6 · Snow monkeys and sake`,
      'Breakfast, then a full day out with your guide',
      'The macaques bathing at Jigokudani',
      'Zenkoji temple in Nagano',
      'A tasting at an old sake brewery'
    ],
    accommodation: {
      name: 'Nozawa Grand Hotel, Nagano',
      description: '2 nights · Breakfast · Deluxe room · 3★ · Mountain hotel at Nozawa Onsen, with hot spring baths',
      images: [
        img('02p8fy015jtcv64i80x6isrdts1v_5540162.jpg'),
        img('7blloz2yxvrkyquwl3rmcf4hsiqa_5540152.jpg'),
        img('yid3rr2cn7uv835zih6ihdm8c4tn_14031816.jpg'),
        img('vv4l5hbeazv3t5xxwlawetq80bx2_14031818.jpg'),
        img('l4wn580c2k0vztsebxteiqeeohio_14031817.jpg'),
        img('4lwd0fiq1qi26dikf5h2jjjp4jez_14031803.jpg'),
        img('t0zhhdgtbwh5i95yt3yjctch2fkp_5540041.jpg'),
        img('ftmkfck2vudd5ldhygj2rva7zys8_14031819.jpg'),
        img('w13mdel0czq3bn3acbwxecpg078p_5538208.jpg')
      ]
    },
    activities: [
      {
        name: 'Snow monkeys, Zenkoji temple and a sake tasting',
        day: 6,
        optional: false,
        image: img('pnvpps8nmrnpkcqtug43bikvj3h2_Zenkoji-2.jpg'),
        description: 'The macaques bathing at Jigokudani, Nagano\'s great Zenkoji temple and a tasting at one of the valley\'s old sake breweries.'
      }
    ],
    program: {
      name: 'Nagano',
      description: 'Two nights in the mountains at Nozawa Onsen, with a quiet arrival day and the snow monkeys, Zenkoji and sake the next.',
      image: img('raxb9kxswnyu9cfxwl7hriz6e6dq_shutterstock_2464578063.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Osaka',
    subtitle: 'Osaka to Kyoto, Nara and Arashiyama',
    dayLabel: 'Day 7 to 11',
    images: [
      img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg'),
      img('fo7gecjnwvtcg8ygpphrauwfv1te_shutterstock_668037958.jpg'),
      img('a3klwqjmrp3w9t5hfpniopbrg0ho_shutterstock_2333983371.jpg'),
      img('6k3h3zulkuxlsrwgqhlm3j0vbgwx_shutterstock_1370721374.jpg')
    ],
    dayImages: {
      7: [
        img('8eqfd09dtnyk0o5zl4ckmcl3qcjv_teamLab%20Botanical%20Garden%20Osaka%20(1).png'),
        img('qt8xpjtgf4n47anz6bv7cbtfoc3d_1617184992_tower-5719067_1920.jpg'),
        img('6ler7sujf35tfk5o4c0knfk97jlp_1617178150_osaka-2159435_1920.jpg'),
        img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg')
      ],
      8: [
        img('t7o4c4oy73osh6vb4q24lzmx6pd2_Osaka%20Castle-2.jpg'),
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('i7nrvo8z1e7l0al6blhkoqjixwpa_shinsekai.jpg')
      ],
      9: [
        img('mwx6s89kahoera83qyd2vrirvf8u_[KyotoNaraDayTour]Arashiyamatrain,FushimiInariShrine%20(1).jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg'),
        img('itn4b1gsmar7c1zpcwr0qwfb2fit_unnamed%20(5).jpg')
      ],
      10: [
        img('z8wml2hpcxmnr4jbjewlh73ae0wm_Nabana%20no%20Sato-2.jpg'),
        img('3ylnmxrrfldqf8oz5lx3rnixqyxg_Kamagatani%20Valley-1.webp'),
        img('umsu8ptweryk02b7z0h7wal8omon_Nabana%20no%20Sato-1.webp'),
        img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg')
      ],
      11: [
        img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg'),
        img('fo7gecjnwvtcg8ygpphrauwfv1te_shutterstock_668037958.jpg'),
        img('a3klwqjmrp3w9t5hfpniopbrg0ho_shutterstock_2333983371.jpg'),
        img('6k3h3zulkuxlsrwgqhlm3j0vbgwx_shutterstock_1370721374.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · South to Osaka`,
      'Breakfast and check out, then the journey south',
      'Check in opposite Shin-Osaka station',
      'Rest of the day free in the city',
      'Optional: an evening along the Dotonbori canal',
      `${DAY_MARK}Day 8 · Osaka on foot`,
      'Breakfast, then a half day walking tour of Osaka',
      'Dotonbori and the Kuromon market stalls',
      'The lanes around Shinsekai with your guide',
      'Afternoon free in the city',
      `${DAY_MARK}Day 9 · Kyoto, Nara and Arashiyama`,
      'Breakfast, then a full day out with your guide',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'The deer park and Todai-ji temple in Nara',
      'The bamboo grove and Sagano scenic train at Arashiyama',
      `${DAY_MARK}Day 10 · Blossom and illuminations`,
      'Breakfast, then a day out to the blossom gardens',
      'Nabana no Sato in the late afternoon',
      'The light tunnels and fields after dark',
      'Back in Osaka in the evening',
      `${DAY_MARK}Day 11 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'APA Hotel Shin Osaka Ekimae, Osaka',
      description: '4 nights · Breakfast · Standard room · 3★ · Simple hotel opposite Shin-Osaka station, handy for the trains',
      images: [
        img('ah66h1vh6wudb3995119k30usoaq_APA%20Hotel%20Shin%20Osaka%20Ekimae-1.webp'),
        img('cy3uvlr3hth9ri8zm8998swddotj_APA%20Hotel%20Shin%20Osaka%20Ekimae-6.webp'),
        img('p9u8gxrilfwf8qyr1sbevr0411yh_APA%20Hotel%20Shin%20Osaka%20Ekimae-3.webp'),
        img('by69ive16anhtuv4pmtkdeyxlf9r_APA%20Hotel%20Shin%20Osaka%20Ekimae-4.webp'),
        img('nu2xq3hh9za0jkjrk9ooba4pnqcx_APA%20Hotel%20Shin%20Osaka%20Ekimae-2.webp'),
        img('ulc5h15cuhxgeambladv8hzljxom_APA%20Hotel%20Shin%20Osaka%20Ekimae-5.webp')
      ]
    },
    activities: [
      {
        name: 'Osaka walking tour',
        day: 8,
        optional: false,
        image: img('t7o4c4oy73osh6vb4q24lzmx6pd2_Osaka%20Castle-2.jpg'),
        description: 'Half a day on foot through Dotonbori, the Kuromon market and the lanes around Shinsekai with a guide who knows where to eat.'
      },
      {
        name: 'Kyoto, Nara and Arashiyama',
        day: 9,
        optional: false,
        image: img('mwx6s89kahoera83qyd2vrirvf8u_[KyotoNaraDayTour]Arashiyamatrain,FushimiInariShrine%20(1).jpg'),
        description: 'Kinkaku-ji and the deer park at Nara, then the bamboo grove at Arashiyama with a ride on the open sided Sagano scenic train.'
      },
      {
        name: 'Sakura Magic and Nabana no Sato illumination',
        day: 10,
        optional: false,
        image: img('z8wml2hpcxmnr4jbjewlh73ae0wm_Nabana%20no%20Sato-2.jpg'),
        description: 'Blossom gardens by day and then Nabana no Sato after dark, where millions of lights are strung into tunnels and fields.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Four nights in Osaka with a walking tour, a day through Kyoto, Nara and Arashiyama, and the Nabana no Sato lights.',
      image: img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg')
    }
  }
];

const detail = {
  slug: 'scenic-trails-of-japan-with-nagano',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Scenic Trails of Japan with Nagano',
  alt: 'Hot spring village under snow in Nagano, Japan',
  days: '11 days / 10 nights',
  stations: '3 stops',
  transport: 'Bullet trains, private transfers and guided day tours',
  tag: 'Grand tour',
  tags: ['Family', 'Nature'],
  price: 257757,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Disneyland', 'Nagano', 'Osaka', 'Kyoto', 'Nara'],
  stats: { days: 11, cities: 3, hotels: 3, activities: 7, transfers: 18 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['18 transfers', 'Transport'],
    ['10 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Eleven days with a mountain village in the middle. The two nights at Nozawa Onsen are what people remember.',
    quoteMore: 'Nozawa has thirteen free public baths through the village. Walk between a few in the evening with a small towel, it is a local ritual.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eleven days with a mountain break in the middle: four nights in Shinjuku with a city day, Mount Fuji and Disneyland, two at Nozawa Onsen for the snow monkeys and a sake tasting, then four in Osaka with Kyoto, Nara, Arashiyama and the Nabana no Sato lights.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 10 nights with daily breakfast, including a mountain hotel at Nozawa Onsen; bullet trains throughout; private airport transfers; Tokyo sightseeing tour; Mount Fuji fifth station with Hakone and the Gotemba outlets; Tokyo Disneyland tickets; snow monkeys, Zenkoji temple and sake day trip; Osaka walking tour; Kyoto and Nara tour with Arashiyama and the Sagano train; Sakura Magic and Nabana no Sato tour.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nRest of the day free at your own pace\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo sightseeing (B)', text: 'Breakfast, then a guided day through the city\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in Shinjuku', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Breakfast, then a guided day through the city', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Mount Fuji and Gotemba (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone viewpoints\nA shopping stop at the Gotemba outlets', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone viewpoints'] },
    { title: 'Day 4: Tokyo Disneyland (B)', text: 'Early breakfast, then across to Tokyo Disneyland\nAdmission tickets included for the full day\nEvening free back in Shinjuku', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Early breakfast, then across to Tokyo Disneyland', 'Admission tickets included for the full day', 'Evening free back in Shinjuku'] },
    { title: 'Day 5: Into the Nagano mountains (B)', text: 'Breakfast and check out, then the train north\nCheck in at Nozawa Onsen in the mountains\nRest of the day free at the hot spring baths\nOptional: a walk through the old village lanes', hotel: 'Nozawa Grand Hotel', highlights: ['Breakfast and check out, then the train north', 'Check in at Nozawa Onsen in the mountains', 'Rest of the day free at the hot spring baths'] },
    { title: 'Day 6: Snow monkeys and sake (B)', text: 'Breakfast, then a full day out with your guide\nThe macaques bathing at Jigokudani\nZenkoji temple in Nagano\nA tasting at an old sake brewery', hotel: 'Nozawa Grand Hotel', highlights: ['Breakfast, then a full day out with your guide', 'The macaques bathing at Jigokudani', 'Zenkoji temple in Nagano'] },
    { title: 'Day 7: South to Osaka (B)', text: 'Breakfast and check out, then the journey south\nCheck in opposite Shin-Osaka station\nRest of the day free in the city\nOptional: an evening along the Dotonbori canal', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Breakfast and check out, then the journey south', 'Check in opposite Shin-Osaka station', 'Rest of the day free in the city'] },
    { title: 'Day 8: Osaka on foot (B)', text: 'Breakfast, then a half day walking tour of Osaka\nDotonbori and the Kuromon market stalls\nThe lanes around Shinsekai with your guide\nAfternoon free in the city', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Breakfast, then a half day walking tour of Osaka', 'Dotonbori and the Kuromon market stalls', 'The lanes around Shinsekai with your guide'] },
    { title: 'Day 9: Kyoto, Nara and Arashiyama (B)', text: 'Breakfast, then a full day out with your guide\nKinkaku-ji, the golden pavilion, on its pond\nThe deer park and Todai-ji temple in Nara\nThe bamboo grove and Sagano scenic train at Arashiyama', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Breakfast, then a full day out with your guide', 'Kinkaku-ji, the golden pavilion, on its pond', 'The deer park and Todai-ji temple in Nara'] },
    { title: 'Day 10: Blossom and illuminations (B)', text: 'Breakfast, then a day out to the blossom gardens\nNabana no Sato in the late afternoon\nThe light tunnels and fields after dark\nBack in Osaka in the evening', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Breakfast, then a day out to the blossom gardens', 'Nabana no Sato in the late afternoon', 'The light tunnels and fields after dark'] },
    { title: 'Day 11: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const scenicTrailsJapanNaganoBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const scenicTrailsJapanNaganoProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Disneyland', 'Nagano', 'Osaka', 'Kyoto', 'Nara'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 11,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 7,
  transfers: 18,
  meals: 10,
  price: detail.price,
  images: cardImages
};
