import { default as bemCssModules } from 'bem-css-modules';
import { default as TodosStyles } from './Todos.module.scss';
import TodosHeader from './TodosHeader/TodosHeader';
import TodosForm from './TodosForm/TodosForm';

const styled = bemCssModules(TodosStyles);

const Todos = () => {
	return (
		<section className={styled()}>
			<TodosHeader />
			<TodosForm />
		</section>
	);
};

export default Todos;
