import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../portugalPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/europe', ctaHref: '/l/portugal/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Inês", image: '/experts/riya.webp', role: 'Portugal expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/#destinations' }, { label: 'Europe', href: '#' }, { label: "Portugal", href: '/europe/portugal' }]
});

export const portugalProducts = packages.map(toProduct);
export const portugalTours = packages.map(build);
export const portugalBySlug = Object.fromEntries(portugalTours.map((t) => [t.detail.slug, t]));
