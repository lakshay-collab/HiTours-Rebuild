import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { destinationTabs, destinations, continentMeta } from '../destinationsData';
import { themeGroups } from '../themesData';

const COUNTRY_HREF = { 'Europe': '/europe', 'Europe multi-country': '/europe', 'Egypt': '/africa/egypt', 'Thailand': '/asia/thailand', 'Vietnam': '/asia/vietnam', 'Malaysia': '/asia/malaysia', 'Singapore': '/asia/singapore', 'Kazakhstan': '/asia/kazakhstan', 'Bhutan': '/asia/bhutan', "Laos": '/asia/laos', "Japan": '/asia/japan', "Indonesia": '/asia/indonesia', "China": '/asia/china', "Cambodia": '/asia/cambodia', "Italy": '/europe/italy', "Greece": '/europe/greece', "Norway": '/europe/norway', "Ireland": '/europe/ireland', "Finland": '/europe/finland', "Sweden": '/europe/sweden' };
const REGION_HREF = { 'Asia': '/asia', 'Europe': '/europe' };
const REGION_TAGLINE = {
  'Top 10': 'Our most loved destinations right now',
  'Asia': 'Beaches, temples and city breaks across Asia',
  'Europe': 'Two or three countries in one trip, planned as one holiday',
  'Middle East': 'Pyramids, Petra and the Dubai skyline'
};

const isInternal = (href) => href && href.startsWith('/');
const Go = ({ href, onNavigate, className, children, testId }) => isInternal(href)
  ? <Link to={href} onClick={onNavigate} className={className} data-testid={testId}>{children}</Link>
  : <a href="#" onClick={(e) => e.preventDefault()} className={className} data-testid={testId}>{children}</a>;

const regionTid = (prefix, t) => `${prefix}menu-region-${t.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

export function DestinationsMenu({ onNavigate, idPrefix = '' }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(destinationTabs[0]);
  const list = destinations[active] || [];
  const feature = list.find((d) => COUNTRY_HREF[d.name]) || list[0];

  return (
    <div className="tl-wide py-7" data-testid={`${idPrefix}menu-destinations`}>
      <div className="flex gap-8 min-h-[380px]">
        <ul className="w-[240px] shrink-0 flex flex-col gap-2.5 border-r border-outline-variant pr-6" data-testid={`${idPrefix}menu-destinations-regions`}>
          {destinationTabs.map((t) => {
            const on = active === t;
            return (
              <li key={t}>
                <button type="button" onMouseEnter={() => setActive(t)} onFocus={() => setActive(t)} onClick={() => { if (REGION_HREF[t]) { navigate(REGION_HREF[t]); onNavigate?.(); } else setActive(t); }}
                  className={`group relative block w-full aspect-[2/1] rounded-xl overflow-hidden bg-surface-highest text-left transition-shadow ${on ? 'ring-2 ring-primary ring-offset-2 ring-offset-surface' : ''}`}
                  data-testid={regionTid(idPrefix, t)}>
                  <img src={continentMeta[t]?.src} alt="" className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${on ? 'scale-105' : 'group-hover:scale-105'}`} loading="lazy" />
                  <span className={`absolute inset-0 transition-colors ${on ? 'bg-gradient-to-t from-onsurface/85 via-onsurface/25 to-onsurface/5' : 'bg-gradient-to-t from-onsurface/75 via-onsurface/15 to-transparent'}`} />
                  <span className="absolute inset-x-0 bottom-0 px-3.5 py-3 flex items-center justify-between gap-2 text-white">
                    <span className="t-title-md leading-tight drop-shadow">{t}</span>
                    <span className={`shrink-0 w-7 h-7 rounded-full bg-white text-onsurface flex items-center justify-center transition-opacity ${on ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}><ArrowRight size={14} strokeWidth={2} /></span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <div className="flex items-end justify-between gap-4">
            <div><h3 className="t-title-lg text-onsurface">{active}</h3><p className="t-body-sm text-onsurface-variant">{REGION_TAGLINE[active]}</p></div>
            {REGION_HREF[active] && <Link to={REGION_HREF[active]} onClick={onNavigate} className="t-label-lg text-white bg-primary hover:bg-primary/90 rounded-full h-9 px-4 flex items-center gap-1 whitespace-nowrap" data-testid={`${idPrefix}menu-region-all`}>View all {active} holidays <ArrowRight size={16} strokeWidth={2} /></Link>}
          </div>
          <div className="grid grid-cols-4 xl:grid-cols-5 gap-3" data-testid={`${idPrefix}menu-destinations-grid`}>
            {list.map((d) => (
              <Go key={d.name} href={COUNTRY_HREF[d.name] || '#'} onNavigate={onNavigate} className={`group relative block aspect-[4/3] rounded-xl overflow-hidden bg-surface-highest ${d.highlight ? 'ring-2 ring-primary/70' : ''}`} testId={`${idPrefix}menu-country`}>
                <img src={d.src} alt={d.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <span className="absolute inset-0 bg-gradient-to-t from-onsurface/70 via-onsurface/10 to-transparent" />
                {d.badge && <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/90 text-onsurface text-[10px] font-semibold uppercase tracking-[0.12em]">{d.badge}</span>}
                <span className="absolute left-3 bottom-2.5 t-label-lg text-white drop-shadow">{d.name}</span>
              </Go>
            ))}
          </div>
        </div>
        {feature && (
          <Go href={REGION_HREF[active] || COUNTRY_HREF[feature.name] || '#'} onNavigate={onNavigate} className="hidden xl:block w-[260px] shrink-0 relative rounded-2xl overflow-hidden group" testId={`${idPrefix}menu-destinations-feature`}>
            <img src={feature.src} alt={feature.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <span className="absolute inset-0 bg-gradient-to-t from-onsurface/85 via-onsurface/20 to-transparent" />
            <span className="relative h-full min-h-[320px] flex flex-col justify-end p-5 text-white">
              <span className="t-label-md opacity-90">Featured in {active}</span>
              <span className="t-title-lg mt-1">{feature.name}</span>
              <span className="t-label-lg mt-3 flex items-center gap-1">Explore <ArrowRight size={16} strokeWidth={2} /></span>
            </span>
          </Go>
        )}
      </div>
    </div>
  );
}

export function ThemesMenu({ onNavigate }) {
  return (
    <div className="tl-wide py-7" data-testid="menu-themes">
      <div className="grid grid-cols-4 gap-8">
        {themeGroups.map((g) => (
          <div key={g.key} className="flex flex-col gap-3" data-testid={`menu-theme-group-${g.key}`}>
            <h3 className="t-title-md text-onsurface">{g.title}</h3>
            <ul className="flex flex-col gap-1.5">
              {g.items.map((it) => (
                <li key={it.label}>
                  <Go href={it.href} onNavigate={onNavigate} className="group flex items-center gap-3 rounded-xl p-1.5 -ml-1.5 hover:bg-onsurface/[0.05] transition-colors" testId="menu-theme-item">
                    <img src={it.image.replace('w=520', 'w=160')} alt="" className="w-14 h-11 rounded-lg object-cover shrink-0 bg-surface-highest transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                    <span className="t-body-md text-onsurface-variant group-hover:text-onsurface transition-colors">{it.label}</span>
                  </Go>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
