import React from 'react';
import { ReviewCard as PhotoReviewCard, ReviewSummary } from '../egypt/EgyptSections';
import { ReviewCard as TextReviewCard } from '../egypt/EgyptCustomerReviews';
import { buildDestinationReviews } from '../../reviews/dynamicReviews';
import { reviews as indonesiaReviews } from '../../indonesiaListingData';
import { baliKutaUbudLiveBySlug } from '../../tours/baliKutaUbudLiveData';

// Reuses the website's own review cards (green stars, photo cards) so reviews look the same everywhere.
const baliPhotos = Object.values(baliKutaUbudLiveBySlug)[0].detail.gallery;
const PHOTO_REVIEWS = { Bali: indonesiaReviews.items.map((r, i) => ({ ...r, image: baliPhotos[[5, 0, 1][i]] || r.image })) };
const photoReviews = (destination) => PHOTO_REVIEWS[destination] || [];

export const TopReview = ({ destination, className = '' }) => {
  const r = buildDestinationReviews(destination).items.find((x) => x.stars === 5);
  return r ? <div className={className} data-testid="eg-detail-top-review"><TextReviewCard r={r} /></div> : null;
};

export const CardReview = ({ destination }) => {
  const r = photoReviews(destination)[0];
  return r ? <div className="bg-white rounded-2xl border border-[#C4CBD0] p-3 pb-5" data-testid="live-card-review"><PhotoReviewCard r={r} /></div> : null;
};

export const ReviewRow = ({ destination }) => {
  const items = photoReviews(destination).slice(0, 3);
  if (!items.length) return null;
  return (
    <section className="flex flex-col gap-6" data-testid="checkout-reviews">
      <h2 className="eg-headline-md text-[#002131]">Travellers who booked {destination} with us</h2>
      <ReviewSummary className="!justify-start" />
      <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
        {items.map((r) => <PhotoReviewCard key={r.name} r={r} className="w-[300px] md:w-auto" />)}
      </div>
    </section>
  );
};
