import { default as bemCssModules } from 'bem-css-modules';
import { default as TodosItemStyles } from './TodosItem.module.scss';
import Button from '../../UI/Button/Button';
import useButton from '../../../hooks/useButton/useButton';
import ITodosItem from './TodosItem.types';

const styled = bemCssModules(TodosItemStyles);

const TodosItem = ({ _id, name, status }: ITodosItem) => {
	const { todoModifier, todoStatus, changeStatusHandler } = useButton(
		false,
		status,
		_id
	);

	return (
		<div className={styled('')}>
			<Button
				status={todoStatus}
				changeStatusHandler={changeStatusHandler}
				modifier={todoModifier}
			/>
			<h2 className={styled('title', { complete: todoModifier })}>{name}</h2>
		</div>
	);
};

export default TodosItem;
