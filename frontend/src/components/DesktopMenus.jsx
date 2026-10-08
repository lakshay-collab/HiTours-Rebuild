import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { destinationTabs, destinations, continentMeta } from '../destinationsData';
import { themeGroups } from '../themesData';

const COUNTRY_HREF = { 'Europe': '/europa', 'Egypt': '/afrika/aegypten', 'Sri Lanka': '/asien/sri-lanka', 'Thailand': '/asien/thailand', 'Vietnam': '/asien/vietnam', 'Malaysia': '/asien/malaysia', 'Singapore': '/asien/singapore', 'Kazakhstan': '/asien/kazakhstan', 'Bhutan': '/asien/bhutan', 'Maldives': '/asien/maldives', "Laos": '/asien/laos', "Japan": '/asien/japan', "Indonesia": '/asien/indonesia', "China": '/asien/china', "Cambodia": '/asien/cambodia', "Philippines": '/asien/philippines', "Iceland": '/europa/iceland', "Italy": '/europa/italy', "Greece": '/europa/greece', "Norway": '/europa/norway', "Ireland": '/europa/ireland', "Spain": '/europa/spain', "Portugal": '/europa/portugal', "Croatia": '/europa/croatia', "England": '/europa/england', "Scotland": '/europa/scotland', "Finland": '/europa/finland', "Sweden": '/europa/sweden' };
const REGION_HREF = { 'Asia': '/asien', 'Europe': '/europa' };
const REGION_TAGLINE = {
  'Asia': 'Beaches, temples and city breaks across Asia',
  'Europe': 'Two or three countries in one trip, planned as one holiday',
  'Middle East': 'Egypt, Jordan and the UAE'
};

const isInternal = (href) => href && href.startsWith('/');
const Go = ({ href, onNavigate, className, children, testId }) => isInternal(href)
  ? <Link to={href} onClick={onNavigate} className={className} data-testid={testId}>{children}</Link>
  : <a href="#" onClick={(e) => e.preventDefault()} className={className} data-testid={testId}>{children}</a>;

export function DestinationsMenu({ onNavigate }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(destinationTabs[0]);
  const list = destinations[active] || [];
  const feature = active === 'Europe' ? { name: 'Europe multi-country', src: '/europe/zermatt.webp' } : (list.find((d) => COUNTRY_HREF[d.name]) || list[0]);
  return (
    <div className="tl-wide py-7" data-testid="menu-destinations">
      <div className="flex gap-8">
        <ul className="w-[260px] shrink-0 flex flex-col gap-3 border-r border-outline-variant pr-6" data-testid="menu-destinations-regions">
          {destinationTabs.map((t) => {
            const meta = continentMeta[t] || {};
            const on = active === t;
            const inner = (
              <>
                <img src={meta.src} alt="" className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${on ? 'scale-105' : 'group-hover:scale-105'}`} loading="lazy" />
                <span className={`absolute inset-0 transition-opacity ${on ? 'bg-gradient-to-t from-onsurface/90 via-onsurface/30 to-onsurface/10' : 'bg-gradient-to-t from-onsurface/80 via-onsurface/20 to-transparent'}`} />
                <span className="absolute inset-x-0 bottom-0 p-3.5 flex items-end justify-between gap-2 text-white">
                  <span><span className="block t-title-md leading-tight">{t}</span><span className="block t-body-sm text-white/80 mt-0.5">{(destinations[t] || []).length} destinations</span></span>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${REGION_HREF[t] ? 'bg-white text-onsurface' : 'ring-1 ring-white/70'}`}><ArrowRight size={16} strokeWidth={2} /></span>
                </span>
                {on && <span className="absolute inset-0 rounded-xl ring-2 ring-primary ring-offset-2 ring-offset-surface-lowest pointer-events-none" />}
              </>
            );
            const cls = 'group relative block w-full aspect-[16/9] rounded-xl overflow-hidden bg-surface-highest text-left';
            const tid = `menu-region-${t.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
            return (
              <li key={t} onMouseEnter={() => setActive(t)}>
                {REGION_HREF[t]
                  ? <Link to={REGION_HREF[t]} onClick={onNavigate} onFocus={() => setActive(t)} className={cls} data-testid={tid}>{inner}</Link>
                  : <button type="button" onFocus={() => setActive(t)} onClick={() => setActive(t)} className={cls} data-testid={tid}>{inner}</button>}
              </li>
            );
          })}
        </ul>
        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <div className="flex items-end justify-between gap-4">
            <div><h3 className="t-title-lg text-onsurface">{active}</h3><p className="t-body-sm text-onsurface-variant">{REGION_TAGLINE[active]}</p></div>
            {REGION_HREF[active] && <Link to={REGION_HREF[active]} onClick={onNavigate} className="t-label-lg text-white bg-primary hover:bg-primary/90 rounded-full h-9 px-4 flex items-center gap-1 whitespace-nowrap" data-testid="menu-region-all">View all {active} holidays <ArrowRight size={16} strokeWidth={2} /></Link>}
          </div>
          <div className="grid grid-cols-4 xl:grid-cols-5 gap-3" data-testid="menu-destinations-grid">
            {active === 'Europe' && (
              <Go href="/europa" onNavigate={onNavigate} className="group relative block aspect-[4/3] rounded-xl overflow-hidden bg-surface-highest ring-2 ring-primary/70" testId="menu-country-europe-multi-country">
                <img src="/europe/zermatt.webp" alt="Europe multi-country" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <span className="absolute inset-0 bg-gradient-to-t from-onsurface/80 via-onsurface/15 to-transparent" />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/90 text-onsurface text-[10px] font-semibold uppercase tracking-[0.12em]">New</span>
                <span className="absolute left-3 bottom-2.5 t-label-lg text-white drop-shadow">Europe multi-country</span>
              </Go>
            )}
            {list.map((d) => (
              <Go key={d.name} href={COUNTRY_HREF[d.name] || '#'} onNavigate={onNavigate} className="group relative block aspect-[4/3] rounded-xl overflow-hidden bg-surface-highest" testId="menu-country">
                <img src={d.src} alt={d.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <span className="absolute inset-0 bg-gradient-to-t from-onsurface/70 via-onsurface/10 to-transparent" />
                <span className="absolute left-3 bottom-2.5 t-label-lg text-white drop-shadow">{d.name}</span>
              </Go>
            ))}
          </div>
        </div>
        {feature && (
          <Go href={REGION_HREF[active] || COUNTRY_HREF[feature.name] || '#'} onNavigate={onNavigate} className="hidden xl:block w-[260px] shrink-0 relative rounded-2xl overflow-hidden group" testId="menu-destinations-feature">
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
