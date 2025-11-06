'use client';

import { Check, Sparkles, Zap, Crown, ArrowRight, Star } from 'lucide-react';

const plans = [
  {
    name: 'Basique',
    icon: Sparkles,
    gradient: 'from-cyan-400 via-blue-500 to-purple-600',
    bgGradient: 'from-cyan-500/10 via-blue-500/5 to-purple-600/10',
    glowColor: 'cyan',
    features: [
      'Nettoyage général',
      'Cuisine et salle de bain',
      'Aspirateur et lavage sols',
      'Dépoussiérage surfaces',
      'Service de 2-3 heures',
    ],
    popular: false,
  },
  {
    name: 'Standard',
    icon: Zap,
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    bgGradient: 'from-emerald-500/10 via-teal-500/5 to-cyan-600/10',
    glowColor: 'emerald',
    features: [
      'Tout ce qui est dans Basique',
      'Nettoyage en profondeur',
      'Intérieur des appareils',
      'Nettoyage des vitres',
      'Service de lessive',
      'Service de 4-5 heures',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    icon: Crown,
    gradient: 'from-orange-400 via-pink-500 to-purple-600',
    bgGradient: 'from-orange-500/10 via-pink-500/5 to-purple-600/10',
    glowColor: 'pink',
    features: [
      'Tout ce qui est dans Standard',
      'Nettoyage de tapis',
      'Nettoyage de meubles',
      'Nettoyage extérieur',
      'Organisation et rangement',
      "Service d'une journée",
    ],
    popular: false,
  },
];

export default function PricingPlans() {

  const handleButtonClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="pricing"
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      {/* Simplified gradient shapes - no blur */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-cyan-100/20 to-purple-100/20 rounded-full opacity-50" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-gradient-to-tl from-pink-100/20 to-cyan-100/20 rounded-full opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4 sm:mb-6 border border-purple-200">
            <Star className="w-4 h-4 text-purple-600 animate-pulse" />
            <span className="text-purple-900 font-semibold uppercase text-xs tracking-wider">Tarifs Premium</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
            <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Choisissez Votre Service
            </span>
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Services de nettoyage professionnels adaptés à vos besoins
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className="group relative animate-fadeScaleIn"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-2.5 md:-top-3.5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      ⚡ PLUS POPULAIRE ⚡
                    </div>
                  </div>
                )}

                {/* Simplified glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${plan.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition duration-200`} />

                {/* Card */}
                <div className={`relative bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg group-hover:shadow-xl transition-all duration-200 ${plan.popular ? 'md:scale-105 border-purple-300' : ''}`}>
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  
                  {/* Header with gradient */}
                  <div className={`relative bg-gradient-to-br ${plan.gradient} p-6 sm:p-8 text-white text-center overflow-hidden`}>
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 border border-white/20 group-hover:scale-105 transition-transform duration-200">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">{plan.name}</h3>
                      <p className="text-lg sm:text-xl opacity-90 font-medium">Devis Personnalisé</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6 sm:p-8 bg-white/80">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 group/item">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-lg border-2 border-current flex items-center justify-center group-hover/item:scale-105 transition-transform duration-150 bg-gradient-to-br ${plan.gradient} bg-clip-text text-transparent`}>
                            <Check className="w-3 h-3" strokeWidth={3} style={{ stroke: 'url(#gradient-' + idx + ')' }} />
                            <svg width="0" height="0">
                              <defs>
                                <linearGradient id={`gradient-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor={plan.gradient.includes('cyan') ? '#22d3ee' : plan.gradient.includes('emerald') ? '#10b981' : '#fb923c'} />
                                  <stop offset="100%" stopColor={plan.gradient.includes('purple') ? '#9333ea' : plan.gradient.includes('cyan') ? '#06b6d4' : '#c026d3'} />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium text-sm group-hover/item:text-gray-900 transition-colors duration-150">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button
                      onClick={handleButtonClick}
                      className={`group/btn relative w-full py-3 sm:py-4 bg-gradient-to-r ${plan.gradient} text-white rounded-xl font-bold text-sm sm:text-base overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Demander un Devis
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-150" />
                      </span>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-300 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="inline-block px-6 py-3 bg-white rounded-xl border border-purple-200 shadow-md">
            <p className="text-gray-700 text-sm font-medium">
              ✨ Tous les forfaits incluent des produits écologiques et une garantie de satisfaction à 100% 🌿
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
