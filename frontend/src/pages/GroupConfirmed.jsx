import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MessageCircle, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ServiceIcon, CheckCircleIcon } from '../components/egypt/EgyptIcons';
import * as insideSriLanka from '../grouptours/insideSriLankaData';
import { fmtDate, fmtInr } from '../grouptours/groupBooking';
import { ServicePills, Ratings } from '../components/grouptour/GroupSections';

const API = process.env.REACT_APP_BACKEND_URL;

export default function GroupThankYou({ tour = insideSriLanka }) {
  const { detail, included, nextSteps, PATHS } = tour;
  const destination = detail.destination || 'Sri Lanka';
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    document.title = 'Thank you | Hi Tours'; window.scrollTo(0, 0);
    fetch(`${API}/api/bookings/${bookingId}`).then(async (r) => { if (!r.ok) throw new Error('Booking not found'); setBooking(await r.json()); }).catch((e) => setError(e.message));
  }, [bookingId]);
  const q = booking?.quote;
  const ok = booking && booking.kind === 'group' && booking.product === detail.key && booking.status === 'paid';
  return (
    <div className="eg" data-testid="gthanks-page">
      <Header />
      <main className="eg-wide pt-4 md:pt-6 pb-16 flex flex-col gap-8">
        {error && <p className="eg-body-lg text-[#B3261E]" data-testid="gthanks-error">{error}</p>}
        {!booking && !error && <p className="eg-body-lg text-[#6F777C]" data-testid="gthanks-loading">Fetching your booking…</p>}
        {booking && !ok && <p className="eg-body-lg text-[#B3261E]" data-testid="gthanks-error">{booking.kind !== 'group' || booking.product !== detail.key ? 'This booking belongs to a different holiday.' : 'Payment is still pending for this booking.'}</p>}
        {ok && (
          <>
            <section className="bg-[#F0EEE6] rounded-2xl p-5 md:p-8 flex flex-col md:flex-row gap-6 md:items-center" data-testid="gthanks-hero">
              <img src={detail.hero.mainSm} alt={detail.hero.alt} className="w-full md:w-[320px] aspect-[4/3] object-cover rounded-2xl" />
              <div className="flex flex-col gap-3 min-w-0">
                <p className="inline-flex items-center gap-2 eg-label-lg text-[#174358]"><CheckCircleIcon size={20} className="text-[#308BB6]" />Seat{q.travellers > 1 ? 's' : ''} held{booking.mock ? ' · test booking, no payment taken' : ''}</p>
                <h1 className="eg-card-title !text-[26px] !leading-8 md:!text-[34px] md:!leading-10 text-[#002131]" data-testid="gthanks-title">Thank you, {booking.contact.name.split(' ')[0]}! You’re going to {destination}.</h1>
                <p className="eg-body-lg text-[#002131]" data-testid="gthanks-details">{booking.title} · {fmtDate(q.start)} to {fmtDate(q.end)} · {q.travellers} traveller{q.travellers > 1 ? 's' : ''} · {q.room === 'single' ? 'private room' : detail.single === false ? 'twin or double sharing' : 'twin share'}</p>
                <p className="eg-body-md text-[#174358]">Booking reference <strong className="text-[#002131]" data-testid="gthanks-ref">{booking.booking_id}</strong></p>
              </div>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_384px] gap-8 items-start">
              <div className="flex flex-col gap-8 min-w-0">
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-3" data-testid="gthanks-money">
                  {[['Paid today', fmtInr(q.deposit), `${fmtInr(q.deposit_pp)} × ${q.travellers} seat hold`], ['Balance due', fmtInr(q.balance), `by ${fmtDate(q.balance_due)}`], ['Trip total', fmtInr(q.total), `${fmtInr(q.per_person)} per person`]].map(([l, v, s]) => (
                    <div key={l} className="rounded-2xl border border-[#C4CBD0] bg-white px-4 py-4"><p className="eg-label-md text-[#6F777C]">{l}</p><p className="eg-headline-md text-[#002131]">{v}</p><p className="eg-label-md text-[#6F777C]">{s}</p></div>
                  ))}
                </section>
                <section className="flex flex-col gap-4" data-testid="gthanks-next">
                  <h2 className="eg-headline-md text-[#002131]">What happens next</h2>
                  <ol className="flex flex-col gap-4">
                    {nextSteps.map((s, i) => <li key={s.h} className="flex items-start gap-4"><span className="w-9 h-9 rounded-full bg-[#308BB6] text-white flex items-center justify-center eg-label-lg shrink-0">{i + 1}</span><div><p className="eg-title-md text-[#002131]">{s.h}</p><p className="eg-body-md text-[#174358]">{s.t}</p></div></li>)}
                  </ol>
                  <div className="flex flex-col gap-2 eg-body-md text-[#174358] pt-2">
                    <p className="flex items-center gap-2"><MessageCircle size={16} className="text-[#308BB6]" />WhatsApp confirmation to your number ending {booking.contact.phone.slice(-4)}</p>
                    <p className="flex items-center gap-2"><Mail size={16} className="text-[#308BB6]" />Full itinerary emailed to {booking.contact.email}</p>
                  </div>
                </section>
                {booking.balance_links?.length > 0 && (() => { const link = booking.balance_links[booking.balance_links.length - 1]; return (
                  <section className="rounded-2xl border border-[#C4CBD0] bg-white p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-3 justify-between" data-testid="gthanks-balance-link">
                    <div><p className="eg-label-md text-[#6F777C]">Next payment · {link.label}</p><p className="eg-headline-md text-[#002131]">{fmtInr(link.amount)}</p><p className="eg-label-md text-[#6F777C]">Due by {fmtDate(link.due)} · link sent by SMS and email</p></div>
                    {link.short_url && link.status !== 'paid' && <a href={link.short_url} target="_blank" rel="noreferrer" className="eg-btn-filled !h-12 px-6 eg-label-lg shrink-0" data-testid="gthanks-pay-balance">Pay now</a>}
                  </section>
                ); })()}
                <section className="flex flex-col gap-4" data-testid="gthanks-included">
                  <h2 className="eg-headline-md text-[#002131]">What’s included in your trip</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {included.map(([text, icon]) => <li key={text} className="flex items-center gap-3 rounded-lg bg-[#FBEADB] px-3 min-h-[52px] py-2 eg-label-lg text-[#002131]"><ServiceIcon name={icon} size={22} className="text-[#174358] shrink-0" /><span className="leading-snug">{text}</span></li>)}
                  </ul>
                </section>
                <div className="flex flex-wrap gap-3">
                  <Link to={PATHS.detail} className="eg-btn-filled !h-12 px-7 eg-title-md" data-testid="gthanks-view-trip">View the day-by-day itinerary</Link>
                  <Link to={detail.destinationHref || '/asia/sri-lanka'} className="eg-btn-outlined !h-12 px-6 eg-label-lg" data-testid="gthanks-more">More {destination} holidays</Link>
                </div>
              </div>
              <aside className="bg-white rounded-2xl border border-[#C4CBD0] p-5 md:p-6 flex flex-col gap-4" data-testid="gthanks-summary">
                <p className="eg-title-md text-[#002131]">Your trip at a glance</p>
                <ServicePills services={detail.services} testId="gthanks-services" />
                <hr className="border-[#E4E3DB]" />
                <Ratings />
              </aside>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
