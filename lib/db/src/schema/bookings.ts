import { sqliteTable, text, integer, timestamp } from 'drizzle-orm/sqlite-core';

export const bookings = sqliteTable('bookings', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  phone: text('phone').notNull(),
  email: text('email'),
  pickupCity: text('pickup_city').notNull(),
  dropCity: text('drop_city'),
  tripType: text('trip_type').notNull(),
  status: text('status').notNull().$default('pending'),
  travelDate: text('travel_date').notNull(),
  returnDate: text('return_date'),
  passengers: text('passengers').notNull(),
  notes: text('notes'),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).defaultNow().notNull(),
});

export type Booking = typeof bookings.$inferSelect;
export type NewBooking = typeof bookings.$inferInsert;

