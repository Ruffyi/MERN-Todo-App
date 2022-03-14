import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderStyles } from './Header.module.scss';
import bgDesktopDark from './../../assets/images/bg-desktop-dark.jpg';
import bgDesktopLight from './../../assets/images/bg-desktop-light.jpg';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

const styled = bemCssModules(HeaderStyles);

const Header = () => {
	const { theme } = useSelector((state: RootState) => state.theme);

	return (
		<header className={styled()}>
			<img
				src={theme === 'dark' ? bgDesktopDark : bgDesktopLight}
				alt=''
				aria-hidden='true'
			/>
		</header>
	);
};

export default Header;
