import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MapPin, Compass, Search, X, EyeOff, Heart, Users, Car, Binoculars, Umbrella, Mountain, Sparkles, TreePalm, Landmark, Gem, Sailboat, Timer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { hero } from '../mock';
import { destinations } from '../destinationsData';

const ROUTES = { 'Egypt': '/afrika/aegypten', 'Asia': '/asien', 'Vietnam': '/asien/vietnam', 'Thailand': '/asien/thailand', 'Sri Lanka': '/asien/sri-lanka', 'Malaysia': '/asien/malaysia', 'Singapore': '/asien/singapore', 'Kazakhstan': '/asien/kazakhstan', 'Bhutan': '/asien/bhutan', 'Maldives': '/asien/maldives', "Laos": '/asien/laos', "Japan": '/asien/japan', "Indonesia": '/asien/indonesia', "China": '/asien/china', "Cambodia": '/asien/cambodia', "Philippines": '/asien/philippines', "Iceland": '/europa/iceland', "Italy": '/europa/italy', "Greece": '/europa/greece', "Norway": '/europa/norway', "Ireland": '/europa/ireland', "Spain": '/europa/spain', "Portugal": '/europa/portugal', "Croatia": '/europa/croatia', "England": '/europa/england', "Scotland": '/europa/scotland', "Finland": '/europa/finland', "Sweden": '/europa/sweden' };
const ASIA_IMG = 'https://images.ctfassets.net/bth3mlrehms2/27MnAH4RS1zTSFygAmnq5i/97ec55278a94f2ab56c26847396201ba/Thailand_Natur.jpg?w=160&q=60&fm=webp';

const STYLES = [
  { name: 'Northern Lights', icon: Sparkles, to: '/trip-styles/northern-lights' },
  { name: 'Honeymoons', icon: Heart, to: '/afrika/aegypten/holidays/honeymoon' },
  { name: 'Family holidays', icon: Users, to: '/afrika/aegypten/holidays/family' },
  { name: 'Road trips', icon: Car },
  { name: 'Safari', icon: Binoculars },
  { name: 'Beach & relaxation', icon: Umbrella, to: '/afrika/aegypten/holidays/beach' },
  { name: 'Adventure', icon: Mountain },
  { name: 'Island hopping', icon: TreePalm },
  { name: 'Culture', icon: Landmark, to: '/afrika/aegypten/holidays/culture' },
  { name: 'Luxury', icon: Gem, to: '/afrika/aegypten/holidays/luxury' },
  { name: 'Nile cruise', icon: Sailboat, to: '/afrika/aegypten/holidays/nile-cruise' },
  { name: 'Short trips', icon: Timer, to: '/afrika/aegypten/holidays/short-trips' }
].map((s) => ({ ...s, kind: 'style' }));

const PROMPTS = [
  { icon: MapPin, text: hero.searchPlaceholder, short: hero.searchPlaceholderMobile },
  { icon: Compass, text: hero.searchPlaceholderStyle, short: hero.searchPlaceholderStyleMobile }
];

function buildDestinations() {
  const map = new Map();
  Object.values(destinations).forEach((list) => {
    list.forEach((d) => {
      if (!map.has(d.name)) map.set(d.name, { name: d.name, src: d.src, to: ROUTES[d.name] || null, kind: 'destination' });
    });
  });
  map.set('Asia', { name: 'Asia', src: ASIA_IMG, to: '/asien', kind: 'destination' });
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
  const destMatches = q ? all.filter((d) => d.name.toLowerCase().includes(q)) : all;
  const styleMatches = q ? STYLES.filter((s) => s.name.toLowerCase().includes(q)) : STYLES;
  const matches = [...destMatches, ...styleMatches];

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
    if (d.to) { navigate(d.to); onPick?.(d); }
  };

  const clear = () => {
    setSelected(null);
    setValue('');
    inputRef.current && inputRef.current.focus();
  };

  const submit = (e) => {
    e.preventDefault();
    const target = selected || matches.find((d) => d.to);
    if (target && target.to) { navigate(target.to); onPick?.(target); }
  };

  const active = selected && selected.kind === 'style' ? PROMPTS[1] : PROMPTS[0];
  const LeadIcon = selected && selected.kind === 'style' ? selected.icon : active.icon;

  return (
    <div ref={wrapRef} className="relative w-full">
      <form
        onSubmit={submit}
        className={`hi-search group flex items-center w-full h-14 sm:h-16 rounded-full pl-5 sm:pl-6 pr-2 ${focused ? 'is-focused' : ''} ${className}`}
        data-focused={focused}
        data-prompt={active === PROMPTS[1] ? 'style' : 'destination'}
        data-testid={`${id}-search-form`}
      >
        <span key={LeadIcon.displayName || active.text} className="shrink-0 flex animate-[hi-fade-in_300ms_ease-out]" data-testid={`${id}-search-icon`}>
          <LeadIcon size={20} strokeWidth={1.5} className={`text-primary/80 transition-[color,transform] duration-300 group-hover:text-primary ${focused ? 'text-primary animate-[hi-pin-nudge_500ms_ease-out]' : ''}`} />
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
            : 'absolute left-0 right-0 top-full mt-2 z-50 bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.12),0_12px_32px_rgba(0,0,0,0.18)] overflow-hidden origin-top animate-[hi-drop-in_260ms_cubic-bezier(.22,.61,.36,1)]'}
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
                key={`${d.kind}-${d.name}`}
                onClick={() => pick(d)}
                style={{ animationDelay: `${Math.min(idx, 8) * 35}ms` }}
                className="w-full flex items-center gap-4 px-5 py-2.5 text-left hover:bg-onsurface/[0.05] transition-colors opacity-0 animate-[hi-row-in_300ms_ease-out_forwards]"
                data-testid={`${id}-search-suggestion-${slug(d.name)}`}
                data-kind={d.kind}
              >
                {d.kind === 'style' ? (
                  <span className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center shrink-0 text-primary"><d.icon size={22} strokeWidth={1.75} /></span>
                ) : (
                  <img src={d.src} alt={d.name} loading="lazy" className="w-12 h-12 rounded-full object-cover shrink-0 bg-surface-highest" />
                )}
                <span className="t-body-lg text-onsurface">{d.name}</span>
                {d.kind === 'style' && <span className="ml-auto t-label-md text-onsurface-variant">{hero.searchStyleTag}</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
