import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Sparkles, Wallet, UserCheck } from 'lucide-react';
import { Lightbox, RouteLine } from '../egypt/EgyptRoute';
import { ServiceIcon, CheckBadge, CalendarIcon, PinIcon, GalleryIcon, ChevronRight, CheckCircleIcon } from '../egypt/EgyptIcons';
import { GoogleLogo, TripAdvisorLogo } from '../Rating';
import { ratings as trustBar } from '../../mock';
import { experts, brandFeatures } from '../../egyptDetailData';
import SalePrice from '../sale/SalePrice';
import { fmtInr, lowestPrice } from '../../grouptours/groupBooking';
import { useLeadModal } from '../egypt/LeadModalProvider';

export const Ratings = ({ className = '' }) => (
  <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 ${className}`} data-testid="group-ratings-row">
    <span className="flex items-center gap-2 eg-label-lg text-[#002131]"><GoogleLogo size={18} />Rated {trustBar.google.score} on Google</span>
    <span className="flex items-center gap-2 eg-label-lg text-[#002131]"><TripAdvisorLogo size={20} />Rated {trustBar.tripadvisor.score} on TripAdvisor</span>
  </div>
);

export const HoldButton = ({ deposit, onClick, className = '', testId }) => (
  <button type="button" onClick={onClick} className={`eg-btn-filled h-12 px-7 eg-title-md ${className}`} data-testid={testId}>Hold my seat · {fmtInr(deposit)}</button>
);

function Gallery({ detail }) {
  const g = detail.gallery;
  const [lb, setLb] = useState(null);
  const [gi, setGi] = useState(0);
  const t = useRef(null);
  const onScroll = (e) => { const el = e.currentTarget; clearTimeout(t.current); t.current = setTimeout(() => setGi(Math.min(g.length - 1, Math.round(el.scrollLeft / el.clientWidth))), 80); };
  return (
    <div className="relative" data-testid="group-hero">
      {lb !== null && <Lightbox images={g} name={detail.title} start={lb} onClose={() => setLb(null)} />}
      <div onScroll={onScroll} className="md:hidden flex overflow-x-auto no-scrollbar snap-x snap-mandatory h-[240px] rounded-t-2xl" data-testid="group-gallery-mobile">
        {g.map((src, i) => <img key={src} src={src} alt={`${detail.hero.alt} - Image ${i + 1}`} className="w-full h-full object-cover shrink-0 snap-center" loading={i ? 'lazy' : 'eager'} />)}
      </div>
      <div className="hidden md:grid grid-cols-2 gap-1 h-[328px] rounded-t-2xl overflow-hidden" data-testid="group-gallery-desktop">
        <button type="button" onClick={() => setLb(0)} className="relative cursor-pointer" aria-label="Open photo 1" data-testid="group-hero-main"><img src={g[0]} alt={detail.hero.alt} className="absolute inset-0 w-full h-full object-cover" loading="eager" /></button>
        <div className="grid grid-cols-2 grid-rows-2 gap-1">
          {g.slice(1, 5).map((src, i) => <button type="button" key={src} onClick={() => setLb(i + 1)} className="relative cursor-pointer" aria-label={`Open photo ${i + 2}`}><img src={src} alt={`${detail.title} ${i + 2}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" /></button>)}
        </div>
      </div>
      <button type="button" onClick={() => setLb(0)} className="hidden md:inline-flex absolute bottom-3 right-3 z-[2] h-11 w-11 items-center justify-center rounded-full bg-white/90 hover:bg-white text-[#174358] shadow-sm transition-colors" aria-label={`View all ${g.length} photos`} data-testid="group-hero-all-photos"><GalleryIcon size={20} /></button>
      <div className="md:hidden absolute inset-x-0 bottom-3 z-[2] flex justify-center gap-1.5 pointer-events-none">
        {g.map((_, i) => <span key={i} className={`h-1.5 rounded-full transition-all ${i === gi ? 'w-4 bg-white' : 'w-1.5 bg-white/60'}`} />)}
      </div>
    </div>
  );
}

