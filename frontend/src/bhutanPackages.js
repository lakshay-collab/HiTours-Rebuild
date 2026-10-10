// Bhutan packages – same structured data model as vietnamPackages.js.
// Adapters for the listing/detail templates live in tours/bhutanToursData.js.
const U = (base, w = 1080) => `${base}&w=${w}`;
const B = {
  tigersNest: 'https://images.unsplash.com/photo-1638246439638-b37095b34879?crop=entropy&cs=srgb&fm=jpg&q=85',
  dzong: 'https://images.unsplash.com/photo-1667232170246-034cf6daef4d?crop=entropy&cs=srgb&fm=jpg&q=85',
  peaks: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?crop=entropy&cs=srgb&fm=jpg&q=85',
  village: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?crop=entropy&cs=srgb&fm=jpg&q=85',
  prayerFlags: 'https://images.unsplash.com/photo-1571330177831-a12160efd5e7?crop=entropy&cs=srgb&fm=jpg&q=85',
  punakha: 'https://images.unsplash.com/photo-1580649851649-992b28f56e98?crop=entropy&cs=srgb&fm=jpg&q=85',
  bridge: 'https://images.unsplash.com/photo-1650747858910-5d48a4116296?crop=entropy&cs=srgb&fm=jpg&q=85',
  tigersNest2: 'https://images.unsplash.com/photo-1578556881786-851d4b79cb73?crop=entropy&cs=srgb&fm=jpg&q=85'
};
export const IMG = {
  tigersNest: U(B.tigersNest), dzong: U(B.dzong), peaks: U(B.peaks), village: U(B.village),
  prayerFlags: U(B.prayerFlags), punakha: U(B.punakha), bridge: U(B.bridge), tigersNest2: U(B.tigersNest2), RAW: B
};
const CITY_IMG = {
  Paro: [IMG.tigersNest, IMG.tigersNest2, IMG.peaks],
  Thimphu: [IMG.dzong, IMG.village],
  Punakha: [IMG.punakha, IMG.bridge],
  Bumthang: [IMG.prayerFlags, IMG.peaks]
};
export const cityImages = (c) => CITY_IMG[c] || [IMG.tigersNest];

const INCL_BASE = ['Meals as indicated in the itinerary (B = Breakfast, L = Lunch, D = Dinner)', 'Entrance fees to the attractions mentioned in the programme', 'Sightseeing and excursions mentioned in the itinerary', 'English-speaking local guide', 'Transportation used in the programme'];
const EXCL_BASE = ['Tips for guides and drivers', 'Personal expenses such as telephone, laundry, drinks, etc.', 'Meals not mentioned in the programme', 'Bank fees related to payment', 'Other services not clearly indicated under "Included"'];

const D = (day, title, meals, bullets, overnight) => ({ day, title, meals, bullets, overnight });

export const destination = { name: 'Bhutan', slug: 'bhutan', continent: 'Asia', image: IMG.tigersNest };

export const packages = [];
