import React from 'react';
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { ambassadors, promoBanners } from '../mock';
import Carousel from './Carousel';
import { PromoBanner } from './PromoBanners';

const SOCIAL = {
  instagram: { Icon: Instagram, bg: 'bg-[linear-gradient(45deg,#F9CE34_0%,#EE2A7B_50%,#6228D7_100%)]' },
  facebook: { Icon: Facebook, bg: 'bg-[#1877F2]' },
  youtube: { Icon: Youtube, bg: 'bg-[#FF0000]' },
  linkedin: { Icon: Linkedin, bg: 'bg-[#0A66C2]' }
};

const SocialPanel = () => (
  <div className="bg-surface-container rounded-2xl overflow-hidden flex flex-col h-full" data-testid="social-panel">
    <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-4 sm:px-8 pt-6 pb-5 md:pt-8 md:pb-6" data-testid="ambassadors-socials">
      {ambassadors.socials.map((s) => {
        const { Icon, bg } = SOCIAL[s.key];
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
              <span className={`w-9 h-9 rounded-full ${bg} text-white flex items-center justify-center transition-transform duration-200 group-hover:scale-105`}>
                <Icon size={18} strokeWidth={1.9} />
              </span>
              <span className="t-label-lg">{s.handle}</span>
            </a>
          </li>
        );
      })}
    </ul>
    <div className="flex-1 min-h-0 overflow-hidden" data-testid="ambassadors-carousel">
      <img src={ambassadors.images[0]} alt="" className="w-full h-full object-cover object-center block" loading="lazy" />
    </div>
  </div>
);

export default function Ambassadors() {
  return (
    <section className="pt-12 md:pt-14" data-testid="ambassadors-section">
      <div className="tl-container">
        <h2 className="t-section text-onsurface text-center">{ambassadors.heading}</h2>
        <p className="t-body-lg text-onsurface-variant text-center mt-2" data-testid="ambassadors-hint">{ambassadors.hint}</p>
        <Carousel step="page" className="mt-6 md:mt-8" trackClassName="gap-4 md:gap-6 items-stretch !scroll-pl-0" testId="social-carousel">
          <div className="w-full shrink-0 snap-start" data-testid="social-slide-0"><SocialPanel /></div>
          {promoBanners.map((b, i) => (
            <div key={b.id} className="w-full shrink-0 snap-start flex" data-testid={`social-slide-${i + 1}`}>
              <PromoBanner b={b} index={0} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
