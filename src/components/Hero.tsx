import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "AI & Data Science Enthusiast | Researcher | Developer | Creator";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/shivamgoyal",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/shivamgoyal",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:b23cm1036@iitj.ac.in",
      label: "Email"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-glow/30 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-card border-2 border-primary/30 overflow-hidden animate-scale-in">
          <div className="w-full h-full bg-muted/50 flex items-center justify-center text-muted-foreground">
            <span className="text-4xl">👤</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="block text-foreground">Hi, I'm</span>
          <span className="block text-gradient animate-pulse-glow">Shivam Goyal</span>
        </h1>

        {/* Animated tagline */}
        <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-8 animate-slide-in-right">
          <span className="font-mono">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.5s" }}>
          I'm a curious builder at the intersection of AI, data, and design. 
          I enjoy experimenting with cutting-edge machine learning while also 
          dabbling in creative pursuits like web design and poetry.
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mb-16 animate-scale-in" style={{ animationDelay: "0.8s" }}>
          {socialLinks.map((link, index) => (
            <Button
              key={link.label}
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            </Button>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;