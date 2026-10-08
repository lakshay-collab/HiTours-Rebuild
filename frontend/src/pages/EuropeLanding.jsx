import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DestinationCard from '../components/DestinationCard';
import { useLeadModal, usePageLead } from '../components/egypt/LeadModalProvider';
import { ChevronDown } from '../components/egypt/EgyptIcons';
import { europeHero, europeProof, europeCombos, europeWhy, europeSteps, europeSingle, europeFaq } from '../europeData';

const Eyebrow = ({ children, light }) => <span className={`eg-label-lg uppercase tracking-[0.18em] ${light ? 'text-white/80' : 'text-[#308BB6]'}`}>{children}</span>;

function Hero({ onPlan }) {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-1" data-testid="europe-hero">
      <div className="relative h-[520px] sm:h-[560px] lg:h-[640px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0E2A3A]">
        <img src={europeHero.image} alt={europeHero.imageAlt} className="absolute inset-0 w-full h-full object-cover object-[50%_60%]" loading="eager" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,21,33,0.15)_0%,rgba(0,21,33,0.05)_35%,rgba(0,21,33,0.55)_70%,rgba(0,21,33,0.85)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14 text-white flex flex-col gap-4 sm:gap-5 max-w-[820px]">
          <Eyebrow light>{europeHero.eyebrow}</Eyebrow>
          <h1 className="dest-title text-[38px] leading-[1.02] sm:text-[56px] lg:text-[68px] [text-wrap:balance] drop-shadow-[0_2px_12px_rgba(0,21,33,0.5)]" data-testid="europe-title">{europeHero.h1}</h1>
          <p className="eg-body-lg text-white/88 max-w-[600px]" data-testid="europe-subtitle">{europeHero.sub}</p>
          <button type="button" onClick={onPlan} className="self-start inline-flex items-center gap-2 h-12 sm:h-13 px-7 rounded-full bg-white text-[#002131] eg-title-md hover:bg-[#E0F7FF] transition-colors" data-testid="europe-hero-cta">{europeHero.cta}<ArrowRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}

