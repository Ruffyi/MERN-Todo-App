import { default as bemCssModules } from 'bem-css-modules';
import { default as TodosListStyles } from './TodosList.module.scss';
import TodosItem from '../TodosItem/TodosItem';

const styled = bemCssModules(TodosListStyles);

const TodosList = () => {
	return (
		<section className={styled()}>
			<TodosItem />
			<TodosItem />
		</section>
	);
};
export default TodosList;
