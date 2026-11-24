// Kuta hotel only package: stay 3 to 6 nights in a 4 star Kuta hotel, everything else at leisure. Prices come from the API.
const PHOTOS = {
  "kcp": [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/23023644.jpg?k=b3fb1f37a88c553edac4388d905f238f8c731b9e2f9083f998ba4459b452af29&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/216025896.jpg?k=b25e41f7edf15f2a74f624874f1c9e89077172c9f0ef7b0c76c7492a8e07771d&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/23027318.jpg?k=b36a9a1c826203f0c0a0fbaa7186bd9fdefbe3be66e87550214f59a9435316aa&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/259696061.jpg?k=1350130bb21d710bf3a66542e6da391a98cbb1cf94df96e784a13a2f54c72159&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/23023678.jpg?k=5bca7ad788a81324ad6de5ef78d094e8ddd543e2536c8d343c7da7a5abe08d77&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/101143051.jpg?k=c18270c00bcc6774735ccdbadd32c95d22b266770198fc122f324a00671b30cf&o="
  ],
  "bliss": [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/638477464.jpg?k=4764d0ae071e8c52e8b022304566abe0cadb978fdf3ccb024bfcdf7ffcdd5187&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/646503064.jpg?k=b0880e7e501702e293138890f093e2806f8aa7cbc5ab635c3d5810f8eb94ed87&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/646500611.jpg?k=e456568603d2852206a5f3d80591bca3e2aa00f0e40fc29123c83e73376cd960&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/646498859.jpg?k=1d8e7aaf6f8143d09c8ea58e14eff32985e9a04d65b15ae70ae4066d9d6df5a8&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/646498247.jpg?k=0ef849365ac9a2bab5fb34bbc141bf231f82c8fb0668fb935595a1f6be58bcf3&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/646499208.jpg?k=ead8d0dad4896c3d2541404c3ad0b52d4f085d4229f87f0a8bd5f0cbd8e7cc2b&o="
  ],
  "tulip": [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/384206623.jpg?k=ade96a7480a057d50a5bd8b1b35d0ddbc30547d866b62e95c428d8b90b56ac34&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/913425101.jpg?k=ac396771d5cfd5fbefe1fa088e12e803ad1115f09b0defbcefb46e48171ea4db&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/914835527.jpg?k=11c1f69db2467bc76224d4afb78995822692e0ac7df1e2cd72e7f65bdbbc8644&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/96845045.jpg?k=9181810d6c23de41e9dfa299a6d0dfe0a24587783967e4f0a984186e944c2047&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/96842209.jpg?k=43517bbedbbd6c261f03e913ff07a84d4404beb30523fe9843a3ee342556000e&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/914835172.jpg?k=6b440fe957b077239cdfcefeb6e4bfed865de05633f32bff0a0d9da41e59db45&o="
  ],
  "risata": [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485914043.jpg?k=4da05756195c0f2685264a1183de13a1d2c33310d01f8d9c7c83112fb3e33d8f&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/675786902.jpg?k=9a69fbb18d6dfed36bd5a01e6590ac559a1f4dc245512501136ff6d2871735dd&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/675800475.jpg?k=64f92f0246b6da2842f201008aafb0232153f0b290558496480e2f1abd1eb2b2&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/675796480.jpg?k=88f0bc77d03cf31baabf4e40dfa61f817eb9ff8df14345e858a881b7431562df&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/675792939.jpg?k=df6dd08404502515c6f752600bb861034180d7094ffbd1ef976656241ebcfa92&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/675793397.jpg?k=acd4d607af8d38f5554bc4afd5d385de6ce45254551de1d92fcfa47a58e3e27c&o="
  ]
};

export const KEY = 'kuta-hotel-only';
export const PATHS = {
  detail: `/asia/hotel-packages/${KEY}`,
  thankYou: (id) => `/asia/hotel-packages/${KEY}/thank-you/${id}`,
};

