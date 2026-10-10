// Japan in a Nutshell Grand Circuit. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg'),
  img('po65tczkitxpxj3efvb2ofq18yw8_shutterstock_2395371427.jpg'),
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('raxb9kxswnyu9cfxwl7hriz6e6dq_shutterstock_2464578063.jpg'),
  img('m8rah7p8k54cihntnxmqoan6c24a_shutterstock_2447788247.jpg'),
  img('xdyj7i31bk427zhdgk2thbw2rv2d_shutterstock_572057020.jpg'),
  img('pra6w5yyjg0qkzotgxbbvppsbe55_shutterstock_2474030861.jpg'),
  img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
  img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg'),
  img('tp732v0s7r25f0n1bu4nhvpuag28_shutterstock_2439172231.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('po65tczkitxpxj3efvb2ofq18yw8_shutterstock_2395371427.jpg'),
  img('m8rah7p8k54cihntnxmqoan6c24a_shutterstock_2447788247.jpg'),
  img('7v0pb5achz6hdl8vmiejhfx5ocg9_1617352304_Shinjuku_Gyoen_National_Garden.jpg'),
  img('33nfr7nrl49aep4rxbbrn8bqrask_Nijubashi%20Bridge.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    dayLabel: 'Day 1 to 2',
    images: [
      img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg'),
      img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg'),
      img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg'),
      img('61izsuekzybkh86q2bvapmbmyrlt_shutterstock_355725083.jpg')
    ],
    dayImages: {
      1: [
        img('7v0pb5achz6hdl8vmiejhfx5ocg9_1617352304_Shinjuku_Gyoen_National_Garden.jpg'),
        img('s0s1j9k7ol91rdwi77ystaof4uzo_48126669936_084ba4982e_o.jpg'),
        img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg'),
        img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg')
      ],
      2: [
        img('33nfr7nrl49aep4rxbbrn8bqrask_Nijubashi%20Bridge.jpg'),
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
        image: img('33nfr7nrl49aep4rxbbrn8bqrask_Nijubashi%20Bridge.jpg'),
        description: 'A guided day through the city, from the Meiji shrine and the Imperial Palace gardens to the old temple lanes of Asakusa.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Two nights beside Shinagawa station, with free time in Shinjuku and a full guided city day.',
      image: img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kawaguchiko',
    subtitle: 'Kawaguchiko to Mount Fuji',
    dayLabel: 'Day 3',
    images: [
      img('pra6w5yyjg0qkzotgxbbvppsbe55_shutterstock_2474030861.jpg'),
      img('po65tczkitxpxj3efvb2ofq18yw8_shutterstock_2395371427.jpg')
    ],
    dayImages: {
      3: [
        img('x4lh7wwepp4j60zqxt25t3zwocep_Day%203%201st%20activity.jpg'),
        img('5fkvulgtcxm4n9tf8pkdfhiwsxy0_33774521860_72822b9eb5_b.jpg'),
        img('ttflfg1cdsovpctxsck8k1ac35xr_49075001941_d6e64c8a9c_o.jpg'),
        img('ooata9umi5z4jqpqpj09le21a2pn_xow39iuu8mwwvyn417u7z82s0qx7_fsee7stcfhihyhq4g3ivgm2zzjdt_dl.beatsnoop.com-BsSurvi7Am.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Mount Fuji and Kawaguchiko`,
      'Breakfast and check out, then west towards Mount Fuji',
      'Sightseeing stops on the journey out',
      'A boat ride on Lake Kawaguchi',
      'Up the mountain road to the fifth station'
    ],
    accommodation: {
      name: 'Fuji Kawaguchiko Resort, Kawaguchiko',
      description: '1 night · Breakfast · Standard room · 4★ · Lakeside resort with Mount Fuji across the water on a clear day',
      images: [
        img('rwd10mqmk1yozpf6kb2km1pcjbm6_02.jpg'),
        img('02bn5nia9yc0qaumpm5umc4tmnkk_290483986.jpg'),
        img('2q6wm9n2nmdvqebwqlbgm43mk6ay_215397307.jpg'),
        img('0ofot1wtpbvum6gxn9xen292byjw_288970655.jpg'),
        img('e616utvbogboa3aigim84w2uj8wc_243889991.jpg'),
        img('5ncsdwc9r8077kux5i8p96iegooa_214709095.jpg'),
        img('u4wllmt88lv6qtflwqnjnrh34w9b_caption%20(13).jpg'),
        img('pgaueyh3yxqjk2120m55qur7ap55_caption%20(11).jpg'),
        img('b5sanodwuu3q9s7x06akmlh7uq79_289330211.jpg'),
        img('vb2jahes5de0phzk36mrjjmslh0q_caption%20(12).jpg')
      ]
    },
    activities: [
      {
        name: 'Lake Kawaguchi boat ride',
        day: 3,
        optional: false,
        image: img('ooata9umi5z4jqpqpj09le21a2pn_xow39iuu8mwwvyn417u7z82s0qx7_fsee7stcfhihyhq4g3ivgm2zzjdt_dl.beatsnoop.com-BsSurvi7Am.jpg'),
        description: 'A cruise out onto the lake, with the mountain reflected in the water when the cloud lifts.'
      },
      {
        name: 'Mount Fuji fifth station',
        day: 3,
        optional: false,
        image: img('pra6w5yyjg0qkzotgxbbvppsbe55_shutterstock_2474030861.jpg'),
        description: 'Up the mountain road to the fifth station at 2,300 metres, where the treeline ends and the climbing trail begins.'
      }
    ],
    program: {
      name: 'Kawaguchiko',
      description: 'A lakeside night below Mount Fuji, with a boat ride on the lake and the drive up to the fifth station.',
      image: img('pra6w5yyjg0qkzotgxbbvppsbe55_shutterstock_2474030861.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Kyoto',
    subtitle: 'Kyoto to Shiraito falls and Nagoya',
    dayLabel: 'Day 4 to 5',
    images: [
      img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
      img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
      img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg')
    ],
    dayImages: {
      4: [
        img('huz8k41yeyd6twmhfpvlcmfesnpl_shutterstock_1897269112.jpg'),
        img('t7ygblf5z84w9vq1r49e3myuejz3_DSC3038.jpg'),
        img('inpo1ykg42d3yvlxl1xh7xdomin3_yamanashi-iyashino-sato-nenba-healing-village-107221.jpg'),
        img('f76w0rqvghudxj2yko1lemre0ktk_DSC2792.jpg')
      ],
      5: [
        img('8dk1b8qlltthhe85sng9bn2y2bka_Downpic.cc-90371408.jpg'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('j8xcq76t3o64yxmui5m4kt22wejq_52980159201_640a74d15d_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Thatched village and on to Kyoto`,
      'Breakfast, then the thatched village of Iyashi no Sato',
      'The Watanabe house museum and the old water mill',
      'Shiraito falls and the Toyota museum on the way',
      'On to Kyoto and check in by the station',
      `${DAY_MARK}Day 5 · Kyoto sightseeing`,
      'Breakfast, then a guided day through the old capital',
      'The golden pavilion and a Zen garden',
      'The torii gate paths above Fushimi',
      'Free time in the Gion lanes in the evening'
    ],
    accommodation: {
      name: 'Miyako Hotel Kyoto Hachijo, Kyoto',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel opposite Kyoto station, handy for the trains',
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
        name: 'Iyashi no Sato Nenba village',
        day: 4,
        optional: false,
        image: img('huz8k41yeyd6twmhfpvlcmfesnpl_shutterstock_1897269112.jpg'),
        description: 'A rebuilt village of thatched farmhouses below Mount Fuji, now craft workshops where you can try dyeing or pottery.'
      },
      {
        name: 'Watanabe house museum and the water mill',
        day: 4,
        optional: false,
        image: img('t7ygblf5z84w9vq1r49e3myuejz3_DSC3038.jpg'),
        description: 'An old silk merchant\'s house kept as it was, and the traditional wooden water mill still turning beside the stream.'
      },
      {
        name: 'Kyoto sightseeing tour',
        day: 5,
        optional: false,
        image: img('8dk1b8qlltthhe85sng9bn2y2bka_Downpic.cc-90371408.jpg'),
        description: 'A guided day through the old capital, taking in the golden pavilion, a Zen garden and the torii gate paths above Fushimi.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'Two nights by Kyoto station, reached through the thatched village and water mill of the Fuji foothills, with a full guided day.',
      image: img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Nagano',
    subtitle: 'Nagano to Tsumago and Matsumoto',
    dayLabel: 'Day 6',
    images: [
      img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg'),
      img('raxb9kxswnyu9cfxwl7hriz6e6dq_shutterstock_2464578063.jpg')
    ],
    dayImages: {
      6: [
        img('y76rx6agaherj28q060kl2jtn26z_Downpic.cc-image559903861.jpg'),
        img('oa0tfa6vkqvrfwjj81nmi0av7s6c_Crow%20Castle-2.jpg'),
        img('coejtrreokuqm3ua5uboz838cclw_matsumoto_castle_1-1024x704.jpg'),
        img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Tsumago and Matsumoto`,
      'Breakfast and check out, then north into the mountains',
      'Free time in the old post town of Tsumago',
      'The crow castle at Matsumoto on its moat',
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
        day: 6,
        optional: false,
        image: img('y76rx6agaherj28q060kl2jtn26z_Downpic.cc-image559903861.jpg'),
        description: 'A preserved post town on the old Nakasendo road, where the wooden inns and shopfronts look much as travellers found them.'
      },
      {
        name: 'Matsumoto crow castle',
        day: 6,
        optional: false,
        image: img('oa0tfa6vkqvrfwjj81nmi0av7s6c_Crow%20Castle-2.jpg'),
        description: 'The black keep they call the crow castle, standing on its moat with the Alps behind it, an original from the sixteenth century.'
      }
    ],
    program: {
      name: 'Nagano',
      description: 'A night in Nagano, reached through Tsumago on the old post road and the black keep at Matsumoto.',
      image: img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Ikaho',
    subtitle: 'Ikaho to the monkey park, Kusatsu and Nikko',
    dayLabel: 'Day 7 to 8',
    images: [
      img('m8rah7p8k54cihntnxmqoan6c24a_shutterstock_2447788247.jpg'),
      img('tp732v0s7r25f0n1bu4nhvpuag28_shutterstock_2439172231.jpg')
    ],
    dayImages: {
      7: [
        img('aq6j2r32h8e90ah53ykk1l3kc2lr_zenko%20ji.jpg'),
        img('glvvy2079nzaqhmmd7wfo2enbc02_8668551948_a995d63ec2_b.jpg'),
        img('ltfitu7mqgitbecttp5ynzoz5yet_monkey%20Park%202.jpg'),
        img('0sf4g6cocxl1ywh91z7mkbhebf17_dl.beatsnoop.com-uUsOkhm8YD.jpg')
      ],
      8: [
        img('qfpe9ws8dtbky9o2ekjcmpwwh605_dl.beatsnoop.com-6he7p2WNLP.jpg'),
        img('m8rah7p8k54cihntnxmqoan6c24a_shutterstock_2447788247.jpg'),
        img('tp732v0s7r25f0n1bu4nhvpuag28_shutterstock_2439172231.jpg'),
        img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Snow monkeys and Ikaho`,
      'Breakfast, then Zenkoji temple in Nagano',
      'The snow monkey park at Jigokudani',
      'Free time in the hot spring town of Kusatsu',
      'Ryokan night at Ikaho, tatami rooms and shared baths',
      `${DAY_MARK}Day 8 · Nikko and departure`,
      'Breakfast at the ryokan and check out',
      'A guided morning at Nikko',
      'The Toshogu shrine and the Shinkyo bridge',
      'Transfer to Tokyo or the airport for your flight home'
    ],
    accommodation: {
      name: 'Moriaki Ryokan, Shibukawa',
      description: '1 night · Breakfast · Ryokan room · 3★ · Traditional inn at Ikaho hot spring, with tatami rooms and shared baths',
      images: [
        img('eyhht15dxgtk008f8gfheuo7tfzt_caption.jpg'),
        img('u25ex03kworajp03poh3zjixnbxo_mwrh_bw1200h600.jpg'),
        img('6l9koh53mgnc7f1o9nt39sg0f0i1_i13s_bw1200h600.jpg'),
        img('zwgzh674bhctryk09au6c4plhbv1_0581d12000cuh8kpi1D8A_R_600_400_R5.webp'),
        img('vvnr92wzslc98eobyju884ljapo0_caption%20(2).jpg'),
        img('cfmnewc9plj0d6571gt1t3hsxaya_g2m0_bw1200h600.jpg'),
        img('wa55sz5rxh7yfrsdlrojsgq29suw_15-00-9-00.jpg'),
        img('58pssttfbzmikiqsian6aslr0xxh_vy88_bw1200h600.jpg'),
        img('r2zw2kn2g16ikdiebpd4b6ejclpw_yd9d_bw1200h600.jpg'),
        img('7hj095nejqvf7hgn1j4jeu39kfoa_0221s12000albhuo5F1CA_R_600_400_R5.webp'),
        img('8zzp55mdiaeniq2wwp413xb6ojzt_38xg_bw1200h600.jpg'),
        img('djj2ed4gmhsfcaownt4z6pstn7s8_0221w12000albhqyx1027_R_600_400_R5.webp'),
        img('7tgwk6y6ea86t5brlvvkzdz18211_nmnd_bw1200h600.jpg')
      ]
    },
    activities: [
      {
        name: 'Zenkoji temple',
        day: 7,
        optional: false,
        image: img('aq6j2r32h8e90ah53ykk1l3kc2lr_zenko%20ji.jpg'),
        description: 'Nagano\'s great temple, home to what is said to be the first Buddhist statue brought to Japan, kept hidden behind the altar.'
      },
      {
        name: 'Snow monkey park',
        day: 7,
        optional: false,
        image: img('ltfitu7mqgitbecttp5ynzoz5yet_monkey%20Park%202.jpg'),
        description: 'The hot spring at Jigokudani where wild macaques sit chest deep in the steaming water, often with snow on their heads.'
      },
      {
        name: 'Kusatsu hot spring town',
        day: 7,
        optional: false,
        image: img('0sf4g6cocxl1ywh91z7mkbhebf17_dl.beatsnoop.com-uUsOkhm8YD.jpg'),
        description: 'Free time in Kusatsu, where the hot water runs down wooden channels through the middle of the town square.'
      },
      {
        name: 'Nikko sightseeing tour',
        day: 8,
        optional: false,
        image: img('qfpe9ws8dtbky9o2ekjcmpwwh605_dl.beatsnoop.com-6he7p2WNLP.jpg'),
        description: 'The lacquered Toshogu shrine in its cedar forest, the Shinkyo bridge and the Kegon falls before the drive back to Tokyo.'
      }
    ],
    program: {
      name: 'Ikaho',
      description: 'A ryokan night at a hot spring, with Zenkoji, the snow monkeys and Kusatsu on the way, and Nikko on the final day.',
      image: img('m8rah7p8k54cihntnxmqoan6c24a_shutterstock_2447788247.jpg')
    }
  }
];

const detail = {
  slug: 'japan-in-a-nutshell-grand-circuit',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan in a Nutshell Grand Circuit',
  alt: 'Thatched farmhouses below Mount Fuji at Iyashi no Sato, Japan',
  days: '8 days / 7 nights',
  stations: '5 stops',
  transport: 'Coaches, trains and guided touring throughout',
  tag: 'Group tour',
  tags: ['Culture', 'Nature'],
  price: 226603,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Kawaguchiko', 'Mount Fuji', 'Kyoto', 'Nagano', 'Ikaho', 'Nikko'],
  stats: { days: 8, cities: 5, hotels: 5, activities: 11, transfers: 22 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['11 experiences', 'Activities'],
    ['22 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Eight days, five towns and eleven included visits. It is the fullest circuit we sell at this price.',
    quoteMore: 'Two nights in Kyoto is the breather in the middle. Use the free evening in Gion rather than planning anything.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days on a full circuit: Tokyo, a lakeside night below Mount Fuji with a boat ride and the fifth station, two nights in Kyoto reached through the thatched village of Iyashi no Sato, Tsumago and Matsumoto castle, then the snow monkeys, a ryokan night and Nikko.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights across five towns with daily breakfast, including a lakeside resort below Mount Fuji and a ryokan at Ikaho; coaches and trains throughout; guided sightseeing in Tokyo, Kyoto and Nikko; Lake Kawaguchi boat ride and the Mount Fuji fifth station; Iyashi no Sato Nenba, the Watanabe house museum and the water mill; free time at Tsumago and Kusatsu; Matsumoto crow castle; Zenkoji temple and the snow monkey park.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in beside Shinagawa station\nFree time in the Shinjuku district\nEvening at your own pace', hotel: 'Shinagawa Prince Hotel', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in beside Shinagawa station', 'Free time in the Shinjuku district'] },
    { title: 'Day 2: Tokyo sightseeing (B)', text: 'Breakfast, then a guided day through Tokyo\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in the city', hotel: 'Shinagawa Prince Hotel', highlights: ['Breakfast, then a guided day through Tokyo', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Mount Fuji and Kawaguchiko (B)', text: 'Breakfast and check out, then west towards Mount Fuji\nSightseeing stops on the journey out\nA boat ride on Lake Kawaguchi\nUp the mountain road to the fifth station', hotel: 'Fuji Kawaguchiko Resort', highlights: ['Breakfast and check out, then west towards Mount Fuji', 'Sightseeing stops on the journey out', 'A boat ride on Lake Kawaguchi'] },
    { title: 'Day 4: Thatched village and on to Kyoto (B)', text: 'Breakfast, then the thatched village of Iyashi no Sato\nThe Watanabe house museum and the old water mill\nShiraito falls and the Toyota museum on the way\nOn to Kyoto and check in by the station', hotel: 'Miyako Hotel Kyoto Hachijo', highlights: ['Breakfast, then the thatched village of Iyashi no Sato', 'The Watanabe house museum and the old water mill', 'Shiraito falls and the Toyota museum on the way'] },
    { title: 'Day 5: Kyoto sightseeing (B)', text: 'Breakfast, then a guided day through the old capital\nThe golden pavilion and a Zen garden\nThe torii gate paths above Fushimi\nFree time in the Gion lanes in the evening', hotel: 'Miyako Hotel Kyoto Hachijo', highlights: ['Breakfast, then a guided day through the old capital', 'The golden pavilion and a Zen garden', 'The torii gate paths above Fushimi'] },
    { title: 'Day 6: Tsumago and Matsumoto (B)', text: 'Breakfast and check out, then north into the mountains\nFree time in the old post town of Tsumago\nThe crow castle at Matsumoto on its moat\nCheck in at your Nagano hotel', hotel: 'Hotel Metropolitan Nagano', highlights: ['Breakfast and check out, then north into the mountains', 'Free time in the old post town of Tsumago', 'The crow castle at Matsumoto on its moat'] },
    { title: 'Day 7: Snow monkeys and Ikaho (B)', text: 'Breakfast, then Zenkoji temple in Nagano\nThe snow monkey park at Jigokudani\nFree time in the hot spring town of Kusatsu\nRyokan night at Ikaho, tatami rooms and shared baths', hotel: 'Moriaki Ryokan', highlights: ['Breakfast, then Zenkoji temple in Nagano', 'The snow monkey park at Jigokudani', 'Free time in the hot spring town of Kusatsu'] },
    { title: 'Day 8: Nikko and departure (B)', text: 'Breakfast at the ryokan and check out\nA guided morning at Nikko\nThe Toshogu shrine and the Shinkyo bridge\nTransfer to Tokyo or the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the ryokan and check out', 'A guided morning at Nikko', 'The Toshogu shrine and the Shinkyo bridge'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const japanNutshellGrandCircuitBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanNutshellGrandCircuitProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Kawaguchiko', 'Mount Fuji', 'Kyoto', 'Nagano', 'Ikaho', 'Nikko'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 11,
  transfers: 22,
  meals: 7,
  price: detail.price,
  images: cardImages
};
