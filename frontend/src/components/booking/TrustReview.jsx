import React, { useMemo } from 'react';
import { Star } from 'lucide-react';
import { buildDestinationReviews } from '../../reviews/dynamicReviews';

export const useFiveStarReviews = (destination) => useMemo(() => buildDestinationReviews(destination).items.filter((r) => r.stars === 5), [destination]);

const FiveStars = ({ size = 16 }) => <span className="inline-flex items-center gap-0.5" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={size} className="fill-[#F5A623] text-[#F5A623]" />)}</span>;

export const ReviewQuote = ({ review, className = '', testId = 'trust-review' }) => (review ? (
  <figure className={`rounded-2xl border border-[#DAD7CB] bg-white p-5 flex flex-col gap-3 ${className}`} data-testid={testId}>
    <div className="flex items-center gap-2"><FiveStars /><span className="eg-label-lg text-[#002131]">5.0</span></div>
    <blockquote className="eg-body-lg text-[#002131]">“{review.text}”</blockquote>
    <figcaption className="flex items-center gap-3">
      <span className="w-10 h-10 rounded-full bg-[#174358] text-white eg-title-md flex items-center justify-center shrink-0">{review.name[0]}</span>
      <span><span className="block eg-label-lg text-[#002131]">{review.name}</span><span className="block eg-label-md text-[#174358]">{review.type} · {review.when}</span></span>
    </figcaption>
  </figure>
) : null);

export const ReviewRow = ({ destination }) => {
  const reviews = useFiveStarReviews(destination).slice(0, 3);
  return (
    <section className="flex flex-col gap-4" data-testid="checkout-reviews">
      <h2 className="eg-title-lg text-[#002131]">Travellers who booked {destination} with us</h2>
      <div className="grid md:grid-cols-3 gap-4">{reviews.map((r, i) => <ReviewQuote key={r.name} review={r} testId={`checkout-review-${i + 1}`} />)}</div>
    </section>
  );
};
