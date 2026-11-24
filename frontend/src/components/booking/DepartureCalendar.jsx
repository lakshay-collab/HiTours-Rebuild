import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { adultPrice, childPrice, toISO, addDays, fmtInr, fmtDate, firstBookable, lastBookable, isBlackout, isBookable, MIN_LEAD_DAYS, MAX_MONTHS_AHEAD } from '../../booking/bookable';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DOW = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const sameDay = (a, b) => a && b && toISO(a) === toISO(b);

// Check-in calendar: one flat package price (shown in the header), blackout dates greyed, stay highlighted to check-out.
const short = (n) => `₹${(n / 1000).toFixed(1)}k`;

export const DepartureCalendar = ({ product, selected, onSelect, live = null }) => {
  const first = firstBookable();
  const last = lastBookable();
  const [view, setView] = useState(() => { const d = selected || first; return new Date(d.getFullYear(), d.getMonth(), 1); });
  const start = new Date(view.getFullYear(), view.getMonth(), 1);
  const lead = (start.getDay() + 6) % 7;
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells = [...Array(lead).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => new Date(view.getFullYear(), view.getMonth(), i + 1))];
  const canPrev = start > new Date(first.getFullYear(), first.getMonth(), 1);
  const canNext = start < new Date(last.getFullYear(), last.getMonth(), 1);
  const out = selected ? addDays(selected, product.nights) : null;
  const inStay = (d) => selected && d > selected && d < out;

  return (
    <div className="rounded-2xl border border-[#E4E3DB] bg-white overflow-hidden" data-testid="departure-calendar">
      <div className="px-4 md:px-6 pt-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <p className="eg-title-lg text-[#002131]">Choose your check-in date</p>
          <p className="eg-label-md text-[#5B6B74]">{product.nights} nights · check-out is {product.nights} nights after check-in · bookable up to {MAX_MONTHS_AHEAD} months ahead</p>
        </div>
        <div className="rounded-xl bg-[#FBEADB] px-4 py-2.5 sm:text-right" data-testid="calendar-price">
          {product.live ? (
            <>
              <p className="eg-title-lg text-[#002131]" data-testid="calendar-live-from">{live ? `From ${fmtInr(live.from_adult)}` : 'Getting prices…'} <span className="eg-label-md text-[#5B6B74]">per adult</span></p>
              <p className="eg-label-md text-[#5B6B74]">Live price for your group, shown on each date</p>
            </>
          ) : (
            <>
              <p className="eg-title-lg text-[#002131]">{fmtInr(adultPrice(product.base))} <span className="eg-label-md text-[#5B6B74]">per adult</span></p>
              <p className="eg-label-md text-[#5B6B74]">{fmtInr(childPrice(product.base))} per child (2 to 11) · same price on every date</p>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between px-4 md:px-6 pt-4">
        <button type="button" aria-label="Previous month" disabled={!canPrev} onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))} className="w-10 h-10 rounded-full flex items-center justify-center text-[#174358] hover:bg-[#174358]/[0.06] disabled:opacity-30 transition-colors" data-testid="calendar-prev"><ChevronLeft size={20} /></button>
        <p className="eg-title-md text-[#002131]" data-testid="calendar-month">{MONTHS[view.getMonth()]} {view.getFullYear()}</p>
        <button type="button" aria-label="Next month" disabled={!canNext} onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))} className="w-10 h-10 rounded-full flex items-center justify-center text-[#174358] hover:bg-[#174358]/[0.06] disabled:opacity-30 transition-colors" data-testid="calendar-next"><ChevronRight size={20} /></button>
      </div>
      <div className="grid grid-cols-7 px-3 md:px-5 mt-2 mb-1">
        {DOW.map((d) => <span key={d} className="text-center eg-label-md text-[#5B6B74] py-1">{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-y-1 px-3 md:px-5 pb-4">
        {cells.map((d, i) => {
          if (!d) return <span key={`e${i}`} />;
          const blackout = !product.live && isBlackout(d) && d >= first && d <= last;
          const disabled = !isBookable(d, product);
          const row = live?.dates[toISO(d)];
          const sel = sameDay(d, selected);
          const stay = inStay(d);
          const isOut = sameDay(d, out);
          return (
            <button key={toISO(d)} type="button" disabled={disabled} onClick={() => onSelect(d)}
              aria-label={blackout ? `${d.getDate()} ${MONTHS[d.getMonth()]}, not available` : `Check in ${d.getDate()} ${MONTHS[d.getMonth()]}`}
              title={blackout ? 'Not available' : undefined}
              className={`relative h-12 md:h-14 flex flex-col items-center justify-center transition-colors
                ${blackout ? 'text-[#B3261E]/70 line-through decoration-[#B3261E]/60 cursor-not-allowed bg-[repeating-linear-gradient(135deg,transparent_0_6px,#F6E7E5_6px_8px)]' : disabled ? 'text-[#C4CBD0] cursor-not-allowed' : sel ? '' : 'text-[#002131] hover:bg-[#FBEADB]'}
                ${stay || isOut ? 'bg-[#D7ECE4]' : ''} ${sel ? 'bg-[#174358] text-white rounded-l-xl hover:bg-[#174358]' : ''} ${isOut ? 'rounded-r-xl' : ''}`}
              data-testid={`cal-day-${toISO(d)}`} data-selected={sel || undefined} data-blackout={blackout || undefined}>
              <span className="eg-label-lg">{d.getDate()}</span>
              {row && !isOut && <span className={`text-[10px] leading-none mt-0.5 ${sel ? 'opacity-90' : 'text-[#1E7B4B]'}`} data-testid={`cal-price-${toISO(d)}`}>{short(row.adult)}</span>}
              {sel && !row && <span className="text-[10px] leading-none mt-0.5 opacity-90">check-in</span>}
              {isOut && !sel && <span className="text-[10px] leading-none mt-0.5 text-[#174358]">check-out</span>}
            </button>
          );
        })}
      </div>
      <div className="border-t border-[#E4E3DB] px-4 md:px-6 py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 eg-label-md text-[#5B6B74]" data-testid="calendar-legend">
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#174358]" />Check-in</span>
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#D7ECE4]" />Your stay to check-out</span>
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[repeating-linear-gradient(135deg,transparent_0_3px,#E9B8B3_3px_4px)] border border-[#E9B8B3]" />Not available</span>
        <span className="sm:ml-auto" data-testid="calendar-selection">{selected ? `Check-in ${fmtDate(selected)} → check-out ${fmtDate(out)}` : `Earliest check-in: ${fmtDate(first)} (${MIN_LEAD_DAYS} days from today)`}</span>
      </div>
    </div>
  );
};
