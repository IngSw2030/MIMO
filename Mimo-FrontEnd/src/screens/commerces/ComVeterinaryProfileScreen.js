import React, { useContext, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as UserContext } from '../../context/UserContext';
import SaveModifyVetComponent from '../../components/saveModifyVetComponent';

const ComVeterinaryProfileScreen = (props) => {

    const data = props.navigation.getParam('veterinary');

    return (
        <View style={styles.generalView}>
            <SaveModifyVetComponent
                data = {data}
                description={data.description}
                name={data.name}
                openAt={data.openAt}
                closeAt={data.closeAt}
                photo = {data.photo}
                address = {data.address}
                number = {data.contact}
                action = {'modify'}
            />
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
export default withNavigation(ComVeterinaryProfileScreen)