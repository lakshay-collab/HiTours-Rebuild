import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BOOKABLE, fromISO, toISO, encodeRooms, decodeRooms, isBookable, quote, fmtInr, fmtDate, useLive } from '../booking/bookable';
import { RoomsPicker } from '../components/booking/RoomsPicker';
import { DepartureCalendar } from '../components/booking/DepartureCalendar';
import { StepBar, PaymentSummary } from '../components/booking/BookingSummary';
import { InclusionTabs } from '../components/booking/InclusionTabs';

export default function BookDates() {
  const { key } = useParams();
  const product = BOOKABLE[key];
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const [rooms, setRooms] = useState(() => decodeRooms(params.get('rooms')));
  const [date, setDate] = useState(() => { const d = fromISO(params.get('date')); return d && (product?.live || isBookable(d)) ? d : null; });
  const live = useLive(product, rooms);
  useEffect(() => { if (live && date && !live.dates[toISO(date)]) setDate(null); }, [live, date]);

  useEffect(() => { document.title = product ? `Book ${product.title} | Hi Tours` : 'Book | Hi Tours'; window.scrollTo(0, 0); }, [product]);
  useEffect(() => {
    const next = new URLSearchParams();
    next.set('rooms', encodeRooms(rooms));
    if (date) next.set('date', toISO(date));
    setParams(next, { replace: true });
  }, [rooms, date, setParams]);

  if (!product) return <Navigate to="/asia" replace />;
  const q = quote(product, date, rooms);
  const go = () => navigate(`${product.checkoutPath}?date=${toISO(date)}&rooms=${encodeRooms(rooms)}`);

  return (
    <div className="eg" data-testid="book-dates-page">
      <Header />
      <main className="eg-wide pt-4 md:pt-6 pb-32 md:pb-16 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Link to={product.detailPath} className="inline-flex items-center gap-1 eg-label-lg text-[#174358] hover:text-[#002131] self-start" data-testid="book-back-to-trip"><ChevronLeft size={16} /> Back to the itinerary</Link>
          <StepBar step={1} />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            <InclusionTabs product={product} date={date} />
            <section className="flex flex-col gap-3" data-testid="book-travellers-section">
              <h2 className="eg-title-lg text-[#002131]">1. Travellers & rooms</h2>
              <RoomsPicker rooms={rooms} onChange={setRooms} max={product.live ? 4 : 6} />
            </section>
            <section className="flex flex-col gap-3" data-testid="book-calendar-section">
              <h2 className="eg-title-lg text-[#002131]">2. Check-in date</h2>
              <DepartureCalendar product={product} selected={date} onSelect={setDate} live={live} />
              <ul className="eg-label-md text-[#5B6B74] list-disc pl-5 flex flex-col gap-0.5" data-testid="book-price-notes">
                {product.live
                  ? <li>Prices are live from our {product.destination} hotel, transfer and activity rates, so they change with your dates and group size. Children aged 2 to 11 share the parents’ room without an extra bed.</li>
                  : <li>Prices are per person on twin sharing; children aged 2 to 11 sharing a room pay 70%.</li>}
                <li>Check-in is the day you land in {product.arrival}; check-out is {product.nights} nights later. We need at least 10 days to arrange your trip.</li>
                <li>International flights are not included: our experts can add them after you book.</li>
              </ul>
            </section>
          </div>
          <aside className="w-full md:w-[384px] shrink-0 flex flex-col gap-6 md:self-start md:sticky md:top-6" data-testid="book-sidebar">
            <PaymentSummary product={product} date={date} rooms={rooms} cta="Continue to review & pay" ctaDisabled={!date || !q.total} onCta={go} />
          </aside>
        </div>
      </main>
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#FBF9F1]/95 backdrop-blur border-t border-[#E4E3DB] px-4 py-3 flex items-center justify-between gap-3" data-testid="book-mobile-bar">
        <div>
          <p className="eg-title-lg text-[#002131]" data-testid="book-mobile-total">{fmtInr(q.total)}</p>
          <p className="eg-label-md text-[#5B6B74]">{date ? `Check-in ${fmtDate(date, { day: 'numeric', month: 'short' })} · ${q.adults + q.children} travellers` : 'Pick a check-in date'}</p>
        </div>
        <button type="button" disabled={!date || !q.total} onClick={go} className="eg-btn-filled !h-12 px-6 eg-title-md disabled:opacity-40" data-testid="book-mobile-continue">Continue</button>
      </div>
      <Footer />
    </div>
  );
}
