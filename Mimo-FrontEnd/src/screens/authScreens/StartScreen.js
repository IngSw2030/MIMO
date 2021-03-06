import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context as AuthContext } from '../../context/AuthContext';

const StartScreen = ({ navigation }) => {
	const mimoIcon = require('../../../assets/mimo.png');

	const { tryLocalSignin } = useContext(AuthContext);
	useEffect(() => {
		tryLocalSignin();
	}, []);

	return (
		<View style={styles.screenContainer}>
			<View style={{ flex: 1, justifyContent: 'center', marginTop: 200 }}>
				<Image style={styles.logoStyle} source={mimoIcon} />
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.roundedContainerStyle1} onPress={() => navigation.navigate('Signin')}>
						<Text style={styles.buttonTextStyle}>INICIAR SESIÓN {''}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.roundedContainerStyle2} onPress={() => navigation.navigate('Signup')}>
						<Text style={styles.buttonTextStyle}>REGISTRARSE</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate('Signup', {ent: 1})}>
						<Text style={styles.registerEntStyle}>Registrarse como</Text>
						<Text style={styles.registerEntStyle}>empresa</Text>

					</TouchableOpacity>
				</View>
			</View>
			<Text style={styles.texto}>Zorah Inc 2020</Text>
		</View>
	);
};

StartScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	texto: {
		textAlign: 'center',
		fontSize: 20
	},
	screenContainer: {
		flex: 1,
		backgroundColor: '#FFF7BB',
		alignContent: 'center',
		justifyContent: 'center'
	},
	buttonContainer: {
		justifyContent: 'center',
		marginBottom: 200,
	},
	logoStyle: {
		paddingTop: 200,
		height: 250,
		width: 250,
		alignSelf: 'center',
	},
	roundedContainerStyle1: {
		marginTop: 20,
		alignSelf: 'center',
		backgroundColor: '#88CCF2',
		height: 60,
		width: 280,
		borderRadius: 75,
		justifyContent: 'center',
	},
	roundedContainerStyle2: {
		marginTop: 30,
		alignSelf: 'center',
		backgroundColor: '#E8778B',
		height: 60,
		width: 280,
		borderRadius: 75,
		justifyContent: 'center',
		marginBottom: 10
	},
	buttonTextStyle: {
		fontSize: 30,
		alignSelf: 'center',
		fontWeight: '300',
	},
	registerEntStyle: {
		fontSize: 20,
		marginTop: 0,
		color: '#005CCA',
		alignSelf: 'center',
	},
});
export default StartScreen;
