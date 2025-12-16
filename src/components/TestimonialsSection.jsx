import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Section from './Section.jsx';

const testimonials = [
  {
    name: 'Amir Solace',
    role: 'VP Product, Nova Commerce',
    quote:
      'Digital Studio felt like an extension of our in-house team. The launch exceeded our conversion targets and gave our brand a new voice.',
  },
  {
    name: 'Lena Ortiz',
    role: 'Creative Director, Orbit Collective',
    quote:
      'From concept to motion, they understood how to tell our story in a way that felt cinematic but still incredibly usable.',
  },
  {
    name: 'Kai N’Guyen',
    role: 'Founder, Aurora Studio',
    quote:
      'The team pushed us to think bigger while staying grounded in craft. The details in the interactions are what our clients remember.',
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );
  }, [index]);

  const current = testimonials[index];

  return (
    <Section id="testimonials" label="Testimonials">
      <div className="mx-auto max-w-3xl">
        <div className="glass-panel relative overflow-hidden px-6 py-8 md:px-10 md:py-10" ref={cardRef}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.1),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(129,140,248,0.18),transparent_55%)]" />
          <div className="relative space-y-5">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-400">Voices</p>
            <p className="text-lg text-slate-100 md:text-xl">“{current.quote}”</p>
            <div className="flex items-center justify-between gap-4 pt-2">
              <div>
                <p className="text-sm font-semibold text-slate-50">{current.name}</p>
                <p className="text-xs text-slate-400">{current.role}</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    aria-label={`Show testimonial from ${t.name}`}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === index ? 'bg-sky-400 w-6' : 'bg-slate-600'
                    }`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;