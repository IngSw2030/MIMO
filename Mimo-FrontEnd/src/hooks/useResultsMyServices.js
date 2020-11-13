import React, { useEffect, useState } from 'react';
import instance from '../api/mimo';

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async () => {
		try {
			const response = await instance.post('/api/Service/myServices');
			//console.log('Response servicios: ', await response.data.services);
			setResults(await response.data);
		} catch (err) {
			console.log(err);
			setErrorMessage(err + ' Something went wrong! :( ');
		}
	};
	useEffect(() => {
		searchApi('');
	}, []);

	return [searchApi, results, errorMessage];
};
