import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Minus, Plus, X, Users, BedDouble, Sparkles } from 'lucide-react';
import { depositOf, fmtDate, fmtInr, fmtRange, fromISO, monthKey, monthLabel } from '../../grouptours/groupBooking';

const DOW = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const toISO = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export const StatusBadge = ({ dep, className = '' }) => {
  if (dep.status === 'sold_out') return <span className={`rounded-full bg-[#E4E3DB] px-2.5 py-1 eg-label-md text-[#5B6B74] ${className}`}>Sold out</span>;
  if (dep.status === 'limited') return <span className={`rounded-full bg-[#FBEADB] px-2.5 py-1 eg-label-md text-[#C84D1B] ${className}`}>Only {dep.seats_left} seats left</span>;
  return <span className={`rounded-full bg-[#D7ECE4] px-2.5 py-1 eg-label-md text-[#174358] ${className}`}>{dep.seats_left} seats left</span>;
};
export const EarlyBird = ({ dep, className = '' }) => (dep.early_bird ? <span className={`inline-flex items-center gap-1 rounded-full bg-[#002131] text-white px-2.5 py-1 eg-label-md ${className}`}><Sparkles size={12} /> Early bird · {dep.deposit_pct}% deposit</span> : null);

const Stepper = ({ value, min, max, onChange, testId }) => (
  <div className="flex items-center gap-3" data-testid={testId}>
    <button type="button" disabled={value <= min} onClick={() => onChange(value - 1)} className="w-9 h-9 rounded-full border border-[#C4CBD0] flex items-center justify-center text-[#174358] disabled:opacity-30 hover:bg-[#174358]/[0.06]" aria-label="Fewer travellers" data-testid={`${testId}-minus`}><Minus size={16} /></button>
    <span className="w-5 text-center eg-title-md text-[#002131]" data-testid={`${testId}-value`}>{value}</span>
    <button type="button" disabled={value >= max} onClick={() => onChange(value + 1)} className="w-9 h-9 rounded-full border border-[#C4CBD0] flex items-center justify-center text-[#174358] disabled:opacity-30 hover:bg-[#174358]/[0.06]" aria-label="More travellers" data-testid={`${testId}-plus`}><Plus size={16} /></button>
  </div>
);

