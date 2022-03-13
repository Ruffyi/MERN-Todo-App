import { Router } from 'express';
import {
	createNewTodo,
	deleteTodo,
	getAllTodos,
	updateTodo,
} from '../controllers/todoController';

const router = Router();

router.route('/').get(getAllTodos).post(createNewTodo);

router.route('/:id').patch(updateTodo).delete(deleteTodo);

export default router;
