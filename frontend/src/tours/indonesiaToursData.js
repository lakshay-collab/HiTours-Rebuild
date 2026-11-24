import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../indonesiaPackages';
import { baliPhuketIslandEscapeProduct } from './baliPhuketIslandEscapeData';
import { kutaHotelOnlyProduct } from '../grouptours/kutaHotelOnlyData';
import { bestOfBaliUbudAndKutaProduct } from './bestOfBaliUbudAndKutaData';
import { magicalBaliHolidayWithFlightsProduct } from './magicalBaliHolidayWithFlightsData';
import { luxuryBaliEscapeMountBaturProduct } from './luxuryBaliEscapeMountBaturData';
import { baliHoneymoonCandlelightDinnerProduct } from './baliHoneymoonCandlelightDinnerData';
import { romanticBaliNusaPenidaProduct } from './romanticBaliNusaPenidaData';
import { baliAdventureRaftingNusaPenidaProduct } from './baliAdventureRaftingNusaPenidaData';
import { baliCouplesEscapeNightSafariProduct } from './baliCouplesEscapeNightSafariData';
import { baliHoneymoonSeminyakProduct } from './baliHoneymoonSeminyakData';
import { singaporeBaliHoneymoonProduct } from './singaporeBaliHoneymoonData';
import { romanticBaliSunsetCruiseProduct } from './romanticBaliSunsetCruiseData';
import { bestOfBaliFlightsNusaPenidaProduct } from './bestOfBaliFlightsNusaPenidaData';
import { grandBaliSafariKecakProduct } from './grandBaliSafariKecakData';
import { shortBaliEscapeFlightsProduct } from './shortBaliEscapeFlightsData';
import { classicBaliHoneymoonSwingProduct } from './classicBaliHoneymoonSwingData';
import { highlightsOfBaliNusaPenidaUluwatuProduct } from './highlightsOfBaliNusaPenidaUluwatuData';
import { bestOfBaliSunsetCruiseProduct } from './bestOfBaliSunsetCruiseData';
import { romanticBaliVintageCarProduct } from './romanticBaliVintageCarData';
import { baliEscapeBeachClubAtvProduct } from './baliEscapeBeachClubAtvData';
import { singaporeMalaysiaBaliHoneymoonProduct } from './singaporeMalaysiaBaliHoneymoonData';
import { baliSingaporeFamilyHolidayProduct } from './baliSingaporeFamilyHolidayData';
import { classicBaliGroupHolidayProduct } from './classicBaliGroupHolidayData';
import { baliFamilyHolidayNusaPenidaProduct } from './baliFamilyHolidayNusaPenidaData';
import { hongKongBaliHolidayProduct } from './hongKongBaliHolidayData';
import { baliFamilyEscapeBaturJeepProduct } from './baliFamilyEscapeBaturJeepData';
import { grandSingaporeMalaysiaBaliProduct } from './grandSingaporeMalaysiaBaliData';
import { bestOfThailandSingaporeMalaysiaBaliProduct } from './bestOfThailandSingaporeMalaysiaBaliData';
import { romanticBaliSidemenSeminyakProduct } from './romanticBaliSidemenSeminyakData';
import { baliFamilyFlightsSafariProduct } from './baliFamilyFlightsSafariData';
import { classicBaliBreakRaftingProduct } from './classicBaliBreakRaftingData';
import { baliHoneymoonRooftopDinnerProduct } from './baliHoneymoonRooftopDinnerData';
import { baliCouplesEscapeRaftingProduct } from './baliCouplesEscapeRaftingData';
import { grandBaliCouplesNusaPenidaProduct } from './grandBaliCouplesNusaPenidaData';
import { grandBaliFamilyWaterbomProduct } from './grandBaliFamilyWaterbomData';
import { baliBucketListFlightsProduct } from './baliBucketListFlightsData';
import { baliCouplesHolidayFlightsProduct } from './baliCouplesHolidayFlightsData';
import { baliAndPhuketHolidayProduct } from './baliAndPhuketHolidayData';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asia', ctaHref: '/l/indonesia/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Putu", image: '/experts/riya.webp', role: 'Bali expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/#destinations' }, { label: 'Asia', href: '/asia' }, { label: "Bali", href: '/asia/bali' }]
});

export const indonesiaProducts = [kutaHotelOnlyProduct, baliPhuketIslandEscapeProduct, bestOfBaliUbudAndKutaProduct, magicalBaliHolidayWithFlightsProduct, luxuryBaliEscapeMountBaturProduct, baliHoneymoonCandlelightDinnerProduct, romanticBaliNusaPenidaProduct, baliAdventureRaftingNusaPenidaProduct, baliCouplesEscapeNightSafariProduct, baliHoneymoonSeminyakProduct, singaporeBaliHoneymoonProduct, romanticBaliSunsetCruiseProduct, bestOfBaliFlightsNusaPenidaProduct, grandBaliSafariKecakProduct, shortBaliEscapeFlightsProduct, classicBaliHoneymoonSwingProduct, highlightsOfBaliNusaPenidaUluwatuProduct, bestOfBaliSunsetCruiseProduct, romanticBaliVintageCarProduct, baliEscapeBeachClubAtvProduct, singaporeMalaysiaBaliHoneymoonProduct, baliSingaporeFamilyHolidayProduct, classicBaliGroupHolidayProduct, baliFamilyHolidayNusaPenidaProduct, hongKongBaliHolidayProduct, baliFamilyEscapeBaturJeepProduct, grandSingaporeMalaysiaBaliProduct, bestOfThailandSingaporeMalaysiaBaliProduct, romanticBaliSidemenSeminyakProduct, baliFamilyFlightsSafariProduct, classicBaliBreakRaftingProduct, baliHoneymoonRooftopDinnerProduct, baliCouplesEscapeRaftingProduct, grandBaliCouplesNusaPenidaProduct, grandBaliFamilyWaterbomProduct, baliBucketListFlightsProduct, baliCouplesHolidayFlightsProduct, baliAndPhuketHolidayProduct];
export const indonesiaTours = packages.map(build);
export const indonesiaBySlug = Object.fromEntries(indonesiaTours.map((t) => [t.detail.slug, t]));
