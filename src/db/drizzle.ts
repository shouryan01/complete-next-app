import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: ".env" }); // or .env.local

// biome-ignore lint/style/noNonNullAssertion: DB URL is not null
export const db = drizzle(process.env.DATABASE_URL!);
