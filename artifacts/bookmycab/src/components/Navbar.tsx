import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Popular Routes", href: "#routes" },
    { name: "Our Fleet", href: "#fleet" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="BookMyCab Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className={cn(
              "font-display font-bold text-2xl tracking-tight transition-colors",
              isScrolled ? "text-secondary" : "text-white drop-shadow-md"
            )}>
              BookMyCab
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-primary",
                  isScrolled ? "text-secondary/80" : "text-white/90 hover:text-primary drop-shadow-sm"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+919999000111"
              className="hidden lg:flex items-center gap-2 text-sm font-bold"
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                isScrolled ? "bg-secondary/5 text-secondary" : "bg-white/10 text-white"
              )}>
                <PhoneCall className="w-4 h-4" />
              </div>
              <span className={isScrolled ? "text-secondary" : "text-white"}>+91 9999-000-111</span>
            </a>
            
            <button className="hidden md:block px-6 py-2.5 rounded-full font-bold bg-primary text-secondary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200">
              Book Now
            </button>

            <button 
              className={cn(
                "md:hidden p-2 rounded-lg",
                isScrolled ? "text-secondary" : "text-white"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border/50 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold text-secondary py-2 border-b border-border/50"
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-4 w-full py-3 rounded-xl font-bold bg-primary text-secondary">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
