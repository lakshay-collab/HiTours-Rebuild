import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../scotlandPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/europe', ctaHref: '/l/scotland/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Fiona", image: '/experts/riya.webp', role: 'Scotland expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/#destinations' }, { label: 'Europe', href: '#' }, { label: "Scotland", href: '/europe/scotland' }]
});

export const scotlandProducts = packages.map(toProduct);
export const scotlandTours = packages.map(build);
export const scotlandBySlug = Object.fromEntries(scotlandTours.map((t) => [t.detail.slug, t]));
