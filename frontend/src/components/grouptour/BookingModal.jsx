import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Lock, Minus, Plus, X, BedDouble } from 'lucide-react';
import { fmtDate, fmtInr, fmtRange, monthKey, quoteOf } from '../../grouptours/groupBooking';
import { DepartureRow, MonthTabs, StatusBadge } from './DatesPrices';
import { payWithRazorpay } from '../../booking/razorpay';

const API = process.env.REACT_APP_BACKEND_URL;
const STEPS = ['Date', 'Travellers', 'Details', 'Pay'];
const inputCls = 'h-12 w-full rounded-xl border border-[#C4CBD0] bg-white px-4 eg-body-lg text-[#002131] outline-none focus:border-[#174358] focus:ring-2 focus:ring-[#174358]/20';
const validate = (f) => ({
  name: f.name.trim().length < 2 ? 'Please tell us your name' : '',
  email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email) ? '' : 'Please enter a valid email',
  phone: /^\+?\d{8,15}$/.test(f.phone.replace(/[\s-]/g, '')) ? '' : 'Please enter a valid WhatsApp number',
});

const Stepper = ({ value, min, max, onChange }) => (
  <div className="flex items-center gap-4" data-testid="bk-pax">
    <button type="button" disabled={value <= min} onClick={() => onChange(value - 1)} className="w-11 h-11 rounded-full border border-[#C4CBD0] flex items-center justify-center text-[#174358] disabled:opacity-30 hover:bg-[#FBEADB]" aria-label="Fewer travellers" data-testid="bk-pax-minus"><Minus size={18} /></button>
    <span className="w-6 text-center eg-headline-md text-[#002131]" data-testid="bk-pax-value">{value}</span>
    <button type="button" disabled={value >= max} onClick={() => onChange(value + 1)} className="w-11 h-11 rounded-full border border-[#C4CBD0] flex items-center justify-center text-[#174358] disabled:opacity-30 hover:bg-[#FBEADB]" aria-label="More travellers" data-testid="bk-pax-plus"><Plus size={18} /></button>
  </div>
);

const Field = ({ label, error, children }) => (
  <label className="flex flex-col gap-1.5"><span className="eg-label-lg text-[#002131]">{label}</span>{children}{error && <span className="eg-label-md text-[#B3261E]" data-testid="bk-field-error">{error}</span>}</label>
);

