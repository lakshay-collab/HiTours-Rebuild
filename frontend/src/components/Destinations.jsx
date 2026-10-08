import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { destinationTabs, destinations } from '../destinationsData';
import { destinationsHeading } from '../mock';

export const COUNTRY_HREF = { 'Europe': '/europa', 'Europe multi-country': '/europa', 'Egypt': '/afrika/aegypten', 'Sri Lanka': '/asien/sri-lanka', 'Thailand': '/asien/thailand', 'Vietnam': '/asien/vietnam', 'Malaysia': '/asien/malaysia', 'Singapore': '/asien/singapore', 'Kazakhstan': '/asien/kazakhstan', 'Bhutan': '/asien/bhutan', 'Maldives': '/asien/maldives', "Laos": '/asien/laos', "Japan": '/asien/japan', "Indonesia": '/asien/indonesia', "China": '/asien/china', "Cambodia": '/asien/cambodia', "Philippines": '/asien/philippines', "Iceland": '/europa/iceland', "Italy": '/europa/italy', "Greece": '/europa/greece', "Norway": '/europa/norway', "Ireland": '/europa/ireland', "Spain": '/europa/spain', "Portugal": '/europa/portugal', "Croatia": '/europa/croatia', "England": '/europa/england', "Scotland": '/europa/scotland', "Finland": '/europa/finland', "Sweden": '/europa/sweden' };
const REGION_HREF = { 'Asia': '/asien', 'Europe': '/europa' };

export default function Destinations() {
  const [active, setActive] = useState(destinationTabs[0]);
  const list = destinations[active] || [];
  const regionHref = REGION_HREF[active];

  return (
    <section id="destinations" className="relative mt-16 md:mt-20 py-14 md:py-20 scroll-mt-24 bg-surface-variant border-y border-secondary-dim/40 overflow-hidden" data-testid="destinations-section">
      <span aria-hidden className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-secondary-container/70 blur-3xl" />
      <span aria-hidden className="pointer-events-none absolute -bottom-32 -right-20 w-[480px] h-[480px] rounded-full bg-primary-dim/10 blur-3xl" />
      <div className="relative tl-container flex flex-col items-center gap-8 md:gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="flex items-center gap-3 t-label-lg uppercase tracking-[0.16em] text-primary-dim" data-testid="destinations-eyebrow">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary-dim" />Where to next?<span className="h-px w-10 bg-gradient-to-l from-transparent to-primary-dim" />
          </span>
          <h2 className="t-section text-onsurface md:max-w-[700px]">{destinationsHeading}</h2>
        </div>

        <div className="no-scrollbar w-full overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex md:flex-wrap md:justify-center gap-2 min-w-max md:min-w-0" role="tablist" data-testid="destination-tabs">
            {destinationTabs.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={active === t}
                onClick={() => setActive(t)}
                className={`h-8 px-3 rounded-lg t-label-lg whitespace-nowrap transition-colors ${
                  active === t ? 'bg-onsurface text-white shadow-[0_6px_16px_rgba(0,33,49,0.18)]' : 'border border-onsurface/20 bg-white/60 text-onsurface hover:bg-white'
                }`}
                data-testid={`destination-tab-${t.toLowerCase().replace(/\s/g, '-')}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6" data-testid="destination-grid">
          {list.map((d) => {
            const href = COUNTRY_HREF[d.name];
            const cls = 'group block rounded-xl border border-white overflow-hidden bg-surface-lowest shadow-[0_4px_14px_rgba(0,33,49,0.08)] hover:shadow-[0_12px_28px_rgba(0,33,49,0.16)] hover:-translate-y-0.5 transition-[box-shadow,transform]';
            const inner = <><div className="h-[150px] overflow-hidden"><img src={d.src} alt={d.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /></div><div className="px-2 py-2 t-body-lg text-onsurface">{d.name}</div></>;
            return href
              ? <Link key={d.name} to={href} className={cls} data-testid="destination-card">{inner}</Link>
              : <a key={d.name} href="#" onClick={(e) => e.preventDefault()} className={cls} data-testid="destination-card">{inner}</a>;
          })}
        </div>
        {regionHref && (
          <Link to={regionHref} className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-onsurface/25 bg-white/70 t-label-lg text-onsurface hover:bg-white transition-colors" data-testid="destination-region-link">
            View all {active} holidays <ArrowRight size={16} strokeWidth={2} />
          </Link>
        )}
      </div>
    </section>
  );
}
