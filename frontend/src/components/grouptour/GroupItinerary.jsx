import React, { useEffect, useRef, useState } from 'react';
import { Moon, Utensils } from 'lucide-react';
import { BulletMark } from '../egypt/EgyptRoute';

const MEAL = { B: 'Breakfast', L: 'Lunch', D: 'Dinner' };
const HEADER = 120;

const DayText = ({ day, hotel }) => (
  <div className="md:w-[346px] shrink-0" data-testid={`itin-day-${day.n}-text`}>
    <h3 className="eg-title-lg text-[#002131]">{day.title}</h3>
    <p className="mt-2 inline-flex items-center gap-1.5 eg-label-md text-[#6F777C]" data-testid={`itin-day-${day.n}-meals`}><Utensils size={14} className="text-[#308BB6]" />{day.meals.length ? day.meals.map((m) => MEAL[m]).join(' · ') : 'Meals on your own'}</p>
    <ul className="mt-4 flex flex-col gap-2.5" data-testid={`itin-day-${day.n}-bullets`}>
      {day.bullets.map((b) => <li key={b} className="flex items-start gap-2.5 eg-body-lg text-[#002131]"><BulletMark text={b} />{b}</li>)}
    </ul>
    <p className="mt-4 inline-flex items-center gap-2 eg-label-lg text-[#174358]" data-testid={`itin-day-${day.n}-overnight`}>
      <Moon size={16} className="text-[#308BB6] shrink-0" />
      {hotel ? <span>Overnight in {hotel.name}, {hotel.city} <span className="text-[#FB7F26]">{'★'.repeat(hotel.stars || 0)}</span> <span className="text-[#6F777C] font-normal">or similar</span></span> : 'Departure day, no overnight'}
    </p>
  </div>
);

export const GroupItinerary = ({ days, hotels, onActiveChange, sub }) => {
  const [active, setActive] = useState(0);
  const [stuck, setStuck] = useState(false);
  const head = useRef(null);
  const refs = useRef([]);
  const tabs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      if (!head.current) return;
      const top = head.current.getBoundingClientRect().top;
      setStuck(top <= 0 && window.scrollY > 0);
      const line = (head.current.offsetHeight || HEADER) + 60;
      let idx = 0;
      refs.current.forEach((el, i) => { if (el && el.getBoundingClientRect().top <= line) idx = i; });
      setActive(idx);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { onActiveChange?.(days[active].n); }, [active, days, onActiveChange]);
  useEffect(() => { const t = tabs.current[active]; if (t && t.scrollIntoView) t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' }); }, [active]);

  const goTo = (i) => {
    const el = refs.current[i];
    const offset = (head.current ? head.current.offsetHeight : HEADER) + 12;
    if (el) { setActive(i); window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' }); }
  };

  return (
    <div className="bg-[#F6F4EB] rounded-xl" id="itinerary" data-testid="group-itinerary" data-active-day={days[active].n}>
      <div ref={head} className="sticky top-0 z-20 bg-[#F0EEE6] rounded-t-xl px-4 md:px-10 shadow-[0_6px_12px_-8px_rgba(0,33,49,0.2)]" data-testid="itin-header">
        <div className="flex items-center justify-between gap-3 pt-3.5 pb-1.5">
          <h2 className="eg-title-md md:eg-headline-md !leading-7 text-[#002131] truncate">Your day-by-day itinerary</h2>
        </div>
        {!stuck && <p className="eg-body-md text-[#174358] pb-3">{sub || `${days.length} days with your group · every night’s hotel listed under its day`}</p>}
        <div role="tablist" className="flex gap-2 overflow-x-auto no-scrollbar py-3" data-testid="itin-tabs">
          {days.map((d, i) => (
            <button key={d.n} ref={(el) => { tabs.current[i] = el; }} role="tab" aria-selected={active === i} onClick={() => goTo(i)} className={`shrink-0 h-9 px-4 rounded-full eg-label-lg whitespace-nowrap transition-colors ${active === i ? 'bg-[#174358] text-white' : 'bg-white border border-[#C4CBD0] text-[#174358] hover:border-[#174358]'}`} data-testid={`itin-tab-${d.n}`}>Day {d.n}</button>
          ))}
        </div>
      </div>
      <div className="px-4 md:px-10 pt-8 pb-7 flex flex-col divide-y divide-[#DDD9CE]" data-testid="itin-days">
        {days.map((d, i) => (
          <section key={d.n} ref={(el) => { refs.current[i] = el; }} id={`day-${d.n}`} className="py-8 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-start gap-6 md:gap-8" data-testid={`itin-day-${d.n}`}>
            <DayText day={d} hotel={d.stop ? hotels[d.stop] : null} />
            <div className="relative shrink-0 md:flex-1 min-w-0 aspect-[3/2] md:aspect-auto md:h-[300px] md:self-start rounded-xl overflow-hidden bg-[#EAE8E0] order-first md:order-none">
              <img src={d.image} alt={d.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <span className="absolute left-3 top-3 inline-flex items-center h-7 px-3 rounded-full bg-[#308BB6] eg-label-md text-white" data-testid={`itin-day-${d.n}-badge`}>Day {d.n}</span>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
