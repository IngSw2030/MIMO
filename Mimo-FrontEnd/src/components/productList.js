import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { withNavigation } from 'react-navigation';
import ProductComponent from './productComponent';

const ProductList = ()=>{
    return(
        <View>
            <ProductComponent/>
        </View>
    )

};

export default withNavigation(ProductList)