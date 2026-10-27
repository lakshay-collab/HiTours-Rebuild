import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Images, X, Users, Sparkles, Wallet, UserCheck, Activity, Coffee } from 'lucide-react';
import { Lightbox } from '../egypt/EgyptRoute';
import { ServiceIcon, CheckBadge, CalendarIcon, PinIcon, CheckCircleIcon } from '../egypt/EgyptIcons';
import { GoogleLogo, TripAdvisorLogo } from '../Rating';
import { ratings as trustBar } from '../../mock';
import { experts } from '../../egyptDetailData';
import { fmtInr, lowestPrice } from '../../grouptours/groupBooking';
import { useLeadModal } from '../egypt/LeadModalProvider';

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
    <Icon size={18} className="text-[#308BB6]" />
    <div><p className="eg-label-md text-[#6F777C]">{m.label}</p><p className="eg-label-lg text-[#002131]">{m.value}</p></div>
    <div className="flex gap-1 ml-1">{[1, 2, 3, 4].map((i) => <span key={i} className={`w-5 h-1.5 rounded-full ${i <= m.level ? 'bg-[#308BB6]' : 'bg-[#E4E3DB]'}`} />)}</div>
  </div>
);

export const ServicePills = ({ services, testId = 'group-services' }) => (
  <ul className="grid grid-cols-2 gap-2" data-testid={testId}>
    {services.map(([label, icon, long]) => <li key={label} className="flex items-center gap-2.5 rounded-lg bg-[#FBEADB] px-3 min-h-[44px] py-1.5 eg-label-lg text-[#002131]"><ServiceIcon name={icon} size={20} className="text-[#174358] shrink-0" /><span className="leading-tight"><span className={long ? 'md:hidden' : ''}>{label}</span>{long && <span className="hidden md:inline">{long}</span>}</span></li>)}
  </ul>
);

