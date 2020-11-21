import React, { useEffect, useState } from 'react';
import instance from '../api/mimo';

export default () => {

	const [results, setResults] = useState([]);

	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async (searchTerm, animal) => {
		try {
			const response = await instance.post('api/Veterinary/Vets', {
				name: searchTerm,
				description: searchTerm,
				animals: animal
			});
			setResults(response.data.vets);
		} catch (err) {
			console.log('Error en searchAPI', err);
			setErrorMessage(err + ' Something went wrong! :( ');
		}
	};

	useEffect(() => {
		searchApi('');
	}, []);

	return [searchApi, results, errorMessage];
};