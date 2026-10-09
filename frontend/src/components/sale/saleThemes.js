import { Diya, Firework, Rangoli, Bauble, Champagne, Tricolour, Kite, Dove, Blossom, SaleTag, Bells } from './SaleIcons';

// Per-occasion art direction for the sale bar, hero pill, card chip and detail tag.
export const THEMES = {
  diwali: {
    Lead: Diya,
    Trail: Firework,
    Motif: Rangoli,
    bar: 'promo-bar-diwali',
    confetti: 'diwali',
    ink: '#8A3B00',
    inkSoft: '#FFF3DF',
    ring: '#F6D9A8',
    accent: '#FFD166'
  },
  yearEnd: {
    Lead: Bauble,
    Trail: Champagne,
    Motif: Firework,
    bar: 'promo-bar-year-end',
    confetti: 'snow',
    ink: '#0B5748',
    inkSoft: '#E9F6F1',
    ring: '#B9E0D2',
    accent: '#E8C66A'
  },
  republic: {
    Lead: Tricolour,
    Trail: Kite,
    Motif: Kite,
    bar: 'promo-bar-india',
    confetti: 'kites',
    ink: '#0A3B8C',
    inkSoft: '#EEF3FF',
    ring: '#C3D3F2',
    accent: '#FF9933'
  },
  goodFriday: {
    Lead: Dove,
    Trail: Blossom,
    Motif: Blossom,
    bar: 'promo-bar-spring',
    confetti: 'petals',
    ink: '#5B3B6E',
    inkSoft: '#F6EFFA',
    ring: '#DCC9E8',
    accent: '#F7D4DD'
  },
  independence: {
    Lead: Kite,
    Trail: Tricolour,
    Motif: Kite,
    bar: 'promo-bar-india',
    confetti: 'kites',
    ink: '#13693C',
    inkSoft: '#EDF8F0',
    ring: '#BFE3CB',
    accent: '#FF9933'
  }
};

export const FALLBACK_THEME = { Lead: SaleTag, Trail: Bells, Motif: SaleTag, bar: 'promo-bar-year-end', confetti: 'snow', ink: '#9B1C1F', inkSoft: '#FDECEC', ring: '#F5C2C3', accent: '#FFD166' };

export const themeOf = (sale) => (sale && THEMES[sale.theme]) || FALLBACK_THEME;
