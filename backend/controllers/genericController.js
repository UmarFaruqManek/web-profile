import { readDb, writeDb } from '../utils/db.js';

export const createController = (filename) => ({
  getAll: async (req, res) => {
    try {
      const data = await readDb(filename);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error reading database' });
    }
  },
  
  // Update entire file (for single object like profile.json)
  update: async (req, res) => {
    try {
      const newData = req.body;
      await writeDb(filename, newData);
      res.json({ message: 'Updated successfully', data: newData });
    } catch (error) {
      res.status(500).json({ message: 'Error writing database' });
    }
  },

  // Create new item (for arrays)
  create: async (req, res) => {
    try {
      const items = await readDb(filename);
      if (!Array.isArray(items)) {
        return res.status(400).json({ message: 'Database is not a list' });
      }
      
      const newItem = { ...req.body, id: Date.now() }; // Simple ID generation
      items.push(newItem);
      
      await writeDb(filename, items);
      res.json({ message: 'Created successfully', data: newItem });
    } catch (error) {
      res.status(500).json({ message: 'Error writing database' });
    }
  },

  // Update specific item by ID (for arrays)
  updateItem: async (req, res) => {
    try {
      const { id } = req.params;
      const items = await readDb(filename);
      
      if (!Array.isArray(items)) {
        return res.status(400).json({ message: 'Database is not a list' });
      }

      const index = items.findIndex(item => item.id == id);
      if (index === -1) {
        return res.status(404).json({ message: 'Item not found' });
      }

      items[index] = { ...items[index], ...req.body, id: Number(id) }; // Preserve ID
      await writeDb(filename, items);
      
      res.json({ message: 'Updated successfully', data: items[index] });
    } catch (error) {
      res.status(500).json({ message: 'Error writing database' });
    }
  },

  // Delete item by ID (for arrays)
  deleteItem: async (req, res) => {
    try {
      const { id } = req.params;
      let items = await readDb(filename);
      
      if (!Array.isArray(items)) {
        return res.status(400).json({ message: 'Database is not a list' });
      }

      const initialLength = items.length;
      items = items.filter(item => item.id != id);

      if (items.length === initialLength) {
        return res.status(404).json({ message: 'Item not found' });
      }

      await writeDb(filename, items);
      res.json({ message: 'Deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error writing database' });
    }
  }
});
