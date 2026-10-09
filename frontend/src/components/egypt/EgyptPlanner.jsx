import React, { useEffect, useState } from 'react';
import { planner } from '../../egyptListingData';
import { CheckCircleIcon } from './EgyptIcons';
import PhoneInput, { EMPTY_PHONE, phoneError, phonePayload } from './PhoneInput';
import FlightPath from '../FlightPath';
import { GoogleLogo, TripAdvisorLogo } from '../Rating';
import { Heart, Star } from 'lucide-react';
import { ratings } from '../../mock';

const BACKEND = process.env.REACT_APP_BACKEND_URL;

const inputCls = 'h-11 w-full rounded-lg border border-[#C4CBD0] bg-white px-3.5 eg-body-lg text-[#002131] placeholder:text-[#8A9297] focus:border-[#308BB6] focus:shadow-[0_0_0_3px_rgba(48,139,182,0.15)] focus:outline-none';
const labelCls = 'eg-label-lg text-[#174358]';

function LeadForm({ data, form, set, setPhone, status, valid, submit, prefix }) {
  if (status === 'done') {
    return (
      <div className="py-6 flex flex-col items-center text-center gap-2" data-testid={`${prefix}-success`}>
        <div className="w-12 h-12 rounded-full bg-[#174358] text-white flex items-center justify-center"><CheckCircleIcon size={28} /></div>
        <h4 className="eg-title-lg text-[#002131]">{data.successTitle}</h4>
        <p className="eg-body-md text-[#174358]">{data.successText}</p>
      </div>
    );
  }
  return (
    <form onSubmit={submit} className="flex flex-col gap-3" data-testid={`${prefix}-form`}>
      <label className="flex flex-col gap-1">
        <span className={labelCls}>{data.nameLabel}</span>
        <input type="text" autoComplete="name" value={form.name} onChange={set('name')} placeholder={data.namePlaceholder} className={inputCls} data-testid={`${prefix}-name`} />
      </label>
      <label className="flex flex-col gap-1">
        <span className={labelCls}>{data.phoneLabel}</span>
        <PhoneInput value={form.phone} onChange={setPhone} placeholder={data.phonePlaceholder} className="h-11 w-full rounded-lg border border-[#C4CBD0] bg-white focus-within:border-[#308BB6] focus-within:shadow-[0_0_0_3px_rgba(48,139,182,0.15)]" testId={`${prefix}-phone`} />
      </label>
      <label className="flex flex-col gap-1">
        <span className={labelCls}>{data.emailLabel}</span>
        <input type="email" autoComplete="email" value={form.email} onChange={set('email')} placeholder={data.emailPlaceholder} className={inputCls} data-testid={`${prefix}-email`} />
      </label>
      {status === 'error' && <p className="eg-body-md text-[#B42318]" data-testid={`${prefix}-error`}>Something went wrong. Please try again.</p>}
      <button type="submit" disabled={!valid || status === 'sending'} className="eg-btn-filled w-full !h-12 mt-1 eg-title-md disabled:opacity-60 disabled:cursor-not-allowed" data-testid={`${prefix}-submit`}>
        {status === 'sending' ? data.sending : data.cta}
      </button>
    </form>
  );
}

const Social = ({ data, compact = false }) => (
  <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
    <div className="flex">
      {data.avatars.map((a, i) => <img key={a} src={a} alt="" className={`${compact ? 'w-5 h-5' : 'w-6 h-6'} rounded-full border border-white object-cover`} style={{ marginLeft: i ? -4 : 0 }} />)}
    </div>
    <span className={`${compact ? 'eg-label-md' : 'eg-title-md'} text-white`}>{data.social}</span>
    <Heart size={compact ? 15 : 18} className="heart-beat text-[#FF6B6B] fill-[#FF6B6B] drop-shadow-[0_2px_6px_rgba(255,107,107,0.45)]" aria-hidden="true" />
  </div>
);

