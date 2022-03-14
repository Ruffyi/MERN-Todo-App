import TButtonStatus from '../../../@types/shared/ButtonStatus.types';

interface IButton {
	changeStatusHandler: () => void;
	modifier?: boolean;
	status: TButtonStatus;
}

export default IButton;
