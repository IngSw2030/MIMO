import React from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import { withNavigation } from 'react-navigation';
import ProductComponent from './productComponent';

const ProductList = ()=>{
    const productos =[
        { nombre : 'Rueda para hamster', precio : '21000', descripcion : 'Está bien bonita la rueda para hamster', id:'1'},
        { nombre : 'Rueda para hamster2', precio : '22000', descripcion : 'Está bien bonita la rueda para hamster', id:'2'},
        { nombre : 'Rueda para hamster3', precio : '30000', descripcion : 'Está bien bonita la rueda para hamster', id:'3'},
        { nombre : 'Rueda para hamster4', precio : '21000', descripcion : 'Está bien bonita la rueda para hamster', id:'4'},
        { nombre : 'Rueda para hamster6', precio : '22000', descripcion : 'Está bien bonita la rueda para hamster', id:'5'},
        { nombre : 'Rueda para hamster rtx 3080 4k', precio : '3454500', descripcion : 'Está bien bonita la rueda para hamster', id:'6'}
    ];
    return(
        <View>
            <FlatList 
                data = {productos}
                keyExtractor = {(item)=>item.id}
                numColumns = {3}
                renderItem ={({item})=>{
                return (
                    <ProductComponent
                        nombre = {item.nombre}
                        precio = {item.precio}
                        descripcion = {item.descripcion}
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