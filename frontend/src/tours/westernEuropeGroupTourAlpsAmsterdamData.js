// Western Europe Group Tour: Alps to Amsterdam. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('6sg7tmnncobydnuvnptpph8ztvww_Zurich.jpg'),
  img('f0phoykpi5mg77erfpk2zduet7sc_shutterstock_576156736.jpg'),
  img('j6gp91kl59gmxsascno851ddncxz_shutterstock_1282212832.jpg'),
  img('7ilxnqq6hu40qa37mum986ifakhl_shutterstock_662979433.jpg'),
  img('0esaau9c42a5ieu7nt4vfdceodcl_shutterstock_1589326495.jpg'),
  img('y6059n396x3b0nit1ketfaajfgcc_shutterstock_1206450859.jpg'),
  img('cflia37lajxmw7tjurw68wa5wt1h_shutterstock_112674374.jpg'),
  img('xgxq2xmcy2mtekkvewj8w0blbm7m_pexels-pierre-blach%C3%A9-3009663.jpg'),
  img('xfuiitkg4vdz65jxr8124sagsdri_shutterstock_397741987.jpg'),
  img('yck6g2xfl4ip4fibk4a14uaqhxao_shutterstock_388309342.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('6sg7tmnncobydnuvnptpph8ztvww_Zurich.jpg'),
  img('f0phoykpi5mg77erfpk2zduet7sc_shutterstock_576156736.jpg'),
  img('j6gp91kl59gmxsascno851ddncxz_shutterstock_1282212832.jpg'),
  img('0esaau9c42a5ieu7nt4vfdceodcl_shutterstock_1589326495.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Zurich',
    subtitle: 'Zurich → Grindelwald and Titlis',
    dayLabel: 'Day 1 to 3',
    images: [
      img('6sg7tmnncobydnuvnptpph8ztvww_Zurich.jpg'),
      img('yp9k09gqquytcdz8thdz6u7g1mlt_shutterstock_314150237%20(3).jpg'),
      img('i628pp9teqrmo7okg9ef6ggih20a_shutterstock_1549086965.jpg'),
      img('76p65s3vqbgnoblsx4gdh44xeva2_shutterstock_535685914.jpg')
    ],
    dayImages: {
      1: [
        img('mbrxknlgd5ibtuxtna1tq5y2x33c_shutterstock_743112046.jpg'),
        img('ietwn6qrvwl3qg81ib7gsl4hkri0_1579690346_shutterstock_44675536.jpg'),
        img('oxv2s2qobmxwr67uzopzyuexlsxx_1580110071_shutterstock_397993882.jpg'),
        img('6sg7tmnncobydnuvnptpph8ztvww_Zurich.jpg')
      ],
      2: [
        img('vno6k01opd9ycz6yzdq7mftdqkxj_sra0tx9srr6wb58owa1p8ra5ytni_caption.jpg'),
        img('wquxyiy95nwklrfdw9s7inakicng_Gemini_Generated_Image_d2ldmrd2ldmrd2ld.png'),
        img('6sg7tmnncobydnuvnptpph8ztvww_Zurich.jpg'),
        img('yp9k09gqquytcdz8thdz6u7g1mlt_shutterstock_314150237%20(3).jpg')
      ],
      3: [
        img('s2wy0tao19i9h07r6vopcca3hcow_Mt.-Titlis-Rotair-Cable-Car-1.jpg'),
        img('cf0sr8eoql6y6a5w2nqkiiloz44i_874d0571-22d2-4de1-931e-890b0bbcd655.webp'),
        img('ptqfrtjckfh31i5id8a7yjuv1vi2_50967096517_97c379250d_o.jpg'),
        img('zvglw8rw97yp3o8lm95tis50z9b4_Engelberg-Titlis-Cliif-walk-and-Glacier-Cave-19.webp')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Zurich`,
      'Arrival at Zurich Kloten and transfer to your hotel',
      'Meet your tour manager and the rest of the group',
      'The rest of the day free',
      'Optional: the Bahnhofstrasse and the lakefront',
      `${DAY_MARK}Day 2 · Grindelwald and Interlaken`,
      'Breakfast, then south into the Bernese Oberland',
      'The meadows below the Eiger north face at Grindelwald',
      'Interlaken between its two lakes',
      'Back to Zurich in the evening',
      `${DAY_MARK}Day 3 · Mount Titlis and Lucerne`,
      'Early breakfast, then on towards Engelberg',
      'The rotating cable car up Mount Titlis',
      'The glacier cave and the cliff walk at the top',
      'The Chapel Bridge and the Lion Monument at Lucerne'
    ],
    accommodation: {
      name: 'Radisson Hotel Zurich Airport, Zurich',
      description: '3 nights · Breakfast · Standard room · 4★ · Modern airport hotel with a shuttle into the city',
      images: [
        img('7bim4k3vjef5pbeswby43ymu2fwq_exterior-at-dusk.jpg'),
        img('aaevw6j9jc8pfubrf7il8yrralkg_326514766.jpg'),
        img('dyyuipwxm9pq6ip0mtnggfnkg77z_ce6078d007fa11ed85c80a58a9feac02.jpg'),
        img('eb26lctk7zfl5acqvi44y0b9cody_326514737.jpg'),
        img('rv2aofyjmyw35dz4jeqa0q3iipi2_326514756.jpg'),
        img('4fjstaq2c2gj2x11qkusgeayrf81_b770795a0d6711edb5100a58a9feac02.jpg'),
        img('lkbfjamr1phe348yo2rkeajz4gvt_326514774.jpg'),
        img('7u21xh3ckbrigg623mvmqhzs3yjf_326514758.jpg'),
        img('31msuo7hs6hr49pbry0yyhps9xwu_326514735.jpg'),
        img('s4bi00n438gud03w2erha3fxnqq2_326514755.jpg')
      ]
    },
    activities: [
      {
        name: 'Grindelwald and Interlaken day trip',
        day: 2,
        optional: false,
        image: img('6sg7tmnncobydnuvnptpph8ztvww_Zurich.jpg'),
        description: 'A day into the Bernese Oberland, with the meadows below the Eiger north face and the two lakes either side of Interlaken.'
      },
      {
        name: 'Mount Titlis cable car',
        day: 3,
        optional: false,
        image: img('s2wy0tao19i9h07r6vopcca3hcow_Mt.-Titlis-Rotair-Cable-Car-1.jpg'),
        description: 'The rotating cable car to three thousand metres above Engelberg, with the glacier cave and the cliff walk at the top.'
      },
      {
        name: 'Lucerne orientation tour',
        day: 3,
        optional: false,
        image: img('zoafhxrd7cebub3c9kuamv00f7dl_shutterstock_1450654796.jpg'),
        description: 'A walk round the old town with the covered Chapel Bridge, the Lion Monument and the lakefront promenade.'
      }
    ],
    program: {
      name: 'Zurich',
      description: 'Three nights in Switzerland with Grindelwald and Interlaken, the Mount Titlis cable car and the old town at Lucerne.',
      image: img('6sg7tmnncobydnuvnptpph8ztvww_Zurich.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Frankfurt',
    subtitle: 'Frankfurt → Rhine Falls and the Black Forest',
    dayLabel: 'Day 4',
    images: [
      img('ub4jx4o0j6j0zqg8f32x1uq8k7ne_shutterstock_128455949.jpg'),
      img('f0phoykpi5mg77erfpk2zduet7sc_shutterstock_576156736.jpg'),
      img('sh4xp6zumvzmxvceq42besj4b88w_shutterstock_1278927736.jpg'),
      img('b0ww2m8pc00x57efiykwmwztvrsd_shutterstock_224875129.jpg')
    ],
    dayImages: {
      4: [
        img('j4dlfu32bcwtb9jyvspj3nezcnix_shutterstock_216554536.jpg'),
        img('fhlr2n7beypxpizy3ugwp0w37qdl_1583570615_fi.jpg'),
        img('ub4jx4o0j6j0zqg8f32x1uq8k7ne_shutterstock_128455949.jpg'),
        img('f0phoykpi5mg77erfpk2zduet7sc_shutterstock_576156736.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Rhine Falls, the Black Forest and on to Frankfurt`,
      'Breakfast and check out of your Zurich hotel',
      'The boat run out to the rock in the Rhine Falls',
      'North through the Black Forest clock villages',
      'Arrival transfer and check in at Frankfurt'
    ],
    accommodation: {
      name: 'Crowne Plaza Frankfurt Congress Hotel by IHG, Frankfurt',
      description: '1 night · Breakfast · Standard room · 4★ · Large business hotel close to the exhibition grounds',
      images: [
        img('i3xcb1ol5n7asuv8k7tn056m12d0_b834b40c4d89c1f35aa30f78164ce0989b23605f.jpeg'),
        img('smrkszhw61c4h2dhje97txdn7zkm_819e351cdfa1c66660d8732adb4da6977468677b.jpeg'),
        img('eockwvjrmcm69g8jh0nhbs28q3t2_3a2095f124e44efe67c26b7172b3be8b967a609a.jpeg'),
        img('pij2vnbddo06u1epwj3daxvikr1j_e49ce05eaf14d93c6905b0eb64510f2423efe3ab.jpeg'),
        img('e2ozckmdszj1w55imv83da8ggto9_9544db8a2b9d183741be2e41622ff4f499cbcf83.jpeg'),
        img('oo0fq61bdt64dxioyf4hx8xc2hk2_e1d82a45355691b6f5add9dbce75a411c809ef02.jpeg'),
        img('cwtzvz0ki2jvj5lihbb054mx819o_046cadb9cca08d40aa1061aead92a426f68462de.jpeg'),
        img('iov3pf3fyttyndj0fpellqh25v02_ecd3eab9f0757cb17fec04c9d465e39e63d646f9.jpeg'),
        img('dpi4u1oh9l4it1y0co75h155ybpd_197fbf82f6c98cded2ba2947c38db29848f7a4f6.jpeg'),
        img('2jsmvidyi9mmb4rddmfirabk5vpg_a0932726aea71008053a6eed072b3f7b189d8a5f.jpeg'),
        img('qxk9pqv40u46asxnpbkmkoi3o8sl_3cacd4c95db1cd28ba845b1d84844b57902c92fd.jpeg'),
        img('1rlapgqn0y26p03md3ivzgtfqtu7_8a81616f029729b02c9428d1710d54c51f1989ba.JPEG'),
        img('qvoq9ifckelx5xu1gdb1dcb99ofk_8e26a9fd0eebf28b484cc00b5632dded08c37496.JPEG'),
        img('ved6w0kcalg9pqrs6m7c117vnpks_5b3e08a089f1ec009a8a969b418ef47e0dbbed6d.jpeg'),
        img('z80zb3svh7pkftvotqsydchp0rxj_62dba2b06c3953f52dc4fffa030da5e691db36d5.jpeg'),
        img('9l3kskzw82jqsc92sumeaiicy1sq_e12be6212b29a82161673896ec8b5195b782c3c8.jpeg'),
        img('i7rywz4ofpux1ggci7x9fdkxymt5_94c0d1d81174ccacd316ededac34920e8b566f8f.jpeg'),
        img('4wjm3vjbscpp7eputnx52zcv1v98_618613a7b574f008c90fa5a0905b2714a7c76ad9.JPEG'),
        img('yv1j890x7gdgg6tu6j4ml5dw5csg_fb074bca3345bbc5017228c20d41d6c12a5bf703.jpeg'),
        img('8uiskvm6o68upg6d6xsm1u6ud4yz_5ee39ba69294942fb13abcfdc1d255da6bfa403a.jpeg'),
        img('zsykuubu8wzfxl9h4bja3wbyssui_60f46f0207e341dcbc92215408520a02b6a0984d.JPEG'),
        img('1k1knzgb7s4dz0i6122m7eaghq81_1c33a77396985443272a675f855b29c81d1d401b.jpeg'),
        img('uysox8210gfecxr25in0a3t68wuu_9676ef01ae6b55f7464abab8bd2042b63859ddec.jpeg'),
        img('vbk8m1s9jvxcqj51dsgx013iuwly_2e2bef29aa34745e582a13ec0986a562870b6db2.jpeg'),
        img('lp6z9q725tr3z84fnolbirycwhs8_050deb0ec4d2ea9961515455eae267be2fa865f6.JPEG'),
        img('xv3icj9comqhpqhkdxtdaigo0i8v_c7a4f1ba4e85b0e6f176e955b9c53a32bfa43437.jpeg'),
        img('cjg3azm0a4g0jii18zvgkr59dgoi_a0b16b15b2cf8db55b637677958bdddd6995078a.jpeg'),
        img('p881lc1p06q6y08mhc0nkhgy3eun_ad1b7ce554bf9119e99ddb856ae4bd404424b4c0.JPEG'),
        img('b2q655zddbryrljty5ldv1xd5szg_94e6cfc4cc69e5fe50d6efe09af1236812de9618.JPEG'),
        img('rjlfj2z5asmq7eg0dq2ynes5j72i_3aa9312c57820c869129cdfcc12adb70b7cf46d5.JPEG'),
        img('cnblstc8zi8tcg5sjw1jb39wvjq8_456fc1b4421d7c6bdd41a2108631b93c0850b51b.JPEG'),
        img('8t640629zvk0e68jex8wr1zcmk4p_7b24a9af5bd9ab3b8a1f1f9807efcd9862dab867.JPEG'),
        img('wvmim71nc2gpj29hi88x72c2ol0f_0c0df7f9068964c89165cd33fe4bb42f9eea4c00.JPEG'),
        img('ii6ihqfivcie5ug2tku0afndtv3q_a0812d584b19dac9f54268beded65e5438d2579e.JPEG'),
        img('lumw3b3kxwicsn6r7v8f77bzs2pb_d4e9869b5f3878a03e78ff51953ddb2ab11dd566.JPEG'),
        img('93bsoibmpdiyimzg7y4inocskp6u_d1fe1773875d2c02e65bcb39b7813130b8b93e83.JPEG'),
        img('76l55h80607j9sm3ho8or2k487xo_99e104e695ec6a6cc6f69a8d85f7ee2c29a34b59.JPEG'),
        img('mupkdd51h49783wxl4ed1qhu58cu_86b2ad5049438d33dd985b7e550e0e1eea6744c9.JPEG'),
        img('mcpgsiwfz30f30ryu2nb0ik4tu5s_e271c479a48a0dd5c27b088b563661a679c13d67.JPEG'),
        img('8tj3qlxcv1mkjx0zjbvxpr0glasf_2ea89f900ecdda3654fc7dbc2ce03ad6f5ea2e5c.JPEG'),
        img('p0uhewqa5lwbtaxh06h08tb4xbcg_d233aa1b60b691cfe383d07047d0d1c568d1c79f.JPEG'),
        img('eeor5x52dlhtx1ukesqrqumesn7m_ae9a0ae3c41f1c508ecea21bf39e5316b5262217.JPEG'),
        img('sts0n5ubnwlbxwv7m0n9zgtorpxk_473cc17e579cb7e457b15f28d2ae587a23327c8f.JPEG'),
        img('2z6umx4d7e7whvtlb7gbogvcj9zj_a77b8898bd352d646dc7de68189e284ba4122e40.JPEG'),
        img('tuu7i9433b637axslywu4xff1omp_8b6e535f635745a261fa367a2841a4f91b87fa65.JPEG'),
        img('butwnol5tjd6ovrcpxmh4xu9b5q8_4a624aff17562025efca9a2433f20f4747c88934.JPEG'),
        img('9lhhic8t1q20op9kzyylq6q65zd3_ab98c506da164e8f9c8affc2f0750edc3fa97bd1.JPEG'),
        img('ky8cgaq4q8jmaveh2scg0cqw4pmk_45134058334891d8f35351a8d4765c2883829dc7.JPEG'),
        img('hx3uw6hap0nl11rsnh14awwlihdy_4d47b817a0de89b6a599b5afa7e175566f27908b.JPEG'),
        img('azpewmfq9labr867o3igkwsy0n0n_ee9e0bf9278efe828893e3e0b0a8763177e206c7.JPEG')
      ]
    },
    activities: [
      {
        name: 'Rhine Falls boat tour',
        day: 4,
        optional: false,
        image: img('j4dlfu32bcwtb9jyvspj3nezcnix_shutterstock_216554536.jpg'),
        description: 'A boat run out to the rock in the middle of the largest waterfall in Europe, taken on the way north out of Switzerland.'
      }
    ],
    program: {
      name: 'Frankfurt',
      description: 'One night in Germany, reached through the Rhine Falls and the clock making villages of the Black Forest.',
      image: img('ub4jx4o0j6j0zqg8f32x1uq8k7ne_shutterstock_128455949.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Amsterdam',
    subtitle: 'Amsterdam → Cologne and Zaanse Schans',
    dayLabel: 'Day 5 to 6',
    images: [
      img('4alo2c57pd09nnz4654ejwdlzv41_shutterstock_2063141249.jpg'),
      img('hoe21smslzraw9tu01p2bjm0hll7_shutterstock_114805048.jpg'),
      img('j6gp91kl59gmxsascno851ddncxz_shutterstock_1282212832.jpg'),
      img('g5gsxtzj36besn2qq47x0igmfpdy_shutterstock_1572865972.jpg')
    ],
    dayImages: {
      5: [
        img('dh32j5dplbklfcgss2cnb1ar6djf_Downpic.cc-image328420529.jpg'),
        img('5gxhusew2b9ths04pheczucg6gw9_AF1QipP3-QFV-ydW1ks15p_lYtg9zDTb.png'),
        img('4alo2c57pd09nnz4654ejwdlzv41_shutterstock_2063141249.jpg'),
        img('hoe21smslzraw9tu01p2bjm0hll7_shutterstock_114805048.jpg')
      ],
      6: [
        img('3da90dsc5s4gw0aqfjvschn3h1r2_p5x1mi5zn509hex6ycnco8wizams_lr481e4yez1b08cfbjdijcgvgq6i_aq8gsbqkm8qgsoz5gjiqgs7u16dy_Zaanse-5.webp'),
        img('xkkemspxvqa2754itv6o0gfb3muj_amsterdam_nationaal_monument_op_de_dam_rm530906_foto2_2014-01-12_11.19_1280_1280_fit_90.webp'),
        img('zcwqfotej4cdxmhjpwbq6dklhj03_1579520327_shutterstock_492132463.jpg'),
        img('hq6iexw8yicv0tussj3rk0zo7c6g_67ac3d0c-acc3-4ddd-b0df-7c79e525f909.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Cologne Cathedral and on to Amsterdam`,
      'Breakfast and check out for the run north',
      'A stop at Cologne and its twin spired cathedral',
      'On along the Rhine into the Netherlands',
      'Arrival transfer and check in near Amsterdam',
      `${DAY_MARK}Day 6 · Zaanse Schans, the city and a canal cruise`,
      'Breakfast, then out to the Zaan river',
      'The working windmills and the clog maker at Zaanse Schans',
      'A guided round of the canal belt and Dam Square',
      'A glass topped canal cruise after dark'
    ],
    accommodation: {
      name: 'Vienna House Easy by Wyndham Amsterdam Airport, Amsterdam',
      description: '2 nights · All meals · Standard room · 4★ · Bright airport hotel on the Schiphol rail line',
      images: [
        img('kwl581rsziv9vrq0w4q6t6ju5n9m_54b8a1f55a8e1e0fe46bd5704040931edd8d9c1d.jpeg'),
        img('6hwhl82h0o7q34i5054o7b21r3pn_e7c5526df907fcd9986dda612ea2b89fddaa3d7e.jpeg'),
        img('wli4ubr40ned1bba3zaovteu07a3_e56667c1abbc7e25fdb9ae936b186faafb7d7ad3.JPEG'),
        img('oz6qzlbjsmzeb4m04hzk13v7dipp_3b9cec7f2e35d0ec5c7bee66c217150c24554501.JPEG'),
        img('oz10xtdd9qmwfrlt4mx2xep66qy7_32b2db38561a6223d45a72ad58f92fa348598cab.JPEG'),
        img('o1qib561dp47v59f52r42j9upjby_8042c80d9537f0cbf4436fb92d95897dc2b5cc97.JPEG'),
        img('2wxu2ilxpx1k81qpyy22n3loa7b7_40d8326e7a7cbff52125b832247366530d1b75f7.JPEG'),
        img('2smhzl2cadphmjtaehu9yh04vhhs_5cb0bde61cc5ffa203bb10473a56bcb5fa145495.JPEG'),
        img('kza6uzv5vom4lmrwg7vcgg0ufs1o_ae1a60f50be57d70b4b63637800639879d0ccbf2.JPEG'),
        img('39ce2cj0b1wvg8qpcmw18xh0lrso_35cb6519073278ffbd9568609bf8a18a7280efeb.jpeg'),
        img('56wv7xwj5c2mb6w9p6sasiwc3qfv_a82b639b5d0b19c8165d60d1c69f71d88ec3746f.jpeg'),
        img('knkoulj0smmb6hswmusocfgwa9ss_31874ff960e562ae7065ec6ee2ff5e81a2d1972f.jpeg'),
        img('d7ungna3jb4b1miat9ms39wm7f2i_74f93995c675582ad010cbebbe25e5caa4c7fff5.JPEG'),
        img('v151wa4yajnqhlq8x98ez3dwi9tr_6f32a3dc9636e553a80fc91e57bf5829ca44f41e.jpeg'),
        img('bun8n4hwjvjkwhr151y9ihzwicd3_0a39597cba01029bae1528985a912e71e995ea00.JPEG'),
        img('wf81r1b42ort33p5wgmnz4wm9frs_4be565127a5ccff80adaef79e85d0b62d9878d77.JPEG'),
        img('h9oon66mfxokna76jnqh5oxtwtel_91dd7f77df3dfe6db2e8bfed32230edd1684daca.jpeg'),
        img('j6wv4q8wyeac31wt0b3vqx0y9wnz_3068715582582380ee7f2ea7d195844ee44e6a8a.jpeg'),
        img('3dwq747n2hj5lf3v90uvpw7gf1p2_5c1a6d1c129235e25ac1793d4ee1d5e3ef7ea72d.JPEG'),
        img('mk2v4of5ndhny43r5zxrj9asonec_ffc84eeff5009149f39300b613465ecc50b574fd.JPEG'),
        img('rb21xh4xm07nbx9jyzq3p7i497l3_f52e02e95402eaecb4aa7a98b77a2a2fa19fc782.JPEG'),
        img('4otqiijx651rmakvq9hapkyqtu8w_0c023c843bfd51ffc3d7880fc61e8de8be11d706.PNG')
      ]
    },
    activities: [
      {
        name: 'Cologne Cathedral',
        day: 5,
        optional: false,
        image: img('dh32j5dplbklfcgss2cnb1ar6djf_Downpic.cc-image328420529.jpg'),
        description: 'The twin spired Gothic cathedral beside the Rhine, six centuries in the building and the tallest church in Europe for a time.'
      },
      {
        name: 'Zaanse Schans day trip',
        day: 6,
        optional: false,
        image: img('3da90dsc5s4gw0aqfjvschn3h1r2_p5x1mi5zn509hex6ycnco8wizams_lr481e4yez1b08cfbjdijcgvgq6i_aq8gsbqkm8qgsoz5gjiqgs7u16dy_Zaanse-5.webp'),
        description: 'The working windmills on the Zaan, with the clog maker, the cheese farm and the green timber houses along the water.'
      },
      {
        name: 'Amsterdam sightseeing tour',
        day: 6,
        optional: false,
        image: img('xkkemspxvqa2754itv6o0gfb3muj_amsterdam_nationaal_monument_op_de_dam_rm530906_foto2_2014-01-12_11.19_1280_1280_fit_90.webp'),
        description: 'A guided round of the canal belt, Dam Square, the Rijksmuseum quarter and the narrow merchant houses of the Jordaan.'
      },
      {
        name: 'Amsterdam evening canal cruise',
        day: 6,
        optional: false,
        image: img('67lpjumllr6062h3w3ql2m06x1h6_canal-cruise-amsterdam-at-night-1.webp'),
        description: 'A glass topped boat along the canal belt after dark, when the bridges and the gabled fronts are all lit.'
      }
    ],
    program: {
      name: 'Amsterdam',
      description: 'Two nights in the Netherlands with the windmills at Zaanse Schans, a city tour and an evening canal cruise.',
      image: img('4alo2c57pd09nnz4654ejwdlzv41_shutterstock_2063141249.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Paris',
    subtitle: 'Paris → Brussels on the way',
    dayLabel: 'Day 7 to 10',
    images: [
      img('e471pe0lr99jjjgkdfule2j2uexo_shutterstock_293257847.jpg'),
      img('5zrbpf5moybkzsdm8hanptc529gr_shutterstock_645464011.jpg'),
      img('ljguj1uubhgdctkpq61zhcivvm88_shutterstock_2358990187.jpg'),
      img('7ilxnqq6hu40qa37mum986ifakhl_shutterstock_662979433.jpg')
    ],
    dayImages: {
      7: [
        img('mg2xpuf1g5guhuof9uw5vz3cpbct_8pdxdtxya24uv46q3u2eefveilst_shutterstock_712426702.jpg'),
        img('psibb51zwrisabmsumokq5rmican_Optimized-12272018785_2fc4c51279_b.jpg'),
        img('q9mo1fbfrbytlehh08vt6efr2jrg_1332.webp'),
        img('xea6u9ayjo32oi7pzbebuki4gvh3_brussels.jpg')
      ],
      8: [
        img('urt5off2r7wnlfeq1t9skl3vcu9x_shutterstock_114479500%20(1).jpg'),
        img('02n0nem48g4uq4z1kr03lmcg9pyv_1578123882_shutterstock_114436897.jpg'),
        img('i2pzkrvvuxv9tbvvat8eqqc732l5_1579267406_shutterstock_354290552.jpg'),
        img('q2rovwxnk1eum333pwz6l3dif4ch_1579503640_34355430420_146f894638_k.jpg')
      ],
      9: [
        img('w9m5wia2m08e5o0f27qme22ln6eg_1584610870_shutterstock_1179937837.jpg'),
        img('e471pe0lr99jjjgkdfule2j2uexo_shutterstock_293257847.jpg'),
        img('5zrbpf5moybkzsdm8hanptc529gr_shutterstock_645464011.jpg'),
        img('ljguj1uubhgdctkpq61zhcivvm88_shutterstock_2358990187.jpg')
      ],
      10: [
        img('e471pe0lr99jjjgkdfule2j2uexo_shutterstock_293257847.jpg'),
        img('5zrbpf5moybkzsdm8hanptc529gr_shutterstock_645464011.jpg'),
        img('ljguj1uubhgdctkpq61zhcivvm88_shutterstock_2358990187.jpg'),
        img('7ilxnqq6hu40qa37mum986ifakhl_shutterstock_662979433.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Brussels and on to Paris`,
      'Breakfast and check out of your Amsterdam hotel',
      'A stop in Brussels for the Grand Place and the Atomium',
      'On south into France',
      'Arrival transfer and check in near Paris',
      `${DAY_MARK}Day 8 · Paris, the Eiffel Tower and the Seine`,
      'Breakfast, then a guided loop of the city',
      'The Louvre, the Arc de Triomphe and Notre Dame',
      'Up the Eiffel Tower to the second floor',
      'An hour on the Seine past the Ile de la Cite',
      `${DAY_MARK}Day 9 · A free day in Paris`,
      'Breakfast, then the whole day at leisure',
      'Optional: a full day at Disneyland Paris',
      'Optional: the Palace of Versailles',
      'Optional: Montmartre and the Sacre Coeur',
      `${DAY_MARK}Day 10 · Departure from Paris`,
      'Breakfast at the hotel and check out',
      'Private transfer to Charles de Gaulle for your flight home'
    ],
    accommodation: {
      name: 'Hotel Inn Paris Roissy CDG, Paris',
      description: '3 nights · Breakfast · Standard room · 4★ · Convenient hotel by Charles de Gaulle with a free shuttle',
      images: [
        img('m97n2cf0nspq8lnn58ff2cpno74i_60538b274cdf4.jpeg'),
        img('1v5o76zih41zvrczvtjaqd03ivmk_download.jpg'),
        img('ux8udauk5f6r2gu67nj5muhs2vld_download%20(11).jpg'),
        img('2ol7pgz6ehu3vwh7dv8annvacm3n_download%20(3).jpg'),
        img('xbdlww8bxxsxwueuifqd6do372vu_download%20(2).jpg'),
        img('d37vcx1k8pcd61ky1f1ihx9t6gjt_download%20(4).jpg'),
        img('4lwwhyj30n2fbi9e3ikdlyv7yflz_download%20(9).jpg'),
        img('z25fzsmfip1688yc2zrrk10h2dth_download%20(5).jpg'),
        img('zir26nupg6s5cqn7snrg4h3wq2vc_download%20(7).jpg'),
        img('c3726byrkvgo2o3gjbuiu01v8k75_download%20(2).png'),
        img('96t69ot6j1qvblupq65i3rx0hsky_download%20(1).jpg'),
        img('pxaijjw2gxrdc3n6y3r8vp4rqj0w_download%20(10).jpg')
      ]
    },
    activities: [
      {
        name: 'Brussels city tour',
        day: 7,
        optional: false,
        image: img('mg2xpuf1g5guhuof9uw5vz3cpbct_8pdxdtxya24uv46q3u2eefveilst_shutterstock_712426702.jpg'),
        description: 'A stop in the Belgian capital for the guild houses of the Grand Place, the Atomium and the Manneken Pis.'
      },
      {
        name: 'Paris highlights orientation tour',
        day: 8,
        optional: false,
        image: img('urt5off2r7wnlfeq1t9skl3vcu9x_shutterstock_114479500%20(1).jpg'),
        description: 'A guided loop past the Louvre, the Arc de Triomphe, the Champs Elysees, Notre Dame and the Place de la Concorde.'
      },
      {
        name: 'Eiffel Tower second floor tickets',
        day: 8,
        optional: false,
        image: img('dig5uzhwxi3k3m9hqy85laaj9agr_lgssr44oemecvyopn64z8dk1ytjo_shutterstock_1372948736.jpg'),
        description: 'Admission to the second floor of the tower, the level where the ironwork and the view over the rooftops both read best.'
      },
      {
        name: 'Seine river cruise',
        day: 8,
        optional: false,
        image: img('7e20pyx20npmn1xqkflvqc8zm85j_shutterstock_1505629178.jpg'),
        description: 'An hour on the Seine past the Louvre, the Musee d\'Orsay, Notre Dame and the Ile de la Cite from the water.'
      }
    ],
    program: {
      name: 'Paris',
      description: 'Three nights to finish, reached through Brussels, with a city tour, the Eiffel Tower and a Seine cruise.',
      image: img('e471pe0lr99jjjgkdfule2j2uexo_shutterstock_293257847.jpg')
    }
  }
];

const detail = {
  slug: 'western-europe-group-tour-alps-to-amsterdam',
  ctaHref: '/l/europe/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Western Europe Group Tour: Alps to Amsterdam',
  alt: 'Windmills at Zaanse Schans reflected in the water',
  days: '10 days / 9 nights',
  stations: '4 stops',
  transport: 'Group coach throughout with a tour manager and airport transfers',
  tag: 'Multi-country',
  tags: ['Multi-country', 'Family'],
  price: 151050,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Zurich', 'Frankfurt', 'Amsterdam', 'Paris'],
  stats: { days: 10, cities: 4, hotels: 4, activities: 11, transfers: 21 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['11 experiences', 'Activities'],
    ['21 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Sharon',
    image: '/experts/sharon.webp',
    role: 'Europe expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Four countries in nine nights on a group coach with a tour manager. For a first trip to Europe it is far better value than doing it alone.',
    quoteMore: 'Carry one Schengen visa for the whole run. Apply through the Swiss consulate since Switzerland is where you spend the most nights.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Ten days by coach across Switzerland, Germany, the Netherlands and France: Grindelwald and Mount Titlis, the Rhine Falls and the Black Forest, Cologne Cathedral, the windmills at Zaanse Schans, Brussels, and Paris with the Eiffel Tower and a Seine cruise.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 9 nights in four star hotels across Zurich, Frankfurt, Amsterdam and Paris with breakfast and dinner in Amsterdam; all coach travel and airport transfers; a tour manager; the Grindelwald and Interlaken day trip; Mount Titlis cable car tickets; a Lucerne orientation tour; a Rhine Falls boat tour; Cologne Cathedral; the Zaanse Schans day trip; an Amsterdam sightseeing tour; an Amsterdam evening canal cruise; a Brussels city tour; a guided orientation tour of the Paris highlights; entry to the second floor of the Eiffel Tower; an hour on the Seine by boat.',
  intro2: 'Not included: international flights; Schengen visa fees and visa assistance; lunches and dinners other than those listed; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Zurich (Arrival)', text: 'Arrival at Zurich Kloten and transfer to your hotel\nMeet your tour manager and the rest of the group\nThe rest of the day free\nOptional: the Bahnhofstrasse and the lakefront', hotel: 'Radisson Hotel Zurich Airport', highlights: ['Arrival at Zurich Kloten and transfer to your hotel', 'Meet your tour manager and the rest of the group', 'The rest of the day free'] },
    { title: 'Day 2: Grindelwald and Interlaken (B)', text: 'Breakfast, then south into the Bernese Oberland\nThe meadows below the Eiger north face at Grindelwald\nInterlaken between its two lakes\nBack to Zurich in the evening', hotel: 'Radisson Hotel Zurich Airport', highlights: ['Breakfast, then south into the Bernese Oberland', 'The meadows below the Eiger north face at Grindelwald', 'Interlaken between its two lakes'] },
    { title: 'Day 3: Mount Titlis and Lucerne (B)', text: 'Early breakfast, then on towards Engelberg\nThe rotating cable car up Mount Titlis\nThe glacier cave and the cliff walk at the top\nThe Chapel Bridge and the Lion Monument at Lucerne', hotel: 'Radisson Hotel Zurich Airport', highlights: ['Early breakfast, then on towards Engelberg', 'The rotating cable car up Mount Titlis', 'The glacier cave and the cliff walk at the top'] },
    { title: 'Day 4: Rhine Falls, the Black Forest and on to Frankfurt (B)', text: 'Breakfast and check out of your Zurich hotel\nThe boat run out to the rock in the Rhine Falls\nNorth through the Black Forest clock villages\nArrival transfer and check in at Frankfurt', hotel: 'Crowne Plaza Frankfurt Congress Hotel by IHG', highlights: ['Breakfast and check out of your Zurich hotel', 'The boat run out to the rock in the Rhine Falls', 'North through the Black Forest clock villages'] },
    { title: 'Day 5: Cologne Cathedral and on to Amsterdam (B)', text: 'Breakfast and check out for the run north\nA stop at Cologne and its twin spired cathedral\nOn along the Rhine into the Netherlands\nArrival transfer and check in near Amsterdam', hotel: 'Vienna House Easy by Wyndham Amsterdam Airport', highlights: ['Breakfast and check out for the run north', 'A stop at Cologne and its twin spired cathedral', 'On along the Rhine into the Netherlands'] },
    { title: 'Day 6: Zaanse Schans, the city and a canal cruise (B)', text: 'Breakfast, then out to the Zaan river\nThe working windmills and the clog maker at Zaanse Schans\nA guided round of the canal belt and Dam Square\nA glass topped canal cruise after dark', hotel: 'Vienna House Easy by Wyndham Amsterdam Airport', highlights: ['Breakfast, then out to the Zaan river', 'The working windmills and the clog maker at Zaanse Schans', 'A guided round of the canal belt and Dam Square'] },
    { title: 'Day 7: Brussels and on to Paris (B)', text: 'Breakfast and check out of your Amsterdam hotel\nA stop in Brussels for the Grand Place and the Atomium\nOn south into France\nArrival transfer and check in near Paris', hotel: 'Hotel Inn Paris Roissy CDG', highlights: ['Breakfast and check out of your Amsterdam hotel', 'A stop in Brussels for the Grand Place and the Atomium', 'On south into France'] },
    { title: 'Day 8: Paris, the Eiffel Tower and the Seine (B)', text: 'Breakfast, then a guided loop of the city\nThe Louvre, the Arc de Triomphe and Notre Dame\nUp the Eiffel Tower to the second floor\nAn hour on the Seine past the Ile de la Cite', hotel: 'Hotel Inn Paris Roissy CDG', highlights: ['Breakfast, then a guided loop of the city', 'The Louvre, the Arc de Triomphe and Notre Dame', 'Up the Eiffel Tower to the second floor'] },
    { title: 'Day 9: A free day in Paris (B)', text: 'Breakfast, then the whole day at leisure\nOptional: a full day at Disneyland Paris\nOptional: the Palace of Versailles\nOptional: Montmartre and the Sacre Coeur', hotel: 'Hotel Inn Paris Roissy CDG', highlights: ['Breakfast, then the whole day at leisure', 'Optional: a full day at Disneyland Paris', 'Optional: the Palace of Versailles'] },
    { title: 'Day 10: Departure from Paris (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Charles de Gaulle for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Charles de Gaulle for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees and visa assistance; lunches and dinners other than those listed; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: detail.title }
];

export const westernEuropeGroupTourAlpsAmsterdamBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const westernEuropeGroupTourAlpsAmsterdamProduct = {
  slug: detail.slug,
  places: ['Zurich', 'Frankfurt', 'Amsterdam', 'Paris'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 11,
  transfers: 21,
  meals: 9,
  price: detail.price,
  images: cardImages
};
