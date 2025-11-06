'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      className="py-24 relative overflow-hidden"
    >
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-emerald-50" />
      
      {/* Simplified gradient shapes */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-cyan-100/30 to-blue-100/30 rounded-full opacity-40" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-gradient-to-tl from-emerald-100/30 to-cyan-100/30 rounded-full opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slideDownFade">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6 border border-cyan-300">
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
                <div key={index} className="group relative animate-slideInLeft" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.gradient} rounded-2xl opacity-0 group-hover:opacity-15 transition duration-200`} />
                  <div className="relative bg-white rounded-2xl p-5 shadow-md group-hover:shadow-lg transition-all duration-200 group-hover:scale-105 border border-gray-200 group-hover:border-cyan-300">
                    <div className="flex items-center gap-4">
                      <div className={`bg-gradient-to-br ${info.gradient} p-3 rounded-xl group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">{info.label}</div>
                        {info.href ? (
                          <a href={info.href} className="text-base font-bold text-gray-900 hover:text-cyan-600 transition-colors duration-150">
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
            <div className="relative group animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 rounded-2xl opacity-15 group-hover:opacity-25 transition duration-200" />
              <div className="relative bg-gradient-to-br from-cyan-500 via-blue-500 to-emerald-500 rounded-2xl p-5 text-white shadow-lg border border-white/20 group-hover:scale-105 transition-all duration-200">
                <h3 className="text-xl font-black mb-2">Besoin d'Aide Immédiate ?</h3>
                <p className="text-white/95 mb-4 text-sm font-medium">Appelez-nous maintenant pour un support instantané</p>
                <a
                  href="tel:+33640604057"
                  className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-white text-cyan-600 rounded-xl font-bold hover:scale-110 transition-all duration-150 shadow-md relative overflow-hidden"
                >
                  <Phone className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 text-sm">Appelez Maintenant</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-emerald-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-150" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="relative group animate-slideInRight-custom" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-200 via-blue-200 to-emerald-200 rounded-3xl opacity-10 group-hover:opacity-15 transition duration-200" />
              
              <form
                onSubmit={handleSubmit}
                className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 group-hover:border-cyan-300 transition-all duration-200"
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
                    className="group/btn relative w-full py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 text-white rounded-xl font-black text-base overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
                      <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:rotate-12 transition-transform duration-150" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200" />
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-300 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
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
