import { SALE } from './sale';

// Homepage content (frontend-only mock). Copy in English, assets from the original Hi Tours CDNs.
const cf = (path, q = 'w=800&q=60&fm=webp') => `https://images.ctfassets.net/bth3mlrehms2/${path}?${q}`;

export const nav = {
  banner: 'Worry-free planning: stable flight prices for over a year, plus flexible rebooking and cancellation options.',
  links: [
    { label: 'Destinations', menu: true },
    { label: 'Trip types', menu: true },
    { label: 'Activities', menu: true },
    { label: 'Deals' },
    { label: 'About us' }
  ],
  phone: 'Speak to a holiday expert',
  login: 'Login'
};

export const expertAdvice = {
  title: 'Speak to a holiday expert',
  openLabel: 'Available now!',
  closedLabel: 'Outside opening hours.',
  existing: 'For questions about an existing trip',
  portal: 'Service portal',
  planning: 'For planning your next trip',
  phone: '+91 89206 06060',
  phoneHref: 'tel:+918920606060',
  whatsappHref: `https://wa.me/918920606060?text=${encodeURIComponent('Hi, I’d like to plan my dream trip. Can you help me?')}`,
  tel: 'Tel: +(124) 46 00 000',
  telHref: 'tel:+1244600000',
  callHours: ['Mon – Fri (excl. holidays): 10 am – 7 pm', 'All times IST'],
  hours: ['We are open on WhatsApp chat 24x7, all days, to submit an enquiry'],
  schedule: { 1: [10, 20], 2: [10, 20], 3: [10, 20], 4: [10, 20], 5: [10, 20], 6: [10, 18] },
  cta: 'Plan for free'
};

export const hero = {
  title: ['Exquisitely crafted luxury', 'honeymoons & holidays'],
  searchPlaceholder: 'Where would you like to go?',
  searchPlaceholderMobile: 'Where to?',
  searchPlaceholderStyle: "What's your travel style?",
  searchPlaceholderStyleMobile: 'Travel style?',
  searchEmptyTitle: 'Destination not available',
  searchEmptyText: 'Try searching for a different destination or travel style for trip ideas.',
  searchStyleTag: 'Travel style',
  cta: 'Plan for free',
  subtitle:
    'Hi Tours creates unforgettable travel experiences and supports you with real expertise and individual service – from inspiration to return.',
  collage: {
    xs: 'https://tourlane-dm-images.imgix.net/hp/de/header-xs.png?w=640&auto=format&fit=max&bg=FBF9F1',
    sm: 'https://tourlane-dm-images.imgix.net/hp/de/header-sm.png?w=768&auto=format&fit=max&bg=FBF9F1',
    md: 'https://tourlane-dm-images.imgix.net/hp/de/header-md.png?w=1024&auto=format&fit=max&bg=FBF9F1',
    lg: 'https://tourlane-dm-images.imgix.net/hp/de/header-lg.png?w=1280&auto=format&fit=max&bg=FBF9F1',
    xl: 'https://tourlane-dm-images.imgix.net/hp/de/header-xl.png?w=1920&auto=format&fit=max&bg=FBF9F1'
  }
};

export const trust = { label: 'Excellent', score: '4.5', outOf: 'out of 5', count: '5,748', reviews: 'reviews', rating: 4.5 };

export const ratings = {
  google: { score: 4.7, count: '3,200+', label: 'Google reviews' },
  tripadvisor: { score: 4.9, count: '2,100+', label: 'Tripadvisor reviews' }
};

export const features = {
  heading: 'Your trip, planned by professionals',
  // `short` is what phones show: the same promise in half the words.
  items: [
    { icon: '/pros/experts.png', title: 'Real holiday experts', short: 'Specialists who have been where you are going.', text: 'Your itinerary is built by a specialist who has travelled the country, backed by thirty years of local contacts.' },
    { icon: '/pros/organised.png', title: 'Every detail handled', short: 'Hotels, transfers and guides, all arranged.', text: 'Hotels, transfers, guides and tickets are booked and reconfirmed for you, from the first call to the flight home.' },
    { icon: '/pros/easy.png', title: 'Best price, best value', short: 'Direct supply, so you get price and quality.', text: 'We buy direct from hotels and local operators in every destination, so you get not only the best price, but the best quality.' }
  ]
};

