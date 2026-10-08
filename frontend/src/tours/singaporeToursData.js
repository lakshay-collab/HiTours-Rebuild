// Adapters: Singapore packages → listing cards + detail-template data (reuses the shared createAdapters from vietnamToursData).
import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../singaporePackages';
import { bestOfSingaporeThailandProduct } from './bestOfSingaporeThailandData';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/singapore/enquiry/passengers/', cruiseCity: '—',
  expert: { name: 'Nisha Rao', image: '/experts/riya.webp', role: 'Singapore expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: 'Singapore', href: '/asien/singapore' }]
});

export const singaporeProducts = [...packages.map(toProduct), bestOfSingaporeThailandProduct];
export const singaporeTours = packages.map(build);
export const singaporeBySlug = Object.fromEntries(singaporeTours.map((t) => [t.detail.slug, t]));
