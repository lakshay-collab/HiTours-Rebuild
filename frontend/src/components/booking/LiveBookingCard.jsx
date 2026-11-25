import React, { lazy, Suspense, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CalendarDays, Users, Pencil, X, Zap, ShieldCheck, Wallet, Headset, ArrowRight, Check, PhoneCall, MessageCircle, CalendarCheck } from 'lucide-react';
import { CardReview } from './TrustReview';
import { metaTracking } from '../../lib/metaTracking';
import { BOOKABLE, decodeRooms, encodeRooms, fromISO, toISO, addDays, fmtDate, fmtInr, quote, useLive, readVerified, daysUntil, DEPOSIT_MIN_DAYS } from '../../booking/bookable';
import { DepartureCalendar } from './DepartureCalendar';
import { RoomsPicker } from './RoomsPicker';

const LiveDetailsModal = lazy(() => import('./LiveDetailsModal'));
export const bookCta = 'inline-flex items-center justify-center gap-2 w-full h-14 rounded-full bg-[#E75E26] hover:bg-[#CF4F1B] text-white eg-title-lg shadow-[0_8px_20px_-8px_rgba(231,94,38,0.8)] transition-[background-color,transform] active:scale-[0.98] disabled:opacity-40';
const expertCta = 'inline-flex items-center justify-center gap-2 w-full h-12 rounded-full border border-[#174358] text-[#174358] eg-title-md hover:bg-[#174358]/[0.06] transition-colors';
const people = (q) => `${q.adults} adult${q.adults === 1 ? '' : 's'}${q.children ? ` · ${q.children} child${q.children === 1 ? '' : 'ren'}` : ''}`;

export const useLiveTrip = (detail) => {
  const [params, setParams] = useSearchParams();
  const product = BOOKABLE[detail.live];
  const rooms = decodeRooms(params.get('rooms'));
  const date = fromISO(params.get('date'));
  const live = useLive(product, rooms);
  const q = quote(product, date, rooms);
  const ok = !!(live && date && live.dates[toISO(date)]);
  const set = (d, r) => setParams({ ...(d ? { date: toISO(d) } : {}), rooms: encodeRooms(r) }, { replace: true });
  return { product, rooms, date, live, q, ok, set, verified: readVerified() };
};

