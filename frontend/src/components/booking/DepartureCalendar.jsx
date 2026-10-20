import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TIERS, tierFor, adultPrice, toISO, addDays, fmtInr } from '../../booking/bookable';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DOW = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const sameDay = (a, b) => a && b && toISO(a) === toISO(b);

// Departure calendar. Prices live in the legend (one per season tier) and on the selected day: ₹ figures do not fit in a cell.
export const DepartureCalendar = ({ product, selected, onSelect }) => {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const first = addDays(today, 1);
  const last = addDays(today, 365);
  const [view, setView] = useState(() => { const d = selected || first; return new Date(d.getFullYear(), d.getMonth(), 1); });
  const [hover, setHover] = useState(null);
  const start = new Date(view.getFullYear(), view.getMonth(), 1);
  const lead = (start.getDay() + 6) % 7;
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells = [...Array(lead).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => new Date(view.getFullYear(), view.getMonth(), i + 1))];
  const canPrev = start > new Date(first.getFullYear(), first.getMonth(), 1);
  const canNext = start < new Date(last.getFullYear(), last.getMonth(), 1);
  const ret = selected ? addDays(selected, product.nights) : null;
  const inStay = (d) => selected && d > selected && d <= ret;
  const focus = hover || selected;

  return (
    <div className="rounded-2xl border border-[#E4E3DB] bg-white overflow-hidden" data-testid="departure-calendar">
      <div className="flex items-center justify-between px-4 md:px-6 pt-5">
        <button type="button" aria-label="Previous month" disabled={!canPrev} onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))} className="w-10 h-10 rounded-full flex items-center justify-center text-[#174358] hover:bg-[#174358]/[0.06] disabled:opacity-30 transition-colors" data-testid="calendar-prev"><ChevronLeft size={20} /></button>
        <p className="eg-title-lg text-[#002131]" data-testid="calendar-month">{MONTHS[view.getMonth()]} {view.getFullYear()}</p>
        <button type="button" aria-label="Next month" disabled={!canNext} onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))} className="w-10 h-10 rounded-full flex items-center justify-center text-[#174358] hover:bg-[#174358]/[0.06] disabled:opacity-30 transition-colors" data-testid="calendar-next"><ChevronRight size={20} /></button>
      </div>
      <div className="grid grid-cols-7 px-3 md:px-5 mt-4 mb-1">
        {DOW.map((d) => <span key={d} className="text-center eg-label-md text-[#5B6B74] py-1">{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-y-1 px-3 md:px-5 pb-4" onMouseLeave={() => setHover(null)}>
        {cells.map((d, i) => {
          if (!d) return <span key={`e${i}`} />;
          const disabled = d < first || d > last;
          const tier = tierFor(d);
          const sel = sameDay(d, selected);
          const stay = inStay(d);
          const isRet = sameDay(d, ret);
          return (
            <button key={toISO(d)} type="button" disabled={disabled} onClick={() => onSelect(d)} onMouseEnter={() => !disabled && setHover(d)}
              aria-label={`${d.getDate()} ${MONTHS[d.getMonth()]}, ${TIERS[tier].label}, ${fmtInr(adultPrice(product.base, d))} per person`}
              className={`relative h-12 md:h-14 flex flex-col items-center justify-center gap-1 transition-colors
                ${disabled ? 'text-[#C4CBD0] cursor-not-allowed bg-[repeating-linear-gradient(135deg,transparent_0_6px,#F1EFE6_6px_8px)]' : sel ? '' : 'text-[#002131] hover:bg-[#FBEADB]'}
                ${stay || isRet ? 'bg-[#D7ECE4]' : ''} ${sel ? 'bg-[#174358] text-white rounded-xl hover:bg-[#174358]' : ''} ${isRet ? 'rounded-r-xl' : ''}`}
              data-testid={`cal-day-${toISO(d)}`} data-tier={tier} data-selected={sel || undefined}>
              <span className={`eg-label-lg ${sel ? 'text-white' : ''}`}>{d.getDate()}</span>
              {!disabled && !isRet && <span className={`w-1.5 h-1.5 rounded-full ${sel ? 'bg-white' : TIERS[tier].dot}`} />}
              {isRet && !sel && <span className="eg-label-md text-[#174358] text-[10px] leading-none">return</span>}
            </button>
          );
        })}
      </div>
      <div className="border-t border-[#E4E3DB] px-4 md:px-6 py-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-6" data-testid="calendar-legend">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {Object.entries(TIERS).map(([k, t]) => {
            const sample = new Date(view.getFullYear(), (k === 'peak' ? 0 : k === 'low' ? 6 : 4), 15);
            return (
              <span key={k} className="flex items-center gap-2 eg-label-md text-[#002131]" data-testid={`legend-${k}`}>
                <span className={`w-2.5 h-2.5 rounded-full ${t.dot}`} />{t.label}
                <span className="text-[#5B6B74]">{fmtInr(adultPrice(product.base, sample))} pp</span>
              </span>
            );
          })}
        </div>
        <p className="md:ml-auto eg-label-lg text-[#002131] min-h-[20px]" data-testid="calendar-focus-price">
          {focus ? `${focus.getDate()} ${MONTHS[focus.getMonth()].slice(0, 3)}: ${fmtInr(adultPrice(product.base, focus))} per adult · ${product.days} days` : 'Hover a date to see its price'}
        </p>
      </div>
    </div>
  );
};
