import { default as bemCssModules } from 'bem-css-modules';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { default as ActionsStyles } from './Actions.module.scss';
import { clearCompletedTodos, filterTodos } from '../../features/todoSlice';
import { deleteFetch } from '../../services/helpers/apiActions';
import ITodosItem from '../Todos/TodosItem/TodosItem.types';
import { AXIOS_APIBASE } from '../../services/api';

const styled = bemCssModules(ActionsStyles);

const Actions = () => {
	const { theme } = useSelector((state: RootState) => state.theme);
	const { todos } = useSelector((state: RootState) => state.todo);

	const dispatch = useDispatch();

	const clearCompletedTodosHandler = () => {
		dispatch(clearCompletedTodos());
		todos.forEach((todo: ITodosItem) => {
			if (todo.status === 'complete') {
				deleteFetch(`${AXIOS_APIBASE}/${todo._id}`);
			}
		});
	};

	return (
		<>
			<div className={styled('', { light: theme === 'light' && true })}>
				<p className={styled('items')}>{todos.length} items left</p>
				<div className={styled('buttons')}>
					<button
						className={styled('btn')}
						onClick={() => dispatch(filterTodos('all'))}
					>
						All
					</button>
					<button
						className={styled('btn')}
						onClick={() => dispatch(filterTodos('active'))}
					>
						Active
					</button>
					<button
						className={styled('btn')}
						onClick={() => dispatch(filterTodos('completed'))}
					>
						Completed
					</button>
				</div>
				<button className={styled('btn')} onClick={clearCompletedTodosHandler}>
					Clear Completed
				</button>
			</div>
			<div className={styled('mobile', { light: theme === 'light' && true })}>
				<button
					className={styled('btn')}
					onClick={() => dispatch(filterTodos('all'))}
				>
					All
				</button>
				<button
					className={styled('btn')}
					onClick={() => dispatch(filterTodos('active'))}
				>
					Active
				</button>
				<button
					className={styled('btn')}
					onClick={() => dispatch(filterTodos('completed'))}
				>
					Completed
				</button>
			</div>
		</>
	);
};

export default Actions;
