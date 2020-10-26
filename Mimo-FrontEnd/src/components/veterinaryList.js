import React from 'react';
import { Image, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { navigate } from '../navigationRef';

const VeterinaryListComponent = props => {
    const mimoIcon = require('../../assets/mimo.png');

    const veterinary = props.veterinary;
    console.log(veterinary);
    return (
        <View style={styles.body}>
            <TouchableOpacity
                style={styles.componente}
                onPress={() =>
                    navigate('VeterinaryProfile', {
                        veterinary: veterinary,
                    })
                }
            >
                {
                    veterinary.photo != ""
                        ?
                        <Image style={styles.imageStyle} source={mimoIcon} />
                        :
                        <Image style={styles.imageStyle} source={{ uri: `data:image/gif;base64,${veterinary.photo}` }} />
                }
                <View style={styles.contenedorTexto}>
                    <Text style={styles.texto}>Dirección: {veterinary.address}</Text>
                    <Text style={styles.texto}>Numero: {veterinary.number}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.descripcion}>Descripción: {veterinary.description}</Text>
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
    },
    contenedorTexto: {
        flexDirection: 'column',
        flex: 1,
        marginTop: '2%',
        paddingRight: '20%'
    }

});

export default withNavigation(VeterinaryListComponent);