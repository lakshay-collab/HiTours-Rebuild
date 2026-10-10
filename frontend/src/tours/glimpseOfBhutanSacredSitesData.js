// Glimpse of Bhutan: Sacred Sites and Valleys. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
  img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
  img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
  img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
  img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
  img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
  img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
  img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
  img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
  img('81za99vumt6f6la3nrht98bojvh9_DSC_0194.JPG'),
  img('7wtjcew9pt0l5gb114psj5iejfuv_zuri%201.jpg'),
  img('05rlzdc2y8brcld8c7828vj4ep7l_1818px-Mapcarta.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Phuentsholing',
    dayLabel: 'Day 1',
    images: [
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
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
      name: 'Meto Pema Hotel, Phuentsholing, Phuntsholing',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Border town hotel on the Indian frontier',
      images: [
        img('jvsj1mo3z7syibtze5hp33urjgvm_banner_2.jpg'),
        img('yizwu8lwffe3ypfwui8fsbr1owzr_lobby_pic.jpg'),
        img('17akakniwi6zon4vlordyq59qf55_Room_3.jpg'),
        img('sa3beas1crxmfb0q4ky7xt3hgcco_banner_4.jpg'),
        img('9iq0rwl7nto3yvhxsbwp8xq6xm0h_482732061.webp'),
        img('lt1t9hqbes7924p1x2ejgnvvffge_king_suite.jpg'),
        img('a6gq2kawj6mcbrx2o2aw34dfsmc4_bar-pic.jpg'),
        img('2byuwy023to85xadaiwtat0akqq6_king.jpg'),
        img('nwulrwfzevs293qnfxmtuvhupwic_482730465.webp'),
        img('mlpzqzcxatnrb9xyewyn8mhnkdzw_banner_3.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
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
      name: 'Hotel Ugyen, Thimpu, Thimphu City',
      description: '2 nights · Breakfast · Standard room · 3★ · Comfortable hotel in the capital, walkable to the clock tower',
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
      name: 'Ananda Resort, Paro, Paro',
      description: '2 nights · Breakfast · Standard room · 3★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('xczvkzl3kb2tflj2n13ije7nmwhg_4m1xyzfmkl9ixdpvzn88w3yl2qhn_2023-04-06.webp'),
        img('2nt68zha1z0ut3oz4rfkgr8c2wq1_2023-11-16%20(1).jpg'),
        img('yoxexo7ejgzucekpnrkihekguz51_R3.jpg'),
        img('by1fpibrrg4h4d43k93sca8ocpzc_2023-04-06%20(1).jpg'),
        img('o82nllianoylwpzqgnxsc9dwkcgx_IMG_2572.jpeg'),
        img('nfdndvwrq2ldkbmo76v2plo3nxh9_R5.jpg'),
        img('dcuzjfnkw5teones65wtpxlhiz7c_R1.jpg'),
        img('8vodhkirxld6e8ls6gq9pi7ww1ov_2023-11-16.jpg')
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
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg')
    ],
    dayImages: {
      6: [
        img('v9tvcl55e0nj7mgskiebh2i0taiy_dam.jpg'),
        img('t524u3xv63svk6fkf5xqyvn08j3g_mandir.jpg'),
        img('r216cx5wtx6y2mlcx31wzb1avzpz_Palden_Tashi_Chholing_Shedra_01.jpg'),
        img('l0fq7fjbnhs2rdw73cyv4fa8c62i_Phuentsholing-Market-1024x682.jpg')
      ],
      7: [
        img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
        img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
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
      name: 'Alem Hotel & Resort, Bhutan, Phuntsholing',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Border town hotel on the Indian frontier',
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
      image: img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
    }
  }
];

const detail = {
  slug: 'glimpse-of-bhutan-sacred-sites-and-valleys',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Glimpse of Bhutan: Sacred Sites and Valleys',
  alt: 'Prayer flags above the Dochula pass in Bhutan',
  days: '7 days / 6 nights',
  stations: '4 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Culture',
  tags: ['Culture'],
  price: 43652,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Paro', 'Phuentsholing'],
  stats: { days: 7, cities: 4, hotels: 4, activities: 3, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
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
    quote: 'Two nights each in Thimphu and Paro, with free days built in. It suits people who hate being marched round on a schedule.',
    quoteMore: 'Keep the free afternoon in Thimphu for a Saturday if you can. The riverside market is only properly busy at weekends.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '7 days through Phuentsholing, Thimphu, Paro, with 6 nights, Breakfast and dinner each day and a licensed Bhutanese guide: the thimphu sightseeing with simtokha dzong, the ta dzong and rinpung dzong, the hike to the tiger\'s nest.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights across Phuentsholing, Thimphu, Paro with Breakfast and dinner each day; all land transfers by private vehicle; the Thimphu sightseeing with Simtokha Dzong; the Ta Dzong and Rinpung Dzong; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (L)', text: 'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Meto Pema Hotel, Phuentsholing', highlights: ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Onward to Thimphu (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'Hotel Ugyen, Thimpu', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 3: Thimphu and simtokha (B, L)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and Simtokha Dzong', hotel: 'Hotel Ugyen, Thimpu', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and Simtokha Dzong'] },
    { title: 'Day 4: Onward to Paro (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nOptional: Zuri Dzong and the Five Chortens\nArrival transfer and check in for the night', hotel: 'Ananda Resort, Paro', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'Optional: Zuri Dzong and the Five Chortens'] },
    { title: 'Day 5: Ta dzong and rinpung dzong and tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe round watchtower holding the National Museum\nRinpung Dzong on the slope above the river\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Ananda Resort, Paro', highlights: ['Breakfast, then out into the Paro valley', 'The round watchtower holding the National Museum', 'Rinpung Dzong on the slope above the river'] },
    { title: 'Day 6: Onward to Phuentsholing (B, L)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nOptional: Zangto Pelri Lhakhang in the town\nArrival transfer and check in for the night', hotel: 'Alem Hotel & Resort, Bhutan', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Optional: Zangto Pelri Lhakhang in the town'] },
    { title: 'Day 7: Departure from Siliguri (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Bhutan', href: '/asien/bhutan' },
  { label: detail.title }
];

export const glimpseOfBhutanSacredSitesBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const glimpseOfBhutanSacredSitesProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Paro'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 3,
  transfers: 9,
  meals: 12,
  price: detail.price,
  images: cardImages
};
