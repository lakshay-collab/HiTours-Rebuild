import { products as egypt } from '../egyptListingData';
import { products as thailand } from '../thailandListingData';
import { products as vietnam } from '../vietnamListingData';
import { products as malaysia } from '../malaysiaListingData';
import { products as singapore } from '../singaporeListingData';
import { products as kazakhstan } from '../kazakhstanListingData';
import { products as bhutan } from '../bhutanListingData';
import { products as laos } from '../laosListingData';
import { products as japan } from '../japanListingData';
import { products as indonesia } from '../indonesiaListingData';
import { products as china } from '../chinaListingData';
import { products as cambodia } from '../cambodiaListingData';
import { products as italy } from '../italyListingData';
import { products as greece } from '../greeceListingData';
import { products as norway } from '../norwayListingData';
import { products as ireland } from '../irelandListingData';
import { products as finland } from '../finlandListingData';
import { products as sweden } from '../swedenListingData';
import { products as europe } from '../europeListingData';
import { products as sriLanka } from '../sriLankaListingData';

// Country name → that country's holidays listing products (order matters: specific countries before Europe).
export const COUNTRY_PRODUCTS = [
  ['Thailand', thailand], ['Vietnam', vietnam], ['Malaysia', malaysia], ['Singapore', singapore],
  ['Kazakhstan', kazakhstan], ['Bhutan', bhutan], ['Laos', laos], ['Japan', japan], ['Bali', indonesia], ['China', china],
  ['Cambodia', cambodia], ['Sri Lanka', sriLanka], ['Italy', italy],
  ['Greece', greece], ['Norway', norway], ['Ireland', ireland], ['Finland', finland], ['Sweden', sweden], ['Europe', europe], ['Egypt', egypt]
];

export const countryOf = (slug) => (COUNTRY_PRODUCTS.find(([, list]) => list.some((p) => p.slug === slug)) || [])[0] || null;
export const productsOf = (name) => (COUNTRY_PRODUCTS.find(([n]) => n === name) || [])[1] || null;
