import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, X, BedDouble, Sparkles, Ticket, CarFront, ShieldCheck } from 'lucide-react';
import { BOOKABLE, encodeRooms, toISO, fmtDate, quote, useLive } from '../../booking/bookable';
import { DepartureCalendar } from './DepartureCalendar';
import { RoomsPicker } from './RoomsPicker';
import PhoneInput, { EMPTY_PHONE, phoneError, phonePayload } from '../egypt/PhoneInput';
import { metaTracking } from '../../lib/metaTracking';

const API = process.env.REACT_APP_BACKEND_URL;
const HERO = 'https://images.unsplash.com/photo-1701605305513-2bc4798a4c9c?crop=entropy&cs=srgb&fm=jpg&q=80&w=1200';
const VERIFIED_KEY = 'ht_verified';
const TITLES = ['Choose your check-in date', 'Who is travelling?', 'Add your details before you book'];
const INCLUDES = [[BedDouble, 'Hotels'], [Sparkles, 'Experiences'], [Ticket, 'Activities'], [CarFront, 'Transfers']];
const inputCls = 'h-12 w-full rounded-xl border border-[#C4CBD0] bg-white px-4 eg-body-lg text-[#002131] outline-none focus:border-[#174358] focus:ring-2 focus:ring-[#174358]/20';
const ctaCls = 'inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#E75E26] hover:bg-[#CF4F1B] text-white eg-title-md shadow-[0_6px_16px_-6px_rgba(231,94,38,0.7)] transition-[background-color,transform] active:scale-[0.98] disabled:opacity-40 disabled:shadow-none';

const readVerified = () => { try { return JSON.parse(localStorage.getItem(VERIFIED_KEY)); } catch (e) { return null; } };

const Includes = ({ light }) => (
  <ul className={`flex gap-1.5 ${light ? 'flex-wrap' : 'flex-nowrap md:flex-wrap overflow-x-auto no-scrollbar'}`} data-testid="live-details-includes">
    {INCLUDES.map(([Icon, label]) => (
      <li key={label} className={`shrink-0 inline-flex items-center gap-1.5 h-8 px-2.5 md:px-3 rounded-full eg-label-md ${light ? 'bg-white/90 text-[#002131]' : 'bg-white/20 text-white backdrop-blur'}`}><Icon size={15} />{label}</li>
    ))}
  </ul>
);

const Brand = () => (
  <aside className="hidden md:flex w-[380px] shrink-0 relative flex-col justify-end p-8 text-white" data-testid="live-details-brand">
    <img src={HERO} alt="Turquoise bay and white sand beach in Bali" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,33,49,0.25)_0%,rgba(0,33,49,0)_25%,rgba(0,33,49,0)_45%,rgba(0,33,49,0.75)_100%)]" />
    <p className="absolute left-4 top-4 md:left-8 md:top-7 text-white/90 text-[13px] font-bold tracking-[0.25em] drop-shadow" data-testid="live-details-watermark">HI TOURS</p>
    <div className="relative flex flex-col gap-4">
      <p className="eg-display-sm leading-tight">Customise your Bali holiday in minutes</p>
      <Includes />
    </div>
  </aside>
);

const MobileBanner = () => (
  <div className="md:hidden relative h-40 shrink-0" data-testid="live-details-banner">
    <img src={HERO} alt="Turquoise bay in Bali" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,33,49,0.3)_0%,rgba(0,33,49,0.1)_35%,rgba(0,33,49,0.7)_100%)]" />
    <p className="absolute left-4 top-4 md:left-8 md:top-7 text-white/90 text-[13px] font-bold tracking-[0.25em] drop-shadow" data-testid="live-details-watermark">HI TOURS</p>
    <div className="absolute inset-x-4 bottom-3 flex flex-col gap-2.5 text-white">
      <p className="text-[20px] leading-6 font-semibold">Customise your Bali holiday in minutes</p>
      <Includes />
    </div>
  </div>
);

