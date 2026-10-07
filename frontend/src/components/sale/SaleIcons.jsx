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

export const Sparkle = ({ size = 10, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
    <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" fill="currentColor" />
  </svg>
);
