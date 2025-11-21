'use client';

import { Clock, ArrowRight, Sparkles, Check } from 'lucide-react';

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  const handleBookClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="group relative h-full">
      {/* Hover Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-[2rem] opacity-0 group-hover:opacity-100 blur transition duration-500" />

      <div className="relative h-full bg-white rounded-[1.9rem] p-1 overflow-hidden flex flex-col">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden rounded-[1.5rem]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10" />
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          {/* Floating Icon */}
          <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
            <Icon className="w-6 h-6 text-primary-600" />
          </div>

          {/* Badge */}
          {service.badge && (
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
              <Sparkles className="w-3 h-3 text-yellow-300" />
              <span className="text-xs font-bold text-white tracking-wide">{service.badge}</span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
            {service.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
            {service.description}
          </p>

          {/* Features/Time */}
          <div className="flex items-center justify-between mb-6 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <Clock className="w-4 h-4 text-primary-500" />
              <span>{service.time}</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold uppercase tracking-wider">
              <Check className="w-3 h-3" />
              <span>Dispo</span>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleBookClick}
            className="w-full py-3.5 rounded-xl bg-slate-50 text-slate-900 font-bold text-sm hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            <span>Réserver</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
