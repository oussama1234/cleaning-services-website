'use client';

import { useEffect, useRef } from 'react';
import { Phone, Sparkles, Star, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTACard() {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 0, opacity: 1, scale: 1 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.3,
        }
      );
    }
  }, []);

  return (
    <section className="py-12 relative overflow-hidden -mt-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80" 
          alt="" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-blue-500/10" />
      
      {/* Animated blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div
        ref={cardRef}
        className="relative group z-30"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
        
        {/* Main Card */}
        <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-card group-hover:shadow-card-hover transition-all duration-500">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Side */}
            <div className="flex items-center gap-6">
              {/* Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-emerald-600 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-slow" />
                <div className="relative bg-gradient-to-br from-primary-500 to-emerald-600 p-6 rounded-3xl shadow-glow">
                  <Phone size={48} className="text-white animate-float" />
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-accent-500" />
                  <span className="text-sm font-semibold text-accent-600 uppercase tracking-wide">Réponse Rapide</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  Appelez-Nous À Tout Moment
                </h3>
                <p className="text-gray-600 text-lg">
                  Support client 24/7 • Devis instantanés • Services d&apos;urgence
                </p>
              </div>
            </div>

            {/* Right Side - CTA */}
            <div className="flex flex-col gap-3 w-full lg:w-auto">
              <a
                href="tel:+1-234-567-8900"
                className="group/btn relative px-8 py-4 bg-gradient-to-r from-primary-500 to-emerald-600 text-white rounded-2xl font-bold text-xl text-center overflow-hidden shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                  +1-234-567-8900
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-primary-500 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </a>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">Note 4.9/5</span>
                </div>
                <div className="w-px h-4 bg-gray-300" />
                <div className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-primary-500" />
                  <span className="font-semibold">5K+ Clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary-100 to-emerald-100 rounded-full blur-2xl opacity-50 animate-pulse-slow" />
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-accent-100 to-orange-100 rounded-full blur-2xl opacity-50 animate-float" />
        </div>
      </div>
    </div>
    </section>
  );
}
