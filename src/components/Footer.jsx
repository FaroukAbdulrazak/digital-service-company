import React from 'react';

const Footer = () => (
  <footer className="border-t border-slate-800/70 py-6 text-xs text-slate-500">
    <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between lg:px-8">
      <p>© {new Date().getFullYear()} Digital Studio. Crafted for the Digital Services brief.</p>
      <p className="text-[11px]">
        Built with React, GSAP, jQuery, Tailwind, Material UI &amp; Framer Motion.
      </p>
    </div>
  </footer>
);

export default Footer;