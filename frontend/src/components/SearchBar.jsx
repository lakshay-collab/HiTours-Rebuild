import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MapPin, Search, X, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { hero } from '../mock';
import { destinations, COUNTRY_HREF } from '../destinationsData';

const ASIA_IMG = 'https://images.ctfassets.net/bth3mlrehms2/27MnAH4RS1zTSFygAmnq5i/97ec55278a94f2ab56c26847396201ba/Thailand_Natur.jpg?w=160&q=60&fm=webp';
const EUROPE_IMG = '/europe/hero-paris.webp';
// Extra words a destination should also match on. Europe carries the countries that have no page of
// their own, so 'Switzerland' or 'Paris' still lands the searcher on the continent page.
const ALIASES = new Map([
  ['Bali', 'Indonesia Ubud Seminyak Kuta Nusa Penida'],
  ['Europe', 'Switzerland Swiss France Paris Germany Netherlands Austria Belgium Alps Rome Venice Florence Milan Pisa Zurich Lucerne Interlaken Amsterdam Frankfurt Brussels Disneyland Eiffel']
]);

// Destination-only search: every live country page plus the two continent listings.
function buildDestinations() {
  const map = new Map();
  Object.values(destinations).forEach((list) => {
    list.forEach((d) => {
      if (!COUNTRY_HREF[d.name] || map.has(d.name)) return;
      map.set(d.name, { name: d.name, src: d.src, to: COUNTRY_HREF[d.name] });
    });
  });
  map.set('Asia', { name: 'Asia', src: ASIA_IMG, to: '/asia' });
  map.set('Europe', { name: 'Europe', src: EUROPE_IMG, to: '/europe' });
  ALIASES.forEach((alias, name) => { const d = map.get(name); if (d) map.set(name, { ...d, alias }); });
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
}

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const PLACEHOLDER = 'Search for destination';

export default function SearchBar({ id = 'hero', className = '', autoFocus = false, inline = false, onPick }) {
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState(null);
  const [focused, setFocused] = useState(inline);
  const navigate = useNavigate();
  const wrapRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => { if (autoFocus) setTimeout(() => inputRef.current?.focus(), 60); }, [autoFocus]);

  const all = useMemo(buildDestinations, []);
  const q = value.trim().toLowerCase();
  const matches = q ? all.filter((d) => `${d.name} ${d.alias || ''}`.toLowerCase().includes(q)) : all;

  useEffect(() => {
    if (inline) return undefined;
    const onDoc = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setFocused(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [inline]);

  const pick = (d) => {
    setSelected(d);
    setValue('');
    setFocused(inline);
    navigate(d.to);
    onPick?.(d);
  };

  const clear = () => {
    setSelected(null);
    setValue('');
    inputRef.current && inputRef.current.focus();
  };

  const submit = (e) => {
    e.preventDefault();
    const target = selected || matches[0];
    if (target) { navigate(target.to); onPick?.(target); }
  };

  return (
    <div ref={wrapRef} className={`relative w-full ${focused && !inline ? 'z-[120]' : ''}`}>
      <form
        onSubmit={submit}
        className={`hi-search group flex items-center w-full h-14 sm:h-16 rounded-full pl-5 sm:pl-6 pr-2 ${focused ? 'is-focused' : ''} ${className}`}
        data-focused={focused}
        data-prompt="destination"
        data-testid={`${id}-search-form`}
      >
        <span className="shrink-0 flex" data-testid={`${id}-search-icon`}>
          <MapPin size={20} strokeWidth={1.5} className={`text-primary/80 transition-[color,transform] duration-300 group-hover:text-primary ${focused ? 'text-primary animate-[hi-pin-nudge_500ms_ease-out]' : ''}`} />
        </span>
        <div className="relative flex-1 min-w-0 h-full flex items-center px-3.5 sm:px-4">
          {selected ? (
            <span className="inline-flex items-center gap-1 max-w-full rounded-full bg-surface-variant pl-3 pr-1 h-9 t-body-lg text-onsurface" data-testid={`${id}-search-selected`}>
              <span className="truncate">{selected.name}</span>
              <button type="button" onClick={clear} aria-label={`Remove ${selected.name}`} className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors shrink-0" data-testid={`${id}-search-clear`}><X size={16} /></button>
            </span>
          ) : (
            <>
              <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                aria-label={PLACEHOLDER}
                className="w-full min-w-0 bg-transparent outline-none t-body-lg text-onsurface tracking-[0.01em]"
                data-testid={`${id}-search-input`}
                autoComplete="off"
              />
              {!value && (
                <span className="absolute inset-y-0 left-3.5 sm:left-4 right-4 flex items-center pointer-events-none t-body-lg text-primary/60 tracking-[0.01em] truncate transition-colors duration-300 group-hover:text-primary/75" data-testid={`${id}-search-placeholder`}>
                  {PLACEHOLDER}
                </span>
              )}
            </>
          )}
        </div>
        <button type="submit" aria-label={hero.cta} title={hero.cta} className="hi-search-btn shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white" data-testid={`${id}-search-submit`}><Search size={20} strokeWidth={2} /></button>
      </form>

      {focused && !selected && (
        <div
          className={inline
            ? 'mt-3 bg-white rounded-3xl border border-outline-variant/60 overflow-hidden animate-[hi-drop-in_260ms_cubic-bezier(.22,.61,.36,1)]'
            : 'absolute left-0 right-0 top-full mt-2 z-[120] bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.12),0_12px_32px_rgba(0,0,0,0.18)] overflow-hidden origin-top animate-[hi-drop-in_260ms_cubic-bezier(.22,.61,.36,1)]'}
          data-testid={`${id}-search-suggestions`}
        >
          <div className={`${inline ? 'max-h-[min(52vh,420px)]' : 'max-h-[360px]'} overflow-y-auto py-2`}>
            {matches.length === 0 && (
              <div className="flex items-center gap-4 px-5 py-4" data-testid={`${id}-search-empty`}>
                <span className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-onsurface"><EyeOff size={26} strokeWidth={1.75} /></span>
                <div>
                  <p className="t-body-lg text-onsurface">{hero.searchEmptyTitle}</p>
                  <p className="t-body-md text-onsurface-variant mt-0.5">{hero.searchEmptyText}</p>
                </div>
              </div>
            )}
            {matches.map((d, idx) => (
              <button
                type="button"
                key={d.name}
                onClick={() => pick(d)}
                style={{ animationDelay: `${Math.min(idx, 8) * 35}ms` }}
                className="w-full flex items-center gap-4 px-5 py-2.5 text-left hover:bg-onsurface/[0.05] transition-colors opacity-0 animate-[hi-row-in_300ms_ease-out_forwards]"
                data-testid={`${id}-search-suggestion-${slug(d.name)}`}
                data-kind="destination"
              >
                <img src={d.src} alt={d.name} loading="lazy" className="w-12 h-12 rounded-full object-cover shrink-0 bg-surface-highest" />
                <span className="t-body-lg text-onsurface">{d.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
