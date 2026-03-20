import { MapPin, RefreshCcw, Plane, Briefcase, Map, Car } from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";
import { motion } from "framer-motion";

const services = [
  {
    title: "One Way Cab",
    description: "Travel from one city to another and pay only for one direction. Perfect for intercity drops.",
    icon: MapPin,
  },
  {
    title: "Round Trip",
    description: "Return journey included with better per-km rates for back and forth travel.",
    icon: RefreshCcw,
  },
  {
    title: "Airport Transfer",
    description: "Punctual pickup and drop-off to all major airports across India. Never miss a flight.",
    icon: Plane,
  },
  {
    title: "Corporate Travel",
    description: "Dedicated cab solutions for businesses with GST billing and monthly post-paid options.",
    icon: Briefcase,
  },
  {
    title: "Outstation Tour",
    description: "Multi-day long distance travel packages between cities and states for holidays.",
    icon: Map,
  },
  {
    title: "Local Rental",
    description: "Hourly car rental packages for local commuting, shopping, and meetings within the city.",
    icon: Car,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <AnimatedSection id="services" className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
            Complete Travel Solutions
          </h2>
          <p className="text-lg text-white/60">
            Whether you need a quick drop to the airport or a multi-day outstation trip, we have the perfect ride for you.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-8 rounded-3xl glass border border-white/5 hover:border-primary/50 transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(255,183,0,0.3)] transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary transition-colors glow-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
