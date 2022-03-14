import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../features/todoSlice';

const todoStore = configureStore({
	reducer: {
		todo: todoSlice,
	},
});

export type RootState = ReturnType<typeof todoStore.getState>;

export default todoStore;
