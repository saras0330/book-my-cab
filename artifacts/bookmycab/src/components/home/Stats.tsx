import { AnimatedSection } from "../AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Cities Covered" },
  { value: 30, suffix: "+", label: "Verified Drivers" },
  { value: 50, suffix: "K+", label: "Trips Completed" },
  { value: 28, suffix: "", label: "States Presence" },
];

function Counter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(from + (to - from) * easeProgress);
      
      if (nodeRef.current) {
        nodeRef.current.textContent = current.toString();
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{from}</span>;
}

export function Stats() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/80 z-0 border-y border-white/5" />
      {/* Map overlay */}
      <div className="absolute inset-0 opacity-5 z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center px-4 group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary mb-2 glow-primary group-hover:scale-110 transition-transform duration-300">
                <Counter from={0} to={stat.value} duration={2} />
                {stat.suffix}
              </div>
              <div className="text-white/60 font-medium text-sm md:text-base uppercase tracking-wider group-hover:text-white/90 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
