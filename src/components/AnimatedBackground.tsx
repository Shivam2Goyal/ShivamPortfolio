import { useEffect, useRef } from "react";

// A soft radial glow that follows the cursor, painted only on the page
// background layer (never on text/cards/components — those all render in
// normal page content, stacked above this fixed layer). Disabled on
// touch devices (no real cursor) and when the user prefers reduced motion.
const AnimatedBackground = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || prefersReducedMotion) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };
    // How much of the remaining distance to close each frame — lower is
    // more fluid/trailing, higher is snappier/more rigid.
    const ease = 0.08;

    const handleMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    window.addEventListener("pointermove", handleMove);

    let frame = requestAnimationFrame(function tick() {
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;

      const el = glowRef.current;
      if (el) {
        el.style.setProperty("--glow-x", `${current.x}px`);
        el.style.setProperty("--glow-y", `${current.y}px`);
      }

      frame = requestAnimationFrame(tick);
    });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 bg-background"
      style={
        {
          "--glow-x": "50%",
          "--glow-y": "35%",
          backgroundImage:
            "radial-gradient(1100px circle at var(--glow-x) var(--glow-y), hsl(var(--primary) / 0.12) 0%, hsl(var(--primary) / 0.06) 35%, transparent 75%)",
        } as React.CSSProperties
      }
    />
  );
};

export default AnimatedBackground;
