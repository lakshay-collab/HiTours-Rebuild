// Best of Singapore and Bali Honeymoon. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg'),
  img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
  img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg'),
  img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    subtitle: 'Singapore to Sentosa',
    dayLabel: 'Day 1 to 3',
    images: [
      img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg'),
      img('o08lx9kwhzu3m84k56oqeffm92pg_shutterstock_695806240.jpg'),
      img('05dl6v4zzzs9r4hzjg41ugc2c3hc_shutterstock_135576233%20(1).jpg'),
      img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg')
    ],
    dayImages: {
      1: [
        img('nwaa7uo4j6hcpv64q2eqa76nlf2e_Tram%20Experience%20-%20Chawang.jpg'),
        img('cgx6ab1cspd7wu0e04jze3dzbibk_singapore_night_safari.jpg'),
        img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg'),
        img('o08lx9kwhzu3m84k56oqeffm92pg_shutterstock_695806240.jpg')
      ],
      2: [
        img('durtbjf99crlygjse28sv48r10xs_shutterstock_1319645060.jpg'),
        img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
        img('etwjtvxjtctcyj8zmdmmtz5rnff7_1563607619_shutterstock_1155676858.jpg'),
        img('xkc5gws4qd4uax4hvxwihi35fv35_1563619864_shutterstock_793620280.jpg')
      ],
      3: [
        img('d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.jpg'),
        img('s2r4nfl80qk64lm24j05vwdt984y_VIAL1673.JPG'),
        img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg'),
        img('o08lx9kwhzu3m84k56oqeffm92pg_shutterstock_695806240.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and night safari`,
      'Arrival at Changi Airport and private transfer to your hotel',
      'Check in and freshen up in Novena',
      'Evening tram ride at the Singapore Night Safari',
      'Walking trails past the leopards, tapirs and slow lorises',
      `${DAY_MARK}Day 2 · Singapore city and river`,
      'Breakfast, then a half day city tour with a guide',
      'Merlion Park, Marina Bay and the colonial quarter',
      'Chinatown lanes and the Sri Mariamman temple',
      'Evening bumboat cruise along the Singapore river',
      `${DAY_MARK}Day 3 · A day at Universal Studios`,
      'Breakfast, then across to Sentosa island',
      'Full day ticket for Universal Studios Singapore',
      'Seven themed zones, coasters and street shows',
      'Optional: the Wings of Time show on the beach afterwards'
    ],
    accommodation: {
      name: 'ibis Singapore Novena, Singapore',
      description: '3 nights · Breakfast · Standard room · 3★ · Novena hotel one stop from Orchard Road on the metro',
      images: [
        img('d6klr7rae9mjjgqcyxptmvn8tba6_af67747a663f11e98b080242ac110008.png'),
        img('csfhgzj0hntodxb28qvgv965a24s_image_15.jpg'),
        img('8wl2g0cn2jx6h6ep0d4ru0betg4q_image_33.jpg'),
        img('kbp95nbgqxqinqjf05c2quuks1rz_image_3.jpg'),
        img('78572o6iiligczcwpf53m4rato6x_image_11.jpg'),
        img('arrzsh0apjh20wt83nd79jg94ago_image_25.jpg'),
        img('v5x55fh59onfprpxfidpel6m2u5z_image_30.jpg'),
        img('s6d2ibuhqldpzqygmojundstvj55_image_14.jpg'),
        img('oe2wlghbavuqtc5906tj65b7ajbt_image_42.jpg'),
        img('ob6cy8m0thir3bf3ys1oex0ehuks_image_20.jpg'),
        img('8i4sw4hxrsdydys98tihj4v2dmec_image_34.jpg'),
        img('3i7y1l1kck4i8qdwg3wetpdoefoo_image_24.jpg'),
        img('l2gou2c96m46k1eilwvcc5oakkpo_image_8.jpg'),
        img('hcqm47q3u6l1nhhf7e6bm7x36xn4_image_29.jpg')
      ]
    },
    activities: [
      {
        name: 'Night Safari with tram ride',
        day: 1,
        optional: false,
        image: img('nwaa7uo4j6hcpv64q2eqa76nlf2e_Tram%20Experience%20-%20Chawang.jpg'),
        description: 'The world\'s first nocturnal zoo, with a tram ride through seven habitats and walking trails where the animals are at their most active.'
      },
      {
        name: 'Singapore city tour',
        day: 2,
        optional: false,
        image: img('durtbjf99crlygjse28sv48r10xs_shutterstock_1319645060.jpg'),
        description: 'A half day tour past Merlion Park, the Marina Bay waterfront, Chinatown and the colonial quarter, with a guide on a shared coach.'
      },
      {
        name: 'Singapore river cruise',
        day: 2,
        optional: false,
        image: img('b2f7yhrl28ugizvfgwxmc40zmy3y_shutterstock_577392532.jpg'),
        description: 'A bumboat along the river past the old godowns of Clarke Quay and Boat Quay, with the Marina Bay skyline lighting up ahead.'
      },
      {
        name: 'Universal Studios Singapore',
        day: 3,
        optional: false,
        image: img('d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.jpg'),
        description: 'A full day ticket for the Sentosa theme park, with seven themed zones, the Battlestar Galactica duelling coasters and the street shows.'
      }
    ],
    program: {
      name: 'Singapore',
      description: 'Three nights in the city for your first days together, with a night safari, the river by bumboat and a full day at Universal Studios.',
      image: img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Kintamani and Bedugul',
    dayLabel: 'Day 4 to 7',
    images: [
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
      img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
    ],
    dayImages: {
      4: [
        img('4qzfjlhp9rb7opyc8dzvjjpgi0cy_1470896048_9396103363_d354fd2bc4_b.jpg'),
        img('51ipjklsbkrjnk7nmdfl5zq0cvfb_1580732870_shutterstock_491952556.jpg'),
        img('neznowe35mxcnjj84559i40ojhl7_1628342893_f98dbd26-1189-4c22-9e39-d8b3054eabdd.jpeg.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
      ],
      5: [
        img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg')
      ],
      6: [
        img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg'),
        img('e81e8w6ia95ocbac34rigtxfwddd_slide-8.jpg'),
        img('63rp5vt6fg9lnhd2bsolet8cpft3_ezgif-4-1fcf41f031.jpg'),
        img('zwzrpc8zhw3jl7ltwuqtrh8zmm8s_bali%20handara%20gate.jpg')
      ],
      7: [
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
        img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
        img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Bali and Kuta beach`,
      'Breakfast and check out, then private transfer to Changi',
      'Optional: flight from Singapore to Denpasar, which we can add',
      'Arrival in Bali and private transfer to your Kuta hotel',
      'Rest of the day free near the beach',
      `${DAY_MARK}Day 5 · Kintamani and the jungle swing`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'Tegenungan waterfall and the Tegalalang rice terraces',
      'A turn on the jungle swing above the valley',
      `${DAY_MARK}Day 6 · Bedugul lakes and Tanah Lot`,
      'Breakfast, then north to the Handara gate for photographs',
      'Ulun Danu Beratan, the temple standing on the lake',
      'Sunset at Tanah Lot, the sea temple on the rocks',
      'Evening back in Kuta at your own pace',
      `${DAY_MARK}Day 7 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Bliss Surfer Hotel, Kuta',
      description: '3 nights · Breakfast · Standard room · 3★ · Surf style hotel five minutes from Kuta beach',
      images: [
        img('fjsv6nb5db9144gg87q32urho5wa_484740773.jpg'),
        img('pwg81jxqrv1u4naeo4ukf4h1b18h_download%20-%202025-03-03T172949.032.jfif'),
        img('xpggn7bvlfos7midh1bqvhhobd8p_170823083.jpg'),
        img('3yvmr2cq9c7ddz98k85c0p6pk6l3_52479662.jpg'),
        img('2j1lw6s5n4tx4uq4v6z63lmyip7p_484740786.jpg'),
        img('y6y9gu3nob6y276srlaotcye9kok_7782339.jpg'),
        img('bj7h0oxhewoic375hfawboe671ut_download%20-%202025-03-03T172757.318.jfif'),
        img('xqgpnyinu1agtvzreapofm1imsm4_231315479.jpg'),
        img('mrc4g8m73ym0f7vawmwm1l3h9nie_47670873.jpg'),
        img('x7clnbk1yamdlxxtxe8t1q61lae2_download%20-%202025-03-03T172743.053.jfif'),
        img('f3hml59i887d1i36am508d4o3y6y_download%20-%202025-03-03T172816.619.jfif'),
        img('689y3p9kidm5qpyevoee55fgecif_download%20-%202025-03-03T172835.646.jfif')
      ]
    },
    activities: [
      {
        name: 'Kintamani with the jungle swing',
        day: 5,
        optional: false,
        image: img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        description: 'Coffee plantation tasting, the crater lake view at Kintamani, Tegenungan waterfall, the Tegalalang terraces and a turn on the jungle swing.'
      },
      {
        name: 'Bedugul lakes and Tanah Lot sunset',
        day: 6,
        optional: false,
        image: img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg'),
        description: 'The Handara gate, the lake temple of Ulun Danu Beratan at Bedugul, then the sea temple of Tanah Lot as the sun goes down.'
      },
      {
        name: 'Kuta beach and the art market',
        day: 4,
        optional: true,
        image: img('51ipjklsbkrjnk7nmdfl5zq0cvfb_1580732870_shutterstock_491952556.jpg'),
        description: 'The surf beach a few minutes from your hotel, with boards for hire, and the Kuta art market for sarongs, bags and carvings.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights in Bali to finish, with a coffee plantation day up to Kintamani and a temple run that ends at Tanah Lot for sunset.',
      image: img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-singapore-and-bali-honeymoon',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Singapore and Bali Honeymoon',
  alt: 'Marina Bay at night in Singapore',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private transfers, city tours and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Luxury'],
  price: 75990,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Sentosa', 'Kuta', 'Kintamani', 'Bedugul'],
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
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'City first, island second. Singapore is for the big nights out, Bali is for the slow mornings that follow.',
    quoteMore: 'Fly Singapore to Denpasar in the morning so you still get a Kuta sunset on moving day. We can add that leg to your package, along with seats together on both flights.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days across two countries: three nights in Singapore with a night safari, a city tour, the river by bumboat and Universal Studios, then three nights in Bali for Kintamani, the rice terraces and sunset at Tanah Lot.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with daily breakfast; private airport transfers in both cities; Night Safari with tram ride; Singapore city tour; Singapore river cruise; Universal Studios day ticket; Kintamani and jungle swing tour; Bedugul and Tanah Lot sunset tour.',
  intro2: 'Not included: international flights; the Singapore to Denpasar flight, which we can add; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and night safari (Arrival)', text: 'Arrival at Changi Airport and private transfer to your hotel\nCheck in and freshen up in Novena\nEvening tram ride at the Singapore Night Safari\nWalking trails past the leopards, tapirs and slow lorises', hotel: 'ibis Singapore Novena', highlights: ['Arrival at Changi Airport and private transfer to your hotel', 'Check in and freshen up in Novena', 'Evening tram ride at the Singapore Night Safari'] },
    { title: 'Day 2: Singapore city and river (B)', text: 'Breakfast, then a half day city tour with a guide\nMerlion Park, Marina Bay and the colonial quarter\nChinatown lanes and the Sri Mariamman temple\nEvening bumboat cruise along the Singapore river', hotel: 'ibis Singapore Novena', highlights: ['Breakfast, then a half day city tour with a guide', 'Merlion Park, Marina Bay and the colonial quarter', 'Chinatown lanes and the Sri Mariamman temple'] },
    { title: 'Day 3: A day at Universal Studios (B)', text: 'Breakfast, then across to Sentosa island\nFull day ticket for Universal Studios Singapore\nSeven themed zones, coasters and street shows\nOptional: the Wings of Time show on the beach afterwards', hotel: 'ibis Singapore Novena', highlights: ['Breakfast, then across to Sentosa island', 'Full day ticket for Universal Studios Singapore', 'Seven themed zones, coasters and street shows'] },
    { title: 'Day 4: On to Bali and Kuta beach (B)', text: 'Breakfast and check out, then private transfer to Changi\nOptional: flight from Singapore to Denpasar, which we can add\nArrival in Bali and private transfer to your Kuta hotel\nRest of the day free near the beach', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast and check out, then private transfer to Changi', 'Optional: flight from Singapore to Denpasar, which we can add', 'Arrival in Bali and private transfer to your Kuta hotel'] },
    { title: 'Day 5: Kintamani and the jungle swing (B)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nTegenungan waterfall and the Tegalalang rice terraces\nA turn on the jungle swing above the valley', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'Tegenungan waterfall and the Tegalalang rice terraces'] },
    { title: 'Day 6: Bedugul lakes and Tanah Lot (B)', text: 'Breakfast, then north to the Handara gate for photographs\nUlun Danu Beratan, the temple standing on the lake\nSunset at Tanah Lot, the sea temple on the rocks\nEvening back in Kuta at your own pace', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast, then north to the Handara gate for photographs', 'Ulun Danu Beratan, the temple standing on the lake', 'Sunset at Tanah Lot, the sea temple on the rocks'] },
    { title: 'Day 7: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; the Singapore to Denpasar flight, which we can add; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Indonesia', href: '/asien/indonesia' },
  { label: detail.title }
];

export const singaporeBaliHoneymoonBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const singaporeBaliHoneymoonProduct = {
  slug: detail.slug,
  places: ['Singapore', 'Sentosa', 'Kuta', 'Kintamani', 'Bedugul'],
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
