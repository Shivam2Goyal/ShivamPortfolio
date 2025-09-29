import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-semibold text-gradient hover:scale-105 transition-transform duration-300 font-bree"
          >
            Shivam Goyal
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-2 transition-all duration-500 text-muted-foreground hover:text-foreground font-bree smooth-transition group"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.label}
                {/* Enhanced underline effect */}
                <span className="pointer-events-none absolute left-1/2 bottom-0 w-3/4 h-1.5 -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full bg-gradient-to-r from-cyan-400 via-cyan-400 to-cyan-500 blur-sm shadow-lg opacity-80 animate-navbar-glow"></span>
                <span className="pointer-events-none absolute left-1/2 bottom-0 w-1/2 h-0.5 -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-center rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-50"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 transition-all duration-500 text-muted-foreground hover:text-foreground font-bree group relative"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    element?.scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                  {/* Enhanced underline effect for mobile */}
                  <span className="pointer-events-none absolute left-1/2 bottom-0 w-3/4 h-1.5 -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full bg-gradient-to-r from-yellow-400 via-cyan-400 to-pink-500 blur-sm shadow-lg opacity-80 animate-navbar-glow"></span>
                  <span className="pointer-events-none absolute left-1/2 bottom-0 w-1/2 h-0.5 -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-100"></span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
