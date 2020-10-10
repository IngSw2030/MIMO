import React, {useContext} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import {Context as ServiceContext} from '../context/ServiceContext'

const serviceList = (props)=> {
    const { state: servicios } = useContext(ServiceContext);
    const servicio = servicios.find(thisservicio => thisservicio.id === props.id);
    console.log(servicio);
    const rating = require('../../assets/rating.png');
    const estrellas = insertarEstrellas(servicio.avgScore);

     
    return(
        <View>
            <TouchableOpacity
                style= {styles.viewStyle}
                onPress = {() => props.navigation.navigate(
                        'ServiceDetails',
                        {
                            data: servicio.category,
                            calificacion: servicio.avgScore,
                            precio: servicio.priceMax,
                            descripcion: servicio.description
                        }
                    )}>
            <View>
                <Image source={servicio.photo} style= {styles.imageStyle}/>
            </View>
            <View style={({alignSelf:'center'}),({marginTop:10})}>
                <Text>Nombre: {servicio.name}</Text>
                <Text>ID: {servicio.id}</Text>
                <Text>Calificacion:</Text>
                <View style={styles.starsStyle}>
                    <FlatList
                        data = {estrellas}
                        keyExtractor = {(estrella)=>estrella.cantidad.toString()}
                        numColumns = {5}
                        renderItem ={({estrellas})=>{
                        return (
                            <Image style={styles.iconStyle}  source={rating}/>
                            ) 
                        }}
                    />
                </View>
            </View> 
            </TouchableOpacity>
 
        </View>
    )

}
const insertarEstrellas = (cantidad)=>{
    if(cantidad > 0)
    {
       const estrellas= [...insertarEstrellas(cantidad-1),{cantidad}];
       return estrellas;
    }
    else
    {
        const estrellas = [];
        return estrellas;
    }
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
    },
    iconStyle:{
        height: 15,
        width: 15
    },
    starsStyle:{
        flexDirection: "column",
        flex: 1
    }
});
export default withNavigation(serviceList)
