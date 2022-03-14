import { default as bemCssModules } from 'bem-css-modules';
import { default as AppStyles } from './App.module.scss';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import { useDispatch, useSelector } from 'react-redux';
import { getTodoData } from './features/todoSlice';
import { RootState } from './store';
import { useEffect } from 'react';

const styled = bemCssModules(AppStyles);

function App() {
	const { todos } = useSelector((state: RootState) => state.todo);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodoData());
	}, [dispatch]);

	return (
		<main className={styled()}>
			<Header />
			<Todos items={todos} />
		</main>
	);
}

export default App;
