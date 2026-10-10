// Best of China and Japan: Great Wall to Mount Fuji. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg'),
  img('9rosa45v5zlyindg3n1t4towa560_shutterstock_246196210.jpg'),
  img('ys3axltpj9xw7tbzmi0peweamrfh_steptodown.com226374.jpg'),
  img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg'),
  img('7kxl7sgilrs8qq9u4vti16qxyujm_shutterstock_2278159137.jpg'),
  img('q2f59czcfiuf0faqucpnkue5v3ha_steptodown.com817668.jpg'),
  img('yfbvuqj5t7yyjle11bzesj245xnj_shutterstock_1024764949%20(1).jpg'),
  img('s5n4t57ymv7th4yg1bqkxh3xe7gn_shutterstock_1514003930.jpg'),
  img('y15djz3hkp6h28e904ufyevchatx_shutterstock_625537166.jpg'),
  img('pr87r5fcva45663kuzyfwledwnn7_steptodown.com459740.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('9rosa45v5zlyindg3n1t4towa560_shutterstock_246196210.jpg'),
  img('ys3axltpj9xw7tbzmi0peweamrfh_steptodown.com226374.jpg'),
  img('q2f59czcfiuf0faqucpnkue5v3ha_steptodown.com817668.jpg'),
  img('pr87r5fcva45663kuzyfwledwnn7_steptodown.com459740.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Beijing',
    subtitle: 'Beijing → Mutianyu',
    dayLabel: 'Day 1 to 3',
    images: [
      img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg'),
      img('92vedp6ukl0p8g52c9g80bjubq6p_shutterstock_788638972.jpg'),
      img('v8dhd0k6bqroomol92p84t0xmf1u_shutterstock_685846135%20(1).jpg'),
      img('iydw2l2uic40wgzusg1ovudevqjk_shutterstock_1514003927.jpg')
    ],
    dayImages: {
      1: [
        img('k2hl08rrjq6c8l8wpdirger9byfn_Entrance_of_Gongmei_Emporium_(20220105183226).jpg'),
        img('hzhnknx5ml9infmui7bts7yi5nfw_namoc.jpg'),
        img('4qbtdii3rysrosjdpq5vi7pp8okh_Kilise-Beijing-%C3%87in_-_panoramio.jpg'),
        img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg')
      ],
      2: [
        img('3n0wsoc9xgdb2o10udn72b1p5l0h_shutterstock_439146565.jpg'),
        img('u89sv8ohc0gaa958yh1zh8vuue4l_1619595084_shutterstock_275490581.jpg'),
        img('mmtgbfu1r6dvkeuyo17lwr3deahz_ullens_center_for_contemporary_art_cover.jpg'),
        img('p3ezpt5m4hg20r1klkdhmncsypdp_steptodown.com141744.jpg')
      ],
      3: [
        img('umaofzvo200rocnjv74y8sqb28fv_steptodown.com944398.jpg'),
        img('xhapwj9v3aun8mqo8zxnwqvaqp74_1619597223_shutterstock_141819499.jpg'),
        img('siebp4uy1nxmrdwh5tjgrx1jgmp0_7g8lyh7jndkv8fvi6miwjezahxnd_1619597332_shutterstock_326150318.webp'),
        img('dn4flu5s7mtvxai5fduyn96o0wa9_1619610803_shutterstock_327246545.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Beijing`,
      'Arrival at Beijing Daxing and transfer to your hotel',
      'Check in and the rest of the day free',
      'Leisure time along Wangfujing street',
      'Optional: the National Art Museum of China',
      `${DAY_MARK}Day 2 · Great Wall and Temple of Heaven`,
      'Early breakfast, then north to Mutianyu',
      'The cable car and the walk along the wall',
      'The 798 art district in the afternoon',
      'The Temple of Heaven and its round halls',
      'A tai chi lesson and a foot rub to finish',
      `${DAY_MARK}Day 3 · Imperial Palace and the hutongs`,
      'Breakfast, then a guided day in the old centre',
      'Tiananmen Square and the Imperial Palace courtyards',
      'The Capital Museum and the performing arts centre',
      'A tricycle ride through the hutong lanes'
    ],
    accommodation: {
      name: 'Mercure Beijing Downtown, Beijing',
      description: '3 nights · Breakfast · Standard room · 4★ · Central hotel a short walk from Wangfujing',
      images: [
        img('j60jpc8vxoivkllhu7h561vpmvur_97571338.jpg'),
        img('5cfhh1my3ggs6fai8reby4nhobjt_544228469.jpg'),
        img('2oppnoslqkxsh50r8wnycgvl9kog_544225628.jpg'),
        img('a62diw2wnlkapegvimjvik4t5qio_544224787.jpg'),
        img('5l1tikh8gfc2tevfiilah0puime0_148962365.jpg'),
        img('qz7yzzb0lxja5hm347tugx8l7e81_155882845.jpg'),
        img('qi869j1gzyae4ezglm8oilgmfetf_544228479.jpg'),
        img('pkesy7l8g8q7xgm3kstohlraezwz_544228482.jpg'),
        img('7njniltp0kyo581z6rq48mjjfu8i_544228458.jpg'),
        img('v7c7zz22h4p65rvinuf4r2izwksh_544224782.jpg'),
        img('w6zd9adeuh72p59t5eyyxt7tf8f5_544225667.jpg'),
        img('er2o147qcqanr8tggnlzewtlb3z3_544225656.jpg'),
        img('3gpv8tb2vqgqqr4cuwx8jx5fhy3c_97571335.jpg')
      ]
    },
    activities: [
      {
        name: 'Great Wall at Mutianyu',
        day: 2,
        optional: false,
        image: img('3n0wsoc9xgdb2o10udn72b1p5l0h_shutterstock_439146565.jpg'),
        description: 'Tickets for the Mutianyu section, the steepest and least crowded of the restored stretches, reached by cable car from the valley.'
      },
      {
        name: 'Temple of Heaven',
        day: 2,
        optional: false,
        image: img('c1kh5tx7qwy6hnwbctzcx5cotj9x_steptodown.com960820.jpg'),
        description: 'The round sacrificial halls and long raised walkway where Ming and Qing emperors prayed each year for a good harvest.'
      },
      {
        name: 'Tai chi lesson with a foot rub',
        day: 2,
        optional: false,
        image: img('vdwc1notawdvkuo6ep2r3wioo6o2_Downpic.cc-18460611.jpg'),
        description: 'A short guided tai chi session in the park, followed by a traditional Chinese foot massage to settle the legs after the wall.'
      },
      {
        name: 'Beijing city tour',
        day: 3,
        optional: false,
        image: img('umaofzvo200rocnjv74y8sqb28fv_steptodown.com944398.jpg'),
        description: 'A guided day across Tiananmen Square and the Imperial Palace, with the Capital Museum and the performing arts centre.'
      },
      {
        name: 'Hutong tricycle tour',
        day: 3,
        optional: false,
        image: img('wqhvqyurlepbs9n33c0sixqgj84i_steptodown.com684472.jpg'),
        description: 'A ride by cycle rickshaw through the grey brick hutong lanes, the old courtyard housing that survives behind the main roads.'
      }
    ],
    program: {
      name: 'Beijing',
      description: 'Three nights in the capital with the wall at Mutianyu, the Temple of Heaven, the Imperial Palace and the hutong lanes.',
      image: img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nanjing',
    dayLabel: 'Day 4',
    images: [
      img('83fzuorc5ipomwn2228j3q3z0k5e_Downpic.cc-image569184214.jpg'),
      img('9rosa45v5zlyindg3n1t4towa560_shutterstock_246196210.jpg'),
      img('hjvdd18dwrrkfqh5hyjbyf1qy0md_shutterstock_2299917035.jpg'),
      img('xhgc9a10q89566kee3xewg2tdxbu_shutterstock_245037472.jpg')
    ],
    dayImages: {
      4: [
        img('0lbql6vwblu4wmrdnkdqo4r7vezt_steptodown.com516103.jpg'),
        img('tg2ybo3y7sbv46ba9g0emrh7ysze_Purple%20Mountain.jpg'),
        img('h83cfp352uqovfg790yde1pp96kb_sun-yat-sen-mausoleum-788.jpg'),
        img('ns48do9ef07l0pcr74mb599qybio_images.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Beijing to Nanjing`,
      'Breakfast and check out of your Beijing hotel',
      'Station transfer and the fast train south to Nanjing',
      'Purple Mountain and the Sun Yat sen mausoleum',
      'Linggu temple before checking in for the night'
    ],
    accommodation: {
      name: 'Novotel Nanjing Central, Nanjing',
      description: '1 night · Breakfast · Standard room · 4★ · Central hotel close to the Xinjiekou shops',
      images: [
        img('jyuccaididaoivm6g4ffrhuh8mcb_534388460.jpg'),
        img('1hw12995ysz1nkgr5q8mjfb26pgr_96293903.jpg'),
        img('ec5hvr3xgyw163wc7gedkjlyvt05_47993715.jpg'),
        img('45czzmdmii6ig2825dwzcp6q0akf_47993890.jpg'),
        img('x5khcm1aaoux5mjzgutia5qr7arj_47993779.jpg'),
        img('axlzrsz0wd2t385d686susfm0dfs_534434227.jpg'),
        img('ofjdpvqxas0lw5gt5y7xufbtlmdi_534432541.jpg'),
        img('869aph1lgh3tjqg1krqb3zqyh9w5_47993775.jpg'),
        img('xpjf0u2orqf92gpf1su9ypqkbckj_534435357.jpg'),
        img('8uzf0zhnlttktec2j6qu89mdk806_47993898.jpg'),
        img('2xlrp3s6jvb7naujz4mr077zfryl_47993901.jpg'),
        img('ywh9j4c5fja1puirlllpo0o5j70h_534435435.jpg')
      ]
    },
    activities: [
      {
        name: 'Nanjing sightseeing tour',
        day: 4,
        optional: false,
        image: img('0lbql6vwblu4wmrdnkdqo4r7vezt_steptodown.com516103.jpg'),
        description: 'A guided afternoon on Purple Mountain with the Sun Yat sen mausoleum and the pine groves around Linggu temple.'
      }
    ],
    program: {
      name: 'Nanjing',
      description: 'One night in the old southern capital, with Purple Mountain, the Sun Yat sen mausoleum and Linggu temple.',
      image: img('83fzuorc5ipomwn2228j3q3z0k5e_Downpic.cc-image569184214.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Shanghai',
    subtitle: 'Shanghai → Suzhou and Tongli',
    dayLabel: 'Day 5 to 6',
    images: [
      img('grnx9kq6burr1h4scnrinmlxfgvf_steptodown.com454741.jpg'),
      img('v19uotilcju6y0dxe8ww3q1gi2wa_steptodown.com485303.jpg'),
      img('ys3axltpj9xw7tbzmi0peweamrfh_steptodown.com226374.jpg'),
      img('0t4lct3h28mljk1mdneg8sdhd3lo_steptodown.com655213.jpg')
    ],
    dayImages: {
      5: [
        img('kfqquvulmfacezguvjhvd623bewa_steptodown.com996519.jpg'),
        img('lm6msng5ci3z8u3zaktfb4abefxe_humble-administrator\'s-garden.jpg'),
        img('m0nmfd9qiyk2ozf6wq4ekggwqrcv_38cebaea-624d-43be-813f-4da28b254f43.jpeg'),
        img('vx9ubevas197szy6sca7zt3a78uc_steptodown.com546890.jpg')
      ],
      6: [
        img('yala0a96t4nlcakjdtqhtoo3dwcn_steptodown.com452069.jpg'),
        img('6e1vyicmp0dyi9somrdw7u2ahjxv_shanghai-skyline-via-wiki-commons-1000x625.jpg'),
        img('3v46yytijdj44xwmcu10tpsd0agd_1619599983_shutterstock_199457384.jpg'),
        img('nh0vh9hq59769blgd61aeyyyzqrf_6372134961060927162122177.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Suzhou, Tongli and on to Shanghai`,
      'Breakfast, then check out and head east',
      'Suzhou and the Humble Administrator\'s Garden',
      'The old shopfronts along Pingjiang road',
      'A boat ride on the water at Tongli',
      'Evening transfer on to Shanghai',
      `${DAY_MARK}Day 6 · Shanghai city tour`,
      'Breakfast, then a guided day in the city',
      'The Bund waterfront and the Pudong towers',
      'The restored lanes of Xintiandi and Tianzifang',
      'Afternoon free for the Yu garden'
    ],
    accommodation: {
      name: 'Novotel Shanghai Atlantis, Shanghai',
      description: '2 nights · Breakfast · Standard room · 4★ · Riverside hotel in Pudong with skyline views',
      images: [
        img('ntet07qrjutmkibf0l1x4i77fxf8_download%20(15).png'),
        img('7vmj3kfh89oqg810fkxdm9d3iusm_download%20(16).png'),
        img('33kltu92b7n03tellq292rd7kygn_download%20(25).png'),
        img('lvkei7zoy8x7ean15u91ia11wsez_download%20(23).png'),
        img('yhm5yr9c8e6x1bpkb0o5lm8ne557_download%20(24).png'),
        img('ufogbw9r6ohccvtvylsf62j1nsdy_download%20(22).png'),
        img('gt95wubhlvptu3fecsntmoq2pwl3_download%20(18).png'),
        img('barg4dy3asbldgbw2d7bg0zi4bxf_download%20(12).png'),
        img('lpifc82oqyy0kqt0wjwrkofdljx6_download%20(21).png'),
        img('6gqxo1pgmlyds3blmlc1bspr1rvq_download%20(14).png'),
        img('pjsy7tkhnwc0022qmcqvlxc7nokw_download%20(13).png'),
        img('gwba0nfpmkdiliv3ex088qzk1dzj_download%20(17).png'),
        img('q63nrbfoqpx1atzeblr6xsgrvd9e_download%20(19).png'),
        img('76tsdr0uhw568m5oncnt73osshnh_download%20(20).png')
      ]
    },
    activities: [
      {
        name: 'Suzhou sightseeing',
        day: 5,
        optional: false,
        image: img('kfqquvulmfacezguvjhvd623bewa_steptodown.com996519.jpg'),
        description: 'The Humble Administrator\'s Garden, the largest of the classical Suzhou gardens, and the old shopfronts along Pingjiang road.'
      },
      {
        name: 'Boat ride on Tongli lake',
        day: 5,
        optional: false,
        image: img('vx9ubevas197szy6sca7zt3a78uc_steptodown.com546890.jpg'),
        description: 'A slow boat across the water at Tongli, a canal town of stone bridges and whitewashed houses an hour from Shanghai.'
      },
      {
        name: 'Shanghai city tour',
        day: 6,
        optional: false,
        image: img('yala0a96t4nlcakjdtqhtoo3dwcn_steptodown.com452069.jpg'),
        description: 'A guided day along the Bund waterfront and across to Pudong, with the restored lanes of Xintiandi and Tianzifang.'
      }
    ],
    program: {
      name: 'Shanghai',
      description: 'Two nights on the river, reached through the gardens of Suzhou and the canals of Tongli.',
      image: img('grnx9kq6burr1h4scnrinmlxfgvf_steptodown.com454741.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Tokyo',
    dayLabel: 'Day 7 to 8',
    images: [
      img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg'),
      img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg'),
      img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg'),
      img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg')
    ],
    dayImages: {
      7: [
        img('s0s1j9k7ol91rdwi77ystaof4uzo_48126669936_084ba4982e_o.jpg'),
        img('7v0pb5achz6hdl8vmiejhfx5ocg9_1617352304_Shinjuku_Gyoen_National_Garden.jpg'),
        img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg'),
        img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg')
      ],
      8: [
        img('5wqz7q4pzkgn8680xw3guvutzp7e_mvwoj5u8k7hhzifgx990t6qtc6wp_dl.beatsnoop.com-1H73ZiAk5e.jpg'),
        img('ea2mjqt2vr1hf62yek9bq6q7or9i_28330748537_9b6c02ea22_o.jpg'),
        img('iele7cut7wosbp83440c5yyy4663_shutterstock_666196894.jpg'),
        img('l2ve6s75yoif0uquecbp9gh6poh6_Screenshot%202022-09-21%20164951.png')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Shanghai to Tokyo`,
      'Breakfast, then transfer to Pudong airport',
      'Optional: flight Shanghai to Tokyo, booked with us',
      'Arrival transfer from Haneda to your hotel',
      'Leisure time in the Shinjuku district',
      `${DAY_MARK}Day 8 · A full day across Tokyo`,
      'Breakfast, then a guided day across Tokyo',
      'Sensoji temple and the Nakamise stalls',
      'Meiji Jingu and the Shibuya crossing',
      'Akihabara and the sumo arena at Ryogoku'
    ],
    accommodation: {
      name: 'Shinagawa Prince Hotel, Tokyo, Tokyo',
      description: '2 nights · Breakfast · Standard room · 4★ · Large hotel beside Shinagawa station on the main rail lines',
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
        day: 8,
        optional: false,
        image: img('5wqz7q4pzkgn8680xw3guvutzp7e_mvwoj5u8k7hhzifgx990t6qtc6wp_dl.beatsnoop.com-1H73ZiAk5e.jpg'),
        description: 'A guided day with Sensoji temple and the Nakamise stalls, Meiji Jingu, the Shibuya crossing and the sumo arena at Ryogoku.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Two nights in the Japanese capital, with a full guided day and a free evening in the Shinjuku lanes.',
      image: img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg')
    }
  },
  {
    letter: 'E',
    name: 'Kawaguchiko',
    dayLabel: 'Day 9',
    images: [
      img('umdwrzq8bje4ul3l9d6neslo2goc_Downpic.cc-image352321058.jpg'),
      img('s4yb8ns99we4c7oysha6utlmeu8p_Downpic.cc-77228664.jpg'),
      img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg'),
      img('vqjfk14m6s6fxufma6bl6urcehak_gallery-2.jpg')
    ],
    dayImages: {
      9: [
        img('0flmci6lobrrvzv1z8lzot9ouaq2_dl.beatsnoop.com-hTVvJdmF54.jpg'),
        img('5fkvulgtcxm4n9tf8pkdfhiwsxy0_33774521860_72822b9eb5_b.jpg'),
        img('t08gkosrztcy1fetewf1466bxaho_IMG_4758.JPG'),
        img('46lgk4zzclyeky3tw0bcaa1885hf_8220256475_51efd6b7c9_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 9 · Mount Fuji and Lake Kawaguchi`,
      'Breakfast and check out, then west to Kawaguchiko',
      'Arakurayama Sengen park and the pagoda view',
      'A boat ride on Lake Kawaguchi',
      'Up to the fifth station on Mount Fuji'
    ],
    accommodation: {
      name: 'Fuji Kawaguchiko Resort, Kawaguchiko',
      description: '1 night · Breakfast · Standard room · 4★ · Lakeside resort with Mount Fuji across the water',
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
        name: 'Arakurayama Sengen Park',
        day: 9,
        optional: false,
        image: img('0flmci6lobrrvzv1z8lzot9ouaq2_dl.beatsnoop.com-hTVvJdmF54.jpg'),
        description: 'The hillside park above Fujiyoshida where the Chureito pagoda frames Mount Fuji, the view on most Japan postcards.'
      },
      {
        name: 'Boat ride on Lake Kawaguchi',
        day: 9,
        optional: false,
        image: img('t08gkosrztcy1fetewf1466bxaho_IMG_4758.JPG'),
        description: 'A short sailing on the lake with the mountain reflected in the water on a clear day and the wooded shoreline behind.'
      },
      {
        name: 'Mount Fuji fifth station',
        day: 9,
        optional: false,
        image: img('jgg97i6ufqyu6el963bbg2rmsvqm_dl.beatsnoop.com-TBrAWGcCpn.jpg'),
        description: 'The highest point reachable without climbing, at the tree line on the north face, with the crater rim above you.'
      }
    ],
    program: {
      name: 'Kawaguchiko',
      description: 'One night under Mount Fuji, with the pagoda viewpoint, a lake sailing and the fifth station on the mountain.',
      image: img('umdwrzq8bje4ul3l9d6neslo2goc_Downpic.cc-image352321058.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Kyoto',
    subtitle: 'Kyoto → Shiraito Falls and Nagakute',
    dayLabel: 'Day 10 to 11',
    images: [
      img('4n7evhhmduhudopnebsm8i746qrr_shutterstock_684786619.jpg'),
      img('yel59axderz9j2gzykadln4kfu4a_steptodown.com138482.jpg'),
      img('32cq1jpphovt2v5d1edofgz7qj4g_steptodown.com549476.jpg'),
      img('7byuq3qdajn087zowud1yv882w10_steptodown.com280375.jpg')
    ],
    dayImages: {
      10: [
        img('nlub5owigqr2atc27bulx12zej3k_steptodown.com528567.jpg'),
        img('dan2q7e7vjrf0k6kczdcihwe05dd_DSC3038.jpg'),
        img('41nytag72hucsxn8u02ez7e822l7_yamanashi-iyashino-sato-nenba-healing-village-107221.jpg'),
        img('27q1m58t51q15thoq4zsy54y4uj8_DSC2792.jpg')
      ],
      11: [
        img('z2suxomg46uu5rpx6bld0hv7596z_steptodown.com374017.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg'),
        img('baa8le7syqs54ubtdh5zb3m4yi4o_1920px-Tenryuji_Kyoto.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 10 · Shiraito Falls and the Toyota museum`,
      'Breakfast, then on through Iyashi no Sato Nenba',
      'Thatched farmhouses and the old water mill',
      'The wide curtain of the Shiraito falls',
      'The Toyota Automobile Museum before Kyoto',
      `${DAY_MARK}Day 11 · Kyoto sightseeing`,
      'Breakfast, then a guided day around Kyoto',
      'Kinkakuji and the torii rows at Fushimi Inari',
      'Tenryuji temple and the Togetsukyo bridge',
      'Gion in the evening light'
    ],
    accommodation: {
      name: 'Miyako Hotel Kyoto Hachijo, Kyoto',
      description: '2 nights · Breakfast · Standard room · 4★ · Comfortable hotel facing Kyoto station',
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
        day: 10,
        optional: false,
        image: img('nlub5owigqr2atc27bulx12zej3k_steptodown.com528567.jpg'),
        description: 'A rebuilt village of thatched farmhouses under Mount Fuji, with craft workshops and an old water mill still turning.'
      },
      {
        name: 'Shiraito Falls',
        day: 10,
        optional: false,
        image: img('lo7hprcg0900un1wgac84xi5h89c_steptodown.com624169.jpg'),
        description: 'A wide curtain of spring water falling from a rock face in threads, fed by snowmelt running off the slopes of Mount Fuji.'
      },
      {
        name: 'Toyota Automobile Museum',
        day: 10,
        optional: false,
        image: img('u32mhnlhc5izz6qeif30esxnxld4_steptodown.com605997.jpg'),
        description: 'Three floors of restored cars tracing the motor car from early European models through to the Japanese production years.'
      },
      {
        name: 'Kyoto sightseeing tour',
        day: 11,
        optional: false,
        image: img('z2suxomg46uu5rpx6bld0hv7596z_steptodown.com374017.jpg'),
        description: 'A guided day with the gold pavilion at Kinkakuji, the torii rows at Fushimi Inari, Tenryuji temple and the Gion lanes.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'Two nights in the old imperial city, reached through the thatched village at Nenba and the Shiraito falls.',
      image: img('4n7evhhmduhudopnebsm8i746qrr_shutterstock_684786619.jpg')
    }
  },
  {
    letter: 'G',
    name: 'Osaka',
    subtitle: 'Osaka → Nara',
    dayLabel: 'Day 12',
    images: [
      img('i9klbfl00zb48dsdbko8ioz88wzx_shutterstock_513091054.jpg'),
      img('kttil6ut49ym2i5xxgnx6cu72osn_shutterstock_630286787.jpg'),
      img('ptkkqebz4mj100bzruqlj5xbdczr_shutterstock_2268784351.jpg'),
      img('gtk8i9anl0fl06gh6jr9ac6b4g33_shutterstock_1789061315.jpg')
    ],
    dayImages: {
      12: [
        img('mizqt9y3zkfcfg6njj4jgby1eiiz_steptodown.com357843.jpg'),
        img('cfwx64ec41tyxxsgjl1oe42ycwzi_western-temple-kindo-gojuto-japan-horyuji-day-trip-from-osaka-kyoto-the-best-route-IMG_4458.jpg'),
        img('ouxvu6hx8lcp80t5cmykc4bh5iii_6mtphb82d7l7iw4fomzbko8vvayp_shutterstock_244958545.webp'),
        img('903g8t7ux4rl64xgs47c86xio0hp_hozenji-temple-01.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 12 · Nara and on to Osaka`,
      'Breakfast and check out, then south to Nara',
      'Todaiji and its great bronze buddha',
      'The old timber halls of Horyuji',
      'On to Osaka and the Hozenji lanes'
    ],
    accommodation: {
      name: 'Holiday Inn Express Osaka Midosuji, Osaka',
      description: '1 night · Breakfast · Standard room · 4★ · Modern hotel on Midosuji close to the Namba lanes',
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
        name: 'Nara sightseeing tour',
        day: 12,
        optional: false,
        image: img('mizqt9y3zkfcfg6njj4jgby1eiiz_steptodown.com357843.jpg'),
        description: 'Todaiji with its great bronze buddha and the old timber halls of Horyuji, among the oldest wooden buildings standing anywhere.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'One night in Osaka after a guided stop at Nara, with the Hozenji lanes a short walk from the hotel.',
      image: img('i9klbfl00zb48dsdbko8ioz88wzx_shutterstock_513091054.jpg')
    }
  },
  {
    letter: 'H',
    name: 'Okayama',
    subtitle: 'Okayama → Himeji',
    dayLabel: 'Day 13',
    images: [
      img('9gxo0w9zfmmbmjg8895gp4h3leqm_shutterstock_1966867324.jpg'),
      img('nperxppzyea8k9fcvudr94ss24x6_shutterstock_272327813.jpg'),
      img('yfbvuqj5t7yyjle11bzesj245xnj_shutterstock_1024764949%20(1).jpg'),
      img('5d4ac52c1c7pu5k4ycnr79ifpor5_shutterstock_2324290629.jpg')
    ],
    dayImages: {
      13: [
        img('eocnpiff2y4mvzqclz2d6y6lvs0z_Downpic.cc-95705250.jpg'),
        img('5ps893jtjebytutoq9v7lnrxf3y3_39146732395_f9873cc92a_o.jpg'),
        img('ar175k954lm899btnl65yiyi97d4_Downpic.cc-71522513.jpg'),
        img('t1l6994alcgc5dsalvrbemyrwja2_e89bcc7802d5a5f63eb6d0684b1ee014-895x600.png')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 13 · Himeji Castle and Korakuen`,
      'Breakfast, then west towards Okayama',
      'The white keep of Himeji castle',
      'Korakuen gardens beside the river',
      'Kibitsu Jinja and its long roofed corridor'
    ],
    accommodation: {
      name: 'Hotel Granvia Okayama, Okayama',
      description: '1 night · Breakfast · Standard room · 4★ · Station hotel a short walk from Korakuen',
      images: [
        img('69wazq552i9mnkadm5csmp94oad9_Hotel%20Granvia%20Okayama%206.jpg'),
        img('t2u7uxwpqlli9757cktscx5z79pf_Hotel%20Granvia%20Okayama%2015.jpg'),
        img('wrooj2poax6hwvdianvkjccj6phf_Hotel%20Granvia%20Okayama%204.jpg'),
        img('us7kxfzcs8v3r8nojly37qp1buxu_Hotel%20Granvia%20Okayama%208.jpg'),
        img('4sh4x6hgd3n9xv6o9r0pdcqy1ctr_Hotel%20Granvia%20Okayama%2013.jpg'),
        img('ltve649sa5jhpfy838gqny9bpvp4_Hotel%20Granvia%20Okayama%203.jpg'),
        img('w1ilw3hmcfq5glqwxmk3eplodpxf_Hotel%20Granvia%20Okayama%2011.jpg'),
        img('oja8nr4ifxjxpu2cntgcppe1ighm_Hotel%20Granvia%20Okayama%205.jpg'),
        img('v9hgrcvn1bdncxfffgkiwlrmrz7s_Hotel%20Granvia%20Okayama2.jpg'),
        img('w4vhro7cwg7hgtq10a7ns0lscclp_Hotel%20Granvia%20Okayama10.jpg'),
        img('nzfrn9m8lwh9jqyg6ddx4802psl5_Hotel%20Granvia%20Okayama%207.jpg'),
        img('h5kbha3hfqore9mnm5m49ig4age6_Hotel%20Granvia%20Okayama%201.jpg'),
        img('edxui5ng5siqbs0s9wh853wxcgha_Hotel%20Granvia%20Okayama%209.jpg')
      ]
    },
    activities: [
      {
        name: 'Himeji Castle',
        day: 13,
        optional: false,
        image: img('eocnpiff2y4mvzqclz2d6y6lvs0z_Downpic.cc-95705250.jpg'),
        description: 'The white keep above the town, the finest surviving Japanese castle and the only major one never destroyed by fire or war.'
      },
      {
        name: 'Korakuen gardens',
        day: 13,
        optional: false,
        image: img('ar175k954lm899btnl65yiyi97d4_Downpic.cc-71522513.jpg'),
        description: 'One of the three great gardens of Japan, laid out beside the river with wide lawns, tea houses and a borrowed castle view.'
      },
      {
        name: 'Kibitsu Jinja',
        day: 13,
        optional: false,
        image: img('83fzuorc5ipomwn2228j3q3z0k5e_Downpic.cc-image569184214.jpg'),
        description: 'A hillside shrine with a roofed corridor running almost four hundred metres down the slope between cedar trees.'
      }
    ],
    program: {
      name: 'Okayama',
      description: 'One night in Okayama with the white keep at Himeji, the Korakuen gardens and the long corridor at Kibitsu Jinja.',
      image: img('9gxo0w9zfmmbmjg8895gp4h3leqm_shutterstock_1966867324.jpg')
    }
  },
  {
    letter: 'I',
    name: 'Hiroshima',
    subtitle: 'Hiroshima → Kurashiki and Miyajima',
    dayLabel: 'Day 14 to 15',
    images: [
      img('73svf06vwzmwzz5c9z7jwb9v8vjw_shutterstock_1751063663.jpg'),
      img('62uzveq9j4kgn1dqm9wgyg6n0zg3_shutterstock_1443072128.jpg'),
      img('xrahfic90qj47tsgysqanrchcxhl_shutterstock_1269393457.jpg'),
      img('bphn1d1cyqbrowbqsvsas9azq6v4_shutterstock_252533968.jpg')
    ],
    dayImages: {
      14: [
        img('5ynvo4s2weyv9vw48a65xd5nvuzo_download%20-%202024-07-26T114742.039.jpeg'),
        img('abo79vxmj6d6rw9dpvayggkd54bb_5751_01.jpg'),
        img('6e8ebv2b0g3iufs16ftuhl3makvy_shutterstock_684786619.jpg'),
        img('ld680kik7gssbaqngshckijehcsm_hiroshima-hiroshima-peace-memorial-museum-128106.jpg')
      ],
      15: [
        img('73svf06vwzmwzz5c9z7jwb9v8vjw_shutterstock_1751063663.jpg'),
        img('iydw2l2uic40wgzusg1ovudevqjk_shutterstock_1514003927.jpg'),
        img('62uzveq9j4kgn1dqm9wgyg6n0zg3_shutterstock_1443072128.jpg'),
        img('xrahfic90qj47tsgysqanrchcxhl_shutterstock_1269393457.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 14 · Kurashiki, Hiroshima and Miyajima`,
      'Breakfast, then on via Kurashiki',
      'The canal quarter and the Ohara museum',
      'Peace Memorial Park and the Atomic Bomb Dome',
      'The floating gate of Itsukushima shrine',
      `${DAY_MARK}Day 15 · Departure from Hiroshima`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Hilton Hiroshima, Hiroshima',
      description: '1 night · Breakfast · Standard room · 4★ · City hotel a short walk from Peace Memorial Park',
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
        name: 'Hiroshima sightseeing tour',
        day: 14,
        optional: false,
        image: img('6e8ebv2b0g3iufs16ftuhl3makvy_shutterstock_684786619.jpg'),
        description: 'A guided walk through Peace Memorial Park, the museum and the Atomic Bomb Dome left standing as it was in 1945.'
      },
      {
        name: 'Itsukushima shrine',
        day: 14,
        optional: false,
        image: img('u42fkb6qr5ul80skszf65f3u35q1_Downpic.cc-image177727281.jpg'),
        description: 'The vermilion gate standing in the shallows off Miyajima island, one of the most photographed structures in Japan.'
      }
    ],
    program: {
      name: 'Hiroshima',
      description: 'A final night in Hiroshima, reached through the canal quarter at Kurashiki, with Peace Memorial Park and the floating gate.',
      image: img('73svf06vwzmwzz5c9z7jwb9v8vjw_shutterstock_1751063663.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-china-and-japan-wall-to-fuji',
  ctaHref: '/l/china/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of China and Japan: Great Wall to Mount Fuji',
  alt: 'Chureito pagoda with Mount Fuji behind it',
  days: '15 days / 14 nights',
  stations: '9 stops',
  transport: 'Group tour with private transfers, fast trains and guided touring',
  tag: 'Culture',
  tags: ['Culture', 'Group tour'],
  price: 337882,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Beijing', 'Nanjing', 'Shanghai', 'Tokyo', 'Kawaguchiko', 'Kyoto', 'Osaka', 'Okayama', 'Hiroshima'],
  stats: { days: 15, cities: 9, hotels: 9, activities: 23, transfers: 22 },
  gallery: heroGallery,
  services: [
    ['9 hotels', 'Accommodation'],
    ['23 experiences', 'Activities'],
    ['22 transfers', 'Transport'],
    ['14 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Mei',
    image: '/experts/riya.webp',
    role: 'China expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two countries in one run, with the Great Wall at the start and Mount Fuji in the middle. Nobody comes back wanting more.',
    quoteMore: 'Pack light for the Japan half. From Tokyo onwards you change hotel most nights and the group moves by train.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Fifteen days across China and Japan on a group tour: the Great Wall and the hutongs of Beijing, Nanjing and Suzhou, the Bund in Shanghai, then Tokyo, Mount Fuji, Kyoto, Nara, Himeji and Hiroshima.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 14 nights with daily breakfast across nine cities; travel insurance; private transfers and fast trains; Mutianyu Great Wall tickets; Temple of Heaven; a tai chi lesson with a foot rub; the Beijing city tour and a hutong tricycle ride; Nanjing sightseeing; Suzhou sightseeing and a Tongli lake boat ride; Shanghai city tour; Tokyo sightseeing; Arakurayama Sengen park; a Lake Kawaguchi boat ride; Mount Fuji fifth station; Iyashi no Sato Nenba; Shiraito falls; the Toyota Automobile Museum; Kyoto sightseeing; Nara sightseeing; Himeji castle; Korakuen gardens; Kibitsu Jinja; Hiroshima sightseeing; Itsukushima shrine.',
  intro2: 'Not included: international flights; the Shanghai to Tokyo internal flight; China and Japan visa fees; lunches and dinners; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Beijing (Arrival)', text: 'Arrival at Beijing Daxing and transfer to your hotel\nCheck in and the rest of the day free\nLeisure time along Wangfujing street\nOptional: the National Art Museum of China', hotel: 'Mercure Beijing Downtown', highlights: ['Arrival at Beijing Daxing and transfer to your hotel', 'Check in and the rest of the day free', 'Leisure time along Wangfujing street'] },
    { title: 'Day 2: Great Wall and Temple of Heaven (B)', text: 'Early breakfast, then north to Mutianyu\nThe cable car and the walk along the wall\nThe 798 art district in the afternoon\nThe Temple of Heaven and its round halls\nA tai chi lesson and a foot rub to finish', hotel: 'Mercure Beijing Downtown', highlights: ['Early breakfast, then north to Mutianyu', 'The cable car and the walk along the wall', 'The 798 art district in the afternoon'] },
    { title: 'Day 3: Imperial Palace and the hutongs (B)', text: 'Breakfast, then a guided day in the old centre\nTiananmen Square and the Imperial Palace courtyards\nThe Capital Museum and the performing arts centre\nA tricycle ride through the hutong lanes', hotel: 'Mercure Beijing Downtown', highlights: ['Breakfast, then a guided day in the old centre', 'Tiananmen Square and the Imperial Palace courtyards', 'The Capital Museum and the performing arts centre'] },
    { title: 'Day 4: Beijing to Nanjing (B)', text: 'Breakfast and check out of your Beijing hotel\nStation transfer and the fast train south to Nanjing\nPurple Mountain and the Sun Yat sen mausoleum\nLinggu temple before checking in for the night', hotel: 'Novotel Nanjing Central', highlights: ['Breakfast and check out of your Beijing hotel', 'Station transfer and the fast train south to Nanjing', 'Purple Mountain and the Sun Yat sen mausoleum'] },
    { title: 'Day 5: Suzhou, Tongli and on to Shanghai (B)', text: 'Breakfast, then check out and head east\nSuzhou and the Humble Administrator\'s Garden\nThe old shopfronts along Pingjiang road\nA boat ride on the water at Tongli\nEvening transfer on to Shanghai', hotel: 'Novotel Shanghai Atlantis', highlights: ['Breakfast, then check out and head east', 'Suzhou and the Humble Administrator\'s Garden', 'The old shopfronts along Pingjiang road'] },
    { title: 'Day 6: Shanghai city tour (B)', text: 'Breakfast, then a guided day in the city\nThe Bund waterfront and the Pudong towers\nThe restored lanes of Xintiandi and Tianzifang\nAfternoon free for the Yu garden', hotel: 'Novotel Shanghai Atlantis', highlights: ['Breakfast, then a guided day in the city', 'The Bund waterfront and the Pudong towers', 'The restored lanes of Xintiandi and Tianzifang'] },
    { title: 'Day 7: Shanghai to Tokyo (B)', text: 'Breakfast, then transfer to Pudong airport\nOptional: flight Shanghai to Tokyo, booked with us\nArrival transfer from Haneda to your hotel\nLeisure time in the Shinjuku district', hotel: 'Shinagawa Prince Hotel, Tokyo', highlights: ['Breakfast, then transfer to Pudong airport', 'Optional: flight Shanghai to Tokyo, booked with us', 'Arrival transfer from Haneda to your hotel'] },
    { title: 'Day 8: A full day across Tokyo (B)', text: 'Breakfast, then a guided day across Tokyo\nSensoji temple and the Nakamise stalls\nMeiji Jingu and the Shibuya crossing\nAkihabara and the sumo arena at Ryogoku', hotel: 'Shinagawa Prince Hotel, Tokyo', highlights: ['Breakfast, then a guided day across Tokyo', 'Sensoji temple and the Nakamise stalls', 'Meiji Jingu and the Shibuya crossing'] },
    { title: 'Day 9: Mount Fuji and Lake Kawaguchi (B)', text: 'Breakfast and check out, then west to Kawaguchiko\nArakurayama Sengen park and the pagoda view\nA boat ride on Lake Kawaguchi\nUp to the fifth station on Mount Fuji', hotel: 'Fuji Kawaguchiko Resort', highlights: ['Breakfast and check out, then west to Kawaguchiko', 'Arakurayama Sengen park and the pagoda view', 'A boat ride on Lake Kawaguchi'] },
    { title: 'Day 10: Shiraito Falls and the Toyota museum (B)', text: 'Breakfast, then on through Iyashi no Sato Nenba\nThatched farmhouses and the old water mill\nThe wide curtain of the Shiraito falls\nThe Toyota Automobile Museum before Kyoto', hotel: 'Miyako Hotel Kyoto Hachijo', highlights: ['Breakfast, then on through Iyashi no Sato Nenba', 'Thatched farmhouses and the old water mill', 'The wide curtain of the Shiraito falls'] },
    { title: 'Day 11: Kyoto sightseeing (B)', text: 'Breakfast, then a guided day around Kyoto\nKinkakuji and the torii rows at Fushimi Inari\nTenryuji temple and the Togetsukyo bridge\nGion in the evening light', hotel: 'Miyako Hotel Kyoto Hachijo', highlights: ['Breakfast, then a guided day around Kyoto', 'Kinkakuji and the torii rows at Fushimi Inari', 'Tenryuji temple and the Togetsukyo bridge'] },
    { title: 'Day 12: Nara and on to Osaka (B)', text: 'Breakfast and check out, then south to Nara\nTodaiji and its great bronze buddha\nThe old timber halls of Horyuji\nOn to Osaka and the Hozenji lanes', hotel: 'Holiday Inn Express Osaka Midosuji', highlights: ['Breakfast and check out, then south to Nara', 'Todaiji and its great bronze buddha', 'The old timber halls of Horyuji'] },
    { title: 'Day 13: Himeji Castle and Korakuen (B)', text: 'Breakfast, then west towards Okayama\nThe white keep of Himeji castle\nKorakuen gardens beside the river\nKibitsu Jinja and its long roofed corridor', hotel: 'Hotel Granvia Okayama', highlights: ['Breakfast, then west towards Okayama', 'The white keep of Himeji castle', 'Korakuen gardens beside the river'] },
    { title: 'Day 14: Kurashiki, Hiroshima and Miyajima (B)', text: 'Breakfast, then on via Kurashiki\nThe canal quarter and the Ohara museum\nPeace Memorial Park and the Atomic Bomb Dome\nThe floating gate of Itsukushima shrine', hotel: 'Hilton Hiroshima', highlights: ['Breakfast, then on via Kurashiki', 'The canal quarter and the Ohara museum', 'Peace Memorial Park and the Atomic Bomb Dome'] },
    { title: 'Day 15: Departure from Hiroshima (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; the Shanghai to Tokyo internal flight; China and Japan visa fees; lunches and dinners; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'China', href: '/asia/china' },
  { label: detail.title }
];

export const bestOfChinaAndJapanGrandTourBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfChinaAndJapanGrandTourProduct = {
  slug: detail.slug,
  places: ['Beijing', 'Nanjing', 'Shanghai', 'Tokyo', 'Kawaguchiko', 'Kyoto', 'Osaka', 'Okayama', 'Hiroshima'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 15,
  stops: 9,
  hotels: 9,
  cities: 9,
  activities: 23,
  transfers: 22,
  meals: 14,
  price: detail.price,
  images: cardImages
};
