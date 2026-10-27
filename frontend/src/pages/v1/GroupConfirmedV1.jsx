import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, Mail, MessageCircle } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { detail, PATHS } from '../../grouptours/v1/insideSriLankaData';
import { fmtDate, fmtInr } from '../../grouptours/v1/groupBooking';
import { Steps } from './GroupCheckoutV1';

const API = process.env.REACT_APP_BACKEND_URL;

export default function GroupConfirmed() {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    document.title = 'Seat reserved | Hi Tours'; window.scrollTo(0, 0);
    fetch(`${API}/api/bookings/${bookingId}`).then(async (r) => { if (!r.ok) throw new Error('Booking not found'); setBooking(await r.json()); }).catch((e) => setError(e.message));
  }, [bookingId]);
  const q = booking?.quote;
  return (
    <div className="eg" data-testid="gconfirmed-page">
      <Header />
      <main className="eg-wide pt-4 md:pt-6 pb-16 flex flex-col gap-6">
        <Steps step={3} full={q?.full_payment} />
        {error && <p className="eg-body-lg text-[#B3261E]" data-testid="gconfirmed-error">{error}</p>}
        {!booking && !error && <p className="eg-body-lg text-[#5B6B74]" data-testid="gconfirmed-loading">Fetching your booking…</p>}
        {booking && booking.kind !== 'group' && <p className="eg-body-lg text-[#B3261E]" data-testid="gconfirmed-error">This booking belongs to a different holiday.</p>}
        {booking && booking.kind === 'group' && (
          <div className="bg-white rounded-2xl border border-[#E4E3DB] p-6 md:p-8 flex flex-col gap-4 max-w-[820px]" data-testid="gconfirmed-card">
            <CheckCircle2 size={44} className="text-[#8DBE9C]" />
            <h1 className="eg-headline-lg text-[#002131]" data-testid="gconfirmed-title">{booking.status === 'paid' ? `Your seat${q.travellers > 1 ? 's are' : ' is'} reserved, ${booking.contact.name}!` : 'Payment pending'}</h1>
            <p className="eg-body-lg text-[#002131]">Booking reference <strong data-testid="gconfirmed-ref">{booking.booking_id}</strong>{booking.mock && <span className="ml-2 rounded-md bg-[#FBEADB] px-2 py-0.5 eg-label-md text-[#174358]">test booking, no payment taken</span>}</p>
            <p className="eg-body-md text-[#5B6B74]" data-testid="gconfirmed-details">{booking.title} · {fmtDate(q.start)} to {fmtDate(q.end)} · {q.travellers} traveller{q.travellers > 1 ? 's' : ''} · {q.room === 'single' ? 'private room' : 'twin share'}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[q.full_payment ? ['Paid in full', fmtInr(q.deposit), 'nothing more to pay'] : ['Deposit paid', fmtInr(q.deposit), `${q.deposit_pct}% of ${fmtInr(q.total)}`], ['Balance due', fmtInr(q.balance), q.balance_due ? `by ${fmtDate(q.balance_due)}` : 'settled'], ['Trip total', fmtInr(q.total), `${fmtInr(q.per_person)} per person`]].map(([l, v, s]) => (
                <div key={l} className="rounded-xl bg-[#FBEADB] px-4 py-3"><p className="eg-label-md text-[#5B6B74]">{l}</p><p className="eg-title-lg text-[#002131]">{v}</p><p className="eg-label-md text-[#5B6B74]">{s}</p></div>
              ))}
            </div>
            <hr className="border-[#E4E3DB]" />
            <div className="flex flex-col gap-2 eg-body-md text-[#002131]">
              <p className="flex items-start gap-2"><MessageCircle size={16} className="text-[#174358] shrink-0 mt-1" />A WhatsApp confirmation is on its way to your number ending {booking.contact.phone.slice(-4)}, with the full itinerary by email ({booking.contact.email}).</p>
              <p className="flex items-start gap-2"><Mail size={16} className="text-[#174358] shrink-0 mt-1" />Your trip leader {detail.expert.name} will message you within one working day to collect passport names, help with flights and set up balance reminders.</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to={PATHS.detail} className="eg-btn-outlined !h-11 !rounded-full eg-label-lg" data-testid="gconfirmed-view-trip">View the itinerary</Link>
              <Link to="/asia/sri-lanka" className="eg-btn-outlined !h-11 !rounded-full eg-label-lg" data-testid="gconfirmed-more">More Sri Lanka holidays</Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
