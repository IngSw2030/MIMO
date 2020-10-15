import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';


const NotificationsScreen = (navigation) => {
    const mimoIcon = require('../../../../assets/mimo.png');
    const sellers = [
        { name: 'David', id: '32514', direccion: 'calle 25 #40-20', valor: 15000 },
        { name: 'Marco', id: '3251214', direccion: 'calle 25 #48-20', valor: 15000  },
        { name: 'Marco', id: '32541214', direccion: 'calle 25 #48-20', valor: 15000  },
        { name: 'Marco', id: '325123214', direccion: 'calle 25 #48-20', valor: 15000  },
        { name: 'Marco', id: '3251211', direccion: 'calle 25 #48-20', valor: 15000  },
        { name: 'Marco', id: '325122214', direccion: 'calle 25 #48-20', valor: 15000  },
        { name: 'Marco', id: '32512255556214', direccion: 'calle 25 #48-20', valor: 15000  },
        { name: 'Marco', id: '3251223344214', direccion: 'calle 25 #48-20', valor: 15000  },
        { name: 'Marco', id: '32512233214', direccion: 'calle 25 #48-20', valor: 15000  },

    ];

     return (
        <View style={({ flex: 1 })}>
            <View>
                <Text style={styles.title}>Notificaciones</Text>
            </View>
            <View style={styles.generalView}>

                <FlatList
                    keyExtractor={ seller=> seller.id}
                    data={sellers}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.containerPhoto}>
                                <View >
                                <Image style={styles.image} source={mimoIcon} />
                                </View>
                                <View style={styles.container}>
                                    <Text style={styles.petInfo}>Nombre: {item.name}</Text>
                                    <Text style={styles.petInfo}>Id: {item.id}</Text>
                                    <Text style={styles.petInfo}>Direccion: {item.direccion}</Text>
                                    <Text style={styles.petInfo}>Costo: ${item.valor} </Text>

                                </View>
                            </View>

                        );
                    }}
                />
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    title: {
        marginTop: 100,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    textButtons: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
        //backgroundColor: '#DBAB9C'
    },
    generalView: {
        justifyContent: 'center',
      //  flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 50,
        marginBottom: 120,
        marginHorizontal: 20,

    },
    petButtons: {
        backgroundColor: 'rgba(159, 202, 226, 0.81)',
        borderRadius: 25,
        height: 40,
        width: 300,
        margin: 15,
        marginTop: 50,
        marginBottom: 0,

    },
    container: {
        height: 75,
        width: 100,
        backgroundColor: '#BCDB89',
        marginBottom: 5
    },
    containerPhoto: {
        height: 85,
        width: 300,
        backgroundColor: '#BCDB89',
        marginBottom: 10,
        flexDirection: 'row',
        borderRadius: 20
        //justifyContent:'space-between'
    },
    image: {
        height: 80,
        width: 80,
        marginBottom: 3,
        borderRadius:360,
        alignContent:'center',
        margin:2,
    },
    petInfo: {
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 4,
        width:150
    }
});
export default NotificationsScreen;