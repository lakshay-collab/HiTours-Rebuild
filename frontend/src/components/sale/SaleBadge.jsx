import React, { useState } from 'react';
import { X } from 'lucide-react';
import { SALE, saleBadgePercent } from '../../sale';
import { themeOf } from './saleThemes';
import { Sparkle } from './SaleIcons';

const DISMISS_KEY = SALE ? `hi-sale-hero-dismissed-${SALE.id}` : '';
const T = themeOf(SALE);
const OFF = saleBadgePercent();

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
      <span className="flex items-center gap-2 t-label-lg"><T.Lead size={20} />{SALE.name}<T.Trail size={20} /></span>
      <span className="block mt-1 text-[12px] leading-[16px] text-white/85">{SALE.tagline} · {SALE.endsLabel}.</span>
      <span className={`absolute -top-1 w-2 h-2 rotate-45 bg-[#002131] ${align === 'right' ? 'right-4' : 'left-1/2 -translate-x-1/2'}`} />
    </span>
  </span>
  </span>
);

// variant: 'pill' (hero – dismissible), 'chip' (cards: "10% OFF"), 'tag' (detail page label)
export default function SaleBadge({ variant = 'pill', className = '', testId = 'sale-badge', dismissible = false }) {
  const [hidden, setHidden] = useState(() => { try { return dismissible && sessionStorage.getItem(DISMISS_KEY) === '1'; } catch { return false; } });
  if (!SALE || hidden) return null;
  const dismiss = (e) => { e.preventDefault(); e.stopPropagation(); setHidden(true); try { sessionStorage.setItem(DISMISS_KEY, '1'); } catch { /* noop */ } };

  if (variant === 'chip') {
    return (
      <SaleTooltip className={className} testId={testId} align="right">
        <span className="sale-chip inline-flex items-center gap-1.5 h-8 pl-1.5 pr-3 rounded-full bg-white t-label-lg font-semibold shadow-[0_2px_10px_rgba(0,0,0,0.25)] ring-1 ring-black/5" style={{ color: T.ink }} data-testid={testId}>
          <T.Lead size={20} />
          <span className="tracking-wide">{OFF}% OFF</span>
        </span>
      </SaleTooltip>
    );
  }

  if (variant === 'tag') {
    return (
      <SaleTooltip className={className} testId={testId}>
        <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 t-label-lg ring-1" style={{ background: T.inkSoft, color: T.ink, borderColor: T.ring, boxShadow: `inset 0 0 0 1px ${T.ring}` }} data-testid={testId}>
          <T.Lead size={18} /><span>{SALE.name} · {OFF}% off</span><T.Trail size={18} />
        </span>
      </SaleTooltip>
    );
  }

  return (
    <SaleTooltip className={className} testId={testId}>
      <span className="sale-pill relative inline-flex items-center gap-3 h-12 pl-1.5 pr-2 rounded-full bg-white text-onsurface shadow-[0_6px_24px_rgba(0,0,0,0.25)]" style={{ boxShadow: `0 6px 24px rgba(0,0,0,0.25), inset 0 0 0 1px ${T.ring}` }} data-testid={testId}>
        <span className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: T.inkSoft }}><T.Lead size={24} /></span>
        <span className="flex flex-col leading-tight text-left">
          <span className="t-label-lg" style={{ color: T.ink }}>{SALE.name}</span>
          <span className="text-[12px] leading-[16px] text-onsurface-variant">{SALE.tagline} · {SALE.endsLabel}</span>
        </span>
        <T.Trail size={24} className="shrink-0" />
        {dismissible && (
          <button type="button" onClick={dismiss} aria-label="Hide sale banner" className="ml-0.5 w-7 h-7 rounded-full flex items-center justify-center text-onsurface-variant hover:bg-onsurface/[0.06] hover:text-onsurface transition-colors" data-testid={`${testId}-close`}>
            <X size={16} strokeWidth={2.2} />
          </button>
        )}
        <Sparkle size={11} className="sale-sparkle sale-sparkle-a" style={{ color: T.accent }} />
        <Sparkle size={8} className="sale-sparkle sale-sparkle-b" style={{ color: T.accent }} />
        <Sparkle size={7} className="sale-sparkle sale-sparkle-c" style={{ color: T.accent }} />
      </span>
    </SaleTooltip>
  );
}
