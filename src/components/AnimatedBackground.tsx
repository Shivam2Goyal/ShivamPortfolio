const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Small glowing bubbles */}
      <div className="absolute top-32 left-16 w-3 h-3 bg-cyan-400/40 rounded-full blur-sm animate-float opacity-80" />
      <div className="absolute top-64 right-24 w-2 h-2 bg-blue-400/50 rounded-full blur-sm animate-float opacity-70" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-48 left-32 w-4 h-4 bg-cyan-300/30 rounded-full blur-sm animate-float opacity-60" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-72 right-16 w-3 h-3 bg-blue-300/40 rounded-full blur-sm animate-float opacity-75" style={{ animationDelay: '3s' }} />
      <div className="absolute top-96 left-64 w-2 h-2 bg-cyan-500/50 rounded-full blur-sm animate-float opacity-65" style={{ animationDelay: '4s' }} />
      <div className="absolute top-48 right-48 w-3 h-3 bg-blue-500/35 rounded-full blur-sm animate-float opacity-80" style={{ animationDelay: '5s' }} />
      <div className="absolute bottom-32 left-96 w-4 h-4 bg-cyan-400/25 rounded-full blur-sm animate-float opacity-70" style={{ animationDelay: '6s' }} />
      <div className="absolute top-80 right-72 w-2 h-2 bg-blue-400/45 rounded-full blur-sm animate-float opacity-85" style={{ animationDelay: '7s' }} />
      <div className="absolute bottom-96 right-32 w-3 h-3 bg-cyan-300/40 rounded-full blur-sm animate-float opacity-60" style={{ animationDelay: '8s' }} />
      <div className="absolute top-40 left-80 w-2 h-2 bg-blue-300/50 rounded-full blur-sm animate-float opacity-75" style={{ animationDelay: '9s' }} />
      
      {/* Medium glowing bubbles */}
      <div className="absolute top-20 left-40 w-6 h-6 bg-cyan-400/20 rounded-full blur-md animate-float opacity-50" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-40 right-60 w-8 h-8 bg-blue-400/15 rounded-full blur-md animate-float opacity-45" style={{ animationDelay: '3.5s' }} />
      <div className="absolute top-60 right-40 w-7 h-7 bg-cyan-300/25 rounded-full blur-md animate-float opacity-55" style={{ animationDelay: '5.5s' }} />
      <div className="absolute bottom-60 left-48 w-6 h-6 bg-blue-300/20 rounded-full blur-md animate-float opacity-40" style={{ animationDelay: '7.5s' }} />
      
      {/* Large glowing orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float opacity-40" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-accent/8 rounded-full blur-xl animate-float opacity-30" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-primary/6 rounded-full blur-2xl animate-float opacity-35" style={{ animationDelay: '3s' }} />
      
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-accent/2 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/1 via-transparent to-primary/1 opacity-30" />
    </div>
  );
};

export default AnimatedBackground;