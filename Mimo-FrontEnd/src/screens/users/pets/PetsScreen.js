import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const PetsScreen = ({ navigation }) => {
    //const [pet, setPet] = useState([]);
    const mimoIcon = require('../../../../assets/mimo.png');
    const mascotas = [
        { name: 'MAX', age: 3, gender: 'macho', type: 'perro' },
        { name: 'Cafe', age: 2, gender: 'macho', type: 'hamster' }
    ];


    return (
        <ScrollView style={({flex:1}, { backgroundColor: '#EDDF98' })}>
            <View>
                <Text style={styles.title}>Mis mascotas</Text>
            </View>
            <View style={styles.generalView}>
                
                    <FlatList
                        keyExtractor={pet => pet.name}
                        data={mascotas}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.containerPhoto}>
                                    <View >
                                          <Image style={styles.image} source={mimoIcon} />
                                    </View>
                                    <View style={styles.container}>
                                          <Text style={styles.petInfo}>Nombre: {item.name}</Text>
                                        <Text style={styles.petInfo}>Edad: {item.age}</Text>
                                        <Text style={styles.petInfo}>Genero: {item.gender}</Text>
                                        <Text style={styles.petInfo}>Tipo: {item.type}</Text>
                                      
                                       </View>
                                </View>   
                                        
                            );
                        }}
                    />
                <TouchableOpacity
                    onPress={() => setPet([...pet, info()])}
                    style={styles.petButtons}
                >
                    <Text style={styles.textButtons}>Agregar una mascota</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.petButtons}
                >
                    <Text style={styles.textButtons}>Eliminar una mascota</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

/*const info = () => {
    const name = 'MAX';
    const age = '2 años';
    const gender = 'masculino';
    const type = 'perro';
    return
};*/
const styles = StyleSheet.create({
    title: {
        marginTop: 100,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textButtons: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
        //backgroundColor: '#DBAB9C'
    },
    generalView: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 50,
        marginBottom: 120,
        marginHorizontal: 20,
        flexGrow: 1,
    },
    petButtons: {
        backgroundColor: 'rgba(159, 202, 226, 0.81)',
        borderRadius: 25,
        height: 50,
        width: 300,
        margin: 15,
        marginBottom: 15,
        flexGrow: 1,
    },
    container: {
        height: 75,
        width: 100,
        backgroundColor: '#BCDB89',
        marginBottom:5
    }, 
    containerPhoto: {
        height: 75,
        width: 300,
        backgroundColor: '#BCDB89',
        marginBottom:10,
        flexDirection:'row',
        //justifyContent:'space-between'
    },
    image: {
        height: 80,
        width: 100,
        marginBottom:3
        //alignSelf: 'center',
        //marginBottom:15
        
    },
    petInfo: {
        fontSize: 10,
        fontWeight: 'bold',
        marginTop:4
    }
});

export default PetsScreen;