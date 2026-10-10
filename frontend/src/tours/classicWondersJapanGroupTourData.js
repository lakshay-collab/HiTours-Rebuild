// Classic Wonders of Japan Group Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('zcclccnpnk2b78cy9usi5x5zdoyk_shutterstock_666197236.jpg'),
  img('xetrn73mv4uqd247nxnoobi5fxsz_shutterstock_1906828666%20(1).jpg'),
  img('f4xtclyb43occot7k4kf89zt870u_shutterstock_2458718483.jpg'),
  img('8uuox865tub290elo74ceud875pg_shutterstock_2394438103.jpg'),
  img('zrac2ukzr86amgoq81iseyrhwcjw_shutterstock_2433421145.jpg'),
  img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
  img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg'),
  img('tp732v0s7r25f0n1bu4nhvpuag28_shutterstock_2439172231.jpg'),
  img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg'),
  img('xy51r1llm2st78n4iwdxp1cxrtay_shutterstock_2272053981.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('zcclccnpnk2b78cy9usi5x5zdoyk_shutterstock_666197236.jpg'),
  img('8uuox865tub290elo74ceud875pg_shutterstock_2394438103.jpg'),
  img('zrac2ukzr86amgoq81iseyrhwcjw_shutterstock_2433421145.jpg'),
  img('lmncb5fl0ouw8usdv7i2pp5ovnd1_shutterstock_774829150%20(1).jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    dayLabel: 'Day 1 to 2',
    images: [
      img('zcclccnpnk2b78cy9usi5x5zdoyk_shutterstock_666197236.jpg'),
      img('rudp6bxggw53vaykvui9490l2twt_shutterstock_721643926.jpg'),
      img('pbglyllc58xvt8glj2u374y10ybf_shutterstock_598301423.jpg'),
      img('hjvdd18dwrrkfqh5hyjbyf1qy0md_shutterstock_2299917035.jpg')
    ],
    dayImages: {
      1: [
        img('s0s1j9k7ol91rdwi77ystaof4uzo_48126669936_084ba4982e_o.jpg'),
        img('ejlal61lfumsj0l0z7i6juuw632n_download%20-%202024-07-24T125745.440.jpeg'),
        img('7v0pb5achz6hdl8vmiejhfx5ocg9_1617352304_Shinjuku_Gyoen_National_Garden.jpg'),
        img('zcclccnpnk2b78cy9usi5x5zdoyk_shutterstock_666197236.jpg')
      ],
      2: [
        img('1edetikdy4io7h2xgtowr33e9g02_Sensoji.jpg'),
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
        image: img('1edetikdy4io7h2xgtowr33e9g02_Sensoji.jpg'),
        description: 'A guided day through the city, from the Meiji shrine and the Imperial Palace gardens to the old temple lanes of Asakusa.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Two nights beside Shinagawa station to begin, with a free evening in Shinjuku and a full guided city day.',
      image: img('zcclccnpnk2b78cy9usi5x5zdoyk_shutterstock_666197236.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Hiroshima',
    subtitle: 'Hiroshima to Miyajima',
    dayLabel: 'Day 3',
    images: [
      img('c9ok8ge217o8e2npis737wjs3zbi_shutterstock_1220336509%20(2).jpg'),
      img('xetrn73mv4uqd247nxnoobi5fxsz_shutterstock_1906828666%20(1).jpg'),
      img('lmncb5fl0ouw8usdv7i2pp5ovnd1_shutterstock_774829150%20(1).jpg'),
      img('y15djz3hkp6h28e904ufyevchatx_shutterstock_625537166.jpg')
    ],
    dayImages: {
      3: [
        img('uq2i35vwpqfzck56n3u7v0clpz5b_Hiroshima%20City%20Tour-3.jpg'),
        img('ld680kik7gssbaqngshckijehcsm_hiroshima-hiroshima-peace-memorial-museum-128106.jpg'),
        img('6hqk9raek422s1htdubidnhqa0h9_40003599095_3d03c153fd_o.jpg'),
        img('9lzrldxkzxmqnzanh56c0l82e2y6_30886221447_8ff83ea243_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Hiroshima and Miyajima`,
      'Breakfast and check out, then the bullet train west',
      'Walking tour of the Peace Memorial Park and the A-Bomb Dome',
      'Ferry across to Miyajima for the floating torii gate',
      'Check in at your Hiroshima hotel'
    ],
    accommodation: {
      name: 'Hilton Hiroshima, Hiroshima',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel in the centre, walking distance from the park',
      images: [
        img('hp61ibd5hgobhzes6z3imqzmn4m5_3k%20barcelona01%20(14).jpg'),
        img('320cbq9z1idbcdla3gipvuhaj5uy_3k%20barcelona19%20(8).jpg'),
        img('9i9j9nitlpor0eu2dnanm6hlerrp_3k%20barcelona11%20(13).jpg'),
        img('k1gvow4nu5ejn9yubxqfzw6orpho_3k%20barcelona18%20(10).jpg'),
        img('7h656rt7sfzydcr6gw8way5dzegk_3k%20barcelona12%20(13).jpg'),
        img('glt7pskarwt326r8xvn9qkv84m0z_3k%20barcelona15%20(11).jpg'),
        img('wch21va5kf1i5w017xumvf8dlrjx_3k%20barcelona13%20(11).jpg'),
        img('2kvdpr20wu8h5z6ymxjhmcudbte7_498853844.jpg'),
        img('pfi0ih7yjtoqu8t0t62mnm3qyuuu_3k%20barcelona10%20(14).jpg'),
        img('w5kgnuglbbo1q9e7wp1tbv90pj40_498853860.jpg'),
        img('cknhz7pty6rahevibriv4zehpfe2_3k%20barcelona16%20(10).jpg'),
        img('7ig3ce4q0c6fh2ms6wf9q6xo9tio_498853868.jpg'),
        img('zmtrl268yu5i7vedxxs2pp7oldy8_498853896.jpg'),
        img('3wjz9s964nfmdugqnanrbiri920m_.jpeg'),
        img('3d93tg915oigq0rhw6woc4787e4v_498853894.jpg'),
        img('23yx3zb7yzl1e2qfvgtcc1wyz6g3_498853852.jpg')
      ]
    },
    activities: [
      {
        name: 'Hiroshima walking tour',
        day: 3,
        optional: false,
        image: img('uq2i35vwpqfzck56n3u7v0clpz5b_Hiroshima%20City%20Tour-3.jpg'),
        description: 'On foot through the Peace Memorial Park, the cenotaph and the A-Bomb Dome with a guide who tells the city\'s story properly.'
      },
      {
        name: 'Miyajima island',
        day: 3,
        optional: false,
        image: img('3d9ed23glrsk4pu9m7ce242sfdkp_Itsukushima%20Shrine-1.jpg'),
        description: 'The ferry across to Miyajima for the floating torii gate, Itsukushima shrine and the tame deer along the shore.'
      }
    ],
    program: {
      name: 'Hiroshima',
      description: 'A night in Hiroshima, arriving by bullet train, with the Peace Memorial Park and the island shrine at Miyajima the same day.',
      image: img('c9ok8ge217o8e2npis737wjs3zbi_shutterstock_1220336509%20(2).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Matsuyama',
    dayLabel: 'Day 4',
    images: [
      img('f4xtclyb43occot7k4kf89zt870u_shutterstock_2458718483.jpg')
    ],
    dayImages: {
      4: [
        img('r7l6vzfyfb9qggj2wencrjwzyy3h_Matsuyama%20Castle-6.jpg'),
        img('howq6lgftr4zl60ptlz9y3ndxdv4_Matsuyama_castle(Iyo)11.jpg'),
        img('53tcxhht16plzji5e69mzmg5na88_Ishiteji%20Temple-4.jpg'),
        img('89h1x7ufzkua7336t9c9z6vnoam4_5503_11.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Across to Matsuyama`,
      'Breakfast, then on across to Shikoku island',
      'Matsuyama castle, an original keep on its hill',
      'Ishiteji temple and its cave shrine',
      'Dogo Onsen, the oldest bath house in Japan'
    ],
    accommodation: {
      name: 'ANA Crowne Plaza Matsuyama, Matsuyama',
      description: '1 night · Breakfast · Standard room · 3★ · Central hotel on Shikoku island, close to the castle hill',
      images: [
        img('rz1jf5p3urjjuh361hsd4jf652hy_335179831.jpg'),
        img('fmr9o1k7b2wh4bswx3s1te0ubxoj_340140402.jpg'),
        img('cvp7fijunvx5mjto36s5z6zwsw7u_caption%20(18).jpg'),
        img('by736dcfcjq0yuu9vxynfucgdwom_guest-bathroom%20(1).jpg'),
        img('347i8ucsi3720eefzgg0szzl6d1j_340140395.jpg'),
        img('y0tuhwg8vh1o41oi9eo1fgevfzq8_340139054.jpg'),
        img('vnll8iqyfa6szeujbxtw3jirne26_caption%20(20).jpg'),
        img('cxiu1dvmitcc571y8n2ouri9zbhy_tea-lounge.jpg'),
        img('x1i8x6gwf9hc1v9xga0wz2og9fq4_489159564.jpg'),
        img('6c6q6y71lm6q78fxstite823rmew_guest-bathroom.jpg'),
        img('am70trux4wb5x534y5x9kgyuehg6_340139015.jpg'),
        img('lzkqfec5egq8shas4makpntjy7rp_guest-room%20(2).jpg'),
        img('s9ig8uqm8xajngtm4k3zvlcsbfvw_provence-bar.jpg'),
        img('fmt9qc1axuipohrfln3s4q0334ce_caption%20(19).jpg'),
        img('u1991fnweah04iizfmq4pbnhq17a_96850838.jpg')
      ]
    },
    activities: [
      {
        name: 'Matsuyama castle',
        day: 4,
        optional: false,
        image: img('r7l6vzfyfb9qggj2wencrjwzyy3h_Matsuyama%20Castle-6.jpg'),
        description: 'One of only twelve original castle keeps left in Japan, up on its hill with a view across the Seto inland sea.'
      },
      {
        name: 'Ishiteji temple',
        day: 4,
        optional: false,
        image: img('53tcxhht16plzji5e69mzmg5na88_Ishiteji%20Temple-4.jpg'),
        description: 'A pilgrimage temple on the Shikoku circuit, with its gate, three storey pagoda and cave shrine behind the main hall.'
      },
      {
        name: 'Dogo Onsen',
        day: 4,
        optional: false,
        image: img('l2rlivulq9foqvxcynl6fbx0ghjo_Dogo%20Onsen-1.jpg'),
        description: 'The oldest hot spring bath house in the country, a wooden warren of pools said to be three thousand years old.'
      }
    ],
    program: {
      name: 'Matsuyama',
      description: 'A night on Shikoku island with the original castle keep, a pilgrimage temple and Japan\'s oldest hot spring bath house.',
      image: img('f4xtclyb43occot7k4kf89zt870u_shutterstock_2458718483.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Kobe',
    dayLabel: 'Day 5',
    images: [
      img('h3macot4xadpbfjprm5mxxfegn9z_shutterstock_2445535391.jpg'),
      img('8uuox865tub290elo74ceud875pg_shutterstock_2394438103.jpg')
    ],
    dayImages: {
      5: [
        img('n93qtqbpt3ku80yyplc4az5mi2xm_Kotohira-1.jpg'),
        img('duxfuprgejj3yh3v9ht8biirrbhl_27331245833_6ff269312b_o.jpg'),
        img('8b3odp28vsvng4ehgh8mbg0yj7lc_2489545447_22d56abf38_h.jpg'),
        img('pj27lkbds0vag55377f9t0kapbdo_xgNHQvFDuD6wHTYxvznjHqa4jC1H2OnJqnDJAScY__1597_1065.png')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Shikoku gardens and Kobe`,
      'Breakfast and check out, then a touring day to Kobe',
      'Kotohira shrine on its long stone stairway',
      'Ritsurin garden, one of the finest in the country',
      'The Uzu no Michi walkway above the Naruto whirlpools'
    ],
    accommodation: {
      name: 'Kobe Meriken Park Oriental Hotel, Kobe',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel out on the harbour pier at Meriken Park',
      images: [
        img('cl9qrs58a0khqaianqjp7h5772f8_Kobe%201903%20Part04-12.jpg'),
        img('bcwwua046a9ubiski1c0zchgyif7_f1b1bbe193006797ced41975375909c3bd750dc9.47.9.26.3.jpg'),
        img('317j4brlbdng3dmoydkja6ec88f9_387388798.jpg'),
        img('l3sr9vux4fspkxxw34lt2t1107i2_447296066.jpg'),
        img('1hzivb8ctoge0818bp3i9yy5qvyq_216509639.jpg'),
        img('u2vxh08w7rmde0tnve2sg26gvyry_72716551.jpg'),
        img('3a4b0ams9j4u1t4df3j45ci6jhrj_168962906.jpg'),
        img('a1svdb5n7cv6uwenw6i2zckl82pr_kobe-meriken-park-oriental-hotel-general-b99ceca.jpg'),
        img('astj2v1xwqierk3i8ttpzn3av0bg_489141983.jpg'),
        img('56r78ol2q9dl7zegu5cktxl9373i_438253151.jpg'),
        img('y9zcqtvtz07ti04xr74lnkyhtja9_331478833.jpg'),
        img('l13z0n2nurppvchr2krrxec216y0_347056824.jpg'),
        img('lzq3175qbzvqdwjqk3z833k655kh_190b1fdc03d62d7eb197fbcdc99a1811.webp'),
        img('rqegd5fob0x91s3jiuhb5cua2hpx_Kobe-Meriken-Park-Oriental-Hotel-1200x801.jpeg'),
        img('yngqt5p0d4qzt1idwhjg395ifcy4_438253168.jpg'),
        img('dqqlbumq9ihuwioqf4s78ap9iklx_387389337.jpg'),
        img('oewt04asvbaccesvbm40dcfdifwn_493183639.jpg'),
        img('n24ttzf42ewsvmzdmeqvqxzns3g4_438253167.jpg')
      ]
    },
    activities: [
      {
        name: 'Kotohira shrine, Ritsurin garden and Uzu no Michi',
        day: 5,
        optional: false,
        image: img('n93qtqbpt3ku80yyplc4az5mi2xm_Kotohira-1.jpg'),
        description: 'A touring day across Shikoku: the hillside Kotohira shrine, the landscaped Ritsurin garden and the glass floor walkway above the Naruto whirlpools.'
      }
    ],
    program: {
      name: 'Kobe',
      description: 'A night on the Kobe waterfront, reached on a touring day through Shikoku\'s gardens, shrines and the Naruto whirlpools.',
      image: img('h3macot4xadpbfjprm5mxxfegn9z_shutterstock_2445535391.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Mount Koya',
    dayLabel: 'Day 6',
    images: [
      img('zrac2ukzr86amgoq81iseyrhwcjw_shutterstock_2433421145.jpg'),
      img('snn4hj8wbtbpfk6y6ldinpgqqxp0_shutterstock_2361467667.jpg')
    ],
    dayImages: {
      6: [
        img('y8ixithityf58u92cr8e33othd4f_Earthquake%20memorial%20museum%20Kobe.jpg'),
        img('0d9yh3vrgei529q2mrevv4k3kcvl_bosai_center_6.jpg'),
        img('we676fi5v402jbofu7infk2conon_Kongobuji%20temple-1.jpg'),
        img('xgffk3agi43vzjg81ot086pk40gw_Koyasan-Okunoin-6-e1682804630163-1024x576.jpeg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Mount Koya temple stay`,
      'Breakfast, then the Kobe earthquake memorial museum',
      'On up to Mount Koya in the afternoon',
      'The Garan complex and Kongobu-ji temple',
      'Temple lodging, with dinner and morning prayers offered'
    ],
    accommodation: {
      name: 'Fukuchi-in Temple, Koyasan',
      description: '1 night · Breakfast · Temple room · 3★ · Working temple lodging on Mount Koya, with its own hot spring bath',
      images: [
        img('oge03v1em5noxmord74o4mzxsl0f_10183216.jpg'),
        img('fl2c5h220bbdvhdh84pmcy5h25an_about_img006.jpg'),
        img('bwqsbesptpev3ykkli7nzjdelw5r_14282387.jpg'),
        img('u1gvt78xnd81oyt0wc2yrmv1lz07_142881610.jpg'),
        img('wptsl40ekxgjsq8c35eem8nlcq3p_10211992.jpg'),
        img('fy5eozly1ll1ipjupam8nx9o65th_10183242.jpg'),
        img('3046ja5prh70l9tsrd58tlhmbxo7_10183229.jpg'),
        img('jo69evtu4mw0aeih2tgxkyzqwdiy_237220005.jpg'),
        img('21p9pfu9vyklvodn5v39q2xwgrn2_10183225.jpg'),
        img('g3gjp8x7zr3hxk1cds05m6jam39p_shukubo_img008.jpg'),
        img('r7q78jwm72hhghvh2n5pkn1fvaz9_142876916.jpg'),
        img('2qttzms642gn39p7egrmy6y5oeey_shukubo_img007.jpg'),
        img('fopbavrr58bo0087xpz63jksqeh6_10183218.jpg')
      ]
    },
    activities: [
      {
        name: 'Kobe earthquake memorial museum',
        day: 6,
        optional: false,
        image: img('y8ixithityf58u92cr8e33othd4f_Earthquake%20memorial%20museum%20Kobe.jpg'),
        description: 'The museum built after the 1995 quake, which explains in plain terms what happened to the city and how it rebuilt.'
      },
      {
        name: 'Mount Koya sightseeing tour',
        day: 6,
        optional: false,
        image: img('we676fi5v402jbofu7infk2conon_Kongobuji%20temple-1.jpg'),
        description: 'The temple town itself: the Garan complex, Kongobu-ji and the cedar lined Okunoin cemetery with its two hundred thousand graves.'
      }
    ],
    program: {
      name: 'Mount Koya',
      description: 'A night in a working temple lodging on the mountain, with the Garan complex and the Okunoin cemetery walked in the afternoon.',
      image: img('zrac2ukzr86amgoq81iseyrhwcjw_shutterstock_2433421145.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Kyoto',
    dayLabel: 'Day 7',
    images: [
      img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
      img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
      img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
    ],
    dayImages: {
      7: [
        img('x71dffs7ya34fjx4e7gncdkgx424_Kyoto%20Imperial%20Castle.jpg'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg'),
        img('j8xcq76t3o64yxmui5m4kt22wejq_52980159201_640a74d15d_o.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Kyoto sightseeing`,
      'Breakfast at the temple, then down to Kyoto',
      'A guided day through the old capital',
      'The golden pavilion and the torii gate paths',
      'Free time in the Gion lanes in the evening'
    ],
    accommodation: {
      name: 'The Prince Kyoto Takaragaike, Kyoto',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel in gardens north of the city centre',
      images: [
        img('ldwgj9zfcwpeyad2v3bvp6smeu1p_caption.jpg'),
        img('e51ytodopas201mgn0vf73riujel_caption%20(5).jpg'),
        img('27mtc7k7swhbd7pn6upy4y0b79y8_caption%20(4).jpg'),
        img('i465ga0biihseyelu88ikb6ypl6a_caption%20(11).jpg'),
        img('tnukan6bi2inst613isjsp3iw65f_caption%20(1).jpg'),
        img('8i4xsnanrdjjnqolnhicv4xq8p2n_caption%20(3).jpg'),
        img('citj04mvqt96zlzm01zyww6319jn_caption%20(6).jpg'),
        img('dusvtl5g5fr8gklnk6gsv4wylvzq_d4a7443a_z.jpg'),
        img('le8on7a1lbj1uesct968kxx4dj9y_fitness-center.jpg'),
        img('h4y8pdqen7yyr2hvzgg10amcfi4w_banquet-hall-lobby.jpg'),
        img('5wji9dsdg4bolft3d51ct395b714_caption%20(10).jpg'),
        img('hyiv9z1ua8pjyijrtyuv3rf3aj97_caption%20(7).jpg'),
        img('m1o3s7p3fctx1gcoet3k08e9zrfp_caption%20(8).jpg'),
        img('movsnvjlawztqvgu6uc7e62w7ioj_507107f9_z.jpg'),
        img('ngsz1u7kt8znrolzf48mqniccvf9_caption%20(9).jpg')
      ]
    },
    activities: [
      {
        name: 'Kyoto sightseeing tour',
        day: 7,
        optional: false,
        image: img('x71dffs7ya34fjx4e7gncdkgx424_Kyoto%20Imperial%20Castle.jpg'),
        description: 'A guided day through the old capital, taking in the golden pavilion, a Zen garden and the torii gate paths above Fushimi.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'A night in Kyoto with a guided day through the temples and a free evening in the Gion lanes.',
      image: img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg')
    }
  },
  {
    letter: 'G',
    name: 'Nagano',
    subtitle: 'Nagano to Tsumago and Matsumoto',
    dayLabel: 'Day 8',
    images: [
      img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg'),
      img('raxb9kxswnyu9cfxwl7hriz6e6dq_shutterstock_2464578063.jpg')
    ],
    dayImages: {
      8: [
        img('zcizqho8xkdn20dtc630u1m3zoc2_Tsumago%20Leisure-1.webp'),
        img('f94kpl6xljwd3wf0g0drishwpdvx_download%20-%202024-07-24T131016.067.jpeg'),
        img('1ltj1unwoqgfdqb3kteqka37irre_narai-juku-1536x1024.jpeg.jpg'),
        img('cy4bv2huzatwot6e53bicbc5ze9h_Crow%20Castle-4.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Tsumago and Matsumoto`,
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
        day: 8,
        optional: false,
        image: img('zcizqho8xkdn20dtc630u1m3zoc2_Tsumago%20Leisure-1.webp'),
        description: 'A preserved post town on the old Nakasendo road, where the wooden inns and shopfronts look much as travellers found them.'
      },
      {
        name: 'Matsumoto castle',
        day: 8,
        optional: false,
        image: img('cy4bv2huzatwot6e53bicbc5ze9h_Crow%20Castle-4.jpg'),
        description: 'The black keep they call the crow castle, standing on its moat with the Alps behind it, another original from the sixteenth century.'
      }
    ],
    program: {
      name: 'Nagano',
      description: 'A night in Nagano, reached through the old post town of Tsumago and the black keep of Matsumoto castle.',
      image: img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg')
    }
  },
  {
    letter: 'H',
    name: 'Ikaho',
    subtitle: 'Ikaho to Kusatsu and Nikko',
    dayLabel: 'Day 9 to 10',
    images: [
      img('m8rah7p8k54cihntnxmqoan6c24a_shutterstock_2447788247.jpg'),
      img('tp732v0s7r25f0n1bu4nhvpuag28_shutterstock_2439172231.jpg')
    ],
    dayImages: {
      9: [
        img('02hi7vy1axjv292221kddvndptfn_Zenkoji%20Temple-6.jpg'),
        img('glvvy2079nzaqhmmd7wfo2enbc02_8668551948_a995d63ec2_b.jpg'),
        img('kdk4o16ou2alw9ba1drkcmysr9cm_Snow%20Monkey%20Park-7.jpg'),
        img('08hnvght5d7pksbjbn419xlk3ux8_jigokudani_snow_monkey_park_nagano_japan.png')
      ],
      10: [
        img('5xgyymcaoomhnlzhrdboxut57z38_Kanmangafuchi%20Abyss-2.jpg'),
        img('um1np28fhp4do9b4tj4eev1ffacs_40906793823_f26fe230df_o.jpg'),
        img('sahoqz9y8rtptljvxyqxc65vbw0v_download%20-%202024-07-24T163530.831.jpg'),
        img('o64g636ktfdqokhru1ozcvv0bcb0_download%20-%202024-07-24T164446.336.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 9 · Snow monkeys and Ikaho`,
      'Breakfast, then Zenkoji temple in Nagano',
      'The snow monkey park at Jigokudani',
      'Free time in the hot spring town of Kusatsu',
      'Ryokan night at Ikaho, tatami rooms and shared baths',
      `${DAY_MARK}Day 10 · Nikko and departure`,
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
        day: 9,
        optional: false,
        image: img('02hi7vy1axjv292221kddvndptfn_Zenkoji%20Temple-6.jpg'),
        description: 'Nagano\'s great temple, home to what is said to be the first Buddhist statue brought to Japan, kept hidden behind the altar.'
      },
      {
        name: 'Snow monkey park',
        day: 9,
        optional: false,
        image: img('kdk4o16ou2alw9ba1drkcmysr9cm_Snow%20Monkey%20Park-7.jpg'),
        description: 'The hot spring at Jigokudani where wild macaques sit chest deep in the steaming water, often with snow on their heads.'
      },
      {
        name: 'Kusatsu hot spring town',
        day: 9,
        optional: false,
        image: img('2zm6jygao6l1wc6o30u323l3zs2q_K%C5%8Dsenji%20Temple-2.JPG'),
        description: 'Free time in Kusatsu, where the hot water runs down wooden channels through the middle of the town square.'
      },
      {
        name: 'Nikko sightseeing tour',
        day: 10,
        optional: false,
        image: img('5xgyymcaoomhnlzhrdboxut57z38_Kanmangafuchi%20Abyss-2.jpg'),
        description: 'The lacquered Toshogu shrine in its cedar forest, the Shinkyo bridge and the Kegon falls on the way back to Tokyo.'
      }
    ],
    program: {
      name: 'Ikaho',
      description: 'A ryokan night at a hot spring, with the snow monkeys, Zenkoji temple and Kusatsu on the way, and Nikko on the final day.',
      image: img('m8rah7p8k54cihntnxmqoan6c24a_shutterstock_2447788247.jpg')
    }
  }
];

const detail = {
  slug: 'classic-wonders-of-japan-group-tour',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Classic Wonders of Japan Group Tour',
  alt: 'Snow monkeys in a steaming hot spring at Yamanouchi, Japan',
  days: '10 days / 9 nights',
  stations: '8 stops',
  transport: 'Bullet trains, coaches and guided touring throughout',
  tag: 'Group tour',
  tags: ['Culture', 'Adventure'],
  price: 278985,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Hiroshima', 'Miyajima', 'Matsuyama', 'Kobe', 'Mount Koya', 'Kyoto', 'Nagano', 'Nikko'],
  stats: { days: 10, cities: 8, hotels: 8, activities: 16, transfers: 38 },
  gallery: heroGallery,
  services: [
    ['8 hotels', 'Accommodation'],
    ['16 experiences', 'Activities'],
    ['38 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'This is the Japan that regulars come back for. Temple lodgings, an island shrine, a monkey hot spring and the old post towns.',
    quoteMore: 'The night at Fukuchi-in on Mount Koya is the highlight. Eat the vegetarian temple dinner, then join the morning prayers at six.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Ten days on a group tour that leaves the usual trail: Tokyo and Hiroshima, then Shikoku island for an original castle and the oldest bath house in Japan, a temple lodging on Mount Koya, Kyoto, the old post town of Tsumago, the snow monkeys and a ryokan night before Nikko.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 9 nights across eight towns with daily breakfast, including a temple lodging on Mount Koya and a ryokan at Ikaho; bullet trains and coaches throughout; guided sightseeing in Tokyo, Hiroshima, Kyoto, Mount Koya and Nikko; Miyajima island; Matsuyama castle, Ishiteji temple and Dogo Onsen; Kotohira shrine, Ritsurin garden and the Uzu no Michi walkway; Kobe earthquake memorial museum; Tsumago and Matsumoto castle; Zenkoji temple, the snow monkey park and Kusatsu.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in beside Shinagawa station\nFree time in the Shinjuku district\nEvening at your own pace', hotel: 'Shinagawa Prince Hotel', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in beside Shinagawa station', 'Free time in the Shinjuku district'] },
    { title: 'Day 2: Tokyo sightseeing (B)', text: 'Breakfast, then a guided day through Tokyo\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in the city', hotel: 'Shinagawa Prince Hotel', highlights: ['Breakfast, then a guided day through Tokyo', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Hiroshima and Miyajima (B)', text: 'Breakfast and check out, then the bullet train west\nWalking tour of the Peace Memorial Park and the A-Bomb Dome\nFerry across to Miyajima for the floating torii gate\nCheck in at your Hiroshima hotel', hotel: 'Hilton Hiroshima', highlights: ['Breakfast and check out, then the bullet train west', 'Walking tour of the Peace Memorial Park and the A-Bomb Dome', 'Ferry across to Miyajima for the floating torii gate'] },
    { title: 'Day 4: Across to Matsuyama (B)', text: 'Breakfast, then on across to Shikoku island\nMatsuyama castle, an original keep on its hill\nIshiteji temple and its cave shrine\nDogo Onsen, the oldest bath house in Japan', hotel: 'ANA Crowne Plaza Matsuyama, an IHG Hotel', highlights: ['Breakfast, then on across to Shikoku island', 'Matsuyama castle, an original keep on its hill', 'Ishiteji temple and its cave shrine'] },
    { title: 'Day 5: Shikoku gardens and Kobe (B)', text: 'Breakfast and check out, then a touring day to Kobe\nKotohira shrine on its long stone stairway\nRitsurin garden, one of the finest in the country\nThe Uzu no Michi walkway above the Naruto whirlpools', hotel: 'Kobe Meriken Park Oriental Hotel', highlights: ['Breakfast and check out, then a touring day to Kobe', 'Kotohira shrine on its long stone stairway', 'Ritsurin garden, one of the finest in the country'] },
    { title: 'Day 6: Mount Koya temple stay (B)', text: 'Breakfast, then the Kobe earthquake memorial museum\nOn up to Mount Koya in the afternoon\nThe Garan complex and Kongobu-ji temple\nTemple lodging, with dinner and morning prayers offered', hotel: 'Fukuchi-in Temple', highlights: ['Breakfast, then the Kobe earthquake memorial museum', 'On up to Mount Koya in the afternoon', 'The Garan complex and Kongobu-ji temple'] },
    { title: 'Day 7: Kyoto sightseeing (B)', text: 'Breakfast at the temple, then down to Kyoto\nA guided day through the old capital\nThe golden pavilion and the torii gate paths\nFree time in the Gion lanes in the evening', hotel: 'The Prince Kyoto Takaragaike, Autograph Collection', highlights: ['Breakfast at the temple, then down to Kyoto', 'A guided day through the old capital', 'The golden pavilion and the torii gate paths'] },
    { title: 'Day 8: Tsumago and Matsumoto (B)', text: 'Breakfast and check out, then north into the mountains\nFree time in the old post town of Tsumago\nMatsumoto castle, the black crow keep on its moat\nCheck in at your Nagano hotel', hotel: 'Hotel Metropolitan Nagano', highlights: ['Breakfast and check out, then north into the mountains', 'Free time in the old post town of Tsumago', 'Matsumoto castle, the black crow keep on its moat'] },
    { title: 'Day 9: Snow monkeys and Ikaho (B)', text: 'Breakfast, then Zenkoji temple in Nagano\nThe snow monkey park at Jigokudani\nFree time in the hot spring town of Kusatsu\nRyokan night at Ikaho, tatami rooms and shared baths', hotel: 'Moriaki Ryokan', highlights: ['Breakfast, then Zenkoji temple in Nagano', 'The snow monkey park at Jigokudani', 'Free time in the hot spring town of Kusatsu'] },
    { title: 'Day 10: Nikko and departure (B)', text: 'Breakfast at the ryokan and check out\nA guided morning at Nikko\nThe Toshogu shrine and the Shinkyo bridge\nTransfer to Tokyo or the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the ryokan and check out', 'A guided morning at Nikko', 'The Toshogu shrine and the Shinkyo bridge'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const classicWondersJapanGroupTourBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const classicWondersJapanGroupTourProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Hiroshima', 'Miyajima', 'Matsuyama', 'Kobe', 'Mount Koya', 'Kyoto', 'Nagano', 'Nikko'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 8,
  hotels: 8,
  cities: 8,
  activities: 16,
  transfers: 38,
  meals: 9,
  price: detail.price,
  images: cardImages
};
