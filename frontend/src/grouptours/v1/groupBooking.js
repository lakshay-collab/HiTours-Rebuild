// Group-tour booking helpers: departures come from the API (single source of truth for prices, seats and deposit %).
import { useEffect, useState } from 'react';

const API = process.env.REACT_APP_BACKEND_URL;

export const fmtInr = (n) => `\u20b9${Math.round(n).toLocaleString('en-IN')}`;
export const fromISO = (s) => { const [y, m, d] = (s || '').split('-').map(Number); return y && m && d ? new Date(y, m - 1, d) : null; };
export const fmtDate = (s, opts = { day: 'numeric', month: 'short', year: 'numeric' }) => fromISO(s)?.toLocaleDateString('en-GB', opts) || '';
export const fmtRange = (dep) => `${fmtDate(dep.start, { day: 'numeric', month: 'short' })} \u2013 ${fmtDate(dep.end)}`;
export const monthKey = (iso) => iso.slice(0, 7);
export const monthLabel = (key) => fromISO(`${key}-01`).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

export const depositOf = (dep, travellers = 1, room = 'twin') => {
  const pp = dep.price + (room === 'single' ? dep.single_supplement : 0);
  const total = pp * travellers;
  const deposit = Math.round((total * dep.deposit_pct) / 100);
  return { pp, total, deposit, balance: total - deposit };
};

// v1 design preview: the API now returns a flat per-person hold deposit, so recreate the old 10% / 5% early-bird fields for display
const legacy = (d) => {
  const ahead = (new Date(d.start) - new Date()) / 864e5;
  const early = ahead >= 90;
  return { ...d, early_bird: early, full_payment: false, deposit_pct: early ? 5 : 10 };
};

export const useDepartures = (key) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    let live = true;
    fetch(`${API}/api/bookings/group/${key}/departures`).then((r) => { if (!r.ok) throw new Error('Could not load departures'); return r.json(); })
      .then((d) => live && setData({ ...d, departures: d.departures.map(legacy) })).catch((e) => live && setError(e.message));
    return () => { live = false; };
  }, [key]);
  return { data, departures: data?.departures || [], error };
};

export const payLabel = (dep) => (dep.full_payment ? 'Full payment · departs within 60 days' : `Pay only · ${dep.deposit_pct}% deposit`);
export const payWord = (dep) => (dep.full_payment ? 'full payment' : 'deposit');

export const nextOpen = (deps) => deps.find((d) => d.status !== 'sold_out');
export const lowestPrice = (deps) => (deps.length ? Math.min(...deps.map((d) => d.price)) : null);
