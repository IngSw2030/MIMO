import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import ServiceList from '../../../components/serviceList';
import ServiceComponent from '../../../components/serviceComponent';
import WideListComponent from '../../../components/wideListComponent';
import { Context as ServiceContext } from '../../../context/ServiceContext';

const PetSittingScreen = screenProps => {
	const imageSource = require('../../../../assets/mimo.png');
	const [servicios, setServicios] = useState([]);
	useEffect(() => {
		setServicios(screenProps.navigation.getParam('datos'));
	}, []);

	return (
		<View style={styles.generalStyle}>
			<Text style={styles.headerStyle}>{screenProps.navigation.getParam('screenTitle')}</Text>
			<FlatList
				data={servicios}
				keyExtractor={item => item._id}
				renderItem={({ item }) => {
					return <ServiceComponent service={item} pantalla = {'ServiceDetails'}/>;
				}}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#88CCF2',
	},
	headerStyle: {
		marginTop: '4%',
		marginLeft: '4%',
		fontSize: 36,
		fontWeight: 'bold',
	},
	generalStyle: {
		backgroundColor: '#FFF7BB',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
	},
});

export default withNavigation(PetSittingScreen);
