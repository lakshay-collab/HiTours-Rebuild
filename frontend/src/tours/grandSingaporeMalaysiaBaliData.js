// Grand Singapore, Malaysia and Bali Holiday. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
  img('1cq8i4ccjxzj2kcrf5n2lspi78ha_shutterstock_173996327%20(1).jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
  img('8npmp4jkvqvuucll4nlpxbbvvyhs_shutterstock_121740241.jpg'),
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
  img('s5j9abac6eos8fh9hniqc6v8z6zl_shutterstock_1221988960%20(1).jpg'),
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('3kicse3qojgtvpf5e4aqzvskrzu4_shutterstock_203804005.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    subtitle: 'Singapore to Sentosa',
    dayLabel: 'Day 1 to 3',
    images: [
      img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
      img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg'),
      img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
      img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg')
    ],
    dayImages: {
      1: [
        img('we8ipbdppywm90csgjosarhe6gkf_87a2936a-5dec-41e1-8f16-8017a326a83c.jpg'),
        img('cgx6ab1cspd7wu0e04jze3dzbibk_singapore_night_safari.jpg'),
        img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
        img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg')
      ],
      2: [
        img('t66b7ifmvhkbmh31tc0p66uufdkx_5gu7yvn61mqd6ywow5ja4y392lf0_shutterstock_2148400015.jpg'),
        img('5ny753dccex42fsfmdxfhlzlfvah_1626351333_shutterstock_302633321.jpg'),
        img('98ihjtm4usyxo0d2rmahen57evkp_Shark%20Tunnel%20-%20Family%20(1)%20(1)-min.jpg'),
        img('dtnokqibc19vi9lnsikgg7tenppl_VIAL3676.JPG')
      ],
      3: [
        img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
        img('etwjtvxjtctcyj8zmdmmtz5rnff7_1563607619_shutterstock_1155676858.jpg'),
        img('xkc5gws4qd4uax4hvxwihi35fv35_1563619864_shutterstock_793620280.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Flight out and night safari`,
      'Flight from Delhi to Singapore, included in your package',
      'Arrival at Changi Airport and private transfer to your hotel',
      'Evening tram ride at the Singapore Night Safari',
      'Dinner is included at the hotel tonight',
      `${DAY_MARK}Day 2 · A full day on Sentosa`,
      'Breakfast, then across to Sentosa island',
      'Cable car sky pass over the harbour and the island',
      'S.E.A. Aquarium and Madame Tussauds',
      'Wings of Time show on Siloso beach in the evening',
      `${DAY_MARK}Day 3 · City tour and Marina Bay`,
      'Breakfast, then a half day city tour with a guide',
      'Merlion Park, the colonial quarter and Chinatown',
      'The SkyPark deck above Marina Bay Sands',
      'Optional: the Supertree light show at Gardens by the Bay'
    ],
    accommodation: {
      name: 'ibis Singapore on Bencoolen, Singapore',
      description: '3 nights · Breakfast and one main meal daily · Standard room · 3★ · Bencoolen hotel, five minutes on foot from the metro',
      images: [
        img('3ecjbfwwjk3w0kvxuvsfti7zc8aq_490616880.jpg'),
        img('zgv2w5r81fne6jip7gt7t3ka66qs_490616814.jpg'),
        img('y2zgmmdrmnzjp1eki6bnvex7c0mo_490616874.jpg'),
        img('sebprkj72kw8kx80twsi71uzf7ft_490616796.jpg'),
        img('xgsqe97ltdl3ka4vdbadqm97d5zx_519694616.jpg'),
        img('o9olgmxgn33sl3v04o6we34bgmk9_490616799.jpg'),
        img('8kxyxn44sb8qfvf84wbbywj8qf5k_490616826.jpg'),
        img('7lwa5q7rl0sy8wnxgojbqu02xsss_490616867.jpg'),
        img('hwv4dh4yljcprvn5nalwah2u6etu_519694618.jpg'),
        img('bvhzphikg9pgifcvqsqrpwqsg9ta_519694628.jpg'),
        img('p24nfbohyh12mcdg69vl63qtxvvd_519694617.jpg'),
        img('xwtr5rutnm9n2w8pdo2pdszclhlo_519694624.jpg'),
        img('vcizule211otvq916r7ex23020bo_519694625.jpg'),
        img('l3j4wxlrvce6drt9n8us6fp0bwct_490616861.jpg')
      ]
    },
    activities: [
      {
        name: 'Night Safari with tram ride',
        day: 1,
        optional: false,
        image: img('we8ipbdppywm90csgjosarhe6gkf_87a2936a-5dec-41e1-8f16-8017a326a83c.jpg'),
        description: 'The world\'s first nocturnal zoo, with a tram ride through seven habitats and walking trails where the animals are at their most active.'
      },
      {
        name: 'Sentosa cable car sky pass',
        day: 2,
        optional: false,
        image: img('t66b7ifmvhkbmh31tc0p66uufdkx_5gu7yvn61mqd6ywow5ja4y392lf0_shutterstock_2148400015.jpg'),
        description: 'Two cable car lines over the harbour and across Sentosa, the easiest way to see the island and the port from above.'
      },
      {
        name: 'S.E.A. Aquarium',
        day: 2,
        optional: false,
        image: img('98ihjtm4usyxo0d2rmahen57evkp_Shark%20Tunnel%20-%20Family%20(1)%20(1)-min.jpg'),
        description: 'One of the largest aquariums anywhere, with a ten metre viewing panel, reef sharks, manta rays and forty five thousand animals.'
      },
      {
        name: 'Madame Tussauds Singapore',
        day: 2,
        optional: false,
        image: img('2snnye807m5tkqj35nzmqanms5lt_AIP_EDI_SevenOne-Films%20Madame%20Tussauds%20SG.jpg'),
        description: 'Wax figures, the Images of Singapore ride and the Spirit of Singapore boat ride, all on the Imbiah lookout at Sentosa.'
      },
      {
        name: 'Wings of Time show',
        day: 2,
        optional: false,
        image: img('oupzh98wmtqh6wxe78yiqb4zxl5m_0ca197e1dfdbb75f593c55c41834fbe7-4.jpg'),
        description: 'An evening show on Siloso beach with water jets, lasers and fire, staged over the sea at the end of your Sentosa day.'
      },
      {
        name: 'Singapore sightseeing tour',
        day: 3,
        optional: false,
        image: img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        description: 'A half day tour past Merlion Park, the Marina Bay waterfront, Chinatown and the colonial quarter, with a guide on a shared coach.'
      },
      {
        name: 'Marina Bay Sands SkyPark',
        day: 3,
        optional: false,
        image: img('bg5fwuu7wfesixuruihixec41424_bcuakrcly483czb61hifc79bcxq4_shutterstock_707858599.jpg'),
        description: 'The observation deck fifty seven floors above Marina Bay, with the city, the port and the Gardens by the Bay domes below you.'
      }
    ],
    program: {
      name: 'Singapore',
      description: 'Three nights in the city with a night safari, a full Sentosa day of cable cars, the aquarium and Wings of Time, and the Marina Bay SkyPark.',
      image: img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuala Lumpur',
    subtitle: 'Kuala Lumpur to Genting and Sunway',
    dayLabel: 'Day 4 to 6',
    images: [
      img('rt8h8pkzn32huf0ajc2wtr8pdwgx_shutterstock_385171057%20(1).jpg'),
      img('1cq8i4ccjxzj2kcrf5n2lspi78ha_shutterstock_173996327%20(1).jpg'),
      img('5e9ijcb6sko5bebnwtpc3ffal17a_shutterstock_348184013%20(1).jpg'),
      img('csotuo6ohfdjx06pxdvh34a1u0sg_shutterstock_564334333.jpg')
    ],
    dayImages: {
      4: [
        img('9nw2tylont6c8f0m99r3fkvtccpt_Kuala%20Lumpur%20Skyline.jpg'),
        img('00vcs4gtc188b1vvb2i7ktl3dq03_1578901360_shutterstock_1327893905.jpg'),
        img('88b1b8nz64vqhkp157zouphjsjtv_1586851942_fi.jpg'),
        img('hs3hv44uraz48dgnnsvxedqb5wyd_1463645099_1024px-Masjid_Negara.jpg')
      ],
      5: [
        img('d26572h38irfszh9cjr2vh5esymf_shutterstock_1380671906.jpg'),
        img('8u8ev09ru5v92iljnnk58ju7waa3_25.webp'),
        img('jwzx5ixlse9sd03dd4v7qadm3p40_banner@2x.jpg'),
        img('28ymwo212mavwoso0rj8hg3y0uop_shutterstock_745400287.jpg')
      ],
      6: [
        img('z6dgin92ditvqwfynq3ox2f4tj08_SurfBeach.jpg'),
        img('r0elmcm5mebr5ng8ol7tp5uf30rz_1587102662_shutterstock_1458527699.jpg'),
        img('rt8h8pkzn32huf0ajc2wtr8pdwgx_shutterstock_385171057%20(1).jpg'),
        img('1cq8i4ccjxzj2kcrf5n2lspi78ha_shutterstock_173996327%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Kuala Lumpur`,
      'Breakfast and check out, then private transfer to Changi',
      'Optional: flight from Singapore to Kuala Lumpur, which we can add',
      'Arrival and city tour: palace gates, Merdeka Square, the old station',
      'Check in at your Bukit Bintang hotel',
      `${DAY_MARK}Day 5 · Genting, Batu Caves and Petronas`,
      'Breakfast, then a private day up to Genting Highlands',
      'Cable car to the hill resort and its theme park',
      'Batu Caves and the temple steps on the way back',
      'Sky bridge and observation deck at the Petronas towers',
      `${DAY_MARK}Day 6 · A day at Sunway Lagoon`,
      'Breakfast, then a full day at Sunway Lagoon',
      'Water slides, the surf beach and the wildlife park',
      'The suspension bridge above the lagoon',
      'Optional: dinner on Jalan Alor street food lane'
    ],
    accommodation: {
      name: 'Metro Hotel Bukit Bintang, Kuala Lumpur',
      description: '3 nights · Breakfast and one main meal daily · Standard room · 3★ · Bukit Bintang hotel in the middle of the shopping and food streets',
      images: [
        img('1mnuyn8tykterc0bdulbmwfou7xh_205266779.jpg'),
        img('gb3qaptvr2g0g02w3smmbt5yf3cs_209694.webp'),
        img('xih7ze7fv95cjsil9i6w97v93msa_114070017.jpg'),
        img('foyrok1k0dq1jzhydo4gguj1xkob_260332594.jpg'),
        img('xme9tia7uf0nxf675eh81h1771p8_260332576.jpg'),
        img('0pe0whhjh7k1n9sogl5ke3xgsenb_217066528.jpg'),
        img('o44mo5jyxhhps281b4eylreghn39_260332678.jpg'),
        img('yb4mh93h5rtm9sc0ml6jp5iktv1i_expediav2-725141-1f95c2-581785.jpg'),
        img('yiez61eu8f5e597kvr6fvczns9le_expediav2-725141-99d124-613928.jpg')
      ]
    },
    activities: [
      {
        name: 'Kuala Lumpur sightseeing tour',
        day: 4,
        optional: false,
        image: img('9nw2tylont6c8f0m99r3fkvtccpt_Kuala%20Lumpur%20Skyline.jpg'),
        description: 'The King\'s palace gates, the National Monument, Merdeka Square and the old railway station, with a photo stop at the towers.'
      },
      {
        name: 'Genting Highlands and Batu Caves',
        day: 5,
        optional: false,
        image: img('d26572h38irfszh9cjr2vh5esymf_shutterstock_1380671906.jpg'),
        description: 'A private day up to the hill resort by cable car, with the theme park and casino floor, and the Batu Caves temple steps on the way back.'
      },
      {
        name: 'Petronas Twin Towers tickets',
        day: 5,
        optional: false,
        image: img('28ymwo212mavwoso0rj8hg3y0uop_shutterstock_745400287.jpg'),
        description: 'Entry to the sky bridge and the observation deck on the eighty sixth floor, with the city spread out on both sides.'
      },
      {
        name: 'Sunway Lagoon park',
        day: 6,
        optional: false,
        image: img('z6dgin92ditvqwfynq3ox2f4tj08_SurfBeach.jpg'),
        description: 'Six parks on one ticket with water slides, a surf beach, a wildlife section and the longest suspension bridge in the country.'
      }
    ],
    program: {
      name: 'Kuala Lumpur',
      description: 'Three nights in Bukit Bintang, with a city tour, a hill day at Genting and Batu Caves, the Petronas towers and a full day at Sunway Lagoon.',
      image: img('rt8h8pkzn32huf0ajc2wtr8pdwgx_shutterstock_385171057%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Kuta',
    subtitle: 'Kuta to Kintamani and Tanah Lot',
    dayLabel: 'Day 7 to 10',
    images: [
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
      img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
    ],
    dayImages: {
      7: [
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('p0tyf5xa92nbblmla956dmfsaqrd_shutterstock_1453687076.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
        img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
      ],
      8: [
        img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg')
      ],
      9: [
        img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg'),
        img('e81e8w6ia95ocbac34rigtxfwddd_slide-8.jpg'),
        img('63rp5vt6fg9lnhd2bsolet8cpft3_ezgif-4-1fcf41f031.jpg'),
        img('zwzrpc8zhw3jl7ltwuqtrh8zmm8s_bali%20handara%20gate.jpg')
      ],
      10: [
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
        img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
        img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · On to Bali and Kuta`,
      'Breakfast and check out, then private transfer to the airport',
      'Optional: flight from Kuala Lumpur to Denpasar, which we can add',
      'Arrival in Bali and private transfer to your Kuta hotel',
      'Rest of the day free near the beach',
      `${DAY_MARK}Day 8 · Kintamani and the jungle swing`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'Tegenungan waterfall and the Tegalalang rice terraces',
      'A turn on the jungle swing above the valley',
      `${DAY_MARK}Day 9 · Bedugul lakes and Tanah Lot`,
      'Breakfast, then north to the Handara gate for photographs',
      'Ulun Danu Beratan, the temple standing on the lake',
      'Sunset at Tanah Lot, the sea temple on the rocks',
      'Dinner is included at the hotel tonight',
      `${DAY_MARK}Day 10 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your return flight'
    ],
    accommodation: {
      name: 'Diamond Hotel Kuta, Kuta',
      description: '3 nights · Breakfast and one main meal daily · Standard room · 3★ · Quiet pool hotel walking distance from Kuta beach',
      images: [
        img('5ihnxga92qbg7iqmv8ik6oys35vz_49470685.jpg'),
        img('sq3ofurpnwstttz9bycn3nq30fbb_49471816.jpg'),
        img('p0q6c55p4puivacdzd3u690etysf_49473349.jpg'),
        img('lqek785w4wrh79qs0xqqvbhgc7xu_49471119.jpg'),
        img('hhbgf084abvcvabmrgqjhhn5d1z9_49470684.jpg'),
        img('eob1zjyrkxkez3h8l4r3algq11rl_623498_14112616020023635311.webp'),
        img('mc4bbirb1icg3w6lj5wakmo7mt1s_351524004.jpg'),
        img('0mhdtv050y3jzq8mjpmzgqdtbkrw_49471168.jpg'),
        img('u4lo89bd5c9x0fyvdso13br8p4kl_219881817.jpg'),
        img('9mp8505jm8uoxxlt689wkwyfqajz_49471140.jpg'),
        img('ob6b5xggype0biytfjy25prvkdsm_351523960.jpg'),
        img('uncgyv1d6sbl13f30lozf41jb66w_219881736.jpg')
      ]
    },
    activities: [
      {
        name: 'Kintamani with the jungle swing',
        day: 8,
        optional: false,
        image: img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        description: 'Coffee plantation tasting on the climb to Kintamani, the crater lake view, Tegenungan waterfall, the Tegalalang terraces and the jungle swing.'
      },
      {
        name: 'Bedugul lakes and Tanah Lot sunset',
        day: 9,
        optional: false,
        image: img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg'),
        description: 'The Handara gate, the lake temple of Ulun Danu Beratan at Bedugul, then the sea temple of Tanah Lot as the sun goes down.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights in Bali to finish, with a coffee plantation day up to Kintamani and a temple run that ends at Tanah Lot for sunset.',
      image: img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
    }
  }
];

const detail = {
  slug: 'grand-singapore-malaysia-and-bali-holiday',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Grand Singapore, Malaysia and Bali Holiday',
  alt: 'Gardens by the Bay Supertrees lit up in Singapore',
  days: '10 days / 9 nights',
  stations: '3 stops',
  transport: 'Return flights, private transfers and guided tours',
  tag: 'Family',
  tags: ['Family', 'Luxury'],
  price: 163685,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Sentosa', 'Kuala Lumpur', 'Genting Highlands', 'Kuta'],
  stats: { days: 10, cities: 3, hotels: 3, activities: 13, transfers: 23 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['13 experiences', 'Activities'],
    ['23 transfers', 'Transport'],
    ['18 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three countries, nine nights, and a main meal every day. For a family of four this is the package that works out cheapest.',
    quoteMore: 'Sentosa is a long day, so start with the cable car and finish with Wings of Time. In Kuala Lumpur we keep Sunway Lagoon for after Genting, because the children sleep through the drive back.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Ten days with return flights across Singapore, Malaysia and Bali: a night safari and a full Sentosa day, the Marina Bay SkyPark, Genting and Batu Caves, the Petronas towers, Sunway Lagoon, then Kintamani and sunset at Tanah Lot.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: return flights from Delhi; 9 nights with daily breakfast and one main meal daily; private airport and city transfers; Night Safari; Sentosa cable car, S.E.A. Aquarium, Madame Tussauds and Wings of Time; Singapore sightseeing; Marina Bay Sands SkyPark; Kuala Lumpur city tour; Genting and Batu Caves; Petronas tickets; Sunway Lagoon; Kintamani tour; Bedugul and Tanah Lot tour.',
  intro2: 'Not included: the Singapore to Kuala Lumpur and Kuala Lumpur to Denpasar flights, which we can add; visa fees; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Flight out and night safari (D)', text: 'Flight from Delhi to Singapore, included in your package\nArrival at Changi Airport and private transfer to your hotel\nEvening tram ride at the Singapore Night Safari\nDinner is included at the hotel tonight', hotel: 'ibis Singapore on Bencoolen', highlights: ['Flight from Delhi to Singapore, included in your package', 'Arrival at Changi Airport and private transfer to your hotel', 'Evening tram ride at the Singapore Night Safari'] },
    { title: 'Day 2: A full day on Sentosa (B, D)', text: 'Breakfast, then across to Sentosa island\nCable car sky pass over the harbour and the island\nS.E.A. Aquarium and Madame Tussauds\nWings of Time show on Siloso beach in the evening', hotel: 'ibis Singapore on Bencoolen', highlights: ['Breakfast, then across to Sentosa island', 'Cable car sky pass over the harbour and the island', 'S.E.A. Aquarium and Madame Tussauds'] },
    { title: 'Day 3: City tour and Marina Bay (B, D)', text: 'Breakfast, then a half day city tour with a guide\nMerlion Park, the colonial quarter and Chinatown\nThe SkyPark deck above Marina Bay Sands\nOptional: the Supertree light show at Gardens by the Bay', hotel: 'ibis Singapore on Bencoolen', highlights: ['Breakfast, then a half day city tour with a guide', 'Merlion Park, the colonial quarter and Chinatown', 'The SkyPark deck above Marina Bay Sands'] },
    { title: 'Day 4: On to Kuala Lumpur (B, D)', text: 'Breakfast and check out, then private transfer to Changi\nOptional: flight from Singapore to Kuala Lumpur, which we can add\nArrival and city tour: palace gates, Merdeka Square, the old station\nCheck in at your Bukit Bintang hotel', hotel: 'Metro Hotel Bukit Bintang, Kuala Lumpur', highlights: ['Breakfast and check out, then private transfer to Changi', 'Optional: flight from Singapore to Kuala Lumpur, which we can add', 'Arrival and city tour: palace gates, Merdeka Square, the old station'] },
    { title: 'Day 5: Genting, Batu Caves and Petronas (B, D)', text: 'Breakfast, then a private day up to Genting Highlands\nCable car to the hill resort and its theme park\nBatu Caves and the temple steps on the way back\nSky bridge and observation deck at the Petronas towers', hotel: 'Metro Hotel Bukit Bintang, Kuala Lumpur', highlights: ['Breakfast, then a private day up to Genting Highlands', 'Cable car to the hill resort and its theme park', 'Batu Caves and the temple steps on the way back'] },
    { title: 'Day 6: A day at Sunway Lagoon (B, D)', text: 'Breakfast, then a full day at Sunway Lagoon\nWater slides, the surf beach and the wildlife park\nThe suspension bridge above the lagoon\nOptional: dinner on Jalan Alor street food lane', hotel: 'Metro Hotel Bukit Bintang, Kuala Lumpur', highlights: ['Breakfast, then a full day at Sunway Lagoon', 'Water slides, the surf beach and the wildlife park', 'The suspension bridge above the lagoon'] },
    { title: 'Day 7: On to Bali and Kuta (B, D)', text: 'Breakfast and check out, then private transfer to the airport\nOptional: flight from Kuala Lumpur to Denpasar, which we can add\nArrival in Bali and private transfer to your Kuta hotel\nRest of the day free near the beach', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Breakfast and check out, then private transfer to the airport', 'Optional: flight from Kuala Lumpur to Denpasar, which we can add', 'Arrival in Bali and private transfer to your Kuta hotel'] },
    { title: 'Day 8: Kintamani and the jungle swing (B, D)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nTegenungan waterfall and the Tegalalang rice terraces\nA turn on the jungle swing above the valley', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'Tegenungan waterfall and the Tegalalang rice terraces'] },
    { title: 'Day 9: Bedugul lakes and Tanah Lot (B, D)', text: 'Breakfast, then north to the Handara gate for photographs\nUlun Danu Beratan, the temple standing on the lake\nSunset at Tanah Lot, the sea temple on the rocks\nDinner is included at the hotel tonight', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Breakfast, then north to the Handara gate for photographs', 'Ulun Danu Beratan, the temple standing on the lake', 'Sunset at Tanah Lot, the sea temple on the rocks'] },
    { title: 'Day 10: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your return flight', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your return flight'] }
  ],
  outro: 'Not included: the Singapore to Kuala Lumpur and Kuala Lumpur to Denpasar flights, which we can add; visa fees; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const grandSingaporeMalaysiaBaliBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const grandSingaporeMalaysiaBaliProduct = {
  slug: detail.slug,
  places: ['Singapore', 'Sentosa', 'Kuala Lumpur', 'Genting Highlands', 'Kuta'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 13,
  transfers: 23,
  meals: 18,
  price: detail.price,
  images: cardImages
};
