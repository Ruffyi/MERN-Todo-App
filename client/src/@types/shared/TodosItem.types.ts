import TButtonStatus from './ButtonStatus.types';

interface ITodosItem {
	_id?: string;
	name: string;
	status: TButtonStatus;
}

export default ITodosItem;