export const kutaHotelOnlyProduct = {
  slug: KEY, href: PATHS.detail, tag: 'Hotel only', styles: ['Beach'], places: ['Kuta'],
  title: 'Kuta hotel only package: 3 to 6 nights in a 4 star hotel with breakfast',
  days: 4, daysLabel: '3 to 6 nights', cities: 1, price: 4300, noSale: true,
  images: [PHOTOS.kcp[0], PHOTOS.risata[0], PHOTOS.tulip[0], PHOTOS.bliss[0]],
  alt: 'Pool at Kuta Central Park Hotel, Bali',
};

export const detail = {
  key: KEY,
  title: 'Kuta hotel only package',
  tagline: '3 to 6 nights in a 4 star Kuta hotel with breakfast, the rest of Bali at your own pace',
  daysLabel: '3 to 6 nights',
  destination: 'Bali', destinationHref: '/asia/bali',
  chips: ['4 star hotels', 'Breakfast included'], chipIcon: 'users',
  hero: { main: PHOTOS.kcp[0], mainSm: PHOTOS.kcp[0], alt: 'Pool at Kuta Central Park Hotel, Bali' },
  gallery: [PHOTOS.kcp[0], PHOTOS.kcp[1], PHOTOS.risata[0], PHOTOS.tulip[0], PHOTOS.bliss[0], PHOTOS.kcp[2], PHOTOS.risata[1], PHOTOS.tulip[1], PHOTOS.bliss[1]],
  intro: 'This package is only your hotel in Kuta. Choose 3, 4, 5 or 6 nights, pick your dates and tell us which 4 star hotel you prefer. Breakfast is included every morning and every day is free for you to plan as you like.',
  crumbs: [['Home', '/'], ['Asia', '/asia'], ['Bali', '/asia/bali'], ['Kuta hotel only package']],
  expert: { prefix: 'Picked by', name: 'Ananya', role: 'Bali expert at Hi Tours', image: '/team/asia-2.webp', quote: 'If you like to plan your own days, book only the hotel. These four are the Kuta hotels our travellers rate best for the price.' },
  services: [
    ['3 to 6 nights', 'Travel plan', '3, 4, 5 or 6 nights'],
    ['4 star hotel', 'Accommodation', '4 star hotel in Kuta'],
    ['Breakfast', 'Activities', 'Breakfast every morning'],
    ['24/7 support', '24/7 Support', '24/7 on-ground support'],
  ],
  trust: ['Your preferred hotel or a similar 4 star hotel', 'Hi Tours Cares: 24/7 on-ground support', 'Secure payments by Razorpay'],
};

export const similarNote = 'We try to confirm your preferred hotel first. If it is full on your dates, we book one of the other hotels on this page or a similar 4 star hotel in Kuta, and we tell you before we confirm.';

export const hotels = [
  { id: 'kuta-central-park', name: 'Kuta Central Park Hotel', room: 'Superior Room', score: '8.2', label: 'Very good', area: 'Jl. Patih Jelantik, Kuta',
    points: ['2 km from Kuta Beach, 5 km from the airport', '3 swimming pools, spa and fitness centre', '2 restaurants and a bar'], images: PHOTOS.kcp },
  { id: 'bliss-surfer', name: 'Bliss Surfer Hotel', room: 'Deluxe Room', score: '8.4', label: 'Very good', area: 'Jl. Sriwijaya, Legian',
    points: ['15 minute walk to Legian Beach', '2 swimming pools and a spa', 'Colourful rooms with a private balcony'], images: PHOTOS.bliss },
  { id: 'golden-tulip-jineng', name: 'Golden Tulip Jineng Resort', room: 'Deluxe City View', score: '8.1', label: 'Very good', area: 'Sunset Road, Kuta',
    points: ['400 m from Mal Bali Galeria', 'Garden pool, spa and fitness centre', 'Children’s playground'], images: PHOTOS.tulip },
  { id: 'risata-resort', name: 'Risata Bali Resort & Spa', room: 'Superior Room', score: '8.4', label: 'Very good', area: 'South Kuta Beach',
    points: ['5 minute walk to Segara Beach', 'Large pool with a pool bar, spa and kids’ pool', 'Free shuttle to central Kuta'], images: PHOTOS.risata },
];

