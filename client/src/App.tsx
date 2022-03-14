import { default as bemCssModules } from 'bem-css-modules';
import { default as AppStyles } from './App.module.scss';

import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { getTodoData } from './features/todoSlice/todoSlice';
import { useEffect } from 'react';

bemCssModules.setSettings({
	modifierDelimiter: '--',
});

const styled = bemCssModules(AppStyles);

const App = () => {
	const { theme } = useSelector((state: RootState) => state.theme);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodoData());
	}, [dispatch]);

	return (
		<main className={styled({ light: theme === 'light' && true })}>
			<Header />
			<Todos />
		</main>
	);
};

export default App;
