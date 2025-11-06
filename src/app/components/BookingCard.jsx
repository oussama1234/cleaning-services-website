'use client';

import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, User, Phone as PhoneIcon, CheckCircle2, Sparkles, Mail } from 'lucide-react';
import gsap from 'gsap';

export default function BookingCard() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cardRef = useRef(null);

  const services = [
    { name: 'Plan Basique - 80€/visite', value: 'Plan Basique - 80€/visite' },
    { name: 'Plan Standard - 150€/visite', value: 'Plan Standard - 150€/visite' },
    { name: 'Plan Premium - 250€/visite', value: 'Plan Premium - 250€/visite' },
    { name: 'Nettoyage Résidentiel', value: 'Nettoyage Résidentiel' },
    { name: 'Nettoyage de Bureaux', value: 'Nettoyage de Bureaux' },
    { name: 'Nettoyage en Profondeur', value: 'Nettoyage en Profondeur' },
    { name: 'Nettoyage de Vitres', value: 'Nettoyage de Vitres' },
    { name: 'Nettoyage de Jardin', value: 'Nettoyage de Jardin' },
    { name: 'Nettoyage de Meubles', value: 'Nettoyage de Meubles' },
    { name: 'Nettoyage Fin de Bail', value: 'Nettoyage Fin de Bail' },
    { name: 'Désinfection', value: 'Désinfection' },
  ];

  // Removed heavy scroll animations for performance

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use contact API endpoint with booking data
      const apiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL || 'https://cindelnettoyage.fr/api';
      const bookingMessage = `Nouvelle réservation:\n\nService: ${formData.service}\nDate: ${formData.date}\nHeure: ${formData.time}\nNom: ${formData.name}\nTéléphone: ${formData.phone}\nEmail: ${formData.email}`;
      
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          reason: 'booking',
          message: bookingMessage
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        
        // Confetti animation
        for (let i = 0; i < 50; i++) {
          const confetti = document.createElement('div');
          confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${['#10b981', '#f97316', '#3b82f6'][Math.floor(Math.random() * 3)]};
            left: ${Math.random() * 100}%;
            top: 50%;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
          `;
          document.body.appendChild(confetti);

          gsap.to(confetti, {
            y: -500,
            x: (Math.random() - 0.5) * 400,
            opacity: 0,
            duration: 2,
            ease: 'power1.out',
            onComplete: () => confetti.remove(),
          });
        }
      }
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Success state background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-blue-500/10" />
        <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tl from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-2xl sm:rounded-3xl blur-xl opacity-75" />
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary-500 to-emerald-600 rounded-full mb-4 sm:mb-6">
                <CheckCircle2 size={32} className="text-white sm:hidden" />
                <CheckCircle2 size={48} className="text-white hidden sm:block" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                Réservation Confirmée !
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 px-4">
                Nous vous contacterons bientôt au {formData.phone} pour confirmer votre rendez-vous.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', phone: '', email: '', service: '', date: '', time: '' });
                }}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary-500 to-emerald-600 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg overflow-hidden shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <span className="relative z-10">Réserver un Autre Service</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="booking"
      ref={cardRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden scroll-mt-32 md:scroll-mt-40"
    >
      {/* Background matching carousel style */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-600 opacity-40" />
        
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        
        {/* Animated blob decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-white rounded-full blur-2xl animate-pulse-slow" />
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="booking-content relative text-center mb-8 sm:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 sm:mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
            <span className="text-white/90 font-semibold uppercase text-xs sm:text-sm tracking-wide">Réservation Rapide</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-2xl px-4">
            Réservez en 60 Secondes
          </h2>
          
          <p className="text-white/90 text-base sm:text-lg font-light px-4">
            Remplissez vos informations et nous vous recontacterons immédiatement
          </p>
        </div>

        <div className="booking-content relative group z-10">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-emerald-500 to-cyan-500 rounded-2xl sm:rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
          
          {/* Form card with glass effect */}
          <div className="relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name */}
              <div className="relative">
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                  Votre Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-3 sm:px-4 sm:py-4 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:border-primary-500 focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="Jean Dupont"
                  required
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    <PhoneIcon className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                    Numéro de Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:border-primary-500 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="+33 6 12 34 56 78"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:border-primary-500 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                  Sélectionnez un Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-3 sm:px-4 sm:py-4 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:border-primary-500 focus:outline-none transition-colors appearance-none cursor-pointer bg-white text-sm sm:text-base"
                  required
                >
                  <option value="">Choisissez un service...</option>
                  <optgroup label="Forfaits Tarifaires">
                    {services.slice(0, 3).map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Autres Services">
                    {services.slice(3).map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.name}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="date" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                    Date Préférée
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:border-primary-500 focus:outline-none transition-colors text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                    Heure Préférée
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:border-primary-500 focus:outline-none transition-colors text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group/btn relative w-full py-4 sm:py-5 bg-gradient-to-r from-primary-500 to-emerald-600 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg overflow-hidden shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Envoi en cours...' : 'Confirmer la Réservation'}
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:rotate-180 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-primary-500 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
