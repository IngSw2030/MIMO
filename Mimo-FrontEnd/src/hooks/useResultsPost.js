import React, { useEffect, useState, useContext } from 'react';
import instance from '../api/mimo';

export default () => {

	const [results, setResults] = useState([]);

	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async (searchTerm, tag) => {
		try {
			const response = await instance.post('api/Post/allPosts', {
				term: searchTerm,
				tags: tag,
			});
			setResults(response.data.posts);
		} catch (err) {
			console.log('Error en searchAPI', err);
			setErrorMessage(err + ' Something went wrong! :( ');
		}
	};

	useEffect(() => {
		searchApi('', '');
	}, []);

	return [searchApi, results, errorMessage];
};