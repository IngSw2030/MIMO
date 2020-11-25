import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import useSearch from '../../../hooks/useResultsServices';

const ServicesScreen = ({ navigation }) => {
	const mimoIcon = require('../../../../assets/servicios.png');
	const mimoEstilista = require('../../../../assets/mimoEstilista.png');
	const mimoCuidadores = require('../../../../assets/MimoCuidadores.png');
	const mimoLimpieza = require('../../../../assets/mimoLimpiaPecera.png');
	const mimoPaseos = require('../../../../assets/MimoPaseos.png');
	const aquariumCleanerText = 'Limpieza de pecera';
	const petWalkerText = 'Paseos';
	const groomingText = 'Estilistas';
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
					<TouchableOpacity style={styles.aquariumStyle} onPress={() => 
						navigation.navigate('AquariumCleaner', { 
							screenTitle: aquariumCleanerText, 
							datos: limpiadores
						})}>
						<Image style={styles.imageStyle} source={mimoLimpieza} />
						<Text style={styles.buttonNameStyle}>{aquariumCleanerText}</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.walkerStyle} onPress={() => 
						navigation.navigate('PetWalker', { 
							screenTitle: petWalkerText, 
							datos: paseadores 
						})}>
						<Image style={styles.imageStyle} source={mimoPaseos} />
						<Text style={styles.buttonNameStyle}>{petWalkerText}</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.generalView}>
					<TouchableOpacity style={styles.groomingStyle} onPress={() => 
						navigation.navigate('Grooming', { 
							screenTitle: groomingText, 
							datos: estilistas  
						})}>
						<Image style={styles.imageStyle} source={mimoEstilista} />
						<Text style={styles.buttonNameStyle}>{groomingText}</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.sittingStyle} onPress={() => 
						navigation.navigate('PetSitting', { 
							screenTitle: petSittingText, 
							datos: cuidadores 
						})}>
						<Image style={styles.imageStyle} source={mimoCuidadores} />
						<Text style={styles.buttonNameStyle}>{petSittingText}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	logoStyle: {
		height: 230,
		width: 230,
		alignSelf: 'center',
		marginTop:30,
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
		height: 100,
		width: 100,
		alignSelf: 'center',
		//flexGrow: 1,
	},

	parteInferior: {
		flex: 1,
		justifyContent: 'space-around',
	},
	buttonNameStyle: {
		fontSize: 18,
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
	imageStyle:
	{ height: 110, width: 110, alignSelf: 'center' }
});
export default withNavigation(ServicesScreen);
