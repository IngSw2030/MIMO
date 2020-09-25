import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { withNavigation } from 'react-navigation';

const ProductServiceDetails = ({data, calificacion, descripcion}) => {
    const imagen = require("../../assets/paseador.jpg");
    const ratingIcon = require('../../assets/rating.png');
    const tipo = Capitalize(data);
    const desc = Capitalize(descripcion);
    return (
        
        <View>
            <Image
                style = {styles.imageStyle}
                source= {imagen}
            />
            <View style={({marginHorizontal:15})}>
                <Text style={styles.titleStyle}> {tipo}</Text>
                <Text style={styles.titleStyle}> Descripcion</Text>
                <Text style={({marginLeft:5})}>{desc}</Text>
            </View>
        </View>
    )
}
const Capitalize = (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
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
export default withNavigation(ProductServiceDetails)