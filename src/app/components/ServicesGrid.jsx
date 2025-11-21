'use client';

import { Home, Building, Sparkles, Wind, Trees, Sofa, TruckIcon, ShieldCheck, ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    icon: Home,
    title: 'Nettoyage Résidentiel',
    description: 'Services de nettoyage complets pour maison et espaces de vie avec attention aux détails.',
    time: '2-3h',
    badge: 'Écologique',
    badgeColor: 'emerald',
    image: '/images/residential-cleaning.png',
  },
  {
    id: 2,
    icon: Building,
    title: 'Nettoyage de Bureaux',
    description: 'Nettoyage professionnel pour bureaux et espaces d\'affaires avec normes d\'hygiène.',
    time: '3-5h',
    badge: 'Professionnel',
    badgeColor: 'blue',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: 3,
    icon: Sparkles,
    title: 'Nettoyage Profondeur',
    description: 'Nettoyage en profondeur pour zones très sales et besoins de nettoyage saisonnier.',
    time: '4-6h',
    badge: 'En Profondeur',
    badgeColor: 'purple',
    image: '/images/deep-cleaning.png',
  },
  {
    id: 4,
    icon: Wind,
    title: 'Nettoyage de Vitres',
    description: 'Nettoyage de vitres impeccable pour maisons et bâtiments commerciaux sans traces.',
    time: '1-2h',
    badge: 'Service Rapide',
    badgeColor: 'cyan',
    image: '/images/window-cleaning.png',
  },
  {
    id: 5,
    icon: Trees,
    title: 'Nettoyage de Jardin',
    description: 'Services de nettoyage extérieur incluant patios, terrasses et espaces jardins.',
    time: '2-4h',
    badge: 'Extérieur',
    badgeColor: 'green',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
  },
  {
    id: 6,
    icon: Sofa,
    title: 'Nettoyage de Meubles',
    description: 'Nettoyage professionnel de meubles, canapés et articles rembourrés sans taches.',
    time: '1.5-3h',
    badge: 'Sans Taches',
    badgeColor: 'amber',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80',
  },
  {
    id: 7,
    icon: TruckIcon,
    title: 'Nettoyage Fin Bail',
    description: 'Service complet pour déménagement ou préparation propriété vente ou location.',
    time: '4-8h',
    badge: 'Service Complet',
    badgeColor: 'orange',
    image: '/images/move-out-cleaning.png',
  },
  {
    id: 8,
    icon: ShieldCheck,
    title: 'Désinfection Service',
    description: 'Services avancés de désinfection et assainissement pour santé et sécurité.',
    time: '2-3h',
    badge: 'Certifié Santé',
    badgeColor: 'red',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&q=80',
  },
];

export { services };

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-100/40 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Nos Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Solutions de Nettoyage <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Sur Mesure
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Des services professionnels adaptés à vos besoins spécifiques.
            Nous utilisons des équipements de pointe et des produits écologiques pour des résultats exceptionnels.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="animate-slideUpFade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Besoin d'un service spécifique ?</h3>
              <p className="text-slate-600">Nous créons des solutions personnalisées pour chaque client.</p>
            </div>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Demander un Devis Personnalisé
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
