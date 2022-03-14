import { default as bemCssModules } from 'bem-css-modules';
import { default as TodosListStyles } from './TodosList.module.scss';
import TodosItem from '../TodosItem/TodosItem';
import ITodos from './Todos.types';
import ITodosItem from '../../../@types/shared/TodosItem.types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const styled = bemCssModules(TodosListStyles);

const TodosList = ({ items }: ITodos) => {
	const { theme } = useSelector((state: RootState) => state.theme);
	return (
		<section className={styled('', { light: theme === 'light' && true })}>
			{items.map((item: ITodosItem) => (
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
