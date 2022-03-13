import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderStyles } from './Header.module.scss';
import bgDesktopDark from './../../assets/images/bg-desktop-dark.jpg';

const styled = bemCssModules(HeaderStyles);

const Header = () => {
	return (
		<header className={styled()}>
			<img src={bgDesktopDark} alt='' aria-hidden='true' />
		</header>
	);
};

export default Header;
