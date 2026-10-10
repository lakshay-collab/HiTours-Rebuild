import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { LeadModalProvider } from './components/egypt/LeadModalProvider';
import Home from './pages/Home';
import EgyptHolidays from './pages/EgyptHolidays';
import EgyptDetail from './pages/EgyptDetail';
import AsiaListing from './pages/AsiaListing';
import { VietnamHolidays } from './pages/VietnamListing';
import { SriLankaHolidays } from './pages/SriLankaListing';
import { MalaysiaHolidays } from './pages/MalaysiaListing';
import { SingaporeHolidays } from './pages/SingaporeListing';
import { KazakhstanHolidays } from './pages/KazakhstanListing';
import { BhutanHolidays } from './pages/BhutanListing';
import { LaosHolidays } from './pages/LaosListing';
import { JapanHolidays } from './pages/JapanListing';
import { IndonesiaHolidays } from './pages/IndonesiaListing';
import { ChinaHolidays } from './pages/ChinaListing';
import { CambodiaHolidays } from './pages/CambodiaListing';
import { PhilippinesHolidays } from './pages/PhilippinesListing';
import { SouthKoreaHolidays } from './pages/SouthKoreaListing';
import { IcelandHolidays } from './pages/IcelandListing';
import { ItalyHolidays } from './pages/ItalyListing';
import { GreeceHolidays } from './pages/GreeceListing';
import { NorwayHolidays } from './pages/NorwayListing';
import { IrelandHolidays } from './pages/IrelandListing';
import { SpainHolidays } from './pages/SpainListing';
import { PortugalHolidays } from './pages/PortugalListing';
import { CroatiaHolidays } from './pages/CroatiaListing';
import { EnglandHolidays } from './pages/EnglandListing';
import { ScotlandHolidays } from './pages/ScotlandListing';
import { FinlandHolidays } from './pages/FinlandListing';
import { SwedenHolidays } from './pages/SwedenListing';
import { ThailandHolidays, ThailandHoneymoons } from './pages/ThailandListing';
import { MaldivesHolidays } from './pages/MaldivesListing';
import TripStyleListing from './pages/TripStyleListing';
import ThemeListing from './pages/ThemeListing';
import About from './pages/About';
import Care from './pages/Care';
import { Terms, Privacy } from './pages/Legal';
import Press from './pages/Press';
import Careers from './pages/Careers';
import Sitemap from './pages/Sitemap';
import OurOffice from './pages/OurOffice';
import EuropeListing, { EuropeHolidays } from './pages/EuropeListing';

const COUNTRY_ROOTS = [
  '/africa/egypt',
  '/asia/vietnam',
  '/asia/sri-lanka',
  '/asia/malaysia',
  '/asia/singapore',
  '/asia/kazakhstan',
  '/asia/bhutan',
  '/asia/laos',
  '/asia/japan',
  '/asia/indonesia',
  '/asia/china',
  '/asia/cambodia',
  '/asia/philippines',
  '/asia/south-korea',
  '/europe/iceland',
  '/europe/italy',
  '/europe/greece',
  '/europe/norway',
  '/europe/ireland',
  '/europe/spain',
  '/europe/portugal',
  '/europe/croatia',
  '/europe/england',
  '/europe/scotland',
  '/europe/finland',
  '/europe/sweden',
  '/asia/thailand',
  '/asia/maldives',
];

const StyleRedirect = () => <Navigate to={`/africa/egypt/holidays/${useParams().style}`} replace />;

// Legacy German slugs (/europa, /asien, /afrika/aegypten) now redirect to their English equivalents.
const LEGACY_PREFIXES = [['/europa', '/europe'], ['/asien', '/asia'], ['/afrika/aegypten', '/africa/egypt']];
const LegacyRedirect = () => {
  const { pathname, search } = useLocation();
  const match = LEGACY_PREFIXES.find(([from]) => pathname === from || pathname.startsWith(`${from}/`));
  if (!match) return <Navigate to="/" replace />;
  return <Navigate to={`${match[1]}${pathname.slice(match[0].length)}${search}`} replace />;
};

