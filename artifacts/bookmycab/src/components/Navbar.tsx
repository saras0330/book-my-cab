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
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center btn-glow"
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="BookMyCab Logo" 
                className="w-8 h-8 object-contain"
              />
            </motion.div>
            <span className="font-display font-bold text-2xl tracking-tight text-white drop-shadow-md glow-primary">
              BookMyCab
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-semibold text-white/90 hover:text-primary transition-colors group py-2"
              >
                {link.name}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary glow-border rounded-full"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+919999000111"
              className="hidden lg:flex items-center gap-2 text-sm font-bold group"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 text-primary border border-white/10 group-hover:border-primary/50 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
              </motion.div>
              <span className="text-white group-hover:text-primary transition-colors">+91 9999-000-111</span>
            </a>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0px 0px 10px rgba(255,183,0,0.4)", "0px 0px 20px rgba(255,183,0,0.8)", "0px 0px 10px rgba(255,183,0,0.4)"] 
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="hidden md:block px-6 py-2.5 rounded-full font-bold bg-primary text-primary-foreground btn-glow border border-primary/50"
            >
              Book Now
            </motion.button>

            <button 
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
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
            className="md:hidden glass border-t border-white/10 shadow-2xl overflow-hidden absolute w-full"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold text-white/90 hover:text-primary py-2 border-b border-white/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full py-3 rounded-xl font-bold bg-primary text-primary-foreground btn-glow"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
