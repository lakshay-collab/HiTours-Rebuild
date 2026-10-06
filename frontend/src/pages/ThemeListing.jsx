import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import TripStyleHero from '../components/tripstyle/TripStyleHero';
import EgyptProductCard from '../components/egypt/EgyptProductCard';
import { EgyptReviews } from '../components/egypt/EgyptSections';
import EgyptTileRow from '../components/egypt/EgyptTileRow';
import { ScrollTop } from '../components/egypt/EgyptHero';
import Footer from '../components/Footer';
import { features } from '../egyptListingData';
import { themeGroups } from '../themesData';
import { themeBySlug, packagesForTheme, destinationsForTheme } from '../catalog';
import { usePageLead } from '../components/egypt/LeadModalProvider';

// Dynamic theme results page: one route, global keyword filter across every destination's packages.
export default function ThemeListing() {
  const { slug } = useParams();
  const theme = themeBySlug[slug];
  const [allTours, setAllTours] = useState(false);
  const products = useMemo(() => packagesForTheme(slug), [slug]);
  const destinations = useMemo(() => destinationsForTheme(slug), [slug]);
  const menuItem = themeGroups.flatMap((g) => g.items).find((i) => i.label === theme?.label);
  const heroImage = (menuItem?.image || '').replace(/w=\d+/, 'w=2400');
  usePageLead(theme?.label || '', heroImage, theme?.label);
  useEffect(() => { if (theme) document.title = `${theme.label} holidays | Hi Tours`; setAllTours(false); }, [theme]);
  if (!theme) return <Navigate to="/" replace />;

  const second = products.find((p) => p.images?.[0] && p.images[0] !== heroImage)?.images?.[0] || heroImage;
  const hero = { h1: theme.label, images: [{ src: heroImage, alt: theme.label, title: theme.label }, { src: second, alt: theme.label, title: theme.label }], cta: 'Plan for free', ctaHref: '#', sub: `Tailor-made ${theme.label.toLowerCase()} holidays across all Hi Tours destinations`, note: 'No two trips alike.' };
  const crumbs = [{ label: 'Themes', href: '#' }, { label: theme.label }];
  const tiles = destinations.map((p) => ({ title: p.destination, alt: p.destination, tag: null, href: p.destinationHref, image: p.images?.[0] }));

  return (
    <div className="eg" data-testid="theme-page">
      <main>
        <TripStyleHero hero={hero} crumbs={crumbs} />

        <section className="eg-container mt-12 md:mt-16 scroll-mt-20" id="tours" data-testid="theme-tours">
          <h2 className="eg-display-sm text-[#002131]">{theme.label} holidays across {destinations.length} {destinations.length === 1 ? 'destination' : 'destinations'}</h2>
          <p className="mt-3 eg-body-lg text-[#174358]" data-testid="theme-count">{products.length} tailor-made {products.length === 1 ? 'package matches' : 'packages match'} this theme.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="theme-product-grid">
            {(allTours ? products : products.slice(0, 9)).map((p) => (
              <div key={p.href} className="relative" data-testid="theme-product" data-destination={p.destination}>
                <EgyptProductCard p={p} />
                <Link to={p.destinationHref} className="absolute top-3 right-3 z-[1] inline-flex items-center h-7 px-3 rounded-full bg-white/90 backdrop-blur eg-label-md text-[#002131] shadow-sm hover:bg-white" data-testid="theme-product-destination">{p.destination}</Link>
              </div>
            ))}
          </div>
          {products.length > 9 && (
            <div className="mt-8 flex justify-center">
              <button type="button" onClick={() => setAllTours((v) => !v)} className="eg-btn-outlined eg-label-lg" data-testid="theme-tours-more">
                <ChevronDown size={18} className={allTours ? 'rotate-180' : ''} />{allTours ? 'Show less' : `Show all ${products.length} packages`}
              </button>
            </div>
          )}
        </section>

        {tiles.length > 0 && (
          <section className="eg-container mt-12 md:mt-16" data-testid="theme-destinations">
            <h2 className="eg-display-sm text-[#002131]">Destinations for {theme.label.toLowerCase()}</h2>
            <div className="mt-8"><EgyptTileRow items={tiles} testId="theme-destinations-row" /></div>
          </section>
        )}

        <section className="eg-container mt-12 md:mt-16 grid gap-6 md:grid-cols-3" data-testid="theme-features">
          {features.map((f) => (
            <div key={f.title} className="flex md:flex-col items-start md:items-center gap-4 text-left md:text-center">
              <img src={f.icon} alt="" className="w-[72px] h-[72px] md:w-[120px] md:h-[120px] shrink-0" />
              <div className="md:max-w-[270px] flex flex-col gap-2">
                <h3 className="eg-title-lg text-[#002131]">{f.title}</h3>
                <p className="eg-body-lg text-[#002131]">{f.text}</p>
              </div>
            </div>
          ))}
        </section>

        <EgyptReviews centered h2={`What customers say about their ${theme.label.toLowerCase()} trips with Hi Tours`} />
      </main>
      <ScrollTop className="bottom-24 left-4 md:bottom-10 md:left-12" />
      <Footer />
    </div>
  );
}
