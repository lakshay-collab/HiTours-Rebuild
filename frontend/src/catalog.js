// Global package catalogue + keyword-based theme taxonomy. Themes filter ALL destinations' packages.
import { products as egyptProducts } from './egyptListingData';
import { vietnamProducts } from './tours/vietnamToursData';
import { thailandProducts } from './tours/thailandToursData';
import { singaporeProducts } from './tours/singaporeToursData';
import { malaysiaProducts } from './tours/malaysiaToursData';
import { kazakhstanProducts } from './tours/kazakhstanToursData';
import { bhutanProducts } from './tours/bhutanToursData';
import { laosProducts } from './tours/laosToursData';
import { japanProducts } from './tours/japanToursData';
import { indonesiaProducts } from './tours/indonesiaToursData';
import { chinaProducts } from './tours/chinaToursData';
import { cambodiaProducts } from './tours/cambodiaToursData';
import { italyProducts } from './tours/italyToursData';
import { greeceProducts } from './tours/greeceToursData';
import { norwayProducts } from './tours/norwayToursData';
import { irelandProducts } from './tours/irelandToursData';
import { finlandProducts } from './tours/finlandToursData';
import { swedenProducts } from './tours/swedenToursData';
import { sriLankaProducts } from './tours/sriLankaToursData';

const SOURCES = [
  ['Egypt', '/africa/egypt', egyptProducts], ['Vietnam', '/asia/vietnam', vietnamProducts], ['Thailand', '/asia/thailand', thailandProducts], ['Singapore', '/asia/singapore', singaporeProducts], ['Malaysia', '/asia/malaysia', malaysiaProducts],
  ['Kazakhstan', '/asia/kazakhstan', kazakhstanProducts], ['Bhutan', '/asia/bhutan', bhutanProducts], ['Laos', '/asia/laos', laosProducts], ['Japan', '/asia/japan', japanProducts], ['Bali', '/asia/bali', indonesiaProducts],
  ['China', '/asia/china', chinaProducts], ['Cambodia', '/asia/cambodia', cambodiaProducts], ['Italy', '/europe/italy', italyProducts], ['Greece', '/europe/greece', greeceProducts],
  ['Norway', '/europe/norway', norwayProducts], ['Ireland', '/europe/ireland', irelandProducts], ['Finland', '/europe/finland', finlandProducts], ['Sweden', '/europe/sweden', swedenProducts],
  ['Sri Lanka', '/asia/sri-lanka', sriLankaProducts],
];

// Every package across the site, annotated with its destination (card hrefs already point at the right package page).
export const catalog = SOURCES.flatMap(([destination, destinationHref, list]) =>
  list.map((p) => ({ ...p, destination, destinationHref, href: p.href || `/africa/egypt/${p.slug}` }))
);

