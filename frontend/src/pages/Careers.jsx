import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight, Plane, PhoneCall, Rocket, Smile, Umbrella, Users, BookOpen, Globe2, PartyPopper, Building2, Coffee, Dog, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { hero, intro, departments, values, life, perks, awards, page, CAREERS_EMAIL } from '../careersData';

const ICONS = { plane: Plane, phone: PhoneCall, rocket: Rocket, smile: Smile, umbrella: Umbrella, users: Users, book: BookOpen, globe: Globe2, party: PartyPopper, building: Building2, coffee: Coffee, dog: Dog };

const WRAP = 'mx-auto w-full max-w-[1280px] px-4 sm:px-8';

const Eyebrow = ({ children }) => (
  <span className="block text-center eg-label-md uppercase tracking-[0.16em] text-[#174358]">{children}</span>
);

const SectionHead = ({ eyebrow, h2, text, testId }) => (
  <div className="flex flex-col items-center gap-4" data-testid={testId}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="eg-serif text-center text-[34px] leading-[42px] sm:text-[44px] sm:leading-[54px] font-medium text-[#002131] max-w-[760px]">{h2}</h2>
    {text && <p className="text-center eg-body-lg text-[#174358] max-w-[760px]">{text}</p>}
  </div>
);

const IconTile = ({ icon, label, testId }) => {
  const Icon = ICONS[icon] || Plane;
  return (
    <div className="flex flex-col items-center gap-3 px-2" data-testid={testId}>
      <span className="w-16 h-16 rounded-full bg-[#EAF4F9] text-[#174358] flex items-center justify-center">
        <Icon size={28} strokeWidth={1.5} />
      </span>
      <span className="text-center eg-body-md text-[#002131] max-w-[210px]">{label}</span>
    </div>
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
        <section className={`${WRAP} pt-6 md:pt-8`} data-testid="careers-hero">
          <div className="relative h-[320px] sm:h-[420px] md:h-[500px] rounded-2xl overflow-hidden">
            <img src={hero.image} alt={hero.alt} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,33,49,0.35)_0%,rgba(0,33,49,0.3)_55%,rgba(0,33,49,0.5)_100%)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4">
              <h1 className="eg-serif text-center text-white font-medium text-[38px] leading-[46px] sm:text-[56px] sm:leading-[64px] md:text-[68px] md:leading-[76px] drop-shadow-[0_2px_14px_rgba(0,33,49,0.45)]" data-testid="careers-h1">{hero.h1}</h1>
              <button type="button" onClick={() => next.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white/85 hover:bg-white text-[#002131] eg-label-lg transition-colors" data-testid="careers-learn-more">
                {hero.cta} <ArrowDown size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
        </section>

        <section ref={next} className={`${WRAP} pt-16 md:pt-24 scroll-mt-4`} data-testid="careers-intro">
          <SectionHead eyebrow={intro.eyebrow} h2={intro.h2} text={intro.text} />
          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="careers-departments">
            {departments.map((d) => (
              <article key={d.name} className="rounded-2xl border border-[#E4E3DB] bg-white overflow-hidden flex flex-col" data-testid="careers-department-card">
                <div className="h-[180px] overflow-hidden bg-[#F0EEE6]">
                  <img src={d.image} alt={d.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="eg-title-lg text-[#002131]">{d.name}</h3>
                  <p className="eg-body-md text-[#174358] flex-1">{d.text}</p>
                  <a href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`${d.name} role at Hi Tours`)}`} className="mt-1 inline-flex items-center gap-2 h-10 px-4 self-start rounded-full bg-[#174358] hover:bg-[#002131] text-white eg-label-lg transition-colors" data-testid={`careers-write-${d.name.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
                    <Mail size={16} strokeWidth={2} /> Write to us
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${WRAP} pt-20 md:pt-28`} data-testid="careers-values">
          <SectionHead eyebrow={values.eyebrow} h2={values.h2} text={values.text} />
          <div className="mt-10 md:mt-14 flex flex-wrap justify-center gap-y-10 gap-x-6 max-w-[900px] mx-auto">
            {values.items.map((v) => (
              <div key={v.label} className="w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)]">
                <IconTile icon={v.icon} label={v.label} testId="careers-value" />
              </div>
            ))}
          </div>
        </section>

        <section className={`${WRAP} pt-20 md:pt-28`} data-testid="careers-life">
          <SectionHead eyebrow={life.eyebrow} h2={life.h2} text={life.text} />
          <div className="mt-10 flex flex-wrap items-start justify-center gap-10 sm:gap-16" data-testid="careers-stats">
            {life.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center" data-testid="careers-stat">
                <span className="eg-serif text-[40px] leading-[48px] sm:text-[48px] sm:leading-[56px] font-medium text-[#002131]">{s.value}</span>
                <span className="eg-body-md text-[#174358]">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 relative">
            <div className="rounded-2xl bg-[#F6F4EB] overflow-hidden grid grid-cols-1 md:grid-cols-2" data-testid="careers-quote">
              <div className="p-7 sm:p-10 flex flex-col justify-center gap-5">
                <span className="eg-serif text-[44px] leading-none text-[#174358]">&ldquo;</span>
                <p className="eg-title-lg !font-medium !text-[22px] !leading-[32px] text-[#002131]" data-testid="careers-quote-text">{quote.quote}</p>
                <span className="w-10 h-[3px] bg-[#174358] rounded-full" />
                <div className="flex items-center gap-3">
                  <img src={quote.avatar} alt={quote.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-white" />
                  <span className="flex flex-col">
                    <span className="eg-title-md text-[#002131]">{quote.name}</span>
                    <span className="eg-label-lg text-[#174358]">{quote.role}</span>
                  </span>
                </div>
              </div>
              <div className="h-[240px] md:h-auto md:min-h-[340px] overflow-hidden">
                <img src={quote.image} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <button type="button" onClick={() => setQ((v) => (v - 1 + life.quotes.length) % life.quotes.length)} aria-label="Previous story" className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#C4CBD0] text-[#174358] flex items-center justify-center hover:bg-[#F0EEE6] transition-colors" data-testid="careers-quote-prev"><ChevronLeft size={20} /></button>
            <button type="button" onClick={() => setQ((v) => (v + 1) % life.quotes.length)} aria-label="Next story" className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#C4CBD0] text-[#174358] flex items-center justify-center hover:bg-[#F0EEE6] transition-colors" data-testid="careers-quote-next"><ChevronRight size={20} /></button>
          </div>
        </section>

        <section className={`${WRAP} pt-20 md:pt-28`} data-testid="careers-perks">
          <SectionHead eyebrow={perks.eyebrow} h2={perks.h2} text={perks.text} />
          <div className="mt-10 md:mt-14 flex flex-wrap justify-center gap-y-10 gap-x-6 max-w-[1100px] mx-auto">
            {perks.items.map((p) => (
              <div key={p.label} className="w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]">
                <IconTile icon={p.icon} label={p.label} testId="careers-perk" />
              </div>
            ))}
          </div>
        </section>

        <section className={`${WRAP} pt-20 md:pt-28`} data-testid="careers-awards">
          <SectionHead eyebrow={awards.eyebrow} h2={awards.h2} text={awards.text} />
          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.badges.map((b) => (
              <div key={b.title} className="rounded-2xl border border-[#E4E3DB] bg-white p-6 flex flex-col items-center gap-3 text-center" data-testid="careers-award-badge">
                <img src={b.src} alt={b.alt} className="h-16 w-auto object-contain" loading="lazy" />
                <h3 className="eg-title-md text-[#002131]">{b.title}</h3>
                <p className="eg-body-md text-[#174358]">{b.text}</p>
              </div>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-3" data-testid="careers-accolades">
            {awards.accolades.map((a) => (
              <li key={a} className="inline-flex items-center h-11 px-5 rounded-full bg-[#F6F4EB] eg-label-lg text-[#174358]">{a}</li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
