import React, { useState } from 'react';
import { BedDouble, CalendarDays, Camera, Car, Check, Coffee, LayoutList, Moon, Plane, Star, Utensils } from 'lucide-react';
import { addDays, fmtDate, toISO, useLive, decodeRooms } from '../../booking/bookable';

const short = { day: 'numeric', month: 'short' };
const DEFAULT_ROOMS = decodeRooms('');
const TABS = [
  { id: 'all', label: 'All inclusions', icon: LayoutList },
  { id: 'hotels', label: 'Hotels', icon: BedDouble },
  { id: 'activities', label: 'Activities', icon: Camera },
  { id: 'transfers', label: 'Transfers', icon: Car },
  { id: 'meals', label: 'Meals', icon: Utensils },
];
const TONE = {
  transfer: 'bg-[#FFF1E8] text-[#C8501C]',
  activity: 'bg-[#E3F1F8] text-[#1F6F94]',
  meal: 'bg-[#E6F4EA] text-[#1E7B4B]',
  hotel: 'bg-[#EFEDE4] text-[#174358]',
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
      blurb: swapped ? '' : parts[4] || '',
    };
  });
};

const Chip = ({ children }) => <span className="inline-flex items-center h-7 px-3 rounded-full bg-[#174358] text-white eg-label-lg shrink-0">{children}</span>;
const Tile = ({ icon: Icon, tone }) => <span className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${TONE[tone]}`}><Icon size={18} /></span>;
const Item = ({ icon, tone, title, sub }) => (
  <li className="flex items-start gap-3">
    <Tile icon={icon} tone={tone} />
    <div className="min-w-0 pt-0.5"><p className="eg-label-lg text-[#002131]">{title}</p>{sub && <p className="eg-body-md text-[#174358] mt-0.5">{sub}</p>}</div>
  </li>
);
const Stars = ({ n }) => <span className="inline-flex items-center gap-0.5" aria-label={`${n} star`}>{Array.from({ length: n }, (_, i) => <Star key={i} size={14} className="fill-[#F5A623] text-[#F5A623]" />)}</span>;

const AllDays = ({ product, date, hotels }) => (
  <ol className="flex flex-col gap-4" data-testid="inc-all">
    {product.dayPlan.map((p) => {
      const transfers = product.transferDetails ? product.transferDetails.filter((t) => t.day === p.day) : p.transfers.map((t) => ({ title: t }));
      const meal = (product.mealsByDay || []).find((m) => m.day === p.day && m.included);
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
            {p.experiences.map((e) => <Item key={e} icon={Camera} tone="activity" title={e} />)}
            {hotel ? <Item icon={Moon} tone="hotel" title={`Overnight in ${p.city} at ${hotel.name} or similar`} sub={`${hotel.room}${hotel.stars ? ` · ${hotel.stars} star` : ''}`} /> : <Item icon={Check} tone="hotel" title="Departure day, no overnight stay" />}
          </ul>
        </li>
      );
    })}
  </ol>
);

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
        </div>
      </article>
    ))}
  </div>
);

const Activities = ({ product }) => (
  <ul className="flex flex-col gap-4" data-testid="inc-activities">
    {product.included.map((a) => (
      <li key={a.name} className="rounded-2xl border border-[#DAD7CB] bg-white p-5 flex items-start gap-4">
        <Tile icon={Camera} tone="activity" />
        <div className="min-w-0 flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1"><h3 className="eg-title-md text-[#002131]">{a.name}</h3><span className="eg-label-lg text-[#1F6F94]">Day {a.day}</span></div>
          {a.description && <p className="eg-body-md text-[#174358]">{a.description}</p>}
        </div>
      </li>
    ))}
  </ul>
);

const Transfers = ({ product }) => (product.transferDetails ? (
  <ul className="flex flex-col gap-4" data-testid="inc-transfers">
    {product.transferDetails.map((t) => (
      <li key={`${t.day}-${t.title}`} className="rounded-2xl border border-[#DAD7CB] bg-white p-5 flex items-start gap-4">
        <Tile icon={/airport/i.test(t.title) ? Plane : Car} tone="transfer" />
        <div className="min-w-0 flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1"><h3 className="eg-title-md text-[#002131]">{t.title}</h3><span className="eg-label-lg text-[#1F6F94]">Day {t.day}</span></div>
          <p className="eg-label-lg text-[#002131]">{t.route}</p>
          <p className="eg-body-md text-[#174358]">{t.text}</p>
        </div>
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
          <p className={`flex-1 eg-label-lg ${m.included ? 'text-[#002131]' : 'text-[#174358]'}`}>{m.text}</p>
          {m.included && <span className="inline-flex items-center gap-1.5 eg-label-lg text-[#1E7B4B]"><Check size={16} strokeWidth={2.5} />Included</span>}
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

export const InclusionTabs = ({ product, date, id, rooms, title = 'Inclusions' }) => {
  const [tab, setTab] = useState('all');
  const stays = useStays(product, date, rooms);
  const hotels = hotelRows(product, date, stays);
  return (
    <section id={id} className="flex flex-col gap-5 scroll-mt-4" data-testid="book-inclusion-tabs">
      <div className="flex flex-col gap-1.5">
        <h2 className="eg-headline-md text-[#002131]">{title}</h2>
        <p className="eg-body-lg text-[#174358]">Everything below is part of your price. See it day by day, or by type.</p>
      </div>
      <div role="tablist" className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        {TABS.map(({ id: t, label, icon: Icon }) => (
          <button key={t} type="button" role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={`shrink-0 inline-flex items-center gap-2 h-11 px-5 rounded-full eg-label-lg transition-colors ${tab === t ? 'bg-[#174358] text-white' : 'bg-white border border-[#C4CBD0] text-[#174358] hover:border-[#174358]'}`} data-testid={`inc-tab-${t}`}>
            <Icon size={17} />{label}
          </button>
        ))}
      </div>
      {tab === 'all' && <AllDays product={product} date={date} hotels={hotels} />}
      {tab === 'hotels' && <Hotels hotels={hotels} />}
      {tab === 'activities' && <Activities product={product} />}
      {tab === 'transfers' && <Transfers product={product} />}
      {tab === 'meals' && <Meals product={product} />}
    </section>
  );
};
