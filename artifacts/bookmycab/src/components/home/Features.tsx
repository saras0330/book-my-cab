import { HeadphonesIcon, ShieldCheck, IndianRupee, Snowflake } from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";
import { motion } from "framer-motion";

const features = [
  {
    title: "24/7 Support",
    description: "Our dedicated customer service team is always available to help you.",
    icon: HeadphonesIcon,
  },
  {
    title: "Safe Drivers",
    description: "Verified, experienced, and polite chauffeurs for a secure journey.",
    icon: ShieldCheck,
  },
  {
    title: "No Hidden Costs",
    description: "Transparent billing with zero surprise charges at the end of trip.",
    icon: IndianRupee,
  },
  {
    title: "Premium AC Cabs",
    description: "Well-maintained, sanitized, and air-conditioned vehicles.",
    icon: Snowflake,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.4 } }
};

export function Features() {
  return (
    <AnimatedSection className="bg-secondary/40 text-white relative overflow-hidden backdrop-blur-sm border-y border-white/5">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary glow-primary font-bold tracking-wider uppercase text-sm mb-2 block">Why Choose BookMyCab</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            The Best Choice for Your Journey
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center p-6 glass rounded-3xl group border-white/5 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(255,183,0,0.15)] transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-primary group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors"
                >
                  <Icon className="w-10 h-10 group-hover:glow-primary transition-all duration-300" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white/90 group-hover:text-white transition-colors">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
