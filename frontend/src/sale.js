// Merchandising calendar. Add future sales here (or import from the deals sheet later).
// A sale is live when `forceActive` is true or `now` falls between `starts` and `ends` (inclusive).
export const SALES = [
  {
    id: 'xmas-ny-2026',
    name: 'Christmas & New Year Sale',
    short: 'Xmas & New Year Sale',
    percent: 5,
    tagline: '5% off every holiday',
    offer: 'Use the savings on an extra night, a spa day or a festive dinner.',
    starts: '2026-12-01',
    ends: '2027-01-05',
    endsLabel: 'Ends 5 January',
    forceActive: true
  }
];

export const getActiveSale = (now = new Date()) => {
  const day = now.toISOString().slice(0, 10);
  return SALES.find((s) => s.forceActive || (day >= s.starts && day <= s.ends)) || null;
};

export const SALE = getActiveSale();

export const salePrice = (price, sale = SALE) => (sale && typeof price === 'number' ? Math.round(price * (1 - sale.percent / 100)) : price);

export const formatInr = (n) => `₹${Math.round(n).toLocaleString('en-IN')}`;
