import { default as bemCssModules } from 'bem-css-modules';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { default as ActionsStyles } from './Actions.module.scss';
import { clearCompletedTodos, filterTodos } from '../../features/todoSlice';
import { deleteFetch } from '../../services/helpers/apiActions';
import ITodosItem from '../Todos/TodosItem/TodosItem.types';
import { AXIOS_APIBASE } from '../../services/api';
import useWindowSize from '../../hooks/UseWindowSize/useWindowSize';
import ActionButtons from '../UI/ActionButtons/ActionButtons';

const styled = bemCssModules(ActionsStyles);

const Actions = () => {
	const { theme } = useSelector((state: RootState) => state.theme);
	const { todos } = useSelector((state: RootState) => state.todo);
	const { windowSize } = useWindowSize();

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
				<ActionButtons />
				<button className={styled('btn')} onClick={clearCompletedTodosHandler}>
					Clear Completed
				</button>
			</div>
			{windowSize.width < 950 && <ActionButtons type='mobile' />}
		</>
	);
};

export default Actions;
