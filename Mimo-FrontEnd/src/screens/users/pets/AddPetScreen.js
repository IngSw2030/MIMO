import React, { useState, useContext } from 'react';
import { Context as PetContext } from '../../../context/PetContext';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import uploadPhoto from '../../../hooks/uploadPhoto';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { back } from 'react-native/Libraries/Animated/src/Easing';

const AddPetScreen = ({ navigation }) => {
	//funcion definida en PetContext.js, es un caso de PetReducer
	const { savePet } = useContext(PetContext);
	const [name, setName] = useState('');
	const [age, setAge] = useState(0);
	const [gender, setGender] = useState(true); //true = hembra false = macho

	const [type, setType] = useState('');
	const [escogerImagen, imagen] = uploadPhoto();

	function verificarMascota() {
		console.log('verificar Mascota');
	}
	return (
		<View style={{ flex: 1, backgroundColor: '#FFF7DB' }}>
			<Text style={styles.title}>Agregar una Mascota</Text>
			<Text style={{ fontSize: 15, margin: '5%' }}>Selecciona un tipo</Text>

			<View style={styles.selectType}>
				<TouchableOpacity style={styles.type} onPress={() => setType('perro')}>
					<MaterialCommunityIcons name='dog' size={50} color='black' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.type} onPress={() => setType('gato')}>
					<MaterialCommunityIcons name='cat' size={50} color='black' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.type} onPress={() => setType('hamster')}>
					<Text>Hamster</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.type} onPress={() => setType('pez')}>
					<MaterialCommunityIcons name='fish' size={50} color='black' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.type} onPress={() => setType('conejo')}>
					<MaterialCommunityIcons name='rabbit' size={50} color='black' />
				</TouchableOpacity>
			</View>

			<View style={styles.textInputView}>
				<TextInput
					style={styles.textInput}
					value={name}
					placeholder='    nombre'
					onChangeText={name => setName(name)}
				/>
				<TextInput style={styles.textInput} value={age} placeholder='    edad' onChangeText={age => setAge(age)} />
			</View>

			<View style={styles.selectType}>
				<TouchableOpacity style={styles.gender} onPress={() => setGender(false)}>
					<Text style={styles.text}>Macho</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.gender} onPress={() => setGender(true)}>
					<Text style={styles.text}>Hembra</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flexDirection: 'row' }}>
				<View>
					<TouchableOpacity style={styles.buttom} onPress={() => verificarMascota()}>
						<Text style={styles.text}>Agregar</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttom} onPress={() => navigation.navigate('Pets')}>
						<Text style={styles.text}>Cancelar</Text>
					</TouchableOpacity>
				</View>

				<View>
					<TouchableOpacity style={styles.iconsStyle} onPress={() => escogerImagen()}>
						{imagen ? (
							<Image source={{ uri: `data:image/gif;base64,${imagen}` }} style={styles.image} />
						) : (
							<FontAwesome name='camera' size={100} color='#D1D1D1' />
						)}
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		marginTop: 70,
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 20,
	},
	text: {
		fontSize: 15,
		fontWeight: 'bold',
		alignSelf: 'center',
		margin: '15%',
	},
	textInput: {
		marginTop: '5%',
		alignSelf: 'center',
		backgroundColor: '#BCDB89',
		width: '80%',
		height: '30%',
		borderRadius: 25,
	},
	textInputView: {
		height: '20%',
	},
	generalView: {
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		//flex: 1,
		backgroundColor: '#FFF7DB',
	},
	type: {
		backgroundColor: '#9FCAE2',
		borderRadius: 25,
		height: 50,
		width: 50,
		margin: 15,
		marginBottom: '5%',
	},
	selectType: {
		alignSelf: 'center',
		flexDirection: 'row',
	},
	gender: {
		backgroundColor: '#BCDB89',
		height: 50,
		width: 100,
		borderRadius: 25,
		margin: '5%',
	},
	buttom: {
		backgroundColor: '#DBAB9C',
		height: 50,
		width: 100,
		borderRadius: 25,
		marginLeft: '20%',
		marginBottom: '5%',
		marginTop: '15%',
	},
	iconsStyle: {
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: 30,
		//marginLeft: '10%'
	},
	image: {
		width: 130,
		height: 130,
		borderRadius: 25,
		alignSelf: 'center',
		marginBottom: '5%',
	},
});

export default AddPetScreen;
