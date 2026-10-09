import React, { useState } from 'react';
import { X } from 'lucide-react';
import { SALE } from '../../sale';
import { SaleTag, Bells, Sparkle } from './SaleIcons';

const DISMISS_KEY = SALE ? `hi-sale-hero-dismissed-${SALE.id}` : '';

// Hover/focus tooltip explaining the sale – shared by every badge variant.
export const SaleTooltip = ({ children, className = '', testId, align = 'center' }) => (
  <span className={className}>
  <span className="group/sale relative inline-flex" tabIndex={0}>
    {children}
    <span
      role="tooltip"
      className={`sale-tip pointer-events-none absolute top-full z-30 mt-2 w-max max-w-[260px] rounded-xl bg-[#002131] px-3.5 py-2.5 text-left text-white shadow-[0_10px_30px_rgba(0,33,49,0.35)] opacity-0 translate-y-1 transition-[opacity,transform] duration-200 group-hover/sale:opacity-100 group-hover/sale:translate-y-0 group-focus-visible/sale:opacity-100 group-focus-visible/sale:translate-y-0 ${align === 'right' ? 'right-0' : 'left-1/2 -translate-x-1/2'}`}
      data-testid={testId ? `${testId}-tooltip` : undefined}
    >
      <span className="flex items-center gap-2 t-label-lg"><SaleTag size={20} />{SALE.name}<Bells size={20} /></span>
      <span className="block mt-1 text-[12px] leading-[16px] text-white/85">{SALE.tagline} · {SALE.endsLabel}.</span>
      <span className={`absolute -top-1 w-2 h-2 rotate-45 bg-[#002131] ${align === 'right' ? 'right-4' : 'left-1/2 -translate-x-1/2'}`} />
    </span>
  </span>
  </span>
);

// variant: 'pill' (hero – dismissible), 'chip' (cards: "5% OFF"), 'tag' (detail page label)
export default function SaleBadge({ variant = 'pill', className = '', testId = 'sale-badge', dismissible = false }) {
  const [hidden, setHidden] = useState(() => { try { return dismissible && sessionStorage.getItem(DISMISS_KEY) === '1'; } catch { return false; } });
  if (!SALE || hidden) return null;
  const dismiss = (e) => { e.preventDefault(); e.stopPropagation(); setHidden(true); try { sessionStorage.setItem(DISMISS_KEY, '1'); } catch { /* noop */ } };

  if (variant === 'chip') {
    return (
      <SaleTooltip className={className} testId={testId} align="right">
        <span className="sale-chip inline-flex items-center gap-1.5 h-8 pl-1.5 pr-3 rounded-full bg-white text-[#C8232A] t-label-lg font-semibold shadow-[0_2px_10px_rgba(0,0,0,0.25)] ring-1 ring-black/5" data-testid={testId}>
          <SaleTag size={20} />
          <span className="tracking-wide">{SALE.percent}% OFF</span>
        </span>
      </SaleTooltip>
    );
  }

  if (variant === 'tag') {
    return (
      <SaleTooltip className={className} testId={testId}>
        <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 t-label-lg bg-[#FDECEC] text-[#9B1C1F] ring-1 ring-[#F5C2C3]" data-testid={testId}>
          <SaleTag size={18} /><span>{SALE.name} · {SALE.percent}% off</span><Bells size={18} />
        </span>
      </SaleTooltip>
    );
  }

  return (
    <SaleTooltip className={className} testId={testId}>
      <span className="sale-pill relative inline-flex items-center gap-3 h-12 pl-1.5 pr-2 rounded-full bg-white text-onsurface ring-1 ring-[#F1DADA] shadow-[0_6px_24px_rgba(0,0,0,0.25)]" data-testid={testId}>
        <span className="w-9 h-9 rounded-full bg-[#FDECEC] flex items-center justify-center shrink-0"><SaleTag size={24} /></span>
        <span className="flex flex-col leading-tight text-left">
          <span className="t-label-lg text-[#C8232A]">{SALE.name}</span>
          <span className="text-[12px] leading-[16px] text-onsurface-variant">{SALE.tagline} · {SALE.endsLabel}</span>
        </span>
        <Bells size={24} className="shrink-0" />
        {dismissible && (
          <button type="button" onClick={dismiss} aria-label="Hide sale banner" className="ml-0.5 w-7 h-7 rounded-full flex items-center justify-center text-onsurface-variant hover:bg-onsurface/[0.06] hover:text-onsurface transition-colors" data-testid={`${testId}-close`}>
            <X size={16} strokeWidth={2.2} />
          </button>
        )}
        <Sparkle size={11} className="sale-sparkle sale-sparkle-a text-[#F4B942]" />
        <Sparkle size={8} className="sale-sparkle sale-sparkle-b text-[#F4B942]" />
        <Sparkle size={7} className="sale-sparkle sale-sparkle-c text-[#F4B942]" />
      </span>
    </SaleTooltip>
  );
}
