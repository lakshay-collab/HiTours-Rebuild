import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, Lock, Users, BedDouble, CalendarDays } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { detail, PATHS } from '../grouptours/insideSriLankaData';
import { depositOf, fmtDate, fmtInr, fmtRange, useDepartures, payWord } from '../grouptours/groupBooking';
import { StatusBadge, EarlyBird } from '../components/grouptour/DatesPrices';
import { payWithRazorpay } from '../booking/razorpay';

const API = process.env.REACT_APP_BACKEND_URL;
const inputCls = 'h-12 rounded-xl border border-[#C4CBD0] bg-white px-4 eg-body-lg text-[#002131] outline-none focus:border-[#174358] focus:ring-2 focus:ring-[#174358]/20';
const Field = ({ label, error, children }) => (
  <label className="flex flex-col gap-1.5"><span className="eg-label-lg text-[#002131]">{label}</span>{children}{error && <span className="eg-label-md text-[#B3261E]" data-testid="gcheckout-field-error">{error}</span>}</label>
);
const validate = (f) => ({
  name: f.name.trim().length < 2 ? 'Please tell us your name' : '',
  email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email) ? '' : 'Please enter a valid email',
  phone: /^\+?\d{8,15}$/.test(f.phone.replace(/[\s-]/g, '')) ? '' : 'Please enter a valid WhatsApp number',
});

