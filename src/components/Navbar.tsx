import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, User, Image, Newspaper, Menu, X } from "lucide-react";

// Top-level pages only. Within a page (e.g. About), section navigation is
// handled by that page's own local nav (see AboutSidebar.tsx), not here.
const navItems = [
  { href: "/about", label: "About", icon: User },
  { href: "/gallery", label: "Gallery", icon: Image },
  { href: "/blog", label: "Blog", icon: Newspaper },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const goHome = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-fit max-w-[calc(100%-2rem)] -translate-x-1/2">
      <div
        className={`flex items-center gap-1 rounded-full border border-border px-2 py-1.5 transition-colors duration-300 ${
          isScrolled ? "bg-background/70 backdrop-blur-md" : "bg-background/40 backdrop-blur-sm"
        }`}
      >
        <Link
          to="/"
          onClick={goHome}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
            location.pathname === "/"
              ? "border-primary text-foreground"
              : "border-border text-foreground hover:border-primary"
          }`}
          aria-label="Home"
        >
          <Home className="h-3.5 w-3.5" />
        </Link>

        <span className="hidden h-5 w-px shrink-0 bg-border md:block" aria-hidden="true" />

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.href || location.pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs transition-colors duration-300 ${
                  isActive
                    ? "border-border bg-secondary text-foreground"
                    : "border-transparent text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <item.icon className="h-3 w-3" />
                {item.label}
              </Link>
            );
          })}
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="ml-auto rounded-full md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-2xl border border-border bg-background/80 p-2 backdrop-blur-md md:hidden">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-foreground"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-foreground"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
