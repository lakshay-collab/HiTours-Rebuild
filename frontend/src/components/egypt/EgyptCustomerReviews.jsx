import React, { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { customerReviews as egyptCustomerReviews } from '../../egyptListingData';
import { BoxStars } from '../Rating';
import { HotelIcon, TicketIcon, CarIcon, UserIcon, PhoneIcon, SparkleLeft, SparkleRight, SparklesIcon } from './EgyptIcons';
import { buildDestinationReviews } from '../../reviews/dynamicReviews';
import { StarRow } from './EgyptPlanner';

const GREEN = '#00B67A';
const CAT_ICON = { hotel: HotelIcon, activity: TicketIcon, transport: CarIcon, advice: UserIcon, service: PhoneIcon };

const Category = ({ c }) => {
  const Icon = CAT_ICON[c.icon] || UserIcon;
  return (
    <li className="mt-5 first:mt-0" data-testid="eg-cr-category">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 eg-title-md text-[#002131]"><Icon size={18} className="text-[#174358]" />{c.label}</span>
        <span className="eg-title-md" style={{ color: GREEN }}>{c.value.toFixed(1)}</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-[#E4E3DB]"><div className="h-full rounded-full" style={{ width: `${(c.value / 5) * 100}%`, background: GREEN }} /></div>
    </li>
  );
};

const ReviewCard = ({ r, readMore, readLess }) => {
  const [open, setOpen] = useState(false);
  const long = r.text.length > 170;
  return (
    <article className="rounded-2xl bg-[#F6F4EB] p-5 md:p-6" data-testid="eg-cr-card">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h3 className="eg-title-md text-[#002131]" data-testid="eg-cr-card-name">{r.name}</h3>
          <span className="eg-label-md text-[#6F777C]" data-testid="eg-cr-card-meta">{r.type}{r.when ? ` · Travelled ${r.when}` : ''}</span>
        </div>
        <StarRow value={r.stars || 5} size={16} />
      </div>
      <p className="mt-3 eg-title-md text-[#002131]" data-testid="eg-cr-card-title">{r.title}</p>
      <p className={`mt-1.5 eg-body-lg text-[#002131] ${open || !long ? '' : 'eg-clamp-2'}`} data-testid="eg-cr-card-text">{r.text}</p>
      {long && <button type="button" onClick={() => setOpen((v) => !v)} className="mt-1 eg-body-md font-medium underline text-[#174358]" data-testid="eg-cr-card-more">{open ? readLess : readMore}</button>}
    </article>
  );
};

export default function EgyptCustomerReviews({ className = 'eg-wide mt-12 md:mt-16', data = egyptCustomerReviews, destination = 'Egypt' }) {
  const d = data;
  const live = useMemo(() => buildDestinationReviews(destination), [destination]);
  const [showAll, setShowAll] = useState(false);
  const items = showAll ? live.items : live.items.slice(0, 3);
  const by = live.items[0];
  return (
    <section className={className} data-testid="eg-customer-reviews">
      <h2 className="eg-display-sm text-[#002131] text-center">{d.h2}</h2>
      <div className="mt-6 flex items-center justify-center gap-4">
        <SparkleLeft className="text-[#174358]" />
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="eg-display-sm" style={{ color: GREEN }} data-testid="eg-cr-score">{live.score.toFixed(1)}</span>
            <BoxStars rating={live.rating} size={28} color={GREEN} />
            <a href="#reviews" onClick={(e) => { e.preventDefault(); document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' }); }} className="eg-body-lg text-[#002131] underline" data-testid="eg-cr-count">{live.countLabel}</a>
          </div>
          <span className="eg-label-lg text-[#174358]">{d.source}</span>
        </div>
        <SparkleRight className="text-[#174358]" />
      </div>

      <div className="mt-8 max-w-[860px] mx-auto rounded-2xl bg-[#FBEADB] p-5 md:p-7 flex gap-4" data-testid="eg-cr-summary">
        <span className="eg-quote !text-[64px] !leading-[56px] text-[#002131] -mt-1 shrink-0">“</span>
        <div className="flex flex-col gap-3 min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="eg-title-md text-[#002131]" data-testid="eg-cr-summary-by">{by.name}</span>
            <span className="eg-label-md text-[#6F777C]">{by.type} in {destination}</span>
            <StarRow value={by.stars} size={14} />
          </div>
          <p className="eg-headline-md !text-[22px] !leading-[30px] md:!text-[24px] md:!leading-[32px] text-[#002131]" data-testid="eg-cr-summary-text">{(d.summary || '').replace(/\s*[-–—]\s*/g, ', ')}</p>
          <span className="eg-label-md text-[#6F777C] flex items-center gap-1.5"><SparklesIcon size={14} className="text-[#174358]" />{d.summaryTag} from {live.countN.toLocaleString('en-IN')} {destination} reviews</span>
        </div>
      </div>

      <hr className="mt-10 border-[#C4CBD0]" />

      <div className="mt-10 grid gap-8 md:grid-cols-[381fr_955fr] md:gap-6" id="reviews">
        <aside>
          <h4 className="eg-title-lg !text-[24px] !leading-8 text-[#002131]">{d.categoriesH4}</h4>
          <ul className="mt-6" data-testid="eg-cr-categories">{live.categories.map((c) => <Category key={c.label} c={c} />)}</ul>
          <div className="mt-8 rounded-2xl border border-[#C4CBD0] bg-white p-6" data-testid="eg-cr-plan-card">
            <h3 className="eg-title-lg text-[#002131]">{d.planH3}</h3>
            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="eg-body-md text-[#174358]">{d.planText}</p>
              <img src={d.planExpert} alt={`Your ${destination} expert`} className="w-12 h-12 rounded-full object-cover shrink-0" />
            </div>
            <a href="#planner" onClick={(e) => { e.preventDefault(); document.getElementById('planner')?.scrollIntoView({ behavior: 'smooth' }); }} className="eg-btn-filled w-full h-12 mt-6 eg-label-lg" data-testid="eg-cr-plan-cta">{d.planCta}</a>
          </div>
        </aside>
        <div>
          <h4 className="eg-title-lg text-[#002131]">Recent {destination} reviews</h4>
          <div className="mt-4 flex flex-col gap-4" data-testid="eg-cr-list">{items.map((r) => <ReviewCard key={r.name + r.title} r={r} readMore={d.readMore || 'Read more'} readLess={d.readLess || 'Read less'} />)}</div>
          <button type="button" onClick={() => setShowAll((v) => !v)} className="mt-6 inline-flex items-center gap-1 h-11 px-4 rounded-full eg-body-lg font-medium text-[#174358] hover:bg-[rgba(23,67,88,0.08)]" data-testid="eg-cr-more">
            {showAll ? 'Show fewer reviews' : 'Show more reviews'}{showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>
      <hr className="mt-10 border-[#C4CBD0]" />
    </section>
  );
}
