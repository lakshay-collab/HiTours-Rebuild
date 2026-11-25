import React, { useState } from 'react';
import { BedDouble, CalendarDays, Camera, Car, Check, ChevronDown, Coffee, Info, LayoutList, MapPin, Moon, Plane, Star, Utensils } from 'lucide-react';
import { ExploreIcon, HotelIcon } from '../egypt/EgyptIcons';
import { addDays, fmtDate, toISO, useLive, decodeRooms } from '../../booking/bookable';

const short = { day: 'numeric', month: 'short' };
const DEFAULT_ROOMS = decodeRooms('');
const TABS = [
  { id: 'all', label: 'All inclusions', icon: LayoutList },
  { id: 'hotels', label: 'Hotels', icon: BedDouble },
  { id: 'activities', label: 'Activities', icon: ExploreIcon },
  { id: 'transfers', label: 'Transfers', icon: Car },
  { id: 'meals', label: 'Meals', icon: Utensils },
];
const TONE = {
  transfer: 'bg-[#F5EFD9] text-[#8A6A1F]',
  activity: 'bg-[#E3F1F8] text-[#1F6F94]',
  meal: 'bg-[#E6F4EA] text-[#1E7B4B]',
  hotel: 'bg-[#EFEDE4] text-[#5B4A2E]',
};

const useStays = (product, date, rooms) => {
  const cal = useLive(product, rooms || DEFAULT_ROOMS);
  return (date && cal?.dates[toISO(date)]?.stays) || null;
};

// One hotel per stop, with the hotel actually priced for the chosen dates when it differs.
const hotelRows = (product, date, stays) => {
  let cursor = date ? new Date(date) : null;
  return product.hotels.map((h) => {
    const parts = h.description.split(' · ');
    const nights = Number(h.description.match(/(\d+) night/)[1]);
    const from = cursor ? new Date(cursor) : null;
    if (cursor) cursor = addDays(cursor, nights);
    const stay = (stays || []).find((x) => x.area === h.city);
    const swapped = !!stay && !h.name.toLowerCase().startsWith(stay.name.toLowerCase().split(' ').slice(0, 2).join(' '));
    return {
      city: h.city, dayLabel: h.dayLabel, nights, from, to: cursor ? new Date(cursor) : null,
      name: swapped ? stay.name : h.name.replace(/ or similar$/, ''),
      image: swapped ? null : h.image,
      meal: parts[1], room: swapped ? stay.room : parts[2],
      stars: swapped ? stay.star : Number((parts[3] || '').replace('★', '')) || null,
      blurb: swapped ? '' : parts[4] || '', similar: (h.similar || []).length,
    };
  });
};

