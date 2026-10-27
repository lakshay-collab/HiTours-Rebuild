import React, { useEffect, useRef, useState } from 'react';
import { BedDouble, ChevronDown, Utensils } from 'lucide-react';
import { RouteMap } from './RouteMap';

const MEAL = { B: 'Breakfast', L: 'Lunch', D: 'Dinner' };
const Stars = ({ n }) => <span className="text-[#FB7F26] tracking-tight" aria-label={`${n} star`}>{'★'.repeat(n)}</span>;

const DayCard = ({ day, hotel, open, onToggle, innerRef, isActive }) => (
  <article ref={innerRef} id={`day-${day.n}`} data-day={day.n} className={`relative pl-12 md:pl-14 py-5 border-b border-[#E4E3DB] transition-colors ${isActive ? '' : ''}`} data-testid={`itin-day-${day.n}`} data-open={open || undefined}>
    <span className={`absolute left-0 top-5 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center eg-label-lg transition-colors ${isActive ? 'bg-[#E75E26] text-white shadow-[0_0_0_6px_rgba(231,94,38,0.15)]' : 'bg-[#174358] text-white'}`} data-testid={`itin-day-${day.n}-badge`}>{day.n}</span>
    <button type="button" onClick={onToggle} aria-expanded={open} className="w-full flex items-start justify-between gap-3 text-left" data-testid={`itin-day-${day.n}-toggle`}>
      <div className="min-w-0">
        <p className="eg-label-md text-[#5B6B74]">Day {day.n}{day.snapshot ? ` · ${day.snapshot}` : ''}</p>
        <h3 className="eg-title-lg text-[#002131] mt-0.5">{day.title}</h3>
      </div>
      <ChevronDown size={22} className={`text-[#174358] shrink-0 mt-2 transition-transform ${open ? 'rotate-180' : ''}`} />
    </button>
    <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
      <div className="overflow-hidden">
        <div className="pt-4 flex flex-col gap-4" data-testid={`itin-day-${day.n}-body`}>
          {day.images?.length > 0 && (
            <div className="flex gap-2 overflow-x-auto no-scrollbar snap-x -mr-4 pr-4 md:mr-0 md:pr-0">
              {day.images.map((src, i) => <img key={src} src={src} alt={`${day.title} ${i + 1}`} loading="lazy" className={`snap-start rounded-xl object-cover h-40 md:h-48 ${day.images.length === 1 ? 'w-full' : 'w-[78%] md:w-[calc(50%-4px)] shrink-0'}`} />)}
            </div>
          )}
          <ul className="flex flex-col gap-2">
            {day.bullets.map((b, i) => <li key={i} className="flex gap-2.5 eg-body-lg text-[#002131]"><span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-[#E75E26] shrink-0" />{b}</li>)}
          </ul>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 rounded-xl bg-[#FBEADB] px-4 py-3">
            <p className="flex items-center gap-2 eg-label-lg text-[#002131]" data-testid={`itin-day-${day.n}-overnight`}>
              <BedDouble size={18} className="text-[#174358] shrink-0" />
              {hotel ? <span>Overnight in <strong>{hotel.name}</strong>, {hotel.city} <Stars n={hotel.stars} /> <span className="text-[#5B6B74] font-normal">or similar</span></span> : <span>Departure day · no overnight</span>}
            </p>
            <p className="flex items-center gap-2 eg-label-md text-[#5B6B74] sm:ml-auto" data-testid={`itin-day-${day.n}-meals`}><Utensils size={14} className="text-[#174358]" />{day.meals.map((m) => MEAL[m]).join(' · ')}</p>
          </div>
        </div>
      </div>
    </div>
  </article>
);

export const GroupItinerary = ({ days, hotels, stops }) => {
  const [open, setOpen] = useState(() => new Set([1]));
  const [activeDay, setActiveDay] = useState(1);
  const refs = useRef({});
  const mapRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const els = Object.entries(refs.current).filter(([, el]) => el);
      if (!els.length) return;
      const mapBottom = mapRef.current && getComputedStyle(mapRef.current).display !== 'none' ? mapRef.current.getBoundingClientRect().bottom : 0;
      const line = mapBottom + (window.innerHeight - mapBottom) * (mapBottom ? 0.2 : 0.5);
      let best = null, bestDist = Infinity;
      els.forEach(([n, el]) => {
        const r = el.getBoundingClientRect();
        const dist = r.top <= line && r.bottom >= line ? 0 : Math.min(Math.abs(r.top - line), Math.abs(r.bottom - line));
        if (dist < bestDist) { bestDist = dist; best = Number(n); }
      });
      if (best) setActiveDay(best);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(measure); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    measure();
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, [days]);

  const toggle = (n) => {
    setOpen((s) => { const next = new Set(s); next.has(n) ? next.delete(n) : next.add(n); return next; });
    setActiveDay(n);
  };
  const expandAll = () => setOpen(new Set(days.map((d) => d.n)));
  const allOpen = open.size === days.length;
  const current = days.find((d) => d.n === activeDay) || days[0];
  const stopKey = current.stop || [...days].reverse().find((d) => d.stop)?.stop;
  const activeIndex = Math.max(0, stops.findIndex((s) => s.key === stopKey));

  return (
    <section id="itinerary" className="scroll-mt-24" data-testid="group-itinerary" data-active-day={activeDay}>
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="eg-headline-md text-[#002131]">Your itinerary</h2>
          <p className="eg-body-lg text-[#5B6B74] mt-1">{days.length} days · {stops.length} stops · overnight hotels listed under every day</p>
        </div>
        <button type="button" onClick={allOpen ? () => setOpen(new Set([activeDay])) : expandAll} className="eg-label-lg text-[#174358] underline" data-testid="itin-expand-all">{allOpen ? 'Collapse days' : 'Expand all days'}</button>
      </div>
      <div ref={mapRef} className="mt-6 lg:hidden rounded-2xl border border-[#E4E3DB] bg-white p-2 sticky top-[48px] z-10" data-testid="route-map-mobile-wrap">
        <RouteMap stops={stops} activeIndex={activeIndex} activeDay={activeDay} className="h-[260px]" testId="route-map-mobile" compact />
      </div>
      <div className="mt-2 lg:mt-8 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start">
        <div data-testid="itin-days">
          {days.map((d) => <DayCard key={d.n} day={d} hotel={d.stop ? hotels[d.stop] : null} open={open.has(d.n)} isActive={activeDay === d.n} onToggle={() => toggle(d.n)} innerRef={(el) => { refs.current[d.n] = el; }} />)}
        </div>
        <div className="hidden lg:block sticky top-24 rounded-2xl border border-[#E4E3DB] bg-white p-4" data-testid="route-map-desktop-wrap">
          <RouteMap stops={stops} activeIndex={activeIndex} activeDay={activeDay} className="h-[600px]" />
        </div>
      </div>
    </section>
  );
};
