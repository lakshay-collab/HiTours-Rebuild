import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight, Globe2, PhoneCall, Rocket, Compass, Handshake, Users, BookOpen, PartyPopper, Building2, Coffee, Dog, BadgeCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { hero, intro, departments, departmentCta, values, life, perks, awards, page, ROLES_URL } from '../careersData';

const ICONS = { globe: Globe2, phone: PhoneCall, rocket: Rocket, compass: Compass, handshake: Handshake, users: Users, book: BookOpen, party: PartyPopper, building: Building2, coffee: Coffee, dog: Dog };

const SECTION = 'eg-container mt-16 md:mt-24';

const Head = ({ eyebrow, h2, text, testId }) => (
  <div className="flex flex-col items-center gap-3 text-center" data-testid={testId}>
    <span className="eg-label-md uppercase tracking-[0.16em] text-[#308BB6]">{eyebrow}</span>
    <h2 className="eg-display-sm text-[#002131] max-w-[720px]">{h2}</h2>
    {text && <p className="eg-body-lg text-[#174358] max-w-[720px]">{text}</p>}
  </div>
);

// Brand icon treatment: deep-water glyph on a soft tinted tile with a coral accent corner.
const IconTile = ({ icon, size = 'md' }) => {
  const Icon = ICONS[icon] || Globe2;
  const box = size === 'lg' ? 'w-16 h-16' : 'w-14 h-14';
  return (
    <span className={`relative ${box} shrink-0 rounded-2xl bg-[#EAF4F9] text-[#174358] flex items-center justify-center ring-1 ring-[#308BB6]/15`} aria-hidden="true">
      <Icon size={size === 'lg' ? 28 : 24} strokeWidth={1.6} />
      <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[#F4B49A]" />
    </span>
  );
};

export default function Careers() {
  const next = useRef(null);
  const [q, setQ] = useState(0);
  const quote = life.quotes[q];
  useEffect(() => { document.title = page.title; window.scrollTo(0, 0); }, []);

  return (
    <div className="eg" data-testid="careers-page">
      <Header />
      <main className="pb-20 md:pb-28">
        <section className="eg-container pt-6 md:pt-8" data-testid="careers-hero">
          <div className="relative h-[300px] sm:h-[400px] md:h-[460px] rounded-2xl overflow-hidden">
            <img src={hero.image} alt={hero.alt} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,33,49,0.4)_0%,rgba(0,33,49,0.32)_55%,rgba(0,33,49,0.55)_100%)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-4">
              <h1 className="eg-display-lg md:!text-[52px] md:!leading-[60px] text-center text-white drop-shadow-[0_2px_14px_rgba(0,33,49,0.45)]" data-testid="careers-h1">{hero.h1}</h1>
              <button type="button" onClick={() => next.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white/90 hover:bg-white text-[#002131] eg-label-lg transition-colors" data-testid="careers-learn-more">
                {hero.cta} <ArrowDown size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
        </section>

        <section ref={next} className={`${SECTION} scroll-mt-4`} data-testid="careers-intro">
          <Head eyebrow={intro.eyebrow} h2={intro.h2} text={intro.text} />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" data-testid="careers-departments">
            {departments.map((d) => (
              <article key={d.name} className="rounded-2xl border border-[#E4E3DB] bg-white overflow-hidden flex flex-col hover:shadow-[0_8px_24px_rgba(0,33,49,0.08)] transition-shadow" data-testid="careers-department-card">
                <div className="h-[168px] overflow-hidden bg-[#F0EEE6]">
                  <img src={d.image} alt={d.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5 flex flex-col gap-2.5 flex-1">
                  <h3 className="eg-card-title text-[#002131]">{d.name}</h3>
                  <p className="eg-body-md text-[#174358] flex-1">{d.text}</p>
                  <a href={ROLES_URL} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1.5 h-10 px-4 self-start rounded-full bg-[#174358] hover:bg-[#002131] text-white eg-label-lg transition-colors" data-testid={`careers-roles-${d.name.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
                    {departmentCta} <ArrowUpRight size={16} strokeWidth={2} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={SECTION} data-testid="careers-values">
          <Head eyebrow={values.eyebrow} h2={values.h2} text={values.text} />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.items.map((v) => (
              <div key={v.label} className="rounded-2xl bg-[#F6F4EB] p-6 flex items-start gap-4" data-testid="careers-value">
                <IconTile icon={v.icon} />
                <div className="flex flex-col gap-1.5">
                  <h3 className="eg-title-md text-[#002131]">{v.label}</h3>
                  <p className="eg-body-md text-[#174358]">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={SECTION} data-testid="careers-life">
          <Head eyebrow={life.eyebrow} h2={life.h2} text={life.text} />
          <div className="mt-8 flex flex-wrap items-start justify-center gap-10 sm:gap-16" data-testid="careers-stats">
            {life.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center" data-testid="careers-stat">
                <span className="eg-display-sm text-[#002131]">{s.value}</span>
                <span className="eg-body-md text-[#174358]">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-[880px] mx-auto relative">
            <div className="rounded-2xl bg-[#F6F4EB] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6" data-testid="careers-quote">
              <img src={quote.image} alt="" className="w-full sm:w-[200px] h-[150px] sm:h-[180px] shrink-0 rounded-xl object-cover" loading="lazy" />
              <div className="flex flex-col gap-4 min-w-0">
                <p className="eg-quote text-[#002131]" data-testid="careers-quote-text">&ldquo;{quote.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img src={quote.avatar} alt={quote.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-white" />
                  <span className="flex flex-col">
                    <span className="eg-title-md text-[#002131]">{quote.name}</span>
                    <span className="eg-label-lg text-[#174358]">{quote.role}</span>
                  </span>
                </div>
              </div>
            </div>
            <button type="button" onClick={() => setQ((v) => (v - 1 + life.quotes.length) % life.quotes.length)} aria-label="Previous story" className="absolute -left-3 lg:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#C4CBD0] text-[#174358] flex items-center justify-center hover:bg-[#F0EEE6] transition-colors" data-testid="careers-quote-prev"><ChevronLeft size={20} /></button>
            <button type="button" onClick={() => setQ((v) => (v + 1) % life.quotes.length)} aria-label="Next story" className="absolute -right-3 lg:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#C4CBD0] text-[#174358] flex items-center justify-center hover:bg-[#F0EEE6] transition-colors" data-testid="careers-quote-next"><ChevronRight size={20} /></button>
            <div className="mt-4 flex justify-center gap-1.5">
              {life.quotes.map((x, k) => (
                <button key={x.name} type="button" onClick={() => setQ(k)} aria-label={`Story ${k + 1}`} className={`h-1.5 rounded-full transition-all ${k === q ? 'w-6 bg-[#174358]' : 'w-1.5 bg-[#C4CBD0] hover:bg-[#8A9297]'}`} data-testid="careers-quote-dot" />
              ))}
            </div>
          </div>
        </section>

        <section className={SECTION} data-testid="careers-perks">
          <Head eyebrow={perks.eyebrow} h2={perks.h2} text={perks.text} />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.items.map((p) => (
              <div key={p.label} className="rounded-2xl border border-[#E4E3DB] bg-white p-5 flex items-center gap-4" data-testid="careers-perk">
                <IconTile icon={p.icon} />
                <span className="eg-body-lg text-[#002131]">{p.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={SECTION} data-testid="careers-awards">
          <Head eyebrow={awards.eyebrow} h2={awards.h2} text={awards.text} />
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {awards.badges.map((b) => (
              <div key={b.title} className="rounded-2xl border border-[#E4E3DB] bg-white p-6 flex flex-col items-center gap-3 text-center" data-testid="careers-award-badge">
                <span className="h-16 flex items-center"><img src={b.src} alt={b.alt} className="max-h-16 w-auto object-contain" loading="lazy" /></span>
                <h3 className="eg-title-md text-[#002131]">{b.title}</h3>
                <p className="eg-body-md text-[#174358]">{b.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-[#F6F4EB] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5" data-testid="careers-accolades">
            {awards.accolades.map((a) => (
              <div key={a.title} className="flex items-start gap-3" data-testid="careers-accolade">
                <BadgeCheck size={22} strokeWidth={1.8} className="shrink-0 mt-0.5 text-[#308BB6]" />
                <div className="flex flex-col gap-0.5">
                  <span className="eg-title-md text-[#002131]">{a.title}</span>
                  <span className="eg-body-md text-[#174358]">{a.text}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
