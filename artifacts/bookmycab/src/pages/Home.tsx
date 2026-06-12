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
import { FloatingCTA } from "@/components/FloatingCTA";
import { useRef, useState } from "react";

const reviews = [
  { text: "Booked a one-way trip from Ahmedabad to Dwarka. The driver arrived on time, car was spotless, and the drive was very comfortable. Will use again!", name: "Rahul S.", location: "Ahmedabad" },
  { text: "Fantastic service for our Rann of Kutch trip! The SUV was spacious and the driver knew all the scenic stops along the way. Highly recommended.", name: "Priya M.", location: "Vadodara" },
  { text: "Used BookMyCab for an Ahmedabad to Mumbai corporate trip. Smooth booking, clean car, professional driver. Perfect for business travel.", name: "Vikram D.", location: "Surat" },
  { text: "Visited Somnath temple from Ahmedabad — the cab was perfectly on time and the driver was very courteous. Great experience!", name: "Meera P.", location: "Ahmedabad" },
  { text: "Went to Kevadiya for the Statue of Unity. The drive was smooth and the cab was comfortable. BookMyCab made the trip memorable.", name: "Karan J.", location: "Rajkot" },
];

export default function Home() {
const handleSearch = async (data: Record<string, string>) => {
  try {
    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log("Booking success:", result);
  } catch (error) {
    console.error("Booking failed:", error);
  }
};

  const ref = useRef(null);
  const [activeReview, setActiveReview] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <Navbar />

      {/* HERO */}
      <section
        ref={ref}
        className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center min-h-[90vh]"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-10" />
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            className="w-full h-full object-cover opacity-45"
          />

        </motion.div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">

          {/* TOP BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/90 text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Serving 500+ Cities Across India
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight mb-6"
          >
            Travel Anywhere <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-accent">
              Across India
            </span>
          </motion.h1>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
          >
            India's most trusted intercity cab service. One way trips, round trips,
            and local rentals with verified drivers and no hidden costs.
          </motion.p>

          <div className="mt-10">
            <BookingWidget handleSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <div className="relative z-10">
        <Services />
        <Features />
        <PopularRoutes />
        <Fleet />
        <Steps />
        <Stats />

        {/* TESTIMONIALS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                What Our Riders Say
              </h2>
              <p className="text-white/60">
                Trusted by travelers across India.
              </p>
            </div>

            <div className="hidden md:grid grid-cols-3 gap-8">
              {reviews.slice(0, 3).map((review, i) => (
                <div key={i} className="p-8 rounded-3xl glass">
                  <p className="text-white/80 italic mb-6">
                    "{review.text}"
                  </p>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-white/50 text-sm">{review.location}</p>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="md:hidden">
              <div className="p-8 rounded-3xl glass">
                <p className="text-white/80 italic mb-6">
                  "{reviews[activeReview].text}"
                </p>
                <h4 className="text-white font-bold">
                  {reviews[activeReview].name}
                </h4>
                <p className="text-white/50 text-sm">
                  {reviews[activeReview].location}
                </p>
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </div>

      <FloatingCTA />
    </div>
  );
}
