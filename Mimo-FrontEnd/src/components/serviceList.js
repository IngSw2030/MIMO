import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as ServiceContext } from '../context/ServiceContext'

const serviceList = (props) => {
    
    const { state: servicios } = useContext(ServiceContext);
    const servicio = servicios.find(thisservicio => thisservicio.id === props.id);
    const rating = require('../../assets/rating.png');
    const estrellas = insertarEstrellas(servicio.avgScore);
    const mimoIcon = require('../../assets/mimo.png');


    return (
        <View>
            <TouchableOpacity
                style={styles.viewStyle}
                onPress={() => props.navigation.navigate(
                    'ServiceDetails',
                    {
                        data: 'servicio',
                        calificacion: servicio.avgScore,
                        precioMax: servicio.priceMax,
                        precioMin: servicio.priceMax,
                        descripcion: servicio.description,
                        foto: servicio.photo
                    }
                )}>
                {
                    !servicio.photo
                        ?
                        <Image style={styles.imageStyle} source={mimoIcon} />
                        :
                        <Image style={styles.imageStyle} source={{ uri: `data:image/gif;base64,${servicio.photo}` }} />
                }
                <View style={styles.contenedorTexto}>
                    <Text>Nombre: {servicio.name}</Text>
                    <Text style = {styles.descripcion}>Descripcion: {servicio.description}</Text>
                    <Text>Calificacion:</Text>
                    <View style={styles.starsStyle}>
                        <FlatList
                            data={estrellas}
                            keyExtractor={(estrella) => estrella.cantidad.toString()}
                            numColumns={5}
                            renderItem={({ estrellas }) => {
                                return (
                                    <Image style={styles.iconStyle} source={rating} />
                                )
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )

}
const insertarEstrellas = (cantidad) => {
    if (cantidad > 0) {
        const estrellas = [...insertarEstrellas(cantidad - 1), { cantidad }];
        return estrellas;
    }
    else {
        const estrellas = [];
        return estrellas;
    }
}
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'rgba(159, 202, 226, 0.89)',
        margin: '2.5%',
        flexDirection: 'row',
        flexGrow: 1,
        borderRadius: 25

    },
    imageStyle: {
        height: 130,
        width: 130,
        borderRadius: 40,
        margin: 6
    },
    iconStyle: {
        height: 15,
        width: 15
    },
    starsStyle: {
        flexDirection: "column",
        flex: 1
    },
    descripcion: {
        fontSize: 15,
        flexWrap: 'wrap',
        flex: 1
    },
    contenedorTexto: {
        flexDirection: 'column',
        flex: 1,
        marginTop: '2%',
        paddingRight: '10%'
    }
});
export default withNavigation(serviceList)
