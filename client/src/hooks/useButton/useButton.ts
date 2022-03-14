import { useEffect, useRef, useState } from 'react';
import ITodosItem from '../../components/Todos/TodosItem/TodosItem.types';
import { AXIOS_APIBASE } from '../../services/api';
import { patchFetch } from '../../services/helpers/apiActions';
import TButtonStatus from './useButton.types';

const useButton = (
	modifiers: boolean,
	status: TButtonStatus,
	_id?: string,
	formBtn?: boolean
) => {
	const [todoModifier, setTodoModifier] = useState(modifiers);
	const [todoStatus, setTodoStatus] = useState<TButtonStatus>(status);

	useEffect(() => {
		setTodoModifier(status === 'complete' && true);
	}, [status]);

	const changeStatusHandler = () => {
		setTodoStatus(todoStatus === 'progress' ? 'complete' : 'progress');
		setTodoModifier(!todoModifier);
		!formBtn &&
			patchFetch(`${AXIOS_APIBASE}/${_id}`, {
				status: todoStatus === 'progress' ? 'complete' : 'progress',
			});
	};

	return { todoModifier, todoStatus, changeStatusHandler } as const;
};

export default useButton;
