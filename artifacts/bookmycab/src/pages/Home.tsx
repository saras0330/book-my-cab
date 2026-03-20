import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BookingWidget } from "@/components/BookingWidget";
import { Services } from "@/components/home/Services";
import { Features } from "@/components/home/Features";
import { PopularRoutes } from "@/components/home/PopularRoutes";
import { Fleet } from "@/components/home/Fleet";
import { Steps } from "@/components/home/Steps";
import { Stats } from "@/components/home/Stats";
import { Footer } from "@/components/layout/Footer";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <Navbar />

      {/* HERO SECTION */}
      <section ref={ref} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Map Network Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-white/90 text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(255,183,0,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Serving 500+ Cities Across India
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight mb-6 tracking-tight drop-shadow-lg"
            >
              Travel Anywhere <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-accent drop-shadow-[0_0_20px_rgba(255,183,0,0.4)]">Across India</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium"
            >
              India's most trusted intercity cab service. One way trips, round trips, and local rentals with verified drivers and no hidden costs.
            </motion.p>
          </div>

          <BookingWidget />
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="relative z-10">
        <Services />
        <Features />
        <PopularRoutes />
        <Fleet />
        <Steps />
        <Stats />
        
        {/* TESTIMONIALS */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-secondary/50 backdrop-blur-3xl z-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">What Our Riders Say</h2>
              <p className="text-white/60">Trusted by over a million travelers across the country.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { text: "Booked a one-way trip from Delhi to Jaipur. The driver arrived 15 mins early, car was spotless, and the driving was very safe. Highly recommend!", name: "Rahul S.", location: "Delhi" },
                { text: "We used the outstation service for a 4-day family trip. The SUV was spacious and the driver knew all the good stops along the way.", name: "Priya M.", location: "Bangalore" },
                { text: "Corporate billing is super easy. My team travels between Mumbai and Pune weekly and BookMyCab has been incredibly reliable.", name: "Vikram D.", location: "Mumbai" }
              ].map((review, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="p-8 rounded-3xl glass border border-white/10 group"
                >
                  <div className="flex text-primary mb-4 glow-primary">
                    {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <p className="text-white/80 italic mb-6">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold shadow-[0_0_10px_rgba(255,183,0,0.2)]">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{review.name}</h4>
                      <p className="text-xs text-white/50">{review.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
