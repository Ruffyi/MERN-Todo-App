import { default as bemCssModules } from 'bem-css-modules';
import { default as TodosListStyles } from './TodosList.module.scss';
import TodosItem from '../TodosItem/TodosItem';
import ITodosItem from '../../../@types/shared/TodosItem.types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const styled = bemCssModules(TodosListStyles);

const TodosList = () => {
	const { theme } = useSelector((state: RootState) => state.theme);
	const { todos } = useSelector((state: RootState) => state.todo);

	return (
		<section className={styled('', { light: theme === 'light' && true })}>
			{todos.map(({ _id, name, status }) => (
				<TodosItem _id={_id} key={_id} name={name} status={status} />
			))}
		</section>
	);
};
export default TodosList;
