import React, { useState, useContext, useEffect } from 'react';
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
	const { state, getMyPets } = useContext(PetContext); //state es la lista de perros. Viene del ultimo argumento en PetContext.js
	//Hola leo, seguro te preguntas donde esta la lista de mascotas inicial. Eso se encuentra en PetContext.js
	function petSex(item)
	{
		if(item.gender)
		{
		return(<Text style={styles.petInfo}>Género:Hembra{''}{' '}</Text>);
		}
		else{
			return(<Text style={styles.petInfo}>Género:Macho {''}{' '}</Text>);
		}
	}
	useEffect(() => {
		getMyPets();
	}, [])
	console.log(state.pets);
	return (
		<View style={styles.generalView}>
			<View>
				<Text style={styles.title}>Mis mascotas</Text>
			</View>
			<View style={styles.petsZone}>
				<FlatList
					data={state.pets}
					keyExtractor={pets => pets._id}

					renderItem={({ item }) => {
						return (
							<View style={styles.containerPhoto}>
								<View>
								<Image style={styles.image} source={{ uri: `data:image/gif;base64,${item.photo}` }} />
								</View>
								<View>
									<Text style={styles.petInfo}>
										Nombre: {item.name} {''}{' '}
									</Text>
									<Text style={styles.petInfo}>
										Edad: {item.age} {''}{' '}
									</Text>
										 {petSex(item)}
									
									<Text style={styles.petInfo}>
										Tipo: {item.species} {''}{' '}
									</Text>
								</View>
							</View>
						);
					}}
				/>
			</View>

			<View  >
				<TouchableOpacity onPress={() => navigation.navigate('AddPet')} style={styles.petButtons}>
					<Text style={styles.textButtons}>Agregar una mascota {''}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.petButtons}>
					<Text style={styles.textButtons}>Eliminar una mascota {''}</Text>
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
		marginBottom: 30
	},
	textButtons: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		//backgroundColor: '#DBAB9C'
	},
	generalView: {
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: '#FFF7BB',
		flex:1
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
		
		borderRadius: 360,
		alignSelf:'center',
		alignContent: 'center',
		margin: 7,
	},
	petInfo: {
		fontSize: 10,
		fontWeight: 'bold',
		marginTop: 4,
	},
	petsZone:{
		height:'50%'
	}
});

export default PetsScreen;
