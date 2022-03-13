import { useState } from 'react';
import TButtonStatus from './useButton.types';

const useButton = (modifiers: boolean, status: TButtonStatus) => {
	const [todoModifier, setTodoModifier] = useState(modifiers);
	const [todoStatus, setTodoStatus] = useState<TButtonStatus>(status);

	const changeStatusHandler = () => {
		setTodoStatus(todoStatus === 'progress' ? 'complete' : 'progress');
		setTodoModifier(!todoModifier);
	};

	return { todoModifier, todoStatus, changeStatusHandler } as const;
};

export default useButton;
