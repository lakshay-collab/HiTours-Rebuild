import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BOOKABLE, fromISO, toISO, encodeRooms, decodeRooms, isBookable, quote, fmtInr, fmtDate } from '../booking/bookable';
import { RoomsPicker } from '../components/booking/RoomsPicker';
import { DepartureCalendar } from '../components/booking/DepartureCalendar';
import { StepBar, PaymentSummary, HotelsCard, IncludedCard, CountsRow } from '../components/booking/BookingSummary';

export default function BookDates() {
  const { key } = useParams();
  const product = BOOKABLE[key];
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const [rooms, setRooms] = useState(() => decodeRooms(params.get('rooms')));
  const [date, setDate] = useState(() => { const d = fromISO(params.get('date')); return d && isBookable(d) ? d : null; });

  useEffect(() => { document.title = product ? `Book ${product.title} | Hi Tours` : 'Book | Hi Tours'; window.scrollTo(0, 0); }, [product]);
  useEffect(() => {
    const next = new URLSearchParams();
    next.set('rooms', encodeRooms(rooms));
    if (date) next.set('date', toISO(date));
    setParams(next, { replace: true });
  }, [rooms, date, setParams]);

  if (!product) return <Navigate to="/asia/sri-lanka" replace />;
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
            <div className="flex flex-col gap-2">
              <h1 className="eg-headline-lg text-[#002131]" data-testid="book-dates-title">{product.title}</h1>
              <p className="eg-body-lg text-[#5B6B74]">{product.days} days, {product.nights} nights · {product.routeCities.join(' → ')} · everything below is included in one price</p>
            </div>
            <section className="rounded-2xl border border-[#E4E3DB] bg-white p-4 md:p-5 flex flex-col gap-4" data-testid="book-glance">
              <CountsRow product={product} />
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2" data-testid="book-glance-hotels">
                {product.hotels.map((h, i) => (
                  <li key={i} className="flex items-center gap-3 rounded-xl bg-[#FBF9F1] p-2" data-testid={`glance-hotel-${i + 1}`}>
                    {h.image && <img src={h.image} alt={h.name} className="w-12 h-12 rounded-lg object-cover shrink-0" loading="lazy" />}
                    <div className="min-w-0"><p className="eg-label-lg text-[#002131] truncate">{h.name}</p><p className="eg-label-md text-[#5B6B74]">{h.description.split(' · ').slice(0, 1)} · {h.description.split(' · ')[3]} · {h.description.split(' · ')[1]}</p></div>
                  </li>
                ))}
              </ul>
            </section>
            <section className="flex flex-col gap-3" data-testid="book-travellers-section">
              <h2 className="eg-title-lg text-[#002131]">1. Travellers & rooms</h2>
              <RoomsPicker rooms={rooms} onChange={setRooms} />
            </section>
            <section className="flex flex-col gap-3" data-testid="book-calendar-section">
              <h2 className="eg-title-lg text-[#002131]">2. Check-in date</h2>
              <DepartureCalendar product={product} selected={date} onSelect={setDate} />
              <ul className="eg-label-md text-[#5B6B74] list-disc pl-5 flex flex-col gap-0.5" data-testid="book-price-notes">
                <li>Prices are per person on twin sharing; children aged 2 to 11 sharing a room pay 70%.</li>
                <li>Check-in is the day you land in Colombo; check-out is {product.nights} nights later. We need at least 10 days to arrange your trip.</li>
                <li>International flights are not included: our experts can add them after you book.</li>
              </ul>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-testid="book-details">
              <HotelsCard product={product} date={date} />
              <IncludedCard product={product} />
            </div>
          </div>
          <aside className="w-full md:w-[384px] shrink-0 flex flex-col gap-6 md:self-start md:sticky md:top-6" data-testid="book-sidebar">
            <PaymentSummary product={product} date={date} rooms={rooms} cta="Continue to review & pay" ctaDisabled={!date} onCta={go} />
          </aside>
        </div>
      </main>
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#FBF9F1]/95 backdrop-blur border-t border-[#E4E3DB] px-4 py-3 flex items-center justify-between gap-3" data-testid="book-mobile-bar">
        <div>
          <p className="eg-title-lg text-[#002131]" data-testid="book-mobile-total">{fmtInr(q.total)}</p>
          <p className="eg-label-md text-[#5B6B74]">{date ? `Check-in ${fmtDate(date, { day: 'numeric', month: 'short' })} · ${q.adults + q.children} travellers` : 'Pick a check-in date'}</p>
        </div>
        <button type="button" disabled={!date} onClick={go} className="eg-btn-filled !h-12 px-6 eg-title-md disabled:opacity-40" data-testid="book-mobile-continue">Continue</button>
      </div>
      <Footer />
    </div>
  );
}
