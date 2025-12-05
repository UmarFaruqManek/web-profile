import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, "../database/stats.json");

// Get visitor stats (Admin only)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(dbPath, "utf-8"));
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error reading stats" });
  }
});

export default router;
