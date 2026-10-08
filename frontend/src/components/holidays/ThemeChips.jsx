import React from 'react';
import { NavIcon } from '../egypt/EgyptNavIcons';

const Chip = ({ active, onClick, children, testId, dim }) => (
  <button type="button" aria-pressed={active} onClick={onClick} disabled={dim}
    className={`snap-start shrink-0 inline-flex items-center gap-2 h-10 pl-3.5 pr-4 rounded-full border eg-label-lg whitespace-nowrap transition-[background-color,border-color,transform] duration-200 active:scale-[0.97] disabled:opacity-40 ${active ? 'border-transparent eg-grad-harbor text-white shadow-[0_2px_8px_rgba(23,67,88,0.3)]' : 'border-[#C4CBD0] bg-white text-[#002131] hover:border-[#174358]'}`}
    data-testid={testId}>
    {children}
  </button>
);

export default function ThemeChips({ themes, selected, total, onToggle, onClearThemes, testPrefix = 'theme-chips' }) {
  return (
    <div className="relative -mx-4 sm:mx-0" data-testid={testPrefix}>
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar snap-x px-4 sm:px-0 py-1">
        <Chip active={!selected.length} onClick={onClearThemes} testId={`${testPrefix}-all`}>
          All <span className={!selected.length ? 'text-white/80' : 'text-[#6F777C]'}>({total})</span>
        </Chip>
        {themes.map((t) => {
          const on = selected.includes(t.value);
          return (
            <Chip key={t.value} active={on} dim={!on && t.count === 0} onClick={() => onToggle('theme', t.value)} testId={`${testPrefix}-chip`}>
              <NavIcon name={t.icon} size={18} className={on ? 'text-white' : 'text-[#174358]'} />
              {t.label}
              <span className={`tabular-nums ${on ? 'text-white/80' : 'text-[#6F777C]'}`}>({t.count})</span>
            </Chip>
          );
        })}
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#FBF9F1] to-transparent sm:hidden" aria-hidden />
    </div>
  );
}
