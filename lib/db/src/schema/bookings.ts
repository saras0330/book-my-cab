import { pgTable, serial, text, timestamp, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const bookingsTable = pgTable("bookings", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  email: varchar("email", { length: 255 }),
  tripType: varchar("trip_type", { length: 20 }).notNull(),
  pickupCity: varchar("pickup_city", { length: 255 }).notNull(),
  dropCity: varchar("drop_city", { length: 255 }),
  localPackage: varchar("local_package", { length: 50 }),
  travelDate: varchar("travel_date", { length: 20 }).notNull(),
  returnDate: varchar("return_date", { length: 20 }),
  passengers: varchar("passengers", { length: 10 }).notNull(),
  status: varchar("status", { length: 20 }).notNull().default("pending"),
  notes: text("notes"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertBookingSchema = createInsertSchema(bookingsTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  status: true,
});

export const selectBookingSchema = createSelectSchema(bookingsTable);

export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookingsTable.$inferSelect;
