'use client';

import { Sparkles, Zap, ArrowRight, Tag, Shield, Leaf, Percent } from 'lucide-react';

export default function PromoBanner() {

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
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-4 sm:mb-6 border border-white/30 animate-slideDownFade">
          <Percent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          <span className="text-white font-bold uppercase text-xs sm:text-sm tracking-wider">Offre À Durée Limitée</span>
        </div>

        {/* Main heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-3 text-white drop-shadow-2xl px-4 animate-zoomIn" style={{ animationDelay: '0.05s' }}>
          Économies Spéciales !
        </h2>
        
        <p className="text-base sm:text-lg text-white/95 mb-3 sm:mb-4 font-semibold max-w-2xl mx-auto px-4 drop-shadow-lg animate-slideUpFade" style={{ animationDelay: '0.1s' }}>
          Réservez aujourd&apos;hui et obtenez
        </p>

        {/* Discount Badge */}
        <div className="inline-block mb-3 sm:mb-5 animate-bounceIn" style={{ animationDelay: '0.15s' }}>
          <div className="relative group">
            <div className="absolute -inset-2 bg-white/30 rounded-2xl sm:rounded-3xl opacity-50" />
            <div className="relative bg-white rounded-2xl sm:rounded-3xl px-6 py-4 sm:px-10 sm:py-6 shadow-2xl border-4 border-white/50">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                10% OFF
              </div>
            </div>
          </div>
        </div>

        <p className="text-base sm:text-lg text-white/95 mb-6 sm:mb-8 font-semibold max-w-2xl mx-auto px-4 drop-shadow-lg animate-slideUpFade" style={{ animationDelay: '0.2s' }}>
          sur votre premier service !
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 animate-fadeScaleIn" style={{ animationDelay: '0.25s' }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-white/40 rounded-xl opacity-20 group-hover:opacity-30 transition-all duration-200" />
                <div className="relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-white/90 rounded-xl border border-white/50 shadow-xl group-hover:scale-105 transition-all duration-150">
                  <Icon className="w-4 h-4 text-cyan-600" />
                  <span className="font-bold text-xs sm:text-sm text-gray-900">{feature.text}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="px-4 animate-zoomIn" style={{ animationDelay: '0.3s' }}>
          <div className="relative inline-block group w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-orange-600 rounded-xl opacity-20 group-hover:opacity-30 transition-all duration-200" />
            <button
              onClick={handleClick}
              className="relative inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-accent-500 to-orange-600 text-white rounded-xl font-bold text-base sm:text-lg overflow-hidden shadow-2xl transition-all duration-200 hover:scale-105 w-full sm:w-auto"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-150" />
              <span className="relative z-10">Réclamez Votre Remise</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-150" />
              
              {/* Lightning shine effect - left to right */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
            </button>
          </div>
        </div>

        {/* Timer */}
        <p className="mt-5 sm:mt-6 flex items-center justify-center gap-2 text-white/90 text-xs sm:text-sm font-semibold px-4 drop-shadow-lg animate-slideUpFade" style={{ animationDelay: '0.35s' }}>
          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-300" />
          Offre valable uniquement pour les nouveaux clients
        </p>
      </div>
    </section>
  );
}
