import React, { useEffect, useRef, useState } from 'react';
import { Moon, Utensils } from 'lucide-react';
import { BulletMark } from '../egypt/EgyptRoute';
import { RouteMap } from './RouteMap';

const MEAL = { B: 'Breakfast', L: 'Lunch', D: 'Dinner' };

const DayBlock = ({ day, hotel, innerRef, isActive }) => (
  <article ref={innerRef} id={`day-${day.n}`} data-day={day.n} className="py-6 border-b border-[#E4E3DB] flex flex-col gap-4" data-testid={`itin-day-${day.n}`}>
    <div className="flex items-center gap-3">
      <span className={`inline-flex items-center justify-center min-w-[64px] h-8 px-3 rounded-full eg-label-lg text-white transition-colors ${isActive ? 'bg-[#FB7F26]' : 'bg-[#308BB6]'}`} data-testid={`itin-day-${day.n}-badge`}>Day {day.n}</span>
      <p className="flex items-center gap-1.5 eg-label-md text-[#6F777C]" data-testid={`itin-day-${day.n}-meals`}><Utensils size={14} className="text-[#308BB6]" />{day.meals.map((m) => MEAL[m]).join(' · ')}</p>
    </div>
    <img src={day.image} alt={day.title} loading="lazy" className="w-full h-48 md:h-64 object-cover rounded-2xl" />
    <div className="flex flex-col gap-3">
      <div className="flex-1 min-w-0 flex flex-col gap-3">
        <h3 className="eg-headline-md text-[#002131]">{day.title}</h3>
        <ul className="flex flex-col gap-2.5" data-testid={`itin-day-${day.n}-bullets`}>
          {day.bullets.map((b) => <li key={b} className="flex items-start gap-2.5 eg-body-lg text-[#002131]"><BulletMark text={b} />{b}</li>)}
        </ul>
        <p className="mt-1 inline-flex items-center gap-2 eg-label-lg text-[#174358]" data-testid={`itin-day-${day.n}-overnight`}>
          <Moon size={16} className="text-[#308BB6] shrink-0" />
          {hotel ? <span>Overnight in {hotel.name}, {hotel.city} <span className="text-[#FB7F26]">{'★'.repeat(hotel.stars)}</span> <span className="text-[#6F777C] font-normal">or similar</span></span> : 'Departure day, no overnight'}
        </p>
      </div>
    </div>
  </article>
);

export const GroupItinerary = ({ days, hotels, stops }) => {
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

  const current = days.find((d) => d.n === activeDay) || days[0];
  const stopKey = current.stop || [...days].reverse().find((d) => d.stop)?.stop;
  const activeIndex = Math.max(0, stops.findIndex((s) => s.key === stopKey));

  return (
    <section id="itinerary" className="scroll-mt-24" data-testid="group-itinerary" data-active-day={activeDay}>
      <h2 className="eg-display-sm text-[#002131]">Your day-by-day itinerary</h2>
      <p className="eg-body-lg text-[#174358] mt-2">{days.length} days, {stops.length} places. Every night’s hotel is listed under its day.</p>
      <div ref={mapRef} className="mt-5 lg:hidden rounded-2xl border border-[#E4E3DB] bg-white p-2 sticky top-[48px] z-10" data-testid="route-map-mobile-wrap">
        <RouteMap stops={stops} activeIndex={activeIndex} activeDay={activeDay} className="h-[240px]" testId="route-map-mobile" compact />
      </div>
      <div className="mt-2 lg:mt-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start">
        <div data-testid="itin-days" className="border-t border-[#E4E3DB]">
          {days.map((d) => <DayBlock key={d.n} day={d} hotel={d.stop ? hotels[d.stop] : null} isActive={activeDay === d.n} innerRef={(el) => { refs.current[d.n] = el; }} />)}
        </div>
        <div className="hidden lg:block sticky top-6 rounded-2xl border border-[#E4E3DB] bg-white p-3" data-testid="route-map-desktop-wrap">
          <RouteMap stops={stops} activeIndex={activeIndex} activeDay={activeDay} className="h-[560px]" />
        </div>
      </div>
    </section>
  );
};
