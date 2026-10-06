import React from 'react';
import { Lightbulb, Percent, Headset } from 'lucide-react';
import { newsletter } from '../mock';
import { waHref } from './WhatsAppWidget';

const icons = { idea: Lightbulb, percent: Percent, headset: Headset };

const WaIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
    <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.47 1.71 6.41L3.2 28.8l6.57-1.72a12.75 12.75 0 0 0 6.23 1.59h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.67-12.8-12.67zm0 23.32h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.39a10.6 10.6 0 0 1-1.63-5.65c0-5.87 4.78-10.65 10.66-10.65 2.85 0 5.52 1.11 7.53 3.12a10.58 10.58 0 0 1 3.12 7.54c0 5.87-4.78 10.52-10.77 10.52zm5.84-7.94c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.14 3.09 1.3 3.3c.16.21 2.25 3.43 5.45 4.81.76.33 1.36.53 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z" />
  </svg>
);

export default function Newsletter() {
  const href = waHref(newsletter.whatsappText);

  return (
    <section className="pt-16 md:pt-24" data-testid="newsletter-section">
      <div className="relative w-full bg-surface-container md:min-h-[352px] xl:min-h-[376px]">
        <div className="relative z-[1] w-full max-w-[1440px] mx-auto flex flex-col items-start gap-4 px-4 pr-6 py-8 sm:px-8 md:px-6 md:py-[38px] lg:px-10 xl:py-[50px]">
          <h2 className="t-section text-left text-onsurface lg:max-w-[845px] xl:max-w-[975px] pr-6">{newsletter.heading}</h2>
          <div className="flex flex-col gap-8 w-full lg:max-w-[845px] xl:max-w-[975px]">
            <p className="t-body-md text-onsurface pr-6">
              {newsletter.text}{' '}
              <a href="/privacy" onClick={(e) => e.preventDefault()} className="t-label-lg text-outline underline" data-testid="newsletter-privacy-link">{newsletter.privacy}</a>
            </p>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center w-full sm:w-[500px] h-14 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.06)] pl-6 pr-2 hover:shadow-[0_2px_6px_rgba(0,0,0,0.14),0_8px_24px_rgba(0,0,0,0.08)] transition-shadow"
              aria-label={`${newsletter.whatsappLabel} ${newsletter.whatsappNumber}`}
              data-testid="newsletter-whatsapp-link"
            >
              <WaIcon className="w-6 h-6 text-[#25D366] shrink-0" />
              <span className="flex-1 min-w-0 px-4 flex flex-col leading-tight truncate">
                <span className="t-body-lg text-onsurface truncate">{newsletter.whatsappLabel}</span>
                <span className="text-[12px] leading-[16px] text-onsurface-variant truncate" data-testid="newsletter-whatsapp-number">{newsletter.whatsappNumber}</span>
              </span>
              <span className="btn-sunset shrink-0" data-testid="newsletter-whatsapp-cta">{newsletter.cta}</span>
            </a>

            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8">
              {newsletter.bullets.map((b) => {
                const Icon = icons[b.icon];
                return (
                  <li key={b.text} className="flex items-center gap-3 t-body-lg text-onsurface">
                    <Icon size={24} strokeWidth={1.5} className="text-accent" />{b.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <img
          src={newsletter.imageLeft}
          alt=""
          className="hidden lg:block absolute left-[31px] -top-[45px] h-[77px] w-auto pointer-events-none select-none"
          loading="lazy"
          data-testid="newsletter-image-left"
        />
        <img
          src={newsletter.image}
          alt=""
          className="hidden lg:block absolute right-0 bottom-0 h-[460px] w-auto pointer-events-none select-none"
          loading="lazy"
          data-testid="newsletter-image"
        />
      </div>
    </section>
  );
}
