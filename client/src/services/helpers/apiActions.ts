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

const patchFetch = async (url: string, data: Partial<ITodosItem>) => {
	await axios(url, {
		method: 'PATCH',
		data,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	console.log('update data');
};

const deleteFetch = async (url: string) => {
	await axios(url, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	console.log('delete data');
};

export { postFetch, patchFetch, deleteFetch };
