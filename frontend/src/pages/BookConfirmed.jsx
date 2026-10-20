import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, Mail, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BOOKABLE, fromISO, fmtDate, fmtInr } from '../booking/bookable';
import { StepBar, HotelsCard, IncludedCard } from '../components/booking/BookingSummary';

const API = process.env.REACT_APP_BACKEND_URL;

export default function BookConfirmed() {
  const { key, bookingId } = useParams();
  const product = BOOKABLE[key];
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    document.title = 'Booking confirmed | Hi Tours'; window.scrollTo(0, 0);
    fetch(`${API}/api/bookings/${bookingId}`).then(async (r) => { if (!r.ok) throw new Error('Booking not found'); setBooking(await r.json()); }).catch((e) => setError(e.message));
  }, [bookingId]);
  const date = booking ? fromISO(booking.departure) : null;
  const q = booking?.quote;
  return (
    <div className="eg" data-testid="book-confirmed-page">
      <Header />
      <main className="eg-wide pt-4 md:pt-6 pb-16 flex flex-col gap-6">
        <StepBar step={3} />
        {error && <p className="eg-body-lg text-[#B3261E]" data-testid="confirmed-error">{error}</p>}
        {booking && product && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 min-w-0 flex flex-col gap-6">
              <div className="bg-white rounded-2xl border border-[#E4E3DB] p-6 md:p-8 flex flex-col gap-4" data-testid="confirmed-card">
                <CheckCircle2 size={44} className="text-[#8DBE9C]" />
                <h1 className="eg-headline-lg text-[#002131]" data-testid="confirmed-title">{booking.status === 'paid' ? `You're going to ${product.destination}, ${booking.contact.name.split(' ')[0]}!` : 'Payment pending'}</h1>
                <p className="eg-body-lg text-[#002131]">Booking reference <strong data-testid="confirmed-ref">{booking.booking_id}</strong>{booking.mock && <span className="ml-2 rounded-md bg-[#FBEADB] px-2 py-0.5 eg-label-md text-[#174358]">test booking, no payment taken</span>}</p>
                <p className="eg-body-md text-[#5B6B74]">{product.title} · departing {date && fmtDate(date)} · {q.adults} adult{q.adults === 1 ? '' : 's'}{q.children ? `, ${q.children} child${q.children === 1 ? '' : 'ren'}` : ''} in {q.rooms} room{q.rooms === 1 ? '' : 's'} · paid {fmtInr(q.total)}</p>
                <hr className="border-[#E4E3DB]" />
                <div className="flex flex-col gap-2 eg-body-md text-[#002131]">
                  <p className="flex items-center gap-2"><Mail size={16} className="text-[#174358]" />A confirmation with your full itinerary is on its way to {booking.contact.email}.</p>
                  <p className="flex items-center gap-2"><Phone size={16} className="text-[#174358]" />Your Sri Lanka expert Aditya will call {booking.contact.phone} within one working day to collect traveller names and talk through flights.</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link to={product.detailPath} className="eg-btn-outlined !h-11 !rounded-full eg-label-lg" data-testid="confirmed-view-trip">View the itinerary</Link>
                  <Link to="/asia/sri-lanka" className="eg-btn-outlined !h-11 !rounded-full eg-label-lg" data-testid="confirmed-more">More Sri Lanka holidays</Link>
                </div>
              </div>
            </div>
            <aside className="w-full md:w-[384px] shrink-0 flex flex-col gap-6">
              <HotelsCard product={product} date={date} />
              <IncludedCard product={product} />
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
