'use client';

import { Check, Sparkles, Zap, Crown, ArrowRight, Star } from 'lucide-react';

const plans = [
  {
    name: 'Basique',
    icon: Sparkles,
    price: 'Sur Devis',
    description: 'Idéal pour un entretien régulier',
    features: [
      'Nettoyage des sols',
      'Dépoussiérage complet',
      'Sanitaires et cuisine',
      'Sortie des poubelles',
      'Produits fournis'
    ],
    gradient: 'from-blue-400 to-cyan-400',
    popular: false
  },
  {
    name: 'Premium',
    icon: Zap,
    price: 'Sur Devis',
    description: 'Le choix préféré de nos clients',
    features: [
      'Tout du pack Basique',
      'Nettoyage des vitres',
      'Intérieur des placards',
      'Désinfection complète',
      'Repassage inclus'
    ],
    gradient: 'from-primary-500 to-secondary-500',
    popular: true
  },
  {
    name: 'Excellence',
    icon: Crown,
    price: 'Sur Devis',
    description: 'Pour une propreté absolue',
    features: [
      'Tout du pack Premium',
      'Shampouinage tapis/moquettes',
      'Nettoyage vapeur',
      'Traitement des sols',
      'Service prioritaire'
    ],
    gradient: 'from-purple-500 to-pink-500',
    popular: false
  }
];

export default function PricingPlans() {
  const handleButtonClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-100/40 rounded-full blur-3xl -translate-x-1/3" />
      </div>

      <div className="container-width relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Nos Formules</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Des Tarifs Transparents <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Adaptés à Vos Besoins
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Choisissez la formule qui correspond le mieux à vos attentes.
            Nos devis sont gratuits et sans engagement.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative group rounded-[2rem] p-1 transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'bg-gradient-to-b from-primary-500 to-secondary-500 shadow-xl shadow-primary-500/20' : 'bg-white hover:shadow-xl hover:shadow-slate-200/50'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg z-20">
                    Recommandé
                  </div>
                )}

                <div className="h-full bg-white rounded-[1.8rem] p-8 flex flex-col relative overflow-hidden">
                  {/* Header */}
                  <div className="mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${plan.gradient} text-white shadow-lg`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className="text-slate-500 text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="text-3xl font-bold text-slate-900">{plan.price}</div>
                    <div className="text-sm text-slate-500 mt-1">Devis gratuit sous 24h</div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                        <div className={`mt-0.5 p-1 rounded-full bg-gradient-to-br ${plan.gradient} opacity-80`}>
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={handleButtonClick}
                    className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn ${plan.popular
                        ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl'
                        : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
                      }`}
                  >
                    <span>Choisir cette formule</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100">
            <div className="p-2 bg-emerald-100 rounded-full">
              <Check className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-slate-600 font-medium">Satisfaction garantie ou remboursé</span>
          </div>
        </div>
      </div>
    </section>
  );
}
