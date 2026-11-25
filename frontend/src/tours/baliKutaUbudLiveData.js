// Bali Beaches and Ubud: 6 nights, priced live from the supplier rate sheets (see backend/live_packages.py).
// Photos are served from the app's own storage (backend/media.py copies each one in on first use).
const stored = (url) => `${process.env.REACT_APP_BACKEND_URL}/api/media?u=${encodeURIComponent(url)}`;
const img = p => stored(`https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`);
const bk = (id, k) => stored(`https://cf.bstatic.com/xdata/images/hotel/max1024x768/${id}.jpg?k=${k}&o=`);
const DAY_MARK = '__day__';

const P = {
  kuta: img('deriva74h0yzbv3z7xmdudk0w70b_1464167116_kuta-square.jpg'),
  kutaPark: img('knfbboa3r8mo0iluevx4bvv0elf4_new-kuta-green-park.jpg'),
  benoa: img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg'),
  uluwatu: img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
  uluwatu2: img('3wbl1quszkxet87fhjkyh05yce0t_Uluwatu-1.jpg'),
  tanahLot: img('0d7ma1hcu2q4sm2jc7zgew41a0w3_1498563522_Tanah_Lot_1.jpg'),
  swing: img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
  kintamani: img('66bta6tykrqswxkgaqcapozcbqei_Kintamani%20Highlands,%20Bali%201.jpg'),
  batur: img('yx9uedsyf0x9qg3xk4d8v711tcfz_Mount%20Batur%201.jpg'),
  coffee: img('fy743d4f63j2y9w1i1rg609a9dcw_1498542590_Civet-Coffee.jpg'),
  market: img('p5qmu24btsi6rw9ye14yp9y3v9js_1464162732_things-to-do-in-bali-ubud-art-market.jpg'),
  palace: img('yr3fpbu13cn8stfjp0zts9b4f588_1470742724_ubud-royal-palace.jpg'),
  ubud1: img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  ubud2: img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  ubud3: img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  ubud5: img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
  monkey: img('qc1yophslknxmsjuxv7tdovh1r3t_Monkey%20Forest,%20Ubud.jpg'),
};
const kutaHotel = [
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/23023644.jpg?k=b3fb1f37a88c553edac4388d905f238f8c731b9e2f9083f998ba4459b452af29&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/216025896.jpg?k=b25e41f7edf15f2a74f624874f1c9e89077172c9f0ef7b0c76c7492a8e07771d&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/23027318.jpg?k=b36a9a1c826203f0c0a0fbaa7186bd9fdefbe3be66e87550214f59a9435316aa&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/259696061.jpg?k=1350130bb21d710bf3a66542e6da391a98cbb1cf94df96e784a13a2f54c72159&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/23023678.jpg?k=5bca7ad788a81324ad6de5ef78d094e8ddd543e2536c8d343c7da7a5abe08d77&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/101143051.jpg?k=c18270c00bcc6774735ccdbadd32c95d22b266770198fc122f324a00671b30cf&o="
].map(stored);
const ubudVilla = [
  bk('886792728', '5723feeb17f2633c1891ae25e5b2cb1a682a38b40616c454ea8540d0dbc7915b'),
  bk('871944054', '7453bf3e00373d5743151793448030cbedbd8ff338fb3fd723e1dbaa355b8a8d'),
  bk('886791687', '295e708727876960d41d765726b4a3c063197a24816b443885b5e3d644a3de3d'),
  bk('886791712', '611e16569d0d21548dc350eeaaac11ed0c60ea50fc626e63d0e808ea25364859'),
  bk('886791812', 'a656137504b4c6e302e6ddd2ed8a494ab1877f53241253a5de947c057def2ac8'),
  bk('886791818', 'e0c42dc65a7ed7d960e526a3fc4be9c74cf18ef2b0804f608820186b46db306b'),
];

const heroGallery = [P.tanahLot, P.swing, P.uluwatu, P.benoa, P.kintamani, P.ubud1, P.kuta, P.market, P.batur, P.palace];
const cardImages = [P.tanahLot, P.swing, P.uluwatu, P.kintamani];

