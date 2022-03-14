import { default as bemCssModules } from 'bem-css-modules';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { default as ActionsStyles } from './Actions.module.scss';

const styled = bemCssModules(ActionsStyles);

const Actions = () => {
	const { theme } = useSelector((state: RootState) => state.theme);

	return (
		<>
			<div className={styled('', { light: theme === 'light' && true })}>
				<p className={styled('items')}>5 items left</p>
				<div className={styled('buttons')}>
					<button className={styled('btn')}>All</button>
					<button className={styled('btn')}>Active</button>
					<button className={styled('btn')}>Completed</button>
				</div>
				<button className={styled('btn')}>Clear Completed</button>
			</div>
			<div className={styled('mobile', { light: theme === 'light' && true })}>
				<button className={styled('btn')}>All</button>
				<button className={styled('btn')}>Active</button>
				<button className={styled('btn')}>Completed</button>
			</div>
		</>
	);
};

export default Actions;
