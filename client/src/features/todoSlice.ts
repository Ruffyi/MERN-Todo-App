import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import ITodosItem from '../components/Todos/TodosItem/TodosItem.types';
import { AXIOS_APIBASE } from '../services/api';

type State = {
	todos: ITodosItem[];
};

const initialState: State = {
	todos: [],
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
		addTodo: (state: State, { payload }: PayloadAction<ITodosItem>) => {
			state.todos.push(payload);
		},
	},
	extraReducers(builder) {
		builder.addCase(
			getTodoData.fulfilled,
			(state: State, { payload }: PayloadAction<ITodosItem[]>) => {
				state.todos = payload;
			}
		);
	},
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
