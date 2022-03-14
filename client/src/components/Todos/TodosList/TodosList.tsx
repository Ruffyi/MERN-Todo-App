import { default as bemCssModules } from 'bem-css-modules';
import { default as TodosListStyles } from './TodosList.module.scss';
import TodosItem from '../TodosItem/TodosItem';
import ITodos from './Todos.types';
import ITodosItem from '../TodosItem/TodosItem.types';

const styled = bemCssModules(TodosListStyles);

const TodosList = ({ items }: ITodos) => {
	console.log(items);
	return (
		<section className={styled()}>
			{items &&
				items.map((item: ITodosItem) => (
					<TodosItem name={item.name} status={item.status} />
				))}
		</section>
	);
};
export default TodosList;
