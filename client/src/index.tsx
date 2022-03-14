import './styles/style.scss';
import ReactDOM from 'react-dom';
import App from './App';
import todoStore from './store/index';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={todoStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);
