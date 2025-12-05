import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import createRouter from "./routes/genericRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Serve static files from the React app
const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/education", createRouter("education.json"));
app.use("/api/skills", createRouter("skills.json"));
app.use("/api/courses", createRouter("courses.json"));
app.use("/api/publications", createRouter("publications.json"));
app.use("/api/research", createRouter("research.json"));
app.use("/api/community-service", createRouter("community_service.json"));
app.use("/api/certifications", createRouter("certifications.json"));
app.use("/api/gallery", createRouter("gallery.json"));
app.use("/api/activities", createRouter("activities.json"));

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
