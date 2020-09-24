import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import ServiceDetails from '../../../components/serviceDetails'

const VeterinaryProfileScreen = (props) => {
    const data = props.navigation.getParam('nombre');
    const calificacion = props.navigation.getParam('calificacion');
    const descripcion = props.navigation.getParam('descripcion');
    return (
        <View style=  {styles.generalView}>
            <ServiceDetails
                data = {data}
                calificacion={calificacion}
                descripcion = {descripcion}
            />
            <View style={styles.bottomViewStyle}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                >
                    <Image style={styles.iconStyle}/>
                    <Text style={styles.textStyle}>Ver comentarios</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    generalView:{
        backgroundColor: '#EDDF98',
        flexGrow: 1,
        paddingTop:20,
    },
    buttonStyle:{
        backgroundColor: '#E8916C',
        height:50,
        width:220,
        borderRadius: 15,
        marginLeft: 30,
        marginTop: 30,
        flexDirection:"row"
    },
    textStyle:{
        fontSize:20,
        alignSelf: "center",
    },
    iconStyle:{
        width:40,
        height:40,
        marginRight:15
    }
});

export default withNavigation(VeterinaryProfileScreen)