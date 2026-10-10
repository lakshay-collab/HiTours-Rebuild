import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../chinaPackages';
import { glimpseOfShanghaiBreakProduct } from './glimpseOfShanghaiBreakData';
import { ancientWondersBeijingProduct } from './ancientWondersBeijingData';
import { highlightsOfBeijingShortProduct } from './highlightsOfBeijingShortData';
import { glimpseOfBeijingUniversalProduct } from './glimpseOfBeijingUniversalData';
import { grandShanghaiDisneylandHolidayProduct } from './grandShanghaiDisneylandHolidayData';
import { classicShanghaiGreatWallBreakProduct } from './classicShanghaiGreatWallBreakData';
import { highlightsOfShanghaiDisneylandProduct } from './highlightsOfShanghaiDisneylandData';
import { bestOfShanghaiDisneyAndWallProduct } from './bestOfShanghaiDisneyAndWallData';
import { bestOfBeijingWallAndUniversalProduct } from './bestOfBeijingWallAndUniversalData';
import { discoverBeijingShortBreakProduct } from './discoverBeijingShortBreakData';
import { gemsOfChinaShanghaiXianProduct } from './gemsOfChinaShanghaiXianData';
import { bestOfChinaGoldenTriangleProduct } from './bestOfChinaGoldenTriangleData';
import { discoverChinaBeijingShanghaiProduct } from './discoverChinaBeijingShanghaiData';
import { highlightsOfChinaThreeCitiesProduct } from './highlightsOfChinaThreeCitiesData';
import { grandChinaYangtzeCruiseProduct } from './grandChinaYangtzeCruiseData';
import { bestOfChinaAndJapanGrandTourProduct } from './bestOfChinaAndJapanGrandTourData';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asia', ctaHref: '/l/china/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Mei", image: '/experts/riya.webp', role: 'China expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asia' }, { label: "China", href: '/asia/china' }]
});

export const chinaProducts = [glimpseOfShanghaiBreakProduct, ancientWondersBeijingProduct, highlightsOfBeijingShortProduct, glimpseOfBeijingUniversalProduct, grandShanghaiDisneylandHolidayProduct, classicShanghaiGreatWallBreakProduct, highlightsOfShanghaiDisneylandProduct, bestOfShanghaiDisneyAndWallProduct, bestOfBeijingWallAndUniversalProduct, discoverBeijingShortBreakProduct, gemsOfChinaShanghaiXianProduct, bestOfChinaGoldenTriangleProduct, discoverChinaBeijingShanghaiProduct, highlightsOfChinaThreeCitiesProduct, grandChinaYangtzeCruiseProduct, bestOfChinaAndJapanGrandTourProduct];
export const chinaTours = packages.map(build);
export const chinaBySlug = Object.fromEntries(chinaTours.map((t) => [t.detail.slug, t]));
