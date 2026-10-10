// Seeded, month-rotating traveller reviews per destination. Names/dates/text change every month; dates always land in the recent past.
const TIER = {
  popular: { count: [1500, 2000], first: [2, 14] },
  mid: { count: [900, 1450], first: [7, 30] },
  low: { count: [500, 850], first: [14, 55] }
};

const DEST = {
  Thailand: ['popular', ['the Phi Phi island day', 'the floating market morning', 'the Phuket sunset', 'the Bangkok night market', 'the elephant sanctuary']],
  Vietnam: ['popular', ['the Ha Long Bay cruise', 'the lantern lit old town of Hoi An', 'street food in Hanoi', 'the Cu Chi tunnels', 'the Mekong Delta boat ride']],
  Singapore: ['popular', ['Gardens by the Bay after dark', 'the Night Safari', 'the Universal Studios day', 'the Marina Bay skyline', 'Jewel Changi']],
  Maldives: ['popular', ['the overwater villa', 'snorkelling with turtles', 'the sunset dolphin cruise', 'the private sandbank dinner']],
  Egypt: ['popular', ['the Nile cruise between Luxor and Aswan', 'the sunrise at the pyramids', 'Abu Simbel', 'the Red Sea snorkelling', 'the Valley of the Kings']],
  Bali: ['popular', ['the Ubud rice terrace walk', 'the Nusa Penida day trip', 'the Uluwatu sunset', 'the Gili Islands snorkelling']],
  'Sri Lanka': ['mid', ['the Kandy to Ella train', 'the Yala safari', 'Sigiriya rock', 'the Galle fort evenings', 'the Mirissa whale watching']],
  Malaysia: ['mid', ['the Petronas Towers night view', 'the Langkawi cable car', 'Penang street food', 'the Cameron Highlands tea estate visit']],
  Japan: ['mid', ['the bullet train', 'the dawn temple walk in Kyoto', 'the Tokyo food tour', 'Mount Fuji views from Hakone', 'the deer park in Nara']],
  Italy: ['mid', ['the Amalfi coast drive', 'the gondola in Venice', 'Tuscany wine tasting', 'the Colosseum skip the line tour', 'the Cinque Terre hike']],
  Greece: ['mid', ['the Santorini caldera sunset', 'the Mykonos beach day', 'the Acropolis tour', 'the catamaran cruise']],
  Spain: ['mid', ['the Sagrada Familia', 'the Alhambra in Granada', 'tapas in Seville', 'the Ibiza sunset']],
  England: ['mid', ['the Cotswolds village drive', 'the London theatre night', 'Stonehenge and Bath', 'the Lake District cruise']],
  Morocco: ['mid', ['the Sahara desert camp', 'the Marrakech souk walk', 'the blue town of Chefchaouen', 'the riad stay in Fes']],
  Iceland: ['mid', ['the Northern Lights hunt', 'the Golden Circle', 'the Blue Lagoon', 'the glacier lagoon at Jokulsarlon']],
  Norway: ['mid', ['the fjord cruise', 'the Flam railway', 'the Northern Lights in Tromso', 'the Bergen fish market']],
  Finland: ['mid', ['the glass igloo night', 'the husky safari', 'meeting Santa in Rovaniemi', 'the Northern Lights from the cabin']],
  Portugal: ['mid', ['the Lisbon tram ride', 'the Douro valley cruise', 'the Sintra palace day', 'the Algarve cliff walk']],
  Croatia: ['mid', ['the Dubrovnik city walls', 'the Plitvice lakes walk', 'the Hvar boat day', 'Split old town evenings']],
  Ireland: ['mid', ['the Cliffs of Moher', 'the Ring of Kerry drive', 'the Dublin pub music night', 'the Giant\u2019s Causeway']],
  Sweden: ['low', ['the Stockholm archipelago cruise', 'the Icehotel', 'the Northern Lights in Abisko', 'the Gamla Stan walk']],
  Scotland: ['low', ['the Isle of Skye', 'Edinburgh castle', 'the Highlands drive', 'Loch Ness']],
  China: ['low', ['the Great Wall at Mutianyu', 'the Terracotta Army', 'the Li River cruise', 'the Shanghai Bund at night']],
  Philippines: ['low', ['the El Nido island hopping', 'the Chocolate Hills', 'the Palawan lagoon tour', 'the Cebu whale shark swim']],
  Cambodia: ['low', ['Angkor Wat at sunrise', 'the Tonle Sap floating village', 'the Phnom Penh royal palace', 'the Koh Rong beach day']],
  Laos: ['low', ['the Kuang Si waterfalls', 'the alms ceremony in Luang Prabang', 'the Mekong slow boat', 'the Vang Vieng balloon ride']],
  Bhutan: ['low', ['the Tiger\u2019s Nest hike', 'the Punakha Dzong', 'the view from Dochula Pass', 'the Paro farmhouse dinner']],
  Kazakhstan: ['low', ['the Charyn Canyon', 'the Kolsai lakes trek', 'Almaty cable car', 'the Big Almaty Lake']],
  Europe: ['mid', ['the Swiss train journey', 'Paris by night', 'the Amsterdam canal cruise', 'the Italian lakes day']]
};
const FALLBACK = ['the hotels', 'the local guide', 'the sightseeing days', 'the food'];

