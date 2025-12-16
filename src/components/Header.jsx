import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Clients' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition duration-300 ${
        isScrolled ? 'backdrop-blur-xl bg-slate-950/85' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-500 text-lg font-semibold text-slate-50 shadow-lg">
            DS
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-100">Digital Studio</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Digital services company
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="transition hover:text-sky-300"
              onClick={() => {
                const el = document.getElementById(item.id);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-sky-300 hover:border-sky-400"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Start a project
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;