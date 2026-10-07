import React, { useEffect, useRef, useState } from 'react';
import { SALE, salePrice, formatInr } from '../../sale';

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

// Counts the displayed price down from the list price to the sale price when it scrolls into view.
const useCountDown = (from, to, duration = 1400) => {
  const [value, setValue] = useState(from);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || from === to) { setValue(to); return undefined; }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setValue(to); return undefined; }
    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        setValue(Math.round(from + (to - from) * easeOut(p)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    if (!('IntersectionObserver' in window)) { run(); return () => cancelAnimationFrame(raf); }
    const io = new IntersectionObserver((entries) => { if (entries.some((e) => e.isIntersecting)) { io.disconnect(); run(); } }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [from, to, duration]);
  return [ref, value];
};

// Props: price (number) · from/per labels · size: 'card' | 'detail' | 'bar'
export default function SalePrice({ price, fromLabel = 'From', perLabel = 'per person', size = 'card', testId = 'sale-price', className = '' }) {
  const discounted = salePrice(price);
  const [ref, shown] = useCountDown(price, discounted);
  const priceCls = { card: 'eg-price', detail: 'eg-price', bar: 'eg-price !text-[20px] !leading-6 md:!text-[22px]' }[size];
  const labelCls = size === 'bar' ? 'eg-body-sm' : 'eg-body-md';

  if (!SALE || typeof price !== 'number') {
    return (
      <p className={`flex items-baseline gap-1.5 text-[#6F777C] ${className}`} data-testid={testId}>
        <span className={labelCls}>{fromLabel}</span>
        <span className={`${priceCls} text-[#174358]`}>{typeof price === 'number' ? formatInr(price) : price}</span>
        <span className={labelCls}>{perLabel}</span>
      </p>
    );
  }

  return (
    <div ref={ref} className={`flex flex-col gap-0.5 ${className}`} data-testid={testId}>
      <span className="flex items-center gap-2 text-[#6F777C]">
        <span className={`${labelCls} line-through decoration-[#E03A3E]/70 decoration-[1.5px]`} data-testid={`${testId}-original`}>{formatInr(price)}</span>
        <span className="inline-flex items-center rounded-md bg-[#FDECEC] text-[#9B1C1F] px-1.5 h-5 text-[11px] leading-none font-semibold tracking-wide" data-testid={`${testId}-save`}>SAVE {SALE.percent}%</span>
      </span>
      <span className="flex items-baseline gap-1.5 text-[#6F777C]">
        <span className={labelCls}>{fromLabel}</span>
        <span className={`${priceCls} text-[#174358] tabular-nums`} data-testid={`${testId}-value`}>{formatInr(shown)}</span>
        <span className={labelCls}>{perLabel}</span>
      </span>
    </div>
  );
}
