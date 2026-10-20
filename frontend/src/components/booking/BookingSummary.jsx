import React from 'react';
import { ArrowRight, BedDouble, Check, Users, ShieldCheck } from 'lucide-react';
import { quote, addDays, fmtDate, fmtInr } from '../../booking/bookable';

const Card = ({ children, testId, className = '' }) => <div className={`bg-white rounded-2xl border border-[#C4CBD0] p-5 md:p-6 flex flex-col gap-4 ${className}`} data-testid={testId}>{children}</div>;

export const StepBar = ({ step }) => {
  const steps = ['Dates & travellers', 'Review & pay', 'Confirmed'];
  return (
    <ol className="flex items-center gap-2 md:gap-4 flex-wrap" data-testid="booking-steps">
      {steps.map((s, i) => (
        <li key={s} className={`flex items-center gap-2 eg-label-lg ${i + 1 === step ? 'text-[#002131]' : 'text-[#5B6B74]'}`} data-testid={`booking-step-${i + 1}`} aria-current={i + 1 === step ? 'step' : undefined}>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-semibold ${i + 1 < step ? 'bg-[#8DBE9C] text-white' : i + 1 === step ? 'bg-[#174358] text-white' : 'bg-[#E4E3DB] text-[#5B6B74]'}`}>{i + 1 < step ? <Check size={14} /> : i + 1}</span>
          {s}{i < steps.length - 1 && <span className="text-[#C4CBD0] mx-1">›</span>}
        </li>
      ))}
    </ol>
  );
};

export const PaymentSummary = ({ product, date, rooms, cta, ctaDisabled, onCta, ctaTestId = 'booking-continue' }) => {
  const q = date ? quote(product, date, rooms) : null;
  const ret = date ? addDays(date, product.nights) : null;
  return (
    <Card testId="booking-summary">
      <img src={product.image} alt={product.alt} className="w-full h-44 object-cover rounded-xl" />
      <p className="eg-title-lg text-[#002131]" data-testid="booking-summary-title">{product.title}</p>
      <hr className="border-[#E4E3DB]" />
      <div className="flex items-center justify-between gap-2" data-testid="booking-summary-dates">
        <div><p className="eg-title-md text-[#002131]">{date ? fmtDate(date) : 'Pick a date'}</p><p className="eg-label-md text-[#5B6B74]">Departure</p></div>
        <div className="flex flex-col items-center text-[#5B6B74]"><span className="eg-label-md">{product.nights} nights</span><ArrowRight size={16} /></div>
        <div className="text-right"><p className="eg-title-md text-[#002131]">{ret ? fmtDate(ret) : '—'}</p><p className="eg-label-md text-[#5B6B74]">Return</p></div>
      </div>
      <hr className="border-[#E4E3DB]" />
      <p className="flex items-center gap-2 eg-label-lg text-[#002131]" data-testid="booking-summary-travellers"><Users size={18} className="text-[#174358]" />{q ? `${q.adults} adult${q.adults === 1 ? '' : 's'}${q.children ? ` · ${q.children} child${q.children === 1 ? '' : 'ren'}` : ''} · ${q.rooms} room${q.rooms === 1 ? '' : 's'}` : `${rooms.length} room${rooms.length === 1 ? '' : 's'}`}</p>
      <hr className="border-[#E4E3DB]" />
      <div className="flex flex-col gap-2" data-testid="booking-payment-summary">
        <p className="eg-title-md text-[#002131]">Payment summary</p>
        {q ? (
          <>
            <div className="flex justify-between eg-body-md text-[#002131]"><span>{fmtInr(q.adultPrice)} × {q.adults} adult{q.adults === 1 ? '' : 's'}</span><span data-testid="booking-adults-total">{fmtInr(q.adultPrice * q.adults)}</span></div>
            {q.children > 0 && <div className="flex justify-between eg-body-md text-[#002131]"><span>{fmtInr(q.childPrice)} × {q.children} child{q.children === 1 ? '' : 'ren'}</span><span data-testid="booking-children-total">{fmtInr(q.childPrice * q.children)}</span></div>}
            <ul className="eg-label-md text-[#5B6B74] list-disc pl-5 flex flex-col gap-0.5">
              <li>{product.data.detail.services.find(([l]) => /hotels/.test(l))[0]} with {product.meals}</li>
              <li>Private airport transfers and all road travel</li>
              <li>Every experience on the itinerary included</li>
            </ul>
            <div className="flex justify-between eg-body-md text-[#002131]"><span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-[#174358]" />Hi Tours Cares cover</span><span>Included</span></div>
          </>
        ) : <p className="eg-body-md text-[#5B6B74]">Select a departure date to see your price.</p>}
      </div>
      <hr className="border-[#E4E3DB]" />
      <div className="flex items-baseline justify-between">
        <span className="eg-title-lg text-[#002131]">Total</span>
        <span className="eg-headline-md text-[#002131]" data-testid="booking-total">{q ? fmtInr(q.total) : '—'}</span>
      </div>
      {cta && <button type="button" disabled={ctaDisabled} onClick={onCta} className="eg-btn-filled w-full !h-14 eg-title-md disabled:opacity-40 disabled:cursor-not-allowed" data-testid={ctaTestId}>{cta}</button>}
      <p className="eg-label-md text-[#5B6B74]" data-testid="booking-cancellation">Cancellation policy: cancel or rebook your land programme free of charge up to 30 days before departure with Hi Tours Cares. International flights are not included in this price.</p>
    </Card>
  );
};

export const HotelsCard = ({ product, date }) => {
  let cursor = date ? new Date(date) : null;
  return (
    <Card testId="booking-hotels">
      <p className="eg-title-md text-[#002131] flex items-center gap-2"><BedDouble size={18} className="text-[#174358]" />Your hotels</p>
      <ul className="flex flex-col gap-3">
        {product.hotels.map((h, i) => {
          const nights = Number(h.description.match(/(\d+) night/)[1]);
          const from = cursor ? new Date(cursor) : null;
          const to = cursor ? addDays(cursor, nights) : null;
          if (cursor) cursor = to;
          return (
            <li key={i} className="flex gap-3" data-testid={`booking-hotel-${i + 1}`}>
              {h.image && <img src={h.image} alt={h.name} className="w-16 h-16 rounded-lg object-cover shrink-0" loading="lazy" />}
              <div className="min-w-0">
                <p className="eg-label-lg text-[#002131]">{h.name} <span className="text-[#5B6B74] font-normal">(or similar)</span></p>
                <p className="eg-label-md text-[#5B6B74]">{h.description.split(' · ').slice(0, 1).join('')} · {h.description.split(' · ').slice(1, 4).join(' · ')}</p>
                {from && <p className="eg-label-md text-[#174358]">{fmtDate(from, { day: 'numeric', month: 'short' })} → {fmtDate(to, { day: 'numeric', month: 'short' })}</p>}
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export const IncludedCard = ({ product }) => (
  <Card testId="booking-included">
    <p className="eg-title-md text-[#002131]">Included in your holiday</p>
    <ul className="flex flex-col gap-1.5">
      {product.included.map((a, i) => <li key={i} className="flex items-start gap-2 eg-body-md text-[#002131]"><Check size={16} className="text-[#8DBE9C] mt-0.5 shrink-0" /><span><span className="text-[#5B6B74]">Day {a.day}:</span> {a.name}</span></li>)}
      <li className="flex items-start gap-2 eg-body-md text-[#002131]"><Check size={16} className="text-[#8DBE9C] mt-0.5 shrink-0" /><span>{product.transport}</span></li>
      <li className="flex items-start gap-2 eg-body-md text-[#002131]"><Check size={16} className="text-[#8DBE9C] mt-0.5 shrink-0" /><span>{product.meals}, private airport transfers and 24/7 on ground support</span></li>
    </ul>
  </Card>
);
