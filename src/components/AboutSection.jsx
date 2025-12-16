import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from './Section.jsx';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.about-col', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.fromTo(
        '.stat-number',
        { innerText: 0 },
        {
          innerText: (i, target) => target.dataset.to || 0,
          duration: 2,
          snap: { innerText: 1 },
          ease: 'power1.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="about" label="About & capabilities">
      <div
        ref={sectionRef}
        className="glass-panel grid gap-10 p-6 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] md:p-10"
      >
        <div className="about-col space-y-5">
          <h2 className="font-display text-3xl text-slate-50 md:text-4xl">
            A studio at the intersection of design, code &amp; motion.
          </h2>
          <p className="text-sm text-slate-300 md:text-base">
            Digital Studio is a small team of designers, creative developers and motion directors spread
            across time zones. We collaborate with founders, product teams and agencies to bring ambitious
            ideas to the web.
          </p>
          <p className="text-sm text-slate-400">
            We believe the best experiences are opinionated yet accessible: fast, inclusive, and delightful
            without getting in your way.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
            {[
              'Design systems',
              'Design-to-dev bridges',
              'Creative engineering',
              'GSAP & motion',
              'Three.js experiments',
              'Accessible frontends',
            ].map((item) => (
              <span key={item} className="rounded-full bg-slate-900/90 px-3 py-1 text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="about-col space-y-6">
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div className="rounded-2xl bg-slate-900/90 p-4">
              <p
                className="stat-number text-2xl font-semibold text-sky-400"
                data-to="70"
                aria-label="Over 70 projects delivered"
              >
                70
              </p>
              <p className="mt-1 text-xs text-slate-400">Projects</p>
            </div>
            <div className="rounded-2xl bg-slate-900/90 p-4">
              <p
                className="stat-number text-2xl font-semibold text-sky-400"
                data-to="35"
                aria-label="35+ clients partnered"
              >
                35
              </p>
              <p className="mt-1 text-xs text-slate-400">Clients</p>
            </div>
            <div className="rounded-2xl bg-slate-900/90 p-4">
              <p
                className="stat-number text-2xl font-semibold text-sky-400"
                data-to="20"
                aria-label="20 awards recognized"
              >
                20
              </p>
              <p className="mt-1 text-xs text-slate-400">Awards</p>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Capabilities
            </h3>
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
              <ul className="space-y-2">
                <li>Product &amp; UX strategy</li>
                <li>Interface &amp; visual design</li>
                <li>Design systems &amp; tokens</li>
              </ul>
              <ul className="space-y-2">
                <li>Creative front-end builds</li>
                <li>GSAP, Framer Motion &amp; 3D</li>
                <li>Performance &amp; accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;