import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Flame, MapPin, Star } from 'lucide-react';

const BADGE_ICON = { 'TOP PICK': Crown, POPULAR: Star, TRENDING: Flame };

export default function DestinationCard({ name, src, href, badge, region }) {
  const Icon = BADGE_ICON[badge] || Star;
  const body = (
    <>
      <img src={src} alt={name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" loading="lazy" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,21,33,0.08)_0%,rgba(0,21,33,0)_30%,rgba(0,21,33,0.18)_55%,rgba(0,21,33,0.78)_100%)]" />
      {badge && (
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 h-7 pl-2.5 pr-3 rounded-full bg-[rgba(0,21,33,0.42)] backdrop-blur-md ring-1 ring-white/15 text-white text-[10.5px] font-semibold uppercase tracking-[0.14em] leading-none" data-testid="destination-card-badge">
          <Icon size={12} strokeWidth={2.2} className="shrink-0" />{badge}
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between gap-3">
        <div className="min-w-0 text-white">
          <h3 className="dest-title text-[26px] leading-[1.05] sm:text-[30px] lg:text-[28px] xl:text-[32px] truncate drop-shadow-[0_2px_8px_rgba(0,21,33,0.45)]" data-testid="destination-card-name">{name}</h3>
          <p className="mt-1.5 inline-flex items-center gap-1 text-[12.5px] font-medium tracking-[0.01em] text-white/90" data-testid="destination-card-region"><MapPin size={12} strokeWidth={2.2} />{region}</p>
        </div>
        <span className="shrink-0 w-9 h-9 rounded-full ring-1 ring-white/80 bg-white/0 text-white flex items-center justify-center transition-[background-color,transform] duration-300 group-hover:bg-white/15 group-hover:translate-x-0.5" aria-hidden><ArrowRight size={16} strokeWidth={2} /></span>
      </div>
    </>
  );
  const cls = 'group relative block w-full aspect-[450/340] rounded-[24px] overflow-hidden bg-[#0E2A3A] shadow-[0_10px_30px_-12px_rgba(0,21,33,0.35)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_22px_44px_-16px_rgba(0,21,33,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60';
  return href
    ? <Link to={href} className={cls} aria-label={`${name} holidays`} data-testid="destination-card">{body}</Link>
    : <a href="#" onClick={(e) => e.preventDefault()} className={cls} aria-label={name} data-testid="destination-card">{body}</a>;
}
