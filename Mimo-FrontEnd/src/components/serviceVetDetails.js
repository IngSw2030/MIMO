import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { navigate } from '../navigationRef';
import { ScrollView } from 'react-native-gesture-handler';
import StarRating from 'react-native-star-rating';


const ServiceDetails = ({ data, calificacion, descripcion, nombre, id, openat, closeat, photo, precioMax, precioMin }) => {

    const ratingIcon = require('../../assets/rating.png');
    const tipo = (data);
    const mimoIcon = require('../../assets/mimo.png');
    const [generalStarCount, setgeneralStarCount] = useState(calificacion);
    console.log("Nombre en ServiceVet" + nombre)

    return (
        <View style={{ backgroundColor: '#FFF7BB', flex: 1 }}>
            <ScrollView style={{ marginHorizontal: '3%', marginVertical: '6%' }}>
                {
                    !photo
                        ?
                        <Image style={styles.imageStyle} source={mimoIcon} />
                        :
                        <Image style={styles.imageStyle} source={{ uri: `data:image/gif;base64,${photo}` }} />
                }
                <Text style={styles.nombre}>{nombre}</Text>
                <Text style={styles.titleStyle}>Descripcion:</Text>
                <Text style={{ fontSize: 20 }}>{descripcion}</Text>

                {
                    data == 'servicio' ?
                        <Text style={styles.titleStyle}>Precio: {" "} ${precioMin} - ${precioMax}</Text>
                        : <Text style={styles.titleStyle}>Horario: {" "}
                            {(openat.toLocaleString("en-GB", { timeZone: "America/Bogota" })).slice(11, 16)} -
                        {(closeat.toLocaleString("en-GB", { timeZone: "America/Bogota" })).slice(11, 16)}
                        </Text>
                }

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.titleStyle}>Calificacion: </Text>
                    <View style={{ marginLeft: 5 }}>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={generalStarCount}
                            starSize={28}
                            selectedStar={rating => setgeneralStarCount(rating)}
                            buttonStyle={{ margin: 8 }}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() =>
                            data == 'servicio' ?
                                navigate('Reviews', {
                                    id: id,
                                    calificacion: calificacion,
                                    tipo: 'service'
                                })
                            :navigate('Reviews', {
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

            </ScrollView>
        </View>
    )
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
    },
    imageStyle: {

        height: 300,
        width: 300,
        alignSelf: "center",
        marginBottom: 10,
        borderRadius: 30
    },
    titleStyle: {
        fontSize: 25,
        fontWeight: "bold",
    },
    iconStyle: {
        height: 30,
        width: 30
    },

});
export default withNavigation(ServiceDetails)