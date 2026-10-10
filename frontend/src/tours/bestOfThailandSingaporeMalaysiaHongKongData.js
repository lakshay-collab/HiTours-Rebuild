// Thailand, Singapore, Malaysia & Hong Kong for the Hi Tours trip page template. Facts from the source itinerary, all copy written fresh, INR pricing.
const BASE = '/tours/thailand-singapore-malaysia-hong-kong-13-days';
const HERO = f => `${BASE}/hero/${f}`;
const DEST = f => `${BASE}/destinations/${f}`;
const HOT = f => `${BASE}/hotels/${f}`;
const A = f => `${BASE}/activities/${f}`;
const DAY_MARK = '__day__';

const heroGallery = ['/tours/thailand-singapore-malaysia-hong-kong-13-days/hero/01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hero/02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hero/03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hero/04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hero/05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hero/06.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hero/07.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hero/08.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hero/09.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hero/10.jpg'];
const cardImages = [heroGallery[0], heroGallery[1], heroGallery[2], heroGallery[3]];

const stops = [{
  letter: 'A',
  name: 'Pattaya',
  dayLabel: 'Day 1 to 2',
  images: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/pattaya-01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/pattaya-02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/pattaya-03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/pattaya-04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/pattaya-05.jpg'],
  dayImages: {
    1: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/pattaya-01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/pattaya-02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/pattaya-03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/alcazar-show/01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/jomtien-beach/01.jpg'],
    2: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/coral-island/02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/coral-island/03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/coral-island/04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/coral-island/05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/coral-island/06.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/coral-island/07.jpg']
  },
  bullets: [
    `${DAY_MARK}Day 1 · Arrival in Bangkok and onward to Pattaya`,
    'Arrival at Suvarnabhumi Airport and private sedan transfer to your hotel in Pattaya',
    'Check in and settle into your room by the Gulf of Thailand',
    'Rest of the day free to find your feet in Pattaya',
    'Optional: Alcazar Cabaret Show, an evening of costumes and choreography',
    'Optional: Browse the Saturday Walking Street Market or unwind at Jomtien Beach',
    `${DAY_MARK}Day 2 · Coral Island by speedboat`,
    'Breakfast at the hotel, then shared transfer to Bali Hai Pier',
    'Speedboat transfer across to Coral Island, also called Koh Larn',
    'Free time on Tawaen Beach, with water sports available at your own cost',
    'Lunch on the island is included',
    'Return speedboat and shared transfer back to your hotel'
  ],
  accommodation: {
    name: 'ibis Pattaya, Pattaya',
    description: '2 nights · Breakfast · Standard room · 3★ · A short walk from Pattaya Beach and Walking Street',
    images: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-pattaya/01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-pattaya/02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-pattaya/03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-pattaya/04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-pattaya/05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-pattaya/06.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-pattaya/07.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-pattaya/08.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-pattaya/09.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-pattaya/10.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-pattaya/11.jpg']
  },
  activities: [
  {
    name: 'Coral Island day trip with lunch',
    day: 2,
    optional: false,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/coral-island/01.jpg',
    description: 'Speedboat out to Koh Larn for a day on Tawaen Beach. Swim, try parasailing or a banana boat at your own cost, and sit down to an included lunch.'
  },
  {
    name: 'Alcazar Cabaret Show',
    day: 1,
    optional: true,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/alcazar-show/01.jpg',
    description: 'Pattaya’s famous cabaret, a 70 minute production of elaborate costumes, big sets and polished choreography. Tickets can be added to your package.'
  },
  {
    name: 'Saturday Walking Street Market',
    day: 1,
    optional: true,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/walking-street/01.jpg',
    description: 'Pattaya’s weekend street market with food stalls, local crafts and live music, a relaxed way to spend your first evening.'
  },
  {
    name: 'Jomtien Beach',
    day: 1,
    optional: true,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/jomtien-beach/01.jpg',
    description: 'The quieter beach south of Pattaya town, with a long promenade, beach chairs and seafood restaurants along the sand.'
  }
  ],
  program: {
    name: 'Pattaya',
    description: 'Two nights on the Gulf of Thailand to shake off the flight, with a full day on the white sand of Coral Island and evenings in the town.',
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/pattaya-01.jpg'
  }
}, {
  letter: 'B',
  name: 'Bangkok',
  dayLabel: 'Day 3',
  images: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/bangkok-01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/bangkok-02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/bangkok-03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/bangkok-04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/bangkok-05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/bangkok-06.jpg'],
  dayImages: {
    3: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/bangkok-temples/02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/bangkok-temples/03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/chao-phraya-dinner-cruise/02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/chao-phraya-dinner-cruise/03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/chao-phraya-dinner-cruise/04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/bangkok-01.jpg']
  },
  bullets: [
    `${DAY_MARK}Day 3 · Bangkok temples and a dinner cruise`,
    'Breakfast, check out and road transfer from Pattaya to Bangkok',
    'Check in at your Bangkok hotel and freshen up',
    'Shared transfer to Wat Traimit, home of the five tonne Golden Buddha',
    'Visit Wat Mahapruttaram and the Gems Gallery showroom',
    'Evening Chao Phraya Princess dinner cruise with a buffet and live music',
    'Shared transfer back to the hotel after the cruise'
  ],
  accommodation: {
    name: 'Hotel De Bangkok, Bangkok',
    description: '1 night · Breakfast · Standard room · 3★ · Central Bangkok base close to the BTS Skytrain',
    images: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/hotel-de-bangkok/01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/hotel-de-bangkok/02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/hotel-de-bangkok/03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/hotel-de-bangkok/04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/hotel-de-bangkok/05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/hotel-de-bangkok/06.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/hotel-de-bangkok/07.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/hotel-de-bangkok/08.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/hotel-de-bangkok/09.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/hotel-de-bangkok/10.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/hotel-de-bangkok/11.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/hotel-de-bangkok/12.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/hotel-de-bangkok/13.jpg']
  },
  activities: [
  {
    name: 'Bangkok temples half day tour',
    day: 3,
    optional: false,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/bangkok-temples/01.jpg',
    description: 'A guided afternoon at Wat Traimit with its solid gold Buddha, the quieter Wat Mahapruttaram and a stop at the Gems Gallery, Bangkok’s largest jewellery showroom.'
  },
  {
    name: 'Chao Phraya Princess dinner cruise',
    day: 3,
    optional: false,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/chao-phraya-dinner-cruise/01.jpg',
    description: 'Two hours on the river past the lit up Grand Palace and Wat Arun, with an international buffet dinner and a live band on board.'
  }
  ],
  program: {
    name: 'Bangkok',
    description: 'One full night in the capital, timed around a temple circuit in the afternoon and a dinner cruise on the Chao Phraya after dark.',
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/bangkok-01.jpg'
  }
}, {
  letter: 'C',
  name: 'Singapore',
  dayLabel: 'Day 4 to 5',
  images: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/singapore-01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/singapore-02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/singapore-03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/singapore-04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/singapore-05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/singapore-06.jpg'],
  dayImages: {
    4: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/night-safari/02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/night-safari/03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/night-safari/04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/night-safari/05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/singapore-01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/singapore-02.jpg'],
    5: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/universal-studios/02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/universal-studios/03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/universal-studios/04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/universal-studios/05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/singapore-03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/singapore-04.jpg']
  },
  bullets: [
    `${DAY_MARK}Day 4 · Flight to Singapore and the Night Safari`,
    'Breakfast and transfer to Suvarnabhumi Airport',
    'Flight from Bangkok to Singapore, booked separately and not included',
    'Private transfer from Changi Airport to your hotel',
    'Evening private transfer to the Night Safari for the tram ride and walking trails',
    'Return transfer to the hotel',
    `${DAY_MARK}Day 5 · Universal Studios Singapore`,
    'Breakfast at the hotel',
    'Private transfer to Universal Studios Singapore on Sentosa',
    'Full day pass with rides and shows across seven themed zones',
    'Evening free for Clarke Quay or Marina Bay on your own'
  ],
  accommodation: {
    name: 'ibis Singapore Novena, Singapore',
    description: '2 nights · Breakfast · Standard room · 3★ · Next to Novena MRT, ten minutes to Orchard Road',
    images: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-singapore-novena/01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-singapore-novena/02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-singapore-novena/03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-singapore-novena/04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-singapore-novena/05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-singapore-novena/06.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-singapore-novena/07.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-singapore-novena/08.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-singapore-novena/09.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-singapore-novena/10.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-singapore-novena/11.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-singapore-novena/12.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-singapore-novena/13.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/ibis-singapore-novena/14.jpg']
  },
  activities: [
  {
    name: 'Night Safari with tram ride',
    day: 4,
    optional: false,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/night-safari/01.jpg',
    description: 'The world’s first night zoo. A guided tram loops past elephants, rhinos and big cats in open enclosures, with walking trails and the Creatures of the Night show.'
  },
  {
    name: 'Universal Studios Singapore',
    day: 5,
    optional: false,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/universal-studios/01.jpg',
    description: 'A full day pass to the park on Sentosa, with Transformers, Battlestar Galactica, the Mummy ride and Minion Land plus street shows and character meets.'
  }
  ],
  program: {
    name: 'Singapore',
    description: 'Two nights in the city state with its two headline family experiences, the Night Safari tram on arrival and a full day at Universal Studios.',
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/singapore-01.jpg'
  }
}, {
  letter: 'D',
  name: 'Kuala Lumpur',
  subtitle: 'Kuala Lumpur → Genting Highlands',
  dayLabel: 'Day 6 to 8',
  images: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/kuala-lumpur-01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/kuala-lumpur-02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/kuala-lumpur-03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/kuala-lumpur-04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/kuala-lumpur-05.jpg'],
  dayImages: {
    6: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/kuala-lumpur-01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/kuala-lumpur-02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/merdeka-square/01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/jalan-alor/01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/illusion-3d-museum/01.jpg'],
    7: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/kuala-lumpur-city-tour/02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/kuala-lumpur-city-tour/03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/kuala-lumpur-city-tour/04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/kuala-lumpur-city-tour/05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/kuala-lumpur-02.jpg'],
    8: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/genting-batu-caves/02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/genting-batu-caves/03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/genting-batu-caves/04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/genting-batu-caves/05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/kuala-lumpur-03.jpg']
  },
  bullets: [
    `${DAY_MARK}Day 6 · Road to Kuala Lumpur`,
    'Breakfast and check out in Singapore',
    'Coach transfer from Singapore to Kuala Lumpur, about five hours by road',
    'Check in and the rest of the day free',
    'Optional: Merdeka Square and its colonial era buildings',
    'Optional: Street food on Jalan Alor or the Illusion 3D Art Museum',
    `${DAY_MARK}Day 7 · Kuala Lumpur city tour and Petronas Towers`,
    'Breakfast, then private transfer for a half day city tour',
    'Photo stops at Istana Negara, Tugu Negara and Merdeka Square',
    'Petronas Twin Towers with the Skybridge and observation deck',
    'Pass KL Tower on the way back',
    'Private transfer back to the hotel',
    `${DAY_MARK}Day 8 · Batu Caves and Genting Highlands`,
    'Breakfast, then private transfer to Batu Caves and its 272 rainbow steps',
    'Cable car transfer on the Awana Skyway up to Genting Highlands and back',
    'Free time for the outlets, the casino floor and the cool hill air',
    'Private transfer back to Kuala Lumpur in the evening'
  ],
  accommodation: {
    name: 'Days Hotel & Suites by Wyndham Fraser Business Park, Kuala Lumpur',
    description: '3 nights · Breakfast · Standard room · 3★ · Rated 4.5 on TripAdvisor, near the Chan Sow Lin LRT',
    images: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/days-hotel-kuala-lumpur/01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/days-hotel-kuala-lumpur/02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/days-hotel-kuala-lumpur/03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/days-hotel-kuala-lumpur/04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/days-hotel-kuala-lumpur/05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/days-hotel-kuala-lumpur/06.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/days-hotel-kuala-lumpur/07.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/days-hotel-kuala-lumpur/08.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/days-hotel-kuala-lumpur/09.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/days-hotel-kuala-lumpur/10.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/days-hotel-kuala-lumpur/11.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/days-hotel-kuala-lumpur/12.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/days-hotel-kuala-lumpur/13.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/days-hotel-kuala-lumpur/14.jpg']
  },
  activities: [
  {
    name: 'Kuala Lumpur half day city tour',
    day: 7,
    optional: false,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/kuala-lumpur-city-tour/01.jpg',
    description: 'A private half day through the capital with photo stops at the royal palace, the National Monument and Merdeka Square, then up the Petronas Twin Towers to the Skybridge and observation deck.'
  },
  {
    name: 'Genting Highlands and Batu Caves',
    day: 8,
    optional: false,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/genting-batu-caves/01.jpg',
    description: 'Climb the painted steps at Batu Caves beneath the 43 metre Murugan statue, then ride the Awana Skyway cable car over the rainforest to Genting Highlands for the day.'
  },
  {
    name: 'Merdeka Square',
    day: 6,
    optional: true,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/merdeka-square/01.jpg',
    description: 'The square where Malaysia declared independence in 1957, framed by the Sultan Abdul Samad Building and the old cricket club.'
  },
  {
    name: 'Jalan Alor food street',
    day: 6,
    optional: true,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/jalan-alor/01.jpg',
    description: 'Kuala Lumpur’s best known food street, lined with hawker stalls and open air restaurants serving satay, grilled seafood and noodles late into the night.'
  },
  {
    name: 'Illusion 3D Art Museum',
    day: 6,
    optional: true,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/illusion-3d-museum/01.jpg',
    description: 'An interactive gallery of trick art and optical illusions near Petaling Street, a fun hour for families and photos.'
  }
  ],
  program: {
    name: 'Kuala Lumpur',
    description: 'Three nights in the Malaysian capital with a half day city tour, the Petronas Skybridge and a day out to Batu Caves and Genting Highlands.',
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/kuala-lumpur-01.jpg'
  }
}, {
  letter: 'E',
  name: 'Hong Kong',
  subtitle: 'Hong Kong → Macau',
  dayLabel: 'Day 9 to 13',
  images: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-06.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-07.jpg'],
  dayImages: {
    9: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/senado-square/01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/a-ma-temple/01.jpg'],
    10: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/madame-tussauds/02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/madame-tussauds/03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/madame-tussauds/04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/madame-tussauds/05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-03.jpg'],
    11: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/macau-tour/02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/macau-tour/03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/macau-tour/04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/macau-tour/05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/macau-tour/06.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-05.jpg'],
    12: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/ocean-park/02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/ocean-park/03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/ocean-park/04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/ocean-park/05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/ocean-park/06.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-07.jpg'],
    13: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-06.jpg']
  },
  bullets: [
    `${DAY_MARK}Day 9 · Onward to Hong Kong`,
    'Breakfast and check out in Kuala Lumpur',
    'Flight from Kuala Lumpur to Hong Kong, booked separately and not included',
    'Coach transfer from Hong Kong International Airport to your hotel',
    'Rest of the day free in Kowloon',
    'Optional: Senado Square, Hac Sa Beach and A-Ma Temple in Macau',
    `${DAY_MARK}Day 10 · Madame Tussauds on The Peak`,
    'Breakfast at the hotel',
    'Coach transfer to Madame Tussauds Hong Kong at The Peak',
    'Themed zones with wax figures of film stars, athletes and world leaders',
    'Evening free in Hong Kong',
    `${DAY_MARK}Day 11 · Macau for the day`,
    'Breakfast, then private transfer to the ferry terminal',
    'Ferry transfer across to Macau and coach transfer into the city',
    'Macau Tower, the Ruins of St Paul’s, Na Tcha Temple and the old city walls',
    'See the Lotus Statue before heading back',
    'Ferry transfer and private transfer back to your Hong Kong hotel',
    `${DAY_MARK}Day 12 · Ocean Park Hong Kong`,
    'Breakfast at the hotel',
    'Private transfer to Ocean Park Hong Kong',
    'One day pass across seven zones, with the park cable car between the Waterfront and the Summit',
    'Giant pandas, the Grand Aquarium and the rides on the Summit',
    `${DAY_MARK}Day 13 · Departure`,
    'Breakfast and check out',
    'Private transfer to Hong Kong International Airport for your journey home'
  ],
  accommodation: {
    name: 'Harbour Plaza 8 Degrees, Hong Kong',
    description: '4 nights · Breakfast · Standard room · 3★ · Kowloon hotel with a rooftop pool and free shuttle to Tsim Sha Tsui',
    images: ['/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/harbour-plaza-8-degrees/01.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/harbour-plaza-8-degrees/02.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/harbour-plaza-8-degrees/03.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/harbour-plaza-8-degrees/04.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/harbour-plaza-8-degrees/05.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/harbour-plaza-8-degrees/06.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/harbour-plaza-8-degrees/07.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/harbour-plaza-8-degrees/08.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/harbour-plaza-8-degrees/09.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/harbour-plaza-8-degrees/10.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/harbour-plaza-8-degrees/11.jpg', '/tours/thailand-singapore-malaysia-hong-kong-13-days/hotels/harbour-plaza-8-degrees/12.jpg']
  },
  activities: [
  {
    name: 'Madame Tussauds Hong Kong',
    day: 10,
    optional: false,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/madame-tussauds/01.jpg',
    description: 'Entry to the wax museum at The Peak Tower, with Bruce Lee, Bollywood stars, K pop idols and world leaders across eleven themed zones.'
  },
  {
    name: 'Macau sightseeing tour',
    day: 11,
    optional: false,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/macau-tour/01.jpg',
    description: 'A day across the water to Macau for the 338 metre Macau Tower, the baroque facade of the Ruins of St Paul’s, Na Tcha Temple, the city walls and the golden Lotus Statue.'
  },
  {
    name: 'Ocean Park Hong Kong',
    day: 12,
    optional: false,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/ocean-park/01.jpg',
    description: 'A one day pass to the marine theme park on the south side of the island, with giant pandas, the Grand Aquarium, the cable car and roller coasters on the Summit.'
  },
  {
    name: 'Senado Square',
    day: 9,
    optional: true,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/senado-square/01.jpg',
    description: 'Macau’s wave patterned main square, ringed by pastel Portuguese buildings and the start of the walk up to the Ruins of St Paul’s.'
  },
  {
    name: 'Hac Sa Beach',
    day: 9,
    optional: true,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/hac-sa-beach/01.jpg',
    description: 'The black sand beach on Coloane island at Macau’s southern tip, with a quiet promenade and seafood restaurants.'
  },
  {
    name: 'A-Ma Temple',
    day: 9,
    optional: true,
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/activities/a-ma-temple/01.jpg',
    description: 'Macau’s oldest temple, dating from 1488 and dedicated to the sea goddess Mazu, with prayer halls climbing the hillside.'
  }
  ],
  program: {
    name: 'Hong Kong',
    description: 'Four nights in Kowloon to close the trip, with The Peak, a full day in Macau and Ocean Park before the flight home.',
    image: '/tours/thailand-singapore-malaysia-hong-kong-13-days/destinations/hong-kong-01.jpg'
  }
}];

