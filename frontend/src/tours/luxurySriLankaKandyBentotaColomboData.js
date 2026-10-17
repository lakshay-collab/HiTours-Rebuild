// Luxury Sri Lanka: Kandy, Bentota and Colombo in Five Star Hotels. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
  img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg'),
  img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
  img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
  img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg'),
  img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
  img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
  img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
  img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
  img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
  img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg'),
  img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
  img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kandy',
    dayLabel: 'Day 1',
    images: [
      img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
      img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
      img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
      img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg')
    ],
    dayImages: {
      1: [
        img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        img('2qdrxrko072bcco7ufzgu2npr0c7_1581078051_17185271045_4b7e32f3fc_b_(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Kandy`,
      'Arrival at Bandaranaike International and private transfer inland',
      'A private stop at the Pinnawala elephant sanctuary',
      'Check in at your riverside hotel in Kandy',
      'A private lake drive and the Kandyan dance performance'
    ],
    accommodation: {
      name: 'Mahaweli Reach Hotel, Kandy',
      description: '1 night · Breakfast · Deluxe room · 5★ · Five star riverside hotel on the banks of the Mahaweli',
      images: [
        img('ckjm61pcz0abd18dv0gvvfyaev9n_886ee52a_z.webp'),
        img('82rmoyivop0j08o6rjztn9ru3b4f_presidential-suite-3.png'),
        img('qb59apir6m3c9ag3drt4tgng15rm_b105d625_z.webp'),
        img('w0vdft7rdjc279m1wxgmr0qqhk9n_123084736.png'),
        img('opyyhgk1glws5lyofagtcn3ylhi7_executive-suite-1-1.png'),
        img('ir112lvxrmnuuq0mfcclbg1cho0t_22233339.png'),
        img('560otte6l3r1g76u40wfyw89xwlv_123083771.png'),
        img('dkla2zfjfq2azesaoqq7x2n4w4qm_74189633.png'),
        img('koo50lysd2v0e4jxasuitqjrsn49_028957a_hb_a_003.jpg'),
        img('7mnbagfp1os81hn194742p2s0mz8_b1c91c72_z.webp'),
        img('f91ua1za4eb5vvbc84b5kzcxxkm5_150044704.jpg'),
        img('ftp447sd8wmmuiqhafg9dq1yl91r_de7b6bec_z.webp'),
        img('da85pmtzxhgu21fsecep07s469zc_c2KemgEt_1c6fb357a93580214fd8405923f37617.jpg')
      ]
    },
    activities: [
      {
        name: 'Private visit to Pinnawala',
        day: 1,
        optional: false,
        image: img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        description: 'A private stop at the elephant sanctuary to watch the herd at the river before continuing up to Kandy.'
      },
      {
        name: 'Private Kandy lake drive and dance show',
        day: 1,
        optional: false,
        image: img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        description: 'An evening circuit of the lake by private car, then reserved seats for the drummers, masked dancers and fire walkers.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'One night on the river at Kandy with a private visit to the Pinnawala elephants on the way and a private lake drive and dance show.',
      image: img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Bentota',
    dayLabel: 'Day 2 to 3',
    images: [
      img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
      img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg'),
      img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
      img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg')
    ],
    dayImages: {
      2: [
        img('lcogdoq76wasext2xs8n1943h2uh_1597147042_shutterstock_785564455.jpg'),
        img('z8pc6746uelxtxz5446rmvk51rki_flickr_cached_img_20b18d949dbd302f958b4aadfd6bf889_600x600.jpg'),
        img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
        img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg')
      ],
      3: [
        img('4nhzua0qjhxq269scn2196f6trxx_1557754429_jumbo.jpg'),
        img('srl1ll1wcb40ejjkuze51ip4j6aq_shutterstock_2035695842.jpg'),
        img('mgac8tj98vp4u6p3vv4acwiwsebh_22859730893_159b5dee46_b.jpg'),
        img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Tea estates and the turtles`,
      'Breakfast, then a transfer down through the tea country',
      'A plantation and factory visit with a tasting',
      'The Kosgoda turtle hatchery before the coast',
      'Check in at your Bentota resort for sunset',
      `${DAY_MARK}Day 3 · Madu Ganga and the beach`,
      'Breakfast, then a boat safari on the Madu Ganga',
      'Mangrove tunnels, the cinnamon island and the island temple',
      'The afternoon on Bentota beach',
      'Optional: a spa treatment at the resort'
    ],
    accommodation: {
      name: 'Cinnamon Bentota Beach, Bentota',
      description: '2 nights · Breakfast · Deluxe room · 5★ · Five star Geoffrey Bawa designed resort between river and sea',
      images: [
        img('thyadgwmgp76cpuxvd4ux4e89gh0_download%20-%202024-02-15T130841.405.jpeg'),
        img('9e3x6kfiyvbh8gxtlzef5cf2w4z8_386274871.jpg'),
        img('f4sna5dlufoykdih3k1b8ag2f1s9_download%20-%202024-02-15T130854.143.jpeg'),
        img('dl1s2b5tzpgc3pp96g1a8glc6kn6_download%20-%202024-02-15T130859.537.jpeg'),
        img('sm6u6m4ohyphsh3zmerg86jwcogm_201912241735039226-4f0aefd8622911ec865f0a58a9feac02.webp'),
        img('refa6twh61b41vekm4id3apzhfrd_8edadef6af6e11eca4990a58a9feac02.webp'),
        img('emfp7iec55lqf7tug2my3qjczdwu_download%20-%202024-02-15T130930.739.jpeg'),
        img('ebgr0tugiktsqd0wmxgktqb74leb_254268623.jpg'),
        img('u3vpnstfy4m20paqlo5yataox9vs_959fb3e4622811eca4890a58a9feac02.webp'),
        img('lmc7kd3cxyca5azaonwwzjypgzpx_254269977.jpg'),
        img('3trrh7dood1dswvkaaqcb15b07wi_201912241735039226-f72e1178622811ec9c8d0a58a9feac02.webp'),
        img('sin5nnhf4u5g8gxcrhvizuoq0etq_a09fd3ec_z.jpg'),
        img('w9jheusv03vv6abffp1sfntj1pdq_aecbc66c_z.jpg')
      ]
    },
    activities: [
      {
        name: 'Kosgoda turtle hatchery',
        day: 2,
        optional: false,
        image: img('lcogdoq76wasext2xs8n1943h2uh_1597147042_shutterstock_785564455.jpg'),
        description: 'The hatchery south of Bentota where eggs are protected and hatchlings released into the sea at dusk.'
      },
      {
        name: 'Madu Ganga boat safari',
        day: 3,
        optional: false,
        image: img('4nhzua0qjhxq269scn2196f6trxx_1557754429_jumbo.jpg'),
        description: 'A boat through the mangrove channels and islands of the Madu wetland, including the cinnamon island and the island temple.'
      },
      {
        name: 'Bentota beach',
        day: 3,
        optional: false,
        image: img('srl1ll1wcb40ejjkuze51ip4j6aq_shutterstock_2035695842.jpg'),
        description: 'An afternoon on the long golden strand between the river mouth and the reef.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Two nights in a Bawa designed resort with a tea estate stop on the way down, the turtle hatchery, a Madu Ganga boat safari and the beach.',
      image: img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Colombo',
    dayLabel: 'Day 4 to 5',
    images: [
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
      img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
      img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg')
    ],
    dayImages: {
      4: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      5: [
        img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
        img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
        img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
        img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Colombo city tour`,
      'Breakfast and a private transfer up the coast to Colombo',
      'Galle Face Green and the Gangaramaya temple complex',
      'The Fort district, the Lotus Tower and Pettah market',
      'Check in and an evening at the rooftop pool',
      `${DAY_MARK}Day 5 · Departure from Colombo`,
      'Breakfast at the hotel and check out',
      'Private transfer to Bandaranaike International for your flight home'
    ],
    accommodation: {
      name: 'Mövenpick Hotel, Colombo',
      description: '1 night · Breakfast · Deluxe room · 5★ · Five star tower hotel with a rooftop pool over the Colombo skyline',
      images: [
        img('gas8ciiryogebxzqcwwrcu4kizqn_352580809_275394528180927_8234755011939311694_n.jpg'),
        img('rszxxqnl9noguzym0c4jr4nv37ns_download%20(10).jpg'),
        img('y9f40slvt0lo8pgiy5syq0jnw5lc_15799848_352114141839988_1155845696527059897_o.jpg'),
        img('mcm9vbndydc2abn3eydyh1vnl294_download%20(6).jpg'),
        img('nnomxwha4njh1oz0wgdoacx2unr9_527627457.png'),
        img('zhu9q37ux3xdg2u78s9q1493d6ew_download%20(9).jpg'),
        img('gyyu2rkhz5y1c2cs14zqvdiknc0d_download%20(7).jpg'),
        img('gds8x9hdvicachrr52qwd9l0eq47_download%20(8).jpg'),
        img('s2tlurxh8bvbmceyzzk0ov87ghvd_262484546.png'),
        img('n85sf7f5timi4lb754y0awgzj8i3_download%20(5).jpg'),
        img('qlqtlu7cf4bobptm5sk4wg82bhxo_201710161044085883-de6ce0f4_z.jpg')
      ]
    },
    activities: [
      {
        name: 'Private full day Colombo sightseeing',
        day: 4,
        optional: false,
        image: img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and Pettah market by private car.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A last night high above the capital with a private full day of its temples, colonial quarter and markets.',
      image: img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
    }
  }
];

const detail = {
  slug: 'luxury-sri-lanka-kandy-bentota-and-colombo-in-five-star-hotels',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Luxury Sri Lanka: Kandy, Bentota and Colombo in Five Star Hotels',
  alt: 'Infinity pool of a five star beach resort at Bentota',
  days: '5 days / 4 nights',
  stations: '3 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Luxury',
  tags: ['Luxury', 'Beach', 'Honeymoon'],
  price: 46540,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Bentota', 'Colombo'],
  stats: { days: 5, cities: 3, hotels: 3, activities: 6, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['4 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aditya',
    image: '/experts/aditya.webp',
    role: 'Sri Lanka expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Bentota is where the trip exhales. After the temples and tea estates, three nights by the water is exactly the right medicine.',
    quoteMore: 'Ask for an early start on the Galle day. The fort ramparts are empty before ten and the light on the lighthouse is at its best.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five days in five star hotels: a night on the river at Kandy with a private dance show, two in a Bawa designed resort at Bentota with the turtle hatchery and a Madu Ganga boat safari, and a last night above the Colombo skyline.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in five star hotels with breakfast; private airport transfers and all road travel in an air conditioned car with chauffeur guide; a private Pinnawala elephant sanctuary visit; private Kandy lake drive and Kandyan dance show; the Kosgoda turtle hatchery; a Madu Ganga boat safari; Bentota beach time; a private full day Colombo sightseeing tour.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches and dinners; entrance tickets where payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (None)', text: 'Arrival at Bandaranaike International and private transfer inland\nA private stop at the Pinnawala elephant sanctuary\nCheck in at your riverside hotel in Kandy\nA private lake drive and the Kandyan dance performance', hotel: 'Mahaweli Reach Hotel, Kandy', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A private stop at the Pinnawala elephant sanctuary', 'Check in at your riverside hotel in Kandy'] },
    { title: 'Day 2: Tea estates and the turtles (B)', text: 'Breakfast, then a transfer down through the tea country\nA plantation and factory visit with a tasting\nThe Kosgoda turtle hatchery before the coast\nCheck in at your Bentota resort for sunset', hotel: 'Cinnamon Bentota Beach', highlights: ['Breakfast, then a transfer down through the tea country', 'A plantation and factory visit with a tasting', 'The Kosgoda turtle hatchery before the coast'] },
    { title: 'Day 3: Madu Ganga and the beach (B)', text: 'Breakfast, then a boat safari on the Madu Ganga\nMangrove tunnels, the cinnamon island and the island temple\nThe afternoon on Bentota beach\nOptional: a spa treatment at the resort', hotel: 'Cinnamon Bentota Beach', highlights: ['Breakfast, then a boat safari on the Madu Ganga', 'Mangrove tunnels, the cinnamon island and the island temple', 'The afternoon on Bentota beach'] },
    { title: 'Day 4: Colombo city tour (B)', text: 'Breakfast and a private transfer up the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nCheck in and an evening at the rooftop pool', hotel: 'Mövenpick Colombo', highlights: ['Breakfast and a private transfer up the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
    { title: 'Day 5: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches and dinners; entrance tickets where payable locally; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const luxurySriLankaKandyBentotaColomboBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const luxurySriLankaKandyBentotaColomboProduct = {
  slug: detail.slug,
  places: ['Kandy', 'Bentota', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 6,
  transfers: 6,
  meals: 4,
  price: detail.price,
  images: cardImages
};