export const GroupHead = ({ detail, stops }) => (
  <div className="eg-wide" data-testid="group-head">
    <Gallery detail={detail} />
    <div className="bg-[#F0EEE6] rounded-b-2xl p-4 md:p-6">
      <div className="flex flex-col gap-4">
        <h1 className="eg-card-title !text-[22px] !leading-[28px] sm:!text-[26px] sm:!leading-8 md:!text-[30px] md:!leading-9 text-[#002131]" data-testid="group-title">{detail.title}: {detail.tagline}</h1>
        <div className="flex flex-wrap items-center gap-2" data-testid="group-chips">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#C4CBD0] px-3 py-1.5 eg-label-lg text-[#002131]"><CalendarIcon size={18} className="text-[#308BB6]" />{detail.days} days</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#C4CBD0] px-3 py-1.5 eg-label-lg text-[#002131]"><PinIcon size={18} className="text-[#308BB6]" />{stops.length} places</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#C4CBD0] px-3 py-1.5 eg-label-lg text-[#002131]"><Users size={18} className="text-[#308BB6]" />Small group · max {detail.groupSize}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#C4CBD0] px-3 py-1.5 eg-label-lg text-[#002131]"><CalendarIcon size={18} className="text-[#308BB6]" />Fixed departures</span>
        </div>
        <div className="pt-2 border-t border-[#E4E3DB] flex flex-col gap-2" data-testid="group-route-block">
          <span className="eg-label-lg text-[#002131]">Your route</span>
          <RouteLine cities={stops.map((s) => s.name)} testId="group-route-line" />
        </div>
      </div>
    </div>
  </div>
);

export const GroupCrumbs = ({ crumbs }) => (
  <nav className="eg-wide hidden md:block" aria-label="Breadcrumb" data-testid="group-breadcrumb">
    <ol className="md:px-5 flex flex-wrap items-center gap-1">
      {crumbs.map(([label, href], i) => (
        <li key={label} className="flex items-center gap-1 min-w-0">
          {i > 0 && <ChevronRight size={18} className="text-[#6F777C] shrink-0" />}
          {href ? <Link to={href} className="eg-body-md text-[#174358] hover:underline">{label}</Link> : <span className="eg-label-lg text-[#002131]">{label}</span>}
        </li>
      ))}
    </ol>
  </nav>
);

export const ServicePills = ({ services, testId = 'group-services' }) => (
  <ul className="grid grid-cols-2 gap-2" data-testid={testId}>
    {services.map(([label, icon, long]) => <li key={label} className="flex items-center gap-2.5 rounded-lg bg-[#FBEADB] px-3 min-h-[44px] py-1.5 eg-label-lg text-[#002131]"><ServiceIcon name={icon} size={20} className="text-[#174358] shrink-0" /><span className="leading-tight"><span className={long ? 'md:hidden' : ''}>{label}</span>{long && <span className="hidden md:inline">{long}</span>}</span></li>)}
  </ul>
);

