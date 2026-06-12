import { Router, Request, Response } from "express";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, "../../bookings.json");

interface Booking {
  id: number;
  name: string;
  phone: string;
  tripType: string;
  pickupCity: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  email?: string;
  dropCity?: string;
  localPackage?: string;
  travelDate: string;
  returnDate?: string;
  passengers: string;
  notes?: string;
}

let bookings: Booking[] = [];

async function loadBookings(): Promise<void> {
  try {
    const data = await fs.readFile(DB_PATH, "utf8");
    const parsed = JSON.parse(data) as Booking[];
    bookings = parsed;
  } catch {
    bookings = [];
  }
}

async function saveBookings(): Promise<void> {
  await fs.writeFile(DB_PATH, JSON.stringify(bookings, null, 2));
}

// Load on module init
loadBookings().catch(console.error);

const createBookingBody = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().optional(),
  tripType: z.enum(["one-way", "round-trip", "local"]),
  pickupCity: z.string().min(1),
  dropCity: z.string().optional(),
  localPackage: z.string().optional(),
  travelDate: z.string().min(1),
  returnDate: z.string().optional(),
  passengers: z.string().min(1),
  notes: z.string().optional(),
});

router.post("/bookings", async (req: Request, res: Response) => {
  try {
    console.log('📥 Incoming booking request:', req.body);
    const parsed = createBookingBody.safeParse(req.body);
    if (!parsed.success) {
      const errorDetails = parsed.error.flatten();
      console.log('Validation failed:', errorDetails);
      res.status(400).json({ error: "Validation failed", details: errorDetails });
      return;
    }

    const data = parsed.data;

    const newBooking: Booking = {
      id: Date.now(),
      ...data,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    bookings.unshift(newBooking);
    await saveBookings();
    console.log('🆕 New booking created:', newBooking.id, newBooking.name, newBooking.pickupCity);
    res.status(201).json({ success: true, booking: newBooking });
  } catch (err) {
    console.error("Error creating booking:", err);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

router.get("/bookings", async (_req: Request, res: Response) => {
  try {
    await loadBookings();
    const sortedBookings = [...bookings].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    console.log(`📋 Fetched ${sortedBookings.length} bookings`);
    res.json({ bookings: sortedBookings });
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

export default router;

