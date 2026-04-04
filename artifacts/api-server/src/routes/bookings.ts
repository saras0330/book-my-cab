import { Router } from "express";
import { db, bookingsTable, insertBookingSchema } from "@workspace/db";
import { eq, desc } from "drizzle-orm";
import { z } from "zod";

const router = Router();

const createBookingBody = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email().optional().or(z.literal("")),
  tripType: z.enum(["one-way", "round-trip", "local"]),
  pickupCity: z.string().min(1, "Pickup city is required"),
  dropCity: z.string().optional(),
  localPackage: z.string().optional(),
  travelDate: z.string().min(1, "Travel date is required"),
  returnDate: z.string().optional(),
  passengers: z.string().min(1),
  notes: z.string().optional(),
});

router.post("/bookings", async (req, res) => {
  try {
    const parsed = createBookingBody.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Validation failed", details: parsed.error.flatten() });
      return;
    }

    const data = parsed.data;

    const [booking] = await db.insert(bookingsTable).values({
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      tripType: data.tripType,
      pickupCity: data.pickupCity,
      dropCity: data.dropCity || null,
      localPackage: data.localPackage || null,
      travelDate: data.travelDate,
      returnDate: data.returnDate || null,
      passengers: data.passengers,
      notes: data.notes || null,
    }).returning();

    res.status(201).json({ success: true, booking });
  } catch (err) {
    console.error("Error creating booking:", err);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

router.get("/bookings", async (_req, res) => {
  try {
    const bookings = await db.select().from(bookingsTable).orderBy(desc(bookingsTable.createdAt));
    res.json({ bookings });
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

router.get("/bookings/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid booking ID" });
      return;
    }
    const [booking] = await db.select().from(bookingsTable).where(eq(bookingsTable.id, id));
    if (!booking) {
      res.status(404).json({ error: "Booking not found" });
      return;
    }
    res.json({ booking });
  } catch (err) {
    console.error("Error fetching booking:", err);
    res.status(500).json({ error: "Failed to fetch booking" });
  }
});

router.patch("/bookings/:id/status", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { status } = req.body;
    if (!["pending", "confirmed", "cancelled", "completed"].includes(status)) {
      res.status(400).json({ error: "Invalid status" });
      return;
    }
    const [updated] = await db
      .update(bookingsTable)
      .set({ status, updatedAt: new Date() })
      .where(eq(bookingsTable.id, id))
      .returning();
    if (!updated) {
      res.status(404).json({ error: "Booking not found" });
      return;
    }
    res.json({ success: true, booking: updated });
  } catch (err) {
    console.error("Error updating booking:", err);
    res.status(500).json({ error: "Failed to update booking" });
  }
});

export default router;
