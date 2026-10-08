import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { destinationTabs, destinations, continentMeta } from '../destinationsData';
import { themeGroups } from '../themesData';

const COUNTRY_HREF = { 'Europe': '/europa', 'Europe multi-country': '/europa', 'Egypt': '/afrika/aegypten', 'Sri Lanka': '/asien/sri-lanka', 'Thailand': '/asien/thailand', 'Vietnam': '/asien/vietnam', 'Malaysia': '/asien/malaysia', 'Singapore': '/asien/singapore', 'Kazakhstan': '/asien/kazakhstan', 'Bhutan': '/asien/bhutan', 'Maldives': '/asien/maldives', "Laos": '/asien/laos', "Japan": '/asien/japan', "Indonesia": '/asien/indonesia', "China": '/asien/china', "Cambodia": '/asien/cambodia', "Philippines": '/asien/philippines', "Iceland": '/europa/iceland', "Italy": '/europa/italy', "Greece": '/europa/greece', "Norway": '/europa/norway', "Ireland": '/europa/ireland', "Spain": '/europa/spain', "Portugal": '/europa/portugal', "Croatia": '/europa/croatia', "England": '/europa/england', "Scotland": '/europa/scotland', "Finland": '/europa/finland', "Sweden": '/europa/sweden' };
const REGION_HREF = { 'Asia': '/asien', 'Europe': '/europa' };
const REGION_TAGLINE = {
  'Asia': 'Beaches, temples and city breaks across Asia',
  'Europe': 'Two or three countries in one trip, planned as one holiday',
  'Middle East': 'Pyramids, Petra and the Dubai skyline'
};

const isInternal = (href) => href && href.startsWith('/');
const Go = ({ href, onNavigate, className, children, testId }) => isInternal(href)
  ? <Link to={href} onClick={onNavigate} className={className} data-testid={testId}>{children}</Link>
  : <a href="#" onClick={(e) => e.preventDefault()} className={className} data-testid={testId}>{children}</a>;

const REGIONS = destinationTabs.filter((t) => t !== 'Top 10');
const regionTid = (prefix, t) => `${prefix}menu-region-${t.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

function RegionCard({ t, on, big, onSelect, onNavigate, testId }) {
  const meta = continentMeta[t] || {};
  const count = (destinations[t] || []).length;
  const cls = `group relative block w-full overflow-hidden bg-surface-highest text-left focus-visible:outline-none ${big ? 'h-[380px] rounded-2xl' : 'aspect-[16/9] rounded-xl'}`;
  const inner = (
    <>
      <img src={meta.src} alt="" className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${on ? 'scale-105' : 'group-hover:scale-105'}`} loading="lazy" />
      <span className={`absolute inset-0 ${on || big ? 'bg-gradient-to-t from-onsurface/90 via-onsurface/30 to-onsurface/5' : 'bg-gradient-to-t from-onsurface/80 via-onsurface/20 to-transparent'}`} />
      <span className={`absolute inset-x-0 bottom-0 ${big ? 'p-6' : 'p-3.5'} flex items-end justify-between gap-3 text-white`}>
        <span className="min-w-0">
          <span className={`block leading-tight ${big ? 't-headline-sm' : 't-title-md'}`}>{t}</span>
          {big && <span className="block t-body-md text-white/85 mt-1.5">{REGION_TAGLINE[t]}</span>}
          <span className={`block t-body-sm text-white/80 ${big ? 'mt-3' : 'mt-0.5'}`}>{big ? `Explore ${count} destinations` : `${count} destinations`}</span>
        </span>
        <span className={`shrink-0 rounded-full flex items-center justify-center bg-white text-onsurface transition-transform duration-300 group-hover:translate-x-0.5 ${big ? 'w-10 h-10' : 'w-8 h-8'}`}><ArrowRight size={big ? 18 : 16} strokeWidth={2} /></span>
      </span>
      {on && <span className="absolute inset-0 rounded-xl ring-2 ring-primary ring-offset-2 ring-offset-surface-lowest pointer-events-none" />}
    </>
  );
  if (!big && REGION_HREF[t]) return <Link to={REGION_HREF[t]} onClick={onNavigate} onMouseEnter={onSelect} onFocus={onSelect} className={cls} data-testid={testId}>{inner}</Link>;
  return <button type="button" onClick={onSelect} onMouseEnter={big ? undefined : onSelect} onFocus={big ? undefined : onSelect} className={cls} data-testid={testId}>{inner}</button>;
}

export function DestinationsMenu({ onNavigate, idPrefix = '' }) {
  const [active, setActive] = useState(null);
  const list = destinations[active] || [];
  const feature = active ? (list.find((d) => COUNTRY_HREF[d.name]) || list[0]) : null;

  if (!active) {
    return (
      <div className="tl-wide py-7" data-testid={`${idPrefix}menu-destinations`}>
        <div className="flex items-end justify-between gap-4 mb-5">
          <div><h3 className="t-title-lg text-onsurface">Where would you like to go?</h3><p className="t-body-sm text-onsurface-variant">Pick a region to see all its destinations</p></div>
        </div>
        <div className="grid grid-cols-3 gap-5" data-testid={`${idPrefix}menu-destinations-overview`}>
          {REGIONS.map((t) => <RegionCard key={t} t={t} big onSelect={() => setActive(t)} testId={regionTid(idPrefix, t)} />)}
        </div>
      </div>
    );
  }

  return (
    <div className="tl-wide py-7" data-testid={`${idPrefix}menu-destinations`}>
      <div className="flex gap-8 min-h-[380px]">
        <ul className="w-[260px] shrink-0 flex flex-col gap-3 border-r border-outline-variant pr-6" data-testid={`${idPrefix}menu-destinations-regions`}>
          {REGIONS.map((t) => (
            <li key={t}><RegionCard t={t} on={active === t} onSelect={() => setActive(t)} onNavigate={onNavigate} testId={regionTid(idPrefix, t)} /></li>
          ))}
          <li className="mt-auto">
            <button type="button" onClick={() => setActive(null)} className="inline-flex items-center gap-1.5 t-label-lg text-onsurface-variant hover:text-onsurface transition-colors" data-testid={`${idPrefix}menu-regions-back`}>
              <ArrowLeft size={16} strokeWidth={2} /> All regions
            </button>
          </li>
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
                {d.highlight && <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/90 text-onsurface text-[10px] font-semibold uppercase tracking-[0.12em]">New</span>}
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
