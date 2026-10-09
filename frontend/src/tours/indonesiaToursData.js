import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../indonesiaPackages';
import { baliPhuketIslandEscapeProduct } from './baliPhuketIslandEscapeData';
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

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/indonesia/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Putu", image: '/experts/riya.webp', role: 'Indonesia expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: "Indonesia", href: '/asien/indonesia' }]
});

export const indonesiaProducts = [...packages.map(toProduct), baliPhuketIslandEscapeProduct, bestOfBaliUbudAndKutaProduct, magicalBaliHolidayWithFlightsProduct, luxuryBaliEscapeMountBaturProduct, baliHoneymoonCandlelightDinnerProduct, romanticBaliNusaPenidaProduct, baliAdventureRaftingNusaPenidaProduct, baliCouplesEscapeNightSafariProduct, baliHoneymoonSeminyakProduct, singaporeBaliHoneymoonProduct, romanticBaliSunsetCruiseProduct, bestOfBaliFlightsNusaPenidaProduct, grandBaliSafariKecakProduct, shortBaliEscapeFlightsProduct, classicBaliHoneymoonSwingProduct, highlightsOfBaliNusaPenidaUluwatuProduct, bestOfBaliSunsetCruiseProduct];
export const indonesiaTours = packages.map(build);
export const indonesiaBySlug = Object.fromEntries(indonesiaTours.map((t) => [t.detail.slug, t]));
