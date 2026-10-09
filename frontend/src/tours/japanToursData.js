import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../japanPackages';
import { discoverJapanFujiKyotoProduct } from './discoverJapanFujiKyotoData';
import { jewelsOfJapanMountFujiProduct } from './jewelsOfJapanMountFujiData';
import { legendsOfJapanHiroshimaProduct } from './legendsOfJapanHiroshimaData';
import { japanUnveiledShortBreakProduct } from './japanUnveiledShortBreakData';
import { bestOfJapanThemeParksProduct } from './bestOfJapanThemeParksData';
import { bestOfJapanShrinesSkylinesProduct } from './bestOfJapanShrinesSkylinesData';
import { urbanWondersTokyoOsakaProduct } from './urbanWondersTokyoOsakaData';
import { treasuresOfJapanKyotoProduct } from './treasuresOfJapanKyotoData';
import { taleOfTwoCitiesJapanProduct } from './taleOfTwoCitiesJapanData';
import { japanThroughTimeHistoricTrailsProduct } from './japanThroughTimeHistoricTrailsData';
import { japanRomanticEscapeImperialProduct } from './japanRomanticEscapeImperialData';
import { classicWondersJapanGroupTourProduct } from './classicWondersJapanGroupTourData';
import { japanCulturalTrailsGroupTourProduct } from './japanCulturalTrailsGroupTourData';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/japan/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Aiko", image: '/experts/riya.webp', role: 'Japan expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: "Japan", href: '/asien/japan' }]
});

export const japanProducts = [ discoverJapanFujiKyotoProduct, jewelsOfJapanMountFujiProduct, legendsOfJapanHiroshimaProduct, japanUnveiledShortBreakProduct, bestOfJapanThemeParksProduct, bestOfJapanShrinesSkylinesProduct, urbanWondersTokyoOsakaProduct, treasuresOfJapanKyotoProduct, taleOfTwoCitiesJapanProduct, japanThroughTimeHistoricTrailsProduct, japanRomanticEscapeImperialProduct, classicWondersJapanGroupTourProduct, japanCulturalTrailsGroupTourProduct];
export const japanTours = packages.map(build);
export const japanBySlug = Object.fromEntries(japanTours.map((t) => [t.detail.slug, t]));