const Ratings = ({ className = '' }) => (
  <div className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-1 ${className}`} data-testid="eg-planner-ratings">
    <span className="flex items-center gap-1.5 whitespace-nowrap eg-body-md text-[#174358]" data-testid="eg-planner-acc-google">
      <GoogleLogo size={16} />Rated <b className="font-semibold text-[#002131]">{ratings.google.score}</b> on Google
    </span>
    <span className="w-px h-4 bg-[#C4CBD0] hidden sm:block" />
    <span className="flex items-center gap-1.5 whitespace-nowrap eg-body-md text-[#174358]" data-testid="eg-planner-acc-tripadvisor">
      <TripAdvisorLogo size={16} />Rated <b className="font-semibold text-[#002131]">{ratings.tripadvisor.score}</b> on TripAdvisor
    </span>
  </div>
);

const Stars = () => (
  <span className="flex gap-0.5 text-[#F4B400]" aria-label="5 star review">
    {[0, 1, 2, 3, 4].map((k) => <Star key={k} size={12} className="fill-current" />)}
  </span>
);

// Rotating traveller quote: one crisp line clamp, avatar initial, stars, no separators.
const QuoteScroller = ({ quotes, destination, className = '', lines = 2 }) => {
  const [i, setI] = useState(0);
  const list = (quotes || []).filter((q) => q && q.text);
  useEffect(() => {
    if (list.length < 2) return undefined;
    const t = setTimeout(() => setI((v) => (v + 1) % list.length), 6000);
    return () => clearTimeout(t);
  }, [i, list.length]);
  if (!list.length) return null;
  const q = list[i % list.length];
  const text = q.text.trim().replace(/\s*[-–—]\s*/g, ', ').replace(/[.,;:\s]+$/, '').replace(/\.{3,}$/, '');
  return (
    <div className={`relative rounded-xl bg-white border border-[#E4E3DB] px-4 py-3.5 shadow-[0_2px_10px_rgba(0,33,49,0.05)] ${className}`} data-testid="eg-planner-quotes">
      <span className="absolute -top-3 left-4 h-6 px-2 rounded-full bg-[#308BB6] text-white eg-label-md uppercase tracking-[0.12em] flex items-center">Traveller stories</span>
      <div key={i} className="flex gap-3 animate-[hi-fade-in_400ms_ease-out]">
        <span className="shrink-0 w-9 h-9 rounded-full bg-[#174358] text-white eg-title-md flex items-center justify-center" aria-hidden="true">{(q.name || '?')[0]}</span>
        <div className="min-w-0 flex-1">
          <p className={`eg-body-md text-[#002131] ${lines === 3 ? 'line-clamp-3' : 'line-clamp-2'}`} data-testid="eg-planner-quote-text">&ldquo;{text}.&rdquo;</p>
          <div className="mt-1.5 flex items-center gap-2 flex-wrap">
            <span className="eg-label-lg text-[#002131]" data-testid="eg-planner-quote-author">{q.name}</span>
            <Stars />
            {destination && <span className="eg-body-sm text-[#6F777C]">{destination} trip</span>}
          </div>
        </div>
        {list.length > 1 && (
          <div className="shrink-0 flex flex-col justify-center gap-1" aria-hidden="true">
            {list.slice(0, 4).map((x, k) => (
              <button key={x.name + k} type="button" onClick={() => setI(k)} aria-label={`Review ${k + 1}`} className={`w-1.5 rounded-full transition-all ${k === i % Math.min(list.length, 4) ? 'h-4 bg-[#174358]' : 'h-1.5 bg-[#C4CBD0] hover:bg-[#8A9297]'}`} data-testid="eg-planner-quote-dot" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const overlay = 'absolute inset-0 bg-[linear-gradient(135deg,rgba(0,33,49,0.72)_0%,rgba(23,67,88,0.45)_60%,rgba(48,139,182,0.35)_100%)]';
const destinationOf = (h3) => (h3 || '').replace(/^Customize your\s+/i, '').replace(/\s+trip$/i, '');

export default function EgyptPlanner({ className = 'mt-12 md:mt-16 px-4 sm:px-8 lg:px-10', titleClass = 'eg-display-sm', data = planner, tripTitle = '', source = 'egypt-planner', quotes = [] }) {
  const [form, setForm] = useState({ name: '', phone: EMPTY_PHONE, email: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const setPhone = (v) => setForm((f) => ({ ...f, phone: v }));
  const valid = form.name.trim().length > 1 && !phoneError(form.phone) && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim());
  const destination = destinationOf(data.h3);

  const submit = async (e) => {
    e.preventDefault();
    if (!valid || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch(`${BACKEND}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name.trim(), ...phonePayload(form.phone), email: form.email.trim(), destination, trip_title: tripTitle, source })
      });
      if (!res.ok) throw new Error('bad');
      setStatus('done');
    } catch (err) {
      setStatus('error');
    }
  };
  const formProps = { data, form, set, setPhone, status, valid, submit };

  return (
    <section className={className} data-testid="eg-planner">
      <div className="relative h-[720px] hidden lg:block">
        <div className="relative h-[372px] rounded-2xl overflow-hidden">
          <img src={data.bg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className={overlay} />
          <div className="absolute inset-x-0 top-0 pt-[43px] px-6 flex flex-col items-center gap-1 text-white">
            <h3 className={`${titleClass} text-white text-center`}>{data.h3}</h3>
            <Social data={data} />
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[141px] w-[600px] rounded-2xl bg-[#FEFCF4] shadow-[0_1px_2px_rgba(0,0,0,0.3),0_12px_32px_rgba(0,33,49,0.18)] z-10 overflow-hidden" data-testid="eg-planner-card">
          <div className="pt-6 px-10 pb-5">
            <LeadForm {...formProps} prefix="eg-planner" />
          </div>
          <div className="bg-[#F0EEE6] px-10 pt-4 pb-5 flex flex-col gap-5">
            <Ratings />
            <QuoteScroller quotes={quotes} destination={destination} />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-6 pointer-events-none" data-testid="eg-planner-flight">
          <FlightPath side="left" className="w-[220px] h-auto" />
          <FlightPath side="right" className="w-[220px] h-auto" />
        </div>
      </div>

      {/* Compact layout below lg */}
      <div className="lg:hidden relative rounded-2xl overflow-hidden">
        <img src={data.bg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className={overlay} />
        <div className="relative p-3 pt-5 sm:p-5 flex flex-col items-center gap-3">
          <h3 className="eg-headline-md text-white text-center">{data.h3}</h3>
          <Social data={data} compact />
          <div className="w-full max-w-[560px] rounded-2xl bg-[#FEFCF4] overflow-hidden" data-testid="eg-planner-card-mobile">
            <div className="p-4 pb-4">
              <LeadForm {...formProps} prefix="eg-planner-m" />
            </div>
            <div className="bg-[#F0EEE6] px-4 pt-3 pb-4 flex flex-col gap-4">
              <Ratings />
              <QuoteScroller quotes={quotes} destination={destination} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
