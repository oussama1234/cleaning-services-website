'use client';

import { Clock, ArrowRight, Sparkles } from 'lucide-react';

export default function ServiceCard({ service }) {
  // Badge color mapping
  const badgeColors = {
    emerald: { bg: 'bg-emerald-500', light: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700' },
    blue: { bg: 'bg-blue-500', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700' },
    purple: { bg: 'bg-purple-500', light: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700' },
    cyan: { bg: 'bg-cyan-500', light: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700' },
    green: { bg: 'bg-green-500', light: 'bg-green-50', border: 'border-green-200', text: 'text-green-700' },
    amber: { bg: 'bg-amber-500', light: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700' },
    orange: { bg: 'bg-orange-500', light: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700' },
    red: { bg: 'bg-red-500', light: 'bg-red-50', border: 'border-red-200', text: 'text-red-700' },
  };
  
  const colors = service.badgeColor ? badgeColors[service.badgeColor] : badgeColors.emerald;

  const handleBookClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const Icon = service.icon;

  return (
    <div className="group relative transition-transform duration-200 hover:-translate-y-3 hover:scale-[1.02]">
      {/* Glow Border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-20 transition duration-200" />

      {/* Card */}
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-card group-hover:shadow-card-hover transition-all duration-200">
        {/* Image Header */}
        <div className="relative h-48 overflow-hidden">
          {/* Service Image */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Subtle dark overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-150 h-14 flex items-center">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-6 line-clamp-3 h-18">
            {service.description}
          </p>

          {/* Details */}
          <div className="flex items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-primary-50 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-primary-600" />
              <span className="text-xs font-semibold text-primary-700">{service.time}</span>
            </div>
            {service.badge && (
              <div className={`flex items-center gap-1 px-2.5 py-1.5 ${colors.light} rounded-lg border ${colors.border}`}>
                <Sparkles className={`w-3.5 h-3.5 ${colors.text}`} />
                <span className={`text-xs font-bold ${colors.text}`}>{service.badge}</span>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleBookClick}
            className="group/btn relative w-full py-3 bg-gradient-to-r from-primary-500 to-emerald-600 text-white rounded-2xl font-bold overflow-hidden shadow-lg hover:shadow-glow transition-all duration-200"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Demander un Devis
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-150" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-primary-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200" />
          </button>
        </div>

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      </div>
    </div>
  );
}
