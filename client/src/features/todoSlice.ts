import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { stat } from 'fs';
import ITodosItem from '../components/Todos/TodosItem/TodosItem.types';
import TButtonStatus from '../hooks/useButton/useButton.types';
import { AXIOS_APIBASE } from '../services/api';

type ActionStatus = 'all' | 'completed' | 'active';

type State = {
	todos: ITodosItem[];
	filteredTodos: ITodosItem[];
};

const initialState: State = {
	todos: [],
	filteredTodos: [],
};

export const getTodoData = createAsyncThunk('todos', async () => {
	const response = await axios(AXIOS_APIBASE, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const { data } = response.data;
	return data.todos;
});

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo(state: State, { payload }: PayloadAction<ITodosItem>) {
			state.todos.push(payload);
		},
		changeTodoStatus(state: State, { payload }: PayloadAction<ITodosItem>) {
			state.todos = state.todos.map((todo: ITodosItem) => {
				if (todo._id === payload._id) {
					todo.status = payload.status;
				}
				return todo;
			});
			state.filteredTodos = state.todos;
		},
		deleteTodo(state: State, { payload }: PayloadAction<string>) {
			state.todos = state.todos.filter(
				(todo: ITodosItem) => todo._id !== payload
			);
			state.filteredTodos = state.todos;
		},
		filterTodos(state: State, { payload }: PayloadAction<ActionStatus>) {
			switch (payload) {
				case 'all':
					state.todos = [...state.filteredTodos];
					break;
				case 'active':
					state.todos = state.filteredTodos.filter(
						(todo: ITodosItem) => todo.status === 'progress'
					);
					break;
				case 'completed':
					state.todos = state.filteredTodos.filter(
						(todo: ITodosItem) => todo.status === 'complete'
					);
					break;
			}
		},
		clearCompletedTodos(state: State) {
			state.todos = state.todos.filter(
				(todo: ITodosItem) => todo.status !== 'complete'
			);
			state.filteredTodos = state.todos;
		},
	},
	extraReducers(builder) {
		builder.addCase(
			getTodoData.fulfilled,
			(state: State, { payload }: PayloadAction<ITodosItem[]>) => {
				state.todos = [...payload];
				state.filteredTodos = [...payload];
			}
		);
	},
});

export const {
	addTodo,
	deleteTodo,
	changeTodoStatus,
	clearCompletedTodos,
	filterTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