export const happyCustomers = {
  text: '1 Million+ Happy Travellers',
  avatars: ['01', '02', '04', '06', '07', '09', '11', '12', '13', '14'].map((n) => `/avatars/in-${n}.webp`)
};

export const ambassadors = {
  heading: 'We are social',
  hint: 'Daily stories, reels and offers – swipe to explore',
  socials: [
    { key: 'instagram', label: 'Instagram', handle: '@hitours', href: 'https://www.instagram.com/hitours' },
    { key: 'facebook', label: 'Facebook', handle: '@hitoursin', href: 'https://www.facebook.com/HiToursIN/' },
    { key: 'youtube', label: 'YouTube', handle: '@hitoursgroup', href: 'https://youtube.com/@hitoursgroup?si=EfxsTKBbup36lxiZ' },
    { key: 'linkedin', label: 'LinkedIn', handle: 'Hi Tours Group', href: 'https://www.linkedin.com/company/hi-tours-group/' }
  ],
  images: ['/home/on-the-road.webp']
};

// Promotions & Hot Deals banners (editable): swap image, copy, offer and CTA here.
export const promoBanners = [
  {
    id: 'promotions',
    tag: SALE.short,
    festive: true,
    headline: SALE.tagline,
    text: `${SALE.name}. Every tailor-made Asia and Europe holiday on Hi Tours is discounted this festive season, planned 1-to-1 with a specialist.`,
    offer: `${SALE.endsLabel} \u00b7 All destinations`,
    cta: 'Shop the sale',
    href: '/tours',
    image: '/home/promo-diwali.webp',
    imageAlt: 'Diya lamps and marigolds glowing outside a lit heritage archway at Diwali',
    showDestinations: true
  },
  {
    id: 'best-of-europe',
    tag: 'Best of Europe',
    headline: 'Rome, the Alps and the Greek islands',
    text: 'Our full Europe collection in one place: multi-country classics through Italy and Switzerland, Paris honeymoons and the Athens to Santorini island run.',
    offer: 'Every Europe holiday \u00b7 10% off',
    cta: 'See all Europe deals',
    href: '/europe/holidays',
    image: 'https://media1.thrillophilia.com/filestore/krzy8lbrlz0fh9peaed4r8csar1f_shutterstock_1439825942.jpg?w=1400&dpr=1',
    imageAlt: 'The Colosseum in Rome at golden hour'
  }
];

export const comparison = {
  heading: 'Why Hi Tours is worth it',
  colAlone: 'On your own',
  colHiTours: 'With Hi Tours',
  rows: [
    { text: 'Specialists in more than 50 destinations across Asia, Europe and the Middle East', alone: true },
    { text: 'Save up to 60% by bundling hotels, flights, transfers and activities', alone: false },
    { text: 'Experts in multi-day, multi-city planning: every day of the route thought through', alone: false },
    { text: 'Customised to your taste, pace and budget, not a fixed group itinerary', alone: false },
    { text: 'One personal holiday expert from first call to final booking', alone: false },
    { text: '24/7 on-ground support and customer care while you travel', alone: false },
    { text: 'Flexible cancellation and changes for the whole trip', alone: false },
    { text: '30 years of trust and over 1 million happy travellers', alone: false }
  ]
};

