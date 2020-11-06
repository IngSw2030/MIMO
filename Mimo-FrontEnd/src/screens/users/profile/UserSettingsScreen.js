import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity ,ScrollView, Modal} from 'react-native';
import uploadPhoto from '../../../hooks/uploadPhoto';
import { FontAwesome } from '@expo/vector-icons';
import { Context as UserContext } from '../../../context/UserContext';
import { Context as AuthContext } from '../../../context/AuthContext';
import { useDispatch } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';

const UserSettingsScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [buscarImagen] = uploadPhoto();
	const { state: user, updateImage, updateName, updatePhone,update, updateAddress, deleteUser } = useContext(UserContext);
	const[name,setName] = useState(user.name);
	const[sAddress,setAddress] = useState(user.address);
	const[Aphone,setPhone] = useState(user.phone);
	const [imagenA, setImagenA] = useState(user.photo);
	const  [estado,setEstado]= useState(false);
	const { signout } = useContext(AuthContext);
	let imagen = imagenA;


	return (
		<ScrollView style={{ backgroundColor: '#FFF7BB', flex: 1 }}>
			<View style={styles.uploadImageStyle}>
				<TouchableOpacity
					style={styles.iconsStyle}
					onPress={async () => {
						imagen = await buscarImagen();
						await updateImage({ imagen });
						setImagenA(imagen);
					}}
				>
					{imagen ? (
						<Image source={{ uri: `data:image/gif;base64,${imagen}` }} style={styles.image} />
					) : (
							<FontAwesome name='user-circle-o' size={150} color='white' />
						)}
				</TouchableOpacity>
			</View>
			<Text style={styles.name}>{user.name}</Text>
			<Text style ={styles.headers}>Nombre de usuario:</Text>
			<TextInput style={styles.button}
				placeholder='Nombre de usuario'	
				value={name}
				onChangeText={name => setName(name)}
			/>
			<Text style ={styles.headers} >Dirección:</Text>	
			<TextInput style={styles.button}
				placeholder='Dirección'
				value={sAddress}
				onChangeText={sAddress => setAddress(sAddress)}
			/>
			<Text style ={styles.headers}>Número de teléfono:</Text>
			<TextInput style={styles.button}
				keyboardType='number-pad'
				placeholder='Número de teléfono'
				value={Aphone}
				onChangeText={Aphone=> setPhone(Aphone)}
			/>
				
			
		<TouchableOpacity style={styles.confirm} onPress={async() =>{
		await update({name,address:sAddress,phone:Aphone});
		navigation.navigate('UserProfile');
		} 		
		}>
				<Text style={styles.text}>Confirmar</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.closeSession} onPress={() => signout()}>
				<Text style={styles.text}>sign out </Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.text}onPress={()=>setEstado(true)}>
				<Text>Borrar cuenta</Text>
			</TouchableOpacity>
			<Modal
			transparent={true}
			visible={estado}
			>
				<View style ={styles.popUp}>
					<Text style ={styles.text}>¿Seguro desea eliminar su cuenta?</Text>
					<View style={styles.inPopUp} >	
						<Text style={styles.text}>Se borrarán todos los datos asociados a su cuenta asi como los chats y transacciones que haya realizado</Text>
						<View style={{flexDirection:'row'}}>
							<TouchableOpacity style={styles.volverButton} onPress ={()=>setEstado(false)}>
								<Text style={styles.text}>Volver</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.deleButton} onPress={()=>
								{	
									setEstado(false);
									deleteUser();
									signout();
								}
								}>
								<Text style={styles.text} >Si, borrar cuenta</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	deleButton:{
		backgroundColor: '#E8916C',
		height: 55,
		width: 120,
		margin: 15,
		borderRadius: 25,
		marginBottom: 20,
		textAlign:"center"
	},
	volverButton: {
		backgroundColor: '#7E9FD1',
		height: 55,
		width: 120,
		margin: 15,
		borderRadius: 25,
		//alignSelf: 'center',
		marginBottom: 20,
	},
	inPopUp: {
		backgroundColor: "#EEE096",
		marginTop: '5%',
		flex: 1,
		
	},
	popUp:{
		backgroundColor:"#F6BF2F",
		flex:1,
		marginTop: '60%',
		marginBottom: '60%',
		marginLeft: '10%',
		marginRight: '10%',
		borderRadius: 10,

	},
	image: {
		width: 180,
		height: 180,
		borderRadius: 360,
		marginTop: 40,
		alignSelf: 'center',
	},
	headers:{
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'stretch',
		marginLeft:'6%'
	},
	name: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		marginTop: '10%',
		marginBottom: 40,
	},
	button: {
		backgroundColor: '#BCDB89',
		height: 50,
		width: 300,
		margin: 15,
		borderRadius: 25,
		alignSelf: 'center',
		marginBottom: 20,
		fontSize: 20,
		fontWeight: "100",
		textAlign:"center"
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		textAlign:"center",
		marginTop: 5,
	},
	iconsStyle: {
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: '10%',
	},
	uploadImageStyle: {
		width: 350,
		height: 200,
		alignSelf: 'center',
		marginTop: 40,
		borderRadius: 360,
	},
	closeSession: {
		backgroundColor: '#DBAB9C',
		borderRadius: 25,
		height: 50,
		width: 300,
		alignSelf: 'center',
	},
	confirm: {
		backgroundColor: '#98E568',
		borderRadius: 25,
		height: 50,
		width: 300,
		margin: 15,
		marginBottom: 25,
		alignSelf: 'center',
	},
});
export default UserSettingsScreen;
