import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGlobe, FiPenTool, FiStar, FiFilm, FiBox, FiTrendingUp } from 'react-icons/fi';
import Section from './Section.jsx';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: FiGlobe,
    title: 'Web Experiences',
    description: 'High-performance websites and web apps that feel cinematic yet fast.',
    color: 'from-sky-400 to-cyan-500',
  },
  {
    icon: FiPenTool,
    title: 'Product & UI Design',
    description: 'From idea to interaction – interfaces that balance beauty and clarity.',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: FiStar,
    title: 'Brand Systems',
    description: 'Visual identities, design systems and launch collateral for modern brands.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: FiFilm,
    title: 'Motion & Story',
    description: 'Micro-interactions, product trailers and motion that reinforces your story.',
    color: 'from-violet-400 to-fuchsia-500',
  },
  {
    icon: FiBox,
    title: '3D & Interactive',
    description: 'Three-dimensional storytelling and WebGL/Three.js powered experiences.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: FiTrendingUp,
    title: 'Experience Strategy',
    description: 'UX strategy, experimentation and continuous optimization at scale.',
    color: 'from-emerald-400 to-teal-500',
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      gsap.utils.toArray('.service-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.32,
            ease: 'power2.out',
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.32,
            ease: 'power2.out',
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="services" label="Services">
      <div ref={sectionRef}>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl text-slate-50 md:text-4xl">
              Digital services for ambitious teams.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-400 md:text-base">
              From first sketch to final build, we design and ship experiences that feel crafted,
              considered and distinctly yours.
            </p>
          </div>
          <p className="max-w-sm text-xs text-slate-500">
            Every engagement blends strategy, design and engineering. We join your team as partners,
            not vendors.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="service-card glass-panel relative flex flex-col gap-3 p-5"
            >
              <div className="flex items-center justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                  <service.icon aria-hidden="true" className="text-lg" />
                </div>
                <span className="rounded-full bg-slate-900/70 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Core
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-50">{service.title}</h3>
              <p className="text-sm text-slate-400">{service.description}</p>
              <div className="mt-3 flex gap-2 text-[11px] text-slate-500">
                <span className="rounded-full bg-slate-900/80 px-2 py-1">Discovery</span>
                <span className="rounded-full bg-slate-900/80 px-2 py-1">Design</span>
                <span className="rounded-full bg-slate-900/80 px-2 py-1">Build</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;
