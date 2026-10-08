import React, { useState } from 'react';
import { Check, Search } from 'lucide-react';
import { ChevronDown } from '../egypt/EgyptIcons';
import { NavIcon } from '../egypt/EgyptNavIcons';
import { GROUP_LABELS } from '../../holidays/filterModel';

const Section = ({ id, title, children, defaultOpen = true, testPrefix }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#E4E3DB] py-5 first:pt-0 last:border-b-0" data-testid={`${testPrefix}-section-${id}`}>
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className="w-full flex items-center justify-between gap-3 text-left" data-testid={`${testPrefix}-section-${id}-toggle`}>
        <span className="eg-title-md text-[#002131]">{title}</span>
        <ChevronDown size={20} className={`text-[#174358] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-200 ease-out ${open ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

const CheckRow = ({ item, checked, onToggle, icon, testId }) => (
  <button type="button" role="checkbox" aria-checked={checked} onClick={onToggle} disabled={!checked && item.count === 0}
    className={`w-full flex items-center gap-3 py-2 text-left group disabled:opacity-40 disabled:cursor-not-allowed`} data-testid={testId}>
    <span className={`w-5 h-5 shrink-0 rounded-[5px] border flex items-center justify-center transition-colors ${checked ? 'bg-[#174358] border-[#174358] text-white' : 'border-[#9AA3A8] bg-white group-hover:border-[#174358]'}`} aria-hidden>
      {checked && <Check size={14} strokeWidth={3} />}
    </span>
    {icon && <NavIcon name={icon} size={18} className="text-[#174358] shrink-0" />}
    <span className={`flex-1 eg-body-lg text-[#002131] truncate ${checked ? 'font-semibold' : ''}`}>{item.label}</span>
    <span className="eg-body-md text-[#6F777C] tabular-nums">({item.count})</span>
  </button>
);

const ChipToggle = ({ item, checked, onToggle, testId }) => (
  <button type="button" aria-pressed={checked} onClick={onToggle} disabled={!checked && item.count === 0}
    className={`inline-flex items-center gap-1.5 h-10 px-3.5 rounded-full border eg-label-lg whitespace-nowrap transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${checked ? 'border-transparent eg-grad-harbor text-white shadow-[0_2px_8px_rgba(23,67,88,0.3)]' : 'border-[#C4CBD0] bg-white text-[#002131] hover:border-[#174358]'}`} data-testid={testId}>
    {item.label}
    <span className={`tabular-nums ${checked ? 'text-white/80' : 'text-[#6F777C]'}`}>({item.count})</span>
  </button>
);

function DestinationList({ items, selected, onToggle, testPrefix }) {
  const [q, setQ] = useState('');
  const shown = items.filter((i) => i.label.toLowerCase().includes(q.trim().toLowerCase()));
  return (
    <div>
      {items.length > 6 && (
        <label className="flex items-center gap-2 h-11 px-4 mb-2 rounded-xl border border-[#C4CBD0] bg-white focus-within:border-[#174358] transition-colors">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" className="flex-1 min-w-0 bg-transparent outline-none eg-body-lg text-[#002131] placeholder:text-[#6F777C]" data-testid={`${testPrefix}-place-search`} />
          <Search size={18} className="text-[#174358] shrink-0" aria-hidden />
        </label>
      )}
      <div className="max-h-[296px] overflow-y-auto pr-1 no-scrollbar" data-testid={`${testPrefix}-place-list`}>
        {shown.map((it) => <CheckRow key={it.value} item={it} checked={selected.includes(it.value)} onToggle={() => onToggle('place', it.value)} testId={`${testPrefix}-place-option`} />)}
        {!shown.length && <p className="py-2 eg-body-md text-[#6F777C]" data-testid={`${testPrefix}-place-empty`}>No destination matches “{q}”.</p>}
      </div>
    </div>
  );
}

export default function HolidayFilterPanel({ facets, sel, onToggle, testPrefix = 'hf' }) {
  return (
    <div data-testid={`${testPrefix}-panel`}>
      <Section id="theme" title={GROUP_LABELS.theme} testPrefix={testPrefix}>
        <div className="flex flex-col">
          {facets.theme.map((it) => <CheckRow key={it.value} item={it} icon={it.icon} checked={sel.theme.includes(it.value)} onToggle={() => onToggle('theme', it.value)} testId={`${testPrefix}-theme-option`} />)}
        </div>
      </Section>
      <Section id="place" title={GROUP_LABELS.place} testPrefix={testPrefix}>
        <DestinationList items={facets.place} selected={sel.place} onToggle={onToggle} testPrefix={testPrefix} />
      </Section>
      <Section id="days" title={GROUP_LABELS.days} testPrefix={testPrefix}>
        <div className="flex flex-wrap gap-2">
          {facets.days.map((it) => <ChipToggle key={it.value} item={it} checked={sel.days.includes(it.value)} onToggle={() => onToggle('days', it.value)} testId={`${testPrefix}-days-option`} />)}
        </div>
      </Section>
      <Section id="price" title={GROUP_LABELS.price} testPrefix={testPrefix}>
        <div className="flex flex-wrap gap-2">
          {facets.price.map((it) => <ChipToggle key={it.value} item={it} checked={sel.price.includes(it.value)} onToggle={() => onToggle('price', it.value)} testId={`${testPrefix}-price-option`} />)}
        </div>
      </Section>
    </div>
  );
}
