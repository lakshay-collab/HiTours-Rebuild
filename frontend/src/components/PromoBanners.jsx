import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, Flame } from 'lucide-react';
import { destinations } from '../destinationsData';
import { COUNTRY_HREF } from './Destinations';
import { SantaHat, Bells } from './sale/SaleIcons';

const ICONS = { promotions: Tag, 'hot-deals': Flame };
const TOP10 = destinations['Top 10'];

function DestinationMarquee({ bannerId }) {
  return (
    <div className="relative z-[1] w-full overflow-hidden mt-2 md:mt-3 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]" data-testid={`promo-marquee-${bannerId}`}>
      <div className="promo-marquee-track flex w-max" data-testid={`promo-marquee-track-${bannerId}`}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-3 pr-3 shrink-0" aria-hidden={copy === 1}>
            {TOP10.map((d) => {
              const href = COUNTRY_HREF[d.name];
              const inner = (
                <>
                  <div className="w-[104px] h-[72px] md:w-[120px] md:h-[80px] rounded-lg overflow-hidden ring-1 ring-white/30">
                    <img src={d.src} alt={d.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover/dest:scale-105" />
                  </div>
                  <span className="t-label-md uppercase tracking-[.06em] text-white/90 whitespace-nowrap">{d.name}</span>
                </>
              );
              const cls = 'group/dest flex flex-col items-center gap-1.5 shrink-0';
              return href
                ? <Link key={d.name} to={href} tabIndex={copy === 1 ? -1 : 0} className={cls} data-testid="promo-dest-card">{inner}</Link>
                : <div key={d.name} className={cls} data-testid="promo-dest-card">{inner}</div>;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

// Single promo banner; reveals itself when scrolled (horizontally or vertically) into view.
export function PromoBanner({ b, index = 0, className = '' }) {
  const ref = useRef(null);
  const Icon = ICONS[b.id] || Tag;
  const withDest = !!b.showDestinations;

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { el && el.classList.add('is-visible'); return undefined; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('is-visible'); io.disconnect(); } });
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`promo-banner group relative w-full overflow-hidden rounded-2xl bg-deep-water text-white flex flex-col ${withDest ? 'min-h-[340px]' : 'min-h-[256px]'} ${className}`}
      style={{ transitionDelay: `${index * 120}ms` }}
      data-testid={`promo-banner-${b.id}`}
    >
      <img src={b.image} alt={b.imageAlt} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,33,49,0.86)_0%,rgba(0,33,49,0.62)_42%,rgba(0,33,49,0.08)_75%,rgba(0,33,49,0)_100%)]" />
      <div className={`absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(0,33,49,0.6)_0%,rgba(0,33,49,0)_100%)] ${withDest ? 'h-[60%]' : 'h-1/2 md:hidden'}`} />

      <div className={`relative z-[1] flex-1 flex flex-col justify-center gap-3 md:gap-4 p-6 sm:p-8 md:px-12 max-w-[640px] ${withDest ? 'md:pt-8 md:pb-4' : 'md:py-8'}`}>
        <span className="inline-flex items-center gap-2 self-start rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/25 px-3 py-1 t-label-md uppercase tracking-[.08em]" data-testid={`promo-tag-${b.id}`}>
          {b.festive ? <SantaHat size={16} /> : <Icon size={14} strokeWidth={2} className="text-accent" />}{b.tag}{b.festive && <Bells size={16} />}
        </span>
        <h3 className="t-headline-md md:text-[32px] md:leading-[40px] [text-wrap:balance]" data-testid={`promo-headline-${b.id}`}>{b.headline}</h3>
        <p className="t-body-md md:t-body-lg text-white/85 max-w-[460px]" data-testid={`promo-text-${b.id}`}>{b.text}</p>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-1">
          <Link to={b.href} className="btn-sunset" data-testid={`promo-cta-${b.id}`}>{b.cta}<ArrowRight size={16} strokeWidth={2} className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5" /></Link>
          <span className="t-label-lg text-white/80" data-testid={`promo-offer-${b.id}`}>{b.offer}</span>
        </div>
      </div>

      {withDest && (
        <div className="relative z-[1] pb-5 md:pb-6">
          <DestinationMarquee bannerId={b.id} />
        </div>
      )}
    </div>
  );
}
