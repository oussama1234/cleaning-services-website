'use client';

import { Home, Building2, Settings, Award, Users, Clock } from 'lucide-react';

const features = [
  { icon: Home, label: 'Services Résidentiels', color: 'from-primary-500 to-emerald-600' },
  { icon: Building2, label: 'Services Commerciaux', color: 'from-blue-500 to-cyan-600' },
  { icon: Settings, label: 'Solutions Personnalisées', color: 'from-accent-500 to-orange-600' },
];

const stats = [
  { icon: Users, value: '1000+', label: 'Clients Satisfaits' },
  { icon: Award, value: '2+', label: "Ans d'Expérience" },
  { icon: Clock, value: '24/7', label: 'Support' },
];

export default function AboutSection() {

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80" 
          alt="" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-blue-500/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-50 to-orange-50 rounded-full mb-4 sm:mb-6 animate-fadeInUp">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent-600" />
              <span className="text-accent-700 font-semibold uppercase text-xs sm:text-sm tracking-wide">À Propos de Nous</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-slideUpFade" style={{ animationDelay: '0.05s' }}>
              <span className="bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
                Entreprise de Nettoyage
              </span>
              <br />
              <span className="text-gray-900">Professionnelle</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-slideUpFade" style={{ animationDelay: '0.1s' }}>
              Nous sommes un prestataire de services de nettoyage de confiance avec plus de 2 ans d&apos;expérience. 
              Notre équipe de nettoyeurs professionnels utilise des produits écologiques et des 
              techniques avancées pour offrir des résultats exceptionnels. Que ce soit votre maison, bureau 
              ou espace commercial, nous nous engageons à le rendre impeccable.
            </p>

            {/* Feature Cards */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative animate-rotateIn"
                    style={{ animationDelay: `${0.15 + index * 0.05}s` }}
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition duration-200`} />
                    <div className="relative flex items-center justify-center lg:justify-start gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md group-hover:shadow-lg transition-all duration-200">
                      <div className={`bg-gradient-to-br ${feature.color} p-2 sm:p-3 rounded-lg sm:rounded-xl`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <span className="font-semibold text-gray-800 text-base sm:text-lg">{feature.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-md mx-auto lg:mx-0 animate-fadeScaleIn" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center flex flex-col items-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-emerald-600 rounded-lg sm:rounded-xl mb-2">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent mb-1 whitespace-nowrap">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 h-8 sm:h-10 flex items-center justify-center text-center px-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Image Grid */}
          <div className="relative mt-8 lg:mt-0 flex justify-center">
            <div className="relative w-full">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl animate-zoomIn" style={{ animationDelay: '0.15s' }}>
                {/* Background image */}
                <img
                  src="https://images.unsplash.com/photo-1581578949510-fa7315c4c350?w=800&q=80"
                  alt="Cleaning service"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/50 to-emerald-600/50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4">2+</div>
                    <div className="text-lg sm:text-xl md:text-2xl">Années d&apos;Excellence</div>
                  </div>
                </div>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '30px 30px'
                }} />
                
                {/* Floating Stats - At very top with matching border radius */}
                <div className="absolute top-0 left-0 right-0 animate-slideDownFade" style={{ animationDelay: '0.25s' }}>
                  <div className="relative group">
                    {/* Subtle glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-400/30 to-orange-500/30 rounded-t-2xl sm:rounded-t-3xl opacity-20 transition duration-200" />
                    
                    {/* Card */}
                    <div className="relative bg-white/20 rounded-t-2xl sm:rounded-t-3xl px-4 py-2.5 sm:px-5 sm:py-3 border-b border-white/30 shadow-lg">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-t-2xl sm:rounded-t-3xl" />
                      
                      <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                        <div className="bg-gradient-to-br from-accent-500 to-orange-600 p-1.5 sm:p-2 rounded-lg shadow-lg flex-shrink-0">
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <span className="text-sm sm:text-base font-bold text-white drop-shadow-2xl whitespace-nowrap">100%</span>
                          <span className="text-sm sm:text-base font-semibold text-white/95 drop-shadow-lg whitespace-nowrap">Taux de Satisfaction</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
