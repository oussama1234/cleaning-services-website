'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    reason: ''
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
      const apiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL || 'https://cindelnettoyage.fr/api';
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ ...formData }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', reason: '' });
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
    { icon: Clock, label: 'Support 24/7', value: 'Disponible 24/7', color: 'text-primary-500', bg: 'bg-primary-50' },
    { icon: Phone, label: 'Téléphone', value: '+33 6 40 60 40 57', href: 'tel:+33640604057', color: 'text-secondary-500', bg: 'bg-secondary-50' },
    { icon: Mail, label: 'Email', value: 'cindelnettoyage@gmail.com', href: 'mailto:cindelnettoyage@gmail.com', color: 'text-accent-500', bg: 'bg-accent-50' },
    { icon: MapPin, label: 'Adresse', value: '115 Avenue Saint Vincent De Paul, Dax', color: 'text-emerald-500', bg: 'bg-emerald-50' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-20 pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
              <MessageSquare className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Contactez-Nous</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Parlons de Votre <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Projet de Nettoyage
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Une question ? Un devis ? Notre équipe est là pour vous répondre. Remplissez le formulaire et nous vous recontacterons dans les plus brefs délais.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className={`p-3 rounded-2xl ${info.bg} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="text-slate-900 font-semibold hover:text-primary-600 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-slate-900 font-semibold">{info.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Emergency Card */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <h3 className="text-2xl font-bold mb-2 relative z-10">Urgence Nettoyage ?</h3>
              <p className="text-slate-400 mb-6 relative z-10">
                Notre équipe d'intervention rapide est disponible pour les situations urgentes.
              </p>

              <a
                href="tel:+33640604057"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-primary-50 transition-colors relative z-10"
              >
                <Phone className="w-5 h-5" />
                <span>Appeler Maintenant</span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Nom Complet</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-400"
                        placeholder="Jean Dupont"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-400"
                        placeholder="jean@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Téléphone</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-400"
                        placeholder="06 12 34 56 78"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Sujet</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <select
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:bg-white transition-all font-medium text-slate-900 appearance-none cursor-pointer"
                        required
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="booking">Réservation</option>
                        <option value="quote">Devis</option>
                        <option value="info">Information</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-400 resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-primary-600 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      <span>Envoyer le Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>

                {status && (
                  <div className={`p-4 rounded-xl text-center font-medium text-sm ${status === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                    }`}>
                    {status === 'success'
                      ? 'Message envoyé avec succès ! Nous vous répondrons très vite.'
                      : 'Une erreur est survenue. Veuillez réessayer.'}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
