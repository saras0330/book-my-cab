import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

async function submitBooking(data: Record<string, string>) {
  try {
    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        passengers: data.passengers || "2"
      }),
    });
    if (!res.ok) {
      const errData = await res.text();
      console.error('API Save Error:', errData);
      // Don't throw, fire-and-forget
    } else {
      const result = await res.json();
      console.log('✅ Booking saved:', result);
    }
  } catch (err) {
    console.error('Backend unavailable, WhatsApp sent anyway:', err);
  }
}





type ConfirmationProps = {
booking: any;
onClose: () => void;
};

function ConfirmationModal({ booking, onClose }: ConfirmationProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        className="bg-white p-6 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold mb-2">Booking Confirmed!</h2>

        <p>Name: {booking.name}</p>
        <p>Phone: {booking.phone}</p>
        <p>Pickup: {booking.pickupCity}</p>
        {booking.dropCity && <p>Drop: {booking.dropCity}</p>}
        <p>Date: {booking.travelDate}</p>
        <p>Trip: {booking.tripType}</p>

        {/* 📱 Notify Owner */}
        <motion.a
href={`https://wa.me/917779012148?text=${encodeURIComponent(`Hi! I've booked a cab with BookMyCab!\\n\\nName: ${booking.name}\\nPhone: ${booking.phone}\\nPickup: ${booking.pickupCity}${booking.dropCity ? '\\nDrop: ' + booking.dropCity : ''}\\nDate: ${booking.travelDate}\\nTrip: ${booking.tripType}\\n\\nPlease confirm availability.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          📱 Send WhatsApp Notification to Owner
        </motion.a>

        {/* Close */}
        <button
          onClick={onClose}
          className="mt-3 w-full px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}

type Props = {
  handleSearch: (data: any) => void;
};

export function BookingWidget({ handleSearch }: Props) {
const [tripType, setTripType] = useState<"one-way" | "round-trip" | "local">("one-way");

const [showContactForm, setShowContactForm] = useState(false);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
const [confirmedBooking, setConfirmedBooking] = useState<Record<string, string> | null>(null);

const [form, setForm] = useState({
pickupCity: "",
dropCity: "",
travelDate: "",
name: "",
phone: "",
email: "",
});

const set = (field: string) => (e: any) => {
setForm((prev) => ({
...prev,
[field]: e.target.value,
}));
};

const handleInitialSearch = (e: React.FormEvent) => {
e.preventDefault();

if (!form.pickupCity || !form.travelDate) {
  setError("Please fill pickup city and travel date");
  return;
}

setError(null);
setShowContactForm(true);

};

const handleConfirm = async (e: React.FormEvent) => {
e.preventDefault();
setLoading(true);

  const bookingData = { ...form, tripType };
  setConfirmedBooking(bookingData);

  // 📱 Always send WhatsApp notification
  const ownerPhone = '917779012148';
const shareMsg = `Hi! I've booked a cab with BookMyCab!\\n\\nName: ${bookingData.name}\\nPhone: ${bookingData.phone}\\nPickup: ${bookingData.pickupCity}${bookingData.dropCity ? '\\nDrop: ' + bookingData.dropCity : ''}\\nDate: ${bookingData.travelDate}\\nTrip: ${bookingData.tripType}\\n\\nPlease confirm availability ASAP.`;
  
  const shareUrl = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(shareMsg)}`;
  window.open(shareUrl, '_blank');

  // 🔥 Fire-and-forget backend save (optional)
  submitBooking(bookingData).catch(console.error);
  
  setLoading(false);
 }

return (
<>

{confirmedBooking && (
<ConfirmationModal
booking={confirmedBooking}
onClose={() => setConfirmedBooking(null)}
/>
)}

  {!showContactForm ? (
    <div className="w-full max-w-5xl mx-auto mt-10 px-4">
      <div className="bg-[#0f172a]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-xl">

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button 
            onClick={() => setTripType("one-way")}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${tripType === 'one-way' ? 'bg-yellow-400 text-black shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            One Way
          </button>
          <button 
            onClick={() => setTripType("round-trip")}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${tripType === 'round-trip' ? 'bg-yellow-400 text-black shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            Round Trip
          </button>
          <button 
            onClick={() => setTripType("local")}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${tripType === 'local' ? 'bg-yellow-400 text-black shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            Local
          </button>
        </div>

        {/* Inputs */}
        <div className="flex flex-col md:flex-row gap-3 items-center">

          <input
            type="text"
            placeholder="Pick up city"
            value={form.pickupCity}
            onChange={set("pickupCity")}
            className="flex-1 px-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-400 outline-none"
          />

          <input
            type="text"
            placeholder="Drop off city"
            value={form.dropCity}
            onChange={set("dropCity")}
            className="flex-1 px-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-400 outline-none"
          />

          <input
            type="date"
            value={form.travelDate}
            onChange={set("travelDate")}
            className="px-4 py-3 rounded-full bg-white/10 text-white outline-none"
          />

          <button 
            onClick={handleInitialSearch}
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Search →
          </button>

        </div>
      </div>
    </div>
  ) : (
<div className="w-full max-w-5xl mx-auto mt-10 px-4">
      <div className="bg-[#0f172a]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl">
        <h3 className="text-xl font-bold text-white mb-6 text-center">Confirm Your Details</h3>
        <form onSubmit={handleConfirm} className="space-y-4">
          <input
            placeholder="Full Name *"
            value={form.name}
            onChange={set("name")}
            className="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-400 outline-none border border-white/20 focus:border-primary transition"
            required
          />
          <input
            placeholder="Phone Number *"
            value={form.phone}
            onChange={set("phone")}
            className="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-400 outline-none border border-white/20 focus:border-primary transition"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            {loading ? "Creating Booking..." : "Confirm & Book Now →"}
          </button>
        </form>
      </div>
    </div>
  )}

  {error && <p className="text-red-500 mt-2">{error}</p>}
</>

);
}