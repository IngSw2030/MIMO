import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import uploadPhoto from '../../../hooks/uploadPhoto';
import { FontAwesome } from '@expo/vector-icons';


const UserSettingsScreen = () => {
    const mimoIcon = require('../../../../assets/mimo.png');
    const [escogerImagen, imagen] = uploadPhoto();
    return (
        <View style={({ backgroundColor: '#EDDF98' ,flex:1})}>
            <View style={styles.uploadImageStyle}>
                <TouchableOpacity
                    style={styles.iconsStyle}
                    onPress={()=> escogerImagen()}
                >
                    {imagen
                        ? <Image source={{ uri: `data:image/gif;base64,${imagen}` }} style={{ width: 350, height: 200, borderRadius: 30 }} />
                        : <FontAwesome name="user-circle-o" size={150} color="white" />
                    }

                </TouchableOpacity>
            </View>
            <Text style={styles.name}>Nombre de usuario</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Nombre</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Direccion</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Correo</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        marginTop: 150,
        height: 255,
        width: 255,
        alignSelf: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#BCDB89',
        height: 50,
        width: 300,
        margin: 15,
        marginBottom: 15,
        flexGrow: 1,
        borderRadius: 25,
        alignSelf: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 7
    },
    iconsStyle: {
        alignSelf: 'center',
        justifyContent: 'center'
        },
        uploadImageStyle: {
            width: 350,
            height: 200,
            backgroundColor: '#4F4D4C',
            alignSelf: 'center',
            marginTop: 40,
            borderRadius: 30
            },

});
export default UserSettingsScreen;