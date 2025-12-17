import React, { useEffect, useRef } from 'react';
import { Chip, Button } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from 'jquery';
import Section from './Section.jsx';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const orbRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-heading', {
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
      });
      gsap.from('.hero-sub', {
        y: 30,
        opacity: 0,
        duration: 1.1,
        delay: 0.15,
        ease: 'power3.out',
      });
      gsap.from('.hero-cta-group', {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

            if (orbRef.current) {
              gsap.set(orbRef.current, { transformOrigin: 'center center', willChange: 'transform' });
              gsap.to(orbRef.current, {
                duration: 18,
                rotate: 360,
                repeat: -1,
                ease: 'none',
                force3D: true,
              });
              gsap.to(orbRef.current, {
                duration: 6,
                scale: 1.08,
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut',
                force3D: true,
              });
            }

      if (ctaRef.current) {
        const $cta = $(ctaRef.current);
        $cta.on('mouseenter', () => {
          gsap.to(ctaRef.current, {
            scale: 1.04,
            boxShadow: '0 20px 45px rgba(56, 189, 248, 0.6)',
            duration: 0.35,
            ease: 'power2.out',
          });
        });
        $cta.on('mouseleave', () => {
          gsap.to(ctaRef.current, {
            scale: 1,
            boxShadow: '0 18px 35px rgba(15, 23, 42, 0.9)',
            duration: 0.35,
            ease: 'power2.out',
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="top">
      <div className="-mx-3 sm:mx-0">
        <div
          ref={heroRef}
          className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-950/95 p-3 pt-5 sm:p-4 sm:pt-6 md:p-6 md:pt-8 lg:p-12"
          aria-label="Digital Studio hero section"
        >
          <div className="absolute inset-0 hero-gradient opacity-60 mix-blend-screen" />
          <div className="absolute -inset-x-10 -top-40 h-72 bg-[radial-gradient(circle,rgba(56,189,248,0.35),transparent_65%)] blur-3xl" />
          <div className="relative grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 min-w-0">
              <Chip
                label="Digital Studio · Creative Digital Services"
                color="primary"
                variant="outlined"
                className="!border-sky-400/50 !bg-slate-900/80 !text-[7px] sm:!text-[10px] md:!text-xs !font-medium !uppercase !tracking-[0.2em] sm:!tracking-[0.25em] !max-w-full"
                style={{ letterSpacing: '0.2em'}}
              />
              <div className="space-y-2 sm:space-y-3 md:space-y-4 min-w-0">
                <h1 className="hero-heading font-display text-xl leading-tight text-slate-50 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl break-words">
                  We Build
                  <span className="block bg-gradient-to-r from-sky-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent break-words">
                    Digital Experiences
                  </span>
                </h1>
                <p className="hero-sub max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm md:text-base lg:text-lg break-words">
                  Digital Studio partners with ambitious brands to design, engineer and animate
                  immersive products, bold identities, and story-driven web experiences.
                </p>
              </div>
              <div className="hero-cta-group flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-3 md:gap-4 pt-1 sm:pt-2">
                <Button
                  ref={ctaRef}
                  variant="contained"
                  color="primary"
                  size="large"
                  className="!rounded-full !bg-sky-500 !px-4 !py-2 sm:!px-5 sm:!py-2.5 md:!px-6 md:!py-3 !text-[11px] sm:!text-xs md:!text-sm !font-semibold !normal-case !shadow-[0_18px_35px_rgba(15,23,42,0.9)] hover:!bg-sky-400 !w-full sm:!w-auto !min-w-0"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Let&apos;s build something
                </Button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-slate-600/80 bg-slate-900/40 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 text-[11px] sm:text-xs md:text-sm font-medium text-slate-200 transition hover:border-sky-400 hover:text-sky-300 w-full sm:w-auto min-w-0"
                  onClick={() => {
                    const el = document.getElementById('work');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="truncate">View selected work</span>
                  <span aria-hidden="true" className="flex-shrink-0">↗</span>
                </button>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 md:gap-4 pt-1 sm:pt-2 md:pt-4 text-[10px] sm:text-xs text-slate-400">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <span className="inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-[10px] sm:text-[11px] md:text-xs break-words">Available for new projects Q1–Q2</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="rounded-full bg-slate-900/80 px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.18em] text-slate-300 break-words">
                    Web • Brand • Motion • 3D
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center min-h-[180px] sm:min-h-[200px] md:min-h-[250px] lg:min-h-0">
              <div
                ref={orbRef}
                className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-72 lg:w-72 xl:h-80 xl:w-80 rounded-[40%] bg-gradient-to-tr from-sky-500 via-cyan-400 to-indigo-500 opacity-90 shadow-[0_40px_120px_rgba(56,189,248,0.7)]"
                aria-hidden="true"
              >
                <div className="absolute inset-4 sm:inset-5 md:inset-6 rounded-[40%] bg-[radial-gradient(circle_at_10%_0%,rgba(15,23,42,0.9),transparent_65%),radial-gradient(circle_at_80%_100%,rgba(15,23,42,0.9),transparent_55%)] mix-blend-multiply" />
                <div className="absolute inset-0 animate-pulse rounded-[40%] bg-[radial-gradient(circle_at_50%_0%,rgba(248,250,252,0.22),transparent_60%)] mix-blend-screen" />
              </div>
              <div className="pointer-events-none absolute inset-0 hidden sm:block">
                <div className="absolute -left-4 top-4 sm:-left-6 sm:top-8 rounded-full bg-slate-900/80 px-2 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-xs text-slate-200">
                  <span className="block text-center text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-slate-400">Trusted by</span>
                  <div className="mt-1 flex flex-col sm:flex-row gap-1 sm:gap-2 text-[10px] sm:text-[11px]">
                    <span className="rounded-full bg-slate-800/90 px-1.5 py-0.5 sm:px-2 text-center">Product teams</span>
                    <span className="rounded-full bg-slate-800/90 px-1.5 py-0.5 sm:px-2 text-center">Creative studios</span>
                  </div>
                </div>
                <div className="absolute -right-2 bottom-6 sm:-right-4 sm:bottom-10 flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl bg-slate-900/80 p-2 sm:p-3 text-[10px] sm:text-xs">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-sky-400">In numbers</span>
                  <div className="flex gap-3 sm:gap-4">
                    <div>
                      <p className="text-base sm:text-lg font-semibold text-slate-50">70+</p>
                      <p className="text-[10px] sm:text-[11px] text-slate-400">Products shipped</p>
                    </div>
                    <div>
                      <p className="text-base sm:text-lg font-semibold text-slate-50">20</p>
                      <p className="text-[10px] sm:text-[11px] text-slate-400">Awards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
