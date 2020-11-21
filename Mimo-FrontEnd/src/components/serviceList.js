import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as ServiceContext } from '../context/ServiceContext';

const serviceList = props => {
	const { state: servicios } = useContext(ServiceContext);
	const servicio = props.service;
	const rating = require('../../assets/rating.png');

	return (
		<View>
			<TouchableOpacity
				style={styles.viewStyle}
				onPress={() =>
					props.navigation.navigate('ServiceDetails', {
						data: servicio.category,
						precio: servicio.price,
						descripcion: servicio.description,
					})
				}
			>
				{/* <View>
					<Image source={servicio.photo} style={styles.imageStyle} />
				</View> */}
				<View style={({ alignSelf: 'center' }, { marginTop: 10 })}>
					<Text>Nombre: {servicio.name}</Text>
					<Text>ID: {servicio.id}</Text>
					<Text>Calificacion:</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: 'rgba(159, 202, 226, 0.89)',
		marginTop: 15,
		marginLeft: 15,
		marginRight: 15,
		flexDirection: 'row',
		flexGrow: 1,
		borderRadius: 15,
	},
	imageStyle: {
		height: 100,
		width: 100,
	},
	iconStyle: {
		height: 15,
		width: 15,
	},
	starsStyle: {
		flexDirection: 'column',
		flex: 1,
	},
});
export default withNavigation(serviceList);
