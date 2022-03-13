import { default as bemCssModules } from 'bem-css-modules';
import { default as TodosItemStyles } from './TodosItem.module.scss';
import Button from '../../UI/Button/Button';
import useButton from '../../../hooks/useButton/useButton';

const styled = bemCssModules(TodosItemStyles);

const TodosItem = () => {
	const { todoModifier, todoStatus, changeStatusHandler } = useButton(
		false,
		'progress'
	);

	return (
		<div className={styled('')}>
			<Button
				status={todoStatus}
				changeStatusHandler={changeStatusHandler}
				modifier={todoModifier}
			/>
			<h2 className={styled('title', { complete: todoModifier })}>
				Complete online JavaScript course
			</h2>
		</div>
	);
};

export default TodosItem;
