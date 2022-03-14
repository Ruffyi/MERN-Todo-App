import { default as bemCssModules } from 'bem-css-modules';
import { default as TodosFormStyles } from './TodosForm.module.scss';
import { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import Button from '../../UI/Button/Button';
import useButton from '../../../hooks/useButton/useButton';
import useFetch from '../../../hooks/useFetch/useFetch';
import { AXIOS_APIBASE } from '../../../services/api';
import { postFetch } from '../../../services/helpers/apiActions';

const styled = bemCssModules(TodosFormStyles);

const TodosForm = () => {
	const [name, setName] = useState('');
	const { todoStatus, todoModifier, changeStatusHandler } = useButton(
		false,
		'progress'
	);

	const submitFormHandler = (e: FormEvent) => {
		e.preventDefault();
		const newTodo = { name, status: todoStatus };
		postFetch(AXIOS_APIBASE, newTodo);
	};

	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	return (
		<form className={styled()} onSubmit={submitFormHandler}>
			<Button
				modifier={todoModifier}
				status={todoStatus}
				changeStatusHandler={changeStatusHandler}
			/>
			<input
				className={styled('input')}
				type='text'
				placeholder='Create a new todo...'
				value={name}
				onChange={inputChangeHandler}
			/>
		</form>
	);
};

export default TodosForm;
