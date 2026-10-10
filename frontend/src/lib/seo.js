import { useEffect } from 'react';

const setMeta = (selector, attr, value, content) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

// Keeps the tab title, meta description and canonical in sync with the current page.
export const usePageMeta = (title, description) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description);
      setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    }
    if (title) setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    const url = `${window.location.origin}${window.location.pathname}`;
    link.setAttribute('href', url);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[property="og:image"]', 'property', 'og:image', `${window.location.origin}/hero-poster.jpg`);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', `${window.location.origin}/hero-poster.jpg`);
  }, [title, description]);
};
