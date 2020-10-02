import React, { useContext, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as UserContext } from '../../context/UserContext';

const HomeScreen = ({ navigation }) => {
	const mimoIcon = require('../../../assets/mimo.png');
	const vetIcon = require('../../../assets/mimoIconVeterinaria.png');
	const foodIcon = require('../../../assets/mimoIconComida.png');
	const accesoriesIcon = require('../../../assets/mimoIconAccesorios.png');
	const servicesIcon = require('../../../assets/mimoIconServicios.png');
	const questionText = '¿Qué buscas hoy?';
	const servicesText = 'Servicios';
	const vetText = 'Veterinaria';
	const accesoriesText = 'Accesorios';
	const foodText = 'Comida';

	const { getUser } = useContext(UserContext);

	useEffect(() => {
		getUser();
	}, []);

	return (
		<View style={{ backgroundColor: '#EDDF98', flex: 1 }}>
			<View>
				<Image style={styles.logoStyle} source={mimoIcon} />
				<Text style={styles.questionStyle}> {questionText} ''</Text>
			</View>
			<View style={styles.generalView}>
				<TouchableOpacity style={styles.servicesStyle} onPress={() => navigation.navigate('Services')}>
					<Image style={styles.iconStyle} source={servicesIcon} />
					<Text style={styles.buttonNameStyle}>{servicesText}</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.vetStyle} onPress={() => navigation.navigate('Veterinaries')}>
					<Image style={styles.iconStyle} source={vetIcon} />
					<Text style={styles.buttonNameStyle}>{vetText}</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.generalView}>
				<TouchableOpacity style={styles.accesoriesStyle} onPress={() => navigation.navigate('Accesories')}>
					<Image style={styles.iconStyle} source={accesoriesIcon} />
					<Text style={styles.buttonNameStyle}>{accesoriesText}</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.foodStyle} onPress={() => navigation.navigate('Post')}>
					<Image style={styles.iconStyle} source={foodIcon} />
					<Text style={styles.buttonNameStyle}>{foodText}</Text>
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
	questionStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 15,
		alignSelf: 'center',
		marginBottom: 10,
	},
	iconStyle: {
		height: 100,
		width: 100,
		alignSelf: 'center',
		flexGrow: 1,
	},
	buttonNameStyle: {
		alignSelf: 'center',
	},
	servicesStyle: {
		backgroundColor: 'rgba(159, 202, 226, 0.81)',
		borderRadius: 25,
		height: 150,
		width: 150,
		marginLeft: 5,
		marginRight: 5,
		flexGrow: 1,
	},
	vetStyle: {
		height: 150,
		width: 150,
		backgroundColor: 'rgba(188,219,137,1)',
		borderRadius: 25,
		marginLeft: 5,
		marginRight: 5,
		flexGrow: 1,
	},
	accesoriesStyle: {
		height: 150,
		width: 150,
		backgroundColor: 'rgba(255, 154, 162, 0.4);',
		borderRadius: 25,
		marginLeft: 5,
		marginRight: 5,
		flexGrow: 1,
	},
	foodStyle: {
		height: 150,
		width: 150,
		backgroundColor: '#E8916C',
		borderRadius: 25,
		marginLeft: 5,
		marginRight: 5,
		flexGrow: 1,
	},
	generalView: {
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 10,
	},
});
export default withNavigation(HomeScreen);
