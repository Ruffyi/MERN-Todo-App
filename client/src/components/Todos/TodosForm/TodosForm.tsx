import { default as bemCssModules } from 'bem-css-modules';
import { default as TodosFormStyles } from './TodosForm.module.scss';
import { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import Button from '../../UI/Button/Button';
import useButton from '../../../hooks/useButton/useButton';

const styled = bemCssModules(TodosFormStyles);

const TodosForm = () => {
	const [name, setName] = useState('');
	const { todoStatus, todoModifier, changeStatusHandler } = useButton(
		false,
		'progress'
	);

	const submitFormHandler = (e: FormEvent) => {
		e.preventDefault();
		console.log(name, todoStatus);
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
