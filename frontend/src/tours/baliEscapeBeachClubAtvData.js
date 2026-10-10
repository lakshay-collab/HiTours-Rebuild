// Bali Escape with Beach Club and ATV. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Tirta Empul',
    dayLabel: 'Day 1 to 2',
    images: [
      img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
      img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
      img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
      img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg')
    ],
    dayImages: {
      1: [
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG'),
        img('blc7rv8lvishrrzjuxwmcwyxm2ev_1464182679_Bali-Bird-Park-42414.jpg'),
        img('4qzfjlhp9rb7opyc8dzvjjpgi0cy_1470896048_9396103363_d354fd2bc4_b.jpg'),
        img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg')
      ],
      2: [
        img('q77aw23cnynqx76tj5h7hs0ehogc_Tirta%20Empul-2.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('2kpx79s3vxrjrh07k2kaajmjalmw_shutterstock_2313711741.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Bali`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your private pool villa',
      'Rest of the day free in the rice fields',
      'Optional: the Ubud art market or a floating breakfast at the villa',
      `${DAY_MARK}Day 2 · Central Bali and Tirta Empul`,
      'A full day out with your own car and guide',
      'The Bali swing and Tegenungan waterfall',
      'Tirta Empul, the holy spring temple',
      'A photo stop at the Tegalalang rice terraces'
    ],
    accommodation: {
      name: 'Kori Maharani Villas, Ubud',
      description: '2 nights · Room only · Super deluxe room · 4★ · Private pool villas in the rice fields near Sanur',
      images: [
        img('y77pd1rz5cgyv75e21idepy0hds9_full_dsc_0145_1579186820.jpg'),
        img('6lvzod82t2m2u80lc8a5jjjanw2l_eb19bae4.jpg'),
        img('r4nszvfcf70k9p4l4m90xbppi7uu_52b60b8c.jpg'),
        img('cqrn0gfapj1kgmqypmu3x94gpdkm_cc9d2c4e.jpg'),
        img('titqv9wbsfcvmwigggjs6x65g2yh_614abb67.jpg'),
        img('k2qxv1rz6b2i1bh6t55zlfesncq4_6fb06ee6.jpg'),
        img('zl7zf9u5ql79sefv1gcn9oow3hy2_b75952ba.jpg'),
        img('cqv099hwyi4up1afb7lukcf2emvu_61065075.jpg'),
        img('smoab3gwa556yaxt2wem62zr319x_239036369.jpg'),
        img('q5nyar6y3vf81jaipnngdyy8h2wy_ce323b5e.jpg'),
        img('rfmsksjrtjehk7sne6wdsdz5wqhu_e43fbc13.jpg')
      ]
    },
    activities: [
      {
        name: 'Central Bali with Tirta Empul',
        day: 2,
        optional: false,
        image: img('q77aw23cnynqx76tj5h7hs0ehogc_Tirta%20Empul-2.jpg'),
        description: 'A full day through central Bali: the Bali swing, Tegenungan waterfall, the holy spring temple at Tirta Empul and a photo stop at the rice terraces.'
      },
      {
        name: 'Ubud art market',
        day: 1,
        optional: true,
        image: img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
        description: 'Two floors of carvings, batik, woven bags and silver in the middle of town, quietest and cheapest when the stalls first open.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Two nights in a private pool villa, with a full day through the swings, waterfalls and spring temples of central Bali.',
      image: img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Pandawa and Nusa Penida',
    dayLabel: 'Day 3 to 6',
    images: [
      img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
      img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg')
    ],
    dayImages: {
      3: [
        img('ufrk6ndjja0qqsjcik54drq43b02_shutterstock_2214240119%20(2).jpg'),
        img('3uo01fcjbizpe7x61eshbx62r4hr_Finns-picture-.jpg'),
        img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
      ],
      4: [
        img('g64p0bgnyopzxl48412tn5huwdfr_jcr_content.jpg'),
        img('hedo81l1o35p7ztb8s12rhkbj576_shutterstock_2207923179.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('usdgmsoaand8ytcb34q674qu6c2p_1470909118_Hanoman_Kecak_Dance_Uluwatu_sunset.jpg')
      ],
      5: [
        img('t0maljvk56ovlztbtfx1w286arze_lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('o974vnhozbrtaa60gdp3uzoxorjz_37530932040_49a7318d15_o.jpg')
      ],
      6: [
        img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
        img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
        img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Quad bikes and beach club`,
      'Check out, then a tandem quad bike route in the morning',
      'Rice fields, a river crossing and a cave tunnel',
      'Afternoon at Finns Beach Club on the Canggu sand',
      'Private transfer to your beachfront hotel in Kuta',
      `${DAY_MARK}Day 4 · Pandawa beach and Uluwatu`,
      'Breakfast, then south to the Bukit peninsula',
      'Pandawa beach below its limestone cliffs',
      'Uluwatu temple above the surf at sunset',
      'Optional: the Kecak fire dance at the temple',
      `${DAY_MARK}Day 5 · Nusa Penida and four beaches`,
      'Early breakfast, then private transfer to Sanur harbour',
      'Speedboat across to Nusa Penida for the west coast',
      'Kelingking beach, Angel\'s Billabong and the Paluang cliff',
      'Return boat to Bali and back to your hotel',
      `${DAY_MARK}Day 6 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Mamaka by Ovolo, Kuta',
      description: '3 nights · Breakfast · Super deluxe room · 4★ · Design hotel facing Kuta beach with a rooftop pool',
      images: [
        img('jvrf1c6kwev68rk38iedyxs5c6ya_img6.jpg'),
        img('2wpox2yjc9q2qpwhcl2unboqbs96_img3.jpg'),
        img('rfqsvxubkpl2la3npwm8grl5lv7w_img2.jpg'),
        img('bddkr7xxt0kmk8fjp3mo0k43vk2a_img16.jpg'),
        img('dllxrnh5q0wu2jxfw94ikbzklr3g_img15.jpg'),
        img('vkxzqb4o3hk76sgs9jp0gdk6ok5u_img37.jpg'),
        img('yk4dj45o7z08fql0wnr1jgxv8drp_img5.jpg'),
        img('i1ljujiu35llzitrmduhkylv0vwb_img20.jpg'),
        img('6yn23i897e7fsyxz7ab7ehe9e4qz_img38.jpg'),
        img('ja5uqi1ifb2aq7na9yxd8m24cdo7_img14.jpg'),
        img('76tda2nc23ntezrj7w1vucqhbdg4_img28.jpg'),
        img('5p6s4e7z5zmb8ifl9w2hd9jrkefw_img17.jpg'),
        img('2jqbxgc0a1ojt56b3a6mjqv9kjcp_img19.jpg'),
        img('y6qlp3eqj4zsqq9edgyboi5a535x_img36.jpg')
      ]
    },
    activities: [
      {
        name: 'Tandem ATV ride',
        day: 3,
        optional: false,
        image: img('ufrk6ndjja0qqsjcik54drq43b02_shutterstock_2214240119%20(2).jpg'),
        description: 'A two seat quad bike route through rice fields, a river crossing and a cave tunnel, with helmets, boots and a guide ahead of you.'
      },
      {
        name: 'Finns Beach Club',
        day: 3,
        optional: false,
        image: img('3uo01fcjbizpe7x61eshbx62r4hr_Finns-picture-.jpg'),
        description: 'Day beds, pools and a sound system on the sand at Canggu, with entry and transfers included for an easy afternoon by the sea.'
      },
      {
        name: 'Pandawa beach and Uluwatu',
        day: 4,
        optional: false,
        image: img('g64p0bgnyopzxl48412tn5huwdfr_jcr_content.jpg'),
        description: 'The limestone cut road down to Pandawa beach, then the cliff top temple at Uluwatu timed for sunset over the Indian Ocean.'
      },
      {
        name: 'Nusa Penida west with Paluang cliff',
        day: 5,
        optional: false,
        image: img('t0maljvk56ovlztbtfx1w286arze_lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        description: 'Speedboat across for Kelingking beach, Angel\'s Billabong, Broken Bay and the Paluang cliff viewpoint above the water.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights in a design hotel on Kuta beach, with a quad bike morning, a Canggu beach club, Pandawa and Uluwatu, and a Nusa Penida day.',
      image: img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg')
    }
  }
];

const detail = {
  slug: 'bali-escape-with-beach-club-and-atv',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bali Escape with Beach Club and ATV',
  alt: 'Beach club pool above the sand at Canggu, Bali',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Adventure',
  tags: ['Adventure', 'Luxury'],
  price: 28500,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Tirta Empul', 'Kuta', 'Uluwatu', 'Nusa Penida'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 5, transfers: 13 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['13 transfers', 'Transport'],
    ['3 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Four star hotels, a private pool villa and a beach club, under thirty thousand rupees. The best value week we sell.',
    quoteMore: 'The villa nights come without breakfast, which is why the price works, and there are good warungs two minutes away. Add a floating breakfast for one morning if you want the photograph.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days on a small budget with a private pool villa and a design hotel on Kuta beach, a central Bali day with Tirta Empul, a tandem quad bike route, Finns Beach Club, Pandawa and Uluwatu, and a full day on Nusa Penida.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights, with breakfast on the three Kuta nights; private airport and inter city transfers; central Bali tour with Tirta Empul; tandem ATV ride; Finns Beach Club entry; Pandawa beach and Uluwatu sunset tour; Nusa Penida west coast tour.',
  intro2: 'Not included: international flights; Indonesia visa fees; breakfast on the villa nights; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Bali (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your private pool villa\nRest of the day free in the rice fields\nOptional: the Ubud art market or a floating breakfast at the villa', hotel: 'Kori Maharani Villas', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your private pool villa', 'Rest of the day free in the rice fields'] },
    { title: 'Day 2: Central Bali and Tirta Empul (No meals)', text: 'A full day out with your own car and guide\nThe Bali swing and Tegenungan waterfall\nTirta Empul, the holy spring temple\nA photo stop at the Tegalalang rice terraces', hotel: 'Kori Maharani Villas', highlights: ['A full day out with your own car and guide', 'The Bali swing and Tegenungan waterfall', 'Tirta Empul, the holy spring temple'] },
    { title: 'Day 3: Quad bikes and beach club (No meals)', text: 'Check out, then a tandem quad bike route in the morning\nRice fields, a river crossing and a cave tunnel\nAfternoon at Finns Beach Club on the Canggu sand\nPrivate transfer to your beachfront hotel in Kuta', hotel: 'Mamaka by Ovolo', highlights: ['Check out, then a tandem quad bike route in the morning', 'Rice fields, a river crossing and a cave tunnel', 'Afternoon at Finns Beach Club on the Canggu sand'] },
    { title: 'Day 4: Pandawa beach and Uluwatu (B)', text: 'Breakfast, then south to the Bukit peninsula\nPandawa beach below its limestone cliffs\nUluwatu temple above the surf at sunset\nOptional: the Kecak fire dance at the temple', hotel: 'Mamaka by Ovolo', highlights: ['Breakfast, then south to the Bukit peninsula', 'Pandawa beach below its limestone cliffs', 'Uluwatu temple above the surf at sunset'] },
    { title: 'Day 5: Nusa Penida and four beaches (B)', text: 'Early breakfast, then private transfer to Sanur harbour\nSpeedboat across to Nusa Penida for the west coast\nKelingking beach, Angel\'s Billabong and the Paluang cliff\nReturn boat to Bali and back to your hotel', hotel: 'Mamaka by Ovolo', highlights: ['Early breakfast, then private transfer to Sanur harbour', 'Speedboat across to Nusa Penida for the west coast', 'Kelingking beach, Angel\'s Billabong and the Paluang cliff'] },
    { title: 'Day 6: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; breakfast on the villa nights; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const baliEscapeBeachClubAtvBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const baliEscapeBeachClubAtvProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Tirta Empul', 'Kuta', 'Uluwatu', 'Nusa Penida'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 5,
  transfers: 13,
  meals: 3,
  price: detail.price,
  images: cardImages
};