export const moments = {
  heading: 'Unforgettable Hi Tours moments',
  subheading: 'More than 150,000 delighted travellers',
  cta: 'Plan your trip',
  avatars: [
    '/moments/europe_couple.webp',
    '/moments/alps.webp',
    '/moments/family_trip.webp',
    '/moments/eiffel_family.webp'
  ],
  items: [
    { title: 'Sri Lanka gave our family the perfect escape into nature', name: 'The Sharma Family', image: '/moments/forest_family.webp' },
    { title: 'Spotting a wild koala made my solo Australia trip even more special', name: 'Kavya', image: '/moments/kangaroo.webp' },
    { title: 'That Santorini sunset was the perfect ending to our Greece getaway', name: 'Simran & Aditya', image: '/moments/santorini.webp' },
    { title: 'Getting close to the giant tortoises made Seychelles truly special.', name: 'Ishita', image: '/moments/tortoise.webp' },
    { title: 'Seeing the Northern Lights in Tromsø felt like a dream come true', name: 'Meera & Kunal', image: '/moments/northern_lights.webp' },
    { title: "Exploring New Zealand's mountains together was a family memory to cherish", name: 'The Shah Family', image: '/moments/family_trip.webp' },
    { title: 'The Swiss Alps in summer were the perfect mix of adventure and calm', name: 'Ananya & Rohan', image: '/moments/alps.webp' },
    { title: "Paris with our family gave us memories we'll always cherish", name: 'The Mehra Family', image: '/moments/eiffel_family.webp' },
    { title: 'Meeting pandas up close was our favourite memory from Chengdu', name: 'Ishita', image: '/moments/panda.webp' },
    { title: 'Our Maasai Mara safari brought us closer to the wild than ever', name: 'Rahul & Priya', image: '/moments/safari.webp' }
  ]
};

export const steps = {
  heading: 'Step by step to your trip',
  items: [
    { n: 1, title: 'Choose your destination', short: 'Tell us where and when, then speak to your holiday expert on a call.', text: 'Tell us where you want to go and roughly when. We call you back and you speak to the holiday expert who knows that country, not a call centre.' },
    { n: 2, title: 'We customise your quote', short: 'Your costed, tailor-made plan lands within a few hours.', text: 'Your expert shapes the route around your dates, pace and budget, then sends a costed plan back within a few hours. Change anything, as often as you like.' },
    { n: 3, title: 'Book the best version of it', short: 'Local supply and knowledge, so you book the best value trip.', text: 'Thirty years of local knowledge and direct supply in every destination mean you book the sharpest price with the right hotels and licensed guides, and 24/7 support while you travel.' }
  ]
};

const trip = (o) => ({
  ...o,
  images: o.images.map(([path, tag]) => ({ src: /^(https?:\/\/|\/)/.test(path) ? path : cf(path, 'w=700&q=60&fm=webp'), tag }))
});

