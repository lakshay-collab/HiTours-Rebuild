// Switzerland and Italy Honeymoon with a Venice Gondola. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('xfuiitkg4vdz65jxr8124sagsdri_shutterstock_397741987.jpg'),
  img('etm08uyzmt35w1w5eoectnpe2jjh_shutterstock_201883006.jpg'),
  img('qn701jfzpgcclntfd1fp91jeozyo_shutterstock_152790434.jpg'),
  img('76p65s3vqbgnoblsx4gdh44xeva2_shutterstock_535685914.jpg'),
  img('6hx4bklg6ehuh6s68eu0z6sg3874_shutterstock_258257975.jpg'),
  img('lmnylzjmy5rzxyvroruqr8v84lzk_shutterstock_720444505.jpg'),
  img('alfkc4hb70jq7shtbqthw2o9pmc0_shutterstock_401739034.jpg'),
  img('v7tu1gbrape8r7f7v164w6gzeinm_shutterstock_2258144565.jpg'),
  img('hh8abcck3rdej47ccx3unzyq4u40_shutterstock_1272470107.jpg'),
  img('yp9k09gqquytcdz8thdz6u7g1mlt_shutterstock_314150237%20(3).jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('xfuiitkg4vdz65jxr8124sagsdri_shutterstock_397741987.jpg'),
  img('etm08uyzmt35w1w5eoectnpe2jjh_shutterstock_201883006.jpg'),
  img('qn701jfzpgcclntfd1fp91jeozyo_shutterstock_152790434.jpg'),
  img('76p65s3vqbgnoblsx4gdh44xeva2_shutterstock_535685914.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Zurich',
    subtitle: 'Zurich → Titlis and Lucerne',
    dayLabel: 'Day 1 to 3',
    images: [
      img('xfuiitkg4vdz65jxr8124sagsdri_shutterstock_397741987.jpg'),
      img('6sg7tmnncobydnuvnptpph8ztvww_Zurich.jpg'),
      img('yp9k09gqquytcdz8thdz6u7g1mlt_shutterstock_314150237%20(3).jpg'),
      img('i628pp9teqrmo7okg9ef6ggih20a_shutterstock_1549086965.jpg')
    ],
    dayImages: {
      1: [
        img('wj52atsuiwrxn190lslktf4r3q9f_shutterstock_2393185093.jpg'),
        img('yekp9inlif7ysxibhgrgwb49adha_1579689463_Old_Town_(Altstadt).jpg'),
        img('oxv2s2qobmxwr67uzopzyuexlsxx_1580110071_shutterstock_397993882.jpg'),
        img('ietwn6qrvwl3qg81ib7gsl4hkri0_1579690346_shutterstock_44675536.jpg')
      ],
      2: [
        img('hbr2al8lrdju985w4elb33in856m_shutterstock_747451912.jpg'),
        img('cf0sr8eoql6y6a5w2nqkiiloz44i_874d0571-22d2-4de1-931e-890b0bbcd655.webp'),
        img('ptqfrtjckfh31i5id8a7yjuv1vi2_50967096517_97c379250d_o.jpg'),
        img('zvglw8rw97yp3o8lm95tis50z9b4_Engelberg-Titlis-Cliif-walk-and-Glacier-Cave-19.webp')
      ],
      3: [
        img('c55f22s06j7l6f9t1fwy0y5qmnxb_lindt-home-of-chocolate.jpg'),
        img('zketz3qbf8mzp1zftuaosyut1qu5_2021-08-20.jpg'),
        img('yekp9inlif7ysxibhgrgwb49adha_1579689463_Old_Town_(Altstadt).jpg'),
        img('qr9k6el6yjqrs3q15k0xu4stomlh_1582885802_shutterstock_1130426804.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Zurich`,
      'Arrival at Zurich Kloten and transfer to your hotel',
      'Your three day Swiss Travel Pass starts today',
      'Check in and the rest of the day free',
      'Optional: the old town and the Bahnhofstrasse',
      `${DAY_MARK}Day 2 · Mount Titlis and Lake Lucerne`,
      'Early breakfast, then south towards Engelberg',
      'The rotating cable car up Mount Titlis',
      'The glacier cave, the cliff walk and the chairlift',
      'On to Lucerne for the Chapel Bridge and a lake cruise',
      `${DAY_MARK}Day 3 · The Lindt Home of Chocolate`,
      'Breakfast, then out to Kilchberg on the lake',
      'The Lindt chocolate museum and its fountain',
      'A tasting room at the end of the tour',
      'The afternoon free in Zurich'
    ],
    accommodation: {
      name: 'ibis Zurich City West, Zurich',
      description: '3 nights · Breakfast · Standard room · 3★ · Straightforward hotel in the Zurich West quarter by the rail viaduct',
      images: [
        img('g9ovedb7r5zz68eh1c05nfyzi2zu_download%20(1).jpg'),
        img('ep2widd09ev3h6gkum1yokp5nizl_download%20(3).jpg'),
        img('ble8fvbjnldfue81ffqmj1u7466b_download%20(5).jpg'),
        img('8olyouxkegatw1n6lnm02eukzbdd_download%20(7).jpg'),
        img('kpp1eb8rdv1xbl3v6snrln1u2he8_download%20(8).jpg'),
        img('yfomok5x1vikyw2d5ilwxt99cpzb_download%20(10).jpg'),
        img('6et9zlusb64r6vodvmjm4ivbwdkc_625f8014172411eab1c20242ac110003.jpg'),
        img('0mucqmaqg1k5qumxhn12ue8i8zd1_download%20(4).jpg'),
        img('j7vbtk0ib5cm29vz7bqeio3dxuab_524895b271e511ec86790a58a9feac02.jpg'),
        img('yvf13vm86oxibhl02iargmhr22l3_download%20(12).jpg'),
        img('khie12dn7vei7gh0lv6dzynlst1q_download%20(11).jpg'),
        img('ckz38e2lzycjsmvs7uzusd75qcfv_download%20(13).jpg'),
        img('10zzoukb0fn5cmpsx5vmpnp162h0_download%20(2).jpg')
      ]
    },
    activities: [
      {
        name: 'Swiss Travel Pass, three days',
        day: 1,
        optional: false,
        image: img('wj52atsuiwrxn190lslktf4r3q9f_shutterstock_2393185093.jpg'),
        description: 'Three days of unlimited travel on Swiss trains, buses and lake boats, with free entry to most of the country\'s museums.'
      },
      {
        name: 'Mount Titlis and the glacier cave',
        day: 2,
        optional: false,
        image: img('hbr2al8lrdju985w4elb33in856m_shutterstock_747451912.jpg'),
        description: 'The rotating cable car to three thousand metres, the glacier cave, the cliff walk and a chairlift ride over the crevasses.'
      },
      {
        name: 'Lucerne walking tour with a lake cruise',
        day: 2,
        optional: false,
        image: img('0a0knnbzqhw4gwxrzg7cg7ylxf0a_shutterstock_1510521416.jpg'),
        description: 'The covered Chapel Bridge, the Lion Monument and the Glacier Garden on foot, then a boat out onto Lake Lucerne.'
      },
      {
        name: 'Lindt Home of Chocolate',
        day: 3,
        optional: false,
        image: img('c55f22s06j7l6f9t1fwy0y5qmnxb_lindt-home-of-chocolate.jpg'),
        description: 'The chocolate museum at Kilchberg, with the nine metre fountain in the atrium and a tasting room at the end.'
      }
    ],
    program: {
      name: 'Zurich',
      description: 'Three nights in Switzerland with a travel pass, the glacier on Mount Titlis, Lake Lucerne and the Lindt chocolate museum.',
      image: img('xfuiitkg4vdz65jxr8124sagsdri_shutterstock_397741987.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Milan',
    dayLabel: 'Day 4',
    images: [
      img('05mvukgppxacr11nysfjmb4owjep_shutterstock_786702703.jpg'),
      img('etm08uyzmt35w1w5eoectnpe2jjh_shutterstock_201883006.jpg'),
      img('v7tu1gbrape8r7f7v164w6gzeinm_shutterstock_2258144565.jpg'),
      img('7y5ezm6isvqf9sc3p0bdchtb6w8m_shutterstock_333290057.jpg')
    ],
    dayImages: {
      4: [
        img('g0axiw14syceqh1wt0m8nyakx0sr_1577972413_shutterstock_1046762236.jpg'),
        img('yloh69kx4b3i6umyfu0v9sicq3ol_Milan_Cathedral_from_Piazza_del_Duomo.jpg'),
        img('05mvukgppxacr11nysfjmb4owjep_shutterstock_786702703.jpg'),
        img('etm08uyzmt35w1w5eoectnpe2jjh_shutterstock_201883006.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Milan and the Duomo`,
      'Breakfast and check out of your Zurich hotel',
      'Station transfer and the train south to Milan',
      'Check in a few minutes from Milano Centrale',
      'Skip the line entry to the Duomo and its museum'
    ],
    accommodation: {
      name: 'B&B Hotel Milano Aosta, Milan',
      description: '1 night · Breakfast · Standard room · 3★ · Simple hotel a few minutes from Milano Centrale',
      images: [
        img('1btyogxeluyuwj8ek0h69f2kqtj1_259736673.png'),
        img('5mc32g1wmd6arkg8rd4m6zjphcks_259733384.png'),
        img('uqdifvvm8nxq80jyncv1gn7wy1xr_402626133.png'),
        img('xzklpivfa1me6nfat4igzfnpqvsk_134737119.png'),
        img('96ef0ih14p6lzh3ujng71p52gwgf_388695359.png'),
        img('grv3cic8rka6qwybzrh4x0sa71yz_259733324.png'),
        img('hporogb2z9tyydq4t2axsibcq2ji_134731247.png'),
        img('bp6fz8he78asvj9nqdmja8ogojav_402626080.png'),
        img('0bfu8ssqbky9l39j51wchzoordoh_005777a_hb_l_004.png'),
        img('rq2ksnzzq3lzgavob43lknigyc0j_259733352%20(1).png'),
        img('sn1laxn9ca9ycs4td5pphvnr4t89_259733239.png'),
        img('qajrv9g3szi1wtrevuh6inu0kw72_259733324%20(1).png'),
        img('d5lfp0kyqxkqg7fj3k1mk42h9wg9_134737096.png')
      ]
    },
    activities: [
      {
        name: 'Duomo di Milano skip the line',
        day: 4,
        optional: false,
        image: img('g0axiw14syceqh1wt0m8nyakx0sr_1577972413_shutterstock_1046762236.jpg'),
        description: 'Skip the line entry to the marble cathedral and its museum, with the statues and spires of the roofline above you.'
      }
    ],
    program: {
      name: 'Milan',
      description: 'One night in Lombardy with skip the line entry to the Duomo and the Galleria next door.',
      image: img('05mvukgppxacr11nysfjmb4owjep_shutterstock_786702703.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Venice',
    subtitle: 'Venice → Murano and Burano',
    dayLabel: 'Day 5 to 7',
    images: [
      img('jmzgl29yp8upkqsjlp5nn14rshnl_shutterstock_219076456.jpg'),
      img('hh8abcck3rdej47ccx3unzyq4u40_shutterstock_1272470107.jpg'),
      img('qn701jfzpgcclntfd1fp91jeozyo_shutterstock_152790434.jpg'),
      img('h9he5g1obny741v7ou3kmnc13clu_shutterstock_121834126.jpg')
    ],
    dayImages: {
      5: [
        img('jh4v6tip3itdeb39z9wbu2q1nhbl_shutterstock_1277529523.jpg'),
        img('of7bxqx32mz5ux0gad82tekjj36o_1586604339_fi.jpg'),
        img('jmzgl29yp8upkqsjlp5nn14rshnl_shutterstock_219076456.jpg'),
        img('hh8abcck3rdej47ccx3unzyq4u40_shutterstock_1272470107.jpg')
      ],
      6: [
        img('85209m8vww4363ybiah0so6jztnz_shutterstock_1934515313.jpg'),
        img('iwiwjxhk0i02tkl076zu1cn14lcx_1581681438_shutterstock_338722889.jpg'),
        img('ejrnl3v7jo3u32vy92ydf0llocwl_1581425236_38750946670_5233fdb319_k.jpg'),
        img('taillqmaqsp2kfxgqc8qg1exdmni_1586601617_Burano.jpg')
      ],
      7: [
        img('jmzgl29yp8upkqsjlp5nn14rshnl_shutterstock_219076456.jpg'),
        img('hh8abcck3rdej47ccx3unzyq4u40_shutterstock_1272470107.jpg'),
        img('qn701jfzpgcclntfd1fp91jeozyo_shutterstock_152790434.jpg'),
        img('h9he5g1obny741v7ou3kmnc13clu_shutterstock_121834126.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · To Venice and a private gondola`,
      'Breakfast and check out for the run east',
      'Station transfer and the train on to Venice',
      'Check in at your canalside hotel in Santa Croce',
      'A private thirty minute gondola through the back canals',
      `${DAY_MARK}Day 6 · Murano and Burano by boat`,
      'Breakfast, then down to the boat jetty',
      'The glass furnaces of Murano',
      'The painted houses and leaning bell tower of Burano',
      'The afternoon free for St Mark\'s Square',
      `${DAY_MARK}Day 7 · Departure from Venice`,
      'Breakfast at the hotel and check out',
      'Private transfer to Venice Marco Polo for your flight home'
    ],
    accommodation: {
      name: 'Hotel Arlecchino, Venice',
      description: '2 nights · Breakfast · Standard room · 3★ · Canalside hotel in Santa Croce, ten minutes from the station',
      images: [
        img('6sekrtwqnp91xa9reg7m5o2ba3pj_f5b00987_z.webp'),
        img('wn14gd2prm9pi9x0k6vc2myfivx3_69944734.jpg'),
        img('sohkj4rktvssrle93jz78czzgd5k_111261644.jpg'),
        img('xefqosu72w1jmv02z7d0hn5jzsk9_37696204.jpg'),
        img('fizqgdkpj5u0gkaarz9e2zlf287j_IMG_5540-1920w.jpg'),
        img('tfim8zxgzbqbde2bjveco7ysbvih_85538499.jpg'),
        img('jyd01e7cuhppovlx5rivsenmdmea_85537816.jpg'),
        img('1twq3lfb5aejinhxi1pyzkoy0x5x_37697355.jpg'),
        img('pgrz5vm9b7zyc47gxjo1l1kfrrrh_85536595.jpg'),
        img('nndnhd08n6slyy21tbcje8elnjzt_37696598.jpg'),
        img('iohdf895zl3skx8ygzk7kj2q0ui9_c1fd2729_z.webp'),
        img('bkch1soltzxz0r4mo0hhu20vu9gf_85536452.jpg')
      ]
    },
    activities: [
      {
        name: 'Private gondola ride',
        day: 5,
        optional: false,
        image: img('jh4v6tip3itdeb39z9wbu2q1nhbl_shutterstock_1277529523.jpg'),
        description: 'A private thirty minute gondola by day, just the two of you, threading the back canals before the Grand Canal.'
      },
      {
        name: 'Murano and Burano half day trip',
        day: 6,
        optional: false,
        image: img('85209m8vww4363ybiah0so6jztnz_shutterstock_1934515313.jpg'),
        description: 'By boat to the glass furnaces of Murano and the painted fishermen\'s houses and leaning bell tower of Burano.'
      }
    ],
    program: {
      name: 'Venice',
      description: 'Two nights on the lagoon with a private gondola and a boat trip out to the glass island and painted Burano.',
      image: img('jmzgl29yp8upkqsjlp5nn14rshnl_shutterstock_219076456.jpg')
    }
  }
];

const detail = {
  slug: 'switzerland-and-italy-honeymoon-with-a-venice-gondola',
  ctaHref: '/l/europe/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Switzerland and Italy Honeymoon with a Venice Gondola',
  alt: 'A gondola on a quiet back canal in Venice',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'Rail between cities with a Swiss Travel Pass and private transfers',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Multi-country'],
  price: 93100,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Zurich', 'Milan', 'Venice'],
  stats: { days: 7, cities: 3, hotels: 3, activities: 7, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Sharon',
    image: '/experts/sharon.webp',
    role: 'Europe expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'The cheapest Switzerland and Italy honeymoon we sell, and it still has a private gondola and the glacier on Titlis in it.',
    quoteMore: 'Take the private gondola in the late afternoon rather than at midday. The back canals are quieter and the light on the water is far better.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days from the Swiss Alps to the Venetian lagoon: three nights in Zurich with a travel pass, Mount Titlis and Lake Lucerne, a night in Milan for the Duomo, then Venice with a private gondola and a trip to Murano and Burano.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights in Zurich, 1 night in Milan and 2 nights in Venice with breakfast; private transfers; rail between the cities; a three day Swiss Travel Pass; the Mount Titlis tour with the glacier chairlift; a Lucerne walking tour with a lake cruise; Lindt Home of Chocolate tickets; skip the line Duomo di Milano tickets; a private thirty minute gondola ride; a half day Murano and Burano trip.',
  intro2: 'Not included: international flights; Schengen visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Zurich (Arrival)', text: 'Arrival at Zurich Kloten and transfer to your hotel\nYour three day Swiss Travel Pass starts today\nCheck in and the rest of the day free\nOptional: the old town and the Bahnhofstrasse', hotel: 'ibis Zurich City West', highlights: ['Arrival at Zurich Kloten and transfer to your hotel', 'Your three day Swiss Travel Pass starts today', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Mount Titlis and Lake Lucerne (B)', text: 'Early breakfast, then south towards Engelberg\nThe rotating cable car up Mount Titlis\nThe glacier cave, the cliff walk and the chairlift\nOn to Lucerne for the Chapel Bridge and a lake cruise', hotel: 'ibis Zurich City West', highlights: ['Early breakfast, then south towards Engelberg', 'The rotating cable car up Mount Titlis', 'The glacier cave, the cliff walk and the chairlift'] },
    { title: 'Day 3: The Lindt Home of Chocolate (B)', text: 'Breakfast, then out to Kilchberg on the lake\nThe Lindt chocolate museum and its fountain\nA tasting room at the end of the tour\nThe afternoon free in Zurich', hotel: 'ibis Zurich City West', highlights: ['Breakfast, then out to Kilchberg on the lake', 'The Lindt chocolate museum and its fountain', 'A tasting room at the end of the tour'] },
    { title: 'Day 4: On to Milan and the Duomo (B)', text: 'Breakfast and check out of your Zurich hotel\nStation transfer and the train south to Milan\nCheck in a few minutes from Milano Centrale\nSkip the line entry to the Duomo and its museum', hotel: 'B&B Hotel Milano Aosta', highlights: ['Breakfast and check out of your Zurich hotel', 'Station transfer and the train south to Milan', 'Check in a few minutes from Milano Centrale'] },
    { title: 'Day 5: To Venice and a private gondola (B)', text: 'Breakfast and check out for the run east\nStation transfer and the train on to Venice\nCheck in at your canalside hotel in Santa Croce\nA private thirty minute gondola through the back canals', hotel: 'Hotel Arlecchino', highlights: ['Breakfast and check out for the run east', 'Station transfer and the train on to Venice', 'Check in at your canalside hotel in Santa Croce'] },
    { title: 'Day 6: Murano and Burano by boat (B)', text: 'Breakfast, then down to the boat jetty\nThe glass furnaces of Murano\nThe painted houses and leaning bell tower of Burano\nThe afternoon free for St Mark\'s Square', hotel: 'Hotel Arlecchino', highlights: ['Breakfast, then down to the boat jetty', 'The glass furnaces of Murano', 'The painted houses and leaning bell tower of Burano'] },
    { title: 'Day 7: Departure from Venice (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Venice Marco Polo for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Venice Marco Polo for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: detail.title }
];

export const switzerlandItalyHoneymoonGondolaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const switzerlandItalyHoneymoonGondolaProduct = {
  slug: detail.slug,
  places: ['Zurich', 'Milan', 'Venice'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 7,
  transfers: 9,
  meals: 6,
  price: detail.price,
  images: cardImages
};
