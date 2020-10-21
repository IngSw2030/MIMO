import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context as AuthContext } from '../../context/AuthContext';
import { Context as UserContext } from '../../context/UserContext';

const StartScreen = ({ navigation }) => {
	const mimoIcon = require('../../../assets/mimo.png');

	const { getUser } = useContext(UserContext);
	const { tryLocalSignin } = useContext(AuthContext);
	useEffect(() => {
		tryLocalSignin();
		getUser();
	}, []);

	return (
		<View>
			<Image style={styles.logoStyle} source={mimoIcon} />
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.roundedContainerStyle1} onPress={() => navigation.navigate('Signin')}>
					<Text style={styles.buttonTextStyle}>INICIAR SESIÓN ''</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.roundedContainerStyle2} onPress={() => navigation.navigate('Signup')}>
					<Text style={styles.buttonTextStyle}>REGISTRARSE</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Signup')}>
					<Text style={styles.registerEntStyle}>Registrarse como empresa</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Join')}>
					<Text style={styles.registerEntStyle}>Ir al chat</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

StartScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		backgroundColor: '#FFF7BB',
	},
	buttonContainer: {
		justifyContent: 'center',
		marginBottom: 200,
		marginTop: 1,
	},
	logoStyle: {
		marginTop: 60,
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
	},
	buttonTextStyle: {
		fontSize: 30,
		alignSelf: 'center',
		fontWeight: '300',
	},
	registerEntStyle: {
		fontSize: 15,
		marginTop: 25,
		color: '#005CCA',
		alignSelf: 'center',
	},
});
export default StartScreen;
