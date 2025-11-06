'use client';

import { Home, Building, Sparkles, Wind, Trees, Sofa, TruckIcon, ShieldCheck } from 'lucide-react';
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
    image: '/images/home-cleaning.jpg',
  },
  {
    id: 2,
    icon: Building,
    title: 'Nettoyage de Bureaux',
    description: 'Nettoyage professionnel pour bureaux et espaces d\'affaires avec normes d\'hygiène.',
    time: '3-5h',
    badge: 'Professionnel',
    badgeColor: 'blue',
    image: '/images/office-cleaning.jpg',
  },
  {
    id: 3,
    icon: Sparkles,
    title: 'Nettoyage Profondeur',
    description: 'Nettoyage en profondeur pour zones très sales et besoins de nettoyage saisonnier.',
    time: '4-6h',
    badge: 'En Profondeur',
    badgeColor: 'purple',
    image: '/images/deep-cleaning.jpg',
  },
  {
    id: 4,
    icon: Wind,
    title: 'Nettoyage de Vitres',
    description: 'Nettoyage de vitres impeccable pour maisons et bâtiments commerciaux sans traces.',
    time: '1-2h',
    badge: 'Service Rapide',
    badgeColor: 'cyan',
    image: '/images/window-cleaning.jpg',
  },
  {
    id: 5,
    icon: Trees,
    title: 'Nettoyage de Jardin',
    description: 'Services de nettoyage extérieur incluant patios, terrasses et espaces jardins.',
    time: '2-4h',
    badge: 'Extérieur',
    badgeColor: 'green',
    image: '/images/garden-cleaning.jpg',
  },
  {
    id: 6,
    icon: Sofa,
    title: 'Nettoyage de Meubles',
    description: 'Nettoyage professionnel de meubles, canapés et articles rembourrés sans taches.',
    time: '1.5-3h',
    badge: 'Sans Taches',
    badgeColor: 'amber',
    image: '/images/upholstery-cleaning.jpg',
  },
  {
    id: 7,
    icon: TruckIcon,
    title: 'Nettoyage Fin Bail',
    description: 'Service complet pour déménagement ou préparation propriété vente ou location.',
    time: '4-8h',
    badge: 'Service Complet',
    badgeColor: 'orange',
    image: '/images/moveout-cleaning.jpg',
  },
  {
    id: 8,
    icon: ShieldCheck,
    title: 'Désinfection Service',
    description: 'Services avancés de désinfection et assainissement pour santé et sécurité.',
    time: '2-3h',
    badge: 'Certifié Santé',
    badgeColor: 'red',
    image: '/images/sanitization.jpg',
  },
];

// Export services for use in Footer
export { services };

export default function ServicesGrid() {

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-emerald-500/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-zoomIn">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-primary-50 to-emerald-50 rounded-full mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
            <span className="text-primary-700 font-semibold uppercase text-xs sm:text-sm tracking-wide">Nos Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-primary-600 via-emerald-600 to-primary-600 bg-clip-text text-transparent">
              Solutions de Nettoyage Premium
            </span>
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Services de nettoyage professionnel adaptés à vos besoins. Des maisons aux bureaux,
            nous offrons des résultats impeccables avec des produits écologiques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="animate-flipIn"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center px-4">
          <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
            Besoin d'un service personnalisé ? Nous pouvons vous aider !
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary-500 to-emerald-600 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg overflow-hidden shadow-lg hover:shadow-glow transition-all duration-200 hover:scale-105 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-300" />
              Demander un Devis Personnalisé
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