export const GroupTitle = ({ detail }) => (
  <div className="bg-[#F0EEE6] rounded-2xl p-4 md:p-6 flex flex-col gap-4" data-testid="group-title-block">
    <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-1 eg-body-md text-[#174358]">{detail.crumbs.map(([l, h], i) => <li key={l} className="flex items-center gap-1">{h ? <Link to={h} className="hover:underline">{l}</Link> : <span className="eg-label-lg text-[#002131]">{l}</span>}{i < detail.crumbs.length - 1 && <span className="text-[#6F777C]">›</span>}</li>)}</ol></nav>
    <h1 className="eg-card-title !text-[26px] !leading-8 md:!text-[34px] md:!leading-10 text-[#002131]" data-testid="group-title">{detail.title}: {detail.tagline}</h1>
    <div className="flex flex-wrap items-center gap-2" data-testid="group-chips">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#C4CBD0] px-3 py-1.5 eg-label-lg text-[#002131]"><CalendarIcon size={18} className="text-[#308BB6]" />{detail.days} days</span>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#C4CBD0] px-3 py-1.5 eg-label-lg text-[#002131]"><PinIcon size={18} className="text-[#308BB6]" />8 places</span>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#C4CBD0] px-3 py-1.5 eg-label-lg text-[#002131]"><Users size={18} className="text-[#308BB6]" />Max {detail.groupSize} · ages {detail.ages}</span>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#C4CBD0] px-3 py-1.5 eg-label-lg text-[#002131]"><CalendarIcon size={18} className="text-[#308BB6]" />Fixed departures</span>
    </div>
    <div className="pt-3 border-t border-[#E4E3DB] grid grid-cols-2 sm:grid-cols-3 gap-2" data-testid="group-head-stats">
      {detail.services.map(([label, icon, long]) => <span key={label} className="flex items-center gap-2 eg-label-lg text-[#002131]"><ServiceIcon name={icon} size={20} className="text-[#174358] shrink-0" /><span className="sm:hidden">{label}</span><span className="hidden sm:inline">{long}</span></span>)}
    </div>
    <div className="flex flex-wrap gap-x-10 gap-y-3 pt-1"><Meter m={detail.physicality} icon={Activity} testId="group-meter-physicality" /><Meter m={detail.downtime} icon={Coffee} testId="group-meter-downtime" /></div>
  </div>
);

export const ExpertQuote = ({ detail }) => (
  <div className="flex items-start gap-3" data-testid="group-expert">
    <img src={detail.expert.image} alt={detail.expert.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
    <div className="flex flex-col gap-2 min-w-0">
      <p className="eg-title-md text-[#002131]">Trip led by {detail.expert.name}, {detail.expert.role} <CheckBadge size={18} className="inline text-[#174358] -mt-0.5" /></p>
      <p className="eg-quote !text-[18px] !leading-[29px] md:!text-[20px] md:!leading-[32px] text-[#002131]">“{detail.expert.quote}”</p>
    </div>
  </div>
);

export const Inclusions = ({ included, notIncluded }) => (
  <section id="included" className="scroll-mt-24 flex flex-col gap-5" data-testid="group-inclusions">
    <h2 className="eg-display-sm text-[#002131]">What’s included</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" data-testid="group-included-list">
      {included.map(([text, icon]) => <li key={text} className="flex items-center gap-3 rounded-lg bg-[#FBEADB] px-3 min-h-[52px] py-2 eg-label-lg text-[#002131]"><ServiceIcon name={icon} size={22} className="text-[#174358] shrink-0" /><span className="leading-snug">{text}</span></li>)}
    </ul>
    <div>
      <p className="eg-title-md text-[#002131]">Not included</p>
      <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5" data-testid="group-not-included-list">
        {notIncluded.map((t) => <li key={t} className="flex items-start gap-2 eg-body-md text-[#174358]"><X size={16} className="text-[#6F777C] mt-1 shrink-0" />{t}</li>)}
      </ul>
    </div>
  </section>
);

const WHY_ICONS = { users: Users, sparkles: Sparkles, leader: UserCheck, wallet: Wallet };
export const WhyGroup = ({ data }) => (
  <section className="rounded-2xl border border-[#C4CBD0] bg-[#FBF9F1] py-6 flex flex-col gap-6" data-testid="group-why">
    <div className="flex flex-col gap-3 px-5 md:px-6">
      <h2 className="eg-headline-md text-[#002131] text-center">{data.h2}</h2>
      <div className="flex items-center gap-4">
        <hr className="flex-1 border-[#C4CBD0]" />
        <div className="flex items-center">{experts.avatars.map((a, i) => <img key={a} src={a} alt="Hi Tours trip leader" className={`w-10 h-10 rounded-full border-2 border-white object-cover ${i ? '-ml-2.5' : ''}`} loading="lazy" />)}</div>
        <hr className="flex-1 border-[#C4CBD0]" />
      </div>
      <p className="eg-title-md text-[#002131] text-center">{data.sub}</p>
    </div>
    <div className="px-5 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-5">
      {data.items.map((it) => { const I = WHY_ICONS[it.icon]; return (
        <div key={it.h} className="flex items-start gap-4">
          <span className="w-11 h-11 rounded-full bg-[#E0F7FF] shrink-0 flex items-center justify-center text-[#174358]"><I size={20} /></span>
          <div className="flex flex-col gap-1"><p className="eg-title-md text-[#002131]">{it.h}</p><p className="eg-body-md text-[#174358]">{it.t}</p></div>
        </div>
      ); })}
    </div>
  </section>
);

export const Ratings = ({ className = '' }) => (
  <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 ${className}`} data-testid="group-ratings-row">
    <span className="flex items-center gap-2 eg-label-lg text-[#002131]"><GoogleLogo size={18} />Rated {trustBar.google.score} on Google</span>
    <span className="flex items-center gap-2 eg-label-lg text-[#002131]"><TripAdvisorLogo size={20} />Rated {trustBar.tripadvisor.score} on TripAdvisor</span>
  </div>
);

export const HoldButton = ({ deposit, onClick, className = '', testId }) => (
  <button type="button" onClick={onClick} className={`eg-btn-filled h-12 px-7 eg-title-md ${className}`} data-testid={testId}>Hold my seat · {fmtInr(deposit)}</button>
);

export const BookBox = ({ detail, departures, onOpen, className = '' }) => {
  const { openLead } = useLeadModal();
  const low = lowestPrice(departures) ?? detail.basePrice;
  return (
    <div className={`bg-white rounded-2xl border border-[#C4CBD0] p-5 md:p-6 flex flex-col gap-4 ${className}`} data-testid="group-book-box">
      <div className="flex flex-col gap-1">
        <p className="eg-label-md text-[#6F777C]">Pay today, per traveller</p>
        <p className="eg-headline-lg text-[#002131]" data-testid="group-deposit-amount">{fmtInr(detail.depositPp)}</p>
        <p className="eg-body-md text-[#174358]">Hold your seat with a non-refundable deposit. Trip price from <strong data-testid="group-price">{fmtInr(low)}</strong> per person; the rest is due 60 days before departure.</p>
      </div>
      <HoldButton deposit={detail.depositPp} onClick={() => onOpen(null)} className="w-full !h-16 !text-[18px]" testId="group-view-dates" />
      <button type="button" onClick={() => openLead()} className="eg-btn-outlined w-full !h-12 eg-label-lg" data-testid="group-speak-expert">Speak to a Sri Lanka expert</button>
      <hr className="border-[#E4E3DB]" />
      <div className="flex flex-col gap-3">
        <p className="eg-title-md text-[#002131]">What’s included</p>
        <ServicePills services={detail.services} testId="group-box-services" />
      </div>
      <hr className="border-[#E4E3DB]" />
      <ul className="flex flex-col gap-2" data-testid="group-trust">
        {['Free date changes until the balance is due', 'Hi Tours Cares: 24/7 on-ground support', 'Secure payments by Razorpay (UPI, cards, net banking)'].map((t) => <li key={t} className="flex items-center gap-2 eg-body-md text-[#174358]"><CheckCircleIcon size={18} className="text-[#308BB6] shrink-0" />{t}</li>)}
      </ul>
      <Ratings />
    </div>
  );
};

export const MobileBookBar = ({ detail, departures, onOpen }) => {
  const low = lowestPrice(departures) ?? detail.basePrice;
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-[#E4E3DB] px-4 py-3 flex items-center justify-between gap-3" data-testid="group-mobile-bar">
      <div><p className="eg-label-md text-[#6F777C]">Pay today · trip from {fmtInr(low)} pp</p><p className="eg-title-lg text-[#002131] leading-tight">{fmtInr(detail.depositPp)} <span className="eg-label-md text-[#6F777C] font-normal">per traveller</span></p></div>
      <HoldButton deposit={detail.depositPp} onClick={() => onOpen(null)} className="!h-12 px-5 !text-[15px] shrink-0" testId="group-mobile-dates" />
    </div>
  );
};
