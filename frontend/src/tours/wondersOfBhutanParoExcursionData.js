// Wonders of Bhutan with a Paro Excursion. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
  img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
  img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg'),
  img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
  img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
  img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
  img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
  img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
  img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
  img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
  img('t524u3xv63svk6fkf5xqyvn08j3g_mandir.jpg'),
  img('38kz4h1x67igl2szup6j3v7owa7v_steptodown.com744302.jpg'),
  img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Phuentsholing',
    dayLabel: 'Day 1',
    images: [
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
    ],
    dayImages: {
      1: [
        img('ljpqw4npv8wncod5fq1r7hw2zt5y_shutterstock_1344366731.jpg'),
        img('t524u3xv63svk6fkf5xqyvn08j3g_mandir.jpg'),
        img('eljv9nfavq2ojeluvwgegg0j5t8o_shutterstock_1380814979.jpg'),
        img('pimaffguwc8nga3w0gcv8g43kv6b_2020-02-23.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuentsholing`,
      'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing',
      'Border formalities at the Bhutan Gate',
      'Check in and the rest of the day free'
    ],
    accommodation: {
      name: 'Gadhen Hotel, Bhutan, Phuntsholing',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Border town hotel on the Indian frontier',
      images: [
        img('dh4cs2vw5d4d3f2g9mi4phv2d0hb_Gadhen%20Hotel%201.png'),
        img('oyy3vykuh3ef6tuwgg0ajiu5n2v6_Gadhen%20Hotel%207.png'),
        img('xuf9nlf0jyhqqtwdtzghco82xsml_Gadhen%20Hotel%204.png'),
        img('0cohndy2fdvzstpz9c82fksx9m06_Gadhen%20Hotel%203.png'),
        img('46hnd4pk6goa3xay6l2zw1jdhs9s_Gadhen%20Hotel%209.png'),
        img('slokt561rbmr0cdfedrx39z846kb_Gadhen%20Hotel%206.png'),
        img('zh220f8etr19b5tkyldk0ddrm8gp_Gadhen%20Hotel%205.png'),
        img('isqfnsq57ofhsj2bfk92zksxlll8_4a35a387.png')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Thimphu',
    dayLabel: 'Day 2',
    images: [
      img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
      img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
      img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
      img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg')
    ],
    dayImages: {
      2: [
        img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        img('2xgygw98g58o2olcep4vlh9r5k0u_1481602683_View_of_the_National_Memorial_Chorten__Thimphu.jpg'),
        img('4r58yve0h6te2i0muhp7hprr7rtu_24024165679_103d7a2e7c_b.jpg'),
        img('fecad1jg1gwzqki7ltqfxszyzl24_1200px-Changangkha_Lhakhang_2021.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · To Thimphu: Thimphu and Simtokha`,
      'Breakfast, then north into the hills towards Thimphu',
      'The Chukha dam and the Wang Chhu gorge on the way',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and Simtokha Dzong'
    ],
    accommodation: {
      name: 'Hotel Ugyen, Thimpu, Thimphu City',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Comfortable hotel in the capital, walkable to the clock tower',
      images: [
        img('ap98uzgbkloja1lh1uh6u3wenury_Hotel%20Ugyen%20Photos%2015.png'),
        img('jbwc300zdf722bzueommrqcfpo1s__DSC4492.jpeg'),
        img('hag2d57k7qj6x4qcpq8kqwr1wdzk__DSC4560.jpg'),
        img('ja44mrv4lvkn0wm02mdzz7w9q740_download%20(19).jpg'),
        img('868augj8rw9uyi9tx6wddbjnzc52_download%20(17).jpg'),
        img('u0xom3a536yv3febbj12hvjlb2qp__DSC4533.jpeg'),
        img('zjolyheg3ypfv1mpdgbibc40dkxs__DSC4514.jpeg'),
        img('aiiaj5m2uu2g3srsquowsfrs9avk_download%20(16).jpg'),
        img('230ot6ilog4vwc0miiuo7fmy8kpw_download%20(18).jpg'),
        img('ibz4akiebgx4pvsczby1xsuc8w7r_download%20(15).jpg'),
        img('nefjbnmshmars575rgpdgoclrmyq_Hotel-Ugyen-Thimphu-Exterior.jpeg'),
        img('4aohhlftz59gvw0cbewakeinj4r3_2023-01-27.jpg')
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
      description: 'Time in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong.',
      image: img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Punakha',
    dayLabel: 'Day 3',
    images: [
      img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
      img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
      img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg'),
      img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg')
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
      name: 'White Dragon Hotel Punakha, Punakha',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Riverside hotel in the warm old winter capital',
      images: [
        img('m4qh31s0a5t88wfstnrhg85oo1up_9b453d48.png'),
        img('cj3ks7qqhhbcpohyoptc7r2zrj2t_df1d9395.png'),
        img('5xs8syyrzlkt9p5j37zeezwk29qk_49c01b0b.png'),
        img('uzlid91b8l9bhgmpcldrlbo53bw3_502236597.png'),
        img('1gk6rh591eipmnhq61645qoalj1q_download%20-%202024-05-06T184006.861.jpg'),
        img('5zyj9ko3wndrnjhbbqli0ucg2m3w_45a5b0cf.png'),
        img('4vzmqez4lt01uotobdfjv2b5700t_502236622.png')
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
      image: img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Paro',
    dayLabel: 'Day 4 to 6',
    images: [
      img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
      img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
      img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg')
    ],
    dayImages: {
      4: [
        img('bygb5od4ky5td3nbroqcrcpqdjmt_Ta%20Dzong%20National%20Museum%201.jpg'),
        img('utlsa7h3bnz1p6gok760pdjo12j1_15221606394_bd3684a0fa_b.jpg'),
        img('rujgh8ecafx36mfda2llkk92i1hk_1578666304_drukgyal_dzong.jpg'),
        img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg')
      ],
      5: [
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        img('arryt9zia20eawdl6ai40dhg5aut_1481602641_kuil-terindah-di-asia.jpg'),
        img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
        img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
      ],
      6: [
        img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
        img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
        img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
        img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · To Paro: Paro sightseeing`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'The National Museum in the old watchtower',
      'Rinpung Dzong and the Drukgyel ruins',
      `${DAY_MARK}Day 5 · Tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face',
      `${DAY_MARK}Day 6 · Departure from Siliguri`,
      'Breakfast at the hotel and check out',
      'Border formalities and transfer to Siliguri'
    ],
    accommodation: {
      name: 'Khamsum Inn, Paro, Paro',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('q5kqlcdrcmx955cc8we8msmlb0ub_Hotel-Khamsum%20(1).jpg'),
        img('9amu3ocnd5q4uk4bfg3h2dlc9nbk_R7.jpg'),
        img('8ii21o05v3okfgj2hqrwmzh90hiq_R3.jpg'),
        img('fp0b3mg1pp6992hhxni14mpb2o2h_R1.jpg'),
        img('sc3e9ucvki5bf7l6fwji9zml7j1n_R5.jpg'),
        img('twb2grgfcju9ab9qpm5rdvpplb15_R4.jpg'),
        img('uk37iv2svf2huuxsk61v9zvnn2nx_909cd040946711e78b59025f77df004f.jpg'),
        img('7j1oenttayx1rz1on8dibkc87r4q_R9.jpg'),
        img('ombqx8kiylz1njw9m526bt48sf08_10aaf0cab07a11eea25c0a58a9feac02.png'),
        img('udtsfvnst8mquxujct19rfjmca32_R11.jpg')
      ]
    },
    activities: [
      {
        name: 'Paro sightseeing tour',
        day: 4,
        optional: false,
        image: img('bygb5od4ky5td3nbroqcrcpqdjmt_Ta%20Dzong%20National%20Museum%201.jpg'),
        description: 'A guided round of the valley with the National Museum, Rinpung Dzong and the ruins of Drukgyel Dzong.'
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
      image: img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg')
    }
  }
];

const detail = {
  slug: 'wonders-of-bhutan-with-a-paro-excursion',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Wonders of Bhutan with a Paro Excursion',
  alt: 'Taktsang monastery on the cliff above the Paro valley',
  days: '6 days / 5 nights',
  stations: '4 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Culture',
  tags: ['Culture', 'Short trips'],
  price: 40840,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Punakha', 'Paro'],
  stats: { days: 6, cities: 4, hotels: 4, activities: 4, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['10 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Four valleys in five nights, overland from Siliguri. You see the whole west of the country without a single internal flight.',
    quoteMore: 'Do the Tiger’s Nest on day five rather than earlier. By then you have been at altitude for three days and the climb feels half as hard.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '6 days through Phuentsholing, Thimphu, Punakha, Paro, with 5 nights, Breakfast and dinner each day and a licensed Bhutanese guide: the thimphu sightseeing with simtokha dzong, the punakha sightseeing tour, the paro sightseeing tour, the hike to the tiger\'s nest.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights across Phuentsholing, Thimphu, Punakha, Paro with Breakfast and dinner each day; all land transfers by private vehicle; the Thimphu sightseeing with Simtokha Dzong; the Punakha sightseeing tour; the Paro sightseeing tour; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (L)', text: 'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Gadhen Hotel, Bhutan', highlights: ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: To Thimphu: Thimphu and Simtokha (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and Simtokha Dzong', hotel: 'Hotel Ugyen, Thimpu', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'The Memorial Chorten and the Buddha Dordenma'] },
    { title: 'Day 3: To Punakha: Punakha Dzong (B, L)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water', hotel: 'White Dragon Hotel Punakha', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'Punakha Dzong between the Pho and Mo rivers'] },
    { title: 'Day 4: To Paro: Paro sightseeing (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nThe National Museum in the old watchtower\nRinpung Dzong and the Drukgyel ruins', hotel: 'Khamsum Inn, Paro', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'The National Museum in the old watchtower'] },
    { title: 'Day 5: Tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Khamsum Inn, Paro', highlights: ['Breakfast, then out into the Paro valley', 'The climb up the pine slope to Taktsang', 'The monastery wedged into the cliff face'] },
    { title: 'Day 6: Departure from Siliguri (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bhutan', href: '/asia/bhutan' },
  { label: detail.title }
];

export const wondersOfBhutanParoExcursionBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const wondersOfBhutanParoExcursionProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Punakha', 'Paro'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 4,
  transfers: 10,
  meals: 10,
  price: detail.price,
  images: cardImages
};
