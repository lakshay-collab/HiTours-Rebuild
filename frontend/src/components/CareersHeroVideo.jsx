import React, { useEffect, useRef, useState } from 'react';

const API_SRC = 'https://www.youtube.com/iframe_api';

const loadApi = () => new Promise((resolve) => {
  if (window.YT && window.YT.Player) return resolve(window.YT);
  const prev = window.onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady = () => { prev && prev(); resolve(window.YT); };
  if (!document.querySelector(`script[src="${API_SRC}"]`)) {
    const s = document.createElement('script');
    s.src = API_SRC;
    document.head.appendChild(s);
  }
  return undefined;
});

// Muted YouTube clip looping a fixed window, used as a background layer behind hero copy.
export default function CareersHeroVideo({ videoId, start, end, className = '' }) {
  const host = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let player;
    let cancelled = false;
    loadApi().then((YT) => {
      if (cancelled || !host.current) return;
      player = new YT.Player(host.current, {
        videoId,
        playerVars: { autoplay: 1, mute: 1, controls: 0, start, end, playsinline: 1, modestbranding: 1, rel: 0, disablekb: 1, fs: 0, iv_load_policy: 3, cc_load_policy: 0, showinfo: 0 },
        events: {
          onReady: (e) => { e.target.mute(); e.target.playVideo(); },
          onError: () => setReady(false),
          onStateChange: (e) => {
            if (e.data === YT.PlayerState.PLAYING) setReady(true);
            if (e.data === YT.PlayerState.ENDED) { e.target.seekTo(start, true); e.target.playVideo(); }
          }
        }
      });
    });
    return () => { cancelled = true; if (player && player.destroy) player.destroy(); };
  }, [videoId, start, end]);

  return (
    <div className={`absolute inset-0 overflow-hidden transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'} ${className}`} aria-hidden="true" data-testid="careers-hero-video">
      {/* Oversized and centred so the player's own logo and title overlays sit outside the visible frame. */}
      <div ref={host} className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-[1.45] pointer-events-none" />
    </div>
  );
}
