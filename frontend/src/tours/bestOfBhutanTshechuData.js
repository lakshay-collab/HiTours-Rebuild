// Best of Bhutan with the Thimphu Tshechu. Facts from the source itinerary, copy written fresh, INR pricing.
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
  img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
  img('ko96ro0x78yapeugwv52j92bnhl1_dl.beatsnoop.com-3000-9rFQJzuTDk.jpg'),
  img('fzdyssdaclzxlq2dqjhjvk5qgohi_a04284e4399dd2bcf97743a78860dea6%20(2).jpg'),
  img('g94e1ices5lqxt7yr78i9u28iy9k_20180708-192648-largejpg.jpg')
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
      img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
      img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
      img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
      img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg')
    ],
    dayImages: {
      2: [
        img('bug5yze180o5xjfqveckpjqiqtoe_0378-JGF-Dechen-Phodrang-Bhutan.jpg'),
        img('o4xiotph7os69ac0uxsmaew06pbw_1621019442_shutterstock_1187906419.jpg'),
        img('cdl5xosospzimjwzry1vumk497kb_The-Romantic-Nature-Park-of-Thimphu-Ludrong-Memorial-Garden.jpg'),
        img('tjnb0oiw0n2xc11ykp20xbzbu0lm_PHOTO-2024-09-16-17-35-35.jpg')
      ],
      3: [
        img('bhp0lyp0ntb70w7pv4icfuv00hz5_Punakha%20Dzong%20Monastery%201.jpg'),
        img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg'),
        img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg'),
        img('ko96ro0x78yapeugwv52j92bnhl1_dl.beatsnoop.com-3000-9rFQJzuTDk.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Onward to Thimphu`,
      'Breakfast, then north into the hills towards Thimphu',
      'The Chukha dam and the Wang Chhu gorge on the way',
      'Optional: the Zorig Chusum school of arts',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 3 · Punakha dzong and the suspension bridge`,
      'Breakfast, then out into the capital',
      'Punakha Dzong between the Pho and Mo rivers',
      'The long suspension bridge over the water',
      'The long suspension bridge over the Po Chhu',
      'Prayer flags strung the length of the span'
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
        name: 'Punakha sightseeing tour',
        day: 3,
        optional: false,
        image: img('bhp0lyp0ntb70w7pv4icfuv00hz5_Punakha%20Dzong%20Monastery%201.jpg'),
        description: 'The fortress where Bhutan’s kings are crowned, built on the spit of land where two rivers meet below the town.'
      },
      {
        name: 'Punakha suspension bridge',
        day: 3,
        optional: false,
        image: img('ko96ro0x78yapeugwv52j92bnhl1_dl.beatsnoop.com-3000-9rFQJzuTDk.jpg'),
        description: 'One of the longest suspension bridges in Bhutan, strung with prayer flags high over the Po Chhu.'
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
        img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        img('2xgygw98g58o2olcep4vlh9r5k0u_1481602683_View_of_the_National_Memorial_Chorten__Thimphu.jpg'),
        img('4r58yve0h6te2i0muhp7hprr7rtu_24024165679_103d7a2e7c_b.jpg'),
        img('fecad1jg1gwzqki7ltqfxszyzl24_1200px-Changangkha_Lhakhang_2021.jpg')
      ],
      5: [
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        img('arryt9zia20eawdl6ai40dhg5aut_1481602641_kuil-terindah-di-asia.jpg'),
        img('fzdyssdaclzxlq2dqjhjvk5qgohi_a04284e4399dd2bcf97743a78860dea6%20(2).jpg'),
        img('g94e1ices5lqxt7yr78i9u28iy9k_20180708-192648-largejpg.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · To Paro: Thimphu sightseeing`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and the takin preserve',
      'Masked cham dancers in the dzong courtyard',
      'Brocade robes, long horns and the crowd in kira',
      `${DAY_MARK}Day 5 · Tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face'
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
        name: 'Thimphu sightseeing tour',
        day: 4,
        optional: false,
        image: img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        description: 'A guided day round the capital with the Memorial Chorten, the Buddha Dordenma, Tashichho Dzong and the takin preserve.'
      },
      {
        name: 'Thimphu Tshechu festival',
        day: 4,
        optional: false,
        image: img('gtqsdorp2b32r8qe9kgj9lfcrqhn_7-Days-Thimphu-Tshechu-Festival-Tour-480%20(2).jpg'),
        description: 'The capital’s biggest festival, with masked cham dancers in brocade turning in the dzong courtyard over three days.'
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
        img('r216cx5wtx6y2mlcx31wzb1avzpz_Palden_Tashi_Chholing_Shedra_01.jpg'),
        img('l0fq7fjbnhs2rdw73cyv4fa8c62i_Phuentsholing-Market-1024x682.jpg'),
        img('yiup7qro2cobgjuqbppy9xaxknbw_pic3.jpg'),
        img('v9tvcl55e0nj7mgskiebh2i0taiy_dam.jpg')
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
      image: img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-bhutan-with-the-thimphu-tshechu',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Bhutan with the Thimphu Tshechu',
  alt: 'Cham dancers in brocade at the Thimphu Tshechu',
  days: '7 days / 6 nights',
  stations: '4 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Culture',
  tags: ['Culture'],
  price: 37981,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Paro', 'Phuentsholing'],
  stats: { days: 7, cities: 4, hotels: 4, activities: 5, transfers: 11 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['11 transfers', 'Transport'],
    ['10 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Timed for the Thimphu Tshechu, when the whole capital turns out in kira and gho for three days of masked dance.',
    quoteMore: 'Get to the Tendrel Thang ground by eight on festival day. The courtyard fills fast and the best dances are in the morning.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '7 days through Phuentsholing, Thimphu, Paro, with 6 nights, Breakfast and dinner each day and a licensed Bhutanese guide: the punakha sightseeing tour, the punakha suspension bridge, the thimphu sightseeing tour, the thimphu tshechu festival.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights across Phuentsholing, Thimphu, Paro with Breakfast and dinner each day; all land transfers by private vehicle; the Punakha sightseeing tour; the Punakha suspension bridge; the Thimphu sightseeing tour; the Thimphu Tshechu festival; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (L)', text: 'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Alem Hotel & Resort', highlights: ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Onward to Thimphu (B)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'Forest Boutique', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 3: Punakha dzong and the suspension bridge (B)', text: 'Breakfast, then out into the capital\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water\nThe long suspension bridge over the Po Chhu\nPrayer flags strung the length of the span', hotel: 'Forest Boutique', highlights: ['Breakfast, then out into the capital', 'Punakha Dzong between the Pho and Mo rivers', 'The long suspension bridge over the water'] },
    { title: 'Day 4: To Paro: Thimphu sightseeing (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and the takin preserve\nMasked cham dancers in the dzong courtyard\nBrocade robes, long horns and the crowd in kira', hotel: 'Khamsum Inn, Paro', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'The Memorial Chorten and the Buddha Dordenma'] },
    { title: 'Day 5: Tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Khamsum Inn, Paro', highlights: ['Breakfast, then out into the Paro valley', 'The climb up the pine slope to Taktsang', 'The monastery wedged into the cliff face'] },
    { title: 'Day 6: Onward to Phuentsholing (B, L)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nOptional: Zangto Pelri Lhakhang in the town\nArrival transfer and check in for the night', hotel: 'Legphel Hotel', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Optional: Zangto Pelri Lhakhang in the town'] },
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

export const bestOfBhutanTshechuBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfBhutanTshechuProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Paro'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 5,
  transfers: 11,
  meals: 10,
  price: detail.price,
  images: cardImages
};
