import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer id="contact" className="bg-background relative border-t border-white/10 pt-16 pb-8 overflow-hidden z-10">
      {/* Decorative footer glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
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
            <p className="text-white/60 mb-6">
              India's leading intercity and outstation cab booking service. Reliable, safe, and transparent travel solutions.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-colors shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,183,0,0.3)]"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Our Fleet', 'Offers & Deals', 'Travel Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-primary hover:glow-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              {['One Way Cabs', 'Round Trip Cabs', 'Airport Transfers', 'Local Car Rental', 'Corporate Travel'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-primary hover:glow-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:glow-primary transition-all" />
                <span className="text-white/60 group-hover:text-white/90 transition-colors">BookMyCab HQ, Connaught Place, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-primary shrink-0 group-hover:glow-primary transition-all" />
                <a href="tel:+917779012148" className="text-white/60 hover:text-primary transition-colors font-medium">
                  +91-7779012148
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-primary shrink-0 group-hover:glow-primary transition-all" />
                <a href="mailto:support@bookmycab.in" className="text-white/60 hover:text-primary transition-colors font-medium">
                  support@bookmycab.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} BookMyCab Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
