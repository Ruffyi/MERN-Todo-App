import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ITodosItem from '../components/Todos/TodosItem/TodosItem.types';

type State = {
	todos: ITodosItem[];
};

const initialState: State = {
	todos: [],
};

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state: State, { payload }: PayloadAction<ITodosItem>) => {
			state.todos.push(payload);
		},
	},
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
