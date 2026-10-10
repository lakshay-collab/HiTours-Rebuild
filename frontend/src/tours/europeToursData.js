// Adapters: Europe multi-country packages → listing cards + detail-template data (shared createAdapters from vietnamToursData).
import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../europePackages';
import { italyAndSwitzerlandRomeVeniceTitlisProduct } from './italyAndSwitzerlandRomeVeniceTitlisData';
import { parisAndSwitzerlandEiffelRigiProduct } from './parisAndSwitzerlandEiffelRigiData';
import { westernEuropeGroupTourAlpsAmsterdamProduct } from './westernEuropeGroupTourAlpsAmsterdamData';
import { switzerlandItalyHoneymoonGondolaProduct } from './switzerlandItalyHoneymoonGondolaData';
import { romeFlorenceParisHoneymoonProduct } from './romeFlorenceParisHoneymoonData';

const { toProduct, build } = createAdapters({
  cityImages, base: '/europa', ctaHref: '/l/europe/enquiry/passengers/', cruiseCity: '—',
  expert: { name: 'Sharon', image: '/experts/sharon.webp', role: 'Europe expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Europe', href: '/europa' }]
});

export const europeProducts = [, italyAndSwitzerlandRomeVeniceTitlisProduct, parisAndSwitzerlandEiffelRigiProduct, westernEuropeGroupTourAlpsAmsterdamProduct, switzerlandItalyHoneymoonGondolaProduct, romeFlorenceParisHoneymoonProduct];
export const europeTours = packages.map(build);
export const europeBySlug = Object.fromEntries(europeTours.map((t) => [t.detail.slug, t]));
