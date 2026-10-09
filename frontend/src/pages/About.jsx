import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import Header from '../components/Header';
import CeoEnvelope from '../components/CeoEnvelope';
import Footer from '../components/Footer';
import AdventureCTA from '../components/AdventureCTA';
import PageTabs from '../components/PageTabs';
import { ChevronDown, ChevronLeft, ChevronRight } from '../components/egypt/EgyptIcons';
import { hero, recognized, why, steps, cta, top10, guarantee, careers, faq } from '../aboutData';

const Eyebrow = ({ children, light }) => <span className={`eg-label-lg uppercase tracking-[.08em] ${light ? 'text-[#9ACDE5]' : 'text-[#308BB6]'}`}>{children}</span>;

function Hero() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-1" data-testid="about-hero">
      <div className="grid gap-1 grid-cols-2 md:grid-cols-[2fr_1fr] h-[186px] sm:h-[282px] lg:h-[328px] rounded-t-xl overflow-hidden">
        {hero.images.map((img) => <div key={img.src} className="relative overflow-hidden bg-[#EAE8E0]"><img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" loading="eager" /></div>)}
      </div>
      <div className="mt-1 bg-[#F6F4EB] rounded-b-xl px-4 pt-5 pb-7 md:px-8 md:pt-7 md:pb-10 flex flex-col gap-5">
        <PageTabs />
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-4 md:gap-12 md:items-end">
          <h1 className="eg-display-lg md:!text-[44px] md:!leading-[52px] text-[#002131] [text-wrap:balance]" data-testid="about-title">{hero.h1}</h1>
          <p className="eg-body-lg text-[#174358]" data-testid="about-subtitle">{hero.sub}</p>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="eg-container grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-14 items-start" data-testid="about-intro">
      <p className="eg-quote text-[#002131]">{hero.intro}</p>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-6" data-testid="about-stats">
        {hero.stats.map((s) => (
          <div key={s.label} className="border-l-2 border-[#308BB6] pl-4">
            <dt className="eg-headline-md text-[#002131]">{s.value}</dt>
            <dd className="mt-1 eg-body-md text-[#174358]">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

const Recognized = () => (
  <section className="eg-container" data-testid="about-recognized">
    <div className="bg-[#F0EEE6] rounded-xl px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3"><span className="eg-label-lg text-[#174358]">{recognized.label}</span>{recognized.press.map((l) => <img key={l.src} src={l.src} alt={l.alt} className="h-5 w-auto object-contain" loading="lazy" />)}</div>
      <div className="flex items-center gap-6">{recognized.badges.map((l) => <img key={l.src} src={l.src} alt={l.alt} className="h-11 w-auto object-contain mix-blend-multiply" loading="lazy" />)}</div>
    </div>
  </section>
);

const Why = () => (
  <section className="eg-container flex flex-col gap-10 md:gap-16" data-testid="about-why">
    <h2 className="eg-display-sm text-[#002131]">{why.h2}</h2>
    {why.items.map((it, i) => (
      <div key={it.title} className="grid md:grid-cols-2 gap-6 md:gap-12 items-center" data-testid="about-why-item">
        <img src={it.image} alt={it.alt} className={`w-full h-[220px] sm:h-[315px] rounded-xl object-cover ${i % 2 ? 'md:order-2' : ''}`} loading="lazy" />
        <div className={`flex flex-col gap-3 ${i % 2 ? 'md:order-1 md:pr-6' : 'md:pl-6'}`}>
          <span className="eg-label-md text-[#308BB6]">0{i + 1}</span>
          <h3 className="eg-title-lg text-[#002131]">{it.title}</h3>
          <p className="eg-body-lg text-[#174358]">{it.text}</p>
        </div>
      </div>
    ))}
  </section>
);

const Steps = () => (
  <section className="eg-container flex flex-col gap-8" data-testid="about-steps">
    <h2 className="eg-display-sm text-[#002131]">{steps.h2}</h2>
    <div className="grid sm:grid-cols-3 gap-4">
      {steps.items.map((s) => (
        <div key={s.n} className="bg-[#F0EEE6] rounded-xl px-5 py-6 flex flex-col gap-3" data-testid="about-step">
          <span className="w-9 h-9 rounded-full bg-[#D6EDE3] eg-title-md text-[#002131] flex items-center justify-center">{s.n}</span>
          <h3 className="eg-title-lg text-[#002131]">{s.title}</h3>
          <p className="eg-body-md text-[#174358]">{s.text}</p>
        </div>
      ))}
    </div>
  </section>
);

function Top10() {
  const ref = useRef(null);
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * 280, behavior: 'smooth' });
  return (
    <section className="eg-container flex flex-col gap-6" data-testid="about-top10">
      <div className="flex flex-col gap-3"><h2 className="eg-display-sm text-[#002131]">{top10.h2}</h2><p className="eg-body-lg text-[#174358] max-w-[640px]">{top10.text}</p></div>
      <div className="relative">
        <div ref={ref} className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" data-testid="about-top10-track">
          {top10.items.map((d) => (
            <Link key={d.name} to={d.href} className="group relative shrink-0 snap-start w-[216px] sm:w-[248px] h-[300px] sm:h-[330px] rounded-xl overflow-hidden bg-[#EAE8E0]" data-testid="about-top10-card">
              <img src={d.src} alt={d.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002131]/90 via-[#002131]/20 to-transparent" />
              <span className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 eg-title-md text-[#002131] flex items-center justify-center">{d.rank}</span>
              <p className="absolute bottom-5 left-5 right-5 eg-title-lg text-white flex items-center justify-between">{d.name}<ArrowUpRight size={20} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></p>
            </Link>
          ))}
        </div>
        <button type="button" onClick={() => scroll(-1)} className="eg-arrow absolute left-[-20px] top-1/2 -translate-y-1/2 hidden md:flex" aria-label="Previous" data-testid="about-top10-prev"><ChevronLeft size={24} /></button>
        <button type="button" onClick={() => scroll(1)} className="eg-arrow absolute right-[-20px] top-1/2 -translate-y-1/2 hidden md:flex" aria-label="Next" data-testid="about-top10-next"><ChevronRight size={24} /></button>
      </div>
    </section>
  );
}

const Guarantee = () => (
  <section id="guarantee" className="eg-container scroll-mt-24" data-testid="about-guarantee">
    <div className="rounded-2xl bg-[#F0EEE6] p-6 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
      <div className="flex flex-col gap-4">
        <span className="eg-label-lg uppercase tracking-[.08em] text-[#308BB6] flex items-center gap-2"><ShieldCheck size={18} />{guarantee.eyebrow}</span>
        <h2 className="eg-display-sm text-[#002131]">{guarantee.h2}</h2>
        <p className="eg-body-lg text-[#174358]">{guarantee.text}</p>
        <ul className="flex flex-col gap-2">{guarantee.points.map((p) => <li key={p} className="flex items-start gap-3 eg-body-lg text-[#002131]"><Check size={18} className="mt-1 text-[#308BB6] shrink-0" />{p}</li>)}</ul>
        <Link to={guarantee.href} className="eg-btn-filled h-12 px-7 eg-title-md self-start mt-2" data-testid="about-guarantee-button">{guarantee.button}</Link>
      </div>
      <div className="bg-white rounded-xl p-6 flex items-center justify-center md:w-[220px]"><img src={guarantee.badge} alt="ISO 45001 certified" className="h-28 w-auto object-contain" loading="lazy" /></div>
    </div>
  </section>
);

const Careers = () => (
  <section id="careers" className="eg-container scroll-mt-24" data-testid="about-careers">
    <div className="rounded-2xl overflow-hidden grid md:grid-cols-2 bg-[#174358] text-white">
      <img src={careers.image} alt="Hi Tours team at work" className="w-full h-[220px] md:h-full object-cover" loading="lazy" />
      <div className="p-6 md:p-10 flex flex-col gap-4">
        <Eyebrow light>{careers.eyebrow}</Eyebrow>
        <h2 className="eg-display-sm">{careers.h2}</h2>
        <p className="eg-body-lg text-white/85">{careers.text}</p>
        <a href={careers.href} className="mt-2 self-start inline-flex items-center gap-2 h-12 px-7 rounded-full bg-white text-[#002131] eg-title-md hover:bg-[#E0F7FF] transition-colors" data-testid="about-careers-button">{careers.button}<ArrowUpRight size={18} /></a>
      </div>
    </div>
  </section>
);

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="eg-container scroll-mt-24" data-testid="about-faq">
      <h2 className="eg-display-sm text-[#002131]">{faq.h2}</h2>
      <div className="mt-8 border-t border-[#C4CBD0]">
        {faq.items.map((it, i) => (
          <div key={it.q} className="border-b border-[#C4CBD0]" data-testid="about-faq-item">
            <button type="button" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="w-full flex items-center justify-between gap-2 py-4 text-left eg-title-md text-[#002131]" data-testid="about-faq-question">{it.q}<ChevronDown size={24} className={`shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} /></button>
            {open === i && <div className="pb-5 flex flex-col gap-4 eg-body-lg text-[#174358]" data-testid="about-faq-answer">{it.a.map((p) => <p key={p}>{p}</p>)}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function About() {
  useEffect(() => { document.title = 'About Us | Hi Tours'; window.scrollTo(0, 0); }, []);
  return (
    <div className="eg" data-testid="about-page">
      <Header />
      <Hero />
      <main className="flex flex-col gap-14 md:gap-20 mt-12 md:mt-16 pb-16 md:pb-24">
        <Intro />
        <Recognized />
        <CeoEnvelope />
        <Why />
        <Steps />
        <div className="-mt-14 md:-mt-20" data-testid="about-cta"><AdventureCTA heading={cta.h2} /></div>
        <Top10 />
        <Guarantee />
        <Careers />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