export const showcase = {
  heading: 'This could be your next dream trip',
  createdFor: 'Crafted specially for',
  trips: [
    trip({
      tab: 'Europe', title: 'Europe honeymoon', cta: 'Plan your Europe trip now',
      duration: '11 days', stops: '5 stops', transport: 'High speed rail', activities: 12, hotels: 5, transfers: 9, meals: 10, flights: 4,
      tags: [['bed', '4-star hotels'], ['boat', 'Lake Como cruise'], ['plane', 'Scenic trains'], ['food', 'Italian trattorias'], ['bike', 'Paris by bike']],
      customer: "Rohan & Meera's Europe honeymoon", quote: 'Paris, the Jungfrau, Zermatt, Lake Como and Venice in eleven days and we never once worried about a connection.', avatar: '/moments/europe_couple.webp',
      images: [
        ['/europe/hero-paris.webp', 'Paris'],
        ['/europe/interlaken.webp', 'Interlaken'],
        ['/europe/zermatt.webp', 'Zermatt'],
        ['/europe/como.webp', 'LakeComo'],
        ['/europe/venice.webp', 'Venice']
      ]
    }),
    trip({
      tab: 'Vietnam', title: 'Vietnam honeymoon', cta: 'Plan your Vietnam trip now',
      duration: '15 days', stops: '8 stops', transport: 'Private driver', activities: 11, hotels: 7, transfers: 6, meals: 14, flights: 2,
      tags: [['bed', 'Boutique hotels'], ['boat', 'Halong Bay cruise'], ['bike', 'Motorbike'], ['food', 'Street food'], ['plane', 'Direct flights']],
      customer: "Prajwal & Sneha's babymoon", quote: 'From a Halong Bay cruise to lantern-lit Hoi An nights, every single day felt handcrafted just for us.', avatar: '/moments/europe_couple.webp',
      images: [
        ['3Z7A5HXNMctqsB6GE2jphI/4cef5ccca7d896a0b4f88281499fec30/Halong_Bucht_Vietnam.jpg', 'HalongBay'],
        ['1oona4EHxFNonfYfpgKQRu/fd45a84873954f50c0192a904b5c13db/Hoi_An_Vietnam_2.jpg', 'HoiAn'],
        ['5ujKcctP43Y7HHOFAKvWIU/4e29a70d5c0657d946762c42bd2f1eb5/Sapa_Vietname.jpg', 'Sapa'],
        ['3qsQDApUiMDejmmNxXcr0g/3bd51ca9fa429966c8ba194946b30cb1/Pagode_Hanoi.png', 'Hanoi'],
        ['1Tm427NrLOOFiGLG2qNwBX/b525194ba3f361bacdd2938831843a3a/Phu_Quoc_Vietnam.jpg', 'PhuQuoc']
      ]
    }),
    trip({
      tab: 'Sri Lanka', title: 'Sri Lanka family tour', cta: 'Plan your Sri Lanka trip now',
      duration: '12 days', stops: '6 stops', transport: 'Private driver', activities: 9, hotels: 6, transfers: 5, meals: 11, flights: 2,
      tags: [['bed', 'Heritage bungalows'], ['safari', 'Leopard safari'], ['leaf', 'Tea country'], ['food', 'Rice & curry'], ['plane', 'Direct flights']],
      customer: "the Sharma's family holiday", quote: 'Climbing Sigiriya rock at dawn and tea-tasting in the misty hills – the kids still talk about all of it.', avatar: '/moments/family_trip.webp',
      images: [
        ['4ty416HtZ5fnIJe5U94pUn/04e383acf72b20230360d6cdeb960993/Sigiriya_Sri_Lanka.jpg', 'Sigiriya'],
        ['52ZxIJbx0zC3QmeXtTjVpo/b109083307d8ee990f394165679c4ccc/Sri_Lanka__Ella__Neun-Bogen-Br%C3%BCcke.jpg', 'EllaBridge'],
        ['1tXogJFN76YCthWrqs1rbz/1efdd4d03c76d7608cf6e4f3ba60ca81/Kandy_Sri_Lanka_-_Tempel_der_Zahn.jpg', 'Kandy'],
        ['4rykn5ApXvQcEXp8oC8cZo/91be5b5717fe6e55ea0dd489b344279d/SriLanka_NuwaraEliya.jpg', 'NuwaraEliya'],
        ['2Qmktfpd63iN6dIbGQVV5a/a739f37a3d1bd5d3613cbe380b96394d/Hikkaduwa_Sri_Lanka.jpg', 'Hikkaduwa']
      ]
    }),
    trip({
      tab: 'Thailand', title: 'Thailand island escape', cta: 'Plan your Thailand trip now',
      duration: '14 days', stops: '8 stops', transport: 'Transfers', activities: 10, hotels: 7, transfers: 6, meals: 13, flights: 3,
      tags: [['bed', 'Glamping in the jungle'], ['island', 'Island hopping'], ['bike', 'Motorbike'], ['food', 'Local specialities'], ['plane', 'Stopover in Dubai']],
      customer: "Neha & Aryan's island escape", quote: 'Glamping in the jungle one night, island hopping the next – Hi Tours matched our pace perfectly.', avatar: '/moments/alps.webp',
      images: [
        ['A2kAwcfVxbWxQRQIqLVcM/5e25b1e33b9bc306e834fcfe2f8a99b6/THA_-_-KhaoSok.png', 'KhaoSok'],
        ['s0tM0ptUexcdfhU4HTwgh/64c82b916559b0a460fa3fca5ebad20a/THA_-_-Phuket.png', 'Phuket'],
        ['7HtZOrGdjOUTb867vNotZS/8d943ee4512ca1f877e214b533104956/THA_-_-MingMongkolBuddha.png', 'MingMongkolBuddha'],
        ['5SBGUEdaCyRBPiktrtmzaX/09c6c1fc53fb1daffcd491e0182493eb/THA_-_-MayaBay.png', 'MayaBay'],
        ['SM5V0pOzqkcZYtxbL69wU/62ac1dea663f5d24355ac47b579002c5/THA_-_-FreedomBeach.png', 'FreedomBeach']
      ]
    }),
    trip({
      tab: 'Singapore', title: 'Singapore city break', cta: 'Plan your Singapore trip now',
      duration: '6 days', stops: '4 stops', transport: 'Metro & transfers', activities: 9, hotels: 4, transfers: 4, meals: 5, flights: 2,
      tags: [['bed', 'Rooftop-pool hotels'], ['garden', 'Gardens by the Bay'], ['food', 'Hawker feasts'], ['family', 'Family-friendly'], ['plane', 'Direct flights']],
      customer: "Aditi & Rohan's city break", quote: 'Gardens by the Bay after dark and hawker feasts by day – Singapore packed so much magic into a few days.', avatar: '/moments/eiffel_family.webp',
      images: [
        ['4B5tE96BHxRVFYUVJQibEE/efeae2ee825eda4d08a95e0717d916fd/Skyline__Singapur.jpg', 'MarinaBay'],
        ['https://images.unsplash.com/photo-1605425183435-25b7e99104a4?crop=entropy&cs=srgb&fm=jpg&q=80&w=900', 'GardensByTheBay'],
        ['1S1CFngY8la37r0DqH3xb1/8052b7405ea5431391f2be4fba023227/Jalan_Besar_Singapore_2.jpg', 'Chinatown'],
        ['https://images.unsplash.com/photo-1499359875449-10bbeb21501e?crop=entropy&cs=srgb&fm=jpg&q=80&w=900', 'SupertreeGrove'],
        ['https://images.unsplash.com/photo-1508597370841-836e72ef6f54?crop=entropy&cs=srgb&fm=jpg&q=80&w=900', 'BayFront']
      ]
    }),
    trip({
      tab: 'Malaysia', title: 'Malaysia discovery', cta: 'Plan your Malaysia trip now',
      duration: '13 days', stops: '7 stops', transport: 'Rental car', activities: 10, hotels: 7, transfers: 6, meals: 12, flights: 3,
      tags: [['bed', 'Rainforest lodges'], ['tower', 'Petronas Towers'], ['safari', 'Orangutan sanctuary'], ['food', 'Street markets'], ['plane', 'Direct flights']],
      customer: "Imran & Zara's honeymoon", quote: 'From the Petronas Towers to orangutans in Borneo, Malaysia surprised us with something new every single day.', avatar: '/moments/europe_couple.webp',
      images: [
        ['7v9STD4EzC9uO1vB6vl2SC/2d6be37e8ab85ac375ae2d2ac46ec9b0/Malaysia__Kuala_Lumpur__Petronas_Towers.jpg', 'PetronasTowers'],
        ['X7b0PdKpWDMzl19jytcJ6/d0aad3d91b3ffaaf161f205c7660fe5f/Malaysia_Ipoh_Tempel.jpg', 'Ipoh'],
        ['51tkEfILsnNr3oDIU4ElpU/bc3ac3dac83ed5c1f18aa7024e8f1c32/Malaysia__George_Town.jpg', 'GeorgeTown'],
        ['6tQ0fuewJsT1XGyPtk1feM/46e2bf106f4544461abd40528a72610e/Sonnenaufgang_Wolken_Cameron-Highlands_Malaysia.png', 'CameronHighlands'],
        ['75OivhbWUIcq5PlUmpmA1j/30161b201b3fd087f637ed6b5cfb5ecd/Malaysia__Sabah__Sepilok-Orang-Utan-Rehabilitationszentrum.jpg', 'Sabah']
      ]
    })
  ]
};

