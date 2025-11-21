'use client';

import { Sparkles, ArrowRight, Clock, Shield, CheckCircle2 } from 'lucide-react';

export default function PromoBanner() {
  const handleClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-secondary-900/50" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary-500/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      </div>

      <div className="container-width relative z-10">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-12 opacity-50 pointer-events-none">
            <Sparkles className="w-64 h-64 text-white/5" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                <span className="text-sm font-bold uppercase tracking-wider">Offre Limitée</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                -10% sur votre <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                  Premier Nettoyage
                </span>
              </h2>

              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                Profitez de notre expertise à prix réduit. Une occasion unique de découvrir la qualité de nos services sans engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleClick}
                  className="group relative px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg shadow-xl shadow-white/10 hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Profiter de l'offre
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="text-left">
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Code Promo</div>
                    <div className="text-xl font-mono font-bold text-primary-400">BIENVENUE10</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {[
                { icon: Clock, title: 'Réponse Rapide', desc: 'Devis sous 24h' },
                { icon: Shield, title: '100% Assuré', desc: 'Service garanti' },
                { icon: CheckCircle2, title: 'Sans Engagement', desc: 'Liberté totale' },
                { icon: Sparkles, title: 'Qualité Premium', desc: 'Satisfaction client' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                    <Icon className="w-8 h-8 text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
