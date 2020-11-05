import React, { useContext, useState, useEffect }  from 'react'
import { View, Text, Image, StyleSheet, Button,TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import usePrice from '../../hooks/usePrice';
import {Context as ProductContext} from '../../context/ProductContext';
import { navigate } from '../../navigationRef';

const ComProductDetailsScreen = ({ navigation }) => {
    const product = navigation.getParam('product');
    const price = usePrice(product.price);
    const id = product._id;
    console.log({id});
    const {deleteProduct} = useContext(ProductContext);
   
    return (
            <View style={styles.pageStyle}>
                <ScrollView style={styles.scroll}>
                    <View >
                        <Image style={styles.imageStyle} source={{ uri: `data:image/gif;base64,${product.photo}` }} />
                        <Text style={styles.titleStyle}>{product.name}</Text>
                        <View style={styles.descriptionViewStyle}>
                            <Text style={styles.descriptionStyle}>{price}</Text>
                            <Text style={styles.descriptionStyle}>Descripcion </Text>
                            <Text style={styles.textoNomal}>{product.description} </Text>
                        </View>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity 
                            style={styles.editStyle}
                            onPress={()=>{
                                navigate('ComEditProduct', {product})
                            }}
                        >
                            <Text style={styles.buttonText}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.eraseStyle}
                            onPress ={()=>{
                                deleteProduct({
                                    id: product._id
                                });
                                navigate('ComProduct');
                            }}
                        >
                            <Text style={styles.buttonText}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    };
    
    const styles = StyleSheet.create({
        scroll: {
            flex: 1,
            marginLeft: 10
        },
        textoNomal: {
            fontSize: 20,
        },
        pageStyle: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#EDDF98',
        },
        titleStyle: {
            fontSize: 30,
            alignSelf: 'center',
        },
        imageStyle: {
            marginTop: 50,
            marginRight:10,
            height: 330,
            width: 330,
            alignSelf: 'center',
            borderRadius: 25,
        },
        descriptionStyle: {
            fontWeight: 'bold',
            fontSize: 20,
        },
        descriptionViewStyle: {
            minHeight: 100,
        },
        buttonView:{
            flexDirection: "row",
            alignSelf:"center"
        },
        eraseStyle:{
            height: 40,
            width: 150,
            backgroundColor: '#E8778B',
            borderRadius: 15,
            marginRight: 20,
            flexDirection: "row",
        },
        editStyle:{
            height: 40,
            width: 150,
            backgroundColor: '#B8DC7D',
            borderRadius: 15,
            marginRight: 20,
            flexDirection: "row",
        },
        buttonText:{
            fontSize: 20,
            alignSelf: "center",
            marginLeft: 15,
            fontWeight:"600"

        }
    });

export default withNavigation(ComProductDetailsScreen);