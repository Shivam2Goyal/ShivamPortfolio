const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Fluorescent glowing particles */}
      <div className="absolute top-32 left-16 w-4 h-4 bg-cyan-400/70 rounded-full blur-sm animate-float opacity-90 shadow-lg shadow-cyan-400/50" />
      <div className="absolute top-64 right-24 w-3 h-3 bg-emerald-400/80 rounded-full blur-sm animate-float opacity-85 shadow-lg shadow-emerald-400/60" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-48 left-32 w-5 h-5 bg-cyan-300/60 rounded-full blur-sm animate-float opacity-80 shadow-xl shadow-cyan-300/40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-72 right-16 w-4 h-4 bg-teal-300/70 rounded-full blur-sm animate-float opacity-90 shadow-lg shadow-teal-300/50" style={{ animationDelay: '3s' }} />
      <div className="absolute top-96 left-64 w-3 h-3 bg-cyan-500/80 rounded-full blur-sm animate-float opacity-85 shadow-lg shadow-cyan-500/60" style={{ animationDelay: '4s' }} />
      <div className="absolute top-48 right-48 w-4 h-4 bg-blue-400/65 rounded-full blur-sm animate-float opacity-95 shadow-xl shadow-blue-400/45" style={{ animationDelay: '5s' }} />
      <div className="absolute bottom-32 left-96 w-5 h-5 bg-cyan-400/55 rounded-full blur-sm animate-float opacity-85 shadow-lg shadow-cyan-400/35" style={{ animationDelay: '6s' }} />
      <div className="absolute top-80 right-72 w-3 h-3 bg-emerald-400/75 rounded-full blur-sm animate-float opacity-90 shadow-lg shadow-emerald-400/55" style={{ animationDelay: '7s' }} />
      <div className="absolute bottom-96 right-32 w-4 h-4 bg-teal-300/60 rounded-full blur-sm animate-float opacity-80 shadow-xl shadow-teal-300/40" style={{ animationDelay: '8s' }} />
      <div className="absolute top-40 left-80 w-3 h-3 bg-cyan-300/80 rounded-full blur-sm animate-float opacity-90 shadow-lg shadow-cyan-300/60" style={{ animationDelay: '9s' }} />
      
      {/* Medium fluorescent orbs */}
      <div className="absolute top-20 left-40 w-8 h-8 bg-cyan-400/40 rounded-full blur-md animate-float opacity-70 shadow-2xl shadow-cyan-400/30" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-40 right-60 w-10 h-10 bg-emerald-400/35 rounded-full blur-md animate-float opacity-65 shadow-2xl shadow-emerald-400/25" style={{ animationDelay: '3.5s' }} />
      <div className="absolute top-60 right-40 w-9 h-9 bg-teal-300/45 rounded-full blur-md animate-float opacity-75 shadow-2xl shadow-teal-300/35" style={{ animationDelay: '5.5s' }} />
      <div className="absolute bottom-60 left-48 w-8 h-8 bg-cyan-300/40 rounded-full blur-md animate-float opacity-60 shadow-2xl shadow-cyan-300/30" style={{ animationDelay: '7.5s' }} />
      
      {/* Large fluorescent energy fields */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl animate-float opacity-80 shadow-2xl shadow-cyan-400/15" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-emerald-400/25 rounded-full blur-2xl animate-float opacity-70 shadow-2xl shadow-emerald-400/20" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-teal-300/15 rounded-full blur-3xl animate-float opacity-60 shadow-2xl shadow-teal-300/10" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-cyan-300/18 rounded-full blur-2xl animate-float opacity-50 shadow-2xl shadow-cyan-300/13" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-44 h-44 bg-emerald-400/16 rounded-full blur-3xl animate-float opacity-65 shadow-2xl shadow-emerald-400/11" style={{ animationDelay: '3s' }} />
      
      {/* Dynamic gradient overlays with fluorescent effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 via-transparent to-emerald-400/8 opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-tl from-teal-300/6 via-transparent to-cyan-300/6 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/4 to-transparent opacity-60" />
      
      {/* Animated energy waves */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-300/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default AnimatedBackground;