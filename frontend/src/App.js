import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import { useLayoutEffect, useEffect } from 'react';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { LeadModalProvider } from './components/egypt/LeadModalProvider';
import Home from './pages/Home';
import EgyptHolidays from './pages/EgyptHolidays';
import EgyptDetail from './pages/EgyptDetail';
import AsiaListing from './pages/AsiaListing';
import { VietnamHolidays } from './pages/VietnamListing';
import { SingaporeHolidays } from './pages/SingaporeListing';
import { KazakhstanHolidays } from './pages/KazakhstanListing';
import { BhutanHolidays } from './pages/BhutanListing';
import { SriLankaHolidays } from './pages/SriLankaListing';
import { JapanHolidays } from './pages/JapanListing';
import { IndonesiaHolidays } from './pages/IndonesiaListing';
import { ChinaHolidays } from './pages/ChinaListing';
import { SouthKoreaHolidays } from './pages/SouthKoreaListing';
import { GreeceHolidays } from './pages/GreeceListing';
import { NorwayHolidays } from './pages/NorwayListing';
import { IrelandHolidays } from './pages/IrelandListing';
import { FinlandHolidays } from './pages/FinlandListing';
import { SwedenHolidays } from './pages/SwedenListing';
import { ThailandHolidays, ThailandHoneymoons } from './pages/ThailandListing';
import TripStyleListing from './pages/TripStyleListing';
import ThemeListing from './pages/ThemeListing';
import About from './pages/About';
import Care from './pages/Care';
import { Terms, Privacy } from './pages/Legal';
import Press from './pages/Press';
import Careers from './pages/Careers';
import OpenPositions from './pages/OpenPositions';
import BookDates from './pages/BookDates';
import BookCheckout from './pages/BookCheckout';
import BookConfirmed from './pages/BookConfirmed';
import GroupTourDetail from './pages/GroupTourDetail';
import GroupThankYou from './pages/GroupConfirmed';
import GroupTourDetailV1 from './pages/v1/GroupTourDetailV1';
import GroupCheckoutV1 from './pages/v1/GroupCheckoutV1';
import GroupConfirmedV1 from './pages/v1/GroupConfirmedV1';
import Sitemap from './pages/Sitemap';
import OurOffice from './pages/OurOffice';
import EuropeListing, { EuropeHolidays } from './pages/EuropeListing';
import EgyptHolidays2 from './pages/EgyptHolidays';
import { asiaHolidays } from './asiaHolidaysData';
import { allTours } from './allToursData';

const AsiaHolidays = () => <EgyptHolidays2 d={asiaHolidays} />;
const AllTours = () => <EgyptHolidays2 d={allTours} />;


const COUNTRY_ROOTS = [
  '/africa/egypt',
  '/asia/vietnam',
  '/asia/singapore',
  '/asia/kazakhstan',
  '/asia/bhutan',
  '/asia/japan',
  '/asia/bali',
  '/asia/china',
  '/asia/south-korea',
  '/asia/sri-lanka',
  '/europe/greece',
  '/europe/norway',
  '/europe/ireland',
  '/europe/finland',
  '/europe/sweden',
  '/asia/thailand',
];

const StyleRedirect = () => <Navigate to={`/africa/egypt/holidays/${useParams().style}`} replace />;

