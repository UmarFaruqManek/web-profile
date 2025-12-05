import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, "../database/stats.json");

export const visitorCounter = async (req, res, next) => {
  // Only count GET requests to public routes (excluding static files and admin API)
  if (
    req.method === "GET" &&
    !req.path.startsWith("/api/auth") &&
    !req.path.startsWith("/assets")
  ) {
    try {
      const data = JSON.parse(await fs.readFile(dbPath, "utf-8"));
      data.visitors += 1;
      await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Error updating visitor stats:", error);
    }
  }
  next();
};
