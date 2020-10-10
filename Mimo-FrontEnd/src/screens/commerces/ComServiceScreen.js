import React from 'react'
import { View, Text } from 'react-native'
import { withNavigation } from 'react-navigation';

const ComServiceScreen = () => {
    return (
        <View>
            <Text>Pantalla de ComServiceScreen</Text>
        </View>
    )
}

export default withNavigation(ComServiceScreen)