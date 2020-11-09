import React, { useContext, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import WideListComponent from '../../components/wideListComponent';
import usePostID from '../../hooks/usePostID';
import navigate from '../../navigationRef';
import { Context as VetContext } from '../../context/VetContext';

const ComVeterinaryScreen = ({navigation}) => {
    const { state: vets } = useContext(VetContext);
	const VetComponent = usePostID;
    return (
        <View>
            <Text>Pantalla de ComVeterinaryScreen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ComAddVeterinary')}>
					<Text style={{fontSize: 32}}>Agregar Vet</Text>
            </TouchableOpacity>
            <WideListComponent/>
        </View>
    )
}

export default withNavigation(ComVeterinaryScreen)