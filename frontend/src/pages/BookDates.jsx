import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BOOKABLE, fromISO, toISO, encodeRooms, decodeRooms } from '../booking/bookable';
import { RoomsPicker } from '../components/booking/RoomsPicker';
import { DepartureCalendar } from '../components/booking/DepartureCalendar';
import { StepBar, PaymentSummary, HotelsCard, IncludedCard } from '../components/booking/BookingSummary';

export default function BookDates() {
  const { key } = useParams();
  const product = BOOKABLE[key];
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const [rooms, setRooms] = useState(() => decodeRooms(params.get('rooms')));
  const [date, setDate] = useState(() => fromISO(params.get('date')));

  useEffect(() => { document.title = product ? `Book ${product.title} | Hi Tours` : 'Book | Hi Tours'; window.scrollTo(0, 0); }, [product]);
  useEffect(() => {
    const next = new URLSearchParams();
    next.set('rooms', encodeRooms(rooms));
    if (date) next.set('date', toISO(date));
    setParams(next, { replace: true });
  }, [rooms, date, setParams]);

  if (!product) return <Navigate to="/asia/sri-lanka" replace />;
  const go = () => navigate(`${product.checkoutPath}?date=${toISO(date)}&rooms=${encodeRooms(rooms)}`);

  return (
    <div className="eg" data-testid="book-dates-page">
      <Header />
      <main className="eg-wide pt-4 md:pt-6 pb-28 md:pb-16 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Link to={product.detailPath} className="inline-flex items-center gap-1 eg-label-lg text-[#174358] hover:text-[#002131] self-start" data-testid="book-back-to-trip"><ChevronLeft size={16} /> Back to the itinerary</Link>
          <StepBar step={1} />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 min-w-0 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="eg-headline-lg text-[#002131]" data-testid="book-dates-title">Dates & travellers</h1>
              <p className="eg-body-lg text-[#5B6B74]">{product.title} · {product.days} days, {product.nights} nights · {product.routeCities.join(' → ')}</p>
            </div>
            <section className="flex flex-col gap-4" data-testid="book-travellers-section">
              <h2 className="eg-title-lg text-[#002131]">1. Travellers & rooms</h2>
              <RoomsPicker rooms={rooms} onChange={setRooms} />
            </section>
            <section className="flex flex-col gap-4" data-testid="book-calendar-section">
              <h2 className="eg-title-lg text-[#002131]">2. Departure date</h2>
              <DepartureCalendar product={product} selected={date} onSelect={setDate} />
              <ul className="eg-label-md text-[#5B6B74] list-disc pl-5 flex flex-col gap-0.5" data-testid="book-price-notes">
                <li>Prices are per person on twin sharing; children aged 2 to 11 sharing a room pay 70%.</li>
                <li>Your departure date is the day you land in Colombo; the land programme runs {product.days} days from then.</li>
                <li>International flights are not included: our experts can add them after you book.</li>
              </ul>
            </section>
          </div>
          <aside className="w-full md:w-[384px] shrink-0 flex flex-col gap-6 md:self-start md:sticky md:top-6" data-testid="book-sidebar">
            <PaymentSummary product={product} date={date} rooms={rooms} cta="Continue to review & pay" ctaDisabled={!date} onCta={go} />
            <HotelsCard product={product} date={date} />
            <IncludedCard product={product} />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
