import React, { useEffect, useState } from 'react';
import instance from '../api/mimo';

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async searchTerm => {
		try {
			const response = await instance.get('api/Service/getAllAvailableServices');
			setResults(response.data.services);
		} catch (err) {
			console.log('Entra al catch useREsultsServices');
			console.log(err);
			setErrorMessage(err + ' Something went wrong! :( ');
		}
	};
	const availables = results.filter(obj => {
		return obj.available === 'true';
	});
	const limpiadores = results.filter(obj => {
		return obj.category === 'Limpieza de Peceras';
	});
	const estilistas = results.filter(obj => {
		return obj.category === 'Estilista';
	});
	const paseadores = results.filter(obj => {
		return obj.category === 'Paseos';
	});
	const cuidadores = results.filter(obj => {
		return obj.category === 'Cuidador';
	});
	useEffect(() => {
		searchApi('');
	}, []);

	return [searchApi, results, cuidadores, paseadores, estilistas, limpiadores, availables, errorMessage];
};
