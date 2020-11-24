import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as ServiceContext } from '../../context/ServiceContext';
import uploadPhoto from '../../hooks/uploadPhoto';
import { FontAwesome } from '@expo/vector-icons';
import { navigate } from '../../navigationRef';

const ComAddServiceScreen = ({ navigation }) => {
	const { saveService } = useContext(ServiceContext);

	const categoria = navigation.getParam('categoria');
	const [nombre, setNombre] = useState('');
	const [precioMax, setPrecioMax] = useState('');
	const [precioMin, setPrecioMin] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [foto, setFoto] = useState('');

	const [buscarImagen] = uploadPhoto();
	return (
		<View style={styles.pageStyle}>
			<View>
				<TouchableOpacity
					style={styles.iconsStyle}
					onPress={async () => {
						const imagen = await buscarImagen();
						setFoto(imagen);
					}}
				>
					{foto ? (
						<Image source={{ uri: `data:image/gif;base64,${foto}` }} style={styles.image} />
					) : (
						<FontAwesome name='camera' size={130} color='#000000' style={{ marginLeft: '20%' }} />
					)}
				</TouchableOpacity>
			</View>

			<View style={styles.roundedContainerStyle}>
				<Text style={styles.inputStyle}>{categoria}</Text>
			</View>
			<View style={styles.roundedContainerStyle}>
				<TextInput
					
					placeholder='Nombre'
					placeholderTextColor='#000'
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.inputStyle}
					value={nombre}
					onChangeText={newNombre => setNombre(newNombre)}
				/>
			</View>
			<View style={styles.roundedContainerStyle}>
				<TextInput
					keyboardType = {'numeric'}
					placeholder='Precio Minimo' 
					placeholderTextColor='#000'
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.inputStyle}
					value={precioMin}
					onChangeText={newPrecioMin => setPrecioMin(newPrecioMin)}
				/>
			</View>
			<View style={styles.roundedContainerStyle}>
				<TextInput
					keyboardType = {'numeric'}
					placeholder='Precio Máximo'
					placeholderTextColor='#000'
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.inputStyle}
					value={precioMax}
					onChangeText={newPrecioMax => setPrecioMax(newPrecioMax)}
				/>
			</View>
			<View style={styles.roundedContainerStyle}>
				<TextInput
					placeholder='Descripción'
					placeholderTextColor='#000'
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.inputStyle}
					value={descripcion}
					onChangeText={newDescripcion => setDescripcion(newDescripcion)}
				/>
			</View>

			<View style={{ flexDirection: 'row' }}>
				<View>
					<TouchableOpacity
						style={styles.buttom}
						onPress={() => {
							const numberPriceMin = precioMin * 1;
							const numberPriceMax = precioMax * 1;
							saveService({
								category: categoria,
								name: nombre,
								priceMin: numberPriceMin,
								priceMax: numberPriceMax,
								photo: foto,
								description: descripcion,
							});
							console.log('Termina el save');
							navigate('ComService');
						}}
					>
						<Text style={styles.text}>Agregar</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttom} onPress={() => navigate('ComService')}>
						<Text style={styles.text}>Cancelar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	roundedContainerStyle: {
		marginTop: 10,
		marginLeft: 30,
		backgroundColor: '#88CCF2',
		height: 42,
		width: 320,
		borderRadius: 75,
		justifyContent: 'center',
	},
	inputStyle: {
		color: '#000',
		fontSize: 18,
		marginLeft: 15,
		alignSelf: 'center',
	},
	type: {
		backgroundColor: '#9FCAE2',
		borderRadius: 25,
		height: 50,
		width: 50,
		margin: 10,
		//marginBottom: '5%',
	},
	selectType: {
		alignSelf: 'center',
		flexDirection: 'row',
	},
	iconsStyle: {
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: 30,
		height: 200,
		width: 200,
		//marginLeft: '25%'
	},
	image: {
		width: 200,
		height: 200,
		borderRadius: 25,
		alignSelf: 'center',
		marginBottom: '5%',
	},
	buttom: {
		backgroundColor: '#DBAB9C',
		height: 50,
		width: 130,
		borderRadius: 25,
		marginLeft: '20%',
		marginTop: '2%',
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		padding: 9,
	},
	pageStyle: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#EDDF98',
	},
});

export default withNavigation(ComAddServiceScreen);
