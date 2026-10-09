import React from 'react';

const DUR = '9s';
const PLANE = 'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z';
const PIN = 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0';
const LEFT = 'M6 52 C 44 52, 86 12, 154 12';
const RIGHT = 'M6 12 C 70 10, 118 48, 150 48';
const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Left: plane takes off and flies toward the heading. Right: plane continues and lands on a pin.
export default function FlightPath({ side = 'left', className = '' }) {
  const left = side === 'left';
  const d = left ? LEFT : RIGHT;
  const id = `fp-${side}`;
  const fly = left ? { kp: '0;0;1;1', kt: '0;0.02;0.4;1' } : { kp: '0;0;1;1', kt: '0;0.44;0.84;1' };
  const show = left ? { v: '0;1;1;0;0', kt: '0;0.04;0.37;0.41;1' } : { v: '0;0;1;1;0;0', kt: '0;0.44;0.47;0.82;0.86;1' };
  const draw = left ? { v: '1;1;0;0;0', kt: '0;0.02;0.4;0.9;1' } : { v: '1;1;1;0;0', kt: '0;0.44;0.84;0.9;1' };
  const fade = left ? { v: '1;1;1;0;0', kt: '0;0.86;0.9;0.96;1' } : { v: '1;1;1;0;0', kt: '0;0.86;0.9;0.96;1' };
  return (
    <svg viewBox="0 0 160 64" className={`overflow-visible ${className}`} aria-hidden="true" data-testid={`flight-path-${side}`}>
      <defs>
        <linearGradient id={`${id}-g`} x1="0" x2="1">
          <stop offset="0" stopColor="#308BB6" stopOpacity={left ? 0.35 : 0.9} />
          <stop offset="1" stopColor="#308BB6" stopOpacity={left ? 0.9 : 0.35} />
        </linearGradient>
      </defs>
      <path id={id} d={d} fill="none" stroke="#308BB6" strokeOpacity="0.22" strokeWidth="1.2" strokeDasharray="2 4" strokeLinecap="round" />
      {!reduce && (
        <>
          <path d={d} fill="none" stroke={`url(#${id}-g)`} strokeWidth="1.6" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset="1">
            <animate attributeName="stroke-dashoffset" values={draw.v} keyTimes={draw.kt} dur={DUR} repeatCount="indefinite" />
            <animate attributeName="opacity" values={fade.v} keyTimes={fade.kt} dur={DUR} repeatCount="indefinite" />
          </path>
          <g opacity="0">
            <animate attributeName="opacity" values={show.v} keyTimes={show.kt} dur={DUR} repeatCount="indefinite" />
            <animateMotion dur={DUR} repeatCount="indefinite" rotate="auto" keyPoints={fly.kp} keyTimes={fly.kt} calcMode="linear"><mpath href={`#${id}`} /></animateMotion>
            <g transform="rotate(45) scale(0.95) translate(-12 -12)"><path d={PLANE} fill="#308BB6" /></g>
          </g>
          {!left && (
            <g transform="translate(150 48)">
              <circle r="4" fill="none" stroke="#F4B49A" strokeWidth="1.5" opacity="0">
                <animate attributeName="r" values="3;3;14;14" keyTimes="0;0.84;0.96;1" dur={DUR} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0;0.8;0;0" keyTimes="0;0.84;0.86;0.96;1" dur={DUR} repeatCount="indefinite" />
              </circle>
              <g opacity="0">
                <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.83;0.86;0.94;0.98;1" dur={DUR} repeatCount="indefinite" />
                <animateTransform attributeName="transform" type="translate" values="0 -10;0 -10;0 1.5;0 0;0 0" keyTimes="0;0.83;0.87;0.9;1" dur={DUR} repeatCount="indefinite" />
                <g transform="scale(0.75) translate(-12 -22)"><path d={PIN} fill="#F4B49A" stroke="#174358" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="10" r="3" fill="#174358" /></g>
              </g>
            </g>
          )}
        </>
      )}
      {reduce && <g transform={left ? 'translate(154 12) rotate(45) scale(0.95) translate(-12 -12)' : 'translate(150 48) rotate(45) scale(0.95) translate(-12 -12)'}><path d={PLANE} fill="#308BB6" /></g>}
    </svg>
  );
}

// One wide route that crosses the whole planner: takes off at the far left, passes behind the form card and lands on a pin at the far right.
const THROUGH = 'M10 70 C 120 70, 200 22, 330 22 S 560 30, 700 30 S 900 58, 990 40';
export function FlightThrough({ className = '', color = '#FFFFFF' }) {
  const id = 'fp-through';
  return (
    <svg viewBox="0 0 1000 90" preserveAspectRatio="none" className={`overflow-visible ${className}`} aria-hidden="true" data-testid="flight-path-through">
      <path id={id} d={THROUGH} fill="none" stroke={color} strokeOpacity="0.35" strokeWidth="1.4" strokeDasharray="3 6" strokeLinecap="round" />
      {!reduce && (
        <>
          <path d={THROUGH} fill="none" stroke={color} strokeOpacity="0.9" strokeWidth="1.8" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset="1">
            <animate attributeName="stroke-dashoffset" values="1;1;0;0;0" keyTimes="0;0.02;0.84;0.9;1" dur={DUR} repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;1;1;0;0" keyTimes="0;0.86;0.9;0.96;1" dur={DUR} repeatCount="indefinite" />
          </path>
          <g opacity="0">
            <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.03;0.83;0.86;1" dur={DUR} repeatCount="indefinite" />
            <animateMotion dur={DUR} repeatCount="indefinite" rotate="auto" keyPoints="0;0;1;1" keyTimes="0;0.02;0.84;1" calcMode="linear"><mpath href={`#${id}`} /></animateMotion>
            <g transform="rotate(45) scale(1.15) translate(-12 -12)"><path d={PLANE} fill={color} /></g>
          </g>
          <g transform="translate(990 40)">
            <circle r="4" fill="none" stroke="#F4B49A" strokeWidth="1.5" opacity="0">
              <animate attributeName="r" values="3;3;16;16" keyTimes="0;0.84;0.96;1" dur={DUR} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0;0.9;0;0" keyTimes="0;0.84;0.86;0.96;1" dur={DUR} repeatCount="indefinite" />
            </circle>
            <g opacity="0">
              <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.83;0.86;0.95;0.99;1" dur={DUR} repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="translate" values="0 -12;0 -12;0 1.5;0 0;0 0" keyTimes="0;0.83;0.87;0.9;1" dur={DUR} repeatCount="indefinite" />
              <g transform="scale(0.95) translate(-12 -22)"><path d={PIN} fill="#F4B49A" stroke="#174358" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="10" r="3" fill="#174358" /></g>
            </g>
          </g>
        </>
      )}
      {reduce && <g transform="translate(990 40) rotate(45) translate(-12 -12)"><path d={PLANE} fill={color} /></g>}
    </svg>
  );
}