export const PriceCard = ({ detail, departures, onOpen, compact = false }) => {
  const { openLead } = useLeadModal();
  const low = lowestPrice(departures) ?? detail.basePrice;
  return (
    <div className="bg-white rounded-2xl border border-[#C4CBD0] p-5 md:p-6 flex flex-col gap-4" data-testid="group-book-box">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-0.5">
          <span className="eg-body-md text-[#6F777C]">Hold your seat today for</span>
          <span className="flex items-baseline gap-1.5"><span className="eg-price text-[#174358] tabular-nums" data-testid="group-deposit-amount">{fmtInr(detail.depositPp)}</span><span className="eg-body-md text-[#6F777C]">per traveller</span></span>
          <span className="eg-body-sm text-[#6F777C]">Non-refundable deposit · balance due 60 days before departure</span>
        </div>
        <SalePrice price={low} noSale size="bar" fromLabel="Trip price from" perLabel="per person" testId="group-price" />
        <HoldButton deposit={detail.depositPp} onClick={() => onOpen(null)} className="w-full !h-16 !text-[18px]" testId="group-view-dates" />
        <button type="button" onClick={() => openLead()} className="eg-btn-outlined w-full !h-12 eg-label-lg" data-testid="group-speak-expert">Speak to a Sri Lanka expert</button>
      </div>
      {!compact && (
        <>
          <hr className="border-[#E4E3DB]" />
          <div className="flex flex-col gap-3">
            <p className="eg-title-md text-[#002131]">What’s included</p>
            <ServicePills services={detail.services} testId="group-box-services" />
          </div>
          <hr className="border-[#E4E3DB]" />
          <ul className="flex flex-col gap-2" data-testid="group-trust">
            {['Free date changes until the balance is due', 'Hi Tours Cares: 24/7 on-ground support', 'Secure payments by Razorpay'].map((t) => <li key={t} className="flex items-center gap-2 eg-body-md text-[#174358]"><CheckCircleIcon size={18} className="text-[#308BB6] shrink-0" />{t}</li>)}
          </ul>
        </>
      )}
      <hr className="border-[#E4E3DB]" />
      <Ratings />
    </div>
  );
};

