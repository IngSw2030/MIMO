import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const ServicesScreen = ({ navigation }) => {
	const mimoIcon = require('../../../../assets/mimo.png');
	const mimoEstilista = require('../../../../assets/mimoEstilista.png');

	return (
		<View style={{ backgroundColor: '#EDDF98', flex: 1 }}>
			<View>
				<Image style={styles.logoStyle} source={mimoIcon} />
				<Text style={styles.titleStyle}> Servicios </Text>
			</View>
			<View style={styles.generalView}>
				<TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('AquariumCleaner')}>
					<Image style={styles.iconStyle} source={mimoIcon} />
					<Text style={styles.serviceNameStyle}> Limpieza de pecera</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('PetWalker')}>
					<Image style={styles.iconStyle} source={mimoIcon} />
					<Text style={styles.serviceNameStyle}> Paseos</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.generalView}>
				<TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Grooming')}>
					<Image style={styles.iconStyle} source={mimoEstilista} />
					<Text style={styles.serviceNameStyle}> Estilista</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('PetSitting')}>
					<Image style={styles.iconStyle} source={mimoIcon} />
					<Text style={styles.serviceNameStyle}> Cuidadores</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	logoStyle: {
		height: 255,
		width: 255,
		alignSelf: 'center',
	},
	titleStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 15,
		alignSelf: 'center',
	},
	serviceNameStyle: {
		alignSelf: 'center',
	},
	iconStyle: {
		height: 120,
		width: 120,
		alignSelf: 'center',
		//flexGrow: 1,
	},
	buttonStyle: {
		backgroundColor: 'rgba(159, 202, 226, 0.89)',
		borderRadius: 25,
		height: 150,
		width: 150,
		margin: 10,
		flexDirection: 'column',
	},

	generalView: {
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 10,
	},
});
export default withNavigation(ServicesScreen);
