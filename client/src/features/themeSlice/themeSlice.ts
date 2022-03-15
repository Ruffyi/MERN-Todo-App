import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from './themeSlice.types';

const initialState: State = {
	theme: 'dark',
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme(state: State, { payload }: PayloadAction<string>) {
			state.theme = state.theme === 'dark' ? 'light' : 'dark';
			localStorage.setItem(payload, state.theme);
		},
		addThemeFromStorage(state: State, { payload }: any) {
			state.theme = payload;
		},
	},
});

export const { toggleTheme, addThemeFromStorage } = themeSlice.actions;

export default themeSlice.reducer;
