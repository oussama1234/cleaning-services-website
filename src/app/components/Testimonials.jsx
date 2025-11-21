'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'Propriétaire',
    rating: 5,
    quote: 'Service absolument exceptionnel ! L\'équipe était professionnelle, minutieuse et a laissé ma maison impeccable. Je recommande vivement leur service de nettoyage en profondeur.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'PDG de Startup Tech',
    rating: 5,
    quote: 'Nous utilisons leur service de nettoyage de bureau chaque semaine et nous ne pourrions pas être plus satisfaits. Notre espace de travail est toujours impeccable et le personnel est incroyablement fiable.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'Propriétaire de Restaurant',
    rating: 5,
    quote: 'Le service de désinfection pendant la pandémie a été une bouée de sauvetage pour notre entreprise. Professionnel, efficace et très minutieux. Merci !',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 4,
    name: 'David Thompson',
    company: 'Gestionnaire Immobilier',
    rating: 5,
    quote: 'Leur service de nettoyage de fin de bail est le meilleur que j\'ai jamais vu. Cela facilite tellement la rotation de mes propriétés locatives. Hautement recommandé !',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [isPaused]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-200/20 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-200/20 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Témoignages</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Ce Que Disent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Nos Clients
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
            {/* Decorative Quote Icon */}
            <div className="absolute -top-6 left-12 bg-gradient-to-br from-primary-500 to-secondary-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
              <Quote className="w-8 h-8 text-white fill-white/20" />
            </div>

            <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 md:gap-12 items-center">
              {/* Image Side */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 relative group">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Rating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl flex justify-center gap-1 shadow-lg">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Decorative Dots */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pattern-dots opacity-20 -z-10" />
              </div>

              {/* Content Side */}
              <div className="text-center md:text-left">
                <blockquote className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed mb-8">
                  "{current.quote}"
                </blockquote>

                <div>
                  <div className="text-lg font-bold text-slate-900">{current.name}</div>
                  <div className="text-primary-600 font-medium">{current.company}</div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
                  <button
                    onClick={goToPrev}
                    className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-primary-500' : 'w-2 bg-slate-200 hover:bg-primary-200'
                          }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={goToNext}
                    className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
