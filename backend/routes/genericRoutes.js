import express from 'express';
import { createController } from '../controllers/genericController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const createRouter = (filename) => {
  const router = express.Router();
  const controller = createController(filename);

  // Public Read
  router.get('/', controller.getAll);

  // Protected Write
  router.put('/', authMiddleware, controller.update); // Replace all (for profile)
  router.post('/', authMiddleware, controller.create); // Add item
  router.put('/:id', authMiddleware, controller.updateItem); // Update item
  router.delete('/:id', authMiddleware, controller.deleteItem); // Delete item
  
  return router;
};

export default createRouter;
