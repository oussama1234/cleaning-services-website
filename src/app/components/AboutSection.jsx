'use client';

import { Home, Building2, Settings, Award, Users, Clock, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Home,
    label: 'Services Résidentiels',
    description: 'Nettoyage complet pour votre maison',
    color: 'text-primary-500',
    bg: 'bg-primary-50'
  },
  {
    icon: Building2,
    label: 'Services Commerciaux',
    description: 'Solutions pour bureaux et commerces',
    color: 'text-secondary-500',
    bg: 'bg-secondary-50'
  },
  {
    icon: Settings,
    label: 'Solutions Sur Mesure',
    description: 'Adapté à vos besoins spécifiques',
    color: 'text-accent-500',
    bg: 'bg-accent-50'
  },
];

const stats = [
  { value: '1000+', label: 'Clients Satisfaits' },
  { value: '2+', label: "Ans d'Expérience" },
  { value: '24/7', label: 'Support Client' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-secondary-50/50 to-transparent pointer-events-none" />

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
              <Award className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">À Propos de Nous</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              L'Excellence du Nettoyage <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Professionnel
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nous sommes bien plus qu'une simple entreprise de nettoyage. Nous sommes vos partenaires pour créer des environnements sains, propres et accueillants. Avec une équipe dévouée et des standards de qualité élevés, nous transformons chaque espace.
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className={`p-3 rounded-2xl ${feature.bg} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">
                        {feature.label}
                      </h3>
                      <p className="text-slate-500 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl font-display font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Main Image */}
            <div className="relative z-10 w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1581578949510-fa7315c4c350?w=800&q=80"
                alt="Cleaning Professional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-100 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">100%</div>
                    <div className="text-sm text-slate-600 font-medium">Satisfaction Garantie</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -right-12 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl -z-10 animate-blob" />
            <div className="absolute bottom-1/4 -left-12 w-72 h-72 bg-secondary-200/30 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000" />

            {/* Floating Card */}
            <div className="absolute top-20 -left-8 z-20 bg-white p-4 rounded-2xl shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                      <img src={`https://randomuser.me/api/portraits/women/${i + 40}.jpg`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-xs font-bold text-slate-900">
                  Équipe <br /> Experte
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
