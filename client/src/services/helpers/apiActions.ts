import axios from 'axios';
import ITodosItem from '../../@types/shared/TodosItem.types';

const postFetch = async (url: string, data: Partial<ITodosItem>) => {
	const response = await axios(url, {
		method: 'POST',
		data,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const { data: resData } = response.data;
	return resData.newTodo;
};

const patchFetch = async (url: string, data: Partial<ITodosItem>) => {
	await axios(url, {
		method: 'PATCH',
		data,
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

const deleteFetch = async (url: string) => {
	await axios(url, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export { postFetch, patchFetch, deleteFetch };
