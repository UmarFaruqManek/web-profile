import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, "../database/messages.json");

// Get all messages (Admin only)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const data = await fs.readFile(dbPath, "utf-8");
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ message: "Error reading messages" });
  }
});

// Post a new message (Public)
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const data = JSON.parse(await fs.readFile(dbPath, "utf-8"));
    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      date: new Date().toISOString(),
      read: false,
    };

    data.unshift(newMessage); // Add to beginning
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2));

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving message" });
  }
});

// Delete a message (Admin only)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    let data = JSON.parse(await fs.readFile(dbPath, "utf-8"));
    data = data.filter((msg) => msg.id.toString() !== id);
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
    res.json({ message: "Message deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting message" });
  }
});

export default router;
