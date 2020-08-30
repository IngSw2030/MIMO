import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const StartScreen = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
            >
                <Text>Pantalla de Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StartScreen