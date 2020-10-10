import React, { useContext, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
const ComVeterinaryScreen = () => {
    return (
        <View>
            <Text>Pantalla de ComVeterinaryScreen</Text>
        </View>
    )
}

export default withNavigation(ComVeterinaryScreen)