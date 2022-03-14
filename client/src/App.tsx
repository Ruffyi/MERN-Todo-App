import { default as bemCssModules } from 'bem-css-modules';
import { default as AppStyles } from './App.module.scss';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import ITodosItem from './components/Todos/TodosItem/TodosItem.types';
import useFetch from './hooks/useFetch/useFetch';
import { AXIOS_APIBASE } from './services/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';

const styled = bemCssModules(AppStyles);

function App() {
	const { todos } = useSelector((state: RootState) => state.todo);
	const { data, loading } = useFetch<ITodosItem[]>(AXIOS_APIBASE);

	return (
		<main className={styled()}>
			<Header />
			<Todos items={todos} />
		</main>
	);
}

export default App;
