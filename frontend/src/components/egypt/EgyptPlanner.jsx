import React, { useEffect, useState } from 'react';
import { planner } from '../../egyptListingData';
import { CheckCircleIcon } from './EgyptIcons';
import PhoneInput, { EMPTY_PHONE, phoneError, phonePayload } from './PhoneInput';
import FlightPath from '../FlightPath';
import { GoogleLogo, TripAdvisorLogo } from '../Rating';
import { Heart, Quote } from 'lucide-react';
import { ratings } from '../../mock';

const BACKEND = process.env.REACT_APP_BACKEND_URL;

const inputCls = 'h-12 w-full rounded-lg border border-[#C4CBD0] bg-white px-3 eg-body-lg text-[#002131] focus:border-[#308BB6] focus:outline-none';

function LeadForm({ data, form, set, setPhone, status, valid, submit, prefix }) {
  if (status === 'done') {
    return (
      <div className="py-8 flex flex-col items-center text-center gap-2" data-testid={`${prefix}-success`}>
        <div className="w-12 h-12 rounded-full bg-[#174358] text-white flex items-center justify-center"><CheckCircleIcon size={28} /></div>
        <h4 className="eg-title-lg text-[#002131]">{data.successTitle}</h4>
        <p className="eg-body-md text-[#174358]">{data.successText}</p>
      </div>
    );
  }
  return (
    <form onSubmit={submit} className="flex flex-col gap-4" data-testid={`${prefix}-form`}>
      <div className="rounded-xl border border-[#C4CBD0] p-4 flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="eg-label-lg text-[#002131]">{data.nameLabel}</span>
          <input type="text" value={form.name} onChange={set('name')} placeholder={data.namePlaceholder} className={inputCls} data-testid={`${prefix}-name`} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="eg-label-lg text-[#002131]">{data.phoneLabel}</span>
          <PhoneInput value={form.phone} onChange={setPhone} placeholder={data.phonePlaceholder} className="h-12 w-full rounded-lg border border-[#C4CBD0] bg-white focus-within:border-[#308BB6]" testId={`${prefix}-phone`} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="eg-label-lg text-[#002131]">{data.emailLabel}</span>
          <input type="email" value={form.email} onChange={set('email')} placeholder={data.emailPlaceholder} className={inputCls} data-testid={`${prefix}-email`} />
        </label>
      </div>
      {status === 'error' && <p className="eg-body-md text-[#B42318]" data-testid={`${prefix}-error`}>Something went wrong. Please try again.</p>}
      <button type="submit" disabled={!valid || status === 'sending'} className="eg-btn-filled w-full !h-12 eg-label-lg disabled:opacity-60 disabled:cursor-not-allowed" data-testid={`${prefix}-submit`}>
        {status === 'sending' ? data.sending : data.cta}
      </button>
    </form>
  );
}

const Social = ({ data, size = 'w-6 h-6' }) => (
  <div className="flex items-center gap-2">
    <div className="flex">
      {data.avatars.map((a, i) => <img key={a} src={a} alt="" className={`${size} rounded-full border border-white object-cover`} style={{ marginLeft: i ? -4 : 0 }} />)}
    </div>
    <span className="eg-title-md text-white">{data.social}</span>
    <Heart size={18} className="heart-beat text-[#FF6B6B] fill-[#FF6B6B] drop-shadow-[0_2px_6px_rgba(255,107,107,0.45)]" aria-hidden="true" />
  </div>
);

// Review scores + a rotating traveller quote, shown under the form.
const Ratings = ({ className = '' }) => (
  <div className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 ${className}`} data-testid="eg-planner-ratings">
    <span className="flex items-center gap-2 whitespace-nowrap eg-body-md text-[#174358]" data-testid="eg-planner-acc-google">
      <GoogleLogo size={18} />Rated <b className="font-semibold text-[#002131]">{ratings.google.score}</b> on Google
    </span>
    <span className="w-px h-6 bg-[#C4CBD0] hidden sm:block" />
    <span className="flex items-center gap-2 whitespace-nowrap eg-body-md text-[#174358]" data-testid="eg-planner-acc-tripadvisor">
      <TripAdvisorLogo size={18} />Rated <b className="font-semibold text-[#002131]">{ratings.tripadvisor.score}</b> on TripAdvisor
    </span>
  </div>
);

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
  return (
    <div className={className} data-testid="eg-planner-quotes">
      <div key={i} className="flex gap-3 animate-[hi-fade-in_400ms_ease-out]">
        <Quote size={18} className="shrink-0 mt-[3px] text-[#308BB6]" />
        <div className="min-w-0">
          <p className="eg-body-md text-[#174358] line-clamp-3" data-testid="eg-planner-quote-text">{q.text}</p>
          <p className="mt-1 eg-label-lg text-[#002131]" data-testid="eg-planner-quote-author">{q.name}{q.title ? ` · ${q.title}` : ''}</p>
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

export default function EgyptPlanner({ className = 'mt-12 md:mt-16 px-4 sm:px-8 lg:px-10', titleClass = 'eg-display-sm', data = planner, tripTitle = '', source = 'egypt-planner', quotes = [] }) {
  const [form, setForm] = useState({ name: '', phone: EMPTY_PHONE, email: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const setPhone = (v) => setForm((f) => ({ ...f, phone: v }));
  const valid = form.name.trim().length > 1 && !phoneError(form.phone) && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim());

  const submit = async (e) => {
    e.preventDefault();
    if (!valid || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch(`${BACKEND}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name.trim(), ...phonePayload(form.phone), email: form.email.trim(), destination: (data.h3 || '').replace(/^Customize your\s+/i, '').replace(/\s+trip$/i, ''), trip_title: tripTitle, source })
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
      <div className="relative h-[800px] hidden lg:block">
        <div className="relative h-[372px] rounded-2xl overflow-hidden">
          <img src={data.bg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className={overlay} />
          <div className="absolute inset-x-0 top-0 pt-[43px] px-6 flex flex-col items-center gap-1 text-white">
            <h3 className={`${titleClass} text-white text-center`}>{data.h3}</h3>
            <Social data={data} />
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[141px] w-[650px] rounded-xl bg-[#FEFCF4] shadow-[0_1px_2px_rgba(0,0,0,0.3),0_1px_3px_1px_rgba(0,0,0,0.15)] z-10" data-testid="eg-planner-card">
          <div className="pt-7 px-16">
            <LeadForm {...formProps} prefix="eg-planner" />
          </div>
          <div className="mt-6 rounded-b-xl bg-[#F0EEE6] px-8 py-4 flex flex-col gap-3">
            <Ratings />
            <QuoteScroller quotes={quotes} className="border-t border-[#DEDCD2] pt-3" />
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
        <div className="relative p-4 pt-6 flex flex-col items-center gap-4">
          <h3 className="eg-display-sm text-white text-center">{data.h3}</h3>
          <Social data={data} />
          <div className="w-full max-w-[650px] rounded-xl bg-[#FEFCF4] p-4" data-testid="eg-planner-card-mobile">
            <LeadForm {...formProps} prefix="eg-planner-m" />
            <Ratings className="mt-4 pt-4 border-t border-[#E4E3DB]" />
            <QuoteScroller quotes={quotes} className="mt-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
