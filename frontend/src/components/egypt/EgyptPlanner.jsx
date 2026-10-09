import React, { useEffect, useState } from 'react';
import { planner } from '../../egyptListingData';
import { CheckCircleIcon } from './EgyptIcons';
import PhoneInput, { EMPTY_PHONE, phoneError, phonePayload } from './PhoneInput';
import { FlightThrough } from '../FlightPath';
import { GoogleLogo, TripAdvisorLogo } from '../Rating';
import { Heart, Star } from 'lucide-react';
import { ratings } from '../../mock';

const BACKEND = process.env.REACT_APP_BACKEND_URL;
const GREEN = '#00B67A';

const inputCls = 'h-11 w-full rounded-lg border border-[#C4CBD0] bg-white px-3.5 eg-body-lg text-[#002131] placeholder:text-[#8A9297] focus:border-[#308BB6] focus:shadow-[0_0_0_3px_rgba(48,139,182,0.15)] focus:outline-none';
const labelCls = 'eg-label-lg text-[#174358]';

function LeadForm({ data, form, set, setPhone, status, valid, submit, prefix, between = null }) {
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
      {between}
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
  <div className={`flex items-center justify-center gap-x-3 sm:gap-x-4 whitespace-nowrap ${className}`} data-testid="eg-planner-ratings">
    <span className="flex items-center gap-1 sm:gap-1.5 text-[12px] sm:text-[14px] leading-5 text-[#174358]" data-testid="eg-planner-acc-google">
      <GoogleLogo size={15} /><span className="hidden sm:inline">Rated&nbsp;</span><b className="font-semibold text-[#002131]">{ratings.google.score}</b> on Google
    </span>
    <span className="w-px h-4 bg-[#C4CBD0]" />
    <span className="flex items-center gap-1 sm:gap-1.5 text-[12px] sm:text-[14px] leading-5 text-[#174358]" data-testid="eg-planner-acc-tripadvisor">
      <TripAdvisorLogo size={15} /><span className="hidden sm:inline">Rated&nbsp;</span><b className="font-semibold text-[#002131]">{ratings.tripadvisor.score}</b> on TripAdvisor
    </span>
  </div>
);

export const StarRow = ({ value = 5, size = 14 }) => (
  <span className="inline-flex items-center gap-1.5" aria-label={`${value} out of 5 stars`} data-testid="eg-star-row">
    <span className="flex gap-[2px]">
      {[0, 1, 2, 3, 4].map((k) => {
        const fill = Math.max(0, Math.min(1, value - k));
        return (
          <span key={k} className="relative inline-flex" style={{ width: size, height: size }}>
            <Star size={size} className="absolute inset-0 text-[#D9DEE2] fill-current" />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}><Star size={size} style={{ color: GREEN }} className="fill-current" /></span>
          </span>
        );
      })}
    </span>
    <b className="eg-label-lg font-semibold" style={{ color: GREEN }}>{Number(value).toFixed(1)}</b>
  </span>
);

const clean = (s) => (s || '').trim().replace(/\s*[-–—]\s*/g, ', ').replace(/\.{2,}$/, '').replace(/[,;:\s]+$/, '');

// Rotating traveller quote: the words are the hero, then name + visible star rating.
const QuoteScroller = ({ quotes, className = '' }) => {
  const [i, setI] = useState(0);
  const list = (quotes || []).filter((q) => q && q.text);
  useEffect(() => {
    if (list.length < 2) return undefined;
    const t = setTimeout(() => setI((v) => (v + 1) % list.length), 7000);
    return () => clearTimeout(t);
  }, [i, list.length]);
  if (!list.length) return null;
  const q = list[i % list.length];
  const text = clean(q.text);
  return (
    <div className={`text-center ${className}`} data-testid="eg-planner-quotes">
      <div key={i} className="animate-[hi-fade-in_450ms_ease-out]">
        <p className="eg-quote !text-[15px] !leading-[22px] lg:!text-[17px] lg:!leading-[26px] text-[#002131] eg-clamp-2-lt-lg" data-testid="eg-planner-quote-text">&ldquo;{text}{/[.!?]$/.test(text) ? '' : '.'}&rdquo;</p>
        <div className="mt-2.5 flex items-center justify-center gap-2.5 flex-wrap">
          <span className="eg-title-md text-[#002131]" data-testid="eg-planner-quote-author">{q.name}</span>
          <StarRow value={q.stars || 5} />
        </div>
      </div>
      {list.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {list.map((x, k) => (
            <button key={x.name + k} type="button" onClick={() => setI(k)} aria-label={`Review ${k + 1}`} className={`h-1.5 rounded-full transition-all ${k === i % list.length ? 'w-5 bg-[#174358]' : 'w-1.5 bg-[#C4CBD0] hover:bg-[#8A9297]'}`} data-testid="eg-planner-quote-dot" />
          ))}
        </div>
      )}
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
  const trust = (cls) => (
    <div className={cls}>
      <Ratings />
      <QuoteScroller quotes={quotes} />
    </div>
  );

  return (
    <section className={className} data-testid="eg-planner">
      <div className="relative hidden lg:block">
        <div className="relative h-[372px] rounded-2xl overflow-hidden">
          <img src={data.bg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className={overlay} />
          <div className="absolute inset-x-0 top-0 pt-[43px] px-6 flex flex-col items-center gap-1 text-white">
            <h3 className={`${titleClass} text-white text-center`}>{data.h3}</h3>
            <Social data={data} />
          </div>
          {/* Plane crosses the planner at phone-field height and disappears behind the card */}
          <div className="absolute inset-x-0 top-[236px] h-[90px] pointer-events-none" data-testid="eg-planner-flight">
            <FlightThrough className="w-full h-full" />
          </div>
        </div>

        <div className="relative z-10 -mt-[231px] mx-auto w-[600px] rounded-2xl bg-[#FEFCF4] shadow-[0_1px_2px_rgba(0,0,0,0.3),0_12px_32px_rgba(0,33,49,0.18)] overflow-hidden" data-testid="eg-planner-card">
          <div className="pt-6 px-10 pb-5">
            <LeadForm {...formProps} prefix="eg-planner" />
          </div>
          {trust('bg-[#F0EEE6] px-10 pt-4 pb-5 flex flex-col gap-4')}
        </div>
      </div>

      {/* Compact layout below lg: quote sits between the fields and the CTA so the button closes the card */}
      <div className="lg:hidden relative rounded-2xl overflow-hidden">
        <img src={data.bg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className={overlay} />
        <div className="relative p-3 pt-5 sm:p-5 flex flex-col items-center gap-3">
          <h3 className="eg-headline-md text-white text-center">{data.h3}</h3>
          <Social data={data} compact />
          <div className="w-full max-w-[560px] rounded-2xl bg-[#FEFCF4] p-4" data-testid="eg-planner-card-mobile">
            <LeadForm {...formProps} prefix="eg-planner-m" between={trust('-mx-4 my-1 bg-[#F0EEE6] px-4 py-3.5 flex flex-col gap-3')} />
          </div>
        </div>
      </div>
    </section>
  );
}
