import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { BOOKABLE, encodeRooms, toISO, fmtDate, fmtInr, useLive, quote } from '../../booking/bookable';
import { DepartureCalendar } from './DepartureCalendar';
import { RoomsPicker } from './RoomsPicker';
import PhoneInput, { EMPTY_PHONE, phoneError, phonePayload } from '../egypt/PhoneInput';
import { metaTracking } from '../../lib/metaTracking';

const API = process.env.REACT_APP_BACKEND_URL;
const TITLES = ['Choose your check-in date', 'Who is travelling?', 'Where should we send your price?'];
const inputCls = 'h-12 w-full rounded-xl border border-[#C4CBD0] bg-white px-4 eg-body-lg text-[#002131] outline-none focus:border-[#174358] focus:ring-2 focus:ring-[#174358]/20';

export default function LiveDetailsModal({ liveKey, onClose }) {
  const product = BOOKABLE[liveKey];
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [date, setDate] = useState(null);
  const [rooms, setRooms] = useState([{ adults: 2, children: 0 }]);
  const [form, setForm] = useState({ name: '', email: '', phone: EMPTY_PHONE });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const live = useLive(product, rooms);
  const q = quote(product, date, rooms);
  const people = q.adults + q.children;
  const gone = live && date && !live.dates[toISO(date)];

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  const submit = async () => {
    const errs = {
      name: form.name.trim().length < 2 ? 'Please tell us your name' : '',
      email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim()) ? '' : 'Please enter a valid email',
      phone: phoneError(form.phone),
    };
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    setBusy(true);
    const phone = phonePayload(form.phone);
    try {
      await fetch(`${API}/api/leads`, { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name.trim(), ...phone, email: form.email.trim(), destination: product.destination, trip_title: product.title,
          source: 'live-package-view-details', travel_dates: `Check-in ${toISO(date)}, ${product.nights} nights`, traveller_count: String(people),
          passengers: { adults: q.adults, children: q.children }, ...metaTracking() }) });
    } catch (e) { /* the price page still opens if the lead call fails */ }
    try { sessionStorage.setItem('ht_contact', JSON.stringify({ name: form.name.trim(), email: form.email.trim(), phone: `${phone.country_code}${phone.phone}`.replace(/[^\d+]/g, '') })); } catch (e) { /* private mode */ }
    document.body.style.overflow = '';
    navigate(`${product.detailPath}?date=${toISO(date)}&rooms=${encodeRooms(rooms)}`);
  };

  return createPortal(
    <div className="eg fixed inset-0 z-[70] bg-[#002131]/70 flex items-end sm:items-center justify-center sm:p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={TITLES[step]} data-testid="live-details-modal" data-step={step}>
      <div className="bg-white w-full sm:max-w-[920px] max-h-[94vh] sm:max-h-[88vh] rounded-t-3xl sm:rounded-3xl overflow-hidden flex shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <aside className="hidden md:flex w-[300px] shrink-0 bg-[#002131] text-white flex-col justify-between p-8 relative">
          <img src={product.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
          <p className="relative eg-title-lg tracking-wide">HI TOURS</p>
          <div className="relative flex flex-col gap-3">
            <p className="eg-display-sm leading-tight">Your Bali holiday starts here</p>
            <p className="eg-body-md text-white/80">{product.nights} nights · {product.routeCities.join(' and ')} · hotels, transfers and experiences included</p>
          </div>
          <p className="relative eg-label-md text-white/70">Prices are read live from our Bali rates</p>
        </aside>
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="px-5 md:px-8 pt-5 pb-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              {step > 0 && <button type="button" onClick={() => setStep(step - 1)} className="w-10 h-10 -ml-2 rounded-full hover:bg-[#F0EEE6] flex items-center justify-center text-[#002131]" aria-label="Back" data-testid="live-details-back"><ArrowLeft size={20} /></button>}
              <h2 className="flex-1 eg-headline-md text-[#002131]" data-testid="live-details-title">{TITLES[step]}</h2>
              <button type="button" onClick={onClose} className="w-10 h-10 rounded-full hover:bg-[#F0EEE6] flex items-center justify-center text-[#002131]" aria-label="Close" data-testid="live-details-close"><X size={20} /></button>
            </div>
            <ol className="flex gap-1.5">{TITLES.map((t, i) => <li key={t} className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-[#E0A93B]' : 'bg-[#E4E3DB]'}`} />)}</ol>
          </div>
          <div className="flex-1 overflow-y-auto px-5 md:px-8 pb-4 flex flex-col gap-4">
            {step === 0 && <DepartureCalendar product={product} selected={date} onSelect={setDate} live={live} />}
            {step === 1 && (
              <>
                <RoomsPicker rooms={rooms} onChange={setRooms} max={4} />
                {gone && <p className="eg-label-lg text-[#B3261E]" data-testid="live-details-gone">Your date is not available for this group. Please go back and pick another date.</p>}
              </>
            )}
            {step === 2 && (
              <>
                <p className="eg-body-md text-[#174358]" data-testid="live-details-trip">Your trip to Bali: from {fmtDate(date)} · {people} {people === 1 ? 'person' : 'people'} · {rooms.length} room{rooms.length > 1 ? 's' : ''}</p>
                <label className="flex flex-col gap-1.5"><span className="eg-label-lg text-[#002131]">Your name</span><input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="What should we call you?" autoComplete="name" data-testid="live-details-name" />{errors.name && <span className="eg-label-md text-[#B3261E]" data-testid="live-details-error">{errors.name}</span>}</label>
                <label className="flex flex-col gap-1.5"><span className="eg-label-lg text-[#002131]">Email</span><input type="email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" autoComplete="email" data-testid="live-details-email" />{errors.email && <span className="eg-label-md text-[#B3261E]" data-testid="live-details-error">{errors.email}</span>}</label>
                <div className="flex flex-col gap-1.5"><span className="eg-label-lg text-[#002131]">Phone number</span><PhoneInput value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} className="h-12 w-full rounded-xl border border-[#C4CBD0] bg-white focus-within:border-[#174358]" testId="live-details-phone" />{errors.phone && <span className="eg-label-md text-[#B3261E]" data-testid="live-details-error">{errors.phone}</span>}</div>
              </>
            )}
          </div>
          <div className="border-t border-[#E4E3DB] px-5 md:px-8 py-3 flex items-center justify-between gap-3">
            <p className="eg-label-md text-[#5B6B74] min-w-0" data-testid="live-details-summary">{date ? `Check-in ${fmtDate(date, { day: 'numeric', month: 'short' })}${step > 0 ? ` · ${people} ${people === 1 ? 'person' : 'people'}` : ''}` : 'Pick a date to continue'}</p>
            {step < 2
              ? <button type="button" disabled={!date || (step === 1 && (gone || !live))} onClick={() => setStep(step + 1)} className="eg-btn-filled !h-12 px-7 eg-title-md shrink-0 disabled:opacity-40" data-testid="live-details-next">Continue</button>
              : <button type="button" disabled={busy} onClick={submit} className="eg-btn-filled !h-12 px-7 eg-title-md shrink-0 disabled:opacity-50" data-testid="live-details-submit">{busy ? 'Opening…' : 'View live price'}</button>}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
