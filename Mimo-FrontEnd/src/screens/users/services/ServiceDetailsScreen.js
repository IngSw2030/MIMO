import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { withNavigation } from 'react-navigation';
import ServiceDetails from '../../../components/serviceDetails'

const ServiceDetailsScreen = (props) => {
    const data = props.navigation.getParam('data');
    const calificacion = props.navigation.getParam('calificacion');
    const precio = props.navigation.getParam('precio');
    const descripcion = props.navigation.getParam('descripcion');
    return(
        <View style={styles.generalView}>
            <View style={styles.serviceStyle}>
                <ServiceDetails 
                    data = {data}
                    calificacion={calificacion}
                    descripcion = {descripcion}
                />
            </View>
            <View style={styles.bottomViewStyle}>
                <Text style= {styles.textStyle}>${precio}</Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                >
                    <Image style={styles.iconStyle}/>
                    <Text style={styles.textStyle}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    generalView:{
        backgroundColor: '#FFF7BB',
        flexDirection: 'row',
        flexWrap: "wrap",
        flex: 1
    },
    textStyle:{
        fontSize:20,
        alignSelf: "center"
    },
    serviceStyle:{
        flexShrink:  1,
        maxWidth: '100%'
    },
    buttonStyle:{
        backgroundColor: '#E8778B',
        height:50,
        width:170,
        borderRadius: 15,
        marginLeft: 30,
        flexDirection:"row"
    },
    bottomViewStyle:{
        margin: 30,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    iconStyle:{
        width:40,
        height:40,
        marginRight:15,
    }
})
  
export default withNavigation(ServiceDetailsScreen)