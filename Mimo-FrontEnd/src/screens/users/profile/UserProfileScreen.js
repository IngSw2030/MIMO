import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button,ScrollView, Modal } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as UserContext } from '../../../context/UserContext';
import { Context as AuthContext } from '../../../context/AuthContext';

const mimoIcon = require('../../../../assets/mimo.png');

const UserProfileScreen = ({ navigation }) => {

	const { state, deleteUser } = useContext(UserContext);
	const  [estado,setEstado]= useState(false);
	const { signout } = useContext(AuthContext);

	return (
		<ScrollView style={{ backgroundColor: '#FFF7BB', flex: 1 }}>

			<View>
				<Image style={styles.photostyle} source={{ uri: `data:image/gif;base64,${state.photo}` }} />
				<Text style={styles.nameStyle}> {state.name} </Text>
			</View>
			<View style={styles.generalView}>
				<TouchableOpacity style={styles.userInfoStyle} onPress={() => navigation.navigate('Pets')}>
					<Text style={styles.textInfoStyle}> Mis mascotas {''}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.userInfoStyle} onPress={() => navigation.navigate('UserSettings')}>
					<Text style={styles.textInfoStyle}> Información {''}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.userInfoStyle} onPress={() => navigation.navigate('Notifications')}>
					<Text style={styles.textInfoStyle}> Notificaciones {''}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.closeSession} onPress={() => signout()}>
				<Text style={styles.textInfoStyle}>Sign Out </Text>
			</TouchableOpacity>
			</View>
			
			<TouchableOpacity style={styles.text}onPress={()=>setEstado(true)}>
				<Text style={{color: '#e05046', fontSize: 18}}>Borrar cuenta</Text>
			</TouchableOpacity>
			<Modal
			transparent={true}
			visible={estado}
			>
				<View style ={styles.popUp}>
					<Text style ={styles.text}>¿Seguro desea eliminar su cuenta?</Text>
					<View style={styles.inPopUp} >	
						<Text style={{fontSize: 16, textAlign: 'center'}}>Se borrarán todos los datos asociados a su cuenta asi como los chats y transacciones que haya realizado</Text>
						<View style={{flexDirection:'row'}}>
							<TouchableOpacity style={styles.volverButton} onPress ={()=>setEstado(false)}>
								<Text style={{fontSize: 16, textAlign: 'center'}}>Volver</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.deleButton} onPress={()=>
								{	
									setEstado(false);
									deleteUser();
									signout();
								}
								}>
								<Text style={{fontSize: 16, textAlign: 'center'}} >Si, borrar cuenta</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	photostyle: {
		height: 220,
		width: 220,
		alignSelf: 'center',
		marginTop: '16%',
		marginBottom:'5%',
		borderRadius: 360,
	},
	nameStyle: {
		fontSize: 32,
		color: 'black',
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	userInfoStyle: {
		backgroundColor: '#B0EFEF',
		borderRadius: 25,
		height: 50,
		width: 330,
		margin: 10,
		flexGrow: 1,
	},
	closeSession: {
		backgroundColor: '#DBAB9C',
		borderRadius: 25,
		height: 50,
		width: 330,
		margin: 10,
		marginBottom: 25,
		flexGrow: 1,
	},
	
	textInfoStyle: {
		fontSize: 22,
		fontWeight: '300',
		margin: 8,
		alignSelf: 'center',
	},
	generalView: {
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		flex:1
	},
	inPopUp: {
		backgroundColor: "#EEE096",
		marginTop: '5%',
		flex: 1,
		borderRadius: 10
		
	},
	popUp:{
		backgroundColor:"#F6BF2F",
		flex:1,
		marginTop: '60%',
		marginBottom: '70%',
		marginLeft: '10%',
		marginRight: '10%',
		borderRadius: 10,

	},
	text: {
		fontSize: 28,
		fontWeight: 'bold',
		alignSelf: 'center',
		textAlign:"center",
		marginTop: 5,
	},
	deleButton:{
		backgroundColor: '#E8916C',
		height: 40,
		width: 130,
		margin: 15,
		borderRadius: 25,
		marginBottom: 20,
		justifyContent:"center"
	},
	volverButton: {
		backgroundColor: '#7E9FD1',
		height: 40,
		width: 130,
		margin: 15,
		borderRadius: 25,
		justifyContent:"center",
		//alignSelf: 'center',
		marginBottom: 20,
	},
});
export default UserProfileScreen;
