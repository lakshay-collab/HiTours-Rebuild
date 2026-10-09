// Japan Delights: Ryokan and Mountain Trail. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg'),
  img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
  img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg'),
  img('tp732v0s7r25f0n1bu4nhvpuag28_shutterstock_2439172231.jpg'),
  img('l7m5jd35ihjt2u94a4hsp848f47w_shutterstock_2396131743.jpg'),
  img('a74yrec3cxa5xj70wfrgwnxkyusd_shutterstock_1666322071.jpg'),
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('raxb9kxswnyu9cfxwl7hriz6e6dq_shutterstock_2464578063.jpg'),
  img('m8rah7p8k54cihntnxmqoan6c24a_shutterstock_2447788247.jpg'),
  img('o4z49k55qewoiirjdae48wnlaz23_shutterstock_2442811791.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
  img('l7m5jd35ihjt2u94a4hsp848f47w_shutterstock_2396131743.jpg'),
  img('o4z49k55qewoiirjdae48wnlaz23_shutterstock_2442811791.jpg'),
  img('aeb82kpk0lbk2t2f2sfqztdvs85c_33nfr7nrl49aep4rxbbrn8bqrask_Nijubashi%20Bridge.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    dayLabel: 'Day 1 to 2',
    images: [
      img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg'),
      img('1yv1a968ghyiwiwbsbwvzfu388l0_shutterstock_2300479567.jpg'),
      img('9gxo0w9zfmmbmjg8895gp4h3leqm_shutterstock_1966867324.jpg'),
      img('udkn4h8at26lrvvwwmlaxguh16hf_shutterstock_1836078037.jpg')
    ],
    dayImages: {
      1: [
        img('7v0pb5achz6hdl8vmiejhfx5ocg9_1617352304_Shinjuku_Gyoen_National_Garden.jpg'),
        img('s0s1j9k7ol91rdwi77ystaof4uzo_48126669936_084ba4982e_o.jpg'),
        img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg'),
        img('1yv1a968ghyiwiwbsbwvzfu388l0_shutterstock_2300479567.jpg')
      ],
      2: [
        img('aeb82kpk0lbk2t2f2sfqztdvs85c_33nfr7nrl49aep4rxbbrn8bqrask_Nijubashi%20Bridge.jpg'),
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
        image: img('aeb82kpk0lbk2t2f2sfqztdvs85c_33nfr7nrl49aep4rxbbrn8bqrask_Nijubashi%20Bridge.jpg'),
        description: 'A guided day through the city, from the Meiji shrine and the Imperial Palace gardens to the old temple lanes of Asakusa.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Two nights beside Shinagawa station, with free time in Shinjuku and a full guided city day.',
      image: img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kyoto',
    dayLabel: 'Day 3',
    images: [
      img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
      img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
      img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
    ],
    dayImages: {
      3: [
        img('6mzr0i6h4hejvkxjkavuc11c7nol_blxtngeysogyt96s00x7e7p3mgwa_Downpic.cc-92896660%20(1).jpg'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('j8xcq76t3o64yxmui5m4kt22wejq_52980159201_640a74d15d_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Bullet train to Kyoto`,
      'Breakfast and check out, then the bullet train west',
      'Check in opposite Kyoto station',
      'A guided afternoon through the old capital',
      'The golden pavilion and the torii gate paths'
    ],
    accommodation: {
      name: 'Miyako Hotel Kyoto Hachijo, Kyoto',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel opposite Kyoto station, handy for the trains',
      images: [
        img('jtqkx0sns04zp2auwnkk8zwqw0l9_329e13f626b2fc9986356d95f851a15e54fe41f7.47.9.26.3.jpg'),
        img('5qq4yva5u1oe5zt85i07cx4evcoh_8677571.jpg'),
        img('pmn8lz9opr2a2ot6ki392agsyf62_8675121.jpg'),
        img('o2jdbr9s9fmq3k000bosoykgsa3n_68244904.jpg'),
        img('elxjcnkgr3tmh841juzjwzkvpzd2_8675155.jpg'),
        img('6o0km7sckl9nqjwabllflhv3d2sh_8675135.jpg'),
        img('1vrog6b3z6oxoiqk6lalgj88vbr5_8675152.jpg'),
        img('g9vw6jwwr76x1pkrjju7hh4m6t8z_180120408.jpg'),
        img('ckno1j0ha5mz9n37zfrb4nmg9hdx_180121146.jpg'),
        img('ooil4y5nm14rmn226qeleo62o8il_8675179.jpg'),
        img('6fp0vljf1x4rxgf35fxlfzyypjuh_180120798.jpg'),
        img('iso6n8w0recypga6s1eg2s6cuhov_68345205.jpg')
      ]
    },
    activities: [
      {
        name: 'Kyoto sightseeing tour',
        day: 3,
        optional: false,
        image: img('6mzr0i6h4hejvkxjkavuc11c7nol_blxtngeysogyt96s00x7e7p3mgwa_Downpic.cc-92896660%20(1).jpg'),
        description: 'A guided day through the old capital, taking in the golden pavilion, a Zen garden and the torii gate paths above Fushimi.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'A night in the old capital, reached by bullet train, with a guided day through the temples.',
      image: img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Nagano',
    subtitle: 'Nagano to Tsumago and Matsumoto',
    dayLabel: 'Day 4',
    images: [
      img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg'),
      img('raxb9kxswnyu9cfxwl7hriz6e6dq_shutterstock_2464578063.jpg')
    ],
    dayImages: {
      4: [
        img('li6hmfw1udkpnbwtk5gd4u0x1es3_Downpic.cc-133898494.jpg'),
        img('f94kpl6xljwd3wf0g0drishwpdvx_download%20-%202024-07-24T131016.067.jpeg'),
        img('1ltj1unwoqgfdqb3kteqka37irre_narai-juku-1536x1024.jpeg.jpg'),
        img('7ct6jvds8ukuxvwqqwomk19u2rxs_dl.beatsnoop.com-4GDvNPCSkq.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Tsumago and Matsumoto`,
      'Breakfast and check out, then north into the mountains',
      'Free time in the old post town of Tsumago',
      'Matsumoto castle, the black crow keep on its moat',
      'Check in at your Nagano hotel'
    ],
    accommodation: {
      name: 'Hotel Metropolitan Nagano, Nagano',
      description: '1 night · Breakfast · Standard room · 3★ · Comfortable hotel attached to Nagano station',
      images: [
        img('dk9pql13d8rwr2fj4ysn0c8x1skf_Hotel_Metropolitan_Nagano,_2011.jpg'),
        img('gt53fbsq9nv5rz22ky7e2yxy5nvf_251212054.jpg'),
        img('60vrpq6ukbrjyh43twc66aiefro7_43542999.jpg'),
        img('rrlqtx4vhqgynrsw5eup4xkeiesm_251212773.jpg'),
        img('685lko92nyprhq04akcedtkooc04_70037352.jpg'),
        img('l923s0ntgay9oxestgltndi22v6e_a4cc200dcccb65e2e3196dcf995461d2.webp'),
        img('u39ca68a68pnt0nsrvtmkz3e1aqa_251212272.jpg'),
        img('wbda7vx10tbtlto842ikm2zkpzc7_70037903.jpg'),
        img('9lwu8ktd70871dag2wbt6tpmp3g3_251213757.jpg'),
        img('qf8e0672q6ci28epy6kcwyet176n_e215a10dc6bd7e9128070af23a922090.webp'),
        img('k24ixztak3oa224x6zm2o2ddshdv_70037326.jpg'),
        img('3x8leo57o493xlmx4rp2zpxnbz8x_japanese-restaurant-shinano-yamas.jpg')
      ]
    },
    activities: [
      {
        name: 'Tsumago post town',
        day: 4,
        optional: false,
        image: img('li6hmfw1udkpnbwtk5gd4u0x1es3_Downpic.cc-133898494.jpg'),
        description: 'A preserved post town on the old Nakasendo road, where the wooden inns and shopfronts look much as travellers found them.'
      },
      {
        name: 'Matsumoto castle',
        day: 4,
        optional: false,
        image: img('7ct6jvds8ukuxvwqqwomk19u2rxs_dl.beatsnoop.com-4GDvNPCSkq.jpg'),
        description: 'The black keep they call the crow castle, standing on its moat with the Alps behind it, an original from the sixteenth century.'
      }
    ],
    program: {
      name: 'Nagano',
      description: 'A night in Nagano, reached through the old post town of Tsumago and the black keep of Matsumoto castle.',
      image: img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Ikaho',
    subtitle: 'Ikaho to Zenkoji, the monkey park and Kusatsu',
    dayLabel: 'Day 5 to 6',
    images: [
      img('m8rah7p8k54cihntnxmqoan6c24a_shutterstock_2447788247.jpg'),
      img('tp732v0s7r25f0n1bu4nhvpuag28_shutterstock_2439172231.jpg')
    ],
    dayImages: {
      5: [
        img('utluhdh1tkt7k31tpb3biidlf4y7_9ra9lq2yamann8jr209rlzr8q3hu_monkey%20park%201.jpg'),
        img('glvvy2079nzaqhmmd7wfo2enbc02_8668551948_a995d63ec2_b.jpg'),
        img('08hnvght5d7pksbjbn419xlk3ux8_jigokudani_snow_monkey_park_nagano_japan.png'),
        img('f4lbmwmmotr5haw070g0h68t5i05_rb2m7p9flu2cc8ec1g9slpl5ww13_dl.beatsnoop.com-IRkVLZwx2a.jpg')
      ],
      6: [
        img('n4vmzko3hvzc2w7dv4arqyc7qoh0_5tdf3n1dwo3s87ddvknvu43co7vg_dogcl89tnlyfn1x7iigjf4g8vmzk_Kanmangafuchi%20Abyss-1.jpg'),
        img('um1np28fhp4do9b4tj4eev1ffacs_40906793823_f26fe230df_o.jpg'),
        img('j3hebc5wyihl4cws9a5ln7g7r4dw_50914216027_268a408e00_o.jpg'),
        img('m8rah7p8k54cihntnxmqoan6c24a_shutterstock_2447788247.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Snow monkeys and Ikaho`,
      'Breakfast, then Zenkoji temple in Nagano',
      'The snow monkey park at Jigokudani',
      'Free time in the hot spring town of Kusatsu',
      'Ryokan night at Ikaho, tatami rooms and shared baths',
      `${DAY_MARK}Day 6 · Nikko and on to Odawara`,
      'Breakfast at the ryokan and check out',
      'A guided morning at Nikko',
      'The Toshogu shrine and the Shinkyo bridge',
      'On to Odawara and your hot spring hotel'
    ],
    accommodation: {
      name: 'Kishigon Ryokan, Shibukawa',
      description: '1 night · Breakfast · Ryokan room · 3★ · Traditional inn at Ikaho hot spring, with tatami rooms and shared baths',
      images: [
        img('j4p9hfs94gqk0yvffdfi5hz1lq6i_90e9eab2.jpg'),
        img('1uuzg1zc0jrgrhpf51dyeej6xqd5_429003922.jpg'),
        img('rf0j80gil8whaan8s7stehja3hze_b052085e.jpg'),
        img('y0mdl6beypf6deyk0d7ynaait4m3_429004040.jpg'),
        img('8eqoa4u81em6vx0v2wlzg50ubnpc_345034129.jpg'),
        img('xb0bi7644ncbvhzyr1dnytmpyybi_429037778.jpg'),
        img('2ovfsf1aldjkc4dpmqjp1458drhw_13589594.jpg'),
        img('m2zl7thqasbsehfgj6ye9by17acj_9a44dccd.jpg'),
        img('1om7ebfqtjgnm74xfxcq10qivz0f_345035827.jpg'),
        img('py0w17kuptap02fl38ne4ou299yr_4c0b63bb.jpg'),
        img('yl8inq9dfertt38b0r2hu8krtkkv_429001867.jpg'),
        img('f2yqirnx520uhs5usw5slkxzg3aj_0c8a1c96.jpg'),
        img('9eoky8oo5gnqrvsg18b1s832z69j_10054973.jpg'),
        img('ab8wtd3u26q2fuzipdh28fbl44mn_429003120.jpg'),
        img('6gu5pk0u93k1n1qt3ajvc4po59tr_431098741.jpg'),
        img('4crhp0wf6c5qw2n4sbg5zyhr9pst_img_room1-1.jpg')
      ]
    },
    activities: [
      {
        name: 'Zenkoji temple and the monkey park',
        day: 5,
        optional: false,
        image: img('utluhdh1tkt7k31tpb3biidlf4y7_9ra9lq2yamann8jr209rlzr8q3hu_monkey%20park%201.jpg'),
        description: 'Nagano\'s great temple, then the hot spring at Jigokudani where wild macaques sit chest deep in the steaming water.'
      },
      {
        name: 'Kusatsu hot spring town',
        day: 5,
        optional: false,
        image: img('f4lbmwmmotr5haw070g0h68t5i05_rb2m7p9flu2cc8ec1g9slpl5ww13_dl.beatsnoop.com-IRkVLZwx2a.jpg'),
        description: 'Free time in Kusatsu, where the hot water runs down wooden channels through the middle of the town square.'
      },
      {
        name: 'Nikko sightseeing tour',
        day: 6,
        optional: false,
        image: img('n4vmzko3hvzc2w7dv4arqyc7qoh0_5tdf3n1dwo3s87ddvknvu43co7vg_dogcl89tnlyfn1x7iigjf4g8vmzk_Kanmangafuchi%20Abyss-1.jpg'),
        description: 'The lacquered Toshogu shrine in its cedar forest, the Shinkyo bridge and the Kegon falls on the way back towards Tokyo.'
      }
    ],
    program: {
      name: 'Ikaho',
      description: 'A ryokan night at a hot spring, with Zenkoji temple, the snow monkeys and Kusatsu on the way, and Nikko the next day.',
      image: img('m8rah7p8k54cihntnxmqoan6c24a_shutterstock_2447788247.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Odawara',
    subtitle: 'Odawara to Kamakura and Mount Fuji',
    dayLabel: 'Day 7 to 8',
    images: [
      img('l7m5jd35ihjt2u94a4hsp848f47w_shutterstock_2396131743.jpg'),
      img('o4z49k55qewoiirjdae48wnlaz23_shutterstock_2442811791.jpg')
    ],
    dayImages: {
      7: [
        img('hu8do6cgzc3952v53esp1fcpthkn_xziqywg5m1fw8ztubxxwwmelr54i_8os9d25bxr2v2jvoaei9d50ktum7_Downpic.cc-image355420430.jpg'),
        img('akp55qwd1rtzxhgi6ts9ths1tgmo_Hokoku-jinja_(Osaka,_Osaka)1.jpg'),
        img('wi6dnvp38jq1mnqe53ahui9lu6s5_52619857252_d530504728_o.jpg'),
        img('fes7iyvuf2kg66357jjrppraxjy1_zsjotxhbltzz9cozxk4xj7zs452a_shopping.jpg')
      ],
      8: [
        img('8hyme12wlnnrqwnm7tlmfywlij0q_Downpic.cc-image556881350.jpg'),
        img('9hdwl7e2hucnek1jhe8l9hwk9s9m_OWAKUDANI%20VALLEY.png'),
        img('v3ewfzm61dk1jtdxuvc4fsv3u8l9_Downpic.cc-image603933117.jpg'),
        img('46lgk4zzclyeky3tw0bcaa1885hf_8220256475_51efd6b7c9_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Kamakura and Enoshima`,
      'Breakfast, then across to Kamakura',
      'The bamboo garden at Hokoku-ji and Sugimoto-dera',
      'The great bronze Buddha at Kotoku-in',
      'Free time on Enoshima island',
      `${DAY_MARK}Day 8 · Mount Fuji and departure`,
      'Breakfast and check out, then up into Hakone',
      'The sulphur vents at Owakudani',
      'The spring fed ponds of Oshino Hakkai',
      'A boat ride on Lake Kawaguchi and the Fuji fifth station, then Tokyo'
    ],
    accommodation: {
      name: 'Tenseien Annex, Odawara',
      description: '2 nights · Breakfast · Standard room · 3★ · Hot spring hotel near Odawara, at the foot of the Hakone hills',
      images: [
        img('pghf1csnppt931hgivi2d5rl4j9f_download%20-%202024-07-19T115018.562.png'),
        img('1i8lfnbb528tju8hdft4db04g68g_download%20-%202024-07-19T113543.172.png'),
        img('ujzrp6b4mg51818s7rx7srwpgeae_download%20-%202024-07-19T113555.876.png'),
        img('rmk3enu5lj82ovmeiesu7cr345zm_download%20-%202024-07-19T113549.781.png'),
        img('kyh2n8r21hjl0gn06w7yhfuldh0t_download%20-%202024-07-19T113630.773.png'),
        img('qu3yg9nawjgjcefgw78lzy7tsavo_download%20-%202024-07-19T113537.818.png'),
        img('nbxpzyrtp3guzo13cxfls5qtbu8x_download%20-%202024-07-19T113527.491.png'),
        img('jfwg8gl4r13lo029y8hgo5y8j4te_download%20-%202024-07-19T115000.937.png'),
        img('lt2ym4v9uuz0z4c4vfe9zdwn7k6n_download%20-%202024-07-19T113533.258.png'),
        img('lx41iowm01zdomjtgily75sr0031_download%20-%202024-07-19T113614.977.png')
      ]
    },
    activities: [
      {
        name: 'Hokoku-ji and Sugimoto-dera',
        day: 7,
        optional: false,
        image: img('hu8do6cgzc3952v53esp1fcpthkn_xziqywg5m1fw8ztubxxwwmelr54i_8os9d25bxr2v2jvoaei9d50ktum7_Downpic.cc-image355420430.jpg'),
        description: 'The bamboo garden temple of Hokoku-ji and the mossy stone steps of Sugimoto-dera, the oldest temple in Kamakura.'
      },
      {
        name: 'The great Buddha at Kotoku-in',
        day: 7,
        optional: false,
        image: img('nr3sf45rxe30gqh9oxvu0mjgzjuv_6ps1dmibmrln1v27xqj430pk8hls_dl.beatsnoop.com-DFpmXKe38V.jpg'),
        description: 'The thirteen metre bronze Buddha that has sat in the open air at Kamakura since the thirteenth century.'
      },
      {
        name: 'Enoshima island',
        day: 7,
        optional: false,
        image: img('2hfbjs3a739t8fvo4d2wor3tqkc6_r2q4jm0shir50jtwcm63bh51y0gd_dl.beatsnoop.com-6qnG9KPrmz.jpg'),
        description: 'Free time on the shrine island at the mouth of the bay, with its lanes of seafood stalls and a view back to Mount Fuji.'
      },
      {
        name: 'Owakudani and Oshino Hakkai',
        day: 8,
        optional: false,
        image: img('8hyme12wlnnrqwnm7tlmfywlij0q_Downpic.cc-image556881350.jpg'),
        description: 'The sulphur vents at Owakudani, then the spring fed ponds of Oshino Hakkai below Mount Fuji, clear enough to count the fish.'
      },
      {
        name: 'Lake Kawaguchi boat ride and the fifth station',
        day: 8,
        optional: false,
        image: img('v3ewfzm61dk1jtdxuvc4fsv3u8l9_Downpic.cc-image603933117.jpg'),
        description: 'A cruise on Lake Kawaguchi and then the mountain road up to the Mount Fuji fifth station before the drive to Tokyo.'
      }
    ],
    program: {
      name: 'Odawara',
      description: 'A hot spring night near Hakone, with the temples and great Buddha of Kamakura, then Owakudani and Mount Fuji on the final day.',
      image: img('l7m5jd35ihjt2u94a4hsp848f47w_shutterstock_2396131743.jpg')
    }
  }
];

const detail = {
  slug: 'japan-delights-ryokan-and-mountain-trail',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan Delights: Ryokan and Mountain Trail',
  alt: 'Snow monkeys bathing in a hot spring at Jigokudani, Japan',
  days: '8 days / 7 nights',
  stations: '5 stops',
  transport: 'Coaches, trains and guided touring throughout',
  tag: 'Group tour',
  tags: ['Culture', 'Nature'],
  price: 208177,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Kyoto', 'Nagano', 'Ikaho', 'Nikko', 'Kamakura', 'Mount Fuji'],
  stats: { days: 8, cities: 5, hotels: 5, activities: 12, transfers: 24 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['12 experiences', 'Activities'],
    ['24 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Twelve included experiences in eight days, and a different bed almost every night. For travellers who want to see everything, this is the one.',
    quoteMore: 'Pack one small bag for the single night stops. The coach takes the big cases ahead, and you will be glad of it at the ryokan.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days on a touring group trip: Tokyo and a guided Kyoto day, the post town of Tsumago and Matsumoto castle, the snow monkeys with a ryokan night at Ikaho, Nikko, the great Buddha at Kamakura and Mount Fuji on the final day.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights across five towns with daily breakfast, including a ryokan at Ikaho and a hot spring hotel near Hakone; coaches and trains throughout; guided sightseeing in Tokyo, Kyoto and Nikko; Tsumago and Matsumoto castle; Zenkoji temple and the snow monkey park; free time at Kusatsu and Enoshima; Hokoku-ji, Sugimoto-dera and the great Buddha at Kamakura; Owakudani walking tour; Lake Kawaguchi boat ride and Mount Fuji fifth station.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in beside Shinagawa station\nFree time in the Shinjuku district\nEvening at your own pace', hotel: 'Shinagawa Prince Hotel', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in beside Shinagawa station', 'Free time in the Shinjuku district'] },
    { title: 'Day 2: Tokyo sightseeing (B)', text: 'Breakfast, then a guided day through Tokyo\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in the city', hotel: 'Shinagawa Prince Hotel', highlights: ['Breakfast, then a guided day through Tokyo', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Bullet train to Kyoto (B)', text: 'Breakfast and check out, then the bullet train west\nCheck in opposite Kyoto station\nA guided afternoon through the old capital\nThe golden pavilion and the torii gate paths', hotel: 'Miyako Hotel Kyoto Hachijo', highlights: ['Breakfast and check out, then the bullet train west', 'Check in opposite Kyoto station', 'A guided afternoon through the old capital'] },
    { title: 'Day 4: Tsumago and Matsumoto (B)', text: 'Breakfast and check out, then north into the mountains\nFree time in the old post town of Tsumago\nMatsumoto castle, the black crow keep on its moat\nCheck in at your Nagano hotel', hotel: 'Hotel Metropolitan Nagano', highlights: ['Breakfast and check out, then north into the mountains', 'Free time in the old post town of Tsumago', 'Matsumoto castle, the black crow keep on its moat'] },
    { title: 'Day 5: Snow monkeys and Ikaho (B)', text: 'Breakfast, then Zenkoji temple in Nagano\nThe snow monkey park at Jigokudani\nFree time in the hot spring town of Kusatsu\nRyokan night at Ikaho, tatami rooms and shared baths', hotel: 'Kishigon Ryokan', highlights: ['Breakfast, then Zenkoji temple in Nagano', 'The snow monkey park at Jigokudani', 'Free time in the hot spring town of Kusatsu'] },
    { title: 'Day 6: Nikko and on to Odawara (B)', text: 'Breakfast at the ryokan and check out\nA guided morning at Nikko\nThe Toshogu shrine and the Shinkyo bridge\nOn to Odawara and your hot spring hotel', hotel: 'Tenseien Annex', highlights: ['Breakfast at the ryokan and check out', 'A guided morning at Nikko', 'The Toshogu shrine and the Shinkyo bridge'] },
    { title: 'Day 7: Kamakura and Enoshima (B)', text: 'Breakfast, then across to Kamakura\nThe bamboo garden at Hokoku-ji and Sugimoto-dera\nThe great bronze Buddha at Kotoku-in\nFree time on Enoshima island', hotel: 'Tenseien Annex', highlights: ['Breakfast, then across to Kamakura', 'The bamboo garden at Hokoku-ji and Sugimoto-dera', 'The great bronze Buddha at Kotoku-in'] },
    { title: 'Day 8: Mount Fuji and departure (B)', text: 'Breakfast and check out, then up into Hakone\nThe sulphur vents at Owakudani\nThe spring fed ponds of Oshino Hakkai\nA boat ride on Lake Kawaguchi and the Fuji fifth station, then Tokyo', hotel: 'Departure', highlights: ['Breakfast and check out, then up into Hakone', 'The sulphur vents at Owakudani', 'The spring fed ponds of Oshino Hakkai'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Japan', href: '/asien/japan' },
  { label: detail.title }
];

export const japanDelightsRyokanTrailBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanDelightsRyokanTrailProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Kyoto', 'Nagano', 'Ikaho', 'Nikko', 'Kamakura', 'Mount Fuji'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 12,
  transfers: 24,
  meals: 7,
  price: detail.price,
  images: cardImages
};
