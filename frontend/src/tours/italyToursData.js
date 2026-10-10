import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../italyPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/europe', ctaHref: '/l/italy/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Giulia", image: '/experts/riya.webp', role: 'Italy expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/#destinations' }, { label: 'Europe', href: '#' }, { label: "Italy", href: '/europe/italy' }]
});

export const italyProducts = packages.map(toProduct);
export const italyTours = packages.map(build);
export const italyBySlug = Object.fromEntries(italyTours.map((t) => [t.detail.slug, t]));
