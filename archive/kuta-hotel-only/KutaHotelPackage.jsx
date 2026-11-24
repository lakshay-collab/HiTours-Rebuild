import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Lock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { EgyptReviews, EgyptFaq } from '../components/egypt/EgyptSections';
import { usePageLead, useLeadModal } from '../components/egypt/LeadModalProvider';
import { usePageMeta } from '../lib/seo';
import { CheckCircleIcon, ServiceIcon } from '../components/egypt/EgyptIcons';
import { reviews } from '../indonesiaListingData';
import * as tour from '../grouptours/kutaHotelOnlyData';
import { fmtDate, fmtInr } from '../grouptours/groupBooking';
import { GroupHead, GroupCrumbs, ExpertCard, WhyGroup, Inclusions, Features, Steps, ServicePills, Ratings } from '../components/grouptour/GroupSections';
import { StayModal } from '../components/hotelpackage/StayModal';
import { payWithRazorpay } from '../booking/razorpay';

const API = process.env.REACT_APP_BACKEND_URL;
const { detail, hotels, included, notIncluded, whyGroup, faq, steps, nextSteps, similarNote, PATHS } = tour;

const PriceBox = ({ config, onOpen, mobile = false }) => {
  const { openLead } = useLeadModal();
  const first = config?.nights[0];
  const low = config ? config.from_by_nights[first] : null;
  return (
    <div className="bg-white rounded-2xl border border-[#C4CBD0] p-5 md:p-6 flex flex-col gap-4" data-testid={mobile ? 'stay-price-box-mobile' : 'stay-price-box'}>
      <div className="flex flex-col gap-0.5">
        <span className="eg-body-md text-[#6F777C]">{first ? `${first} nights in a 4 star hotel from` : '4 star hotel with breakfast from'}</span>
        <span className="flex items-baseline gap-1.5"><span className="eg-price text-[#174358] tabular-nums" data-testid={mobile ? 'stay-from-price-mobile' : 'stay-from-price'}>{low ? fmtInr(low) : '…'}</span><span className="eg-body-md text-[#6F777C]">per room, with breakfast</span></span>
        <span className="eg-body-sm text-[#6F777C]">Price for your dates shows after you pick them · pay ₹10,000 now if check-in is 30 days or more away</span>
      </div>
      <button type="button" disabled={!config} onClick={() => onOpen(null)} className="eg-btn-filled w-full !h-16 !text-[18px] eg-title-md disabled:opacity-50" data-testid={mobile ? 'stay-open-inline-mobile' : 'stay-open'}>Choose your package</button>
      <button type="button" onClick={() => openLead()} className="eg-btn-outlined w-full !h-12 eg-label-lg" data-testid={mobile ? 'stay-speak-expert-mobile' : 'stay-speak-expert'}>Speak to a Bali expert</button>
      <hr className="border-[#E4E3DB]" />
      <ServicePills services={detail.services} testId={mobile ? 'stay-services-mobile' : 'stay-services'} />
      <ul className="flex flex-col gap-2">{detail.trust.map((t) => <li key={t} className="flex items-center gap-2 eg-body-md text-[#174358]"><CheckCircleIcon size={18} className="text-[#308BB6] shrink-0" />{t}</li>)}</ul>
      <hr className="border-[#E4E3DB]" />
      <Ratings />
    </div>
  );
};

