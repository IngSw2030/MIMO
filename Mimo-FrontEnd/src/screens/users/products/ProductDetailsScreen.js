import React from 'react'
import { View, Text, Image} from 'react-native'
import { withNavigation } from 'react-navigation';

const ProductDetailsScreen = (props) => {
    return (
        <View>
            <Text>Pantalla de ServiceDetailsScreen</Text>
        </View>

    );
}

export default withNavigation(ProductDetailsScreen)