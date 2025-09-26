const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated glowing orbs */}
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