import { default as bemCssModules } from 'bem-css-modules';
import { default as AppStyles } from './App.module.scss';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';

const styled = bemCssModules(AppStyles);

function App() {
	return (
		<main className={styled()}>
			<Header />
			<Todos items={[]} />
		</main>
	);
}

export default App;