const EXPERTS = ['Riya', 'Aditya', 'Sharon', 'Gurpreet', 'Devendra', 'Abhay', 'Raghav'];

const NAMES = {
  honeymoon: ['Aditi and Rohan', 'Sneha and Karan', 'Priya and Arjun', 'Ishita and Varun', 'Neha and Siddharth', 'Riya and Aman', 'Pooja and Nikhil', 'Ananya and Rahul', 'Shreya and Kunal', 'Tanvi and Dev', 'Kritika and Harsh', 'Mitali and Sahil'],
  family: ['The Sharma family', 'The Iyer family', 'The Mehta family', 'The Reddy family', 'The Kapoor family', 'The Nair family', 'The Bhatt family', 'The Chopra family', 'The Desai family', 'The Joshi family', 'The Agarwal family', 'The Menon family'],
  solo: ['Meghna', 'Kavya', 'Aarav', 'Nandini', 'Rohit', 'Divya', 'Vikram', 'Shruti', 'Aditya', 'Pallavi', 'Nikita', 'Sameer'],
  bachelorette: ['Simran and the girls', 'Nisha and her bridesmaids', 'Tara\u2019s bachelorette crew', 'Ritika and friends', 'Mehak and the squad', 'Anjali and the bride tribe']
};

const T = {
  honeymoon: {
    titles: ['The honeymoon we dreamed of', 'Perfect start to married life', 'Romantic from day one', 'Every detail felt personal', 'Could not have asked for more'],
    text: [
      'We wanted a honeymoon that felt effortless and that is exactly what Hi Tours gave us. {H1} was the highlight, and {E} had quietly arranged a surprise for us at the hotel.',
      'From the airport pick up to the last dinner everything in {D} was taken care of. {H1} and {H2} were unforgettable, and we never once had to think about logistics.',
      '{E} planned our {D} honeymoon around what we love and it showed. {H1} was pure magic, and the hotels were even better than the photos.',
      'This was our first trip abroad together and Hi Tours made it feel easy. {H1} was worth every rupee, and the upgrades {E} arranged made us feel very special.'
    ]
  },
  family: {
    titles: ['The kids are still talking about it', 'Stress free family holiday', 'Perfect pace for all three generations', 'Our best family trip yet', 'Everything ran like clockwork'],
    text: [
      'Travelling with two kids and my parents is never simple, but {E} built a {D} itinerary that worked for everyone. {H1} was the big hit with the children, and the slower afternoons kept the grandparents happy.',
      'Hotels, transfers and tickets were all sorted before we landed in {D}. {H1} and {H2} were brilliant, and the driver was patient with all our stops.',
      'We have done many holidays but this {D} trip was the smoothest. {H1} was wonderful for the kids, and the WhatsApp support meant every small question was answered within minutes.',
      'Hi Tours understood that families need breathing room. {H1} was perfectly timed, meals were family friendly, and {E} even remembered our daughter\u2019s birthday.'
    ]
  },
  solo: {
    titles: ['Safe, smooth and so well planned', 'Travelled solo, never felt alone', 'Exactly the trip I needed', 'Brilliant planning for a solo traveller', 'I would book again tomorrow'],
    text: [
      'As a solo traveller safety mattered most to me and Hi Tours got it right. Every transfer in {D} was on time, the guides were lovely, and {H1} was the moment I will remember forever.',
      '{E} tailored my {D} trip around culture and food and nailed it. {H1} and {H2} were both incredible, and I loved having a local contact a call away.',
      'I planned this {D} trip in a week and Hi Tours made it feel like months of preparation. {H1} was the highlight, and the hotels were well located and quiet.',
      'Great value and zero stress. {H1} exceeded my expectations, and {E} checked in on me through the trip without ever being intrusive.'
    ]
  },
  bachelorette: {
    titles: ['Best bachelorette ever', 'The girls trip we needed', 'Fun, easy and beautifully organised', 'Zero planning stress for the bride'],
    text: [
      'Eight of us, one bride and absolutely no planning headaches. {E} organised our {D} trip down to the dinner reservations, and {H1} was the perfect send off for the bride.',
      'We wanted beaches, nightlife and a little culture and Hi Tours balanced all three in {D}. {H1} and {H2} were the standout days, and the villa was stunning.',
      'Coordinating a group is hard but Hi Tours made {D} feel effortless. {H1} was unforgettable, and the private transfers kept everyone together and on time.'
    ]
  }
};
const TYPES = ['honeymoon', 'family', 'solo', 'bachelorette', 'honeymoon', 'family'];
const TYPE_LABEL = { honeymoon: 'Honeymoon', family: 'Family holiday', solo: 'Solo trip', bachelorette: 'Bachelorette trip' };
const STARS = [5, 5, 5, 4.5, 5, 4.5, 5];
const CATS = [['Hotels', 'hotel'], ['Activities', 'activity'], ['Transport', 'transport'], ['Holiday expert advice', 'advice'], ['Post-booking service', 'service']];

