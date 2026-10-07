import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { pageTabs } from '../aboutData';

export default function PageTabs() {
  const { pathname } = useLocation();
  const base = 'relative shrink-0 h-10 px-4 rounded-full eg-label-lg inline-flex items-center gap-1.5 transition-colors';
  return (
    <nav className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Company pages" data-testid="page-tabs">
      {pageTabs.map((t) => {
        const id = `page-tab-${t.label.toLowerCase().replace(/\s/g, '-')}`;
        if (t.href) return <a key={t.label} href={t.href} target="_blank" rel="noreferrer" className={`${base} text-[#174358] hover:bg-[#174358]/10`} data-testid={id}>{t.label}<ArrowUpRight size={14} /></a>;
        const active = pathname === t.to;
        return <Link key={t.label} to={t.to} aria-current={active ? 'page' : undefined} className={`${base} ${active ? 'bg-[#002131] text-white' : 'text-[#174358] hover:bg-[#174358]/10'}`} data-testid={id}>{t.label}</Link>;
      })}
    </nav>
  );
}
