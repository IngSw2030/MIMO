import React, { useState, useContext } from 'react';
import { Context as PetContext } from '../../../context/PetContext';
import { View, Text, Button, StyleSheet, ScrollView, Image, Modal } from 'react-native';
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
	const [imagenA, setImage] = useState();
	const [estado, setEstado] = useState(false);

	const aracnido = require( '../../../../assets/aracnido.png');
    const ave = require( '../../../../assets/ave.png');
    const caracol = require( '../../../../assets/caracol.png');
    const crustaceo = require( '../../../../assets/crustaceo.png');
    const hamster = require( '../../../../assets/hamster.png');
    const serpiente = require( '../../../../assets/serpiente.png');
    const tortuga = require( '../../../../assets/tortuga.png');
    const perro = require( '../../../../assets/perro.png');
    const gato = require( '../../../../assets/gato.png');
    const pez = require( '../../../../assets/pez.png');
    const conejo = require( '../../../../assets/conejo.png');

	const [type, setType] = useState('');
	const [escogerImagen] = uploadPhoto();
	const buttons = [
		{ name: 'dog',source: perro, style:{height: 70, width: 70, alignSelf: 'center'} , type: 'perro', petColor: '#9FCAE2' },
		{ name: 'cat', source: gato, style:{height: 70, width: 70, alignSelf: 'center'}, type: 'gato', petColor: '#BCDB89' },
		{ name: 'fish', source: pez, style:{height: 70, width: 70, alignSelf: 'center'}, type: 'pez', petColor: '#FFAFB6' },
		{ name: 'rabbit', source: conejo,style:{height: 70, width: 70, alignSelf: 'center'}, type: 'conejo', petColor: '#E8916C' },
		{ name: 'hamster', source: hamster,style:{height: 70, width: 70, alignSelf: 'center'}, type: 'hamster', petColor: '#9FCAE2'},
		{ name: 'spider',source: aracnido,style:{height: 70, width: 70, alignSelf: 'center'} , type: 'aracnido', petColor: '#BCDB89' },
		{ name: 'bird', source: ave,style:{height: 70, width: 70, alignSelf: 'center'},  type: 'ave', petColor: '#FFAFB6' },
		{ name: 'snail', source: caracol,style:{height: 70, width: 70, alignSelf: 'center'}, type: 'caracol', petColor: '#E8916C' },
		{ name: 'crab', source: crustaceo,style:{height: 70, width: 70, alignSelf: 'center'}, type: 'crustaceo', petColor: '#9FCAE2' },
		{ name: 'snake', source: serpiente,style:{height: 70, width: 70, alignSelf: 'center'}, type: 'serpiente', petColor: '#BCDB89'  },
		{ name: 'turtle', source: tortuga,style:{height: 70, width: 70, alignSelf: 'center'}, type: 'tortuga', petColor: '#FFAFB6' }
	];
	let imagen = imagenA;


	return (
		<View style={{ flex: 1, backgroundColor: '#FFF7BB' }}>
			<Text style={styles.title}>Agregar una Mascota</Text>
			<Text style={{ fontSize: 22, margin: '5%', fontWeight: 'bold', }}>Selecciona un tipo</Text>

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
								<Image source={item.source} style = {item.style}/>
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
					placeholder='NOMBRE'
					onChangeText={name => setName(name)}
				/>
				<TextInput
					style={styles.textInput}
					keyboardType='numeric'
					value={age}
					placeholder='Edad'
					onChangeText={age => setAge(age)}
				/>
			</View>

			<View style={styles.selectType}>
				<TouchableOpacity style={styles.genderm} onPress={() => setGender(false)}>
					<Text style={styles.text}>Macho {' '}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.genderf} onPress={() => setGender(true)}>
					<Text style={styles.text}>Hembra {' '}</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
				<View style={{ flex: 1 }}>
					<TouchableOpacity
						style={[styles.buttom, { backgroundColor: '#0cd73d' }]}
						onPress={async () => {
							if (name.length > 0 && age.length > 0 && type.length > 0) {
								const numberAge = age * 1;
								await savePet({ name, age: numberAge, gender, species: type, photo: imagenA });
								navigation.navigate('Pets');
							}
							else {
								setEstado(true);
							}
						}}
					>
						<Text style={styles.text}>Guardar {' '}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.buttom, { backgroundColor: '#c0392b' }]} onPress={() => navigation.navigate('Pets')}>
						<Text style={styles.text}>Cancelar {' '}</Text>
					</TouchableOpacity>
				</View>

				<View style={{ flex: 1 }}>
					<TouchableOpacity style={styles.iconsStyle} onPress={async () => {
						imagen = await escogerImagen();
						setImage(imagen);
					}
					}>
						{imagen ? (
							<Image source={{ uri: `data:image/gif;base64,${imagen}` }} style={styles.image} />
						) : (
								<FontAwesome name='camera' size={100} color='black' />
							)}
					</TouchableOpacity>
				</View>
			</View>
			<Modal
				transparent={estado}
				visible={estado}>
				<View style={styles.popUp}>
					<Text style={styles.text}>Advertencia</Text>
					<View style={styles.inPopUp}>
						<Text style={styles.text}>Faltan caracteristicas por llenar</Text>
						<TouchableOpacity style={styles.volverButton} onPress={() => setEstado(false)}>
							<Text style={styles.text}>Volver</Text>
						</TouchableOpacity>
					</View>

				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	volverButton: {
		backgroundColor: '#7E9FD1',
		height: 55,
		width: 120,
		margin: 15,
		borderRadius: 25,
		marginBottom: 20,
	},
	inPopUp: {
		backgroundColor: "#EEE096",
		marginTop: '5%',
		flex: 1,

	},
	popUp: {
		backgroundColor: "#F6BF2F",
		flex: 1,
		marginTop: '60%',
		marginBottom: '60%',
		marginLeft: '10%',
		marginRight: '10%',
		borderRadius: 10,

	},
	title: {
		marginTop: 70,
		fontSize: 30,
		fontWeight: 'bold',
		marginLeft: 20,
	},
	text: {
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: '5%'
	},
	textInput: {
		marginTop: 20,
		alignSelf: 'center',
		backgroundColor: '#BCDB89',
		width: '90%',
		height: 50,
		borderRadius: 25,
		paddingLeft: 20,
		fontSize: 18
	},
	generalView: {
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
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
		width: 170,
		borderRadius: 25,
		margin: 10
	},
	genderf: {
		backgroundColor: '#7E9FD1',
		width: 170,
		height: 50,
		borderRadius: 25,
		margin: 10
	},
	buttom: {
		backgroundColor: '#DBAB9C',
		height: 50,
		width: '100%',
		borderRadius: 25,
		marginLeft: '10%',
		marginTop: '15%',
	},
	iconsStyle: {
		alignSelf: 'center',
		marginTop: 30,
	},
	image: {
		width: 130,
		height: 130,
		borderRadius: 25,
		alignSelf: 'center',
		marginBottom: '5%',
	},
	textInputView: {
		marginBottom: 10
	}
});

export default AddPetScreen;