const hash = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
const rng = (seed) => { let a = seed || 1; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
const between = (r, [a, b]) => a + Math.floor(r() * (b - a + 1));
const pick = (r, list, used) => { const free = list.filter((x) => !used.has(x)); const x = (free.length ? free : list)[Math.floor(r() * (free.length ? free : list).length)]; used.add(x); return x; };

export const ago = (days) => (days < 1 ? 'today' : days < 7 ? `${days} day${days > 1 ? 's' : ''} ago` : days < 60 ? `${Math.max(1, Math.round(days / 7))} week${Math.round(days / 7) > 1 ? 's' : ''} ago` : `${Math.round(days / 30)} months ago`);

export function buildDestinationReviews(name, now = new Date()) {
  const [tier, highlights] = DEST[name] || ['mid', FALLBACK];
  const t = TIER[tier];
  const month = now.getFullYear() * 12 + now.getMonth();
  const r = rng(hash(`${name}-${month}`));
  const rc = rng(hash(`${name}-categories`));
  const countN = between(r, t.count);
  const categories = CATS.map(([label, icon]) => ({ label, icon, value: Math.round((4.2 + rc() * 0.8) * 10) / 10 }));
  const score = Math.round((categories.reduce((s, c) => s + c.value, 0) / categories.length) * 10) / 10;
  const usedNames = new Set(); const usedText = new Set(); const usedTitle = new Set(); const usedH = new Set();
  let days = between(r, t.first);
  const items = TYPES.map((type, i) => {
    const h1 = pick(r, highlights, usedH); const h2 = pick(r, highlights, usedH);
    if (usedH.size >= highlights.length - 1) usedH.clear();
    const text = pick(r, T[type].text, usedText).replace(/\{D\}/g, name).replace(/\{H1\}/g, h1).replace(/\{H2\}/g, h2).replace(/\{E\}/g, EXPERTS[Math.floor(r() * EXPERTS.length)]).replace(/(^|\. )the /g, '$1The ');
    const item = { name: pick(r, NAMES[type], usedNames), type: TYPE_LABEL[type], title: pick(r, T[type].titles, usedTitle), text, stars: STARS[Math.floor(r() * STARS.length)], daysAgo: days, when: ago(days) };
    days += between(r, [5, 20]);
    return item;
  });
  return { name, countN, countLabel: `${countN.toLocaleString('en-IN')} ${name} reviews`, score, rating: score, categories, items };
}
