import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import CaseStudiesSection from './components/CaseStudiesSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const App = () => (
  <div className="min-h-screen">
    <div className="noise-overlay" aria-hidden="true" role="presentation" />
    <Header />
    <main role="main">
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default App;
