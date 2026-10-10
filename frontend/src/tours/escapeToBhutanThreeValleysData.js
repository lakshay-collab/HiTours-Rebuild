// Escape to Bhutan: Three Valleys. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
  img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg'),
  img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
  img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
  img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
  img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
  img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
  img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
  img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
  img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
  img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
  img('2xgygw98g58o2olcep4vlh9r5k0u_1481602683_View_of_the_National_Memorial_Chorten__Thimphu.jpg'),
  img('4r58yve0h6te2i0muhp7hprr7rtu_24024165679_103d7a2e7c_b.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Thimphu',
    dayLabel: 'Day 1 to 2',
    images: [
      img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
      img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
      img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
      img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg')
    ],
    dayImages: {
      1: [
        img('cdl5xosospzimjwzry1vumk497kb_The-Romantic-Nature-Park-of-Thimphu-Ludrong-Memorial-Garden.jpg'),
        img('o4xiotph7os69ac0uxsmaew06pbw_1621019442_shutterstock_1187906419.jpg'),
        img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
        img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg')
      ],
      2: [
        img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        img('2xgygw98g58o2olcep4vlh9r5k0u_1481602683_View_of_the_National_Memorial_Chorten__Thimphu.jpg'),
        img('4r58yve0h6te2i0muhp7hprr7rtu_24024165679_103d7a2e7c_b.jpg'),
        img('fecad1jg1gwzqki7ltqfxszyzl24_1200px-Changangkha_Lhakhang_2021.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Thimphu`,
      'Arrival at Paro International and transfer to Thimphu',
      'The road east along the Pa Chhu and the Wang Chhu',
      'Check in and the rest of the day free',
      `${DAY_MARK}Day 2 · Thimphu and simtokha`,
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
        day: 2,
        optional: false,
        image: img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        description: 'The capital on foot and by road, finishing at Simtokha Dzong, the oldest fortress still standing in the country.'
      }
    ],
    program: {
      name: 'Thimphu',
      description: 'Days in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong.',
      image: img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Punakha',
    dayLabel: 'Day 3',
    images: [
      img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
      img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg'),
      img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
      img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg')
    ],
    dayImages: {
      3: [
        img('38kz4h1x67igl2szup6j3v7owa7v_steptodown.com744302.jpg'),
        img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg'),
        img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg'),
        img('fk9rfodqaqcnh9gy9tsxw2opj4gf_1571658047_Drc_gk7VYAAMVE4.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · To Punakha: Punakha Dzong`,
      'Breakfast, then east over the Dochula pass',
      'The hundred and eight chortens at the top',
      'Punakha Dzong between the Pho and Mo rivers',
      'The long suspension bridge over the water'
    ],
    accommodation: {
      name: 'RKPO Green Resort, Punakha',
      description: '1 night · Breakfast · Standard room · 5★ · Riverside hotel in the warm old winter capital',
      images: [
        img('xnknu5wj3e07umfmrnk51i64yug3_eae0335e329011e8bcb602755708f0b3.png'),
        img('1o5f3sjtsgn8vqnchorp70lwtrnx_7c5ae9d474cd11eab3900242ac110002.png'),
        img('xsg5307anmsx6p7rndoi2ao7r2e4_f365216a329011e898920224510f5e5b.png'),
        img('mygnio03l9aizmh0rqy0ff0fsxuw_9d839892c3dd11e89d680224510f5e5b.png'),
        img('rjsk9nsez88yxfotz2b6oysa43h4_279f5671_z.png'),
        img('zrba4iych8245wzy2rnoiwhm9m3a_7afbfb7874cd11ea9b140242ac110002.png'),
        img('sxstah32em9m5v7864vnw8b6re4f_91be85ae_z.png'),
        img('fmruziq87olx7qbkhuuhqq20q1mn_hgunmvncrwnxeugadf3m4jn01rn9_1d83b11e328c11e8a5f602755708f0b3%20copy.jpg'),
        img('aghjr02rb4bcqluvuz05d1bop9lq_f71f62ca329011e898a402755708f0b3.png'),
        img('n2nlkw257804tb2m6citqe22mync_gmdfou7kvh8djzg4qg4p1z5qg593_1581d112328c11e8bc6b0a9df65c8753%20copy.jpg'),
        img('nqoebxenazjia35jjzsgcmmqnnn2_fce336d2329011e8b76b02755708f0b3.png'),
        img('hh62fyt8q4gnjs220rzfm2z7w1vs_cad1e6dc_z.png'),
        img('afxkg3g5gq0z81x0dv3hsabo15jv_ffaf117e329011e8bb2002755708f0b3.png')
      ]
    },
    activities: [
      {
        name: 'Punakha sightseeing tour',
        day: 3,
        optional: false,
        image: img('38kz4h1x67igl2szup6j3v7owa7v_steptodown.com744302.jpg'),
        description: 'The fortress where Bhutan’s kings are crowned, built on the spit of land where two rivers meet below the town.'
      }
    ],
    program: {
      name: 'Punakha',
      description: 'Time in the warm old winter capital, with the Dzong between two rivers and the suspension bridge.',
      image: img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Paro',
    dayLabel: 'Day 4 to 6',
    images: [
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
      img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
      img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
    ],
    dayImages: {
      4: [
        img('94bhu1r9yb0mjh5ypvuhjgg2dlgo_Drukgyel%20Dzong%203.jpg'),
        img('q8phludak72pr8ojnm2cmpi4w33n_1481602623_Paro-Kyichu-Lhakhang299.jpg'),
        img('rart59u3umfaty65dt0fpejnn4ex_Drukgyel%20Dzong.jpg'),
        img('msz1iztswlp21hlu64vxiq9516bj_mount-jomolhari.jpgxDV.jpg')
      ],
      5: [
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        img('arryt9zia20eawdl6ai40dhg5aut_1481602641_kuil-terindah-di-asia.jpg'),
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
        img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg')
      ],
      6: [
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
        img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
        img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
        img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · To Paro: Paro and Kyichu Lhakhang`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'A guided round of the Paro valley',
      'Kyichu Lhakhang, among the oldest temples in Bhutan',
      `${DAY_MARK}Day 5 · Tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face',
      `${DAY_MARK}Day 6 · Departure from Paro`,
      'Breakfast at the hotel and check out',
      'Private transfer to Paro International for your flight home'
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
        name: 'Paro sightseeing with Kyichu Lhakhang',
        day: 4,
        optional: false,
        image: img('94bhu1r9yb0mjh5ypvuhjgg2dlgo_Drukgyel%20Dzong%203.jpg'),
        description: 'A guided day around Paro finishing at Kyichu Lhakhang, one of the oldest temples standing in Bhutan.'
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
      image: img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
    }
  }
];

const detail = {
  slug: 'escape-to-bhutan-three-valleys',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Escape to Bhutan: Three Valleys',
  alt: 'Kyichu Lhakhang temple in the Paro valley',
  days: '6 days / 5 nights',
  stations: '3 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Short trips',
  tags: ['Short trips', 'Culture'],
  price: 36657,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Thimphu', 'Punakha', 'Paro'],
  stats: { days: 6, cities: 3, hotels: 3, activities: 4, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
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
    quote: 'Five nights, flying both ways into Paro. The shortest trip that still gets you over the Dochula pass to Punakha.',
    quoteMore: 'Book the Paro flights early for March and October. Drukair and Bhutan Airlines are the only carriers and the seats go fast.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '6 days through Thimphu, Punakha, Paro, with 5 nights, daily breakfast and a licensed Bhutanese guide: the thimphu sightseeing with simtokha dzong, the punakha sightseeing tour, the paro sightseeing with kyichu lhakhang, the hike to the tiger\'s nest.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights across Thimphu, Punakha, Paro with daily breakfast; all land transfers by private vehicle; the Thimphu sightseeing with Simtokha Dzong; the Punakha sightseeing tour; the Paro sightseeing with Kyichu Lhakhang; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Thimphu (L)', text: 'Arrival at Paro International and transfer to Thimphu\nThe road east along the Pa Chhu and the Wang Chhu\nCheck in and the rest of the day free', hotel: 'dusitD2 Yarkay Thimphu', highlights: ['Arrival at Paro International and transfer to Thimphu', 'The road east along the Pa Chhu and the Wang Chhu', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Thimphu and simtokha (B, L)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and Simtokha Dzong', hotel: 'dusitD2 Yarkay Thimphu', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and Simtokha Dzong'] },
    { title: 'Day 3: To Punakha: Punakha Dzong (B, L)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water', hotel: 'RKPO Green Resort', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'Punakha Dzong between the Pho and Mo rivers'] },
    { title: 'Day 4: To Paro: Paro and Kyichu Lhakhang (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nA guided round of the Paro valley\nKyichu Lhakhang, among the oldest temples in Bhutan', hotel: 'Himalayan Keys Forest Resort', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'A guided round of the Paro valley'] },
    { title: 'Day 5: Tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Himalayan Keys Forest Resort', highlights: ['Breakfast, then out into the Paro valley', 'The climb up the pine slope to Taktsang', 'The monastery wedged into the cliff face'] },
    { title: 'Day 6: Departure from Paro (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Paro International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Paro International for your flight home'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Bhutan', href: '/asien/bhutan' },
  { label: detail.title }
];

export const escapeToBhutanThreeValleysBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const escapeToBhutanThreeValleysProduct = {
  slug: detail.slug,
  places: ['Thimphu', 'Punakha', 'Paro'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 4,
  transfers: 9,
  meals: 12,
  price: detail.price,
  images: cardImages
};
