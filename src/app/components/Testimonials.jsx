'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingBackground from './FloatingBackground';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'Propriétaire',
    rating: 5,
    quote: 'Service absolument exceptionnel ! L\'equipe était professionnelle, minutieuse et a laissé ma maison impeccable. Je recommande vivement leur service de nettoyage en profondeur.',
    gradient: 'from-primary-500 to-emerald-600',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    gender: 'female'
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'PDG de Startup Tech',
    rating: 5,
    quote: 'Nous utilisons leur service de nettoyage de bureau chaque semaine et nous ne pourrions pas être plus satisfaits. Notre espace de travail est toujours impeccable et le personnel est incroyablement fiable.',
    gradient: 'from-blue-500 to-cyan-600',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    gender: 'male'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'Propriétaire de Restaurant',
    rating: 5,
    quote: 'Le service de désinfection pendant la pandémie a été une bouee de sauvetage pour notre entreprise. Professionnel, efficace et très minutieux. Merci !',
    gradient: 'from-accent-500 to-orange-600',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    gender: 'female'
  },
  {
    id: 4,
    name: 'David Thompson',
    company: 'Gestionnaire Immobilier',
    rating: 5,
    quote: 'Leur service de nettoyage de fin de bail est le meilleur que j\'ai jamais vu. Cela facilite tellement la rotation de mes propriétés locatives. Hautement recommandé !',
    gradient: 'from-purple-500 to-pink-600',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    gender: 'male'
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const autoplayRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPaused, currentIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-item', {
        scale: 0.98,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-16 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-cyan-500/10" />
      
      <FloatingBackground variant="teal" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-50 to-emerald-50 rounded-full mb-6">
            <Star className="w-5 h-5 text-primary-600 fill-primary-600" />
            <span className="text-primary-700 font-semibold uppercase text-sm tracking-wide">Témoignages</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
              Ce Que Disent Nos Clients
            </span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="testimonial-item relative">
          {/* Glow effect */}
          <div className={`absolute -inset-1 bg-gradient-to-r ${current.gradient} rounded-3xl blur-xl opacity-30`} />

          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-card">
            {/* Quote icon - redesigned */}
            <div className={`absolute top-6 left-6 w-14 h-14 bg-gradient-to-br ${current.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
              <Quote className="w-7 h-7 text-white fill-white" />
            </div>

            {/* Profile Image and Info */}
            <div className="flex flex-col items-center mb-6">
              {/* Avatar with real image */}
              <div className="relative group mb-4">
                <div className={`absolute -inset-1 bg-gradient-to-br ${current.gradient} rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity`} />
                <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src={current.image} 
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <div className="font-bold text-gray-900 text-xl mb-1">
                  {current.name}
                </div>
                <div className="text-gray-600 text-sm">{current.company}</div>
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className={`w-6 h-6 text-yellow-500 fill-yellow-500`} />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-gray-700 text-center leading-relaxed font-medium max-w-3xl mx-auto italic">
              "{current.quote}"
            </blockquote>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group border-2 border-gray-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group border-2 border-gray-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-12 bg-gradient-to-r from-primary-500 to-emerald-600' 
                  : 'w-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
