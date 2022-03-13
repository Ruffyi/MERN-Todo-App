import TButtonStatus from '../../../hooks/useButton/useButton.types';

interface IButton {
	changeStatusHandler: () => void;
	modifier?: boolean;
	status: TButtonStatus;
}

export default IButton;
