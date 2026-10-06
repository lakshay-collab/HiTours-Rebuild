import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({ children, step = 380, arrowTop = '50%', className = '', trackClassName = '', testId = 'carousel', dots = 0 }) {
  const ref = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [active, setActive] = useState(0);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    if (dots) setActive(Math.min(dots - 1, Math.round(el.scrollLeft / Math.max(1, el.scrollWidth / dots))));
  }, [dots]);

  useEffect(() => {
    update();
    const el = ref.current;
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { el.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [update]);

  const go = (dir) => { const el = ref.current; el.scrollBy({ left: dir * (step === 'page' ? el.clientWidth : step), behavior: 'smooth' }); };
  const goTo = (i) => { const el = ref.current; el.scrollTo({ left: (el.scrollWidth / dots) * i, behavior: 'smooth' }); };

  return (
    <div className={`relative ${className}`} data-testid={testId}>
      <div ref={ref} className={`no-scrollbar flex overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-pl-4 sm:scroll-pl-8 md:scroll-pl-0 ${trackClassName}`}>
        {children}
      </div>
      <button onClick={() => go(-1)} disabled={!canPrev} className="arrow-btn absolute left-2 md:-left-5 -translate-y-1/2 hidden sm:flex" style={{ top: arrowTop }} aria-label="Previous" data-testid={`${testId}-prev`}>
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => go(1)} disabled={!canNext} className="arrow-btn absolute right-2 md:-right-5 -translate-y-1/2 hidden sm:flex" style={{ top: arrowTop }} aria-label="Next" data-testid={`${testId}-next`}>
        <ChevronRight size={20} />
      </button>
      {dots > 1 && (
        <div className="flex items-center justify-center gap-2 mt-5" data-testid={`${testId}-dots`}>
          {Array.from({ length: dots }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-[width,background-color] duration-300 ${i === active ? 'w-7 bg-primary' : 'w-2 bg-onsurface/20 hover:bg-onsurface/40'}`}
              data-testid={`${testId}-dot-${i}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
