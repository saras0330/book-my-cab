import app from "./app";
import { logger } from "./lib/logger";

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});