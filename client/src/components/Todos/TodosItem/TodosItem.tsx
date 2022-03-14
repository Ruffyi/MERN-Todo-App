import { default as bemCssModules } from 'bem-css-modules';
import { default as TodosItemStyles } from './TodosItem.module.scss';
import Button from '../../UI/Button/Button';
import useButton from '../../../hooks/useButton/useButton';
import ITodosItem from '../../../@types/shared/TodosItem.types';
import iconCross from './../../../assets/svg/icon-cross.svg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../../../features/todoSlice/todoSlice';
import { deleteFetch } from '../../../services/helpers/apiActions';
import { AXIOS_APIBASE } from '../../../services/api';
import { RootState } from '../../../store';

const styled = bemCssModules(TodosItemStyles);

const TodosItem = ({ _id, name, status }: ITodosItem) => {
	const { todoModifier, todoStatus, changeStatusHandler } = useButton(
		false,
		status,
		_id
	);
	const { theme } = useSelector((state: RootState) => state.theme);
	const dispatch = useDispatch();

	const handleDeleteTodo = () => {
		dispatch(deleteTodo(_id));
		deleteFetch(`${AXIOS_APIBASE}/${_id}`);
	};

	return (
		<div className={styled('', { light: theme === 'light' && true })}>
			<Button
				status={todoStatus}
				changeStatusHandler={changeStatusHandler}
				modifier={todoModifier}
			/>
			<h2
				className={styled('title', {
					complete: todoModifier,
					light: theme === 'light' && true,
				})}
			>
				{name}
			</h2>
			<button className={styled('delete')} onClick={handleDeleteTodo}>
				<img src={iconCross} alt='Delete todo' />
			</button>
		</div>
	);
};

export default TodosItem;
