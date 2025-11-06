'use client';

import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Sparkles, Home, Info, Briefcase, DollarSign, Calendar, MessageSquare, Send, ArrowRight } from 'lucide-react';

// Custom TikTok Icon Component
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);
import { services } from './ServicesGrid';
import LegalModal from './LegalModal';

export default function Footer() {
  const [modalType, setModalType] = useState(null);

  const quickLinks = [
    { href: '#home', label: 'Accueil', icon: Home },
    { href: '#about', label: 'À Propos', icon: Info },
    { href: '#services', label: 'Services', icon: Briefcase },
    { href: '#pricing', label: 'Tarifs', icon: DollarSign },
    { href: '#testimonials', label: 'Témoignages', icon: MessageSquare },
    { href: '#contact', label: 'Contact', icon: Send },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/cindelnettoyage', label: 'Facebook', gradient: 'from-blue-600 to-blue-500' },
    { icon: Instagram, href: 'https://instagram.com/cindelnettoyage', label: 'Instagram', gradient: 'from-pink-500 to-orange-500' },
    { icon: TikTokIcon, href: 'https://tiktok.com/@cindelnettoyage', label: 'TikTok', gradient: 'from-black to-gray-800' },
    { icon: Linkedin, href: 'https://linkedin.com/company/cindelnettoyage', label: 'LinkedIn', gradient: 'from-blue-700 to-blue-600' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-dark-900 to-dark-800 text-white pt-20 pb-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About & Logo */}
          <div>
            <div className="mb-6">
              <img 
                src="/images/cindel-nettoyage-logo.png" 
                alt="Cindel Nettoyage" 
                className="h-16 w-auto object-contain mb-4"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Services de nettoyage professionnels avec produits écologiques et équipe expérimentée. Votre satisfaction est notre priorité.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={social.label}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300`} />
                    <div className={`relative bg-gradient-to-br ${social.gradient} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-emerald-600 rounded-full" />
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <Icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-accent-500 to-orange-600 rounded-full" />
              Nos Services
            </h3>
            <ul className="space-y-3 text-gray-400">
              {services.map((service, index) => (
                <li key={index} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full" />
              Contactez-Nous
            </h3>
            <div className="space-y-4">
              <a href="tel:+33640604057" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                +33 6 40 60 40 57
              </a>
              <a href="mailto:hadri.abdelmoumen@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                hadri.abdelmoumen@gmail.com
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                115 Avenue Saint Vincent De Paul, Dax
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Cindel Nettoyage. Tous droits réservés. Fait avec
            <span className="text-red-500 mx-1">♥</span>
            pour des espaces plus propres.
          </p>
          <div className="flex gap-6 text-sm">
            <button 
              onClick={() => {
                console.log('Opening privacy modal');
                setModalType('privacy');
              }}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Politique de Confidentialité
            </button>
            <button 
              onClick={() => {
                console.log('Opening terms modal');
                setModalType('terms');
              }}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Conditions d&apos;Utilisation
            </button>
          </div>
        </div>
      </div>
      
      <LegalModal 
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType}
      />
    </footer>
  );
}
