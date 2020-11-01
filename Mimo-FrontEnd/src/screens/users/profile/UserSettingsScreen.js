import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity ,ScrollView} from 'react-native';
import uploadPhoto from '../../../hooks/uploadPhoto';
import { FontAwesome } from '@expo/vector-icons';
import { Context as UserContext } from '../../../context/UserContext';
import { Context as AuthContext } from '../../../context/AuthContext';
import { useDispatch } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';

const UserSettingsScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [buscarImagen] = uploadPhoto();
	const { state: user, updateImage, updateName, updatePhone, updateAddress, deleteUser } = useContext(UserContext);
	const[name,setName] = useState(user.name);
	const[sAddress,setAddress] = useState(user.address);
	const[Aphone,setPhone] = useState(user.phone);
	const [imagenA, setImagenA] = useState(user.photo);
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

			<TextInput style={styles.button}
				placeholder='Nombre de usuario'	
				value={name}
				onChangeText={name => setName(name)}
			/>
				
			<TextInput style={styles.button}
				placeholder='Dirección'
				value={sAddress}
				onChangeText={sAddress => setAddress(sAddress)}
			/>
			<TextInput style={styles.button}
				//keyboardType='number-pad'
				placeholder='Número de teléfono'
				value={Aphone}
				onChangeText={Aphone=> setPhone(Aphone)}
			/>
				
			{/* <TouchableOpacity
				style={styles.button}
				onPress={() => {
					navigation.navigate('ComFood');
				}}
			>
				<Text style={styles.text}>Comercio History</Text>
			</TouchableOpacity> */}
			{/* <TouchableOpacity
				style={styles.button}
				onPress={() => {
					dispatch({ type: 'server/setUser', data: user.email });
					dispatch({ type: 'server/join', data: user.name });
					navigation.navigate('FriendList');
				}}
			>
				<Text style={styles.text}>Ir al chat</Text>
			</TouchableOpacity> */}
		<TouchableOpacity style={styles.confirm} onPress={async() =>{
	
		await updateAddress({sAddress});
		await updatePhone({Aphone});
		await updateName({name});
		navigation.navigate('UserProfile');

		} 
				
		}>
				<Text style={styles.text}>Confirmar</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.closeSession} onPress={() => signout()}>
				<Text style={styles.text}>sign out (antes correo)</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 150,
		height: 150,
		borderRadius: 360,
		marginTop: 40,
		alignSelf: 'center',
	},
	name: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		marginTop: 10,
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
		fontWeight: 'bold',
		textAlign:'center'
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		marginTop: 7,
	},
	iconsStyle: {
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: 30,
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
		margin: 15,
		marginBottom: 25,
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
