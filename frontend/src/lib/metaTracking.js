const cookie = (name) => {
  const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : '';
};

// Meta browser IDs for the lead payload; empty values are dropped.
export const metaTracking = () => {
  const fbclid = new URLSearchParams(window.location.search).get('fbclid');
  const fbc = cookie('_fbc') || (fbclid ? `fb.1.${Date.now()}.${fbclid}` : '');
  const out = { fbp: cookie('_fbp'), fbc, user_agent: navigator.userAgent };
  return Object.fromEntries(Object.entries(out).filter(([, v]) => v));
};

// After a successful enquiry: show /thank-you in the address bar (popup stays) and count it as a page view.
export const markThankYou = () => {
  if (window.location.pathname === '/thank-you') return;
  window.history.pushState(window.history.state, '', '/thank-you');
  if (window.fbq) window.fbq('track', 'PageView');
  if (window.gtag) window.gtag('event', 'page_view', { page_location: window.location.href, page_path: '/thank-you', send_to: 'AW-18514359223' });
};
