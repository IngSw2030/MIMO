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
	const [age, setAge] = useState('');
	const [gender, setGender] = useState(true); //true = hembra false = macho
	const[imagenA,setImage] = useState();

	const [type, setType] = useState('');
	const [escogerImagen] = uploadPhoto();
	const buttons = [
		{ name: 'dog', size: 60, color: 'black', type: 'perro', petColor: '#9FCAE2' },
		{ name: 'cat', size: 60, color: 'black', type: 'gato', petColor: '#BCDB89' },
		{ name: 'fish', size: 60, color: 'black', type: 'pez', petColor: '#FFAFB6' },
		{ name: 'rabbit', size: 60, color: 'black', type: 'conejo', petColor: '#E8916C' }
	];
	let imagen=imagenA;


	return (
		<View style={{ flex: 1, backgroundColor: '#FCF4CB' }}>
			<Text style={styles.title}>Agregar una Mascota</Text>
			<Text style={{ fontSize: 18, margin: '5%', fontWeight: 'bold', }}>Selecciona un tipo</Text>

			<View>
				<FlatList
					style={styles.selectType}
					showsHorizontalScrollIndicator={false}
					data={buttons}
					keyExtractor={item => item.type}
					horizontal={true}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity style={{ backgroundColor: item.petColor, borderRadius: 50, margin: 10, marginTop: 5 }} onPress={() => setType(item.type)}>
								<MaterialCommunityIcons name={item.name} size={item.size} color={item.color} />
							</TouchableOpacity>
						);
					}
					}
				/>
			</View>


			<View style={styles.textInputView}>
				<TextInput
					style={styles.textInput}
					value={name}
					placeholder='		NOMBRE'
					onChangeText={name => setName(name)}
				/>
				<TextInput
					style={styles.textInput}
					keyboardType='numeric'
					value={age}
					placeholder='		Edad'
					onChangeText={age => setAge(age)}
				/>
			</View>

			<View style={styles.selectType}>
				<TouchableOpacity style={styles.genderm} onPress={() => setGender(false)}>
					<Text style={styles.text}>Macho {''}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.genderf} onPress={() => setGender(true)}>
					<Text style={styles.text}>Hembra {''}</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flexDirection: 'row' }}>
				<View>
					<TouchableOpacity
						style={styles.buttom}
						onPress={async () => {
							if (name.length > 0 && age.length > 0 && type.length > 0) {
								const numberAge = age * 1;
								await savePet({ name, numberAge, gender, species: type,photo:imagenA });
								navigation.navigate('Pets');
							}
							else {
								<Text>Faltan caracteristicas por llenar</Text>
							}
						}}
					>
						<Text style={styles.text}>Agregar {''}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttom} onPress={() => navigation.navigate('Pets')}>
					<Text style={styles.text}>Cancelar {''}</Text>
					</TouchableOpacity>
				</View>

				<View>
					<TouchableOpacity style={styles.iconsStyle} onPress={async () => {
							imagen = await escogerImagen();
							setImage(imagen);
						}
					}>
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
		fontSize: 30,
		fontWeight: 'bold',
		marginLeft: 20,
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		alignSelf: 'center',
		marginTop:'9%'
		//margin: '5%',
		//padding: 15,
	},
	textInput: {
		marginTop: 20,
		alignSelf: 'center',
		backgroundColor: '#BCDB89',
		width: '90%',
		//height: '50%',
		height: 50,
		borderRadius: 25,
	},
	textInputView: {
		//height: '20%',
		//flex: 1
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
		margin: 15,

	},
	selectType: {
		alignSelf: 'center',
		flexDirection: 'row',
		alignContent: "space-between",
		
	},
	TypeText: {
		marginLeft: 70
	},
	genderm: {
		backgroundColor: '#E8916C',
		height: 50,
		//width: 100,
		borderRadius: 25,
		margin: '5%',
		marginLeft:'10%'
	},
	genderf: {
		backgroundColor: '#7E9FD1',
		height: 50,
		//width: 100,
		borderRadius: 25,
		margin: '5%',
	},
	buttom: {
		backgroundColor: '#DBAB9C',
		height: 50,
		width: 150,
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