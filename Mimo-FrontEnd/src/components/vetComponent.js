import React,{useContext}from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation';
import {Context as VetContext} from '../context/VetContext'
const vetComponent=(props) =>{
    const { state: vets } = useContext(VetContext);
    const vet = vets.find(thisvet => thisvet.id === props.id);
    
    const src = require('../../assets/mimo.png');
    return(
        <View style= {styles.componentStyle}>
            <TouchableOpacity
                onPress = {
                    () => props.navigation.navigate(
                        'VeterinaryProfile',
                        {
                            direccion: vet.address,
                            telefono: vet.telefono,
                            descripcion: vet.description,
                            calificacion: vet.avgScore,
                            nombre: vet.name
                        })
                }
            >
                <View style={styles.viewStyle}>
                    <Image style={styles.imageStyle} source={src}/>
                    <View style={({flex:1})}>
                        <Text style={styles.titleStyle}>Nombre: </Text>
                        <Text>{vet.name}</Text>
                        <Text style={styles.titleStyle}>Direccion: </Text>
                        <Text>{vet.address}</Text>
                        <Text style={styles.titleStyle}>Descripcion: </Text>
                        <Text style={styles.textStyle}>{vet.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    componentStyle:{
        backgroundColor: '#B8DC7D',
        height:150,
        marginTop:15,
        borderRadius:15,
        marginHorizontal:10
        
    },
    imageStyle :{
        height:120,
        width:90,
        alignSelf: "flex-start",
        marginHorizontal:5
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