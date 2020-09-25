import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import uploadPhoto from '../../../hooks/uploadPhoto';
import { FontAwesome } from '@expo/vector-icons';


const UserSettingsScreen = () => {
    const [escogerImagen, imagen] = uploadPhoto();
    return (
        <View >
            <View style={styles.uploadImageStyle}>
                <TouchableOpacity
                    style={styles.iconsStyle}
                    onPress={() => escogerImagen()}
                >
                    {imagen
                        ? <Image source={{ uri: `data:image/gif;base64,${imagen}` }} style={styles.image} />
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
    image: {
        width: 150,
        height: 150,
        borderRadius: 360,
        marginTop: 40,
        alignSelf: 'center'
    }
    ,
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom:40
    },
    button: {
        backgroundColor: '#BCDB89',
        height: 50,
        width: 300,
        margin: 15,
        borderRadius: 25,
        alignSelf: 'center',
        marginBottom:20
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 7
    },
    iconsStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop:30
    },
    uploadImageStyle: {
        width: 350,
        height: 200,
        alignSelf: 'center',
        marginTop: 40,
        borderRadius: 360
    },

});
export default UserSettingsScreen;