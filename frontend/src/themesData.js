// Themes mega-menu data for Hi Tours. Travel styles clubbed under thematic groups, each with a picture.
import { destinations } from './destinationsData';
import { themeHref } from './catalog';

const pic = (region, name) => destinations[region].find((d) => d.name === name).src;

export const themeGroups = [
  {
    key: 'adventure',
    title: 'Adventure',
    items: [
      { label: 'Northern Lights', href: themeHref('Northern Lights'), image: pic('Europe', 'Iceland') },
      { label: 'Wildlife & Safari', href: themeHref('Wildlife & Safari'), image: pic('Africa', 'Kenya') },
      { label: 'Trekking & Hiking', href: themeHref('Trekking & Hiking'), image: pic('South America', 'Peru') },
      { label: 'Diving & Snorkelling', href: themeHref('Diving & Snorkelling'), image: pic('Asia', 'Maldives') },
      { label: 'Desert & Dunes', href: themeHref('Desert & Dunes'), image: pic('Africa', 'Namibia') }
    ]
  },
  {
    key: 'travel-styles',
    title: 'Travel styles',
    items: [
      { label: 'Honeymoons', href: themeHref('Honeymoons'), image: pic('Asia', 'Indonesia') },
      { label: 'Romantic escapes', href: themeHref('Romantic escapes'), image: pic('Europe', 'Greece') },
      { label: 'Solo travel', href: themeHref('Solo travel'), image: pic('Asia', 'Japan') },
      { label: 'Family holidays', href: themeHref('Family holidays'), image: pic('Asia', 'Thailand') },
      { label: 'Group & friends', href: themeHref('Group & friends'), image: pic('Central America', 'Costa Rica') },
      { label: 'Luxury', href: themeHref('Luxury'), image: pic('Middle East', 'United Arab Emirates') }
    ]
  },
  {
    key: 'culture-cities',
    title: 'Culture & cities',
    items: [
      { label: 'Culture & heritage', href: themeHref('Culture & heritage'), image: pic('Africa', 'Egypt') },
      { label: 'City breaks', href: themeHref('City breaks'), image: pic('Europe', 'England') },
      { label: 'Food & culinary', href: themeHref('Food & culinary'), image: pic('Europe', 'Italy') },
      { label: 'Short trips', href: themeHref('Short trips'), image: pic('Asia', 'Sri Lanka') }
    ]
  },
  {
    key: 'nature-water',
    title: 'Nature & water',
    items: [
      { label: 'Beach & relaxation', href: themeHref('Beach & relaxation'), image: pic('Africa', 'Mauritius') },
      { label: 'Nile & river cruises', href: themeHref('Nile & river cruises'), image: pic('Asia', 'Vietnam') },
      { label: 'Islands & lagoons', href: themeHref('Islands & lagoons'), image: pic('Asia', 'Philippines') },
      { label: 'Lakes & mountains', href: themeHref('Lakes & mountains'), image: pic('North America', 'Canada') }
    ]
  }
];
