import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, Search, Check } from 'lucide-react';
import { getCountries, getCountryCallingCode, parsePhoneNumberFromString, isValidPhoneNumber } from 'libphonenumber-js/max';
import metadata from 'libphonenumber-js/metadata.max.json';

const ALIASES = { AE: 'UAE', US: 'USA', GB: 'UK' };
const names = typeof Intl !== 'undefined' && Intl.DisplayNames ? new Intl.DisplayNames(['en'], { type: 'region' }) : null;
const regionName = (iso) => { try { return names?.of(iso) || iso; } catch { return iso; } };

export const COUNTRIES = getCountries()
  .map((iso) => ({ iso, name: regionName(iso), dial: `+${getCountryCallingCode(iso)}`, alias: ALIASES[iso] || '' }))
  .sort((a, b) => a.name.localeCompare(b.name));
const BY_ISO = Object.fromEntries(COUNTRIES.map((c) => [c.iso, c]));
export const DEFAULT_COUNTRY = 'IN';
export const EMPTY_PHONE = { country: DEFAULT_COUNTRY, number: '' };

// Parse an international number; keep the current country if it shares the calling code, else use the main country for that code.
const parseIntl = (raw, current) => {
  const parsed = parsePhoneNumberFromString(raw);
  if (!parsed?.countryCallingCode) return null;
  const code = parsed.countryCallingCode;
  const country = getCountryCallingCode(current) === code ? current : (metadata.country_calling_codes[code] || [])[0] || parsed.country;
  return country ? { country, national: parsed.nationalNumber } : null;
};

const Flag = ({ iso, className = 'w-5 h-[14px]' }) => (
  <img src={`https://flagcdn.com/w40/${iso.toLowerCase()}.png`} srcSet={`https://flagcdn.com/w80/${iso.toLowerCase()}.png 2x`} alt="" aria-hidden="true" className={`${className} rounded-[2px] object-cover shrink-0`} loading="lazy" />
);

// Resolve the typed value to a country + national number (handles pasted "+91 98…" / "0091…").
export const normalizePhone = ({ country, number }) => {
  const raw = (number || '').trim().replace(/^00/, '+');
  if (raw.startsWith('+')) {
    const parsed = parseIntl(raw, country);
    return parsed || { country, national: raw.replace(/\D/g, '') };
  }
  return { country, national: raw.replace(/\D/g, '') };
};

export const phoneError = (value) => {
  const { country, national } = normalizePhone(value);
  if (!national) return 'Please enter your phone number';
  return isValidPhoneNumber(national, country) ? '' : `Please enter a valid ${BY_ISO[country]?.name || ''} phone number`.replace('  ', ' ');
};

export const phonePayload = (value) => {
  const { country, national } = normalizePhone(value);
  return { phone: national, country_code: BY_ISO[country]?.dial || '' };
};

const stripDoubleCode = (digits, country) => {
  const dial = getCountryCallingCode(country);
  if (!digits.startsWith(dial) || digits.length <= dial.length) return digits;
  const rest = digits.slice(dial.length);
  return isValidPhoneNumber(rest, country) && !isValidPhoneNumber(digits, country) ? rest : digits;
};