function EditTrip({ trip, tab: start, onClose }) {
  const [tab, setTab] = useState(start);
  const [date, setDate] = useState(trip.date);
  const [rooms, setRooms] = useState(trip.rooms);
  const live = useLive(trip.product, rooms);
  const gone = live && date && !live.dates[toISO(date)];
  useEffect(() => { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = ''; }; }, []);
  return createPortal(
    <div className="eg fixed inset-0 z-[70] bg-[#002131]/60 flex items-stretch md:items-center justify-center md:p-6" onClick={onClose} role="dialog" aria-modal="true" data-testid="trip-edit-modal">
      <div className="bg-white w-full h-[100dvh] md:h-auto md:max-h-[90vh] md:max-w-[640px] md:rounded-3xl flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-[#E4E3DB]">
          {[['dates', 'Dates'], ['travellers', 'Travellers']].map(([k, l]) => (
            <button key={k} type="button" onClick={() => setTab(k)} className={`h-10 px-4 rounded-full eg-label-lg ${tab === k ? 'bg-[#174358] text-white' : 'border border-[#C4CBD0] text-[#174358]'}`} data-testid={`trip-edit-tab-${k}`}>{l}</button>
          ))}
          <button type="button" onClick={onClose} className="ml-auto w-10 h-10 rounded-full hover:bg-[#F0EEE6] flex items-center justify-center" aria-label="Close" data-testid="trip-edit-close"><X size={20} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-3 md:p-4">
          {tab === 'dates' ? <DepartureCalendar product={trip.product} selected={date} onSelect={setDate} live={live} compact /> : <RoomsPicker rooms={rooms} onChange={setRooms} max={4} />}
          {gone && <p className="mt-3 px-2 eg-label-lg text-[#B3261E]" data-testid="trip-edit-gone">This date is not available for your group. Please pick another date.</p>}
        </div>
        <div className="border-t border-[#E4E3DB] px-5 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] flex items-center justify-between gap-3">
          <p className="eg-label-lg text-[#174358] truncate">{date ? `${fmtDate(date, { day: 'numeric', month: 'short' })} → ${fmtDate(addDays(date, trip.product.nights), { day: 'numeric', month: 'short' })}` : 'Pick a date'}</p>
          <button type="button" disabled={!date || gone || !live} onClick={() => { trip.set(date, rooms); onClose(); }} className="h-12 px-8 rounded-full bg-[#174358] text-white eg-title-md disabled:opacity-40" data-testid="trip-edit-done">Update trip</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

const Row = ({ icon: Icon, label, value, onClick, testId }) => (
  <button type="button" onClick={onClick} className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#F7F5EE] transition-colors" data-testid={testId}>
    <Icon size={20} className="text-[#174358] shrink-0" />
    <span className="flex-1 min-w-0"><span className="block eg-label-md text-[#5B6B74]">{label}</span><span className="block eg-label-lg text-[#002131] truncate">{value}</span></span>
    <Pencil size={16} className="text-[#174358] shrink-0" />
  </button>
);

function ExpertThanks({ name, dest, onClose }) {
  useEffect(() => { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = ''; }; }, []);
  const steps = [
    [PhoneCall, `Your ${dest} specialist calls you on the number you verified`],
    [MessageCircle, 'We WhatsApp you this holiday with your dates and price'],
    [CalendarCheck, 'You fine-tune it together, then book when you are ready'],
  ];
  return createPortal(
    <div className="eg fixed inset-0 z-[70] bg-[#002131]/60 flex items-end md:items-center justify-center md:p-6" onClick={onClose} role="dialog" aria-modal="true" data-testid="expert-thanks-modal">
      <div className="bg-white w-full md:max-w-[480px] rounded-t-3xl md:rounded-3xl p-6 md:p-8 flex flex-col gap-5" onClick={(e) => e.stopPropagation()}>
        <span className="w-14 h-14 rounded-full bg-[#E6F4EA] text-[#1E7B4B] flex items-center justify-center"><Check size={28} strokeWidth={2.5} /></span>
        <div className="flex flex-col gap-2">
          <h2 className="eg-headline-md text-[#002131]" data-testid="expert-thanks-title">Thank you, {name}.</h2>
          <p className="eg-body-lg text-[#174358]">A {dest} specialist will call you soon. You do not need to share your details again.</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="eg-label-md uppercase tracking-[0.08em] text-[#1F6F94]">What happens next</p>
          <ol className="flex flex-col gap-3">
            {steps.map(([Icon, text], i) => <li key={i} className="flex items-start gap-3"><span className="w-9 h-9 rounded-xl bg-[#E3F1F8] text-[#1F6F94] flex items-center justify-center shrink-0"><Icon size={18} /></span><span className="eg-label-lg text-[#002131] pt-1.5">{text}</span></li>)}
          </ol>
        </div>
        <button type="button" onClick={onClose} className="h-12 rounded-full bg-[#174358] text-white eg-title-md" data-testid="expert-thanks-close">Back to my holiday</button>
      </div>
    </div>,
    document.body
  );
}

