'use client';

import { useState, useEffect } from 'react';
import { Phone, Sparkles, Star, ArrowRight, CheckCircle2, PlayCircle } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-blob" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent-400/20 to-primary-400/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container-width relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-100 shadow-sm animate-float">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              <span className="text-sm font-semibold text-slate-600">N°1 du Nettoyage en Île-de-France</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight text-slate-900">
              La Propreté <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 relative">
                Réinventée
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-400/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg">
              Découvrez une expérience de nettoyage premium alliant technologie moderne et expertise humaine. Pour les particuliers et les professionnels exigeants.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+33640604057"
                className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Appeler Maintenant
                </span>
              </a>

              <a
                href="#contact"
                className="group px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold text-lg shadow-sm hover:shadow-md hover:border-primary-200 hover:text-primary-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Devis Gratuit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-slate-200/60 flex flex-wrap gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Personnel Qualifié</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Produits Écologiques</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Satisfaction 100%</span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className={`relative hidden lg:block transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative z-10">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary-900/20 border-8 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="Professional Cleaning"
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                />

                {/* Floating Card 1 */}
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-float-delayed max-w-[200px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase">Avis Clients</p>
                      <p className="text-lg font-bold text-slate-900">4.9/5</p>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+1k</div>
                  </div>
                </div>

                {/* Floating Card 2 */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary-100 rounded-xl text-primary-600">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Service Premium</p>
                      <p className="text-xs text-slate-500">Disponible 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements behind image */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-400/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-400/30 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}

export function MobileCTACard() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
      <div className="bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-lg flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-bold text-slate-900">Besoin d'un nettoyage ?</p>
          <p className="text-xs text-slate-500">Devis gratuit en 2 min</p>
        </div>
        <a
          href="tel:+33640604057"
          className="px-4 py-2 bg-primary-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-primary-600/20"
        >
          Appeler
        </a>
      </div>
    </div>
  );
}