export const BookingModal = ({ product, departures, initial, onClose, thankYouPath }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(initial ? 1 : 0);
  const [dep, setDep] = useState(initial || null);
  const [pax, setPax] = useState(1);
  const [room, setRoom] = useState('twin');
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [payError, setPayError] = useState('');
  const months = useMemo(() => [...new Set(departures.map((d) => monthKey(d.start)))], [departures]);
  const [month, setMonth] = useState('all');

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  const maxPax = dep ? Math.min(dep.seats_left, 8) : 8;
  const q = dep ? quoteOf(dep, pax, room) : null;
  const pick = (d) => { setDep(d); setPax((p) => Math.min(p, Math.min(d.seats_left, 8))); setStep(1); };

  const pay = async () => {
    const errs = validate(form);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    setBusy(true); setPayError('');
    try {
      const res = await fetch(`${API}/api/bookings/group/order`, { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: product.key, departure: dep.id, travellers: pax, room, contact: { ...form, phone: form.phone.replace(/[\s-]/g, '') } }) });
      if (!res.ok) throw new Error((await res.json()).detail || 'Could not start the payment');
      const order = await res.json();
      setStep(3);
      const result = await payWithRazorpay(order, { ...form, title: `${product.title} · seat hold`, image: product.hero.mainSm });
      const ver = await fetch(`${API}/api/bookings/verify`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ booking_id: order.booking_id, ...result }) });
      if (!ver.ok) throw new Error((await ver.json().catch(() => ({}))).detail || 'We could not verify the payment. If money was deducted, we will contact you shortly.');
      document.body.style.overflow = '';
      navigate(thankYouPath(order.booking_id));
    } catch (e) {
      setStep(2);
      if (e.message !== 'cancelled') setPayError(e.message || 'Payment failed. Please try again.');
    } finally { setBusy(false); }
  };

  const title = ['Choose your departure', 'How many travellers?', 'Lead traveller', 'Secure payment'][step];
  const list = month === 'all' ? departures : departures.filter((d) => monthKey(d.start) === month);

  return (
    <div className="fixed inset-0 z-[70] bg-[#002131]/70 flex items-end sm:items-center justify-center sm:p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={title} data-testid="booking-modal" data-step={step}>
      <div className="bg-[#FBF9F1] w-full sm:max-w-[560px] max-h-[94vh] sm:max-h-[90vh] rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="px-4 md:px-6 pt-4 pb-3 border-b border-[#E4E3DB] bg-white flex flex-col gap-3">
          <div className="flex items-center gap-2">
            {step > 0 && step < 3 && <button type="button" onClick={() => setStep(step - 1)} className="w-10 h-10 -ml-2 rounded-full hover:bg-[#F0EEE6] flex items-center justify-center text-[#002131]" aria-label="Back" data-testid="bk-back"><ChevronLeft size={22} /></button>}
            <div className="flex-1 min-w-0"><h2 className="eg-title-lg text-[#002131] truncate" data-testid="bk-title">{title}</h2><p className="eg-label-md text-[#6F777C] truncate">{product.title} · {product.days} days</p></div>
            <button type="button" onClick={onClose} className="w-10 h-10 rounded-full hover:bg-[#F0EEE6] flex items-center justify-center text-[#002131]" aria-label="Close" data-testid="bk-close"><X size={20} /></button>
          </div>
          <ol className="flex items-center gap-1.5" data-testid="bk-steps">{STEPS.map((s, i) => <li key={s} className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-[#174358]' : 'bg-[#E4E3DB]'}`} aria-label={s} />)}</ol>
        </div>

        <div className="overflow-y-auto px-4 md:px-6 py-4 flex flex-col gap-4">
          {step === 0 && (
            <>
              <MonthTabs months={['all', ...months]} value={month} onChange={setMonth} testPrefix="bk-month" />
              <ul className="flex flex-col gap-2.5" data-testid="bk-dates">{list.map((d) => <DepartureRow key={d.id} dep={d} onPick={pick} compact selected={dep?.id === d.id} />)}</ul>
            </>
          )}

          {step === 1 && dep && (
            <>
              <button type="button" onClick={() => setStep(0)} className="flex items-center justify-between gap-3 rounded-2xl border border-[#C4CBD0] bg-white p-3 text-left" data-testid="bk-selected-date">
                <div><p className="eg-label-md text-[#6F777C]">Departure</p><p className="eg-title-md text-[#002131]">{fmtRange(dep)}</p></div>
                <div className="flex items-center gap-2"><StatusBadge dep={dep} /><span className="eg-label-lg text-[#174358] underline">Change</span></div>
              </button>
              <div className="rounded-2xl border border-[#C4CBD0] bg-white p-4 flex items-center justify-between gap-3">
                <div><p className="eg-title-md text-[#002131]">Travellers</p><p className="eg-label-md text-[#6F777C]">Adults 18+ · up to {maxPax} on this date</p></div>
                <Stepper value={pax} min={1} max={maxPax} onChange={setPax} />
              </div>
              {dep.single_supplement ? (
              <div className="grid grid-cols-2 gap-2" data-testid="bk-room">
                {[['twin', 'Twin share', 'included'], ['single', 'Private room', `+${fmtInr(dep.single_supplement)} pp`]].map(([k, l, s]) => (
                  <button key={k} type="button" onClick={() => setRoom(k)} className={`rounded-2xl border px-3 py-3 text-left transition-colors ${room === k ? 'border-[#174358] bg-[#FBEADB]' : 'border-[#C4CBD0] bg-white hover:border-[#174358]'}`} data-testid={`bk-room-${k}`} aria-pressed={room === k}>
                    <p className="eg-label-lg text-[#002131] flex items-center gap-1.5"><BedDouble size={16} className="text-[#174358]" />{l}</p><p className="eg-label-md text-[#6F777C]">{s}</p>
                  </button>
                ))}
              </div>
              ) : <p className="eg-label-lg text-[#002131] flex items-center gap-1.5" data-testid="bk-room-twin-only"><BedDouble size={16} className="text-[#174358]" />Twin or double sharing room</p>}
            </>
          )}

          {step === 2 && dep && (
            <>
              <p className="eg-body-md text-[#174358]">No account needed. We confirm your seat hold on WhatsApp and by email.</p>
              <Field label="Full name" error={errors.name}><input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name as on passport" data-testid="bk-name" autoComplete="name" /></Field>
              <Field label="WhatsApp number" error={errors.phone}><input type="tel" className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" data-testid="bk-phone" autoComplete="tel" /></Field>
              <Field label="Email address" error={errors.email}><input type="email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" data-testid="bk-email" autoComplete="email" /></Field>
              {payError && <p className="eg-label-lg text-[#B3261E]" data-testid="bk-pay-error">{payError}</p>}
            </>
          )}

          {step === 3 && <p className="eg-body-lg text-[#174358] py-6 text-center" data-testid="bk-paying">Opening secure Razorpay payment…</p>}
        </div>

        {dep && step > 0 && step < 3 && (
          <div className="border-t border-[#E4E3DB] bg-white px-4 md:px-6 py-3 flex items-center justify-between gap-3" data-testid="bk-footer">
            <div className="min-w-0">
              <p className="eg-label-md text-[#C84D1B]">Pay today · non-refundable hold</p>
              <p className="eg-headline-md text-[#002131] leading-tight" data-testid="bk-deposit">{fmtInr(q.deposit)}</p>
              <p className="eg-label-md text-[#6F777C] truncate" data-testid="bk-balance">{fmtInr(dep.deposit_pp)} × {pax} · rest {fmtInr(q.balance)} due {fmtDate(dep.balance_due, { day: 'numeric', month: 'short' })}</p>
            </div>
            {step === 1
              ? <button type="button" onClick={() => setStep(2)} className="eg-btn-filled !h-12 px-6 eg-label-lg shrink-0" data-testid="bk-continue">Continue</button>
              : <button type="button" onClick={pay} disabled={busy} className="eg-btn-filled !h-12 px-6 eg-label-lg shrink-0 disabled:opacity-50" data-testid="bk-pay"><Lock size={16} /> {busy ? 'Opening…' : `Pay ${fmtInr(q.deposit)}`}</button>}
          </div>
        )}
      </div>
    </div>
  );
};
