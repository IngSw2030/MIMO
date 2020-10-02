import React, { useContext, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import {Context as UserContext} from '../../../context/UserContext';

const mimoIcon = require('../../../../assets/mimo.png');

const UserProfileScreen = ({ navigation }) => {

	const {state} = useContext(UserContext);
	
	return (
		<View>
			<View>
				<Image style={styles.photostyle} source={mimoIcon} />
				<Text style={styles.nameStyle}> {state.name} </Text>
			</View>
			<View style={styles.generalView}>
				<TouchableOpacity style={styles.userInfoStyle} onPress={() => navigation.navigate('Pets')}>
					<Text style={styles.textInfoStyle}> Mis mascotas ''</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.userInfoStyle} onPress={() => navigation.navigate('UserSettings')}>
					<Text style={styles.textInfoStyle}> Información ''</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.userInfoStyle} onPress={() => navigation.navigate('Notifications')}>
					<Text style={styles.textInfoStyle}> Notificaciones ''</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	photostyle: {
		height: 180,
		width: 255,
		alignSelf: 'center',
		marginTop: 150,
	},
	nameStyle: {
		fontSize: 18,
		color: 'black',
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	userInfoStyle: {
		backgroundColor: 'rgba(159, 202, 226, 0.81)',
		borderRadius: 25,
		height: 50,
		width: 330,
		margin: 15,
		marginBottom: 25,
		flexGrow: 1,
	},
	textInfoStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		margin: 8,
		alignSelf: 'center',
	},
	generalView: {
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
});
export default UserProfileScreen;
