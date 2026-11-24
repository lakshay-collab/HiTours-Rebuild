import React from 'react';
import { Minus, Plus, Trash2, Users } from 'lucide-react';
import { ROOM_MAX } from '../../booking/bookable';

const Stepper = ({ value, min, max, onChange, label, testId }) => (
  <div className="flex items-center gap-3" data-testid={testId}>
    <button type="button" aria-label={`Fewer ${label}`} disabled={value <= min} onClick={() => onChange(value - 1)}
      className="w-9 h-9 rounded-full border border-[#C4CBD0] flex items-center justify-center text-[#174358] disabled:opacity-30 hover:bg-[#174358]/[0.06] transition-colors" data-testid={`${testId}-minus`}>
      <Minus size={16} strokeWidth={2.2} />
    </button>
    <span className="w-5 text-center eg-title-md text-[#002131]" data-testid={`${testId}-value`}>{value}</span>
    <button type="button" aria-label={`More ${label}`} disabled={value >= max} onClick={() => onChange(value + 1)}
      className="w-9 h-9 rounded-full border border-[#C4CBD0] flex items-center justify-center text-[#174358] disabled:opacity-30 hover:bg-[#174358]/[0.06] transition-colors" data-testid={`${testId}-plus`}>
      <Plus size={16} strokeWidth={2.2} />
    </button>
  </div>
);

export const RoomsPicker = ({ rooms, onChange, max = 6 }) => {
  const update = (i, patch) => onChange(rooms.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  const full = (r) => r.adults >= ROOM_MAX.adults && r.children >= ROOM_MAX.children;
  return (
    <div className="flex flex-col gap-3" data-testid="rooms-picker">
      {rooms.map((r, i) => (
        <div key={i} className="rounded-2xl border border-[#E4E3DB] bg-white p-4 md:p-5 flex flex-col gap-4" data-testid={`room-${i + 1}`}>
          <div className="flex items-center justify-between">
            <p className="eg-title-md text-[#002131] flex items-center gap-2"><Users size={18} className="text-[#174358]" />Room {i + 1}</p>
            {rooms.length > 1 && (
              <button type="button" onClick={() => onChange(rooms.filter((_, j) => j !== i))} className="inline-flex items-center gap-1 eg-label-lg text-[#174358] hover:text-[#002131]" data-testid={`room-${i + 1}-remove`}>
                <Trash2 size={14} /> Remove
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-between gap-3">
              <div><p className="eg-label-lg text-[#002131]">Adults</p><p className="eg-label-md text-[#5B6B74]">12 years and over</p></div>
              <Stepper value={r.adults} min={1} max={ROOM_MAX.adults} label="adults" testId={`room-${i + 1}-adults`} onChange={(v) => update(i, { adults: v })} />
            </div>
            <div className="flex items-center justify-between gap-3">
              <div><p className="eg-label-lg text-[#002131]">Children</p><p className="eg-label-md text-[#5B6B74]">2 to 11 years</p></div>
              <Stepper value={r.children} min={0} max={ROOM_MAX.children} label="children" testId={`room-${i + 1}-children`} onChange={(v) => update(i, { children: v })} />
            </div>
          </div>
          {full(r) && <p className="eg-label-md text-[#174358] bg-[#FBEADB] rounded-lg px-3 py-2" data-testid={`room-${i + 1}-full`}>This room is full: each room sleeps up to 2 adults and 1 child. Travelling with more people? Add another room below.</p>}
        </div>
      ))}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p className="eg-label-md text-[#5B6B74]">Each room sleeps a maximum of 2 adults and 1 child.</p>
        {rooms.length < max && (
          <button type="button" onClick={() => onChange([...rooms, { adults: 2, children: 0 }])} className="eg-btn-outlined !h-10 !rounded-full eg-label-lg" data-testid="rooms-add">
            <Plus size={16} /> Add another room
          </button>
        )}
      </div>
    </div>
  );
};
