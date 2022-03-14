import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = <T>(url: string) => {
	const [data, setData] = useState<T | []>([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		setLoading(true);
		const response = await axios(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const { data } = response.data;
		setData(data.todos);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return { data, loading } as const;
};

export default useFetch;
