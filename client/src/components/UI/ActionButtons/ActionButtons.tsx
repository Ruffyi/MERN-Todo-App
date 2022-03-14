import { default as bemCssModules } from 'bem-css-modules';
import { default as ActionButtonsStyles } from './ActionButtons.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { filterTodos } from '../../../features/todoSlice/todoSlice';

import TAction from './ActionButtons.types';
import { ActionStatus } from '../../../features/todoSlice/todoSlice.types';

import { RootState } from '../../../store';

const styled = bemCssModules(ActionButtonsStyles);

const ActionButtons = ({ type }: TAction) => {
	const dispatch = useDispatch();
	const { theme } = useSelector((state: RootState) => state.theme);

	const handleFilterTodos = (status: ActionStatus) => {
		dispatch(filterTodos(status));
	};

	return (
		<div
			className={styled(`${type === 'mobile' ? 'mobile' : ''}`, {
				light: theme === 'light' && true,
			})}
		>
			<button
				className={styled('btn')}
				onClick={() => handleFilterTodos('all')}
			>
				All
			</button>
			<button
				className={styled('btn')}
				onClick={() => handleFilterTodos('active')}
			>
				Active
			</button>
			<button
				className={styled('btn')}
				onClick={() => handleFilterTodos('completed')}
			>
				Completed
			</button>
		</div>
	);
};

export default ActionButtons;
