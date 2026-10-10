// Kazakhstan packages – same structured data model as vietnamPackages.js.
// Adapters for the listing/detail templates live in tours/kazakhstanToursData.js.
const U = (base, w = 1080) => `${base}&w=${w}`;
const B = {
  mountains1: 'https://images.unsplash.com/photo-1530480667809-b655d4dc3aaa?crop=entropy&cs=srgb&fm=jpg&q=85',
  mountains2: 'https://images.unsplash.com/photo-1727527667362-87ed862d6c87?crop=entropy&cs=srgb&fm=jpg&q=85',
  mountains3: 'https://images.unsplash.com/photo-1727527667388-b520a5307a0c?crop=entropy&cs=srgb&fm=jpg&q=85',
  canyon: 'https://images.unsplash.com/photo-1754111801632-5af388b7c877?crop=entropy&cs=srgb&fm=jpg&q=85',
  almaty1: 'https://images.unsplash.com/photo-1715534968341-c3dd089f1821?crop=entropy&cs=srgb&fm=jpg&q=85',
  almaty2: 'https://images.unsplash.com/photo-1698420458208-35f6d9adc6f3?crop=entropy&cs=srgb&fm=jpg&q=85',
  steppe1: 'https://images.unsplash.com/photo-1562595706-61433957484a?crop=entropy&cs=srgb&fm=jpg&q=85',
  steppe2: 'https://images.unsplash.com/photo-1705300307605-66fe7c0a268f?crop=entropy&cs=srgb&fm=jpg&q=85'
};
export const IMG = {
  mountains: U(B.mountains1), peaks: U(B.mountains2), ridge: U(B.mountains3), canyon: U(B.canyon),
  almaty: U(B.almaty1), city: U(B.almaty2), steppe: U(B.steppe1), astana: U(B.steppe2), RAW: B
};
const CITY_IMG = {
  Almaty: [IMG.almaty, IMG.city, IMG.mountains],
  Astana: [IMG.astana, IMG.steppe],
  'Charyn Canyon': [IMG.canyon],
  'Kolsai Lakes': [IMG.peaks, IMG.ridge],
  Saty: [IMG.ridge, IMG.peaks]
};
export const cityImages = (c) => CITY_IMG[c] || [IMG.mountains];

const INCL_BASE = ['Meals as indicated in the itinerary (B = Breakfast, L = Lunch, D = Dinner)', 'Entrance fees to the attractions mentioned in the programme', 'Sightseeing and excursions mentioned in the itinerary', 'English-speaking local guide', 'Transportation used in the programme'];
const EXCL_BASE = ['Tips for guides and drivers', 'Personal expenses such as telephone, laundry, drinks, etc.', 'Meals not mentioned in the programme', 'Bank fees related to payment', 'Other services not clearly indicated under "Included"'];

const D = (day, title, meals, bullets, overnight) => ({ day, title, meals, bullets, overnight });

export const destination = { name: 'Kazakhstan', slug: 'kazakhstan', continent: 'Asia', image: IMG.mountains };

export const packages = [];
