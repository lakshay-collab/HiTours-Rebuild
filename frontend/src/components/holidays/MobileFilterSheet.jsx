import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from '../ui/sheet';
import { GroupOptions } from './HolidayFilterPanel';
import { GROUPS, GROUP_LABELS, applyFilters, buildFacets, toggleIn, activeCount, emptySelection } from '../../holidays/filterModel';

export default function MobileFilterSheet({ open, onOpenChange, products, sel, mode, onApply, countLabel, initialGroup = 'theme' }) {
  const [draft, setDraft] = useState(sel);
  const [group, setGroup] = useState(initialGroup);
  useEffect(() => { if (open) { setDraft(sel); setGroup(initialGroup); } }, [open, sel, initialGroup]);
  const facets = buildFacets(products, draft, mode);
  const n = applyFilters(products, draft, mode).length;
  const active = activeCount(draft);
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[86dvh] p-0 rounded-t-2xl bg-white border-0 flex flex-col [&>button]:hidden" data-testid="mobile-filter-sheet">
        <div className="flex items-center justify-between pl-5 pr-3 h-14 border-b border-[#E4E3DB] shrink-0">
          <SheetTitle className="eg-title-lg text-[#002131]">Filters{active ? ` (${active})` : ''}</SheetTitle>
          <SheetDescription className="sr-only">Refine by theme, experiences, destination, duration and price</SheetDescription>
          <button type="button" onClick={() => onOpenChange(false)} aria-label="Close filters" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5" data-testid="mobile-filter-close"><X size={22} /></button>
        </div>
        <div className="flex-1 min-h-0 flex">
          <nav className="w-[38%] max-w-[180px] shrink-0 bg-[#F0EEE6] overflow-y-auto no-scrollbar" aria-label="Filter groups" data-testid="mobile-filter-groups">
            {GROUPS.map((g) => {
              const on = g === group;
              return (
                <button key={g} type="button" onClick={() => setGroup(g)} aria-selected={on} role="tab"
                  className={`relative w-full flex items-center gap-2 px-4 py-4 text-left eg-label-lg transition-colors ${on ? 'bg-white text-[#002131]' : 'text-[#174358]'}`} data-testid={`mobile-filter-group-${g}`}>
                  {on && <span className="absolute left-0 inset-y-0 w-1 bg-[#174358] rounded-r" aria-hidden />}
                  <span className="flex-1 truncate">{GROUP_LABELS[g]}</span>
                  {draft[g].length > 0 && <span className="min-w-5 h-5 px-1.5 rounded-full bg-[#174358] text-white text-[11px] font-bold flex items-center justify-center" data-testid={`mobile-filter-group-${g}-count`}>{draft[g].length}</span>}
                </button>
              );
            })}
          </nav>
          <div className="flex-1 min-w-0 overflow-y-auto px-4 py-3" data-testid={`mobile-filter-options-${group}`}>
            <GroupOptions group={group} facets={facets} sel={draft} onToggle={(g, v) => setDraft((d) => toggleIn(d, g, v))} testPrefix="mhf" chips={false} scrollPlaces={false} />
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-3 px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] border-t border-[#E4E3DB] bg-white">
          <button type="button" onClick={() => setDraft(emptySelection())} disabled={!active} className="h-14 px-5 rounded-full border border-[#6F777C] eg-title-md text-[#002131] disabled:opacity-40 whitespace-nowrap" data-testid="mobile-filter-clear">Clear all</button>
          <button type="button" onClick={() => { onApply(draft); onOpenChange(false); }} disabled={n === 0} className="eg-btn-filled flex-1 h-14 eg-title-md disabled:opacity-50" data-testid="mobile-filter-apply">{countLabel(n)}</button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
