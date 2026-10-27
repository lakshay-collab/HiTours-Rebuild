import React, { useEffect, useMemo, useRef, useState } from 'react';
import { route } from '../../egyptDetailData';
import { X, Plane, Car, Moon } from 'lucide-react';
import { ChevronLeft, ChevronRight, HotelIcon, ExploreIcon, GalleryIcon, PinIcon } from './EgyptIcons';


export const RouteLine = ({ cities, className = '', testId = 'eg-route-line' }) => (
  <div className={`flex flex-wrap items-center gap-x-1 gap-y-1.5 ${className}`} data-testid={testId}>
    {cities.map((c, i) => (
      <React.Fragment key={`${c}-${i}`}>
        {i > 0 && <ChevronRight size={14} className="text-[#308BB6] mx-1 shrink-0" />}
        <span className="inline-flex items-center gap-1 eg-label-lg text-[#002131] whitespace-nowrap" data-testid={`${testId}-chip-${i}`}><PinIcon size={14} className="text-[#308BB6]" />{c}</span>
      </React.Fragment>
    ))}
  </div>
);
const HEADER = 120;

export const BulletMark = ({ text }) => {
  const t = text.toLowerCase();
  const cls = 'mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0';
  if (/transfer|drive to|driven|pick-?up|drop-?off/.test(t)) return <span className={`${cls} bg-[#FB7F26] text-white`}><Car size={14} /></span>;
  if (/\bflights?\b|\bfly\b|\bflying\b/.test(t)) return <span className={`${cls} bg-[#308BB6] text-white`}><Plane size={14} /></span>;
  return <span className={`${cls} bg-[#9ACDE5] text-[#002131]`}><span className="w-1.5 h-1.5 rounded-full bg-[#002131]" /></span>;
};

const PREVIEW_BULLETS = 5;
const DAY_MARK = '__day__';
const isDayMark = (b) => b.startsWith(DAY_MARK);
const dayNo = (label) => { const m = /\d+/.exec(label || ''); return m ? Number(m[0]) : null; };

// Split city stops (bullets grouped by DAY_MARK headings) into one section per day.
export function toDays(stops) {
  const days = [];
  stops.forEach((s, si) => {
    const groups = [];
    s.bullets.forEach((b) => {
      if (isDayMark(b)) groups.push({ heading: b.slice(DAY_MARK.length), bullets: [] });
      else if (!groups.length) groups.push({ heading: s.dayLabel, bullets: [b] });
      else groups[groups.length - 1].bullets.push(b);
    });
    groups.forEach((g, j) => {
      const [dayPart, ...rest] = g.heading.split(/\s[·|]\s/);
      const n = dayNo(dayPart);
      const acts = (s.activities || []).filter((a, k) => (a.day != null ? a.day === n : (groups.length === 1 || k === j)));
      const imgs = (s.dayImages && n != null && s.dayImages[n]) || s.images.map((_, k) => s.images[(k + j) % s.images.length]);
      days.push({
        key: `${s.letter}-${j}`, letter: String(n ?? si + 1), name: dayPart.trim(), city: s.name, title: rest.join(' · ').trim() || s.name,
        subtitle: j === 0 ? s.subtitle : null, bullets: g.bullets, images: imgs,
        accommodation: j === 0 ? s.accommodation : null, activities: acts, overnight: s.name
      });
    });
  });
  if (days.length > 1) days[days.length - 1].overnight = null;
  return days;
}

