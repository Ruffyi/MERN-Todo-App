import axios from 'axios';

const AXIOS_APIBASE = 'http://localhost:3000/api/v1/todos';

const API = axios.create({
	baseURL: AXIOS_APIBASE,
});

export { AXIOS_APIBASE };

export default API;
