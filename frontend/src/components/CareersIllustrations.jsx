import React from 'react';

// Two-tone spot illustrations for the culture & values block (brand navy + blue, coral accent, soft grey).
const G = '#D9DEE2';
const N = '#174358';
const B = '#308BB6';
const C = '#F4B49A';

const Travel = () => (
  <svg viewBox="0 0 96 96" fill="none" aria-hidden="true">
    <circle cx="44" cy="54" r="30" fill={G} />
    <path d="M14 54h60M44 24c-11 9-11 51 0 60M44 24c11 9 11 51 0 60M20 40c14 6 34 6 48 0M20 68c14-6 34-6 48 0" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M22 30c18-8 38-10 56-6" stroke={B} strokeWidth="2.5" strokeDasharray="4 5" strokeLinecap="round" />
    <path d="M86 16l-9 6-10-2-2 2 8 4-4 6-5-1-1 1 4 3 1 5 1 1 2-6 7 1 2-2-5-9 7-7z" fill={N} />
    <circle cx="66" cy="76" r="5" fill={C} />
  </svg>
);

const Call = () => (
  <svg viewBox="0 0 96 96" fill="none" aria-hidden="true">
    <rect x="30" y="12" width="36" height="72" rx="8" fill={G} />
    <rect x="35" y="20" width="26" height="48" rx="3" fill="#fff" />
    <circle cx="48" cy="76" r="3" fill={N} />
    <path d="M56 36c-2-2-5-2-7 0l-2 2c-2 2-2 4 0 7l5 5c3 3 5 3 7 0l2-2c2-2 2-5 0-7" stroke={N} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M70 26c4 4 6 9 6 14M76 18c7 7 10 14 10 22" stroke={B} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M26 26c-4 4-6 9-6 14M20 18c-7 7-10 14-10 22" stroke={B} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="74" cy="72" r="5" fill={C} />
  </svg>
);

const Dream = () => (
  <svg viewBox="0 0 96 96" fill="none" aria-hidden="true">
    <circle cx="48" cy="52" r="30" fill={G} />
    <path d="M48 14c10 10 14 24 14 36l-6 10H40l-6-10c0-12 4-26 14-36z" fill="#fff" stroke={N} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="48" cy="40" r="6" fill={B} />
    <path d="M34 50l-10 8 6 6M62 50l10 8-6 6" stroke={N} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M44 62c0 8 2 14 4 20 2-6 4-12 4-20" fill={C} />
    <path d="M18 22l2 4 4 2-4 2-2 4-2-4-4-2 4-2zM78 18l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5z" fill={B} />
  </svg>
);

const Customer = () => (
  <svg viewBox="0 0 96 96" fill="none" aria-hidden="true">
    <circle cx="40" cy="30" r="14" fill="#fff" stroke={N} strokeWidth="2.5" />
    <path d="M28 26c6-3 18-3 24 0" stroke={N} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="35" cy="31" r="1.6" fill={N} /><circle cx="45" cy="31" r="1.6" fill={N} />
    <path d="M36 37c2.5 2 5.5 2 8 0" stroke={N} strokeWidth="2" strokeLinecap="round" />
    <path d="M14 84c0-16 10-28 26-28s26 12 26 28z" fill={G} />
    <path d="M26 56c4 8 24 8 28 0" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="58" y="54" width="26" height="30" rx="5" fill={B} />
    <path d="M65 54v-5a6 6 0 0 1 12 0v5" stroke={N} strokeWidth="2.5" />
    <rect x="58" y="64" width="26" height="4" fill={N} />
    <circle cx="20" cy="18" r="5" fill={C} />
  </svg>
);

const Humble = () => (
  <svg viewBox="0 0 96 96" fill="none" aria-hidden="true">
    <path d="M12 46c0-20 16-34 36-34s36 14 36 34H12z" fill={B} />
    <path d="M12 46c6-8 12-8 18 0 6-8 12-8 18 0 6-8 12-8 18 0 6-8 12-8 18 0" fill={N} />
    <path d="M48 12v6M48 46v26a8 8 0 0 0 16 0" stroke={N} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="22" cy="72" r="12" fill={G} />
    <path d="M14 72l5 5 10-10" stroke={N} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="80" cy="34" r="5" fill={C} />
  </svg>
);

export const VALUE_ART = { travel: Travel, call: Call, dream: Dream, customer: Customer, humble: Humble };

export const ValueArt = ({ name, className = 'w-24 h-24' }) => {
  const Art = VALUE_ART[name] || Travel;
  return <span className={`block ${className}`}><Art /></span>;
};
