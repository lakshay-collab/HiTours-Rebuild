// Paradisic Bhutan: Luxury. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
  img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
  img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
  img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
  img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
  img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
  img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
  img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
  img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('eljv9nfavq2ojeluvwgegg0j5t8o_shutterstock_1380814979.jpg')
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
        img('ljpqw4npv8wncod5fq1r7hw2zt5y_shutterstock_1344366731.jpg'),
        img('khf8y1lpqxenviw5vczf0uh2ytj0_Zangto_Pelri_Lhakhang,_Phuentsholing_during_LGFC_-_Bhutan_2019_(14).jpg'),
        img('eljv9nfavq2ojeluvwgegg0j5t8o_shutterstock_1380814979.jpg'),
        img('wzk43phe3f2n5pie7psn6bf6ehe8_torsa%201.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuentsholing`,
      'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing',
      'Border formalities at the Bhutan Gate',
      'Check in and the rest of the day free'
    ],
    accommodation: {
      name: 'Tashi Namgay Grand Resort, Phuntsholing',
      description: '1 night · Breakfast · Standard room · 4★ · Border town hotel on the Indian frontier',
      images: [
        img('w47is3ljf54flmuyzuro7gopkiye_download%20(6).jpg'),
        img('cluj5h6bj5pom3lu89t6poxsffq0_download%20(5).jpg'),
        img('a3znxzo9xo282s3t3x5br3hw6ynr_download%20(1).jpg'),
        img('x8fi22al87fhd5dxdbcqglzwfy31_download%20(3).jpg'),
        img('i9gx74ziaod88z0w097p357pvt9m_download%20(4).jpg'),
        img('e4w4g6np7w1rai4gscb1o1x3eu8t_download%20(2).jpg')
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
      img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
      img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
      img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
      img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg')
    ],
    dayImages: {
      2: [
        img('wpd0woa96sv8ztpl35qc0pohtx5e_shutterstock_1698546493.jpg'),
        img('z1nao5xw3j8otdqp9mapxinwhbc8_43467023271_24c0307027_b.jpg'),
        img('cdl5xosospzimjwzry1vumk497kb_The-Romantic-Nature-Park-of-Thimphu-Ludrong-Memorial-Garden.jpg'),
        img('81za99vumt6f6la3nrht98bojvh9_DSC_0194.JPG')
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
      `${DAY_MARK}Day 3 · Thimphu and simtokha`,
      'Breakfast, then out into the capital',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and Simtokha Dzong'
    ],
    accommodation: {
      name: 'dusitD2 Yarkay Thimphu, Thimphu City',
      description: '2 nights · Breakfast · Standard room · 5★ · Comfortable hotel in the capital, walkable to the clock tower',
      images: [
        img('f3t9hzt7b1elk3dam0sha3x0ekh4_dusitd2-yarkay-thimphu.jpg'),
        img('xh53vxjlvl50x3o9u6quh04omndw_200c1a00000194y1e820E_W_1280_853_R5.webp'),
        img('ixtb5nwvix3ykxws8ih3t3ec77tk_0222d12000cmddkz79D38_W_1280_853_R5.webp'),
        img('z7vdmvdfrswebmswlbvq88tb2h9c_0224u12000amdy0e5649E_W_1280_853_R5.webp'),
        img('k4561mfj2ubbfa2czap32eadm8f1_0221512000amdy0zh2A33_W_1280_853_R5.webp'),
        img('cedgs6codp0zc2dzco6a78uvye8l_0225a12000at6yarf56F6_W_1280_853_R5.webp'),
        img('uajfem3zqg0hclaa9kb9r16yzl0x_0223s12000bbe465240CE_W_1280_853_R5.webp'),
        img('32pkoimx2yof8qom6ap0vxm6vl98_0224v12000amdy1d30370_W_1280_853_R5.webp'),
        img('4mx1so1ytvqh1wor3x6p0onmwpcu_0224h12000b350oo2387B_W_1280_853_R5.webp'),
        img('v5v0ieh7ys8lqyisyjvj63xbn7qu_0225412000amdxzo01ED8_W_1280_853_R5.webp'),
        img('6i7tt23pvkt2qlatni64tootndme_0221912000ap7yzbl25F4_W_1280_853_R5.webp'),
        img('7bicib0jct0d1s78klry0ongpg8s_02204120008lukzeu14A0_W_1280_853_R5.webp')
      ]
    },
    activities: [
      {
        name: 'Thimphu sightseeing with Simtokha Dzong',
        day: 3,
        optional: false,
        image: img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        description: 'The capital on foot and by road, finishing at Simtokha Dzong, the oldest fortress still standing in the country.'
      }
    ],
    program: {
      name: 'Thimphu',
      description: 'Days in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong.',
      image: img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Paro',
    dayLabel: 'Day 4 to 5',
    images: [
      img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
      img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
      img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg')
    ],
    dayImages: {
      4: [
        img('7wtjcew9pt0l5gb114psj5iejfuv_zuri%201.jpg'),
        img('05rlzdc2y8brcld8c7828vj4ep7l_1818px-Mapcarta.jpg'),
        img('cqkmm6osyea6dv7f1zj0xxgqutx3_shutterstock_345764054.jpg'),
        img('ea52i8c2oat4hrv07sotkmtwj5d3_download.jpg')
      ],
      5: [
        img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        img('lvrrucang7e4i29fjjrr5dv1hfbg_1481602680_Ta_Dzong_museum.jpg'),
        img('40nfujj31s5rphnc2usp8a680fzp_1571657529_1280px-Rinpung_Dzong__Bhutan_01.jpg'),
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Onward to Paro`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'Optional: Zuri Dzong and the Five Chortens',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 5 · Ta dzong and rinpung dzong and tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The round watchtower holding the National Museum',
      'Rinpung Dzong on the slope above the river',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face'
    ],
    accommodation: {
      name: 'Himalayan Keys Forest Resort, Paro',
      description: '2 nights · Breakfast · Standard room · 5★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('t0kj737z6kll901wtj95kh6u3y8l_download%20-%202024-05-06T190201.307.jpg'),
        img('6vxojcg2nanz6535xuvly05a55gn_ece7ee0d.png'),
        img('nl2g0a7z7k1w4osan7esb2i2cswx_download%20-%202024-05-06T190231.107.jpg'),
        img('2l3essmx9b2t05ak34m4m73fufbs_download%20-%202024-05-06T190612.011.jpg'),
        img('r8knalj28mixzm2eqe3nyrjd2ehq_download%20-%202024-05-06T190226.042.jpg'),
        img('088w38ged9lx1hxqgp5opgi2mp33_download%20-%202024-05-06T190632.764.jpg'),
        img('0poh489qx10u8zcwh6w68741kdad_download%20-%202024-05-06T190601.426.jpg'),
        img('g5ymafcxe4gr3w1v84bx9yz20xhf_download%20-%202024-05-06T190243.503.jpg'),
        img('ad6d4qzlgttwq1xostntv2gxd0m2_download%20-%202024-05-06T190250.831.jpg'),
        img('ddyrnet9h0lu7uagmcecowixcgwg_download%20-%202024-05-06T190650.463.jpg'),
        img('j4bemhisyc02pvjah8cd6rx6in4v_download%20-%202024-05-06T190218.558.jpg'),
        img('8zh1n6hglq5zrn8bx8f89owj31bh_download%20-%202024-05-06T190210.401.jpg')
      ]
    },
    activities: [
      {
        name: 'Ta Dzong and Rinpung Dzong',
        day: 5,
        optional: false,
        image: img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        description: 'The round watchtower that now holds the National Museum, and the whitewashed Rinpung fortress above the river.'
      },
      {
        name: 'Hike to the Tiger\'s Nest',
        day: 5,
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
    letter: 'D',
    name: 'Phuentsholing',
    dayLabel: 'Day 6 to 7',
    images: [
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
    ],
    dayImages: {
      6: [
        img('v9tvcl55e0nj7mgskiebh2i0taiy_dam.jpg'),
        img('t524u3xv63svk6fkf5xqyvn08j3g_mandir.jpg'),
        img('r216cx5wtx6y2mlcx31wzb1avzpz_Palden_Tashi_Chholing_Shedra_01.jpg'),
        img('l0fq7fjbnhs2rdw73cyv4fa8c62i_Phuentsholing-Market-1024x682.jpg')
      ],
      7: [
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
        img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
        img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Onward to Phuentsholing`,
      'Breakfast, then the long run back south',
      'Down through the Chukha gorge to the plains',
      'Optional: Zangto Pelri Lhakhang in the town',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 7 · Departure from Siliguri`,
      'Breakfast at the hotel and check out',
      'Border formalities and transfer to Siliguri'
    ],
    accommodation: {
      name: 'Tashi Namgay Grand Resort, Phuntsholing',
      description: '1 night · Breakfast · Standard room · 4★ · Border town hotel on the Indian frontier',
      images: [
        img('w47is3ljf54flmuyzuro7gopkiye_download%20(6).jpg'),
        img('cluj5h6bj5pom3lu89t6poxsffq0_download%20(5).jpg'),
        img('a3znxzo9xo282s3t3x5br3hw6ynr_download%20(1).jpg'),
        img('x8fi22al87fhd5dxdbcqglzwfy31_download%20(3).jpg'),
        img('i9gx74ziaod88z0w097p357pvt9m_download%20(4).jpg'),
        img('e4w4g6np7w1rai4gscb1o1x3eu8t_download%20(2).jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
    }
  }
];

const detail = {
  slug: 'paradisic-bhutan-luxury',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Paradisic Bhutan: Luxury',
  alt: 'Five star suite looking over the Paro Chhu',
  days: '7 days / 6 nights',
  stations: '4 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Luxury',
  tags: ['Luxury', 'Culture'],
  price: 80950,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Paro', 'Phuentsholing'],
  stats: { days: 7, cities: 4, hotels: 3, activities: 3, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['12 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Six nights with Le Méridien in Thimphu and Paro. The quiet, unhurried version of our Paradisic route.',
    quoteMore: 'Thimphu and Paro both sit above two thousand metres. Take the first evening gently, drink water and skip the bar.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '7 days through Phuentsholing, Thimphu, Paro, with 6 nights, daily breakfast and a licensed Bhutanese guide: the thimphu sightseeing with simtokha dzong, the ta dzong and rinpung dzong, the hike to the tiger\'s nest.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights across Phuentsholing, Thimphu, Paro with daily breakfast; all land transfers by private vehicle; the Thimphu sightseeing with Simtokha Dzong; the Ta Dzong and Rinpung Dzong; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (L)', text: 'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Tashi Namgay Grand Resort', highlights: ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Onward to Thimphu (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'dusitD2 Yarkay Thimphu', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 3: Thimphu and simtokha (B, L)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and Simtokha Dzong', hotel: 'dusitD2 Yarkay Thimphu', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and Simtokha Dzong'] },
    { title: 'Day 4: Onward to Paro (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nOptional: Zuri Dzong and the Five Chortens\nArrival transfer and check in for the night', hotel: 'Himalayan Keys Forest Resort', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'Optional: Zuri Dzong and the Five Chortens'] },
    { title: 'Day 5: Ta dzong and rinpung dzong and tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe round watchtower holding the National Museum\nRinpung Dzong on the slope above the river\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Himalayan Keys Forest Resort', highlights: ['Breakfast, then out into the Paro valley', 'The round watchtower holding the National Museum', 'Rinpung Dzong on the slope above the river'] },
    { title: 'Day 6: Onward to Phuentsholing (B, L)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nOptional: Zangto Pelri Lhakhang in the town\nArrival transfer and check in for the night', hotel: 'Tashi Namgay Grand Resort', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Optional: Zangto Pelri Lhakhang in the town'] },
    { title: 'Day 7: Departure from Siliguri (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bhutan', href: '/asia/bhutan' },
  { label: detail.title }
];

export const paradisicBhutanLuxuryBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const paradisicBhutanLuxuryProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Paro'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 4,
  hotels: 3,
  cities: 4,
  activities: 3,
  transfers: 9,
  meals: 12,
  price: detail.price,
  images: cardImages
};
