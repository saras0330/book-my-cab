import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";

const routes = [
  { from: "Delhi", to: "Agra", price: "2,499" },
  { from: "Mumbai", to: "Pune", price: "1,999" },
  { from: "Bangalore", to: "Mysore", price: "2,199" },
  { from: "Chennai", to: "Pondicherry", price: "2,899" },
  { from: "Delhi", to: "Jaipur", price: "3,499" },
  { from: "Hyderabad", to: "Vijayawada", price: "3,999" },
  { from: "Kolkata", to: "Digha", price: "2,599" },
  { from: "Ahmedabad", to: "Surat", price: "2,299" },
  { from: "Jaipur", to: "Jodhpur", price: "3,199" },
  { from: "Pune", to: "Goa", price: "4,999" },
  { from: "Chandigarh", to: "Manali", price: "4,499" },
  { from: "Lucknow", to: "Varanasi", price: "3,299" },
];

export function PopularRoutes() {
  return (
    <AnimatedSection id="routes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Popular Intercity Routes
            </h2>
            <p className="text-lg text-muted-foreground">
              Book cabs on India's most traveled routes at the best prices. We operate across all 28 states.
            </p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all whitespace-nowrap">
            View All Routes <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {routes.map((route, idx) => (
            <div 
              key={idx}
              className="flex items-center justify-between p-4 rounded-2xl border border-border bg-white hover:border-primary hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="font-semibold text-secondary">{route.from}</div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="font-semibold text-secondary">{route.to}</div>
              </div>
              <div className="text-sm font-bold text-muted-foreground group-hover:text-secondary">
                ₹{route.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
