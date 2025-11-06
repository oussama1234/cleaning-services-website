'use client';

import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.contact-header', {
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      // Staggered items animation
      gsap.from('.contact-item', {
        y: 40,
        opacity: 0,
        scale: 0.95,
        stagger: 0.12,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      // Use Laravel API directly
      const apiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL || 'https://cindelnettoyage.fr/api';
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ ...formData, reason: 'other' }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Clock, label: 'Support 24/7', value: 'Disponible 24/7', gradient: 'from-primary-500 to-emerald-600' },
    { icon: Phone, label: 'Téléphone', value: '+33 6 40 60 40 57', href: 'tel:+33640604057', gradient: 'from-blue-500 to-cyan-600' },
    { icon: Mail, label: 'Email', value: 'hadri.abdelmoumen@gmail.com', href: 'mailto:hadri.abdelmoumen@gmail.com', gradient: 'from-accent-500 to-orange-600' },
    { icon: MapPin, label: 'Adresse', value: '115 Avenue Saint Vincent De Paul, Dax', gradient: 'from-purple-500 to-pink-600' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-emerald-50" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/40 via-blue-200/30 to-purple-200/40 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-emerald-200/40 via-teal-200/30 to-cyan-200/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-200/30 via-cyan-200/20 to-emerald-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-float" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-70 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-1/4 w-2.5 h-2.5 bg-teal-400 rounded-full opacity-40 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-60 left-20 w-2 h-2 bg-cyan-500 rounded-full opacity-50 animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-500 rounded-full opacity-60 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-emerald-500 rounded-full opacity-45 animate-float" style={{ animationDelay: '2.5s' }} />
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="contact-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-emerald-500/15 backdrop-blur-sm rounded-full mb-6 border border-cyan-300/50">
            <MessageSquare className="w-4 h-4 text-cyan-600 animate-pulse" />
            <span className="text-cyan-900 font-bold uppercase text-xs tracking-wider">Contactez-Nous</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Entrez En Contact
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Des questions ? Nous sommes là pour vous aider 24/7
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Cards - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="contact-item group relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500`} />
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-105 border border-gray-200/50 group-hover:border-cyan-300/50">
                    <div className="flex items-center gap-4">
                      <div className={`bg-gradient-to-br ${info.gradient} p-3 rounded-xl group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">{info.label}</div>
                        {info.href ? (
                          <a href={info.href} className="text-base font-bold text-gray-900 hover:text-cyan-600 transition-colors duration-300">
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-base font-bold text-gray-900">{info.value}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CTA Card */}
            <div className="contact-item relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-gradient-to-br from-cyan-500 via-blue-500 to-emerald-500 rounded-2xl p-5 text-white shadow-lg border border-white/20 group-hover:scale-105 transition-all duration-500">
                <h3 className="text-xl font-black mb-2">Besoin d'Aide Immédiate ?</h3>
                <p className="text-white/95 mb-4 text-sm font-medium">Appelez-nous maintenant pour un support instantané</p>
                <a
                  href="tel:+33640604057"
                  className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-white text-cyan-600 rounded-xl font-bold hover:scale-110 transition-all duration-300 shadow-md relative overflow-hidden"
                >
                  <Phone className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 text-sm">Appelez Maintenant</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-emerald-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="contact-item relative group">
              {/* Small Floating Circles in Form Background */}
              <div className="absolute -inset-1 rounded-3xl overflow-hidden opacity-30">
                <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400 rounded-full blur-2xl animate-float" />
                <div className="absolute top-20 right-20 w-16 h-16 bg-blue-400 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-emerald-400 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-10 right-1/3 w-18 h-18 bg-teal-400 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }} />
                <div className="absolute top-1/2 right-10 w-14 h-14 bg-purple-400 rounded-full blur-xl animate-pulse-slow" />
                <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-pink-400 rounded-full blur-lg animate-float" style={{ animationDelay: '1.5s' }} />
              </div>
              
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-200 via-blue-200 to-emerald-200 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition duration-700" />
              
              <form
                onSubmit={handleSubmit}
                className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 group-hover:border-cyan-300/50 transition-all duration-500"
              >
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-cyan-700 mb-2">
                      <User className="w-3.5 h-3.5 inline mr-1.5" />
                      Votre Nom
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all text-sm text-gray-900 placeholder-gray-400 hover:border-cyan-400"
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-cyan-700 mb-2">
                        <Mail className="w-3.5 h-3.5 inline mr-1.5" />
                        Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all text-sm text-gray-900 placeholder-gray-400 hover:border-cyan-400"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-cyan-700 mb-2">
                        <Phone className="w-3.5 h-3.5 inline mr-1.5" />
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all text-sm text-gray-900 placeholder-gray-400 hover:border-cyan-400"
                      placeholder="+33 6 12 34 56 78"
                        required
                      />
                    </div>
                  </div>

                  {/* Reason */}
                  <div>
                    <label htmlFor="contact-reason" className="block text-xs font-bold text-cyan-700 mb-2">
                      <MessageSquare className="w-3.5 h-3.5 inline mr-1.5" />
                      Raison
                    </label>
                    <select
                      id="contact-reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all appearance-none cursor-pointer text-sm text-gray-900 hover:border-cyan-400"
                      required
                    >
                      <option value="">Sélectionnez une raison...</option>
                      <option value="booking">Demande de Réservation</option>
                      <option value="quote">Demande de Devis</option>
                      <option value="complaint">Réclamation</option>
                      <option value="feedback">Commentaire</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-cyan-700 mb-2">
                      <Send className="w-3.5 h-3.5 inline mr-1.5" />
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all resize-none text-sm text-gray-900 placeholder-gray-400 hover:border-cyan-400"
                      placeholder="Dites-nous comment nous pouvons vous aider..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group/btn relative w-full py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 text-white rounded-xl font-black text-base overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 disabled:opacity-50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
                      <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:rotate-12 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                  </button>

                  {/* Status Message */}
                  {status && (
                    <div
                      className={`p-3 rounded-xl text-center text-sm font-bold ${
                        status === 'success'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                    >
                      {status === 'success'
                        ? '✓ Message envoyé avec succès ! Nous vous répondrons bientôt.'
                        : '✗ Quelque chose s\'est mal passé. Veuillez réessayer.'}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