export const ExpertCard = ({ detail }) => (
  <div className="flex items-start gap-3" data-testid="group-expert">
    <img src={detail.expert.image} alt={detail.expert.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
    <div className="flex flex-col gap-2 min-w-0">
      <p className="eg-title-md text-[#002131]">Led by {detail.expert.name}, {detail.expert.role} <CheckBadge size={18} className="inline text-[#174358] -mt-0.5" /></p>
      <p className="eg-quote !text-[18px] !leading-[29px] md:!text-[20px] md:!leading-[32px] text-[#002131]">“{detail.expert.quote}”</p>
    </div>
  </div>
);

const WHY_ICONS = { users: Users, sparkles: Sparkles, leader: UserCheck, wallet: Wallet };
export const WhyGroup = ({ data, testId = 'group-why' }) => (
  <div className="rounded-2xl border border-[#C4CBD0] bg-[#FBF9F1] py-6 flex flex-col gap-6" data-testid={testId}>
    <div className="flex flex-col gap-4">
      <h2 className="eg-headline-md text-[#002131] text-center px-6">{data.h2}</h2>
      <div className="px-5 flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <hr className="flex-1 border-[#C4CBD0]" />
          <div className="flex items-center">{experts.avatars.map((a, i) => <img key={a} src={a} alt="Hi Tours trip leader" className={`w-10 h-10 rounded-full border-2 border-white object-cover ${i ? '-ml-2.5' : ''}`} loading="lazy" />)}</div>
          <hr className="flex-1 border-[#C4CBD0]" />
        </div>
        <p className="eg-title-md text-[#002131] text-center h-12 flex items-center justify-center">{data.sub}</p>
      </div>
    </div>
    <div className="px-6 flex flex-col gap-5">
      {data.items.map((it) => { const I = WHY_ICONS[it.icon]; return (
        <div key={it.h} className="flex items-center gap-4">
          <span className="w-11 h-11 rounded-full bg-[#E0F7FF] shrink-0 flex items-center justify-center text-[#174358]"><I size={20} /></span>
          <div className="flex flex-col gap-1"><p className="eg-title-md text-[#002131]">{it.h}</p><p className="eg-body-md text-[#174358]">{it.t}</p></div>
        </div>
      ); })}
    </div>
  </div>
);

export const Inclusions = ({ included, notIncluded }) => (
  <section id="included" className="eg-container flex flex-col gap-6 scroll-mt-4" data-testid="group-inclusions">
    <h2 className="eg-display-sm text-[#002131]">What’s included</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" data-testid="group-included-list">
      {included.map(([text, icon]) => <li key={text} className="flex items-center gap-3 rounded-lg bg-[#FBEADB] px-3 min-h-[52px] py-2 eg-label-lg text-[#002131]"><ServiceIcon name={icon} size={22} className="text-[#174358] shrink-0" /><span className="leading-snug">{text}</span></li>)}
    </ul>
    <div className="flex flex-col gap-2">
      <p className="eg-title-md text-[#002131]">Not included</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5" data-testid="group-not-included-list">
        {notIncluded.map((t) => <li key={t} className="flex items-start gap-2 eg-body-md text-[#174358]"><span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#6F777C] shrink-0" />{t}</li>)}
      </ul>
    </div>
  </section>
);

export const Features = () => (
  <section className="eg-container flex flex-col gap-8" data-testid="group-features">
    <h2 className="eg-display-sm text-[#002131] text-center">{brandFeatures.h2}</h2>
    <div className="grid gap-8 md:grid-cols-3">
      {brandFeatures.items.map((f) => (
        <div key={f.title} className="flex md:flex-col items-start md:items-center gap-4 text-left md:text-center">
          <img src={f.icon} alt="" className="w-[72px] h-[72px] md:w-[120px] md:h-[120px] shrink-0" />
          <div className="md:max-w-[270px] flex flex-col gap-2"><h3 className="eg-title-lg text-[#002131]">{f.title}</h3><p className="eg-body-lg text-[#174358]">{f.text}</p></div>
        </div>
      ))}
    </div>
  </section>
);

export const Steps = ({ data }) => (
  <section className="eg-container flex flex-col gap-8" data-testid="group-steps">
    <h2 className="eg-display-sm text-[#002131] text-center">{data.h2}</h2>
    <div className="flex flex-col sm:flex-row gap-4">
      {data.items.map((st, i) => (
        <div key={st.h} className="flex-1 bg-[#F0EEE6] rounded-xl px-4 py-6 flex flex-col items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-[#308BB6] eg-title-lg text-white flex items-center justify-center">{i + 1}</span>
          <div className="flex flex-col gap-2 text-center"><div className="eg-title-lg text-[#002131]">{st.h}</div><p className="eg-body-lg text-[#174358]">{st.t}</p></div>
        </div>
      ))}
    </div>
  </section>
);

export const StickyBar = ({ detail, departures, onOpen }) => {
  const [show, setShow] = useState(false);
  const low = lowestPrice(departures) ?? detail.basePrice;
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { document.documentElement.classList.toggle('wa-lift', show); return () => document.documentElement.classList.remove('wa-lift'); }, [show]);
  return (
    <div className={`md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#FBF9F1]/95 backdrop-blur border-t border-[#E4E3DB] transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`} data-testid="group-mobile-bar">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:justify-end md:items-center md:py-3 md:px-10">
        <div className="px-4 py-3 md:py-0 md:px-0 md:pl-6 flex items-center justify-between md:justify-end gap-3">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="eg-body-sm text-[#6F777C] whitespace-nowrap">Pay today to hold your seat</span>
            <span className="flex items-baseline gap-1.5 text-[#6F777C] whitespace-nowrap"><span className="eg-price !text-[20px] !leading-6 md:!text-[22px] text-[#174358] tabular-nums">{fmtInr(detail.depositPp)}</span><span className="eg-body-sm">per traveller</span></span>
            <span className="hidden sm:block eg-body-sm text-[#6F777C] whitespace-nowrap">Trip price from {fmtInr(low)} per person</span>
          </div>
          <HoldButton deposit={detail.depositPp} onClick={() => onOpen(null)} className="w-auto !h-14 !px-6 md:!px-8 eg-title-lg shrink-0" testId="group-mobile-dates" />
        </div>
      </div>
    </div>
  );
};
