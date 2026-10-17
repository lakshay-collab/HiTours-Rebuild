// Fully Loaded Sri Lanka Super Deluxe: Kandy, Jetwing Yala and Bentota. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
  img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
  img('2ey4p2rt908ipw6om71pujkmseym_shutterstock_589428650.jpg'),
  img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
  img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
  img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
  img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
  img('y6ifenge0ejrzoq7k82198if3ky8_shutterstock_726294346.jpg'),
  img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg'),
  img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
  img('y6ifenge0ejrzoq7k82198if3ky8_shutterstock_726294346.jpg'),
  img('y3g7ag847gdp3i9i6i7bl3qyp5tn_shutterstock_1735329926.jpg'),
  img('kg26v8ssn2abkku4hros6y87biin_shutterstock_701553847.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Colombo',
    dayLabel: 'Day 1',
    images: [
      img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
      img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
      img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
      img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('um8mzu64d4hrt5lgx9es0e2wop7w_44552046890_f2e90371bd_o.jpg'),
        img('l48shblqxv366nemzrfbatxoijk0_shutterstock_1439300684.jpg'),
        img('2xy4fsheig14o6hfuh9gmrrz9ddi_1581087170_36129888633_ce3fb0410e_b.jpg'),
        img('q16lt8r92ltfty0q5jna332cg2e7_1377069_561333343921567_1041159370_n.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo`,
      'Arrival at Bandaranaike International and private transfer to your hotel',
      'Check in on the Mount Lavinia beachfront',
      'The rest of the day at leisure',
      'Optional: sunset drinks on Galle Face Green'
    ],
    accommodation: {
      name: 'Mirage Hotel, Colombo',
      description: '1 night · Breakfast and dinner · Deluxe room · 3★ · Beachside hotel at Wellawatte in south Colombo',
      images: [
        img('oa3tad9w5rp8c5ts7ahto4mbyknn_mirage-hotel-colombo.jpg'),
        img('n9r0assgwet0g6zz1hwmmugynbf7_242832337.jpg'),
        img('owuoy8azo4t559t1vnwi5ss8kgop_242832332.jpg'),
        img('axuakqf7x97qfhnfynxuvzftyigw_154582823.jpg'),
        img('ma7b4ku0i8rq64oloog2hiujkrns_111418093.jpg'),
        img('1fj9r51ifga79eoqho9h55vd8zpo_242832342.jpg'),
        img('472y5ujog0pg58ysdvzfhq0kagnd_107999552.jpg'),
        img('wz007f139q83me3g7e0w4bh35jml_107947744.jpg'),
        img('o41igjq1yybowgkdumcafnjx0trp_154582873.jpg'),
        img('ufcad7f4zxa93fdcizhfohtcz7ji_167665744.jpg'),
        img('v2qvt5659bq4ndiggtffzs9kqg3p_167668992.jpg'),
        img('w8opoq0e1jv6pb66q81yju9cw1ao_166436779.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Colombo',
      description: 'A gentle first night by the sea in south Colombo to shake off the flight.',
      image: img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kandy',
    dayLabel: 'Day 2 to 3',
    images: [
      img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
      img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
      img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
      img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg')
    ],
    dayImages: {
      2: [
        img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        img('2qdrxrko072bcco7ufzgu2npr0c7_1581078051_17185271045_4b7e32f3fc_b_(1).jpg')
      ],
      3: [
        img('zddej06lbz5sx2o1d0hx0bg0bfhd_1582551005_Colombo_1.png'),
        img('b14m75op1m07swbrru2fqbc31lfh_7006860454_cec45734cb_o.jpg'),
        img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
        img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Elephants and the road to Kandy`,
      'Breakfast, then a transfer inland via Pinnawala',
      'Bath time for the herd in the Maha Oya river',
      'Check in at your Kandy hotel',
      'An evening lake drive and the Kandyan dance show',
      `${DAY_MARK}Day 3 · A day at Sigiriya`,
      'Breakfast, then the road north through the Cultural Triangle',
      'The water gardens and the climb past the mirror wall',
      'Frescoes of the cloud maidens and the lion paw terrace',
      'Summit ruins and views across the dry zone jungle',
      'Back to Kandy for dinner at the hotel'
    ],
    accommodation: {
      name: 'Hotel Thilanka, Kandy',
      description: '2 nights · Breakfast and dinner · Deluxe room · 3★ · Hillside hotel with a pool above Kandy lake',
      images: [
        img('1yi9qopfkbt72ka1nceoqw3uakbg_infinity-pool.jpg'),
        img('272g7hgj2tdhtyb1tl24ai0kxsxs_367362938.jpg'),
        img('t0isnnnvteu6uswtmeh4sa23scvu_hotel-thilanka%20(2).jpg'),
        img('jnayoice4km7beulfi1ingfsc10m_hotel-thilanka%20(3).jpg'),
        img('yen84v7b49kdebrzcyspc00sdq0g_suite-room.jpg'),
        img('k1tquaij3lk7reunl2d65kfyle1p_royal-pavilion.jpg'),
        img('eptiqzwozl5b81p2y2945qzhb2nu_5ec57ad6_z.webp'),
        img('b6l0q6m2gu8vh74ihkk3x98a04c0_hotel-thilanka%20(6).jpg'),
        img('5420xzhm87uf471ixp0k4nhhzk32_hotel-thilanka%20(5).jpg'),
        img('xm9kwvvkrncvqt7glkpf10qynp3q_hotel-thilanka%20(1).jpg'),
        img('848qfvqchgx361u0n3mpjusqvwir_367362939.jpg'),
        img('p7pdclljp93g8suq7blbxvifnsu1_200736166.jpg')
      ]
    },
    activities: [
      {
        name: 'Private visit to Pinnawala',
        day: 2,
        optional: false,
        image: img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        description: 'A stop on the way up from the airport to watch the resident herd bathe in the Maha Oya river and feed at the sanctuary.'
      },
      {
        name: 'Private lake drive and Kandyan dance show',
        day: 2,
        optional: false,
        image: img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        description: 'An evening circuit of the lake followed by a traditional performance of drummers, masked dancers and the closing fire walk.'
      },
      {
        name: 'Private excursion to Sigiriya',
        day: 3,
        optional: false,
        image: img('zddej06lbz5sx2o1d0hx0bg0bfhd_1582551005_Colombo_1.png'),
        description: 'A full day out to the fifth century rock citadel: the water gardens, the mirror wall, the frescoes and the summit palace ruins.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'Two nights above Kandy lake: elephants on the way, a private dance show, a private day at Sigiriya and a full day of the city.',
      image: img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Yala',
    dayLabel: 'Day 4',
    images: [
      img('y3g7ag847gdp3i9i6i7bl3qyp5tn_shutterstock_1735329926.jpg'),
      img('yu048ids2rk6rycafask9o4qn4c7_shutterstock_513139585.jpg'),
      img('2ey4p2rt908ipw6om71pujkmseym_shutterstock_589428650.jpg'),
      img('kg26v8ssn2abkku4hros6y87biin_shutterstock_701553847.jpg')
    ],
    dayImages: {
      4: [
        img('1xmli9j38vniz1tghlcgs4bxa0gc_shutterstock_1840791727.jpg'),
        img('0scen0iugpry0mg4wqnxsr558nvw_Labookellie_tea_plantation__Sri_Lanka_2.jpg'),
        img('5ryv9me1696b1ry058e5jsm7lzya_Botanical_Garden_of_Peradeniya_03.jpg'),
        img('273z0ew2ziyinmy62ccpeay5ggwo_nepal-royal-botanical-gardens.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Kandy sights and the long road to Yala`,
      'Breakfast, then a private half day of the Tooth Relic temple and Peradeniya',
      'A transfer across the hills and down to the dry zone',
      'Check in at your lodge on the park boundary',
      'An early night before the dawn safari'
    ],
    accommodation: {
      name: 'Jetwing Yala, Yala',
      description: '1 night · Breakfast and dinner · Deluxe room · 5★ · Five star resort on the beach at the edge of Yala National Park',
      images: [
        img('173sfukqqcw6nvoxsmgw7nmv2dzt_download%20-%202024-02-15T130448.666.jfif'),
        img('3adr9g3pjhp33s3sahk28t0h0amg_download%20-%202024-02-15T130600.166.jfif'),
        img('8k6jycpl2o10en5rgky8enkpeevk_download%20-%202024-02-15T130612.261.jfif'),
        img('b0umibk7y8o6obkt3hnvb77zb7uh_download%20-%202024-02-15T130427.274.jfif'),
        img('foutvdhtz2rh8jvsjs28i14gihpw_download%20-%202024-02-15T130532.240.jfif'),
        img('khkjnlc27r0tykofhjnz0av5b6cn_download%20-%202024-02-15T130441.685.jfif'),
        img('ut0jlgzv4vnji67hoys3r6rgwh86_download%20-%202024-02-15T130509.371.jfif'),
        img('z0z9m1gw59zxlpq9mcarvlyza4z9_download%20-%202024-02-15T130519.405.jfif'),
        img('8nat8pgskx2gsrxj2d8wumlzb5ll_download%20-%202024-02-15T130457.648.jfif'),
        img('j0n2skaepcm5vf6ebi47krmy6kog_download%20-%202024-02-15T130502.747.jfif'),
        img('0jlbj410m9554ne0k7xi39vm9f2f_download%20-%202024-02-15T130545.917.jfif'),
        img('lgnoed4dtmq011t28kf9retgi8gg_download%20-%202024-02-15T130436.276.jfif')
      ]
    },
    activities: [
      {
        name: 'Private full day Kandy sightseeing',
        day: 4,
        optional: false,
        image: img('1xmli9j38vniz1tghlcgs4bxa0gc_shutterstock_1840791727.jpg'),
        description: 'The Temple of the Sacred Tooth Relic, Peradeniya gardens, the Bahiravokanda Buddha and the gem museum before the road south.'
      },
      {
        name: 'Private jungle safari in Yala National Park',
        day: 5,
        optional: false,
        image: img('f51qwcao4wdfqcijwzpt101o659g_shutterstock_1524292985.jpg'),
        description: 'A private 4x4 safari through the scrub jungle and lagoons of block one, home to leopards, sloth bears, elephants and crocodiles.'
      }
    ],
    program: {
      name: 'Yala',
      description: 'Across the hills to a five star resort on the beach at the edge of the park, with a private jungle safari at dawn.',
      image: img('y3g7ag847gdp3i9i6i7bl3qyp5tn_shutterstock_1735329926.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Bentota',
    dayLabel: 'Day 5 to 6',
    images: [
      img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg'),
      img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg'),
      img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
      img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg')
    ],
    dayImages: {
      5: [
        img('f51qwcao4wdfqcijwzpt101o659g_shutterstock_1524292985.jpg'),
        img('wzzlrjhl9teg5ftvx02j7ifkrlz1_8658046094_ca7107d18a_o.jpg'),
        img('2g53t00i6jttr6n7je1fq6jzqc9a_Frontyard_.jpg'),
        img('e62oezf8kqr0u5yo78hge033bocn_Galapata%20Vihara.jpg')
      ],
      6: [
        img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        img('erzts14ece8u6pbe6qhecfuhqp1a_18436933176_1d582f87a4_o.jpg'),
        img('x9q4lqbckwpj24yjofrltyk65sxu_1581143669_46718192554_c5f406dce3_k.jpg'),
        img('aobaf1yw2mrowt8a50rvhq5jhavm_1582217692_galle_lighthouse.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Dawn safari and on to Bentota`,
      'A pre breakfast jeep safari through Yala block one',
      'Leopards, elephants, crocodiles and peacocks at the waterholes',
      'Breakfast, then a transfer west along the coast to Bentota',
      'Check in and the evening at leisure on the beach',
      `${DAY_MARK}Day 6 · Mirissa and Galle`,
      'Breakfast and a private excursion along the southern coast',
      'Mirissa beach and the palms of Coconut Tree Hill',
      'The Galle Dutch fort: ramparts, lighthouse and old church',
      'Back to Bentota for dinner'
    ],
    accommodation: {
      name: 'Earl\'s Reef, Bentota',
      description: '2 nights · Breakfast and dinner · Deluxe room · 4★ · Four star beachfront resort on the Bentota strand',
      images: [
        img('yhln84gtehigen6j45kts3lb29vx_247133579.jpg'),
        img('utmb42sfe4y0bulaouqiebyqrt6q_247157410.jpg'),
        img('sa0nobl8g6nehgdwf01u26206t9l_247165582.jpg'),
        img('uhtqb8yl3cwbsl1jpqja5lyfpfau_247165573.jpg'),
        img('76vhx7yr484n7nbqgfpcw52gs0nj_340492086.jpg'),
        img('s5d6v6k6qjs82h8p6qayg1wvt636_247165595.jpg'),
        img('77eveaq6vbpzo36heynuok4cum3m_247298373.jpg'),
        img('40zyq7sbywtdk8rtdawsa7a7twvo_247160520.jpg'),
        img('tzvgoo5evadldwggfzf1nx4tmlna_340497011.jpg'),
        img('q2ozbemm7185r14a92pulxrf1o2x_247160678.jpg')
      ]
    },
    activities: [
      {
        name: 'Private excursion to Mirissa',
        day: 6,
        optional: false,
        image: img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        description: 'Along the southern coast to Mirissa beach and Coconut Tree Hill, with the Galle fort on the way back.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Two nights at a four star beachfront resort with a private excursion to Mirissa.',
      image: img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Colombo',
    dayLabel: 'Day 7 to 8',
    images: [
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
      img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
      img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg')
    ],
    dayImages: {
      7: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      8: [
        img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
        img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
        img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
        img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Colombo city tour`,
      'Breakfast and a transfer up the coast to Colombo',
      'Galle Face Green and the Gangaramaya temple complex',
      'The Fort district, the Lotus Tower and Pettah market',
      'Dinner and your last night at the hotel',
      `${DAY_MARK}Day 8 · Departure from Colombo`,
      'Breakfast at the hotel and check out',
      'Private transfer to Bandaranaike International for your flight home'
    ],
    accommodation: {
      name: 'Mirage Hotel, Colombo',
      description: '1 night · Breakfast and dinner · Deluxe room · 3★ · Beachside hotel at Wellawatte in south Colombo',
      images: [
        img('oa3tad9w5rp8c5ts7ahto4mbyknn_mirage-hotel-colombo.jpg'),
        img('n9r0assgwet0g6zz1hwmmugynbf7_242832337.jpg'),
        img('owuoy8azo4t559t1vnwi5ss8kgop_242832332.jpg'),
        img('axuakqf7x97qfhnfynxuvzftyigw_154582823.jpg'),
        img('ma7b4ku0i8rq64oloog2hiujkrns_111418093.jpg'),
        img('1fj9r51ifga79eoqho9h55vd8zpo_242832342.jpg'),
        img('472y5ujog0pg58ysdvzfhq0kagnd_107999552.jpg'),
        img('wz007f139q83me3g7e0w4bh35jml_107947744.jpg'),
        img('o41igjq1yybowgkdumcafnjx0trp_154582873.jpg'),
        img('ufcad7f4zxa93fdcizhfohtcz7ji_167665744.jpg'),
        img('v2qvt5659bq4ndiggtffzs9kqg3p_167668992.jpg'),
        img('w8opoq0e1jv6pb66q81yju9cw1ao_166436779.jpg')
      ]
    },
    activities: [
      {
        name: 'Private full day Colombo sightseeing',
        day: 7,
        optional: false,
        image: img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'Back to the capital for a private full day of its temples, colonial quarter and markets.',
      image: img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
    }
  }
];

const detail = {
  slug: 'fully-loaded-sri-lanka-super-deluxe-kandy-jetwing-yala-and-bentota',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Fully Loaded Sri Lanka Super Deluxe: Kandy, Jetwing Yala and Bentota',
  alt: 'The beach and pool of Jetwing Yala at the edge of the national park',
  days: '8 days / 7 nights',
  stations: '5 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide; 4x4 jeep for the Yala safari',
  tag: 'Luxury',
  tags: ['Luxury', 'Wildlife', 'Beach'],
  price: 52146,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Colombo', 'Kandy', 'Yala', 'Bentota', 'Colombo'],
  stats: { days: 8, cities: 4, hotels: 5, activities: 7, transfers: 11 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['11 transfers', 'Transport'],
    ['14 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aditya',
    image: '/experts/aditya.webp',
    role: 'Sri Lanka expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Yala at dawn is the single best morning you can have in Sri Lanka. Leopards are shy, but the elephants and peacocks never disappoint.',
    quoteMore: 'Wear neutral colours for the safari and keep the camera ready at the waterholes. The first hour after the gates open is when the cats move.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'The Fully Loaded route in upgraded hotels: a soft landing in Colombo, two nights in Kandy with Sigiriya and the dance show, a night at the five star Jetwing Yala with a private dawn safari, two nights at a four star beach resort in Bentota with Mirissa, and a final night in the capital.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights in deluxe, four and five star hotels with breakfast and lunch or dinner daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; private Pinnawala visit; private Kandy lake drive and dance show; a private excursion to Sigiriya; private full day Kandy sightseeing; a private jungle safari in Yala National Park; a private excursion to Mirissa; private full day Colombo sightseeing.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo (D)', text: 'Arrival at Bandaranaike International and private transfer to your hotel\nCheck in on the Mount Lavinia beachfront\nThe rest of the day at leisure\nOptional: sunset drinks on Galle Face Green', hotel: 'Mirage Hotel Colombo', highlights: ['Arrival at Bandaranaike International and private transfer to your hotel', 'Check in on the Mount Lavinia beachfront', 'The rest of the day at leisure'] },
    { title: 'Day 2: Elephants and the road to Kandy (B, D)', text: 'Breakfast, then a transfer inland via Pinnawala\nBath time for the herd in the Maha Oya river\nCheck in at your Kandy hotel\nAn evening lake drive and the Kandyan dance show', hotel: 'Hotel Thilanka, Kandy', highlights: ['Breakfast, then a transfer inland via Pinnawala', 'Bath time for the herd in the Maha Oya river', 'Check in at your Kandy hotel'] },
    { title: 'Day 3: A day at Sigiriya (B, D)', text: 'Breakfast, then the road north through the Cultural Triangle\nThe water gardens and the climb past the mirror wall\nFrescoes of the cloud maidens and the lion paw terrace\nSummit ruins and views across the dry zone jungle\nBack to Kandy for dinner at the hotel', hotel: 'Hotel Thilanka, Kandy', highlights: ['Breakfast, then the road north through the Cultural Triangle', 'The water gardens and the climb past the mirror wall', 'Frescoes of the cloud maidens and the lion paw terrace'] },
    { title: 'Day 4: Kandy sights and the long road to Yala (B, D)', text: 'Breakfast, then a private half day of the Tooth Relic temple and Peradeniya\nA transfer across the hills and down to the dry zone\nCheck in at your lodge on the park boundary\nAn early night before the dawn safari', hotel: 'Jetwing Yala', highlights: ['Breakfast, then a private half day of the Tooth Relic temple and Peradeniya', 'A transfer across the hills and down to the dry zone', 'Check in at your lodge on the park boundary'] },
    { title: 'Day 5: Dawn safari and on to Bentota (B, D)', text: 'A pre breakfast jeep safari through Yala block one\nLeopards, elephants, crocodiles and peacocks at the waterholes\nBreakfast, then a transfer west along the coast to Bentota\nCheck in and the evening at leisure on the beach', hotel: 'Earl\'s Reef, Bentota', highlights: ['A pre breakfast jeep safari through Yala block one', 'Leopards, elephants, crocodiles and peacocks at the waterholes', 'Breakfast, then a transfer west along the coast to Bentota'] },
    { title: 'Day 6: Mirissa and Galle (B, D)', text: 'Breakfast and a private excursion along the southern coast\nMirissa beach and the palms of Coconut Tree Hill\nThe Galle Dutch fort: ramparts, lighthouse and old church\nBack to Bentota for dinner', hotel: 'Earl\'s Reef, Bentota', highlights: ['Breakfast and a private excursion along the southern coast', 'Mirissa beach and the palms of Coconut Tree Hill', 'The Galle Dutch fort: ramparts, lighthouse and old church'] },
    { title: 'Day 7: Colombo city tour (B, D)', text: 'Breakfast and a transfer up the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nDinner and your last night at the hotel', hotel: 'Mirage Hotel Colombo', highlights: ['Breakfast and a transfer up the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
    { title: 'Day 8: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const fullyLoadedSriLankaSuperDeluxeYalaJetwingBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const fullyLoadedSriLankaSuperDeluxeYalaJetwingProduct = {
  slug: detail.slug,
  places: ['Colombo', 'Kandy', 'Yala', 'Bentota'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 5,
  hotels: 5,
  cities: 4,
  activities: 7,
  transfers: 11,
  meals: 14,
  price: detail.price,
  images: cardImages
};
