import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../features/themeSlice/themeSlice';
import todoSlice from '../features/todoSlice/todoSlice';

const todoStore = configureStore({
	reducer: {
		todo: todoSlice,
		theme: themeSlice,
	},
});

export type RootState = ReturnType<typeof todoStore.getState>;

export default todoStore;
