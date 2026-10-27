import React, { useState } from 'react';
import { BedDouble, Camera, Car, Check, ChevronDown, LayoutList } from 'lucide-react';
import { addDays, fmtDate } from '../../booking/bookable';

const TABS = [
  { id: 'all', label: 'All, day by day', icon: LayoutList },
  { id: 'hotels', label: 'Your Hotels', icon: BedDouble },
  { id: 'experiences', label: 'Your Experiences', icon: Camera },
  { id: 'transfers', label: 'Your Transfers', icon: Car },
];
const PREVIEW_DAYS = 3;

const hotelMeta = (h) => {
  const parts = h.description.split(' · ');
  const stars = parts.find((p) => /★/.test(p)) || '';
  const [name, city] = h.name.split(', ');
  return { parts, stars, name, city: city || h.city };
};
const HotelName = ({ h }) => { const { stars, name, city } = hotelMeta(h); return <>{name}{city ? `, ${city}` : ''} <span className="text-[#6F777C] font-normal">(or similar{stars ? ` ${stars}` : ''})</span></>; };

const Row = ({ icon: Icon, color, children, testId }) => <li className="flex items-start gap-2.5 eg-body-md text-[#002131]" data-testid={testId}><Icon size={16} className={`${color} mt-1 shrink-0`} /><span>{children}</span></li>;

const AllDays = ({ product, date, expanded, onToggle }) => {
  const days = expanded ? product.dayPlan : product.dayPlan.slice(0, PREVIEW_DAYS);
  return (
    <div className="flex flex-col gap-3" data-testid="inc-all">
      <ul className="flex flex-col divide-y divide-[#E4E3DB]">
        {days.map((p) => (
          <li key={p.day} className="py-3 first:pt-0 flex flex-col gap-2" data-testid={`inc-all-day-${p.day}`}>
            <p className="eg-label-lg text-[#002131]"><span className="inline-flex items-center justify-center h-6 px-2.5 rounded-full bg-[#308BB6] text-white eg-label-md mr-2">Day {p.day}</span>{p.title}{date && <span className="eg-label-md text-[#6F777C] font-normal"> · {fmtDate(addDays(date, p.day - 1), { weekday: 'short', day: 'numeric', month: 'short' })}</span>}</p>
            <ul className="flex flex-col gap-1.5 pl-1">
              {p.transfers.map((t) => <Row key={t} icon={Car} color="text-[#FB7F26]">{t}</Row>)}
              {p.experiences.map((e) => <Row key={e} icon={Camera} color="text-[#308BB6]">{e}</Row>)}
              {p.hotel ? <Row icon={BedDouble} color="text-[#174358]">Overnight at <HotelName h={p.hotel} /></Row> : <Row icon={Check} color="text-[#6F777C]">Departure day, no overnight</Row>}
            </ul>
          </li>
        ))}
      </ul>
      {product.dayPlan.length > PREVIEW_DAYS && (
        <button type="button" onClick={onToggle} className="self-start inline-flex items-center gap-1.5 eg-label-lg text-[#174358] hover:text-[#002131]" data-testid="inc-all-toggle" aria-expanded={expanded}>
          {expanded ? 'Show less' : `Show all ${product.dayPlan.length} days`}<ChevronDown size={16} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      )}
    </div>
  );
};

const Hotels = ({ product, date }) => {
  let cursor = date ? new Date(date) : null;
  return (
    <ul className="flex flex-col divide-y divide-[#E4E3DB]" data-testid="inc-hotels">
      {product.hotels.map((h, i) => {
        const { parts } = hotelMeta(h);
        const nights = Number(h.description.match(/(\d+) night/)[1]);
        const from = cursor ? new Date(cursor) : null;
        const to = cursor ? addDays(cursor, nights) : null;
        if (cursor) cursor = to;
        return (
          <li key={i} className="flex gap-3 py-3 first:pt-0 last:pb-0" data-testid={`inc-hotel-${i + 1}`}>
            {h.image && <img src={h.image} alt={h.name} className="w-16 h-16 rounded-xl object-cover shrink-0" loading="lazy" />}
            <div className="min-w-0 flex flex-col gap-0.5">
              <p className="eg-label-lg text-[#002131]"><HotelName h={h} /></p>
              <p className="eg-label-md text-[#6F777C]">{h.dayLabel} · {parts.slice(0, 3).join(' · ')}</p>
              {from && <p className="eg-label-md text-[#174358]">Check-in {fmtDate(from, { day: 'numeric', month: 'short' })} → check-out {fmtDate(to, { day: 'numeric', month: 'short' })}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Experiences = ({ product }) => (
  <ul className="flex flex-col gap-2" data-testid="inc-experiences">
    {product.included.map((a, i) => <Row key={i} icon={Check} color="text-[#308BB6]"><span className="text-[#6F777C]">Day {a.day}:</span> {a.name}</Row>)}
    <Row icon={Check} color="text-[#308BB6]">{product.meals} and 24/7 on-ground support</Row>
  </ul>
);

const Transfers = ({ product }) => (
  <div className="flex flex-col gap-3" data-testid="inc-transfers">
    <p className="eg-body-md text-[#174358] rounded-xl bg-[#FBEADB] px-3 py-2">{product.transport}</p>
    <ul className="flex flex-col gap-2">
      {product.transfers.map((t, i) => <Row key={i} icon={Car} color="text-[#FB7F26]"><span className="text-[#6F777C]">{t.day}:</span> {t.text}</Row>)}
    </ul>
  </div>
);

export const InclusionTabs = ({ product, date }) => {
  const [tab, setTab] = useState('all');
  const [expanded, setExpanded] = useState(false);
  const counts = { all: product.dayPlan.length, hotels: product.hotels.length, experiences: product.included.length, transfers: product.transfers.length };
  return (
    <section className="bg-white rounded-2xl border border-[#C4CBD0] p-4 md:p-5 flex flex-col gap-4" data-testid="book-inclusion-tabs">
      <div className="flex flex-col gap-1">
        <h2 className="eg-title-lg text-[#002131]">Everything included in your holiday</h2>
        <p className="eg-label-md text-[#6F777C]">{product.hotels.length} hotels · {product.included.length} experiences · {product.transfers.length} private transfers · {product.meals}</p>
      </div>
      <div role="tablist" className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button key={id} type="button" role="tab" aria-selected={tab === id} onClick={() => setTab(id)} className={`shrink-0 inline-flex items-center gap-2 h-10 px-4 rounded-full eg-label-lg transition-colors ${tab === id ? 'bg-[#174358] text-white' : 'bg-white border border-[#C4CBD0] text-[#174358] hover:border-[#174358]'}`} data-testid={`inc-tab-${id}`}>
            <Icon size={16} />{label}<span className={`eg-label-md ${tab === id ? 'text-white/70' : 'text-[#6F777C]'}`}>{counts[id]}</span>
          </button>
        ))}
      </div>
      {tab === 'all' && <AllDays product={product} date={date} expanded={expanded} onToggle={() => setExpanded((v) => !v)} />}
      {tab === 'hotels' && <Hotels product={product} date={date} />}
      {tab === 'experiences' && <Experiences product={product} />}
      {tab === 'transfers' && <Transfers product={product} />}
    </section>
  );
};