const Chip = ({ children }) => <span className="inline-flex items-center h-7 px-3 rounded-full bg-[#1F6F94] text-white eg-label-lg shrink-0">{children}</span>;
const Tile = ({ icon: Icon, tone }) => <span className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${TONE[tone]}`}><Icon size={18} /></span>;
const Item = ({ icon, tone, title, sub }) => (
  <li className="flex items-start gap-3">
    <Tile icon={icon} tone={tone} />
    <div className="min-w-0 pt-0.5"><p className="eg-label-lg text-[#002131]">{title}</p>{sub && <p className="eg-body-md text-[#174358] mt-0.5">{sub}</p>}</div>
  </li>
);
const Stars = ({ n }) => <span className="inline-flex items-center gap-0.5" aria-label={`${n} star`}>{Array.from({ length: n }, (_, i) => <Star key={i} size={14} className="fill-[#1F6F94] text-[#1F6F94]" />)}</span>;

const carFor = (product, rooms) => {
  if (!product.vehicles) return null;
  const pax = (rooms || DEFAULT_ROOMS).reduce((n, r) => n + r.adults + r.children, 0);
  const [, name] = product.vehicles.find(([seats]) => seats >= pax) || product.vehicles[product.vehicles.length - 1];
  return `${name} or similar`;
};

const AllDays = ({ product, date, hotels, car }) => {
  const [all, setAll] = useState(false);
  const days = all ? product.dayPlan : product.dayPlan.slice(0, 2);
  return (
  <div className="flex flex-col gap-4">
  <ol className="flex flex-col gap-4" data-testid="inc-all">
    {days.map((p) => {
      const transfers = product.transferDetails ? product.transferDetails.filter((t) => t.day === p.day).map((t) => ({ title: t.title, route: `${t.from} to ${t.to.replace(/^Your/, 'your')}${car ? ` · ${car}` : ''}` })) : p.transfers.map((t) => ({ title: t }));
      const meal = (product.mealsByDay || []).find((m) => m.day === p.day);
      const hotel = p.hotel && hotels.find((h) => h.city === p.city);
      return (
        <li key={p.day} className="rounded-2xl border border-[#DAD7CB] bg-white p-5 flex flex-col gap-4" data-testid={`inc-all-day-${p.day}`}>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Chip>Day {p.day}</Chip>
            <h3 className="eg-title-md text-[#002131] flex-1 min-w-0">{p.title}</h3>
            {date && <span className="eg-label-lg text-[#174358]">{fmtDate(addDays(date, p.day - 1), { weekday: 'short', day: 'numeric', month: 'short' })}</span>}
          </div>
          <ul className="flex flex-col gap-3">
            {meal && <Item icon={Coffee} tone="meal" title={meal.text} />}
            {transfers.map((t) => <Item key={t.title} icon={/airport/i.test(t.title) ? Plane : Car} tone="transfer" title={t.title} sub={t.route} />)}
            {p.experiences.map((e) => <Item key={e} icon={ExploreIcon} tone="activity" title={e} />)}
            {hotel ? <Item icon={HotelIcon} tone="hotel" title={<button type="button" onClick={() => window.dispatchEvent(new CustomEvent('ht-similar-hotels', { detail: p.city }))} className="text-left underline underline-offset-4 decoration-[#9ACDE5] hover:text-[#1F6F94]" data-testid={`inc-overnight-${p.day}`}>{`Overnight in ${p.city} at ${hotel.name} or similar`}</button>} sub={`${hotel.room}${hotel.stars ? ` · ${hotel.stars} star` : ''}`} /> : <Item icon={Check} tone="hotel" title="Departure day, no overnight stay" />}
          </ul>
        </li>
      );
    })}
  </ol>
  {product.dayPlan.length > 2 && <button type="button" onClick={() => setAll((v) => !v)} aria-expanded={all} className="self-start inline-flex items-center gap-1.5 h-11 px-5 rounded-full border border-[#1F6F94] eg-label-lg text-[#1F6F94] hover:bg-[#E3F1F8] transition-colors" data-testid="inc-all-toggle">{all ? 'Show less' : `Show all ${product.dayPlan.length} days`}<ChevronDown size={16} className={`transition-transform ${all ? 'rotate-180' : ''}`} /></button>}
  </div>
  );
};

const Spec = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-2.5">
    <Icon size={18} className="text-[#1F6F94] mt-0.5 shrink-0" />
    <div><dt className="eg-label-md uppercase tracking-[0.08em] text-[#1F6F94]">{label}</dt><dd className="eg-label-lg text-[#002131] mt-0.5">{value}</dd></div>
  </div>
);

const Hotels = ({ hotels }) => (
  <div className="flex flex-col gap-4" data-testid="inc-hotels">
    {hotels.map((h, i) => (
      <article key={i} className="rounded-2xl border border-[#DAD7CB] bg-white overflow-hidden flex flex-col sm:flex-row" data-testid={`inc-hotel-${i + 1}`}>
        {h.image ? <img src={h.image} alt={h.name} className="w-full sm:w-48 h-44 sm:h-auto object-cover shrink-0" loading="lazy" /> : <div className="w-full sm:w-48 h-28 sm:h-auto bg-[#EFEDE4] text-[#174358] flex items-center justify-center shrink-0"><BedDouble size={32} /></div>}
        <div className="flex-1 min-w-0 p-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <p className="eg-label-md uppercase tracking-[0.08em] text-[#1F6F94]">{h.city} · {h.dayLabel}</p>
            <h3 className="eg-title-lg text-[#002131]" data-testid={`inc-hotel-name-${i + 1}`}>{h.name}</h3>
            <p className="flex flex-wrap items-center gap-2 eg-label-lg text-[#174358]">{h.stars && <Stars n={h.stars} />}<span>{h.stars ? `${h.stars} star hotel` : 'Hotel'} · or similar</span></p>
          </div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4 border-t border-[#E4E3DB]">
            <Spec icon={Moon} label="Your stay" value={`${h.nights} nights`} />
            <Spec icon={BedDouble} label="Room" value={h.room} />
            <Spec icon={Coffee} label="Meals" value={`${h.meal} daily`} />
            <Spec icon={CalendarDays} label={h.from ? 'Check-in to check-out' : 'Days'} value={h.from ? `${fmtDate(h.from, short)} to ${fmtDate(h.to, short)}` : h.dayLabel} />
          </dl>
          {h.blurb && <p className="eg-body-md text-[#174358]">{h.blurb}</p>}
          {h.similar > 0 && <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('ht-similar-hotels', { detail: h.city }))} className="self-start inline-flex items-center gap-1.5 eg-label-lg text-[#1F6F94] underline underline-offset-4 hover:text-[#002131]" data-testid={`inc-hotel-similar-${i + 1}`}>View all similar hotels in {h.city}<ChevronDown size={16} /></button>}
        </div>
      </article>
    ))}
  </div>
);

const Activities = ({ product }) => (
  <ul className="flex flex-col gap-4" data-testid="inc-activities">
    {product.included.map((a) => (
      <li key={a.name} className="rounded-2xl border border-[#DAD7CB] bg-white overflow-hidden flex flex-col sm:flex-row">
        {a.image && <img src={a.image} alt={a.name} className="w-full sm:w-48 h-44 sm:h-auto object-cover shrink-0" loading="lazy" />}
        <div className="flex-1 min-w-0 p-5 flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <p className="eg-label-md uppercase tracking-[0.08em] text-[#1F6F94]">Day {a.day}</p>
            <h3 className="eg-title-lg text-[#002131]">{a.name}</h3>
          </div>
          {a.description && <p className="eg-body-md text-[#174358]">{a.description}</p>}
          {a.includes && (
            <div className="pt-3 border-t border-[#E4E3DB] flex flex-col gap-2">
              <p className="eg-label-md uppercase tracking-[0.08em] text-[#1F6F94]">What is included</p>
              <ul className="flex flex-col gap-1.5">{a.includes.map((x) => <li key={x} className="flex items-start gap-2 eg-label-lg text-[#002131]"><Check size={16} strokeWidth={2.5} className="text-[#1E7B4B] mt-0.5 shrink-0" />{x}</li>)}</ul>
            </div>
          )}
        </div>
      </li>
    ))}
  </ul>
);

const Transfers = ({ product, car }) => (product.transferDetails ? (
  <ul className="flex flex-col gap-4" data-testid="inc-transfers">
    {product.transferDetails.map((t) => (
      <li key={`${t.day}-${t.title}`} className="rounded-2xl border border-[#DAD7CB] bg-white p-5 flex flex-col gap-4" data-testid={`inc-transfer-day-${t.day}`}>
        <div className="flex items-center gap-3">
          <Tile icon={/airport/i.test(t.title) ? Plane : Car} tone="transfer" />
          <div className="min-w-0"><p className="eg-label-md uppercase tracking-[0.08em] text-[#1F6F94]">Day {t.day}</p><h3 className="eg-title-md text-[#002131]">{t.title}</h3></div>
        </div>
        <dl className="grid sm:grid-cols-3 gap-x-6 gap-y-4 pt-4 border-t border-[#E4E3DB]">
          <Spec icon={MapPin} label="Route" value={<>{t.from}<span className="text-[#1F6F94]"> → </span>{t.to}</>} />
          <Spec icon={Car} label="Your car" value={car ? `${car}, private and air conditioned` : 'Private air conditioned car'} />
          <Spec icon={Info} label="Good to know" value={t.note} />
        </dl>
      </li>
    ))}
  </ul>
) : (
  <ul className="flex flex-col gap-3" data-testid="inc-transfers">
    <Item icon={Car} tone="transfer" title={product.transport} />
    {product.transfers.map((t, i) => <Item key={i} icon={/airport/i.test(t.text) ? Plane : Car} tone="transfer" title={t.text} sub={t.day} />)}
  </ul>
));

const Meals = ({ product }) => (product.mealsByDay ? (
  <div className="flex flex-col gap-4" data-testid="inc-meals">
    <ul className="rounded-2xl border border-[#DAD7CB] bg-white divide-y divide-[#E4E3DB]">
      {product.mealsByDay.map((m) => (
        <li key={m.day} className="flex items-center gap-4 px-5 py-4" data-testid={`inc-meal-day-${m.day}`}>
          <Chip>Day {m.day}</Chip>
          <p className="flex-1 eg-label-lg text-[#002131]">{m.text}</p>
          <span className="inline-flex items-center gap-1.5 eg-label-lg text-[#1E7B4B]"><Check size={16} strokeWidth={2.5} />Included</span>
        </li>
      ))}
    </ul>
    {product.mealsNote && <p className="eg-body-md text-[#174358]">{product.mealsNote}</p>}
  </div>
) : (
  <ul className="flex flex-col gap-3" data-testid="inc-meals">
    {(product.mealsList.length ? product.mealsList : [product.meals]).map((m) => <Item key={m} icon={Utensils} tone="meal" title={m} />)}
  </ul>
));

const Block = ({ id, title, children }) => (
  <div id={`inc-sec-${id}`} className="flex flex-col gap-4 scroll-mt-20" data-testid={`inc-sec-${id}`}>
    <h3 className="eg-title-lg text-[#002131]">{title}</h3>
    {children}
  </div>
);

export const InclusionTabs = ({ product, date, id, rooms, title = 'Inclusions' }) => {
  const stays = useStays(product, date, rooms);
  const hotels = hotelRows(product, date, stays);
  const car = carFor(product, rooms);
  const go = (t) => { const el = document.getElementById(`inc-sec-${t}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' }); };
  return (
    <section id={id} className="flex flex-col gap-8 scroll-mt-20" data-testid="book-inclusion-tabs">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <h2 className="eg-headline-md text-[#002131]">{title}</h2>
          <p className="eg-body-lg text-[#174358]">Everything below is part of your price. Scroll through, or jump to a part.</p>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {TABS.map(({ id: t, label, icon: Icon }) => (
            <button key={t} type="button" onClick={() => go(t)} className="shrink-0 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[#E3F1F8] eg-label-lg text-[#1F6F94] hover:bg-[#1F6F94] hover:text-white transition-colors" data-testid={`inc-tab-${t}`}>
              <Icon size={16} />{label}
            </button>
          ))}
        </div>
      </div>
      <Block id="all" title="All inclusions, day by day"><AllDays product={product} date={date} hotels={hotels} car={car} /></Block>
      <Block id="hotels" title="Hotels"><Hotels hotels={hotels} /></Block>
      <Block id="activities" title="Included activities"><Activities product={product} /></Block>
      <Block id="transfers" title="Transfers"><Transfers product={product} car={car} /></Block>
      <Block id="meals" title="Meals"><Meals product={product} /></Block>
    </section>
  );
};
