import { MapPin, RefreshCcw, Plane, Briefcase, Map, Car } from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";

const services = [
  {
    title: "One Way Cab",
    description: "Travel from one city to another and pay only for one direction. Perfect for intercity drops.",
    icon: MapPin,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Round Trip",
    description: "Return journey included with better per-km rates for back and forth travel.",
    icon: RefreshCcw,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Airport Transfer",
    description: "Punctual pickup and drop-off to all major airports across India. Never miss a flight.",
    icon: Plane,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Corporate Travel",
    description: "Dedicated cab solutions for businesses with GST billing and monthly post-paid options.",
    icon: Briefcase,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Outstation Tour",
    description: "Multi-day long distance travel packages between cities and states for holidays.",
    icon: Map,
    color: "bg-rose-50 text-rose-600",
  },
  {
    title: "Local Rental",
    description: "Hourly car rental packages for local commuting, shopping, and meetings within the city.",
    icon: Car,
    color: "bg-primary/10 text-secondary",
  }
];

export function Services() {
  return (
    <AnimatedSection id="services" className="bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Complete Travel Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you need a quick drop to the airport or a multi-day outstation trip, we have the perfect ride for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-3xl bg-white border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
