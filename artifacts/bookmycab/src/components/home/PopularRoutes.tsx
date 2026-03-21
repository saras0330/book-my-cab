import { ArrowRight, MapPin } from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";
import { motion } from "framer-motion";

const routes = [
  { from: "Ahmedabad", to: "Vadodara", km: "113 km" },
  { from: "Vadodara", to: "Ahmedabad", km: "113 km" },
  { from: "Ahmedabad", to: "Mumbai", km: "524 km" },
  { from: "Mumbai", to: "Ahmedabad", km: "524 km" },
  { from: "Ahmedabad", to: "Udaipur", km: "262 km" },
  { from: "Udaipur", to: "Ahmedabad", km: "262 km" },
  { from: "Ahmedabad", to: "Jamnagar", km: "316 km" },
  { from: "Jamnagar", to: "Ahmedabad", km: "316 km" },
  { from: "Ahmedabad", to: "Dwarka", km: "448 km" },
  { from: "Dwarka", to: "Ahmedabad", km: "448 km" },
  { from: "Ahmedabad", to: "Surat", km: "265 km" },
  { from: "Surat", to: "Ahmedabad", km: "265 km" },
  { from: "Ahmedabad", to: "Rajkot", km: "216 km" },
  { from: "Rajkot", to: "Ahmedabad", km: "216 km" },
  { from: "Vadodara", to: "Surat", km: "154 km" },
  { from: "Vadodara", to: "Mumbai", km: "400 km" },
  { from: "Mumbai", to: "Vadodara", km: "400 km" },
  { from: "Ahmedabad", to: "Somnath", km: "408 km" },
  { from: "Somnath", to: "Ahmedabad", km: "408 km" },
  { from: "Ahmedabad", to: "Kevadiya", km: "195 km" },
  { from: "Kevadiya", to: "Ahmedabad", km: "195 km" },
  { from: "Ahmedabad", to: "Rann of Kutch", km: "400 km" },
  { from: "Rann of Kutch", to: "Ahmedabad", km: "400 km" },
];