function DetailsStep({ form, setForm, errors, otp, setOtp }) {
  return (
    <div className="flex flex-col gap-4" data-testid="live-details-form">
      <label className="flex flex-col gap-1.5"><span className="eg-label-lg text-[#002131]">Your name</span><input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="What should we call you?" autoComplete="name" data-testid="live-details-name" />{errors.name && <span className="eg-label-md text-[#B3261E]" data-testid="live-details-error">{errors.name}</span>}</label>
      <div className="flex flex-col gap-1.5"><span className="eg-label-lg text-[#002131]">Mobile number</span><PhoneInput value={form.phone} onChange={(v) => { setForm({ ...form, phone: v }); setOtp({ sent: false, code: '' }); }} className="h-12 w-full rounded-xl border border-[#C4CBD0] bg-white focus-within:border-[#174358]" testId="live-details-phone" />{errors.phone && <span className="eg-label-md text-[#B3261E]" data-testid="live-details-error">{errors.phone}</span>}</div>
      {otp.sent && (
        <label className="flex flex-col gap-1.5" data-testid="live-details-otp-block">
          <span className="eg-label-lg text-[#002131]">Enter the 6-digit code we sent you</span>
          <input inputMode="numeric" autoComplete="one-time-code" maxLength={6} className={`${inputCls} tracking-[0.5em] text-center eg-title-lg`} value={otp.code} onChange={(e) => setOtp({ ...otp, code: e.target.value.replace(/\D/g, '') })} placeholder="••••••" data-testid="live-details-otp" />
          {otp.demo && <span className="eg-label-md text-[#8A5A00] bg-[#FFF4D6] rounded-lg px-3 py-2" data-testid="live-details-otp-demo">Test mode: messages are not connected yet. Your code is {otp.demo}</span>}
          {errors.otp && <span className="eg-label-md text-[#B3261E]" data-testid="live-details-otp-error">{errors.otp}</span>}
        </label>
      )}
      <p className="flex items-center gap-2 eg-label-md text-[#5B6B74]"><ShieldCheck size={16} className="text-[#1E7B4B]" />We verify your number once. No spam, ever.</p>
    </div>
  );
}