export const Steps = ({ step }) => (
  <ol className="flex items-center gap-2 md:gap-4 flex-wrap" data-testid="gbooking-steps">
    {['Pick a departure', 'Pay deposit', 'Seat reserved'].map((s, i) => (
      <li key={s} className={`flex items-center gap-2 eg-label-lg ${i + 1 === step ? 'text-[#002131]' : 'text-[#5B6B74]'}`} aria-current={i + 1 === step ? 'step' : undefined}>
        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-semibold ${i + 1 <= step ? 'bg-[#174358] text-white' : 'bg-[#E4E3DB] text-[#5B6B74]'}`}>{i + 1}</span>{s}{i < 2 && <span className="text-[#C4CBD0] mx-1">›</span>}
      </li>
    ))}
  </ol>
);

export const DepositSummary = ({ dep, pax, room, paid = false }) => {
  const q = depositOf(dep, pax, room);
  return (
    <div className="bg-white rounded-2xl border border-[#C4CBD0] p-5 md:p-6 flex flex-col gap-4" data-testid="gcheckout-summary">
      <img src={detail.hero.mainSm} alt={detail.hero.alt} className="w-full h-36 object-cover rounded-xl" />
      <p className="eg-title-lg text-[#002131]">{detail.title}</p>
      <div className="flex flex-col gap-2 eg-body-md text-[#002131]">
        <p className="flex items-center gap-2"><CalendarDays size={16} className="text-[#174358]" /><span data-testid="gcheckout-range">{fmtRange(dep)}</span></p>
        <p className="flex items-center gap-2"><Users size={16} className="text-[#174358]" />{pax} traveller{pax > 1 ? 's' : ''}</p>
        <p className="flex items-center gap-2"><BedDouble size={16} className="text-[#174358]" />{room === 'single' ? 'Private room' : 'Twin share room'}</p>
        <div className="flex flex-wrap gap-2 pt-1"><StatusBadge dep={dep} /><EarlyBird dep={dep} /></div>
      </div>
      <hr className="border-[#E4E3DB]" />
      <div className="flex flex-col gap-1.5 eg-body-md text-[#002131]">
        <div className="flex justify-between"><span>{fmtInr(q.pp)} × {pax}</span><span data-testid="gcheckout-total">{fmtInr(q.total)}</span></div>
        {!dep.full_payment && <div className="flex justify-between text-[#5B6B74]"><span>Balance due {fmtDate(dep.balance_due)}</span><span data-testid="gcheckout-balance">{fmtInr(q.balance)}</span></div>}
      </div>
      <div className="flex items-baseline justify-between rounded-xl bg-[#FBEADB] px-4 py-3">
        <span className="eg-title-md text-[#002131]">{dep.full_payment ? (paid ? 'Paid in full' : 'Full payment due now') : `${paid ? 'Deposit paid' : 'Deposit due now'} (${dep.deposit_pct}%)`}</span>
        <span className="eg-headline-md text-[#002131]" data-testid="gcheckout-deposit">{fmtInr(q.deposit)}</span>
      </div>
    </div>
  );
};

export default function GroupCheckout() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { data, departures, error } = useDepartures(detail.key);
  const depId = params.get('dep');
  const paxWanted = Math.min(8, Math.max(1, Number(params.get('pax')) || 2));
  const room = params.get('room') === 'single' ? 'single' : 'twin';
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [gateway, setGateway] = useState(null);
  const [payError, setPayError] = useState('');
  useEffect(() => { document.title = 'Pay deposit | Hi Tours'; window.scrollTo(0, 0); }, []);
  useEffect(() => { fetch(`${API}/api/bookings/config`).then((r) => r.json()).then(setGateway).catch(() => setGateway({ mock: true })); }, []);

  if (!data && !error) return <div className="eg"><Header /><main className="eg-wide py-16 eg-body-lg text-[#5B6B74]" data-testid="gcheckout-loading">Loading your departure…</main><Footer /></div>;
  const dep = departures.find((d) => d.id === depId);
  if (!dep || dep.status === 'sold_out') return <Navigate to={`${PATHS.detail}#dates`} replace />;
  const pax = Math.min(paxWanted, dep.seats_left);
  const q = depositOf(dep, pax, room);

  const pay = async () => {
    const errs = validate(form);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    setBusy(true); setPayError('');
    try {
      const res = await fetch(`${API}/api/bookings/group/order`, { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: detail.key, departure: dep.id, travellers: pax, room, contact: { ...form, phone: form.phone.replace(/[\s-]/g, '') } }) });
      if (!res.ok) throw new Error((await res.json()).detail || 'Could not start the payment');
      const order = await res.json();
      const result = await payWithRazorpay(order, { ...form, title: `${detail.title} · ${payWord(dep)}`, image: detail.hero.mainSm });
      const ver = await fetch(`${API}/api/bookings/verify`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ booking_id: order.booking_id, ...result }) });
      if (!ver.ok) throw new Error('We could not verify the payment. If money was deducted, we will contact you shortly.');
      navigate(PATHS.confirmed(order.booking_id));
    } catch (e) {
      if (e.message !== 'cancelled') setPayError(e.message || 'Payment failed. Please try again.');
    } finally { setBusy(false); }
  };

  return (
    <div className="eg" data-testid="gcheckout-page">
      <Header />
      <main className="eg-wide pt-4 md:pt-6 pb-16 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Link to={`${PATHS.detail}#dates`} className="inline-flex items-center gap-1 eg-label-lg text-[#174358] hover:text-[#002131] self-start" data-testid="gcheckout-back"><ChevronLeft size={16} /> Change departure or travellers</Link>
          <Steps step={2} />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 min-w-0 flex flex-col gap-8">
            <h1 className="eg-headline-lg text-[#002131]" data-testid="gcheckout-title">{dep.full_payment ? `Reserve your seat${pax > 1 ? 's' : ''} · pay in full` : `Reserve your seat${pax > 1 ? 's' : ''} with a ${dep.deposit_pct}% deposit`}</h1>
            {pax < paxWanted && <p className="eg-label-lg text-[#C84D1B] -mt-4" data-testid="gcheckout-pax-clamped">Only {dep.seats_left} seat{dep.seats_left > 1 ? 's' : ''} left on this departure, so we have set travellers to {pax}.</p>}
            <section className="bg-white rounded-2xl border border-[#E4E3DB] p-5 md:p-6 flex flex-col gap-5" data-testid="gcheckout-contact">
              <h2 className="eg-title-lg text-[#002131]">Lead traveller</h2>
              <p className="eg-body-md text-[#5B6B74] -mt-2">No account needed. We confirm your seat on WhatsApp and by email.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Your name" error={errors.name}><input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name as on passport" data-testid="gcheckout-name" autoComplete="name" /></Field>
                <Field label="WhatsApp number" error={errors.phone}><input type="tel" className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" data-testid="gcheckout-phone" autoComplete="tel" /></Field>
                <Field label="Email" error={errors.email}><input type="email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" data-testid="gcheckout-email" autoComplete="email" /></Field>
              </div>
            </section>
            <section className="bg-white rounded-2xl border border-[#E4E3DB] p-5 md:p-6 flex flex-col gap-4" data-testid="gcheckout-pay">
              <h2 className="eg-title-lg text-[#002131]">{dep.full_payment ? 'Payment' : 'Deposit payment'}</h2>
              {dep.full_payment
                ? <p className="eg-body-md text-[#002131]">This departure is less than 60 days away, so the full amount of <strong data-testid="gcheckout-amount">{fmtInr(q.deposit)}</strong> is paid now with UPI, cards, net banking or wallets through Razorpay.</p>
                : <p className="eg-body-md text-[#002131]">Pay only <strong data-testid="gcheckout-amount">{fmtInr(q.deposit)}</strong> now ({dep.deposit_pct}% of {fmtInr(q.total)}) with UPI, cards, net banking or wallets through Razorpay. The balance of {fmtInr(q.balance)} is due by {fmtDate(dep.balance_due)}; we remind you on WhatsApp and you can pay in parts before then.</p>}
              {gateway?.mock && <p className="eg-label-md rounded-lg bg-[#FBEADB] px-3 py-2 text-[#174358]" data-testid="gcheckout-mock-note">Test mode: Razorpay keys are not connected yet, so a simulated payment window is shown and no money moves.</p>}
              {payError && <p className="eg-label-lg text-[#B3261E]" data-testid="gcheckout-pay-error">{payError}</p>}
              <button type="button" onClick={pay} disabled={busy || !gateway} className="eg-btn-filled !h-14 px-8 eg-title-md self-start disabled:opacity-50" data-testid="gcheckout-pay-button"><Lock size={16} /> {busy ? 'Opening secure payment…' : `Pay ${fmtInr(q.deposit)} ${payWord(dep)}`}</button>
              <p className="eg-label-md text-[#5B6B74]">By paying you agree to the Hi Tours booking terms. Deposits are transferable to another departure up to 60 days before travel.</p>
            </section>
          </div>
          <aside className="w-full md:w-[384px] shrink-0 md:self-start md:sticky md:top-6"><DepositSummary dep={dep} pax={pax} room={room} /></aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
