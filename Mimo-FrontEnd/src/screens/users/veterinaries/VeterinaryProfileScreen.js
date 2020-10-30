import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import ServiceDetails from '../../../components/serviceVetDetails'


const VeterinaryProfileScreen = (props) => {

    const data = props.navigation.getParam('veterinary');
    return (
        <View style={styles.generalView}>
            <ServiceDetails
                data={data}
                calificacion={data.avgScore}
                descripcion={data.description}
                nombre={data.name}
                id={data._id}
            />
            <View style={styles.bottomViewStyle}>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    generalView: {
        backgroundColor: '#FFF7BB',
        flexGrow: 1,
        paddingTop: 20,
    },
    buttonStyle: {
        backgroundColor: '#E8778B',
        height: 50,
        width: 220,
        borderRadius: 15,
        marginLeft: 30,
        marginTop: 30,
        flexDirection: "row"
    },
    textStyle: {
        fontSize: 20,
        alignSelf: "center",
    },
    iconStyle: {
        width: 40,
        height: 40,
        marginRight: 15
    }
});

export default withNavigation(VeterinaryProfileScreen)