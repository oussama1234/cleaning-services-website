'use client';

import { X, Shield, FileText, Sparkles, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LegalModal({ isOpen, onClose, type }) {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsOpening(true);
      document.body.style.overflow = 'hidden';
      // Remove opening state after animation
      const timer = setTimeout(() => {
        setIsOpening(false);
      }, 50);
      return () => clearTimeout(timer);
    } else if (shouldRender) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
        document.body.style.overflow = 'unset';
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!shouldRender) return null;

  const content = type === 'privacy' ? privacyContent : termsContent;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpening ? 'opacity-0' : isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div className={`relative w-full max-w-4xl h-[85vh] bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 rounded-3xl shadow-2xl border-2 border-primary-500/50 overflow-hidden flex flex-col transition-all duration-300 ${
        isOpening ? 'opacity-0 scale-95' : isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        {/* Animated gradient border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-primary-500 to-emerald-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
        
        {/* Floating particles decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-float" />
          <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-primary-400 rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-emerald-400 rounded-full opacity-70 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-cyan-500 rounded-full opacity-40 animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Header */}
        <div className="relative bg-gradient-to-r from-dark-900/95 via-dark-800/95 to-dark-900/95 backdrop-blur-xl px-6 sm:px-8 py-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-primary-500 rounded-2xl blur-lg opacity-50 animate-pulse-slow" />
                <div className="relative bg-gradient-to-br from-cyan-500 via-primary-500 to-emerald-500 p-3 rounded-2xl shadow-glow">
                  {type === 'privacy' ? (
                    <Shield className="w-6 h-6 text-white" />
                  ) : (
                    <FileText className="w-6 h-6 text-white" />
                  )}
                </div>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  {content.title}
                </h2>
                <p className="text-gray-400 text-sm mt-1">Dernière mise à jour: {content.lastUpdated}</p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="group relative p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <div className="p-2 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative overflow-y-auto flex-1 px-6 sm:px-8 py-6">
          <div className="prose prose-invert prose-cyan max-w-none">
            {content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-cyan-400" />
                  {section.heading}
                </h3>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="space-y-2 ml-4">
                      {section.list.map((item, lIndex) => (
                        <li key={lIndex} className="text-gray-300 flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative bg-gradient-to-r from-dark-900/95 via-dark-800/95 to-dark-900/95 backdrop-blur-xl px-6 sm:px-8 py-5 border-t border-white/10 flex-shrink-0">
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Cindel Nettoyage. Tous droits réservés.
            </p>
            <button
              onClick={handleClose}
              className="group relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 via-primary-500 to-emerald-500 text-white rounded-xl font-bold overflow-hidden shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Fermer
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-primary-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom gradient glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      </div>
    </div>
  );
}

const privacyContent = {
  title: 'Politique de Confidentialité',
  lastUpdated: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
  sections: [
    {
      heading: '1. Introduction',
      paragraphs: [
        'Bienvenue sur Cindel Nettoyage. Nous nous engageons à protéger votre vie privée et vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.',
      ],
    },
    {
      heading: '2. Collecte des Données',
      paragraphs: [
        'Nous collectons les informations suivantes lorsque vous utilisez nos services:',
      ],
      list: [
        'Informations personnelles (nom, email, téléphone, adresse)',
        'Informations de réservation et de paiement',
        'Données de navigation et cookies',
        'Préférences de service et historique',
      ],
    },
    {
      heading: '3. Utilisation des Données',
      paragraphs: [
        'Vos données sont utilisées pour:',
      ],
      list: [
        'Fournir et améliorer nos services de nettoyage',
        'Traiter vos réservations et paiements',
        'Communiquer avec vous concernant nos services',
        'Analyser et améliorer l\'expérience utilisateur',
        'Respecter nos obligations légales',
      ],
    },
    {
      heading: '4. Protection des Données',
      paragraphs: [
        'Nous utilisons des mesures de sécurité avancées pour protéger vos données personnelles, incluant le cryptage SSL, des serveurs sécurisés et des contrôles d\'accès stricts.',
      ],
    },
    {
      heading: '5. Partage des Données',
      paragraphs: [
        'Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations uniquement avec:',
      ],
      list: [
        'Nos employés de nettoyage pour effectuer les services',
        'Des prestataires de services tiers (paiement, planification)',
        'Les autorités légales si requis par la loi',
      ],
    },
    {
      heading: '6. Vos Droits',
      paragraphs: [
        'Vous avez le droit d\'accéder, de corriger, de supprimer ou de limiter l\'utilisation de vos données personnelles. Contactez-nous pour exercer vos droits.',
      ],
    },
    {
      heading: '7. Cookies',
      paragraphs: [
        'Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.',
      ],
    },
    {
      heading: '8. Contact',
      paragraphs: [
        'Pour toute question concernant cette politique, contactez-nous à cindelnettoyage@gmail.com',
      ],
    },
  ],
};

const termsContent = {
  title: 'Conditions d\'Utilisation',
  lastUpdated: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
  sections: [
    {
      heading: '1. Acceptation des Conditions',
      paragraphs: [
        'En utilisant nos services, vous acceptez ces conditions d\'utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser nos services.',
      ],
    },
    {
      heading: '2. Description des Services',
      paragraphs: [
        'Cindel Nettoyage fournit des services de nettoyage professionnel pour résidences et commerces. Nos services incluent:',
      ],
      list: [
        'Nettoyage résidentiel et commercial',
        'Nettoyage en profondeur',
        'Services spécialisés (vitres, meubles, etc.)',
        'Planification et réservation en ligne',
      ],
    },
    {
      heading: '3. Réservations et Annulations',
      paragraphs: [
        'Les réservations peuvent être effectuées en ligne ou par téléphone. Les annulations doivent être effectuées au moins 24 heures à l\'avance pour éviter des frais.',
      ],
    },
    {
      heading: '4. Paiements',
      paragraphs: [
        'Les paiements peuvent être effectués par carte de crédit, débit ou virement bancaire. Tous les prix sont en dollars canadiens et incluent les taxes applicables.',
      ],
    },
    {
      heading: '5. Garantie de Satisfaction',
      paragraphs: [
        'Nous garantissons votre satisfaction à 100%. Si vous n\'êtes pas satisfait de nos services, contactez-nous dans les 24 heures pour un re-nettoyage gratuit.',
      ],
    },
    {
      heading: '6. Responsabilités du Client',
      paragraphs: [
        'Le client doit:',
      ],
      list: [
        'Fournir un accès sécurisé aux locaux',
        'Informer de tout article fragile ou précieux',
        'Fournir l\'équipement de nettoyage si requis',
        'Respecter les horaires convenus',
      ],
    },
    {
      heading: '7. Limitation de Responsabilité',
      paragraphs: [
        'Cindel Nettoyage n\'est pas responsable des dommages causés par des conditions préexistantes ou des articles non signalés. Notre assurance couvre les dommages accidentels causés par nos employés.',
      ],
    },
    {
      heading: '8. Modifications des Conditions',
      paragraphs: [
        'Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour.',
      ],
    },
    {
      heading: '9. Loi Applicable',
      paragraphs: [
        'Ces conditions sont régies par les lois du Canada. Tout litige sera soumis à la juridiction exclusive des tribunaux canadiens.',
      ],
    },
    {
      heading: '10. Contact',
      paragraphs: [
        'Pour toute question concernant ces conditions, contactez-nous à cindelnettoyage@gmail.com ou appelez le +33 6 40 60 40 57.',
      ],
    },
  ],
};
