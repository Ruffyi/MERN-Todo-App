import { Router } from 'express';
import {
	createNewTodo,
	getAllTodos,
	updateTodo,
} from '../controllers/todoController';

const router = Router();

router.route('/').get(getAllTodos).post(createNewTodo);

router.route('/:id').patch(updateTodo);

export default router;
