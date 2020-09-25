import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation';

const vetComponent=(props) =>{
    const src = require('../../assets/mimo.png');
    return(
        <View style= {styles.componentStyle}>
            <TouchableOpacity
                onPress = {
                    () => props.navigation.navigate(
                        'VeterinaryProfile',
                        {
                            direccion: props.direccion,
                            telefono: props.telefono,
                            descripcion: props.descripcion,
                            calificacion: props.calificacion,
                            nombre: props.nombre
                        })
                }
            >
                <View style={styles.viewStyle}>
                    <Image style={styles.imageStyle} source={src}/>
                    <View style={({flex:1})}>
                        <Text style={styles.titleStyle}>Direccion: </Text>
                        <Text>{props.direccion}</Text>
                        <Text style={styles.titleStyle}>Numero: </Text>
                        <Text>{props.telefono}</Text>
                        <Text style={styles.titleStyle}>Descripcion: </Text>
                        <Text style={styles.textStyle}>{props.descripcion}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    componentStyle:{
        backgroundColor: '#CCDB79',
        height:150,
        marginTop:15,
        borderRadius:15
        
    },
    imageStyle :{
        height:120,
        width:90,
        alignSelf: "flex-start"
    },
    titleStyle:{
        fontWeight: "bold",
    },
    viewStyle:{
        flexDirection:"row",
        flexGrow:1,
        flexBasis: "auto"
    },
    textStyle:{
        //flex: 1,
        flexWrap: "wrap",
    }
});

export default withNavigation(vetComponent);