import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../cambodiaPackages';
import { grandVietnamCambodiaThailandProduct } from './grandVietnamCambodiaThailandData';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/cambodia/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Sopheak", image: '/experts/riya.webp', role: 'Cambodia expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: "Cambodia", href: '/asien/cambodia' }]
});

export const cambodiaProducts = [...packages.map(toProduct), grandVietnamCambodiaThailandProduct];
export const cambodiaTours = packages.map(build);
export const cambodiaBySlug = Object.fromEntries(cambodiaTours.map((t) => [t.detail.slug, t]));
