import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { EgyptReviews, EgyptFaq } from '../components/egypt/EgyptSections';
import { usePageLead } from '../components/egypt/LeadModalProvider';
import { usePageMeta } from '../lib/seo';
import { reviews as sriLankaReviews } from '../sriLankaListingData';
import { detail, included, notIncluded, whyGroup, hotels, stops, days, faq, PATHS } from '../grouptours/insideSriLankaData';
import { useDepartures } from '../grouptours/groupBooking';
import { GroupHero, GroupTitle, ExpertQuote, Inclusions, WhyGroup, BookBox, MobileBookBar } from '../components/grouptour/GroupSections';
import { GroupItinerary } from '../components/grouptour/GroupItinerary';
import { DeparturesSection } from '../components/grouptour/DatesPrices';
import { BookingModal } from '../components/grouptour/BookingModal';

const TABS = [['included', "What's included"], ['itinerary', 'Itinerary'], ['dates', 'Dates & prices'], ['reviews', 'Reviews'], ['faq', 'FAQs']];

export default function GroupTourDetail() {
  const { data, departures, error, reload } = useDepartures(detail.key);
  const [modal, setModal] = useState(null);
  usePageLead('Sri Lanka', detail.hero.main, detail.hero.alt);
  usePageMeta(`${detail.title} | Small-group tour | Hi Tours`, `${detail.tagline}. Fixed departures, max ${detail.groupSize} travellers, 4 and 5 star hotels. Hold your seat for \u20b95,000.`);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const open = (dep) => setModal({ dep });
  const close = () => { setModal(null); reload(); };

  return (
    <div className="eg" data-testid="group-tour-page">
      <Header />
      <main className="eg-wide pt-3 md:pt-5 pb-28 lg:pb-16 flex flex-col gap-10 md:gap-14">
        <GroupHero detail={detail} />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_384px] gap-8 lg:gap-12 items-start -mt-6 md:-mt-10">
          <div className="flex flex-col gap-10 md:gap-14 min-w-0">
            <GroupTitle detail={detail} />
            <ExpertQuote detail={detail} />
            <nav className="sticky top-0 z-20 -mx-4 px-4 -my-4 bg-[#FBF9F1]/95 backdrop-blur border-b border-[#E4E3DB] flex gap-5 overflow-x-auto no-scrollbar" data-testid="group-tabs">
              {TABS.map(([id, l]) => <a key={id} href={`#${id}`} className="shrink-0 py-3 eg-label-lg text-[#174358] hover:text-[#002131] border-b-2 border-transparent hover:border-[#FB7F26] transition-colors" data-testid={`group-tab-${id}`}>{l}</a>)}
            </nav>
            <Inclusions included={included} notIncluded={notIncluded} />
            <WhyGroup data={whyGroup} />
            <GroupItinerary days={days} hotels={hotels} stops={stops} />
            <DeparturesSection departures={departures} loading={!data && !error} error={error} onPick={open} depositPp={detail.depositPp} />
          </div>
          <aside className="hidden lg:block sticky top-6 self-start">
            <BookBox detail={detail} departures={departures} onOpen={open} />
          </aside>
        </div>
        <div className="lg:hidden"><BookBox detail={detail} departures={departures} onOpen={open} /></div>
        <EgyptReviews centered className="" h2="What travellers say about Sri Lanka with Hi Tours" count={sriLankaReviews.count} items={sriLankaReviews.items} bookHref="#dates" />
        <EgyptFaq className="" data={faq} />
      </main>
      <MobileBookBar detail={detail} departures={departures} onOpen={open} />
      {modal && departures.length > 0 && <BookingModal product={detail} departures={departures} initial={modal.dep} onClose={close} thankYouPath={PATHS.thankYou} />}
      <Footer />
    </div>
  );
}
