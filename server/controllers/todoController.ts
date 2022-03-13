import { Request, Response, NextFunction } from 'express';

import Todo from '../models/todoModel/todoModel';
import asyncHandler from 'express-async-handler';

const getAllTodos = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const todos = await Todo.find({});

		res.status(200).send({
			status: 'success',
			data: {
				todos,
			},
		});
	}
);

const createNewTodo = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const { name, status } = req.body;
		const newTodo = await Todo.create({ name, status });

		res.status(201).send({
			status: 'success',
			data: {
				newTodo,
			},
		});
	}
);

export { getAllTodos, createNewTodo };
