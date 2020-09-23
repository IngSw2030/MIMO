import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { withNavigation } from 'react-navigation';
import ServiceList from '../../../components/serviceList';
const PetWalkerScreen = () => {
    const imageSource = require('../../../../assets/mimo.png');
    return (
        <View style={styles.generalStyle}>
            <Text style= {styles.headerStyle}>Paseadores</Text>
            <ServiceList 
                id = '1000'
                nombre= 'McLovin'
                calificacion='5'
                imageSource={imageSource}
                tipo = 'Paseador'
                precio = '15000'
            />
            <ServiceList 
                id = '1003'
                nombre= 'dr. P. Lankton'
                calificacion='1'
                imageSource={imageSource}
                tipo = 'Paseador'
                precio = '15000'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor: 'rgba(159, 202, 226, 0.89)'
    },
    headerStyle:{
        marginTop:30,
        marginLeft:15,
        fontSize: 23,
        fontWeight: "bold"
    },
    generalStyle:{
       backgroundColor: '#EDDF98',
       height: 1000
    }
});

export default withNavigation(PetWalkerScreen)