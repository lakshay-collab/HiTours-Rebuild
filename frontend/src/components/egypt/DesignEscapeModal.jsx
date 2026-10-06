import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { X, ChevronDown } from 'lucide-react';
import PhoneInput, { EMPTY_PHONE, phoneError, phonePayload } from './PhoneInput';

const EMPTY_FORM = { name: '', phone: EMPTY_PHONE, email: '' };

const inputCls = 'h-12 sm:h-[52px] w-full rounded-xl border bg-white px-4 eg-body-lg text-[#002131] placeholder:text-[#8A9297] transition-[border-color,box-shadow] focus:border-[#308BB6] focus:shadow-[0_0_0_3px_rgba(48,139,182,0.18)] focus:outline-none';
const phoneWrapCls = inputCls.replace('px-4 ', '').replace(/focus:/g, 'focus-within:');
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validate = (f) => ({
  name: f.name.trim() ? '' : 'Please enter your name',
  phone: phoneError(f.phone),
  email: !f.email.trim() ? 'Please enter your email address' : EMAIL.test(f.email.trim()) ? '' : 'Please enter a valid email address',
  destination: f.destination ? '' : 'Please select a destination'
});

const Field = ({ label, error, children }) => (
  <label className="flex flex-col gap-1 sm:gap-1.5">
    <span className="eg-label-lg text-[#002131]">{label}</span>
    {children}
    {error && <span className="eg-body-sm text-[#B3261E]" role="alert" data-testid="dye-error">{error}</span>}
  </label>
);

// Reusable lead-capture popup. `destination` comes from the itinerary being viewed.
const ESCAPE_IMAGES = { egypt: '/escape/egypt.webp', vietnam: '/escape/vietnam.webp', srilanka: '/escape/sri-lanka.webp' };
const escapeImage = (destination, fallback) => ESCAPE_IMAGES[(destination || '').toLowerCase().replace(/[^a-z]/g, '')] || fallback;

