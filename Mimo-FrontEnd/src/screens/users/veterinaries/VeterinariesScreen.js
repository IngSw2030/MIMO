import React, {useContext}from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { withNavigation } from 'react-navigation';
import VetComponent from '../../../components/vetComponent';
import WideListComponent from '../../../components/wideListComponent'
import {Context as VetContext} from '../../../context/VetContext';

const VeterinariesScreen = () => {
    const {state:veterinarias} = useContext(VetContext);

    return (
        <View style= {styles.generalView}>
            <WideListComponent 
                title ='Veterinarias' 
                list={veterinarias}
                componentToRender={(item)=>{return <VetComponent id = {item}/>}}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    generalView:{
        marginTop: 25,
        backgroundColor: '#FFF7BB',
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch"
    }
});

export default withNavigation(VeterinariesScreen);