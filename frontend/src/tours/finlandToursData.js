import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../finlandPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/europe', ctaHref: '/l/finland/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Aino", image: '/experts/riya.webp', role: 'Finland expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/#destinations' }, { label: 'Europe', href: '#' }, { label: "Finland", href: '/europe/finland' }]
});

export const finlandProducts = packages.map(toProduct);
export const finlandTours = packages.map(build);
export const finlandBySlug = Object.fromEntries(finlandTours.map((t) => [t.detail.slug, t]));
