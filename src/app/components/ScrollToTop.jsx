'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fadeInUp">
      <div className="relative group">
        {/* Button */}
        <button
          onClick={scrollToTop}
          className="relative group/btn"
          aria-label="Scroll to top"
        >
          {/* Outer glow ring - animated */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 via-emerald-500 to-cyan-500 rounded-full blur-lg opacity-50 group-hover/btn:opacity-100 transition-all duration-300 animate-pulse-slow" />
          
          {/* Button background with gradient */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl overflow-hidden transition-all duration-300">
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-emerald-500 to-cyan-500" />
            
            {/* Animated gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-cyan-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
            {/* Icon */}
            <div className="relative w-full h-full flex items-center justify-center">
              <ArrowUp className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform duration-300" />
            </div>
          </div>

          {/* Ripple effect on click */}
          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active/btn:scale-150 transition-transform duration-500 opacity-0 group-active/btn:opacity-100" />
        </button>
      </div>
    </div>
  );
}
