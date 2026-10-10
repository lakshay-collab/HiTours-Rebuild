// Adapters: NEW Thailand packages → listing cards + detail-template data (reuses the shared createAdapters).
import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../thailandPackages';
import { bestOfThailandSingaporeMalaysiaHongKongProduct } from './bestOfThailandSingaporeMalaysiaHongKongData';
import { bestOfPhuketKrabiBangkokProduct } from './bestOfPhuketKrabiBangkokData';
import { luxuryBangkokPattayaEscapeProduct } from './luxuryBangkokPattayaEscapeData';
import { phuketPhiPhiPartyEscapeProduct } from './phuketPhiPhiPartyEscapeData';
import { phuketKohSamuiBeachEscapeProduct } from './phuketKohSamuiBeachEscapeData';
import { islandTrailsPhuketSamuiKrabiProduct } from './islandTrailsPhuketSamuiKrabiData';
import { grandBangkokPhuketKrabiProduct } from './grandBangkokPhuketKrabiData';
import { romanticKrabiSamuiPhuketProduct } from './romanticKrabiSamuiPhuketData';
import { bestOfThailandMalaysiaProduct } from './bestOfThailandMalaysiaData';
import { coastalMagicPhuketKrabiProduct } from './coastalMagicPhuketKrabiData';
import { honeymoonTrailPhuketKrabiSamuiProduct } from './honeymoonTrailPhuketKrabiSamuiData';
import { baliPhuketIslandEscapeProduct } from './baliPhuketIslandEscapeData';
import { classicKrabiPhuketHolidayProduct } from './classicKrabiPhuketHolidayData';
import { bestOfPattayaBangkokPhuketProduct } from './bestOfPattayaBangkokPhuketData';
import { luxuryPhuketSamuiKrabiProduct } from './luxuryPhuketSamuiKrabiData';
import { bestOfSingaporeThailandProduct } from './bestOfSingaporeThailandData';
import { grandVietnamCambodiaThailandProduct } from './grandVietnamCambodiaThailandData';
import { bestOfThailandSingaporeMalaysiaBaliProduct } from './bestOfThailandSingaporeMalaysiaBaliData';
import { baliAndPhuketHolidayProduct } from './baliAndPhuketHolidayData';
import { thailandCambodiaVietnamTenProduct } from './thailandCambodiaVietnamTenData';
import { indochinaAndThailandGrandProduct } from './indochinaAndThailandGrandData';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asia', ctaHref: '/l/thailand/enquiry/passengers/', cruiseCity: '—',
  expert: { name: 'Ananya Iyer', image: '/team/asia-2.webp', role: 'Thailand expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/#destinations' }, { label: 'Asia', href: '/asia' }, { label: 'Thailand', href: '/asia/thailand' }]
});

export const thailandProducts = [...packages.map(toProduct), bestOfThailandSingaporeMalaysiaHongKongProduct, bestOfPhuketKrabiBangkokProduct, luxuryBangkokPattayaEscapeProduct, phuketPhiPhiPartyEscapeProduct, phuketKohSamuiBeachEscapeProduct, islandTrailsPhuketSamuiKrabiProduct, grandBangkokPhuketKrabiProduct, romanticKrabiSamuiPhuketProduct, bestOfThailandMalaysiaProduct, coastalMagicPhuketKrabiProduct, honeymoonTrailPhuketKrabiSamuiProduct, baliPhuketIslandEscapeProduct, classicKrabiPhuketHolidayProduct, bestOfPattayaBangkokPhuketProduct, luxuryPhuketSamuiKrabiProduct, bestOfSingaporeThailandProduct, grandVietnamCambodiaThailandProduct, bestOfThailandSingaporeMalaysiaBaliProduct, baliAndPhuketHolidayProduct, thailandCambodiaVietnamTenProduct, indochinaAndThailandGrandProduct];
export const thailandTours = packages.map(build);
export const thailandBySlug = Object.fromEntries(thailandTours.map((t) => [t.detail.slug, t]));
