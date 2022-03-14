import { createSlice } from '@reduxjs/toolkit';

type State = {
	theme: 'dark' | 'light';
};

const initialState: State = {
	theme: 'dark',
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme(state: State) {
			state.theme = state.theme === 'dark' ? 'light' : 'dark';
		},
	},
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
