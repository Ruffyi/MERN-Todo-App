import axios from 'axios';
import ITodosItem from '../../components/Todos/TodosItem/TodosItem.types';

const postFetch = async (url: string, data: Partial<ITodosItem>) => {
	await axios(url, {
		method: 'POST',
		data,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	console.log('posted data');
};

export { postFetch };
