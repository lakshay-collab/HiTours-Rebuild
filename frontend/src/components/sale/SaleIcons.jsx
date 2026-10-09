import React from 'react';

// Santa hat with a bold white fur band + pompom so it reads on red, dark and photo backgrounds.
export const SantaHat = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} className={`hat-wiggle ${className}`} aria-hidden="true">
    <path d="M6 22.5C7.2 12.5 13 6.2 21.2 5.4c2.6-.3 4.6 1 4.6 3 0 1.3-1 2.1-2.4 2.5-3 .9-4.4 5.2-4.4 11.6H6z" fill="#E8333A" />
    <path d="M9.4 22.5c.6-7.6 4.2-13.2 10.4-15.3-3.9 3-6.1 8.2-6.6 15.3H9.4z" fill="#FF7B80" opacity=".7" />
    <rect x="3.5" y="21.5" width="21.5" height="6.5" rx="3.25" fill="#FFFFFF" stroke="#D2CCBE" strokeWidth=".9" />
    <circle cx="26.6" cy="8.2" r="3.4" fill="#FFFFFF" stroke="#D2CCBE" strokeWidth=".9" />
  </svg>
);

// Golden bells with a red bow; each bell swings on its own.
export const Bells = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} className={className} aria-hidden="true">
    <g className="bell-swing" style={{ transformOrigin: '12px 9px' }}>
      <path d="M12 9.5c-3.6 0-6.1 2.8-6.1 6.4v4.6L4.2 22.7h15.6l-1.7-2.2v-4.6c0-3.6-2.5-6.4-6.1-6.4z" fill="#F4B942" stroke="#C98A1C" strokeWidth=".8" />
      <circle cx="12" cy="24.4" r="1.7" fill="#C98A1C" />
    </g>
    <g className="bell-swing-b" style={{ transformOrigin: '21px 11px' }}>
      <path d="M21 11.3c-3.1 0-5.3 2.4-5.3 5.5v4l-1.4 1.9h13.4l-1.4-1.9v-4c0-3.1-2.2-5.5-5.3-5.5z" fill="#FFD166" stroke="#C98A1C" strokeWidth=".8" />
      <circle cx="21" cy="24.2" r="1.5" fill="#C98A1C" />
    </g>
    <path d="M16 8.2l-2.9-2.3c-.9-.7-.4-2.1.7-2.2L16 4.6l2.2-.9c1.1.1 1.6 1.5.7 2.2L16 8.2z" fill="#E8333A" />
  </svg>
);

export const Sparkle = ({ size = 10, className = '', style }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} style={style} aria-hidden="true">
    <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" fill="currentColor" />
  </svg>
);

// Festive price tag with a bold % and a gold ribbon; reads cleanly on red, dark and photo backgrounds.
export const SaleTag = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} className={`tag-swing ${className}`} aria-hidden="true">
    <path d="M4 14.5V6.2C4 5 5 4 6.2 4h8.3c.6 0 1.1.2 1.5.6L28.4 17c.9.9.9 2.3 0 3.1l-8.3 8.3c-.9.9-2.3.9-3.1 0L4.6 16c-.4-.4-.6-.9-.6-1.5z" fill="#FFD166" stroke="#C98A1C" strokeWidth="1" strokeLinejoin="round" />
    <circle cx="9.5" cy="9.5" r="2" fill="#FFFFFF" stroke="#C98A1C" strokeWidth="1" />
    <path d="M9.5 9.5 3 3" stroke="#C98A1C" strokeWidth="1.4" strokeLinecap="round" />
    <text x="17.4" y="21.6" textAnchor="middle" fontFamily="Instrument Sans, Inter, sans-serif" fontSize="10.5" fontWeight="700" fill="#A3181D" transform="rotate(-45 17.4 18.6)">%</text>
    <path d="M26 5l.9 2.3 2.3.9-2.3.9L26 11.4l-.9-2.3-2.3-.9 2.3-.9z" fill="#FFFFFF" />
  </svg>
);

// --- Diwali: a clay diya with a living flame, plus a firework burst ---
export const Diya = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} className={className} aria-hidden="true">
    <g className="diya-flame" style={{ transformOrigin: '16px 16px' }}>
      <path d="M16 4c2.6 3.1 4 5.5 4 7.6 0 2.4-1.8 4.2-4 4.2s-4-1.8-4-4.2C12 9.5 13.4 7.1 16 4z" fill="#FFB020" />
      <path d="M16 8.6c1.3 1.8 2 3.1 2 4.2 0 1.3-.9 2.2-2 2.2s-2-.9-2-2.2c0-1.1.7-2.4 2-4.2z" fill="#FFF2C2" />
    </g>
    <path d="M4.5 19h23c0 4.4-4.6 7.6-11.5 7.6S4.5 23.4 4.5 19z" fill="#C2410C" />
    <path d="M4.5 19h23c0 1.5-.5 2.8-1.5 3.9H6c-1-1.1-1.5-2.4-1.5-3.9z" fill="#E0611F" />
    <ellipse cx="16" cy="19" rx="11.5" ry="2.1" fill="#FCD9A8" />
  </svg>
);

