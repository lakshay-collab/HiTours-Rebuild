// Merchandising calendar. One entry per promotion; the live one is picked by today's date (IST).
// `percent` is what the traveller actually saves. `markup` lifts the struck-through list price by the
// same amount so the badge can honestly read "10% off" while the net saving stays 5%.
export const SALES = [
  {
    id: 'diwali-2026',
    theme: 'diwali',
    name: 'Celebrate Diwali, Discover the World',
    short: 'Diwali Sale',
    occasion: 'Diwali',
    percent: 5,
    markup: 5,
    tagline: '10% off every holiday',
    offer: 'Put the savings towards an extra night, a festive dinner or an upgrade.',
    starts: '2026-10-09',
    plannedStart: '2026-10-11',
    ends: '2026-11-05',
    endsLabel: 'Ends 5 November'
  },
  {
    id: 'year-end-2026',
    theme: 'yearEnd',
    name: 'Year-End Travel Sale',
    short: 'Year-End Sale',
    occasion: 'Christmas & New Year',
    percent: 5,
    markup: 5,
    tagline: '10% off every holiday',
    offer: 'Use the savings on an extra night, a spa day or a New Year dinner.',
    starts: '2026-11-06',
    ends: '2026-12-22',
    endsLabel: 'Ends 22 December'
  },
  {
    id: 'republic-day-2027',
    theme: 'republic',
    name: 'Republic Day Travel Carnival',
    short: 'Republic Day Sale',
    occasion: 'Republic Day',
    percent: 5,
    markup: 5,
    tagline: '10% off every holiday',
    offer: 'Spend the savings on a long weekend upgrade or an extra experience.',
    starts: '2027-01-05',
    ends: '2027-01-26',
    endsLabel: 'Ends 26 January'
  },
  {
    id: 'good-friday-2027',
    theme: 'goodFriday',
    name: 'Good Friday Long Weekend Escapes',
    short: 'Long Weekend Sale',
    occasion: 'Good Friday',
    percent: 5,
    markup: 5,
    tagline: '10% off every holiday',
    offer: 'Stretch the long weekend with an extra night on us.',
    starts: '2027-02-01',
    ends: '2027-03-20',
    endsLabel: 'Ends 20 March'
  },
  {
    id: 'independence-day-2027',
    theme: 'independence',
    name: 'Independence Day Holiday Sale',
    short: 'Independence Sale',
    occasion: 'Independence Day',
    percent: 5,
    markup: 5,
    tagline: '10% off every holiday',
    offer: 'Put the savings towards a monsoon upgrade or an extra experience.',
    starts: '2027-07-15',
    ends: '2027-08-15',
    endsLabel: 'Ends 15 August'
  }
];

// Today in IST, as YYYY-MM-DD.
const istDay = (now) => new Date(now.getTime() + (330 + now.getTimezoneOffset()) * 60000).toISOString().slice(0, 10);

export const getActiveSale = (now = new Date()) => {
  const day = istDay(now);
  return SALES.find((s) => s.forceActive || (day >= s.starts && day <= s.ends)) || null;
};

export const SALE = getActiveSale();

// Shown list price: the real price lifted by the markup, so the struck figure and the badge agree.
export const listPrice = (price, sale = SALE) =>
  (sale && typeof price === 'number' ? Math.round(price / (1 - sale.markup / 100)) : price);

export const salePrice = (price, sale = SALE) =>
  (sale && typeof price === 'number' ? Math.round(price * (1 - sale.percent / 100)) : price);

// What the badge says: markup plus discount, rounded, e.g. 5 + 5 -> 10.
export const saleBadgePercent = (sale = SALE) =>
  (sale ? Math.round((1 - (1 - sale.percent / 100) * (1 - sale.markup / 100)) * 100) : 0);

export const formatInr = (n) => `₹${Math.round(n).toLocaleString('en-IN')}`;
