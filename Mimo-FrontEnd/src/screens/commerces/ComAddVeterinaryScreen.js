import React, { useState, useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import SaveModifyVetComponent from '../../components/saveModifyVetComponent';

const ComAddVeterinaryScreen = ({ navigation }) => {

	const openAt= new Date();
	const closeAt = new Date();

    return (
        <View style={styles.generalView}>
            <SaveModifyVetComponent
				data = {''}
				name={'Nombre'}
				description={'Descripción'}
				openAt={openAt}
				closeAt={closeAt}
				photo = {''}
				address = {'Direccion'}
				number = {'Número'}
                action = {'save'}
            />
            <View style={styles.bottomViewStyle}>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    generalView: {
        backgroundColor: '#FFF7BB',
        flexGrow: 1,
        paddingTop: 20,
    },
    buttonStyle: {
        backgroundColor: '#E8778B',
        height: 50,
        width: 220,
        borderRadius: 15,
        marginLeft: 30,
        marginTop: 30,
        flexDirection: "row"
    },
    textStyle: {
        fontSize: 20,
        alignSelf: "center",
    },
    iconStyle: {
        width: 40,
        height: 40,
        marginRight: 15
    }
});

export default (ComAddVeterinaryScreen);
