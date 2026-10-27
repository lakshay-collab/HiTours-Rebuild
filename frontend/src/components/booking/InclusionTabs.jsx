import React, { useState } from 'react';
import { BedDouble, Camera, Car, Check } from 'lucide-react';
import { addDays, fmtDate } from '../../booking/bookable';

const TABS = [
  { id: 'hotels', label: 'Your Hotels', icon: BedDouble },
  { id: 'experiences', label: 'Your Experiences', icon: Camera },
  { id: 'transfers', label: 'Your Transfers', icon: Car },
];

const hotelMeta = (h) => {
  const parts = h.description.split(' · ');
  const stars = parts.find((p) => /★/.test(p)) || '';
  const [name, city] = h.name.split(', ');
  return { parts, stars, name, city: city || h.city };
};

const Hotels = ({ product, date }) => {
  let cursor = date ? new Date(date) : null;
  return (
    <ul className="flex flex-col divide-y divide-[#E4E3DB]" data-testid="inc-hotels">
      {product.hotels.map((h, i) => {
        const { parts, stars, name, city } = hotelMeta(h);
        const nights = Number(h.description.match(/(\d+) night/)[1]);
        const from = cursor ? new Date(cursor) : null;
        const to = cursor ? addDays(cursor, nights) : null;
        if (cursor) cursor = to;
        return (
          <li key={i} className="flex gap-3 py-3 first:pt-0 last:pb-0" data-testid={`inc-hotel-${i + 1}`}>
            {h.image && <img src={h.image} alt={h.name} className="w-16 h-16 rounded-xl object-cover shrink-0" loading="lazy" />}
            <div className="min-w-0 flex flex-col gap-0.5">
              <p className="eg-label-lg text-[#002131]">{name}{city ? `, ${city}` : ''} <span className="text-[#6F777C] font-normal">(or similar{stars ? ` ${stars}` : ''})</span></p>
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
    {product.included.map((a, i) => <li key={i} className="flex items-start gap-2.5 eg-body-md text-[#002131]"><Check size={16} className="text-[#308BB6] mt-1 shrink-0" /><span><span className="text-[#6F777C]">Day {a.day}:</span> {a.name}</span></li>)}
    <li className="flex items-start gap-2.5 eg-body-md text-[#002131]"><Check size={16} className="text-[#308BB6] mt-1 shrink-0" /><span>{product.meals} and 24/7 on-ground support</span></li>
  </ul>
);

const Transfers = ({ product }) => (
  <div className="flex flex-col gap-3" data-testid="inc-transfers">
    <p className="eg-body-md text-[#174358] rounded-xl bg-[#FBEADB] px-3 py-2">{product.transport}</p>
    <ul className="flex flex-col gap-2">
      {product.transfers.map((t, i) => <li key={i} className="flex items-start gap-2.5 eg-body-md text-[#002131]"><Car size={16} className="text-[#FB7F26] mt-1 shrink-0" /><span><span className="text-[#6F777C]">{t.day}:</span> {t.text}</span></li>)}
    </ul>
  </div>
);

export const InclusionTabs = ({ product, date }) => {
  const [tab, setTab] = useState('hotels');
  const counts = { hotels: product.hotels.length, experiences: product.included.length, transfers: product.transfers.length };
  return (
    <section className="bg-white rounded-2xl border border-[#C4CBD0] p-4 md:p-5 flex flex-col gap-4" data-testid="book-inclusion-tabs">
      <div role="tablist" className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button key={id} type="button" role="tab" aria-selected={tab === id} onClick={() => setTab(id)} className={`shrink-0 inline-flex items-center gap-2 h-10 px-4 rounded-full eg-label-lg transition-colors ${tab === id ? 'bg-[#174358] text-white' : 'bg-white border border-[#C4CBD0] text-[#174358] hover:border-[#174358]'}`} data-testid={`inc-tab-${id}`}>
            <Icon size={16} />{label}<span className={`eg-label-md ${tab === id ? 'text-white/70' : 'text-[#6F777C]'}`}>{counts[id]}</span>
          </button>
        ))}
      </div>
      {tab === 'hotels' && <Hotels product={product} date={date} />}
      {tab === 'experiences' && <Experiences product={product} />}
      {tab === 'transfers' && <Transfers product={product} />}
    </section>
  );
};
