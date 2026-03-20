import { HeadphonesIcon, ShieldCheck, IndianRupee, Snowflake } from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";

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

export function Features() {
  return (
    <AnimatedSection className="bg-secondary text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Why Choose BookMyCab</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            The Best Choice for Your Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-6">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-primary">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
