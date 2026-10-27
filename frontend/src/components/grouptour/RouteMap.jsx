import React, { useEffect, useRef, useState } from 'react';

// Simplified Sri Lanka coastline (lat, lon), clockwise from Point Pedro
const COAST = [
  [9.82, 80.23], [9.7, 80.4], [9.55, 80.52], [9.4, 80.7], [9.27, 80.81], [9.0, 80.95], [8.75, 81.1], [8.57, 81.23], [8.4, 81.3], [8.1, 81.45],
  [7.72, 81.7], [7.42, 81.83], [7.1, 81.86], [6.87, 81.83], [6.65, 81.76], [6.45, 81.6], [6.28, 81.4], [6.12, 81.12], [6.0, 80.85], [5.92, 80.59],
  [5.95, 80.45], [6.03, 80.22], [6.14, 80.1], [6.35, 80.0], [6.58, 79.96], [6.93, 79.84], [7.21, 79.84], [7.58, 79.79], [7.95, 79.82], [8.2, 79.75],
  [8.35, 79.78], [8.6, 79.9], [8.85, 79.92], [9.05, 79.88], [9.3, 80.05], [9.5, 80.15], [9.65, 80.05], [9.78, 80.1],
];
const K = 150;
export const project = (lat, lon) => [(lon - 79.5) * K, (10.0 - lat) * K];
const VB = [-70, -20, 2.5 * K + 140, 4.2 * K + 40];
const VB_COMPACT = [-10, -10, 2.5 * K + 20, 4.2 * K + 20];

