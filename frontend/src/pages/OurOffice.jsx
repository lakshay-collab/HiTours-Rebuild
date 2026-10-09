import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Navigation, Clock, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { office, mapsEmbed, mapsLink } from '../officeData';

const today = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];

const Hours = ({ block, defaultOpen }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-[#E4E3DB] bg-white overflow-hidden" data-testid={`office-hours-${block.key}`}>
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left" data-testid={`office-hours-${block.key}-toggle`}>
        <span className="flex items-center gap-2 eg-label-lg text-[#002131]"><Clock size={14} className="text-[#308BB6]" />{block.title}</span>
        <ChevronDown size={16} className={`text-[#174358] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 animate-[hi-fade-in_200ms_ease-out]">
          <ul className="divide-y divide-[#F0EEE6]">
            {block.rows.map(([day, time]) => (
              <li key={day} className={`flex items-center justify-between py-1.5 eg-body-md ${day === today ? 'text-[#002131] font-semibold' : 'text-[#174358]'}`} data-testid="office-hours-row">
                <span className="flex items-center gap-2">{day}{day === today && <span className="eg-label-md rounded-full bg-[#EAF4F9] text-[#308BB6] px-2 py-px">Today</span>}</span>
                <span className="tabular-nums">{time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 eg-body-sm text-[#6F777C]">{block.note}</p>
        </div>
      )}
    </div>
  );
};

export default function OurOffice() {
  useEffect(() => { document.title = office.page.title; window.scrollTo(0, 0); }, []);
  const btn = 'inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full eg-label-lg transition-colors';

  return (
    <div className="eg" data-testid="office-page">
      <Header />
      <main className="pb-20 md:pb-28">
        <section className="relative h-[260px] sm:h-[340px] md:h-[400px] overflow-hidden" data-testid="office-hero">
          <img src={office.hero} alt={office.heroAlt} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,33,49,0.25)_0%,rgba(0,33,49,0.55)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 eg-container pb-8 md:pb-12">
            <h1 className="eg-display-lg text-white drop-shadow-[0_2px_14px_rgba(0,33,49,0.45)]" data-testid="office-h1">{office.h1}</h1>
            <p className="mt-3 eg-body-lg text-white/90 max-w-[640px]">{office.intro}</p>
          </div>
        </section>

        <section className="eg-container mt-10 md:mt-14 grid gap-8 lg:grid-cols-[440fr_688fr] lg:gap-12" data-testid="office-details">
          <div className="flex flex-col gap-6">
            <div>
              <span className="eg-label-md uppercase tracking-[0.18em] text-[#308BB6]" data-testid="office-eyebrow">{office.eyebrow}</span>
              <h2 className="mt-2 eg-headline-lg text-[#002131]" data-testid="office-name">{office.name}</h2>
              <p className="mt-2 eg-body-md text-[#174358]">{office.sub}</p>
              <address className="mt-4 not-italic eg-body-lg text-[#002131] flex gap-3" data-testid="office-address">
                <MapPin size={18} className="shrink-0 mt-1 text-[#308BB6]" />
                <span>{office.address.map((l) => <span key={l} className="block">{l}</span>)}</span>
              </address>
              <ul className="mt-3 flex flex-col gap-1">
                <li><a href={office.phoneHref} className="inline-flex items-center gap-3 eg-body-lg text-[#002131] hover:underline" data-testid="office-phone"><Phone size={16} className="text-[#308BB6]" />{office.phone}</a></li>
                <li><a href={`mailto:${office.email}`} className="inline-flex items-center gap-3 eg-body-lg text-[#002131] hover:underline" data-testid="office-email"><Mail size={16} className="text-[#308BB6]" />{office.email}</a></li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3" data-testid="office-actions">
              <a href={mapsLink} target="_blank" rel="noreferrer" className={`${btn} eg-btn-filled`} data-testid="office-visit"><Navigation size={16} />{office.links.visit}</a>
              <a href={`mailto:${office.email}?subject=${encodeURIComponent('Enquiry from the Hi Tours website')}`} className={`${btn} border border-[#174358] text-[#174358] hover:bg-[#174358] hover:text-white`} data-testid="office-touch"><Mail size={16} />{office.links.touch}</a>
            </div>

            <ul className="rounded-xl bg-[#F6F4EB] p-4 flex flex-col gap-1.5" data-testid="office-landmarks">
              {office.landmarks.map((l) => <li key={l} className="flex items-start gap-2 eg-body-md text-[#174358]"><span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#308BB6] shrink-0" />{l}</li>)}
            </ul>

            <div className="flex flex-col gap-3">{office.hours.map((h, i) => <Hours key={h.key} block={h} defaultOpen={i === 0} />)}</div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[#E4E3DB] bg-[#EAF4F9] min-h-[360px] lg:min-h-[560px]" data-testid="office-map">
            <iframe title="Hi Tours office map" src={mapsEmbed} className="absolute inset-0 w-full h-full" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen data-testid="office-map-iframe" />
            <a href={mapsLink} target="_blank" rel="noreferrer" className="absolute left-4 bottom-4 inline-flex items-center gap-2 h-10 pl-3 pr-4 rounded-full bg-white shadow-[0_8px_24px_rgba(0,33,49,0.2)] text-[#002131] eg-label-lg hover:bg-[#F6F4EB] transition-colors" data-testid="office-directions">
              <MapPin size={16} className="text-[#308BB6]" />{office.links.directions}
            </a>
          </div>
        </section>

        <section className="eg-container mt-16 md:mt-24" data-testid="office-gallery">
          <div className="flex flex-col gap-2">
            <h2 className="eg-display-sm text-[#002131]">{office.gallery.h2}</h2>
            <p className="eg-body-lg text-[#174358]">{office.gallery.text}</p>
          </div>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {office.gallery.photos.map((p) => (
              <img key={p.src} src={p.src} alt={p.alt} loading="lazy" className="w-full object-cover rounded-2xl h-[160px] md:h-[260px]" data-testid="office-photo" />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
