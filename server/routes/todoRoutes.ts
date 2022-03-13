import { Router } from 'express';
import { getAllTodos } from '../controllers/todoController';

const router = Router();

router.route('/').get(getAllTodos);

export default router;
