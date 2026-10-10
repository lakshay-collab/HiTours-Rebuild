// Europe multi-country packages – same structured data model as vietnamPackages.js. Photos: /public/europe (real photography).
const E = (n) => `/europe/${n}.webp`;

const CITY_IMG = {
  Paris: [E('hero-paris'), E('paris-gold')], Interlaken: [E('interlaken'), E('alps')], Zermatt: [E('zermatt'), E('alps'), E('zermatt-peaks')], Lucerne: [E('lucerne'), E('alps')],
  'Lake Como': [E('como'), E('cinque-terre')], Venice: [E('venice')], Rome: [E('rome')], Florence: [E('cinque-terre'), E('rome')], 'Amalfi Coast': [E('amalfi'), E('cinque-terre')],
  Innsbruck: [E('hallstatt'), E('alps')], Salzburg: [E('salzburg'), E('hallstatt')], Hallstatt: [E('hallstatt')], Munich: [E('munich'), E('neuschwanstein')], Vienna: [E('vienna')],
  Barcelona: [E('barcelona')], Madrid: [E('madrid')], Seville: [E('seville')], Lisbon: [E('lisbon'), E('lisbon-tram')], Porto: [E('porto')],
  Athens: [E('athens')], Mykonos: [E('mykonos')], Santorini: [E('santorini')], Amsterdam: [E('amsterdam')], Bruges: [E('bruges')], Brussels: [E('brussels')]
};
export const cityImages = (c) => CITY_IMG[c] || [E('alps')];

const PRICING = (pp, note) => ({ currency: 'INR', basis: 'Per person on double-sharing basis, 4-star hotels, rail and transfers as listed, excluding international flights', rows: [['All departures', pp]], note });
const D = (day, title, meals, bullets, overnight) => ({ day, title, meals, bullets, overnight });
const EXCL = ['International flights to and from India', 'Schengen visa fees and travel insurance', 'Lunches and dinners unless listed', 'City taxes payable at hotels', 'Expenses of a personal nature'];

export const packages = [];
