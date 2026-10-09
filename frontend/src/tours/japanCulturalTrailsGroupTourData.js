// Japan Cultural Trails Group Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('re7iw91kyn2u863knugl7cr3ojwm_shutterstock_2301094731.jpg'),
  img('pra6w5yyjg0qkzotgxbbvppsbe55_shutterstock_2474030861.jpg'),
  img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
  img('6mx3dets08l8fqucy8q5ptmmbaih_shutterstock_426748243.jpg'),
  img('umrox09yxpjy74liaai8z0yn4eca_shutterstock_690413746.jpg'),
  img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg'),
  img('po65tczkitxpxj3efvb2ofq18yw8_shutterstock_2395371427.jpg'),
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('wriotvvbfc3o6tb222ad7qf9vnlp_shutterstock_2401915617.jpg'),
  img('nd48tylxzfdkb788tdezsrfcdr24_shutterstock_1673742691.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('pra6w5yyjg0qkzotgxbbvppsbe55_shutterstock_2474030861.jpg'),
  img('umrox09yxpjy74liaai8z0yn4eca_shutterstock_690413746.jpg'),
  img('nd48tylxzfdkb788tdezsrfcdr24_shutterstock_1673742691.jpg'),
  img('y15djz3hkp6h28e904ufyevchatx_shutterstock_625537166.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    dayLabel: 'Day 1 to 2',
    images: [
      img('re7iw91kyn2u863knugl7cr3ojwm_shutterstock_2301094731.jpg'),
      img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
      img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg'),
      img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg')
    ],
    dayImages: {
      1: [
        img('s0s1j9k7ol91rdwi77ystaof4uzo_48126669936_084ba4982e_o.jpg'),
        img('ejlal61lfumsj0l0z7i6juuw632n_download%20-%202024-07-24T125745.440.jpeg'),
        img('7v0pb5achz6hdl8vmiejhfx5ocg9_1617352304_Shinjuku_Gyoen_National_Garden.jpg'),
        img('re7iw91kyn2u863knugl7cr3ojwm_shutterstock_2301094731.jpg')
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
      description: 'Two nights beside Shinagawa station, with free time in Shinjuku and a full guided city day.',
      image: img('re7iw91kyn2u863knugl7cr3ojwm_shutterstock_2301094731.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kawaguchiko',
    subtitle: 'Kawaguchiko to Mount Fuji',
    dayLabel: 'Day 3',
    images: [
      img('po65tczkitxpxj3efvb2ofq18yw8_shutterstock_2395371427.jpg'),
      img('pra6w5yyjg0qkzotgxbbvppsbe55_shutterstock_2474030861.jpg')
    ],
    dayImages: {
      3: [
        img('znze9vt0p0foqc2s45w46fobfx0q_Arakurayama%20Shrine-5.jpg'),
        img('5fkvulgtcxm4n9tf8pkdfhiwsxy0_33774521860_72822b9eb5_b.jpg'),
        img('ttflfg1cdsovpctxsck8k1ac35xr_49075001941_d6e64c8a9c_o.jpg'),
        img('im8kmrshxi541jjh4j7c2ic5hml1_Kawaguchi%20Lake-2.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Mount Fuji and Kawaguchiko`,
      'Breakfast and check out, then west towards Mount Fuji',
      'The Chureito pagoda at Arakurayama Sengen park',
      'A boat ride out onto Lake Kawaguchi',
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
        name: 'Arakurayama Sengen park and shrine',
        day: 3,
        optional: false,
        image: img('znze9vt0p0foqc2s45w46fobfx0q_Arakurayama%20Shrine-5.jpg'),
        description: 'The four hundred steps up to the Chureito pagoda, where the pagoda, the cherry trees and Mount Fuji line up in one frame.'
      },
      {
        name: 'Lake Kawaguchi boat ride',
        day: 3,
        optional: false,
        image: img('im8kmrshxi541jjh4j7c2ic5hml1_Kawaguchi%20Lake-2.jpg'),
        description: 'A cruise out onto the lake, with the mountain reflected in the water when the cloud lifts.'
      },
      {
        name: 'Mount Fuji fifth station',
        day: 3,
        optional: false,
        image: img('o52ch3joztuharb8lzh8bk05yb3i_Mt%20Fuji-2.jpg'),
        description: 'Up the mountain road to the fifth station at 2,300 metres, where the treeline ends and the climbing trail begins.'
      }
    ],
    program: {
      name: 'Kawaguchiko',
      description: 'A lakeside night below Mount Fuji, with the Chureito pagoda, a boat ride and the drive up to the fifth station.',
      image: img('po65tczkitxpxj3efvb2ofq18yw8_shutterstock_2395371427.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Kyoto',
    subtitle: 'Kyoto to Shiraito falls and Nagoya',
    dayLabel: 'Day 4 to 5',
    images: [
      img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
      img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
      img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg')
    ],
    dayImages: {
      4: [
        img('pul2b8k1vts2146p9inbbnzm9fa9_Iyashi%20no%20Sato%20Nenba-6.jpg'),
        img('bmkakc99tn5wyztlkn7tezgwqxau_DSC2995.jpg'),
        img('mfnppm5fcpqw1lrebj4kod9ynrcj_Shiraito%20Falls-5.jpg'),
        img('gog7u27a8dqiori63qdh7sl30kqu_caption.png')
      ],
      5: [
        img('w1ckkoeyjvxt5n9dzj4f3jhsr38v_Fushimi%20Inari-1.jpg'),
        img('182vibmg4qqlf60do26572d7lrlg_Kyoto-Arashiyama-Bamboo-Grove1-SH.jpg'),
        img('kzzw8p7e922mqzltcs7i24a20gva_34942821105_3c2cdfb12c_h.jpg'),
        img('baa8le7syqs54ubtdh5zb3m4yi4o_1920px-Tenryuji_Kyoto.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Shiraito falls and on to Kyoto`,
      'Breakfast, then the thatched village of Iyashi no Sato',
      'Shiraito falls, fed by the snowmelt off Fuji',
      'The Toyota commemorative museum in Nagoya',
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
        image: img('pul2b8k1vts2146p9inbbnzm9fa9_Iyashi%20no%20Sato%20Nenba-6.jpg'),
        description: 'A rebuilt village of thatched farmhouses below Mount Fuji, now craft workshops where you can try dyeing or pottery.'
      },
      {
        name: 'Shiraito falls',
        day: 4,
        optional: false,
        image: img('mfnppm5fcpqw1lrebj4kod9ynrcj_Shiraito%20Falls-5.jpg'),
        description: 'A two hundred metre curtain of spring water falling in white threads, fed by the snowmelt off Mount Fuji.'
      },
      {
        name: 'Toyota museum',
        day: 4,
        optional: false,
        image: img('926fvn5dh20tu71cywkby2w3lytq_toyota%20museum-5.jpg'),
        description: 'The commemorative museum in Nagoya, which runs from the first looms to the cars, with machines you can watch working.'
      },
      {
        name: 'Kyoto sightseeing tour',
        day: 5,
        optional: false,
        image: img('w1ckkoeyjvxt5n9dzj4f3jhsr38v_Fushimi%20Inari-1.jpg'),
        description: 'A guided day through the old capital, taking in the golden pavilion, a Zen garden and the torii gate paths above Fushimi.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'Two nights by Kyoto station, reached through the Fuji foothills and Nagoya, with a full guided day and a free evening in Gion.',
      image: img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Osaka',
    subtitle: 'Osaka to Nara',
    dayLabel: 'Day 6',
    images: [
      img('rwd198veburqy2a8grssg5g7djer_shutterstock_469018031.jpg'),
      img('yfbvuqj5t7yyjle11bzesj245xnj_shutterstock_1024764949%20(1).jpg'),
      img('hr6rqa9fuvyffjnfzg8t9nnmi4ct_shutterstock_787582243%20(1).jpg'),
      img('6mx3dets08l8fqucy8q5ptmmbaih_shutterstock_426748243.jpg')
    ],
    dayImages: {
      6: [
        img('w5e1ol7ztk3b9a4u9scox6afxq7g_Horyuji-6.jpg'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('567g2huih098gbwk5sfi99kn57rj_1280px-Horyu-ji_National_Treasure_World_heritage_%E5%9B%BD%E5%AE%9D%E3%83%BB%E4%B8%96%E7%95%8C%E9%81%BA%E7%94%A3%E6%B3%95%E9%9A%86%E5%AF%BA85.jpg'),
        img('nozs79tjbgfixymgrh3voo9bhf1z_Osaka_Dotonbori_Ebisu_Bridge.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Nara temples and Osaka`,
      'Breakfast and check out, then on to Nara',
      'Todai-ji and its great bronze Buddha',
      'Horyu-ji, the oldest wooden building in the world',
      'Check in at Osaka, then free time at Dotonbori'
    ],
    accommodation: {
      name: 'Holiday Inn Express Osaka Midosuji, Osaka',
      description: '1 night · Breakfast · Standard room · 4★ · Straightforward hotel on Midosuji, walking distance to Dotonbori',
      images: [
        img('yrdcfnu29wtss42c71pkhnmwnruj_951832f1_z.webp'),
        img('w15rbexntl15sfaozwcbczpzyqt9_405065615.jpg'),
        img('a5vgc8biiogxw4ph64ehl8lcqmxu_405061174.jpg'),
        img('144e6q0nk4voyeyjo3py6nu2mw2a_holiday-inn-express-osaka.jpg'),
        img('0jkzzrn6zpp3p3xqxkn4ao96cuqo_405061978.jpg'),
        img('4itcdnobdp93r3c6owp0oipux9b1_480374907.jpg'),
        img('o7fa654unngujagw4zaclglkrtkb_405062916.jpg'),
        img('lleooq46o8kv530yzv6ojw5oxs6o_405061389.jpg'),
        img('tpvd3l8ebx0zf38x5eohohjg0m3j_405061937.jpg'),
        img('drrz4hppcgizycv5wokgyefmmh1y_405062106.jpg'),
        img('wvwbkvz1gongpaswc7jd3m0yzgjn_405061202.jpg'),
        img('6l90mx9uq932z1x25qzlyy5367qy_405061227.jpg'),
        img('4luc1o1dvqwfnjo88d4hszbxecd3_405063374.jpg'),
        img('kg8zpd5vau3ou8wnorh3cdkr8g1z_405062916.jpg')
      ]
    },
    activities: [
      {
        name: 'Nara sightseeing with Todai-ji and Horyu-ji',
        day: 6,
        optional: false,
        image: img('w5e1ol7ztk3b9a4u9scox6afxq7g_Horyuji-6.jpg'),
        description: 'Todai-ji, which holds the great bronze Buddha, and Horyu-ji, the oldest wooden building standing anywhere in the world.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'A night in Osaka, reached through Nara\'s great temples, with free time in the Dotonbori food streets.',
      image: img('rwd198veburqy2a8grssg5g7djer_shutterstock_469018031.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Okayama',
    subtitle: 'Okayama to Himeji',
    dayLabel: 'Day 7',
    images: [
      img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg'),
      img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg'),
      img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg'),
      img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg')
    ],
    dayImages: {
      7: [
        img('grwrnhn6vq1p4bbmswlw9w6ni7o0_himeji%20castle-2.jpg'),
        img('5ps893jtjebytutoq9v7lnrxf3y3_39146732395_f9873cc92a_o.jpg'),
        img('kfzxlzgwt7tu214orgoem4fixygj_korakuen%20garden-2.jpg'),
        img('lhmump9ykz9vx56zqfeb99s18p4y_49667304008_75532b9f86_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Himeji castle and Okayama`,
      'Breakfast, then west along the inland sea',
      'Himeji castle, the white heron keep',
      'The Korakuen garden and Okayama castle',
      'Check in beside Okayama station'
    ],
    accommodation: {
      name: 'Mitsui Garden Hotel Okayama, Okayama',
      description: '1 night · Breakfast · Standard room · 3★ · Smart hotel beside Okayama station, near the Korakuen garden',
      images: [
        img('29flphb13s49m1qgwc96ca9d1ovc_download%20-%202024-07-19T123702.193.jpg'),
        img('lt8oggxob1aw343ia462rbm2boat_download%20-%202024-07-19T123800.690.jpg'),
        img('h4xg6jdsatvbw05u4zn50thoo4b7_download%20-%202024-07-19T123732.501.jpg'),
        img('x52t91rflu97k2s71uoc8cuigdkw_download%20-%202024-07-19T123720.451.jpg'),
        img('jj014fjan7zg0zfy4c8femzs5sa8_download%20-%202024-07-19T123749.546.jpg'),
        img('8wc5w0ay2xt3ebcm99rgyzee1vl9_download%20-%202024-07-19T123807.914.jpg'),
        img('p9r6aqyype5xpt1jlll0q4gmamm7_download%20-%202024-07-19T123714.766.jpg'),
        img('8tr7a9kmpiknw3hcd8igofyyo49c_download%20-%202024-07-19T123814.840.jpg'),
        img('ntniyuajd3gz31yf46bgqwtl0f9d_download%20-%202024-07-19T123821.062.jpg'),
        img('x7tsrsz5u9gyqgt8jp8n2lpr2z50_download%20-%202024-07-19T123741.098.jpg')
      ]
    },
    activities: [
      {
        name: 'Himeji castle',
        day: 7,
        optional: false,
        image: img('grwrnhn6vq1p4bbmswlw9w6ni7o0_himeji%20castle-2.jpg'),
        description: 'The white heron castle, the finest surviving fortress in Japan and the first site here to be listed by UNESCO.'
      },
      {
        name: 'Okayama sightseeing tour',
        day: 7,
        optional: false,
        image: img('kfzxlzgwt7tu214orgoem4fixygj_korakuen%20garden-2.jpg'),
        description: 'The Korakuen garden, counted among the three great gardens of Japan, and the black keep of Okayama castle beside it.'
      }
    ],
    program: {
      name: 'Okayama',
      description: 'A night in Okayama, with Himeji castle on the way and the Korakuen garden in the afternoon.',
      image: img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg')
    }
  },
  {
    letter: 'F',
    name: 'Hiroshima',
    subtitle: 'Hiroshima to Kurashiki and Miyajima',
    dayLabel: 'Day 8 to 9',
    images: [
      img('y15djz3hkp6h28e904ufyevchatx_shutterstock_625537166.jpg'),
      img('852ajgt1b0g8yqohozdopci32za8_shutterstock_1457990534.jpg'),
      img('jrtz4vq56xhqb8xes2py7d0u61a2_shutterstock_519395710.jpg'),
      img('5fq3rzor99chxcsze1y39h7o6ggg_shutterstock_2136014401.jpg')
    ],
    dayImages: {
      8: [
        img('6c87tpbp8jmaaxh0ppvczfczlmoh_ohara%20museum%20of%20art%20kurashiki-2.jpg'),
        img('abo79vxmj6d6rw9dpvayggkd54bb_5751_01.jpg'),
        img('5ynvo4s2weyv9vw48a65xd5nvuzo_download%20-%202024-07-26T114742.039.jpeg'),
        img('uq2i35vwpqfzck56n3u7v0clpz5b_Hiroshima%20City%20Tour-3.jpg')
      ],
      9: [
        img('y15djz3hkp6h28e904ufyevchatx_shutterstock_625537166.jpg'),
        img('852ajgt1b0g8yqohozdopci32za8_shutterstock_1457990534.jpg'),
        img('jrtz4vq56xhqb8xes2py7d0u61a2_shutterstock_519395710.jpg'),
        img('5fq3rzor99chxcsze1y39h7o6ggg_shutterstock_2136014401.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Kurashiki, Hiroshima and Miyajima`,
      'Breakfast, then the canal quarter at Kurashiki',
      'On to Hiroshima for a walking tour of the park',
      'The cenotaph and the A-Bomb Dome',
      'Ferry across to Miyajima for the floating torii gate',
      `${DAY_MARK}Day 9 · Departure from Hiroshima`,
      'Breakfast at the hotel and check out',
      'Transfer to the station or the airport for your journey home'
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
        name: 'Kurashiki canal quarter',
        day: 8,
        optional: false,
        image: img('6c87tpbp8jmaaxh0ppvczfczlmoh_ohara%20museum%20of%20art%20kurashiki-2.jpg'),
        description: 'Free time in the old merchant quarter, where white walled storehouses line a willow canal that still has punts on it.'
      },
      {
        name: 'Hiroshima walking tour',
        day: 8,
        optional: false,
        image: img('uq2i35vwpqfzck56n3u7v0clpz5b_Hiroshima%20City%20Tour-3.jpg'),
        description: 'On foot through the Peace Memorial Park, the cenotaph and the A-Bomb Dome with a guide who tells the city\'s story properly.'
      },
      {
        name: 'Miyajima island',
        day: 8,
        optional: false,
        image: img('3d9ed23glrsk4pu9m7ce242sfdkp_Itsukushima%20Shrine-1.jpg'),
        description: 'The ferry across to Miyajima for the floating torii gate, Itsukushima shrine and the tame deer along the shore.'
      }
    ],
    program: {
      name: 'Hiroshima',
      description: 'A last night in Hiroshima, with the canal quarter at Kurashiki on the way and the island shrine at Miyajima the same day.',
      image: img('y15djz3hkp6h28e904ufyevchatx_shutterstock_625537166.jpg')
    }
  }
];

const detail = {
  slug: 'japan-cultural-trails-group-tour',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan Cultural Trails Group Tour',
  alt: 'The Chureito pagoda with Mount Fuji behind it, Japan',
  days: '9 days / 8 nights',
  stations: '6 stops',
  transport: 'Coaches, bullet trains and guided touring throughout',
  tag: 'Group tour',
  tags: ['Culture', 'First time'],
  price: 218920,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Kawaguchiko', 'Mount Fuji', 'Kyoto', 'Nara', 'Osaka', 'Okayama', 'Hiroshima'],
  stats: { days: 9, cities: 6, hotels: 6, activities: 13, transfers: 28 },
  gallery: heroGallery,
  services: [
    ['6 hotels', 'Accommodation'],
    ['13 experiences', 'Activities'],
    ['28 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Sleeping at Kawaguchiko is the difference between seeing Fuji and waiting for it. You get the morning window as well as the afternoon.',
    quoteMore: 'Carry a small overnight bag for the one night stops. The coach handles the big cases, but you will thank yourself at Kawaguchiko and Okayama.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days west across the country: Tokyo, a lakeside night below Mount Fuji with the Chureito pagoda and the fifth station, two nights in Kyoto, Nara\'s great temples and Osaka, Himeji castle and Okayama, then Hiroshima with Kurashiki and Miyajima.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights across six towns with daily breakfast; coaches and bullet trains throughout; guided sightseeing in Tokyo, Kyoto, Nara, Okayama and Hiroshima; Arakurayama Sengen park, a Lake Kawaguchi boat ride and the Mount Fuji fifth station; Iyashi no Sato Nenba, Shiraito falls and the Toyota museum; Himeji castle; free time at Kurashiki and Dotonbori; the ferry to Miyajima island.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in beside Shinagawa station\nFree time in the Shinjuku district\nEvening at your own pace', hotel: 'Shinagawa Prince Hotel', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in beside Shinagawa station', 'Free time in the Shinjuku district'] },
    { title: 'Day 2: Tokyo sightseeing (B)', text: 'Breakfast, then a guided day through Tokyo\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in the city', hotel: 'Shinagawa Prince Hotel', highlights: ['Breakfast, then a guided day through Tokyo', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Mount Fuji and Kawaguchiko (B)', text: 'Breakfast and check out, then west towards Mount Fuji\nThe Chureito pagoda at Arakurayama Sengen park\nA boat ride out onto Lake Kawaguchi\nUp the mountain road to the fifth station', hotel: 'Fuji Kawaguchiko Resort', highlights: ['Breakfast and check out, then west towards Mount Fuji', 'The Chureito pagoda at Arakurayama Sengen park', 'A boat ride out onto Lake Kawaguchi'] },
    { title: 'Day 4: Shiraito falls and on to Kyoto (B)', text: 'Breakfast, then the thatched village of Iyashi no Sato\nShiraito falls, fed by the snowmelt off Fuji\nThe Toyota commemorative museum in Nagoya\nOn to Kyoto and check in by the station', hotel: 'Miyako Hotel Kyoto Hachijo', highlights: ['Breakfast, then the thatched village of Iyashi no Sato', 'Shiraito falls, fed by the snowmelt off Fuji', 'The Toyota commemorative museum in Nagoya'] },
    { title: 'Day 5: Kyoto sightseeing (B)', text: 'Breakfast, then a guided day through the old capital\nThe golden pavilion and a Zen garden\nThe torii gate paths above Fushimi\nFree time in the Gion lanes in the evening', hotel: 'Miyako Hotel Kyoto Hachijo', highlights: ['Breakfast, then a guided day through the old capital', 'The golden pavilion and a Zen garden', 'The torii gate paths above Fushimi'] },
    { title: 'Day 6: Nara temples and Osaka (B)', text: 'Breakfast and check out, then on to Nara\nTodai-ji and its great bronze Buddha\nHoryu-ji, the oldest wooden building in the world\nCheck in at Osaka, then free time at Dotonbori', hotel: 'Holiday Inn Express Osaka Midosuji', highlights: ['Breakfast and check out, then on to Nara', 'Todai-ji and its great bronze Buddha', 'Horyu-ji, the oldest wooden building in the world'] },
    { title: 'Day 7: Himeji castle and Okayama (B)', text: 'Breakfast, then west along the inland sea\nHimeji castle, the white heron keep\nThe Korakuen garden and Okayama castle\nCheck in beside Okayama station', hotel: 'Mitsui Garden Hotel Okayama', highlights: ['Breakfast, then west along the inland sea', 'Himeji castle, the white heron keep', 'The Korakuen garden and Okayama castle'] },
    { title: 'Day 8: Kurashiki, Hiroshima and Miyajima (B)', text: 'Breakfast, then the canal quarter at Kurashiki\nOn to Hiroshima for a walking tour of the park\nThe cenotaph and the A-Bomb Dome\nFerry across to Miyajima for the floating torii gate', hotel: 'Hilton Hiroshima', highlights: ['Breakfast, then the canal quarter at Kurashiki', 'On to Hiroshima for a walking tour of the park', 'The cenotaph and the A-Bomb Dome'] },
    { title: 'Day 9: Departure from Hiroshima (B)', text: 'Breakfast at the hotel and check out\nTransfer to the station or the airport for your journey home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to the station or the airport for your journey home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Japan', href: '/asien/japan' },
  { label: detail.title }
];

export const japanCulturalTrailsGroupTourBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanCulturalTrailsGroupTourProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Kawaguchiko', 'Mount Fuji', 'Kyoto', 'Nara', 'Osaka', 'Okayama', 'Hiroshima'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 6,
  hotels: 6,
  cities: 6,
  activities: 13,
  transfers: 28,
  meals: 8,
  price: detail.price,
  images: cardImages
};
