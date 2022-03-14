import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTodoStatus } from '../../features/todoSlice/todoSlice';
import { AXIOS_APIBASE } from '../../services/api';
import { patchFetch } from '../../services/helpers/apiActions';
import TButtonStatus from '../../@types/shared/ButtonStatus.types';

const useButton = (
	modifiers: boolean,
	status: TButtonStatus,
	_id?: string,
	formBtn?: boolean
) => {
	const [todoModifier, setTodoModifier] = useState(modifiers);
	const [todoStatus, setTodoStatus] = useState<TButtonStatus>(status);
	const dispatch = useDispatch();

	useEffect(() => {
		setTodoModifier(status === 'complete' && true);
	}, [status]);

	const changeStatusHandler = () => {
		const newTodoStatus = todoStatus === 'progress' ? 'complete' : 'progress';
		setTodoStatus(newTodoStatus);
		setTodoModifier(!todoModifier);
		dispatch(
			changeTodoStatus({
				name: '',
				_id,
				status: newTodoStatus,
			})
		);
		!formBtn &&
			patchFetch(`${AXIOS_APIBASE}/${_id}`, {
				status: newTodoStatus,
			});
	};

	return { todoModifier, todoStatus, changeStatusHandler } as const;
};

export default useButton;
