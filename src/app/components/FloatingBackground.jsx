export default function FloatingBackground({ variant = 'default' }) {
  // Color schemes for different variants
  const colorSchemes = {
    default: {
      orbs: [
        'from-cyan-200/40 via-blue-200/30 to-purple-200/40',
        'from-emerald-200/40 via-teal-200/30 to-cyan-200/40',
        'from-blue-200/30 via-cyan-200/20 to-emerald-200/30',
      ],
      particles: ['cyan-400', 'blue-400', 'emerald-400', 'teal-400', 'cyan-500', 'blue-500', 'emerald-500'],
    },
    emerald: {
      orbs: [
        'from-emerald-200/40 via-teal-200/30 to-cyan-200/40',
        'from-teal-200/40 via-emerald-200/30 to-cyan-200/40',
        'from-cyan-200/30 via-emerald-200/20 to-teal-200/30',
      ],
      particles: ['white', 'emerald-300', 'teal-300', 'white', 'emerald-400', 'teal-400', 'white'],
    },
    teal: {
      orbs: [
        'from-emerald-200/40 via-teal-200/30 to-cyan-200/40',
        'from-cyan-200/40 via-blue-200/30 to-emerald-200/40',
        'from-teal-200/30 via-emerald-200/20 to-cyan-200/30',
      ],
      particles: ['emerald-400', 'teal-400', 'cyan-400', 'emerald-400', 'teal-500', 'cyan-500', 'emerald-500'],
    },
    blue: {
      orbs: [
        'from-emerald-200/40 via-cyan-200/30 to-blue-200/40',
        'from-blue-200/40 via-cyan-200/30 to-emerald-200/40',
        'from-cyan-200/30 via-emerald-200/20 to-blue-200/30',
      ],
      particles: ['emerald-400', 'cyan-400', 'blue-400', 'emerald-400', 'cyan-500', 'blue-500', 'emerald-500'],
    },
  };

  const colors = colorSchemes[variant] || colorSchemes.default;

  return (
    <>
      {/* Animated gradient orbs */}
      <div className={`absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br ${colors.orbs[0]} rounded-full blur-3xl animate-float`} />
      <div className={`absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tl ${colors.orbs[1]} rounded-full blur-3xl animate-float`} style={{ animationDelay: '2s' }} />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r ${colors.orbs[2]} rounded-full blur-3xl animate-float`} style={{ animationDelay: '4s' }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-2 h-2 bg-${colors.particles[0]} rounded-full opacity-60 animate-float`} />
        <div className={`absolute top-40 right-20 w-3 h-3 bg-${colors.particles[1]} rounded-full opacity-50 animate-float`} style={{ animationDelay: '1s' }} />
        <div className={`absolute top-60 left-1/3 w-1.5 h-1.5 bg-${colors.particles[2]} rounded-full opacity-70 animate-float`} style={{ animationDelay: '2s' }} />
        <div className={`absolute bottom-40 right-1/4 w-2.5 h-2.5 bg-${colors.particles[3]} rounded-full opacity-40 animate-float`} style={{ animationDelay: '3s' }} />
        <div className={`absolute bottom-60 left-20 w-2 h-2 bg-${colors.particles[4]} rounded-full opacity-50 animate-float`} style={{ animationDelay: '4s' }} />
        <div className={`absolute top-1/3 right-1/3 w-1 h-1 bg-${colors.particles[5]} rounded-full opacity-60 animate-float`} style={{ animationDelay: '1.5s' }} />
        <div className={`absolute bottom-1/3 left-1/2 w-2 h-2 bg-${colors.particles[6]} rounded-full opacity-45 animate-float`} style={{ animationDelay: '2.5s' }} />
      </div>
    </>
  );
}
