'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, Sparkles, Star, Users, Award } from 'lucide-react';
import gsap from 'gsap';

const slides = [
  {
    bg: 'from-emerald-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80',
    eyebrow: 'Nettoyage Professionnel',
    heading: 'Transformez Votre Espace en Paradis Impeccable',
    subheading: 'Services de nettoyage experts avec produits écologiques et professionnels certifiés',
    phone: '+33640604057',
  },
  {
    bg: 'from-orange-500 to-amber-600',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1920&q=80',
    eyebrow: 'Fiable & Digne de Confiance',
    heading: 'Un Service de Qualité Sur Lequel Vous Pouvez Compter',
    subheading: "2+ ans d'expérience • 1000+ clients satisfaits • 100% satisfaction garantie",
    phone: '+33640604057',
  },
  {
    bg: 'from-blue-500 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1920&q=80',
    eyebrow: 'Offre Spéciale',
    heading: 'Obtenez 10% de Réduction Sur Votre Premier Service',
    subheading: 'Réservez maintenant et découvrez la différence. Offre limitée!',
    phone: '+33640604057',
  },
];

// Mobile CTA Card Component (shown outside carousel)
export function MobileCTACard() {
  return (
    <section className="md:hidden relative px-4 pt-8 pb-8">
      <div className="relative group max-w-7xl mx-auto">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-emerald-500 to-cyan-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
        
        {/* Main Card */}
        <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-card group-hover:shadow-card-hover transition-all duration-500">
          <div className="flex flex-col items-center gap-4">
            {/* Icon */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-emerald-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-slow" />
              <div className="relative bg-gradient-to-br from-primary-500 to-emerald-600 p-4 rounded-2xl shadow-glow">
                <Phone size={32} className="text-white" />
              </div>
            </div>

            {/* Text */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-accent-500" />
                <span className="text-xs font-semibold text-accent-600 uppercase tracking-wide">Réponse Rapide</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                Appelez-Nous À Tout Moment
              </h3>
              <p className="text-gray-600 text-sm">
                Support 24/7 • Devis instantanés • Services d&apos;urgence
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="tel:+33640604057"
              className="group/btn relative w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-emerald-600 text-white rounded-xl font-bold text-lg text-center overflow-hidden shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                +33 6 40 60 40 57
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-primary-500 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </a>

            {/* Trust Indicators */}
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="font-bold">Note 4.9/5</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                <Users className="w-4 h-4 text-primary-500" />
                <span className="font-bold">1K+ Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentRef = useRef(null);
  const autoplayRef = useRef(null);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsPaused(false);
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 400);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsPaused(false);
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 400);
  };

  useEffect(() => {
    if (contentRef.current) {
      // Reset animation by removing and re-adding class
      const items = contentRef.current.querySelectorAll('.hero-item');
      items.forEach(item => {
        item.style.animation = 'none';
        setTimeout(() => {
          item.style.animation = '';
        }, 10);
      });
    }
  }, [currentSlide]);

  useEffect(() => {
    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          setTimeout(() => setIsTransitioning(false), 50);
        }, 400);
      }, 6000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [currentSlide, isPaused]);

  const current = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-[600px] h-[70vh] sm:h-[80vh] lg:h-[85vh] max-h-[900px] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        {/* Image with fade + zoom + bounce transition */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          isTransitioning ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
        }`} style={{
          transitionTimingFunction: isTransitioning ? 'cubic-bezier(0.4, 0, 1, 1)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}>
          <img
            src={current.image}
            alt="Cleaning service"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Gradient Overlay for better text contrast */}
        <div className={`absolute inset-0 bg-gradient-to-br ${current.bg} transition-opacity duration-700 ${
          isTransitioning ? 'opacity-0' : 'opacity-30'
        }`} />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20" />
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white rounded-full blur-2xl animate-pulse-slow" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 sm:py-8">
        <div ref={contentRef} className={`max-w-4xl mb-4 text-center sm:text-left transition-all duration-[450ms] ${
          isTransitioning ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
        }`} style={{
          transitionTimingFunction: isTransitioning ? 'cubic-bezier(0.4, 0, 1, 1)' : 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        }}>
          {/* Eyebrow */}
          <div className="hero-item flex items-center justify-center sm:justify-start gap-2 mb-4 sm:mb-6">
            <Sparkles className="text-white w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
            <span className="text-white/90 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20">
              {current.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-item text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight drop-shadow-2xl min-h-[80px] sm:min-h-[100px] md:min-h-[140px]">
            {current.heading}
          </h1>

          {/* Subheading */}
          <p className="hero-item text-base sm:text-lg md:text-xl text-white/95 mb-5 sm:mb-6 leading-relaxed font-light max-w-2xl min-h-[50px] sm:min-h-[60px] md:min-h-[70px]">
            {current.subheading}
          </p>

          {/* CTAs */}
          <div className="hero-item flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
            <a
              href={`tel:${current.phone}`}
              className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary-500 to-emerald-600 rounded-xl font-bold text-base sm:text-lg overflow-hidden shadow-2xl hover:shadow-glow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-primary-600 transition-colors">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                Appelez-Nous
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-accent-500 to-orange-600 text-white rounded-xl font-bold text-base sm:text-lg overflow-hidden shadow-2xl hover:shadow-accent-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-accent-500 transition-colors">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-500" />
                Demander un Devis
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="hero-item mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4 items-center justify-center sm:justify-start">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white text-xs sm:text-sm font-semibold">1000+ Clients</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
              <span className="text-white text-xs sm:text-sm font-semibold">Écologique</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
              <span className="text-white text-xs sm:text-sm font-semibold">100% Satisfaction</span>
            </div>
          </div>
        </div>

        {/* CTA Card - Hidden on mobile, shown on md+ */}
        <div className="hero-item relative w-full mt-4 sm:mt-6 hidden md:block">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-emerald-500 to-cyan-500 rounded-2xl sm:rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
            
            {/* Main Card */}
            <div className="relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-card group-hover:shadow-card-hover transition-all duration-500">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
                {/* Left Side */}
                <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-emerald-600 rounded-2xl sm:rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-slow" />
                    <div className="relative bg-gradient-to-br from-primary-500 to-emerald-600 p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-glow">
                      <Phone size={32} className="text-white sm:hidden" />
                      <Phone size={40} className="text-white hidden sm:block" />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent-500" />
                      <span className="text-xs sm:text-sm font-semibold text-accent-600 uppercase tracking-wide">Réponse Rapide</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                      Appelez-Nous À Tout Moment
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                      Support 24/7 • Devis instantanés • Services d&apos;urgence
                    </p>
                  </div>
                </div>

                {/* Right Side - CTA */}
                <div className="flex flex-col gap-2 sm:gap-3 w-full lg:w-auto">
                  <a
                  href="tel:+33640604057"
                    className="group/btn relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary-500 to-emerald-600 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg md:text-xl text-center overflow-hidden shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:rotate-12 transition-transform" />
                      <span className="hidden sm:inline">+33 6 40 60 40 57</span>
                      <span className="sm:hidden">Appelez</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-primary-500 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </a>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-gray-700">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold">Note 4.9/5</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                      <Users className="w-4 h-4 text-primary-500" />
                      <span className="font-bold">1K+ Clients</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Bottom on mobile, sides on desktop */}
      {/* Mobile: Bottom centered */}
      <div className="md:hidden absolute bottom-20 left-0 right-0 z-20 flex justify-center gap-4">
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-full transition-all duration-300 hover:scale-110 group border border-white/30 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white group-hover:-translate-x-1 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-full transition-all duration-300 hover:scale-110 group border border-white/30 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      {/* Desktop: Left and Right sides */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 md:left-8 top-2/3 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md p-4 rounded-full transition-all duration-300 hover:scale-110 group border border-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 md:right-8 top-2/3 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md p-4 rounded-full transition-all duration-300 hover:scale-110 group border border-white/30"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-12 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-float hidden lg:block" />
      <div className="absolute bottom-40 left-32 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
    </section>
  );
}
