'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Sparkles, Home, Briefcase, DollarSign, MessageSquare, Send, Calendar, Info } from 'lucide-react';
import gsap from 'gsap';

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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsMenuClosing(false);
    }, 300);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    closeMobileMenu();
    const element = document.querySelector(href);
    if (element) {
      const offset = 140;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-emerald-500 text-white py-2 sm:py-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 sm:gap-4 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              <a href="tel:+33640604057" className="flex items-center gap-1.5 sm:gap-2 hover:text-primary-100 transition-colors group">
                <div className="bg-white/20 p-1 sm:p-1.5 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <span className="font-medium text-xs sm:text-sm">+33 6 40 60 40 57</span>
              </a>
              <a href="mailto:hadri.abdelmoumen@gmail.com" className="flex items-center gap-1.5 sm:gap-2 hover:text-primary-100 transition-colors group">
                <div className="bg-white/20 p-1 sm:p-1.5 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <span className="font-medium text-xs sm:text-sm">hadri.abdelmoumen@gmail.com</span>
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 sm:gap-2">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium text-xs sm:text-sm">Support 24/7 Disponible</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 transition-all duration-300">
        <div className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-gradient-to-r from-white via-gray-50 to-white backdrop-blur-xl shadow-2xl'
            : 'bg-gradient-to-r from-white/95 via-gray-50/95 to-white/95 backdrop-blur-lg shadow-lg'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <a href="#home" className="flex items-center group" aria-label="Home">
                <img 
                  src="/images/cindel-nettoyage-logo.png" 
                  alt="Cindel Nettoyage" 
                  className="h-16 w-auto object-contain group-hover:scale-105 transition-transform"
                />
              </a>

              {/* Desktop Navigation - Right aligned */}
              <nav className="hidden lg:flex items-center space-x-2 ml-auto" aria-label="Main navigation">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="group relative px-4 py-2.5 text-gray-700 hover:text-primary-600 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      <div className="relative z-10 flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{link.label}</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-emerald-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-10 blur-sm transition-opacity" />
                    </a>
                  );
                })}
              </nav>

            {/* Mobile Menu Button - Animated Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-3 text-gray-700 hover:text-primary-600 transition-colors z-50"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary-50 to-emerald-50 rounded-xl">
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span
                    className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  />
                </div>
              </div>
            </button>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient border */}
        <div className="h-0.5 bg-gradient-to-r from-primary-400 via-emerald-400 to-cyan-400 shadow-md" />
      </header>

      {/* Mobile Menu Full Screen Overlay */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden fixed inset-0 z-[60] bg-gradient-to-br from-white via-gray-50 to-white overflow-y-auto ${isMenuClosing ? 'animate-slideOutRight' : 'animate-slideInRight'}`}>
          {/* Fixed Header with Logo and Close */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-lg shadow-lg z-10">
            <div className="h-1 bg-gradient-to-r from-primary-500 via-emerald-500 to-cyan-500 shadow-glow" />
            <div className="flex justify-between items-center px-4 sm:px-6 h-20">
              {/* Logo */}
              <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center group">
                <img 
                  src="/images/cindel-nettoyage-logo.png" 
                  alt="Cindel Nettoyage" 
                  className="h-16 w-auto object-contain"
                />
              </a>
              
              {/* Close Button */}
              <button
                onClick={closeMobileMenu}
                className="relative p-3 text-gray-700 hover:text-primary-600 transition-colors group"
                aria-label="Close menu"
              >
                <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary-50 to-emerald-50 rounded-xl group-hover:scale-110 transition-transform">
                  <div className="w-6 h-5 relative flex flex-col justify-between">
                    <span className="block h-0.5 w-full bg-gray-700 rounded-full rotate-45 translate-y-2 transition-all duration-300 group-hover:bg-primary-600" />
                    <span className="block h-0.5 w-full bg-gray-700 rounded-full opacity-0" />
                    <span className="block h-0.5 w-full bg-gray-700 rounded-full -rotate-45 -translate-y-2 transition-all duration-300 group-hover:bg-primary-600" />
                  </div>
                </div>
              </button>
            </div>
            <div className="h-0.5 bg-gradient-to-r from-primary-400 via-emerald-400 to-cyan-400" />
          </div>
          
          {/* Menu Content */}
          <nav className="px-4 py-8 space-y-2 max-w-md mx-auto">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="group flex items-center gap-4 px-5 py-4 text-gray-700 hover:text-white font-bold rounded-2xl transition-all duration-300 relative overflow-hidden"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative z-10 p-3 bg-gradient-to-br from-primary-100 to-emerald-100 rounded-xl group-hover:scale-110 transition-all shadow-md">
                    <Icon className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="relative z-10 text-lg">{link.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-emerald-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
