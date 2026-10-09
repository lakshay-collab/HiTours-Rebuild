// Journey North through Tohoku and Hokkaido. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg'),
  img('ji57pm24qfr4h11cg871wrtgpo5q_shutterstock_2482021301.jpg'),
  img('ctl76adbatp41psacx4xtw0ip6fi_shutterstock_2467215131.jpg'),
  img('ppneuu94v6dj1t3xggvqsvwiwsr7_shutterstock_2438323379.jpg'),
  img('u6n0y1mulym4sf5kbk9ouwqw2s4b_shutterstock_2414469733.jpg'),
  img('rudp6bxggw53vaykvui9490l2twt_shutterstock_721643926.jpg'),
  img('zwpaqncptz0fs4ml073pr52or9nr_shutterstock_2415276455.jpg'),
  img('talpbzvlcpeuq1hhzzuzndlg4q43_shutterstock_2467215133.jpg'),
  img('4y4islfuumivyr2j8zwnn3ba0fbw_shutterstock_2429399865.jpg'),
  img('i86oqelkptgqhizjkzsit6l08qjk_shutterstock_2313811545.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg'),
  img('ji57pm24qfr4h11cg871wrtgpo5q_shutterstock_2482021301.jpg'),
  img('ctl76adbatp41psacx4xtw0ip6fi_shutterstock_2467215131.jpg'),
  img('ppneuu94v6dj1t3xggvqsvwiwsr7_shutterstock_2438323379.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    dayLabel: 'Day 1 to 2',
    images: [
      img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg'),
      img('61izsuekzybkh86q2bvapmbmyrlt_shutterstock_355725083.jpg'),
      img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg'),
      img('soeej5dh7ua5fb98796aec6qre8x_shutterstock_129611225%20(2).jpg')
    ],
    dayImages: {
      1: [
        img('s0s1j9k7ol91rdwi77ystaof4uzo_48126669936_084ba4982e_o.jpg'),
        img('7v0pb5achz6hdl8vmiejhfx5ocg9_1617352304_Shinjuku_Gyoen_National_Garden.jpg'),
        img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg'),
        img('61izsuekzybkh86q2bvapmbmyrlt_shutterstock_355725083.jpg')
      ],
      2: [
        img('45c14vvlbrutmvecm40rga4qxz4q_wpbfupd4okmw1fz5pgsewq6aa36p_dl.beatsnoop.com-r5tRpKLJYZ.jpg'),
        img('ea2mjqt2vr1hf62yek9bq6q7or9i_28330748537_9b6c02ea22_o.jpg'),
        img('iele7cut7wosbp83440c5yyy4663_shutterstock_666196894.jpg'),
        img('l2ve6s75yoif0uquecbp9gh6poh6_Screenshot%202022-09-21%20164951.png')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Tokyo`,
      'Arrival at Narita or Haneda and transfer to your hotel',
      'Check in beside Shinagawa station',
      'Free time in the Shinjuku district',
      'Evening at your own pace',
      `${DAY_MARK}Day 2 · Tokyo sightseeing`,
      'Breakfast, then a guided day through Tokyo',
      'Meiji shrine and the Imperial Palace gardens',
      'Asakusa and the Senso-ji temple lanes',
      'Evening free in the city'
    ],
    accommodation: {
      name: 'Shinagawa Prince Hotel, Tokyo',
      description: '2 nights · Breakfast · Standard room · 4★ · Large four star hotel beside Shinagawa station',
      images: [
        img('juksdm4d4uxalpfogphbtkbnuamj_452647028.jpg'),
        img('pxxdo21vgwoccwr5cpcergr1cm7o_4146765bac0064142ddcb8bd67346816.webp'),
        img('50g0xjbalxykcev2kjbnio2lqk6j_452670347.jpg'),
        img('egbkrl0emlj4efnbl5rzajaxznqk_63bf688102bd4c9e354f39182a281cd9.webp'),
        img('f1fq2dtpubdly8tvhy2fxu4bkepw_472727392.jpg'),
        img('b2ygodd73sj4whnl978s00avvi0h_317258376.jpg'),
        img('hedy5783g9ry9olfdx19bbfs78c1_78534135.jpg'),
        img('qktd4se6b7iurir9cbb5hga9vzkd_317254428.jpg'),
        img('ukx5syyfa4lk8kpvupn56d4pckxk_353194714.jpg'),
        img('oxlvinlrj0e4y8c1ar7cixv6mbl1_238878743.jpg'),
        img('mxlmo04fzmzfibovfm2yhsmaj4v8_452648109.jpg'),
        img('1c2tuz0q0u0xl36vwdx4483uzp9c_9358_20020713220087906397.webp'),
        img('mwg41snxd36r40j02ghm0gs55dpg_Shinagawa-Prince-Hotel-N-Tower-Tokyo-Room.jpeg'),
        img('kx07vby2ddun6cj5s4qjb9qj5swv_aabed107ce4770f2c0b25cd53bbb5ceb.webp'),
        img('214t3iii17cz7az9fdxv77nje2ol_238877948.jpg'),
        img('qc3vo4ndk0id57bamtz52t08er0v_238877803.jpg'),
        img('r7tpqgp60zcjri52un9ydqpap5cw_472728603.jpg'),
        img('l57fdi8htglduqytrzxqpwwpytpx_452648109.jpg'),
        img('pb955b3jyfp24yh06whxy8lzp2b5_465186998.jpg')
      ]
    },
    activities: [
      {
        name: 'Tokyo sightseeing tour',
        day: 2,
        optional: false,
        image: img('45c14vvlbrutmvecm40rga4qxz4q_wpbfupd4okmw1fz5pgsewq6aa36p_dl.beatsnoop.com-r5tRpKLJYZ.jpg'),
        description: 'A guided day through the city, from the Meiji shrine and the Imperial Palace gardens to the old temple lanes of Asakusa.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Two nights beside Shinagawa station, with free time in Shinjuku and a full guided city day.',
      image: img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Sendai',
    subtitle: 'Sendai via Nikko',
    dayLabel: 'Day 3',
    images: [
      img('zwpaqncptz0fs4ml073pr52or9nr_shutterstock_2415276455.jpg'),
      img('ji57pm24qfr4h11cg871wrtgpo5q_shutterstock_2482021301.jpg')
    ],
    dayImages: {
      3: [
        img('c58m1091gvwai0wxvpv6c6s330xj_Downpic.cc-84190874.jpg'),
        img('um1np28fhp4do9b4tj4eev1ffacs_40906793823_f26fe230df_o.jpg'),
        img('o64g636ktfdqokhru1ozcvv0bcb0_download%20-%202024-07-24T164446.336.jpg'),
        img('sahoqz9y8rtptljvxyqxc65vbw0v_download%20-%202024-07-24T163530.831.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Nikko and on to Sendai`,
      'Breakfast and check out, then north towards Nikko',
      'The Toshogu shrine in its cedar forest',
      'The Shinkyo bridge and Kegon falls',
      'On to Sendai and check in by the station'
    ],
    accommodation: {
      name: 'Hotel Metropolitan Sendai East, Sendai',
      description: '1 night · Breakfast · Standard room · 3★ · Comfortable hotel beside Sendai station',
      images: [
        img('364opt9mtk7x5urf1nmkrj8058uu_download%20-%202024-07-19T120142.284.png'),
        img('s62bw0e5poifkpr8ebydf4clpfko_download%20-%202024-07-19T115723.231.png'),
        img('uohhlbu9jpmphfxxubcmpwr0hond_download%20-%202024-07-19T115716.867.png'),
        img('w1qzq77tm3cw4frjvqs5g9fcbubb_download%20-%202024-07-19T115707.609.png'),
        img('f2fhdhgr2ettnlpqjggy1gq7h4nc_download%20-%202024-07-19T115757.406.png'),
        img('l9vlpw2te9dgfc6tir0724zee1pw_download%20-%202024-07-19T115741.130.png'),
        img('u56f1ieftra8ogz45y5pht3s7x2a_download%20-%202024-07-19T115733.756.png'),
        img('fytdw5nnfnl1net6d855gn8danon_download%20-%202024-07-19T115656.775.png'),
        img('tksemjsfheyeav99yt1jdg37g9k7_download%20-%202024-07-19T115700.354.png'),
        img('0guqec1gy9zs8w0p2n8y7eyulzig_download%20-%202024-07-19T115646.697.png'),
        img('kkgnsu59gwkaw1xvr4ogn8e3jlsc_download%20-%202024-07-19T115747.692.png'),
        img('34g9pp6suxh3qo0popbfsay2xz0n_download%20-%202024-07-19T115650.752.png'),
        img('7jjv0zzns745g4k7tum49yi66glh_download%20-%202024-07-19T115712.595.png')
      ]
    },
    activities: [
      {
        name: 'Nikko sightseeing tour',
        day: 3,
        optional: false,
        image: img('c58m1091gvwai0wxvpv6c6s330xj_Downpic.cc-84190874.jpg'),
        description: 'The lacquered Toshogu shrine in its cedar forest, the Shinkyo bridge and the Kegon falls on the way north.'
      }
    ],
    program: {
      name: 'Sendai',
      description: 'A night in Sendai, reached through Nikko\'s shrines and waterfalls on the drive north.',
      image: img('zwpaqncptz0fs4ml073pr52or9nr_shutterstock_2415276455.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Morioka',
    subtitle: 'Morioka via Matsushima and Hiraizumi',
    dayLabel: 'Day 4',
    images: [
      img('ay668qezs33gc47jnkthds3275vb_shutterstock_2475525335.jpg'),
      img('talpbzvlcpeuq1hhzzuzndlg4q43_shutterstock_2467215133.jpg'),
      img('ctl76adbatp41psacx4xtw0ip6fi_shutterstock_2467215131.jpg')
    ],
    dayImages: {
      4: [
        img('i7lsj6c09mf4luecngdyb5218z6d_Kanrantei%20Tea%20House-2.jpg'),
        img('3gs7gug493qf80o6csqa6inzw134_download%20-%202024-07-24T151558.737.jpeg'),
        img('eh7yglnqcnl53d46zczezdmnejku_Matshushima%20Bay%20Cruise-2.jpg'),
        img('208bqqsmd0x03a9snxh9y6asmt04_banner-matsushima-bay.jpg.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Matsushima bay and Hiraizumi`,
      'Breakfast, then out to Matsushima bay',
      'The Kanrantei tea house above the water',
      'A cruise through the pine topped islands',
      'The gold hall at Hiraizumi, then Morioka'
    ],
    accommodation: {
      name: 'Hotel Metropolitan Morioka New Wing, Morioka',
      description: '1 night · Breakfast · Standard room · 3★ · Reliable hotel at Morioka station in northern Tohoku',
      images: [
        img('mm38md1g5p9ukiiz6kjes4igynak_7e1c3bce_z.jpg'),
        img('m8j77edebh24ftc7fy46gxkcar6x_8d1d6bbc_z.jpg'),
        img('qr7z04ecdkvz6rxvy0qtyyf5ynzc_c97c301e_z.jpg'),
        img('dz697buwpr8i12u9yjco8q3qpmu2_7878d54f_z.jpg'),
        img('8p8uyxdmlcmpc685o3ddgdj6kie1_111503e9_z.jpg'),
        img('i1mevetob0m0k35w9og7jlspl03i_c074ee00_z.jpg'),
        img('jr3zdzww93cex42hk89zd8smnhrs_caption%20(4).jpg'),
        img('x6vywa44mwhao1zleubhj5xw2f4i_caption%20(3).jpg'),
        img('q4sfhqzstsn49yiqlximyn51zow5_1a41669d_z.jpg'),
        img('9onpjhk4dqjcejf17ejibh4zst7h_0816b6ad_z.jpg')
      ]
    },
    activities: [
      {
        name: 'Kanrantei tea house',
        day: 4,
        optional: false,
        image: img('i7lsj6c09mf4luecngdyb5218z6d_Kanrantei%20Tea%20House-2.jpg'),
        description: 'A sixteenth century tea pavilion looking out over Matsushima bay, given to the local lord by Toyotomi Hideyoshi.'
      },
      {
        name: 'Matsushima bay cruise',
        day: 4,
        optional: false,
        image: img('eh7yglnqcnl53d46zczezdmnejku_Matshushima%20Bay%20Cruise-2.jpg'),
        description: 'A cruise through the pine topped islands of Matsushima, counted among the three great views of Japan.'
      },
      {
        name: 'Hiraizumi sightseeing',
        day: 4,
        optional: false,
        image: img('zm661upyocyyjsi0xt8b22oakvrh_Takkoku%20no%20iwaya-1.jpg'),
        description: 'The gold leaf hall of Chuson-ji and the garden temple of Motsu-ji, all that is left of a northern capital.'
      }
    ],
    program: {
      name: 'Morioka',
      description: 'A night in Morioka, with a tea house and bay cruise at Matsushima and the gold hall at Hiraizumi on the way.',
      image: img('ay668qezs33gc47jnkthds3275vb_shutterstock_2475525335.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Hakodate',
    subtitle: 'Hakodate via Hirosaki and Aomori',
    dayLabel: 'Day 5',
    images: [
      img('4y4islfuumivyr2j8zwnn3ba0fbw_shutterstock_2429399865.jpg'),
      img('ppneuu94v6dj1t3xggvqsvwiwsr7_shutterstock_2438323379.jpg')
    ],
    dayImages: {
      5: [
        img('02izecquc5i7wg29ewku5jj6au8v_Hirosaki%20Castle-1.jpg'),
        img('f7k4pzjwox6s547mblvvgq7rq0wu_Hirosaki-castle_Aomori_with_Sakura_blossoms%20(1).jpg'),
        img('2tg0fu67dxqe3pqx2252bl84zh04_Nebuta%20Museum-1.jpg'),
        img('0ac8r264swunnlex5ezkea6bm4jv_1630px-Nebuta_Museum_Wa_Rasse_exterior.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Hirosaki castle and Hakodate`,
      'Breakfast and check out, then on to Hirosaki',
      'The castle keep inside its wide moat',
      'The lantern floats at the Nebuta museum in Aomori',
      'Across to Hakodate on Hokkaido'
    ],
    accommodation: {
      name: 'Premier Hotel Cabin President Hakodate, Hakodate',
      description: '1 night · Breakfast · Standard room · 3★ · Harbour hotel in Hakodate, on the southern tip of Hokkaido',
      images: [
        img('9s2wio4ez1wpo3jg4vj13ob9hk2a_four-points-by-sheraton.jpg'),
        img('m4ysxy5g6nwtp1vmk2vo61rnauzd_1%20(1).jpg'),
        img('kskc1j9vni01101eh3w6kpn978qk_3cc7875b56781012589df178262ac842.jpeg'),
        img('elg1jupcke53088xwwbd93j1s43x_caption%20(5).jpg'),
        img('8pkiyf6hejduw9fariho64prpkmh_remodeled-new-standard.jpg'),
        img('7dpdd446a0vrau66nvjc1q8ml9jt_466523261.jpg'),
        img('6x62h7kwbuk3bbjfnza3lr6ttgaj_487545954.jpg'),
        img('ngrrddryg6l0zj3oms8jsnf3sfu3_caption%20(6).jpg'),
        img('shrl4tdo35v5z4bp3sdk7w3xrh6z_c97c301e_z.jpg')
      ]
    },
    activities: [
      {
        name: 'Hirosaki castle',
        day: 5,
        optional: false,
        image: img('02izecquc5i7wg29ewku5jj6au8v_Hirosaki%20Castle-1.jpg'),
        description: 'A small keep inside a wide moat, ringed by two and a half thousand cherry trees that draw crowds every spring.'
      },
      {
        name: 'Nebuta museum',
        day: 5,
        optional: false,
        image: img('2tg0fu67dxqe3pqx2252bl84zh04_Nebuta%20Museum-1.jpg'),
        description: 'The hall in Aomori that keeps the giant painted lantern floats from the summer festival, lit and close enough to touch.'
      }
    ],
    program: {
      name: 'Hakodate',
      description: 'A night on the Hokkaido coast, reached through Hirosaki castle and the lantern floats of Aomori.',
      image: img('4y4islfuumivyr2j8zwnn3ba0fbw_shutterstock_2429399865.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Sapporo',
    subtitle: 'Sapporo via Onuma and Noboribetsu',
    dayLabel: 'Day 6 to 8',
    images: [
      img('bl6hzbwn09nocqbartnghh0ns788_shutterstock_2450448573.jpg'),
      img('u6n0y1mulym4sf5kbk9ouwqw2s4b_shutterstock_2414469733.jpg'),
      img('i86oqelkptgqhizjkzsit6l08qjk_shutterstock_2313811545.jpg')
    ],
    dayImages: {
      6: [
        img('soz0tjudsl7ogqlql0ucmzvzp702_Goryokaku%20Tower-5.jpg'),
        img('tgw4hxbqfoxijn9n3wfm9cbeddlt_download%20-%202024-07-26T113219.215.jpg'),
        img('m8snpn4pamdhxpmrtxwq7zplrfzi_6r6stzpjrneg8xw948jmy866f4xj_Onuma%20Quasi%20National%20Park-3.jpg'),
        img('1xnn4s0le9fknihdvoz2d70d2vk6_download%20-%202024-07-24T155804.612.jpeg')
      ],
      7: [
        img('wuqad3qnwcwpdpdhmtffn9pyhbwt_Hokkaido%20Jingu-2.JPG'),
        img('8pg99yu1p46qg5nnyewgv6tpzj8l_tivefgrj0k9mwoaykxqkmp0el8f6_Sapporo%20Clock%20Tower%20Hokkaido.png'),
        img('8xhvd0bfa3x0mcf4wjrwb7vyxh9x_Hokkaido_Jingu.jpg'),
        img('wk8960lttyjmaqmth37a6ix51oep_Park%203.jpg')
      ],
      8: [
        img('bl6hzbwn09nocqbartnghh0ns788_shutterstock_2450448573.jpg'),
        img('u6n0y1mulym4sf5kbk9ouwqw2s4b_shutterstock_2414469733.jpg'),
        img('i86oqelkptgqhizjkzsit6l08qjk_shutterstock_2313811545.jpg'),
        img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Onuma, Noboribetsu and Sapporo`,
      'Breakfast, then up Goryokaku tower for the star fort',
      'Free time in Onuma Quasi-National Park',
      'The steaming Oyunuma lake at Noboribetsu',
      'On to Sapporo and check in',
      `${DAY_MARK}Day 7 · Sapporo, the Buddha and Otaru`,
      'Breakfast, then a guided morning in Sapporo',
      'The clock tower, Odori park and the beer museum',
      'The Hill of the Buddha outside the city',
      'Free time in Otaru\'s canal quarter',
      `${DAY_MARK}Day 8 · Departure from Sapporo`,
      'Breakfast at the hotel and check out',
      'Transfer to New Chitose Airport for your flight home'
    ],
    accommodation: {
      name: 'Mercure Sapporo, Sapporo',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel in central Sapporo, near Susukino',
      images: [
        img('co798l3u8pl1soel2ibvefzarslc_exterior%20(1).jpg'),
        img('8k8uuysl4v4waw09t5ebvku06o0s_recreational-facility.jpg'),
        img('mjq00inz6cwhgeq0d3bebu4u7f8r_569665775.jpg'),
        img('re8wgura3kc50vgof4ha0112jmzb_caption%20(7).jpg'),
        img('h1t4awm7k7t7oo4g3vu3xsmdvryr_252017235.jpg'),
        img('df5mu1ymowz2la4humd5t9uolgni_252017229.jpg'),
        img('kuav7usivtqs35hjop7njkthzp1c_569665782.jpg'),
        img('5lfsduoaz0ejvzm50q3k8v3uza9d_525112395.jpg'),
        img('1tw0l6b158txw0qcx1uhyawi45zw_513510695.jpg'),
        img('hmorzkk5mpbc7eeroivosiwivbhd_bar-le-cepage.jpg')
      ]
    },
    activities: [
      {
        name: 'Goryokaku tower',
        day: 6,
        optional: false,
        image: img('soz0tjudsl7ogqlql0ucmzvzp702_Goryokaku%20Tower-5.jpg'),
        description: 'The tower above Hakodate\'s star shaped fort, best seen from the air with the ramparts laid out below.'
      },
      {
        name: 'Onuma Quasi-National Park',
        day: 6,
        optional: false,
        image: img('m8snpn4pamdhxpmrtxwq7zplrfzi_6r6stzpjrneg8xw948jmy866f4xj_Onuma%20Quasi%20National%20Park-3.jpg'),
        description: 'Free time among the lakes and islets below Mount Hokkaido-Komagatake, linked by small bridges and walking paths.'
      },
      {
        name: 'Oyunuma lake at Noboribetsu',
        day: 6,
        optional: false,
        image: img('bl6hzbwn09nocqbartnghh0ns788_shutterstock_2450448573.jpg'),
        description: 'A steaming sulphur lake in the hell valley at Noboribetsu, with a hot stream you can soak your feet in.'
      },
      {
        name: 'Sapporo sightseeing tour',
        day: 7,
        optional: false,
        image: img('wuqad3qnwcwpdpdhmtffn9pyhbwt_Hokkaido%20Jingu-2.JPG'),
        description: 'The clock tower, Odori park and the old government building, with a stop at the Sapporo beer museum.'
      },
      {
        name: 'Hill of the Buddha',
        day: 7,
        optional: false,
        image: img('or68bbrczcyvk3g6sxv13g9l7cyg_Hill%20of%20Buddha-1.jpg'),
        description: 'Tadao Ando\'s lavender ringed hill, where a great stone Buddha sits with only its head showing above the rim.'
      },
      {
        name: 'Otaru canal town',
        day: 7,
        optional: false,
        image: img('wuuihwzfivi1fxyxf3q75bz1telc_sumiyoshi%20shrine-2.jpg'),
        description: 'Free time in Otaru, where the canal, stone warehouses and glass workshops make the best afternoon in Hokkaido.'
      }
    ],
    program: {
      name: 'Sapporo',
      description: 'Two nights in the island capital, reached through Onuma park and the Noboribetsu hell valley, with a city day, the Hill of the Buddha and Otaru.',
      image: img('bl6hzbwn09nocqbartnghh0ns788_shutterstock_2450448573.jpg')
    }
  }
];

const detail = {
  slug: 'journey-north-through-tohoku-and-hokkaido',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Journey North through Tohoku and Hokkaido',
  alt: 'Matsushima Bay islands seen from the water, Japan',
  days: '8 days / 7 nights',
  stations: '5 stops',
  transport: 'Bullet trains, coaches and guided touring throughout',
  tag: 'Offbeat',
  tags: ['Culture', 'Nature'],
  price: 207084,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Nikko', 'Sendai', 'Matsushima', 'Morioka', 'Hirosaki', 'Hakodate', 'Sapporo'],
  stats: { days: 8, cities: 5, hotels: 5, activities: 12, transfers: 20 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['12 experiences', 'Activities'],
    ['20 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'North from Tokyo through Tohoku to Hokkaido, with twelve included visits and barely another foreign traveller in sight.',
    quoteMore: 'This is a moving trip with four single nights, so pack light. The reward is Matsushima and Otaru without a queue anywhere.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days north from Tokyo: a guided city day, Nikko on the way to Sendai, the bay cruise at Matsushima and the gold hall at Hiraizumi, Hirosaki castle and the Aomori lantern floats, then Hakodate and two nights in Sapporo with Otaru.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights across five towns with daily breakfast; bullet trains and coaches throughout; guided sightseeing in Tokyo, Nikko and Sapporo; Kanrantei tea house and Matsushima bay cruise; Hiraizumi sightseeing; Hirosaki castle and Nebuta museum tickets; Goryokaku tower; free time at Onuma park and Otaru; Oyunuma lake at Noboribetsu; the Hill of the Buddha.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in beside Shinagawa station\nFree time in the Shinjuku district\nEvening at your own pace', hotel: 'Shinagawa Prince Hotel', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in beside Shinagawa station', 'Free time in the Shinjuku district'] },
    { title: 'Day 2: Tokyo sightseeing (B)', text: 'Breakfast, then a guided day through Tokyo\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in the city', hotel: 'Shinagawa Prince Hotel', highlights: ['Breakfast, then a guided day through Tokyo', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Nikko and on to Sendai (B)', text: 'Breakfast and check out, then north towards Nikko\nThe Toshogu shrine in its cedar forest\nThe Shinkyo bridge and Kegon falls\nOn to Sendai and check in by the station', hotel: 'Hotel Metropolitan Sendai East', highlights: ['Breakfast and check out, then north towards Nikko', 'The Toshogu shrine in its cedar forest', 'The Shinkyo bridge and Kegon falls'] },
    { title: 'Day 4: Matsushima bay and Hiraizumi (B)', text: 'Breakfast, then out to Matsushima bay\nThe Kanrantei tea house above the water\nA cruise through the pine topped islands\nThe gold hall at Hiraizumi, then Morioka', hotel: 'Hotel Metropolitan Morioka New Wing', highlights: ['Breakfast, then out to Matsushima bay', 'The Kanrantei tea house above the water', 'A cruise through the pine topped islands'] },
    { title: 'Day 5: Hirosaki castle and Hakodate (B)', text: 'Breakfast and check out, then on to Hirosaki\nThe castle keep inside its wide moat\nThe lantern floats at the Nebuta museum in Aomori\nAcross to Hakodate on Hokkaido', hotel: 'Premier Hotel Cabin President Hakodate', highlights: ['Breakfast and check out, then on to Hirosaki', 'The castle keep inside its wide moat', 'The lantern floats at the Nebuta museum in Aomori'] },
    { title: 'Day 6: Onuma, Noboribetsu and Sapporo (B)', text: 'Breakfast, then up Goryokaku tower for the star fort\nFree time in Onuma Quasi-National Park\nThe steaming Oyunuma lake at Noboribetsu\nOn to Sapporo and check in', hotel: 'Mercure Sapporo', highlights: ['Breakfast, then up Goryokaku tower for the star fort', 'Free time in Onuma Quasi-National Park', 'The steaming Oyunuma lake at Noboribetsu'] },
    { title: 'Day 7: Sapporo, the Buddha and Otaru (B)', text: 'Breakfast, then a guided morning in Sapporo\nThe clock tower, Odori park and the beer museum\nThe Hill of the Buddha outside the city\nFree time in Otaru\'s canal quarter', hotel: 'Mercure Sapporo', highlights: ['Breakfast, then a guided morning in Sapporo', 'The clock tower, Odori park and the beer museum', 'The Hill of the Buddha outside the city'] },
    { title: 'Day 8: Departure from Sapporo (B)', text: 'Breakfast at the hotel and check out\nTransfer to New Chitose Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to New Chitose Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Japan', href: '/asien/japan' },
  { label: detail.title }
];

export const journeyNorthTohokuHokkaidoBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const journeyNorthTohokuHokkaidoProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Nikko', 'Sendai', 'Matsushima', 'Morioka', 'Hirosaki', 'Hakodate', 'Sapporo'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 12,
  transfers: 20,
  meals: 7,
  price: detail.price,
  images: cardImages
};
