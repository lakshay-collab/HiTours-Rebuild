import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { destinationTabs, destinations } from '../destinationsData';
import { destinationsHeading } from '../mock';
import DestinationCard from './DestinationCard';

const SHOW_TABS = false; // region tabs hidden for now – Top 10 only

export const COUNTRY_HREF = { 'Europe': '/europa', 'Egypt': '/afrika/aegypten', 'Sri Lanka': '/asien/sri-lanka', 'Thailand': '/asien/thailand', 'Vietnam': '/asien/vietnam', 'Malaysia': '/asien/malaysia', 'Singapore': '/asien/singapore', 'Kazakhstan': '/asien/kazakhstan', 'Bhutan': '/asien/bhutan', 'Maldives': '/asien/maldives', "Laos": '/asien/laos', "Japan": '/asien/japan', "Indonesia": '/asien/indonesia', "China": '/asien/china', "Cambodia": '/asien/cambodia', "Philippines": '/asien/philippines', "Iceland": '/europa/iceland', "Italy": '/europa/italy', "Greece": '/europa/greece', "Norway": '/europa/norway', "Ireland": '/europa/ireland', "Spain": '/europa/spain', "Portugal": '/europa/portugal', "Croatia": '/europa/croatia', "England": '/europa/england', "Scotland": '/europa/scotland', "Finland": '/europa/finland', "Sweden": '/europa/sweden' };
const REGION_HREF = { 'Asia': '/asien' };

export default function Destinations() {
  const [active, setActive] = useState(destinationTabs[0]);
  const list = destinations[active] || [];
  const regionHref = REGION_HREF[active];

  return (
    <section id="destinations" className="pt-16 md:pt-20 scroll-mt-24" data-testid="destinations-section">
      <div className="tl-container flex flex-col items-center gap-8 md:gap-10">
        <h2 className="t-section text-center text-onsurface md:max-w-[700px]">{destinationsHeading}</h2>

        {SHOW_TABS && <div className="no-scrollbar w-full overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex md:flex-wrap md:justify-center gap-2 min-w-max md:min-w-0" role="tablist" data-testid="destination-tabs">
            {destinationTabs.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={active === t}
                onClick={() => setActive(t)}
                className={`h-8 px-3 rounded-lg t-label-lg whitespace-nowrap transition-colors ${
                  active === t ? 'bg-surface-variant text-onsurface' : 'border border-outline-variant text-onsurface hover:bg-onsurface/[0.06]'
                }`}
                data-testid={`destination-tab-${t.toLowerCase().replace(/\s/g, '-')}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>}

        <div className="w-full md:w-[calc(100vw-64px)] md:max-w-[1280px] grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 md:[&>*:nth-child(10)]:col-start-2 xl:[&>*:nth-child(10)]:col-start-auto" data-testid="destination-grid">
          {list.map((d, i) => <DestinationCard key={d.name} {...d} index={i} href={COUNTRY_HREF[d.name]} />)}
        </div>
        {regionHref && (
          <Link to={regionHref} className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-outline-variant t-label-lg text-onsurface hover:bg-onsurface/[0.06] transition-colors" data-testid="destination-region-link">
            View all {active} holidays <ArrowRight size={16} strokeWidth={2} />
          </Link>
        )}
      </div>
    </section>
  );
}
