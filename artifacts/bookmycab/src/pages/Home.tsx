import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BookingWidget } from "@/components/BookingWidget";
import { Services } from "@/components/home/Services";
import { Features } from "@/components/home/Features";
import { PopularRoutes } from "@/components/home/PopularRoutes";
import { Fleet } from "@/components/home/Fleet";
import { Steps } from "@/components/home/Steps";
import { Stats } from "@/components/home/Stats";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Map Network Background" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/70 to-background/95" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-semibold mb-6"
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
              <span className="text-primary drop-shadow-[0_0_15px_rgba(255,204,0,0.5)]">Across India</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium"
            >
              India's most trusted intercity cab service. One way trips, round trips, and local rentals with verified drivers and no hidden costs.
            </motion.p>
          </div>

          <BookingWidget />
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <Services />
      <Features />
      <PopularRoutes />
      <Fleet />
      <Steps />
      <Stats />
      
      {/* TESTIMONIALS (Brief section in-line) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Our Riders Say</h2>
            <p className="text-muted-foreground">Trusted by over a million travelers across the country.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Booked a one-way trip from Delhi to Jaipur. The driver arrived 15 mins early, car was spotless, and the driving was very safe. Highly recommend!", name: "Rahul S.", location: "Delhi" },
              { text: "We used the outstation service for a 4-day family trip. The SUV was spacious and the driver knew all the good stops along the way.", name: "Priya M.", location: "Bangalore" },
              { text: "Corporate billing is super easy. My team travels between Mumbai and Pune weekly and BookMyCab has been incredibly reliable.", name: "Vikram D.", location: "Mumbai" }
            ].map((review, i) => (
              <div key={i} className="p-8 rounded-3xl bg-muted/50 border border-border">
                <div className="flex text-primary mb-4">
                  {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                <p className="text-secondary/80 italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
