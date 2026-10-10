import React, { useEffect, useRef, useState } from 'react';
import { hero } from '../mock';
import SearchBar from './SearchBar';
import HappyCustomers from './HappyCustomers';
import SaleBadge from './sale/SaleBadge';

// Poster paints immediately (preloaded in index.html); the right-sized clip streams in behind it and fades up once it can play.
const pickClip = () => {
  if (typeof window === 'undefined') return '/hero-video.mp4';
  const small = window.innerWidth < 768;
  const saveData = window.navigator.connection?.saveData;
  return small || saveData ? '/hero-video-360.mp4' : '/hero-video.mp4';
};

export default function Hero() {
  const videoRef = useRef(null);
  const [src] = useState(pickClip);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return undefined;
    const onReady = () => setReady(true);
    v.addEventListener('playing', onReady);
    v.addEventListener('canplay', onReady);
    v.play?.().catch(() => {});
    return () => { v.removeEventListener('playing', onReady); v.removeEventListener('canplay', onReady); };
  }, []);

  return (
    <section
      className="relative z-[30] w-full h-[560px] sm:h-[600px] md:h-[620px] lg:h-[680px] flex items-center justify-center bg-[#0b1f2a]"
      data-testid="hero-section"
    >
      <picture>
        <source media="(max-width: 767px)" srcSet="/hero-poster-sm.webp" type="image/webp" />
        <source srcSet="/hero-poster.webp" type="image/webp" />
        <img src="/hero-poster.jpg" alt="" fetchPriority="high" decoding="async" className="absolute inset-0 w-full h-full object-cover" data-testid="hero-poster" />
      </picture>
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={hero.title.join(' ')}
        data-testid="hero-collage"
        data-ready={ready}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,33,49,0.30)_0%,rgba(0,33,49,0.10)_40%,rgba(0,33,49,0.55)_100%)] pointer-events-none" />

      <div className="relative z-[2] w-full flex flex-col items-center gap-6 md:gap-8 px-4 sm:px-8 md:px-0 -mt-6 md:-mt-8">
        <div className="min-w-[328px] sm:w-[536px] md:w-[857px] lg:w-[880px] flex flex-col items-center gap-4 md:gap-5">
          <SaleBadge dismissible className="hidden md:inline-flex" testId="hero-sale-badge" />
          <h1 className="t-display-sm md:t-display-lg text-center text-white [text-wrap:balance] drop-shadow-[0_2px_12px_rgba(0,33,49,0.45)]" data-testid="hero-title">
            {hero.title[0]}<br className="hidden md:block" /> {hero.title[1]}
          </h1>
        </div>
        <div className="w-full md:w-[552px]">
          <SearchBar id="hero" />
        </div>
        <HappyCustomers tone="dark" className="-mt-2 md:-mt-3" />
      </div>
    </section>
  );
}
