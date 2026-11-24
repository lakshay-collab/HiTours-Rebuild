import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Lock, Minus, Plus, X, Check } from 'lucide-react';
import { Calendar } from '../ui/calendar';
import { fmtDate, fmtInr, fromISO } from '../../grouptours/groupBooking';
import { payWithRazorpay } from '../../booking/razorpay';

const API = process.env.REACT_APP_BACKEND_URL;
const STEPS = ['Nights', 'Dates', 'Hotel', 'Details', 'Pay'];
const TITLES = ['How many nights?', 'Choose your dates', 'Pick your preferred hotel', 'Your details', 'Secure payment'];
const inputCls = 'h-12 w-full rounded-xl border border-[#C4CBD0] bg-white px-4 eg-body-lg text-[#002131] outline-none focus:border-[#174358] focus:ring-2 focus:ring-[#174358]/20';
const toISO = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const validate = (f) => ({
  name: f.name.trim().length < 2 ? 'Please tell us your name' : '',
  email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email) ? '' : 'Please enter a valid email',
  phone: /^\+?\d{8,15}$/.test(f.phone.replace(/[\s-]/g, '')) ? '' : 'Please enter a valid WhatsApp number',
});
const CAL = {
  months: 'flex justify-center', month: 'space-y-3', caption_label: 'eg-title-md text-[#002131]',
  head_cell: 'w-10 eg-label-md text-[#6F777C] font-normal', row: 'flex w-full mt-1', cell: 'relative p-0 text-center',
  day: 'h-10 w-10 rounded-full eg-label-lg text-[#002131] hover:bg-[#F0EEE6] aria-selected:opacity-100',
  day_selected: '!bg-[#174358] !text-white', day_today: 'ring-1 ring-[#C4CBD0]', day_disabled: 'opacity-30 pointer-events-none', day_outside: 'opacity-0 pointer-events-none',
};

const Field = ({ label, error, children }) => (
  <label className="flex flex-col gap-1.5"><span className="eg-label-lg text-[#002131]">{label}</span>{children}{error && <span className="eg-label-md text-[#B3261E]" data-testid="stay-field-error">{error}</span>}</label>
);

const RoomRow = ({ index, adults, max, onChange, onRemove }) => (
  <div className="flex items-center justify-between gap-3 py-2" data-testid={`stay-room-${index}`}>
    <div><p className="eg-title-md text-[#002131]">Room {index + 1}</p><p className="eg-label-md text-[#6F777C]">{adults === 3 ? '3 adults · third on an extra bed' : `${adults} adult${adults > 1 ? 's' : ''}`}{index > 0 && <button type="button" onClick={onRemove} className="ml-2 underline text-[#174358]" data-testid={`stay-room-${index}-remove`}>Remove</button>}</p></div>
    <div className="flex items-center gap-3">
      <button type="button" disabled={adults <= 1} onClick={() => onChange(adults - 1)} className="w-10 h-10 rounded-full border border-[#C4CBD0] flex items-center justify-center text-[#174358] disabled:opacity-30 hover:bg-[#FBEADB]" aria-label="Fewer adults" data-testid={`stay-room-${index}-minus`}><Minus size={16} /></button>
      <span className="w-5 text-center eg-title-lg text-[#002131]" data-testid={`stay-room-${index}-adults`}>{adults}</span>
      <button type="button" disabled={adults >= max} onClick={() => onChange(adults + 1)} className="w-10 h-10 rounded-full border border-[#C4CBD0] flex items-center justify-center text-[#174358] disabled:opacity-30 hover:bg-[#FBEADB]" aria-label="More adults" data-testid={`stay-room-${index}-plus`}><Plus size={16} /></button>
    </div>
  </div>
);

const HotelOption = ({ h, info, selected, onPick }) => (
  <li>
    <button type="button" disabled={!h.available} onClick={() => onPick(h.id)} aria-pressed={selected} data-testid={`stay-hotel-${h.id}`} data-available={h.available}
      className={`w-full text-left rounded-2xl border bg-white p-2.5 flex gap-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${selected ? 'border-[#174358] ring-2 ring-[#174358]/15' : 'border-[#C4CBD0] hover:border-[#174358]'}`}>
      <img src={info.images[0]} alt={h.name} className="w-24 h-24 rounded-xl object-cover shrink-0" loading="lazy" />
      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
        <p className="eg-title-md text-[#002131] leading-snug">{h.name}</p>
        <p className="eg-label-md text-[#6F777C]">4 star · {h.room} · breakfast</p>
        <p className="eg-label-md text-[#1E7B4B]">{info.score} {info.label}</p>
        {h.available
          ? <p className="mt-auto flex items-baseline gap-1.5 flex-wrap"><span className="eg-title-lg text-[#002131]" data-testid={`stay-hotel-${h.id}-total`}>{fmtInr(h.total)}</span><span className="eg-label-md text-[#6F777C]">total · {fmtInr(h.per_night)} per night</span></p>
          : <p className="mt-auto eg-label-md text-[#6F777C]">No rate for these dates</p>}
      </div>
      <span className={`w-6 h-6 rounded-full border shrink-0 flex items-center justify-center ${selected ? 'bg-[#174358] border-[#174358] text-white' : 'border-[#C4CBD0]'}`}>{selected && <Check size={14} />}</span>
    </button>
  </li>
);

