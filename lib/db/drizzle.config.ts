import type { Config } from "drizzle-kit";
import { defineConfig } from "drizzle-kit";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  schema: "./src/schema/index.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: path.join(__dirname, "../../artifacts/api-server/bookmycab.db"),
  },

  out: "./drizzle",
});


