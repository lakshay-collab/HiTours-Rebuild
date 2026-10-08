import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../indonesiaPackages';
import { baliPhuketIslandEscapeProduct } from './baliPhuketIslandEscapeData';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/indonesia/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Putu", image: '/experts/riya.webp', role: 'Indonesia expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: "Indonesia", href: '/asien/indonesia' }]
});

export const indonesiaProducts = [...packages.map(toProduct), baliPhuketIslandEscapeProduct];
export const indonesiaTours = packages.map(build);
export const indonesiaBySlug = Object.fromEntries(indonesiaTours.map((t) => [t.detail.slug, t]));