const stops = [
  {
    letter: 'A', name: 'Kuta', dayLabel: 'Day 1 to 3',
    images: [P.kuta, P.benoa, P.uluwatu, P.tanahLot],
    dayImages: { 1: [P.kuta, P.kutaPark, kutaHotel[0]], 2: [P.benoa, P.uluwatu, P.uluwatu2], 3: [P.tanahLot, P.kuta, P.kutaPark] },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Bali`,
      'Arrival at Denpasar airport and private transfer to your hotel in Kuta',
      'Check in to your 4 star hotel',
      'The rest of the day free for Kuta Beach and the sunset',
      `${DAY_MARK}Day 2 · Water sports and Uluwatu Temple`,
      'Breakfast, then a private drive to Tanjung Benoa Beach',
      'One round each of banana boat, jet ski and parasailing',
      'On to Uluwatu Temple, 70 metres above the ocean, entrance ticket included',
      'Private transfer back to your hotel',
      `${DAY_MARK}Day 3 · Tanah Lot at sunset`,
      'Breakfast and a free morning at the pool or the beach',
      'Afternoon private drive to Tanah Lot Temple, entrance ticket included',
      'Sunset from the cliff viewpoints, then the transfer back to Kuta',
    ],
    accommodation: {
      name: 'Kuta Central Park Hotel or similar',
      description: '3 nights · Breakfast · Superior room · 4★ · Four star hotel with three pools, 2 km from Kuta Beach. On some dates we book a similar 4 star hotel in Kuta.',
      images: kutaHotel,
    },
    activities: [
      { name: 'Banana boat, jet ski and parasailing', day: 2, optional: false, image: P.benoa, description: 'A morning on the water at Tanjung Benoa Beach with one round each of banana boat, jet ski and parasailing.' },
      { name: 'Uluwatu Temple', day: 2, optional: false, image: P.uluwatu, description: 'The sea temple on the limestone cliffs of the south coast. Your entrance ticket is included.' },
      { name: 'Tanah Lot Temple at sunset', day: 3, optional: false, image: P.tanahLot, description: 'An afternoon visit to the temple on its rock in the sea, timed for sunset. Your entrance ticket is included.' },
    ],
    program: { name: 'Kuta', description: 'Three nights by the beach with water sports, Uluwatu and Tanah Lot.', image: P.kuta },
  },
  {
    letter: 'B', name: 'Ubud', dayLabel: 'Day 4 to 7',
    images: [P.ubud1, P.swing, P.kintamani, P.market],
    dayImages: { 4: [P.ubud1, P.ubud2, ubudVilla[0]], 5: [P.swing, P.kintamani, P.coffee, P.market], 6: [P.monkey, P.ubud3, P.ubud5], 7: [P.ubud5, P.palace] },
    bullets: [
      `${DAY_MARK}Day 4 · Kuta to Ubud`,
      'Breakfast, then a private transfer from Kuta to your villa in Ubud',
      'Check in to your pool villa among the rice fields',
      'The afternoon free for a walk into Ubud',
      `${DAY_MARK}Day 5 · Kintamani and the Bali Swing`,
      'Breakfast, then a private drive through the craft villages of Celuk and Mas',
      'A coffee plantation visit and the Kintamani viewpoint over Mount Batur',
      'Your Bali Swing experience above the jungle',
      'Ubud Art Market and Ubud Palace before the transfer back',
      `${DAY_MARK}Day 6 · A free day in Ubud`,
      'Breakfast and a full day at leisure',
      'Time for the Monkey Forest, a spa or the rice terraces at your own pace',
      `${DAY_MARK}Day 7 · Departure`,
      'Breakfast at the villa and check out',
      'Private transfer to Denpasar airport for your flight home',
    ],
    accommodation: {
      name: 'Alam Puisi Villa Ubud or similar',
      description: '3 nights · Breakfast · One bedroom pool villa · 4★ · Pool villa among the rice fields, a short drive from the centre of Ubud',
      images: ubudVilla,
    },
    activities: [
      { name: 'Kintamani volcano view and coffee plantation', day: 5, optional: false, image: P.kintamani, description: 'A private day in the highlands: the craft villages, a coffee plantation and the viewpoint over Mount Batur and its lake.' },
      { name: 'Bali Swing experience', day: 5, optional: false, image: P.swing, description: 'One swing above the jungle valley, with time for photos.' },
      { name: 'Ubud Art Market and Ubud Palace', day: 5, optional: false, image: P.market, description: 'An easy end to the day in the centre of Ubud before the drive back to your villa.' },
    ],
    program: { name: 'Ubud', description: 'Three nights in a pool villa with Kintamani, the Bali Swing and a free day.', image: P.ubud1 },
  },
];

const detail = {
  slug: 'bali-beaches-and-ubud-kuta-tanah-lot-uluwatu-and-the-bali-swing',
  ctaHref: '/l/bali/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bali Beaches and Ubud: Kuta, Tanah Lot, Uluwatu and the Bali Swing',
  alt: 'Tanah Lot Temple on its rock at sunset, Bali',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private air conditioned car with driver for every transfer and sightseeing day',
  tag: 'Beach',
  tags: ['Beach', 'Culture'],
  price: 27600,
  live: 'bali-kuta-ubud',
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kuta', 'Ubud'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 6, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation'],
  ],
  expert: {
    name: 'Ananya', image: '/team/asia-2.webp', role: 'Bali expert at Hi Tours', createdBy: 'Trip created by',
    quote: 'Start by the beach and finish in the rice fields. You get the water sports and the temples first, then three slow days in a pool villa.',
    quoteMore: 'Go to Tanah Lot in the afternoon. The light is best in the last hour before sunset, and the crowds thin out after it.',
    more: 'Read more', less: 'Read less',
  },
};

const route = { stops };
const notIncluded = 'Not included: international flights; Bali visa on arrival and tourist levy; lunches and dinners; travel insurance; tips and personal expenses.';
const glance = {
  h2: 'Tour summary',
  short: 'Seven days in two parts: three nights in Kuta with water sports, Uluwatu and a Tanah Lot sunset, then three nights in a pool villa in Ubud with Kintamani and the Bali Swing.',
  readMore: 'Read more', readLess: 'Read less', hide: 'Hide tour summary',
  intro: 'Included: 6 nights in four star hotels with daily breakfast; Tanah Lot Temple entrance ticket; banana boat ride with jet ski and parasailing; Uluwatu Temple entrance ticket; the Bali Swing experience; arrival and departure airport transfers; the transfer between your two hotels; all sightseeing and activity transfers by private car.',
  intro2: notIncluded,
  accommodationHeading: 'Accommodation', highlightsHeading: 'Key highlights', dayHeading: 'Day', routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Bali', hotel: 'Kuta Central Park Hotel or similar', highlights: ['Private transfer from Denpasar airport to Kuta', 'Evening free for Kuta Beach'] },
    { title: 'Day 2: Water sports and Uluwatu Temple (B)', hotel: 'Kuta Central Park Hotel or similar', highlights: ['Banana boat, jet ski and parasailing at Tanjung Benoa', 'Uluwatu Temple with entrance ticket'] },
    { title: 'Day 3: Tanah Lot at sunset (B)', hotel: 'Kuta Central Park Hotel or similar', highlights: ['Free morning', 'Tanah Lot Temple with entrance ticket'] },
    { title: 'Day 4: Kuta to Ubud (B)', hotel: 'Alam Puisi Villa Ubud or similar', highlights: ['Private transfer to Ubud', 'Check in to your pool villa'] },
    { title: 'Day 5: Kintamani and the Bali Swing (B)', hotel: 'Alam Puisi Villa Ubud or similar', highlights: ['Kintamani viewpoint and coffee plantation', 'Bali Swing experience', 'Ubud Art Market and Palace'] },
    { title: 'Day 6: A free day in Ubud (B)', hotel: 'Alam Puisi Villa Ubud or similar', highlights: ['Day at leisure'] },
    { title: 'Day 7: Departure (B)', hotel: 'Departure', highlights: ['Private transfer to Denpasar airport'] },
  ].map((d) => ({ ...d, text: d.highlights.join('\n') })),
  outro: notIncluded,
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bali', href: '/asia/bali' },
  { label: detail.title },
];

export const baliKutaUbudLiveBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const baliKutaUbudLiveProduct = {
  slug: 'book/bali-kuta-ubud', liveKey: 'bali-kuta-ubud', places: ['Kuta', 'Ubud'], href: '/asia/book/bali-kuta-ubud',
  tag: detail.tag, styles: detail.tags, title: detail.title, alt: detail.alt,
  days: 7, stops: 2, hotels: 2, cities: 2, activities: 6, transfers: 9, meals: 6,
  price: detail.price, noSale: true, images: cardImages, stars: [4],
};
