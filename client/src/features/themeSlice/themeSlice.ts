import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from './themeSlice.types';

const initialState: State = {
	theme: 'dark',
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setLocalStorageTheme(
			state: State,
			{ payload }: PayloadAction<'dark' | 'light'>
		) {
			state.theme = payload;
		},
		toggleTheme(state: State) {
			state.theme = state.theme === 'dark' ? 'light' : 'dark';
		},
	},
});

export const { toggleTheme, setLocalStorageTheme } = themeSlice.actions;

export default themeSlice.reducer;
