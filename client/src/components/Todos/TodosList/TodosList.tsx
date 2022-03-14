import { default as bemCssModules } from 'bem-css-modules';
import { default as TodosListStyles } from './TodosList.module.scss';
import TodosItem from '../TodosItem/TodosItem';
import ITodos from './Todos.types';
import ITodosItem from '../TodosItem/TodosItem.types';

const styled = bemCssModules(TodosListStyles);

const TodosList = ({ items }: ITodos) => {
	return (
		<section className={styled()}>
			{items.map((item: ITodosItem) => (
				<TodosItem key={item._id} name={item.name} status={item.status} />
			))}
		</section>
	);
};
export default TodosList;
