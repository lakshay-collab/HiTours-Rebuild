// Chronicles of Japan Island Route. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
  img('po65tczkitxpxj3efvb2ofq18yw8_shutterstock_2395371427.jpg'),
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('rwht4ysuk6m51sfh64cy7uri0w9j_shutterstock_1764836006.jpg'),
  img('lmncb5fl0ouw8usdv7i2pp5ovnd1_shutterstock_774829150%20(1).jpg'),
  img('f4xtclyb43occot7k4kf89zt870u_shutterstock_2458718483.jpg'),
  img('h3macot4xadpbfjprm5mxxfegn9z_shutterstock_2445535391.jpg'),
  img('61izsuekzybkh86q2bvapmbmyrlt_shutterstock_355725083.jpg'),
  img('pra6w5yyjg0qkzotgxbbvppsbe55_shutterstock_2474030861.jpg'),
  img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('5wqz7q4pzkgn8680xw3guvutzp7e_mvwoj5u8k7hhzifgx990t6qtc6wp_dl.beatsnoop.com-1H73ZiAk5e.jpg'),
  img('ea2mjqt2vr1hf62yek9bq6q7or9i_28330748537_9b6c02ea22_o.jpg'),
  img('0flmci6lobrrvzv1z8lzot9ouaq2_dl.beatsnoop.com-hTVvJdmF54.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    dayLabel: 'Day 1 to 2',
    images: [
      img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
      img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg'),
      img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg'),
      img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('s0s1j9k7ol91rdwi77ystaof4uzo_48126669936_084ba4982e_o.jpg'),
        img('7v0pb5achz6hdl8vmiejhfx5ocg9_1617352304_Shinjuku_Gyoen_National_Garden.jpg'),
        img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
        img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg')
      ],
      2: [
        img('5wqz7q4pzkgn8680xw3guvutzp7e_mvwoj5u8k7hhzifgx990t6qtc6wp_dl.beatsnoop.com-1H73ZiAk5e.jpg'),
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
      'Optional: the Tokyo Metropolitan Building viewing decks, free of charge',
      `${DAY_MARK}Day 2 · Tokyo sightseeing`,
      'Breakfast, then a shared coach tour of the city',
      'Meiji shrine and the Imperial Palace gardens',
      'Asakusa and the Senso-ji temple lanes',
      'Evening free in Tokyo'
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
        image: img('5wqz7q4pzkgn8680xw3guvutzp7e_mvwoj5u8k7hhzifgx990t6qtc6wp_dl.beatsnoop.com-1H73ZiAk5e.jpg'),
        description: 'A shared coach day through Meiji shrine, the Imperial Palace gardens and the temple lanes of Asakusa.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Two nights by Shinagawa station, with a free first evening in Shinjuku and a guided city day after.',
      image: img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kawaguchiko',
    dayLabel: 'Day 3',
    images: [
      img('pra6w5yyjg0qkzotgxbbvppsbe55_shutterstock_2474030861.jpg'),
      img('po65tczkitxpxj3efvb2ofq18yw8_shutterstock_2395371427.jpg')
    ],
    dayImages: {
      3: [
        img('0flmci6lobrrvzv1z8lzot9ouaq2_dl.beatsnoop.com-hTVvJdmF54.jpg'),
        img('5fkvulgtcxm4n9tf8pkdfhiwsxy0_33774521860_72822b9eb5_b.jpg'),
        img('ttflfg1cdsovpctxsck8k1ac35xr_49075001941_d6e64c8a9c_o.jpg'),
        img('fsee7stcfhihyhq4g3ivgm2zzjdt_dl.beatsnoop.com-BsSurvi7Am.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Mount Fuji and Lake Kawaguchi`,
      'Breakfast and check out, then west to Kawaguchiko',
      'Arakurayama Sengen park and the Chureito pagoda steps',
      'A boat ride on Lake Kawaguchi',
      'Night at the lake below Mount Fuji'
    ],
    accommodation: {
      name: 'Fuji Kawaguchiko Resort, Kawaguchiko',
      description: '1 night · Breakfast · Standard room · 4★ · Lake resort hotel below Mount Fuji',
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
        image: img('0flmci6lobrrvzv1z8lzot9ouaq2_dl.beatsnoop.com-hTVvJdmF54.jpg'),
        description: 'The hill where the Chureito pagoda stands with Mount Fuji behind it, reached by a long flight of steps through the shrine grounds.'
      },
      {
        name: 'Boat ride on Lake Kawaguchi',
        day: 3,
        optional: false,
        image: img('fsee7stcfhihyhq4g3ivgm2zzjdt_dl.beatsnoop.com-BsSurvi7Am.jpg'),
        description: 'A short cruise on the lake, with the mountain across the water on a clear day.'
      }
    ],
    program: {
      name: 'Kawaguchiko',
      description: 'A night under Mount Fuji, with the Chureito pagoda hill and a boat ride on the lake.',
      image: img('pra6w5yyjg0qkzotgxbbvppsbe55_shutterstock_2474030861.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Kyoto',
    subtitle: 'Kyoto by way of Shiraito falls',
    dayLabel: 'Day 4 to 5',
    images: [
      img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
      img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
      img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg')
    ],
    dayImages: {
      4: [
        img('othpbsyz5mgb4pxnitgyivgk1fdm_I%20Village%204.jpg'),
        img('bmkakc99tn5wyztlkn7tezgwqxau_DSC2995.jpg'),
        img('k73pxade4g1plmzykf6p3dkbehwk_Shiraito%20Falls%205.jpg'),
        img('gog7u27a8dqiori63qdh7sl30kqu_caption.png')
      ],
      5: [
        img('11eb9od2kr67jnmh78b27618lxcz_Kyoto%203.jpg'),
        img('j8xcq76t3o64yxmui5m4kt22wejq_52980159201_640a74d15d_o.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Shiraito falls and on to Kyoto`,
      'Breakfast, then the thatched village at Iyashi no Sato Nenba',
      'The wide curtain of Shiraito waterfall',
      'The Toyota Automobile Museum in Nagoya',
      'On to Kyoto and check in',
      `${DAY_MARK}Day 5 · Kyoto sightseeing`,
      'Breakfast, then a guided day in Kyoto',
      'Kinkaku-ji, the golden pavilion, and Nijo castle',
      'The shrine gates of Fushimi Inari',
      'Free time in the Gion lanes'
    ],
    accommodation: {
      name: 'Miyako Hotel Kyoto Hachijo, Kyoto',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel on the south side of Kyoto station',
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
        name: 'Iyashi no Sato Nenba and Shiraito falls',
        day: 4,
        optional: false,
        image: img('othpbsyz5mgb4pxnitgyivgk1fdm_I%20Village%204.jpg'),
        description: 'A rebuilt thatched village on the lake shore, then the wide curtain of Shiraito waterfall on the way south.'
      },
      {
        name: 'Toyota Automobile Museum',
        day: 4,
        optional: false,
        image: img('pkq8ol4d4c8j0ljmwwiz7k32li8b_Toyota%20Museum%202.jpg'),
        description: 'Three floors of cars from the early days of motoring to the present, in Nagoya.'
      },
      {
        name: 'Kyoto sightseeing tour',
        day: 5,
        optional: false,
        image: img('11eb9od2kr67jnmh78b27618lxcz_Kyoto%203.jpg'),
        description: 'A guided day through Kinkaku-ji, Nijo castle and the shrine gates of Fushimi Inari.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'Two nights in the old capital, reached through a thatched lake village and Shiraito falls, with a guided day and an evening in Gion.',
      image: img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Osaka',
    subtitle: 'Osaka by way of Nara',
    dayLabel: 'Day 6',
    images: [
      img('ak7a5cwtaszfalvktkldmcm7rnm0_shutterstock_2321474899.jpg'),
      img('ug749uyawgi0crazlxtbrjwlx10y_shutterstock_281002256.jpg'),
      img('g01jqzigcq3a7lifmh3xti6bmutl_shutterstock_162338060.jpg'),
      img('rwht4ysuk6m51sfh64cy7uri0w9j_shutterstock_1764836006.jpg')
    ],
    dayImages: {
      6: [
        img('d46a4836yacd6s2m4cl4bmmifxdd_meofcsqxhvz4y1fzhd1fkr2w35id_dl.beatsnoop.com-eZoDKWY5IT.jpg'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('567g2huih098gbwk5sfi99kn57rj_1280px-Horyu-ji_National_Treasure_World_heritage_%E5%9B%BD%E5%AE%9D%E3%83%BB%E4%B8%96%E7%95%8C%E9%81%BA%E7%94%A3%E6%B3%95%E9%9A%86%E5%AF%BA85.jpg'),
        img('nozs79tjbgfixymgrh3voo9bhf1z_Osaka_Dotonbori_Ebisu_Bridge.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Nara and into Osaka`,
      'Breakfast and check out, then south by way of Nara',
      'Todai-ji and its great bronze Buddha',
      'The stone lanterns of Kasuga shrine and the deer park',
      'Check in at Osaka, evening free in Dotonbori'
    ],
    accommodation: {
      name: 'Holiday Inn Express Osaka City Centre Midosuji, Osaka',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel on Midosuji, in the middle of the city',
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
        day: 6,
        optional: false,
        image: img('d46a4836yacd6s2m4cl4bmmifxdd_meofcsqxhvz4y1fzhd1fkr2w35id_dl.beatsnoop.com-eZoDKWY5IT.jpg'),
        description: 'Todai-ji with its great bronze Buddha, the stone lanterns of Kasuga shrine and the deer that wander the park.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'A night in central Osaka, reached through Nara, with the evening free along the Dotonbori canal.',
      image: img('ak7a5cwtaszfalvktkldmcm7rnm0_shutterstock_2321474899.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Okayama',
    subtitle: 'Okayama by way of Himeji castle',
    dayLabel: 'Day 7',
    images: [
      img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg'),
      img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg'),
      img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg'),
      img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg')
    ],
    dayImages: {
      7: [
        img('d2276pjkxy6aauupgcw6ctzlzump_Downpic.cc-79115914.jpg'),
        img('5ps893jtjebytutoq9v7lnrxf3y3_39146732395_f9873cc92a_o.jpg'),
        img('1sjnyjeawtqsl1ov038e96syd7qh_Downpic.cc-image569184214.jpg'),
        img('lhmump9ykz9vx56zqfeb99s18p4y_49667304008_75532b9f86_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Himeji castle and Okayama`,
      'Breakfast and check out, then west to Himeji',
      'The white keep of Himeji castle',
      'Korakuen garden and Okayama castle',
      'Night at the station hotel in Okayama'
    ],
    accommodation: {
      name: 'Hotel Granvia Okayama, Okayama',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel at Okayama station',
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
        name: 'Himeji castle',
        day: 7,
        optional: false,
        image: img('d2276pjkxy6aauupgcw6ctzlzump_Downpic.cc-79115914.jpg'),
        description: 'The white heron castle, the finest surviving fortress in the country, with its maze of gates and its timber keep.'
      },
      {
        name: 'Okayama sightseeing tour',
        day: 7,
        optional: false,
        image: img('1sjnyjeawtqsl1ov038e96syd7qh_Downpic.cc-image569184214.jpg'),
        description: 'Korakuen, one of the three great gardens of Japan, and the black keep of Okayama castle beside it.'
      }
    ],
    program: {
      name: 'Okayama',
      description: 'A night at the station hotel, with Himeji castle on the way and Korakuen garden in the afternoon.',
      image: img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Hiroshima',
    subtitle: 'Hiroshima and Miyajima',
    dayLabel: 'Day 8',
    images: [
      img('xrahfic90qj47tsgysqanrchcxhl_shutterstock_1269393457.jpg'),
      img('bphn1d1cyqbrowbqsvsas9azq6v4_shutterstock_252533968.jpg'),
      img('c9ok8ge217o8e2npis737wjs3zbi_shutterstock_1220336509%20(2).jpg'),
      img('xetrn73mv4uqd247nxnoobi5fxsz_shutterstock_1906828666%20(1).jpg')
    ],
    dayImages: {
      8: [
        img('a94lcvc88zl2rjbowh4qd0fibh55_Downpic.cc-image551504803.jpg'),
        img('5ynvo4s2weyv9vw48a65xd5nvuzo_download%20-%202024-07-26T114742.039.jpeg'),
        img('fs5q0k6wgagplran4rorbchmegjz_20220111_141543_47ef032e_w1920.jpg'),
        img('abo79vxmj6d6rw9dpvayggkd54bb_5751_01.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Kurashiki, Hiroshima and Miyajima`,
      'Breakfast, then the canal quarter of Kurashiki',
      'A walking tour of the Hiroshima peace park and museum',
      'The ferry to Miyajima and Itsukushima shrine',
      'Night in Hiroshima'
    ],
    accommodation: {
      name: 'Hilton Hiroshima, Hiroshima',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel in the city centre',
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
        image: img('a94lcvc88zl2rjbowh4qd0fibh55_Downpic.cc-image551504803.jpg'),
        description: 'Free time in the white walled merchant quarter of Kurashiki, where willow trees lean over a stone lined canal.'
      },
      {
        name: 'Hiroshima walking tour',
        day: 8,
        optional: false,
        image: img('e8towhc9u5dsin0ywjclplo20gcg_Downpic.cc-image225877652.jpg'),
        description: 'The peace park, the dome left standing after 1945 and the memorial museum, on foot with a guide.'
      },
      {
        name: 'Itsukushima shrine at Miyajima',
        day: 8,
        optional: false,
        image: img('nnwmf617uxlax8jdy13lv964vert_Downpic.cc-51656929.jpg'),
        description: 'The ferry across to Miyajima and the vermilion gate that stands in the water in front of the shrine.'
      }
    ],
    program: {
      name: 'Hiroshima',
      description: 'A full day through Kurashiki, the peace park and the island shrine at Miyajima, with a night in the city.',
      image: img('xrahfic90qj47tsgysqanrchcxhl_shutterstock_1269393457.jpg')
    }
  },
  {
    letter: 'G',
    name: 'Matsuyama',
    dayLabel: 'Day 9',
    images: [
      img('f4xtclyb43occot7k4kf89zt870u_shutterstock_2458718483.jpg')
    ],
    dayImages: {
      9: [
        img('80gjmdgezvdmhd519twqgdplejus_8.jpg'),
        img('howq6lgftr4zl60ptlz9y3ndxdv4_Matsuyama_castle(Iyo)11.jpg'),
        img('k9xgadzkhsrfj20hm4fj3fhokzgi_Downpic.cc-image350958352.jpg'),
        img('89h1x7ufzkua7336t9c9z6vnoam4_5503_11.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 9 · Ferry to Matsuyama`,
      'Breakfast and check out, then the boat to Shikoku',
      'A cable car up to Matsuyama castle',
      'Ishite-ji, a temple on the Shikoku pilgrimage',
      'Night in Matsuyama'
    ],
    accommodation: {
      name: 'ANA Crowne Plaza Matsuyama, Matsuyama',
      description: '1 night · Breakfast · Standard room · 3★ · Comfortable hotel in the middle of Matsuyama',
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
        name: 'Matsuyama castle with the cable car',
        day: 9,
        optional: false,
        image: img('80gjmdgezvdmhd519twqgdplejus_8.jpg'),
        description: 'A cable car up the hill to one of the twelve original castle keeps left in the country, with the Inland Sea below.'
      },
      {
        name: 'Ishite-ji temple',
        day: 9,
        optional: false,
        image: img('k9xgadzkhsrfj20hm4fj3fhokzgi_Downpic.cc-image350958352.jpg'),
        description: 'One of the eighty eight temples on the Shikoku pilgrimage, with its old gate and pilgrims in white.'
      }
    ],
    program: {
      name: 'Matsuyama',
      description: 'A ferry across the Inland Sea to Shikoku, then the castle by cable car and a pilgrimage temple.',
      image: img('f4xtclyb43occot7k4kf89zt870u_shutterstock_2458718483.jpg')
    }
  },
  {
    letter: 'H',
    name: 'Kobe',
    subtitle: 'Kobe by way of Kotohira and Naruto',
    dayLabel: 'Day 10 to 11',
    images: [
      img('h3macot4xadpbfjprm5mxxfegn9z_shutterstock_2445535391.jpg'),
      img('8uuox865tub290elo74ceud875pg_shutterstock_2394438103.jpg')
    ],
    dayImages: {
      10: [
        img('l8qhrjvak868hqzvvatv2mmta7je_Downpic.cc-image554519627.jpg'),
        img('pj27lkbds0vag55377f9t0kapbdo_xgNHQvFDuD6wHTYxvznjHqa4jC1H2OnJqnDJAScY__1597_1065.png'),
        img('niw86i1a8r1u1szdy86zzg506wbs_7802055432_10eee8a1e2_o.jpg'),
        img('duxfuprgejj3yh3v9ht8biirrbhl_27331245833_6ff269312b_o.jpg')
      ],
      11: [
        img('iqh26linzs09lrbxfxw8mp3ms42r_Downpic.cc-image260430661.jpg'),
        img('0d9yh3vrgei529q2mrevv4k3kcvl_bosai_center_6.jpg'),
        img('h3macot4xadpbfjprm5mxxfegn9z_shutterstock_2445535391.jpg'),
        img('8uuox865tub290elo74ceud875pg_shutterstock_2394438103.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 10 · Kotohira, Naruto and Kobe`,
      'Breakfast, then north towards Kobe',
      'Kotohira shrine and the pines of Ritsurin garden',
      'The whirlpools under the Naruto bridge',
      'Check in on the harbour pier at Kobe',
      `${DAY_MARK}Day 11 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'The Kobe earthquake memorial museum',
      'Transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'Kobe Meriken Park Oriental Hotel, Kobe',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel on the harbour pier at Meriken park',
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
        name: 'Kotohira shrine, Ritsurin garden and the Naruto bridge',
        day: 10,
        optional: false,
        image: img('l8qhrjvak868hqzvvatv2mmta7je_Downpic.cc-image554519627.jpg'),
        description: 'The hillside shrine at Kotohira, the pine garden of Ritsurin and the whirlpools under the Naruto bridge on the way to Kobe.'
      },
      {
        name: 'Kobe earthquake memorial museum',
        day: 11,
        optional: false,
        image: img('iqh26linzs09lrbxfxw8mp3ms42r_Downpic.cc-image260430661.jpg'),
        description: 'The museum built after the 1995 earthquake, which recreates the morning it struck and how the city was rebuilt.'
      }
    ],
    program: {
      name: 'Kobe',
      description: 'A night on the harbour pier, reached through Kotohira and the Naruto whirlpools, with the earthquake museum before departure.',
      image: img('h3macot4xadpbfjprm5mxxfegn9z_shutterstock_2445535391.jpg')
    }
  }
];

const detail = {
  slug: 'chronicles-of-japan-island-route',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Chronicles of Japan Island Route',
  alt: 'Itsukushima shrine gate in the water at Miyajima, Japan',
  days: '11 days / 10 nights',
  stations: '8 stops',
  transport: 'Bullet trains, a ferry crossing and guided sightseeing',
  tag: 'Grand tour',
  tags: ['Culture', 'Grand tour'],
  price: 283113,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Kawaguchiko', 'Kyoto', 'Nara', 'Osaka', 'Okayama', 'Hiroshima', 'Matsuyama', 'Kobe'],
  stats: { days: 11, cities: 8, hotels: 8, activities: 14, transfers: 20 },
  gallery: heroGallery,
  services: [
    ['8 hotels', 'Accommodation'],
    ['14 experiences', 'Activities'],
    ['20 transfers', 'Transport'],
    ['10 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'This is the long way through Japan, down the Inland Sea and across to Shikoku, where very few visitors go.',
    quoteMore: 'Stay on Miyajima until the light goes if you can. The gate lit at dusk with the day crowds gone is the better version of that photograph.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eleven days from Tokyo down the Inland Sea and across to Shikoku: Mount Fuji and Lake Kawaguchi, Kyoto and Nara, Himeji castle, Korakuen garden, the Hiroshima peace park, the island shrine at Miyajima, Matsuyama castle and the Naruto whirlpools before Kobe.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 10 nights with daily breakfast; bullet trains and the ferry to Shikoku; private airport transfers; Tokyo sightseeing tour; Arakurayama Sengen park and a Lake Kawaguchi boat ride; Iyashi no Sato Nenba, Shiraito falls and the Toyota Automobile Museum; Kyoto sightseeing tour; Nara sightseeing tour; Himeji castle; Okayama sightseeing tour; Kurashiki, Hiroshima walking tour and Itsukushima shrine; Matsuyama castle with the cable car and Ishite-ji; Kotohira, Ritsurin and the Naruto bridge; Kobe earthquake memorial museum.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in beside Shinagawa station\nFree time in the Shinjuku district\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'Shinagawa Prince Hotel', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in beside Shinagawa station', 'Free time in the Shinjuku district'] },
    { title: 'Day 2: Tokyo sightseeing (B)', text: 'Breakfast, then a shared coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in Tokyo', hotel: 'Shinagawa Prince Hotel', highlights: ['Breakfast, then a shared coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Mount Fuji and Lake Kawaguchi (B)', text: 'Breakfast and check out, then west to Kawaguchiko\nArakurayama Sengen park and the Chureito pagoda steps\nA boat ride on Lake Kawaguchi\nNight at the lake below Mount Fuji', hotel: 'Fuji Kawaguchiko Resort', highlights: ['Breakfast and check out, then west to Kawaguchiko', 'Arakurayama Sengen park and the Chureito pagoda steps', 'A boat ride on Lake Kawaguchi'] },
    { title: 'Day 4: Shiraito falls and on to Kyoto (B)', text: 'Breakfast, then the thatched village at Iyashi no Sato Nenba\nThe wide curtain of Shiraito waterfall\nThe Toyota Automobile Museum in Nagoya\nOn to Kyoto and check in', hotel: 'Miyako Hotel Kyoto Hachijo', highlights: ['Breakfast, then the thatched village at Iyashi no Sato Nenba', 'The wide curtain of Shiraito waterfall', 'The Toyota Automobile Museum in Nagoya'] },
    { title: 'Day 5: Kyoto sightseeing (B)', text: 'Breakfast, then a guided day in Kyoto\nKinkaku-ji, the golden pavilion, and Nijo castle\nThe shrine gates of Fushimi Inari\nFree time in the Gion lanes', hotel: 'Miyako Hotel Kyoto Hachijo', highlights: ['Breakfast, then a guided day in Kyoto', 'Kinkaku-ji, the golden pavilion, and Nijo castle', 'The shrine gates of Fushimi Inari'] },
    { title: 'Day 6: Nara and into Osaka (B)', text: 'Breakfast and check out, then south by way of Nara\nTodai-ji and its great bronze Buddha\nThe stone lanterns of Kasuga shrine and the deer park\nCheck in at Osaka, evening free in Dotonbori', hotel: 'Holiday Inn Express Osaka City Centre Midosuji', highlights: ['Breakfast and check out, then south by way of Nara', 'Todai-ji and its great bronze Buddha', 'The stone lanterns of Kasuga shrine and the deer park'] },
    { title: 'Day 7: Himeji castle and Okayama (B)', text: 'Breakfast and check out, then west to Himeji\nThe white keep of Himeji castle\nKorakuen garden and Okayama castle\nNight at the station hotel in Okayama', hotel: 'Hotel Granvia Okayama', highlights: ['Breakfast and check out, then west to Himeji', 'The white keep of Himeji castle', 'Korakuen garden and Okayama castle'] },
    { title: 'Day 8: Kurashiki, Hiroshima and Miyajima (B)', text: 'Breakfast, then the canal quarter of Kurashiki\nA walking tour of the Hiroshima peace park and museum\nThe ferry to Miyajima and Itsukushima shrine\nNight in Hiroshima', hotel: 'Hilton Hiroshima', highlights: ['Breakfast, then the canal quarter of Kurashiki', 'A walking tour of the Hiroshima peace park and museum', 'The ferry to Miyajima and Itsukushima shrine'] },
    { title: 'Day 9: Ferry to Matsuyama (B)', text: 'Breakfast and check out, then the boat to Shikoku\nA cable car up to Matsuyama castle\nIshite-ji, a temple on the Shikoku pilgrimage\nNight in Matsuyama', hotel: 'ANA Crowne Plaza Matsuyama', highlights: ['Breakfast and check out, then the boat to Shikoku', 'A cable car up to Matsuyama castle', 'Ishite-ji, a temple on the Shikoku pilgrimage'] },
    { title: 'Day 10: Kotohira, Naruto and Kobe (B)', text: 'Breakfast, then north towards Kobe\nKotohira shrine and the pines of Ritsurin garden\nThe whirlpools under the Naruto bridge\nCheck in on the harbour pier at Kobe', hotel: 'Kobe Meriken Park Oriental Hotel', highlights: ['Breakfast, then north towards Kobe', 'Kotohira shrine and the pines of Ritsurin garden', 'The whirlpools under the Naruto bridge'] },
    { title: 'Day 11: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nThe Kobe earthquake memorial museum\nTransfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'The Kobe earthquake memorial museum', 'Transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const chroniclesOfJapanIslandRouteBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const chroniclesOfJapanIslandRouteProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Kawaguchiko', 'Kyoto', 'Nara', 'Osaka', 'Okayama', 'Hiroshima', 'Matsuyama', 'Kobe'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 11,
  stops: 8,
  hotels: 8,
  cities: 8,
  activities: 14,
  transfers: 20,
  meals: 10,
  price: detail.price,
  images: cardImages
};
