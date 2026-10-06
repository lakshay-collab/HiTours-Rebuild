import React, { useState } from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { ambassadors } from '../mock';

const SOCIAL_ICONS = { instagram: Instagram, facebook: Facebook, youtube: Youtube };

export default function Ambassadors() {
  const [idx] = useState(0);
  return (
    <section className="pt-12 md:pt-14" data-testid="ambassadors-section">
      <div className="tl-container">
        <div className="bg-surface-container rounded-2xl overflow-hidden pt-8 md:pt-10">
          <div className="flex flex-col items-center gap-4 px-4 sm:px-8 md:px-16 text-center">
            <h2 className="t-section text-onsurface">{ambassadors.heading}</h2>
            <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4" data-testid="ambassadors-socials">
              {ambassadors.socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.key];
                return (
                  <li key={s.key}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} ${s.handle}`}
                      className="group inline-flex items-center gap-3 h-12 pl-1.5 pr-5 rounded-full bg-surface-lowest border border-outline-variant text-onsurface hover:border-primary hover:shadow-[0_4px_14px_rgba(0,33,49,0.12)] transition-[border-color,box-shadow] duration-200"
                      data-testid={`ambassadors-social-${s.key}`}
                    >
                      <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center transition-colors duration-200 group-hover:bg-primary-hover">
                        <Icon size={18} strokeWidth={1.75} />
                      </span>
                      <span className="flex flex-col items-start leading-tight">
                        <span className="t-label-md text-onsurface-variant">{s.label}</span>
                        <span className="t-label-lg">{s.handle}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative mt-4 md:mt-6" data-testid="ambassadors-carousel">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${idx * 100}%)` }}>
                {ambassadors.images.map((src, i) => (
                  <img key={i} src={src} alt="" className="w-full max-w-[880px] mx-auto shrink-0 block" loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