function StopText({ s }) {
  const [open, setOpen] = useState(false);
  const canToggle = s.bullets.length > PREVIEW_BULLETS;
  const shown = open || !canToggle ? s.bullets : s.bullets.slice(0, PREVIEW_BULLETS);
  const hidden = s.bullets.length - PREVIEW_BULLETS;
  return (
    <div className="md:w-[346px] shrink-0" data-testid="eg-route-stop">
      <h3 className="eg-title-lg text-[#002131]" data-testid="eg-route-stop-name">{s.title}</h3>
      {s.subtitle && <RouteLine cities={s.subtitle.split(' → ')} className="mt-2" testId="eg-route-subtitle" />}
      <StopCarousel images={s.images} name={s.title} className="md:hidden mt-4" />
      <ul className="mt-4 flex flex-col gap-2.5" data-testid="eg-route-bullets">
        {shown.map((b) => <li key={b} className="flex items-start gap-2.5 eg-body-lg text-[#002131]" data-testid="eg-route-bullet"><BulletMark text={b} />{b}</li>)}
      </ul>
      {canToggle && (
        <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="mt-3 inline-flex items-center gap-1 eg-label-lg font-semibold text-[#174358] underline underline-offset-4 hover:text-[#002131] transition-colors" data-testid="eg-route-toggle">
          {open ? 'View less' : `View more (${hidden} more)`}
          <ChevronRight size={16} className={`transition-transform ${open ? '-rotate-90' : 'rotate-90'}`} />
        </button>
      )}
      {s.overnight && <p className="mt-4 inline-flex items-center gap-2 eg-label-lg text-[#174358]" data-testid="eg-route-overnight"><Moon size={16} className="text-[#308BB6]" />{/cruise|on board/i.test(s.overnight) ? 'Overnight on board' : `Overnight in ${s.overnight}`}</p>}
    </div>
  );
}

