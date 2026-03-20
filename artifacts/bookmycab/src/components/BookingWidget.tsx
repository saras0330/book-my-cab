import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Navigation, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function BookingWidget() {
  const [tripType, setTripType] = useState<'one-way' | 'round-trip' | 'local'>('one-way');
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-4xl mx-auto mt-8 relative z-10"
    >
      <div className="glass rounded-3xl p-2 sm:p-4 border-t border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        
        {/* Trip Type Tabs */}
        <div className="flex items-center p-2 mb-4 gap-2 bg-white/5 rounded-2xl w-fit border border-white/10 backdrop-blur-sm">
          {(['one-way', 'round-trip', 'local'] as const).map((type) => (
            <motion.button
              key={type}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTripType(type)}
              className={cn(
                "relative px-4 sm:px-6 py-2.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 capitalize overflow-hidden",
                tripType === type 
                  ? "text-primary-foreground shadow-[0_0_15px_rgba(255,183,0,0.3)]" 
                  : "text-white/60 hover:text-white hover:bg-white/10"
              )}
            >
              {tripType === type && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary z-0"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{type.replace('-', ' ')}</span>
            </motion.button>
          ))}
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 p-2 sm:p-4 bg-background/40 rounded-2xl border border-white/5 backdrop-blur-md">
          
          {/* Pick Up */}
          <div className="md:col-span-3 relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary group-focus-within:glow-primary transition-all">
              <MapPin className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              placeholder="Pick up city" 
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(255,183,0,0.2)] outline-none transition-all font-medium text-white placeholder:text-white/40"
            />
          </div>

          {/* Drop Off - Only show if not local */}
          {tripType !== 'local' && (
            <div className="md:col-span-3 relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary group-focus-within:glow-primary transition-all">
                <Navigation className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Drop off city" 
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(255,183,0,0.2)] outline-none transition-all font-medium text-white placeholder:text-white/40"
              />
            </div>
          )}

          {/* Local Package - Show only for local */}
          {tripType === 'local' && (
            <div className="md:col-span-3 relative group">
              <select className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(255,183,0,0.2)] outline-none transition-all font-medium text-white appearance-none cursor-pointer">
                <option value="" disabled selected className="bg-background text-white">Select Package</option>
                <option value="4h" className="bg-background text-white">4 Hrs / 40 Kms</option>
                <option value="8h" className="bg-background text-white">8 Hrs / 80 Kms</option>
                <option value="12h" className="bg-background text-white">12 Hrs / 120 Kms</option>
              </select>
            </div>
          )}

          {/* Date */}
          <div className={cn("relative group", tripType === 'round-trip' ? "md:col-span-2" : "md:col-span-3")}>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary group-focus-within:glow-primary transition-all">
              <Calendar className="w-5 h-5" />
            </div>
            <input 
              type="date" 
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(255,183,0,0.2)] outline-none transition-all font-medium text-white [color-scheme:dark]"
            />
          </div>

          {/* Return Date - Only for round trip */}
          {tripType === 'round-trip' && (
            <div className="md:col-span-2 relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary group-focus-within:glow-primary transition-all">
                <Calendar className="w-5 h-5" />
              </div>
              <input 
                type="date" 
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(255,183,0,0.2)] outline-none transition-all font-medium text-white [color-scheme:dark]"
              />
            </div>
          )}

          {/* Passengers */}
          <div className={cn("relative group", tripType === 'round-trip' ? "md:col-span-2" : "md:col-span-1")}>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary group-focus-within:glow-primary transition-all">
              <Users className="w-5 h-5" />
            </div>
            <select className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(255,183,0,0.2)] outline-none transition-all font-medium text-white appearance-none cursor-pointer">
              <option className="bg-background text-white">1-4</option>
              <option className="bg-background text-white">5-7</option>
              <option className="bg-background text-white">8+</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 relative overflow-hidden rounded-2xl group">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full h-full min-h-[56px] rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 btn-glow transition-all flex items-center justify-center gap-2 relative z-10"
            >
              Search
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20 pointer-events-none" />
          </div>

        </div>
      </div>
    </motion.div>
  );
}
