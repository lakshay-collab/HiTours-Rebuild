// Premium Bhutan Group Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
  img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
  img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
  img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
  img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
  img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
  img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
  img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
  img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
  img('q7j2aidb1x7kvw5awbi06zi51s3r_Ema%20Datshi-1.jpg'),
  img('our6fo99anz8o0tpqpdpgp7vw5sj_Memorial%20chorten-1.jpg'),
  img('drvgw0cecqj73ca524ijipw1n1j6_Wangdue%20Phodrang%20Monastery%201.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Phuentsholing',
    dayLabel: 'Day 1',
    images: [
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
    ],
    dayImages: {
      1: [
        img('khf8y1lpqxenviw5vczf0uh2ytj0_Zangto_Pelri_Lhakhang,_Phuentsholing_during_LGFC_-_Bhutan_2019_(14).jpg'),
        img('l0fq7fjbnhs2rdw73cyv4fa8c62i_Phuentsholing-Market-1024x682.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
        img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuentsholing`,
      'Arrival at Bagdogra and transfer to Phuentsholing',
      'Border formalities at the Bhutan Gate',
      'Check in and the rest of the day free'
    ],
    accommodation: {
      name: 'Park Hotel Bhutan, Phuntsholing',
      description: '1 night · All meals · Standard room · 3★ · Border town hotel on the Indian frontier',
      images: [
        img('z40c4qr9y7t7c81s9qu5xa2xged8_5cc8e912_z.jpg'),
        img('0r627eeaep4yv6a7stez77fws8mg_2614055f_z.jpg'),
        img('xqx9d0mtcvfdu4evd3tak8n4x86o_13a07e73_z.jpg'),
        img('puu8pt9xsu5h3mo9s483aeyhctqq_d8b10843_z.jpg'),
        img('xm7f9puagorp6t9fkur6taqlrj15_f82e94e6_z.jpg'),
        img('81niwv4riao0nnbkuaqi9w8avns2_1b4b9180_z.jpg'),
        img('n0o00bobhduib48d2nicdfuj7053_4b48a457_z.jpg'),
        img('jipmvemjh3pl6huenge3b7uega0k_f33f830e_z.jpg'),
        img('cvv6xttpps0rvtdu0kdasem5dzpn_13a0070f_z.jpg'),
        img('tmt01lhj5ipyntpr1h8u0ry0vox4_dc8bd6be_z.jpg'),
        img('3ba3wtn941s523e4l7ivxaf8e2bn_deb0cbc9_z.jpg'),
        img('tearj4p9pvnxft9ne7f2no2lz4ox_e7163861_z.jpg'),
        img('ilhapuxjq2ivh6trstfyvppx1v0t_0f22d153_z.jpg'),
        img('jea2nuwh2g2hdvro8jokxwizk9ys_d2ef14dd_z.jpg'),
        img('8y7jf4uzn801lk6hb4lgg2tzvy8a_72f5939b_z.jpg'),
        img('rdiq24l3bz9tyrf266q5tkufy5iw_235b6c9b_z.jpg'),
        img('xdtn1fph8ir298grrgjol87lsbsr_dfcc488a_z.jpg'),
        img('7zgywfk4r4sxt2eh88uklwu1o1hr_5863f661_z.jpg'),
        img('7alvbhie4q3bkhcqptpdiydh7ol0_8b96333f_z.jpg'),
        img('reny3813j1ay46cczquyre4nv58v_f1f4856d_z.jpg'),
        img('pv9d6yqxnizbig3cc11bytoxo5or_e78691e0_z.jpg'),
        img('gk3qoytwjplzmn4l3p5900etes55_f86ccc92_z.jpg'),
        img('f6sd99y16p9sa1o2b23v1hnicrgf_4cde18be_z.jpg'),
        img('wnv3m1rqnwfsnrx8doyoonkxlwyx_e0d2f8e6_z.jpg'),
        img('cfzf1l7ckazzu8vu1cbo2toxjqxu_eda3bd12_z.jpg'),
        img('wzaoflmsbro58uo1pibaf0mze481_e1624bac_z.jpg'),
        img('2wt8jkgcb6ri570i91lt9mb2hi65_776f6701_z.jpg'),
        img('1kq5655hb0pmq26g3qxbc00e7av9_18ae56b7_z.jpg'),
        img('0u64s1dmcqo62j64wano5c0yugvz_adbaa157_z.jpg'),
        img('ks6f2ffwuqh8j7n95vfybebl4gbw_ed62ae2d_z.jpg'),
        img('mt1hfmr2sa92rv3bvwfx3mjqc301_ee43647e_z.jpg'),
        img('4bph64dm9fe1vzycf361we5ormc6_c45884d6_z.jpg'),
        img('8d3jc2mjrjag8lq4azmj19dss3f2_b53e592c_z.jpg'),
        img('nc0vz6uryedw94bap510v6z1mixr_7acd8f7b_z.jpg'),
        img('ws8ai3h3b2suu3fsvx7b7ako4dpj_f42f034a_z.jpg'),
        img('9m5ex76a9o0c2cdy35yd03107y2b_a28068db_z.jpg'),
        img('i3u0xpwp87zmrq5iczor5zjwaa5a_2ee69456_z.jpg'),
        img('xg8rxrrum9rvv6i76n829o1f48im_ed404d53_z.jpg'),
        img('14602ekah2jy99gn4xtioomeh449_fc2a1c22_z.jpg'),
        img('e38abh0g3qvwo9n8giiz2dlrxoue_bc0ace28_z.jpg'),
        img('7yzxwhbgqzye8myz7mjnpt8kq3rf_7201cff6_z.jpg'),
        img('wmwi6ycr6qhh3sw0mbbd109jzpfh_a3f9713a_z.jpg'),
        img('kxwt0anjc6s49e7hrjk5fg3tm8x9_de491a89_z.jpg'),
        img('r5v1jnxids1nhwq7ioibe86orvvc_84a0a029_z.jpg'),
        img('19tj67salqxertpsymhsekj5sjta_6625ba07_z.jpg'),
        img('agg4vvhcxs1rt8wlr4bn3gp1jiz5_3937df4d_z.jpg'),
        img('jw3c4ydzv62jpm30w49gsper85xd_f06e1f3d_z.jpg'),
        img('4o7e8109kc1zg0mlvj8gpmyvm51w_8d4719a5_z.jpg'),
        img('sau7ixact4f20110i0schuip6zbr_f527a637_z.jpg'),
        img('25hsjufw8hwydlpuukvglbud7o4a_6331686c_z.jpg'),
        img('ry9dddyw2am2j78v83a72lqu1cp7_0c3ac1c7_z.jpg'),
        img('rhqjb7l6hwi9mvkybnszpxut4vem_2d315633_z.jpg'),
        img('9cf794wcoycamhwqv6c6ucokmbyz_ef93cb72_z.jpg'),
        img('h1ntasi22td84x29m4p4k32eg66o_3612b0cb_z.jpg'),
        img('3dj1r4snedk7okzkhpdp7ds2gv6u_855f7d0f_z.jpg'),
        img('d887ml0f3l5n4yezmh84zb0814hn_249abc96_z.jpg'),
        img('k99hr1t86w9v5ya4h0gflmuzjx0l_24fc449d_z.jpg'),
        img('cjfwg1uy5n8lgalg7kk0esh5sqp3_cff514ee_z.jpg'),
        img('jsew8y3ip3whuntrszw2etz1621o_232f8441_z.jpg'),
        img('nab66otumxniozj43wqbqkkmdnn8_058ca986_z.jpg'),
        img('ffdww87jjaxujjhv7bajxqk10ips_2e271ff7_z.jpg'),
        img('5m1ysdcu031w5iyb5uqozr7jeyw5_d27f328f_z.jpg'),
        img('vk2na40iexk9jj1j0ev9o78nedgj_e3a9e1ea_z.jpg'),
        img('89xbachiijl96mukl969x9ypqwz7_1f0510d4_z.jpg'),
        img('19tjgeqhygppjkrwx9gg1hou8bn8_b3d25af6_z.jpg'),
        img('635fyn7m1xowv9ugzwl8uwvqw0fk_93533951_z.jpg'),
        img('4fzc2oh9yt58t49i5otp1ptzrz6r_61327817_z.jpg'),
        img('xta5ou9q33v65cm2wkvfuxet2muw_048a2352_z.jpg'),
        img('lt64jnj1jlfwvjqwzyqee5g1qsq0_5cc8e912_z.jpg'),
        img('j1feo0jwbmgx2gtv0klo54u05rgh_2614055f_z.jpg'),
        img('n9lol29whfdjcy601vhoc5m0kll2_13a07e73_z.jpg'),
        img('ghmgiq9dcho8frsvhinrbwckvdiw_d8b10843_z.jpg'),
        img('esp2qagwp9astm0cik1v0t1opkmw_f82e94e6_z.jpg'),
        img('8takhhlikiml78akomgj31vzv1r8_1b4b9180_z.jpg'),
        img('6mxjwyhtw2zi0vz5xj0tfwahdcij_4b48a457_z.jpg'),
        img('6nn1oyygm62mvyg3v0wtlwz7wuyi_f33f830e_z.jpg'),
        img('16mnm6jsy20pmljuust681qo7480_13a0070f_z.jpg'),
        img('eeh9p14h1j4cluwck41hmesfatta_dc8bd6be_z.jpg'),
        img('uyxcns39vt3ednk77in2em1fgtqe_deb0cbc9_z.jpg'),
        img('ebnl3zm9f6zk0gmfth0b59fa17mc_e7163861_z.jpg'),
        img('y0ytelopt7nspmaijis053t48wgx_0f22d153_z.jpg'),
        img('w54s7mux51blqpygc4fo7eglf8qi_d2ef14dd_z.jpg'),
        img('abup3hvxk21h1mjksmpdyjbyo88m_72f5939b_z.jpg'),
        img('nub5d16n29xhgx6ff5em3pfdhiv7_235b6c9b_z.jpg'),
        img('e4mukvfhyccouzji0gfks39exijf_dfcc488a_z.jpg'),
        img('01t8v755phove1y2ahb3ywt1ue69_5863f661_z.jpg'),
        img('5rx3fj9tt1qvm4ra38iyg7g6tesi_8b96333f_z.jpg'),
        img('84k2ncg3n1bcut8l80smc42xpbbz_f1f4856d_z.jpg'),
        img('564helc4aids2vciw98rjutajs38_e78691e0_z.jpg'),
        img('6vc50vay2m1rspggvpmwfgqdso6d_f86ccc92_z.jpg'),
        img('ugurptovmo6be1r1wf459ao2j7ai_4cde18be_z.jpg'),
        img('f8tu9di5gkjczcqmje70giksehbk_e0d2f8e6_z.jpg'),
        img('6i60y9il1jgh1kh2jvqvvufnd2j6_eda3bd12_z.jpg'),
        img('yi0czesi158h7vjg4t8j3pvlmnye_e1624bac_z.jpg'),
        img('wn7oz2hnn3yfky5lui956gem5y6j_776f6701_z.jpg'),
        img('jpgqaic7moy3ctgo806ng27wdxt1_18ae56b7_z.jpg'),
        img('qclicg98ekvh0cg0bwybxn5vlnlr_adbaa157_z.jpg'),
        img('3wwxdjmohyunpcqa8ywad7on6bde_ed62ae2d_z.jpg'),
        img('2tddppki2aq7r6h25qodluqpq3bx_ee43647e_z.jpg'),
        img('msosjvq0jhqnn9s608l1049mrchu_c45884d6_z.jpg'),
        img('o4y3wytzbnu3c4tr08itdpkt9qyo_b53e592c_z.jpg'),
        img('u9i5t3r8yznaoks2h5on7nw28f40_7acd8f7b_z.jpg'),
        img('j31dyorl3tk2out34bqil5vvgey4_f42f034a_z.jpg'),
        img('srpp42is0lrvd01fytdtfgghislz_a28068db_z.jpg'),
        img('qdpo8ia0w78oin2kv4oo3ehg3nei_2ee69456_z.jpg'),
        img('umzohsmwq7589djgsc8vitsmjwyy_ed404d53_z.jpg'),
        img('1fxx7rfr2lzye9ybfgumuxo76z06_fc2a1c22_z.jpg'),
        img('5xhjxtstq3b1fdg6dta079d03k4k_bc0ace28_z.jpg'),
        img('x7qlt3aaoe25a07ro57f3u3yun8a_7201cff6_z.jpg'),
        img('llo841jinwxwjbe4wjc0tiat6r3r_a3f9713a_z.jpg'),
        img('oaeyujuu4decudq0ehh96afn2qrx_de491a89_z.jpg'),
        img('qt6qtj4v7gs0o6be2gbffp9hv2wj_84a0a029_z.jpg'),
        img('ycmhe6gjnbtebhvlcx462xl8wap0_6625ba07_z.jpg'),
        img('0qb7riq3zyq6dor2zb2os0rsvyvx_3937df4d_z.jpg'),
        img('0tfnhvfuo7sjn72622d2v0ltks0s_f06e1f3d_z.jpg'),
        img('enyx6hjqm17a5l377pq44prpjl8n_8d4719a5_z.jpg'),
        img('e5d0qz124l95hrihf0xuuxxs57cq_f527a637_z.jpg'),
        img('psyy82envfxbvv5stmnvhmktj8kb_6331686c_z.jpg'),
        img('7zhctvdr85psfhzam817m2nmpesa_0c3ac1c7_z.jpg'),
        img('xp00umotdm1t4y8p9gf5l4ynhij0_2d315633_z.jpg'),
        img('3tb4i4oxjfhkvipzqjfax595htps_ef93cb72_z.jpg'),
        img('9rkf67k8409sjzatddw590li6al6_3612b0cb_z.jpg'),
        img('57xucpobovfl2f8cvcotiha2oimo_855f7d0f_z.jpg'),
        img('klwt27nb06cqbafkmak7wrazjjfq_249abc96_z.jpg'),
        img('846kid8jf16g9uez25htgpmjsjub_24fc449d_z.jpg'),
        img('ffvvdygcj21pwejk0fscfxcoia6j_cff514ee_z.jpg'),
        img('o2wo98huyna130zgf10t739a03io_232f8441_z.jpg'),
        img('214z8ynqkt85oq4qfnq7nv8gn981_058ca986_z.jpg'),
        img('icdci8tg263b8r1gewf5gr60kpxs_2e271ff7_z.jpg'),
        img('no4wbhut5it8ya96lbkx3k2ynt48_d27f328f_z.jpg'),
        img('u6aisummu42k82z7m8majjx7960h_e3a9e1ea_z.jpg'),
        img('p266pfziddwnbj7n43pxwo03upnx_1f0510d4_z.jpg'),
        img('ehiucevmc9y6ddr30o10752oafsv_b3d25af6_z.jpg'),
        img('7uzpbxz0mvgxwdwx4wbswt29gkfk_93533951_z.jpg'),
        img('y880nhc34sox5h7nwxgwl28vomk6_61327817_z.jpg'),
        img('9c47yh9pqiyqk7p94t0npynjcl72_048a2352_z.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Thimphu',
    dayLabel: 'Day 2',
    images: [
      img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
      img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
      img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
      img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg')
    ],
    dayImages: {
      2: [
        img('q7j2aidb1x7kvw5awbi06zi51s3r_Ema%20Datshi-1.jpg'),
        img('wpd0woa96sv8ztpl35qc0pohtx5e_shutterstock_1698546493.jpg'),
        img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
        img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Onward to Thimphu`,
      'Breakfast, then north into the hills towards Thimphu',
      'The Chukha dam and the Wang Chhu gorge on the way',
      'Optional: the Zorig Chusum school of arts',
      'Arrival transfer and check in for the night'
    ],
    accommodation: {
      name: 'Seven Suites Thimphu, Thimphu City',
      description: '1 night · Breakfast · Standard room · 3★ · Comfortable hotel in the capital, walkable to the clock tower',
      images: [
        img('5qrbac63trgucgaifvq8yfcfn7rw_2023-05-12.webp'),
        img('4fi6ogo36rj2n5parpzpha4tdv26_unnamed%20(10).webp'),
        img('x2eutd0462ez75qhy9p11bj8nx49_unnamed%20(9).webp'),
        img('ke4hyoiscj604eok9s0x4t7vqdac_IMg_3.webp'),
        img('wnpxn4mozcmap5rddjn8kez1j2n8_IMg_1.webp')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Thimphu',
      description: 'Time in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong.',
      image: img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Punakha',
    dayLabel: 'Day 3 to 4',
    images: [
      img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg'),
      img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
      img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
      img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg')
    ],
    dayImages: {
      3: [
        img('our6fo99anz8o0tpqpdpgp7vw5sj_Memorial%20chorten-1.jpg'),
        img('2xgygw98g58o2olcep4vlh9r5k0u_1481602683_View_of_the_National_Memorial_Chorten__Thimphu.jpg'),
        img('4r58yve0h6te2i0muhp7hprr7rtu_24024165679_103d7a2e7c_b.jpg'),
        img('fecad1jg1gwzqki7ltqfxszyzl24_1200px-Changangkha_Lhakhang_2021.jpg')
      ],
      4: [
        img('drvgw0cecqj73ca524ijipw1n1j6_Wangdue%20Phodrang%20Monastery%201.jpg'),
        img('156qgkjrva6kbo6cjgsqqvq3licz_Wangdue_Phodrang_Dzong.jpg'),
        img('xdpcndvpmchlqhi1ipcqudar8d0w_Downpic.cc-image360280713.jpg'),
        img('tu7006jnl2qdcjom4vk9czur2rz7_1621019190_shutterstock_197981387.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · To Punakha: Thimphu sightseeing`,
      'Breakfast, then east over the Dochula pass',
      'The hundred and eight chortens at the top',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and the takin preserve',
      `${DAY_MARK}Day 4 · Wangdue phodrang and phobjikha valley`,
      'Breakfast in the warm Punakha valley',
      'Wangdue Phodrang Dzong on its rocky spur',
      'The rivers meeting below the fortress walls',
      'The glacial bowl of the Phobjikha valley',
      'The crane centre and the nature trail'
    ],
    accommodation: {
      name: 'Punakha Hotel River Valley, Punakha',
      description: '2 nights · Breakfast · Standard room · 3★ · Riverside hotel in the warm old winter capital',
      images: [
        img('48sbqdfd62yprtyqeein5tw8ff44_y48c0273.jpg'),
        img('nbiy2klsy4vccrebcl42jz67m7nk_66c5c6ce.png'),
        img('wrblv2mtrt8970ayecsyobwu2fgg_2d1f656b.png'),
        img('6udjeko5hifga92x0x4o1syya994_41e25ab2.png'),
        img('vgel99h62hbr8ko8rcbpk0q38tu2_4183e25c.png'),
        img('42hvmhcqd8s8lpjc1yh4vg5ijj6k_ba3114a8.png'),
        img('xsnkdyrysglqpxxnr2yrghhwnz0j_ae99f0ce.png'),
        img('fxdqoq3nrf7nkimzxcs45sefvins_b72c20d3.png')
      ]
    },
    activities: [
      {
        name: 'Thimphu sightseeing tour',
        day: 3,
        optional: false,
        image: img('our6fo99anz8o0tpqpdpgp7vw5sj_Memorial%20chorten-1.jpg'),
        description: 'A guided day round the capital with the Memorial Chorten, the Buddha Dordenma, Tashichho Dzong and the takin preserve.'
      },
      {
        name: 'Wangdue Phodrang Dzong',
        day: 4,
        optional: false,
        image: img('drvgw0cecqj73ca524ijipw1n1j6_Wangdue%20Phodrang%20Monastery%201.jpg'),
        description: 'The fortress on a spur above the confluence of the Puna Tsang and Dang Chhu, rebuilt after the fire of 2012.'
      },
      {
        name: 'Phobjikha valley excursion',
        day: 4,
        optional: false,
        image: img('xdpcndvpmchlqhi1ipcqudar8d0w_Downpic.cc-image360280713.jpg'),
        description: 'The wide glacial bowl where black necked cranes winter, with the crane centre, the nature trail and Gangtey Goemba.'
      }
    ],
    program: {
      name: 'Punakha',
      description: 'Days in the warm old winter capital, with the Dzong between two rivers and the suspension bridge.',
      image: img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Paro',
    dayLabel: 'Day 5 to 6',
    images: [
      img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
      img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
      img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg')
    ],
    dayImages: {
      5: [
        img('38kz4h1x67igl2szup6j3v7owa7v_steptodown.com744302.jpg'),
        img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg'),
        img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg'),
        img('fk9rfodqaqcnh9gy9tsxw2opj4gf_1571658047_Drc_gk7VYAAMVE4.jpg')
      ],
      6: [
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        img('arryt9zia20eawdl6ai40dhg5aut_1481602641_kuil-terindah-di-asia.jpg'),
        img('67c9ft8o8goubig49mz7g6esoqjx_Hot%20Stone%20Bath-1.jpg'),
        img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · To Paro: Punakha Dzong`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'Punakha Dzong between the Pho and Mo rivers',
      'The long suspension bridge over the water',
      `${DAY_MARK}Day 6 · Tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face'
    ],
    accommodation: {
      name: 'Paro Grand Resort, Paro',
      description: '2 nights · Breakfast · Standard room · 3★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('nih94wy7s7etacwvzxosy3c77ytg_2025-06-24.webp'),
        img('5nbdr3y7sis1y6uxukxdj5bhbfaa_2025-06-24%20(1).webp'),
        img('by7yb85mtbi27bfu3msbs6z8momy_unnamed%20(12).webp'),
        img('thei5lza1kunrvjd0jbkhl35g2ln_2025-06-24%20(2).webp'),
        img('vegaw6vwnpjkqoilhugmfu24msvy_2025-06-24%20(4).webp'),
        img('zrdbhaf82cx0q3qx8i4kjjjj9g9n_2025-06-24%20(3).webp'),
        img('e30r9hem7pseet57sq6h4212dgs6_unnamed%20(11).webp')
      ]
    },
    activities: [
      {
        name: 'Punakha sightseeing tour',
        day: 5,
        optional: false,
        image: img('38kz4h1x67igl2szup6j3v7owa7v_steptodown.com744302.jpg'),
        description: 'The fortress where Bhutan’s kings are crowned, built on the spit of land where two rivers meet below the town.'
      },
      {
        name: 'Hike to the Tiger\'s Nest',
        day: 6,
        optional: false,
        image: img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        description: 'The climb to Taktsang, the monastery wedged into a cliff nine hundred metres above the Paro valley floor.'
      }
    ],
    program: {
      name: 'Paro',
      description: 'Days in the valley below Taktsang, with Rinpung Dzong, the National Museum and the Tiger’s Nest hike.',
      image: img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Phuentsholing',
    dayLabel: 'Day 7 to 8',
    images: [
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
    ],
    dayImages: {
      7: [
        img('pyk2nmohbitdrznzqrl6enaimxuq_Chelela%20Pass-3.jpg'),
        img('iem5yg8jg5skwo2sqtebs42ud4mg_shutterstock_1112548703.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
        img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
      ],
      8: [
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
        img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
        img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
        img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · To Phuentsholing: Chele La pass`,
      'Breakfast, then the long run back south',
      'Down through the Chukha gorge to the plains',
      'Up to the Chele La pass at 3,988 metres',
      'Jomolhari on the skyline on a clear morning',
      `${DAY_MARK}Day 8 · Departure from Bagdogra`,
      'Breakfast at the hotel and check out',
      'Border formalities and transfer to Siliguri'
    ],
    accommodation: {
      name: 'Hotel Palm Phuentsholing, Phuntsholing',
      description: '1 night · Breakfast · Standard room · 3★ · Border town hotel on the Indian frontier',
      images: [
        img('8jzqqzqkzrno0541j4hf1m9qhm3h_download%20-%202025-01-13T133458.455.jpg'),
        img('h8x0pp0tlar1nujw5kwb3yniftbv_images%20(65).jpg'),
        img('5ahfsrjgutmgt9s7f30qpd3ae4ld_images%20(64).jpg'),
        img('c6wuq936ht386ffy20vr80s6fc3j_download%20(97).jpg'),
        img('kruv7i58qvd9919o3dbjavclbxce_images%20(66).jpg'),
        img('wfaloyfj6krx3oq9qemmne8ihc83_download%20(99).jpg'),
        img('pjyagevdg0ccihm2oz64mygg9hr2_images%20(67).jpg'),
        img('h3b6t17382x7xmagbf1jg7daascf_images%20(68).jpg'),
        img('txbpqxlq2o2elyz1yfu5wjy4ncmd_download%20(100).jpg'),
        img('o2zg4na45ayengaeqf3kzju35wu3_download%20(98).jpg')
      ]
    },
    activities: [
      {
        name: 'Chele La pass',
        day: 7,
        optional: false,
        image: img('pyk2nmohbitdrznzqrl6enaimxuq_Chelela%20Pass-3.jpg'),
        description: 'The highest motorable pass in Bhutan at 3,988 metres, with Jomolhari standing clear on a good morning.'
      }
    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg')
    }
  }
];

const detail = {
  slug: 'premium-bhutan-group-tour',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Premium Bhutan Group Tour',
  alt: 'Wangdue Phodrang Dzong on its rocky spur',
  days: '8 days / 7 nights',
  stations: '5 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Culture',
  tags: ['Culture', 'Nature'],
  price: 43690,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Punakha', 'Paro', 'Phuentsholing'],
  stats: { days: 8, cities: 5, hotels: 5, activities: 6, transfers: 14 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['14 transfers', 'Transport'],
    ['14 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'A premium group departure with Phobjikha and Chele La both included. Seven nights and almost nothing left out.',
    quoteMore: 'Day four covers Wangdue Phodrang and Phobjikha together. It is the longest day on the road, so take the front seat if you get carsick.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '8 days through Phuentsholing, Thimphu, Punakha, Paro, with 7 nights, Breakfast and dinner each day and a licensed Bhutanese guide: the thimphu sightseeing tour, the wangdue phodrang dzong, the phobjikha valley excursion, the punakha sightseeing tour.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights across Phuentsholing, Thimphu, Punakha, Paro with Breakfast and dinner each day; all land transfers by private vehicle; the Thimphu sightseeing tour; the Wangdue Phodrang Dzong; the Phobjikha valley excursion; the Punakha sightseeing tour; the Hike to the Tiger\'s Nest; the Chele La pass; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (L)', text: 'Arrival at Bagdogra and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Park Hotel Bhutan', highlights: ['Arrival at Bagdogra and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Onward to Thimphu (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'Seven Suites Thimphu', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 3: To Punakha: Thimphu sightseeing (B, L)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and the takin preserve', hotel: 'Punakha Hotel River Valley', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'The Memorial Chorten and the Buddha Dordenma'] },
    { title: 'Day 4: Wangdue phodrang and phobjikha valley (B, L)', text: 'Breakfast in the warm Punakha valley\nWangdue Phodrang Dzong on its rocky spur\nThe rivers meeting below the fortress walls\nThe glacial bowl of the Phobjikha valley\nThe crane centre and the nature trail', hotel: 'Punakha Hotel River Valley', highlights: ['Breakfast in the warm Punakha valley', 'Wangdue Phodrang Dzong on its rocky spur', 'The rivers meeting below the fortress walls'] },
    { title: 'Day 5: To Paro: Punakha Dzong (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water', hotel: 'Paro Grand Resort', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'Punakha Dzong between the Pho and Mo rivers'] },
    { title: 'Day 6: Tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Paro Grand Resort', highlights: ['Breakfast, then out into the Paro valley', 'The climb up the pine slope to Taktsang', 'The monastery wedged into the cliff face'] },
    { title: 'Day 7: To Phuentsholing: Chele La pass (B, L)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nUp to the Chele La pass at 3,988 metres\nJomolhari on the skyline on a clear morning', hotel: 'Hotel Palm Phuentsholing', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Up to the Chele La pass at 3,988 metres'] },
    { title: 'Day 8: Departure from Bagdogra (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bhutan', href: '/asia/bhutan' },
  { label: detail.title }
];

export const premiumBhutanGroupTourBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const premiumBhutanGroupTourProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Punakha', 'Paro'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 6,
  transfers: 14,
  meals: 14,
  price: detail.price,
  images: cardImages
};