export default function LiveDetailsModal({ liveKey, onClose, heading }) {
  const product = BOOKABLE[liveKey];
  const navigate = useNavigate();
  const [verified] = useState(readVerified);
  const steps = verified ? TITLES.slice(0, 2) : TITLES;
  const [step, setStep] = useState(0);
  const [date, setDate] = useState(null);
  const [rooms, setRooms] = useState([{ adults: 2, children: 0 }]);
  const [form, setForm] = useState({ name: '', phone: EMPTY_PHONE });
  const [otp, setOtp] = useState({ sent: false, code: '' });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const live = useLive(product, rooms);
  const q = quote(product, date, rooms);
  const people = q.adults + q.children;
  const gone = live && date && !live.dates[toISO(date)];
  const last = step === steps.length - 1;

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  const post = (path, body) => fetch(`${API}${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    .then(async (r) => { const j = await r.json().catch(() => ({})); if (!r.ok) throw new Error(j.detail || 'Something went wrong. Please try again.'); return j; });

  const openPrice = async (contact) => {
    post('/api/leads', { name: contact.name, country_code: contact.country_code, phone: contact.phone, email: '', destination: product.destination, trip_title: product.title,
      source: 'live-package-view-details', travel_dates: `Check-in ${toISO(date)}, ${product.nights} nights`, traveller_count: String(people),
      passengers: { adults: q.adults, children: q.children }, ...metaTracking() }).catch(() => {});
    try { sessionStorage.setItem('ht_contact', JSON.stringify({ name: contact.name, phone: `${contact.country_code}${contact.phone}`.replace(/[^\d+]/g, '') })); } catch (e) { /* private mode */ }
    document.body.style.overflow = '';
    navigate(`${product.detailPath}?date=${toISO(date)}&rooms=${encodeRooms(rooms)}`);
    onClose();
  };

  const submit = async () => {
    const errs = { name: form.name.trim().length < 2 ? 'Please tell us your name' : '', phone: phoneError(form.phone) };
    setErrors(errs);
    if (errs.name || errs.phone) return;
    const phone = phonePayload(form.phone);
    setBusy(true);
    try {
      if (!otp.sent) {
        const r = await post('/api/otp/send', phone);
        setOtp({ sent: true, code: '', demo: r.demo_code });
      } else {
        if (otp.code.length !== 6) { setErrors({ otp: 'Please enter the 6-digit code' }); return; }
        const r = await post('/api/otp/verify', { ...phone, code: otp.code });
        const contact = { name: form.name.trim(), ...phone, token: r.token };
        try { localStorage.setItem(VERIFIED_KEY, JSON.stringify(contact)); } catch (e) { /* private mode */ }
        await openPrice(contact);
      }
    } catch (e) {
      setErrors({ [otp.sent ? 'otp' : 'phone']: e.message });
    } finally { setBusy(false); }
  };

  const next = () => (last ? (verified ? openPrice(verified) : submit()) : setStep(step + 1));
  const blocked = !date || (step === 1 && (gone || !live));
  const label = !last ? 'Continue' : busy ? 'Please wait…' : (!verified && !otp.sent) ? 'Send OTP' : 'View live price';

  return createPortal(
    <div className="eg fixed inset-0 z-[70] bg-[#002131]/70 flex items-stretch md:items-center justify-center md:p-6" onClick={onClose} role="dialog" aria-modal="true" aria-label={steps[step]} data-testid="live-details-modal" data-step={step}>
      <div className="bg-white w-full h-[100dvh] md:h-[min(760px,92vh)] md:max-w-[1080px] md:rounded-3xl overflow-hidden flex shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <Brand />
        <div className="flex-1 min-w-0 flex flex-col">
          {step === 0 && <MobileBanner />}
          <div className="px-5 md:px-8 pt-4 md:pt-6 pb-3 flex flex-col gap-3">
            {heading && <p className="eg-label-md uppercase tracking-[0.08em] text-[#1E7B4B]" data-testid="live-details-heading">{heading}</p>}
            <div className="flex items-center gap-2">
              {step > 0 && <button type="button" onClick={() => setStep(step - 1)} className="w-10 h-10 -ml-2 rounded-full hover:bg-[#F0EEE6] flex items-center justify-center text-[#002131]" aria-label="Back" data-testid="live-details-back"><ArrowLeft size={20} /></button>}
              <h2 className="flex-1 eg-headline-md max-md:!text-[22px] max-md:!leading-7 text-[#002131]" data-testid="live-details-title">{steps[step]}</h2>
              <button type="button" onClick={onClose} className="w-10 h-10 rounded-full hover:bg-[#F0EEE6] flex items-center justify-center text-[#002131]" aria-label="Close" data-testid="live-details-close"><X size={20} /></button>
            </div>
            <ol className="flex gap-1.5">{steps.map((t, i) => <li key={t} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? 'bg-[#174358]' : 'bg-[#E4E3DB]'}`} />)}</ol>
          </div>
          <div className="flex-1 overflow-y-auto px-2 md:px-4 pb-4">
            {step === 0 && <DepartureCalendar product={product} selected={date} onSelect={setDate} live={live} compact />}
            {step === 1 && (
              <div className="px-3 md:px-4 flex flex-col gap-3">
                <RoomsPicker rooms={rooms} onChange={setRooms} max={4} />
                {gone && <p className="eg-label-lg text-[#B3261E]" data-testid="live-details-gone">This date is not available for your group. Go back and pick another date.</p>}
              </div>
            )}
            {step === 2 && <div className="px-3 md:px-4"><DetailsStep form={form} setForm={setForm} errors={errors} otp={otp} setOtp={setOtp} /></div>}
          </div>
          <div className="border-t border-[#E4E3DB] px-5 md:px-8 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] flex items-center justify-between gap-3">
            <p className="eg-label-lg text-[#174358] min-w-0 truncate" data-testid="live-details-summary">{date ? `${fmtDate(date, { day: 'numeric', month: 'short' })} · ${product.nights} nights${step > 0 ? ` · ${people} ${people === 1 ? 'guest' : 'guests'}` : ''}` : 'Pick a check-in date'}</p>
            <button type="button" disabled={blocked || busy} onClick={next} className={`${ctaCls} shrink-0`} data-testid={last ? 'live-details-submit' : 'live-details-next'}>{label}<ArrowRight size={18} /></button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