const Proof = () => (
  <section className="eg-container" data-testid="europe-proof">
    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 border-y border-[#E4E3DB] py-6 sm:py-8">
      {europeProof.map((p) => (
        <div key={p.label} className="border-l-2 border-[#308BB6] pl-4"><dt className="eg-headline-md text-[#002131]">{p.value}</dt><dd className="mt-1 eg-body-md text-[#174358]">{p.label}</dd></div>
      ))}
    </dl>
  </section>
);

function Combos({ onPick }) {
  return (
    <section id="combinations" className="eg-container flex flex-col gap-8 sm:gap-10 scroll-mt-24" data-testid="europe-combos">
      <div className="flex flex-col gap-3 max-w-[720px]">
        <Eyebrow>Curated combinations</Eyebrow>
        <h2 className="eg-display-sm text-[#002131] [text-wrap:balance]">Two or three countries, one seamless route</h2>
        <p className="eg-body-lg text-[#174358]">Start with one of our most loved pairings. Every one of them can be reshaped around your dates, pace and budget.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7" data-testid="europe-combo-grid">
        {europeCombos.map((c, i) => (
          <div key={c.slug} className="flex flex-col gap-3" data-testid="europe-combo">
            <DestinationCard name={c.name} src={c.src} alt={c.alt} badge={c.badge} region={c.region} index={i} compact={false} onClick={() => onPick(c)} />
            <p className="eg-body-md text-[#174358] px-1" data-testid="europe-combo-line">{c.line}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const Why = () => (
  <section className="eg-container flex flex-col gap-8 sm:gap-10" data-testid="europe-why">
    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-16 items-end">
      <h2 className="eg-display-sm text-[#002131] [text-wrap:balance]">{europeWhy.h2}</h2>
      <p className="eg-body-lg text-[#174358]">{europeWhy.text}</p>
    </div>
    <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
      {europeWhy.items.map((it) => (
        <div key={it.title} className="flex flex-col gap-4" data-testid="europe-why-item">
          <img src={it.src} alt={it.alt} className="w-full aspect-[4/3] rounded-2xl object-cover" loading="lazy" />
          <h3 className="eg-title-lg text-[#002131]">{it.title}</h3>
          <p className="eg-body-md text-[#174358]">{it.text}</p>
        </div>
      ))}
    </div>
  </section>
);

const Steps = ({ onPlan }) => (
  <section className="eg-container" data-testid="europe-steps">
    <div className="rounded-3xl bg-[#002131] text-white p-6 sm:p-10 lg:p-14 grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16">
      <div className="flex flex-col gap-4">
        <Eyebrow light>How it works</Eyebrow>
        <h2 className="eg-display-sm [text-wrap:balance]">{europeSteps.h2}</h2>
        <button type="button" onClick={onPlan} className="self-start mt-2 inline-flex items-center gap-2 h-12 px-7 rounded-full bg-white text-[#002131] eg-title-md hover:bg-[#E0F7FF] transition-colors" data-testid="europe-steps-cta">Start with a free itinerary<ArrowRight size={18} /></button>
      </div>
      <ol className="grid sm:grid-cols-3 gap-6">
        {europeSteps.items.map((s) => (
          <li key={s.n} className="flex flex-col gap-3 border-t border-white/15 pt-5"><span className="dest-title text-[40px] leading-none text-[#9ACDE5]">0{s.n}</span><h3 className="eg-title-lg">{s.title}</h3><p className="eg-body-md text-white/80">{s.text}</p></li>
        ))}
      </ol>
    </div>
  </section>
);

const Single = () => (
  <section className="eg-container flex flex-col gap-5" data-testid="europe-single">
    <div className="flex flex-col gap-2"><h2 className="eg-headline-lg text-[#002131]">{europeSingle.h2}</h2><p className="eg-body-lg text-[#174358]">{europeSingle.text}</p></div>
    <div className="flex flex-wrap gap-2">
      {europeSingle.items.map(([n, to]) => <Link key={n} to={to} className="h-10 px-4 rounded-full border border-[#C4CBD0] eg-label-lg text-[#002131] inline-flex items-center gap-1.5 hover:bg-[#002131] hover:text-white hover:border-[#002131] transition-colors" data-testid={`europe-single-${n.toLowerCase()}`}>{n}<ArrowRight size={14} /></Link>)}
    </div>
  </section>
);

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="eg-container" data-testid="europe-faq">
      <h2 className="eg-display-sm text-[#002131]">Good to know</h2>
      <div className="mt-6 border-t border-[#C4CBD0]">
        {europeFaq.map((it, i) => (
          <div key={it.q} className="border-b border-[#C4CBD0]">
            <button type="button" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="w-full flex items-center justify-between gap-2 py-4 text-left eg-title-md text-[#002131]" data-testid="europe-faq-question">{it.q}<ChevronDown size={24} className={`shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} /></button>
            {open === i && <p className="pb-5 eg-body-lg text-[#174358]" data-testid="europe-faq-answer">{it.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function EuropeLanding() {
  const { openLead } = useLeadModal();
  usePageLead('Europe', europeHero.image, europeHero.imageAlt);
  useEffect(() => { document.title = 'Europe multi-country holidays | Hi Tours'; window.scrollTo(0, 0); }, []);
  const plan = () => openLead({ destination: 'Europe', tripTitle: 'Multi-country Europe journey' });
  const pick = (c) => openLead({ destination: 'Europe', tripTitle: c.name, image: c.src, imageAlt: c.alt });
  return (
    <div className="eg" data-testid="europe-page">
      <Header />
      <Hero onPlan={plan} />
      <main className="flex flex-col gap-14 md:gap-20 mt-10 md:mt-14 pb-16 md:pb-24">
        <Proof />
        <Combos onPick={pick} />
        <Why />
        <Steps onPlan={plan} />
        <Single />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
