import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Phone, Menu, X, ChevronDown, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { nav } from '../mock';
import MobileDrawer from './MobileDrawer';
import SearchOverlay from './SearchOverlay';
import ExpertAdvicePanel from './ExpertAdvicePanel';
import { DestinationsMenu, ThemesMenu } from './DesktopMenus';
import { useHomeLink, scrollToSection, WHY_ID } from '../lib/homeReturn';
import { useLocation } from 'react-router-dom';
import { SALE, saleBadgePercent } from '../sale';
import { themeOf } from './sale/saleThemes';
import SaleConfetti from './sale/SaleConfetti';
import { SaleTooltip } from './sale/SaleBadge';

const T = themeOf(SALE);
const OFF = saleBadgePercent();

const BANNER_KEY = SALE ? `hi-banner-dismissed-${SALE.id}` : 'hi-banner-dismissed';

const MENUS = [
  { key: 'destinations', label: 'Destinations' }
];

const pad = (n) => String(n).padStart(2, '0');
// Live "ends in" ticker for the sale bar (sale ends end-of-day IST).
const SaleCountdown = ({ className = '' }) => {
  const end = new Date(`${SALE.ends}T23:59:59+05:30`).getTime();
  const [left, setLeft] = useState(() => Math.max(0, end - Date.now()));
  useEffect(() => { const t = setInterval(() => setLeft(Math.max(0, end - Date.now())), 1000); return () => clearInterval(t); }, [end]);
  const s = Math.floor(left / 1000);
  const parts = [[Math.floor(s / 86400), 'd'], [Math.floor((s % 86400) / 3600), 'h'], [Math.floor((s % 3600) / 60), 'm'], [s % 60, 's']];
  return (
    <span className={`inline-flex items-center gap-[3px] sm:gap-1 whitespace-nowrap ${className}`} data-testid="sale-countdown" aria-live="off">
      <span className="text-white/80"><span className="sm:hidden">Ends</span><span className="hidden sm:inline">Ends in</span></span>
      {parts.map(([v, u]) => (
        <span key={u} className={`${u === 's' ? 'hidden sm:inline-flex' : 'inline-flex'} items-baseline rounded-md bg-white/15 px-1 sm:px-1.5 py-px font-semibold tabular-nums text-white`}>{pad(v)}<span className="text-[9px] sm:text-[10px] text-white/70 ml-px">{u}</span></span>
      ))}
    </span>
  );
};
const LINKS = [
  { label: 'About us', href: '/about' },
  { label: 'Why Us?', href: `/#${WHY_ID}`, hash: WHY_ID }
];

