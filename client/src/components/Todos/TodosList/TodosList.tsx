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
			{todos.map((item: ITodosItem) => (
				<TodosItem
					_id={item._id}
					key={item._id}
					name={item.name}
					status={item.status}
				/>
			))}
		</section>
	);
};
export default TodosList;
