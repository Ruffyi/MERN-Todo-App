import ReactDOM from 'react-dom';
import App from './App';
import './styles/style.scss';
import { Provider } from 'react-redux';
import todoStore from './store/index';

ReactDOM.render(
	<Provider store={todoStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);