// Reset scroll to the top on every route change (hash links keep their in-page target).
// Runs before paint and re-asserts on the next two frames: lazily measured sections (galleries,
// sticky sidebars) grow the page after the first commit and the browser otherwise keeps the
// previous scroll offset, dropping you into the middle of a trip page.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    if (hash) return undefined;
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    const a = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
    });
    return () => cancelAnimationFrame(a);
  }, [pathname, hash]);
  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <WhatsAppWidget />
        <LeadModalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          {COUNTRY_ROOTS.map((p) => <Route key={p} path={p} element={<Navigate to={`${p}/holidays`} replace />} />)}
          <Route path="/africa/egypt/holidays" element={<EgyptHolidays />} />
          <Route path="/africa/egypt/holidays/:style" element={<EgyptHolidays />} />
          <Route path="/africa/egypt/travel-style/:style" element={<StyleRedirect />} />
          <Route path="/africa/egypt/:slug" element={<EgyptDetail />} />
          <Route path="/asia" element={<AsiaListing />} />
          <Route path="/asia/vietnam/holidays" element={<VietnamHolidays />} />
          <Route path="/asia/vietnam/holidays/:style" element={<VietnamHolidays />} />
          <Route path="/asia/sri-lanka/holidays" element={<SriLankaHolidays />} />
          <Route path="/asia/sri-lanka/holidays/:style" element={<SriLankaHolidays />} />
          <Route path="/asia/malaysia/holidays" element={<MalaysiaHolidays />} />
          <Route path="/asia/malaysia/holidays/:style" element={<MalaysiaHolidays />} />
          <Route path="/asia/singapore/holidays" element={<SingaporeHolidays />} />
          <Route path="/asia/singapore/holidays/:style" element={<SingaporeHolidays />} />
          <Route path="/asia/kazakhstan/holidays" element={<KazakhstanHolidays />} />
          <Route path="/asia/kazakhstan/holidays/:style" element={<KazakhstanHolidays />} />
          <Route path="/asia/bhutan/holidays" element={<BhutanHolidays />} />
          <Route path="/asia/bhutan/holidays/:style" element={<BhutanHolidays />} />
          <Route path="/asia/laos/holidays" element={<LaosHolidays />} />
          <Route path="/asia/laos/holidays/:style" element={<LaosHolidays />} />
          <Route path="/asia/japan/holidays" element={<JapanHolidays />} />
          <Route path="/asia/japan/holidays/:style" element={<JapanHolidays />} />
          <Route path="/asia/indonesia/holidays" element={<IndonesiaHolidays />} />
          <Route path="/asia/indonesia/holidays/:style" element={<IndonesiaHolidays />} />
          <Route path="/asia/china/holidays" element={<ChinaHolidays />} />
          <Route path="/asia/china/holidays/:style" element={<ChinaHolidays />} />
          <Route path="/asia/cambodia/holidays" element={<CambodiaHolidays />} />
          <Route path="/asia/cambodia/holidays/:style" element={<CambodiaHolidays />} />
          <Route path="/asia/philippines/holidays" element={<PhilippinesHolidays />} />
          <Route path="/asia/philippines/holidays/:style" element={<PhilippinesHolidays />} />
          <Route path="/asia/south-korea/holidays" element={<SouthKoreaHolidays />} />
          <Route path="/asia/south-korea/holidays/:style" element={<SouthKoreaHolidays />} />
          <Route path="/europe" element={<EuropeListing />} />
          <Route path="/europe/holidays" element={<EuropeHolidays />} />
          <Route path="/europe/holidays/:style" element={<EuropeHolidays />} />
          <Route path="/europe/iceland/holidays" element={<IcelandHolidays />} />
          <Route path="/europe/iceland/holidays/:style" element={<IcelandHolidays />} />
          <Route path="/europe/italy/holidays" element={<ItalyHolidays />} />
          <Route path="/europe/italy/holidays/:style" element={<ItalyHolidays />} />
          <Route path="/europe/greece/holidays" element={<GreeceHolidays />} />
          <Route path="/europe/greece/holidays/:style" element={<GreeceHolidays />} />
          <Route path="/europe/norway/holidays" element={<NorwayHolidays />} />
          <Route path="/europe/norway/holidays/:style" element={<NorwayHolidays />} />
          <Route path="/europe/ireland/holidays" element={<IrelandHolidays />} />
          <Route path="/europe/ireland/holidays/:style" element={<IrelandHolidays />} />
          <Route path="/europe/spain/holidays" element={<SpainHolidays />} />
          <Route path="/europe/spain/holidays/:style" element={<SpainHolidays />} />
          <Route path="/europe/portugal/holidays" element={<PortugalHolidays />} />
          <Route path="/europe/portugal/holidays/:style" element={<PortugalHolidays />} />
          <Route path="/europe/croatia/holidays" element={<CroatiaHolidays />} />
          <Route path="/europe/croatia/holidays/:style" element={<CroatiaHolidays />} />
          <Route path="/europe/england/holidays" element={<EnglandHolidays />} />
          <Route path="/europe/england/holidays/:style" element={<EnglandHolidays />} />
          <Route path="/europe/scotland/holidays" element={<ScotlandHolidays />} />
          <Route path="/europe/scotland/holidays/:style" element={<ScotlandHolidays />} />
          <Route path="/europe/finland/holidays" element={<FinlandHolidays />} />
          <Route path="/europe/finland/holidays/:style" element={<FinlandHolidays />} />
          <Route path="/europe/sweden/holidays" element={<SwedenHolidays />} />
          <Route path="/europe/sweden/holidays/:style" element={<SwedenHolidays />} />
          <Route path="/europe/:slug" element={<EgyptDetail />} />
          <Route path="/asia/thailand/holidays" element={<ThailandHolidays />} />
          <Route path="/asia/thailand/holidays/:style" element={<ThailandHolidays />} />
          <Route path="/asia/thailand/honeymoons" element={<ThailandHoneymoons />} />
          <Route path="/asia/maldives/holidays" element={<MaldivesHolidays />} />
          <Route path="/asia/maldives/holidays/:style" element={<MaldivesHolidays />} />
          <Route path="/asia/:slug" element={<EgyptDetail />} />
          <Route path="/trip-styles/:slug" element={<TripStyleListing />} />
          <Route path="/themes/:slug" element={<ThemeListing />} />
          <Route path="/about" element={<About />} />
          <Route path="/care" element={<Care />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/press" element={<Press />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/our-office" element={<OurOffice />} />
          <Route path="/europa/*" element={<LegacyRedirect />} />
          <Route path="/asien/*" element={<LegacyRedirect />} />
          <Route path="/afrika/aegypten/*" element={<LegacyRedirect />} />
          <Route path="/europa" element={<LegacyRedirect />} />
          <Route path="/asien" element={<LegacyRedirect />} />
          <Route path="/afrika/aegypten" element={<LegacyRedirect />} />
        </Routes>
        </LeadModalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
