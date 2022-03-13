import { Router } from 'express';
import { createNewTodo, getAllTodos } from '../controllers/todoController';

const router = Router();

router.route('/').get(getAllTodos).post(createNewTodo);

export default router;
