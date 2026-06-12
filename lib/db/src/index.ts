import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "./schema";

const dbPath = process.env.DATABASE_PATH || "./artifacts/api-server/bookmycab.db";

const sqlite = new Database(dbPath);
export const db = drizzle(sqlite, { schema });

if (!process.env.DATABASE_PATH) {
  console.log("⚠️ No DATABASE_PATH - using demo DB:", dbPath);
}

export * from "./schema";
