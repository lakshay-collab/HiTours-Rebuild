import React, { useEffect, useRef, useState } from 'react';
import { Mail, X } from 'lucide-react';
import Logo from './Logo';
import { ceo } from '../aboutData';

function Letter({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-8 bg-[#002131]/60 backdrop-blur-sm animate-[hi-fade-in_250ms_ease-out]" onClick={onClose} data-testid="ceo-letter-overlay">
      <article role="dialog" aria-modal="true" aria-label="Letter from our CEO" onClick={(e) => e.stopPropagation()} className="eg-letter-paper relative w-full max-w-[760px] max-h-[88vh] overflow-y-auto rounded-xl bg-[#FFFDF7] shadow-[0_30px_80px_rgba(0,33,49,0.45)] animate-[eg-letter-in_550ms_cubic-bezier(.2,.8,.2,1)]" data-testid="ceo-letter">
        <button type="button" onClick={onClose} aria-label="Close letter" className="sticky top-3 float-right mr-3 w-9 h-9 rounded-full bg-[#F0EEE6] text-[#002131] flex items-center justify-center hover:bg-[#E0F7FF] transition-colors z-10" data-testid="ceo-letter-close"><X size={18} /></button>
        <div className="px-6 py-8 sm:px-12 sm:py-12 flex flex-col gap-7">
          <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#E4E3DB]">
            <Logo className="h-7 w-auto" />
            <span className="eg-label-lg uppercase tracking-[.08em] text-[#308BB6]">{ceo.eyebrow}</span>
          </div>
          <div className="flex items-center gap-4">
            <img src={ceo.image} alt={ceo.imageCaption} className="w-16 h-16 rounded-full object-cover object-[50%_32%] ring-2 ring-[#E0F7FF]" />
            <div><p className="eg-title-lg text-[#002131]">{ceo.name}</p><p className="eg-body-md text-[#174358]">{ceo.role}</p></div>
          </div>
          <div className="flex flex-col gap-5 eg-quote !text-[18px] !leading-[30px] text-[#002131]" data-testid="ceo-letter-body">
            <p>{ceo.salutation}</p>
            {ceo.paragraphs.map((p) => <p key={p}>{p}</p>)}
            <p>{ceo.closing}</p>
            <p className="eg-title-lg !font-semibold">{ceo.name}<span className="block eg-body-md font-normal text-[#174358]">{ceo.role}</span></p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function CeoEnvelope() {
  const [opening, setOpening] = useState(false);
  const [open, setOpen] = useState(false);
  const envRef = useRef(null);
  const start = () => { if (opening) { setOpen(true); return; } setOpening(true); setTimeout(() => setOpen(true), 900); };
  const close = () => { setOpen(false); setOpening(false); };
  useEffect(() => {
    if (!envRef.current) return undefined;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOpening(true); io.disconnect(); } }, { threshold: 0.6 });
    io.observe(envRef.current);
    return () => io.disconnect();
  }, []);
  return (
    <section className="eg-container" data-testid="about-ceo">
      <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 md:gap-14 items-center">
        <div className="flex flex-col gap-4 order-2 md:order-1">
          <span className="eg-label-lg uppercase tracking-[.08em] text-[#308BB6]">{ceo.eyebrow}</span>
          <h2 className="eg-display-sm text-[#002131] [text-wrap:balance]" data-testid="about-ceo-headline">{ceo.teaserTitle}</h2>
          <p className="eg-body-lg text-[#174358]">{ceo.teaser}</p>
          <button type="button" onClick={start} className="eg-btn-filled h-12 px-7 eg-title-md self-start mt-2" data-testid="about-ceo-read-button"><Mail size={18} />{ceo.button}</button>
        </div>
        <div ref={envRef} className="order-1 md:order-2 pt-36 pb-10 md:pt-28 md:pb-0">
        <button type="button" onClick={start} aria-label={ceo.button} className={`eg-envelope ${opening ? 'is-open' : ''}`} data-testid="about-ceo-envelope">
          <div className="eg-envelope-letter">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4E3DB]"><Logo className="h-5 w-auto" /><span className="eg-label-md uppercase tracking-[.08em] text-[#308BB6]">{ceo.eyebrow}</span></div>
            <p className="mt-3 eg-quote !text-[15px] !leading-6 text-[#002131]">{ceo.salutation}</p>
            <p className="mt-2 eg-quote !text-[15px] !leading-6 text-[#002131]/80 line-clamp-4">{ceo.paragraphs[0]}</p>
          </div>
          <div className="eg-envelope-body">
            <div className="eg-envelope-left" /><div className="eg-envelope-right" /><div className="eg-envelope-bottom" />
            <div className="eg-envelope-stamp"><img src={ceo.image} alt="" className="w-full h-full object-cover object-[50%_30%]" /></div>
            <div className="eg-envelope-address">
              <span className="eg-label-md text-[#6F777C]">To</span>
              <span className="eg-title-md text-[#002131]">Every traveller planning a happy holiday</span>
              <span className="eg-body-sm text-[#6F777C]">From the desk of {ceo.name}, CEO</span>
            </div>
          </div>
          <div className="eg-envelope-flap" />
          <span className="eg-envelope-seal">HT</span>
          {opening && !open && <span className="eg-envelope-hint">Click the letter to read it in full</span>}
        </button>
        </div>
      </div>
      {open && <Letter onClose={close} />}
    </section>
  );
}
