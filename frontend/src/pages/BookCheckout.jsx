import React, { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ChevronLeft, Lock, Tag, Check, Landmark, Wallet, BedDouble } from 'lucide-react';
import { CountsRow } from '../components/booking/BookingSummary';
import { ReviewRow } from '../components/booking/TrustReview';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BOOKABLE, fromISO, toISO, encodeRooms, decodeRooms, quote, fmtInr, fmtDate, addDays, isBookable, useLive, readVerified } from '../booking/bookable';
import { payWithRazorpay } from '../booking/razorpay';

const API = process.env.REACT_APP_BACKEND_URL;
const inputCls = 'h-12 rounded-xl border border-[#C4CBD0] bg-white px-4 eg-body-lg text-[#002131] outline-none focus:border-[#174358] focus:ring-2 focus:ring-[#174358]/20';
const payCls = 'inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#1E7B4B] hover:bg-[#17633C] text-white eg-title-md shadow-[0_8px_20px_-8px_rgba(30,123,75,0.8)] transition-colors disabled:opacity-50';
const validate = (f) => ({
  name: f.name.trim().length < 2 ? 'Please tell us your name' : '',
  email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.trim()) ? '' : 'Please enter a valid email',
  phone: /^\+?\d{8,15}$/.test(f.phone.replace(/[\s-]/g, '')) ? '' : 'Please enter a valid WhatsApp number',
});
const initialForm = () => {
  const v = readVerified();
  let c = {};
  try { c = JSON.parse(sessionStorage.getItem('ht_contact') || '{}'); } catch (e) { /* private mode */ }
  return { name: v?.name || c.name || '', email: c.email || '', phone: v ? `${v.country_code}${v.phone}`.replace(/[^\d+]/g, '') : c.phone || '' };
};
const jsround = (n) => Math.floor(n + 0.5);

const Field = ({ label, error, children }) => (
  <label className="flex flex-col gap-1.5"><span className="eg-label-lg text-[#002131]">{label}</span>{children}{error && <span className="eg-label-md text-[#B3261E]" data-testid="checkout-field-error">{error}</span>}</label>
);
const Line = ({ label, value, strong, green, testId }) => (
  <div className={`flex justify-between gap-3 ${strong ? 'eg-title-lg text-[#002131]' : 'eg-body-md text-[#002131]'} ${green ? '!text-[#1E7B4B]' : ''}`} data-testid={testId}><span>{label}</span><span className="tabular-nums">{value}</span></div>
);

