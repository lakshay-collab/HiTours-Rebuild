import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bus, Check, Images, Plane, ShieldCheck, Ticket, Users, Utensils, UserCheck, X, CalendarDays, Clock, Activity, Coffee } from 'lucide-react';
import { Lightbox } from '../egypt/EgyptRoute';
import { depositOf, fmtDate, fmtInr, lowestPrice, nextOpen, payWord } from '../../grouptours/groupBooking';
import { useLeadModal } from '../egypt/LeadModalProvider';

const ICONS = { ticket: Ticket, bed: Bed, users: Users, meal: Utensils, bus: Bus, plane: Plane, guide: UserCheck, shield: ShieldCheck };

export const GroupHero = ({ detail }) => {
  const [lb, setLb] = useState(null);
  const g = detail.gallery;
  return (
    <section className="relative" data-testid="group-hero">
      <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-2 md:h-[440px] lg:h-[500px]">
        <button type="button" onClick={() => setLb(0)} className="relative block w-full aspect-[16/10] md:aspect-auto md:h-full overflow-hidden rounded-2xl md:rounded-r-none" data-testid="group-hero-main">
          <img src={detail.hero.main} alt={detail.hero.alt} className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        </button>
        <div className="hidden md:grid grid-rows-2 gap-2 h-full">
          <button type="button" onClick={() => setLb(1)} className="relative overflow-hidden rounded-tr-2xl"><img src={g[1]} alt={`${detail.title} 2`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" /></button>
          <div className="grid grid-cols-2 gap-2">
            <button type="button" onClick={() => setLb(2)} className="relative overflow-hidden"><img src={g[2]} alt={`${detail.title} 3`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" /></button>
            <button type="button" onClick={() => setLb(3)} className="relative overflow-hidden rounded-br-2xl"><img src={g[3]} alt={`${detail.title} 4`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" /></button>
          </div>
        </div>
      </div>
      <button type="button" onClick={() => setLb(0)} className="absolute bottom-4 right-4 inline-flex items-center gap-2 h-11 px-4 rounded-full bg-white/95 hover:bg-white text-[#174358] eg-label-lg shadow-sm" data-testid="group-hero-all-photos"><Images size={18} /> All photos ({g.length})</button>
      {lb !== null && <Lightbox images={g} name={detail.title} start={lb} onClose={() => setLb(null)} />}
    </section>
  );
};

const Meter = ({ m, icon: Icon, testId }) => (
  <div className="flex items-center gap-3" data-testid={testId}>
    <Icon size={18} className="text-[#174358]" />
    <div><p className="eg-label-md text-[#5B6B74]">{m.label}</p><p className="eg-label-lg text-[#002131]">{m.value}</p></div>
    <div className="flex gap-1 ml-1">{[1, 2, 3, 4].map((i) => <span key={i} className={`w-5 h-1.5 rounded-full ${i <= m.level ? 'bg-[#E75E26]' : 'bg-[#E4E3DB]'}`} />)}</div>
  </div>
);

export const GroupTitle = ({ detail }) => (
  <div className="flex flex-col gap-4" data-testid="group-title-block">
    <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-1 eg-label-md text-[#5B6B74]">{detail.crumbs.map(([l, h], i) => <li key={l} className="flex items-center gap-1">{h ? <Link to={h} className="hover:text-[#002131]">{l}</Link> : <span className="text-[#002131]">{l}</span>}{i < detail.crumbs.length - 1 && <span>›</span>}</li>)}</ol></nav>
    <h1 className="eg-display-lg md:!text-[44px] md:!leading-[52px] text-[#002131]" data-testid="group-title">{detail.title}</h1>
    <p className="eg-body-lg text-[#5B6B74] -mt-2">{detail.tagline}</p>
    <div className="flex flex-wrap gap-2" data-testid="group-chips">
      {[[CalendarDays, `${detail.days} days · ${detail.nights} nights`], [Users, `Small group · max ${detail.groupSize}`], [Clock, 'Fixed departures'], [UserCheck, `Ages ${detail.ages}`]].map(([I, t]) => <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-[#002131] text-white px-3 h-8 eg-label-md"><I size={14} />{t}</span>)}
    </div>
    <div className="flex flex-wrap gap-x-10 gap-y-3 pt-1"><Meter m={detail.physicality} icon={Activity} testId="group-meter-physicality" /><Meter m={detail.downtime} icon={Coffee} testId="group-meter-downtime" /></div>
    <p className="eg-body-lg text-[#002131] max-w-[760px]" data-testid="group-intro">{detail.intro}</p>
  </div>
);

export const Inclusions = ({ included, notIncluded, whyUs }) => (
  <section id="included" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8" data-testid="group-inclusions">
    <div className="rounded-2xl border border-[#C4CBD0] bg-white p-5 md:p-6">
      <h2 className="eg-headline-md text-[#002131]">What's included</h2>
      <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3" data-testid="group-included-list">
        {included.map((it) => { const I = ICONS[it.icon] || Check; return (
          <li key={it.text} className="flex items-start gap-3 rounded-xl bg-[#FBEADB] px-3.5 py-3"><span className="mt-0.5 w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0"><I size={16} className="text-[#174358]" /></span><span className="eg-body-md text-[#002131]">{it.text}</span></li>
        ); })}
      </ul>
      <h3 className="eg-title-md text-[#002131] mt-6">What's not included</h3>
      <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2" data-testid="group-not-included-list">
        {notIncluded.map((t) => <li key={t} className="flex items-start gap-2 eg-body-md text-[#5B6B74]"><X size={16} className="text-[#B3261E] mt-0.5 shrink-0" />{t}</li>)}
      </ul>
    </div>
    <div className="rounded-2xl bg-[#002131] text-white p-5 md:p-6 flex flex-col gap-5" data-testid="group-why-us">
      <h2 className="eg-title-lg">Why Hi Tours group tours</h2>
      {whyUs.map((w, i) => <div key={w.title} className="flex gap-3"><span className="w-7 h-7 rounded-full bg-[#E75E26] flex items-center justify-center eg-label-md shrink-0">{i + 1}</span><div><p className="eg-label-lg">{w.title}</p><p className="eg-body-sm text-white/70 mt-0.5">{w.text}</p></div></div>)}
    </div>
  </section>
);

export const BookBox = ({ detail, departures, loading, onOpen, className = '' }) => {
  const { openLead } = useLeadModal();
  const next = nextOpen(departures);
  const low = lowestPrice(departures) ?? detail.basePrice;
  const dep10 = Math.round((low * detail.depositPct) / 100);
  const dep5 = Math.round((low * detail.earlyBirdPct) / 100);
  return (
    <div className={`bg-white rounded-2xl border border-[#C4CBD0] p-5 md:p-6 flex flex-col gap-4 ${className}`} data-testid="group-book-box">
      <div>
        <p className="eg-label-md text-[#5B6B74]">{detail.days} days · from</p>
        <p className="eg-headline-lg text-[#002131]" data-testid="group-price">{fmtInr(low)} <span className="eg-label-lg text-[#5B6B74] font-normal">per person</span></p>
      </div>
      <div className="rounded-xl bg-[#FBEADB] px-4 py-3" data-testid="group-deposit-box">
        <p className="eg-label-md text-[#C84D1B]">Pay only</p>
        <p className="eg-title-lg text-[#002131]"><span data-testid="group-deposit-amount">{fmtInr(dep10)}</span> <span className="eg-label-lg text-[#5B6B74] font-normal">deposit ({detail.depositPct}%)</span></p>
        <p className="eg-label-md text-[#5B6B74] mt-1">On departures 60+ days away; early-bird dates need just {detail.earlyBirdPct}% ({fmtInr(dep5)}). Balance due 60 days before you fly; departures within 60 days are paid in full.</p>
      </div>
      <button type="button" onClick={() => onOpen(null)} className="eg-btn-filled w-full !h-14 eg-title-md" data-testid="group-view-dates">View dates & prices</button>
      <button type="button" onClick={() => openLead()} className="eg-btn-outlined w-full !h-11 !rounded-full eg-label-lg" data-testid="group-speak-expert">Speak to a Sri Lanka expert</button>
      <hr className="border-[#E4E3DB]" />
      <div className="flex flex-col gap-2" data-testid="group-next-departures">
        <p className="eg-label-lg text-[#002131]">Next departures</p>
        {loading && <p className="eg-label-md text-[#5B6B74]">Loading…</p>}
        {departures.filter((d) => d.status !== 'sold_out').slice(0, 3).map((d) => (
          <button key={d.id} type="button" onClick={() => onOpen(d)} className="flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 -mx-2 hover:bg-[#FBF9F1] text-left" data-testid={`group-next-${d.id}`}>
            <span className="eg-body-md text-[#002131]">{fmtDate(d.start, { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            <span className="eg-label-md text-[#5B6B74]">{d.status === 'limited' ? <span className="text-[#C84D1B]">{d.seats_left} left</span> : `${fmtInr(depositOf(d).deposit)} ${payWord(d)}`}</span>
          </button>
        ))}
        {next && <button type="button" onClick={() => onOpen(null)} className="eg-label-lg text-[#174358] underline self-start" data-testid="group-all-dates">See all dates</button>}
      </div>
    </div>
  );
};

export const MobileBookBar = ({ detail, departures, onOpen }) => {
  const low = lowestPrice(departures) ?? detail.basePrice;
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-[#FBF9F1]/95 backdrop-blur border-t border-[#E4E3DB] px-4 py-3 flex items-center justify-between gap-3" data-testid="group-mobile-bar">
      <div><p className="eg-title-md text-[#002131]">From {fmtInr(low)} <span className="eg-label-md text-[#5B6B74] font-normal">pp</span></p><p className="eg-label-md text-[#C84D1B]">From {fmtInr(Math.round((low * detail.depositPct) / 100))} deposit</p></div>
      <button type="button" onClick={() => onOpen(null)} className="eg-btn-filled !h-12 px-5 eg-label-lg" data-testid="group-mobile-dates">Dates & prices</button>
    </div>
  );
};
