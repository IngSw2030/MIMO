import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { navigate } from '../navigationRef';

const ServiceDetails = ({ data, calificacion, descripcion, nombre, id }) => {
    console.log("AYUDA" + id);
    const ratingIcon = require('../../assets/rating.png');
    const tipo = (data);
    const estrellas = insertarEstrellas(calificacion);
    const mimoIcon = require('../../assets/mimo.png');

    return (
        <View style={{ marginHorizontal: '5%', flex: 1 }}>
            {
                data.photo != ""
                    ?
                    <Image style={styles.imageStyle} source={mimoIcon} />
                    :
                    <Image style={styles.imageStyle} source={{ uri: `data:image/gif;base64,${data.photo}` }} />
            }
            <Text style={styles.nombre}>{nombre}</Text>
            <Text style={styles.titleStyle}>Descripcion:</Text>
            <Text style={{ fontSize: 20 }}>{descripcion}</Text>

            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.titleStyle}>Calificacion ''</Text>
                <View style={{ marginLeft: 5 }}>
                    <FlatList
                        data={estrellas}
                        keyExtractor={(estrella) => estrella.cantidad.toString()}
                        numColumns={5}
                        renderItem={({ estrellas }) => {
                            return (
                                <Image style={styles.iconStyle} source={ratingIcon} />
                            )
                        }}
                    />
                </View>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={() =>
                        navigate('Reviews', {
                            id: id,
                            calificacion: calificacion
                        })
                    }
                    style={styles.comentarios}
                >
                    <FontAwesome5 name="comment-dots" size={24} color="black" />
                    <Text style={styles.textoBotones}>Comentarios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contactar}>
                    <FontAwesome name="send-o" size={24} color="black" />

                    <Text style={styles.textoBotones}>Contactar</Text>
                </TouchableOpacity>
            </View>

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
    contactar: {
        backgroundColor: '#B0EFEF',
        width: 200,
        borderRadius: 25,
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    textoBotones: {
        fontSize: 25,
    },
    comentarios: {
        backgroundColor: '#E8916C',
        width: 200,
        borderRadius: 25,
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    nombre: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: '5%'
    },
    imageStyle: {
        marginTop: 40,
        height: 300,
        width: 300,
        alignSelf: "center",
        marginBottom: 10,
        borderRadius: 10
    },
    titleStyle: {
        fontSize: 25,
        fontWeight: "bold"
    },
    iconStyle: {
        height: 30,
        width: 30
    },

});
export default withNavigation(ServiceDetails)