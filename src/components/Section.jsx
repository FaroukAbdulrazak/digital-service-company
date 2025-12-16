import React from 'react';

const Section = ({ id, label, children }) => (
  <section id={id} className="relative py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      {label && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">{label}</p>
      )}
      {children}
    </div>
  </section>
);

export default Section;