function Promos({ promos, applied, onApply }) {
  if (!promos) return <p className="eg-label-md text-[#174358]">Finding your best offer…</p>;
  return (
    <div className="flex flex-col gap-2" data-testid="checkout-promos">
      <p className="eg-label-lg text-[#002131] flex items-center gap-2"><Tag size={16} className="text-[#E75E26]" />Offers for you</p>
      {promos.map((p) => {
        const on = applied === p.code;
        return (
          <button key={p.code} type="button" disabled={!p.eligible} onClick={() => onApply(on ? null : p.code)} className={`w-full flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors disabled:opacity-45 disabled:cursor-not-allowed ${on ? 'border-[#1E7B4B] bg-[#EAF6EE]' : 'border-[#E4E3DB] hover:border-[#174358]'}`} data-testid={`promo-${p.code}`}>
            <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${on ? 'border-[#1E7B4B] bg-[#1E7B4B] text-white' : 'border-[#9AA3A8]'}`}>{on && <Check size={12} strokeWidth={3} />}</span>
            <span className="flex-1 min-w-0"><span className="block eg-label-lg text-[#002131]">{p.code} <span className="font-normal text-[#174358]">· {p.terms}</span></span><span className="block eg-label-md text-[#174358]">{p.eligible ? p.label : `${p.label} · not available for this booking`}</span></span>
            {p.eligible && <span className="eg-label-lg text-[#1E7B4B] tabular-nums shrink-0">−{fmtInr(p.saving)}</span>}
          </button>
        );
      })}
    </div>
  );
}

function HolidayCard({ product, date, rooms, q, promos, applied, onApply, totals, children }) {
  const out = addDays(date, product.nights);
  return (
    <div className="bg-white rounded-2xl border border-[#C4CBD0] overflow-hidden" data-testid="checkout-holiday">
      <img src={product.image} alt={product.alt} className="w-full h-24 object-cover" />
      <div className="p-5 flex flex-col gap-4">
        <div><p className="eg-label-md text-[#174358]">Your holiday</p><p className="eg-title-lg text-[#002131]" data-testid="checkout-holiday-title">{product.shortTitle}</p></div>
        <dl className="rounded-xl border border-[#E4E3DB] divide-y divide-[#E4E3DB]" data-testid="checkout-trip">
          <div className="grid grid-cols-2 divide-x divide-[#E4E3DB]">
            <div className="p-3"><dt className="eg-label-md uppercase tracking-[0.08em] text-[#1F6F94]">Check-in</dt><dd className="eg-title-md text-[#002131] mt-0.5" data-testid="checkout-checkin">{fmtDate(date, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</dd></div>
            <div className="p-3"><dt className="eg-label-md uppercase tracking-[0.08em] text-[#1F6F94]">Check-out</dt><dd className="eg-title-md text-[#002131] mt-0.5" data-testid="checkout-checkout">{fmtDate(out, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</dd></div>
          </div>
          <div className="p-3"><dt className="eg-label-md uppercase tracking-[0.08em] text-[#1F6F94]">Duration</dt><dd className="eg-title-md text-[#002131] mt-0.5">{product.nights} nights · {product.days} days</dd></div>
          <div className="p-3" data-testid="checkout-travellers"><dt className="eg-label-md uppercase tracking-[0.08em] text-[#1F6F94]">Travellers · {q.adults + q.children} in {q.rooms} room{q.rooms === 1 ? '' : 's'}</dt>
            <dd className="mt-1.5 flex flex-col gap-1.5">{rooms.map((r, i) => <span key={i} className="flex items-center gap-2 eg-label-lg text-[#002131]"><BedDouble size={16} className="text-[#1F6F94]" />Room {i + 1}: {r.adults} adult{r.adults === 1 ? '' : 's'}{r.children ? `, ${r.children} child` : ''}</span>)}</dd>
          </div>
        </dl>
        <div className="flex flex-col gap-2 pt-4 border-t border-[#E4E3DB]" data-testid="checkout-included"><p className="eg-label-lg text-[#002131]">Your holiday includes</p><CountsRow product={product} compact /></div>
        <Promos promos={promos} applied={applied} onApply={onApply} />
        <div className="flex flex-col gap-2 pt-1 border-t border-[#E4E3DB]" data-testid="checkout-price">
          <div className="pt-3" />
          <Line label={`${fmtInr(q.adultPrice)} × ${q.adults} adult${q.adults === 1 ? '' : 's'}`} value={fmtInr(q.adultPrice * q.adults)} />
          {q.children > 0 && <Line label={`${fmtInr(q.childPrice)} × ${q.children} child${q.children === 1 ? '' : 'ren'}`} value={fmtInr(q.childPrice * q.children)} />}
          {totals.saving > 0 && <Line label={`Promo ${applied}`} value={`−${fmtInr(totals.saving)}`} green testId="checkout-discount" />}
          <Line label="Total" value={fmtInr(totals.total)} strong testId="checkout-total" />
          {totals.deposit && <Line label="Due today (10%)" value={fmtInr(totals.deposit)} strong green testId="checkout-due-today" />}
        </div>
        {children}
      </div>
    </div>
  );
}

export default function BookCheckout() {
  const { key } = useParams();
  const product = BOOKABLE[key];
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const date = fromISO(params.get('date'));
  const rooms = decodeRooms(params.get('rooms'));
  const [form, setForm] = useState(initialForm);
  const live = useLive(product, rooms);
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [gateway, setGateway] = useState(null);
  const [payError, setPayError] = useState('');
  const [offer, setOffer] = useState(null);
  const [applied, setApplied] = useState(null);
  const [mode, setMode] = useState('deposit');
  const iso = date ? toISO(date) : '';

  useEffect(() => { document.title = 'Checkout | Hi Tours'; window.scrollTo(0, 0); }, []);
  useEffect(() => { fetch(`${API}/api/bookings/config`).then((r) => r.json()).then(setGateway).catch(() => setGateway({ mock: true })); }, []);
  const loadOffers = (email = form.email, phone = form.phone) => {
    if (!iso) return;
    fetch(`${API}/api/bookings/promos`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ product: key, departure: iso, rooms, email: email.trim(), phone: phone.replace(/[\s-]/g, '') }) })
      .then((r) => (r.ok ? r.json() : null)).then((j) => { if (j) { setOffer(j); setApplied(j.best); } }).catch(() => {});
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { loadOffers(); }, [key, iso, encodeRooms(rooms)]);

  const q = product && date ? quote(product, date, rooms) : null;
  const totals = useMemo(() => {
    if (!q) return {};
    const saving = (offer?.promos.find((p) => p.code === applied) || {}).saving || 0;
    const total = q.total - saving;
    return { saving, total, deposit: offer?.deposit_allowed && mode === 'deposit' ? jsround(total * offer.deposit_pct) : null };
  }, [q, offer, applied, mode]);

  if (!product) return <Navigate to="/asia" replace />;
  if (product.live && !live) return <div className="eg"><Header /><main className="eg-wide py-16"><p className="eg-body-lg text-[#174358]" data-testid="checkout-loading">Getting the live price for your dates…</p></main><Footer /></div>;
  if (!date || !isBookable(date, product)) return <Navigate to={`${product.detailPath}?rooms=${encodeRooms(rooms)}`} replace />;
  const back = `${product.detailPath}?date=${iso}&rooms=${encodeRooms(rooms)}`;
  const dueNow = totals.deposit || totals.total;

  const pay = async () => {
    const errs = validate(form);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) { document.getElementById('checkout-contact')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    setBusy(true); setPayError('');
    try {
      const res = await fetch(`${API}/api/bookings/order`, { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: key, departure: iso, rooms, promo: applied, pay_mode: totals.deposit ? 'deposit' : 'full', contact: { name: form.name.trim(), email: form.email.trim(), phone: form.phone.replace(/[\s-]/g, '') } }) });
      if (!res.ok) throw new Error((await res.json()).detail || 'Could not start the payment');
      const order = await res.json();
      const result = await payWithRazorpay(order, { ...form, title: product.shortTitle, image: product.image });
      const ver = await fetch(`${API}/api/bookings/verify`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ booking_id: order.booking_id, ...result }) });
      if (!ver.ok) throw new Error('We could not verify the payment. If money was deducted, we will contact you shortly.');
      navigate(`/asia/book/${key}/confirmed/${order.booking_id}`);
    } catch (e) {
      if (e.message !== 'cancelled') setPayError(e.message || 'Payment failed. Please try again.');
    } finally { setBusy(false); }
  };

  const Option = ({ value, title, sub, testId }) => (
    <button type="button" onClick={() => setMode(value)} className={`w-full flex items-start gap-3 rounded-xl border p-4 text-left transition-colors ${mode === value ? 'border-[#174358] bg-[#174358]/[0.05]' : 'border-[#E4E3DB] hover:border-[#174358]'}`} data-testid={testId}>
      <span className={`mt-0.5 w-5 h-5 rounded-full border-2 shrink-0 ${mode === value ? 'border-[#174358] bg-[radial-gradient(circle,#174358_45%,transparent_50%)]' : 'border-[#9AA3A8]'}`} />
      <span><span className="block eg-title-md text-[#002131]">{title}</span><span className="block eg-label-md text-[#174358]">{sub}</span></span>
    </button>
  );

  return (
    <div className="eg" data-testid="book-checkout-page">
      <Header />
      <main className="eg-wide pt-4 md:pt-6 pb-32 md:pb-16 flex flex-col gap-6">
        <Link to={back} className="inline-flex items-center gap-1 eg-label-lg text-[#174358] hover:text-[#002131] self-start" data-testid="checkout-back"><ChevronLeft size={16} /> Back to your holiday</Link>
        <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8">
          <aside className="w-full md:w-[420px] shrink-0 md:self-start md:sticky md:top-6 md:max-h-[calc(100vh-24px)] md:overflow-y-auto no-scrollbar">
            <HolidayCard product={product} date={date} rooms={rooms} q={q} promos={offer?.promos} applied={applied} onApply={setApplied} totals={totals}>
              <button type="button" onClick={pay} disabled={busy || !gateway} className={`${payCls} hidden md:inline-flex w-full`} data-testid="checkout-side-pay"><Lock size={16} /> Pay {fmtInr(dueNow)} securely</button>
            </HolidayCard>
          </aside>
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            <h1 className="eg-headline-lg text-[#002131]" data-testid="checkout-title">Checkout</h1>
            <section id="checkout-contact" className="bg-white rounded-2xl border border-[#E4E3DB] p-5 md:p-6 flex flex-col gap-4" data-testid="checkout-contact">
              <h2 className="eg-title-lg text-[#002131]">Lead traveller</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Full name" error={errors.name}><input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="As on passport" data-testid="checkout-name" autoComplete="name" /></Field>
                <Field label="WhatsApp number" error={errors.phone}><input type="tel" className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} onBlur={() => loadOffers()} placeholder="+91 98765 43210" data-testid="checkout-phone" autoComplete="tel" /></Field>
                <Field label="Email for your booking confirmation" error={errors.email}><input type="email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} onBlur={() => loadOffers()} placeholder="you@example.com" data-testid="checkout-email" autoComplete="email" /></Field>
              </div>
            </section>
            <section className="bg-white rounded-2xl border border-[#E4E3DB] p-5 md:p-6 flex flex-col gap-4" data-testid="checkout-pay">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="eg-title-lg text-[#002131]">How would you like to pay?</h2>
                <span className="inline-flex items-center gap-2 eg-label-md text-[#174358]" data-testid="checkout-razorpay-badge">Secured by <img src="/badges/razorpay.svg" alt="Razorpay" className="h-5 w-auto" /></span>
              </div>
              {offer?.deposit_allowed ? (
                <div className="flex flex-col gap-3">
                  <Option value="deposit" title={`Pay 10% now: ${fmtInr(jsround(totals.total * offer.deposit_pct))}`} sub={`The balance of ${fmtInr(totals.total - jsround(totals.total * offer.deposit_pct))} is due by ${fmtDate(fromISO(offer.balance_due))}. We send you a secure payment link.`} testId="pay-mode-deposit" />
                  <Option value="full" title={`Pay in full: ${fmtInr(totals.total)}`} sub="Nothing more to pay later." testId="pay-mode-full" />
                </div>
              ) : <p className="eg-body-md text-[#002131]">Your check-in is less than 60 days away, so the full amount of <strong>{fmtInr(totals.total)}</strong> is paid now.</p>}
              {gateway?.mock && <p className="eg-label-md rounded-lg bg-[#FBEADB] px-3 py-2 text-[#174358]" data-testid="checkout-mock-note">Test mode: Razorpay keys are not connected yet, so a simulated payment window is shown and no money moves.</p>}
              {payError && <p className="eg-label-lg text-[#B3261E]" data-testid="checkout-pay-error">{payError}</p>}
              <button type="button" onClick={pay} disabled={busy || !gateway} className={`${payCls} self-stretch md:self-start`} data-testid="checkout-pay-button"><Lock size={16} /> {busy ? 'Opening secure payment…' : `Pay ${fmtInr(dueNow)} securely`}</button>
              <div className="flex flex-wrap items-center gap-2" data-testid="checkout-methods">
                {[['UPI', '/badges/pay-upi.svg'], ['Visa', '/badges/pay-visa.svg'], ['Mastercard', '/badges/pay-mastercard.svg'], ['RuPay', '/badges/pay-rupay.svg']].map(([m, src]) => <span key={m} className="h-10 px-3 rounded-lg border border-[#C4CBD0] bg-white inline-flex items-center"><img src={src} alt={m} className="h-5 w-auto max-w-[64px] object-contain" /></span>)}
                <span className="h-10 px-3 rounded-lg border border-[#C4CBD0] bg-white eg-label-lg text-[#002131] inline-flex items-center gap-2"><Landmark size={18} className="text-[#1F6F94]" />Net banking</span>
                <span className="h-10 px-3 rounded-lg border border-[#C4CBD0] bg-white eg-label-lg text-[#002131] inline-flex items-center gap-2"><Wallet size={18} className="text-[#1F6F94]" />Wallets</span>
              </div>
              <p className="eg-label-md text-[#174358]">By paying you agree to the Hi Tours booking terms and the Hi Tours Cares cancellation policy.</p>
            </section>
            <ReviewRow destination={product.destination} />
          </div>
        </div>
      </main>
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur border-t border-[#E4E3DB] px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] flex items-center justify-between gap-3" data-testid="checkout-mobile-bar">
        <div><p className="eg-title-lg text-[#002131] tabular-nums">{fmtInr(dueNow)}</p><p className="eg-label-md text-[#174358]">{totals.deposit ? 'Due today · 10%' : 'Total'}</p></div>
        <button type="button" onClick={pay} disabled={busy || !gateway} className={`${payCls} !h-12 !px-6`} data-testid="checkout-mobile-pay"><Lock size={16} />Pay now</button>
      </div>
      <Footer />
    </div>
  );
}
