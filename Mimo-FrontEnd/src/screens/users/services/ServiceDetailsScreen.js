import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { withNavigation } from 'react-navigation';
import ServiceDetails from '../../../components/serviceVetDetails'

const ServiceDetailsScreen = (props) => {
    const data = props.navigation.getParam('data');
    const calificacion = props.navigation.getParam('calificacion');
    const precioMax = props.navigation.getParam('precioMax');
    const precioMin = props.navigation.getParam('precioMin');
    const descripcion = props.navigation.getParam('descripcion');
    const foto = props.navigation.getParam('photo');
    const nombre = props.navigation.getParam('nombre');
    const id = props.navigation.getParam('id');
    
    console.log("Nombre en Service details" + nombre)
    return(
        <ServiceDetails 
            data = {data}
            calificacion={calificacion}
            descripcion = {descripcion}
            precioMax = {precioMax}
            precioMin = {precioMin}
            photo = {foto}
            id = {id}
            nombre = {nombre}
        />
    )
}

export default withNavigation(ServiceDetailsScreen)