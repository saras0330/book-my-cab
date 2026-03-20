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
  { from: "Surat", to: "Vadodara", km: "154 km" },
];

const popularCities = [
  "Mumbai", "Ahmedabad", "Surat", "Vadodara",
  "Rajkot", "Jamnagar", "Dwarka", "Udaipur",
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
              className="flex items-center justify-between p-4 rounded-2xl glass border border-white/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(255,183,0,0.2)] transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className="font-semibold text-white/90 truncate group-hover:text-white transition-colors">{route.from}</span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-4 h-4 text-primary group-hover:glow-primary transition-colors flex-shrink-0" />
                </motion.div>
                <span className="font-semibold text-white/90 truncate group-hover:text-white transition-colors">{route.to}</span>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-white/60 ml-2 flex-shrink-0 border border-white/5 group-hover:border-primary/30 group-hover:text-primary transition-colors">{route.km}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