// Catmull-Rom → cubic bezier path
const smooth = (pts, closed) => {
  const n = pts.length;
  const at = (i) => pts[closed ? (i + n) % n : Math.max(0, Math.min(n - 1, i))];
  let d = `M${pts[0][0]},${pts[0][1]}`;
  const last = closed ? n : n - 1;
  for (let i = 0; i < last; i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return closed ? `${d} Z` : d;
};
const ISLAND = smooth(COAST.map(([la, lo]) => project(la, lo)), true);

// Texture: central highlands contours, hill marks and coastal palms
const HIGHLANDS = project(7.0, 80.75);
const CONTOURS = [[150, 110], [112, 80], [74, 52], [38, 26]];
const HILLS = [
  [HIGHLANDS[0] - 10, HIGHLANDS[1] - 36, 1.1], [HIGHLANDS[0] + 44, HIGHLANDS[1] - 4, 0.9], [HIGHLANDS[0] - 50, HIGHLANDS[1] + 10, 0.9], [HIGHLANDS[0] + 10, HIGHLANDS[1] + 42, 1],
  ...[[8.35, 80.5], [8.6, 80.9], [7.9, 81.1]].map(([la, lo]) => [...project(la, lo), 0.7]),
];
const PALMS = [[7.0, 79.9], [6.5, 80.0], [6.2, 80.8], [6.6, 81.75], [7.9, 81.6], [8.3, 79.95], [9.1, 80.3], [6.05, 80.45]].map(([la, lo]) => project(la, lo));

const LABEL_SIDE = { galle: 'left', kosgoda: 'left', negombo: 'left', nuwara: 'left' };

export const RouteMap = ({ stops, activeIndex = 0, activeDay, className = '', testId = 'route-map', compact = false }) => {
  const pathRef = useRef(null);
  const [len, setLen] = useState(0);
  const pts = stops.map((s) => project(s.lat, s.lon));
  const route = smooth(pts, false);
  useEffect(() => { if (pathRef.current) setLen(pathRef.current.getTotalLength()); }, [route]);
  const progress = stops.length > 1 ? activeIndex / (stops.length - 1) : 1;
  const active = stops[activeIndex];
  const vb = compact ? VB_COMPACT : VB;

  return (
    <div className={`relative ${className}`} data-testid={testId} data-active-stop={active?.key}>
      <svg viewBox={vb.join(' ')} className="w-full h-full" role="img" aria-label={`Route map of Sri Lanka, currently at ${active?.name}`}>
        <defs>
          <radialGradient id="rm-land" cx="0.52" cy="0.55" r="0.5"><stop offset="0" stopColor="#D5E3C4" /><stop offset="0.55" stopColor="#E9E6CF" /><stop offset="1" stopColor="#F6E4CC" /></radialGradient>
          <pattern id="rm-grain" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.6" fill="#174358" opacity="0.08" /></pattern>
          <pattern id="rm-waves" width="46" height="26" patternUnits="userSpaceOnUse"><path d="M0 13 q5.75 -6 11.5 0 t11.5 0 t11.5 0 t11.5 0" fill="none" stroke="#9ACDE5" strokeWidth="1.2" opacity="0.7" /></pattern>
          <clipPath id="rm-clip"><path d={ISLAND} /></clipPath>
        </defs>
        <rect x={vb[0]} y={vb[1]} width={vb[2]} height={vb[3]} fill="#E0F7FF" rx="18" />
        <rect x={vb[0]} y={vb[1]} width={vb[2]} height={vb[3]} fill="url(#rm-waves)" rx="18" />
        <path d={ISLAND} fill="#002131" opacity="0.1" transform="translate(4 10)" />
        <path d={ISLAND} fill="url(#rm-land)" stroke="#D9B98F" strokeWidth="2.5" />
        <path d={ISLAND} fill="url(#rm-grain)" />
        <g clipPath="url(#rm-clip)" opacity="0.9">
          {CONTOURS.map((c, i) => <ellipse key={i} cx={HIGHLANDS[0]} cy={HIGHLANDS[1]} rx={c[0]} ry={c[1]} transform={`rotate(-20 ${HIGHLANDS[0]} ${HIGHLANDS[1]})`} fill={i === CONTOURS.length - 1 ? '#C6D9B1' : i === 0 ? '#DCE6CC' : 'none'} fillOpacity="0.7" stroke="#B7CBA3" strokeWidth="1.2" />)}
          {HILLS.map(([hx, hy, sc], i) => <path key={i} d={`M${hx - 16 * sc} ${hy} q${8 * sc} ${-14 * sc} ${16 * sc} 0 q${8 * sc} ${-18 * sc} ${16 * sc} 0`} fill="none" stroke="#7E9D6B" strokeWidth={2.2 * sc} strokeLinecap="round" />)}
          {PALMS.map(([px, py], i) => <g key={i} transform={`translate(${px} ${py})`} stroke="#5E8A5B" strokeWidth="1.6" strokeLinecap="round" fill="none"><path d="M0 0v-10" /><path d="M0 -10 q-6 -4 -9 0 M0 -10 q6 -4 9 0 M0 -10 q-4 -7 -1 -9 M0 -10 q4 -7 1 -9" /></g>)}
        </g>
        <path d={route} fill="none" stroke="#174358" opacity="0.35" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
        <path ref={pathRef} d={route} fill="none" stroke="#E75E26" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray={len || 1} strokeDashoffset={len ? len * (1 - progress) : 0} style={{ transition: 'stroke-dashoffset .9s cubic-bezier(.2,.7,.2,1)' }} data-testid="route-map-path" />
        {stops.map((s, i) => {
          const [x, y] = pts[i];
          const visited = i < activeIndex, isActive = i === activeIndex;
          const left = LABEL_SIDE[s.key] === 'left';
          return (
            <g key={s.key} data-testid={`route-pin-${s.key}`} data-state={isActive ? 'active' : visited ? 'visited' : 'upcoming'}>
              {isActive && <circle cx={x} cy={y} r="10" fill="#E75E26" opacity="0.35"><animate attributeName="r" values="8;22;8" dur="1.8s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.4;0;0.4" dur="1.8s" repeatCount="indefinite" /></circle>}
              <circle cx={x} cy={y} r={isActive ? (compact ? 14 : 11) : compact ? 9 : 7} fill={isActive ? '#E75E26' : visited ? '#174358' : '#fff'} stroke={isActive ? '#fff' : '#174358'} strokeWidth={isActive ? 3 : 2} style={{ transition: 'r .3s, fill .3s' }} />
              {(!compact || isActive) && <text x={left ? x - 16 : x + 16} y={y + 6} textAnchor={left ? 'end' : 'start'} fontSize={compact ? 26 : 17} fontFamily="Instrument Sans, Inter, sans-serif" fontWeight={isActive ? 700 : 500} fill={isActive ? '#E75E26' : '#002131'} stroke="#FBF9F1" strokeWidth="4" paintOrder="stroke">{s.name}</text>}
            </g>
          );
        })}
      </svg>
      {active && (
        <div className="absolute left-3 top-3 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 shadow-sm eg-label-md text-[#002131] flex items-center gap-2" data-testid="route-map-caption">
          <span className="w-2 h-2 rounded-full bg-[#E75E26]" />{activeDay ? `Day ${activeDay} · ` : ''}{active.name}
        </div>
      )}
    </div>
  );
};