export const adventure = {
  heading: 'Start your next adventure',
  images: {
    left: '/home/adventure-left.webp',
    right: '/home/adventure-right.webp'
  }
};

export const experts = {
  heading: 'Meet our travel experts',
  cta: 'Discover the Hi Tours experts',
  items: [
    { name: 'Gurpreet', role: 'Travel expert for South Africa', experience: '6 years of experience', specialties: ['Honeymoons', 'Safari'], photo: '/experts/gurpreet.webp' },
    { name: 'Aditya', role: 'Travel expert for Sri Lanka', experience: '3 years of experience', specialties: ['Family-friendly travel', 'Road trips'], photo: '/experts/devendra.webp' },
    { name: 'Rahul', role: 'Travel expert for Switzerland', experience: '5 years of experience', specialties: ['Road trips', 'Culinary recommendations'], photo: '/experts/aditya.webp' },
    { name: 'Sharon', role: 'Travel expert for Thailand', experience: '3 years of experience', specialties: ['Honeymoons', 'Active travel'], photo: '/experts/sharon.webp' },
    { name: 'Karan Malhotra', role: 'Travel expert for Egypt', experience: '15 years of experience', specialties: ['Active travel', 'Culture tips'], photo: '/experts/abhay.webp' },
    { name: 'Raghav', role: 'Travel expert for Italy', experience: '6 years of experience', specialties: ['Culture tips', 'Culinary recommendations'], photo: '/experts/raghav.webp' },
    { name: 'Riya', role: 'Travel expert for Vietnam', experience: '1 year of experience', specialties: ['Road trips', 'Active travel'], photo: '/experts/riya.webp' }
  ]
};

