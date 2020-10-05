import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import { withNavigation } from 'react-navigation';
import ProductComponent from './productComponent';


const ProductList = ({results})=>{
    
    return(
        <View>
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