// Theme → keyword matcher (tested against package styles, tag, title, alt and destination).
export const THEMES = [
  { slug: 'northern-lights', label: 'Northern Lights', group: 'Adventure', match: /northern lights|aurora|arctic|lapland|tromsø|tromso|rovaniemi|saariselkä|abisko|iceland|icehotel/i },
  { slug: 'wildlife-safari', label: 'Wildlife & Safari', group: 'Adventure', match: /wildlife|safari|national park|elephant|leopard|whale|manta|jungle|yala|udawalawe|chitwan|kaziranga|komodo|turtle|bear sanctuary/i },
  { slug: 'trekking-hiking', label: 'Trekking & Hiking', group: 'Adventure', match: /trek|hik|highlands|glacier|volcano|mount |mountain|gorge|lake district|skye|glencoe|cairngorm|tiger.?s nest|sapa|hill station|tea country/i },
  { slug: 'diving-snorkelling', label: 'Diving & Snorkelling', group: 'Adventure', match: /div(e|ing)|snorkel|reef|coral|manta|red sea|maldives|coron|el nido|nusa penida|koh rong|sharm|hurghada/i },
  { slug: 'desert-dunes', label: 'Desert & Dunes', group: 'Adventure', match: /desert|dune|sahara|oasis|camel|bedouin|siwa|wadi|charyn|mangystau|kazakhstan|pyramid/i },
  { slug: 'honeymoons', label: 'Honeymoons', group: 'Travel styles', match: /honeymoon|romantic|couple/i },
  { slug: 'romantic-escapes', label: 'Romantic escapes', group: 'Travel styles', match: /romantic|honeymoon|sunset|luxury|private island|villa|santorini|amalfi|venice|maldives/i },
  { slug: 'solo-travel', label: 'Solo travel', group: 'Travel styles', match: /solo|explorer|short escape|city break|culture|highlights/i },
  { slug: 'family-holidays', label: 'Family holidays', group: 'Travel styles', match: /family|kids|children|grand tour|adventure/i },
  { slug: 'group-friends', label: 'Group & friends', group: 'Travel styles', match: /group|friends|explorer|adventure|festival|festive|island.?hopping/i },
  { slug: 'luxury', label: 'Luxury', group: 'Travel styles', match: /luxury|premium|5-star|five-star|grand|palace|private|refined|sophistication/i },
  { slug: 'culture-heritage', label: 'Culture & heritage', group: 'Culture & cities', match: /culture|heritage|temple|pyramid|pharaoh|ancient|unesco|palace|fort|monastery|history|classic|highlights|grand tour|angkor|kyoto|rome|athens|cairo|luxor|petra|bagan/i },
  { slug: 'city-breaks', label: 'City breaks', group: 'Culture & cities', match: /city|short escape|urban|skyline|tokyo|singapore|dubai|hong kong|bangkok|kuala lumpur|london|paris|lisbon|barcelona|madrid|rome|athens|stockholm|helsinki|oslo|dublin|edinburgh|reykjavik/i },
  { slug: 'food-culinary', label: 'Food & culinary', group: 'Culture & cities', match: /food|culinary|cuisine|gastronom|wine|street food|cooking|tapas|pasta|penang|hoi an|hanoi|kyoto|osaka/i },
  { slug: 'short-trips', label: 'Short trips', group: 'Culture & cities', match: /short|escape|getaway|weekend|express|\b[3-6]d[2-5]n\b/i },
  { slug: 'beach-relaxation', label: 'Beach & relaxation', group: 'Nature & water', match: /beach|relax|retreat|spa|resort|coast|island|lagoon|seminyak|boracay|phuket|krabi|hurghada|red sea|maldives|algarve|amalfi|mallorca|santorini|mykonos|crete|hvar|south coast/i },
  { slug: 'river-cruises', label: 'Nile & river cruises', group: 'Nature & water', match: /cruise|nile|mekong|river|dahabiya|felucca|halong|ha long|li river|douro|fjord|backwater|kerala/i },
  { slug: 'islands-lagoons', label: 'Islands & lagoons', group: 'Nature & water', match: /island|lagoon|archipelago|atoll|maldives|phuket|koh |bali|nusa|palawan|el nido|coron|boracay|santorini|mykonos|crete|hvar|vis|mallorca|madeira|gotland|sri lanka/i },
  { slug: 'lakes-mountains', label: 'Lakes & mountains', group: 'Nature & water', match: /lake|mountain|highland|fjord|alps|glacier|hill station|loch|lake district|lakeland|saimaa|hakone|fuji|bhutan|himalaya|kazakhstan|almaty|kolsai|sapa|ella|nuwara/i },
];

export const themeBySlug = Object.fromEntries(THEMES.map((t) => [t.slug, t]));
export const themeHref = (label) => { const t = THEMES.find((x) => x.label === label); return t ? `/themes/${t.slug}` : '#'; };

const haystack = (p) => [p.title, p.tag, ...(p.styles || []), p.alt, p.destination, p.slug].filter(Boolean).join(' | ');
export const packagesForTheme = (slug) => {
  const t = themeBySlug[slug];
  return t ? catalog.filter((p) => t.match.test(haystack(p))) : [];
};
export const destinationsForTheme = (slug) => [...new Map(packagesForTheme(slug).map((p) => [p.destination, p])).values()];
