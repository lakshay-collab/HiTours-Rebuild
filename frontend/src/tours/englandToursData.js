import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../englandPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/europe', ctaHref: '/l/england/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Oliver", image: '/experts/riya.webp', role: 'England expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/#destinations' }, { label: 'Europe', href: '#' }, { label: "England", href: '/europe/england' }]
});

export const englandProducts = packages.map(toProduct);
export const englandTours = packages.map(build);
export const englandBySlug = Object.fromEntries(englandTours.map((t) => [t.detail.slug, t]));
