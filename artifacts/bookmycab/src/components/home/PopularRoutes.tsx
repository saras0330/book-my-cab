import { ArrowRight, MapPin } from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";

const routes = [
  { from: "Delhi", to: "Agra", price: "2,499", km: "233 km" },
  { from: "Mumbai", to: "Pune", price: "1,999", km: "148 km" },
  { from: "Bangalore", to: "Mysore", price: "2,199", km: "144 km" },
  { from: "Chennai", to: "Pondicherry", price: "2,899", km: "162 km" },
  { from: "Delhi", to: "Jaipur", price: "3,499", km: "281 km" },
  { from: "Hyderabad", to: "Vijayawada", price: "3,999", km: "275 km" },
  { from: "Kolkata", to: "Digha", price: "2,599", km: "187 km" },
  { from: "Ahmedabad", to: "Surat", price: "2,299", km: "265 km" },
  { from: "Ahmedabad", to: "Vadodara", price: "1,799", km: "113 km" },
  { from: "Ahmedabad", to: "Rajkot", price: "2,199", km: "216 km" },
  { from: "Vadodara", to: "Surat", price: "1,699", km: "154 km" },
  { from: "Jaipur", to: "Jodhpur", price: "3,199", km: "342 km" },
  { from: "Pune", to: "Goa", price: "4,999", km: "456 km" },
  { from: "Chandigarh", to: "Manali", price: "4,499", km: "310 km" },
  { from: "Lucknow", to: "Varanasi", price: "3,299", km: "320 km" },
  { from: "Delhi", to: "Chandigarh", price: "2,999", km: "248 km" },
  { from: "Delhi", to: "Haridwar", price: "2,799", km: "214 km" },
  { from: "Delhi", to: "Dehradun", price: "3,199", km: "280 km" },
  { from: "Mumbai", to: "Nashik", price: "2,499", km: "167 km" },
  { from: "Mumbai", to: "Shirdi", price: "3,299", km: "241 km" },
  { from: "Mumbai", to: "Aurangabad", price: "4,299", km: "335 km" },
  { from: "Bangalore", to: "Chennai", price: "4,599", km: "346 km" },
  { from: "Bangalore", to: "Hyderabad", price: "4,999", km: "570 km" },
  { from: "Bangalore", to: "Coorg", price: "3,499", km: "257 km" },
  { from: "Chennai", to: "Bangalore", price: "4,599", km: "346 km" },
  { from: "Chennai", to: "Madurai", price: "4,199", km: "460 km" },
  { from: "Hyderabad", to: "Bangalore", price: "4,999", km: "570 km" },
  { from: "Jaipur", to: "Agra", price: "2,999", km: "235 km" },
  { from: "Agra", to: "Mathura", price: "1,299", km: "60 km" },
  { from: "Varanasi", to: "Prayagraj", price: "1,799", km: "125 km" },
  { from: "Kolkata", to: "Siliguri", price: "5,499", km: "595 km" },
  { from: "Indore", to: "Bhopal", price: "1,999", km: "192 km" },
  { from: "Bhopal", to: "Jabalpur", price: "2,799", km: "296 km" },
  { from: "Nagpur", to: "Nashik", price: "3,999", km: "480 km" },
  { from: "Pune", to: "Mumbai", price: "1,999", km: "148 km" },
  { from: "Surat", to: "Vadodara", price: "1,699", km: "154 km" },
  { from: "Rajkot", to: "Dwarka", price: "2,499", km: "245 km" },
  { from: "Amritsar", to: "Chandigarh", price: "2,299", km: "228 km" },
  { from: "Shimla", to: "Manali", price: "3,999", km: "260 km" },
  { from: "Jammu", to: "Srinagar", price: "5,499", km: "300 km" },
  { from: "Kochi", to: "Munnar", price: "2,999", km: "130 km" },
  { from: "Kochi", to: "Thiruvananthapuram", price: "3,799", km: "205 km" },
  { from: "Coimbatore", to: "Ooty", price: "1,999", km: "86 km" },
  { from: "Visakhapatnam", to: "Araku", price: "2,499", km: "112 km" },
  { from: "Guwahati", to: "Shillong", price: "2,199", km: "100 km" },
];

const popularCities = [
  "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad",
  "Ahmedabad", "Pune", "Jaipur", "Lucknow", "Surat", "Vadodara",
  "Indore", "Bhopal", "Nagpur", "Kochi", "Coimbatore", "Amritsar",
  "Chandigarh", "Shimla", "Manali", "Varanasi", "Agra", "Goa",
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
              Book cabs on India's most traveled routes at the best prices. We operate across all 28 states and 500+ cities.
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
              className="flex flex-col p-4 rounded-2xl border border-border bg-white hover:border-primary hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="font-semibold text-secondary">{route.from}</div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                <div className="font-semibold text-secondary">{route.to}</div>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-muted-foreground">{route.km}</span>
                <span className="text-sm font-bold text-primary">₹{route.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
