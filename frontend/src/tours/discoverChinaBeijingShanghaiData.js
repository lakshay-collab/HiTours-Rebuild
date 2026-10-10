// Discover China: Beijing and Shanghai. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
  img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg'),
  img('51nf2oc1fqzzythao939wo9ln6ty_GettyImages-504781659.webp'),
  img('cyph45lbepzf3u9wnlkigwbdqc4w_dl.beatsnoop.com-final-38XRia1E2H.jpg'),
  img('kyqi22drkx8f1w8fyrfliyqlswnk_Downpic.cc-92560468.jpg'),
  img('rt3qolit04b8whdo6ochykico59k_china-shanghai-river-cruise-city-lights.jpg'),
  img('cbleatj3z1okk9pao255p0l0v4dx_dl.beatsnoop.com-3000-NhkFAobrc4.jpg'),
  img('x6ynp7wxtz5rgf6kbjhmsxizd8pr_entrance-IMG_4674.JPG'),
  img('d3su5dnky1a3j3gx1jjoj7e2tlxl_6d3c4899a33844268457a0cb5a5578a9.jpg'),
  img('s0qdzshy1wtgmy4uidpfb1n4gqw5_shanghai-disneyland-roaring-rapids.webp')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('51nf2oc1fqzzythao939wo9ln6ty_GettyImages-504781659.webp'),
  img('cyph45lbepzf3u9wnlkigwbdqc4w_dl.beatsnoop.com-final-38XRia1E2H.jpg'),
  img('kyqi22drkx8f1w8fyrfliyqlswnk_Downpic.cc-92560468.jpg'),
  img('rt3qolit04b8whdo6ochykico59k_china-shanghai-river-cruise-city-lights.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Beijing',
    dayLabel: 'Day 1 to 3',
    images: [
      img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
      img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg'),
      img('ttve56fzzz4sxqskdmvkehcia0w3_dl.beatsnoop.com-final-s8tCIEWjyY.jpg'),
      img('51nf2oc1fqzzythao939wo9ln6ty_GettyImages-504781659.webp')
    ],
    dayImages: {
      1: [
        img('rtajr6503v7aov7sfiq8bpcmksvu_Beijing_Wangfujing_20170806.jpg'),
        img('x6azrt1grut20lv32otkmg96z6n1_1619597559_shutterstock_1064726486.jpg'),
        img('j75dc2xdstuq63l53hbky1wstht6_1619600285_shutterstock_406959889.jpg'),
        img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg')
      ],
      2: [
        img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg'),
        img('ttve56fzzz4sxqskdmvkehcia0w3_dl.beatsnoop.com-final-s8tCIEWjyY.jpg'),
        img('51nf2oc1fqzzythao939wo9ln6ty_GettyImages-504781659.webp')
      ],
      3: [
        img('51nf2oc1fqzzythao939wo9ln6ty_GettyImages-504781659.webp'),
        img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg'),
        img('ttve56fzzz4sxqskdmvkehcia0w3_dl.beatsnoop.com-final-s8tCIEWjyY.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Beijing`,
      'Arrival at Beijing Capital and transfer to your hotel',
      'Check in and the rest of the day free',
      'Optional: shopping along Wangfujing street',
      'Optional: the old observatory on the city wall',
      `${DAY_MARK}Day 2 · Great Wall and the Summer Palace`,
      'Early breakfast, then north to Mutianyu',
      'The cable car and the walk along the wall',
      'On to the Summer Palace in the afternoon',
      'Kunming lake, the long corridor and the marble boat',
      `${DAY_MARK}Day 3 · Tiananmen Square and Forbidden City`,
      'Breakfast, then a shared half day in the centre',
      'Tiananmen Square and the gate towers',
      'North through the Forbidden City courtyards',
      'Afternoon free in the old lanes'
    ],
    accommodation: {
      name: 'Holiday Inn Express Beijing Airport Zone, Beijing',
      description: '3 nights · Breakfast · Standard room · 3★ · Practical hotel near the airport expressway',
      images: [
        img('ae0hac2g5qd1n9axh1jqpt99ozd1_230938408.jpg'),
        img('l99whlymbj2e9oq79r3k810j0tot_449523454.jpg'),
        img('n5eklhgzp2u01vpbddaa1r5zxi2y_562215035.jpg'),
        img('81eqlhk2zzjykqyh3pch031wknoy_449523548.jpg'),
        img('7kk13ainhi0qx7fo0tthv63ps91d_12482579.jpg'),
        img('jhawmh5e256sjdp1x2h23ps17h4g_449517694.jpg'),
        img('g88p34unkr9pk4pcj2iyenv2r8vm_562215034.jpg'),
        img('qwks499yg21lter3820b29gq6m5s_449517678.jpg'),
        img('z9de7zmyvi82jz0hr02swt3tcceh_562215021.jpg'),
        img('fcdpa7aud4793bc91732rlod14qv_449517685.jpg'),
        img('lqsxw6znys0rnvb0pkhp7hyaqwas_562232017.jpg')
      ]
    },
    activities: [
      {
        name: 'Great Wall at Mutianyu and the Summer Palace',
        day: 2,
        optional: false,
        image: img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        description: 'The Mutianyu section of the wall, steep and far less crowded than Badaling, then the lake and long corridor of the Summer Palace.'
      },
      {
        name: 'Tiananmen Square and the Forbidden City',
        day: 3,
        optional: false,
        image: img('51nf2oc1fqzzythao939wo9ln6ty_GettyImages-504781659.webp'),
        description: 'A shared half day across the vast square and north through the courtyards and throne halls of the old imperial palace.'
      }
    ],
    program: {
      name: 'Beijing',
      description: 'Three nights in the capital with the wall at Mutianyu, the Summer Palace, Tiananmen Square and the Forbidden City.',
      image: img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Shanghai',
    dayLabel: 'Day 4 to 7',
    images: [
      img('ok9opdlfrpj5koec0e42iu16b21d_dl.beatsnoop.com-final-zlrJO750No.jpg'),
      img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg'),
      img('eym5xev151ynqgk8hlkhaufeqvoa_dl.beatsnoop.com-final-FO30dKJxlR.jpg'),
      img('oct4ek632w8tblx9gfiuntz7kek6_tt.jpg')
    ],
    dayImages: {
      4: [
        img('kyqi22drkx8f1w8fyrfliyqlswnk_Downpic.cc-92560468.jpg'),
        img('we3r4auc13tyjh6d6wpx9f992ahw_download%20-%202025-01-22T125013.932.png'),
        img('ok9opdlfrpj5koec0e42iu16b21d_dl.beatsnoop.com-final-zlrJO750No.jpg'),
        img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg')
      ],
      5: [
        img('ir2awdfkpdra33avdlhe0sv1hbze_E16D5CCC-029E-446E-B0C8-DA2916D5D7AA.jpeg'),
        img('ok9opdlfrpj5koec0e42iu16b21d_dl.beatsnoop.com-final-zlrJO750No.jpg'),
        img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg'),
        img('eym5xev151ynqgk8hlkhaufeqvoa_dl.beatsnoop.com-final-FO30dKJxlR.jpg')
      ],
      6: [
        img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg'),
        img('3v46yytijdj44xwmcu10tpsd0agd_1619599983_shutterstock_199457384.jpg'),
        img('ac1pvfyncr6b3o6g64b7etpkzlyi_1619608001_shutterstock_1252745494.jpg'),
        img('imtxhf697qz3p06aemge77j1haun_1619600357_shutterstock_1148631992.jpg')
      ],
      7: [
        img('ok9opdlfrpj5koec0e42iu16b21d_dl.beatsnoop.com-final-zlrJO750No.jpg'),
        img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg'),
        img('eym5xev151ynqgk8hlkhaufeqvoa_dl.beatsnoop.com-final-FO30dKJxlR.jpg'),
        img('oct4ek632w8tblx9gfiuntz7kek6_tt.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Beijing to Shanghai and a river cruise`,
      'Breakfast and check out of your Beijing hotel',
      'Optional: flight Beijing to Shanghai, booked with us',
      'Arrival transfer and check in at Shanghai',
      'An evening cruise on the Huangpu river',
      `${DAY_MARK}Day 5 · Shanghai Disneyland`,
      'Breakfast, then a day at Shanghai Disneyland',
      'Tickets included for the full day',
      'The Enchanted Storybook Castle and the Tron ride',
      'Back at the hotel in the evening',
      `${DAY_MARK}Day 6 · City tour and the panda hall`,
      'Breakfast, then a shared half day of the city',
      'The Bund, the old town lanes and the Yu garden',
      'Across to the zoo in the afternoon',
      'The panda hall and the big lawns',
      `${DAY_MARK}Day 7 · Departure from Shanghai`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Shanghai Gongkang, Shanghai',
      description: '3 nights · Breakfast · Standard room · 3★ · Practical base in Jing\'an with metro access',
      images: [
        img('t2237dgb54uv7s4rx4d6ia1773m3_254540841.png'),
        img('w9ivrioc0218ptdjg2ux6k3l7k6w_252126148.png'),
        img('7j685fea2v362rrz8zpp6b7dqhyo_252477212.png'),
        img('ui2qybbjs89a4z5krgj3vsb0nf0f_192744987.png'),
        img('ilgwg755ts2z2yj8x9ugsqlq786y_295410234.png'),
        img('s0o6ump4njlgmgmvpcf6pht58wwi_252477204.png'),
        img('941vca46ob7vgexpzb8c3wy0qman_252127522.png'),
        img('8dj51afdp4eqkjs14tvc7enjb6hx_295410221.png'),
        img('jjg4sx0q5lmchhjoebkp8qfwu49z_289966229.png'),
        img('e2yjnulvma27jqq7wura2k5f99xw_289966159.png')
      ]
    },
    activities: [
      {
        name: 'Huangpu river cruise',
        day: 4,
        optional: false,
        image: img('kyqi22drkx8f1w8fyrfliyqlswnk_Downpic.cc-92560468.jpg'),
        description: 'An evening sailing between the lit towers of Pudong and the stone facades of the Bund, the classic Shanghai skyline shot.'
      },
      {
        name: 'Shanghai Disneyland',
        day: 5,
        optional: false,
        image: img('ir2awdfkpdra33avdlhe0sv1hbze_E16D5CCC-029E-446E-B0C8-DA2916D5D7AA.jpeg'),
        description: 'A full day at Shanghai Disneyland with tickets included, home to the Enchanted Storybook Castle and the Tron ride.'
      },
      {
        name: 'Half day guided tour of Shanghai',
        day: 6,
        optional: false,
        image: img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg'),
        description: 'A shared guided morning through the Bund waterfront, the old town lanes and the rockeries and ponds of the Yu garden.'
      },
      {
        name: 'Shanghai Zoo with the panda hall',
        day: 6,
        optional: false,
        image: img('6uomrqckb5lnf5edd2hwphbaaeb9_shutterstock_38473243.jpg'),
        description: 'The afternoon at the zoo on the old Hongqiao golf course, where the panda hall sits among big lawns and old trees.'
      }
    ],
    program: {
      name: 'Shanghai',
      description: 'Three nights to finish: a Huangpu cruise, a full day at Disneyland, the Bund and the Yu garden, then the panda hall at the zoo.',
      image: img('ok9opdlfrpj5koec0e42iu16b21d_dl.beatsnoop.com-final-zlrJO750No.jpg')
    }
  }
];

const detail = {
  slug: 'discover-china-beijing-and-shanghai',
  ctaHref: '/l/china/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Discover China: Beijing and Shanghai',
  alt: 'Tiananmen gate at the south entrance of the Forbidden City',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private transfers and shared guided city tours',
  tag: 'Culture',
  tags: ['Culture', 'Family'],
  price: 53675,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Beijing', 'Shanghai'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 6, transfers: 11 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['11 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Mei',
    image: '/experts/riya.webp',
    role: 'China expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two cities, three nights each. The shared tours keep the price down and still cover the wall, the palace and the Bund.',
    quoteMore: 'Keep the Forbidden City for a weekday morning. Tickets are capped daily and the Saturday slots go first in Indian booking windows.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days across the two cities everyone asks for, with daily breakfast: the Great Wall at Mutianyu, the Summer Palace and the Forbidden City in Beijing, then a Huangpu cruise, Disneyland and the panda hall in Shanghai.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights in Beijing and 3 nights in Shanghai with daily breakfast; private transfers; full day Great Wall at Mutianyu with the Summer Palace; Tiananmen Square and Forbidden City half day; Huangpu river cruise tickets; Shanghai Disneyland tickets; half day guided Shanghai city tour; Shanghai Zoo tickets.',
  intro2: 'Not included: international flights; the Beijing to Shanghai internal flight; China visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Beijing (Arrival)', text: 'Arrival at Beijing Capital and transfer to your hotel\nCheck in and the rest of the day free\nOptional: shopping along Wangfujing street\nOptional: the old observatory on the city wall', hotel: 'Holiday Inn Express Beijing Airport Zone', highlights: ['Arrival at Beijing Capital and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: shopping along Wangfujing street'] },
    { title: 'Day 2: Great Wall and the Summer Palace (B)', text: 'Early breakfast, then north to Mutianyu\nThe cable car and the walk along the wall\nOn to the Summer Palace in the afternoon\nKunming lake, the long corridor and the marble boat', hotel: 'Holiday Inn Express Beijing Airport Zone', highlights: ['Early breakfast, then north to Mutianyu', 'The cable car and the walk along the wall', 'On to the Summer Palace in the afternoon'] },
    { title: 'Day 3: Tiananmen Square and Forbidden City (B)', text: 'Breakfast, then a shared half day in the centre\nTiananmen Square and the gate towers\nNorth through the Forbidden City courtyards\nAfternoon free in the old lanes', hotel: 'Holiday Inn Express Beijing Airport Zone', highlights: ['Breakfast, then a shared half day in the centre', 'Tiananmen Square and the gate towers', 'North through the Forbidden City courtyards'] },
    { title: 'Day 4: Beijing to Shanghai and a river cruise (B)', text: 'Breakfast and check out of your Beijing hotel\nOptional: flight Beijing to Shanghai, booked with us\nArrival transfer and check in at Shanghai\nAn evening cruise on the Huangpu river', hotel: 'Holiday Inn Express Shanghai Gongkang', highlights: ['Breakfast and check out of your Beijing hotel', 'Optional: flight Beijing to Shanghai, booked with us', 'Arrival transfer and check in at Shanghai'] },
    { title: 'Day 5: Shanghai Disneyland (B)', text: 'Breakfast, then a day at Shanghai Disneyland\nTickets included for the full day\nThe Enchanted Storybook Castle and the Tron ride\nBack at the hotel in the evening', hotel: 'Holiday Inn Express Shanghai Gongkang', highlights: ['Breakfast, then a day at Shanghai Disneyland', 'Tickets included for the full day', 'The Enchanted Storybook Castle and the Tron ride'] },
    { title: 'Day 6: City tour and the panda hall (B)', text: 'Breakfast, then a shared half day of the city\nThe Bund, the old town lanes and the Yu garden\nAcross to the zoo in the afternoon\nThe panda hall and the big lawns', hotel: 'Holiday Inn Express Shanghai Gongkang', highlights: ['Breakfast, then a shared half day of the city', 'The Bund, the old town lanes and the Yu garden', 'Across to the zoo in the afternoon'] },
    { title: 'Day 7: Departure from Shanghai (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; the Beijing to Shanghai internal flight; China visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'China', href: '/asien/china' },
  { label: detail.title }
];

export const discoverChinaBeijingShanghaiBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const discoverChinaBeijingShanghaiProduct = {
  slug: detail.slug,
  places: ['Beijing', 'Shanghai'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 6,
  transfers: 11,
  meals: 6,
  price: detail.price,
  images: cardImages
};
