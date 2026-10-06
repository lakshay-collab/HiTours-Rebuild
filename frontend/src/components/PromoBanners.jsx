import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, Flame } from 'lucide-react';
import { promoBanners } from '../mock';

const ICONS = { promotions: Tag, 'hot-deals': Flame };

function Banner({ b, index }) {
  const Icon = ICONS[b.id] || Tag;
  return (
    <Link
      to={b.href}
      className="promo-banner group relative block w-full overflow-hidden rounded-2xl bg-deep-water text-white min-h-[300px] sm:min-h-[260px] md:min-h-0 md:aspect-[1240/272] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      style={{ transitionDelay: `${index * 120}ms` }}
      data-testid={`promo-banner-${b.id}`}
    >
      <img src={b.image} alt={b.imageAlt} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,33,49,0.86)_0%,rgba(0,33,49,0.62)_42%,rgba(0,33,49,0.08)_75%,rgba(0,33,49,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,rgba(0,33,49,0.55)_0%,rgba(0,33,49,0)_100%)] md:hidden" />

      <div className="relative z-[1] h-full flex flex-col justify-center gap-3 md:gap-4 p-6 sm:p-8 md:px-12 md:py-8 max-w-[640px]">
        <span className="inline-flex items-center gap-2 self-start rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/25 px-3 py-1 t-label-md uppercase tracking-[.08em]" data-testid={`promo-tag-${b.id}`}>
          <Icon size={14} strokeWidth={2} className="text-accent" />{b.tag}
        </span>
        <h3 className="t-headline-md md:text-[32px] md:leading-[40px] [text-wrap:balance]" data-testid={`promo-headline-${b.id}`}>{b.headline}</h3>
        <p className="t-body-md md:t-body-lg text-white/85 max-w-[460px]" data-testid={`promo-text-${b.id}`}>{b.text}</p>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-1">
          <span className="btn-sunset" data-testid={`promo-cta-${b.id}`}>{b.cta}<ArrowRight size={16} strokeWidth={2} className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5" /></span>
          <span className="t-label-lg text-white/80" data-testid={`promo-offer-${b.id}`}>{b.offer}</span>
        </div>
      </div>
    </Link>
  );
}

export default function PromoBanners() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || !('IntersectionObserver' in window)) { root && root.classList.add('is-visible'); return undefined; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { threshold: 0.2 });
    root.querySelectorAll('.promo-banner').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="pt-8 md:pt-10" data-testid="promo-banners-section">
      <div ref={ref} className="tl-container flex flex-col gap-6 md:gap-8">
        {promoBanners.map((b, i) => <Banner key={b.id} b={b} index={i} />)}
      </div>
    </section>
  );
}
