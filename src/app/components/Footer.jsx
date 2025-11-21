'use client';

import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Home, Info, Briefcase, DollarSign, MessageSquare, Send, ArrowRight } from 'lucide-react';
import { services } from './ServicesGrid';
import LegalModal from './LegalModal';

// Custom TikTok Icon Component
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

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
    { icon: Facebook, href: 'https://facebook.com/cindelnettoyage', label: 'Facebook', bg: 'bg-[#1877F2]' },
    { icon: Instagram, href: 'https://instagram.com/cindelnettoyage', label: 'Instagram', bg: 'bg-[#E4405F]' },
    { icon: TikTokIcon, href: 'https://tiktok.com/@cindelnettoyage', label: 'TikTok', bg: 'bg-black' },
    { icon: Linkedin, href: 'https://linkedin.com/company/cindelnettoyage', label: 'LinkedIn', bg: 'bg-[#0A66C2]' },
  ];

  return (
    <footer className="relative bg-slate-900 text-white pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="container-width relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/images/cindel-nettoyage-logo.png" alt="Cindel Nettoyage" className="h-12 w-auto" />
            </div>
            <p className="text-slate-400 leading-relaxed">
              Votre partenaire de confiance pour un environnement propre et sain. Services professionnels adaptés à vos besoins.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${social.bg} hover:scale-110 transition-transform duration-300 shadow-lg`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary-500 rounded-full" />
              Navigation
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li key={index}>
                    <a href={link.href} className="flex items-center gap-3 text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 group">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                        <Icon className="w-4 h-4 group-hover:text-primary-400 transition-colors" />
                      </div>
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary-500 rounded-full" />
              Nos Services
            </h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <a href="#services" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                    <ArrowRight className="w-4 h-4 text-secondary-500 group-hover:translate-x-1 transition-transform" />
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent-500 rounded-full" />
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+33640604057" className="flex items-start gap-4 text-slate-400 hover:text-white transition-colors group">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary-500/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">Téléphone</div>
                    <div className="font-medium">+33 6 40 60 40 57</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:cindelnettoyage@gmail.com" className="flex items-start gap-4 text-slate-400 hover:text-white transition-colors group">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary-500/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">Email</div>
                    <div className="font-medium">cindelnettoyage@gmail.com</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4 text-slate-400">
                <div className="p-2 rounded-lg bg-white/5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">Adresse</div>
                  <div className="font-medium">115 Avenue Saint Vincent De Paul, Dax</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Cindel Nettoyage. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <button
              onClick={() => setModalType('privacy')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Politique de Confidentialité
            </button>
            <button
              onClick={() => setModalType('terms')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Conditions d'Utilisation
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
