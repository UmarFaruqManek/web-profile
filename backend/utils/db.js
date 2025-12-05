import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbDir = path.join(__dirname, '../database');

export const readDb = async (filename) => {
  try {
    const filePath = path.join(dbDir, filename);
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') return []; // Return empty array if file doesn't exist
    throw error;
  }
};

export const writeDb = async (filename, data) => {
  const filePath = path.join(dbDir, filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};
