// Bhutan Getaway with the Gangtey Cranes. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
  img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
  img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
  img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
  img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
  img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg'),
  img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
  img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
  img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('pimaffguwc8nga3w0gcv8g43kv6b_2020-02-23.jpg'),
  img('fh5dpaahcf1mr1yha9ltcqdedz7z_Kumbu-Lhakhang_overview.jpg'),
  img('454brd6k50211n43a0yftowm95xq_p02qyk6d.jpg.webp')
];

const stops = [
  {
    letter: 'A',
    name: 'Phuentsholing',
    dayLabel: 'Day 1',
    images: [
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
    ],
    dayImages: {
      1: [
        img('pimaffguwc8nga3w0gcv8g43kv6b_2020-02-23.jpg'),
        img('wzk43phe3f2n5pie7psn6bf6ehe8_torsa%201.jpg'),
        img('ljpqw4npv8wncod5fq1r7hw2zt5y_shutterstock_1344366731.jpg'),
        img('khf8y1lpqxenviw5vczf0uh2ytj0_Zangto_Pelri_Lhakhang,_Phuentsholing_during_LGFC_-_Bhutan_2019_(14).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuentsholing`,
      'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing',
      'Border formalities at the Bhutan Gate',
      'Check in and the rest of the day free'
    ],
    accommodation: {
      name: 'Alem Hotel & Resort, Phuntsholing',
      description: '1 night · Breakfast · Standard room · 3★ · Border town hotel on the Indian frontier',
      images: [
        img('xb0ui8y5x5wxjz4fdp2eelkzwop3_ALEM%20HOTEL%201.png'),
        img('vhwmxsf05k1b5zll1hdfgctkhzlw_ALEM%20HOTEL%20&%20RESORT%205.png'),
        img('hrne0ac1xq5ci854uv8hj866zmz2_ALEM%20HOTEL%20&%20RESORT%203.png'),
        img('n72sfstn5kuvb8qtp411ipj2m8cr_ALEM%20HOTEL%20&%20RESORT%206.png'),
        img('ckqlf4pmifsn79lh4yj5x9ayt60f_ALEM%20HOTEL%20&%20RESORt%202.png'),
        img('ty3kubkk6p85fr7v5el1m7agtfib_ALEM%20HOTEL%20&%20RESORT%204.png'),
        img('5qlfw5ho6mmsz0qwg0gwetm7pwqx_9720visit%20bhutan%20Alem%20Hotel%20and%20Resort%20Phuentsholing%2012.jpg'),
        img('wm6ngq43270xmmxvtgggew2eqp5k_ALEM%20HOTEL%20&%20RESORT%209.png'),
        img('pz67hsrfrwibbteak98y8nlv6pso_ALEM%20HOTEL%20&%20RESORT%208.png')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Thimphu',
    dayLabel: 'Day 2 to 3',
    images: [
      img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
      img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
      img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg'),
      img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg')
    ],
    dayImages: {
      2: [
        img('bug5yze180o5xjfqveckpjqiqtoe_0378-JGF-Dechen-Phodrang-Bhutan.jpg'),
        img('o4xiotph7os69ac0uxsmaew06pbw_1621019442_shutterstock_1187906419.jpg'),
        img('cdl5xosospzimjwzry1vumk497kb_The-Romantic-Nature-Park-of-Thimphu-Ludrong-Memorial-Garden.jpg'),
        img('tjnb0oiw0n2xc11ykp20xbzbu0lm_PHOTO-2024-09-16-17-35-35.jpg')
      ],
      3: [
        img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        img('2xgygw98g58o2olcep4vlh9r5k0u_1481602683_View_of_the_National_Memorial_Chorten__Thimphu.jpg'),
        img('4r58yve0h6te2i0muhp7hprr7rtu_24024165679_103d7a2e7c_b.jpg'),
        img('fecad1jg1gwzqki7ltqfxszyzl24_1200px-Changangkha_Lhakhang_2021.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Onward to Thimphu`,
      'Breakfast, then north into the hills towards Thimphu',
      'The Chukha dam and the Wang Chhu gorge on the way',
      'Optional: the Zorig Chusum school of arts',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 3 · Thimphu sightseeing`,
      'Breakfast, then out into the capital',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and the takin preserve'
    ],
    accommodation: {
      name: 'Forest Boutique, Thimphu City',
      description: '2 nights · Breakfast · Standard room · 3★ · Comfortable hotel in the capital, walkable to the clock tower',
      images: [
        img('0jmhncfthbwg7veihsbti5jnqdwc_xugz5vg4mpmzb13moklxsm6jav27_03-1-scaled%20copy.jpg'),
        img('7qxq3pn5fbgm3q31j26sujtdwkit_044-scaled.jpg'),
        img('hbbyvwgqhtqbp60s9yb0s98e1e8a_06-2-scaled.jpg'),
        img('uui2a7icqan259yrzsb213xb79my_hp74y9qzh0b8hhnbm09yrz6abm46_016-scaled%20copy.jpg'),
        img('jutb45auzwrsofd0jnjbn76ipqi2_1y1g9te3x10lod7y4uzt35469ij0_015-scaled%20copy.jpg'),
        img('cxqrkos0xdba3hxdgcit78w2fdpw_ieds25oc6cibkbwi8e9o10p5a4km_013-scaled%20copy.jpg'),
        img('a67snidctr2pvndbaun6icvh2smt_gh09wij4qgjn9ll4dvl8cfqjj2nt_019-scaled%20copy.jpg'),
        img('8ivabl7tsoao6408x76xp47pun0w_63c279tr22qa2ltinjj0xb0wh3wt_047-scaled%20copy.jpg')
      ]
    },
    activities: [
      {
        name: 'Thimphu sightseeing tour',
        day: 3,
        optional: false,
        image: img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        description: 'A guided day round the capital with the Memorial Chorten, the Buddha Dordenma, Tashichho Dzong and the takin preserve.'
      }
    ],
    program: {
      name: 'Thimphu',
      description: 'Days in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong.',
      image: img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Gangtey',
    dayLabel: 'Day 4',
    images: [
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
      img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
      img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg')
    ],
    dayImages: {
      4: [
        img('fh5dpaahcf1mr1yha9ltcqdedz7z_Kumbu-Lhakhang_overview.jpg'),
        img('454brd6k50211n43a0yftowm95xq_p02qyk6d.jpg.webp'),
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Onward to Gangtey`,
      'Breakfast, then up to the Gangtey ridge',
      'The Phobjikha valley opening out below the road',
      'Optional: the Gangtey nature trail',
      'Arrival transfer and check in for the night'
    ],
    accommodation: {
      name: 'ABC Lodge, Gangtey, Nubding',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Simple lodge on the edge of the Phobjikha valley',
      images: [
        img('lye9ecn4355hko7o837e6ni8qd4w_DrukAsia_062719_1-transformed.jpeg'),
        img('ctdk9k781ijg52d5fmxu7gnfqluy_abc-eco-lodge.jpg'),
        img('vx29xhkp5d337wlyhn7hlty63ozt_abc-eco-lodge%20(1).jpg'),
        img('1r5yxoj8a7srmf7wx7vubgzkmila_20190611-172629-largejpg.jpg'),
        img('ofokiwj7jurqjwg4v1qny6dv7hep_abc-eco-lodge%20(6).jpg'),
        img('25z0rejwkjsvmol6sad4w9t08cts_abc-eco-lodge%20(7).jpg'),
        img('ebzltpv3lkl4fdl0iw527d1h6rtk_abc-eco-lodge%20(2).jpg'),
        img('vwym4asyn3jups8gwvo8qw1spem4_abc-eco-lodge%20(4).jpg'),
        img('kztyy9awvq2tp1hzumqz05w2xyeq_abc-eco-lodge%20(5).jpg'),
        img('5fshmt9obup4lwi8rtrs17axcqsi_abc-eco-lodge%20(3).jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Gangtey',
      description: 'Time on the Gangtey ridge above the crane valley at Phobjikha.',
      image: img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Punakha',
    dayLabel: 'Day 5',
    images: [
      img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg'),
      img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
      img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
      img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg')
    ],
    dayImages: {
      5: [
        img('hwdpzwlcu41cs2x6cq1rpgsee8zq_Gangtey%20Goemba%20Buddhist%20monastery%201.jpg'),
        img('j6mdu0tk28hq758kizrzzcm2hb9z_Bhutan-Dana_Scheffler-1.png'),
        img('tu7006jnl2qdcjom4vk9czur2rz7_1621019190_shutterstock_197981387.jpg'),
        img('lmylwwkh8qs7zmhzxppfsordx82s_shutterstock_684974815.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · To Punakha: Gangtey`,
      'Breakfast, then east over the Dochula pass',
      'The hundred and eight chortens at the top',
      'Gangtey Goemba on its low ridge',
      'The crane valley spread out below',
      'The festival ground below Gangtey Goemba',
      'Schoolchildren dancing as the cranes come in'
    ],
    accommodation: {
      name: 'Punakha Residency, Punakha',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Riverside hotel in the warm old winter capital',
      images: [
        img('wgs9qfjsa1kq9xnb51sl4aek0hq3_WhatsApp-Image-2023-10-04-at-20.29.48_1cf2fbb5.jpg'),
        img('uzh2uqugxsh2ziey28gji5iwgobt_WhatsApp-Image-2023-10-04-at-20.29.57_7cf2dd98.jpg'),
        img('ede66bd6rnka4s5w7ygk3jdlkbxd_WhatsApp-Image-2023-10-04-at-20.29.54_742c871c.jpg'),
        img('14vk6ajb6zseim67psfg1mzge9zg_3.jpg'),
        img('xb2p4dcyhyy8uif1w5ih3vk5ljj6_a370465a.png'),
        img('fw59tbsfm6u56wpo2flqvf2tkips_WhatsApp-Image-2023-10-04-at-20.30.10_134cca55.jpg'),
        img('gqwraduycf7fjyuk33clmn3ikkcy_WhatsApp-Image-2023-10-04-at-20.29.59_87ca0008.jpg'),
        img('sy51n6x0bfdcge6ul7p84zb1vssg_1305f32b.png')
      ]
    },
    activities: [
      {
        name: 'Gangtey and the Phobjikha valley',
        day: 5,
        optional: false,
        image: img('hwdpzwlcu41cs2x6cq1rpgsee8zq_Gangtey%20Goemba%20Buddhist%20monastery%201.jpg'),
        description: 'Gangtey Goemba on its low ridge above the Phobjikha valley, the winter ground of the black necked cranes.'
      },
      {
        name: 'Black necked crane festival',
        day: 5,
        optional: false,
        image: img('gqwcojjfh4og7hsri9n2wg2a8sbn_20241111_124726%20(1).webp'),
        description: 'The November festival at Gangtey Goemba that marks the return of the black necked cranes to the Phobjikha valley.'
      }
    ],
    program: {
      name: 'Punakha',
      description: 'Time in the warm old winter capital, with the Dzong between two rivers and the suspension bridge.',
      image: img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Paro',
    dayLabel: 'Day 6 to 7',
    images: [
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
      img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
      img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
    ],
    dayImages: {
      6: [
        img('bhp0lyp0ntb70w7pv4icfuv00hz5_Punakha%20Dzong%20Monastery%201.jpg'),
        img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg'),
        img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg'),
        img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
      ],
      7: [
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        img('arryt9zia20eawdl6ai40dhg5aut_1481602641_kuil-terindah-di-asia.jpg'),
        img('fzdyssdaclzxlq2dqjhjvk5qgohi_a04284e4399dd2bcf97743a78860dea6%20(2).jpg'),
        img('g94e1ices5lqxt7yr78i9u28iy9k_20180708-192648-largejpg.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · To Paro: Punakha Dzong`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'Punakha Dzong between the Pho and Mo rivers',
      'The long suspension bridge over the water',
      `${DAY_MARK}Day 7 · Tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face'
    ],
    accommodation: {
      name: 'Paro Grand Resort, Paro',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Quiet hotel in the valley below Taktsang',
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
        day: 6,
        optional: false,
        image: img('bhp0lyp0ntb70w7pv4icfuv00hz5_Punakha%20Dzong%20Monastery%201.jpg'),
        description: 'The fortress where Bhutan’s kings are crowned, built on the spit of land where two rivers meet below the town.'
      },
      {
        name: 'Hike to the Tiger\'s Nest',
        day: 7,
        optional: false,
        image: img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        description: 'The climb to Taktsang, the monastery wedged into a cliff nine hundred metres above the Paro valley floor.'
      }
    ],
    program: {
      name: 'Paro',
      description: 'Days in the valley below Taktsang, with Rinpung Dzong, the National Museum and the Tiger’s Nest hike.',
      image: img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Phuentsholing',
    dayLabel: 'Day 8 to 9',
    images: [
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
    ],
    dayImages: {
      8: [
        img('r216cx5wtx6y2mlcx31wzb1avzpz_Palden_Tashi_Chholing_Shedra_01.jpg'),
        img('l0fq7fjbnhs2rdw73cyv4fa8c62i_Phuentsholing-Market-1024x682.jpg'),
        img('yiup7qro2cobgjuqbppy9xaxknbw_pic3.jpg'),
        img('v9tvcl55e0nj7mgskiebh2i0taiy_dam.jpg')
      ],
      9: [
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
        img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
        img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Onward to Phuentsholing`,
      'Breakfast, then the long run back south',
      'Down through the Chukha gorge to the plains',
      'Optional: Zangto Pelri Lhakhang in the town',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 9 · Departure from Siliguri`,
      'Breakfast at the hotel and check out',
      'Border formalities and transfer to Siliguri'
    ],
    accommodation: {
      name: 'Legphel Hotel, Phuntsholing',
      description: '1 night · Breakfast · Standard room · 3★ · Border town hotel on the Indian frontier',
      images: [
        img('sdvuq9s3gl6rhxg7ty1k7kdbgl9v_Legphel%20Hotel7.jpg'),
        img('edloiky3s19jw7q7nxzb53fnb6ih_Legphel%20Hotel2.jpg'),
        img('znrb4chxmws2mvfr9kqxuiqlamv4_Legphel%20Hotel4.jpg'),
        img('sx8zrwmeg7wzkr17uee8nhekhbu3_Legphel%20Hotel8.jpg'),
        img('iurx4q85zuky4pxdheostm3lnuze_Legphel%20Hotel1.jpg'),
        img('rcjt9ev5kfn7k3h784uxmvlskbaf_Legphel%20Hotel6.jpg'),
        img('y8aokkm5px7pepyct1fhx57pzgeh_Legphel%20Hotel5.jpg'),
        img('kubc7ognnjkrwqyve8pp5olxxeun_Legphel%20Hotel9.jpg'),
        img('4qh4x0yg2u7m1l701d22vf2hlml7_Legphel%20Hotel3.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg')
    }
  }
];

const detail = {
  slug: 'bhutan-getaway-with-the-gangtey-cranes',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bhutan Getaway with the Gangtey Cranes',
  alt: 'Gangtey Goemba above the wintering crane grounds',
  days: '9 days / 8 nights',
  stations: '6 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Nature',
  tags: ['Nature', 'Culture'],
  price: 44631,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Gangtey', 'Punakha', 'Paro', 'Phuentsholing'],
  stats: { days: 9, cities: 6, hotels: 6, activities: 5, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['6 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['13 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'A night actually up at Gangtey rather than a day trip, timed for the crane festival in November.',
    quoteMore: 'Gangtey has no central heating in the cheaper lodges. Ask for a bukhari, the wood stove, and they will light it before you turn in.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '9 days through Phuentsholing, Thimphu, Gangtey, Punakha, Paro, with 8 nights, Breakfast and dinner each day and a licensed Bhutanese guide: the thimphu sightseeing tour, the gangtey and the phobjikha valley, the black necked crane festival, the punakha sightseeing tour.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights across Phuentsholing, Thimphu, Gangtey, Punakha, Paro with Breakfast and dinner each day; all land transfers by private vehicle; the Thimphu sightseeing tour; the Gangtey and the Phobjikha valley; the Black necked crane festival; the Punakha sightseeing tour; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (L)', text: 'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Alem Hotel & Resort', highlights: ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Onward to Thimphu (B)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'Forest Boutique', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 3: Thimphu sightseeing (B)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and the takin preserve', hotel: 'Forest Boutique', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and the takin preserve'] },
    { title: 'Day 4: Onward to Gangtey (B)', text: 'Breakfast, then up to the Gangtey ridge\nThe Phobjikha valley opening out below the road\nOptional: the Gangtey nature trail\nArrival transfer and check in for the night', hotel: 'ABC Lodge, Gangtey', highlights: ['Breakfast, then up to the Gangtey ridge', 'The Phobjikha valley opening out below the road', 'Optional: the Gangtey nature trail'] },
    { title: 'Day 5: To Punakha: Gangtey (B, L)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nGangtey Goemba on its low ridge\nThe crane valley spread out below\nThe festival ground below Gangtey Goemba\nSchoolchildren dancing as the cranes come in', hotel: 'Punakha Residency', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'Gangtey Goemba on its low ridge'] },
    { title: 'Day 6: To Paro: Punakha Dzong (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water', hotel: 'Paro Grand Resort', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'Punakha Dzong between the Pho and Mo rivers'] },
    { title: 'Day 7: Tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Paro Grand Resort', highlights: ['Breakfast, then out into the Paro valley', 'The climb up the pine slope to Taktsang', 'The monastery wedged into the cliff face'] },
    { title: 'Day 8: Onward to Phuentsholing (B, L)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nOptional: Zangto Pelri Lhakhang in the town\nArrival transfer and check in for the night', hotel: 'Legphel Hotel', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Optional: Zangto Pelri Lhakhang in the town'] },
    { title: 'Day 9: Departure from Siliguri (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Bhutan', href: '/asien/bhutan' },
  { label: detail.title }
];

export const bhutanGetawayGangteyCranesBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bhutanGetawayGangteyCranesProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Gangtey', 'Punakha', 'Paro'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 6,
  hotels: 6,
  cities: 6,
  activities: 5,
  transfers: 12,
  meals: 13,
  price: detail.price,
  images: cardImages
};
