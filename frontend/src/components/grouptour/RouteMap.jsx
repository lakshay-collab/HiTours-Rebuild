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
const VB = [-80, -20, 2.5 * K + 160, 4.2 * K + 40];
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
const LABEL_SIDE = { galle: 'left', kosgoda: 'left', negombo: 'left', nuwara: 'left' };
const SRI_LANKA = { name: 'Sri Lanka', land: ISLAND, project, viewBox: VB, labelLeft: Object.keys(LABEL_SIDE) };

// Build a map config from a land outline: origin [lat, lon] is the top-left corner
export const makeMap = ({ name, coast, coasts, origin, scale, viewBox, labelLeft = [], sea }) => {
  const proj = (lat, lon) => [(lon - origin[1]) * scale, (origin[0] - lat) * scale];
  return { name, land: (coasts || [coast]).map((c) => smooth(c.map(([la, lo]) => proj(la, lo)), true)).join(' '), project: proj, viewBox, labelLeft, sea };
};

export const RouteMap = ({ stops, activeIndex = 0, activeDay, className = '', testId = 'route-map', map = SRI_LANKA, style }) => {
  const pathRef = useRef(null);
  const [len, setLen] = useState(0);
  const pts = stops.map((s) => map.project(s.lat, s.lon));
  const route = smooth(pts, false);
  useEffect(() => { if (pathRef.current) setLen(pathRef.current.getTotalLength()); }, [route]);
  const progress = stops.length > 1 ? activeIndex / (stops.length - 1) : 1;
  const active = stops[activeIndex];

  return (
    <div className={`relative ${className}`} style={style} data-testid={testId} data-active-stop={active?.key}>
      <svg viewBox={map.viewBox.join(' ')} className="w-full h-full" role="img" aria-label={`Route map of ${map.name}, currently at ${active?.name}`}>
        <defs>
          <pattern id="rm-grain" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.6" fill="#174358" opacity="0.08" /></pattern>
          <clipPath id={`rm-clip-${testId}`}><rect x={map.viewBox[0]} y={map.viewBox[1]} width={map.viewBox[2]} height={map.viewBox[3]} rx="12" /></clipPath>
        </defs>
        <g clipPath={`url(#rm-clip-${testId})`}>
          <path d={map.land} fill="#002131" opacity="0.08" transform="translate(0 8)" />
          <path d={map.land} fill="#FBEADB" stroke="#F4B49A" strokeWidth="2" />
          <path d={map.land} fill="url(#rm-grain)" />
        </g>
        <path d={route} fill="none" stroke="#C4CBD0" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
        {map.sea && (() => { const [sx, sy] = map.project(map.sea.lat, map.sea.lon); return <text x={sx} y={sy} textAnchor="middle" fontSize="16" fontStyle="italic" fontFamily="Instrument Sans, Inter, sans-serif" fill="#308BB6" data-testid="route-map-sea">{map.sea.text}</text>; })()}
        <path ref={pathRef} d={route} fill="none" stroke="#E75E26" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray={len || 1} strokeDashoffset={len ? len * (1 - progress) : 0} style={{ transition: 'stroke-dashoffset .9s cubic-bezier(.2,.7,.2,1)' }} data-testid="route-map-path" />
        {stops.map((s, i) => {
          const [x, y] = pts[i];
          const visited = i < activeIndex, isActive = i === activeIndex;
          const left = map.labelLeft.includes(s.key);
          return (
            <g key={s.key} data-testid={`route-pin-${s.key}`} data-state={isActive ? 'active' : visited ? 'visited' : 'upcoming'}>
              {isActive && <circle cx={x} cy={y} r="10" fill="#E75E26" opacity="0.35"><animate attributeName="r" values="8;22;8" dur="1.8s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.4;0;0.4" dur="1.8s" repeatCount="indefinite" /></circle>}
              <circle cx={x} cy={y} r={isActive ? 11 : 7} fill={isActive ? '#E75E26' : visited ? '#174358' : '#fff'} stroke={isActive ? '#fff' : '#174358'} strokeWidth={isActive ? 3 : 2} style={{ transition: 'r .3s, fill .3s' }} />
              <text x={left ? x - 16 : x + 16} y={y + 6} textAnchor={left ? 'end' : 'start'} fontSize="18" fontFamily="Instrument Sans, Inter, sans-serif" fontWeight={isActive ? 700 : 500} fill={isActive ? '#E75E26' : '#002131'} stroke="#fff" strokeWidth="4" paintOrder="stroke">{s.name}</text>
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
