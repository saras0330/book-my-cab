import { AnimatedSection } from "../AnimatedSection";

export function Steps() {
  const steps = [
    {
      num: "01",
      title: "Enter Trip Details",
      desc: "Choose one-way or round trip. Enter your pickup, drop locations, date and time."
    },
    {
      num: "02",
      title: "Select Your Cab",
      desc: "Browse our fleet and choose a vehicle that fits your comfort and budget needs."
    },
    {
      num: "03",
      title: "Enjoy the Ride",
      desc: "Receive driver details instantly. Relax and enjoy a safe journey to your destination."
    }
  ];

  return (
    <AnimatedSection>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              How BookMyCab Works
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Booking a reliable intercity cab has never been easier. Just three simple steps to start your journey.
            </p>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 relative">
                  {idx !== steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-[-32px] w-0.5 bg-border"></div>
                  )}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex-shrink-0 flex items-center justify-center font-bold text-secondary text-lg shadow-lg shadow-primary/20">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-[40px] transform rotate-3 scale-105"></div>
            {/* person using phone app in a car */}
            <img 
              src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1000" 
              alt="Booking a cab on mobile" 
              className="relative z-10 rounded-[40px] shadow-2xl object-cover h-[600px] w-full"
            />
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-border/50 max-w-[200px] animate-pulse" style={{ animationDuration: '4s' }}>
              <div className="flex gap-2 text-primary mb-2">
                {[1,2,3,4,5].map(i => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="font-bold text-sm">Top Rated App</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
