import React, { useContext, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as UserContext } from '../../../context/UserContext';

const mimoIcon = require('../../../../assets/mimo.png');

const UserProfileScreen = ({ navigation }) => {

	const { state } = useContext(UserContext);

	return (
		<View style={{ backgroundColor: '#FFF7BB', flex: 1 }}>

			<View>
				<Image style={styles.photostyle} source={{ uri: `data:image/gif;base64,${state.photo}` }} />
				<Text style={styles.nameStyle}> {state.name} </Text>
			</View>
			<Button
				onPress={() => navigation.navigate('comercHome')}
				title='ir a comercio'
			/>
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
		width: 180,
		alignSelf: 'center',
		marginTop: '20%',
		marginBottom:'20%',
		borderRadius: 360,
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
	closeSession: {
		backgroundColor: '#DBAB9C',
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
		flex:1
	},
});
export default UserProfileScreen;
