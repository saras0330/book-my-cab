import { Users, Briefcase } from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";

const fleet = [
  {
    name: "Sedan",
    examples: "Swift Dzire, Etios, Amaze",
    passengers: 4,
    luggage: 2,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800", // white sedan side view
  },
  {
    name: "SUV",
    examples: "Innova Crysta, Ertiga, Xylo",
    passengers: 6,
    luggage: 4,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800", // suv driving
  },
  {
    name: "Luxury Sedan",
    examples: "Camry, Honda City, Verna",
    passengers: 4,
    luggage: 3,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800", // luxury car parked
  },
  {
    name: "Tempo Traveller",
    examples: "Force Traveller 12-16 Seater",
    passengers: 12,
    luggage: 8,
    image: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?auto=format&fit=crop&q=80&w=800", // van
  }
];

export function Fleet() {
  return (
    <AnimatedSection id="fleet" className="bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-lg text-muted-foreground">
            From comfortable hatchbacks to spacious tempo travellers, choose the perfect vehicle for your group size and luggage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((car, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-1">{car.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 h-10">{car.examples}</p>
                
                <div className="flex items-center gap-4 mb-6 mt-auto">
                  <div className="flex items-center gap-1.5 text-secondary font-medium bg-muted px-3 py-1.5 rounded-lg text-sm">
                    <Users className="w-4 h-4 text-primary" /> {car.passengers}
                  </div>
                  <div className="flex items-center gap-1.5 text-secondary font-medium bg-muted px-3 py-1.5 rounded-lg text-sm">
                    <Briefcase className="w-4 h-4 text-primary" /> {car.luggage}
                  </div>
                </div>

                <button className="w-full py-3 rounded-xl border-2 border-primary text-secondary font-bold hover:bg-primary transition-colors">
                  Select Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