const popularCities = [
  "Mumbai", "Ahmedabad", "Surat", "Vadodara",
  "Rajkot", "Jamnagar", "Dwarka", "Udaipur", "Somnath", "Kevadiya", "Rann of Kutch",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

export function PopularRoutes() {
  return (
    <AnimatedSection id="routes" className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Popular Intercity Routes
            </h2>
            <p className="text-lg text-white/60">
              Book cabs on India's most traveled routes. We operate across all 28 states and 500+ cities.
            </p>
          </div>
        </div>

        {/* Featured Route - Ahmedabad to Dwarka */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative overflow-hidden rounded-3xl border border-white/10 group cursor-pointer"
          whileHover={{ scale: 1.01 }}
        >
          <img
            src="/images/dwarka.avif"
            alt="Dwarka"
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary border border-primary/40 rounded-full px-3 py-1 bg-primary/10 backdrop-blur-sm">
                Featured Route
              </span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-2xl md:text-4xl font-bold text-white">Ahmedabad</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="w-7 h-7 text-primary" />
              </motion.div>
              <span className="text-2xl md:text-4xl font-bold text-primary" style={{ textShadow: "0 0 20px rgba(255,183,0,0.6)" }}>
                Dwarka
              </span>
            </div>
            <p className="text-white/70 text-sm md:text-base max-w-xl">
              The sacred city of Lord Krishna — one of India's most revered pilgrimage destinations. 448 km from Ahmedabad.
            </p>
          </div>
          <div className="absolute top-4 right-4">
            <span className="text-sm font-medium bg-black/50 backdrop-blur-sm border border-white/10 text-white/80 px-4 py-2 rounded-full">
              448 km
            </span>
          </div>
        </motion.div>

        {/* Featured Route - Ahmedabad to Udaipur */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12 relative overflow-hidden rounded-3xl border border-white/10 group cursor-pointer"
          whileHover={{ scale: 1.01 }}
        >
          <img
            src="/images/udaipur.jpg"
            alt="Udaipur"
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary border border-primary/40 rounded-full px-3 py-1 bg-primary/10 backdrop-blur-sm">
                Featured Route
              </span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-2xl md:text-4xl font-bold text-white">Ahmedabad</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="w-7 h-7 text-primary" />
              </motion.div>
              <span className="text-2xl md:text-4xl font-bold text-primary" style={{ textShadow: "0 0 20px rgba(255,183,0,0.6)" }}>
                Udaipur
              </span>
            </div>
            <p className="text-white/70 text-sm md:text-base max-w-xl">
              The City of Lakes — Rajasthan's most romantic destination with stunning palaces and shimmering lakes. 262 km from Ahmedabad.
            </p>
          </div>
          <div className="absolute top-4 right-4">
            <span className="text-sm font-medium bg-black/50 backdrop-blur-sm border border-white/10 text-white/80 px-4 py-2 rounded-full">
              262 km
            </span>
          </div>
        </motion.div>

        {/* Featured Route - Ahmedabad to Mumbai */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 relative overflow-hidden rounded-3xl border border-white/10 group cursor-pointer"
          whileHover={{ scale: 1.01 }}
        >
          <img
            src="/images/mumbai.jpg"
            alt="Mumbai"
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary border border-primary/40 rounded-full px-3 py-1 bg-primary/10 backdrop-blur-sm">
                Featured Route
              </span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-2xl md:text-4xl font-bold text-white">Ahmedabad</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="w-7 h-7 text-primary" />
              </motion.div>
              <span className="text-2xl md:text-4xl font-bold text-primary" style={{ textShadow: "0 0 20px rgba(255,183,0,0.6)" }}>
                Mumbai
              </span>
            </div>
            <p className="text-white/70 text-sm md:text-base max-w-xl">
              India's financial capital and city of dreams — home to Bollywood, the Gateway of India, and iconic landmarks. 524 km from Ahmedabad.
            </p>
          </div>
          <div className="absolute top-4 right-4">
            <span className="text-sm font-medium bg-black/50 backdrop-blur-sm border border-white/10 text-white/80 px-4 py-2 rounded-full">
              524 km
            </span>
          </div>
        </motion.div>

        {/* Featured Route - Ahmedabad to Somnath */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-12 relative overflow-hidden rounded-3xl border border-white/10 group cursor-pointer"
          whileHover={{ scale: 1.01 }}
        >
          <img
            src="/images/somnath.jpg"
            alt="Somnath"
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary border border-primary/40 rounded-full px-3 py-1 bg-primary/10 backdrop-blur-sm">
                Featured Route
              </span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-2xl md:text-4xl font-bold text-white">Ahmedabad</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="w-7 h-7 text-primary" />
              </motion.div>
              <span className="text-2xl md:text-4xl font-bold text-primary" style={{ textShadow: "0 0 20px rgba(255,183,0,0.6)" }}>
                Somnath
              </span>
            </div>
            <p className="text-white/70 text-sm md:text-base max-w-xl">
              One of the 12 Jyotirlingas of Lord Shiva — a divine coastal temple standing majestically by the Arabian Sea. 408 km from Ahmedabad.
            </p>
          </div>
          <div className="absolute top-4 right-4">
            <span className="text-sm font-medium bg-black/50 backdrop-blur-sm border border-white/10 text-white/80 px-4 py-2 rounded-full">
              408 km
            </span>
          </div>
        </motion.div>

        {/* Featured Route - Ahmedabad to Kevadiya */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 relative overflow-hidden rounded-3xl border border-white/10 group cursor-pointer"
          whileHover={{ scale: 1.01 }}
        >
          <img
            src="/images/kevadiya.jpg"
            alt="Kevadiya - Statue of Unity"
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary border border-primary/40 rounded-full px-3 py-1 bg-primary/10 backdrop-blur-sm">
                Featured Route
              </span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-2xl md:text-4xl font-bold text-white">Ahmedabad</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="w-7 h-7 text-primary" />
              </motion.div>
              <span className="text-2xl md:text-4xl font-bold text-primary" style={{ textShadow: "0 0 20px rgba(255,183,0,0.6)" }}>
                Kevadiya
              </span>
            </div>
            <p className="text-white/70 text-sm md:text-base max-w-xl">
              Home of the world's tallest statue — the iconic Statue of Unity, a tribute to Sardar Vallabhbhai Patel. 195 km from Ahmedabad.
            </p>
          </div>
          <div className="absolute top-4 right-4">
            <span className="text-sm font-medium bg-black/50 backdrop-blur-sm border border-white/10 text-white/80 px-4 py-2 rounded-full">
              195 km
            </span>
          </div>
        </motion.div>

        {/* Featured Route - Ahmedabad to Rann of Kutch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mb-12 relative overflow-hidden rounded-3xl border border-white/10 group cursor-pointer"
          whileHover={{ scale: 1.01 }}
        >
          <img
            src="/images/rann-of-kutch.jpg"
            alt="Rann of Kutch"
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary border border-primary/40 rounded-full px-3 py-1 bg-primary/10 backdrop-blur-sm">
                Featured Route
              </span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-2xl md:text-4xl font-bold text-white">Ahmedabad</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="w-7 h-7 text-primary" />
              </motion.div>
              <span className="text-2xl md:text-4xl font-bold text-primary" style={{ textShadow: "0 0 20px rgba(255,183,0,0.6)" }}>
                Rann of Kutch
              </span>
            </div>
            <p className="text-white/70 text-sm md:text-base max-w-xl">
              The world's largest salt desert — a breathtaking white expanse that transforms into a magical moonscape at night. 400 km from Ahmedabad.
            </p>
          </div>
          <div className="absolute top-4 right-4">
            <span className="text-sm font-medium bg-black/50 backdrop-blur-sm border border-white/10 text-white/80 px-4 py-2 rounded-full">
              400 km
            </span>
          </div>
        </motion.div>

        {/* Popular Cities */}
        <div className="mb-10">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
            <MapPin className="w-5 h-5 text-primary glow-primary" /> Famous Cities We Serve
          </h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {popularCities.map((city, idx) => (
              <motion.span
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/90 hover:border-primary/80 hover:text-primary hover:shadow-[0_0_15px_rgba(255,183,0,0.4)] backdrop-blur-sm transition-all cursor-pointer"
              >
                {city}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Routes Grid */}
        <h3 className="text-lg font-bold mb-4 text-white">Frequently Booked Routes</h3>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {routes.map((route, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col p-4 rounded-2xl glass border border-white/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(255,183,0,0.2)] transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className="font-semibold text-white/90 truncate group-hover:text-white transition-colors">{route.from}</span>
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-semibold text-white/90 truncate group-hover:text-white transition-colors">{route.to}</span>
              </div>
              <span className="text-xs text-white/40 mt-1">{route.km}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
