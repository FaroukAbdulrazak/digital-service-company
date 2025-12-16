import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from './Section.jsx';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    title: 'Nova Commerce',
    category: 'E‑commerce Experience',
    thumbnail: '/assets/nova-commerce.webp',
  },
  {
    title: 'Orbit OS',
    category: 'Product Landing · SaaS',
    thumbnail: '/assets/orbit-os.webp',
  },
  {
    title: 'Aurora Studio',
    category: 'Creative Portfolio',
    thumbnail: '/assets/aurora-studio.webp',
  },
];

const CaseStudiesSection = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.case-card', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: trackRef.current,
          start: 'top 75%',
        },
      });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="work" label="Selected work">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-display text-2xl text-slate-50 sm:text-3xl md:text-4xl">
            Case studies &amp; product stories.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-400 md:text-base">
            A snapshot of recent collaborations spanning ecommerce, SaaS, and creative platforms.
          </p>
        </div>
        <p className="max-w-xs text-xs text-slate-500">
          Full case studies available on request. We adapt our process to match your team&apos;s
          velocity.
        </p>
      </div>
      <div
        ref={trackRef}
        className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {caseStudies.map((project) => (
          <article key={project.title} className="case-card glass-panel w-full overflow-hidden">
            <div className="relative h-48 overflow-hidden sm:h-44">
              <img
                src={project.thumbnail}
                alt={project.title}
                title={project.title}
                width="400"
                height="200"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                style={{ aspectRatio: '2 / 1' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />
            </div>
            <div className="space-y-2 p-4 sm:p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{project.category}</p>
              <h3 className="text-base font-semibold text-slate-50 sm:text-lg">{project.title}</h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                Conversion-focused, performant experiences with motion that supports the story.
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default CaseStudiesSection;
