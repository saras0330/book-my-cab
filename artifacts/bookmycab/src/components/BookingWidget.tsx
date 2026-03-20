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
      <div className="bg-white rounded-3xl shadow-2xl p-2 sm:p-4 border border-border/50">
        
        {/* Trip Type Tabs */}
        <div className="flex items-center p-2 mb-4 gap-2 bg-muted/50 rounded-2xl w-fit">
          {(['one-way', 'round-trip', 'local'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setTripType(type)}
              className={cn(
                "px-4 sm:px-6 py-2.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 capitalize",
                tripType === type 
                  ? "bg-white text-secondary shadow-md" 
                  : "text-muted-foreground hover:text-secondary hover:bg-white/50"
              )}
            >
              {type.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 p-2 sm:p-4">
          
          {/* Pick Up */}
          <div className="md:col-span-3 relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              placeholder="Pick up city" 
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-muted/30 border-2 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary placeholder:text-muted-foreground"
            />
          </div>

          {/* Drop Off - Only show if not local */}
          {tripType !== 'local' && (
            <div className="md:col-span-3 relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                <Navigation className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Drop off city" 
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-muted/30 border-2 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary placeholder:text-muted-foreground"
              />
            </div>
          )}

          {/* Local Package - Show only for local */}
          {tripType === 'local' && (
            <div className="md:col-span-3 relative group">
              <select className="w-full px-4 py-4 rounded-2xl bg-muted/30 border-2 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary appearance-none cursor-pointer">
                <option value="" disabled selected>Select Package</option>
                <option value="4h">4 Hrs / 40 Kms</option>
                <option value="8h">8 Hrs / 80 Kms</option>
                <option value="12h">12 Hrs / 120 Kms</option>
              </select>
            </div>
          )}

          {/* Date */}
          <div className={cn("relative group", tripType === 'round-trip' ? "md:col-span-2" : "md:col-span-3")}>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
              <Calendar className="w-5 h-5" />
            </div>
            <input 
              type="date" 
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-muted/30 border-2 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary"
            />
          </div>

          {/* Return Date - Only for round trip */}
          {tripType === 'round-trip' && (
            <div className="md:col-span-2 relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                <Calendar className="w-5 h-5" />
              </div>
              <input 
                type="date" 
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-muted/30 border-2 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary"
              />
            </div>
          )}

          {/* Passengers */}
          <div className={cn("relative group", tripType === 'round-trip' ? "md:col-span-2" : "md:col-span-1")}>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
              <Users className="w-5 h-5" />
            </div>
            <select className="w-full pl-12 pr-4 py-4 rounded-2xl bg-muted/30 border-2 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary appearance-none cursor-pointer">
              <option>1-4</option>
              <option>5-7</option>
              <option>8+</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button className="w-full h-full min-h-[56px] rounded-2xl bg-primary text-secondary font-bold text-lg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
              Search
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
