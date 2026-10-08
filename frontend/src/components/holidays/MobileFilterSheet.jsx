import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from '../ui/sheet';
import HolidayFilterPanel from './HolidayFilterPanel';
import { applyFilters, buildFacets, toggleIn, activeCount, emptySelection } from '../../holidays/filterModel';

export default function MobileFilterSheet({ open, onOpenChange, products, sel, onApply, countLabel }) {
  const [draft, setDraft] = useState(sel);
  useEffect(() => { if (open) setDraft(sel); }, [open, sel]);
  const facets = buildFacets(products, draft);
  const n = applyFilters(products, draft).length;
  const active = activeCount(draft);
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[92dvh] p-0 rounded-t-2xl bg-[#FBF9F1] border-0 flex flex-col [&>button]:hidden" data-testid="mobile-filter-sheet">
        <div className="mx-auto mt-2 w-10 h-1 rounded-full bg-[#C4CBD0]" aria-hidden />
        <div className="flex items-center justify-between px-4 h-14 border-b border-[#E4E3DB]">
          <SheetTitle className="eg-title-lg text-[#002131]">Filters{active ? ` (${active})` : ''}</SheetTitle>
          <SheetDescription className="sr-only">Refine holidays by theme, destination, duration and price</SheetDescription>
          <div className="flex items-center gap-2">
            {active > 0 && <button type="button" onClick={() => setDraft(emptySelection())} className="eg-label-lg text-[#174358] underline underline-offset-2 px-2" data-testid="mobile-filter-clear">Clear all</button>}
            <button type="button" onClick={() => onOpenChange(false)} aria-label="Close filters" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5" data-testid="mobile-filter-close"><X size={22} /></button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-5">
          <HolidayFilterPanel facets={facets} sel={draft} onToggle={(g, v) => setDraft((d) => toggleIn(d, g, v))} testPrefix="mhf" />
        </div>
        <div className="px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] border-t border-[#E4E3DB] bg-[#FBF9F1]">
          <button type="button" onClick={() => { onApply(draft); onOpenChange(false); }} disabled={n === 0} className="eg-btn-filled w-full h-14 eg-title-lg disabled:opacity-50" data-testid="mobile-filter-apply">{countLabel(n)}</button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
