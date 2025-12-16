import React, { useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from './Section.jsx';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const panel = sectionRef.current?.querySelector('.contact-panel');
    if (!sectionRef.current || !panel) return;

    const ctx = gsap.context(() => {
      gsap.from(panel, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="contact" label="Let’s collaborate">
      <div ref={sectionRef} className="contact-panel glass-panel flex flex-col gap-6 p-8 md:p-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display text-2xl text-slate-50 md:text-3xl">
            Let&apos;s build something amazing.
          </h2>
          <p className="max-w-md text-sm text-slate-400">
            Share a product idea, a brand challenge, or a brief. We&apos;ll respond within two business
            days with thoughts and next steps.
          </p>
        </div>
        <form
          className="grid gap-4 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)]"
          aria-label="Contact Digital Studio"
        >
          <div className="space-y-3">
            <label htmlFor="headline" className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Project headline
              <input
                id="headline"
                type="text"
                name="headline"
                placeholder="Launch site for a new AI product"
                autoComplete="off"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-sky-500/40 focus:ring-2"
              />
            </label>
            <label htmlFor="email" className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Email
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@company.com"
                autoComplete="email"
                className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-sky-500/40 focus:ring-2"
              />
            </label>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <label htmlFor="details" className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              What are you looking to create?
              <textarea
                id="details"
                name="details"
                rows={5}
                placeholder="Tell us about your product, timing, and what success looks like."
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-sky-500/40 focus:ring-2"
              />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="medium"
                className="!rounded-full !bg-sky-500 !px-6 !py-2.5 !text-sm !font-semibold !normal-case hover:!bg-sky-400"
              >
                Share your idea
              </Button>
              <p className="text-[11px] text-slate-500">
                No spam. Just a thoughtful response from the team.
              </p>
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default ContactSection;
