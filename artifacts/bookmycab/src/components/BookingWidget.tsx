import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Users, Navigation, ArrowRight, CheckCircle, X, Loader2, Phone, User, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const API_BASE = import.meta.env.BASE_URL?.replace(/\/$/, "").replace(/^\//, "") 
  ? `/${import.meta.env.BASE_URL?.replace(/^\//, "").replace(/\/$/, "")}`
  : "";

async function submitBooking(data: Record<string, string>) {
  const apiUrl = `${window.location.origin}/__proxy/api-server/api/bookings`;
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error || "Booking failed");
  }
  return res.json();
}

interface ConfirmationProps {
  booking: { id: number; name: string; pickupCity: string; dropCity?: string; travelDate: string };
  onClose: () => void;
}

function ConfirmationModal({ booking, onClose }: ConfirmationProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{ type: "spring", bounce: 0.3 }}
          onClick={e => e.stopPropagation()}
          className="relative w-full max-w-md glass rounded-3xl p-8 border border-primary/30 shadow-[0_0_50px_rgba(255,183,0,0.3)]"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center mb-5"
            >
              <CheckCircle className="w-10 h-10 text-green-400" />
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
            <p className="text-white/60 mb-6 text-sm">
              Your booking #{booking.id} has been received. Our team will call you shortly to confirm.
            </p>

            <div className="w-full bg-white/5 rounded-2xl p-4 border border-white/10 text-left space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-white/50">Name</span>
                <span className="text-white font-medium">{booking.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/50">Route</span>
                <span className="text-white font-medium">
                  {booking.pickupCity}{booking.dropCity ? ` → ${booking.dropCity}` : ""}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/50">Travel Date</span>
                <span className="text-white font-medium">{booking.travelDate}</span>
              </div>
            </div>

            <a
              href="tel:+917779012148"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-primary text-black font-bold text-sm hover:bg-primary/90 transition-all"
            >
              <Phone className="w-4 h-4" />
              Call +91 7779012148 for Quick Confirmation
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function BookingWidget() {
  const [tripType, setTripType] = useState<'one-way' | 'round-trip' | 'local'>('one-way');
  const [showContactForm, setShowContactForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<{ id: number; name: string; pickupCity: string; dropCity?: string; travelDate: string } | null>(null);

  const [form, setForm] = useState({
    pickupCity: "", dropCity: "", localPackage: "", travelDate: "", returnDate: "", passengers: "1-4",
    name: "", phone: "", email: "",
  });

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.pickupCity || !form.travelDate) {
      setError("Please fill in pickup city and travel date.");
      return;
    }
    if (tripType !== 'local' && !form.dropCity) {
      setError("Please fill in drop off city.");
      return;
    }
    setError(null);
    setShowContactForm(true);
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      setError("Please provide your name and phone number.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const result = await submitBooking({
        name: form.name,
        phone: form.phone,
        email: form.email,
        tripType,
        pickupCity: form.pickupCity,
        dropCity: form.dropCity,
        localPackage: form.localPackage,
        travelDate: form.travelDate,
        returnDate: form.returnDate,
        passengers: form.passengers,
      });
      setConfirmedBooking(result.booking);
      setShowContactForm(false);
      setForm({ pickupCity: "", dropCity: "", localPackage: "", travelDate: "", returnDate: "", passengers: "1-4", name: "", phone: "", email: "" });
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {confirmedBooking && (
        <ConfirmationModal booking={confirmedBooking} onClose={() => setConfirmedBooking(null)} />
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-4xl mx-auto mt-8 relative z-10"
      >
        <div className="glass rounded-3xl p-2 sm:p-4 border-t border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)]">

          {/* Trip Type Tabs */}
          <div className="flex items-center p-2 mb-4 gap-2 bg-white/5 rounded-2xl w-fit border border-white/10 backdrop-blur-sm">
            {(['one-way', 'round-trip', 'local'] as const).map((type) => (
              <motion.button
                key={type}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setTripType(type); setShowContactForm(false); setError(null); }}
                className={cn(
                  "relative px-4 sm:px-6 py-2.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 capitalize overflow-hidden",
                  tripType === type
                    ? "text-primary-foreground shadow-[0_0_15px_rgba(255,183,0,0.3)]"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                )}
              >
                {tripType === type && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary z-0"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{type.replace('-', ' ')}</span>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {!showContactForm ? (
              <motion.form
                key="search"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSearch}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 p-2 sm:p-4 bg-background/40 rounded-2xl border border-white/5 backdrop-blur-md">

                  {/* Pick Up */}
                  <div className="md:col-span-3 relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-all">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <input
                      type="text" placeholder="Pick up city" value={form.pickupCity} onChange={set("pickupCity")}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(255,183,0,0.2)] outline-none transition-all font-medium text-white placeholder:text-white/40"
                    />
                  </div>

                  {tripType !== 'local' && (
                    <div className="md:col-span-3 relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-all">
                        <Navigation className="w-5 h-5" />
                      </div>
                      <input
                        type="text" placeholder="Drop off city" value={form.dropCity} onChange={set("dropCity")}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(255,183,0,0.2)] outline-none transition-all font-medium text-white placeholder:text-white/40"
                      />
                    </div>
                  )}

                  {tripType === 'local' && (
                    <div className="md:col-span-3 relative group">
                      <select value={form.localPackage} onChange={set("localPackage")}
                        className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary outline-none transition-all font-medium text-white appearance-none cursor-pointer">
                        <option value="" disabled className="bg-background text-white">Select Package</option>
                        <option value="4h" className="bg-background text-white">4 Hrs / 40 Kms</option>
                        <option value="8h" className="bg-background text-white">8 Hrs / 80 Kms</option>
                        <option value="12h" className="bg-background text-white">12 Hrs / 120 Kms</option>
                      </select>
                    </div>
                  )}

                  <div className={cn("relative group", tripType === 'round-trip' ? "md:col-span-2" : "md:col-span-3")}>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-all">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <input
                      type="date" value={form.travelDate} onChange={set("travelDate")}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(255,183,0,0.2)] outline-none transition-all font-medium text-white [color-scheme:dark]"
                    />
                  </div>

                  {tripType === 'round-trip' && (
                    <div className="md:col-span-2 relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-all">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <input
                        type="date" value={form.returnDate} onChange={set("returnDate")}
                        min={form.travelDate || new Date().toISOString().split("T")[0]}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(255,183,0,0.2)] outline-none transition-all font-medium text-white [color-scheme:dark]"
                      />
                    </div>
                  )}

                  <div className={cn("relative group", tripType === 'round-trip' ? "md:col-span-2" : "md:col-span-1")}>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-all">
                      <Users className="w-5 h-5" />
                    </div>
                    <select value={form.passengers} onChange={set("passengers")}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary outline-none transition-all font-medium text-white appearance-none cursor-pointer">
                      <option className="bg-background text-white">1-4</option>
                      <option className="bg-background text-white">5-7</option>
                      <option className="bg-background text-white">8+</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 relative overflow-hidden rounded-2xl group">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full h-full min-h-[56px] rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 btn-glow transition-all flex items-center justify-center gap-2 relative z-10"
                    >
                      Search
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>

                {error && (
                  <p className="mt-3 px-4 text-red-400 text-sm font-medium">{error}</p>
                )}
              </motion.form>
            ) : (
              <motion.form
                key="contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleConfirm}
              >
                <div className="p-2 sm:p-4 bg-background/40 rounded-2xl border border-white/5 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-4">
                    <button type="button" onClick={() => { setShowContactForm(false); setError(null); }}
                      className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-1">
                      <X className="w-4 h-4" /> Back
                    </button>
                    <span className="text-white/60 text-sm">
                      {form.pickupCity} → {form.dropCity || form.localPackage} · {form.travelDate}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-all">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text" placeholder="Your full name" value={form.name} onChange={set("name")} required
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(255,183,0,0.2)] outline-none transition-all font-medium text-white placeholder:text-white/40"
                      />
                    </div>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-all">
                        <Phone className="w-5 h-5" />
                      </div>
                      <input
                        type="tel" placeholder="Phone number" value={form.phone} onChange={set("phone")} required
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(255,183,0,0.2)] outline-none transition-all font-medium text-white placeholder:text-white/40"
                      />
                    </div>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-all">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email" placeholder="Email (optional)" value={form.email} onChange={set("email")}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(255,183,0,0.2)] outline-none transition-all font-medium text-white placeholder:text-white/40"
                      />
                    </div>
                  </div>

                  {error && <p className="mt-3 text-red-400 text-sm font-medium">{error}</p>}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="mt-4 w-full py-4 rounded-2xl bg-primary text-black font-bold text-lg hover:bg-primary/90 btn-glow transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Confirming Booking…</>
                    ) : (
                      <><CheckCircle className="w-5 h-5" /> Confirm Booking</>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
