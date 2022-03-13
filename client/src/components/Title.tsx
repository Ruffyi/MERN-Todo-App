import { default as bemCssModules } from 'bem-css-modules';
import { default as TitleStyles } from './Title.module.scss';

const styled = bemCssModules(TitleStyles);

const Title = ({ title }: { title: string }) => {
	return <h1 className={styled()}>{title}</h1>;
};

export default Title;
