import { default as bemCssModules } from 'bem-css-modules';
import { default as BtnStyles } from './Button.module.scss';

import IButton from './Button.types';

import iconCheck from './../../../assets/svg/icon-check.svg';

bemCssModules.setSettings({
	modifierDelimiter: '--',
});

const styled = bemCssModules(BtnStyles);

const Button = ({ changeStatusHandler, status, modifier }: IButton) => {
	return (
		<div className={styled('')}>
			<div
				onClick={changeStatusHandler}
				className={styled('btn', { complete: modifier })}
				role='button'
			>
				{status === 'complete' && (
					<img src={iconCheck} alt='Change todo status' />
				)}
			</div>
		</div>
	);
};

export default Button;
