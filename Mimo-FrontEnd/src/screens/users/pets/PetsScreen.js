import React, { useState, useContext, useEffect } from 'react';
import { Context as PetContext } from '../../../context/PetContext';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	Image,
} from 'react-native';
import uploadPhoto from '../../../hooks/uploadPhoto';
import { Feather } from '@expo/vector-icons';

const PetsScreen = ({ navigation }) => {
	const { state, getMyPets, deletePet } = useContext(PetContext); //state es la lista de perros. Viene del ultimo argumento en PetContext.js
	//Hola leo, seguro te preguntas donde esta la lista de mascotas inicial. Eso se encuentra en PetContext.js
	function petSex(item) {
		if (item.gender) {
			return (<Text style={styles.petInfo}>Género:Hembra{''}{' '}</Text>);
		}
		else {
			return (<Text style={styles.petInfo}>Género:Macho {''}{' '}</Text>);
		}
	}
	useEffect(() => {
		getMyPets();
	}, [])
	return (
		<View style={styles.generalView}>
			<Text style={styles.title}>Mis mascotas {' '}</Text>
			<View style={styles.petsZone}>
				<FlatList
					data={state.pets}
					keyExtractor={pets => pets._id}

					renderItem={({ item }) => {
						return (
							<View style={styles.containerPhoto}>
								<Image style={styles.image} source={{ uri: `data:image/gif;base64,${item.photo}` }} />
								<View style={{ flex: 1 }}>
									<Text style={styles.petInfo}>
										Nombre: {item.name} {' '}
									</Text>
									<Text style={styles.petInfo}>
										Edad: {item.age} {' '}
									</Text>
									{petSex(item)}

									<Text style={styles.petInfo}>
										Tipo: {item.species} {' '}
									</Text>
								</View>
								<View style={{ margin: 5 }}>
									<TouchableOpacity
										onPress={() => deletePet({ id: item._id })}
									>
										<Feather name="x-circle" size={28} color="black" />
									</TouchableOpacity>
								</View>
							</View>
						);
					}}
				/>
			</View>
			<TouchableOpacity onPress={() => navigation.navigate('AddPet')} style={styles.petButtons}>
				<Text style={styles.textButtons}>Agregar una mascota {' '}</Text>
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	title: {
		marginTop: '10%',
		fontSize: 40,
		fontWeight: 'bold',
		marginLeft: 20,
		marginBottom: 30
	},
	textButtons: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	generalView: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: '#FFF7BB',
		flex: 1
	},
	petButtons: {
		backgroundColor: 'rgba(159, 202, 226, 0.81)',
		borderRadius: 25,
		height: 50,
		width: '80%',
		margin: 15,
		justifyContent: 'center'
	},
	container: {
		height: 75,
		width: 100,
		backgroundColor: '#BCDB89',
		marginBottom: 5,
		marginLeft: 15,
	},
	containerPhoto: {
		height: 110,
		width: '85%',
		backgroundColor: '#BCDB89',
		marginBottom: 15,
		alignSelf: 'center',
		flexDirection: 'row',
		borderRadius: 20,
	},
	image: {
		height: 90,
		width: 90,
		borderRadius: 360,
		alignSelf: 'center',
		margin: 7,
	},
	petInfo: {
		fontSize: 15,
		fontWeight: 'bold',
		marginTop: 4,
	},
	petsZone: {
		flex: 1,
		flexDirection: 'column',
		width: '100%'
	}
});

export default PetsScreen;
