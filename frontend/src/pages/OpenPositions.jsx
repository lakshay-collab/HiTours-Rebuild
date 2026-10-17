import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, LayoutList } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { hero, JOBS_EMBED_URL } from '../careersData';

const CHANNEL = 'hi-tours-open-positions';
const fromRecruitCrm = (search) => new URLSearchParams(search).get('from') === 'recruitcrm' || /recruitcrm\.io/i.test(document.referrer);

export default function OpenPositions() {
  const location = useLocation();
  const navigate = useNavigate();
  const frameRef = useRef(null);
  const [inJob, setInJob] = useState(false);
  const [frameKey, setFrameKey] = useState(0);

  const showAll = () => { setInJob(false); setFrameKey((k) => k + 1); navigate('/careers/open-positions', { replace: true }); window.scrollTo(0, 0); };

  useEffect(() => { document.title = 'Open Positions | Careers at Hi Tours'; window.scrollTo(0, 0); }, []);

  // A click inside the cross-origin Recruit CRM frame (job description / apply form) moves focus into it.
  useEffect(() => {
    const onBlur = () => { if (document.activeElement === frameRef.current) setInJob(true); };
    window.addEventListener('blur', onBlur);
    return () => window.removeEventListener('blur', onBlur);
  }, []);

  // Recruit CRM's "More Jobs" opens this page in a new tab: hand the original tab back to the list and close this one.
  useEffect(() => {
    if (!('BroadcastChannel' in window)) return undefined;
    const bc = new BroadcastChannel(CHANNEL);
    if (fromRecruitCrm(location.search)) {
      bc.postMessage('show-list');
      window.close();
      navigate('/careers/open-positions', { replace: true });
    }
    bc.onmessage = (e) => { if (e.data === 'show-list') showAll(); };
    return () => bc.close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="eg" data-testid="open-positions-page">
      <Header />
      <main className="pb-12 md:pb-16">
        <section className="eg-container pt-4 md:pt-6" data-testid="open-positions-jobs">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h1 className="eg-headline-md text-[#002131]" data-testid="open-positions-title">{hero.positions}</h1>
            <div className="flex items-center gap-4 sm:gap-6">
              {inJob && (
                <button type="button" onClick={showAll} className="inline-flex items-center gap-1 eg-label-lg text-[#174358] hover:text-[#002131]" data-testid="open-positions-all">
                  <LayoutList size={16} strokeWidth={2} /> All Open Positions
                </button>
              )}
              <Link to="/careers" className="inline-flex items-center gap-1 eg-label-lg text-[#174358] hover:text-[#002131]" data-testid="open-positions-back">
                <ChevronLeft size={16} strokeWidth={2} /> Back to Careers
              </Link>
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-2xl border border-[#E4E3DB] bg-white">
            <iframe
              key={frameKey}
              ref={frameRef}
              src={frameKey ? `${JOBS_EMBED_URL}&r=${frameKey}` : JOBS_EMBED_URL}
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