function StopCarousel({ images, name, className = '' }) {
  const [i, setI] = useState(0);
  const n = images.length;
  return (
    <div className={`relative shrink-0 md:flex-1 min-w-0 aspect-[3/2] md:aspect-auto md:h-[300px] md:self-start rounded-xl overflow-hidden bg-[#EAE8E0] ${className}`} data-testid="eg-stop-gallery">
      <img src={images[i]} alt={`${name} ${i + 1}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
        <button type="button" onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0} className="eg-arrow pointer-events-auto disabled:opacity-40" aria-label="Back" data-testid="eg-stop-prev"><ChevronLeft size={24} /></button>
        <button type="button" onClick={() => setI((v) => Math.min(n - 1, v + 1))} disabled={i === n - 1} className="eg-arrow pointer-events-auto disabled:opacity-40" aria-label="Next" data-testid="eg-stop-next"><ChevronRight size={24} /></button>
      </div>
    </div>
  );
}

const SectionHead = ({ icon: Icon, title, extra }) => (
  <div className="flex items-center justify-between gap-3">
    <div className="flex items-center gap-2 min-w-0"><Icon size={24} className="text-[#174358] shrink-0" /><h4 className="eg-title-md md:eg-title-lg text-[#002131]">{title}</h4>{extra}</div>
  </div>
);

export function Lightbox({ images, name, onClose, start = 0, portrait = false }) {
  const [i, setI] = useState(start);
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[60] bg-[#002131]/90 flex flex-col items-center justify-center p-4" onClick={onClose} role="dialog" aria-modal="true" data-testid="eg-lightbox">
      <button type="button" onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-[#002131] flex items-center justify-center" aria-label="Close" data-testid="eg-lightbox-close"><X size={20} /></button>
      <div className={`w-full ${portrait ? 'max-w-[min(420px,calc((100vh-96px)*9/16))]' : 'max-w-[960px]'}`} onClick={(e) => e.stopPropagation()}>
        <div className={`relative ${portrait ? 'aspect-[9/16]' : 'aspect-[3/2]'} rounded-xl overflow-hidden bg-black`}>
          <img src={images[i]} alt={`${name} ${i + 1}`} className="absolute inset-0 w-full h-full object-cover" data-testid="eg-lightbox-image" />
          <div className="absolute inset-0 flex items-center justify-between p-3">
            <button type="button" onClick={() => setI((v) => (v - 1 + images.length) % images.length)} className="eg-arrow" aria-label="Previous photo" data-testid="eg-lightbox-prev"><ChevronLeft size={24} /></button>
            <button type="button" onClick={() => setI((v) => (v + 1) % images.length)} className="eg-arrow" aria-label="Next photo" data-testid="eg-lightbox-next"><ChevronRight size={24} /></button>
          </div>
        </div>
        <p className="mt-3 text-center eg-label-lg text-white">{name} · {i + 1}/{images.length}</p>
      </div>
    </div>
  );
}

function HotelCard({ a, id = '', tier = null }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex bg-[#FBF9F1] border border-[#C4CBD0] rounded-xl overflow-hidden" data-testid={`eg-accommodation-card${id}`}>
        <button type="button" onClick={() => setOpen(true)} className="relative w-[120px] sm:w-[160px] shrink-0 text-left" aria-label={`${route.viewPhotos}: ${a.name}`}><img src={a.images[0]} alt={a.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" referrerPolicy="no-referrer" /></button>
        <div className="p-4 flex flex-col justify-center gap-1 min-w-0">
          {tier && <span className="self-start inline-flex items-center h-6 px-2.5 rounded-full bg-[#E0F7FF] eg-label-md text-[#174358]" data-testid={`eg-accommodation-tier${id}`}>{tier}</span>}
          <h5 className="eg-title-md text-[#002131]" data-testid={`eg-accommodation-name${id}`}>{a.name}</h5>
          <p className="eg-body-md text-[#174358] capitalize">{a.description}</p>
          {a.rating && <p className="eg-label-md text-[#002131]" data-testid={`eg-accommodation-rating${id}`}><span className="inline-flex items-center justify-center h-6 min-w-[32px] px-1.5 rounded-md bg-[#174358] text-white eg-label-md mr-1.5">{a.rating.score.toFixed(1)}</span>{a.rating.label} · {a.rating.reviews.toLocaleString('en-IN')} Booking.com reviews</p>}
          <button type="button" onClick={() => setOpen(true)} className="self-start inline-flex items-center gap-1 pt-1 eg-label-lg text-[#174358] underline" data-testid={`eg-accommodation-photos${id}`}><GalleryIcon size={16} />{route.viewPhotos} ({a.images.length})</button>
        </div>
      </div>
      {open && <Lightbox images={a.images} name={a.name} onClose={() => setOpen(false)} />}
    </>
  );
}

const TIER = { 4: '4★ Comfort option', 5: '5★ Premium option' };

function Accommodation({ a }) {
  const all = [a, ...(a.options || [])];
  const four = all.find((h) => h.stars === 4);
  const five = all.find((h) => h.stars === 5);
  if (!(four && five)) {
    return (
      <div className="flex flex-col gap-3" data-testid="eg-stop-accommodation">
        <SectionHead icon={HotelIcon} title={route.accommodationHeading} />
        <HotelCard a={a} />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-3" data-testid="eg-stop-accommodation" data-options="4-5">
      <SectionHead icon={HotelIcon} title="Your accommodation options" />
      <p className="eg-body-md text-[#174358] -mt-1">Choose your comfort level when you plan with us: a 4★ or a 5★ stay (or similar in the same category).</p>
      <HotelCard a={four} id="-4" tier={TIER[4]} />
      <HotelCard a={five} id="-5" tier={TIER[5]} />
    </div>
  );
}

function ActivityDesc({ text }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [clamped, setClamped] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (el) setClamped(el.scrollHeight > el.clientHeight + 1);
  }, [text]);
  return (
    <>
      <p ref={ref} className={`eg-body-md text-[#174358] ${open ? '' : 'line-clamp-3'}`} data-testid="eg-activity-desc">{text}</p>
      {(clamped || open) && (
        <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="self-start mt-1 inline-flex items-center gap-1 eg-label-md font-semibold text-[#174358] underline underline-offset-4 hover:text-[#002131] transition-colors" data-testid="eg-activity-toggle">
          {open ? 'View less' : 'View more'}
          <ChevronRight size={14} className={`transition-transform ${open ? '-rotate-90' : 'rotate-90'}`} />
        </button>
      )}
    </>
  );
}

function Activities({ items }) {
  const track = useRef(null);
  const scroll = (d) => track.current && track.current.scrollBy({ left: d * 292, behavior: 'smooth' });
  return (
    <div className="flex flex-col gap-3 min-w-0" data-testid="eg-stop-activities">
      <SectionHead icon={ExploreIcon} title={route.programHeading} extra={<span className="eg-body-md text-[#174358]">({items.length})</span>} />
      <div className="relative">
        <div ref={track} className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0" data-testid="eg-activities-track">
          {items.map((a) => (
            <div key={a.name} className="w-[260px] shrink-0 snap-start bg-[#FBF9F1] border border-[#C4CBD0] rounded-xl overflow-hidden" data-testid="eg-activity-card">
              <div className="relative h-[150px] bg-[#EAE8E0]">
                <img src={a.image} alt={a.name} className="w-full h-full object-cover" loading="lazy" />
                {a.optional && <span className="absolute left-2 top-2 rounded-lg bg-white/90 px-2 py-1 eg-label-md text-[#174358]" data-testid="eg-activity-optional">{route.optional}</span>}
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h5 className="eg-title-md text-[#002131]" data-testid="eg-activity-name">{a.name}</h5>
                {a.description && <ActivityDesc text={a.description} />}
              </div>
            </div>
          ))}
        </div>
        {items.length > 2 && (
          <div className="hidden md:flex absolute inset-y-0 -right-3 items-center">
            <button type="button" onClick={() => scroll(1)} className="eg-arrow shadow-md" aria-label="Next activity" data-testid="eg-activities-next"><ChevronRight size={24} /></button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function EgyptRoute({ onSummary, stops = route.stops }) {
  const days = useMemo(() => toDays(stops), [stops]);
  const [active, setActive] = useState(0);
  const [stuck, setStuck] = useState(false);
  const head = useRef(null);
  const refs = useRef([]);
  const tabs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      if (!head.current) return;
      const top = head.current.getBoundingClientRect().top;
      setStuck(top <= 0 && window.scrollY > 0);
      const line = (head.current.offsetHeight || HEADER) + 60;
      let idx = 0;
      refs.current.forEach((el, i) => { if (el && el.getBoundingClientRect().top <= line) idx = i; });
      setActive(idx);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const t = tabs.current[active];
    if (t && t.scrollIntoView) t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [active]);

  const goTo = (i) => {
    const el = refs.current[i];
    const offset = (head.current ? head.current.offsetHeight : HEADER) + 12;
    if (el) { setActive(i); window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' }); }
  };

  return (
    <div className="bg-[#F6F4EB] rounded-xl" id="itinerary" data-testid="eg-detail-route">
      <div ref={head} className="sticky top-0 z-20 bg-[#F0EEE6] rounded-t-xl px-4 md:px-10 shadow-[0_6px_12px_-8px_rgba(0,33,49,0.2)]" data-testid="eg-route-header">
        <div className="flex items-center justify-between gap-3 pt-3.5 pb-1.5">
          <h2 className="eg-title-md md:eg-headline-md !leading-7 text-[#002131] truncate">{route.h2}</h2>
          <button type="button" onClick={onSummary} className="shrink-0 inline-flex items-center gap-1 h-9 px-4 rounded-full eg-grad-harbor hover:opacity-90 eg-label-lg text-white transition-opacity" data-testid="eg-route-summary-cta"><span className="md:hidden">{route.summaryShort}</span><span className="hidden md:inline">{route.summaryCta}</span></button>
        </div>
        {!stuck && <p className="eg-body-md text-[#174358] pb-3" data-testid="eg-route-sub">{route.sub}</p>}
        <div role="tablist" className="flex gap-2 overflow-x-auto no-scrollbar py-3" data-testid="eg-route-tabs">
          {days.map((d, i) => (
            <button key={d.key} ref={(el) => { tabs.current[i] = el; }} role="tab" aria-selected={active === i} onClick={() => goTo(i)} className={`shrink-0 h-9 px-4 rounded-full eg-label-lg whitespace-nowrap transition-colors ${active === i ? 'bg-[#174358] text-white' : 'bg-white border border-[#C4CBD0] text-[#174358] hover:border-[#174358]'}`} data-testid={`eg-route-tab-${i}`}>{d.name}</button>
          ))}
        </div>
      </div>
      <div className="px-4 md:px-10 pt-8 pb-7 flex flex-col divide-y divide-[#DDD9CE]">
        {days.map((s, i) => (
          <section key={s.key} ref={(el) => { refs.current[i] = el; }} id={`stop-${i}`} className="py-8 first:pt-0 last:pb-0 flex flex-col gap-8" data-testid={`eg-route-section-${i}`}>
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
              <StopText s={s} />
              <StopCarousel images={s.images} name={s.title} className="hidden md:block" />
            </div>
            {s.accommodation && <Accommodation a={s.accommodation} />}
            {s.activities && s.activities.length > 0 && <Activities items={s.activities} />}
          </section>
        ))}
      </div>
    </div>
  );
}
