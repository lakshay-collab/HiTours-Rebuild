import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { page } from '../careersData';

const JOBS_URL = 'https://recruitcrm.io/jobs/Hi_Tours_Group_jobs?1791547232904';

export default function Careers() {
  useEffect(() => { document.title = page.title; window.scrollTo(0, 0); }, []);
  return (
    <div className="eg" data-testid="careers-page">
      <Header />
      <main className="pb-12 md:pb-16">
        <section className="eg-container pt-4 md:pt-6" data-testid="careers-jobs">
          <div className="w-full overflow-hidden rounded-2xl border border-[#E4E3DB] bg-white">
            <iframe
              src={JOBS_URL}
              title="HI Tours Group Careers"
              loading="lazy"
              className="block w-full max-w-full border-0 h-[calc(100dvh-140px)] min-h-[760px] md:min-h-[900px]"
              data-testid="careers-jobs-iframe"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
