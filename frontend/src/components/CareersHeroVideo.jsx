import React, { useRef, useState } from 'react';

// Self-hosted, muted background loop behind the careers hero copy. No third-party player,
// so there is no branding, no controls and nothing to load from YouTube.
export default function CareersHeroVideo({ mp4, webm, poster, className = '' }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  return (
    <div
      className={`absolute inset-0 overflow-hidden transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'} ${className}`}
      aria-hidden="true"
      data-testid="careers-hero-video"
    >
      <video
        ref={ref}
        className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        onPlaying={() => setReady(true)}
        data-testid="careers-hero-video-el"
      >
        {webm && <source src={webm} type="video/webm" />}
        <source src={mp4} type="video/mp4" />
      </video>
    </div>
  );
}
