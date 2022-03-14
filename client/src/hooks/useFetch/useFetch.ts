import THTTPMethod from './useFetch.types';
import axios from 'axios';
import { useState } from 'react';

const useFetch = <T>(url: string) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);

	const getFetch = async (method: THTTPMethod) => {
		setLoading(true);
		const response = await axios(url, {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = response.data;
		console.log(data);
		setData(data);
		setLoading(false);
	};

	const patchFetch = async (
		method: THTTPMethod,
		id: string | undefined,
		userData: any
	) => {
		await axios(`${url}/${id}`, {
			method,
			data: userData,
		});
		getFetch('GET');
	};

	const postFetch = async (method: THTTPMethod, userData: any) => {
		await axios(url, {
			method,
			data: userData,
			headers: {
				'Content-Type': 'application/json',
			},
		});
		getFetch('GET');
	};

	const fetchData = (method: THTTPMethod, userData?: any, id?: string) => {
		switch (method) {
			case 'GET':
				return getFetch(method);
			case 'POST':
				return postFetch(method, userData);
			case 'PATCH':
				return patchFetch(method, id, userData);
		}
	};

	return { data, loading, fetchData } as const;
};

export default useFetch;
