import { default as bemCssModules } from 'bem-css-modules';
import { default as TodosHeaderStyles } from './TodosHeader.module.scss';
import iconSun from './../../../assets/svg/icon-sun.svg';

const styled = bemCssModules(TodosHeaderStyles);

const TodosHeader = () => {
	return (
		<div className={styled()}>
			<h1 className={styled('title')}>Todo</h1>
			<button className={styled('btn')}>
				<img src={iconSun} alt='Dark Theme' />
			</button>
		</div>
	);
};

export default TodosHeader;
