import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';
import ProductList from '../../../components/productList';
import { navigate } from '../../../navigationRef';

const AccesoriesScreen = () => {
    return (
        <View>
            <ProductList 
            />

            <View style={styles.roundedContainerStyle}>
                <TouchableOpacity onPress ={() => navigate('ComAddProduct')}>
                    <Text style={styles.inputStyle}>Ir a crear Producto</Text>
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