// Legacy German slugs (/europa, /asien, /afrika/aegypten) now redirect to their English equivalents.
const LEGACY_PREFIXES = [['/asia/indonesia', '/asia/bali'], ['/europa', '/europe'], ['/asien', '/asia'], ['/afrika/aegypten', '/africa/egypt'], ['/afrika', '/africa/egypt'], ['/reiseziele', '/']];
const LegacyRedirect = () => {
  const { pathname, search } = useLocation();
  const match = LEGACY_PREFIXES.find(([from]) => pathname === from || pathname.startsWith(`${from}/`));
  if (!match) return <Navigate to="/" replace />;
  const rest = pathname.slice(match[0].length);
  return <Navigate to={match[1] === '/' ? '/' : `${match[1]}${rest}${search}`} replace />;
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

// Fires a Meta Pixel PageView on every route, including the first load.
const PixelPageView = () => {
  const { pathname } = useLocation();
  useEffect(() => { if (window.fbq) window.fbq('track', 'PageView'); }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <PixelPageView />
        <WhatsAppWidget />
        <LeadModalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          {COUNTRY_ROOTS.map((p) => <Route key={p} path={p} element={<Navigate to={`${p}/holidays`} replace />} />)}
          <Route path="/africa/egypt/holidays" element={<EgyptHolidays />} />
          <Route path="/africa/egypt/holidays/:style" element={<EgyptHolidays />} />
          <Route path="/africa/egypt/travel-style/:style" element={<StyleRedirect />} />
          <Route path="/africa/egypt/:slug" element={<EgyptDetail />} />
          <Route path="/asia" element={<Navigate to="/asia/holidays" replace />} />
          <Route path="/asia/holidays" element={<AsiaHolidays />} />
          <Route path="/asia/holidays/:style" element={<AsiaHolidays />} />
          <Route path="/asia/overview" element={<AsiaListing />} />
          <Route path="/asia/vietnam/holidays" element={<VietnamHolidays />} />
          <Route path="/asia/vietnam/holidays/:style" element={<VietnamHolidays />} />
          <Route path="/asia/singapore/holidays" element={<SingaporeHolidays />} />
          <Route path="/asia/singapore/holidays/:style" element={<SingaporeHolidays />} />
          <Route path="/asia/kazakhstan/holidays" element={<KazakhstanHolidays />} />
          <Route path="/asia/kazakhstan/holidays/:style" element={<KazakhstanHolidays />} />
          <Route path="/asia/bhutan/holidays" element={<BhutanHolidays />} />
          <Route path="/asia/bhutan/holidays/:style" element={<BhutanHolidays />} />
          <Route path="/asia/japan/holidays" element={<JapanHolidays />} />
          <Route path="/asia/japan/holidays/:style" element={<JapanHolidays />} />
          <Route path="/asia/bali/holidays" element={<IndonesiaHolidays />} />
          <Route path="/asia/bali/holidays/:style" element={<IndonesiaHolidays />} />
          <Route path="/asia/china/holidays" element={<ChinaHolidays />} />
          <Route path="/asia/china/holidays/:style" element={<ChinaHolidays />} />
          <Route path="/asia/south-korea/holidays" element={<SouthKoreaHolidays />} />
          <Route path="/asia/south-korea/holidays/:style" element={<SouthKoreaHolidays />} />
          <Route path="/asia/sri-lanka/holidays" element={<SriLankaHolidays />} />
          <Route path="/asia/sri-lanka/holidays/:style" element={<SriLankaHolidays />} />
          <Route path="/europe" element={<Navigate to="/europe/holidays" replace />} />
          <Route path="/europe/overview" element={<EuropeListing />} />
          <Route path="/europe/holidays" element={<EuropeHolidays />} />
          <Route path="/europe/holidays/:style" element={<EuropeHolidays />} />
          <Route path="/europe/greece/holidays" element={<GreeceHolidays />} />
          <Route path="/europe/greece/holidays/:style" element={<GreeceHolidays />} />
          <Route path="/europe/norway/holidays" element={<NorwayHolidays />} />
          <Route path="/europe/norway/holidays/:style" element={<NorwayHolidays />} />
          <Route path="/europe/ireland/holidays" element={<IrelandHolidays />} />
          <Route path="/europe/ireland/holidays/:style" element={<IrelandHolidays />} />
          <Route path="/europe/finland/holidays" element={<FinlandHolidays />} />
          <Route path="/europe/finland/holidays/:style" element={<FinlandHolidays />} />
          <Route path="/europe/sweden/holidays" element={<SwedenHolidays />} />
          <Route path="/europe/sweden/holidays/:style" element={<SwedenHolidays />} />
          <Route path="/europe/:slug" element={<EgyptDetail />} />
          <Route path="/asia/thailand/holidays" element={<ThailandHolidays />} />
          <Route path="/asia/thailand/holidays/:style" element={<ThailandHolidays />} />
          <Route path="/asia/thailand/honeymoons" element={<ThailandHoneymoons />} />
          <Route path="/asia/book/:key/dates" element={<BookDates />} />
          <Route path="/asia/book/:key/checkout" element={<BookCheckout />} />
          <Route path="/asia/book/:key/confirmed/:bookingId" element={<BookConfirmed />} />
          <Route path="/asia/book/:slug" element={<EgyptDetail />} />
          <Route path="/asia/group-tours/inside-sri-lanka" element={<GroupTourDetail />} />
          <Route path="/asia/group-tours/inside-sri-lanka/thank-you/:bookingId" element={<GroupThankYou />} />
          <Route path="/asia/group-tours/inside-sri-lanka/v1" element={<GroupTourDetailV1 />} />
          <Route path="/asia/group-tours/inside-sri-lanka/v1/checkout" element={<GroupCheckoutV1 />} />
          <Route path="/asia/group-tours/inside-sri-lanka/v1/confirmed/:bookingId" element={<GroupConfirmedV1 />} />
          <Route path="/asia/:slug" element={<EgyptDetail />} />
          <Route path="/trip-styles/:slug" element={<TripStyleListing />} />
          <Route path="/themes/:slug" element={<ThemeListing />} />
          <Route path="/about" element={<About />} />
          <Route path="/care" element={<Care />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/press" element={<Press />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/open-positions" element={<OpenPositions />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/our-office" element={<OurOffice />} />
          <Route path="/tours" element={<AllTours />} />
          <Route path="/europe/italy/*" element={<Navigate to="/europe/holidays?country=Italy" replace />} />
          <Route path="/europe/italy" element={<Navigate to="/europe/holidays?country=Italy" replace />} />
          <Route path="/asia/cambodia/*" element={<Navigate to="/asia/holidays?country=Cambodia" replace />} />
          <Route path="/asia/cambodia" element={<Navigate to="/asia/holidays?country=Cambodia" replace />} />
          <Route path="/asia/laos/*" element={<Navigate to="/asia/holidays?country=Laos" replace />} />
          <Route path="/asia/laos" element={<Navigate to="/asia/holidays?country=Laos" replace />} />
          <Route path="/asia/malaysia/*" element={<Navigate to="/asia/holidays?country=Malaysia" replace />} />
          <Route path="/asia/malaysia" element={<Navigate to="/asia/holidays?country=Malaysia" replace />} />
          <Route path="/tours/:style" element={<AllTours />} />
          <Route path="/asia/philippines/*" element={<Navigate to="/asia/holidays" replace />} />
          <Route path="/asia/maldives/*" element={<Navigate to="/asia/holidays" replace />} />
          <Route path="/asia/philippines" element={<Navigate to="/asia/holidays" replace />} />
          <Route path="/asia/maldives" element={<Navigate to="/asia/holidays" replace />} />
          <Route path="/europe/iceland/*" element={<Navigate to="/europe/holidays" replace />} />
          <Route path="/europe/spain/*" element={<Navigate to="/europe/holidays" replace />} />
          <Route path="/europe/portugal/*" element={<Navigate to="/europe/holidays" replace />} />
          <Route path="/europe/croatia/*" element={<Navigate to="/europe/holidays" replace />} />
          <Route path="/europe/england/*" element={<Navigate to="/europe/holidays" replace />} />
          <Route path="/europe/scotland/*" element={<Navigate to="/europe/holidays" replace />} />
          <Route path="/europe/iceland" element={<Navigate to="/europe/holidays" replace />} />
          <Route path="/europe/spain" element={<Navigate to="/europe/holidays" replace />} />
          <Route path="/europe/portugal" element={<Navigate to="/europe/holidays" replace />} />
          <Route path="/europe/croatia" element={<Navigate to="/europe/holidays" replace />} />
          <Route path="/europe/england" element={<Navigate to="/europe/holidays" replace />} />
          <Route path="/europe/scotland" element={<Navigate to="/europe/holidays" replace />} />
          <Route path="/asia/indonesia" element={<LegacyRedirect />} />
          <Route path="/asia/indonesia/*" element={<LegacyRedirect />} />
          <Route path="/europa/*" element={<LegacyRedirect />} />
          <Route path="/asien/*" element={<LegacyRedirect />} />
          <Route path="/afrika/aegypten/*" element={<LegacyRedirect />} />
          <Route path="/afrika/*" element={<LegacyRedirect />} />
          <Route path="/reiseziele/*" element={<LegacyRedirect />} />
          <Route path="/reiseziele" element={<LegacyRedirect />} />
          <Route path="/afrika" element={<LegacyRedirect />} />
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
