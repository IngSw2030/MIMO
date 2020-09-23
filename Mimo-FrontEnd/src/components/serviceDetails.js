import React from 'react'
import { View, Text, StyleSheet, Image, FlatList,TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation';

const ServiceDetails = ({data, calificacion}) => {
    const imagen = require("../../assets/paseador.jpg");
    const ratingIcon = require('../../assets/rating.png');
    const tipo = Capitalize(data);
    const estrellas = insertarEstrellas(calificacion);
    return (
        
        <View>
            <Image
                style = {styles.imageStyle}
                source= {imagen}
            />
            <View style={({marginHorizontal:15})}>
                <Text style={styles.titleStyle}> {tipo}</Text>
                <Text style={styles.titleStyle}> Descripcion</Text>
                <Text style={({marginLeft:5})}>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Text>
                <TouchableOpacity
                    style={styles.starsStyle}
                >
                    <Text style={styles.titleStyle}> Calificacion</Text>
                    <View style={({marginLeft:5})}>
                        <FlatList
                            data = {estrellas}
                            keyExtractor = {(estrella)=>estrella.cantidad.toString()}
                            numColumns = {5}
                            renderItem ={({estrellas})=>{
                            return (
                                <Image style={styles.iconStyle}  source={ratingIcon}/>
                                ) 
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const Capitalize = (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
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
    imageStyle:{
        marginTop:40,
        height: 300,
        width:300,
        alignSelf:"center"
    }, 
    titleStyle:{
        fontSize: 20,
        fontWeight:"bold"
    }, 
    starsStyle:{
        flexDirection: "column",
    },
    iconStyle:{
        height: 15,
        width: 15
    },

});
export default withNavigation(ServiceDetails)