export default function LiveBookingCard({ detail, onExpert }) {
  const trip = useLiveTrip(detail);
  const { product, date, q, ok, live, verified } = trip;
  const navigate = useNavigate();
  const [edit, setEdit] = useState(null);
  const [gate, setGate] = useState(false);
  const priced = ok && verified;
  const book = () => navigate(`${product.checkoutPath}?date=${toISO(date)}&rooms=${encodeRooms(trip.rooms)}`);
  const dest = product.destination;
  const [thanks, setThanks] = useState(false);
  const expert = () => {
    if (!verified) { onExpert(); return; }
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/leads`, { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: verified.name, country_code: verified.country_code, phone: verified.phone, email: '', destination: dest, trip_title: product.title, source: 'live-speak-expert',
        travel_dates: date ? `Check-in ${toISO(date)}, ${product.nights} nights` : '', traveller_count: String(q.adults + q.children), ...metaTracking() }) }).catch(() => {});
    setThanks(true);
  };
  return (
    <div className="flex flex-col gap-4">
    <div className="bg-white rounded-2xl border border-[#C4CBD0] p-5 md:p-6 flex flex-col gap-4" data-testid="live-booking-card">
      {!live ? <p className="eg-body-md text-[#6F777C]" data-testid="live-price-loading">Getting live prices…</p> : priced ? (
        <div data-testid="live-price">
          <p className="flex items-baseline gap-1.5"><span className="eg-price text-[#002131] tabular-nums" data-testid="live-price-per-person">{fmtInr(q.adultPrice)}</span><span className="eg-body-md text-[#5B6B74]">per person</span></p>
          <p className="eg-label-md text-[#5B6B74]">For {people(q)}{q.children ? ` · ${fmtInr(q.childPrice)} per child` : ''}</p>
        </div>
      ) : (
        <div data-testid="live-price-from">
          <p className="eg-label-md text-[#5B6B74]">From</p>
          <p className="flex items-baseline gap-1.5"><span className="eg-price text-[#002131] tabular-nums">{fmtInr(live.from_adult)}</span><span className="eg-body-md text-[#5B6B74]">per person</span></p>
        </div>
      )}
      {priced && (
        <div className="rounded-xl border border-[#E4E3DB] divide-y divide-[#E4E3DB] overflow-hidden" data-testid="live-trip-editor">
          <Row icon={CalendarDays} label={`Check-in → check-out · ${product.nights} nights`} value={`${fmtDate(date, { weekday: 'short', day: 'numeric', month: 'short' })} → ${fmtDate(addDays(date, product.nights), { weekday: 'short', day: 'numeric', month: 'short' })}`} onClick={() => setEdit('dates')} testId="live-edit-dates" />
          <Row icon={Users} label="Travellers" value={`${people(q)} · ${q.rooms} room${q.rooms === 1 ? '' : 's'}`} onClick={() => setEdit('travellers')} testId="live-edit-travellers" />
        </div>
      )}
      {priced
        ? <button type="button" onClick={book} className={bookCta} data-testid="eg-detail-price-cta"><Zap size={18} />Book now</button>
        : <button type="button" onClick={() => setGate(true)} className={bookCta} data-testid="live-view-prices">View prices & availability<ArrowRight size={18} /></button>}
      <button type="button" onClick={expert} className={expertCta} data-testid="live-speak-expert"><Headset size={18} />Speak to a {dest} expert</button>
      <ul className="flex flex-col gap-2 eg-label-md text-[#174358]" data-testid="live-perks">
        <li className="flex items-center gap-2"><Zap size={15} className="text-[#E75E26]" />Instant booking, confirmed on WhatsApp</li>
        <li className="flex items-center gap-2"><Wallet size={15} className="text-[#1E7B4B]" />{date && daysUntil(date) < DEPOSIT_MIN_DAYS ? 'Pay securely by UPI, card or net banking' : `Pay just 10% today for check-ins ${DEPOSIT_MIN_DAYS}+ days away`}</li>
        <li className="flex items-center gap-2"><ShieldCheck size={15} className="text-[#174358]" />Free changes up to 30 days before check-in</li>
      </ul>
      {edit && <EditTrip trip={trip} tab={edit} onClose={() => setEdit(null)} />}
      {gate && <Suspense fallback={null}><LiveDetailsModal liveKey={detail.live} onClose={() => setGate(false)} /></Suspense>}
      {thanks && <ExpertThanks name={verified.name.trim().split(' ')[0]} dest={dest} onClose={() => setThanks(false)} />}
    </div>
    <CardReview destination={dest} />
    </div>
  );
}

export function LiveStickyBar({ detail }) {
  const trip = useLiveTrip(detail);
  const { product, date, q, ok, verified } = trip;
  const navigate = useNavigate();
  const [gate, setGate] = useState(false);
  const priced = ok && verified;
  useEffect(() => { document.documentElement.classList.add('wa-lift'); return () => document.documentElement.classList.remove('wa-lift'); }, []);
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur border-t border-[#E4E3DB] px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] flex items-center justify-between gap-3" data-testid="eg-detail-sticky-bar">
      <div className="min-w-0">
        <p className="eg-title-lg text-[#002131] tabular-nums" data-testid="eg-sticky-price">{trip.live ? fmtInr(priced ? q.adultPrice : trip.live.from_adult) : '…'} <span className="eg-label-md text-[#5B6B74]">per person</span></p>
        <p className="eg-label-md text-[#5B6B74] truncate">{priced ? `${fmtDate(date, { day: 'numeric', month: 'short' })} · ${people(q)}` : 'Live price for your dates'}</p>
      </div>
      {priced
        ? <button type="button" onClick={() => navigate(`${product.checkoutPath}?date=${toISO(date)}&rooms=${encodeRooms(trip.rooms)}`)} className={`${bookCta} !w-auto !h-12 px-6 !text-[16px]`} data-testid="eg-sticky-cta"><Zap size={16} />Book now</button>
        : <button type="button" onClick={() => setGate(true)} className={`${bookCta} !w-auto !h-12 px-6 !text-[16px]`} data-testid="eg-sticky-cta">View prices</button>}
      {gate && <Suspense fallback={null}><LiveDetailsModal liveKey={detail.live} onClose={() => setGate(false)} /></Suspense>}
    </div>
  );
}
