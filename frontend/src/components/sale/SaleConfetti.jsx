import React from 'react';
import { SALE } from '../../sale';
import { themeOf } from './saleThemes';

const T = themeOf(SALE);

// Drifting festive particles for the promo bar – pure CSS, one set per occasion.
export default function SaleConfetti() {
  if (!SALE) return null;
  const kind = T.confetti;
  const n = kind === 'snow' ? 14 : 10;
  return (
    <span className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" data-testid="promo-confetti">
      {Array.from({ length: n }, (_, i) => (
        <i
          key={i}
          className={`promo-particle promo-particle-${kind}`}
          style={{
            left: `${3 + i * (94 / n)}%`,
            animationDelay: `${(i * 0.73) % 5}s`,
            animationDuration: `${3.6 + (i % 4) * 0.9}s`,
            '--p-size': `${kind === 'snow' ? 3 + (i % 3) : 5 + (i % 3) * 2}px`
          }}
        />
      ))}
    </span>
  );
}
