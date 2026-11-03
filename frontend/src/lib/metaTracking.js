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
