import { default as bemCssModules } from 'bem-css-modules';
import { default as TodosFormStyles } from './TodosForm.module.scss';
import iconCheck from './../../../assets/svg/icon-check.svg';
import { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

const styled = bemCssModules(TodosFormStyles);

const TodosForm = () => {
	const [name, setName] = useState('');
	const [status, setStatus] = useState<'complete' | 'progress'>('progress');

	const submitFormHandler = (e: FormEvent) => {
		e.preventDefault();
		console.log(name, status);
	};

	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const changeStatusHandler = () => {
		setStatus(status === 'progress' ? 'complete' : 'progress');
	};

	return (
		<form className={styled()} onSubmit={submitFormHandler}>
			<div className={styled('status')}>
				<div
					onClick={changeStatusHandler}
					className={styled('btn')}
					role='button'
				>
					<img src={iconCheck} alt='Change todo status' />
				</div>
			</div>
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
