import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const serviceList = (props)=> {
    const src = require('../../assets/mimo.png');
    return(
        <View >
            <TouchableOpacity
                style= {styles.viewStyle}>
            <View>
                <Image source={src} style= {styles.imageStyle}/>
            </View>
            <View style={({alignSelf:'center'})}>
                <Text>Nombre: {props.nombre}</Text>
                <Text>ID: {props.id}</Text>
                <Text>Calificacion: {props.calificacion}</Text>
                <Text>{props.imgSource}</Text>
            </View>
            </TouchableOpacity>
 
        </View>
    )

}
const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor: 'rgba(159, 202, 226, 0.89)',
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        flexDirection:'row',
        flexGrow: 1,
        borderRadius:15

    },
    imageStyle:{
        height: 100,
        width: 100
    }
});
export default serviceList;
