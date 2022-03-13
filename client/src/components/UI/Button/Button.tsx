import iconCheck from './../../../assets/svg/icon-check.svg';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BtnStyles } from './Button.module.scss';
import IButton from './Button.types';

bemCssModules.setSettings({
	modifierDelimiter: '--',
});

const styledBtn = bemCssModules(BtnStyles);

const Button = ({ changeStatusHandler, status, modifier }: IButton) => {
	return (
		<div className={styledBtn('')}>
			<div
				onClick={changeStatusHandler}
				className={styledBtn('btn', { complete: modifier })}
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