export default function Header({ overlay = false, floating = false }) {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeSearch = useCallback(() => setSearchOpen(false), []);
  const [adviceOpen, setAdviceOpen] = useState(false);
  const [menu, setMenu] = useState(null);
  const home = useHomeLink();
  const { pathname } = useLocation();
  // Same-page hash links: scroll directly (the hash effect won't re-fire if the hash is unchanged).
  const onLink = (l) => (e) => { if (l.hash && pathname === '/') { e.preventDefault(); scrollToSection(l.hash, 320); window.history.replaceState(null, '', l.href); } };
  const [scrolled, setScrolled] = useState(false);
  const adviceRef = useRef(null);
  const adviceRefFloat = useRef(null);
  const hoverTimer = useRef(null);
  const menuTimer = useRef(null);
  const [bannerOpen, setBannerOpen] = useState(() => {
    try { return sessionStorage.getItem(BANNER_KEY) !== '1'; } catch { return true; }
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onDoc = (e) => { if (adviceRef.current && !adviceRef.current.contains(e.target) && adviceRefFloat.current && !adviceRefFloat.current.contains(e.target)) setAdviceOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  // Home page only: switch to the floating centered nav after the hero is scrolled past.
  useEffect(() => {
    if (!floating) return undefined;
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [floating]);

  // The page has its own search bars (hero and the "Start your next adventure" block). While any of
  // them is on screen the duplicate magnifier in the header is noise, so hide it until they scroll away.
  const [pageSearchVisible, setPageSearchVisible] = useState(false);
  useEffect(() => {
    let io;
    let tries = 0;
    let raf;
    const seen = new Map();
    const attach = () => {
      const els = [...document.querySelectorAll('[data-testid$="-search-form"]')]
        .filter((el) => el.dataset.testid !== 'overlay-search-form');
      if (!els.length) {
        // Header mounts before the page body, so poll a few frames before giving up.
        if (tries++ < 30) { raf = requestAnimationFrame(attach); } else { setPageSearchVisible(false); }
        return;
      }
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => seen.set(e.target, e.isIntersecting));
        setPageSearchVisible([...seen.values()].some(Boolean));
      }, { threshold: 0.2 });
      els.forEach((el) => io.observe(el));
    };
    setPageSearchVisible(false);
    attach();
    return () => { if (io) io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [pathname]);

  const dismissBanner = () => {
    try { sessionStorage.setItem(BANNER_KEY, '1'); } catch (e) { /* noop */ }
    setBannerOpen(false);
  };

  // Seen once per session: mark immediately, then fade the sale bar out after 15s.
  useEffect(() => {
    if (!bannerOpen) return undefined;
    try { sessionStorage.setItem(BANNER_KEY, '1'); } catch (e) { /* noop */ }
    const t = setTimeout(() => setBannerOpen(false), 20000);
    return () => clearTimeout(t);
  }, [bannerOpen]);

  const hoverIn = () => { clearTimeout(hoverTimer.current); setAdviceOpen(true); };
  const hoverOut = () => { hoverTimer.current = setTimeout(() => setAdviceOpen(false), 120); };

  const openMenu = (key) => { clearTimeout(menuTimer.current); setMenu(key); };
  const closeMenu = () => { menuTimer.current = setTimeout(() => setMenu(null), 140); };
  const keepMenu = () => clearTimeout(menuTimer.current);
  const closeNow = () => { clearTimeout(menuTimer.current); setMenu(null); };

  const textCls = overlay ? 'text-white' : 'text-onsurface';
  const dividerCls = overlay ? 'bg-white/30' : 'bg-outline-variant';

  const banner = bannerOpen ? (
    <div className={`relative text-white pl-2 pr-8 sm:px-12 py-2 t-body-md text-center overflow-visible ${SALE ? T.bar : 'bg-deep-water'}`} data-testid="top-banner">
      {SALE ? (
        <SaleTooltip testId="top-banner-sale">
          <span className="relative z-[1] flex sm:inline-flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap text-[11px] sm:text-[14px] leading-5 cursor-default">
            <T.Lead size={18} className="shrink-0 sm:hidden" />
            <T.Lead size={22} className="shrink-0 hidden sm:block" />
            <span className="font-semibold tracking-wide"><span className="sm:hidden">{SALE.short}</span><span className="hidden sm:inline">{SALE.name}</span></span>
            <span className="hidden sm:inline text-white/60">·</span>
            <span className="font-medium" style={{ color: T.accent }}><span className="sm:hidden">{OFF}% off</span><span className="hidden sm:inline">{SALE.tagline}</span></span>
            <span className="hidden sm:inline text-white/60">·</span>
            <SaleCountdown className="text-[10.5px] sm:text-[13px]" />
            <T.Trail size={22} className="shrink-0 hidden sm:inline" />
          </span>
        </SaleTooltip>
      ) : nav.banner}
      {SALE && <SaleConfetti />}
      <button onClick={dismissBanner} aria-label="Dismiss" data-testid="banner-close" className="absolute right-1.5 sm:right-3 top-1/2 -translate-y-1/2 p-1 text-white/80 hover:text-white transition-colors z-[3]">
        <X size={18} strokeWidth={2} />
      </button>
    </div>
  ) : null;

  const bar = (
    <div className="tl-wide h-[72px] flex items-center justify-between">
      <a href={home.href} onClick={home.onClick} aria-label="Hi Tours" data-testid="logo-link">
        <Logo white={overlay} className="h-10 sm:h-11 w-auto" />
      </a>

      <nav className="hidden lg:flex items-center h-full" data-testid="desktop-nav">
        {MENUS.map((m) => (
          <div key={m.key} className="relative h-full flex items-center" onMouseEnter={() => openMenu(m.key)} onMouseLeave={closeMenu}>
            <button
              className={`flex items-center gap-1 t-body-md ${textCls} hover:opacity-75 transition-opacity whitespace-nowrap px-4`}
              onClick={() => setMenu((v) => (v === m.key ? null : m.key))}
              aria-expanded={menu === m.key}
              data-testid={`nav-${m.key}`}
            >
              {m.label}
              <ChevronDown size={16} strokeWidth={2} className={`transition-transform duration-200 ${menu === m.key ? 'rotate-180' : ''}`} />
            </button>
            <span className={`absolute inset-x-2 bottom-0 h-[3px] rounded-t-sm transition-opacity duration-200 ${menu === m.key ? 'opacity-100' : 'opacity-0'} ${overlay ? 'bg-white' : 'bg-primary'}`} />
          </div>
        ))}
        {LINKS.map((l) => (
          <Link key={l.label} to={l.href} onClick={onLink(l)} className={`t-body-md ${textCls} hover:opacity-75 transition-opacity whitespace-nowrap px-4`} data-testid={`nav-${l.label.toLowerCase().replace(/[^a-z]+/g, '-').replace(/-$/, '')}`}>
            {l.label}
          </Link>
        ))}
        <span className={`h-6 w-px ${dividerCls} mx-4`} />
        <button onClick={() => setSearchOpen(true)} aria-label="Search destinations" className={`w-10 h-10 rounded-full flex items-center justify-center ${textCls} hover:bg-black/5 ${overlay ? 'hover:bg-white/10' : ''} transition-colors mr-2`} data-testid="nav-search">
          <Search size={20} strokeWidth={1.75} />
        </button>
        <div className="relative h-full flex items-center" ref={adviceRef} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
          <button onClick={() => setAdviceOpen((v) => !v)} className={`flex items-center gap-2 t-body-md ${textCls} hover:opacity-75 transition-opacity`} data-testid="nav-phone" aria-expanded={adviceOpen}>
            <Phone size={18} strokeWidth={1.75} />
            {nav.phone}
          </button>
          <span className={`absolute inset-x-[-12px] bottom-0 h-[3px] rounded-t-sm transition-opacity duration-200 ${adviceOpen ? 'opacity-100' : 'opacity-0'} ${overlay ? 'bg-white' : 'bg-primary'}`} />
          {adviceOpen && (
            <div className="absolute right-[-12px] top-full pt-1 z-50" data-testid="advice-popover">
              <div className="w-[340px] bg-surface-low rounded-2xl shadow-[0_8px_24px_rgba(0,33,49,0.18)] overflow-hidden animate-[hi-fade-in_200ms_ease-out]">
                <ExpertAdvicePanel />
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="lg:hidden flex items-center -mr-2">
        {!pageSearchVisible && (
          <button className={`${textCls} w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors`} onClick={() => setSearchOpen(true)} aria-label="Search destinations" data-testid="mobile-search-toggle">
            <Search size={22} strokeWidth={1.75} />
          </button>
        )}
        <button className={`${textCls} w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors`} onClick={() => setOpen(true)} aria-label="Open menu" data-testid="mobile-menu-toggle">
          <Menu size={24} strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );

  const megaPanel = menu ? (
    <div
      className="hidden lg:block absolute inset-x-0 top-full z-50 bg-surface border-t border-outline-variant shadow-[0_12px_28px_rgba(0,33,49,0.12)] animate-[hi-fade-in_180ms_ease-out]"
      onMouseEnter={keepMenu}
      onMouseLeave={closeMenu}
      data-testid="mega-menu-panel"
    >
      {menu === 'destinations' && <DestinationsMenu onNavigate={closeNow} />}
      {menu === 'themes' && <ThemesMenu onNavigate={closeNow} />}
    </div>
  ) : null;

  const floatingNav = floating ? (
    <>
      {/* Desktop: centered floating pill nav (glassmorphism) – home page, after hero */}
      <div
        className={`hidden lg:block fixed top-4 left-1/2 -translate-x-1/2 z-[60] transition-all duration-500 ease-out ${scrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-5 pointer-events-none'}`}
        data-testid="floating-nav"
      >
        <nav className="flex items-center gap-1 rounded-full bg-white/70 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_10px_34px_rgba(0,33,49,0.16)] pl-2.5 pr-2 py-1.5">
          <a href={home.href} onClick={home.onClick} aria-label="Hi Tours" data-testid="floating-logo" className="flex items-center pr-1"><Logo className="h-7 w-auto" /></a>
          <span className="h-6 w-px bg-onsurface/15 mx-1" />
          {MENUS.map((m) => (
            <div key={m.key} className="relative" onMouseEnter={() => openMenu(m.key)} onMouseLeave={closeMenu}>
              <button
                onClick={() => setMenu((v) => (v === m.key ? null : m.key))}
                aria-expanded={menu === m.key}
                data-testid={`float-nav-${m.key}`}
                className={`flex items-center gap-1 t-body-md rounded-full px-4 py-2 transition-colors ${menu === m.key ? 'bg-onsurface/[0.07] text-onsurface' : 'text-onsurface hover:bg-onsurface/[0.05]'}`}
              >
                {m.label}
                <ChevronDown size={16} strokeWidth={2} className={`transition-transform duration-200 ${menu === m.key ? 'rotate-180' : ''}`} />
              </button>
            </div>
          ))}
          {LINKS.map((l) => (
            <Link key={l.label} to={l.href} onClick={onLink(l)} className="t-body-md rounded-full px-4 py-2 text-onsurface hover:bg-onsurface/[0.05] transition-colors whitespace-nowrap" data-testid={`float-nav-${l.label.toLowerCase().replace(/[^a-z]+/g, '-').replace(/-$/, '')}`}>{l.label}</Link>
          ))}
          <span className="h-6 w-px bg-onsurface/15 mx-1" />
          <button onClick={() => setSearchOpen(true)} aria-label="Search destinations" className="w-9 h-9 rounded-full flex items-center justify-center text-onsurface hover:bg-onsurface/[0.06] transition-colors" data-testid="float-nav-search"><Search size={18} strokeWidth={1.75} /></button>
          <div className="relative" ref={adviceRefFloat} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
            <button onClick={() => setAdviceOpen((v) => !v)} className="flex items-center gap-2 t-body-md rounded-full px-4 py-2 text-onsurface hover:bg-onsurface/[0.05] transition-colors" data-testid="float-nav-phone" aria-expanded={adviceOpen}>
              <Phone size={18} strokeWidth={1.75} />
              {nav.phone}
            </button>
            {adviceOpen && (
              <div className="absolute right-0 top-full pt-2 z-[61]" data-testid="float-advice-popover">
                <div className="w-[340px] bg-surface-low rounded-2xl shadow-[0_8px_24px_rgba(0,33,49,0.18)] overflow-hidden animate-[hi-fade-in_200ms_ease-out]">
                  <ExpertAdvicePanel />
                </div>
              </div>
            )}
          </div>
        </nav>
        {menu && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[min(1240px,96vw)]" onMouseEnter={keepMenu} onMouseLeave={closeMenu} data-testid="floating-mega-panel">
            <div className="bg-surface rounded-2xl border border-outline-variant shadow-[0_16px_40px_rgba(0,33,49,0.18)] overflow-hidden animate-[hi-fade-in_180ms_ease-out]">
              {menu === 'destinations' && <DestinationsMenu onNavigate={closeNow} idPrefix="float-" />}
              {menu === 'themes' && <ThemesMenu onNavigate={closeNow} />}
            </div>
          </div>
        )}
      </div>

      {/* Mobile: compact floating pill with logo + hamburger (keeps the existing drawer) */}
      <div className={`lg:hidden fixed top-3 left-1/2 -translate-x-1/2 z-[60] transition-all duration-500 ease-out ${scrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-5 pointer-events-none'}`} data-testid="floating-nav-mobile">
        <div className="flex items-center gap-3 rounded-full bg-white/75 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_10px_30px_rgba(0,33,49,0.16)] pl-4 pr-2 py-1.5">
          <a href={home.href} onClick={home.onClick} aria-label="Hi Tours"><Logo className="h-6 w-auto" /></a>
          {!pageSearchVisible && (
            <button onClick={() => setSearchOpen(true)} aria-label="Search destinations" data-testid="floating-mobile-search" className="w-9 h-9 rounded-full flex items-center justify-center text-onsurface hover:bg-onsurface/[0.06] transition-colors">
              <Search size={19} strokeWidth={1.75} />
            </button>
          )}
          <button onClick={() => setOpen(true)} aria-label="Open menu" data-testid="floating-mobile-menu" className={`w-9 h-9 rounded-full flex items-center justify-center text-onsurface hover:bg-onsurface/[0.06] transition-colors ${pageSearchVisible ? '' : '-ml-2'}`}>
            <Menu size={20} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </>
  ) : null;

  return (
    <>
      {overlay ? (
        <div className="absolute inset-x-0 top-0 z-40" data-testid="site-header">
          {banner}
          <div className="relative">
            {bar}
            {megaPanel}
          </div>
        </div>
      ) : (
        <>
          {banner}
          <header className="relative z-40 bg-surface border-b border-outline-variant" data-testid="site-header">
            {bar}
            {megaPanel}
          </header>
        </>
      )}
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={closeSearch} />
      {floatingNav}
    </>
  );
}
