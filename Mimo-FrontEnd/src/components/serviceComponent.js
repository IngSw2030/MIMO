import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import useProductName from '../hooks/useProductName';
import usePrice from '../hooks/usePrice';
import { navigate } from '../navigationRef';

const ServiceComponent = props => {
	const service = props.service;
	const allowedTextSize = 15;
	return (
		<View style={styles.viewStyle}>
			<TouchableOpacity
				style={styles.buttonStyle}
			>

			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonStyle: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFA1A9',
		borderRadius: 10,
		margin: 5,
	},
	imageStyle: {
		height: 90,
		width: 90,
		alignSelf: 'center',
		marginTop: 5,
		borderRadius: 25
	},
	nameStyle: {
		fontWeight: 'bold',
		marginLeft: 5,
		alignSelf: 'center'
	},
	priceStyle: {
		alignSelf: 'center',
	},
	viewStyle: {
        marginHorizontal: 5,
        height: 150,
        flexGrow: 1,
	},
});

export default withNavigation(ServiceComponent);