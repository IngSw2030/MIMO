import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import ServiceDetails from '../../../components/serviceDetails'

const VeterinaryProfileScreen = (props) => {
    const data = props.navigation.getParam('nombre');
    const calificacion = props.navigation.getParam('calificacion');
    const descripcion = props.navigation.getParam('descripcion');
    return (
        <View>
            <Text>Pantalla de VeterinaryProfileScreen</Text>
            <ServiceDetails
                data = {data}
                calificacion={calificacion}
                descripcion = {descripcion}
            />
        </View>
    )
};
const styles = StyleSheet.create({

});

export default VeterinaryProfileScreen