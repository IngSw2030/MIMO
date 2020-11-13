import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import useProductName from '../hooks/useProductName';
import usePrice from '../hooks/usePrice';
import { navigate } from '../navigationRef';

const ServiceComponent = props => {
	const service = props.service;
	//const pantalla = props.pantalla;
	const allowedTextSize = 15;
	return (
		<View style={styles.viewStyle}>
			<TouchableOpacity
				style={styles.buttonStyle}
				onPress={()=>{
					console.log(service);
					navigate('ComEditService',{
						service: service,
					});
				}}
			>
				<Image style={styles.imageStyle} source={{ uri: `data:image/gif;base64,${service.photo}` }}/>
				<View style={styles.textStyle}>
					<Text style={styles.nameStyle}>{service.name}</Text>
					<Text style={styles.nameStyle}>{service.category}</Text>
					<Text style={styles.priceStyle}>$ {service.price}</Text>
					<Text style={styles.priceStyle}>{service.description}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonStyle: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#FFA1A9',
		borderRadius: 10,
		margin: 5,
	},
	imageStyle: {
		height: '90%',
		width: 120,
		marginTop: 7,
		marginHorizontal:7,
		borderRadius: 10,
	},
	nameStyle: {
		fontWeight: 'bold',
		marginLeft: 5,
		fontSize: 15,
	},
	priceStyle: {
		marginLeft: 5,
	},
	viewStyle: {
        marginHorizontal: 5,
        height: 150,
        flexGrow: 1,
	},
	textStyle: {
        marginTop: 5,
        height: 150,
        flexGrow: 1,
	},
});

export default withNavigation(ServiceComponent);