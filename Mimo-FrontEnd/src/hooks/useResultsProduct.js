import React, { useEffect, useState } from 'react';
import instance from "../api/mimo";

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            const response = await instance.post('api/Product/allProducts', {
                name: searchTerm,
                description: searchTerm,
                category: 'comida'
            });
            setResults(response.data.products);
        } catch (err) {
            setErrorMessage(err + " Something went wrong! :( ");
        }
    };

    useEffect(() => {
        searchApi("");
    }, []);


    return [searchApi, results, errorMessage];
};