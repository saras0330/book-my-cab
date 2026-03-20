import { Users, Briefcase } from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";
import { motion } from "framer-motion";

const fleet = [
  {
    name: "Sedan",
    examples: "Swift Dzire, Etios, Amaze",
    passengers: 4,
    luggage: 2,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800", // white sedan side view
  },
  {
    name: "SUV",
    examples: "Innova Crysta, Ertiga, Xylo",
    passengers: 6,
    luggage: 4,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800", // suv driving
  },
  {
    name: "Luxury Sedan",
    examples: "Camry, Honda City, Verna",
    passengers: 4,
    luggage: 3,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800", // luxury car parked
  },
  {
    name: "Tempo Traveller",
    examples: "Force Traveller 12-16 Seater",
    passengers: 12,
    luggage: 8,
    image: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?auto=format&fit=crop&q=80&w=800", // van
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Fleet() {
  return (
    <AnimatedSection id="fleet" className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
            Our Premium Fleet
          </h2>
          <p className="text-lg text-white/60">
            From comfortable hatchbacks to spacious tempo travellers, choose the perfect vehicle for your group size and luggage.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {fleet.map((car, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(255,183,0,0.15)] transition-all group flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
              </div>
              <div className="p-6 flex flex-col flex-grow relative z-10 -mt-6">
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-primary transition-colors">{car.name}</h3>
                <p className="text-sm text-white/50 mb-4 h-10">{car.examples}</p>
                
                <div className="flex items-center gap-4 mb-6 mt-auto">
                  <div className="flex items-center gap-1.5 text-white/80 font-medium bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-sm group-hover:border-primary/30 transition-colors">
                    <Users className="w-4 h-4 text-primary glow-primary" /> {car.passengers}
                  </div>
                  <div className="flex items-center gap-1.5 text-white/80 font-medium bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-sm group-hover:border-primary/30 transition-colors">
                    <Briefcase className="w-4 h-4 text-primary glow-primary" /> {car.luggage}
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_15px_rgba(255,183,0,0.4)] transition-all duration-300"
                >
                  Select Vehicle
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
