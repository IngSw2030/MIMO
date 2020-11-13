import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import ServiceList from '../../../components/serviceList';
import WideListComponent from '../../../components/wideListComponent'
import {Context as ServiceContext} from '../../../context/ServiceContext'

const PetSittingScreen = screenProps => {
	const imageSource = require('../../../../assets/mimo.png');
	const {state:servicios}= useContext(ServiceContext);
	return (
		<View style={styles.generalStyle}>
			<Text style={styles.headerStyle}>{screenProps.navigation.getParam('screenTitle')}</Text>
			<WideListComponent
				list ={servicios}
				componentToRender={(item)=>{return <ServiceList id = {item}/>}}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#88CCF2',
	},
	headerStyle: {
		marginTop: '3.5%',
		marginLeft: '2.5%',
		fontSize: 32,
		fontWeight: 'bold',
	},
	generalStyle: {
		backgroundColor: '#FFF7BB',
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch"
	},
});


export default withNavigation(PetSittingScreen);
