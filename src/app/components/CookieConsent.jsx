'use client';

import { useState, useEffect } from 'react';
import { Cookie, X, Check, Shield, Info, Sparkles } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    
    if (!hasConsented) {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    handleClose();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    handleClose();
  };

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isExiting ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
    }`}>
      <div className="relative w-full bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 backdrop-blur-xl border-t-2 border-primary-500/50 shadow-2xl">
        {/* Animated gradient line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-primary-500 to-emerald-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
        
        {/* Floating particles decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-2 left-10 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-float" />
          <div className="absolute top-4 right-20 w-1.5 h-1.5 bg-primary-400 rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-emerald-400 rounded-full opacity-70 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-2 right-1/3 w-1 h-1 bg-cyan-500 rounded-full opacity-40 animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Icon & Content */}
            <div className="flex items-start gap-4 flex-1">
              {/* Animated Icon */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-primary-500 rounded-2xl blur-lg opacity-50 animate-pulse-slow" />
                <div className="relative bg-gradient-to-br from-cyan-500 via-primary-500 to-emerald-500 p-4 rounded-2xl shadow-glow">
                  <Cookie className="w-7 h-7 text-white animate-pulse" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    Consentement aux Cookies
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site 
                  et personnaliser le contenu. En cliquant sur "Accepter", vous consentez à l'utilisation de tous les cookies.
                </p>
                
                {/* Cookie Features */}
                <div className="flex flex-wrap gap-3 text-xs">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <Shield className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-gray-200 font-medium">Sécurisé</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <Info className="w-3.5 h-3.5 text-primary-400" />
                    <span className="text-gray-200 font-medium">Amélioration UX</span>
                  </div>
                  <a 
                    href="#" 
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors group"
                  >
                    <Info className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-gray-200 font-medium group-hover:text-white transition-colors">Politique de Confidentialité</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:flex-shrink-0">
              {/* Accept Button */}
              <button
                onClick={handleAccept}
                className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 via-primary-500 to-emerald-500 text-white rounded-xl font-bold overflow-hidden shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 min-w-[140px]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Check className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Accepter
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-primary-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              </button>

              {/* Decline Button */}
              <button
                onClick={handleDecline}
                className="group relative px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 min-w-[140px]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                  Refuser
                </span>
              </button>
            </div>

            {/* Close Button - Optional */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 lg:relative lg:top-0 lg:right-0 p-2 text-gray-400 hover:text-white transition-colors group"
              aria-label="Close"
            >
              <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom gradient glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      </div>
    </div>
  );
}
