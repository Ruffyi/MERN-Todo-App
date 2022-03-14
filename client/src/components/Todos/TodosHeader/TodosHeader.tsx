import { default as bemCssModules } from 'bem-css-modules';
import { default as TodosHeaderStyles } from './TodosHeader.module.scss';
import iconSun from './../../../assets/svg/icon-sun.svg';
import iconMoon from './../../../assets/svg/icon-moon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../features/themeSlice/themeSlice';
import { RootState } from '../../../store';
import useLocalStorage from '../../../hooks/useLocalStorage/useLocalStorage';
import { useEffect } from 'react';

const styled = bemCssModules(TodosHeaderStyles);

const TodosHeader = () => {
	const { theme } = useSelector((state: RootState) => state.theme);
	const [projectTheme, setProjectTheme] = useLocalStorage('theme', 'dark');
	const dispatch = useDispatch();

	useEffect(() => {
		setProjectTheme(theme);
	}, []);

	const changeThemeHandler = () => {
		dispatch(toggleTheme());
		setProjectTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<div className={styled()}>
			<h1 className={styled('title')}>Todo</h1>
			<button className={styled('btn')} onClick={changeThemeHandler}>
				<img src={theme === 'dark' ? iconSun : iconMoon} alt='Dark Theme' />
			</button>
		</div>
	);
};

export default TodosHeader;
