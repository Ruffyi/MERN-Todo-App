import TButtonStatus from '../../../hooks/useButton/useButton.types';

interface ITodosItem {
	_id?: string;
	name: string;
	status: TButtonStatus;
}

export default ITodosItem;
