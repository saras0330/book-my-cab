import { ArrowRight, MapPin } from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";

const routes = [
  { from: "Ahmedabad", to: "Vadodara", km: "113 km" },
  { from: "Vadodara", to: "Ahmedabad", km: "113 km" },
  { from: "Ahmedabad", to: "Mumbai", km: "524 km" },
  { from: "Mumbai", to: "Ahmedabad", km: "524 km" },
  { from: "Ahmedabad", to: "Udaipur", km: "262 km" },
  { from: "Udaipur", to: "Ahmedabad", km: "262 km" },
  { from: "Ahmedabad", to: "Jamnagar", km: "316 km" },
  { from: "Jamnagar", to: "Ahmedabad", km: "316 km" },
  { from: "Ahmedabad", to: "Dwarka", km: "448 km" },
  { from: "Dwarka", to: "Ahmedabad", km: "448 km" },
  { from: "Ahmedabad", to: "Surat", km: "265 km" },
  { from: "Surat", to: "Ahmedabad", km: "265 km" },
  { from: "Ahmedabad", to: "Rajkot", km: "216 km" },
  { from: "Rajkot", to: "Ahmedabad", km: "216 km" },
  { from: "Vadodara", to: "Surat", km: "154 km" },
  { from: "Surat", to: "Vadodara", km: "154 km" },
];

const popularCities = [
  "Mumbai", "Ahmedabad", "Surat", "Vadodara",
  "Rajkot", "Jamnagar", "Dwarka", "Udaipur",
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
              Book cabs on India's most traveled routes. We operate across all 28 states and 500+ cities.
            </p>
          </div>
        </div>

        {/* Popular Cities */}
        <div className="mb-10">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" /> Famous Cities We Serve
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularCities.map((city, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full border border-border bg-white text-sm font-medium hover:border-primary hover:text-primary hover:bg-yellow-50 transition-all cursor-pointer"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Routes Grid */}
        <h3 className="text-lg font-bold mb-4">Frequently Booked Routes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {routes.map((route, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 rounded-2xl border border-border bg-white hover:border-primary hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className="font-semibold text-secondary truncate">{route.from}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                <span className="font-semibold text-secondary truncate">{route.to}</span>
              </div>
              <span className="text-xs text-muted-foreground ml-2 flex-shrink-0">{route.km}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
