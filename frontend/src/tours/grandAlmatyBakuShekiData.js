// Grand Almaty, Baku and Sheki. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg'),
  img('5r2cwf5pumac7azyim149wirkalr_shutterstock_2279957429.jpg'),
  img('9sq5uoybo6cxgltjhhthbisr6z50_shutterstock_1084596998.jpg'),
  img('ebedrx7md3lsckm8dymqgyh7ciqr_shutterstock_2152837819.jpg'),
  img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
  img('g0gtz8i1ixkieosbry3cq2ydbghg_iltun-huseynli-OH7GkUqiuZk-unsplash.jpg'),
  img('rbw42ssgbdh7gq59jdbql5n8joe7_shutterstock_1926406163.jpg'),
  img('mzetk2136hgywpux1nby61yrfz69_shutterstock_2213017005.jpg'),
  img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg'),
  img('75bf7xrv810qsff19hi1bt1aevx2_shutterstock_2324425733.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('9sq5uoybo6cxgltjhhthbisr6z50_shutterstock_1084596998.jpg'),
  img('rbw42ssgbdh7gq59jdbql5n8joe7_shutterstock_1926406163.jpg'),
  img('j8oie73n3xz3bemp2eawz7c3alap_shutterstock_1136706353.jpg'),
  img('nbfv5dxqey5o9v3qw2q8r1ts7xmt_shutterstock_2331501789.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Almaty',
    dayLabel: 'Day 1 to 5',
    images: [
      img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg'),
      img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
      img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
      img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg')
    ],
    dayImages: {
      1: [
        img('rbsdlpmqrfga1bptwh7jhqywl58s_shutterstock_1873578235.jpg'),
        img('ax2aozks96i5vt0r92ag2n6dg2j0_shutterstock_1505534291.jpg'),
        img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg'),
        img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg')
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
        img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg')
      ],
      5: [
        img('w3dhy3jnmc8fyqi0qykmoa9j04kj_Downpic.cc-78348034.jpg'),
        img('trcgsh6zpbn7c3tqrbtr24leiybu_1618298981_546870.jpg'),
        img('7e99ylb15o8mvs5hyaugcl3jkmde_getlstd-property-photo.jpg'),
        img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg')
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
      'Afternoon free in the city centre',
      `${DAY_MARK}Day 5 · Lake Issyk day trip`,
      'Breakfast, then east towards the Issyk gorge',
      'The turquoise water of Lake Issyk',
      'The Saka burial mounds and the site museum',
      'Evening transfer back into Almaty'
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
      },
      {
        name: 'Lake Issyk day tour',
        day: 5,
        optional: false,
        image: img('w3dhy3jnmc8fyqi0qykmoa9j04kj_Downpic.cc-78348034.jpg'),
        description: 'A private day east to the turquoise water of Lake Issyk, with the Saka burial mounds and the small site museum nearby.'
      }
    ],
    program: {
      name: 'Almaty',
      description: 'Four nights in the old Kazakh capital with the city tour, the Shymbulak gondola, the Green Bazaar and Lake Issyk.',
      image: img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Baku',
    subtitle: 'Baku → Gobustan',
    dayLabel: 'Day 6 to 7',
    images: [
      img('mzetk2136hgywpux1nby61yrfz69_shutterstock_2213017005.jpg'),
      img('5r2cwf5pumac7azyim149wirkalr_shutterstock_2279957429.jpg'),
      img('lxjkv4wufiezgafl5uwzrpfwhm8e_shutterstock_1924135892.jpg'),
      img('w9xb7wy1kiflzp3up20o6gbd3ft9_shutterstock_2151451953.jpg')
    ],
    dayImages: {
      6: [
        img('9dhddagcxbdp7gamd4u9jylbkh2q_1621620650_shutterstock_1219342972.jpg'),
        img('trrh1a327y0b2s0zj9qo36mehbu3_152a75981c6c3b5cd5b344fe49ed3b6a.jpg'),
        img('c8vtoky9vt8n9or5305y9btdq1os_1618561214_shutterstock_1917544799.jpg'),
        img('mzetk2136hgywpux1nby61yrfz69_shutterstock_2213017005.jpg')
      ],
      7: [
        img('vnrkg0vovqst85c5u37hhdni7qmc_dl.beatsnoop.com-final-HYwgrsRJGp.jpg'),
        img('22p1kyib7lpk1be6nt3s4sl8d1t5_maidens-tower-azerbaijan.jpg'),
        img('ylkh9xm7m3i7m4xuh1h9c9z0jqeb__vlNhYbF.jpg'),
        img('6fe9qrq5ogiynsyuhgayss5987wz_wKgBEFtqmVaAJHwBAAztiG7HyqM09.jpeg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Almaty to Baku`,
      'Check out of your Almaty hotel after an early start',
      'Optional: flight Almaty to Baku, booked with us',
      'Arrival transfer from Heydar Aliyev to your hotel',
      'Optional: the Baku Eye and the Teze Pir mosque',
      `${DAY_MARK}Day 7 · Old City, Gobustan and mud volcanoes`,
      'Breakfast, then into the walled Old City',
      'The Maiden Tower and the Shirvanshahs\' palace',
      'South to the Gobustan rock carvings after lunch',
      'The grey mud volcanoes bubbling out on the flats'
    ],
    accommodation: {
      name: 'Atlas Hotel Baku, Baku',
      description: '2 nights · Breakfast · Standard room · 3★ · Friendly hotel close to the walled Old City',
      images: [
        img('805osrrbd00zkynnpn80863t8cif_369378270%20(1).jpg'),
        img('51geujd3aoltv1qejqtkik84z4qe_337426508%20(2).jpg'),
        img('m0g8pkw4335866ja4jrnaaxdsjrw_161258457.jpg'),
        img('wmarh67i4acjcqxo0ispdo2pggd8_425636973%20(1).jpg'),
        img('mwhhl3ptxzfo0tvw25x7uplvawmy_337425086%20(2).jpg'),
        img('3wwgrxjdvxv6cssauo9w4uup7vhv_149453981.jpg'),
        img('72yf30sd1t1v5uynugdlpe1osrcd_141358762.jpg'),
        img('kozwo56lxgavmdvmbt2zaxok1e4t_aeb1acda86bf11eeb0070a58a9feac02.webp'),
        img('s0ly27riowszy8b14mtxfmvr4zdh_141358765.jpg'),
        img('u91hekrh2e0u3eu3777ha35y0ozl_e8f513a286bd11eebdca0a58a9feac02.jpg'),
        img('x7sw5w1qthhlf4fj03ot9wkyucty_247df51a86be11eea7c20a58a9feac02.jpg'),
        img('1i2gxuwapq5eiur8g2qotd6d4w8b_ae073a6686bf11eeaff10a58a9feac02.jpg'),
        img('f6geyxe340pyxuqdpns1mjkxne37_640203a_hb_l_002.jpeg')
      ]
    },
    activities: [
      {
        name: 'Baku Old City tour',
        day: 7,
        optional: false,
        image: img('vnrkg0vovqst85c5u37hhdni7qmc_dl.beatsnoop.com-final-HYwgrsRJGp.jpg'),
        description: 'The walled Icherisheher with the Maiden Tower, the Shirvanshahs\' palace, Fountain Square and the boating canals on the boulevard.'
      },
      {
        name: 'Gobustan rock art and the mud volcanoes',
        day: 7,
        optional: false,
        image: img('ud1hlgn2hh0jyzb8vlr2qn7gd57b_dl.beatsnoop.com-1715031067.jpg'),
        description: 'Petroglyphs carved into the Gobustan boulders thousands of years ago, then the cold grey mud volcanoes bubbling on the flats.'
      }
    ],
    program: {
      name: 'Baku',
      description: 'Two nights on the Caspian for the walled Old City, the Gobustan rock carvings and the mud volcanoes.',
      image: img('mzetk2136hgywpux1nby61yrfz69_shutterstock_2213017005.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Gabala',
    subtitle: 'Gabala → Sheki',
    dayLabel: 'Day 8 to 9',
    images: [
      img('j8oie73n3xz3bemp2eawz7c3alap_shutterstock_1136706353.jpg'),
      img('nbfv5dxqey5o9v3qw2q8r1ts7xmt_shutterstock_2331501789.jpg'),
      img('9sq5uoybo6cxgltjhhthbisr6z50_shutterstock_1084596998.jpg'),
      img('ffydsb9ylb53dl3thc4dnvoawz1m_shutterstock_787747891.jpg')
    ],
    dayImages: {
      8: [
        img('n8a1fu99y2fh34cpwum2l2zd8yoi_shutterstock_1296276955.jpg'),
        img('747q5lgfnioy0clsugyq9bs4qnf8_lake%20nohar.jpg'),
        img('60ulwdt6ai9jvs5n9p007u5f9eju_download%20-%202024-05-07T175652.561.jpg'),
        img('ieuyk9jzbrjivmkvhk537t7s0um1_466655470%20(1).png')
      ],
      9: [
        img('bgkyj68wh5x9q93zinqdu27wt3ir_dl.beatsnoop.com-1715005674.jpg'),
        img('i7trauuxqdb0b1cwd972sjdu2a9b_%C5%9E%C9%99ki_xan_saray%C4%B1.jpg'),
        img('4od0spi8twrfb5bgst2y2hfowtkg_15624059250_864cc96c02_o.jpg'),
        img('j8oie73n3xz3bemp2eawz7c3alap_shutterstock_1136706353.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · On to Gabala and Tufandag`,
      'Breakfast and check out of your Baku hotel',
      'Northwest through the foothills to Gabala',
      'Nohur lake with its drowned trees',
      'The Tufandag cable car high above the town',
      `${DAY_MARK}Day 9 · A day in Sheki`,
      'Breakfast, then east along the Caucasus road',
      'The stained glass of the Palace of Sheki Khans',
      'The old caravanserai and its stone courtyard',
      'Halva and silk workshops in the lanes'
    ],
    accommodation: {
      name: 'Qabala Yeddi Gozel Hotel, Gabala',
      description: '2 nights · Breakfast · Standard room · 3★ · Quiet hotel in the hills near the Seven Beauties waterfall',
      images: [
        img('cdabwz4fovjo5urx50kb1keysxib_338211877.png'),
        img('89e458fxc3pml2bmglbip8waj9na_2aa2ef62_z.png'),
        img('b5j8by2mha5xqt18rizm1szfar7q_173127850.png'),
        img('c0hube0qyebdgeeu2jssow6hyydx_505663641.png'),
        img('7ciundz5d4n8t03zm7zxo6ykhgii_505664088.png'),
        img('80o44wuwtc8xi5suo2576cq8hu3t_a0950c8b_z.png'),
        img('rt2lkdre2gt1810ndzpsh1yxm918_505663831.png'),
        img('vk6t67ncphgtwevfiko0xsqcdgdg_89729326.png'),
        img('d002z4588afhj7rf82hoa6rh2mi2_40b65e51_z.png'),
        img('g0ih5p70kctddxwcf09sxbmq7s0q_505663917.png'),
        img('f03lakhq4xzhwoyfun3c2e8fbzef_3fba3c44_z.png')
      ]
    },
    activities: [
      {
        name: 'Gabala and Tufandag mountain',
        day: 8,
        optional: false,
        image: img('n8a1fu99y2fh34cpwum2l2zd8yoi_shutterstock_1296276955.jpg'),
        description: 'Nohur lake with its drowned trees, then the Tufandag cable car climbing above the town into the Greater Caucasus.'
      },
      {
        name: 'Sheki city sightseeing tour',
        day: 9,
        optional: false,
        image: img('bgkyj68wh5x9q93zinqdu27wt3ir_dl.beatsnoop.com-1715005674.jpg'),
        description: 'The Palace of Sheki Khans with its shebeke stained glass set without glue or nails, and the stone caravanserai in the old lanes.'
      }
    ],
    program: {
      name: 'Gabala',
      description: 'Two nights in the Caucasus foothills with the Tufandag cable car and a day in the old silk town of Sheki.',
      image: img('j8oie73n3xz3bemp2eawz7c3alap_shutterstock_1136706353.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Baku',
    subtitle: 'Baku → Absheron',
    dayLabel: 'Day 10 to 11',
    images: [
      img('ebedrx7md3lsckm8dymqgyh7ciqr_shutterstock_2152837819.jpg'),
      img('9hswo0z9nuwn0spjk1bl6kp8agjy_shutterstock_2061288494.jpg'),
      img('75bf7xrv810qsff19hi1bt1aevx2_shutterstock_2324425733.jpg'),
      img('g0gtz8i1ixkieosbry3cq2ydbghg_iltun-huseynli-OH7GkUqiuZk-unsplash.jpg')
    ],
    dayImages: {
      10: [
        img('u0eyd0xlyj6ubj9sr3q0vpckd2zj_shutterstock_2437520413.jpg'),
        img('k4vhk245t5yo6spp0wumgdaauoah_il2zw9pzevl80rile9lk.jpg'),
        img('4kxj5mcwti5dz6cqk1uf1hy50mir_cb879d2a6998b08e895ad2c3c92a8a69.jpg'),
        img('hsu5guk4mzj3n5pu31nutjquikf1_mardakan-castle.jpg')
      ],
      11: [
        img('mzetk2136hgywpux1nby61yrfz69_shutterstock_2213017005.jpg'),
        img('5r2cwf5pumac7azyim149wirkalr_shutterstock_2279957429.jpg'),
        img('lxjkv4wufiezgafl5uwzrpfwhm8e_shutterstock_1924135892.jpg'),
        img('w9xb7wy1kiflzp3up20o6gbd3ft9_shutterstock_2151451953.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 10 · Back to Baku and the Absheron peninsula`,
      'Breakfast and check out of the Gabala hotel',
      'Back down to the coast and out to Absheron',
      'The Ateshgah fire temple and the flames of Yanar Dagh',
      'Mardakan castle before checking in at Baku',
      `${DAY_MARK}Day 11 · Departure from Baku`,
      'Breakfast at the hotel and check out',
      'Private transfer to Heydar Aliyev for your flight home'
    ],
    accommodation: {
      name: 'Atlas Hotel Baku, Baku',
      description: '2 nights · Breakfast · Standard room · 3★ · Friendly hotel close to the walled Old City',
      images: [
        img('805osrrbd00zkynnpn80863t8cif_369378270%20(1).jpg'),
        img('51geujd3aoltv1qejqtkik84z4qe_337426508%20(2).jpg'),
        img('m0g8pkw4335866ja4jrnaaxdsjrw_161258457.jpg'),
        img('wmarh67i4acjcqxo0ispdo2pggd8_425636973%20(1).jpg'),
        img('mwhhl3ptxzfo0tvw25x7uplvawmy_337425086%20(2).jpg'),
        img('3wwgrxjdvxv6cssauo9w4uup7vhv_149453981.jpg'),
        img('72yf30sd1t1v5uynugdlpe1osrcd_141358762.jpg'),
        img('kozwo56lxgavmdvmbt2zaxok1e4t_aeb1acda86bf11eeb0070a58a9feac02.webp'),
        img('s0ly27riowszy8b14mtxfmvr4zdh_141358765.jpg'),
        img('u91hekrh2e0u3eu3777ha35y0ozl_e8f513a286bd11eebdca0a58a9feac02.jpg'),
        img('x7sw5w1qthhlf4fj03ot9wkyucty_247df51a86be11eea7c20a58a9feac02.jpg'),
        img('1i2gxuwapq5eiur8g2qotd6d4w8b_ae073a6686bf11eeaff10a58a9feac02.jpg'),
        img('f6geyxe340pyxuqdpns1mjkxne37_640203a_hb_l_002.jpeg')
      ]
    },
    activities: [
      {
        name: 'Absheron peninsula tour',
        day: 10,
        optional: false,
        image: img('u0eyd0xlyj6ubj9sr3q0vpckd2zj_shutterstock_2437520413.jpg'),
        description: 'The Ateshgah fire temple, the Mardakan castle and Yanar Dagh, a hillside where escaping gas has burned for centuries.'
      }
    ],
    program: {
      name: 'Baku',
      description: 'Two final nights back on the coast after the Absheron fire temples and the Heydar Aliyev Centre.',
      image: img('ebedrx7md3lsckm8dymqgyh7ciqr_shutterstock_2152837819.jpg')
    }
  }
];

const detail = {
  slug: 'grand-almaty-baku-and-sheki',
  ctaHref: '/l/kazakhstan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Grand Almaty, Baku and Sheki',
  alt: 'Stained glass shebeke windows of the Palace of Sheki Khans',
  days: '11 days / 10 nights',
  stations: '4 stops',
  transport: 'Private transfers, private day tours and an internal flight',
  tag: 'Culture',
  tags: ['Culture', 'Multi-country'],
  price: 94990,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Almaty', 'Baku', 'Gabala', 'Sheki'],
  stats: { days: 11, cities: 4, hotels: 3, activities: 9, transfers: 16 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['9 experiences', 'Activities'],
    ['16 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aisha',
    image: '/experts/riya.webp',
    role: 'Kazakhstan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Sheki is the reason to take this one over the shorter Baku trips. That palace is the finest building in the Caucasus and almost nobody from India has seen it.',
    quoteMore: 'Buy the halva in Sheki rather than at Baku airport. It is made in the lanes behind the caravanserai and costs a third of the price.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eleven days from Almaty to the Caucasus: the Kazakh city and Shymbulak, Lake Issyk, then the Baku Old City with Gobustan and the mud volcanoes, the Tufandag cable car at Gabala, the stained glass palace at Sheki and the Absheron fire temples.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 10 nights with daily breakfast across Almaty, Baku and Gabala; private airport transfers; Almaty city sightseeing tour; Medeu and Shymbulak day trip; Green Bazaar and Rakhat chocolate factory trip; private Lake Issyk day tour; private Baku Old City tour; Gobustan National Park and mud volcanoes tour; Gabala and Tufandag mountain day trip; private Sheki city sightseeing tour; Absheron peninsula tour.',
  intro2: 'Not included: international flights; the Almaty to Baku internal flight; Kazakhstan and Azerbaijan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Almaty (Arrival)', text: 'Arrival at Almaty International and transfer to your hotel\nCheck in and the rest of the day free\nOptional: the stalls of the Zelyony bazaar\nOptional: an evening on Abai Square', hotel: 'Hotel Kazzhol Almaty', highlights: ['Arrival at Almaty International and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: the stalls of the Zelyony bazaar'] },
    { title: 'Day 2: Almaty city tour (B)', text: 'Breakfast, then a guided tour of the city\nThe Monument of Independence on Republic Square\nPanfilov Park and the wooden Ascension Cathedral\nAfternoon free along Zhibek Zholy', hotel: 'Hotel Kazzhol Almaty', highlights: ['Breakfast, then a guided tour of the city', 'The Monument of Independence on Republic Square', 'Panfilov Park and the wooden Ascension Cathedral'] },
    { title: 'Day 3: Medeu rink and Shymbulak (B)', text: 'Breakfast, then up the Malaya Almatinka valley\nThe Medeu dam and its Olympic skating rink\nOn by gondola to the Shymbulak ski resort\nSnow peaks of the Zailiysky Alatau above you', hotel: 'Hotel Kazzhol Almaty', highlights: ['Breakfast, then up the Malaya Almatinka valley', 'The Medeu dam and its Olympic skating rink', 'On by gondola to the Shymbulak ski resort'] },
    { title: 'Day 4: Green Bazaar and chocolate factory (B)', text: 'Breakfast, then into the Green Bazaar halls\nHorse meat counters, dried fruit and spice stalls\nThe Rakhat chocolate factory and its shop\nAfternoon free in the city centre', hotel: 'Hotel Kazzhol Almaty', highlights: ['Breakfast, then into the Green Bazaar halls', 'Horse meat counters, dried fruit and spice stalls', 'The Rakhat chocolate factory and its shop'] },
    { title: 'Day 5: Lake Issyk day trip (B)', text: 'Breakfast, then east towards the Issyk gorge\nThe turquoise water of Lake Issyk\nThe Saka burial mounds and the site museum\nEvening transfer back into Almaty', hotel: 'Atlas Hotel Baku', highlights: ['Breakfast, then east towards the Issyk gorge', 'The turquoise water of Lake Issyk', 'The Saka burial mounds and the site museum'] },
    { title: 'Day 6: Almaty to Baku (Travel day)', text: 'Check out of your Almaty hotel after an early start\nOptional: flight Almaty to Baku, booked with us\nArrival transfer from Heydar Aliyev to your hotel\nOptional: the Baku Eye and the Teze Pir mosque', hotel: 'Atlas Hotel Baku', highlights: ['Check out of your Almaty hotel after an early start', 'Optional: flight Almaty to Baku, booked with us', 'Arrival transfer from Heydar Aliyev to your hotel'] },
    { title: 'Day 7: Old City, Gobustan and mud volcanoes (B)', text: 'Breakfast, then into the walled Old City\nThe Maiden Tower and the Shirvanshahs\' palace\nSouth to the Gobustan rock carvings after lunch\nThe grey mud volcanoes bubbling out on the flats', hotel: 'Qabala Yeddi Gozel Hotel', highlights: ['Breakfast, then into the walled Old City', 'The Maiden Tower and the Shirvanshahs\' palace', 'South to the Gobustan rock carvings after lunch'] },
    { title: 'Day 8: On to Gabala and Tufandag (B)', text: 'Breakfast and check out of your Baku hotel\nNorthwest through the foothills to Gabala\nNohur lake with its drowned trees\nThe Tufandag cable car high above the town', hotel: 'Qabala Yeddi Gozel Hotel', highlights: ['Breakfast and check out of your Baku hotel', 'Northwest through the foothills to Gabala', 'Nohur lake with its drowned trees'] },
    { title: 'Day 9: A day in Sheki (B)', text: 'Breakfast, then east along the Caucasus road\nThe stained glass of the Palace of Sheki Khans\nThe old caravanserai and its stone courtyard\nHalva and silk workshops in the lanes', hotel: 'Atlas Hotel Baku', highlights: ['Breakfast, then east along the Caucasus road', 'The stained glass of the Palace of Sheki Khans', 'The old caravanserai and its stone courtyard'] },
    { title: 'Day 10: Back to Baku and the Absheron peninsula (B)', text: 'Breakfast and check out of the Gabala hotel\nBack down to the coast and out to Absheron\nThe Ateshgah fire temple and the flames of Yanar Dagh\nMardakan castle before checking in at Baku', hotel: 'Atlas Hotel Baku', highlights: ['Breakfast and check out of the Gabala hotel', 'Back down to the coast and out to Absheron', 'The Ateshgah fire temple and the flames of Yanar Dagh'] },
    { title: 'Day 11: Departure from Baku (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Heydar Aliyev for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Heydar Aliyev for your flight home'] }
  ],
  outro: 'Not included: international flights; the Almaty to Baku internal flight; Kazakhstan and Azerbaijan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Kazakhstan', href: '/asia/kazakhstan' },
  { label: detail.title }
];

export const grandAlmatyBakuShekiBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const grandAlmatyBakuShekiProduct = {
  slug: detail.slug,
  places: ['Almaty', 'Baku', 'Gabala', 'Sheki'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 11,
  stops: 4,
  hotels: 3,
  cities: 4,
  activities: 9,
  transfers: 16,
  meals: 9,
  price: detail.price,
  images: cardImages
};
