import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { withNavigation } from 'react-navigation';

const ServiceDetailsScreen = (props) => {
    const imagen = require("../../../../assets/paseador.jpg");
    const data = props.navigation.getParam('data');
    console.log(data);
    return (
        
        <View style={({alignSelf:"center"})}>
            <Image
                style = {styles.imageStyle}
                source= {imagen}
            />
            <Text> Paseador</Text>
            <Text> Descripcion</Text>
            <Text> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Text>
            <Text> Calificacion</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    imageStyle:{
        marginTop:40,
        height: 300,
        width:300
    }
});
export default withNavigation(ServiceDetailsScreen)