export const Firework = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} className={className} aria-hidden="true">
    <g className="firework-burst" style={{ transformOrigin: '16px 16px' }} stroke="#FFD166" strokeWidth="2" strokeLinecap="round">
      <path d="M16 3v6M16 23v6M3 16h6M23 16h6" />
      <path d="M7 7l4 4M21 21l4 4M25 7l-4 4M11 21l-4 4" stroke="#FF8A3D" />
    </g>
    <circle cx="16" cy="16" r="3" fill="#FFF2C2" />
  </svg>
);

export const Rangoli = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} className={className} aria-hidden="true">
    <circle cx="16" cy="16" r="13" fill="none" stroke="#FFD166" strokeWidth="1.6" strokeDasharray="3 3" />
    <g fill="#FF8A3D">
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse key={a} cx="16" cy="8.5" rx="3" ry="5" transform={`rotate(${a} 16 16)`} />
      ))}
    </g>
    <circle cx="16" cy="16" r="3.4" fill="#C2410C" />
  </svg>
);

// --- Year-end: a glass bauble and a champagne pop, no Santa hats ---
export const Bauble = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} className={`bauble-swing ${className}`} aria-hidden="true" style={{ transformOrigin: '16px 3px' }}>
    <path d="M16 3v4.5" stroke="#C9A227" strokeWidth="1.6" strokeLinecap="round" />
    <rect x="13.4" y="6.6" width="5.2" height="3.4" rx="1.2" fill="#E8C66A" />
    <circle cx="16" cy="19" r="9" fill="#0F6E5C" />
    <path d="M7.3 17.2c3-2.8 7.4-4.4 12.2-4.4 2 0 3.9.3 5.6.8-.4-2.4-1.8-4.5-3.8-5.8-1.7-.5-3.5-.8-5.3-.8-4.9 0-8.1 4.4-8.7 10.2z" fill="#14876F" opacity=".85" />
    <path d="M12.1 13.4c.9-1.1 2.1-1.9 3.4-2.2" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" opacity=".8" />
    <path d="M7.4 21.6h17.2" stroke="#E8C66A" strokeWidth="1.3" />
  </svg>
);

export const Champagne = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} className={className} aria-hidden="true">
    <path d="M11 5h10l-1.2 8.4A4 4 0 0 1 16 17a4 4 0 0 1-3.8-3.6z" fill="#F4B942" />
    <path d="M11 5h10l-.4 2.8H11.4z" fill="#FFF2C2" />
    <path d="M16 17v7" stroke="#C98A1C" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M11.5 25.5h9" stroke="#C98A1C" strokeWidth="2" strokeLinecap="round" />
    <g className="fizz" fill="#FFFFFF">
      <circle cx="23" cy="9" r="1.5" /><circle cx="26" cy="5.5" r="1.1" /><circle cx="21.5" cy="4.5" r="1" />
    </g>
  </svg>
);

// --- Republic Day / Independence Day: tricolour flag wave and a kite ---
export const Tricolour = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} className={className} aria-hidden="true">
    <path d="M6 5v23" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" />
    <g className="flag-wave" style={{ transformOrigin: '6px 8px' }}>
      <path d="M7 6c6-2.4 12-2.4 18 0v3.6c-6-2.4-12-2.4-18 0z" fill="#FF9933" />
      <path d="M7 9.6c6-2.4 12-2.4 18 0v3.6c-6-2.4-12-2.4-18 0z" fill="#FFFFFF" />
      <path d="M7 13.2c6-2.4 12-2.4 18 0v3.6c-6-2.4-12-2.4-18 0z" fill="#138808" />
      <circle cx="16" cy="11.4" r="1.7" fill="none" stroke="#0A3B8C" strokeWidth="1" />
    </g>
  </svg>
);

export const Kite = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} className={`kite-sway ${className}`} aria-hidden="true" style={{ transformOrigin: '16px 4px' }}>
    <path d="M16 3l8 8-8 8-8-8z" fill="#FF9933" />
    <path d="M16 3l8 8-8 8z" fill="#138808" />
    <path d="M8 11h16M16 3v16" stroke="#FFFFFF" strokeWidth="1.1" />
    <path d="M16 19c-2 2.5.8 4 .2 6.4-.5 2-2.4 2.6-3.6 3.6" stroke="#E8C66A" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

// --- Good Friday: a dove and a spring blossom ---
export const Dove = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} className={className} aria-hidden="true">
    <path d="M5 18c4.5 1.2 8.5.3 12-2.6 2.2-1.9 4-4.2 5.4-7 .7 2.6.5 5-.6 7.3 2-.6 3.6-1.8 4.9-3.6-.4 4.6-2.7 8-6.9 10.2-4.3 2.2-9 1.9-14-.9z" fill="#FFFFFF" stroke="#CBD5D8" strokeWidth=".9" />
    <path d="M12 15.4c2.6.5 4.9-.3 7-2.4-1 3.4-3.3 5.2-7 5.4z" fill="#E7EEF0" />
    <circle cx="23.4" cy="11.2" r="1" fill="#174358" />
    <path d="M9 23.4c2.2 1.4 4.6 2 7.2 1.8" stroke="#9FB7BF" strokeWidth="1.1" fill="none" strokeLinecap="round" />
  </svg>
);

export const Blossom = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} className={className} aria-hidden="true">
    <g fill="#F7D4DD">
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="16" cy="9" rx="4.2" ry="6" transform={`rotate(${a} 16 16)`} />
      ))}
    </g>
    <circle cx="16" cy="16" r="3.2" fill="#F4B942" />
  </svg>
);
