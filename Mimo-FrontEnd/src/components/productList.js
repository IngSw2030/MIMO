import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import { withNavigation } from 'react-navigation';
import ProductComponent from './productComponent';
import useResults from "../hooks/useResultsProduct";
import SearchBar from "./searchBar";


const ProductList = ()=>{
    
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return(
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <FlatList 
                data = {results}
                keyExtractor={(result) => result._id}
                numColumns = {3}
                renderItem={({ item })=>{
                    return (
                    <ProductComponent
                        nombre = {item.name}
                        precio = {item.price}
                        descripcion = {item.description}
                    />
                    ) 
                }}
            />
        </View>
    )

};
const styles = StyleSheet.create({

});

export default withNavigation(ProductList)