import React from 'react';
import { Check, ArrowUpDown } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
import { ChevronDown } from '../egypt/EgyptIcons';
import { NavIcon } from '../egypt/EgyptNavIcons';
import { FiltersButton } from '../egypt/EgyptFilterBar';
import { GroupOptions } from './HolidayFilterPanel';
import { QUICK_GROUPS, GROUP_LABELS } from '../../holidays/filterModel';
import { sorts } from '../../egyptListingData';

const pillCls = (on) => `shrink-0 inline-flex items-center gap-1 h-10 pl-4 pr-3 rounded-full border whitespace-nowrap eg-label-lg transition-colors ${on ? 'border-[#174358] bg-[#174358]/10 text-[#002131]' : 'border-[#C4CBD0] bg-white text-[#002131] hover:border-[#174358]'}`;
const boxCls = 'w-[300px] max-h-[380px] overflow-y-auto no-scrollbar rounded-xl border-[#E4E3DB] bg-white p-3 shadow-[0_2px_6px_2px_rgba(0,0,0,0.15)]';

const SortMenu = ({ sort, onSort, testPrefix }) => (
  <Popover>
    <PopoverTrigger asChild>
      <button type="button" className={pillCls(!!sort)} data-testid={`${testPrefix}-sort`}>
        <ArrowUpDown size={16} className="mr-1" />Sort<ChevronDown size={18} />
      </button>
    </PopoverTrigger>
    <PopoverContent align="start" className={`${boxCls} p-1`} data-testid={`${testPrefix}-sort-menu`}>
      {sorts.map((s) => (
        <button key={s.key} type="button" onClick={() => onSort(sort === s.key ? null : s.key)} className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left eg-body-lg text-[#002131] hover:bg-[rgba(23,67,88,0.08)]" data-testid={`${testPrefix}-sort-${s.key}`}>
          <NavIcon name={s.icon} />
          <span className={`flex-1 ${sort === s.key ? 'font-semibold' : ''}`}>{s.label}</span>
          {sort === s.key && <Check size={18} className="text-[#174358]" />}
        </button>
      ))}
    </PopoverContent>
  </Popover>
);

const GroupMenu = ({ group, facets, sel, onToggle, testPrefix }) => {
  const n = sel[group].length;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button" className={pillCls(n > 0)} data-testid={`${testPrefix}-${group}`}>
          {GROUP_LABELS[group]}{n > 0 && <span className="ml-1 min-w-5 h-5 px-1.5 rounded-full bg-[#174358] text-white text-[11px] font-bold flex items-center justify-center">{n}</span>}<ChevronDown size={18} />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className={boxCls} data-testid={`${testPrefix}-${group}-menu`}>
        <GroupOptions group={group} facets={facets} sel={sel} onToggle={onToggle} testPrefix={`${testPrefix}-opt`} chips={false} />
      </PopoverContent>
    </Popover>
  );
};

// One scrolling line, identical on desktop and mobile: Filters, Sort, then the key quick filters.
export default function QuickFilters({ facets, sel, onToggle, sort, onSort, onOpenFilters, active, testPrefix = 'qf' }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0" data-testid={testPrefix}>
      <FiltersButton onClick={onOpenFilters} active={active} testId={`${testPrefix}-filters`} />
      <SortMenu sort={sort} onSort={onSort} testPrefix={testPrefix} />
      <span className="shrink-0 w-px h-7 bg-[#C4CBD0] mx-1" aria-hidden />
      {QUICK_GROUPS.map((g) => <GroupMenu key={g} group={g} facets={facets} sel={sel} onToggle={onToggle} testPrefix={testPrefix} />)}
    </div>
  );
}
