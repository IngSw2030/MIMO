import React, {useState} from 'react';
import { Image, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { navigate } from '../navigationRef';
import StarRating from 'react-native-star-rating';

const VeterinaryListComponent = props => {
    const mimoIcon = require('../../assets/mimo.png');

    const veterinary = props.veterinary;

    return (
        <View style={styles.body}>
            <TouchableOpacity
                style={styles.componente}
                onPress={() =>
                    navigate(props.goTo, {
                        veterinary: veterinary,
                    })
                }
            >
                {
                    !veterinary.photo
                        ?
                        <Image style={styles.imageStyle} source={mimoIcon} />
                        :
                        <Image style={styles.imageStyle} source={{ uri: `data:image/gif;base64,${veterinary.photo}` }} />
                }
                <View style={styles.contenedorTexto}>
                    <Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>Nombre: </Text>
                        <Text style={styles.texto}>{veterinary.name}</Text>
                    </Text>
                    <Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>Dirección: </Text>
                        <Text style={styles.texto}>{veterinary.address}</Text>
                    </Text>
                    <Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>Número: </Text>
                        <Text style={styles.texto}>{veterinary.contact}</Text>
                    </Text>
                    <Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>Nombre: </Text>
                        <Text style={styles.texto}>{veterinary.name}</Text>
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>
                            <Text style={{fontWeight: 'bold', fontSize: 16}}>Descripción: </Text>
                            <Text style={styles.texto}>{veterinary.description}</Text>
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Calificacion: </Text>
                    <View style={{ marginLeft: 5 }}>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={veterinary.avgScore}
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
        margin: '2.5%',
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
        height: 130,
        width: 130,
        borderRadius: 40,
        margin: 6
    },
    contenedorTexto: {
        flexDirection: 'column',
        flex: 1,
        marginVertical: '2%',
        paddingRight: '8%'
    }

});

export default withNavigation(VeterinaryListComponent);