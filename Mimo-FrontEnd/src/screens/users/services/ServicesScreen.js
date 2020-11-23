import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import useSearch from '../../../hooks/useResultsServices';

const ServicesScreen = ({ navigation }) => {
	const mimoIcon = require('../../../../assets/mimo.png');
	const mimoEstilista = require('../../../../assets/mimoEstilista.png');
	const aquariumCleanerText = 'Limpieza de pecera';
	const petWalkerText = 'Paseos';
	const groomingText = 'Estilista';
	const petSittingText = 'Cuidadores';
	const [searchApi, results, cuidadores, paseadores, estilistas, limpiadores, errorMessage] = useSearch();

	useEffect(() => {
		searchApi();
	}, []);
	return (
		<ScrollView style={{ backgroundColor: '#FFF7BB', flex: 1 }} showsHorizontalScrollIndicator={false}>
			<View>
				<Image style={styles.logoStyle} source={mimoIcon} />
				<Text style={styles.titleStyle}> Servicios </Text>
			</View>
			<View style={styles.parteInferior}>
				<View style={styles.generalView}>
					<TouchableOpacity style={styles.aquariumStyle} onPress={() => navigation.navigate('AquariumCleaner', { screenTitle: aquariumCleanerText })}>
						<Image style={{ height: 120, width: 110, alignSelf: 'center' }} source={mimoIcon} />
						<Text style={styles.buttonNameStyle}>{aquariumCleanerText}</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.walkerStyle} onPress={() => navigation.navigate('PetWalker', { screenTitle: petWalkerText })}>
						<Image style={{ height: 120, width: 110, alignSelf: 'center' }} source={mimoIcon} />
						<Text style={styles.buttonNameStyle}>{petWalkerText}</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.generalView}>
					<TouchableOpacity style={styles.groomingStyle} onPress={() => navigation.navigate('Grooming', { screenTitle: groomingText })}>
						<Image style={{ height: 125, width: 90, alignSelf: 'center' }} source={mimoEstilista} />
						<Text style={styles.buttonNameStyle}>{groomingText}</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.sittingStyle} onPress={() => navigation.navigate('PetSitting', { screenTitle: petSittingText })}>
						<Image style={{ height: 120, width: 110, alignSelf: 'center' }} source={mimoIcon} />
						<Text style={styles.buttonNameStyle}>{petSittingText}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	logoStyle: {
		height: 255,
		width: 255,
		alignSelf: 'center',
	},
	titleStyle: {
		fontSize: 30,
		fontWeight: 'bold',
		marginLeft: '5%',
		marginBottom: '2%',
	},
	serviceNameStyle: {
		fontSize: 23,
		textAlign: 'center',
	},
	iconStyle: {
		height: 120,
		width: 110,
		alignSelf: 'center',
		//flexGrow: 1,
	},

	parteInferior: {
		flex: 1,
		justifyContent: 'space-around',
	},
	buttonNameStyle: {
		fontSize: 23,
		textAlign: 'center',

	},
	aquariumStyle: {
		backgroundColor: '#B8DC7D',
		borderRadius: 25,
		marginRight: '2.5%',
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'column',
	},
	walkerStyle: {
		backgroundColor: '#7E9FD1',
		borderRadius: 25,
		marginLeft: '2.5%',
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'column',
	},
	groomingStyle: {
		backgroundColor: '#E8778B',
		borderRadius: 25,
		marginRight: '2.5%',
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'column',
	},
	sittingStyle: {
		backgroundColor: '#88CCF2',
		borderRadius: 25,
		marginLeft: '2.5%',
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'column',
	},
	generalView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingHorizontal: '5%',
		flex: 1,
		paddingBottom: '5%',

	},
});
export default withNavigation(ServicesScreen);
