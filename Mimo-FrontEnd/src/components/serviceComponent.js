import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import useProductName from '../hooks/useProductName';
import usePrice from '../hooks/usePrice';
import { navigate } from '../navigationRef';
import StarRating from 'react-native-star-rating';

const ServiceComponent = props => {
	const mimoIcon = require('../../assets/mimo.png');
	const service = props.service;
	const pantalla = props.pantalla;
	const allowedTextSize = 15;


	return (
        <View style={styles.body}>
            <TouchableOpacity
                style={styles.componente}
				onPress={() =>
					
                    navigate(pantalla, {
                        service: service,
						data: 'servicio',
						calificacion: service.avgScore,
						descripcion: service.description,
						nombre: service.name,
						id: service._id,
						photo: service.photo,
						precioMax: service.priceMax,
						precioMin: service.priceMin,
                    })
                }
            >
                {
                    !service.photo
                        ?
                        <Image style={styles.imageStyle} source={mimoIcon} />
                        :
                        <Image style={styles.imageStyle} source={{ uri: `data:image/gif;base64,${service.photo}` }} />
                }
                <View style={styles.contenedorTexto}>
                    <Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Nombre: </Text>
                        <Text style={styles.texto}>{service.name}</Text>
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Rango: </Text>
						<Text style={styles.texto}>${service.priceMin} - ${service.priceMax}</Text>
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Descripción: </Text>
                            <Text style={styles.texto}>{service.description}</Text>
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Calificacion: </Text>
                        <View style={{ marginLeft: 5 }}>
                            <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={service.avgScore}
                                starSize={16}
                                buttonStyle={{ margin: 2 }}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
		margin: '3%',
    },
    componente: {
        flexDirection: 'row',
        backgroundColor: '#BCDB89',
        borderRadius: 25,
    },
    texto: {
        fontSize: 15
    },
    descripcion: {
        fontSize: 15,
        flexWrap: 'wrap',
        flex: 1
    },
    imageStyle: {
        height: '85%',
        width: 120,
        borderRadius: 25,
		margin: '3%',
        alignSelf: "center"
    },
    contenedorTexto: {
        flexDirection: 'column',
        flex: 1,
        marginVertical: '3%',
        paddingRight: '8%'
    }

});
export default withNavigation(ServiceComponent);