import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const PHONE = "+917779012148";
const WHATSAPP_MSG = encodeURIComponent("Hi! I'd like to book a cab with BookMyCab. Please share availability.");

export function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Scroll to top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-28 right-4 z-50 w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-lg"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating action group */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <>
              {/* Call button */}
              <motion.a
                href={`tel:${PHONE}`}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ delay: 0.05 }}
                className="flex items-center gap-3 pr-4 pl-3 py-3 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-[0_4px_20px_rgba(37,99,235,0.5)] transition-all touch-manipulation"
                aria-label="Call us"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold whitespace-nowrap">Call Now</span>
              </motion.a>

              {/* WhatsApp button */}
              <motion.a
                href={`https://wa.me/${PHONE.replace("+", "")}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ delay: 0 }}
                className="flex items-center gap-3 pr-4 pl-3 py-3 rounded-full bg-green-500 hover:bg-green-400 active:bg-green-600 text-white shadow-[0_4px_20px_rgba(34,197,94,0.5)] transition-all touch-manipulation"
                aria-label="WhatsApp us"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold whitespace-nowrap">WhatsApp</span>
              </motion.a>
            </>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.92 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(255,183,0,0.5)] touch-manipulation"
          style={{ background: "linear-gradient(135deg, #ffb700, #ff8c00)" }}
          aria-label="Contact options"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {open ? <X className="w-6 h-6 text-black" /> : <Phone className="w-6 h-6 text-black" />}
          </motion.span>
          {!open && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-background animate-pulse" />
          )}
        </motion.button>
      </div>
    </>
  );
}
