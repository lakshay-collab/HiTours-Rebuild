import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ADVENTURE_ID, trackDestinationClick, scrollToAdventure, scrollToSection, clearFromHome } from '../lib/homeReturn';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Features from '../components/Features';
import Ambassadors from '../components/Ambassadors';
import ComparisonTable from '../components/ComparisonTable';
import Moments from '../components/Moments';
import Steps from '../components/Steps';
import TripShowcase from '../components/TripShowcase';
import AdventureCTA from '../components/AdventureCTA';
import Experts from '../components/Experts';
import Testimonials from '../components/Testimonials';
import Destinations from '../components/Destinations';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    clearFromHome();
    if (!hash) return undefined;
    const id = hash.slice(1);
    const scroll = id === ADVENTURE_ID ? scrollToAdventure : () => scrollToSection(id, 320);
    let tries = 0;
    const tick = () => { if (!scroll() && tries++ < 20) setTimeout(tick, 50); };
    const t = setTimeout(tick, 50);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <div className="bg-surface text-onsurface" data-testid="home-page" onClickCapture={trackDestinationClick}>
      <main>
        <div className="relative">
          <Header overlay floating />
          <Hero />
        </div>
        <TrustBar />
        <Features />
        <Ambassadors />
        <Destinations />
        <Moments />
        <Steps />
        <TripShowcase />
        <AdventureCTA />
        <Experts />
        <Testimonials />
        <ComparisonTable />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
