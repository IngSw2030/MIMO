import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';
import ProductList from '../../components/productList';
import { navigate } from '../../navigationRef';
import useResults from "../../hooks/useResultsMyProduct";
import SearchBar from "../../components/searchBar";

const AccesoriesScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();


    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ProductList results = {results} />

            <View style={styles.roundedContainerStyle}>
                <TouchableOpacity onPress ={() => navigate('ComProductDetails')}>
                    <Text style={styles.inputStyle}>Ir a detalles del Producto</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    roundedContainerStyle: {
        marginTop: 30,
        marginLeft: 30,
        backgroundColor: "#B0EFEF",
        height: 42,
        width: 320,
        borderRadius: 75,
        justifyContent: 'center'
    },
    inputStyle: {
        color: "#000",
        fontSize: 18,
        marginLeft: 15,
        alignSelf: 'center'
    },  
});
export default withNavigation(AccesoriesScreen)