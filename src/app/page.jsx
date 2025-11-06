'use client';

import { useEffect } from 'react';
import Header from './components/Header';
import HeroCarousel, { MobileCTACard } from './components/HeroCarousel';
import AboutSection from './components/AboutSection';
import ServicesGrid from './components/ServicesGrid';
import PromoBanner from './components/PromoBanner';
import PricingPlans from './components/PricingPlans';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import StructuredData from './components/StructuredData';
import { initScrollAnimations } from './utils/scrollAnimations';

export default function Home() {
  // Initialize scroll-triggered animations
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <>
      <StructuredData />
      <main className="min-h-screen bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-blue-500/5">
        <Header />
      
      <HeroCarousel />
      
      <MobileCTACard />
      
      <AboutSection />
      
      <ServicesGrid />
      
      <PromoBanner />
      
      <PricingPlans />
      
      <Testimonials />
      
      <ContactSection />
      
      <Footer />
      
      <ScrollToTop />
      
      <CookieConsent />
    </main>
    </>
  );
}
