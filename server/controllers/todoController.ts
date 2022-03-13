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

const updateTodo = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const { id } = req.params;
		const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
			new: true,
			runValidators: true,
		});

		res.status(201).send({
			status: 'success',
			data: {
				updatedTodo,
			},
		});
	}
);

const deleteTodo = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const { id } = req.params;
		const deletedTodo = await Todo.findByIdAndDelete(id);

		res.status(201).send({
			status: 'success',
			data: {
				deletedTodo,
			},
		});
	}
);

export { getAllTodos, createNewTodo, updateTodo, deleteTodo };
