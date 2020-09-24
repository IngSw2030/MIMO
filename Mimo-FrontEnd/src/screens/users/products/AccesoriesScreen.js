import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation';
import ProductList from '../../../components/productList';

const AccesoriesScreen = () => {
    return (
        <View>
            <Text>Pantalla de AccesoriesScreen</Text>
            <ProductList 
            />
        </View>
    )
}
const Styles = StyleSheet.create({

});
export default withNavigation(AccesoriesScreen)