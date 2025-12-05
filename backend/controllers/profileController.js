import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, '../database/profile.json');

export const getProfile = async (req, res) => {
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ message: 'Error reading database' });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const newData = req.body;
    await fs.writeFile(dbPath, JSON.stringify(newData, null, 2));
    res.json({ message: 'Profile updated', data: newData });
  } catch (error) {
    res.status(500).json({ message: 'Error writing database' });
  }
};