const MonthGrid = ({ view, departures, selected, onSelect }) => {
  const first = new Date(view.getFullYear(), view.getMonth(), 1);
  const lead = (first.getDay() + 6) % 7;
  const dim = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const byDate = Object.fromEntries(departures.map((d) => [d.id, d]));
  const span = selected ? [fromISO(selected.start), fromISO(selected.end)] : null;
  return (
    <div>
      <div className="grid grid-cols-7 mb-1">{DOW.map((d) => <span key={d} className="text-center eg-label-md text-[#5B6B74] py-1">{d}</span>)}</div>
      <div className="grid grid-cols-7 gap-y-1">
        {Array.from({ length: lead }).map((_, i) => <span key={`e${i}`} />)}
        {Array.from({ length: dim }, (_, i) => {
          const d = new Date(view.getFullYear(), view.getMonth(), i + 1);
          const iso = toISO(d);
          const dep = byDate[iso];
          const inSpan = span && d > span[0] && d <= span[1];
          const isSel = selected?.id === iso;
          if (!dep) return <span key={iso} className={`h-12 md:h-14 flex items-center justify-center eg-label-md ${inSpan ? 'bg-[#D7ECE4] text-[#174358]' : 'text-[#C4CBD0]'}`} data-testid={`gcal-day-${iso}`}>{i + 1}</span>;
          const sold = dep.status === 'sold_out';
          return (
            <button key={iso} type="button" disabled={sold} onClick={() => onSelect(dep)} data-testid={`gcal-dep-${iso}`} data-selected={isSel || undefined}
              className={`h-12 md:h-14 rounded-xl flex flex-col items-center justify-center transition-colors ${sold ? 'bg-[#F0EEE6] text-[#9AA3A8] line-through cursor-not-allowed' : isSel ? 'bg-[#174358] text-white' : 'bg-[#FBEADB] text-[#002131] hover:bg-[#F4B49A]'}`}>
              <span className="eg-label-lg leading-none">{i + 1}</span>
              <span className="text-[10px] leading-none mt-1">{sold ? 'Sold out' : `\u20b9${Math.round(dep.price / 1000)}k`}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const DatesCalendarModal = ({ departures, initial, onClose, product, checkoutPath, pax: initPax = 2, room: initRoom = 'twin' }) => {
  const navigate = useNavigate();
  const open = departures.filter((d) => d.status !== 'sold_out');
  const [selected, setSelected] = useState(initial || open[0] || null);
  const [pax, setPax] = useState(initPax);
  const [room, setRoom] = useState(initRoom);
  const months = useMemo(() => [...new Set(departures.map((d) => monthKey(d.start)))], [departures]);
  const [mi, setMi] = useState(() => Math.max(0, months.indexOf(monthKey((selected || departures[0]).start))));
  const view = fromISO(`${months[mi]}-01`);
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);
  useEffect(() => { if (selected && pax > selected.seats_left) setPax(selected.seats_left); }, [selected, pax]);
  const q = selected ? depositOf(selected, pax, room) : null;
  const go = () => navigate(`${checkoutPath}?dep=${selected.id}&pax=${pax}&room=${room}`);

  return (
    <div className="fixed inset-0 z-[70] bg-[#002131]/70 flex items-end sm:items-center justify-center sm:p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label="Dates and prices" data-testid="dates-modal">
      <div className="bg-[#FBF9F1] w-full sm:max-w-[960px] max-h-[94vh] sm:max-h-[90vh] rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-[#E4E3DB] bg-white">
          <div><h2 className="eg-title-lg text-[#002131]">Dates & prices</h2><p className="eg-label-md text-[#5B6B74]">{product.title} · {product.days} days · prices per person, twin share</p></div>
          <button type="button" onClick={onClose} className="w-10 h-10 rounded-full hover:bg-[#F0EEE6] flex items-center justify-center text-[#002131]" aria-label="Close" data-testid="dates-modal-close"><X size={20} /></button>
        </div>
        <div className="overflow-y-auto grid grid-cols-1 md:grid-cols-[1fr_340px]">
          <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-[#E4E3DB]">
            <div className="flex items-center justify-between">
              <button type="button" disabled={mi === 0} onClick={() => setMi(mi - 1)} className="w-10 h-10 rounded-full flex items-center justify-center text-[#174358] hover:bg-[#174358]/[0.06] disabled:opacity-30" aria-label="Previous month" data-testid="gcal-prev"><ChevronLeft size={20} /></button>
              <p className="eg-title-md text-[#002131]" data-testid="gcal-month">{monthLabel(months[mi])}</p>
              <button type="button" disabled={mi >= months.length - 1} onClick={() => setMi(mi + 1)} className="w-10 h-10 rounded-full flex items-center justify-center text-[#174358] hover:bg-[#174358]/[0.06] disabled:opacity-30" aria-label="Next month" data-testid="gcal-next"><ChevronRight size={20} /></button>
            </div>
            <div className="mt-3"><MonthGrid view={view} departures={departures} selected={selected} onSelect={setSelected} /></div>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 eg-label-md text-[#5B6B74]" data-testid="gcal-legend">
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#FBEADB] border border-[#F4B49A]" />Departure date · price shown</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#174358]" />Selected</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#D7ECE4]" />Your {product.days}-day trip</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#F0EEE6]" />Sold out</span>
            </div>
            <ul className="mt-5 flex flex-col divide-y divide-[#E4E3DB] border-t border-[#E4E3DB]" data-testid="gcal-month-list">
              {departures.filter((d) => monthKey(d.start) === months[mi]).map((d) => (
                <li key={d.id}>
                  <button type="button" disabled={d.status === 'sold_out'} onClick={() => setSelected(d)} className={`w-full flex items-center justify-between gap-3 py-3 text-left disabled:opacity-60 ${selected?.id === d.id ? 'text-[#174358]' : 'text-[#002131]'}`} data-testid={`gcal-row-${d.id}`}>
                    <div><p className="eg-label-lg">{fmtRange(d)}</p><p className="eg-label-md text-[#5B6B74]">{fmtInr(d.price)} per person · deposit {fmtInr(depositOf(d).deposit)}</p></div>
                    <div className="flex items-center gap-2 shrink-0"><EarlyBird dep={d} className="hidden sm:inline-flex" /><StatusBadge dep={d} /></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <aside className="p-5 md:p-6 flex flex-col gap-4 bg-white" data-testid="dates-modal-summary">
            {selected ? (
              <>
                <div>
                  <p className="eg-label-md text-[#5B6B74]">Selected departure</p>
                  <p className="eg-title-lg text-[#002131]" data-testid="dates-modal-range">{fmtRange(selected)}</p>
                  <div className="mt-2 flex flex-wrap gap-2"><StatusBadge dep={selected} /><EarlyBird dep={selected} /></div>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-xl border border-[#E4E3DB] px-4 py-3">
                  <div><p className="eg-label-lg text-[#002131] flex items-center gap-2"><Users size={16} className="text-[#174358]" />Travellers</p><p className="eg-label-md text-[#5B6B74]">Adults 18+ · max {Math.min(selected.seats_left, 8)}</p></div>
                  <Stepper value={pax} min={1} max={Math.min(selected.seats_left, 8)} onChange={setPax} testId="dates-modal-pax" />
                </div>
                <div className="grid grid-cols-2 gap-2" data-testid="dates-modal-room">
                  {[['twin', 'Twin share', 'included'], ['single', 'Private room', `+${fmtInr(selected.single_supplement)} pp`]].map(([k, l, s]) => (
                    <button key={k} type="button" onClick={() => setRoom(k)} className={`rounded-xl border px-3 py-2.5 text-left transition-colors ${room === k ? 'border-[#174358] bg-[#FBEADB]' : 'border-[#E4E3DB] hover:border-[#174358]'}`} data-testid={`dates-modal-room-${k}`} aria-pressed={room === k}>
                      <p className="eg-label-lg text-[#002131] flex items-center gap-1.5"><BedDouble size={14} className="text-[#174358]" />{l}</p><p className="eg-label-md text-[#5B6B74]">{s}</p>
                    </button>
                  ))}
                </div>
                <div className="flex flex-col gap-1.5 eg-body-md text-[#002131]">
                  <div className="flex justify-between"><span>{fmtInr(q.pp)} × {pax} traveller{pax > 1 ? 's' : ''}</span><span data-testid="dates-modal-total">{fmtInr(q.total)}</span></div>
                  <div className="flex justify-between text-[#5B6B74]"><span>Balance due {fmtDate(selected.balance_due)}</span><span data-testid="dates-modal-balance">{fmtInr(q.balance)}</span></div>
                </div>
                <div className="rounded-2xl bg-[#002131] text-white p-4" data-testid="dates-modal-deposit">
                  <p className="eg-label-md text-white/70">Pay only · {selected.deposit_pct}% deposit today</p>
                  <p className="eg-headline-md" data-testid="dates-modal-deposit-amount">{fmtInr(q.deposit)}</p>
                  <p className="eg-label-md text-white/70 mt-1">Secures {pax} seat{pax > 1 ? 's' : ''} on the {fmtDate(selected.start, { day: 'numeric', month: 'long' })} departure</p>
                </div>
                <button type="button" onClick={go} className="eg-btn-filled w-full !h-14 eg-title-md" data-testid="dates-modal-reserve">Reserve with {fmtInr(q.deposit)} deposit</button>
                <p className="eg-label-md text-[#5B6B74]">Free date changes up to 60 days before departure with Hi Tours Cares. International flights not included.</p>
              </>
            ) : <p className="eg-body-lg text-[#5B6B74]">Pick a departure date on the calendar.</p>}
          </aside>
        </div>
        {selected && q && (
          <div className="md:hidden border-t border-[#E4E3DB] bg-white px-4 py-3 flex items-center justify-between gap-3" data-testid="dates-modal-mobile-bar">
            <div><p className="eg-label-md text-[#C84D1B]">Pay only · {selected.deposit_pct}% deposit</p><p className="eg-title-lg text-[#002131]">{fmtInr(q.deposit)}</p></div>
            <button type="button" onClick={go} className="eg-btn-filled !h-12 px-5 eg-label-lg" data-testid="dates-modal-mobile-reserve">Reserve seats</button>
          </div>
        )}
      </div>
    </div>
  );
};

export const DeparturesSection = ({ departures, loading, error, onPick }) => {
  const months = useMemo(() => [...new Set(departures.map((d) => monthKey(d.start)))], [departures]);
  const [month, setMonth] = useState('all');
  const list = month === 'all' ? departures : departures.filter((d) => monthKey(d.start) === month);
  return (
    <section id="dates" className="scroll-mt-24" data-testid="departures-section">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div><h2 className="eg-headline-md text-[#002131]">Dates & prices</h2><p className="eg-body-lg text-[#5B6B74] mt-1">Fixed departures, max 16 travellers. Prices per person on twin share; secure your seat with a small deposit.</p></div>
        <button type="button" onClick={() => onPick(null)} className="eg-btn-outlined !h-11 !rounded-full eg-label-lg" data-testid="departures-open-calendar">Open calendar view</button>
      </div>
      {error && <p className="mt-6 eg-body-lg text-[#B3261E]" data-testid="departures-error">{error}</p>}
      {loading && !error && <p className="mt-6 eg-body-lg text-[#5B6B74]" data-testid="departures-loading">Loading departures…</p>}
      {departures.length > 0 && (
        <>
          <div className="mt-6 flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0" data-testid="departures-month-filter">
            {[['all', 'All dates'], ...months.map((m) => [m, monthLabel(m).split(' ')[0]])].map(([k, l]) => (
              <button key={k} type="button" onClick={() => setMonth(k)} className={`shrink-0 rounded-full px-4 h-10 eg-label-lg transition-colors ${month === k ? 'bg-[#174358] text-white' : 'bg-white border border-[#C4CBD0] text-[#002131] hover:bg-[#FBEADB]'}`} data-testid={`departures-month-${k}`} aria-pressed={month === k}>{l}</button>
            ))}
          </div>
          <ul className="mt-4 flex flex-col gap-3" data-testid="departures-list">
            {list.map((d) => {
              const q = depositOf(d);
              const sold = d.status === 'sold_out';
              return (
                <li key={d.id} className={`rounded-2xl border bg-white p-4 md:px-6 md:py-5 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_auto] gap-3 md:gap-6 md:items-center ${sold ? 'border-[#E4E3DB] opacity-70' : 'border-[#C4CBD0]'}`} data-testid={`departure-${d.id}`} data-status={d.status}>
                  <div>
                    <p className="eg-title-md text-[#002131]">{fmtRange(d)}</p>
                    <div className="mt-1.5 flex flex-wrap gap-2"><StatusBadge dep={d} /><EarlyBird dep={d} /></div>
                  </div>
                  <div><p className="eg-label-md text-[#5B6B74]">Price per person</p><p className="eg-title-lg text-[#002131]">{fmtInr(d.price)}</p></div>
                  <div><p className="eg-label-md text-[#5B6B74]">Pay only · {d.deposit_pct}% deposit</p><p className="eg-title-lg text-[#E75E26]">{fmtInr(q.deposit)}</p></div>
                  <button type="button" disabled={sold} onClick={() => onPick(d)} className="eg-btn-filled !h-12 px-6 eg-label-lg disabled:opacity-40 disabled:cursor-not-allowed" data-testid={`departure-${d.id}-book`}>{sold ? 'Sold out' : 'Select date'}</button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </section>
  );
};