export const included = [
  ['3, 4, 5 or 6 nights in a 4 star hotel in Kuta', 'Accommodation'],
  ['Your preferred hotel or a similar 4 star hotel', 'Accommodation'],
  ['Breakfast every morning', 'Activities'],
  ['Room for 1 or 2 adults, extra bed for a third adult', 'Accommodation'],
  ['Hotel taxes and service charges', 'Travel plan'],
  ['24/7 support from Hi Tours Cares', '24/7 Support'],
];
export const notIncluded = [
  'Flights to and from Bali',
  'Airport transfers',
  'Sightseeing, tours and activities',
  'Lunch and dinner',
  'Bali visa on arrival and tourist levy',
  'Travel insurance and personal expenses',
];

export const whyGroup = {
  h2: 'Why book only the hotel?',
  sub: 'Your stay is sorted, your days are yours',
  items: [
    { icon: 'sparkles', h: 'Hotels our travellers rate', t: 'Four 4 star Kuta hotels, each rated 8 or higher by guests.' },
    { icon: 'users', h: 'Your days, your way', t: 'No fixed tours. Beach, cafes, Uluwatu or Ubud, you decide each morning.' },
    { icon: 'wallet', h: 'Pay ₹10,000 now', t: 'Book 30 days or more ahead and pay the rest 30 days before check-in.' },
    { icon: 'leader', h: 'Help when you need it', t: 'Want a driver or a day tour later? Your Bali expert adds it for you.' },
  ],
};

export const faq = { h2: 'Kuta hotel only package FAQs', items: [
  { q: 'What does “or similar” mean?', a: [similarNote] },
  { q: 'How is the price worked out?', a: ['The price is per room for your exact dates and number of nights. It includes breakfast and hotel taxes. You see the final price before you pay.'] },
  { q: 'Can I pay a deposit?', a: ['Yes. If your check-in is 30 days or more away, you can pay ₹10,000 now and the rest 30 days before check-in. Razorpay sends you the payment link by SMS and email. For closer dates the full amount is paid at booking.'] },
  { q: 'How many people can stay in one room?', a: ['Each room sleeps 1 or 2 adults. A third adult can be added on an extra bed. Travelling with children? Speak to our Bali expert and we will price it for you.'] },
  { q: 'Are flights and transfers included?', a: ['No. This package is only the hotel with breakfast. We can add airport transfers, a private driver or day tours if you ask.'] },
  { q: 'Which dates can I book?', a: ['Stays of 3 to 6 nights with check-out up to 1 April 2027. A few hotels have no rate over Christmas and New Year, so those dates show fewer hotels.'] },
] };

export const steps = {
  h2: 'How booking works',
  items: [
    { h: 'Choose nights and dates', t: 'Pick 3, 4, 5 or 6 nights, then your check-in date. The price updates for your dates.' },
    { h: 'Pick your preferred hotel', t: 'Choose one of the four hotels. We book it, or a similar 4 star hotel if it is full.' },
    { h: 'Pay and get your voucher', t: 'Pay ₹10,000 or the full amount by Razorpay. Your hotel voucher follows by email.' },
  ],
};

export const nextSteps = [
  { h: 'Booking receipt by email and WhatsApp', t: 'Your payment receipt and stay details are on their way.' },
  { h: 'We confirm your hotel within one working day', t: 'Your preferred hotel first. If it is full, we offer a similar 4 star hotel in Kuta before we confirm.' },
  { h: 'Hotel voucher before you fly', t: 'You get the voucher to show at check-in once the stay is paid in full.' },
];