function CountryPicker({ anchor, value, onPick, onClose, testId }) {
  const [q, setQ] = useState('');
  const [pos, setPos] = useState(null);
  const listRef = useRef(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  useEffect(() => {
    if (isMobile || !anchor) return undefined;
    const place = () => {
      const r = anchor.getBoundingClientRect();
      const below = window.innerHeight - r.bottom > 340 || r.top < 340;
      setPos(below ? { top: r.bottom + 6, left: r.left, width: r.width } : { bottom: window.innerHeight - r.top + 6, left: r.left, width: r.width });
    };
    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [anchor, isMobile]);

  const items = useMemo(() => {
    const s = q.trim().toLowerCase().replace(/^\+/, '');
    if (!s) return COUNTRIES;
    return COUNTRIES.filter((c) => c.name.toLowerCase().includes(s) || c.iso.toLowerCase() === s || c.alias.toLowerCase() === s || c.dial.slice(1).startsWith(s));
  }, [q]);

  useEffect(() => { listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'center' }); }, []);

  const onKey = (e) => {
    if (e.key === 'Escape') { e.stopPropagation(); onClose(); }
    if (e.key === 'Enter' && items[0]) { e.preventDefault(); onPick(items[0].iso); }
  };

  const panel = (
    <div className={`eg flex flex-col bg-white border border-[#C4CBD0] shadow-[0_18px_48px_rgba(0,33,49,0.22)] overflow-hidden ${isMobile ? 'fixed inset-x-0 bottom-0 rounded-t-2xl max-h-[72dvh]' : 'fixed rounded-xl max-h-[340px]'}`} style={isMobile ? undefined : pos || { visibility: 'hidden' }} onKeyDown={onKey} role="listbox" aria-label="Select country" data-testid={`${testId}-country-list`}>
      <div className="p-2.5 border-b border-[#E4E3DB]">
        <div className="flex items-center gap-2 h-10 rounded-lg border border-[#C4CBD0] bg-[#FBF9F1] px-3 focus-within:border-[#308BB6]">
          <Search size={16} className="text-[#6F777C] shrink-0" />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search country or code" className="flex-1 min-w-0 bg-transparent eg-body-md text-[#002131] placeholder:text-[#8A9297] focus:outline-none" data-testid={`${testId}-country-search`} />
        </div>
      </div>
      <ul ref={listRef} className="overflow-y-auto overscroll-contain py-1">
        {items.length === 0 && <li className="px-4 py-3 eg-body-md text-[#6F777C]">No countries found</li>}
        {items.map((c) => (
          <li key={c.iso} role="option" aria-selected={c.iso === value}>
            <button type="button" onClick={() => onPick(c.iso)} className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-[#F0EEE6] transition-colors ${c.iso === value ? 'bg-[#EAF4F9]' : ''}`} data-testid={`${testId}-country-${c.iso}`}>
              <Flag iso={c.iso} className="w-6 h-4" />
              <span className="flex-1 min-w-0 truncate eg-body-md text-[#002131]">{c.name}</span>
              <span className="eg-body-md text-[#174358] tabular-nums">{c.dial}</span>
              {c.iso === value && <Check size={16} className="text-[#308BB6] shrink-0" />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  return createPortal(
    <div className="fixed inset-0 z-[130]" data-testid={`${testId}-country-popover`}>
      <button type="button" aria-label="Close" onClick={onClose} className={`absolute inset-0 ${isMobile ? 'bg-[#002131]/40' : ''}`} data-testid={`${testId}-country-backdrop`} />
      {panel}
    </div>,
    document.body
  );
}

export default function PhoneInput({ value, onChange, className = '', inputClassName = '', placeholder = 'Enter your phone number', testId = 'phone' }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef(null);
  const country = BY_ISO[value.country] ? value.country : DEFAULT_COUNTRY;

  const onNumber = (e) => {
    let raw = e.target.value.replace(/[^\d+]/g, '');
    raw = raw[0] === '+' ? `+${raw.slice(1).replace(/\+/g, '')}` : raw.replace(/\+/g, '');
    if (raw.startsWith('+')) {
      const parsed = parseIntl(raw, country);
      if (parsed) return onChange({ country: parsed.country, number: parsed.national });
      return onChange({ country, number: raw.slice(0, 18) });
    }
    onChange({ country, number: stripDoubleCode(raw, country).slice(0, 15) });
  };

  const pick = (iso) => { onChange({ country: iso, number: stripDoubleCode(value.number.replace(/\D/g, ''), iso) }); setOpen(false); };

  return (
    <div ref={wrap} className={`flex items-stretch p-0 overflow-hidden ${className}`} data-testid={`${testId}-field`}>
      <button type="button" onClick={() => setOpen(true)} aria-haspopup="listbox" aria-expanded={open} aria-label={`Country: ${BY_ISO[country].name} ${BY_ISO[country].dial}`} className="flex items-center gap-1.5 pl-3.5 pr-2 border-r border-[#C4CBD0] bg-[#F7F5EE] hover:bg-[#F0EEE6] transition-colors shrink-0 focus:outline-none focus-visible:bg-[#F0EEE6]" data-testid={`${testId}-country-trigger`}>
        <Flag iso={country} />
        <span className="eg-body-lg text-[#002131] tabular-nums" data-testid={`${testId}-dial-code`}>{BY_ISO[country].dial}</span>
        <ChevronDown size={16} className={`text-[#174358] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <input type="tel" inputMode="tel" autoComplete="tel-national" value={value.number} onChange={onNumber} placeholder={placeholder} className={`flex-1 min-w-0 h-full px-3.5 bg-transparent eg-body-lg text-[#002131] placeholder:text-[#8A9297] focus:outline-none ${inputClassName}`} data-testid={testId} />
      {open && <CountryPicker anchor={wrap.current} value={country} onPick={pick} onClose={() => setOpen(false)} testId={testId} />}
    </div>
  );
}
