import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ChevronLeft, Lock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BOOKABLE, fromISO, toISO, encodeRooms, decodeRooms, quote, fmtInr, isBookable } from '../booking/bookable';
import { StepBar, PaymentSummary, HotelsCard, IncludedCard } from '../components/booking/BookingSummary';
import { payWithRazorpay } from '../booking/razorpay';

const API = process.env.REACT_APP_BACKEND_URL;

const Field = ({ label, error, children }) => (
  <label className="flex flex-col gap-1.5">
    <span className="eg-label-lg text-[#002131]">{label}</span>
    {children}
    {error && <span className="eg-label-md text-[#B3261E]" data-testid="checkout-field-error">{error}</span>}
  </label>
);
const inputCls = 'h-12 rounded-xl border border-[#C4CBD0] bg-white px-4 eg-body-lg text-[#002131] outline-none focus:border-[#174358] focus:ring-2 focus:ring-[#174358]/20';
const validate = (f) => ({
  name: f.name.trim().length < 2 ? 'Please tell us your name' : '',
  email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email) ? '' : 'Please enter a valid email',
  phone: /^\+?\d{8,15}$/.test(f.phone.replace(/[\s-]/g, '')) ? '' : 'Please enter a valid WhatsApp number',
});

export default function BookCheckout() {
  const { key } = useParams();
  const product = BOOKABLE[key];
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const date = fromISO(params.get('date'));
  const rooms = decodeRooms(params.get('rooms'));
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [gateway, setGateway] = useState(null);
  const [payError, setPayError] = useState('');

  useEffect(() => { document.title = 'Review & pay | Hi Tours'; window.scrollTo(0, 0); }, []);
  useEffect(() => { fetch(`${API}/api/bookings/config`).then((r) => r.json()).then(setGateway).catch(() => setGateway({ mock: true })); }, []);

  if (!product) return <Navigate to="/asia/sri-lanka" replace />;
  if (!date || !isBookable(date)) return <Navigate to={`${product.datesPath}?rooms=${encodeRooms(rooms)}`} replace />;
  const q = quote(product, date, rooms);
  const back = `${product.datesPath}?date=${toISO(date)}&rooms=${encodeRooms(rooms)}`;

  const pay = async () => {
    const errs = validate(form);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    setBusy(true); setPayError('');
    try {
      const res = await fetch(`${API}/api/bookings/order`, { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: key, departure: toISO(date), rooms, contact: { ...form, phone: form.phone.replace(/[\s-]/g, '') } }) });
      if (!res.ok) throw new Error((await res.json()).detail || 'Could not start the payment');
      const order = await res.json();
      const result = await payWithRazorpay(order, { ...form, title: product.title, image: product.image });
      const ver = await fetch(`${API}/api/bookings/verify`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ booking_id: order.booking_id, ...result }) });
      if (!ver.ok) throw new Error('We could not verify the payment. If money was deducted, we will contact you shortly.');
      navigate(`/asia/book/${key}/confirmed/${order.booking_id}`);
    } catch (e) {
      if (e.message !== 'cancelled') setPayError(e.message || 'Payment failed. Please try again.');
    } finally { setBusy(false); }
  };

  return (
    <div className="eg" data-testid="book-checkout-page">
      <Header />
      <main className="eg-wide pt-4 md:pt-6 pb-16 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Link to={back} className="inline-flex items-center gap-1 eg-label-lg text-[#174358] hover:text-[#002131] self-start" data-testid="checkout-back"><ChevronLeft size={16} /> Change dates or travellers</Link>
          <StepBar step={2} />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 min-w-0 flex flex-col gap-8">
            <h1 className="eg-headline-lg text-[#002131]" data-testid="checkout-title">Review & pay</h1>
            <section className="bg-white rounded-2xl border border-[#E4E3DB] p-5 md:p-6 flex flex-col gap-5" data-testid="checkout-contact">
              <h2 className="eg-title-lg text-[#002131]">Your details</h2>
              <p className="eg-body-md text-[#5B6B74] -mt-2">No account needed. We confirm your booking on WhatsApp and by email.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Your name" error={errors.name}><input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="What should we call you?" data-testid="checkout-name" autoComplete="name" /></Field>
                <Field label="WhatsApp number" error={errors.phone}><input type="tel" className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" data-testid="checkout-phone" autoComplete="tel" /></Field>
                <Field label="Email" error={errors.email}><input type="email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" data-testid="checkout-email" autoComplete="email" /></Field>
              </div>
              <p className="eg-label-md text-[#5B6B74]">Your Sri Lanka expert will message you on WhatsApp after payment to collect passport names and arrange the rest.</p>
            </section>
            <section className="bg-white rounded-2xl border border-[#E4E3DB] p-5 md:p-6 flex flex-col gap-4" data-testid="checkout-pay">
              <h2 className="eg-title-lg text-[#002131]">Payment</h2>
              <p className="eg-body-md text-[#002131]">Pay securely with UPI, cards, net banking or wallets through Razorpay. The full amount of <strong data-testid="checkout-amount">{fmtInr(q.total)}</strong> is charged now.</p>
              {gateway?.mock && <p className="eg-label-md rounded-lg bg-[#FBEADB] px-3 py-2 text-[#174358]" data-testid="checkout-mock-note">Test mode: Razorpay keys are not connected yet, so a simulated payment window is shown and no money moves.</p>}
              {payError && <p className="eg-label-lg text-[#B3261E]" data-testid="checkout-pay-error">{payError}</p>}
              <button type="button" onClick={pay} disabled={busy || !gateway} className="eg-btn-filled !h-14 px-8 eg-title-md self-start disabled:opacity-50" data-testid="checkout-pay-button"><Lock size={16} /> {busy ? 'Opening secure payment…' : `Pay ${fmtInr(q.total)} securely`}</button>
              <p className="eg-label-md text-[#5B6B74]">By paying you agree to the Hi Tours booking terms and the Hi Tours Cares cancellation policy.</p>
            </section>
          </div>
          <aside className="w-full md:w-[384px] shrink-0 flex flex-col gap-6 md:self-start md:sticky md:top-6">
            <PaymentSummary product={product} date={date} rooms={rooms} showImage={false} />
            <div className="hidden md:flex flex-col gap-6"><HotelsCard product={product} date={date} /><IncludedCard product={product} /></div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
