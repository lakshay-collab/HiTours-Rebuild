import React from 'react';
import { ArrowRight, BedDouble, Check, Users, ShieldCheck, Utensils, Camera, Car, Ticket } from 'lucide-react';
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

const COUNT_ICONS = { hotels: BedDouble, meals: Utensils, activities: Camera, transfers: Car, tickets: Ticket };
const COUNT_LABELS = { hotels: 'hotels', meals: 'meals', activities: 'activities', transfers: 'transfers', tickets: 'tickets' };

export const CountsRow = ({ product, compact = false }) => (
  <ul className={`grid ${Object.keys(product.counts).length > 4 ? 'grid-cols-5 gap-1.5' : 'grid-cols-4 gap-2'} ${compact ? '' : 'md:gap-3'}`} data-testid="booking-counts">
    {Object.entries(product.counts).map(([k, n]) => { const Icon = COUNT_ICONS[k]; return (
      <li key={k} className="rounded-xl bg-[#FBEADB] px-2 py-2 flex flex-col items-center text-center" data-testid={`booking-count-${k}`}>
        <Icon size={18} className="text-[#174358]" />
        <span className="eg-title-md text-[#002131] leading-tight mt-1">{n}</span>
        <span className="eg-label-md text-[#174358] leading-tight">{COUNT_LABELS[k]}</span>
      </li>
    ); })}
  </ul>
);

export const PaymentSummary = ({ product, date, rooms, cta, ctaDisabled, onCta, ctaTestId = 'booking-continue', showImage = true }) => {
  const q = quote(product, date, rooms);
  const out = date ? addDays(date, product.nights) : null;
  return (
    <Card testId="booking-summary">
      {showImage && <img src={product.image} alt={product.alt} className="w-full h-36 object-cover rounded-xl" />}
      <p className="eg-title-lg text-[#002131]" data-testid="booking-summary-title">{product.title}</p>
      <div className="flex items-center justify-between gap-2 rounded-xl bg-[#FBF9F1] px-4 py-3" data-testid="booking-summary-dates">
        <div><p className="eg-title-md text-[#002131]">{date ? fmtDate(date) : 'Pick a date'}</p><p className="eg-label-md text-[#5B6B74]">Check-in</p></div>
        <div className="flex flex-col items-center text-[#5B6B74]"><span className="eg-label-md">{product.nights} nights</span><ArrowRight size={16} /></div>
        <div className="text-right"><p className="eg-title-md text-[#002131]">{out ? fmtDate(out) : '—'}</p><p className="eg-label-md text-[#5B6B74]">Check-out</p></div>
      </div>
      <p className="flex items-center gap-2 eg-label-lg text-[#002131]" data-testid="booking-summary-travellers"><Users size={18} className="text-[#174358]" />{`${q.adults} adult${q.adults === 1 ? '' : 's'}${q.children ? ` · ${q.children} child${q.children === 1 ? '' : 'ren'}` : ''} · ${q.rooms} room${q.rooms === 1 ? '' : 's'}`}</p>
      <hr className="border-[#E4E3DB]" />
      <div className="flex flex-col gap-3" data-testid="booking-payment-summary">
        <p className="eg-title-md text-[#002131]">Payment summary</p>
        <div className="flex justify-between eg-body-md text-[#002131]"><span>{fmtInr(q.adultPrice)} × {q.adults} adult{q.adults === 1 ? '' : 's'}</span><span data-testid="booking-adults-total">{fmtInr(q.adultPrice * q.adults)}</span></div>
        {q.children > 0 && <div className="flex justify-between eg-body-md text-[#002131]"><span>{fmtInr(q.childPrice)} × {q.children} child{q.children === 1 ? '' : 'ren'}</span><span data-testid="booking-children-total">{fmtInr(q.childPrice * q.children)}</span></div>}
        <p className="eg-label-md text-[#5B6B74]">Your package price includes</p>
        <CountsRow product={product} compact />
        <div className="flex justify-between eg-body-md text-[#002131]"><span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-[#174358]" />Hi Tours Cares cover</span><span>Included</span></div>
      </div>
      <hr className="border-[#E4E3DB]" />
      <div className="flex items-baseline justify-between">
        <span className="eg-title-lg text-[#002131]">Total</span>
        <span className="eg-headline-md text-[#002131]" data-testid="booking-total">{fmtInr(q.total)}</span>
      </div>
      {!date && <p className="eg-label-md text-[#B3261E]" data-testid="booking-pick-date-hint">Choose a check-in date on the calendar to continue.</p>}
      {cta && <button type="button" disabled={ctaDisabled} onClick={onCta} className="eg-btn-filled w-full !h-14 eg-title-md disabled:opacity-40 disabled:cursor-not-allowed" data-testid={ctaTestId}>{cta}</button>}
      <p className="eg-label-md text-[#5B6B74]" data-testid="booking-cancellation">Cancel or rebook your land programme free of charge up to 30 days before check-in with Hi Tours Cares. International flights are not included.</p>
    </Card>
  );
};

export const HotelsCard = ({ product, date, className = '' }) => {
  let cursor = date ? new Date(date) : null;
  return (
    <Card testId="booking-hotels" className={className}>
      <p className="eg-title-md text-[#002131] flex items-center gap-2"><BedDouble size={18} className="text-[#174358]" />Your hotels</p>
      <ul className="flex flex-col gap-3">
        {product.hotels.map((h, i) => {
          const nights = Number(h.description.match(/(\d+) night/)[1]);
          const from = cursor ? new Date(cursor) : null;
          const to = cursor ? addDays(cursor, nights) : null;
          if (cursor) cursor = to;
          const parts = h.description.split(' · ');
          return (
            <li key={i} className="flex gap-3" data-testid={`booking-hotel-${i + 1}`}>
              {h.image && <img src={h.image} alt={h.name} className="w-14 h-14 rounded-lg object-cover shrink-0" loading="lazy" />}
              <div className="min-w-0">
                <p className="eg-label-lg text-[#002131]">{h.name} <span className="text-[#5B6B74] font-normal">(or similar)</span></p>
                <p className="eg-label-md text-[#5B6B74]">{parts.slice(0, 4).join(' · ')}</p>
                {from && <p className="eg-label-md text-[#174358]">Check-in {fmtDate(from, { day: 'numeric', month: 'short' })} → check-out {fmtDate(to, { day: 'numeric', month: 'short' })}</p>}
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export const IncludedCard = ({ product, className = '' }) => (
  <Card testId="booking-included" className={className}>
    <p className="eg-title-md text-[#002131]">Included in your holiday</p>
    <ul className="flex flex-col gap-1.5">
      {product.included.map((a, i) => <li key={i} className="flex items-start gap-2 eg-body-md text-[#002131]"><Check size={16} className="text-[#8DBE9C] mt-0.5 shrink-0" /><span><span className="text-[#5B6B74]">Day {a.day}:</span> {a.name}</span></li>)}
      <li className="flex items-start gap-2 eg-body-md text-[#002131]"><Check size={16} className="text-[#8DBE9C] mt-0.5 shrink-0" /><span>{product.transport}</span></li>
      <li className="flex items-start gap-2 eg-body-md text-[#002131]"><Check size={16} className="text-[#8DBE9C] mt-0.5 shrink-0" /><span>{product.meals}, private airport transfers and 24/7 on ground support</span></li>
    </ul>
  </Card>
);
