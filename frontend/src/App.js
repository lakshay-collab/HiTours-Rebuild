import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { LeadModalProvider } from './components/egypt/LeadModalProvider';
import Home from './pages/Home';
import EgyptListing from './pages/EgyptListing';
import EgyptHolidays from './pages/EgyptHolidays';
import EgyptDetail from './pages/EgyptDetail';
import AsiaListing from './pages/AsiaListing';
import VietnamListing, { VietnamHolidays } from './pages/VietnamListing';
import SriLankaListing, { SriLankaHolidays } from './pages/SriLankaListing';
import MalaysiaListing, { MalaysiaHolidays } from './pages/MalaysiaListing';
import SingaporeListing, { SingaporeHolidays } from './pages/SingaporeListing';
import KazakhstanListing, { KazakhstanHolidays } from './pages/KazakhstanListing';
import BhutanListing, { BhutanHolidays } from './pages/BhutanListing';
import LaosListing, { LaosHolidays } from './pages/LaosListing';
import JapanListing, { JapanHolidays } from './pages/JapanListing';
import IndonesiaListing, { IndonesiaHolidays } from './pages/IndonesiaListing';
import ChinaListing, { ChinaHolidays } from './pages/ChinaListing';
import CambodiaListing, { CambodiaHolidays } from './pages/CambodiaListing';
import PhilippinesListing, { PhilippinesHolidays } from './pages/PhilippinesListing';
import IcelandListing, { IcelandHolidays } from './pages/IcelandListing';
import ItalyListing, { ItalyHolidays } from './pages/ItalyListing';
import GreeceListing, { GreeceHolidays } from './pages/GreeceListing';
import NorwayListing, { NorwayHolidays } from './pages/NorwayListing';
import IrelandListing, { IrelandHolidays } from './pages/IrelandListing';
import SpainListing, { SpainHolidays } from './pages/SpainListing';
import PortugalListing, { PortugalHolidays } from './pages/PortugalListing';
import CroatiaListing, { CroatiaHolidays } from './pages/CroatiaListing';
import EnglandListing, { EnglandHolidays } from './pages/EnglandListing';
import ScotlandListing, { ScotlandHolidays } from './pages/ScotlandListing';
import FinlandListing, { FinlandHolidays } from './pages/FinlandListing';
import SwedenListing, { SwedenHolidays } from './pages/SwedenListing';
import ThailandListing, { ThailandHolidays } from './pages/ThailandListing';
import MaldivesListing, { MaldivesHolidays } from './pages/MaldivesListing';
import TripStyleListing from './pages/TripStyleListing';
import About from './pages/About';
import Care from './pages/Care';
import { Terms, Privacy } from './pages/Legal';
import Press from './pages/Press';

const StyleRedirect = () => <Navigate to={`/afrika/aegypten/holidays/${useParams().style}`} replace />;

