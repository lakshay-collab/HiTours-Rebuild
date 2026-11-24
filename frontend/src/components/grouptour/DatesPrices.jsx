import React, { useMemo, useState } from 'react';
import { fmtInr, fmtDate, monthKey, monthLabel, fromISO } from '../../grouptours/groupBooking';

export const StatusBadge = ({ dep, className = '' }) => {
  if (dep.status === 'sold_out') return <span className={`inline-flex items-center rounded-full bg-[#E4E3DB] px-2.5 py-1 eg-label-md text-[#6F777C] ${className}`}>Sold out</span>;
  if (dep.status === 'limited') return <span className={`inline-flex items-center rounded-full bg-[#FBEADB] px-2.5 py-1 eg-label-md text-[#C84D1B] ${className}`}>Filling fast · {dep.seats_left} left</span>;
  if (dep.guaranteed) return <span className={`inline-flex items-center rounded-full bg-[#E0F7FF] px-2.5 py-1 eg-label-md text-[#174358] ${className}`}>Guaranteed departure</span>;
  return <span className={`inline-flex items-center rounded-full bg-[#F0EEE6] px-2.5 py-1 eg-label-md text-[#174358] ${className}`}>{dep.seats_left} seats left</span>;
};

const DateBlock = ({ iso }) => {
  const d = fromISO(iso);
  return (
    <div className="flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-[#174358] text-white shrink-0">
      <span className="eg-headline-md leading-none">{d.getDate()}</span>
      <span className="text-[11px] uppercase tracking-wide leading-none mt-1">{d.toLocaleDateString('en-GB', { month: 'short' })}</span>
    </div>
  );
};

export const DepartureRow = ({ dep, onPick, compact = false, selected = false }) => {
  const sold = dep.status === 'sold_out';
  return (
    <li className={`rounded-2xl border bg-white transition-colors ${selected ? 'border-[#174358] ring-2 ring-[#174358]/15' : sold ? 'border-[#E4E3DB]' : 'border-[#C4CBD0]'} ${sold ? 'opacity-60' : ''}`} data-testid={`departure-${dep.id}`} data-status={dep.status}>
      <button type="button" disabled={sold} onClick={() => onPick(dep)} className="w-full text-left p-3 md:p-4 flex items-center gap-3 md:gap-4 disabled:cursor-not-allowed" data-testid={`departure-${dep.id}-book`}>
        <DateBlock iso={dep.start} />
        <div className="flex-1 min-w-0">
          <p className="eg-title-md text-[#002131] truncate">{fmtDate(dep.start, { day: 'numeric', month: 'short' })} – {fmtDate(dep.end, { day: 'numeric', month: 'short', year: 'numeric' })}</p>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <StatusBadge dep={dep} />
            {!compact && <span className="eg-label-md text-[#6F777C]">Trip price {fmtInr(dep.price)} pp</span>}
          </div>
        </div>
        <div className="text-right shrink-0">
          {sold ? <span className="eg-label-lg text-[#6F777C]">Sold out</span> : (
            <>
              <p className="eg-label-md text-[#6F777C]">Pay today</p>
              <p className="eg-title-lg text-[#002131]">{fmtInr(dep.deposit_pp)}</p>
              {compact && <p className="eg-label-md text-[#6F777C]">{fmtInr(dep.price)} pp</p>}
            </>
          )}
        </div>
      </button>
    </li>
  );
};

export const MonthTabs = ({ months, value, onChange, testPrefix = 'departures-month' }) => (
  <div className="flex shrink-0 gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0" data-testid={`${testPrefix}-filter`}>
    {months.map((m) => (
      <button key={m} type="button" onClick={() => onChange(m)} className={`shrink-0 rounded-full px-4 h-10 eg-label-lg transition-colors ${value === m ? "bg-[#174358] text-white" : "bg-white border border-[#C4CBD0] text-[#174358] hover:border-[#174358]"}`} data-testid={`${testPrefix}-${m}`} aria-pressed={value === m}>
        {m === 'all' ? 'All dates' : monthLabel(m, { month: 'short', year: '2-digit' }).replace(' ', " '")}
      </button>
    ))}
  </div>
);

export const DeparturesSection = ({ departures, loading, error, onPick, depositPp, note }) => {
  const months = useMemo(() => [...new Set(departures.map((d) => monthKey(d.start)))], [departures]);
  const [month, setMonth] = useState('all');
  const list = month === 'all' ? departures : departures.filter((d) => monthKey(d.start) === month);
  return (
    <section id="dates" className="eg-container scroll-mt-4 flex flex-col gap-6" data-testid="departures-section">
      <div>
        <h2 className="eg-display-sm text-[#002131]">Dates & prices</h2>
        <p className="eg-body-lg text-[#002131] mt-2">{note || `Pick a departure and hold your seat for ${fmtInr(depositPp)} per traveller. The trip price is due 60 days before you fly.`}</p>
      </div>
      {error && <p className="eg-body-lg text-[#B3261E]" data-testid="departures-error">{error}</p>}
      {loading && !error && <p className="eg-body-lg text-[#6F777C]" data-testid="departures-loading">Loading departures…</p>}
      {departures.length > 0 && (
        <>
          <MonthTabs months={['all', ...months]} value={month} onChange={setMonth} />
          <ul className="flex flex-col gap-3" data-testid="departures-list">
            {list.map((d) => <DepartureRow key={d.id} dep={d} onPick={onPick} />)}
          </ul>
        </>
      )}
    </section>
  );
};