export const StayModal = ({ product, config, hotels, similarNote, initialHotel, onClose, thankYouPath }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [nights, setNights] = useState(null);
  const [checkin, setCheckin] = useState(null);
  const [rooms, setRooms] = useState([2]);
  const [quote, setQuote] = useState(null);
  const [quoteError, setQuoteError] = useState('');
  const [hotel, setHotel] = useState(initialHotel || null);
  const [payMode, setPayMode] = useState('deposit');
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [payError, setPayError] = useState('');

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  const minDate = fromISO(config.min_checkin);
  const maxDate = nights ? addDays(fromISO(config.last_checkout), -nights) : fromISO(config.last_checkout);
  const checkout = checkin && nights ? addDays(checkin, nights) : null;
  const roomsKey = rooms.join(',');

  useEffect(() => {
    if (!checkin || !nights) return undefined;
    let live = true;
    setQuote(null); setQuoteError('');
    fetch(`${API}/api/bookings/hotel/${product.key}/quote?checkin=${toISO(checkin)}&nights=${nights}&rooms=${roomsKey}`)
      .then(async (r) => { const j = await r.json(); if (!r.ok) throw new Error(j.detail || 'Could not load prices'); return j; })
      .then((j) => { if (live) setQuote(j); }).catch((e) => { if (live) setQuoteError(e.message); });
    return () => { live = false; };
  }, [checkin, nights, roomsKey, product.key]);

  const infoOf = useMemo(() => Object.fromEntries(hotels.map((h) => [h.id, h])), [hotels]);
  const picked = quote?.hotels.find((h) => h.id === hotel && h.available) || null;
  const lowest = quote ? Math.min(...quote.hotels.filter((h) => h.available).map((h) => h.total)) : null;
  const mode = picked?.deposit ? payMode : 'full';
  const payNow = picked ? (mode === 'deposit' ? picked.deposit : picked.total) : 0;
  const pickNights = (n) => { setNights(n); if (checkin && addDays(checkin, n) > fromISO(config.last_checkout)) setCheckin(null); setStep(1); };

  const pay = async () => {
    const errs = validate(form);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    setBusy(true); setPayError('');
    try {
      const res = await fetch(`${API}/api/bookings/hotel/order`, { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: product.key, checkin: toISO(checkin), nights, rooms, hotel: picked.id, pay: mode, contact: { ...form, phone: form.phone.replace(/[\s-]/g, '') } }) });
      if (!res.ok) throw new Error((await res.json()).detail || 'Could not start the payment');
      const order = await res.json();
      setStep(4);
      const result = await payWithRazorpay(order, { ...form, title: `${product.title} · ${picked.name}`, image: product.hero.mainSm });
      const ver = await fetch(`${API}/api/bookings/verify`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ booking_id: order.booking_id, ...result }) });
      if (!ver.ok) throw new Error((await ver.json().catch(() => ({}))).detail || 'We could not verify the payment. If money was deducted, we will contact you shortly.');
      document.body.style.overflow = '';
      navigate(thankYouPath(order.booking_id));
    } catch (e) {
      setStep(3);
      if (e.message !== 'cancelled') setPayError(e.message || 'Payment failed. Please try again.');
    } finally { setBusy(false); }
  };

  return (
    <div className="fixed inset-0 z-[70] bg-[#002131]/70 flex items-end sm:items-center justify-center sm:p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={TITLES[step]} data-testid="stay-modal" data-step={step}>
      <div className="bg-[#FBF9F1] w-full sm:max-w-[560px] max-h-[94vh] sm:max-h-[90vh] rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="px-4 md:px-6 pt-4 pb-3 border-b border-[#E4E3DB] bg-white flex flex-col gap-3">
          <div className="flex items-center gap-2">
            {step > 0 && step < 4 && <button type="button" onClick={() => setStep(step - 1)} className="w-10 h-10 -ml-2 rounded-full hover:bg-[#F0EEE6] flex items-center justify-center text-[#002131]" aria-label="Back" data-testid="stay-back"><ChevronLeft size={22} /></button>}
            <div className="flex-1 min-w-0"><h2 className="eg-title-lg text-[#002131] truncate" data-testid="stay-title">{TITLES[step]}</h2><p className="eg-label-md text-[#6F777C] truncate">{product.title}{nights ? ` · ${nights} nights` : ''}{checkin ? ` · ${fmtDate(toISO(checkin), { day: 'numeric', month: 'short' })} to ${fmtDate(toISO(checkout), { day: 'numeric', month: 'short' })}` : ''}</p></div>
            <button type="button" onClick={onClose} className="w-10 h-10 rounded-full hover:bg-[#F0EEE6] flex items-center justify-center text-[#002131]" aria-label="Close" data-testid="stay-close"><X size={20} /></button>
          </div>
          <ol className="flex items-center gap-1.5" data-testid="stay-steps">{STEPS.map((s, i) => <li key={s} className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-[#174358]' : 'bg-[#E4E3DB]'}`} aria-label={s} />)}</ol>
        </div>

        <div className="overflow-y-auto px-4 md:px-6 py-4 flex flex-col gap-4">
          {step === 0 && (
            <>
              <p className="eg-body-md text-[#174358]">Choose the length of your stay first. You pick the dates next.</p>
              <div className="grid grid-cols-2 gap-3" data-testid="stay-nights">
                {config.nights.map((n) => (
                  <button key={n} type="button" onClick={() => pickNights(n)} aria-pressed={nights === n} data-testid={`stay-nights-${n}`}
                    className={`rounded-2xl border px-4 py-5 text-left transition-colors ${nights === n ? 'border-[#174358] bg-[#FBEADB]' : 'border-[#C4CBD0] bg-white hover:border-[#174358]'}`}>
                    <p className="eg-headline-md text-[#002131]">{n} nights</p><p className="eg-label-md text-[#6F777C]">{n + 1} days in Kuta</p>
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div className="rounded-2xl border border-[#C4CBD0] bg-white" data-testid="stay-calendar">
                <Calendar mode="single" selected={checkin} onSelect={(d) => d && setCheckin(d)} defaultMonth={checkin || minDate} fromMonth={minDate} toMonth={maxDate}
                  disabled={{ before: minDate, after: maxDate }} modifiers={checkin ? { stay: { after: checkin, before: addDays(checkout, 1) } } : {}}
                  modifiersClassNames={{ stay: '!bg-[#FBEADB] !rounded-none' }} classNames={CAL} />
              </div>
              <p className="eg-label-lg text-[#002131]" data-testid="stay-dates-summary">{checkin ? `Check-in ${fmtDate(toISO(checkin))} · check-out ${fmtDate(toISO(checkout))} · ${nights} nights` : 'Tap your check-in date. Check-out is set from your nights.'}</p>
              <div className="rounded-2xl border border-[#C4CBD0] bg-white px-4 py-2 divide-y divide-[#E4E3DB]" data-testid="stay-rooms">
                {rooms.map((a, i) => <RoomRow key={i} index={i} adults={a} max={config.max_adults_per_room} onChange={(v) => setRooms(rooms.map((x, j) => (j === i ? v : x)))} onRemove={() => setRooms(rooms.filter((_, j) => j !== i))} />)}
                {rooms.length < config.max_rooms && <button type="button" onClick={() => setRooms([...rooms, 2])} className="w-full py-3 text-left eg-label-lg text-[#174358] underline" data-testid="stay-add-room">Add another room</button>}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <p className="eg-body-md text-[#174358]" data-testid="stay-similar-note">{similarNote}</p>
              {quoteError && <p className="eg-label-lg text-[#B3261E]" data-testid="stay-quote-error">{quoteError}</p>}
              {!quote && !quoteError && <p className="eg-body-lg text-[#6F777C]" data-testid="stay-quote-loading">Getting prices for your dates…</p>}
              {quote && lowest === Infinity && <p className="eg-label-lg text-[#B3261E]" data-testid="stay-no-hotels">None of these hotels has a rate for these dates. Please go back and try other dates.</p>}
              {quote && <ul className="flex flex-col gap-2.5" data-testid="stay-hotels">{quote.hotels.map((h) => <HotelOption key={h.id} h={h} info={infoOf[h.id]} selected={picked?.id === h.id} onPick={setHotel} />)}</ul>}
            </>
          )}

          {step === 3 && picked && (
            <>
              <div className="rounded-2xl border border-[#C4CBD0] bg-white p-4 flex flex-col gap-1" data-testid="stay-summary">
                <p className="eg-title-md text-[#002131]">{picked.name} or similar</p>
                <p className="eg-label-md text-[#6F777C]">{fmtDate(quote.checkin)} to {fmtDate(quote.checkout)} · {nights} nights · {rooms.length} room{rooms.length > 1 ? 's' : ''} · {quote.adults} adult{quote.adults > 1 ? 's' : ''} · breakfast</p>
                <p className="eg-title-lg text-[#002131]" data-testid="stay-total">{fmtInr(picked.total)} <span className="eg-label-md text-[#6F777C]">total</span></p>
              </div>
              {picked.deposit ? (
                <div className="grid grid-cols-2 gap-2" data-testid="stay-pay-mode">
                  {[['deposit', `Pay ${fmtInr(picked.deposit)} now`, `Rest ${fmtInr(picked.total - picked.deposit)} by ${fmtDate(quote.balance_due, { day: 'numeric', month: 'short' })}`], ['full', 'Pay in full', fmtInr(picked.total)]].map(([k, l, s]) => (
                    <button key={k} type="button" onClick={() => setPayMode(k)} aria-pressed={mode === k} data-testid={`stay-pay-${k}`} className={`rounded-2xl border px-3 py-3 text-left transition-colors ${mode === k ? 'border-[#174358] bg-[#FBEADB]' : 'border-[#C4CBD0] bg-white hover:border-[#174358]'}`}>
                      <p className="eg-label-lg text-[#002131]">{l}</p><p className="eg-label-md text-[#6F777C]">{s}</p>
                    </button>
                  ))}
                </div>
              ) : <p className="eg-label-md text-[#6F777C]" data-testid="stay-full-only">{picked.total <= config.deposit ? 'This stay is paid in full at booking.' : `Check-in is less than ${config.deposit_days} days away, so this stay is paid in full at booking.`}</p>}
              <Field label="Full name" error={errors.name}><input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name as on passport" data-testid="stay-name" autoComplete="name" /></Field>
              <Field label="WhatsApp number" error={errors.phone}><input type="tel" className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" data-testid="stay-phone" autoComplete="tel" /></Field>
              <Field label="Email address" error={errors.email}><input type="email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" data-testid="stay-email" autoComplete="email" /></Field>
              {payError && <p className="eg-label-lg text-[#B3261E]" data-testid="stay-pay-error">{payError}</p>}
            </>
          )}

          {step === 4 && <p className="eg-body-lg text-[#174358] py-6 text-center" data-testid="stay-paying">Opening secure Razorpay payment…</p>}
        </div>

        {step > 0 && step < 4 && (
          <div className="border-t border-[#E4E3DB] bg-white px-4 md:px-6 py-3 flex items-center justify-between gap-3" data-testid="stay-footer">
            <div className="min-w-0">
              {step === 1 && <><p className="eg-label-md text-[#6F777C]">{checkin ? 'Price for your dates from' : 'Pick a check-in date'}</p><p className="eg-headline-md text-[#002131] leading-tight" data-testid="stay-live-price">{quote && lowest !== Infinity ? fmtInr(lowest) : quoteError ? '' : checkin ? '…' : ''}</p>{quoteError && <p className="eg-label-md text-[#B3261E]" data-testid="stay-dates-error">{quoteError}</p>}</>}
              {step === 2 && <><p className="eg-label-md text-[#6F777C]">{picked ? `${picked.name} or similar` : 'Choose a hotel'}</p><p className="eg-headline-md text-[#002131] leading-tight" data-testid="stay-picked-total">{picked ? fmtInr(picked.total) : ''}</p></>}
              {step === 3 && picked && <><p className="eg-label-md text-[#C84D1B]">Pay today</p><p className="eg-headline-md text-[#002131] leading-tight" data-testid="stay-pay-now">{fmtInr(payNow)}</p></>}
            </div>
            {step === 1 && <button type="button" disabled={!quote || lowest === Infinity} onClick={() => setStep(2)} className="eg-btn-filled !h-12 px-6 eg-label-lg shrink-0 disabled:opacity-40" data-testid="stay-continue">See hotels</button>}
            {step === 2 && <button type="button" disabled={!picked} onClick={() => setStep(3)} className="eg-btn-filled !h-12 px-6 eg-label-lg shrink-0 disabled:opacity-40" data-testid="stay-continue">Continue</button>}
            {step === 3 && <button type="button" onClick={pay} disabled={busy || !picked} className="eg-btn-filled !h-12 px-6 eg-label-lg shrink-0 disabled:opacity-50" data-testid="stay-pay"><Lock size={16} /> {busy ? 'Opening…' : `Pay ${fmtInr(payNow)}`}</button>}
          </div>
        )}
      </div>
    </div>
  );
};
