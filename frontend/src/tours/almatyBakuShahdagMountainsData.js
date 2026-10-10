// Almaty, Baku and the Shahdag Mountains. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg'),
  img('5r2cwf5pumac7azyim149wirkalr_shutterstock_2279957429.jpg'),
  img('83pzihrfvurv42kn7qa0gb9q33ps_shutterstock_349175363.jpg'),
  img('ebedrx7md3lsckm8dymqgyh7ciqr_shutterstock_2152837819.jpg'),
  img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
  img('g0gtz8i1ixkieosbry3cq2ydbghg_iltun-huseynli-OH7GkUqiuZk-unsplash.jpg'),
  img('tsqq6b52m8btip7w4igo20wk9lxu_shutterstock_2139114787.jpg'),
  img('mzetk2136hgywpux1nby61yrfz69_shutterstock_2213017005.jpg'),
  img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg'),
  img('75bf7xrv810qsff19hi1bt1aevx2_shutterstock_2324425733.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('5r2cwf5pumac7azyim149wirkalr_shutterstock_2279957429.jpg'),
  img('83pzihrfvurv42kn7qa0gb9q33ps_shutterstock_349175363.jpg'),
  img('tsqq6b52m8btip7w4igo20wk9lxu_shutterstock_2139114787.jpg'),
  img('lxjkv4wufiezgafl5uwzrpfwhm8e_shutterstock_1924135892.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Almaty',
    subtitle: 'Almaty → Charyn Canyon and Kolsai',
    dayLabel: 'Day 1 to 6',
    images: [
      img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg'),
      img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
      img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
      img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg')
    ],
    dayImages: {
      1: [
        img('x5107z3hn22853u89owu0rrfahox_28panfilov-guardsmen1.png'),
        img('rbsdlpmqrfga1bptwh7jhqywl58s_shutterstock_1873578235.jpg'),
        img('vrjnt8wwvr78tk7y6bjhxab6pm7x_Medeu-_4.jpg'),
        img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg')
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
        img('vvl7sswynniu6efbczr7gqvd7jpk_Downpic.cc-1363512187.jpg')
      ],
      5: [
        img('w3dhy3jnmc8fyqi0qykmoa9j04kj_Downpic.cc-78348034.jpg'),
        img('trcgsh6zpbn7c3tqrbtr24leiybu_1618298981_546870.jpg'),
        img('7e99ylb15o8mvs5hyaugcl3jkmde_getlstd-property-photo.jpg'),
        img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg')
      ],
      6: [
        img('46q2uqsxkc2ew0xijdcove67axyr_dl.beatsnoop.com-final-mKejacPGXh.jpg'),
        img('l33rnccy9xk7iglvrgmh0tb6gew0_1618298288_1554123490_charynskij-kanon-1.jpg'),
        img('r1d98eg10nugezjii0mcf4bgeibk_download.jpg'),
        img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Almaty`,
      'Arrival at Almaty International and transfer to your hotel',
      'Check in and the rest of the day free',
      'Optional: the stalls of the Zelyony bazaar',
      'Optional: an evening in Panfilov Park',
      `${DAY_MARK}Day 2 · Almaty city tour`,
      'Breakfast, then a private tour of the city',
      'The Monument of Independence on Republic Square',
      'Panfilov Park and the wooden Ascension Cathedral',
      'Afternoon free along Zhibek Zholy',
      `${DAY_MARK}Day 3 · Shymbulak ski resort`,
      'Breakfast, then up the Malaya Almatinka valley',
      'The Medeu dam and its Olympic skating rink',
      'On by gondola to the Shymbulak ski resort',
      'Snow peaks of the Zailiysky Alatau above you',
      `${DAY_MARK}Day 4 · Green Bazaar, chocolate and Kok Tobe`,
      'Breakfast, then into the Green Bazaar halls',
      'Horse meat counters, dried fruit and spice stalls',
      'The Rakhat chocolate factory and its shop',
      'Up the Kok Tobe cable car for the city at dusk',
      `${DAY_MARK}Day 5 · Lake Issyk day trip`,
      'Breakfast, then east towards the Issyk gorge',
      'The turquoise water of Lake Issyk',
      'The Saka burial mounds and the site museum',
      'Evening transfer back into Almaty',
      `${DAY_MARK}Day 6 · Charyn Canyon and Kolsai Lake`,
      'Early breakfast and a long day out east',
      'The red walls of the Valley of Castles',
      'The canyon floor path beside the Charyn river',
      'On to the forested shore of Kolsai lake'
    ],
    accommodation: {
      name: 'Hotel Kazzhol Almaty, Almaty',
      description: '6 nights · Breakfast · Standard room · 4★ · Well run hotel in the centre with a garden courtyard',
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
        description: 'A private tour of the old capital, taking in the Monument of Independence, Panfilov Park and the wooden Ascension Cathedral.'
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
        name: 'Kok Tobe hill and the gondola',
        day: 4,
        optional: false,
        image: img('vvl7sswynniu6efbczr7gqvd7jpk_Downpic.cc-1363512187.jpg'),
        description: 'The cable car up Kok Tobe for the whole city laid out below the mountains, with the Alley of Lovers at the top.'
      },
      {
        name: 'Lake Issyk day tour',
        day: 5,
        optional: false,
        image: img('w3dhy3jnmc8fyqi0qykmoa9j04kj_Downpic.cc-78348034.jpg'),
        description: 'A private day east to the turquoise water of Lake Issyk, with the Saka burial mounds and the small site museum nearby.'
      },
      {
        name: 'Charyn Canyon and Kolsai Lake',
        day: 6,
        optional: false,
        image: img('46q2uqsxkc2ew0xijdcove67axyr_dl.beatsnoop.com-final-mKejacPGXh.jpg'),
        description: 'A long day out to the red sandstone Valley of Castles in Charyn Canyon, then up to the forested shore of Kolsai lake.'
      }
    ],
    program: {
      name: 'Almaty',
      description: 'Six nights in the old Kazakh capital with five private day tours, from Shymbulak and Kok Tobe to Lake Issyk and Charyn Canyon.',
      image: img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Baku',
    subtitle: 'Baku → Gobustan',
    dayLabel: 'Day 7 to 8',
    images: [
      img('mzetk2136hgywpux1nby61yrfz69_shutterstock_2213017005.jpg'),
      img('5r2cwf5pumac7azyim149wirkalr_shutterstock_2279957429.jpg'),
      img('lxjkv4wufiezgafl5uwzrpfwhm8e_shutterstock_1924135892.jpg'),
      img('w9xb7wy1kiflzp3up20o6gbd3ft9_shutterstock_2151451953.jpg')
    ],
    dayImages: {
      7: [
        img('9dhddagcxbdp7gamd4u9jylbkh2q_1621620650_shutterstock_1219342972.jpg'),
        img('trrh1a327y0b2s0zj9qo36mehbu3_152a75981c6c3b5cd5b344fe49ed3b6a.jpg'),
        img('c8vtoky9vt8n9or5305y9btdq1os_1618561214_shutterstock_1917544799.jpg'),
        img('mzetk2136hgywpux1nby61yrfz69_shutterstock_2213017005.jpg')
      ],
      8: [
        img('vnrkg0vovqst85c5u37hhdni7qmc_dl.beatsnoop.com-final-HYwgrsRJGp.jpg'),
        img('22p1kyib7lpk1be6nt3s4sl8d1t5_maidens-tower-azerbaijan.jpg'),
        img('ylkh9xm7m3i7m4xuh1h9c9z0jqeb__vlNhYbF.jpg'),
        img('6fe9qrq5ogiynsyuhgayss5987wz_wKgBEFtqmVaAJHwBAAztiG7HyqM09.jpeg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Almaty to Baku`,
      'Breakfast and check out of your Almaty hotel',
      'Optional: flight Almaty to Baku, booked with us',
      'Arrival transfer from Heydar Aliyev to your hotel',
      'Optional: the Baku Eye and the Teze Pir mosque',
      `${DAY_MARK}Day 8 · Old City, Gobustan and mud volcanoes`,
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
        day: 8,
        optional: false,
        image: img('vnrkg0vovqst85c5u37hhdni7qmc_dl.beatsnoop.com-final-HYwgrsRJGp.jpg'),
        description: 'The walled Icherisheher with the Maiden Tower, the Shirvanshahs\' palace, Fountain Square and the boating canals on the boulevard.'
      },
      {
        name: 'Gobustan rock art and the mud volcanoes',
        day: 8,
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
    name: 'Shahdag',
    dayLabel: 'Day 9 to 10',
    images: [
      img('y51ocqqes2ffm9w2m1g3sobbkwrd_shutterstock_1586460352.jpg'),
      img('mtqyc2p3drp81sxiejg4d0sdnxwp_shutterstock_2446766047.jpg'),
      img('83pzihrfvurv42kn7qa0gb9q33ps_shutterstock_349175363.jpg'),
      img('2zkpmjqr5n27rqd5k6xdan2dmckb_shutterstock_1978873283.jpg')
    ],
    dayImages: {
      9: [
        img('390licsixhcrbubi7benjx3jjy4c_Shahdag20.tif'),
        img('y51ocqqes2ffm9w2m1g3sobbkwrd_shutterstock_1586460352.jpg'),
        img('mtqyc2p3drp81sxiejg4d0sdnxwp_shutterstock_2446766047.jpg'),
        img('83pzihrfvurv42kn7qa0gb9q33ps_shutterstock_349175363.jpg')
      ],
      10: [
        img('8lh58lglyit45qby6wpzia9pt3gt_Ski_Famille_-_Family_Ski_Holidays.jpg'),
        img('v1v9sj4hwi53jh8viyng9ismpbd4_gondola-shahdag.webp'),
        img('in2st32bx6kvpn6wxbile8kukk5j_zipline%20shahdag.webp'),
        img('y51ocqqes2ffm9w2m1g3sobbkwrd_shutterstock_1586460352.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 9 · Up to the Shahdag mountains`,
      'Breakfast and check out of your Baku hotel',
      'North into the Greater Caucasus towards Shahdag',
      'The mountain resort and its gondola lines',
      'Check in high up with the ridges all around',
      `${DAY_MARK}Day 10 · A free day at Shahdag`,
      'Breakfast with the mountains at the window',
      'The whole day free at the resort',
      'Optional: skiing, the gondola or the zipline',
      'Optional: the alpine coaster and the walking trails'
    ],
    accommodation: {
      name: 'Zirve Hotel, Shahdag',
      description: '2 nights · Breakfast · Standard room · 4★ · Mountain hotel in the resort village at 1,700 metres',
      images: [
        img('nwrx6nctqg2qvw1o4bdx6a6wawou_23rwerf.jpg'),
        img('y0iz3n2fcy5l6blsctzmntb76lth_download%20-%202024-05-07T123538.260.jpg'),
        img('nng4irjrfc444wgkscmvhm583zvj_download%20-%202024-05-07T123457.149.jpg'),
        img('a0puv46fl6cqdepsclc52n8b6bd4_download%20-%202024-05-07T123447.507.jpg'),
        img('jxc7ygbsijd6mgwtvnh2orrnp3iv_download%20-%202024-05-07T123549.625.jpg'),
        img('pmuho3e3kssdmbut3h92o5x2mmcs_download%20-%202024-05-07T123555.222.jpg'),
        img('ney7fw4p3tic536emx0c76c1vyv9_download%20-%202024-05-07T123433.725.jpg'),
        img('4rrngowdszp3ecvz8w1pi7klre2o_download%20-%202024-05-07T123443.253.jpg'),
        img('c0v8obvirxvkn33r31xe3fzrea91_download%20-%202024-05-07T123439.157.jpg'),
        img('5pnjkd57rtsh8ufz0oh36qn6sqx1_download%20-%202024-05-07T123429.117.jpg'),
        img('stee1npisl4zvdo902xp5r4ft0hh_download%20-%202024-05-07T123559.949.jpg'),
        img('n4o3cvmpni4ilc7b9sfrmd484qpi_download%20-%202024-05-07T123629.387.jpg'),
        img('kq5aucxlu41umuugb76qw3g5n5yy_download%20-%202024-05-07T123618.876.jpg'),
        img('k15m4slgxg9nnmpe5sa2eb2hozhg_download%20-%202024-05-07T123606.453.jpg'),
        img('fzbhjdc8g68kq4f57nin8yw6cr0n_download%20-%202024-05-07T123424.936.jpg')
      ]
    },
    activities: [
      {
        name: 'Shahdag mountain ski resort',
        day: 9,
        optional: false,
        image: img('390licsixhcrbubi7benjx3jjy4c_Shahdag20.tif'),
        description: 'The largest resort in the Caucasus, with gondola lines running up bare ridges and an alpine coaster for the summer months.'
      },
      {
        name: 'A free day in the mountains',
        day: 10,
        optional: true,
        image: img('v1v9sj4hwi53jh8viyng9ismpbd4_gondola-shahdag.webp'),
        description: 'Skiing in winter or the gondola, zipline and walking trails in summer, all bookable on the spot at the resort.'
      }
    ],
    program: {
      name: 'Shahdag',
      description: 'Two nights high in the Greater Caucasus at the largest mountain resort in Azerbaijan, with a full day at leisure.',
      image: img('y51ocqqes2ffm9w2m1g3sobbkwrd_shutterstock_1586460352.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Baku',
    subtitle: 'Baku → Absheron',
    dayLabel: 'Day 11 to 12',
    images: [
      img('ebedrx7md3lsckm8dymqgyh7ciqr_shutterstock_2152837819.jpg'),
      img('9hswo0z9nuwn0spjk1bl6kp8agjy_shutterstock_2061288494.jpg'),
      img('75bf7xrv810qsff19hi1bt1aevx2_shutterstock_2324425733.jpg'),
      img('g0gtz8i1ixkieosbry3cq2ydbghg_iltun-huseynli-OH7GkUqiuZk-unsplash.jpg')
    ],
    dayImages: {
      11: [
        img('u0eyd0xlyj6ubj9sr3q0vpckd2zj_shutterstock_2437520413.jpg'),
        img('k4vhk245t5yo6spp0wumgdaauoah_il2zw9pzevl80rile9lk.jpg'),
        img('4kxj5mcwti5dz6cqk1uf1hy50mir_cb879d2a6998b08e895ad2c3c92a8a69.jpg'),
        img('hsu5guk4mzj3n5pu31nutjquikf1_mardakan-castle.jpg')
      ],
      12: [
        img('mzetk2136hgywpux1nby61yrfz69_shutterstock_2213017005.jpg'),
        img('5r2cwf5pumac7azyim149wirkalr_shutterstock_2279957429.jpg'),
        img('lxjkv4wufiezgafl5uwzrpfwhm8e_shutterstock_1924135892.jpg'),
        img('w9xb7wy1kiflzp3up20o6gbd3ft9_shutterstock_2151451953.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 11 · Back to Baku and the Absheron peninsula`,
      'Breakfast and check out of the mountain hotel',
      'Back down to the coast and out to Absheron',
      'The Ateshgah fire temple and the flames of Yanar Dagh',
      'Mardakan castle before checking in at Baku',
      `${DAY_MARK}Day 12 · Departure from Baku`,
      'Breakfast at the hotel and check out',
      'Private transfer to Heydar Aliyev for your flight home'
    ],
    accommodation: {
      name: 'Atlas Hotel Baku, Baku',
      description: '1 night · Breakfast · Standard room · 3★ · Friendly hotel close to the walled Old City',
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
        day: 11,
        optional: false,
        image: img('u0eyd0xlyj6ubj9sr3q0vpckd2zj_shutterstock_2437520413.jpg'),
        description: 'The Ateshgah fire temple, the Mardakan castle and Yanar Dagh, a hillside where escaping gas has burned for centuries.'
      }
    ],
    program: {
      name: 'Baku',
      description: 'A final night back on the coast after the Absheron fire temples and the Heydar Aliyev Centre.',
      image: img('ebedrx7md3lsckm8dymqgyh7ciqr_shutterstock_2152837819.jpg')
    }
  }
];

const detail = {
  slug: 'almaty-baku-and-the-shahdag-mountains',
  ctaHref: '/l/kazakhstan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Almaty, Baku and the Shahdag Mountains',
  alt: 'Ridges of the Greater Caucasus above the Shahdag mountain resort',
  days: '12 days / 11 nights',
  stations: '4 stops',
  transport: 'Private transfers, private day tours and an internal flight',
  tag: 'Adventure',
  tags: ['Adventure', 'Multi-country'],
  price: 109250,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Almaty', 'Baku', 'Shahdag'],
  stats: { days: 12, cities: 4, hotels: 3, activities: 10, transfers: 18 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['10 experiences', 'Activities'],
    ['18 transfers', 'Transport'],
    ['11 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aisha',
    image: '/experts/riya.webp',
    role: 'Kazakhstan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Eleven nights and three very different landscapes: the Kazakh steppe, the Caspian oil coast and two nights up in the Caucasus.',
    quoteMore: 'Shahdag works in both seasons. Snow from December to March, and from June the gondola and the coaster run instead.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Twelve days from the Kazakh steppe to the Greater Caucasus: six nights of private day tours out of Almaty, the Gobustan rock carvings and mud volcanoes from Baku, two nights high at Shahdag and the Absheron fire temples to finish.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 11 nights with daily breakfast across Almaty, Baku and Shahdag; private airport transfers; private Almaty city sightseeing tour; Medeu and Shymbulak day trip; Green Bazaar and Rakhat chocolate factory trip; Kok Tobe day trip; Lake Issyk day tour; Charyn Canyon and Kolsai Lake day trip; private Baku Old City tour; Gobustan National Park and mud volcanoes tour; Shahdag mountain resort day trip; Absheron peninsula tour.',
  intro2: 'Not included: international flights; the Almaty to Baku internal flight; Kazakhstan and Azerbaijan visa fees; lunches and dinners; travel insurance; laundry and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Almaty (Arrival)', text: 'Arrival at Almaty International and transfer to your hotel\nCheck in and the rest of the day free\nOptional: the stalls of the Zelyony bazaar\nOptional: an evening in Panfilov Park', hotel: 'Hotel Kazzhol Almaty', highlights: ['Arrival at Almaty International and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: the stalls of the Zelyony bazaar'] },
    { title: 'Day 2: Almaty city tour (B)', text: 'Breakfast, then a private tour of the city\nThe Monument of Independence on Republic Square\nPanfilov Park and the wooden Ascension Cathedral\nAfternoon free along Zhibek Zholy', hotel: 'Hotel Kazzhol Almaty', highlights: ['Breakfast, then a private tour of the city', 'The Monument of Independence on Republic Square', 'Panfilov Park and the wooden Ascension Cathedral'] },
    { title: 'Day 3: Shymbulak ski resort (B)', text: 'Breakfast, then up the Malaya Almatinka valley\nThe Medeu dam and its Olympic skating rink\nOn by gondola to the Shymbulak ski resort\nSnow peaks of the Zailiysky Alatau above you', hotel: 'Hotel Kazzhol Almaty', highlights: ['Breakfast, then up the Malaya Almatinka valley', 'The Medeu dam and its Olympic skating rink', 'On by gondola to the Shymbulak ski resort'] },
    { title: 'Day 4: Green Bazaar, chocolate and Kok Tobe (B)', text: 'Breakfast, then into the Green Bazaar halls\nHorse meat counters, dried fruit and spice stalls\nThe Rakhat chocolate factory and its shop\nUp the Kok Tobe cable car for the city at dusk', hotel: 'Hotel Kazzhol Almaty', highlights: ['Breakfast, then into the Green Bazaar halls', 'Horse meat counters, dried fruit and spice stalls', 'The Rakhat chocolate factory and its shop'] },
    { title: 'Day 5: Lake Issyk day trip (B)', text: 'Breakfast, then east towards the Issyk gorge\nThe turquoise water of Lake Issyk\nThe Saka burial mounds and the site museum\nEvening transfer back into Almaty', hotel: 'Hotel Kazzhol Almaty', highlights: ['Breakfast, then east towards the Issyk gorge', 'The turquoise water of Lake Issyk', 'The Saka burial mounds and the site museum'] },
    { title: 'Day 6: Charyn Canyon and Kolsai Lake (B)', text: 'Early breakfast and a long day out east\nThe red walls of the Valley of Castles\nThe canyon floor path beside the Charyn river\nOn to the forested shore of Kolsai lake', hotel: 'Hotel Kazzhol Almaty', highlights: ['Early breakfast and a long day out east', 'The red walls of the Valley of Castles', 'The canyon floor path beside the Charyn river'] },
    { title: 'Day 7: Almaty to Baku (B)', text: 'Breakfast and check out of your Almaty hotel\nOptional: flight Almaty to Baku, booked with us\nArrival transfer from Heydar Aliyev to your hotel\nOptional: the Baku Eye and the Teze Pir mosque', hotel: 'Atlas Hotel Baku', highlights: ['Breakfast and check out of your Almaty hotel', 'Optional: flight Almaty to Baku, booked with us', 'Arrival transfer from Heydar Aliyev to your hotel'] },
    { title: 'Day 8: Old City, Gobustan and mud volcanoes (B)', text: 'Breakfast, then into the walled Old City\nThe Maiden Tower and the Shirvanshahs\' palace\nSouth to the Gobustan rock carvings after lunch\nThe grey mud volcanoes bubbling out on the flats', hotel: 'Atlas Hotel Baku', highlights: ['Breakfast, then into the walled Old City', 'The Maiden Tower and the Shirvanshahs\' palace', 'South to the Gobustan rock carvings after lunch'] },
    { title: 'Day 9: Up to the Shahdag mountains (B)', text: 'Breakfast and check out of your Baku hotel\nNorth into the Greater Caucasus towards Shahdag\nThe mountain resort and its gondola lines\nCheck in high up with the ridges all around', hotel: 'Zirve Hotel', highlights: ['Breakfast and check out of your Baku hotel', 'North into the Greater Caucasus towards Shahdag', 'The mountain resort and its gondola lines'] },
    { title: 'Day 10: A free day at Shahdag (B)', text: 'Breakfast with the mountains at the window\nThe whole day free at the resort\nOptional: skiing, the gondola or the zipline\nOptional: the alpine coaster and the walking trails', hotel: 'Zirve Hotel', highlights: ['Breakfast with the mountains at the window', 'The whole day free at the resort', 'Optional: skiing, the gondola or the zipline'] },
    { title: 'Day 11: Back to Baku and the Absheron peninsula (B)', text: 'Breakfast and check out of the mountain hotel\nBack down to the coast and out to Absheron\nThe Ateshgah fire temple and the flames of Yanar Dagh\nMardakan castle before checking in at Baku', hotel: 'Atlas Hotel Baku', highlights: ['Breakfast and check out of the mountain hotel', 'Back down to the coast and out to Absheron', 'The Ateshgah fire temple and the flames of Yanar Dagh'] },
    { title: 'Day 12: Departure from Baku (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Heydar Aliyev for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Heydar Aliyev for your flight home'] }
  ],
  outro: 'Not included: international flights; the Almaty to Baku internal flight; Kazakhstan and Azerbaijan visa fees; lunches and dinners; travel insurance; laundry and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Kazakhstan', href: '/asia/kazakhstan' },
  { label: detail.title }
];

export const almatyBakuShahdagMountainsBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const almatyBakuShahdagMountainsProduct = {
  slug: detail.slug,
  places: ['Almaty', 'Baku', 'Shahdag'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 12,
  stops: 4,
  hotels: 3,
  cities: 4,
  activities: 10,
  transfers: 18,
  meals: 11,
  price: detail.price,
  images: cardImages
};
