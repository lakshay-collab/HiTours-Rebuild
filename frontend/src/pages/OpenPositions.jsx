import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { hero, JOBS_EMBED_URL } from '../careersData';

export default function OpenPositions() {
  useEffect(() => { document.title = 'Open Positions | Careers at Hi Tours'; window.scrollTo(0, 0); }, []);
  return (
    <div className="eg" data-testid="open-positions-page">
      <Header />
      <main className="pb-12 md:pb-16">
        <section className="eg-container pt-4 md:pt-6" data-testid="open-positions-jobs">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h1 className="eg-headline-md text-[#002131]" data-testid="open-positions-title">{hero.positions}</h1>
            <Link to="/careers" className="inline-flex items-center gap-1 eg-label-lg text-[#174358] hover:text-[#002131]" data-testid="open-positions-back">
              <ChevronLeft size={16} strokeWidth={2} /> Back to Careers
            </Link>
          </div>
          <div className="w-full overflow-hidden rounded-2xl border border-[#E4E3DB] bg-white">
            <iframe
              src={JOBS_EMBED_URL}
              title="HI Tours Group Open Positions"
              loading="lazy"
              className="block w-full max-w-full border-0 h-[calc(100dvh-200px)] min-h-[760px] md:min-h-[900px]"
              data-testid="open-positions-iframe"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
