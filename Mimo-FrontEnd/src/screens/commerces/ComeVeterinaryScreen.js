import React, { useContext, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import WideListComponent from '../../components/wideListComponent';
import usePostID from '../../hooks/usePostID';
import { Context as VetContext } from '../../context/VetContext';

const ComVeterinaryScreen = () => {
    const { state: vets } = useContext(VetContext);
	const VetComponent = usePostID;
    return (
        <View>
            <Text>Pantalla de ComVeterinaryScreen</Text>
            <WideListComponent/>
        </View>
    )
}

export default withNavigation(ComVeterinaryScreen)