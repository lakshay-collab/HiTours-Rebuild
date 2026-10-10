import React from 'react';

// Self-hosted, muted background loop behind the careers hero copy. The poster is the clip's own
// first frame, so there is no separate photo to flash before playback starts.
export default function CareersHeroVideo({ mp4, webm, poster, label, className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} data-testid="careers-hero-video">
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        aria-label={label}
        data-testid="careers-hero-video-el"
      >
        {webm && <source src={webm} type="video/webm" />}
        <source src={mp4} type="video/mp4" />
      </video>
    </div>
  );
}
