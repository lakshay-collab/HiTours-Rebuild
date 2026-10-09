// Island Trails of Phuket, Koh Samui and Krabi. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
  img('2zpq4fa4vvvgrj3tzt28iw9j0squ_shutterstock_2324766599%20(1).jpg'),
  img('85coxuo6jf2r4e35epvg592l0gn6_shutterstock_2172918973-min.jpg'),
  img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg'),
  img('ezxz70swo9zrybv8o8pus5c6klaf_shutterstock_2090520271.jpg'),
  img('g00n2o6s2013n9ufu4d5m073o5fr_shutterstock_658385155-min%20(1).jpg'),
  img('wgw28loe37wumwa59avtvzp7gcn4_shutterstock_2253884321.jpg'),
  img('zfufmlme2f3a44qw91thxjln52wn_shutterstock_1797497632.jpg'),
  img('xf4ja2z7pa5m0rtqxup6gr50qyj9_shutterstock_2172676377-min.jpg'),
  img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
  img('2zpq4fa4vvvgrj3tzt28iw9j0squ_shutterstock_2324766599%20(1).jpg'),
  img('85coxuo6jf2r4e35epvg592l0gn6_shutterstock_2172918973-min.jpg'),
  img('ezxz70swo9zrybv8o8pus5c6klaf_shutterstock_2090520271.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Phuket',
    dayLabel: 'Day 1 to 2',
    images: [
      img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
      img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg'),
      img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
      img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('lknez6qnnfbvw2yujulecml5egsj_1579855096_shutterstock_1265137084.jpg'),
        img('495y5x6h2qo8ln8v8etzufhkt5h0_shutterstock_1283102005.jpg'),
        img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
        img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg')
      ],
      2: [
        img('j5iz6cbc7vjse71m8ejmp1sio2r1_Downpic.cc-image609968634.jpg'),
        img('1b4sao1hyn7r4ze8qhxenux6x2p1_download.jpg'),
        img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
        img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuket`,
      'Arrival at Phuket International Airport and private sedan transfer to the Andakira',
      'Check in near Patong and keep the first day completely free',
      'Optional: Bangla Road after dark or the shophouse streets of Old Phuket Town',
      `${DAY_MARK}Day 2 · Phi Phi island hopping`,
      'Breakfast, then shared transfer down to Tonsai pier',
      'Long tail boat transfer around the Phi Phi islands through the morning',
      'Island fees are covered, so every swimming stop is already paid for',
      'Return shared transfer to your Phuket hotel in the afternoon'
    ],
    accommodation: {
      name: 'Andakira Hotel, Phuket',
      description: '2 nights · Breakfast included · Super Deluxe room · 4★ · Andakira, a short walk from Patong beach',
      images: [
        img('yod47t4sxsgxrzt46hiyl0uibk6y_gallery-01.png'),
        img('9oyrsjeswlekhvob089lv4r2fqfv_gallery-05.png'),
        img('phx8rroxwzbliqnkl3q2aq6q3aoa_gallery-13.png'),
        img('fil97ssj0smwve3pyic25k9owwlp_gallery-04.png'),
        img('5ot626v7mf6lpkaeqxkqgdchgwik_gallery-06.png'),
        img('qq7ioh0k5wb8o0zse40tn7j9ztsw_Deluxe%20room%20(4).jpg'),
        img('sui8u43reumssf639hfbm0qt5yhk_Deluxe%20room%20(5).jpg'),
        img('42fana07uuum011bifkm2rlskn6z_Deluxe%20Pool%20Access%20Room%20(3).jpg'),
        img('7a0mfrtg98jjtj9z7w2o8lvtrhui_Deluxe%20room%20(2).jpg'),
        img('fqsbqmzg68vwsjqzoj4a5whdcb8f_Deluxe%20Pool%20Access%20Room%20(10).jpg'),
        img('6jmznvyjqctcjh7vr71eoyxd31jl_Deluxe%20room%20(1).jpg'),
        img('dw7njt147cqsgk2guafjlba35bv2_Grand%20Deluxe%20(8).jpg'),
        img('cbdc25oyeube6a1qu2wka1p2woiw_Deluxe%20tripple%20(2).jpg'),
        img('f9u0m6gxpy4sycsrj6gcjw46px0c_Deluxe%20tripple%20(1).jpg'),
        img('ea5gd2hwtj0fsjsq3f7w7eit13fv_Grand%20Deluxe%20(9).jpg')
      ]
    },
    activities: [
      {
        name: 'Phi Phi Island Hopping by Long Tail Boat',
        day: 2,
        optional: false,
        image: img('j5iz6cbc7vjse71m8ejmp1sio2r1_Downpic.cc-image609968634.jpg'),
        description: 'A morning weaving between the Phi Phi islands by long tail boat, with swim and snorkel stops and island fees included.'
      },
      {
        name: 'Bangla Road After Dark',
        day: 1,
        optional: true,
        image: img('lknez6qnnfbvw2yujulecml5egsj_1579855096_shutterstock_1265137084.jpg'),
        description: 'Patong\'s night strip, closed to traffic after dark and lined with bars, street food and live music.'
      },
      {
        name: 'Old Phuket Town',
        day: 1,
        optional: true,
        image: img('495y5x6h2qo8ln8v8etzufhkt5h0_shutterstock_1283102005.jpg'),
        description: 'Painted Sino Portuguese shophouses, coffee roasters and small galleries along Thalang and Dibuk roads.'
      }
    ],
    program: {
      name: 'Patong base with island hopping',
      description: 'Two nights in Patong with a long tail boat morning around the Phi Phi islands and island fees already covered.',
      image: img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Koh Samui',
    dayLabel: 'Day 3 to 4',
    images: [
      img('0h1vvi2l2j5ukteevblc9rifyj3n_shutterstock_406440082.jpg'),
      img('2zpq4fa4vvvgrj3tzt28iw9j0squ_shutterstock_2324766599%20(1).jpg'),
      img('iw2v7abv38kapz6210mxe2whu5rp_shutterstock_1797497632.jpg'),
      img('wzmar6v3olzlqldy34o8thmatj9a_shutterstock_589505762.jpg')
    ],
    dayImages: {
      3: [
        img('pulcw3plc4vkzayaewh5pfz8vroh_Moon%20Fest-6-1.jpeg'),
        img('0h1vvi2l2j5ukteevblc9rifyj3n_shutterstock_406440082.jpg'),
        img('2zpq4fa4vvvgrj3tzt28iw9j0squ_shutterstock_2324766599%20(1).jpg'),
        img('iw2v7abv38kapz6210mxe2whu5rp_shutterstock_1797497632.jpg')
      ],
      4: [
        img('l3rikmovzwj4yzrhpnbsmyvw0hem_t7dvxph7quiqgry3qrmv4dy6b55n_shutterstock_669615415.webp'),
        img('4u78exb5sdewjroajro9i91ly52d_g8ym1wv3iaq9tbbmmw6mqguhttkc_5B3E943D-5BAD-4DAC-9801-1EF82C44139F.jpg'),
        img('wo6hk3nf2q30adtbbjsmecbat0r6_b5wxwiqeii0sltdc699x0m8wo860_1554924475_2016-06-13.webp'),
        img('0h1vvi2l2j5ukteevblc9rifyj3n_shutterstock_406440082.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · On to Koh Samui and the Full Moon Party`,
      'Breakfast, check out and private transfer to Phuket airport',
      'Optional: flight from Phuket to Koh Samui, booked separately and not included',
      'Private transfer from Samui airport to Baan Laimai on Chaweng beach',
      'Lunch and dinner at the resort are included on both Samui nights',
      'Evening speedboat transfer across to Koh Phangan for the Full Moon Party',
      `${DAY_MARK}Day 4 · Koh Samui at leisure`,
      'Speedboat transfer back to Samui in the early hours, then sleep in',
      'Breakfast, lunch and dinner at the resort with nothing else booked',
      'Chaweng beach is right outside, with loungers and shade all day',
      'Optional: a fire dance show on the sand or the stalls at The Wharf Samui'
    ],
    accommodation: {
      name: 'Baan Laimai Beach Resort & Spa, Koh Samui',
      description: '2 nights · Breakfast, lunch and dinner · Super Deluxe room · 4★ · Baan Laimai, directly on Chaweng beach',
      images: [
        img('b7kapeapa9xr7vqq90tfi3fsmnxq_180a1a8d_z.jpg'),
        img('j0avfn7fhr9t6t3ak3ir0smze8yq_961bd69b_z.jpg'),
        img('tmveblm8wss3lw5u47k2fvab57gd_feba0511_z.jpg'),
        img('v3doielfucrcldcv2l3sfb0hvipr_7a4d74e6_z.jpg'),
        img('oaiuw5n2jsxhqixrp4uju996oyzs_688f6c46_z.jpg'),
        img('il7o22md1g0slqnbv3y7qyze0um9_8352eb49_z.jpg'),
        img('hc5a0bou1doufflmb9snkvk4nx8o_8644dc06_z.jpg'),
        img('36xdvs66770fmmnn4o8vjct43bma_49c0218c_z.jpg'),
        img('j1y0w2xnu6i2not3trjw5ub12799_85b20e79_z.jpg'),
        img('n1j0ssbo2j5bilchhue4gzsbzsq8_b37c6133_z.jpg'),
        img('bhifu1l6htvtkex0lq0yxm7z3v63_b248559a_z.jpg'),
        img('xpft06l2f7sry67fkmjgkg66qtc9_ab97b6f9_z.jpg'),
        img('jgzyd1nl14stp99ueqtc45v4477m_82843927_z.jpg'),
        img('aacg4svbgw9o9cd4k66d5uv5vbnv_5d8fa7a2_z.jpg'),
        img('prcq7tqcl4p551i03rps6xgub4au_968599e9_z.jpg'),
        img('gres9w3h320gjny3hhzextupzwr0_5f31673d_z.jpg'),
        img('etcf3ca6le8l3v38gkn5tnyuf8rp_8cde7d34_z.jpg'),
        img('09nu3k4ih4kx83wld55vpeuruc6v_5fbb84be_z.jpg'),
        img('4fqr6t3su1fm3v3gfdjza5qvdg7h_a5f0af7b_z.jpg'),
        img('6s6zyqopt80uaf9rqmeqi4pq5r2b_6c049069_z.jpg'),
        img('5cecp28t6kgzhg8hgm6cjbsrbabq_dc398d51_z.jpg'),
        img('jsmgde1n1ze84scnvpfkwm8cn2sy_d974c868_z.jpg'),
        img('ly50hhx0y3iyu1drar2yd8gmxo25_773a84de_z.jpg'),
        img('zh5t8r1mqx9ofxdn6jdwdrhf6t49_c32f7858_z.jpg'),
        img('xecjwhfea8mgt1zxmgcbb9x35mxk_bb805824_z.jpg'),
        img('25mrrfekq1rj3jule4lk8v18eq3l_2977cc49_z.jpg'),
        img('zx4zdkpsz1hxbjzo8hffjaj3ti8d_4875e290_z.jpg'),
        img('9x631009jianwzfwnhe2djrrxg7e_ca7cff23_z.jpg'),
        img('t4cr5aodkx92ocuvcvxsgn0hsbzm_232ebda3_z.jpg'),
        img('it0jtba72vx7svw4w3kkhinzvatk_a6c95658_z.jpg'),
        img('wkxu0rof5f00tx23xe50ncarcwui_3be11faa_z.jpg'),
        img('6im8kyrpkzg94hz6y49knmiycj05_b2282ae8_z.jpg'),
        img('b14bjek914fzwwq4c0r7h41ejxbn_904eb1fd_z.jpg'),
        img('vvxrtmksiz35z5cc3bw9ll2pxfmk_d25e37c7_z.jpg'),
        img('v287mf4czkne2t7e4zwb21dxicjc_cdfecad0_z.jpg'),
        img('n8w4g9zl0mc37ae1on586vlvw3wb_64e1faf1_z.jpg'),
        img('yqpbebieqznnlk7cmofptykwl6xu_80dc4471_z.jpg'),
        img('zafnol71kjgppvnx952l1dqgweo5_f886a3c3_z.jpg'),
        img('7vhb7q5vyveu25xb18kuz1jl36w4_bc4b9581_z.jpg'),
        img('ftcgyr8o2dc36nmi9uvl5xty9ibj_d6b87e6e_z.jpg'),
        img('q3cdxmjspooi8ad3dahtonhdgrgi_840c3174_z.jpg'),
        img('iohb0c3zd3fpshiwiiu0c10njuli_0a625b81_z.jpg'),
        img('0q6msx1lf5g2r6zglz6zr0o7kher_c8737295_z.jpg'),
        img('j0oceq0xn6zddcc4ua7qhjhk9504_a7757ae8_z.jpg'),
        img('kuxxngzaxgtgcb7yu6soptchc9uf_ea0c2c32_z.jpg'),
        img('x83dedkakoblpn1xt7v34f416axp_bbe50b40_z.jpg'),
        img('wfcrmvtjc9hxjes613q4dwjuz3ve_a5e745f8_z.jpg'),
        img('tpxyjk0nhrm83fx4r8859wbfiz0i_d42e20b9_z.jpg'),
        img('kwil7mtpsxyekar37gdcndy2028t_38304e4e_z.jpg'),
        img('l5mmmvcfgqj5miz0kgl92pscluex_b3e1341f_z.jpg'),
        img('rlee2bqb194qnnh5w8j19gwqcvuw_26858ceb_z.jpg'),
        img('83zxwj7waor2ab7tctlkz92ut17u_86ff4670_z.jpg'),
        img('fj45lfp2qwj8dvvvg3xwzsdzmlyy_8ae17597_z.jpg'),
        img('qry2k5pebj4sk789uzohnmlz6x2a_840c17bf_z.jpg'),
        img('ams8wcpl98imv1ghml912x8j0hct_e4a77777_z.jpg'),
        img('5mo7r1n5i9heip91ub0jvot87k31_5df31a13_z.jpg'),
        img('o2630yukpbxhibc62mqxj48wpzac_caab054a_z.jpg'),
        img('eopkwnrrxuwws0467bu06sieq8ym_501b6455_z.jpg'),
        img('2m6m0kwv1msw5qigtbrf1498fp27_1bb705cc_z.jpg'),
        img('cqkzcmohupomnh4dq1cu7yx4r8ec_5d3b1a6a_z.jpg'),
        img('1ddgyulz5buc2jd34u0gdei8m3kp_0a4cefb2_z.jpg'),
        img('fw9iy3i8lii58snqfmwpanvagnlq_2fadea78_z.jpg'),
        img('scqb4wuld5aafs87j2skvxotxg0r_1fe3a54e_z.jpg'),
        img('iwbrkcqeom9bjda3w7sfz9uzjk6d_10a2887e_z.jpg'),
        img('hs0emr17qq9xza24sjoorjyxlqe5_fd1d1f50_z.jpg'),
        img('unin0ph7p0ly07fmzxkejjk7witp_a66daefb_z.jpg'),
        img('2n0qni9cuoy2co4g83e7lespy71h_613a0f68_z.jpg'),
        img('n7xzrust9xn0mm5livquds6d2p9m_8a0cedbd_z.jpg'),
        img('l2hou49s7u41aulpclhjz1z0crhq_907645c5_z.jpg'),
        img('c8he0z0chmwta5wyi989el3nze7r_66e93906_z.jpg'),
        img('47jcfsognztq0ftd9iuu7jx73lxd_c3881077_z.jpg'),
        img('k0ty6r5dj1xb7cszw369bzqjc0t3_2335b496_z.jpg'),
        img('qsvtviktwpz62ofuthj426sen3gw_c0ca6871_z.jpg'),
        img('afi93n8dzakcwnnok8aszsmhg6js_96d46b83_z.jpg'),
        img('q9asp4cxt07gie0dlqblmcbtwy6g_e9775fea_z.jpg'),
        img('fgde3suylkjcu9k8k4pikxo9bpwv_d5a8dac6_z.jpg'),
        img('dd1xsvcqxrbylsokv8wmaa856hjz_54213845_z.jpg'),
        img('42v6wqsj6jydshk18m5um5dqns6u_0dfbfa8c_z.jpg'),
        img('m1tdn6bh929mucfxwcrv1e735dsv_fedcaeda_z.jpg'),
        img('c5q5ogp8w71v3p192gxmmb5orpqc_e12e4434_z.jpg'),
        img('87er54nhyy22n1ntoqxatelg4vuu_07408a3b_z.jpg'),
        img('mpbuubk0n6b0bo93nzsegq6ff110_29a70403_z.jpg'),
        img('vmia2gdif55xdeh12ls89epwj7b8_0d07a594_z.jpg'),
        img('kaw9zcjn0h0zfv0i4zrbagcm15ch_8f5c85e7_z.jpg'),
        img('uj8kgm52t0lfgibh8e5kavaz0gyr_5b0dbadb_z.jpg'),
        img('ww0uo0ul25hm73nf1scklroy5gis_9c257cf9_z.jpg'),
        img('524i0g0ptnqm8egtoszar4kgh05g_5e37b885_z.jpg'),
        img('74p94b0taphitb0e8vg8tlx0k8ua_385fc8ae_z.jpg'),
        img('buiwpdqpv7ug20ebljny2jeprj5o_50b8efa0_z.jpg'),
        img('xql8l4qlh6asqpfxmg5ik60wx6u3_a2a11a7b_z.jpg'),
        img('lblpkj31vkw0u2iev0ntq8b2yxzi_cb0e9853_z.jpg'),
        img('4rb4umhgn1qbzljvb5nf0ses1496_6b13aa5f_z.jpg'),
        img('zbwmzjy73rk0iclgxbzn0bazuiln_b8e5cc12_z.jpg'),
        img('0saojh4w0jc60w94xsu8xv9pvidf_5c8ac5f3_z.jpg'),
        img('kgmzjct48dq80erco258qpb2hsto_9c32384a_z.jpg'),
        img('j0al5zr38h5t71z84e7ogujwqamh_26cc0b90_z.jpg'),
        img('q0okc0sx4estwrjaifhel4r5vdn9_3fca0d86_z.jpg'),
        img('8ky6jchmiz01jqj6yb6j1ru9n7xz_d41e7546_z.jpg'),
        img('fofoia4sl5jp8gh5b7xfahlx5qwe_18c93cb5_z.jpg'),
        img('9xkdr7vswz2p021i8ahwtqslbjg4_56abeba3_z.jpg'),
        img('xihc3resrtompze2bv7vji1c75mg_ce09afe0_z.jpg')
      ]
    },
    activities: [
      {
        name: 'Full Moon Party at Koh Phangan',
        day: 3,
        optional: false,
        image: img('pulcw3plc4vkzayaewh5pfz8vroh_Moon%20Fest-6-1.jpeg'),
        description: 'The long running beach party at Haad Rin, reached by speedboat from Samui, with sound systems running until sunrise.'
      },
      {
        name: 'Fire Dance Show on Chaweng',
        day: 4,
        optional: true,
        image: img('l3rikmovzwj4yzrhpnbsmyvw0hem_t7dvxph7quiqgry3qrmv4dy6b55n_shutterstock_669615415.webp'),
        description: 'Fire dancers on the sand outside the beach bars most evenings in season, free to watch with a drink in hand.'
      },
      {
        name: 'ARKbar Beach Club',
        day: 4,
        optional: true,
        image: img('4u78exb5sdewjroajro9i91ly52d_g8ym1wv3iaq9tbbmmw6mqguhttkc_5B3E943D-5BAD-4DAC-9801-1EF82C44139F.jpg'),
        description: 'Samui\'s best known beach club on Chaweng, with day beds, a pool at the sand and music from the afternoon.'
      }
    ],
    program: {
      name: 'Chaweng beach and the Full Moon Party',
      description: 'All meals at the resort, Chaweng beach on the doorstep and a speedboat across to Koh Phangan for the Full Moon Party.',
      image: img('0h1vvi2l2j5ukteevblc9rifyj3n_shutterstock_406440082.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Krabi',
    dayLabel: 'Day 5 to 7',
    images: [
      img('x82hyykufd6uh6gr0lr054hlwjio_shutterstock_1045107625-min.jpg'),
      img('xf4ja2z7pa5m0rtqxup6gr50qyj9_shutterstock_2172676377-min.jpg'),
      img('85coxuo6jf2r4e35epvg592l0gn6_shutterstock_2172918973-min.jpg'),
      img('myp0svt552xqngaztwvvsb6ugnaj_shutterstock_740293555.jpg')
    ],
    dayImages: {
      5: [
        img('dp6g8cre788anal2l10ylpwej48u_1555911053_shutterstock_1134985199.jpg'),
        img('x82hyykufd6uh6gr0lr054hlwjio_shutterstock_1045107625-min.jpg'),
        img('xf4ja2z7pa5m0rtqxup6gr50qyj9_shutterstock_2172676377-min.jpg'),
        img('85coxuo6jf2r4e35epvg592l0gn6_shutterstock_2172918973-min.jpg')
      ],
      6: [
        img('vxkjnnip6rsu9lw6uez4mlycaeey_Krabi-4.png'),
        img('rt5uovc0zbqf6uk001aib0eluclg_1551088163_maxresdefault_(2).jpg'),
        img('ftmjlf4ozjzfkbsr6lrrux9aa2yy_1551087923_island-26.jpg'),
        img('dyq7wlnu8wksdjgpv9zcxy47b9zh_1463033673_7448089582_2b0ec2c665_b.jpg')
      ],
      7: [
        img('x82hyykufd6uh6gr0lr054hlwjio_shutterstock_1045107625-min.jpg'),
        img('xf4ja2z7pa5m0rtqxup6gr50qyj9_shutterstock_2172676377-min.jpg'),
        img('85coxuo6jf2r4e35epvg592l0gn6_shutterstock_2172918973-min.jpg'),
        img('myp0svt552xqngaztwvvsb6ugnaj_shutterstock_740293555.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Ferry to Krabi`,
      'Breakfast, check out and shared transfer to the Samui pier',
      'Ferry transfer across to the mainland, then on to Ao Nang',
      'Check in at the Arawan Beach Resort and take the evening slowly',
      'Optional: the Krabi weekend night market, cheap and very good',
      `${DAY_MARK}Day 6 · Krabi 4 Islands by speedboat`,
      'Breakfast, then shared transfer to the Ao Nang pier',
      'Speedboat transfer out to Koh Poda, Tup island and Chicken island',
      'Snorkel the shallows and walk across to Phra Nang beach, lunch included',
      'Island fees are covered, return shared transfer in the afternoon',
      `${DAY_MARK}Day 7 · Departure`,
      'Breakfast and a slow check out',
      'Private sedan transfer to Krabi airport for your trip home'
    ],
    accommodation: {
      name: 'Arawan Beach Resort Krabi, Krabi',
      description: '2 nights · Breakfast included · Super Deluxe room · 4★ · Arawan Beach Resort in Ao Nang, close to the pier',
      images: [
        img('np1bpn3ex799qvict1gk23lnirx0_5fa358fa468688560605e1f3e7eb25a2b37760dd.JPEG'),
        img('3uhfhmn0niw1rum5ujniy025jicm_a7237420eeb192fca074daea73e54e938cbd77e1.jpeg'),
        img('5jlkl6sbyz3ra2ot4dtft878q4l7_e979d5d699118c002fff566f7f43f85bb0efe13d.JPEG'),
        img('0hu2ux8u93zippg3xfj9qc8lqkui_a3ca48f11bb0ee449c1ab76b42c8a96d02ee6fcb.jpeg'),
        img('5w96oyuazawbmo9y6gu8nu3hp54h_fad286211b536733b5a69a9ec5ea48fa8a654fbe.JPEG'),
        img('d6xsryti2goer0nr03z9c7t4dwv2_79e98e35d8ed184473ccf841a8c0062cb8883e94.JPEG'),
        img('4bal4488lo0qmb7j2s032ikkmuvp_0fc7a2948fa4924a54afe47d34d7479bbbe24078.JPEG'),
        img('hle1vl9fsypc5pp382qcdyxbbtqr_5c3f064a7e7c99a5b1514c96e9def3928a7f3ceb.JPEG'),
        img('apav8syro1lox74iax2zpnokdh4g_1ad963617edea1100d753a2ff9aa51020772ccdc.JPEG'),
        img('2a23z57p3qlv9uzw3cl1ysxajmm8_c1f8fc8b95d5294f21c1ef7c81c95d44e432101c.JPEG'),
        img('u1ndh3ljm14xzj6zeqaawo1e3txp_1f52f290d98914269ae166150e3da0f93fdd8ca9.JPEG'),
        img('pz0j7xutn3cqykux7vprewznncy5_2828e860f679f72740ddf9db329747ec9c5ade96.JPEG'),
        img('uznrujzt4n52xrt9tlm9pnmmf3gb_9f242fdff515684d71bc86e66628364adf1bd130.JPEG'),
        img('ms768hel3wrao6g462nsggokxkgk_7957bfc7afe5d250c52ff8fe0254688d95df7d70.JPEG'),
        img('vd919docdcljn0i5k92t1qb8lhi9_c798123a97bb204979f074a9a9b79f5493b7c83f.JPEG'),
        img('ozfkjezj868lgnih791v577v2ie9_92e6200b50245410dcdf9057102af5148d5f57f6.jpeg'),
        img('2tqngxdag99yt18dorro6tzkabfm_17e604c369a3921acc9095b6b9f3bd10bba65201.jpeg'),
        img('gk8vn8bbau7jltea4j99wwv2x73j_5fefbc3fb3f8e3be453f8a27d5275be88f6053b7.jpeg'),
        img('sm2b40ys5phg71h0x78luo7uabjp_570c76cfa0ee4ed1941421f6027e5bd6702bf322.JPEG'),
        img('xzffiwgopkosdnms0l1l7ojet25w_acfc771d69f6389a317f4e27aaa29b7586dbe5c9.jpeg'),
        img('0siw1ptsaevpkmzteyevwzu9p48z_8b8478e403e6bb028554b9ef26b27cf778e307ad.jpeg'),
        img('6kjsuhbtk214a1op9qibd95khf2a_3610bfe6639c52105edd73b9f63b41c210a2f594.jpeg'),
        img('lrrndiohft4tplujlsort5g196q3_23b1c8cd17c2c7dca0b4fd29bb9364df05cb4023.jpeg'),
        img('sqkwbc47pxfr5o2g3pn6itrvpk6i_cb88dad8925e6d17d670488fffc95ff601eb7d85.jpeg'),
        img('vrekzd1fg1fr4570xajc3hths4y1_934e52e72e512809940037a4da3c5ec37ec228d5.jpeg'),
        img('ok3blw7igs2f8yf0jk0pokmasmb4_d9a39ba19f939e5faafa69961b066ac9893eeea7.jpeg'),
        img('j6nlsdss1raduakdvd0b0a9j46ij_5bc00fe41ead2905df10727ba19b6fccd892ab99.JPEG'),
        img('3xtdhqx8yze085tf6krz40ozq90l_9200f5eb9826bed03082e7b80bc015855398fbfd.jpeg'),
        img('e1watq06zgsno9dtd71gffukful3_00304e82d2a480d1eaf2c9ce42cdf4ce0eb4dc3c.JPEG'),
        img('4c422pnyurwsqsikclgper4p98my_274c8d447ebeff00ec434a184e1f82553504d3d8.jpeg'),
        img('5l4v5x2clcs0g7i6afulk890a5yu_0b85324115bd4e148eada4e267f86d9ace8a1a6a.jpeg'),
        img('7glsnjwhngscrlzsbnza4o6ifst3_25c981d74379a5737678e913559bee11489006fa.jpeg'),
        img('kklrecpnobosu02sjhzyrbp3ex2a_41b1f8b490216d7617232d96aac858909f394621.jpeg'),
        img('n1t5x2ar2xndbetjbojmiosi0m7y_287cbdefa591e0fb931af1c1d052c05fbe39edf1.jpeg'),
        img('gmo7v9tr2swrj2x747dki6glfe5n_4291bdc188609765aad59ec79f6ceecae74b63e2.jpeg'),
        img('lb8weym4ea444iwgdl8p4wv37wa4_5d8d904d80b2ed2874c55c301023e83cedf1be45.jpeg'),
        img('p5m8rikxf6v2xnb1nj65r15himgf_da34354fcf12c58d443ecf04e2e7afb578ae1ae3.jpeg')
      ]
    },
    activities: [
      {
        name: 'Krabi 4 Islands by Speedboat',
        day: 6,
        optional: false,
        image: img('vxkjnnip6rsu9lw6uez4mlycaeey_Krabi-4.png'),
        description: 'A speedboat day across Koh Poda, Tup island and Chicken island, with snorkelling, Phra Nang beach, lunch and island fees included.'
      },
      {
        name: 'Krabi Weekend Night Market',
        day: 5,
        optional: true,
        image: img('dp6g8cre788anal2l10ylpwej48u_1555911053_shutterstock_1134985199.jpg'),
        description: 'Krabi town\'s Friday to Sunday market, with grilled seafood, curries and sweets sold from stalls along the river.'
      }
    ],
    program: {
      name: 'Ao Nang and the 4 Islands',
      description: 'Two nights under the cliffs of Ao Nang with a speedboat tour of Koh Poda, Tup island, Chicken island and Phra Nang beach.',
      image: img('x82hyykufd6uh6gr0lr054hlwjio_shutterstock_1045107625-min.jpg')
    }
  }
];

const detail = {
  slug: 'island-trails-phuket-koh-samui-krabi',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Island Trails of Phuket, Koh Samui and Krabi',
  alt: 'Long tail boats anchored off a limestone island in the Andaman Sea',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'Shared coach transfers with long tail boat, speedboat and ferry crossings',
  tag: 'Beach',
  tags: ['Beach', 'Adventure'],
  price: 39244,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuket', 'Phi Phi Islands', 'Koh Samui', 'Koh Phangan', 'Krabi'],
  stats: { days: 7, cities: 3, hotels: 3, activities: 3, transfers: 17 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['17 transfers', 'Transport'],
    ['11 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three islands in six nights, with the Full Moon Party in the middle. It suits travellers in their twenties best.',
    quoteMore: 'The party runs all night on Koh Phangan and the boat back is in the early hours, so day four is deliberately empty. Keep valuables in the hotel safe and carry cash in a waterproof pouch.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days along the Thai coast with two nights each in Phuket, Koh Samui and Krabi. Long tail boat island hopping off Phi Phi, the Full Moon Party on Koh Phangan and a speedboat tour of the Krabi 4 Islands, with all meals covered on Samui.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights in 3 four star hotels; daily breakfast, plus lunch and dinner on both Koh Samui nights; Phi Phi island hopping by long tail boat with island fees; Full Moon Party at Koh Phangan with shared transfer; Krabi 4 Islands speedboat tour with lunch and island fees; 17 airport, pier and island transfers.',
  intro2: 'Not included: international flights; the Phuket to Koh Samui flight; visa charges; travel insurance; drinks; lunches and dinners other than those listed; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuket (Arrival)', text: 'Arrival at Phuket International Airport and private sedan transfer to the Andakira\nCheck in near Patong and keep the first day completely free\nOptional: Bangla Road after dark or the shophouse streets of Old Phuket Town', hotel: 'Andakira Hotel', highlights: ['Arrival at Phuket International Airport and private sedan transfer to the Andakira', 'Check in near Patong and keep the first day completely free', 'Optional: Bangla Road after dark or the shophouse streets of Old Phuket Town'] },
    { title: 'Day 2: Phi Phi island hopping (B)', text: 'Breakfast, then shared transfer down to Tonsai pier\nLong tail boat transfer around the Phi Phi islands through the morning\nIsland fees are covered, so every swimming stop is already paid for\nReturn shared transfer to your Phuket hotel in the afternoon', hotel: 'Andakira Hotel', highlights: ['Breakfast, then shared transfer down to Tonsai pier', 'Long tail boat transfer around the Phi Phi islands through the morning', 'Island fees are covered, so every swimming stop is already paid for'] },
    { title: 'Day 3: On to Koh Samui and the Full Moon Party (B, L, D)', text: 'Breakfast, check out and private transfer to Phuket airport\nOptional: flight from Phuket to Koh Samui, booked separately and not included\nPrivate transfer from Samui airport to Baan Laimai on Chaweng beach\nLunch and dinner at the resort are included on both Samui nights\nEvening speedboat transfer across to Koh Phangan for the Full Moon Party', hotel: 'Baan Laimai Beach Resort & Spa', highlights: ['Breakfast, check out and private transfer to Phuket airport', 'Optional: flight from Phuket to Koh Samui, booked separately and not included', 'Private transfer from Samui airport to Baan Laimai on Chaweng beach'] },
    { title: 'Day 4: Koh Samui at leisure (B, L, D)', text: 'Speedboat transfer back to Samui in the early hours, then sleep in\nBreakfast, lunch and dinner at the resort with nothing else booked\nChaweng beach is right outside, with loungers and shade all day\nOptional: a fire dance show on the sand or the stalls at The Wharf Samui', hotel: 'Baan Laimai Beach Resort & Spa', highlights: ['Speedboat transfer back to Samui in the early hours, then sleep in', 'Breakfast, lunch and dinner at the resort with nothing else booked', 'Chaweng beach is right outside, with loungers and shade all day'] },
    { title: 'Day 5: Ferry to Krabi (B)', text: 'Breakfast, check out and shared transfer to the Samui pier\nFerry transfer across to the mainland, then on to Ao Nang\nCheck in at the Arawan Beach Resort and take the evening slowly\nOptional: the Krabi weekend night market, cheap and very good', hotel: 'Arawan Beach Resort Krabi', highlights: ['Breakfast, check out and shared transfer to the Samui pier', 'Ferry transfer across to the mainland, then on to Ao Nang', 'Check in at the Arawan Beach Resort and take the evening slowly'] },
    { title: 'Day 6: Krabi 4 Islands by speedboat (B, L)', text: 'Breakfast, then shared transfer to the Ao Nang pier\nSpeedboat transfer out to Koh Poda, Tup island and Chicken island\nSnorkel the shallows and walk across to Phra Nang beach, lunch included\nIsland fees are covered, return shared transfer in the afternoon', hotel: 'Arawan Beach Resort Krabi', highlights: ['Breakfast, then shared transfer to the Ao Nang pier', 'Speedboat transfer out to Koh Poda, Tup island and Chicken island', 'Snorkel the shallows and walk across to Phra Nang beach, lunch included'] },
    { title: 'Day 7: Departure (B)', text: 'Breakfast and a slow check out\nPrivate sedan transfer to Krabi airport for your trip home', hotel: 'Departure', highlights: ['Breakfast and a slow check out', 'Private sedan transfer to Krabi airport for your trip home'] }
  ],
  outro: 'Not included: international flights; the Phuket to Koh Samui flight; visa charges; travel insurance; drinks; lunches and dinners other than those listed; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Thailand', href: '/asien/thailand' },
  { label: detail.title }
];

export const islandTrailsPhuketSamuiKrabiBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const islandTrailsPhuketSamuiKrabiProduct = {
  slug: detail.slug,
  places: stops.map((s) => s.name),
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 3,
  transfers: 17,
  meals: 11,
  price: detail.price,
  images: cardImages
};
