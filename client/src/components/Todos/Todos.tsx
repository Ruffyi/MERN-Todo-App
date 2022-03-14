import { default as bemCssModules } from 'bem-css-modules';
import { default as TodosStyles } from './Todos.module.scss';
import TodosHeader from './TodosHeader/TodosHeader';
import TodosForm from './TodosForm/TodosForm';
import TodosList from './TodosList/TodosList';
import ITodos from './TodosList/Todos.types';
import Actions from '../Actions/Actions';

const styled = bemCssModules(TodosStyles);

const Todos = ({ items }: ITodos) => {
	return (
		<section className={styled()}>
			<TodosHeader />
			<TodosForm />
			<TodosList items={items} />
			<Actions />
		</section>
	);
};

export default Todos;