const HotelCard = ({ h, from, nights, onOpen }) => (
  <li className="rounded-2xl border border-[#C4CBD0] bg-white overflow-hidden flex flex-col sm:flex-row" data-testid={`hotel-card-${h.id}`}>
    <div className="sm:w-[260px] shrink-0 grid grid-cols-3 gap-0.5">
      <img src={h.images[0]} alt={h.name} className="col-span-3 w-full aspect-[16/10] object-cover" loading="lazy" />
      {h.images.slice(1, 4).map((src, i) => <img key={src} src={src} alt={`${h.name} photo ${i + 2}`} className="w-full aspect-[4/3] object-cover" loading="lazy" />)}
    </div>
    <div className="flex-1 min-w-0 p-4 flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="eg-title-lg text-[#002131]">{h.name}</h3>
        <span className="inline-flex items-center rounded-full bg-[#E3F4EA] px-2.5 py-0.5 eg-label-md text-[#1E7B4B]">{h.score} {h.label}</span>
      </div>
      <p className="eg-label-md text-[#6F777C]">4 star · {h.area} · {h.room} with breakfast</p>
      <ul className="flex flex-col gap-1">{h.points.map((p) => <li key={p} className="flex items-start gap-2 eg-body-md text-[#174358]"><span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#308BB6] shrink-0" />{p}</li>)}</ul>
      <div className="mt-auto pt-2 flex flex-wrap items-center justify-between gap-3">
        <p className="eg-label-md text-[#6F777C]">{nights} nights from <span className="eg-title-lg text-[#002131]" data-testid={`hotel-card-${h.id}-from`}>{from ? fmtInr(from) : '…'}</span></p>
        <button type="button" onClick={() => onOpen(h.id)} className="eg-btn-outlined !h-11 px-5 eg-label-lg" data-testid={`hotel-card-${h.id}-choose`}>Choose dates</button>
      </div>
    </div>
  </li>
);

export default function KutaHotelPackage() {
  const [config, setConfig] = useState(null);
  const [modal, setModal] = useState(null);
  usePageLead('Bali', detail.hero.main, detail.hero.alt);
  usePageMeta(`${detail.title} | Hi Tours`, `${detail.tagline}. Pick your dates and preferred hotel and see the price straight away.`);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${API}/api/bookings/hotel/${detail.key}`).then((r) => (r.ok ? r.json() : null)).then(setConfig).catch(() => setConfig(null));
  }, []);
  const open = (hotel, nights) => config && setModal({ hotel, nights });
  const fromOf = (id) => config?.hotels.find((h) => h.id === id)?.from_price;

  return (
    <div className="eg" data-testid="hotel-package-page">
      <Header />
      <main className="flex flex-col gap-8 pb-28 md:pb-[100px]">
        <GroupHead detail={detail} stops={[]} />
        <GroupCrumbs crumbs={detail.crumbs} />
        <div className="eg-wide md:hidden"><PriceBox config={config} onOpen={open} mobile /></div>
        <div className="flex flex-col gap-14 md:gap-[72px]">
          <div className="eg-wide flex flex-col md:flex-row gap-8">
            <div className="flex-1 min-w-0 flex flex-col gap-8">
              <ExpertCard detail={detail} />
              <p className="eg-body-lg text-[#002131]" data-testid="stay-intro">{detail.intro}</p>
              <section id="packages" className="flex flex-col gap-4 scroll-mt-4" data-testid="stay-packages-section">
                <div><h2 className="eg-display-sm text-[#002131]">Choose your package</h2><p className="eg-body-lg text-[#002131] mt-2">Pick how many nights you want, then your dates. Prices are per room with breakfast.</p></div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {(config?.nights || []).map((n) => (
                    <li key={n}><button type="button" onClick={() => open(null, n)} className="w-full rounded-2xl border border-[#C4CBD0] bg-white px-4 py-4 text-left transition-colors hover:border-[#174358] hover:bg-[#FBEADB]" data-testid={`package-${n}`}>
                      <p className="eg-title-lg text-[#002131]">{n} nights</p>
                      <p className="eg-label-md text-[#6F777C]">from <span className="eg-title-md text-[#002131]" data-testid={`package-${n}-from`}>{fmtInr(config.from_by_nights[n])}</span></p>
                    </button></li>
                  ))}
                </ul>
              </section>
              <section id="hotels" className="flex flex-col gap-4 scroll-mt-4" data-testid="stay-hotels-section">
                <div><h2 className="eg-display-sm text-[#002131]">The hotels in this package</h2><p className="eg-body-lg text-[#002131] mt-2" data-testid="stay-similar">{similarNote}</p></div>
                <ul className="flex flex-col gap-4">{hotels.map((h) => <HotelCard key={h.id} h={h} from={fromOf(h.id)} nights={config?.nights[0] || 2} onOpen={open} />)}</ul>
              </section>
              <div className="md:hidden"><WhyGroup data={whyGroup} testId="group-why-mobile" /></div>
            </div>
            <aside className="hidden md:flex w-[384px] shrink-0 flex-col gap-6 self-start sticky top-6 max-h-[calc(100vh-24px)] overflow-y-auto no-scrollbar" data-testid="stay-sidebar">
              <PriceBox config={config} onOpen={open} />
              <WhyGroup data={whyGroup} />
            </aside>
          </div>
          <Inclusions included={included} notIncluded={notIncluded} />
          <Features />
          <EgyptReviews centered className="eg-container" h2="What travellers say about Bali with Hi Tours" count={reviews.count} items={reviews.items} bookHref="#hotels" />
          <EgyptFaq className="eg-container" data={faq} />
          <Steps data={steps} />
        </div>
      </main>
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#FBF9F1]/95 backdrop-blur border-t border-[#E4E3DB] px-4 py-3" data-testid="stay-mobile-bar">
        <button type="button" disabled={!config} onClick={() => open(null)} className="eg-btn-filled w-full !h-14 eg-title-md disabled:opacity-50" data-testid="stay-mobile-open">Choose your package</button>
      </div>
      {modal && <StayModal product={detail} config={config} hotels={hotels} similarNote={similarNote} initialHotel={modal.hotel} initialNights={modal.nights} onClose={() => setModal(null)} checkoutPath={PATHS.checkout} />}
      <Footer />
    </div>
  );
}

const inputCls = 'h-12 w-full rounded-xl border border-[#C4CBD0] bg-white px-4 eg-body-lg text-[#002131] outline-none focus:border-[#174358] focus:ring-2 focus:ring-[#174358]/20';
const validate = (f) => ({
  name: f.name.trim().length < 2 ? 'Please tell us your name' : '',
  email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email) ? '' : 'Please enter a valid email',
  phone: /^\+?\d{8,15}$/.test(f.phone.replace(/[\s-]/g, '')) ? '' : 'Please enter a valid WhatsApp number',
});
const Field = ({ label, error, children }) => (
  <label className="flex flex-col gap-1.5"><span className="eg-label-lg text-[#002131]">{label}</span>{children}{error && <span className="eg-label-md text-[#B3261E]" data-testid="checkout-field-error">{error}</span>}</label>
);

export function KutaHotelCheckout() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const sel = { nights: params.get('nights'), checkin: params.get('checkin'), rooms: params.get('rooms') || '2', hotel: params.get('hotel') };
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState('');
  const [payMode, setPayMode] = useState('deposit');
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [payError, setPayError] = useState('');
  useEffect(() => {
    document.title = 'Your booking | Kuta hotel only package | Hi Tours'; window.scrollTo(0, 0);
    fetch(`${API}/api/bookings/hotel/${detail.key}/quote?checkin=${sel.checkin}&nights=${sel.nights}&rooms=${sel.rooms}`)
      .then(async (r) => { const j = await r.json(); if (!r.ok) throw new Error(typeof j.detail === 'string' ? j.detail : 'Please choose your package and dates again.'); setQuote(j); })
      .catch((e) => setError(e.message));
  }, [sel.checkin, sel.nights, sel.rooms]);
  const picked = quote?.hotels.find((h) => h.id === sel.hotel && h.available);
  const info = hotels.find((h) => h.id === sel.hotel);
  const mode = picked?.deposit ? payMode : 'full';
  const payNow = picked ? (mode === 'deposit' ? picked.deposit : picked.total) : 0;

  const pay = async () => {
    const errs = validate(form);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    setBusy(true); setPayError('');
    try {
      const res = await fetch(`${API}/api/bookings/hotel/order`, { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: detail.key, checkin: quote.checkin, nights: quote.nights, rooms: quote.rooms, hotel: picked.id, pay: mode, contact: { ...form, phone: form.phone.replace(/[\s-]/g, '') } }) });
      if (!res.ok) throw new Error((await res.json()).detail || 'Could not start the payment');
      const order = await res.json();
      const result = await payWithRazorpay(order, { ...form, title: `${detail.title} · ${picked.name}`, image: detail.hero.mainSm });
      const ver = await fetch(`${API}/api/bookings/verify`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ booking_id: order.booking_id, ...result }) });
      if (!ver.ok) throw new Error((await ver.json().catch(() => ({}))).detail || 'We could not verify the payment. If money was deducted, we will contact you shortly.');
      navigate(PATHS.thankYou(order.booking_id));
    } catch (e) {
      if (e.message !== 'cancelled') setPayError(typeof e.message === 'string' ? e.message : 'Payment failed. Please try again.');
    } finally { setBusy(false); }
  };

  return (
    <div className="eg" data-testid="stay-checkout-page">
      <Header />
      <main className="eg-wide pt-4 md:pt-6 pb-16 flex flex-col gap-6">
        <div><h1 className="eg-display-sm text-[#002131]" data-testid="checkout-title">Your booking</h1><p className="eg-body-lg text-[#174358] mt-1">Check your stay, add your details and pay securely.</p></div>
        {error && <p className="eg-body-lg text-[#B3261E]" data-testid="checkout-error">{error} <Link to={PATHS.detail} className="underline text-[#174358]">Back to the package</Link></p>}
        {!quote && !error && <p className="eg-body-lg text-[#6F777C]" data-testid="checkout-loading">Getting your price…</p>}
        {quote && !picked && <p className="eg-body-lg text-[#B3261E]" data-testid="checkout-error">This hotel is not available for these dates. <Link to={PATHS.detail} className="underline text-[#174358]">Choose again</Link></p>}
        {picked && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">
            <section className="flex flex-col gap-4 min-w-0" data-testid="checkout-form">
              <h2 className="eg-headline-md text-[#002131]">Lead guest</h2>
              <Field label="Full name" error={errors.name}><input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name as on passport" data-testid="checkout-name" autoComplete="name" /></Field>
              <Field label="WhatsApp number" error={errors.phone}><input type="tel" className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" data-testid="checkout-phone" autoComplete="tel" /></Field>
              <Field label="Email address" error={errors.email}><input type="email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" data-testid="checkout-email" autoComplete="email" /></Field>
              <h2 className="eg-headline-md text-[#002131] mt-2">Payment</h2>
              {picked.deposit ? (
                <div className="grid grid-cols-2 gap-2" data-testid="checkout-pay-mode">
                  {[['deposit', `Pay ${fmtInr(picked.deposit)} now`, `Rest ${fmtInr(picked.total - picked.deposit)} by ${fmtDate(quote.balance_due, { day: 'numeric', month: 'short' })}`], ['full', 'Pay in full', fmtInr(picked.total)]].map(([k, l, s]) => (
                    <button key={k} type="button" onClick={() => setPayMode(k)} aria-pressed={mode === k} data-testid={`checkout-pay-${k}`} className={`rounded-2xl border px-3 py-3 text-left transition-colors ${mode === k ? 'border-[#174358] bg-[#FBEADB]' : 'border-[#C4CBD0] bg-white hover:border-[#174358]'}`}>
                      <p className="eg-label-lg text-[#002131]">{l}</p><p className="eg-label-md text-[#6F777C]">{s}</p>
                    </button>
                  ))}
                </div>
              ) : <p className="eg-body-md text-[#174358]" data-testid="checkout-full-only">{picked.total <= 10000 ? 'This stay is paid in full at booking.' : `Check-in is less than ${quote.deposit_days} days away, so this stay is paid in full at booking.`}</p>}
              {payError && <p className="eg-label-lg text-[#B3261E]" data-testid="checkout-pay-error">{payError}</p>}
              <button type="button" onClick={pay} disabled={busy} className="eg-btn-filled !h-14 px-8 eg-title-md self-start disabled:opacity-50" data-testid="checkout-pay"><Lock size={18} /> {busy ? 'Opening…' : `Pay ${fmtInr(payNow)}`}</button>
              <p className="eg-label-md text-[#6F777C]">Secure payment by Razorpay. {similarNote}</p>
            </section>
            <aside className="bg-white rounded-2xl border border-[#C4CBD0] overflow-hidden lg:sticky lg:top-6" data-testid="checkout-summary">
              <img src={info.images[0]} alt={picked.name} className="w-full aspect-[16/9] object-cover" />
              <div className="p-5 flex flex-col gap-3">
                <div><p className="eg-title-lg text-[#002131]" data-testid="checkout-hotel">{picked.name} or similar</p><p className="eg-label-md text-[#6F777C]">4 star · {picked.room} · breakfast included</p></div>
                <dl className="flex flex-col gap-1.5 eg-body-md text-[#174358]">
                  {[['Package', `${quote.nights} nights`], ['Check-in', fmtDate(quote.checkin)], ['Check-out', fmtDate(quote.checkout)], ['Rooms', `${quote.rooms.length} room${quote.rooms.length > 1 ? 's' : ''} · ${quote.adults} adult${quote.adults > 1 ? 's' : ''}`]].map(([k, v]) => <div key={k} className="flex justify-between gap-3"><dt className="text-[#6F777C]">{k}</dt><dd className="text-[#002131] text-right">{v}</dd></div>)}
                </dl>
                <hr className="border-[#E4E3DB]" />
                <div className="flex justify-between items-baseline gap-3"><span className="eg-title-md text-[#002131]">Stay total</span><span className="eg-headline-md text-[#002131]" data-testid="checkout-total">{fmtInr(picked.total)}</span></div>
                <div className="flex justify-between items-baseline gap-3"><span className="eg-label-lg text-[#C84D1B]">Pay today</span><span className="eg-title-lg text-[#002131]" data-testid="checkout-pay-now">{fmtInr(payNow)}</span></div>
                <Link to={PATHS.detail} className="eg-label-lg text-[#174358] underline" data-testid="checkout-change">Change package, dates or hotel</Link>
              </div>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export function KutaHotelThankYou() {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    document.title = 'Thank you | Hi Tours'; window.scrollTo(0, 0);
    fetch(`${API}/api/bookings/${bookingId}`).then(async (r) => { if (!r.ok) throw new Error('Booking not found'); setBooking(await r.json()); }).catch((e) => setError(e.message));
  }, [bookingId]);
  const q = booking?.quote;
  const ok = booking && booking.kind === 'hotel' && booking.product === detail.key && booking.status === 'paid';
  const link = booking?.balance_links?.[booking.balance_links.length - 1];
  const money = q && (q.balance > 0
    ? [['Paid today', fmtInr(q.deposit), 'deposit'], ['Balance due', fmtInr(q.balance), `by ${fmtDate(q.balance_due)}`], ['Stay total', fmtInr(q.total), `${q.nights} nights`]]
    : [['Paid in full', fmtInr(q.total), `${q.nights} nights`]]);
  return (
    <div className="eg" data-testid="stay-thanks-page">
      <Header />
      <main className="eg-wide pt-4 md:pt-6 pb-16 flex flex-col gap-8">
        {error && <p className="eg-body-lg text-[#B3261E]" data-testid="stay-thanks-error">{error}</p>}
        {!booking && !error && <p className="eg-body-lg text-[#6F777C]" data-testid="stay-thanks-loading">Fetching your booking…</p>}
        {booking && !ok && <p className="eg-body-lg text-[#B3261E]" data-testid="stay-thanks-error">{booking.status === 'paid' ? 'This booking belongs to a different holiday.' : 'Payment is still pending for this booking.'}</p>}
        {ok && (
          <>
            <section className="bg-[#F0EEE6] rounded-2xl p-5 md:p-8 flex flex-col md:flex-row gap-6 md:items-center" data-testid="stay-thanks-hero">
              <img src={hotels.find((h) => h.id === q.hotel)?.images[0] || detail.hero.mainSm} alt={q.hotel_name} className="w-full md:w-[320px] aspect-[4/3] object-cover rounded-2xl" />
              <div className="flex flex-col gap-3 min-w-0">
                <p className="inline-flex items-center gap-2 eg-label-lg text-[#174358]"><CheckCircleIcon size={20} className="text-[#308BB6]" />Payment received{booking.mock ? ' · test booking, no payment taken' : ''}</p>
                <h1 className="eg-card-title !text-[26px] !leading-8 md:!text-[34px] md:!leading-10 text-[#002131]" data-testid="stay-thanks-title">Thank you, {booking.contact.name.split(' ')[0]}! Your Kuta stay is booked.</h1>
                <p className="eg-body-lg text-[#002131]" data-testid="stay-thanks-details">{q.hotel_name} or similar · {fmtDate(q.start)} to {fmtDate(q.end)} · {q.nights} nights · {q.rooms.length} room{q.rooms.length > 1 ? 's' : ''} · {q.adults} adult{q.adults > 1 ? 's' : ''} · breakfast</p>
                <p className="eg-body-md text-[#174358]">Booking reference <strong className="text-[#002131]" data-testid="stay-thanks-ref">{booking.booking_id}</strong></p>
              </div>
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-3" data-testid="stay-thanks-money">
              {money.map(([l, v, s]) => <div key={l} className="rounded-2xl border border-[#C4CBD0] bg-white px-4 py-4"><p className="eg-label-md text-[#6F777C]">{l}</p><p className="eg-headline-md text-[#002131]">{v}</p><p className="eg-label-md text-[#6F777C]">{s}</p></div>)}
            </section>
            {link && (
              <section className="rounded-2xl border border-[#C4CBD0] bg-white p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-3 justify-between" data-testid="stay-thanks-balance-link">
                <div><p className="eg-label-md text-[#6F777C]">Next payment · {link.label}</p><p className="eg-headline-md text-[#002131]">{fmtInr(link.amount)}</p><p className="eg-label-md text-[#6F777C]">Due by {fmtDate(link.due)} · link sent by SMS and email</p></div>
                {link.short_url && link.status !== 'paid' && <a href={link.short_url} target="_blank" rel="noreferrer" className="eg-btn-filled !h-12 px-6 eg-label-lg shrink-0" data-testid="stay-thanks-pay-balance">Pay now</a>}
              </section>
            )}
            <section className="flex flex-col gap-4" data-testid="stay-thanks-next">
              <h2 className="eg-headline-md text-[#002131]">What happens next</h2>
              <ol className="flex flex-col gap-4">{nextSteps.map((s, i) => <li key={s.h} className="flex items-start gap-4"><span className="w-9 h-9 rounded-full bg-[#308BB6] text-white flex items-center justify-center eg-label-lg shrink-0">{i + 1}</span><div><p className="eg-title-md text-[#002131]">{s.h}</p><p className="eg-body-md text-[#174358]">{s.t}</p></div></li>)}</ol>
            </section>
            <section className="flex flex-col gap-4" data-testid="stay-thanks-included">
              <h2 className="eg-headline-md text-[#002131]">What’s included</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">{included.map(([text, icon]) => <li key={text} className="flex items-center gap-3 rounded-lg bg-[#FBEADB] px-3 min-h-[52px] py-2 eg-label-lg text-[#002131]"><ServiceIcon name={icon} size={22} className="text-[#174358] shrink-0" /><span className="leading-snug">{text}</span></li>)}</ul>
            </section>
            <div className="flex flex-wrap gap-3">
              <Link to={PATHS.detail} className="eg-btn-filled !h-12 px-7 eg-title-md" data-testid="stay-thanks-view">View the package</Link>
              <Link to="/asia/bali" className="eg-btn-outlined !h-12 px-6 eg-label-lg" data-testid="stay-thanks-more">More Bali holidays</Link>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