export const testimonials = {
  heading: 'What our customers say',
  cta: 'Plan for free now',
  items: [
    { trip: 'Vietnam trip', name: 'Rahul Mehta', stars: 5, date: '15.05.2026', text: 'From Hanoi’s old quarter to the Halong Bay cruise, every detail was perfectly planned. The private guides were wonderful and the hotels were superb. Truly a trip to remember!', image: cf('3Z7A5HXNMctqsB6GE2jphI/4cef5ccca7d896a0b4f88281499fec30/Halong_Bucht_Vietnam.jpg', 'w=720&q=60&fm=webp') },
    { trip: 'Sri Lanka trip', name: 'Priya Nair', stars: 5, date: '02.05.2026', text: 'Very professional planning and competent staff. The tea country, the beaches and the wildlife safari were all beautifully organised. A dreamlike family holiday!', image: cf('4rykn5ApXvQcEXp8oC8cZo/91be5b5717fe6e55ea0dd489b344279d/SriLanka_NuwaraEliya.jpg', 'w=720&q=60&fm=webp') },
    { trip: 'Thailand trip', name: 'Arjun Sharma', stars: 5, date: '20.04.2026', text: 'Almost perfectly organised round trip through Bangkok and the southern islands. Excellent choice of resorts and the excursions were a highlight. Highly recommend Hi Tours!', image: cf('27MnAH4RS1zTSFygAmnq5i/97ec55278a94f2ab56c26847396201ba/Thailand_Natur.jpg', 'w=720&q=60&fm=webp') },
    { trip: 'Singapore trip', name: 'Sneha Iyer', stars: 5, date: '12.04.2026', text: 'A seamless city break! Gardens by the Bay, the night safari and Sentosa were all perfectly arranged. Great hotels and brilliant support throughout our stay.', image: cf('4B5tE96BHxRVFYUVJQibEE/efeae2ee825eda4d08a95e0717d916fd/Skyline__Singapur.jpg', 'w=720&q=60&fm=webp') },
    { trip: 'Malaysia trip', name: 'Vikram Reddy', stars: 5, date: '03.04.2026', text: 'Kuala Lumpur, the tea plantations of Cameron Highlands and Langkawi beaches – a wonderful mix. Everything from transfers to activities was flawlessly handled.', image: cf('X7b0PdKpWDMzl19jytcJ6/d0aad3d91b3ffaaf161f205c7660fe5f/Malaysia_Ipoh_Tempel.jpg', 'w=720&q=60&fm=webp') },
    { trip: 'Egypt trip', name: 'Ananya Gupta', stars: 5, date: '25.03.2026', text: 'The pyramids, the Nile cruise and the temples of Luxor were breathtaking. Our Egyptologist guide was fantastic and the whole trip felt safe and effortless.', image: cf('qsp90U72Z4CxCVhVhtdGE/3b9cf2cac3e162fb25231d046cafd25e/Giza_Pyramid_Complex_-_Cairo__EgyptTCG.jpg', 'w=720&q=60&fm=webp') },
    { trip: 'Maldives trip', name: 'Karthik Menon', stars: 5, date: '18.03.2026', text: 'Our overwater villa, the seaplane transfer and the sandbank dinner made for the perfect honeymoon. Every single detail was taken care of. Thank you, Hi Tours!', image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?crop=entropy&cs=srgb&fm=jpg&q=85&w=720' },
    { trip: 'Bhutan trip', name: 'Pooja Desai', stars: 5, date: '08.03.2026', text: 'The hike to the Tiger’s Nest, the dzongs and the Dochula Pass were magical. Permits and everything else were handled for us – a peaceful, unforgettable journey.', image: 'https://images.unsplash.com/photo-1638246439638-b37095b34879?crop=entropy&cs=srgb&fm=jpg&q=85&w=720' },
    { trip: 'Kazakhstan trip', name: 'Rohan Kapoor', stars: 4, date: '28.02.2026', text: 'Detailed expert knowledge of Almaty and the mountains, as if based on personal experience. Great empathy and brilliant planning of our off-beat adventure.', image: 'https://images.unsplash.com/photo-1530480667809-b655d4dc3aaa?crop=entropy&cs=srgb&fm=jpg&q=85&w=720' }
  ]
};

export const destinationsHeading = 'Where to next?';
export const destinationsSubcopy = 'Asia, Europe and Middle East holiday specialists since 1995';

export const newsletter = {
  heading: 'Experience the best of travel',
  text: 'Tell us your dates, budget and travel style – our experts will shape a holiday that is entirely yours. Message us any time, no strings attached.',
  privacy: 'Privacy policy',
  whatsappLabel: 'Customise your holiday',
  whatsappNumber: '+91 89206 06060',
  whatsappText: 'Hi, I’d like to customise a holiday with Hi Tours. Can you help me plan it?',
  cta: 'Chat on WhatsApp',
  bullets: [
    { icon: 'idea', text: 'Inspiring travel ideas' },
    { icon: 'percent', text: 'Exclusive offers & benefits' },
    { icon: 'headset', text: 'Insider tips from experts' }
  ],
  image: '/home/newsletter-right.webp',
  imageLeft: '/home/newsletter-left.webp'
};

export const footer = {
  description: 'Hi Tours creates unforgettable travel experiences and supports you with real expertise and individual service – from inspiration to return.',
  columns: [
    { title: 'Hi Tours', links: ['About Us', 'Booking Policy', 'Careers', 'Our Office'] },
    { title: 'Destinations', links: ['Vietnam', 'Thailand', 'Bali', 'Singapore', 'Malaysia', 'Egypt', 'Japan', 'Bhutan', 'Kazakhstan', 'More destinations'] }
  ],
  care: { title: 'Hi Tours cares', lines: ['Book worry-free', 'Flexible rebooking and cancellation'], cta: 'Learn more' },
  country: 'India',
  legal: ['Privacy', 'Terms & Conditions', 'Speak to a holiday expert']
};
