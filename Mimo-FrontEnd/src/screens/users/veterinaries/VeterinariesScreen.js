import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { withNavigation } from 'react-navigation';
import VetComponent from '../../../components/vetComponent';

const VeterinariesScreen = () => {
    return (
        <View style= {styles.generalView}>
            <Text style={styles.titeStyle}>Veterinarias</Text>
            <VetComponent
                direccion ='XXXXXXXXX'
                telefono = '000000000'
                descripcion = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                nombre = 'Pet Plus' 
                calificacion = '3'   
            />
            <VetComponent
                direccion ='XXXXXXXXX'
                telefono = '000000000'
                descripcion = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'  
                nombre = 'Pet Plus2' 
                calificacion = '2'   
            />
        </View>
    )
}
const styles = StyleSheet.create({
    generalView:{
        backgroundColor: '#FFF7BB',
        flexGrow: 1,
        paddingTop:50,
        paddingHorizontal:15
    },
    titeStyle:{
        fontSize:20,
        fontWeight: "bold",
    }
});

export default withNavigation(VeterinariesScreen);