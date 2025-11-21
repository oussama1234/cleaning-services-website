'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Sparkles, Home, Briefcase, DollarSign, MessageSquare, Send, Calendar, Info, ChevronRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Accueil', icon: Home },
    { href: '#about', label: 'À Propos', icon: Info },
    { href: '#services', label: 'Services', icon: Briefcase },
    { href: '#pricing', label: 'Tarifs', icon: DollarSign },
    { href: '#testimonials', label: 'Témoignages', icon: MessageSquare },
    { href: '#contact', label: 'Contact', icon: Send },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsMenuClosing(false);
    }, 200);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    closeMobileMenu();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-slate-900 text-white py-2 relative overflow-hidden z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-secondary-900/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+33640604057" className="flex items-center gap-2 hover:text-primary-300 transition-colors group">
                <Phone className="w-3.5 h-3.5 text-primary-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium">+33 6 40 60 40 57</span>
              </a>
              <a href="mailto:cindelnettoyage@gmail.com" className="flex items-center gap-2 hover:text-primary-300 transition-colors group">
                <Mail className="w-3.5 h-3.5 text-primary-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium">cindelnettoyage@gmail.com</span>
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-emerald-400">Disponible 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${isScrolled ? 'top-0' : 'top-8 sm:top-10'
          }`}
      >
        <div className={`mx-auto transition-all duration-300 ${isScrolled
          ? 'max-w-full bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-glass'
          : 'max-w-7xl mt-4 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/40 shadow-glass-sm mx-4'
          }`}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <a href="#home" className="flex items-center gap-3 group" aria-label="Home">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <img
                    src="/images/cindel-nettoyage-logo.png"
                    alt="Cindel Nettoyage"
                    className="h-12 w-auto relative z-10 object-contain"
                  />
                </div>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="relative px-4 py-2 text-slate-600 hover:text-primary-600 font-medium rounded-full transition-all duration-300 group overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Icon className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                      </span>
                      <div className="absolute inset-0 bg-primary-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-full shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Devis Gratuit</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative p-2 text-slate-600 hover:text-primary-600 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                  <span className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`block h-0.5 w-4 bg-current rounded-full transition-all duration-300 ml-auto ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-xl ${isMenuClosing ? 'animate-slideOutRight' : 'animate-slideInRight'}`}>
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <span className="text-xl font-display font-bold text-slate-800">Menu</span>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-6 space-y-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium text-slate-700 group-hover:text-slate-900">{link.label}</span>
                    <ChevronRight className="w-5 h-5 ml-auto text-slate-300 group-hover:text-primary-600 transition-colors" />
                  </a>
                );
              })}
            </nav>

            <div className="p-6 border-t border-slate-100 bg-slate-50/50">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold rounded-xl shadow-lg shadow-primary-500/25 active:scale-95 transition-all duration-300"
              >
                <span>Demander un Devis</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
