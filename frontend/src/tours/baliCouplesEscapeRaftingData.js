// Bali Couples Escape with Rafting. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
  img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Mount Batur',
    dayLabel: 'Day 1 to 3',
    images: [
      img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
      img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
      img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
      img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg')
    ],
    dayImages: {
      1: [
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG'),
        img('blc7rv8lvishrrzjuxwmcwyxm2ev_1464182679_Bali-Bird-Park-42414.jpg'),
        img('4qzfjlhp9rb7opyc8dzvjjpgi0cy_1470896048_9396103363_d354fd2bc4_b.jpg'),
        img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg')
      ],
      2: [
        img('q77aw23cnynqx76tj5h7hs0ehogc_Tirta%20Empul-2.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('2kpx79s3vxrjrh07k2kaajmjalmw_shutterstock_2313711741.jpg')
      ],
      3: [
        img('r5e1e6s3axt4h3lqg3jw6jpkbkqo_953d0ed8-fae2-4875-810c-01bf77c0d73b.jpg'),
        img('yx9uedsyf0x9qg3xk4d8v711tcfz_Mount%20Batur%201.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg'),
        img('ww0ew1hzw2vypimkh7auis5nap0w_shutterstock_2282319959.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Ubud`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your villa resort near Ubud',
      'First evening free by the pool',
      'Optional: the Monkey Forest or the Ubud art market',
      `${DAY_MARK}Day 2 · Central Bali by vintage car`,
      'Breakfast, then a day out in an open top vintage Volkswagen',
      'The Bali swing and Tegenungan waterfall',
      'Tirta Empul, the holy spring temple',
      'The Tegalalang rice terraces on the way back',
      `${DAY_MARK}Day 3 · Mount Batur and hot springs`,
      'Early breakfast, then up to the Mount Batur slopes',
      'The Kintamani crater view across the lake',
      'An hour in the Batur hot springs',
      'An hour of Balinese massage for two back in Ubud'
    ],
    accommodation: {
      name: 'Ubud Raya Villa, Ubud',
      description: '3 nights · Breakfast · Standard room · 4★ · Villa resort with a pool, a short ride from Ubud town',
      images: [
        img('f8f6c0enql3nc2t5t4zej497ve2z_137adf09efe929bb30c35a5632e7cd3a34591259.JPEG'),
        img('8upqx7nh8ilbr65kslssl80uuw10_6af0fae2530455539112de991fbd52fa5d3176be.JPEG'),
        img('0mmojw8lypn0ao9v2yln31gbjmxi_4f389bc77d0650c8bd34e7be222984ac361a5466.jpeg'),
        img('au8z442kmjzjvs39bsor1afjlzpw_5fcc6898fbf069c1a42ce3f2e83dc3e4972d3b18.jpeg'),
        img('vidslljirg0ncemsstmlvlc0ybrb_91d6657239a5957a4d34122aec75ee53ebbbfdb1.jpeg'),
        img('6i1qu1ytgqp6mwnhyjm880b8cv7h_e66be96b7da8774494dae44a60527f489089f961.jpeg'),
        img('wgb8wynk0bylqlvv6rjdbrpxaq3k_d283ffe9cee43f5d96ef63c56bd4dd00599cacb5.jpeg'),
        img('82pftugcsu7mp5kvw5jiwx2ntgkp_c8a87f52234389f8743ca23947fe776c00222af1.jpeg'),
        img('wm87qpedv9mtqy57l3h4i7j5s2x6_0a9c888a61041c1deff45e6e3481cf9f6e4d8cdf.jpeg'),
        img('8f5alaxve7we1allf36eu80gdhu9_1a864a1e24c24528cee9356755aac39c44ab1ac2.jpeg'),
        img('a1nsxmg49gwg48q2kt8oqdgylko7_414ca3b9a26cc2781ff1000bee02b92140cf1d73.jpeg'),
        img('ebc1idwd1m3iq3lv0wrsbuq76x7k_165e519d62a0b49b666dd5f20267620926e6afaa.jpeg'),
        img('dsc6ivue69d6tbdb4q6uequ5fa1h_b730df7ae35d084549e8bb143095a6e342219a62.jpeg'),
        img('uq40his17pht9ui79weriyeplzql_ee427b2fb149bb1454d81d919e69356fd2c72db7.JPEG'),
        img('x9smr8uuvun15tfckzmg7p0a8x9d_f17346da73f9d4e7d7b1894b55060ef5ec8d0ff9.JPEG')
      ]
    },
    activities: [
      {
        name: 'Central Bali in a vintage Volkswagen',
        day: 2,
        optional: false,
        image: img('q77aw23cnynqx76tj5h7hs0ehogc_Tirta%20Empul-2.jpg'),
        description: 'A day out in an open top vintage Volkswagen taking in the Bali swing, Tegenungan waterfall, the spring temple at Tirta Empul and the rice terraces.'
      },
      {
        name: 'Mount Batur with the hot springs',
        day: 3,
        optional: false,
        image: img('r5e1e6s3axt4h3lqg3jw6jpkbkqo_953d0ed8-fae2-4875-810c-01bf77c0d73b.jpg'),
        description: 'A guided climb on the volcano with the Kintamani crater view, then an hour in the Batur hot springs beside the lake.'
      },
      {
        name: 'Balinese massage for two',
        day: 3,
        optional: false,
        image: img('2lqubqpwc7pgzj7podybztx47o8g_k1pjs1b8l54axfq37sc0s10so5j1_shutterstock_132434978.webp'),
        description: 'An hour of traditional Balinese massage for both of you after the climb, warm oil and long pressure strokes at a spa in Ubud.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Three nights near Ubud with a vintage car day through central Bali, a volcano morning on Mount Batur and the hot springs afterwards.',
      image: img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Nusa Penida and Uluwatu',
    dayLabel: 'Day 4 to 7',
    images: [
      img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
      img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
      img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg')
    ],
    dayImages: {
      4: [
        img('s6oia0oiagnkeq420r3mvctsnzst_1595487162_shutterstock_670236505.jpg'),
        img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
        img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
      ],
      5: [
        img('t0maljvk56ovlztbtfx1w286arze_lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('o974vnhozbrtaa60gdp3uzoxorjz_37530932040_49a7318d15_o.jpg')
      ],
      6: [
        img('hqmy02zrpajp8q2k7o4uuu4ww7nw_jjhc9ym7ybnvbjfwnziy2v4q3gac_hau587bp52lss2s707h2akmhw3gb_v4i29j28zm6fic2s5hm5231e67ar_1498545551_meslastidronestagram.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('usdgmsoaand8ytcb34q674qu6c2p_1470909118_Hanoman_Kecak_Dance_Uluwatu_sunset.jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg')
      ],
      7: [
        img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
        img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
        img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Rafting and on to Kuta`,
      'Breakfast and check out, then a tandem quad bike route',
      'Rice fields, a river crossing and a cave tunnel',
      'Twelve kilometres of rafting on the Ayung river',
      'Private transfer down to Legian and check in',
      `${DAY_MARK}Day 5 · Nusa Penida and Paluang cliff`,
      'Early breakfast, then private transfer to Sanur harbour',
      'Speedboat across to Nusa Penida for the west coast',
      'The Paluang cliff, Kelingking beach and Angel\'s Billabong',
      'Return boat to Bali and back to your hotel',
      `${DAY_MARK}Day 6 · Melasti beach and Uluwatu`,
      'Breakfast, then a morning at Tanjung Benoa beach',
      'Banana boat and jet ski with an instructor',
      'Melasti beach, white sand below the cliffs',
      'Uluwatu temple and the Kecak fire dance at sunset',
      `${DAY_MARK}Day 7 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Fairfield by Marriott Bali Legian, Kuta',
      description: '3 nights · Breakfast · Standard room · 4★ · Four star hotel in Legian with a rooftop pool',
      images: [
        img('affype0y66j5ueajq98c415kgetz_ced8509dbfc9f96f59242fb58cdc65210da45cbb.JPEG'),
        img('vrmbbldekdtnkvxbgqfchjjywbtm_ac1cd0fcfa22e5232c101ec01c24fab5553c652a.JPEG'),
        img('nepit201kfu8spry05rolmvmhryg_724718211e1aa4fd672344c6148127fd333bf8ad.JPEG'),
        img('eop7l1d5e8pyqmmu9jeyjogvjpxc_08da389cba0f89cf1ca1d4cb11fa474b9f7f8e8f.JPEG'),
        img('q3nl5lwcozx03vvqzwo0rfmghr3e_c3f0ec5beea7b4eef8ec22111b679c9f2c6d7037.JPEG'),
        img('cc87i8fyepmq4o1n51w5dafz34w9_c9f0f82817528a1125321d96f1e56a2e0960a0fc.JPEG'),
        img('pjfvcw9ihbj8j1lykhb6pdllg27w_72688d62020acac789f04b989c08ca6bce0d20d3.JPEG'),
        img('b0sx3k1jutg0m9o557uyg7k13uoq_8d23804f65b033f0bcf9a3eb3c2e87eebd9ebbe3.JPEG'),
        img('ib4iill1buyhfxzqr8ho2fc5k2r3_9a1f129500ad59c28e2a67ad1e6f211e98724bc1.JPEG'),
        img('2m89gz48lc4etdsp35enlzya9lom_45fbc197151369706bbf7861a0defe9a0b52e9e8.JPEG'),
        img('nil8icpbzdmvw781nrnndgcmbbjf_ebc2c213ec0da5de01b3bad59819b8c50bb15fce.JPEG'),
        img('ns2q7m21kusqipxqje4kp6xidb0v_3af13f54fbe36b1a67744f496556269e2dfd64ba.JPEG'),
        img('xhh5vjymzdzve2fxharylzyzvbvt_b27d4d4e4ddcdb64ca33ebf803c2288e6f5f252e.JPEG'),
        img('v3v7m9pfks6cufpn60vtcg9ydut3_9d41f5da385b35b221d3b2d1b3c39d95b624be5a.JPEG'),
        img('gj09oicarkfwi8t9bfr9ypetr8h7_845c33612472450f8b51ed93ea5088ec792daf1b.JPEG'),
        img('qq8746cnqwiagtr6tf8h6mzkc24q_e330b96c5571ea05f9e553ebf2dec89f96da23b4.JPEG'),
        img('xxoeu2usel9mvueonmtrp5kqb0jo_2f813546d88af02cd6adb50cbff74b244f6168cd.JPEG'),
        img('glhc8sxco2gd5joj1e7tiq5nrca6_a6cf3795fb6698b062b6b3bfb247b3a1050d8e7a.JPEG'),
        img('772o00jbqy412kf3i3hwn8g4tef6_06ed183881ab2b07298e0aabe5394c43dcb08aa0.JPEG'),
        img('hai9ktxqasnujfx071bt1k15edpt_fe251e21a2ef80c1ac7b3a9463e8805fa353d552.JPEG'),
        img('ez3zrizl3k9jgkpci35945340u1i_d001473f5d45826cc8de9aeddf5936796694ebac.JPEG'),
        img('pi42y9usu3u23mypdmbp7k1z8gwq_44c1b68f31e5535d52e1d24daec1535af041466c.JPEG'),
        img('9hxvjjemj2jyvodeum0f7e3il2wz_11f5b29e39429d8cf608b021132c90f43a4fbad2.JPEG'),
        img('r8b4xuidkc8koc5hta1w44ihrkmn_3db228894a283c949bbb805ac9432ce89c92765c.JPEG'),
        img('tfjlgjt228xfxs7sn5k4bwmgiaml_09dd0d49b907c2192dee36b354abcd6bd0c58f31.JPEG')
      ]
    },
    activities: [
      {
        name: 'Quad bikes and Ayung river rafting',
        day: 4,
        optional: false,
        image: img('s6oia0oiagnkeq420r3mvctsnzst_1595487162_shutterstock_670236505.jpg'),
        description: 'A two seat quad bike route in the morning, then twelve kilometres of grade two rapids on the Ayung river through jungle gorges.'
      },
      {
        name: 'Nusa Penida west with Paluang cliff',
        day: 5,
        optional: false,
        image: img('t0maljvk56ovlztbtfx1w286arze_lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        description: 'Speedboat across for the Paluang cliff viewpoint, Kelingking beach and the rock arch at Angel\'s Billabong, with Broken Bay after it.'
      },
      {
        name: 'Water sports, Melasti and Uluwatu',
        day: 6,
        optional: false,
        image: img('hqmy02zrpajp8q2k7o4uuu4ww7nw_jjhc9ym7ybnvbjfwnziy2v4q3gac_hau587bp52lss2s707h2akmhw3gb_v4i29j28zm6fic2s5hm5231e67ar_1498545551_meslastidronestagram.jpg'),
        description: 'Banana boat and jet ski at Tanjung Benoa, the white sand at Melasti beach, then Uluwatu temple and the Kecak dance at sunset.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights in Legian with a rafting day, a full island day on Nusa Penida and a south coast day that ends at Uluwatu.',
      image: img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg')
    }
  }
];

const detail = {
  slug: 'bali-couples-escape-with-rafting',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bali Couples Escape with Rafting',
  alt: 'Batur hot springs beside the crater lake, Bali',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Adventure'],
  price: 44018,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Mount Batur', 'Ayung River', 'Kuta', 'Uluwatu'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 6, transfers: 14 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['14 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Couples who want more than beaches take this one. A volcano, a river and three island days, with a Marriott at the end.',
    quoteMore: 'The hot springs after Batur are the part everyone underrates, so carry swimwear up with you. Rafting falls on moving day, so keep one small bag out and we will move the rest.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days for active couples: three nights near Ubud with a vintage car day, Mount Batur and the hot springs, then three in Legian with quad bikes and rafting on the Ayung river, Nusa Penida and sunset at Uluwatu.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with daily breakfast; private airport and inter city transfers; central Bali tour in a vintage Volkswagen; Mount Batur with the hot springs; Balinese massage for two; quad bike ride with Ayung river rafting; Nusa Penida west coast tour; water sports with Melasti and Uluwatu.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Ubud (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your villa resort near Ubud\nFirst evening free by the pool\nOptional: the Monkey Forest or the Ubud art market', hotel: 'Ubud Raya Villa', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your villa resort near Ubud', 'First evening free by the pool'] },
    { title: 'Day 2: Central Bali by vintage car (B)', text: 'Breakfast, then a day out in an open top vintage Volkswagen\nThe Bali swing and Tegenungan waterfall\nTirta Empul, the holy spring temple\nThe Tegalalang rice terraces on the way back', hotel: 'Ubud Raya Villa', highlights: ['Breakfast, then a day out in an open top vintage Volkswagen', 'The Bali swing and Tegenungan waterfall', 'Tirta Empul, the holy spring temple'] },
    { title: 'Day 3: Mount Batur and hot springs (B)', text: 'Early breakfast, then up to the Mount Batur slopes\nThe Kintamani crater view across the lake\nAn hour in the Batur hot springs\nAn hour of Balinese massage for two back in Ubud', hotel: 'Ubud Raya Villa', highlights: ['Early breakfast, then up to the Mount Batur slopes', 'The Kintamani crater view across the lake', 'An hour in the Batur hot springs'] },
    { title: 'Day 4: Rafting and on to Kuta (B)', text: 'Breakfast and check out, then a tandem quad bike route\nRice fields, a river crossing and a cave tunnel\nTwelve kilometres of rafting on the Ayung river\nPrivate transfer down to Legian and check in', hotel: 'Fairfield by Marriott Bali Legian', highlights: ['Breakfast and check out, then a tandem quad bike route', 'Rice fields, a river crossing and a cave tunnel', 'Twelve kilometres of rafting on the Ayung river'] },
    { title: 'Day 5: Nusa Penida and Paluang cliff (B)', text: 'Early breakfast, then private transfer to Sanur harbour\nSpeedboat across to Nusa Penida for the west coast\nThe Paluang cliff, Kelingking beach and Angel\'s Billabong\nReturn boat to Bali and back to your hotel', hotel: 'Fairfield by Marriott Bali Legian', highlights: ['Early breakfast, then private transfer to Sanur harbour', 'Speedboat across to Nusa Penida for the west coast', 'The Paluang cliff, Kelingking beach and Angel\'s Billabong'] },
    { title: 'Day 6: Melasti beach and Uluwatu (B)', text: 'Breakfast, then a morning at Tanjung Benoa beach\nBanana boat and jet ski with an instructor\nMelasti beach, white sand below the cliffs\nUluwatu temple and the Kecak fire dance at sunset', hotel: 'Fairfield by Marriott Bali Legian', highlights: ['Breakfast, then a morning at Tanjung Benoa beach', 'Banana boat and jet ski with an instructor', 'Melasti beach, white sand below the cliffs'] },
    { title: 'Day 7: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Indonesia', href: '/asien/indonesia' },
  { label: detail.title }
];

export const baliCouplesEscapeRaftingBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const baliCouplesEscapeRaftingProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Mount Batur', 'Ayung River', 'Kuta', 'Uluwatu'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 6,
  transfers: 14,
  meals: 6,
  price: detail.price,
  images: cardImages
};
