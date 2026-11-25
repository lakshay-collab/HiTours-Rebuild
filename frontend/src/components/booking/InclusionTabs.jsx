import React, { useState } from 'react';
import { BedDouble, Camera, Car, Check, ChevronDown, Utensils } from 'lucide-react';
import { addDays, fmtDate, toISO, useLive, decodeRooms } from '../../booking/bookable';

const short = { day: 'numeric', month: 'short' };
const nightsOf = (h) => Number(h.description.match(/(\d+) night/)[1]);

const Tick = ({ children }) => <li className="flex items-start gap-2 eg-body-md text-[#002131]"><Check size={15} strokeWidth={2.5} className="text-[#1E7B4B] mt-1 shrink-0" /><span>{children}</span></li>;

const DEFAULT_ROOMS = decodeRooms('');
const useStays = (product, date, rooms) => {
  const cal = useLive(product, rooms || DEFAULT_ROOMS);
  return (date && cal?.dates[toISO(date)]?.stays) || null;
};

const HotelList = ({ product, date, stays }) => {
  let cursor = date ? new Date(date) : null;
  return (
    <ul className="flex flex-col gap-3">
      {product.hotels.map((h, i) => {
        const parts = h.description.split(' · ');
        const n = nightsOf(h);
        const from = cursor ? new Date(cursor) : null;
        if (cursor) cursor = addDays(cursor, n);
        const stay = (stays || []).find((x) => x.area === h.city);
        const swapped = stay && !h.name.toLowerCase().startsWith(stay.name.toLowerCase().split(' ').slice(0, 2).join(' '));
        const upgraded = swapped && !h.description.includes(`${stay.star}★`);
        return (
          <li key={h.name} className="flex items-center gap-3" data-testid={`inc-hotel-${i + 1}`}>
            {swapped ? <span className="w-12 h-12 rounded-lg bg-[#F0EEE6] text-[#174358] flex items-center justify-center shrink-0"><BedDouble size={20} /></span> : h.image && <img src={h.image} alt={h.name} className="w-12 h-12 rounded-lg object-cover shrink-0" loading="lazy" />}
            <div className="min-w-0">
              <p className="eg-label-lg text-[#002131]" data-testid={`inc-hotel-name-${i + 1}`}>{swapped ? `${stay.name} or similar` : h.name}{upgraded && <span className="ml-2 inline-block eg-label-md text-[#1E7B4B] bg-[#EAF6EE] rounded-full px-2 py-0.5 align-middle">{stay.star}★ for your dates</span>}</p>
              <p className="eg-label-md text-[#5B6B74]">{n} nights in {h.city} · {swapped ? `Breakfast · ${stay.room} · ${stay.star}★` : parts.slice(1, 4).join(' · ')}{from ? ` · ${fmtDate(from, short)} to ${fmtDate(cursor, short)}` : ''}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const sections = (product, date, stays) => [
  { id: 'hotels', icon: BedDouble, title: 'Hotels', count: `${product.nights} nights`, body: <HotelList product={product} date={date} stays={stays} /> },
  { id: 'activities', icon: Camera, title: 'Included activities', count: `${product.included.length} activities`, body: <ul className="flex flex-col gap-1.5">{product.included.map((a) => <Tick key={a.name}>{a.name} <span className="text-[#5B6B74]">· Day {a.day}</span></Tick>)}</ul> },
  { id: 'transfers', icon: Car, title: 'Transfers', count: `${product.counts.transfers} private`, body: <ul className="flex flex-col gap-1.5">{(product.transferList || [product.transport]).map((t) => <Tick key={t}>{t}</Tick>)}</ul> },
  { id: 'meals', icon: Utensils, title: 'Meals', count: `${product.counts.meals} meals`, body: <ul className="flex flex-col gap-1.5">{(product.mealsList.length ? product.mealsList.filter((m) => !/not included/i.test(m)) : [product.meals]).map((m) => <Tick key={m}>{m}</Tick>)}</ul> },
];

const IconTile = ({ icon: Icon }) => <span className="w-9 h-9 rounded-full bg-[#174358] text-white flex items-center justify-center shrink-0"><Icon size={17} /></span>;

// Product page: four calm cards, everything visible at a glance.
export const InclusionTabs = ({ product, date, id, rooms }) => {
  const stays = useStays(product, date, rooms);
  return (
  <section id={id} className="flex flex-col gap-4 scroll-mt-4" data-testid="book-inclusion-tabs">
    <div className="flex flex-col gap-1">
      <h2 className="eg-headline-md text-[#002131]">Inclusions</h2>
      <p className="eg-body-md text-[#5B6B74]">Everything below is part of your price. No hidden extras.</p>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      {sections(product, date, stays).map((s) => (
        <div key={s.id} className="bg-white rounded-2xl border border-[#E4E3DB] p-5 flex flex-col gap-4" data-testid={`inc-card-${s.id}`}>
          <div className="flex items-center gap-3">
            <IconTile icon={s.icon} />
            <h3 className="eg-title-md text-[#002131] flex-1">{s.title}</h3>
            <span className="eg-label-md text-[#174358] bg-[#F0EEE6] rounded-full px-2.5 py-1">{s.count}</span>
          </div>
          {s.body}
        </div>
      ))}
    </div>
  </section>
  );
};

// Checkout: the same inclusions as tidy rows that open on tap.
export const InclusionAccordion = ({ product, date, rooms }) => {
  const [open, setOpen] = useState('hotels');
  const stays = useStays(product, date, rooms);
  return (
    <div className="flex flex-col" data-testid="checkout-included">
      <p className="eg-label-lg text-[#002131] pb-1">Everything included in your holiday</p>
      <ul className="flex flex-col divide-y divide-[#E4E3DB]">
        {sections(product, date, stays).map((s) => {
          const on = open === s.id;
          return (
            <li key={s.id} data-testid={`checkout-inc-${s.id}`}>
              <button type="button" onClick={() => setOpen(on ? null : s.id)} aria-expanded={on} className="w-full flex items-center gap-3 py-3 text-left" data-testid={`checkout-inc-toggle-${s.id}`}>
                <s.icon size={18} className="text-[#174358] shrink-0" />
                <span className="flex-1 eg-label-lg text-[#002131]">{s.title}</span>
                <span className="eg-label-md text-[#5B6B74]">{s.count}</span>
                <ChevronDown size={16} className={`text-[#5B6B74] transition-transform ${on ? 'rotate-180' : ''}`} />
              </button>
              {on && <div className="pb-4 pl-[30px]">{s.body}</div>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
