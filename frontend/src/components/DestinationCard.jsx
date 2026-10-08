import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Flame, MapPin, Star } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const BADGE_ICON = { 'TOP PICK': Crown, POPULAR: Star, TRENDING: Flame };

export default function DestinationCard({ name, src, alt, href, onClick, badge, region, index = 0, compact = true }) {
  const Icon = BADGE_ICON[badge] || Star;
  const [ref, inView] = useReveal();
  const body = (
    <>
      <img src={src} alt={alt || name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" loading="lazy" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,21,33,0.08)_0%,rgba(0,21,33,0)_30%,rgba(0,21,33,0.18)_55%,rgba(0,21,33,0.78)_100%)]" />
      {badge && (
        <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 h-6.5 sm:h-7 pl-2.5 pr-3 py-1.5 rounded-full bg-[rgba(0,21,33,0.42)] backdrop-blur-md ring-1 ring-white/15 text-white text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.14em] leading-none" data-testid="destination-card-badge">
          <Icon size={12} strokeWidth={2.2} className="shrink-0" />{badge}
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 flex items-end justify-between gap-3">
        <div className="min-w-0 text-white">
          <h3 className={`dest-title leading-[1.05] drop-shadow-[0_2px_8px_rgba(0,21,33,0.45)] ${compact ? 'truncate text-[22px] sm:text-[30px] lg:text-[28px] xl:text-[32px]' : 'line-clamp-2 [text-wrap:balance] text-[24px] sm:text-[28px] lg:text-[30px]'}`} data-testid="destination-card-name">{name}</h3>
          <p className="mt-1 sm:mt-1.5 inline-flex items-center gap-1 text-[12px] sm:text-[12.5px] font-medium tracking-[0.01em] text-white/90" data-testid="destination-card-region"><MapPin size={12} strokeWidth={2.2} />{region}</p>
        </div>
        <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-1 ring-white/80 text-white flex items-center justify-center transition-[background-color,transform] duration-300 group-hover:bg-white/15 group-hover:translate-x-0.5" aria-hidden><ArrowRight size={16} strokeWidth={2} /></span>
      </div>
    </>
  );
  const cls = `dest-card group relative block w-full ${compact ? 'aspect-[16/9] sm:aspect-[450/340]' : 'aspect-[16/10] sm:aspect-[450/340]'} rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#0E2A3A] shadow-[0_10px_30px_-12px_rgba(0,21,33,0.35)] hover:-translate-y-1 hover:shadow-[0_22px_44px_-16px_rgba(0,21,33,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${inView ? 'is-in' : ''}`;
  const style = { '--reveal-delay': `${(index % 5) * 90}ms` };
  if (onClick) return <button type="button" ref={ref} onClick={onClick} className={`${cls} text-left`} style={style} aria-label={name} data-testid="destination-card">{body}</button>;
  return href
    ? <Link ref={ref} to={href} className={cls} style={style} aria-label={`${name} holidays`} data-testid="destination-card">{body}</Link>
    : <a ref={ref} href="#" onClick={(e) => e.preventDefault()} className={cls} style={style} aria-label={name} data-testid="destination-card">{body}</a>;
}