export default function DesignEscapeModal({ open, onClose, destination, tripTitle, image, imageAlt, selectable = false, destinationOptions = [] }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [picked, setPicked] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = overflow; window.removeEventListener('keydown', onKey); };
  }, [open, onClose]);

  useEffect(() => { if (open) setPicked(destination || ''); }, [open, destination]);
  useEffect(() => { if (!open) { setForm(EMPTY_FORM); setErrors({}); setStatus('idle'); setSubmitError(''); } }, [open]);

  const optionImage = Object.fromEntries(destinationOptions.map((o) => [o.name, o.image]));
  const activeDestination = selectable ? picked : destination;
  const panelImage = selectable ? (optionImage[picked] || image) : escapeImage(destination, image);

  if (!open) return null;
  const set = (k) => (e) => { setForm((f) => ({ ...f, [k]: e.target.value })); if (errors[k]) setErrors((er) => ({ ...er, [k]: '' })); };
  const setPhone = (v) => { setForm((f) => ({ ...f, phone: v })); if (errors.phone) setErrors((er) => ({ ...er, phone: '' })); };
  const submit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    const lead = { name: form.name.trim(), phone: form.phone, email: form.email.trim(), destination: activeDestination };
    const errs = validate(lead);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    setStatus('sending');
    setSubmitError('');
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/leads`, { name: lead.name, ...phonePayload(lead.phone), email: lead.email, destination: activeDestination, trip_title: tripTitle || '', source: selectable ? 'design-your-escape-home' : 'design-your-escape' });
      setStatus('done');
    } catch (err) {
      const detail = err?.response?.data?.detail;
      setSubmitError(typeof detail === 'string' ? detail : '');
      setStatus('error');
    }
  };
  const cls = (k) => `${inputCls} ${errors[k] ? 'border-[#B3261E]' : 'border-[#C4CBD0]'}`;

  return (
    <div className="eg dye-root fixed inset-0 z-[120] flex items-end sm:items-center justify-center p-0 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="dye-title" data-testid="dye-modal">
      <button type="button" aria-label="Close" onClick={onClose} className="dye-backdrop absolute inset-0" data-testid="dye-overlay" />
      <div className="relative w-full h-[calc(100dvh-12px)] sm:h-auto sm:max-w-[960px] sm:max-h-[94vh] overflow-hidden rounded-t-3xl sm:rounded-3xl bg-[#FBF9F1] shadow-[0_32px_80px_rgba(0,33,49,0.45)] flex flex-col sm:flex-row" data-testid="dye-card">
        <button type="button" onClick={onClose} aria-label="Close" className="absolute right-4 top-4 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/90 text-[#002131] shadow-[0_4px_14px_rgba(0,33,49,0.25)] hover:bg-white transition-colors" data-testid="dye-close"><X size={20} /></button>

        <div className="relative basis-[40%] h-[40%] sm:h-auto sm:basis-auto sm:w-[40%] shrink-0 grow-0 bg-[#EAE8E0] overflow-hidden" data-testid="dye-image-panel">
          {panelImage && <img src={panelImage} alt={imageAlt || activeDestination} className="absolute inset-0 w-full h-full object-cover" data-testid="dye-image" />}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,33,49,0.15)_0%,rgba(0,33,49,0.25)_45%,rgba(0,33,49,0.78)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 text-white">
            <p className="eg-label-lg uppercase tracking-[0.18em] text-white/80">Plan your escape</p>
            <p className="mt-0.5 sm:mt-1 eg-headline-lg sm:eg-display-sm text-white drop-shadow-[0_2px_10px_rgba(0,33,49,0.5)]" data-testid="dye-image-destination">{activeDestination || 'Your next escape'}</p>
            {tripTitle && <p className="mt-2 eg-body-sm text-white/85 hidden sm:block line-clamp-2">{tripTitle}</p>}
          </div>
        </div>

        <div className="basis-[60%] h-[60%] sm:h-auto sm:basis-auto sm:w-[60%] shrink-0 grow-0 min-h-0 overflow-y-auto px-5 py-3 sm:px-10 sm:py-10 sm:max-h-[94vh]">
          {status === 'done' ? (
            <div className="h-full flex flex-col justify-center py-6 text-center sm:text-left" data-testid="dye-success">
              <h2 className="eg-headline-lg text-[#002131]">Thank you, {form.name.trim().split(' ')[0]}!</h2>
              <p className="mt-3 eg-body-lg text-[#174358]">Our {activeDestination} travel expert will be in touch shortly to design your escape.</p>
              <button type="button" onClick={onClose} className="eg-btn-filled mt-8 h-12 px-8 eg-title-md self-center sm:self-start" data-testid="dye-done">Back to itinerary</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="flex flex-col gap-2.5 sm:gap-5">
              <div className="pr-8 sm:pr-6">
                <h2 id="dye-title" className="eg-headline-lg text-[#002131]">Design Your Escape</h2>
                <p className="mt-1 sm:mt-2 eg-body-lg text-[#174358]">Tell us a little about your trip and our travel expert will help you plan the perfect escape.</p>
              </div>
              <Field label="Name" error={errors.name}><input type="text" autoComplete="name" value={form.name} onChange={set('name')} placeholder="Enter your name" className={cls('name')} data-testid="dye-name" /></Field>
              <Field label="Email" error={errors.email}><input type="email" autoComplete="email" value={form.email} onChange={set('email')} placeholder="Enter your email address" className={cls('email')} data-testid="dye-email" /></Field>
              <Field label="Phone Number" error={errors.phone}><PhoneInput value={form.phone} onChange={setPhone} className={`${phoneWrapCls} ${errors.phone ? 'border-[#B3261E]' : 'border-[#C4CBD0]'}`} testId="dye-phone" /></Field>
              {selectable && (
                <Field label="Destination" error={errors.destination}>
                  <div className="relative">
                    <select value={picked} onChange={(e) => { setPicked(e.target.value); if (errors.destination) setErrors((er) => ({ ...er, destination: '' })); }} className={`${cls('destination')} appearance-none pr-10 ${picked ? '' : 'text-[#8A9297]'}`} data-testid="dye-destination-select">
                      <option value="" disabled>Select a destination…</option>
                      {destinationOptions.map((o) => <option key={o.name} value={o.name}>{o.name}</option>)}
                    </select>
                    <ChevronDown size={20} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#174358]" />
                  </div>
                </Field>
              )}
              {!selectable && <input type="hidden" name="destination" value={destination || ''} data-testid="dye-destination" />}
              {status === 'error' && <p className="eg-body-sm text-[#B3261E]" role="alert" data-testid="dye-submit-error">{submitError || 'Something went wrong – please try again.'}</p>}
              <button type="submit" disabled={status === 'sending'} className="eg-btn-filled h-12 sm:h-14 w-full eg-title-md disabled:opacity-70 sm:mt-1" data-testid="dye-submit">{status === 'sending' ? 'Sending…' : 'Get Quote'}</button>
              <p className="eg-body-sm text-[#6F777C] text-center">No obligation · Your details stay with Hi Tours</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
