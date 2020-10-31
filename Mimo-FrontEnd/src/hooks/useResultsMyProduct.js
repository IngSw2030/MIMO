import React, { useEffect, useState } from 'react';
import instance from "../api/mimo";

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            const response = await instance.post('api/Product/myProducts');
            setResults(response.data.products);
        } catch (err) {
            setErrorMessage(err + " Something went wrong! :( ");
        }
    };

    const accesories = results.filter(obj => {
		return obj.category === 'accesorio';
	});
	const food = results.filter(obj => {
		return obj.category === 'comida';
	});
	const cleaning = results.filter(obj => {
		return obj.category === 'limpieza';
	});
	const others = results.filter(obj => {
		return obj.category === 'otros';
	});

    useEffect(() => {
        searchApi("");
    }, []);


    return [searchApi, results, accesories, food, cleaning, others, errorMessage];
};