import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ValueArt } from '../components/CareersIllustrations';
import CareersHeroVideo from '../components/CareersHeroVideo';
import { hero, intro, departments, departmentCta, values, life, perks, awards, page, ROLES_URL } from '../careersData';

const SECTION = 'eg-container mt-20 md:mt-28';
const CARD = 'rounded-2xl border border-[#E4E3DB] bg-white';

const Head = ({ eyebrow, h2, text, testId }) => (
  <div className="flex flex-col items-center gap-4 text-center" data-testid={testId}>
    <span className="eg-label-md uppercase tracking-[0.18em] text-[#308BB6]">{eyebrow}</span>
    <h2 className="eg-display-sm text-[#002131] max-w-[720px]">{h2}</h2>
    {text && <p className="eg-body-lg text-[#174358] max-w-[760px]">{text}</p>}
  </div>
);

const RolesLink = ({ testId, className = '' }) => (
  <a href={ROLES_URL} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center gap-1.5 h-11 px-5 rounded-full bg-[#174358] hover:bg-[#002131] text-white eg-label-lg transition-colors ${className}`} data-testid={testId}>
    {departmentCta} <ArrowUpRight size={16} strokeWidth={2} />
  </a>
);

export default function Careers() {
  const next = useRef(null);
  const [q, setQ] = useState(0);
  const quote = life.quotes[q];
  useEffect(() => { document.title = page.title; window.scrollTo(0, 0); }, []);

  return (
    <div className="eg" data-testid="careers-page">
      <Header />
      <main className="pb-28 md:pb-28">
        <section className="eg-container pt-6 md:pt-8" data-testid="careers-hero">
          <div className="relative h-[320px] sm:h-[420px] md:h-[480px] rounded-2xl overflow-hidden">
            <img src={hero.image} alt={hero.alt} className="absolute inset-0 w-full h-full object-cover" />
            <CareersHeroVideo videoId={hero.video.id} start={hero.video.start} end={hero.video.end} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,33,49,0.35)_0%,rgba(0,33,49,0.3)_55%,rgba(0,33,49,0.6)_100%)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center">
              <h1 className="eg-display-lg text-white drop-shadow-[0_2px_14px_rgba(0,33,49,0.45)]" data-testid="careers-h1">{hero.h1}</h1>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button type="button" onClick={() => next.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white/90 hover:bg-white text-[#002131] eg-label-lg transition-colors" data-testid="careers-learn-more">
                  {hero.cta} <ArrowDown size={18} strokeWidth={2} />
                </button>
                <a href={ROLES_URL} target="_blank" rel="noreferrer" className="hidden md:inline-flex eg-btn-filled h-11 px-5 eg-label-lg" data-testid="careers-hero-positions">{hero.positions}</a>
              </div>
            </div>
          </div>
        </section>

        <section ref={next} className={`${SECTION} scroll-mt-4`} data-testid="careers-intro">
          <Head eyebrow={intro.eyebrow} h2={intro.h2} text={intro.text} />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="careers-departments">
            {departments.map((d) => (
              <article key={d.name} className={`${CARD} overflow-hidden flex flex-col hover:shadow-[0_12px_32px_rgba(0,33,49,0.1)] transition-shadow`} data-testid="careers-department-card">
                <div className="aspect-[16/10] overflow-hidden bg-[#F0EEE6]">
                  <img src={d.image} alt={d.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="eg-card-title text-[#002131]">{d.name}</h3>
                  <p className="eg-body-md text-[#174358] flex-1">{d.text}</p>
                  <RolesLink className="mt-2 self-start" testId={`careers-roles-${d.name.toLowerCase().replace(/[^a-z]+/g, '-')}`} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={SECTION} data-testid="careers-values">
          <Head eyebrow={values.eyebrow} h2={values.h2} text={values.text} />
          <div className="mt-12 flex flex-wrap justify-center gap-y-12 gap-x-6">
            {values.items.map((v) => (
              <div key={v.label} className="w-[calc(50%-12px)] sm:w-[240px] lg:w-[300px] flex flex-col items-center text-center gap-4" data-testid="careers-value">
                <ValueArt name={v.art} className="w-24 h-24 sm:w-28 sm:h-28" />
                <div className="flex flex-col gap-1.5">
                  <h3 className="eg-title-lg text-[#002131]">{v.label}</h3>
                  <p className="eg-body-md text-[#174358]">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={SECTION} data-testid="careers-life">
          <Head eyebrow={life.eyebrow} h2={life.h2} text={life.text} />
          <div className="mt-10 flex flex-wrap items-start justify-center gap-10 sm:gap-16" data-testid="careers-stats">
            {life.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1" data-testid="careers-stat">
                <span className="eg-display-sm text-[#002131]">{s.value}</span>
                <span className="eg-body-md text-[#174358]">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-[900px] mx-auto relative">
            <div className="rounded-2xl overflow-hidden bg-[#F6F4EB] grid grid-cols-1 sm:grid-cols-2" data-testid="careers-quote">
              <div className="p-8 sm:p-10 flex flex-col justify-between gap-8 order-2 sm:order-1">
                <div>
                  <span className="block eg-display-lg leading-none text-[#308BB6] -mb-3" aria-hidden="true">&ldquo;</span>
                  <p key={q} className="eg-headline-md md:!text-[32px] md:!leading-[40px] text-[#002131] animate-[hi-fade-in_400ms_ease-out]" data-testid="careers-quote-text">{quote.quote}</p>
                </div>
                <div>
                  <span className="block w-10 h-[3px] bg-[#174358] mb-4" />
                  <div className="flex items-center gap-3">
                    <img src={quote.avatar} alt={quote.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-white" />
                    <span className="flex flex-col">
                      <span className="eg-title-md text-[#002131]">{quote.name}</span>
                      <span className="eg-body-sm text-[#174358]">{quote.role}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative h-[240px] sm:h-auto sm:min-h-[340px] order-1 sm:order-2">
                <img key={quote.image} src={quote.image} alt="" className="absolute inset-0 w-full h-full object-cover animate-[hi-fade-in_400ms_ease-out]" loading="lazy" />
              </div>
            </div>
            <button type="button" onClick={() => setQ((v) => (v - 1 + life.quotes.length) % life.quotes.length)} aria-label="Previous story" className="absolute -left-3 lg:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#C4CBD0] text-[#174358] flex items-center justify-center hover:bg-[#F0EEE6] transition-colors shadow-sm" data-testid="careers-quote-prev"><ChevronLeft size={20} /></button>
            <button type="button" onClick={() => setQ((v) => (v + 1) % life.quotes.length)} aria-label="Next story" className="absolute -right-3 lg:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#C4CBD0] text-[#174358] flex items-center justify-center hover:bg-[#F0EEE6] transition-colors shadow-sm" data-testid="careers-quote-next"><ChevronRight size={20} /></button>
            <div className="mt-5 flex justify-center gap-1.5">
              {life.quotes.map((x, k) => (
                <button key={x.name} type="button" onClick={() => setQ(k)} aria-label={`Story ${k + 1}`} className={`h-1.5 rounded-full transition-all ${k === q ? 'w-6 bg-[#174358]' : 'w-1.5 bg-[#C4CBD0] hover:bg-[#8A9297]'}`} data-testid="careers-quote-dot" />
              ))}
            </div>
          </div>
        </section>

        <section className={SECTION} data-testid="careers-perks">
          <Head eyebrow={perks.eyebrow} h2={perks.h2} text={perks.text} />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {perks.items.map((p) => (
              <div key={p.label} className="flex flex-col items-center text-center gap-4" data-testid="careers-perk">
                <span className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-[#F6F4EB] shadow-[0_8px_24px_rgba(0,33,49,0.12)]">
                  <img src={p.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                </span>
                <span className="eg-body-lg text-[#002131] max-w-[240px]">{p.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={SECTION} data-testid="careers-awards">
          <Head eyebrow={awards.eyebrow} h2={awards.h2} text={awards.text} />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.badges.map((b) => (
              <div key={b.title} className={`${CARD} p-6 flex flex-col items-center gap-4 text-center`} data-testid="careers-award-badge">
                <span className="h-20 flex items-center"><img src={b.src} alt={b.alt} className="max-h-20 w-auto object-contain" loading="lazy" /></span>
                <h3 className="eg-title-md text-[#002131]">{b.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="md:hidden fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(12px,env(safe-area-inset-bottom))] bg-[#FEFCF4]/95 backdrop-blur border-t border-[#E4E3DB]" data-testid="careers-sticky-cta">
        <a href={ROLES_URL} target="_blank" rel="noreferrer" className="eg-btn-filled w-full h-12 eg-title-md" data-testid="careers-sticky-positions">{hero.positions}</a>
      </div>
      <Footer />
    </div>
  );
}
