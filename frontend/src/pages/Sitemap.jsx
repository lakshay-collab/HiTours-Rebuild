import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GROUPS, ALL_URLS, page } from '../sitemapData';

export default function Sitemap() {
  useEffect(() => { document.title = page.title; window.scrollTo(0, 0); }, []);
  return (
    <div className="eg" data-testid="sitemap-page">
      <Header />
      <main className="eg-container pt-10 md:pt-14 pb-16 md:pb-24">
        <div className="max-w-[820px]">
          <h1 className="eg-display-lg text-[#002131]" data-testid="sitemap-title">{page.h1}</h1>
          <p className="mt-4 eg-body-lg text-[#174358]">{page.text}</p>
          <p className="mt-3 eg-body-md text-[#174358]" data-testid="sitemap-count">{ALL_URLS.length} pages</p>
        </div>

        <div className="mt-10 columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:_balance]">
          {GROUPS.map((g) => (
            <section key={g.title} className="mb-8 break-inside-avoid" data-testid="sitemap-group">
              <h2 className="eg-title-lg text-[#002131]">{g.title} <span className="eg-body-md text-[#6F777C]">({g.links.length})</span></h2>
              <ul className="mt-3 space-y-1.5">
                {g.links.map(([label, href]) => (
                  <li key={href}>
                    <Link to={href} className="eg-body-md text-[#174358] hover:text-[#002131] hover:underline" data-testid="sitemap-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
