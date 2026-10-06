import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { happyCustomers } from '../mock';

const SLOTS = 3;
const ROTATE_MS = 2200;

// Rotates one avatar slot at a time through the pool, with a crossfade.
const useRotatingAvatars = (pool) => {
  const [slots, setSlots] = useState(() => pool.slice(0, SLOTS));
  const [next, setNext] = useState(SLOTS % pool.length);
  const [turn, setTurn] = useState(0);
  useEffect(() => {
    if (pool.length <= SLOTS) return undefined;
    const t = setInterval(() => {
      setSlots((prev) => { const copy = [...prev]; copy[turn % SLOTS] = pool[next]; return copy; });
      setNext((n) => (n + 1) % pool.length);
      setTurn((k) => k + 1);
    }, ROTATE_MS);
    return () => clearInterval(t);
  }, [pool, next, turn]);
  return slots;
};

export default function HappyCustomers({ tone = 'light', className = '' }) {
  const slots = useRotatingAvatars(happyCustomers.avatars);
  const dark = tone === 'dark';
  const shell = dark
    ? 'bg-[rgba(0,33,49,0.42)] backdrop-blur-md ring-1 ring-white/25 text-white shadow-[0_6px_22px_rgba(0,0,0,0.25)]'
    : 'bg-white/92 backdrop-blur-md ring-1 ring-black/5 text-onsurface shadow-[0_4px_18px_rgba(0,33,49,0.12)]';
  const ring = dark ? 'ring-white/80' : 'ring-white';

  return (
    <div className={`inline-flex items-center gap-3 h-12 pl-2 pr-4 rounded-full ${shell} ${className}`} data-testid={`happy-customers-${tone}`}>
      <div className="flex -space-x-2.5">
        {slots.map((src, i) => (
          <span key={i} className={`relative w-8 h-8 rounded-full ring-2 ${ring} overflow-hidden bg-surface-container`}>
            <img key={src} src={src} alt="" className="absolute inset-0 w-full h-full object-cover avatar-swap" loading="lazy" />
          </span>
        ))}
      </div>
      <span className="t-label-lg sm:t-title-sm whitespace-nowrap" data-testid="happy-customers-text">{happyCustomers.text}</span>
      <span className="relative w-7 h-7 flex items-center justify-center" aria-hidden="true">
        <Heart size={22} className="heart-beat text-[#FF3B4A] fill-[#FF3B4A] drop-shadow-[0_2px_6px_rgba(255,59,74,0.45)]" />
        <Heart size={10} className="heart-float heart-float-a text-[#FF7A85] fill-[#FF7A85]" />
        <Heart size={8} className="heart-float heart-float-b text-[#FFB3B9] fill-[#FFB3B9]" />
        <Heart size={7} className="heart-float heart-float-c text-[#FF9AA2] fill-[#FF9AA2]" />
      </span>
    </div>
  );
}
