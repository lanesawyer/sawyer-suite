import { migrate } from "drizzle-orm/libsql/migrator";
import { db } from "./index";

// Applies the SQL migrations in ./drizzle to whatever TURSO_DATABASE_URL points
// at — the local file in dev, Turso in prod. Works the same either way, unlike
// drizzle-kit's dialect-specific credential checks.
await migrate(db, { migrationsFolder: "./drizzle" });
console.log("Migrations applied.");
