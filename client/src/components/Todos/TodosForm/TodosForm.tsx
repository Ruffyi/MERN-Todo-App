import { default as bemCssModules } from 'bem-css-modules';
import { default as TodosFormStyles } from './TodosForm.module.scss';
import { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import Button from '../../UI/Button/Button';
import useButton from '../../../hooks/useButton/useButton';
import { AXIOS_APIBASE } from '../../../services/api';
import { postFetch } from '../../../services/helpers/apiActions';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../../features/todoSlice';
import { RootState } from '../../../store';

bemCssModules.setSettings({
	modifierDelimiter: '--',
});

const styled = bemCssModules(TodosFormStyles);

const TodosForm = () => {
	const { theme } = useSelector((state: RootState) => state.theme);
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const { todoStatus, todoModifier, changeStatusHandler } = useButton(
		false,
		'progress',
		'',
		true
	);

	const submitFormHandler = (e: FormEvent) => {
		e.preventDefault();
		const newTodo = { name, status: todoStatus };
		dispatch(addTodo(newTodo));
		postFetch(AXIOS_APIBASE, newTodo);
	};

	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	console.log(theme);

	return (
		<form
			className={styled('', { light: theme === 'light' && true })}
			onSubmit={submitFormHandler}
		>
			<Button
				modifier={todoModifier}
				status={todoStatus}
				changeStatusHandler={changeStatusHandler}
			/>
			<input
				className={styled('input', { light: theme === 'light' && true })}
				type='text'
				placeholder='Create a new todo...'
				value={name}
				onChange={inputChangeHandler}
			/>
		</form>
	);
};

export default TodosForm;
