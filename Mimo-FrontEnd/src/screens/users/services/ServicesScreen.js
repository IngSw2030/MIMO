import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import useSearch from '../../../hooks/useResultsServices'

const ServicesScreen = ({ navigation }) => {
	const mimoIcon = require('../../../../assets/mimo.png');
	const mimoEstilista = require('../../../../assets/mimoEstilista.png');
	const aquariumCleanerText = 'Limpieza de pecera';
	const petWalkerText = 'Paseos';
	const groomingText = 'Estilista';
	const petSittingText = 'Cuidadores';
	const [searchApi, results,cuidadores, paseadores,estilistas,limpiadores, errorMessage] = useSearch();

	return (
		<View style={{ backgroundColor: '#FFF7BB', flex: 1 }}>
			<View>
				<Image style={styles.logoStyle} source={mimoIcon} />
				<Text style={styles.titleStyle}> Servicios </Text>
			</View>
			<View style={styles.generalView}>
				<TouchableOpacity
					style={styles.buttonStyle}
					onPress={() => navigation.navigate('AquariumCleaner', { screenTitle: aquariumCleanerText, datos: limpiadores})}
				>
					<Image style={styles.iconStyle} source={mimoIcon} />
					<Text style={styles.serviceNameStyle}> {aquariumCleanerText}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.buttonStyle}
					onPress={() => navigation.navigate('PetWalker', { screenTitle: petWalkerText })}
				>
					<Image style={styles.iconStyle} source={mimoIcon} />
					<Text style={styles.serviceNameStyle}> {petWalkerText}</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.generalView}>
				<TouchableOpacity
					style={styles.buttonStyle}
					onPress={() => navigation.navigate('Grooming', { screenTitle: groomingText })}
				>
					<Image style={styles.iconStyle} source={mimoEstilista} />
					<Text style={styles.serviceNameStyle}> {groomingText}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.buttonStyle}
					onPress={() => navigation.navigate('PetSitting', { screenTitle: petSittingText })}
				>
					<Image style={styles.iconStyle} source={mimoIcon} />
					<Text style={styles.serviceNameStyle}> {petSittingText}</Text>
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
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		marginBottom:5
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
		backgroundColor: '#88CCF2',
		borderRadius: 25,
		height: 150,
		width: 150,
		marginLeft: 10,
		marginBottom: 10,
		flexDirection: 'column',
		flexGrow: 1,
	},

	generalView: {
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginRight: 10,
	},
});
export default withNavigation(ServicesScreen);