// Reset scroll to the top on every route change (hash links keep their in-page target).
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (!hash) window.scrollTo(0, 0); }, [pathname, hash]);
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
          <Route path="/afrika/aegypten" element={<EgyptListing />} />
          <Route path="/afrika/aegypten/holidays" element={<EgyptHolidays />} />
          <Route path="/afrika/aegypten/holidays/:style" element={<EgyptHolidays />} />
          <Route path="/afrika/aegypten/travel-style/:style" element={<StyleRedirect />} />
          <Route path="/afrika/aegypten/:slug" element={<EgyptDetail />} />
          <Route path="/asien" element={<AsiaListing />} />
          <Route path="/asien/vietnam" element={<VietnamListing />} />
          <Route path="/asien/vietnam/holidays" element={<VietnamHolidays />} />
          <Route path="/asien/vietnam/holidays/:style" element={<VietnamHolidays />} />
          <Route path="/asien/sri-lanka" element={<SriLankaListing />} />
          <Route path="/asien/sri-lanka/holidays" element={<SriLankaHolidays />} />
          <Route path="/asien/sri-lanka/holidays/:style" element={<SriLankaHolidays />} />
          <Route path="/asien/malaysia" element={<MalaysiaListing />} />
          <Route path="/asien/malaysia/holidays" element={<MalaysiaHolidays />} />
          <Route path="/asien/malaysia/holidays/:style" element={<MalaysiaHolidays />} />
          <Route path="/asien/singapore" element={<SingaporeListing />} />
          <Route path="/asien/singapore/holidays" element={<SingaporeHolidays />} />
          <Route path="/asien/singapore/holidays/:style" element={<SingaporeHolidays />} />
          <Route path="/asien/kazakhstan" element={<KazakhstanListing />} />
          <Route path="/asien/kazakhstan/holidays" element={<KazakhstanHolidays />} />
          <Route path="/asien/kazakhstan/holidays/:style" element={<KazakhstanHolidays />} />
          <Route path="/asien/bhutan" element={<BhutanListing />} />
          <Route path="/asien/bhutan/holidays" element={<BhutanHolidays />} />
          <Route path="/asien/bhutan/holidays/:style" element={<BhutanHolidays />} />
          <Route path="/asien/laos" element={<LaosListing />} />
          <Route path="/asien/laos/holidays" element={<LaosHolidays />} />
          <Route path="/asien/laos/holidays/:style" element={<LaosHolidays />} />
          <Route path="/asien/japan" element={<JapanListing />} />
          <Route path="/asien/japan/holidays" element={<JapanHolidays />} />
          <Route path="/asien/japan/holidays/:style" element={<JapanHolidays />} />
          <Route path="/asien/indonesia" element={<IndonesiaListing />} />
          <Route path="/asien/indonesia/holidays" element={<IndonesiaHolidays />} />
          <Route path="/asien/indonesia/holidays/:style" element={<IndonesiaHolidays />} />
          <Route path="/asien/china" element={<ChinaListing />} />
          <Route path="/asien/china/holidays" element={<ChinaHolidays />} />
          <Route path="/asien/china/holidays/:style" element={<ChinaHolidays />} />
          <Route path="/asien/cambodia" element={<CambodiaListing />} />
          <Route path="/asien/cambodia/holidays" element={<CambodiaHolidays />} />
          <Route path="/asien/cambodia/holidays/:style" element={<CambodiaHolidays />} />
          <Route path="/asien/philippines" element={<PhilippinesListing />} />
          <Route path="/asien/philippines/holidays" element={<PhilippinesHolidays />} />
          <Route path="/asien/philippines/holidays/:style" element={<PhilippinesHolidays />} />
          <Route path="/europa/iceland" element={<IcelandListing />} />
          <Route path="/europa/iceland/holidays" element={<IcelandHolidays />} />
          <Route path="/europa/iceland/holidays/:style" element={<IcelandHolidays />} />
          <Route path="/europa/italy" element={<ItalyListing />} />
          <Route path="/europa/italy/holidays" element={<ItalyHolidays />} />
          <Route path="/europa/italy/holidays/:style" element={<ItalyHolidays />} />
          <Route path="/europa/greece" element={<GreeceListing />} />
          <Route path="/europa/greece/holidays" element={<GreeceHolidays />} />
          <Route path="/europa/greece/holidays/:style" element={<GreeceHolidays />} />
          <Route path="/europa/norway" element={<NorwayListing />} />
          <Route path="/europa/norway/holidays" element={<NorwayHolidays />} />
          <Route path="/europa/norway/holidays/:style" element={<NorwayHolidays />} />
          <Route path="/europa/ireland" element={<IrelandListing />} />
          <Route path="/europa/ireland/holidays" element={<IrelandHolidays />} />
          <Route path="/europa/ireland/holidays/:style" element={<IrelandHolidays />} />
          <Route path="/europa/spain" element={<SpainListing />} />
          <Route path="/europa/spain/holidays" element={<SpainHolidays />} />
          <Route path="/europa/spain/holidays/:style" element={<SpainHolidays />} />
          <Route path="/europa/portugal" element={<PortugalListing />} />
          <Route path="/europa/portugal/holidays" element={<PortugalHolidays />} />
          <Route path="/europa/portugal/holidays/:style" element={<PortugalHolidays />} />
          <Route path="/europa/croatia" element={<CroatiaListing />} />
          <Route path="/europa/croatia/holidays" element={<CroatiaHolidays />} />
          <Route path="/europa/croatia/holidays/:style" element={<CroatiaHolidays />} />
          <Route path="/europa/england" element={<EnglandListing />} />
          <Route path="/europa/england/holidays" element={<EnglandHolidays />} />
          <Route path="/europa/england/holidays/:style" element={<EnglandHolidays />} />
          <Route path="/europa/scotland" element={<ScotlandListing />} />
          <Route path="/europa/scotland/holidays" element={<ScotlandHolidays />} />
          <Route path="/europa/scotland/holidays/:style" element={<ScotlandHolidays />} />
          <Route path="/europa/finland" element={<FinlandListing />} />
          <Route path="/europa/finland/holidays" element={<FinlandHolidays />} />
          <Route path="/europa/finland/holidays/:style" element={<FinlandHolidays />} />
          <Route path="/europa/sweden" element={<SwedenListing />} />
          <Route path="/europa/sweden/holidays" element={<SwedenHolidays />} />
          <Route path="/europa/sweden/holidays/:style" element={<SwedenHolidays />} />
          <Route path="/europa/:slug" element={<EgyptDetail />} />
          <Route path="/asien/thailand" element={<ThailandListing />} />
          <Route path="/asien/thailand/holidays" element={<ThailandHolidays />} />
          <Route path="/asien/thailand/holidays/:style" element={<ThailandHolidays />} />
          <Route path="/asien/maldives" element={<MaldivesListing />} />
          <Route path="/asien/maldives/holidays" element={<MaldivesHolidays />} />
          <Route path="/asien/maldives/holidays/:style" element={<MaldivesHolidays />} />
          <Route path="/asien/:slug" element={<EgyptDetail />} />
          <Route path="/trip-styles/:slug" element={<TripStyleListing />} />
          <Route path="/about" element={<About />} />
          <Route path="/care" element={<Care />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/press" element={<Press />} />
        </Routes>
        </LeadModalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
