import React from 'react';
import { Heart } from 'lucide-react';
import { happyCustomers } from '../mock';

export default function HappyCustomers({ className = '' }) {
  return (
    <div className={`inline-flex items-center gap-3 h-12 pl-2 pr-4 rounded-full bg-white/92 backdrop-blur-md ring-1 ring-black/5 shadow-[0_4px_18px_rgba(0,33,49,0.12)] ${className}`} data-testid="happy-customers">
      <div className="flex -space-x-2.5">
        {happyCustomers.avatars.map((src, i) => (
          <img key={i} src={src} alt="" className="w-8 h-8 rounded-full object-cover ring-2 ring-white" loading="lazy" />
        ))}
      </div>
      <span className="t-label-lg sm:t-title-sm text-onsurface whitespace-nowrap" data-testid="happy-customers-text">{happyCustomers.text}</span>
      <span className="relative w-6 h-6 flex items-center justify-center" aria-hidden="true">
        <Heart size={22} className="heart-beat text-[#E5383B] fill-[#E5383B]" />
        <Heart size={10} className="heart-float heart-float-a text-[#F28B8D] fill-[#F28B8D]" />
        <Heart size={8} className="heart-float heart-float-b text-[#F7B5B6] fill-[#F7B5B6]" />
      </span>
    </div>
  );
}
