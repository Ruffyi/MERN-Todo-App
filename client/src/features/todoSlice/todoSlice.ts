import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AXIOS_APIBASE } from '../../services/api';
import { ActionStatus, State, TChangeTodoStatus } from './todoSlice.types';
import ITodosItem from '../../@types/shared/TodosItem.types';
import axios from 'axios';

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
			state.filteredTodos.push(payload);
		},
		changeTodoStatus(
			state: State,
			{ payload }: PayloadAction<TChangeTodoStatus>
		) {
			state.todos = state.todos.map(todo => {
				if (todo._id === payload._id) {
					todo.status = payload.status;
				}
				return todo;
			});
			state.filteredTodos = state.todos;
		},
		deleteTodo(state: State, { payload }: PayloadAction<string>) {
			state.todos = state.filteredTodos.filter(todo => todo._id !== payload);
			state.filteredTodos = state.todos;
		},
		filterTodos(state: State, { payload }: PayloadAction<ActionStatus>) {
			switch (payload) {
				case 'all':
					state.todos = [...state.filteredTodos];
					break;
				case 'active':
					state.todos = state.filteredTodos.filter(
						todo => todo.status === 'progress'
					);
					break;
				case 'completed':
					state.todos = state.filteredTodos.filter(
						todo => todo.status === 'complete'
					);
					break;
			}
		},
		clearCompletedTodos(state: State) {
			state.todos = state.todos.filter(todo => todo.status !== 'complete');
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
