import React, { useCallback, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { EgyptReviews, EgyptFaq } from '../components/egypt/EgyptSections';
import { usePageLead } from '../components/egypt/LeadModalProvider';
import { usePageMeta } from '../lib/seo';
import { reviews as sriLankaReviews } from '../sriLankaListingData';
import { detail, included, notIncluded, whyGroup, hotels, stops, days, faq, steps, PATHS } from '../grouptours/insideSriLankaData';
import { useDepartures } from '../grouptours/groupBooking';
import { GroupHead, GroupCrumbs, PriceCard, ExpertCard, WhyGroup, Inclusions, Features, Steps, StickyBar } from '../components/grouptour/GroupSections';
import { GroupItinerary } from '../components/grouptour/GroupItinerary';
import { RouteMap } from '../components/grouptour/RouteMap';
import { DeparturesSection } from '../components/grouptour/DatesPrices';
import { BookingModal } from '../components/grouptour/BookingModal';

export default function GroupTourDetail() {
  const { data, departures, error, reload } = useDepartures(detail.key);
  const [modal, setModal] = useState(null);
  const [activeDay, setActiveDay] = useState(1);
  usePageLead('Sri Lanka', detail.hero.main, detail.hero.alt);
  usePageMeta(`${detail.title} | Small-group tour | Hi Tours`, `${detail.tagline}. Fixed departures, max ${detail.groupSize} travellers, 4 and 5 star hotels. Hold your seat for \u20b95,000.`);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const open = (dep) => setModal({ dep });
  const close = () => { setModal(null); reload(); };
  const onActive = useCallback((d) => setActiveDay(d), []);
  const current = days.find((d) => d.n === activeDay) || days[0];
  const stopKey = current.stop || [...days].reverse().find((d) => d.stop)?.stop;
  const activeIndex = Math.max(0, stops.findIndex((s) => s.key === stopKey));

  return (
    <div className="eg" data-testid="group-tour-page">
      <Header />
      <main className="flex flex-col gap-8 pb-28 md:pb-[100px]">
        <GroupHead detail={detail} stops={stops} />
        <GroupCrumbs crumbs={detail.crumbs} />
        <div className="eg-wide md:hidden"><PriceCard detail={detail} departures={departures} onOpen={open} /></div>
        <div className="flex flex-col gap-14 md:gap-[72px]">
          <div className="eg-wide flex flex-col md:flex-row gap-8">
            <div className="flex-1 min-w-0 flex flex-col gap-8">
              <ExpertCard detail={detail} />
              <GroupItinerary days={days} hotels={hotels} onActiveChange={onActive} />
              <div className="md:hidden"><WhyGroup data={whyGroup} testId="group-why-mobile" /></div>
            </div>
            <aside className="hidden md:flex w-[384px] shrink-0 flex-col gap-6 self-start sticky top-6 max-h-[calc(100vh-24px)] overflow-y-auto no-scrollbar" data-testid="group-sidebar">
              <PriceCard detail={detail} departures={departures} onOpen={open} compact />
              <div className="rounded-2xl border border-[#C4CBD0] bg-white p-3" data-testid="route-map-desktop-wrap">
                <RouteMap stops={stops} activeIndex={activeIndex} activeDay={activeDay} className="h-[440px]" />
              </div>
              <WhyGroup data={whyGroup} />
            </aside>
          </div>
          <Inclusions included={included} notIncluded={notIncluded} />
          <DeparturesSection departures={departures} loading={!data && !error} error={error} onPick={open} depositPp={detail.depositPp} />
          <Features />
          <EgyptReviews centered className="eg-container" h2="What travellers say about Sri Lanka with Hi Tours" count={sriLankaReviews.count} items={sriLankaReviews.items} bookHref="#dates" />
          <EgyptFaq className="eg-container" data={faq} />
          <Steps data={steps} />
        </div>
      </main>
      <StickyBar detail={detail} departures={departures} onOpen={open} />
      {modal && departures.length > 0 && <BookingModal product={detail} departures={departures} initial={modal.dep} onClose={close} thankYouPath={PATHS.thankYou} />}
      <Footer />
    </div>
  );
}
