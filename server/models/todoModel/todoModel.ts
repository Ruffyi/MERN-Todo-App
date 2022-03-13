import { Model, model, Schema } from 'mongoose';
import ITodoModel from './todoModel.interface';

const todoSchema = new Schema<ITodoModel>({
	name: {
		type: String,
		required: [true, 'You must specify name'],
	},
	status: {
		type: String,
		enum: {
			values: ['complete', 'progress'],
		},
		default: 'progress',
	},
});

const Todo: Model<ITodoModel> = model('Todo', todoSchema);

export default Todo;
