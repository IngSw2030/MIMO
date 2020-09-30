import React, { useState, useContext } from 'react';
import { Context as PetContext } from '../../../context/PetContext';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	Image,
	SafeAreaView,
	ScrollView,
	StatusBar,
} from 'react-native';
import uploadPhoto from '../../../hooks/uploadPhoto';
import { FontAwesome } from '@expo/vector-icons';

const PetsScreen = ({ navigation }) => {
	const [escogerImagen, imagen] = uploadPhoto();
	const { state: listaDeMascotas } = useContext(PetContext); //state es la lista de perros. Viene del ultimo argumento en PetContext.js
	//Hola leo, seguro te preguntas donde esta la lista de mascotas inicial. Eso se encuentra en PetContext.js

	return (
		<View style={styles.generalView}>
			<View>
				<Text style={styles.title}>Mis mascotas</Text>
			</View>
			<View>
				<FlatList
					keyExtractor={pet => pet.name}
					data={listaDeMascotas}
					renderItem={({ item }) => {
						return (
							<View style={styles.containerPhoto}>
								<View>
									<TouchableOpacity style={styles.image} onPress={() => escogerImagen()}>
										{imagen ? (
											<Image source={{ uri: `data:image/gif;base64,${imagen}` }} style={styles.image} />
										) : (
											<FontAwesome style={styles.image} name='user-circle-o' size={80} color='white' />
										)}
									</TouchableOpacity>
								</View>
								<View>
									<Text style={styles.petInfo}>
										Nombre: {item.name} {''}{' '}
									</Text>
									<Text style={styles.petInfo}>
										Edad: {item.age} {''}{' '}
									</Text>
									<Text style={styles.petInfo}>
										Genero: {item.gender} {''}{' '}
									</Text>
									<Text style={styles.petInfo}>
										Tipo: {item.type} {''}{' '}
									</Text>
								</View>
							</View>
						);
					}}
				/>
			</View>

			<View>
				<TouchableOpacity onPress={() => navigation.navigate('AddPet')} style={styles.petButtons}>
					<Text style={styles.textButtons}>Agregar una mascota ''</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.petButtons}>
					<Text style={styles.textButtons}>Eliminar una mascota ''</Text>
				</TouchableOpacity>
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
	textButtons: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		//backgroundColor: '#DBAB9C'
	},
	generalView: {
		height: 350,
		marginTop: 20,
		marginBottom: 20,
		marginHorizontal: 20,
		alignSelf: 'center',
	},
	petButtons: {
		backgroundColor: 'rgba(159, 202, 226, 0.81)',
		borderRadius: 25,
		height: 40,
		width: 300,
		margin: 15,
	},
	container: {
		height: 75,
		width: 100,
		backgroundColor: '#BCDB89',
		marginBottom: 5,
		marginLeft: 15,
	},
	containerPhoto: {
		height: 100,
		width: 300,
		backgroundColor: '#BCDB89',
		marginBottom: 10,
		marginLeft: 10,
		flexDirection: 'row',
		borderRadius: 20,
		//justifyContent:'space-between'
	},
	image: {
		height: 80,
		width: 80,
		marginBottom: 3,
		borderRadius: 360,
		alignContent: 'center',
		margin: 2,
	},
	petInfo: {
		fontSize: 10,
		fontWeight: 'bold',
		marginTop: 4,
	},
});

export default PetsScreen;
