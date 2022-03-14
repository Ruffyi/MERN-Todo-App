import { default as bemCssModules } from 'bem-css-modules';
import { default as ActionButtonsStyles } from './ActionButtons.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos } from '../../../features/todoSlice/todoSlice';
import TAction from './ActionButtons.types';
import { RootState } from '../../../store';

const styled = bemCssModules(ActionButtonsStyles);

const ActionButtons = ({ type }: TAction) => {
	const dispatch = useDispatch();
	const { theme } = useSelector((state: RootState) => state.theme);

	return (
		<div
			className={styled(`${type === 'mobile' ? 'mobile' : ''}`, {
				light: theme === 'light' && true,
			})}
		>
			<button
				className={styled('btn')}
				onClick={() => dispatch(filterTodos('all'))}
			>
				All
			</button>
			<button
				className={styled('btn')}
				onClick={() => dispatch(filterTodos('active'))}
			>
				Active
			</button>
			<button
				className={styled('btn')}
				onClick={() => dispatch(filterTodos('completed'))}
			>
				Completed
			</button>
		</div>
	);
};

export default ActionButtons;
