import React, { useEffect, useState } from 'react';
import instance from "../api/mimo";

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async () => {
        try {
            const response = await instance.post('api/Product/getServices');
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