import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const ADVENTURE_ID = 'start-your-next-adventure';
export const WHY_ID = 'why-hi-tours';
export const HOME_ADVENTURE_HREF = `/#${ADVENTURE_ID}`;
const KEY = 'hi-from-home';
const DEST_PREFIXES = ['/asien', '/europa', '/afrika', '/trip-styles', '/themes'];

const read = () => { try { return sessionStorage.getItem(KEY) === '1'; } catch { return false; } };
export const markFromHome = () => { try { sessionStorage.setItem(KEY, '1'); } catch { /* noop */ } };
export const clearFromHome = () => { try { sessionStorage.removeItem(KEY); } catch { /* noop */ } };

// Capture-phase click handler for the Home page: flags internal destination navigations.
export const trackDestinationClick = (e) => {
  const a = e.target.closest && e.target.closest('a[href]');
  if (!a) return;
  const href = a.getAttribute('href') || '';
  if (!href.startsWith('/')) return;
  const path = href.split(/[?#]/)[0];
  if (DEST_PREFIXES.some((p) => path === p || path.startsWith(`${p}/`))) markFromHome();
};

// Returns { href, onClick } for any "Home" link; redirects to the adventure section when the user came from Home.
export function useHomeLink() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const active = pathname !== '/' && read();
  const onClick = useCallback((e) => {
    if (pathname === '/' || !read()) return;
    e.preventDefault();
    navigate(HOME_ADVENTURE_HREF);
  }, [pathname, navigate]);
  return { href: active ? HOME_ADVENTURE_HREF : '/', onClick };
}

export const scrollToSection = (id, preJump = 0) => {
  const el = document.getElementById(id);
  if (!el) return false;
  const target = el.getBoundingClientRect().top + window.scrollY;
  if (preJump) window.scrollTo({ top: Math.max(0, target - preJump), behavior: 'auto' });
  requestAnimationFrame(() => window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' }));
  return true;
};

export const scrollToAdventure = () => scrollToSection(ADVENTURE_ID, 320);
