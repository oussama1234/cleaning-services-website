'use client';

import { useEffect, useRef } from 'react';
import { Sparkles, Zap, ArrowRight, Tag, Shield, Leaf, Percent } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingBackground from './FloatingBackground';

gsap.registerPlugin(ScrollTrigger);

export default function PromoBanner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.promo-item', {
        y: 15,
        opacity: 0,
        stagger: 0.06,
        duration: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top 85%',
        },
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { icon: Tag, text: 'Consultation Gratuite', gradient: 'from-primary-500 to-emerald-500' },
    { icon: Leaf, text: 'Écologique', gradient: 'from-emerald-500 to-cyan-500' },
    { icon: Shield, text: '100% Garanti', gradient: 'from-cyan-500 to-blue-500' }
  ];

  return (
    <section
      ref={bannerRef}
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Gradient Overlay - Greenish like carousel */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-85" />
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/10" />
        
        <FloatingBackground variant="emerald" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="promo-item inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6 border border-white/30">
          <Percent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          <span className="text-white font-bold uppercase text-xs sm:text-sm tracking-wider">Offre À Durée Limitée</span>
        </div>

        {/* Main heading */}
        <h2 className="promo-item text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-3 text-white drop-shadow-2xl px-4">
          Économies Spéciales !
        </h2>
        
        <p className="promo-item text-base sm:text-lg text-white/95 mb-3 sm:mb-4 font-semibold max-w-2xl mx-auto px-4 drop-shadow-lg">
          Réservez aujourd&apos;hui et obtenez
        </p>

        {/* Discount Badge */}
        <div className="promo-item inline-block mb-3 sm:mb-5">
          <div className="relative group">
            <div className="absolute -inset-2 bg-white/30 rounded-2xl sm:rounded-3xl blur-xl animate-pulse" />
            <div className="relative bg-white rounded-2xl sm:rounded-3xl px-6 py-4 sm:px-10 sm:py-6 shadow-2xl border-4 border-white/50">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                10% OFF
              </div>
            </div>
          </div>
        </div>

        <p className="promo-item text-base sm:text-lg text-white/95 mb-6 sm:mb-8 font-semibold max-w-2xl mx-auto px-4 drop-shadow-lg">
          sur votre premier service !
        </p>

        {/* Features */}
        <div className="promo-item flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-white/40 rounded-xl blur group-hover:bg-white/60 transition-all" />
                <div className="relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-white/90 backdrop-blur-sm rounded-xl border border-white/50 shadow-xl group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-4 h-4 text-cyan-600" />
                  <span className="font-bold text-xs sm:text-sm text-gray-900">{feature.text}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="promo-item px-4">
          <div className="relative inline-block group w-full sm:w-auto">
            <div className="absolute -inset-1 bg-white/50 rounded-xl blur-xl group-hover:bg-white/70 transition-all" />
            <button
              onClick={handleClick}
              className="relative inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 rounded-xl font-bold text-base sm:text-lg overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto border-2 border-white/50"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 group-hover:rotate-180 transition-transform duration-500" />
              <span>Réclamez Votre Remise</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 group-hover:translate-x-2 transition-transform duration-300" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent skew-x-12" />
            </button>
          </div>
        </div>

        {/* Timer */}
        <p className="promo-item mt-5 sm:mt-6 flex items-center justify-center gap-2 text-white/90 text-xs sm:text-sm font-semibold px-4 drop-shadow-lg">
          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-300" />
          Offre valable uniquement pour les nouveaux clients
        </p>
      </div>
    </section>
  );
}
