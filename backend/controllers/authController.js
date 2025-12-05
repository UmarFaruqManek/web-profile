import jwt from 'jsonwebtoken';
import { readDb } from '../utils/db.js';

const SECRET_KEY = process.env.JWT_SECRET || 'supersecretkey';

export const login = async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const admins = await readDb('admin.json');
    const admin = admins.find(a => a.username === username && a.password === password);

    if (admin) {
      const token = jwt.sign({ username: admin.username }, SECRET_KEY, { expiresIn: '24h' });
      return res.json({ token });
    }
    
    res.status(401).json({ message: 'Invalid credentials' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const logout = (req, res) => {
  // Client-side logout (clearing token) is enough for JWT, 
  // but we can have an endpoint for logging purposes if needed.
  res.json({ message: 'Logged out successfully' });
};
