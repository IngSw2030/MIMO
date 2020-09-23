import React from 'react'
import { View, Text, StyleSheet, Image, FlatList} from 'react-native'
import { withNavigation } from 'react-navigation';
import ServiceDetails from '../../../components/serviceDetails'

const ServiceDetailsScreen = (props) => {
    const data = props.navigation.getParam('data');
    const calificacion = props.navigation.getParam('calificacion');
    const precio = props.navigation.getParam('precio');
    return(
        <View style={styles.generalView}>
            <View>
                <ServiceDetails 
                    data = {data}
                    calificacion={calificacion}
                />
            </View>
            <View>
                <Text>{precio}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    generalView:{
        alignSelf: "center",
        backgroundColor: '#EDDF98'
    },
})
  
export default withNavigation(ServiceDetailsScreen)