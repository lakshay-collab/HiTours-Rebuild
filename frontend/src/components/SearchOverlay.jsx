import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import SearchBar from './SearchBar';

// Airbnb style expanding search: dims the page and drops the homepage search in from the top.
export default function SearchOverlay({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = overflow; window.removeEventListener('keydown', onKey); };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[130]" role="dialog" aria-modal="true" aria-label="Search destinations and travel styles" data-testid="search-overlay">
      <button type="button" aria-label="Close search" onClick={onClose} className="absolute inset-0 bg-[#002131]/55 backdrop-blur-[3px] animate-[hi-fade-in_220ms_ease-out]" data-testid="search-overlay-backdrop" />
      <div className="absolute inset-x-0 top-0 sm:top-[9vh] flex justify-center px-0 sm:px-6 pointer-events-none">
        <div className="pointer-events-auto w-full sm:max-w-[760px] bg-surface rounded-b-3xl sm:rounded-3xl shadow-[0_30px_80px_rgba(0,33,49,0.45)] overflow-hidden origin-top animate-[hi-search-pop_380ms_cubic-bezier(.22,.61,.36,1)]" data-testid="search-overlay-panel">
          <div className="flex items-center justify-between px-5 sm:px-7 pt-4 sm:pt-6">
            <div>
              <p className="t-title-md text-onsurface" data-testid="search-overlay-title">Where to next?</p>
              <p className="t-body-md text-onsurface-variant">Search a destination or a travel style</p>
            </div>
            <button type="button" onClick={onClose} aria-label="Close" className="w-10 h-10 rounded-full flex items-center justify-center text-onsurface hover:bg-onsurface/[0.06] transition-colors" data-testid="search-overlay-close"><X size={22} /></button>
          </div>
          <div className="px-4 sm:px-7 pt-4 pb-5 sm:pb-7">
            <SearchBar id="overlay" autoFocus inline onPick={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}