const detail = {
  slug: 'best-of-thailand-singapore-malaysia-hong-kong',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Thailand, Singapore, Malaysia and Hong Kong',
  alt: 'Marina Bay Sands and the Merlion at sunset, Singapore',
  days: '13 days / 12 nights',
  stations: '5 stops',
  transport: 'Private and shared transfers, speedboat, cable car and ferry',
  tag: 'Family',
  tags: ['Family', 'Culture'],
  price: 171000,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Pattaya', 'Bangkok', 'Singapore', 'Kuala Lumpur', 'Genting Highlands', 'Hong Kong', 'Macau'],
  stats: { days: 13, cities: 5, hotels: 5, activities: 10, transfers: 27 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['10 experiences', 'Activities'],
    ['27 transfers', 'Transport'],
    ['14 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Four countries in thirteen days sounds hectic. It is not, because every stop has at least one free evening built in.',
    quoteMore: 'Book the two internal flights early, Bangkok to Singapore and Kuala Lumpur to Hong Kong, as morning departures. Ask us to add the Alcazar show in Pattaya, it is the best value evening on the trip.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Thirteen days across four countries: beach time in Pattaya, temples and a dinner cruise in Bangkok, the Night Safari and Universal Studios in Singapore, Petronas and Genting from Kuala Lumpur, then The Peak, Macau and Ocean Park in Hong Kong.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 12 nights in 3 star hotels with daily breakfast; lunch on Coral Island and dinner on the Chao Phraya cruise; 27 private and shared transfers including the Macau ferry; Coral Island, Bangkok temples, Night Safari, Universal Studios, Kuala Lumpur city tour, Genting Highlands and Batu Caves, Madame Tussauds, Macau tour and Ocean Park; 24/7 support.',
  intro2: 'Not included: international flights; the flights from Bangkok to Singapore and from Kuala Lumpur to Hong Kong; visa charges; travel insurance; meals not listed; optional experiences; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Bangkok and onward to Pattaya (Arrival)', text: 'Arrival at Suvarnabhumi Airport and private sedan transfer to your hotel in Pattaya\nCheck in and settle into your room by the Gulf of Thailand\nRest of the day free to find your feet in Pattaya\nOptional: Alcazar Cabaret Show, an evening of costumes and choreography\nOptional: Browse the Saturday Walking Street Market or unwind at Jomtien Beach', hotel: 'ibis Pattaya', highlights: ['Arrival at Suvarnabhumi Airport and private sedan transfer to your hotel in Pattaya', 'Check in and settle into your room by the Gulf of Thailand', 'Rest of the day free to find your feet in Pattaya'] },
    { title: 'Day 2: Coral Island by speedboat (B, L)', text: 'Breakfast at the hotel, then shared transfer to Bali Hai Pier\nSpeedboat transfer across to Coral Island, also called Koh Larn\nFree time on Tawaen Beach, with water sports available at your own cost\nLunch on the island is included\nReturn speedboat and shared transfer back to your hotel', hotel: 'ibis Pattaya', highlights: ['Breakfast at the hotel, then shared transfer to Bali Hai Pier', 'Speedboat transfer across to Coral Island, also called Koh Larn', 'Free time on Tawaen Beach, with water sports available at your own cost'] },
    { title: 'Day 3: Bangkok temples and a dinner cruise (B, D)', text: 'Breakfast, check out and road transfer from Pattaya to Bangkok\nCheck in at your Bangkok hotel and freshen up\nShared transfer to Wat Traimit, home of the five tonne Golden Buddha\nVisit Wat Mahapruttaram and the Gems Gallery showroom\nEvening Chao Phraya Princess dinner cruise with a buffet and live music\nShared transfer back to the hotel after the cruise', hotel: 'Hotel De Bangkok', highlights: ['Breakfast, check out and road transfer from Pattaya to Bangkok', 'Check in at your Bangkok hotel and freshen up', 'Shared transfer to Wat Traimit, home of the five tonne Golden Buddha'] },
    { title: 'Day 4: Flight to Singapore and the Night Safari (B)', text: 'Breakfast and transfer to Suvarnabhumi Airport\nFlight from Bangkok to Singapore, booked separately and not included\nPrivate transfer from Changi Airport to your hotel\nEvening private transfer to the Night Safari for the tram ride and walking trails\nReturn transfer to the hotel', hotel: 'ibis Singapore Novena', highlights: ['Breakfast and transfer to Suvarnabhumi Airport', 'Flight from Bangkok to Singapore, booked separately and not included', 'Private transfer from Changi Airport to your hotel'] },
    { title: 'Day 5: Universal Studios Singapore (B)', text: 'Breakfast at the hotel\nPrivate transfer to Universal Studios Singapore on Sentosa\nFull day pass with rides and shows across seven themed zones\nEvening free for Clarke Quay or Marina Bay on your own', hotel: 'ibis Singapore Novena', highlights: ['Breakfast at the hotel', 'Private transfer to Universal Studios Singapore on Sentosa', 'Full day pass with rides and shows across seven themed zones'] },
    { title: 'Day 6: Road to Kuala Lumpur (B)', text: 'Breakfast and check out in Singapore\nCoach transfer from Singapore to Kuala Lumpur, about five hours by road\nCheck in and the rest of the day free\nOptional: Merdeka Square and its colonial era buildings\nOptional: Street food on Jalan Alor or the Illusion 3D Art Museum', hotel: 'Days Hotel & Suites by Wyndham Fraser Business Park', highlights: ['Breakfast and check out in Singapore', 'Coach transfer from Singapore to Kuala Lumpur, about five hours by road', 'Check in and the rest of the day free'] },
    { title: 'Day 7: Kuala Lumpur city tour and Petronas Towers (B)', text: 'Breakfast, then private transfer for a half day city tour\nPhoto stops at Istana Negara, Tugu Negara and Merdeka Square\nPetronas Twin Towers with the Skybridge and observation deck\nPass KL Tower on the way back\nPrivate transfer back to the hotel', hotel: 'Days Hotel & Suites by Wyndham Fraser Business Park', highlights: ['Breakfast, then private transfer for a half day city tour', 'Photo stops at Istana Negara, Tugu Negara and Merdeka Square', 'Petronas Twin Towers with the Skybridge and observation deck'] },
    { title: 'Day 8: Batu Caves and Genting Highlands (B)', text: 'Breakfast, then private transfer to Batu Caves and its 272 rainbow steps\nCable car transfer on the Awana Skyway up to Genting Highlands and back\nFree time for the outlets, the casino floor and the cool hill air\nPrivate transfer back to Kuala Lumpur in the evening', hotel: 'Days Hotel & Suites by Wyndham Fraser Business Park', highlights: ['Breakfast, then private transfer to Batu Caves and its 272 rainbow steps', 'Cable car transfer on the Awana Skyway up to Genting Highlands and back', 'Free time for the outlets, the casino floor and the cool hill air'] },
    { title: 'Day 9: Onward to Hong Kong (B)', text: 'Breakfast and check out in Kuala Lumpur\nFlight from Kuala Lumpur to Hong Kong, booked separately and not included\nCoach transfer from Hong Kong International Airport to your hotel\nRest of the day free in Kowloon\nOptional: Senado Square, Hac Sa Beach and A-Ma Temple in Macau', hotel: 'Harbour Plaza 8 Degrees', highlights: ['Breakfast and check out in Kuala Lumpur', 'Flight from Kuala Lumpur to Hong Kong, booked separately and not included', 'Coach transfer from Hong Kong International Airport to your hotel'] },
    { title: 'Day 10: Madame Tussauds on The Peak (B)', text: 'Breakfast at the hotel\nCoach transfer to Madame Tussauds Hong Kong at The Peak\nThemed zones with wax figures of film stars, athletes and world leaders\nEvening free in Hong Kong', hotel: 'Harbour Plaza 8 Degrees', highlights: ['Breakfast at the hotel', 'Coach transfer to Madame Tussauds Hong Kong at The Peak', 'Themed zones with wax figures of film stars, athletes and world leaders'] },
    { title: 'Day 11: Macau for the day (B)', text: 'Breakfast, then private transfer to the ferry terminal\nFerry transfer across to Macau and coach transfer into the city\nMacau Tower, the Ruins of St Paul’s, Na Tcha Temple and the old city walls\nSee the Lotus Statue before heading back\nFerry transfer and private transfer back to your Hong Kong hotel', hotel: 'Harbour Plaza 8 Degrees', highlights: ['Breakfast, then private transfer to the ferry terminal', 'Ferry transfer across to Macau and coach transfer into the city', 'Macau Tower, the Ruins of St Paul’s, Na Tcha Temple and the old city walls'] },
    { title: 'Day 12: Ocean Park Hong Kong (B)', text: 'Breakfast at the hotel\nPrivate transfer to Ocean Park Hong Kong\nOne day pass across seven zones, with the park cable car between the Waterfront and the Summit\nGiant pandas, the Grand Aquarium and the rides on the Summit', hotel: 'Harbour Plaza 8 Degrees', highlights: ['Breakfast at the hotel', 'Private transfer to Ocean Park Hong Kong', 'One day pass across seven zones, with the park cable car between the Waterfront and the Summit'] },
    { title: 'Day 13: Departure (B)', text: 'Breakfast and check out\nPrivate transfer to Hong Kong International Airport for your journey home', hotel: 'Departure', highlights: ['Breakfast and check out', 'Private transfer to Hong Kong International Airport for your journey home'] }
  ],
  outro: 'Not included: international flights; the flights from Bangkok to Singapore and from Kuala Lumpur to Hong Kong; visa charges; travel insurance; meals not listed; optional experiences; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '#' },
  { label: 'Thailand', href: '/asia/thailand' },
  { label: detail.title }
];

export const bestOfThailandSingaporeMalaysiaHongKongBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfThailandSingaporeMalaysiaHongKongProduct = {
  slug: detail.slug,
  places: stops.map((s) => s.name),
  href: '/asia/' + detail.slug,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 13,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 10,
  transfers: 27,
  meals: 14,
  price: detail.price,
  images: cardImages
};
