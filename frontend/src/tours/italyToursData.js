// Italy has no single-country trip of its own yet: its products are the multi-country Europe
// itineraries that actually visit Italy.
import { europeProducts } from './europeToursData';
import { countriesOfPlaces } from '../holidays/countryOfPlace';

export const italyProducts = europeProducts.filter(Boolean)
  .filter((p) => countriesOfPlaces(p.places).includes('Italy'));
export const italyTours = [];
export const italyBySlug = {};
